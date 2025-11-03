!(function ($, Drupal) {
  Drupal.behaviors.varbaseHeroSliderLocalVideo = {
    attach(context) {
      $(window).on('load', function () {
        const mediaSliders = $('.js-varbase-heroslider', context);
        if (
          (mediaSliders.on('slide.bs.carousel', function (event) {
            const currentSlideObject = $(this).find('.carousel-item.active');
            const nextSlideObject = $(this).find('.carousel-item:not(.active)');
            const currentVideo = currentSlideObject.find(
              '.varbase-video-player video',
              context,
            );
            const nextVideo = nextSlideObject.find(
              '.varbase-video-player video',
              context,
            );
            if (
              (currentVideo.length > 0 && currentVideo.get(0).pause(),
              nextVideo.length > 0)
            ) {
              const nextPlayer = nextVideo.get(0);
              let nextPlayPromise;
              ((nextPlayer.muted = !0),
                (nextPlayer.onpause = onPause),
                (nextPlayer.onended = onFinish),
                (nextPlayer.onplay = onPlayProgress),
                (nextPlayPromise = nextPlayer.play()),
                nextPlayPromise &&
                  Object.keys(nextPlayPromise).length === 0 &&
                  nextPlayPromise.constructor === Object &&
                  nextPlayPromise
                    .then((_) => {
                      nextPlayer.pause();
                    })
                    .catch((error) => {}));
            } else mediaSliders.carousel('cycle');
          }),
          $('js-varbase-heroslider', context).each(function () {
            const firstVideo = $(this)
              .find('.carousel-item.active')
              .find('.varbase-video-player video', context);
            if (firstVideo.length > 0) {
              mediaSliders.carousel('pause');
              const firstVideoPlayer = firstVideo.get(0);
              let firstVideoPlayPromise;
              ((firstVideoPlayer.muted = !0),
                (firstVideoPlayPromise = firstVideoPlayer.play()),
                firstVideoPlayPromise &&
                  Object.keys(firstVideoPlayPromise).length === 0 &&
                  firstVideoPlayPromise.constructor === Object &&
                  firstVideoPlayPromise
                    .then((_) => {
                      firstVideoPlayer.pause();
                    })
                    .catch((error) => {}),
                firstVideo.on('ended', function () {
                  mediaSliders.carousel('cycle');
                }));
            }
          }),
          $('.js-varbase-heroslider', context).each(function () {
            const firstVideo = $(this)
              .find('.carousel-item')
              .find('.varbase-video-player video', context);
            if (firstVideo.length > 0) {
              const firstVideoPlayer = firstVideo.get(0);
              let firstVideoPlayPromise;
              ((firstVideoPlayer.muted = !0),
                (firstVideoPlayer.loop = !0),
                (firstVideoPlayPromise = firstVideoPlayer.play()),
                firstVideoPlayPromise &&
                  Object.keys(firstVideoPlayPromise).length === 0 &&
                  firstVideoPlayPromise.constructor === Object &&
                  firstVideoPlayPromise
                    .then((_) => {
                      firstVideoPlayer.pause();
                    })
                    .catch((error) => {}));
            }
          }),
          $('js-varbase-heroslider .varbase-video-player video', context)
            .length > 0)
        ) {
          const player = $(
            'js-varbase-heroslider .varbase-video-player video',
            context,
          ).get(0);
          ((player.onpause = onPause),
            (player.onended = onFinish),
            (player.onplay = onPlayProgress));
        }
        function onPause() {
          mediaSliders.carousel('next');
        }
        function onFinish() {
          mediaSliders.carousel('cycle');
        }
        function onPlayProgress() {
          mediaSliders.carousel('pause');
        }
      });
    },
  };
})(jQuery, Drupal);
