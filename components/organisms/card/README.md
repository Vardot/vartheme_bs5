# Card

A flexible Bootstrap card component with optional image layouts, background themes, padding control, and link/button support.

## Features

- Fixed heading output as `h3`
- Four image layout options:
  - Image on top
  - Image on start
  - Image on end
  - Image on bottom
- Optional vertical content alignment for left and right layouts
- Optional body padding with `p-4`
- Optional card link or button link
- Bootstrap utility classes only
- Uses the `vartheme_bs5:image` component for images

## Available props

### `orientation`
Controls how the image and content are arranged.

Options:
- `image-top` — Image on top
- `image-left` — Image on start
- `image-right` — Image on end
- `image-bottom` — Image on bottom

### `content_vertical`
Controls vertical alignment of the content when using `image-left` or `image-right`.

Options:
- `justify-content-start` — Top
- `justify-content-center` — Center
- `justify-content-end` — Bottom

### `heading_text`
Card heading text.

### `text`
Card description text. Supports multiline input.

### `media`
Image object.

Example:
```yaml
media:
  src: assets/card-placeholder.svg
  alt: Placeholder card image
  width: 1200
  height: 900
```

### `media_ratio`
Controls the image ratio for top and bottom layouts.

Options:
- `auto`
- `ratio-16x9`
- `ratio-4x3`
- `ratio-1x1`

### `background`
Controls the card background theme.

Options:
- `bg-body`
- `bg-light`
- `bg-primary text-white`
- `bg-dark text-white`

### `shadow`
Controls the card shadow.

Options:
- `shadow-sm`
- `shadow`
- `shadow-lg`

### `has_padding`
Adds `p-4` to the card body when enabled.

### `url`
Optional link URL.

### `button_label`
If set together with `url`, a button is shown inside the card.

### `button_variant`
Controls the button style.

Options:
- `btn-primary`
- `btn-secondary`
- `btn-success`
- `btn-danger`
- `btn-warning`
- `btn-info`
- `btn-light`
- `btn-dark`
- `btn-link`

## Example: simple card

```twig
{{ include('vartheme_bs5:card', {
  heading_text: 'Card title',
  text: 'A short description goes here.',
  orientation: 'image-top',
  media: {
    src: 'assets/card-placeholder.svg',
    alt: 'Placeholder card image',
    width: 1200,
    height: 900
  },
  media_ratio: 'ratio-16x9',
  background: 'bg-body',
  shadow: 'shadow',
  has_padding: true
}) }}
```

## Example: horizontal card with button

```twig
{{ include('vartheme_bs5:card', {
  heading_text: 'Explore more',
  text: 'This card uses the image-right layout and shows a button.',
  orientation: 'image-right',
  content_vertical: 'justify-content-center',
  media: {
    src: 'assets/card-placeholder.svg',
    alt: 'Placeholder card image',
    width: 1200,
    height: 900
  },
  background: 'bg-light',
  shadow: 'shadow-sm',
  has_padding: true,
  url: 'https://example.com',
  button_label: 'Learn more',
  button_variant: 'btn-primary'
}) }}
```

## Notes

- `content_vertical` is only relevant for `image-left` and `image-right`.
- For top and bottom layouts, `media_ratio` controls the image crop ratio.
- If `url` is provided without `button_label`, the full card becomes clickable using a stretched link.
