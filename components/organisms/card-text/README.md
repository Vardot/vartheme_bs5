# Text Card

A lightweight Bootstrap card with an optional uploaded icon image above a drag & drop content area. No media column — the content slot is the only editable region.

## Bootstrap reference

> [Bootstrap 5.3 — Card](https://getbootstrap.com/docs/5.3/components/card/)

## What it does

Use this component when you need a plain text card that can:

- optionally show an uploaded icon image (SVG, PNG, WebP) above the content
- align the icon to the left, center, or right
- hold arbitrary drag & drop content (text, buttons, other components)
- apply a brand background color, border, rounded corners, shadow, and optional padding
- optionally turn the whole card into a clickable stretched link

## Files

- `card-text.component.yml` — component schema and props
- `card-text.twig` — component template
- `card-text.scss` / `card-text.css` — component styles
- `README.md` — usage notes and examples
- `card-text.mdx` — Storybook docs page
- `card-text.stories.json` — Storybook story configuration
- `card-text.stories.twig` — Storybook story templates
- `assets/` — placeholder icon used by examples

## Props overview

### Icon

- `icon_image`: optional Canvas image object (`src`, `alt`, `width`, `height`); leave empty to hide the icon area and render a plain text card
- `icon_alignment`: horizontal icon position — `start` (left), `center`, `end` (right); defaults to `start`

### Appearance

- `background_color`: brand background color — `none`, `bg-body-tertiary`, `bg-tertiary`, `bg-accent`, `bg-primary`, `bg-primary-subtle`, `bg-secondary`, `bg-secondary-subtle`, `bg-dark`; defaults to `none`
- `card_border`: adds `border` (otherwise `border-0`); defaults to `false`
- `corner_style`: Bootstrap rounded utility — `rounded-0`, `rounded-1`, `rounded-2`, `rounded-3`, `rounded-4`, `rounded-5`, `rounded-pill`; defaults to `rounded-0`
- `box_shadow`: `shadow-none`, `shadow-sm`, `shadow`, `shadow-lg`; defaults to `shadow-none`
- `padded`: adds `p-4` to the content area; defaults to `false`
- `equal_height`: adds `h-100` to the card wrapper; defaults to `false`

### Link

- `stretched_link`: when enabled and `link_url` is set, the whole card becomes clickable; defaults to `false`
- `link_url`: optional card link URL; defaults to empty
- `link_target`: `default`, `_self`, `_blank`; defaults to `default`

## Slots

- `content` — drag & drop content area for text, buttons, or other components

## Background color options

| Value | Label |
|---|---|
| `none` | None (transparent) |
| `bg-body-tertiary` | Body tertiary |
| `bg-tertiary` | Tertiary |
| `bg-accent` | Accent |
| `bg-primary` | Primary |
| `bg-primary-subtle` | Primary subtle |
| `bg-secondary` | Secondary |
| `bg-secondary-subtle` | Secondary subtle |
| `bg-dark` | Dark |

## Example: plain text card (no icon)

```twig
{% embed 'vartheme_bs5:card-text' with {
  card_border: true,
  background_color: 'none',
  padded: true,
  box_shadow: 'shadow-sm',
  corner_style: 'rounded-3'
} %}
  {% block content %}
    <h3 class="h5 mb-2">Card title</h3>
    <p class="mb-3">A simple text card for descriptions, highlights, or small content blocks.</p>
    <a href="#" class="btn btn-primary">Action</a>
  {% endblock %}
{% endembed %}
```

## Example: with an icon (left-aligned)

```twig
{% embed 'vartheme_bs5:card-text' with {
  icon_image: { src: '/path/to/icon.svg', alt: '', width: 64, height: 64 },
  icon_alignment: 'start',
  card_border: true,
  padded: true,
  box_shadow: 'shadow-sm',
  corner_style: 'rounded-3'
} %}
  {% block content %}
    <h3 class="h5 mb-2">Card with icon</h3>
    <p class="mb-0">The icon appears above the content when icon_image is uploaded.</p>
  {% endblock %}
{% endembed %}
```

## Example: linked card (entire card clickable)

```twig
{% embed 'vartheme_bs5:card-text' with {
  card_border: true,
  padded: true,
  box_shadow: 'shadow-sm',
  corner_style: 'rounded-3',
  stretched_link: true,
  link_url: 'https://example.com',
  link_target: '_blank'
} %}
  {% block content %}
    <h3 class="h5 mb-2">Clickable card</h3>
    <p class="mb-0">The entire card acts as a link.</p>
  {% endblock %}
{% endembed %}
```

## Notes

- When `icon_image` is empty, the icon area is hidden and the card renders as a plain text card (no placeholder is shown).
- The icon is rendered via the `vartheme_bs5:image` component using `object-fit-contain` and `w-auto`; SVGs are recommended.
- Relative `assets/` example paths are automatically rewritten against the component path.
- If no content is provided, a small "Drop content here" hint is rendered.
- `background_color: none` applies no background utility; pair `bg-primary-subtle` or `bg-secondary-subtle` with `card_border: false` and `box_shadow: shadow-none` for minimal highlight cards.
- The stretched link is only rendered when both `stretched_link` is enabled and `link_url` is set; `link_target: default` maps to `_self`.
- Boolean props (`card_border`, `padded`, `equal_height`, `stretched_link`) are validated and defaulted by SDC, so they arrive as real booleans.
