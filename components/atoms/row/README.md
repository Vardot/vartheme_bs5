# Row

A Bootstrap `.row` wrapper with gutters, responsive `row-cols` presets, alignment controls, background utilities, optional background image with overlay, and spacing utilities.

## Bootstrap reference

> [Bootstrap 5.3 — Grid system](https://getbootstrap.com/docs/5.3/layout/grid/)

## What it does

Use this component when you need a row wrapper that can:

- output a `.row` with a configurable gutter and an optional container wrapper
- apply responsive `row-cols-*` presets for mobile and desktop
- align and distribute columns vertically and horizontally
- apply a Bootstrap background utility, optional full-bleed background, and an optional background image with a color overlay
- control top/bottom padding and margin with Bootstrap spacing utilities

## Files

- `row.component.yml` — component schema and props
- `row.twig` — component template
- `README.md` — usage notes and examples
- `row.mdx` — Storybook docs page
- `row.stories.json` — Storybook story configuration
- `row.stories.twig` — Storybook story templates

## Props overview

### Layout

- `container_type`: `none`, `container`, or `container-fluid`; defaults to `container`
- `gutter`: Bootstrap gutter size `0`–`5` (applied as `g-*`); defaults to `3`
- `columns_mobile`: columns per row on mobile (xs) — `none`, `1`–`6`; defaults to `none`
- `columns_desktop`: columns per row from the md breakpoint up — `none`, `1`–`6`; defaults to `none`

### Alignment

- `align_items`: vertical alignment — `none`, `align-items-start`, `align-items-center`, `align-items-end`, `align-items-stretch`; defaults to `none`
- `justify_content`: horizontal distribution — `none`, `justify-content-start`, `justify-content-center`, `justify-content-end`, `justify-content-between`, `justify-content-around`, `justify-content-evenly`; defaults to `none`

### Background and appearance

- `background_color`: Bootstrap background utility — `none`, `bg-light`, `bg-body`, `bg-body-secondary`, `bg-body-tertiary`, `bg-primary`, `bg-secondary`, `bg-success`, `bg-danger`, `bg-warning`, `bg-info`, `bg-dark`; defaults to `none`
- `bg_edge2edge`: enables full-bleed background (adds `bg-edge2edge`); defaults to `false`
- `background_image`: optional background image object applied to the wrapper
- `overlay_color`: overlay color on top of the background image — `none`, `dark`, `light`; defaults to `dark`
- `overlay_opacity`: overlay opacity — `0`, `25`, `50`, `75`, `100`; defaults to `50`

### Spacing

- `padding_block_start`: `pt-0`–`pt-5`; defaults to `pt-0`
- `padding_block_end`: `pb-0`–`pb-5`; defaults to `pb-0`
- `margin_block_start`: `mt-0`–`mt-5`; defaults to `mt-0`
- `margin_block_end`: `mb-0`–`mb-5`; defaults to `mb-0`

## Slots

- `content` — the row columns content

## Available attributes

- `attributes` / `row_attributes`: the `.row` element
- `wrapper_attributes`: the outer wrapper element
- `container_attributes`: the optional container element

## Example

```twig
{% embed 'vartheme_bs5:row' with {
  container_type: 'container',
  gutter: '4',
  columns_mobile: '1',
  columns_desktop: '3',
  align_items: 'align-items-center',
  justify_content: 'justify-content-between',
  background_color: 'bg-light',
  padding_block_start: 'pt-5',
  padding_block_end: 'pb-5',
  margin_block_end: 'mb-4',
} only %}
  {% block content %}
    <div class="col">Column one</div>
    <div class="col">Column two</div>
    <div class="col">Column three</div>
  {% endblock %}
{% endembed %}
```

## Example: background image with overlay

```twig
{% embed 'vartheme_bs5:row' with {
  container_type: 'container-fluid',
  bg_edge2edge: true,
  background_image: {
    src: '/path/to/image.jpg',
    alt: 'Decorative background',
    width: 1600,
    height: 900
  },
  overlay_color: 'dark',
  overlay_opacity: 75,
  padding_block_start: 'pt-5',
  padding_block_end: 'pb-5',
} only %}
  {% block content %}
    <div class="col text-white">Content over the image.</div>
  {% endblock %}
{% endembed %}
```

## Notes

- Optional utility classes (`row-cols-*`, alignment, background, edge-to-edge) are only added when their prop is not `none`/`false`.
- The background image source is resolved from a string or an iterable value (`src`, `url`, or `uri`), and `public://`/`private://` stream wrappers are converted with `file_url()`.
- The overlay is rendered as a `linear-gradient` over the background image when `overlay_color` is not `none` and `overlay_opacity` is greater than `0`.
- When `container_type` is `none`, the row is rendered directly inside the wrapper without a container element.
- The boolean prop `bg_edge2edge` arrives as a real boolean from SDC; only a presence fallback is applied in the template.
