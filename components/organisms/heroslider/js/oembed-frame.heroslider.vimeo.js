const tag = document.createElement("script");

tag.src = "//player.vimeo.com/api/player.js";

const firstScriptTag = document.getElementsByTagName("script")[0];

var fn;

firstScriptTag.parentNode.insertBefore(tag, firstScriptTag), fn = function() {
  document.querySelector("iframe").setAttribute("id", "media-oembed-iframe");
  let vimeoPlayer, playerConfgured = !1, videoLoop = !1;
  function actionProcessor(evt) {
    if ("play" === evt.data) {
      if (!playerConfgured) {
        const vimeoIframe = document.querySelector('iframe[src*="vimeo.com"]'), vimeoOptions = {
          background: !0,
          autoplay: !0,
          muted: !0,
          controls: !1
        };
        vimeoPlayer = new window.Vimeo.Player(vimeoIframe, vimeoOptions), vimeoPlayer.setVolume(0), 
        vimeoPlayer.setLoop(videoLoop), vimeoPlayer.on("ended", (function() {
          window.parent.postMessage("endedVimeo", "*"), vimeoPlayer.pause();
        })), vimeoPlayer.on("play", (function() {
          window.parent.postMessage("playingVimeo", "*");
        })), playerConfgured = !0;
      }
      vimeoPlayer.ready().then((function() {
        vimeoPlayer.getPaused().then((function(paused) {
          paused && vimeoPlayer.play();
        }));
      }));
    } else "pause" === evt.data ? playerConfgured && vimeoPlayer.pause() : "loop" === evt.data && (videoLoop = !0);
  }
  window.addEventListener ? window.addEventListener("message", actionProcessor, !1) : window.attachEvent("onmessage", actionProcessor);
}, "loading" !== document.readyState ? fn() : document.addEventListener ? document.addEventListener("DOMContentLoaded", fn) : document.attachEvent("onreadystatechange", (function() {
  "loading" !== document.readyState && fn();
}));