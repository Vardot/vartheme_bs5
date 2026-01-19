export default function currentlyInCanvasEditor() {
  return window?.parent?.drupalSettings?.canvas && !window.parent.document.body.querySelector("[class^=_PagePreviewIframe]");
}
