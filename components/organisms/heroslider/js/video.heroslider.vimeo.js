!function($, Drupal) {
  Drupal.behaviors.varbaseHeroSliderVimeoVideo = {
    attach(context) {
      const mediaSliders = $(".js-varbase-heroslider", context);
      mediaSliders.on("slide.bs.carousel", (function(event) {
        const currentVideo = $(this).find(".carousel-item.active", context).find('.varbase-video-player iframe[src*="vimeo.com"]', context);
        currentVideo.length > 0 && currentVideo.get(0).contentWindow.postMessage("pause", "*");
      })), mediaSliders.on("slid.bs.carousel", (function(event) {
        const currentVideo = $(this).find(".carousel-item.active", context).find('.varbase-video-player iframe[src*="vimeo.com"]', context);
        currentVideo.length > 0 ? currentVideo.get(0).contentWindow.postMessage("play", "*") : mediaSliders.carousel("cycle");
      }));
      const firstIframeVideo = mediaSliders.find(".carousel-item", context).first().find('.varbase-video-player iframe[src*="vimeo.com"]', context);
      function vimeoActionProcessor(e) {
        "endedVimeo" === e.data || "endedVimeo" === e.message ? $(".js-varbase-heroslider .slide").length > 1 ? mediaSliders.carousel("next") : firstIframeVideo.get(0).contentWindow.postMessage("play", "*") : "playingVimeo" !== e.data && "playingVimeo" !== e.message || mediaSliders.carousel("pause");
      }
      firstIframeVideo.length > 0 && firstIframeVideo.on("load", (function() {
        firstIframeVideo.hasClass("first-slide-played") || (mediaSliders.carousel("pause"), 
        1 === $(".js-varbase-heroslider .carousel-item").length && firstIframeVideo.get(0).contentWindow.postMessage("loop", "*"), 
        $(this).get(0).contentWindow.postMessage("play", "*"), firstIframeVideo.addClass("first-slide-played"));
      })), window.addEventListener ? window.addEventListener("message", vimeoActionProcessor, !1) : window.attachEvent("onmessage", vimeoActionProcessor);
    }
  };
}(jQuery, Drupal);