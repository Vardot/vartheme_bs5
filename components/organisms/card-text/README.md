# Text Card

A lightweight text-only Bootstrap card with a single drag-and-drop content slot and no media area. Controls border, padding, background color, shadow, border radius, equal height, and full-card stretched link.

## Properties

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
| `none` | None (default) |
| `bg-body-tertiary` | Body tertiary |
| `bg-tertiary` | Tertiary |
| `bg-accent` | Accent |
| `bg-primary` | Primary |
| `bg-primary-subtle` | Primary subtle |
| `bg-secondary` | Secondary |
| `bg-secondary-subtle` | Secondary subtle |
| `bg-dark` | Dark |

## Attributes

| Attribute | Description |
|---|---|
| `card_attributes` | HTML attributes for the card element. |
| `content_attributes` | HTML attributes for the content wrapper element. |

## Slots

| Slot | Description |
|---|---|
| `content` | Card content slot — drag and drop text, buttons, and other elements here. |

## Usage

```twig
{% embed 'vartheme_bs5:card-text' with {
  card_border: true,
  background_color: 'none',
  padded: true,
  box_shadow: 'shadow-sm',
  corner_style: 'rounded-3',
  equal_height: false,
  stretched_link: false,
  link_url: '',
  link_target: 'default',
} %}
  {% block content %}
    <h3 class="h5 mb-2">Card title</h3>
    <p class="mb-3">A simple text card for descriptions, highlights, or small content blocks.</p>
    <a href="#" class="btn btn-primary">Action</a>
  {% endblock %}
{% endembed %}
```

### Linked card (entire card clickable)

```twig
{% embed 'vartheme_bs5:card-text' with {
  card_border: true,
  background_color: 'none',
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

### Subtle background card

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
    <p class="mb-0">Uses a subtle tinted background for soft emphasis.</p>
  {% endblock %}
{% endembed %}
```
