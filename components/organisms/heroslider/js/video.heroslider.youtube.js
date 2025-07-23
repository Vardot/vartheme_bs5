!function($, Drupal) {
  Drupal.behaviors.varbaseHeroSliderYoutubeVideo = {
    attach(context) {
      const mediaSliders = $(".js-varbase-heroslider", context);
      mediaSliders.on("slide.bs.carousel", (function(event) {
        const currentVideo = $(this).find(".carousel-item.active", context).find('.varbase-video-player iframe[src*="youtube.com"]', context);
        currentVideo.length > 0 && currentVideo.get(0).contentWindow.postMessage("pause", "*");
      })), mediaSliders.on("slid.bs.carousel", (function(event) {
        const currentVideo = $(this).find(".carousel-item.active", context).find('.varbase-video-player iframe[src*="youtube.com"]', context);
        currentVideo.length > 0 ? currentVideo.get(0).contentWindow.postMessage("play", "*") : mediaSliders.carousel("cycle");
      }));
      const firstIframeVideo = $(".js-varbase-heroslider").find(".carousel-item").first().find('.varbase-video-player iframe[src*="youtube.com"]', context);
      function youtubeActionProcessor(e) {
        "endedYoutube" === e.data || "endedYoutube" === e.message ? $(".js-varbase-heroslider").length > 1 ? mediaSliders.carousel("next") : firstIframeVideo.get(0).contentWindow.postMessage("play", "*") : "playingYoutube" !== e.data && "playingYoutube" !== e.message || mediaSliders.carousel("pause");
      }
      firstIframeVideo.length > 0 && firstIframeVideo.on("load", (function() {
        mediaSliders.carousel("pause"), $(this).get(0).contentWindow.postMessage("play", "*");
      })), window.addEventListener ? window.addEventListener("message", youtubeActionProcessor, !1) : window.attachEvent("onmessage", youtubeActionProcessor);
    }
  };
}(jQuery, Drupal);