# Hero CTA

Hero CTA displays a prominent heading, supporting text, optional background image, and call-to-action buttons.

## Features

- Shared `vartheme_bs5:heading` component for the title
- Optional background image with overlay opacity
- Optional edge-to-edge background mode
- Optional primary button
- Optional `actions` slot for additional buttons or links
- Bootstrap utility class based alignment and styling

## Props

### Content

- `heading_text` — Main heading text
- `level` — Semantic heading level (`2` to `6`)
- `heading_size` — Visual heading size (`display-4`, `display-5`, `display-6`, `h1`, `h2`, `h3`)
- `text` — Supporting text below the heading

### Layout and style

- `text_align` — Text alignment using Bootstrap utilities
  - `text-start`
  - `text-center`
  - `text-end`
- `background_color` — Optional background utility classes
  - `bg-none`
  - `bg-primary text-white`
  - `bg-secondary text-white`
  - `bg-light`
  - `bg-dark text-white`
  - `bg-body-tertiary`
  - `bg-info text-white`
- `content_color` — Text color for content
  - `auto`
  - `text-body`
  - `text-white`
  - `text-dark`
  - `text-primary`
  - `text-secondary`
  - `text-success`
  - `text-danger`
  - `text-warning`
  - `text-info`
  - `text-muted`
- `overlay_opacity` — Overlay strength for background image
  - `0%`
  - `20%`
  - `40%`
  - `60%`
  - `75%`
- `bg_edge2edge` — Adds `bg-edge2edge` to the main wrapper when enabled

### Media

- `background_image` — Background image object

### Button

- `button_text` — Primary button label
- `button_url` — Primary button URL
- `button_variant` — Bootstrap button variant class

## Slots

### `actions`

Optional slot for extra actions. This is useful for adding a secondary button or a text link next to the main CTA button.

## Usage

```twig
{% include 'vartheme_bs5:cta' with {
  heading_text: 'Build faster with Varbase',
  level: 2,
  heading_size: 'display-5',
  text: 'Create landing pages and content sections with reusable Drupal components.',
  text_align: 'text-center',
  background_color: 'bg-dark text-white',
  content_color: 'auto',
  overlay_opacity: '40%',
  bg_edge2edge: true,
  button_text: 'Get started',
  button_url: '/get-started',
  button_variant: 'btn-primary',
  background_image: {
    src: 'https://picsum.photos/1600/900',
    alt: 'Abstract background'
  }
} only %}
```

## Example with actions slot

```twig
{% embed 'vartheme_bs5:cta' with {
  heading_text: 'Launch your next campaign',
  level: 2,
  heading_size: 'display-6',
  text: 'Use the actions slot to add multiple CTAs without changing the component API.',
  text_align: 'text-start',
  background_color: 'bg-light',
  content_color: 'text-dark',
  button_text: 'Primary action',
  button_url: '/primary',
  button_variant: 'btn-primary'
} only %}
  {% block actions %}
    <a href="/secondary" class="btn btn-outline-secondary">Secondary action</a>
  {% endblock %}
{% endembed %}
```
