# Media banner

Media banner displays content over a background image with an optional overlay and flexible content positioning.

## Features

- Optional background image
- Overlay background color and opacity controls
- Content positioning presets
- Ribbon or large height options
- Optional edge-to-edge background treatment
- Slot-based content composition

## Props

### `container_type`
Controls the content container wrapper.

Options:
- `container`
- `container-fluid`
- `container-sm`
- `container-md`
- `container-lg`
- `container-xl`
- `container-xxl`
- `none`

### `bg_edge2edge`
Adds `bg-edge2edge` to the outer section when enabled.

### `height`
Controls the banner height.

Options:
- `ribbon`
- `large`

### `flex_position`
Controls vertical placement and horizontal alignment of the content.

Options:
- `top-left`
- `center-left`
- `bottom-left`
- `hero-center`

### `overlay_bg`
Bootstrap background utility class for the overlay.

Examples:
- `bg-dark`
- `bg-primary`
- `bg-white`

### `overlay_opacity`
Bootstrap opacity utility class for the overlay.

Examples:
- `opacity-25`
- `opacity-50`
- `opacity-75`

### `content_width`
Bootstrap width utility class for the content wrapper.

Options:
- `w-100`
- `w-75`
- `w-50`
- `w-25`

### `object_position`
Controls the background image position.

Options:
- `top`
- `center`
- `bottom`

### `media`
Background image object.

## Slots

### `media_banner_slot`
Use this slot for the banner content.

## Example

```twig
{% embed 'vartheme_bs5:media-banner' with {
  height: 'large',
  flex_position: 'hero-center',
  overlay_bg: 'bg-dark',
  overlay_opacity: 'opacity-50',
  content_width: 'w-75',
  bg_edge2edge: true,
  media: {
    src: 'assets/media-banner.webp',
    alt: 'Background image'
  }
} %}
  {% block media_banner_slot %}
    <div class="text-white">
      <h2 class="display-5 mb-3">Media banner title</h2>
      <p class="lead mb-0">Add any rich content inside the media banner slot.</p>
    </div>
  {% endblock %}
{% endembed %}
```
