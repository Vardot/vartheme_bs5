/**
 * @file
 * Icon Toggle behavior.
 *
 * Owns only the open/close state and focus management — sibling elements
 * (e.g. the main menu) are left untouched and stay visible the whole time;
 * the panel overlays them instead of displacing them.
 *
 * Inside the Drupal Canvas editor preview iframe the panel starts open (and
 * stays open) instead of waiting for a click: the panel is the only way to
 * see the "content" slot and drop content into it, so it can't stay hidden
 * behind a click a builder has no reason to make. Same `is-canvas-preview`
 * detection as sticky-header.js.
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

  Drupal.behaviors.varthemeBs5IconToggle = {
    attach(context) {
      once('vartheme-bs5-icon-toggle', '.icon-toggle', context).forEach(
        (root) => {
          const button = root.querySelector('.icon-toggle__button');
          const icon = root.querySelector('.icon-toggle__icon');
          const panel = root.querySelector('.icon-toggle__panel');

          if (!button || !panel) {
            return;
          }

          // The configured "closed" icon class (e.g. "bi-search"), captured
          // once so it can be restored on close regardless of which icon
          // was picked.
          const closedIconClass = icon
            ? [...icon.classList].find(
                (className) =>
                  className.startsWith('bi-') && className !== 'bi-x-lg',
              )
            : null;

          const closedLabel = button.getAttribute('aria-label');
          const openLabel = button.dataset.iconToggleOpenLabel || closedLabel;

          const isOpen = () => root.classList.contains('icon-toggle--open');

          const close = () => {
            root.classList.remove('icon-toggle--open');
            button.setAttribute('aria-expanded', 'false');
            button.setAttribute('aria-label', closedLabel);
            panel.setAttribute('hidden', '');
            if (icon && closedIconClass) {
              icon.classList.replace('bi-x-lg', closedIconClass);
            }
          };

          const open = ({ focusInput = true } = {}) => {
            root.classList.add('icon-toggle--open');
            button.setAttribute('aria-expanded', 'true');
            button.setAttribute('aria-label', openLabel);
            panel.removeAttribute('hidden');
            if (icon && closedIconClass) {
              icon.classList.replace(closedIconClass, 'bi-x-lg');
            }
            if (focusInput) {
              const input = panel.querySelector(
                'input[type="search"], input[type="text"], input:not([type])',
              );
              if (input) {
                input.focus();
              }
            }
          };

          if (inCanvasPreview()) {
            // Stay open regardless of clicks elsewhere in the builder canvas
            // (e.g. selecting other components) — closing would hide the
            // "content" slot a builder needs to drop content into.
            open({ focusInput: false });
            return;
          }

          button.addEventListener('click', () => {
            if (isOpen()) {
              close();
            } else {
              open();
            }
          });

          document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape' && isOpen()) {
              close();
              button.focus();
            }
          });

          document.addEventListener('click', (event) => {
            if (isOpen() && !root.contains(event.target)) {
              close();
            }
          });
        },
      );
    },
  };
})(Drupal, once);
