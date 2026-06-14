# Overlay Card

A Bootstrap card that renders an image as the background and places drag & drop content on top using Bootstrap overlay utilities.

## Bootstrap reference

> [Bootstrap 5.3 — Card](https://getbootstrap.com/docs/5.3/components/card/)

## What it does

Use this component when you need a media-backed overlay card that can:

- render a background image with a fixed crop ratio and fit behavior
- tint the image with a colored overlay layer at an adjustable opacity
- place content on top with horizontal and vertical alignment controls
- apply an optional shadow, content padding, and equal-height wrapper
- optionally turn the whole card into a clickable stretched link

## Files

- `card-overlay.component.yml` — component schema and props
- `card-overlay.twig` — component template
- `README.md` — usage notes and examples
- `card-overlay.mdx` — Storybook docs page
- `card-overlay.stories.json` — Storybook story configuration
- `card-overlay.stories.twig` — Storybook story templates
- `assets/` — placeholder image used by examples

## Props overview

### Media

- `media_image`: Canvas image object used as the background (`src`, `alt`, `width`, `height`)
- `ratio`: image crop ratio — `ratio-auto`, `ratio-16x9`, `ratio-4x3`, `ratio-1x1`, `ratio-21x9`; defaults to `ratio-16x9`
- `fit`: image fit — `object-fit-cover` or `object-fit-contain`; defaults to `object-fit-cover`

### Overlay layer

- `overlay_color`: Bootstrap background utility for the overlay — `bg-transparent`, `bg-dark`, `bg-light`, `bg-primary`, `bg-secondary`, `bg-success`, `bg-danger`, `bg-warning`, `bg-info`, `bg-body`, `bg-body-tertiary`, `bg-white`; defaults to `bg-transparent`
- `overlay_opacity`: Bootstrap opacity utility — `bg-opacity-10`, `bg-opacity-25`, `bg-opacity-50`, `bg-opacity-75`, `bg-opacity-100`; defaults to `bg-opacity-50`

### Layout and appearance

- `padded`: adds `p-4` to the content area; defaults to `true`
- `box_shadow`: `shadow-none`, `shadow-sm`, `shadow`, `shadow-lg`; defaults to `shadow-none`
- `equal_height`: adds `h-100` to the card wrapper; defaults to `false`
- `h_align`: horizontal text alignment — `text-start`, `text-center`, `text-end`; defaults to `text-start`
- `v_align`: vertical alignment — `align-items-start`, `align-items-center`, `align-items-end`; defaults to `align-items-center`

### Link

- `stretched_link`: when enabled and `link_url` is set, the whole card becomes clickable; defaults to `false`
- `link_url`: optional card link URL; defaults to empty
- `link_target`: `default`, `_self`, `_blank`; defaults to `default`

## Slots

- `content` — drag & drop content area rendered on top of the media (text, buttons, other components)

## Example: basic overlay card

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
    <p class="card-text mb-3">Text on top of media for banners, promotions, and featured content.</p>
    {% include 'vartheme_bs5:link' with {
      url: 'https://drupal.org',
      content: 'Read more',
      color: 'light'
    } %}
  {% endblock %}
{% endembed %}
```

## Example: whole card as a link

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
    <p class="card-text mb-0">The full card becomes clickable when the stretched link is enabled.</p>
  {% endblock %}
{% endembed %}
```

## Notes

- The overlay color layer is only rendered when `overlay_color` is not `bg-transparent`; its opacity is applied only in that case.
- Content text defaults to `text-white`, so a darker overlay improves contrast.
- If no content is provided, a small "Drop content here" hint is rendered.
- The stretched link is only rendered when both `stretched_link` is enabled and `link_url` is set; `link_target: default` maps to `_self`.
- Boolean props (`padded`, `equal_height`, `stretched_link`) are validated and defaulted by SDC, so they arrive as real booleans.
