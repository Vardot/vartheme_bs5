(function (Drupal, once) {
  'use strict';

  /**
   * Ensure Bootstrap accordion/collapse works inside Drupal Canvas and SDC renders.
   * Some previews render markup after the Bootstrap Data API listeners are registered;
   * this behavior safely instantiates Collapse for each target without auto-toggling.
   */
  Drupal.behaviors.varthemeBs5Accordion = {
    attach: function (context) {
      // Collapse constructor is exposed globally by Bootstrap's collapse.js UMD build.
      var Collapse = window.Collapse;
      if (typeof Collapse !== 'function') {
        return;
      }

      once('varthemeBs5Accordion', '.accordion', context).forEach(function (accordionEl) {
        accordionEl.querySelectorAll('[data-bs-toggle="collapse"]').forEach(function (btn) {
          var targetSel = btn.getAttribute('data-bs-target') || btn.getAttribute('href');
          if (!targetSel) {
            return;
          }
          // data-bs-target is usually like "#collapse-123".
          var target = accordionEl.querySelector(targetSel) || document.querySelector(targetSel);
          if (!target) {
            return;
          }
          try {
            // Create instance if not already present. Prevent auto-toggle on attach.
            Collapse.getOrCreateInstance(target, { toggle: false });
          } catch (e) {
            // No-op: avoid breaking page if Bootstrap internals change.
          }
        });
      });
    }
  };

})(Drupal, once);
