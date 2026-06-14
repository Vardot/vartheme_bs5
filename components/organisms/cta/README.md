# Hero CTA

A call-to-action section with a heading, supporting text, optional background image with overlay, and call-to-action buttons.

## What it does

Use this component when you need a prominent hero/CTA band that can:

- render a heading (via the shared `vartheme_bs5:heading` component) with a chosen level and visual size
- show supporting body text
- apply a Bootstrap background color and resolve content text color automatically or explicitly
- display an optional background image with a dark overlay
- switch on full-bleed edge-to-edge background behavior
- render an optional primary button and an `actions` slot for additional links or buttons

## Files

- `cta.component.yml` — component schema and props
- `cta.twig` — component template
- `README.md` — usage notes and examples
- `cta.mdx` — Storybook docs page
- `cta.stories.json` — Storybook story configuration
- `cta.stories.twig` — Storybook story templates

## Props overview

### Content

- `heading_text`: main heading text
- `level` (required): semantic heading level — `2`, `3`, `4`, `5`, `6`
- `heading_size`: visual heading size — `display-4`, `display-5`, `display-6`, `h1`, `h2`, `h3`; defaults to `display-5`
- `text`: supporting text below the heading

### Layout and appearance

- `text_align` (required): `text-center`, `text-start`, `text-end`; defaults to `text-center`
- `background_color`: `bg-none`, `bg-primary text-white`, `bg-secondary text-white`, `bg-light`, `bg-dark text-white`, `bg-body-tertiary`, `bg-info text-white`; defaults to `bg-none`
- `content_color`: text color for heading, body, and actions — `auto`, `text-body`, `text-white`, `text-dark`, `text-primary`, `text-secondary`, `text-success`, `text-danger`, `text-warning`, `text-info`, `text-muted`; defaults to `auto`
- `overlay_opacity`: dark overlay strength over the background image — `0%`, `20%`, `40%`, `60%`, `75%`; defaults to `40%`
- `bg_edge2edge`: adds `bg-edge2edge` to the section wrapper; defaults to `false`

### Media

- `background_image`: background image object (`src`, `alt`, `width`, `height`)

### Button

- `button_text`: optional primary button label
- `button_url`: optional primary button URL (a button renders only when both text and URL are provided)
- `button_variant`: Bootstrap button variant — `btn-primary`, `btn-secondary`, `btn-success`, `btn-danger`, `btn-warning`, `btn-info`, `btn-light`, `btn-dark`, `btn-outline-primary`, `btn-outline-secondary`, `btn-outline-success`, `btn-outline-danger`, `btn-outline-warning`, `btn-outline-info`, `btn-outline-light`, `btn-outline-dark`, `btn-link`; defaults to `btn-primary`

## Slots

- `actions` — optional slot for extra actions (for example a secondary button or text link rendered next to the primary CTA button)

## Overlay opacity mapping

| Value | Output |
|---|---|
| `0%` | no overlay |
| `20%` | `bg-dark bg-opacity-25` |
| `40%` | `bg-dark bg-opacity-50` |
| `60%` | `bg-dark bg-opacity-75` |
| `75%` | `bg-dark bg-opacity-75` |

## Available attributes

The template builds these named attribute objects internally:

- `section_attributes` — the outer `<section>` element
- `background_media_attributes` — the background image wrapper
- `overlay_attributes` — the overlay layer
- `container_attributes` — the inner `.container`
- `content_attributes` — the centered content column
- `text_attributes` — the supporting text paragraph
- `actions_attributes` — the actions wrapper

## Example: CTA with background image

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

## Example: CTA with actions slot

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

## Notes

- `content_color: auto` resolves to `text-white` when the background color contains `text-white`, otherwise `text-body`.
- An explicit brand text color (for example `text-primary`) is also passed to the heading component; `auto`, `text-body`, etc. are not.
- Outline button variants are detected automatically; the variant is converted to the base `btn-*` class and rendered with `outline: true`.
- The background image is rendered through the shared `vartheme_bs5:image` component with `object-fit-cover` and `w-100`.
- Boolean props (`bg_edge2edge`) are validated by SDC, so only a presence fallback is applied in the template.
