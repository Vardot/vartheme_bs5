/**
 * Hero Slider enhancements (Canvas/SDC-safe)
 *
 * Fixes / features:
 * - Ensure only one .carousel-item is active per carousel.
 * - Build indicators dynamically (Canvas slot content prevents counting in Twig).
 * - Track active slide layout (overlay/start/end/none) on the carousel element.
 *   This enables CSS to reposition nav on responsive for per-slide overrides.
 * - Optional play/pause toggle support.
 */
(function () {
  'use strict';

  function trim(str) {
    return String(str || '').trim();
  }

  function qsa(root, sel) {
    return Array.prototype.slice.call(root.querySelectorAll(sel));
  }

  // Canvas can wrap nested components with extra DOM elements.
  // Bootstrap Carousel expects `.carousel-item` to be DIRECT children of `.carousel-inner`.
  // If wrapped, the slider can fail to initialize properly.
  function flattenCarouselItems(carouselEl) {
    var inner = carouselEl.querySelector('.carousel-inner');
    if (!inner) return;

    var nestedItems = qsa(inner, '.carousel-item');
    for (var i = 0; i < nestedItems.length; i++) {
      if (nestedItems[i].parentElement !== inner) {
        inner.appendChild(nestedItems[i]);
      }
    }
  }

  function ensureSingleActive(carouselEl) {
    var items = qsa(carouselEl, '.carousel-item');
    if (!items.length) return;

    var active = qsa(carouselEl, '.carousel-item.active');
    if (active.length === 0) {
      items[0].classList.add('active');
      return;
    }
    for (var i = 1; i < active.length; i++) {
      active[i].classList.remove('active');
    }
  }

  function getActiveIndex(carouselEl) {
    var items = qsa(carouselEl, '.carousel-item');
    for (var i = 0; i < items.length; i++) {
      if (items[i].classList.contains('active')) return i;
    }
    return 0;
  }

  function setActiveLayout(carouselEl) {
    var active = carouselEl.querySelector('.carousel-item.active');
    var layout = (active && active.getAttribute('data-hero-layout')) || carouselEl.getAttribute('data-hero-media-position') || 'overlay';
    // Normalize common aliases.
    layout = trim(layout).toLowerCase();
    if (layout === 'no_media' || layout === 'no-media' || layout === 'nomedia') layout = 'none';
    if (!layout) layout = 'overlay';
    carouselEl.setAttribute('data-hero-active-layout', layout);

    // Overlay: controls/indicators should be white by default.
    // Preserve whatever the theme set as the "default" controller color for non-overlay slides.
    try {
      if (!carouselEl.__heroDefaultControllerColor) {
        var computed = window.getComputedStyle(carouselEl).getPropertyValue('--hero-controller-color');
        carouselEl.__heroDefaultControllerColor = trim(computed);
      }
      if (layout === 'overlay') {
        carouselEl.style.setProperty('--hero-controller-color', '#fff');
      } else if (carouselEl.__heroDefaultControllerColor) {
        carouselEl.style.setProperty('--hero-controller-color', carouselEl.__heroDefaultControllerColor);
      }
    } catch (e) {
      // ignore
    }

    // Position nav under the correct content column based on the ACTIVE slide layout.
    var navCol = carouselEl.querySelector('[data-hero-nav-col]');
    if (navCol) {
      // Reset to base.
      navCol.className = 'col-12';
      // Split layouts: put nav under the CONTENT column.
      // - start => image left, content right => offset the nav to the right.
      // - end   => image right, content left  => no offset.
      if (layout === 'start') {
        navCol.className = 'col-12 col-lg-6 offset-lg-6 hero-slider__nav-col--offset';
      } else if (layout === 'end') {
        navCol.className = 'col-12 col-lg-6';
      } else {
        navCol.className = 'col-12';
      }
    }
  }

  function buildIndicators(carouselEl, indicatorsEl) {
    if (!indicatorsEl) return;
    var items = qsa(carouselEl, '.carousel-item');
    if (!items.length) return;

    var id = carouselEl.getAttribute('id');
    if (!id) return;

    // Clear existing (defensive against re-renders).
    indicatorsEl.innerHTML = '';

    var activeIndex = getActiveIndex(carouselEl);
    for (var i = 0; i < items.length; i++) {
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.setAttribute('data-bs-target', '#' + id);
      btn.setAttribute('data-bs-slide-to', String(i));
      btn.setAttribute('aria-label', 'Slide ' + (i + 1));
      if (i === activeIndex) {
        btn.classList.add('active');
        btn.setAttribute('aria-current', 'true');
      }
      indicatorsEl.appendChild(btn);
    }
  }

  function syncIndicators(carouselEl, indicatorsEl) {
    if (!indicatorsEl) return;
    var buttons = qsa(indicatorsEl, 'button[data-bs-slide-to]');
    if (!buttons.length) return;

    var activeIndex = getActiveIndex(carouselEl);
    for (var i = 0; i < buttons.length; i++) {
      if (i === activeIndex) {
        buttons[i].classList.add('active');
        buttons[i].setAttribute('aria-current', 'true');
      } else {
        buttons[i].classList.remove('active');
        buttons[i].removeAttribute('aria-current');
      }
    }
  }

  function initPauseToggle(carouselEl) {
    var toggle = carouselEl.querySelector('[data-hero-toggle="pause"]');
    if (!toggle) return;

    // Some pages load JS late; resolve the carousel instance lazily on click.
    var instance = null;
    function getInstance() {
      if (instance) return instance;
      if (!(window.bootstrap && window.bootstrap.Carousel)) return null;
      try {
        instance = window.bootstrap.Carousel.getOrCreateInstance(carouselEl);
      } catch (e) {
        instance = null;
      }
      return instance;
    }

    function setPaused(paused) {
      toggle.setAttribute('data-paused', paused ? 'true' : 'false');
      toggle.setAttribute('aria-label', paused ? 'Play' : 'Pause');
      var hidden = toggle.querySelector('.visually-hidden');
      if (hidden) hidden.textContent = paused ? 'Play' : 'Pause';
    }

    // Align initial state with autoplay.
    // Prefer explicit data attribute from Twig, otherwise infer from Bootstrap attrs.
    var autoplayAttr = carouselEl.getAttribute('data-hero-autoplay');
    var autoplay = autoplayAttr === '1' || autoplayAttr === 'true' || autoplayAttr === 'yes';
    if (autoplayAttr === null) {
      autoplay = carouselEl.getAttribute('data-bs-ride') === 'carousel' && carouselEl.getAttribute('data-bs-interval') !== 'false';
    }
    if (!autoplay) {
      setPaused(true);
      var inst0 = getInstance();
      if (inst0) {
        try { inst0.pause(); } catch (e) {}
      }
    }

    toggle.addEventListener('click', function () {
      var inst = getInstance();
      if (!inst) return;
      var paused = toggle.getAttribute('data-paused') === 'true';
      var nextPaused = !paused;
      if (nextPaused) inst.pause();
      else inst.cycle();
      setPaused(nextPaused);
    });
  }

  function initCarousel(carouselEl) {
    flattenCarouselItems(carouselEl);
    ensureSingleActive(carouselEl);
    setActiveLayout(carouselEl);

    // Bootstrap instance (if available).
    var bs = window.bootstrap;
    if (bs && bs.Carousel) {
      try {
        bs.Carousel.getOrCreateInstance(carouselEl);
      } catch (e) {
        // ignore
      }
    }

    var indicatorsEl = carouselEl.querySelector('[data-hero-indicators]');
    buildIndicators(carouselEl, indicatorsEl);

    // Update indicators + layout on slide.
    carouselEl.addEventListener('slid.bs.carousel', function () {
      setActiveLayout(carouselEl);
      syncIndicators(carouselEl, indicatorsEl);
    });

    initPauseToggle(carouselEl);
  }

  function boot() {
    // Carousels are rendered as `.carousel` and also receive `hero-slider` modifier classes.
    // Use a tolerant selector to cover both nested and direct cases.
    var carousels = document.querySelectorAll('.hero-slider .carousel, .carousel.hero-slider');
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
