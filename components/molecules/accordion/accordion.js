!(function ($, Drupal) {
  Drupal.behaviors.varbaseAccordionToggleAll = {
    attach() {
      $('.accordion-toggle-all').click(function () {
        $(this).data('toggle-status') === 'collapsed'
          ? ($(
              `#${$(this).data('accordion-id')} .accordion-item .accordion-collapse`,
            )
              .collapse({
                parent: !1,
                toggle: !1,
              })
              .collapse('show')
              .collapse({
                parent: $(this).data('accordion-id'),
                toggle: !0,
              }),
            $(this).data('toggle-status', 'expanded'),
            $(this).text($(this).data('collapsed-text')))
          : ($(
              `#${$(this).data(
                'accordion-id',
              )} .accordion-item .accordion-collapse`,
            ).collapse('hide'),
            $(this).data('toggle-status', 'collapsed'),
            $(this).text($(this).data('expanded-text')));
      });
    },
  };
})(jQuery, Drupal);
