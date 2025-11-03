const tag = document.createElement('script');

tag.src = '//player.vimeo.com/api/player.js';

const firstScriptTag = document.getElementsByTagName('script')[0];

let fn;

(firstScriptTag.parentNode.insertBefore(tag, firstScriptTag),
  (fn = function () {
    const mediaIframe = document.querySelector('iframe');
    mediaIframe.setAttribute('id', 'media-oembed-iframe');
    let vimeoPlayer;
    let playerConfigured = !1;
    let videoLoop = !1;
    function actionProcessor(evt) {
      if (evt.data === 'play') {
        mediaIframe.style.display = 'block';
        if (!playerConfigured) {
          const vimeoIframe = document.querySelector(
            'iframe[src*="vimeo.com"]',
          );
          const vimeoOptions = {
            background: !0,
            autoplay: !0,
            muted: !0,
            controls: !1,
          };
          ((vimeoPlayer = new window.Vimeo.Player(vimeoIframe, vimeoOptions)),
            vimeoPlayer.setVolume(0),
            vimeoPlayer.setLoop(videoLoop),
            vimeoPlayer.on('ended', function () {
              (window.parent.postMessage('endedVimeo', '*'),
                vimeoPlayer.pause());
            }),
            vimeoPlayer.on('play', function () {
              window.parent.postMessage('playingVimeo', '*');
            }),
            (playerConfigured = !0));
        }
        vimeoPlayer.ready().then(function () {
          vimeoPlayer.getPaused().then(function (paused) {
            paused && vimeoPlayer.play();
          });
        });
      } else if (evt.data === 'pause') {
        if (playerConfigured) {
          vimeoPlayer.pause();
        }
        mediaIframe.style.display = 'none';
      } else if (evt.data === 'loop') {
        videoLoop = !0;
      }
    }
    window.addEventListener
      ? window.addEventListener('message', actionProcessor, !1)
      : window.attachEvent('onmessage', actionProcessor);
  }),
  document.readyState !== 'loading'
    ? fn()
    : document.addEventListener
      ? document.addEventListener('DOMContentLoaded', fn)
      : document.attachEvent('onreadystatechange', function () {
          document.readyState !== 'loading' && fn();
        }));
