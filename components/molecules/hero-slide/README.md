# Hero Slide

The **Hero Slide** component renders a single slide item for a hero carousel. It supports overlay, split, and text-only layouts, optional media, rich text content, and a CTA button powered by the shared button component.

Use this component when you need one slide entry with consistent typography, spacing, and Bootstrap-friendly utility classes.

---

# Features

- Single slide item for a hero carousel
- Supports **overlay**, **split**, and **text-only** layouts
- Optional image with fallback handling
- CTA button rendered through `vartheme_bs5:button`
- Per-slide control of title tag, title size, text alignment, colors, and spacing behavior
- Bootstrap utility class friendly prop values
- Can inherit layout behavior from the slider container or override it per slide

---

# Main Properties

## Content

### `title`
Main heading for the slide.

Example:

```yaml
title: "Build faster with Varbase"
```

### `content`
Rich text body content.

Example:

```yaml
content: "<p>Create flexible landing pages with reusable components and clean Bootstrap markup.</p>"
```

### `button_text`
Text shown on the CTA button.

```yaml
button_text: "Learn more"
```

### `button_url`
Link for the CTA button.

```yaml
button_url: "/about"
```

### `button_variant`
Bootstrap button variant passed directly to the shared button component.

Available options:

```yaml
btn-primary
btn-secondary
btn-light
btn-dark
btn-outline-light
btn-outline-dark
```

---

## Media

### `media`
Image object for the slide.

Example:

```yaml
media:
  src: assets/hero-slider-image.webp
  alt: Hero image
  width: 1600
  height: 700
```

### `media_position`
Controls how the image is displayed.

Available options:

```yaml
inherit
overlay
start
end
none
```

- `inherit` follows the container setting
- `overlay` uses the image as the slide background
- `start` places media on the left in split layout
- `end` places media on the right in split layout
- `none` hides media and shows text only

---

## Presentation

### `title_tag`
Available options:

```yaml
h2
h3
h4
h5
h6
```

### `title_size`
Available options:

```yaml
display-3
display-4
display-5
h1
h2
h3
```

### `content_max_width`
Controls text column width.

```yaml
narrow
normal
wide
```

### `vertical_alignment`
Controls vertical alignment of slide content.

```yaml
start
center
end
```

### `text_align`
Uses Bootstrap text alignment utilities directly.

```yaml
text-start
text-center
text-end
```

### `text_color`

```yaml
text-white
text-dark
```

### `split_gap`
Gap between columns in split layout.

```yaml
none
sm
md
lg
```

### `background_color`
Background color used mainly in split and text-only layouts.

Example options:

```yaml
bg-transparent
bg-white
bg-light
bg-dark
bg-black
bg-primary
bg-secondary
bg-success
bg-danger
bg-warning
bg-info
```

### `overlay_bg`
Overlay background color when using overlay layout.

### `overlay_opacity`
Overlay opacity utility class.

```yaml
opacity-10
opacity-25
opacity-50
opacity-75
opacity-100
```

---

# Usage Examples

## Example 1: Overlay slide

```twig
{{ include('vartheme_bs5:hero-slide', {
  title: 'Build faster with Varbase',
  content: '<p>Create flexible landing pages with reusable components and clean Bootstrap markup.</p>',
  button_text: 'Get started',
  button_url: '/get-started',
  button_variant: 'btn-primary',
  media: {
    src: 'assets/hero-slider-image.webp',
    alt: 'Hero image'
  },
  media_position: 'overlay',
  title_tag: 'h2',
  title_size: 'display-5',
  text_align: 'text-start',
  text_color: 'text-white',
  overlay_bg: 'bg-dark',
  overlay_opacity: 'opacity-50'
}, with_context = false) }}
```

## Example 2: Split layout with image at start

```twig
{{ include('vartheme_bs5:hero-slide', {
  title: 'Design with confidence',
  content: '<p>Use reusable pieces and keep the markup maintainable.</p>',
  button_text: 'Explore components',
  button_url: '/components',
  button_variant: 'btn-dark',
  media: {
    src: 'assets/hero-slider-image.webp',
    alt: 'Slide image'
  },
  media_position: 'start',
  background_color: 'bg-light',
  text_color: 'text-dark',
  split_gap: 'md',
  content_max_width: 'normal'
}, with_context = false) }}
```

## Example 3: Text-only slide

```twig
{{ include('vartheme_bs5:hero-slide', {
  title: 'Content first',
  content: '<p>Use this mode when no image is needed.</p>',
  button_text: 'Read more',
  button_url: '/read-more',
  media_position: 'none',
  background_color: 'bg-black',
  text_color: 'text-white',
  text_align: 'text-center'
}, with_context = false) }}
```

---

# Notes

- `active` should usually be handled by the slider container, but it can be set on a slide if needed.
- `media_position: inherit` is useful when the container controls the layout for all slides.
- CTA rendering depends on both `button_text` and `button_url` being available.
