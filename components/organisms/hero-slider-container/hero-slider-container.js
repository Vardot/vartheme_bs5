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
    const inner = carouselEl.querySelector('.carousel-inner');
    if (!inner) return;

    const nestedItems = qsa(inner, '.carousel-item');
    for (let i = 0; i < nestedItems.length; i++) {
      if (nestedItems[i].parentElement !== inner) {
        inner.appendChild(nestedItems[i]);
      }
    }
  }

  function ensureSingleActive(carouselEl) {
    const items = qsa(carouselEl, '.carousel-item');
    if (!items.length) return;

    const active = qsa(carouselEl, '.carousel-item.active');
    if (active.length === 0) {
      items[0].classList.add('active');
      return;
    }
    for (let i = 1; i < active.length; i++) {
      active[i].classList.remove('active');
    }
  }

  function getActiveIndex(carouselEl) {
    const items = qsa(carouselEl, '.carousel-item');
    for (let i = 0; i < items.length; i++) {
      if (items[i].classList.contains('active')) return i;
    }
    return 0;
  }

  function setActiveLayout(carouselEl) {
    const active = carouselEl.querySelector('.carousel-item.active');
    let layout =
      (active && active.getAttribute('data-hero-layout')) ||
      carouselEl.getAttribute('data-hero-media-position') ||
      'overlay';
    // Normalize common aliases.
    layout = trim(layout).toLowerCase();
    if (layout === 'no_media' || layout === 'no-media' || layout === 'nomedia')
      layout = 'none';
    if (!layout) layout = 'overlay';
    carouselEl.setAttribute('data-hero-active-layout', layout);

    // Overlay: controls/indicators should be white by default.
    // Preserve whatever the theme set as the "default" controller color for non-overlay slides.
    try {
      if (!carouselEl.__heroDefaultControllerColor) {
        const computed = window
          .getComputedStyle(carouselEl)
          .getPropertyValue('--hero-controller-color');
        carouselEl.__heroDefaultControllerColor = trim(computed);
      }
      if (layout === 'overlay') {
        carouselEl.style.setProperty('--hero-controller-color', '#fff');
      } else if (carouselEl.__heroDefaultControllerColor) {
        carouselEl.style.setProperty(
          '--hero-controller-color',
          carouselEl.__heroDefaultControllerColor,
        );
      }
    } catch (e) {
      // ignore
    }

    // Position nav under the correct content column based on the ACTIVE slide layout.
    const navCol = carouselEl.querySelector('[data-hero-nav-col]');
    if (navCol) {
      if (layout === 'start') {
        navCol.className =
          'col-12 col-lg-6 offset-lg-6 hero-slider__nav-col--offset';
      } else {
        navCol.className = 'col-12 col-lg-6';
      }
    }
  }

  function buildIndicators(carouselEl, indicatorsEl) {
    if (!indicatorsEl) return;
    const items = qsa(carouselEl, '.carousel-item');
    if (!items.length) return;

    const id = carouselEl.getAttribute('id');
    if (!id) return;

    // Clear existing (defensive against re-renders).
    indicatorsEl.innerHTML = '';

    const activeIndex = getActiveIndex(carouselEl);
    for (let i = 0; i < items.length; i++) {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.setAttribute('data-bs-target', `#${id}`);
      btn.setAttribute('data-bs-slide-to', String(i));
      btn.setAttribute('aria-label', `Slide ${i + 1}`);
      if (i === activeIndex) {
        btn.classList.add('active');
        btn.setAttribute('aria-current', 'true');
      }
      indicatorsEl.appendChild(btn);
    }
  }

  function syncIndicators(carouselEl, indicatorsEl) {
    if (!indicatorsEl) return;
    const buttons = qsa(indicatorsEl, 'button[data-bs-slide-to]');
    if (!buttons.length) return;

    const activeIndex = getActiveIndex(carouselEl);
    for (let i = 0; i < buttons.length; i++) {
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
    const toggle = carouselEl.querySelector('[data-hero-toggle="pause"]');
    if (!toggle) return;

    // Some pages load JS late; resolve the carousel instance lazily on click.
    let instance = null;
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
      const hidden = toggle.querySelector('.visually-hidden');
      if (hidden) hidden.textContent = paused ? 'Play' : 'Pause';
    }

    // Align initial state with autoplay.
    // Prefer explicit data attribute from Twig, otherwise infer from Bootstrap attrs.
    const autoplayAttr = carouselEl.getAttribute('data-hero-autoplay');
    let autoplay =
      autoplayAttr === '1' || autoplayAttr === 'true' || autoplayAttr === 'yes';
    if (autoplayAttr === null) {
      autoplay =
        carouselEl.getAttribute('data-bs-ride') === 'carousel' &&
        carouselEl.getAttribute('data-bs-interval') !== 'false';
    }
    if (!autoplay) {
      setPaused(true);
      const inst0 = getInstance();
      if (inst0) {
        try {
          inst0.pause();
        } catch (e) {}
      }
    }

    toggle.addEventListener('click', function () {
      const inst = getInstance();
      if (!inst) return;
      const paused = toggle.getAttribute('data-paused') === 'true';
      const nextPaused = !paused;
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
    const bs = window.bootstrap;
    if (bs && bs.Carousel) {
      try {
        bs.Carousel.getOrCreateInstance(carouselEl);
      } catch (e) {
        // ignore
      }
    }

    const indicatorsEl = carouselEl.querySelector('[data-hero-indicators]');
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
    const carousels = document.querySelectorAll(
      '.hero-slider .carousel, .carousel.hero-slider',
    );
    for (let i = 0; i < carousels.length; i++) {
      initCarousel(carousels[i]);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
