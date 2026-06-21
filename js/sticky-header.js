/**
 * @file
 * Sticky-header scroll behavior for Vartheme BS5.
 *
 * Progressive enhancement: the header is `position: sticky` in CSS on its own,
 * so it stays usable without JS. This behavior only toggles a `scrolled` class
 * once the page is scrolled past 10px so the header can pick up a drop shadow.
 *
 * Inside the Drupal Canvas editor preview iframe (page editing and view-mode
 * editing both render the themed page there) a sticky header would detach and
 * overlap the editor chrome, so the sticky is switched off via the
 * `is-canvas-preview` class and the scroll listener is skipped.
 */

((Drupal, once) => {
  // The preview document runs inside an iframe whose host element carries
  // `data-canvas-preview`; same-origin lets us read it from within the frame.
  const inCanvasPreview = () => {
    try {
      return Boolean(
        window.frameElement && 'canvasPreview' in window.frameElement.dataset,
      );
    } catch (e) {
      return false;
    }
  };

  Drupal.behaviors.varthemeBs5StickyHeader = {
    attach(context) {
      // This behavior ships in the sticky-header library, which the theme only
      // attaches when the "Sticky header" setting is enabled — so reaching here
      // already means the feature is on.
      if (inCanvasPreview()) {
        document.documentElement.classList.add('is-canvas-preview');
        return;
      }

      once(
        'vartheme-bs5-sticky-header',
        '.page > header[role="banner"]',
        context,
      ).forEach((header) => {
        const onScroll = () => {
          header.classList.toggle('scrolled', window.scrollY >= 10);
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
      });
    },
  };
})(Drupal, once);
