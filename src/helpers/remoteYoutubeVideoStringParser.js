export const remoteYoutubeVideoStringParser = (videoLink) => {
  const src = videoLink.split('&');
  return src[0].replace('watch?v=', 'embed/');
}