# Overlay Card

A card component that renders an image as the background and places content on top using Bootstrap overlay utilities.

## Features

- Background image rendered with `vartheme_bs5:image`
- Optional image ratio and fit controls
- Optional content padding with `p-4`
- Overlay color and opacity controls
- Horizontal and vertical content alignment
- Optional equal-height card wrapper
- Optional stretched link for whole-card click behavior
- Single content slot for text, buttons, and other components

## Properties

- `media_image`: Image object used as the card background
- `ratio`: Image ratio utility (`ratio-auto`, `ratio-16x9`, `ratio-4x3`, `ratio-1x1`, `ratio-21x9`)
- `fit`: Image fit utility for fixed ratios (`object-fit-cover`, `object-fit-contain`)
- `padded`: Adds `p-4` to the card body when enabled
- `box_shadow`: Bootstrap shadow utility for the card wrapper
- `overlay_color`: Bootstrap background color utility for the overlay layer
- `overlay_opacity`: Bootstrap background opacity utility for the overlay layer
- `equal_height`: Adds `h-100` to the card wrapper
- `h_align`: Horizontal text alignment utility
- `v_align`: Vertical alignment utility for the overlay content wrapper
- `stretched_link`: Enables a stretched link when `link_url` is provided
- `link_url`: Optional card link URL
- `link_target`: Link target for the card link

## Slots

- `content`: Main overlay content area

## Example

### Basic example

```twig
{% embed 'vartheme_bs5:card-overlay' with {
  media_image: {
    src: 'https://via.placeholder.com/1200x675',
    alt: 'Overlay card example'
  },
  ratio: 'ratio-16x9',
  fit: 'object-fit-cover',
  padded: true,
  overlay_color: 'bg-dark',
  overlay_opacity: 'bg-opacity-50',
  h_align: 'text-start',
  v_align: 'align-items-end'
} %}
  {% block content %}
    <h3 class="card-title mb-2">Overlay card title</h3>
    <p class="card-text mb-3">Use this component for banners, promotions, and featured content with text on top of media.</p>
    {% include 'vartheme_bs5:link' with {
      url: 'https://drupal.org',
      content: 'Read more',
      color: 'light'
    } %}
  {% endblock %}
{% endembed %}
```

### Whole-card link example

```twig
{% embed 'vartheme_bs5:card-overlay' with {
  media_image: {
    src: 'https://via.placeholder.com/1200x675',
    alt: 'Linked overlay card example'
  },
  ratio: 'ratio-21x9',
  fit: 'object-fit-cover',
  padded: true,
  overlay_color: 'bg-primary',
  overlay_opacity: 'bg-opacity-50',
  stretched_link: true,
  link_url: 'https://example.com',
  link_target: '_blank'
} %}
  {% block content %}
    <h3 class="card-title mb-2">Linked overlay card</h3>
    <p class="card-text mb-0">The full card becomes clickable when stretched link is enabled.</p>
  {% endblock %}
{% endembed %}
```
