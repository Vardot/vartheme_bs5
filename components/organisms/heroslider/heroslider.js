!function($, Drupal, once) {
  Drupal.behaviors.varbaseHeroSliderPause = {
    attach: function(context, settings) {
      $(once("varbase-heroslider-pause", ".js-carousel-control-pause", context)).on("click", (event => {
        $($(event.currentTarget).data("bs-target")).carousel("pause");
      }));
    }
  }, Drupal.behaviors.varbaseHeroSliderDrimage = {
    attach: function(context, settings) {
      var timer;
      $(once("varbase-heroslider-drimage", ".js-varbase-heroslider", context)).on("slid.bs.carousel", (event => {
        clearTimeout(timer), timer = setTimeout(Drupal.drimage_improved.init, 5, event.currentTarget);
      })).on("slide.bs.carousel", (event => {
        clearTimeout(timer), timer = setTimeout(Drupal.drimage_improved.init, 100, event.currentTarget);
      }));
    }
  };
}(jQuery, Drupal, once);