Hero Slider – Custom CSS/SCSS + JS (Theme-level assets)

This package adds:
- components/atoms/hero-slider/scss/hero-slider.scss (source)
- components/atoms/hero-slider/assets/css/hero-slider.css (compiled)
- components/atoms/hero-slider/assets/js/hero-slider.js (enhancements)

How to enable in Drupal (VarTheme BS5):

1) Add a new library in your theme's `vartheme_bs5.libraries.yml`:

hero-slider:
  css:
    theme:
      components/atoms/hero-slider/assets/css/hero-slider.css: {}
  js:
    components/atoms/hero-slider/assets/js/hero-slider.js: {}
  dependencies:
    - core/drupal
    - core/once
    - vartheme_bs5/framework

2) Attach the library in:
`components/atoms/hero-slider/hero-slider-container/hero-slider-container.twig`

Add this line near the existing attach_library call:
  {{ attach_library('vartheme_bs5/hero-slider') }}

3) Clear caches:
  drush cr

SCSS build:
- Keep SCSS as the source of truth, compile to the CSS file above using your existing theme build pipeline.
