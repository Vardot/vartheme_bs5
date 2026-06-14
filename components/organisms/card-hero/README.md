# Hero Card

A flexible Bootstrap-based hero card that pairs a title, rich text, optional media, and a call-to-action button across several layout modes — overlay, split (start/end), stacked (top/bottom), in-content, or text-only.

## Bootstrap reference

> [Bootstrap 5.3 — Card](https://getbootstrap.com/docs/5.3/components/card/)

## What it does

Use this component when you need a hero/feature card that can:

- render media as a background overlay, a side-by-side split, an image above or below the content, inside the content area, or no media at all
- show a heading (`h2`–`h6`), rich HTML content, and a single button
- apply Bootstrap background and content text colors with automatic white text on dark backgrounds
- tint background media with a color overlay and adjustable opacity
- control container width, edge-to-edge backgrounds, gaps, borders, padding, and horizontal/vertical alignment

## Files

- `card-hero.component.yml` — component schema and props
- `card-hero.twig` — component template
- `README.md` — usage notes and examples
- `card-hero.mdx` — Storybook docs page
- `card-hero.stories.json` — Storybook story configuration
- `card-hero.stories.twig` — Storybook story templates
- `assets/` — placeholder image used by examples

## Props overview

### Content

- `title`: heading text; defaults to `Demo title`
- `heading_tag`: heading element — `h2`, `h3`, `h4`, `h5`, `h6`; defaults to `h2`
- `content_text`: rich HTML body content
- `content_color`: content text color — `text-dark` or `text-white`; defaults to `text-dark`

### Media

- `media`: Canvas image object (`src`, `alt`, `width`, `height`)
- `media_position`: where media is placed — `overlay`, `start`, `end`, `top`, `bottom`, `content`, `none`; defaults to `end`
- `object_position`: media focal point — `top`, `center`, `bottom`; defaults to `center`
- `overlay_image_mode`: image fit — `object-fit-cover` or `object-fit-contain`; defaults to `object-fit-cover`
- `split_gap`: grid gap for split layouts — `g-0`, `g-2`, `g-4`, `g-5`; defaults to `g-4`

### Overlay (used with `media_position: overlay`)

- `overlay_bg`: overlay color — `bg-dark`, `bg-black`, `bg-white`, `bg-primary`, `bg-secondary`, `bg-success`, `bg-danger`, `bg-warning`, `bg-info`; defaults to `bg-dark`
- `overlay_opacity`: overlay strength — `opacity-10`, `opacity-25`, `opacity-50`, `opacity-75`, `opacity-100`; defaults to `opacity-50`

### Layout and appearance

- `container_type`: `container`, `container-fluid`, or `none`; defaults to `container`
- `bg_edge2edge`: enables full-bleed background behavior; defaults to `false`
- `background_color`: Bootstrap background utility — `bg-transparent`, `bg-white`, `bg-light`, `bg-dark`, `bg-primary`, `bg-secondary`, `bg-success`, `bg-danger`, `bg-warning`, `bg-info`; defaults to `bg-transparent`
- `card_border`: adds a card border; defaults to `false`
- `padding`: adds inner padding (`p-3 p-md-4`); defaults to `false`
- `horizontal_alignment`: `text-start`, `text-center`, `text-end`; defaults to `text-start`
- `vertical_alignment`: `justify-content-start`, `justify-content-center`, `justify-content-end`; defaults to `justify-content-center`

### Button

- `button_1_label`: button text; defaults to `Learn more`
- `button_1_url`: button URL; defaults to `#`
- `button_1_style`: Bootstrap button variant — solid (`btn-primary` … `btn-dark`), outline (`btn-outline-primary` … `btn-outline-dark`), or `btn-link`; defaults to `btn-primary`
- `button_1_size`: `default`, `btn-sm`, `btn-lg`; defaults to `default`
- `button_1_target`: `default`, `_self`, `_blank`; defaults to `default`

## Slots

- `media_slot` — optional media override (e.g. a video) used in place of the `media` image
- `actions` — optional override for the button area

## Media position values

| Value | Output |
|---|---|
| `overlay` | Media as a background with color overlay; content sits on top |
| `start` | Two-column split, media on the start side |
| `end` | Two-column split, media on the end side |
| `top` | Image stacked above the content |
| `bottom` | Image stacked below the content |
| `content` | Image rendered inside the content flow, above the heading |
| `none` | No media; text-only card |

## Example: split hero with media on the end side

```twig
{% embed 'vartheme_bs5:card-hero' with {
  title: 'Build faster with Varbase',
  heading_tag: 'h2',
  content_text: '<p>A dynamic design system that blends aesthetics with functionality.</p>',
  container_type: 'container',
  media_position: 'end',
  split_gap: 'g-4',
  background_color: 'bg-light',
  padding: true,
  card_border: false,
  horizontal_alignment: 'text-start',
  vertical_alignment: 'justify-content-center',
  media: {
    src: '/path/to/hero.jpg',
    alt: 'Product screenshot',
    width: 1200,
    height: 800
  },
  button_1_label: 'Learn more',
  button_1_url: '/about',
  button_1_style: 'btn-primary',
  button_1_size: 'default',
  button_1_target: '_self'
} only %}{% endembed %}
```

## Example: overlay hero with background image

```twig
{% embed 'vartheme_bs5:card-hero' with {
  title: 'Elevate your digital experience',
  content_text: '<p class="lead">Unleash the power of intuitive design.</p>',
  bg_edge2edge: true,
  media_position: 'overlay',
  overlay_bg: 'bg-dark',
  overlay_opacity: 'opacity-50',
  content_color: 'text-white',
  horizontal_alignment: 'text-center',
  vertical_alignment: 'justify-content-center',
  padding: true,
  media: {
    src: '/path/to/banner.jpg',
    alt: 'Decorative background',
    width: 1600,
    height: 900
  },
  button_1_label: 'Get started',
  button_1_url: '#',
  button_1_style: 'btn-light'
} only %}{% endembed %}
```

## Example: custom media slot (video)

```twig
{% embed 'vartheme_bs5:card-hero' with {
  title: 'Watch the overview',
  media_position: 'content',
  content_text: '<p>Use the media slot to provide custom media markup.</p>'
} %}
  {% block media_slot %}
    <div class="ratio ratio-16x9">
      <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Video preview" allowfullscreen></iframe>
    </div>
  {% endblock %}
{% endembed %}
```

## Notes

- `content_color: text-dark` auto-switches to `text-white` when `background_color` is one of `bg-dark`, `bg-black`, `bg-primary`, `bg-secondary`.
- When `bg_edge2edge` is true and `media_position` is `overlay`, the media renders as a full-bleed background behind the content with the color overlay on top; the outer wrapper receives `bg-edge2edge`.
- The `actions` slot, when filled, replaces the generated button entirely; the button only renders when both `button_1_label` and `button_1_url` are set.
- The `media_slot` override takes precedence over the `media` image in every layout.
- The component uses Bootstrap card substructure such as `card-body`, `card-text`, `card-img`, `card-img-top`, `card-img-bottom`, and `card-img-overlay`.
- Boolean props (`bg_edge2edge`, `card_border`, `padding`) are validated and defaulted by SDC, so they arrive as real booleans.
