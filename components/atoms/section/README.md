# Section

A flexible Bootstrap-based layout wrapper for building page sections with optional background media, overlay, spacing, container control, and responsive multi-column presets.

## What it does

Use this component when you need a reusable section wrapper that can:

- switch between contained, fluid, or no-container layouts
- apply Bootstrap background and text utilities
- display an optional background image with overlay
- control top and bottom spacing with Bootstrap spacing classes
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

### Spacing

- `padding_block_start`, `padding_block_end`
- `margin_block_start`, `margin_block_end`

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

## Notes

- Only the selected number of column slots are rendered for the chosen preset.
- Empty column slots are skipped.
- For dark backgrounds or overlays, `text_color: auto` will switch to white text for supported dark background utilities.
- For 5- and 6-column layouts, the component uses responsive `row-cols-*` classes.
