# Impressed Card

Stacked card layout with an optional media image (top or bottom) and a single drag & drop content area.
The markup uses Bootstrap 5 utility classes so it works cleanly with the latest Bootstrap styles.

## Features

- Media image controlled via the **Media upload** prop (top or bottom).
- One **content** slot for drag & drop text, buttons, or other components.
- Optional whole-card link using Bootstrap’s `stretched-link` (toggle via **Stretched link**).
- Bootstrap utilities for background, border, rounded corners, and shadow.
- Optional content padding via the **Padded** checkbox (adds `p-4`).

## Usage

### Basic

```twig
{% include 'vartheme_bs5:card-impressed' with {
  media_position: 'top',
  media_image: {
    src: 'https://picsum.photos/id/1011/1200/800',
    alt: 'A scenic photo'
  },
  padded: true,
  ratio: 'ratio-16x9',
  fit: 'object-fit-cover',
  card_border: true,
  corner_style: 'rounded-3',
  box_shadow: 'shadow',
  background_color: 'bg-body'
} only %}
  {% block content %}
    <h3 class="h5 mb-2">Card title</h3>
    <p class="mb-0">Card content goes here.</p>
  {% endblock %}
{% endinclude %}
```

### Whole card as a link

```twig
{% include 'vartheme_bs5:card-impressed' with {
  link_url: '/example',
  link_target: '_self',
  stretched_link: true
} only %}
  {% block content %}
    <h3 class="h5 mb-0">Clickable card</h3>
  {% endblock %}
{% endinclude %}
```

## Props

| Prop | Type | Default | Notes |
| --- | --- | --- | --- |
| `media_position` | string | `top` | `top` or `bottom` |
| `media_image` | object | — | Media image object (Canvas image schema) |
| `ratio` | string | `ratio-auto` | Image crop ratio passed to `vartheme_bs5:image` |
| `fit` | string | `object-fit-cover` | Image fit behavior passed to `vartheme_bs5:image` |
| `card_border` | boolean | `false` | Adds `border` (otherwise `border-0`) |
| `background_color` | string | `bg-transparent` | Bootstrap `bg-*` utility |
| `padded` | boolean | `false` | When `true`, adds `p-4` to the content area |
| `box_shadow` | string | `shadow-none` | Bootstrap shadow utility |
| `corner_style` | string | `rounded-0` | Bootstrap rounded utility |
| `equal_height` | boolean | `false` | Adds `h-100` |
| `stretched_link` | boolean | `false` | When enabled and `link_url` is set, the whole card becomes clickable |
| `link_url` | string | `''` | Card link URL |
| `link_target` | string | `default` | `default`, `_self`, `_blank` |

## Slots

- `content` — Drag & drop content area.

## Notes

- If no media image is provided, a local placeholder is shown.
- If no content is provided, a small “Drop content here” hint is rendered.
