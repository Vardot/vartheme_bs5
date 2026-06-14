# Section

A flexible Bootstrap-based layout wrapper for building page sections with optional background media, overlay, spacing, container control, and responsive multi-column presets.

## Bootstrap reference

> [Bootstrap 5.3 — Grid system](https://getbootstrap.com/docs/5.3/layout/grid/)

## What it does

Use this component when you need a reusable section wrapper that can:

- switch between contained, fluid, or no-container layouts
- apply Bootstrap background and text utilities
- display an optional background image with overlay
- control top, bottom, left, and right spacing with Bootstrap spacing classes
- render 1 to 6 content columns based on a preset layout
- optionally show a header and footer region

## Files

- `section.component.yml` — component schema and props
- `section.twig` — component template
- `README.md` — usage notes and examples
- `section.mdx` — Storybook docs page
- `section.stories.json` — Storybook story configuration
- `section.stories.twig` — Storybook story templates

## Props overview

### Layout

- `container_type`: `container`, `container-fluid`, or `none`
- `columns`: column preset controlling how many columns are rendered
- `gutter`: Bootstrap gutter classes for row spacing

### Background and appearance

- `bg_edge2edge`: enables full-bleed background behavior
- `background_color`: Bootstrap background utility
- `text_color`: explicit text utility or `auto`
- `background_media`: optional background image object
- `background_overlay`: overlay strength when a background image is used
- `shadow`: optional Bootstrap shadow class
- `radius`: Bootstrap border-radius utility

### Border

- `border`: which sides to apply a border to — `none`, `border` (all), `border-top`, `border-bottom`, `border-start`, `border-end`
- `border_color`: Bootstrap border color utility; only applied when `border` is not `none`
- `border_width`: Bootstrap border width utility (`border-1` through `border-5`); only applied when `border` is not `none`

### Spacing

- `padding_block_start`, `padding_block_end`
- `padding_inline_start`, `padding_inline_end`
- `margin_block_start`, `margin_block_end`
- `margin_inline_start`, `margin_inline_end`

### Animation (AOS)

- `aos_animation`: Animate On Scroll effect — `none`, `fade`, `fade-up`, `fade-down`, `fade-left`, `fade-right`, `zoom-in`, `zoom-out`, and more; defaults to `none`
- `aos_duration`: animation duration in ms — `400`, `600`, `800`, `1000`, `1200`, `1500`, `2000`, or `default`
- `aos_delay`: animation delay in ms — `0` through `600`; defaults to `0`
- `aos_once`: animate only once on first scroll-in — `true` or `false`; defaults to `true`

When `aos_animation` is not `none`, the attributes `data-aos`, `data-aos-duration`, `data-aos-delay`, and `data-aos-once` are rendered on the `<section>` element.

### Regions

- `section_header`: toggles the header region
- `section_footer`: toggles the footer region

## Slots

- `header_slot`
- `col_1`
- `col_2`
- `col_3`
- `col_4`
- `col_5`
- `col_6`
- `footer_slot`

## Column presets

| Value | Output |
|---|---|
| `100` | 1 column |
| `50-50` | 2 equal columns |
| `33-33-33` | 3 equal columns |
| `75-25` | 2 columns, wide left |
| `25-75` | 2 columns, wide right |
| `67-33` | 2 columns, 8/4 split |
| `33-67` | 2 columns, 4/8 split |
| `50-25-25` | 3 columns |
| `25-25-50` | 3 columns |
| `25-25-25-25` | 4 equal columns |
| `20-20-20-20-20` | 5 equal columns |
| `16-16-16-16-16-16` | 6 equal columns |

## Example: simple two-column section

```twig
{% embed 'vartheme_bs5:section' with {
  container_type: 'container',
  columns: '50-50',
  gutter: 'gx-4 gy-4',
  background_color: 'bg-light',
  padding_block_start: 'pt-5',
  padding_block_end: 'pb-5',
  padding_inline_start: 'ps-0',
  padding_inline_end: 'pe-0',
  section_header: true,
  section_footer: false
} only %}
  {% block header_slot %}
    <h2 class="h3 mb-0">Section heading</h2>
  {% endblock %}

  {% block col_1 %}
    <p class="mb-0">Left column content.</p>
  {% endblock %}

  {% block col_2 %}
    <p class="mb-0">Right column content.</p>
  {% endblock %}
{% endembed %}
```

## Example: hero-style section with background image

```twig
{% embed 'vartheme_bs5:section' with {
  bg_edge2edge: true,
  container_type: 'container',
  columns: '100',
  background_color: 'bg-dark',
  text_color: 'text-white',
  background_overlay: 'overlay-50',
  padding_block_start: 'pt-5',
  padding_block_end: 'pb-5',
  padding_inline_start: 'ps-0',
  padding_inline_end: 'pe-0',
  background_media: {
    src: '/path/to/image.jpg',
    alt: 'Decorative background',
    width: 1600,
    height: 900
  }
} only %}
  {% block col_1 %}
    <div class="py-5 text-center">
      <h1 class="display-5">Hero content</h1>
      <p class="lead mb-0">Use the single-column preset for banners and feature areas.</p>
    </div>
  {% endblock %}
{% endembed %}
```

## Example: AOS fade-up animation

```twig
{% embed 'vartheme_bs5:section' with {
  container_type: 'container',
  columns: '50-50',
  background_color: 'bg-primary',
  aos_animation: 'fade-up',
  aos_duration: '800',
  aos_delay: '200',
  aos_once: true
} only %}
  {% block col_1 %}Left{% endblock %}
  {% block col_2 %}Right{% endblock %}
{% endembed %}
```

## Notes

- Only the selected number of column slots are rendered for the chosen preset.
- Empty column slots are skipped.
- `text_color: auto` switches to `text-white` for dark backgrounds: `bg-primary`, `bg-secondary`, `bg-success`, `bg-danger`, `bg-dark`, `bg-black`.
- For 5- and 6-column layouts, the component uses responsive `row-cols-*` classes.
- Boolean props (`bg_edge2edge`, `section_header`, `section_footer`, `aos_once`) rely on Drupal SDC schema validation, which delivers real booleans; the template only applies a presence fallback to the schema default.


## Alignment

- `vertical_alignment`: Top, Center, Bottom
- `horizontal_alignment`: Left, Center, Right

Horizontal alignment uses Bootstrap text alignment classes on each column. Vertical alignment uses Bootstrap align-items classes on the row.
