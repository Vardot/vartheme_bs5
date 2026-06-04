# Text Card

A lightweight Bootstrap card with an **optional uploaded icon image** above the drag-and-drop content area. No media column — the content slot is the only editable region. All styling is controlled through Bootstrap 5 utility classes.

---

## Icon (optional)

The icon is entirely optional. When `icon_image` is empty, the card renders as a plain text card with no icon area. Upload an SVG, PNG, or WebP to display the icon above the content slot.

| Prop | Type | Default | Description |
|---|---|---|---|
| `icon_image` | object | — | Canvas image ref (`$ref: json-schema-definitions://canvas.module/image`). Leave empty to hide the icon area. |
| `icon_alignment` | string | `start` | Horizontal icon position: `start` (left), `center`, `end` (right). |

---

## Card style

| Property | Type | Default | Description |
|---|---|---|---|
| `card_border` | boolean | `false` | Adds Bootstrap default border to the card. |
| `background_color` | string | `none` | Background utility class applied to the card. |
| `padded` | boolean | `false` | Adds `p-4` padding to the content wrapper. |
| `box_shadow` | string | `shadow-none` | Bootstrap shadow utility (`shadow-none`, `shadow-sm`, `shadow`, `shadow-lg`). |
| `corner_style` | string | `rounded-0` | Bootstrap border-radius utility (`rounded-0` … `rounded-5`, `rounded-pill`). |
| `equal_height` | boolean | `false` | Adds `h-100` to the card wrapper for grid row alignment. |
| `stretched_link` | boolean | `false` | Makes the entire card clickable when `link_url` is set. |
| `link_url` | string | `''` | Optional URL for the card link. |
| `link_target` | string | `default` | Link target: `default`, `_self`, or `_blank`. |

### Background color options

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

---

## Slots

| Slot | Description |
|---|---|
| `content` | Drag & drop content slot — text, buttons, and other elements go here. |

---

## Usage

### Plain text card (no icon)

```twig
{% embed 'vartheme_bs5:card-text' with {
  card_border: true,
  background_color: 'none',
  padded: true,
  box_shadow: 'shadow-sm',
  corner_style: 'rounded-3',
} %}
  {% block content %}
    <h3 class="h5 mb-2">Card title</h3>
    <p class="mb-3">A simple text card for descriptions, highlights, or small content blocks.</p>
    <a href="#" class="btn btn-primary">Action</a>
  {% endblock %}
{% endembed %}
```

### With icon (left-aligned)

```twig
{% embed 'vartheme_bs5:card-text' with {
  icon_image: { src: '/path/to/icon.svg', alt: '', width: 64, height: 64 },
  icon_alignment: 'start',
  card_border: true,
  background_color: 'none',
  padded: true,
  box_shadow: 'shadow-sm',
  corner_style: 'rounded-3',
} %}
  {% block content %}
    <h3 class="h5 mb-2">Card with icon</h3>
    <p class="mb-3">Icon appears above the content when icon_image is uploaded.</p>
    <a href="#" class="btn btn-primary">Action</a>
  {% endblock %}
{% endembed %}
```

### Linked card (entire card clickable)

```twig
{% embed 'vartheme_bs5:card-text' with {
  card_border: true,
  padded: true,
  box_shadow: 'shadow-sm',
  corner_style: 'rounded-3',
  stretched_link: true,
  link_url: 'https://example.com',
  link_target: '_blank',
} %}
  {% block content %}
    <h3 class="h5 mb-2">Clickable card</h3>
    <p class="mb-0">Entire card acts as a link.</p>
  {% endblock %}
{% endembed %}
```

### Primary subtle background

```twig
{% embed 'vartheme_bs5:card-text' with {
  card_border: false,
  background_color: 'bg-primary-subtle',
  padded: true,
  box_shadow: 'shadow-none',
  corner_style: 'rounded-3',
} %}
  {% block content %}
    <h3 class="h5 mb-2">Highlighted card</h3>
    <p class="mb-0">Soft tinted background for gentle emphasis without full primary weight.</p>
  {% endblock %}
{% endembed %}
```

---

## Notes

- The icon is uploaded via Canvas Media Library. SVGs are recommended — they scale perfectly at any size.
- When `icon_image` is empty, the entire icon area is hidden. The card behaves as a plain text card.
- Unlike the **Icon Text Card** (`card-icon-text`), this component shows NO placeholder when no icon is uploaded.
- `stretched_link` requires `link_url` — without a URL the stretched link is not rendered.
- Pair `bg-primary-subtle` or `bg-secondary-subtle` with `card_border: false` and `box_shadow: shadow-none` for minimal highlight cards.
