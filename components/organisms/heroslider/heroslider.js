!(function ($, Drupal, once) {
  ((Drupal.behaviors.varbaseHeroSliderPause = {
    attach(context, settings) {
      // Wait for Carousel to be available
      // eslint-disable-next-line no-undef
      if (typeof Carousel === 'undefined') {
        return;
      }

      // Override Bootstrap's cycle() method to respect pause state
      $(
        once('varbase-heroslider-override', '.js-varbase-heroslider', context),
      ).each(function () {
        const carouselElement = this;

        // Get Bootstrap carousel instance
        /* eslint-disable no-undef */
        const bsCarousel =
          Carousel.getInstance(carouselElement) ||
          new Carousel(carouselElement);
        /* eslint-enable no-undef */

        // Store original cycle method
        const originalCycle = bsCarousel.cycle.bind(bsCarousel);

        // Override cycle method
        bsCarousel.cycle = function () {
          const $pauseButton = $(this._element).find('.carousel-control-pause');
          // Only cycle if NOT manually paused
          if (!$pauseButton.hasClass('paused')) {
            originalCycle();
          }
        };
      });

      // Initialize pause button and handle clicks
      $(
        once('varbase-heroslider-pause', '.js-carousel-control-pause', context),
      ).on('click', function (event) {
        event.preventDefault();
        event.stopPropagation();

        const $button = $(this);
        const $carousel = $($button.data('bs-target'));
        const carouselElement = $carousel[0];
        // eslint-disable-next-line no-undef
        const bsCarousel = Carousel.getInstance(carouselElement);

        if ($button.hasClass('paused')) {
          // Resume: remove paused class and start cycling
          $button.removeClass('paused');
          $button.find('.visually-hidden').text('Pause');
          $button.attr('aria-label', 'Pause carousel');
          if (bsCarousel) bsCarousel.cycle();
        } else {
          // Pause: add paused class and stop cycling
          $button.addClass('paused');
          $button.find('.visually-hidden').text('Play');
          $button.attr('aria-label', 'Play carousel');
          if (bsCarousel) bsCarousel.pause();
        }
      });

      // Resume carousel when next/prev buttons are clicked
      $(
        once(
          'varbase-heroslider-nav',
          '.js-carousel-control-next, .js-carousel-control-prev',
          context,
        ),
      ).on('click', function (event) {
        const $button = $(this);
        const $carousel = $($button.data('bs-target'));
        const $pauseButton = $carousel.find('.carousel-control-pause');

        // If carousel is paused, resume it (like clicking play)
        if ($pauseButton.hasClass('paused')) {
          $pauseButton.removeClass('paused');
          $pauseButton.find('.visually-hidden').text('Pause');
          $pauseButton.attr('aria-label', 'Pause carousel');

          // Get carousel instance and start cycling
          const carouselElement = $carousel[0];
          // eslint-disable-next-line no-undef
          const bsCarousel = Carousel.getInstance(carouselElement);
          if (bsCarousel) {
            bsCarousel.cycle();
          }
        }
      });
    },
  }),
    (Drupal.behaviors.varbaseHeroSliderDrimage = {
      attach(context, settings) {
        let timer;
        $(once('varbase-heroslider-drimage', '.js-varbase-heroslider', context))
          .on('slid.bs.carousel', (event) => {
            (clearTimeout(timer),
              (timer = setTimeout(
                Drupal.drimage_improved.init,
                5,
                event.currentTarget,
              )));
          })
          .on('slide.bs.carousel', (event) => {
            (clearTimeout(timer),
              (timer = setTimeout(
                Drupal.drimage_improved.init,
                100,
                event.currentTarget,
              )));
          });
      },
    }));
})(jQuery, Drupal, once);
