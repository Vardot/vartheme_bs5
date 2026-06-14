# Impressed Card

A stacked Bootstrap card with an optional media image (top or bottom), a badge overlay slot, and a drag & drop content area.

## Bootstrap reference

> [Bootstrap 5.3 — Card](https://getbootstrap.com/docs/5.3/components/card/)

## What it does

Use this component when you need a stacked media card that can:

- place an uploaded image above or below the content
- crop the image to a fixed ratio and control how it fits
- drop a badge or inline element over the top-left corner of the image
- hold arbitrary drag & drop content (text, buttons, other components)
- apply Bootstrap background, border, rounded corners, shadow, and optional padding
- optionally turn the whole card into a clickable stretched link

## Files

- `card-impressed.component.yml` — component schema and props
- `card-impressed.twig` — component template
- `card-impressed.scss` / `card-impressed.css` — component styles
- `README.md` — usage notes and examples
- `card-impressed.mdx` — Storybook docs page
- `card-impressed.stories.json` — Storybook story configuration
- `card-impressed.stories.twig` — Storybook story templates
- `assets/` — placeholder image used by examples

## Props overview

### Media

- `media_position`: `top` or `bottom`; defaults to `top`
- `media_image`: Canvas image object (`src`, `alt`, `width`, `height`)
- `ratio`: image crop ratio — `ratio-auto`, `ratio-16x9`, `ratio-4x3`, `ratio-1x1`, `ratio-21x9`; defaults to `ratio-16x9`
- `fit`: image fit — `object-fit-cover` or `object-fit-contain`; defaults to `object-fit-cover`

### Appearance

- `background_color`: Bootstrap background utility — `bg-transparent`, `bg-body`, `bg-body-tertiary`, `bg-white`, `bg-light`, `bg-dark`, `bg-primary`, `bg-secondary`, `bg-success`, `bg-danger`, `bg-warning`, `bg-info`; defaults to `bg-transparent`
- `card_border`: adds `border` (otherwise `border-0`); defaults to `false`
- `corner_style`: Bootstrap rounded utility — `rounded-0`, `rounded-1`, `rounded-2`, `rounded-3`, `rounded-4`, `rounded-pill`; defaults to `rounded-0`
- `box_shadow`: `shadow-none`, `shadow-sm`, `shadow`, `shadow-lg`; defaults to `shadow-none`
- `padded`: adds `p-4` to the content area; defaults to `false`
- `equal_height`: adds `h-100` to the card wrapper; defaults to `false`

### Link

- `stretched_link`: when enabled and `link_url` is set, the whole card becomes clickable; defaults to `false`
- `link_url`: optional card link URL; defaults to empty
- `link_target`: `default`, `_self`, `_blank`; defaults to `default`

## Slots

- `overlay` — badge overlay rendered in the top-left corner of the media image; drop a Badge component or any inline element
- `content` — drag & drop content area for text, buttons, or other components

## Example: basic card

```twig
{% embed 'vartheme_bs5:card-impressed' with {
  media_position: 'top',
  media_image: {
    src: 'https://picsum.photos/id/1011/1200/800',
    alt: 'A scenic photo'
  },
  ratio: 'ratio-16x9',
  fit: 'object-fit-cover',
  padded: true,
  card_border: true,
  corner_style: 'rounded-3',
  box_shadow: 'shadow',
  background_color: 'bg-body'
} only %}
  {% block content %}
    <h3 class="h5 mb-2">Card title</h3>
    <p class="mb-0">Card content goes here.</p>
  {% endblock %}
{% endembed %}
```

## Example: with a badge overlay

```twig
{% embed 'vartheme_bs5:card-impressed' with {
  media_position: 'top',
  media_image: { src: '/path/to/photo.jpg', alt: 'Photo' },
  padded: true
} only %}
  {% block overlay %}
    <span class="badge text-bg-primary">New</span>
  {% endblock %}
  {% block content %}
    <h3 class="h5 mb-0">Featured article</h3>
  {% endblock %}
{% endembed %}
```

## Example: whole card as a link

```twig
{% embed 'vartheme_bs5:card-impressed' with {
  link_url: '/example',
  link_target: '_self',
  stretched_link: true
} only %}
  {% block content %}
    <h3 class="h5 mb-0">Clickable card</h3>
  {% endblock %}
{% endembed %}
```

## Notes

- The `overlay` slot is rendered inside the media area. When the overlay slot is filled before an image is selected, the component keeps a placeholder image area so the overlay drop zone stays visible.
- If no content is provided, a small "Drop content here" hint is rendered.
- `media_position: bottom` reverses the stack order using `flex-column-reverse`.
- The stretched link is only rendered when both `stretched_link` is enabled and `link_url` is set; `link_target: default` maps to `_self`.
- Boolean props (`card_border`, `padded`, `equal_height`, `stretched_link`) are validated and defaulted by SDC, so they arrive as real booleans.
