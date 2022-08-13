export const remoteVideoStringParser = (videoLink) => {
  const src = videoLink.split('&');
  return src[0].replace('watch?v=', 'embed/');
}