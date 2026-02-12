/**
 * Hero Slider enhancements (safe, defensive)
 * - Re-initialize Bootstrap carousels if markup was duplicated/inserted by Canvas
 * - Ensure only one .carousel-item is active per carousel (Bootstrap requirement)
 */
(function () {
  function ensureSingleActive(carouselEl) {
    var items = carouselEl.querySelectorAll('.carousel-item');
    if (!items || !items.length) return;
    var active = carouselEl.querySelectorAll('.carousel-item.active');
    if (active.length === 0) {
      items[0].classList.add('active');
      return;
    }
    // If multiple active items exist, keep the first and deactivate the rest
    for (var i = 1; i < active.length; i++) {
      active[i].classList.remove('active');
    }
  }

  function initCarousel(carouselEl) {
    ensureSingleActive(carouselEl);

    // If Bootstrap is available, (re)create instance to ensure it binds correctly.
    // Avoid double-instantiating if already exists.
    try {
      var bs = window.bootstrap;
      if (!bs || !bs.Carousel) return;

      var existing = bs.Carousel.getInstance(carouselEl);
      if (existing) return;

      bs.Carousel.getOrCreateInstance(carouselEl);
    } catch (e) {
      // no-op (keep slider usable even if bootstrap is missing)
    }
  }

  function boot() {
    var carousels = document.querySelectorAll('.hero-slider .carousel[data-bs-ride], .hero-slider .carousel');
    for (var i = 0; i < carousels.length; i++) {
      initCarousel(carousels[i]);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
