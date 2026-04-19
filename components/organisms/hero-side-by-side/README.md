# Hero side by side

A two-column hero component with text content on one side and an image on the other. It supports optional background color or background image treatment, overlay control, and a single CTA button.

## Features

- Shared `vartheme_bs5:heading` component for the title
- Shared `vartheme_bs5:image` component for the main image
- Shared `vartheme_bs5:button` component for the CTA
- Optional full-width background treatment with `bg-edge2edge`
- Bootstrap utility class values in select controls where possible

## Props

### Content
- `heading`: Main title text
- `heading_level`: Heading level from `H2` to `H6`
- `text`: Description content

### Media
- `image`: Main image shown in the second column
- `image_position`: Puts the image on the left or right

### Button
- `button_label`: CTA label
- `button_url`: CTA link
- `button_variant`: Bootstrap button variant such as `btn-primary`
- `button_outline`: Switches the selected variant to outline style
- `button_size`: `btn-md`, `btn-sm`, or `btn-lg`
- `button_target`: `self` or `blank`

### Background and spacing
- `background_color`: Section background utility
- `content_color`: Text color utility used for body copy and heading mapping
- `background_image`: Optional background image
- `background_overlay_color`: Optional overlay utility for the background image
- `background_overlay_opacity`: Overlay opacity utility value
- `bg_edge2edge`: Adds `bg-edge2edge` to the main wrapper
- `vertical_padding`: Section vertical spacing utility

## Example

```twig
{% include 'vartheme_bs5:hero-side-by-side' with {
  heading: 'Build better digital experiences',
  heading_level: 2,
  text: '<p>Create flexible, scalable Drupal experiences using modern components.</p>',
  image: {
    src: 'assets/image-placeholder.svg',
    alt: 'Hero image'
  },
  image_position: 'right',
  background_color: 'bg-light',
  content_color: 'text-dark',
  button_label: 'Get started',
  button_url: 'https://example.com/',
  button_variant: 'btn-primary',
  button_size: 'btn-md'
} only %}
```

## Notes

- The component keeps the current feature set and does not add new functionality.
- For heading color, only values accepted by `vartheme_bs5:heading` are passed through.
