# Featured Card

A responsive two-column featured card (media + content) with Bootstrap 5 grid ratios per breakpoint, a media overlay slot, and Canvas-friendly controls for border, padding, gutters and alignment.

## Bootstrap reference

> [Bootstrap 5.3 — Card](https://getbootstrap.com/docs/5.3/components/card/)

## What it does

Use this component when you need a reusable featured card that can:

- show a media column with an uploaded image, or a placeholder
- pin a badge or label over the image via a drag-and-drop overlay slot
- place media before (start) or after (end) the content, or hide it entirely
- crop images to a chosen ratio with a fill or fit object behavior
- set independent two-column ratios for every breakpoint (XS → XXL)
- control gutters, content vertical alignment, equal-height columns, and content padding
- add a border with a rounded corner style, or round the image only
- make the whole card clickable with a Bootstrap stretched link

## Files

- `card-featured.component.yml` — component schema and props
- `card-featured.twig` — component template
- `README.md` — usage notes and examples
- `card-featured.mdx` — Storybook docs page
- `card-featured.stories.json` — Storybook story configuration
- `card-featured.stories.twig` — Storybook story templates
- `assets/` — placeholder image assets

## Props overview

### Media

- `media_position`: where the media column appears — `start`, `end`, `no-media`; defaults to `start`
- `media_image`: optional image object (used when the media slot is empty); leave empty to show the placeholder
- `ratio`: image crop ratio — `ratio-auto`, `ratio-16x9`, `ratio-4x3`, `ratio-1x1`, `ratio-21x9`; defaults to `ratio-16x9`
- `fit`: how the image fills a fixed ratio — `object-fit-cover` (fill/crop), `object-fit-contain` (fit/no crop); defaults to `object-fit-cover`

### Column ratios (per breakpoint)

Each prop accepts a `NN_NN` value where the two halves are the start/content column widths (e.g. `06_06` = 50%/50%, `08_04` = 67%/33%).

- `columns_xs_size`: all breakpoints (≥ 0); defaults to `06_06`
- `columns_sm_size`: small (≥ 576px); inherits xs
- `columns_md_size`: medium (≥ 768px); inherits xs
- `columns_lg_size`: large (≥ 992px); inherits xs
- `columns_xl_size`: x-large (≥ 1200px); inherits xs
- `columns_xxl_size`: xx-large (≥ 1400px); inherits xs

### Layout

- `gutters_between`: Bootstrap gutter utilities for the inner row — `g-0`, `g-2 g-lg-3`, `g-4`, `g-4 g-lg-5`; defaults to `g-2 g-lg-3`
- `content_vertical_alignment`: vertical alignment of the content — `align-items-start`, `align-items-center`, `align-items-end`; defaults to `align-items-center`
- `equal_height`: add `h-100` to both columns for grid alignment — `true` / `false`; defaults to `false`
- `padded`: add `p-4` to the content area — `true` / `false`; defaults to `false`

### Card style

- `card_border`: add a default border to the card — `true` / `false`; defaults to `false`
- `corner_style`: rounded utility, applied to the whole card when border is enabled or to the image only when disabled — `rounded-0`, `rounded-1`, `rounded-2`, `rounded-3`, `rounded-4`, `rounded-pill`; defaults to `rounded-0`

### Link

- `stretched_link`: make the whole card clickable (requires `link_url`) — `true` / `false`; defaults to `false`
- `link_url`: URL for the card link; defaults to `''`
- `link_target`: link target — `default` (same tab), `_self`, `_blank`; defaults to `default`

## Slots

- `overlay` — drag-and-drop slot rendered as a badge overlay in the top-left corner of the media image; renders even when no image is uploaded (shows the placeholder)
- `content` — drag-and-drop content slot for text, buttons, and other elements

## Column ratio values

| Value | Split (start / content) |
|---|---|
| `02_10` | 17% / 83% |
| `10_02` | 83% / 17% |
| `03_09` | 25% / 75% |
| `09_03` | 75% / 25% |
| `04_08` | 33% / 67% |
| `08_04` | 67% / 33% |
| `05_07` | 42% / 58% |
| `07_05` | 58% / 42% |
| `06_06` | 50% / 50% |
| `12_12` | 100% / 100% |

## Available attributes

The template exposes named attribute objects on the structural wrappers:

- `card_attributes` — the card wrapper
- `row_attributes` — the row
- `media_col_attributes` — the media column
- `content_col_attributes` — the content column
- `media_wrap_attributes` — the media wrapper
- `placeholder_wrap_attributes` — the placeholder wrapper
- `content_stack_attributes` — the content stack wrapper
- `content_body_attributes` — the content body (`card-body`)

## Example: basic featured card

```twig
{% embed 'vartheme_bs5:card-featured' with {
  card_border: true,
  padded: true,
  media_position: 'start',
  columns_xs_size: '06_06',
  columns_md_size: '08_04',
  gutters_between: 'g-2 g-lg-3',
  ratio: 'ratio-16x9',
  fit: 'object-fit-cover',
  media_image: {
    src: '/path/to/image.jpg',
    alt: 'Featured image',
    width: 800,
    height: 600
  }
} only %}
  {% block content %}
    <h3 class="h5 mb-2">Featured card title</h3>
    <p class="mb-3">A short description.</p>
    <a class="btn btn-primary" href="#">Call to action</a>
  {% endblock %}
{% endembed %}
```

## Example: with a badge overlay on the image

```twig
{% embed 'vartheme_bs5:card-featured' with {
  card_border: true,
  padded: true,
  media_position: 'start',
  columns_xs_size: '06_06',
  columns_md_size: '08_04',
  ratio: 'ratio-16x9',
  media_image: {
    src: '/path/to/image.jpg',
    alt: 'Featured image',
    width: 800,
    height: 600
  }
} only %}
  {% block overlay %}
    {{ include('vartheme_bs5:badge', {
      label: 'Feature',
      variant: 'text-bg-dark',
      size: 'fs-6 px-2 py-1',
      radius: 'rounded-1'
    }, with_context: false) }}
  {% endblock %}
  {% block content %}
    <h3 class="h5 mb-2">Featured card with badge overlay</h3>
    <p class="mb-3">The badge appears pinned to the top-left of the image.</p>
    <a class="btn btn-primary" href="#">Learn more</a>
  {% endblock %}
{% endembed %}
```

## Example: clickable card (stretched link)

```twig
{% embed 'vartheme_bs5:card-featured' with {
  card_border: true,
  padded: true,
  stretched_link: true,
  link_url: 'https://example.com',
  link_target: '_blank',
  media_position: 'start',
  columns_xs_size: '06_06',
  columns_md_size: '08_04',
  ratio: 'ratio-16x9',
  media_image: {
    src: '/path/to/image.jpg',
    alt: 'Featured image',
    width: 800,
    height: 600
  }
} only %}
  {% block content %}
    <h3 class="h5 mb-2">Clickable featured card</h3>
    <p class="mb-0">The whole card becomes clickable.</p>
  {% endblock %}
{% endembed %}
```

## Example: content only (no media)

```twig
{% embed 'vartheme_bs5:card-featured' with {
  card_border: true,
  padded: true,
  media_position: 'no-media'
} only %}
  {% block content %}
    <h3 class="h5 mb-2">Content only</h3>
    <p class="mb-3">When media_position is no-media, the content column spans full width.</p>
    <a class="btn btn-primary" href="#">Read more</a>
  {% endblock %}
{% endembed %}
```

## Notes

- The media column renders only when `media_position` is `start` or `end` AND either a `media_image` is provided or the `overlay` slot has content. When the overlay slot has content but no image is uploaded, the placeholder image is shown so the overlay has a surface.
- Per-breakpoint column sizes that arrive empty fall back to `columns_xs_size`; the start/content column widths are derived by splitting the `NN_NN` value.
- `media_position: 'end'` reverses the row order with `flex-row-reverse`; the content column spans full width when no media column renders.
- `corner_style` applies to the whole card when `card_border` is enabled, otherwise it rounds the image wrapper only.
- The stretched link is rendered through the `vartheme_bs5:link` component with `stretched-link` and an `aria-label` derived from the content; it only activates when `stretched_link` is enabled and `link_url` is set. Avoid interactive elements in the content slot when using it.
- When the `content` slot is empty, a "Drop content here" placeholder is rendered for editing.
- Images are rendered through the `vartheme_bs5:image` component.
- Boolean props (`card_border`, `padded`, `equal_height`, `stretched_link`) are validated by SDC and arrive as real booleans.
