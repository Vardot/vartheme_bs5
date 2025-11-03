!(function ($, Drupal) {
  Drupal.behaviors.varbaseHeroSliderVimeoVideo = {
    attach(context) {
      const mediaSliders = $('.js-varbase-heroslider', context);
      (mediaSliders.on('slide.bs.carousel', function (event) {
        const allVideos = $(this)
          .find('.carousel-item')
          .find('.varbase-video-player iframe[src*="oembed"][src*="vimeo"]');
        allVideos.each(function () {
          $(this).hide();
          this.contentWindow.postMessage('pause', '*');
        });
      }),
        mediaSliders.on('slid.bs.carousel', function (event) {
          const currentVideo = $(this)
            .find('.carousel-item.active', context)
            .find(
              '.varbase-video-player iframe[src*="oembed"][src*="vimeo"]',
              context,
            );
          if (currentVideo.length > 0) {
            currentVideo.show();
            currentVideo.get(0).contentWindow.postMessage('play', '*');
          } else {
            mediaSliders.carousel('cycle');
          }
        }));
      const firstIframeVideo = mediaSliders
        .find('.carousel-item', context)
        .first()
        .find(
          '.varbase-video-player iframe[src*="oembed"][src*="vimeo"]',
          context,
        );
      function vimeoActionProcessor(e) {
        e.data === 'endedVimeo' || e.message === 'endedVimeo'
          ? $('.js-varbase-heroslider .slide').length > 1
            ? mediaSliders.carousel('next')
            : firstIframeVideo.get(0).contentWindow.postMessage('play', '*')
          : (e.data !== 'playingVimeo' && e.message !== 'playingVimeo') ||
            mediaSliders.carousel('pause');
      }
      (firstIframeVideo.length > 0 &&
        firstIframeVideo.on('load', function () {
          firstIframeVideo.hasClass('first-slide-played') ||
            (mediaSliders.carousel('pause'),
            $('.js-varbase-heroslider .carousel-item').length === 1 &&
              firstIframeVideo.get(0).contentWindow.postMessage('loop', '*'),
            $(this).get(0).contentWindow.postMessage('play', '*'),
            firstIframeVideo.addClass('first-slide-played'));
        }),
        window.addEventListener
          ? window.addEventListener('message', vimeoActionProcessor, !1)
          : window.attachEvent('onmessage', vimeoActionProcessor));
    },
  };
})(jQuery, Drupal);
