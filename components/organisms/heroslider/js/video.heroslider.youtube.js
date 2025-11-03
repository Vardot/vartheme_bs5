!(function ($, Drupal) {
  Drupal.behaviors.varbaseHeroSliderYoutubeVideo = {
    attach(context) {
      const mediaSliders = $('.js-varbase-heroslider', context);
      (mediaSliders.on('slide.bs.carousel', function (event) {
        const allVideos = $(this)
          .find('.carousel-item')
          .find('.varbase-video-player iframe[src*="oembed"][src*="youtube"]');
        allVideos.each(function () {
          $(this).hide();
          this.contentWindow.postMessage('pause', '*');
        });
      }),
        mediaSliders.on('slid.bs.carousel', function (event) {
          const currentVideo = $(this)
            .find('.carousel-item.active', context)
            .find(
              '.varbase-video-player iframe[src*="oembed"][src*="youtube"]',
              context,
            );
          if (currentVideo.length > 0) {
            currentVideo.show();
            currentVideo.get(0).contentWindow.postMessage('play', '*');
          } else {
            mediaSliders.carousel('cycle');
          }
        }));
      const firstIframeVideo = $('.js-varbase-heroslider')
        .find('.carousel-item')
        .first()
        .find(
          '.varbase-video-player iframe[src*="oembed"][src*="youtube"]',
          context,
        );
      function youtubeActionProcessor(e) {
        e.data === 'endedYoutube' || e.message === 'endedYoutube'
          ? $('.js-varbase-heroslider').length > 1
            ? mediaSliders.carousel('next')
            : firstIframeVideo.get(0).contentWindow.postMessage('play', '*')
          : (e.data !== 'playingYoutube' && e.message !== 'playingYoutube') ||
            mediaSliders.carousel('pause');
      }
      (firstIframeVideo.length > 0 &&
        firstIframeVideo.on('load', function () {
          (mediaSliders.carousel('pause'),
            $(this).get(0).contentWindow.postMessage('play', '*'));
        }),
        window.addEventListener
          ? window.addEventListener('message', youtubeActionProcessor, !1)
          : window.attachEvent('onmessage', youtubeActionProcessor));
    },
  };
})(jQuery, Drupal);
