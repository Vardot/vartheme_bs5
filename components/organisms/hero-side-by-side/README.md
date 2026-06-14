# Hero side by side

A two-column hero with text content on one side and an image on the other, with optional background color or background image, overlay control, spacing, and a single CTA button.

## What it does

Use this component when you need a side-by-side hero that can:

- render a heading and rich-text description in one column and an image in the other
- place the image on the start (left) or end (right) side
- apply a Bootstrap background color or an optional background image with an overlay
- control overlay color and opacity over the background image
- control vertical padding with Bootstrap `py-*` utilities
- optionally span the background full width with `bg-edge2edge`
- render an optional CTA button with variant, outline, size, and target controls

## Files

- `hero-side-by-side.component.yml` — component schema and props
- `hero-side-by-side.twig` — component template
- `README.md` — usage notes and examples
- `hero-side-by-side.mdx` — Storybook docs page
- `hero-side-by-side.stories.json` — Storybook story configuration
- `hero-side-by-side.stories.twig` — Storybook story templates

## Props overview

### Content

- `heading`: main title text, rendered via `vartheme_bs5:heading`
- `heading_level`: heading level — `2`, `3`, `4`, `5`, or `6`; defaults to `2`
- `text`: description content (HTML); rendered unescaped
- `align`: content alignment — `text-start`, `text-center`, `text-end`; defaults to `text-start`

### Media

- `image`: main image object shown in the second column, rendered via `vartheme_bs5:image`
- `image_position`: image side — `right` (image end), `left` (image start); defaults to `right`

### Background and appearance

- `background_color`: section background utility — `bg-none`, `bg-white`, `bg-primary`, `bg-secondary`, `bg-success`, `bg-danger`, `bg-warning`, `bg-info`, `bg-light`, `bg-dark`; defaults to `bg-white`
- `content_color`: text color for heading and description — `text-white`, `text-dark`; defaults to `text-dark`
- `background_image`: optional background image applied to the section
- `background_overlay_color`: overlay over the background image — `bg-none`, `bg-dark`, `bg-light`, `bg-primary`, `bg-secondary`; defaults to `bg-none`
- `background_overlay_opacity`: overlay opacity — `0`, `25`, `50`, `75`, `100`; defaults to `50`
- `bg_edge2edge`: full-width edge-to-edge background; defaults to `false`
- `vertical_padding`: Bootstrap `py-*` utility — `py-0`, `py-3`, `py-4`, `py-5`; defaults to `py-4`

### Button

- `button_label`: optional CTA label
- `button_url`: optional CTA link
- `button_variant`: Bootstrap button variant — `btn-primary`, `btn-secondary`, `btn-success`, `btn-danger`, `btn-warning`, `btn-info`, `btn-light`, `btn-dark`, `btn-link`; defaults to `btn-primary`
- `button_outline`: use the Bootstrap outline style (except for `btn-link`); defaults to `false`
- `button_size`: button size — `btn-md`, `btn-sm`, `btn-lg`; defaults to `btn-md`
- `button_target`: link target — `self`, `blank`; defaults to `self`

## Available attributes

- `attributes` / `section_attributes`: the `<section>` wrapper
- `overlay_attributes`: the background overlay wrapper
- `container_attributes`: the container wrapper
- `row_attributes`: the row wrapper
- `content_attributes`: the text column wrapper
- `content_inner_attributes`: the text wrap inside the text column
- `body_attributes`: the body text wrapper
- `media_attributes`: the image column wrapper

## Example: image on the right with a CTA

```twig
{% include 'vartheme_bs5:hero-side-by-side' with {
  heading: 'Build better digital experiences',
  heading_level: 2,
  text: '<p>Create flexible, scalable Drupal experiences using modern components.</p>',
  image: {
    src: 'assets/image-placeholder.svg',
    alt: 'Hero image',
    width: 1200,
    height: 900
  },
  image_position: 'right',
  background_color: 'bg-light',
  content_color: 'text-dark',
  button_label: 'Get started',
  button_url: 'https://example.com/',
  button_variant: 'btn-primary',
  button_size: 'btn-md'
} only %}
```

## Example: background image with overlay

```twig
{% include 'vartheme_bs5:hero-side-by-side' with {
  bg_edge2edge: true,
  heading: 'Designed for impact',
  heading_level: 2,
  text: '<p>Pair a full-width background image with a dark overlay.</p>',
  image: { src: '/path/to/side.jpg', alt: 'Side image' },
  image_position: 'left',
  content_color: 'text-white',
  background_image: { src: '/path/to/background.jpg', alt: '' },
  background_overlay_color: 'bg-dark',
  background_overlay_opacity: 50,
  vertical_padding: 'py-5',
  button_label: 'Learn more',
  button_url: 'https://example.com/',
  button_variant: 'btn-light',
  button_outline: true
} only %}
```

## Notes

- The overlay is only rendered when both `background_overlay_color` is not `bg-none` and a `background_image` is present.
- When `button_outline` is enabled, the selected variant is switched to its `btn-outline-*` equivalent, except for `btn-link`.
- The CTA is only rendered when both `button_label` and `button_url` are set.
- `image_position: left` reorders the columns at the `lg` breakpoint so the image appears first.
- Button alignment follows `align`: `text-center` centers the button, otherwise it aligns left.
