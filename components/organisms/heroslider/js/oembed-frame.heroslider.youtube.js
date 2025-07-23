const tag = document.createElement("script");

tag.src = "//www.youtube.com/player_api";

const firstScriptTag = document.getElementsByTagName("script")[0];

var fn;

firstScriptTag.parentNode.insertBefore(tag, firstScriptTag), fn = function() {
  const mediaIframe = document.querySelector("iframe");
  mediaIframe.setAttribute("id", "media-oembed-iframe"), mediaIframe.style.opacity = "0", 
  document.body.style.backgroundColor = "#000000";
  let youtubePlayer, playerConfgured = !1;
  function actionProcessor(evt) {
    if ("play" === evt.data) {
      const youtubeIframe = document.querySelector('iframe[src*="youtube.com"]');
      if (void 0 !== youtubeIframe && void 0 !== youtubeIframe.src) if (playerConfgured) "function" == typeof youtubePlayer.playVideo && youtubePlayer.playVideo(); else {
        let youtubeURL = String(youtubeIframe.src);
        youtubeURL = youtubeURL.replace(/autoplay=0/gi, "autoplay=1"), youtubeURL = youtubeURL.replace(/controls=1/gi, "controls=0"), 
        youtubeURL += "&controls=0", youtubeURL += "&enablejsapi=1", youtubeURL += "&showinfo=0", 
        youtubeURL += "&modestbranding=1", youtubeURL += "&loop=1", youtubeURL += "&fs=1", 
        youtubeURL += "&cc_load_policy=1", youtubeURL += "&iv_load_policy=1", youtubeURL += "&volume=0", 
        youtubeURL += "&rel=0", youtubeIframe.src = youtubeURL, youtubeURL = void 0, youtubePlayer = new window.YT.Player(youtubeIframe.id, {
          playerVars: {
            autoplay: 1,
            controls: 0,
            showinfo: 0,
            modestbranding: 1,
            loop: 1,
            fs: 0,
            autohide: 0,
            rel: 0
          },
          events: {
            onReady: onPlayerReady,
            onStateChange: onPlayerStateChange
          }
        }), playerConfgured = !0;
      }
    } else "pause" === evt.data && playerConfgured && (youtubePlayer.pauseVideo(), youtubePlayer.isPlaying = !1);
  }
  function onPlayerReady(event) {
    event.target.mute(), event.target.setVolume(0), event.target.playVideo();
  }
  function onPlayerStateChange(event) {
    event.data === window.YT.PlayerState.BUFFERING ? mediaIframe.style.opacity = "0" : mediaIframe.style.opacity = "1", 
    event.data === window.YT.PlayerState.PLAYING ? youtubePlayer.isPlaying = !0 : youtubePlayer.isPlaying = !1, 
    event.data === window.YT.PlayerState.ENDED ? (window.parent.postMessage("endedYoutube", "*"), 
    youtubePlayer.pauseVideo(), youtubePlayer.seekTo(0)) : window.parent.postMessage("playingYoutube", "*");
  }
  window.addEventListener ? window.addEventListener("message", actionProcessor, !1) : window.attachEvent("onmessage", actionProcessor);
}, "loading" !== document.readyState ? fn() : document.addEventListener ? document.addEventListener("DOMContentLoaded", fn) : document.attachEvent("onreadystatechange", (function() {
  "loading" !== document.readyState && fn();
}));