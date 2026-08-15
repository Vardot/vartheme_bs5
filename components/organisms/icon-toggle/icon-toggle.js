/**
 * @file
 * Icon Toggle behavior.
 *
 * Bootstrap 5.3's Dropdown owns the disclosure: show/hide, aria-expanded,
 * Escape, outside clicks, focus return, and Popper flip/shift. No jQuery.
 *
 * Left here: swapping the trigger icon, focusing the panel's field, and the
 * `bar` style's geometry — that style opts out of Popper because it spans the
 * band the component sits in, measured into `--icon-toggle-bar-*`.
 *
 * In the Drupal Canvas preview the panel starts open so its "content" slot
 * stays droppable; set `expand_in_editor: false` on an instance to opt out
 * once content is placed.
 */
((Drupal, once) => {
  // The preview iframe's host element carries `data-canvas-preview`.
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
          const closeButton = root.querySelector('.icon-toggle__close');

          if (!button || !panel) {
            return;
          }

          const isBar = root.classList.contains('icon-toggle--panel-bar');

          // The region the component sits in: a Canvas global header or footer,
          // or page content.
          const band = root.closest(
            '[role="banner"], header, [role="contentinfo"], footer,' +
              ' [role="main"], main, .region, section',
          );
          // Only in a header does the bar sit on the trigger's line, clear of
          // the brand.
          const isHeaderBand = Boolean(
            band && band.closest('[role="banner"], header'),
          );
          const brand = band
            ? band.querySelector(
                '.navbar-brand, .block-system-branding-block, .site-branding',
              )
            : null;
          // Keeps an unmeasured bar inside its context.
          const canvas = root.offsetParent || document.documentElement;

          const measure = () => {
            if (!isBar) {
              return;
            }

            const canvasRect = canvas.getBoundingClientRect();
            if (canvasRect.width) {
              root.style.setProperty(
                '--icon-toggle-bar-canvas-width',
                `${canvasRect.width}px`,
              );
            }

            if (!band) {
              return;
            }
            const bandRect = band.getBoundingClientRect();
            if (!bandRect.width) {
              return;
            }
            root.style.setProperty(
              '--icon-toggle-bar-top',
              `${bandRect.bottom}px`,
            );
            root.style.setProperty(
              '--icon-toggle-bar-left',
              `${bandRect.left}px`,
            );
            root.style.setProperty(
              '--icon-toggle-bar-width',
              `${bandRect.width}px`,
            );

            // Open towards the side with more room, so the bar never runs off
            // the edge of its region.
            const rootRect = root.getBoundingClientRect();
            const startEdge = brand
              ? brand.getBoundingClientRect().right
              : bandRect.left;
            const roomBeforeTrigger = rootRect.right - startEdge;
            const roomAfterTrigger = bandRect.right - rootRect.left;
            const opensFromStart = roomAfterTrigger > roomBeforeTrigger;
            root.style.setProperty(
              '--icon-toggle-bar-available',
              `${Math.max(0, opensFromStart ? roomAfterTrigger : roomBeforeTrigger)}px`,
            );
            root.classList.toggle('is-panel-start', opensFromStart);

            // Elsewhere the bar drops below the trigger.
            root.classList.toggle('is-bar-inline', isHeaderBand);

            // Geometry is trustworthy.
            root.classList.add('is-measured');
          };

          let measuring = false;
          const remeasure = () => {
            if (measuring) {
              return;
            }
            measuring = true;
            window.requestAnimationFrame(() => {
              measuring = false;
              if (root.classList.contains('icon-toggle--open')) {
                measure();
              }
            });
          };

          // Captured once so any configured icon can be restored on close.
          const closedIconClass = icon
            ? [...icon.classList].find(
                (className) =>
                  className.startsWith('bi-') && className !== 'bi-x-lg',
              )
            : null;

          const closedLabel = button.getAttribute('aria-label');
          const openLabel = button.dataset.iconToggleOpenLabel || closedLabel;

          // `show` fires before the panel appears, when the bar needs geometry.
          root.addEventListener('show.bs.dropdown', () => {
            measure();
            root.classList.add('icon-toggle--open');
            button.setAttribute('aria-label', openLabel);
            if (icon && closedIconClass) {
              icon.classList.replace(closedIconClass, 'bi-x-lg');
            }
          });

          root.addEventListener('shown.bs.dropdown', () => {
            const input = panel.querySelector(
              'input[type="search"], input[type="text"], input:not([type])',
            );
            if (input) {
              input.focus();
            }
          });

          root.addEventListener('hide.bs.dropdown', () => {
            root.classList.remove('icon-toggle--open');
            button.setAttribute('aria-label', closedLabel);
            if (icon && closedIconClass) {
              icon.classList.replace('bi-x-lg', closedIconClass);
            }
          });

          // Dropdowns have no `data-bs-dismiss`, and the theme loads Bootstrap as
          // modules (no global), so close by toggling the trigger through
          // Bootstrap's own data API, which also restores focus.
          if (closeButton) {
            closeButton.addEventListener('click', () => {
              button.click();
              // Bootstrap only restores focus for keyboard closes.
              void window.getComputedStyle(button).visibility;
              button.focus();
            });
          }

          if (isBar) {
            window.addEventListener('resize', remeasure);
            window.addEventListener('scroll', remeasure, { passive: true });
          }

          // `expand_in_editor: false` (→ `icon-toggle--collapsed-in-editor`)
          // opts an instance out once its slot has content, so the
          // always-open panel stops covering the editor view. Front-end
          // behavior is unaffected either way.
          const expandInEditor = !root.classList.contains(
            'icon-toggle--collapsed-in-editor',
          );

          if (inCanvasPreview() && expandInEditor) {
            // Stay open so the slot keeps taking drops.
            measure();
            root.classList.add('icon-toggle--open');
            panel.classList.add('show');
            button.setAttribute('aria-expanded', 'true');
          }
        },
      );
    },
  };
})(Drupal, once);
