# Card

A flexible Bootstrap 5 card with optional image layouts, background themes, padding control, and link or button support.

## Bootstrap reference

> [Bootstrap 5.3 — Card](https://getbootstrap.com/docs/5.3/components/card/)

## What it does

Use this component when you need a reusable card that can:

- arrange image and content in top, start, end, or bottom layouts
- control the vertical alignment of content for start/end (horizontal) layouts
- show an image at a fixed ratio (16:9, 4:3, 1:1) or auto for top/bottom layouts
- apply a background theme and a Bootstrap shadow
- toggle body padding (`p-4`)
- link the entire card with a stretched link, or show a button instead
- render images through the `vartheme_bs5:image` component

## Files

- `card.component.yml` — component schema and props
- `card.twig` — component template
- `README.md` — usage notes and examples
- `card.mdx` — Storybook docs page
- `card.stories.json` — Storybook story configuration
- `card.stories.twig` — Storybook story templates
- `assets/` — placeholder image assets

## Props overview

### Content

- `heading_text` (required): card heading; always rendered as an `<h3>`; defaults to `This is your card title`
- `text`: short supporting text under the heading (supports multiline)

### Layout

- `orientation` (required): image/content arrangement — `image-top`, `image-left`, `image-right`, `image-bottom`; defaults to `image-top`
- `content_vertical`: vertical alignment of content for `image-left`/`image-right` — `justify-content-start`, `justify-content-center`, `justify-content-end`; defaults to `justify-content-center`

### Media

- `media`: image object (`src`, `width`, `height`, `alt`)
- `media_ratio`: image ratio for top/bottom layouts — `auto`, `ratio-16x9`, `ratio-4x3`, `ratio-1x1`; defaults to `ratio-16x9`

### Appearance

- `background`: background theme — `bg-body`, `bg-light`, `bg-primary text-white`, `bg-dark text-white`; defaults to `bg-body`
- `shadow`: card shadow — `shadow-sm`, `shadow`, `shadow-lg`; defaults to `shadow`
- `has_padding`: apply `p-4` to the card body — `true` / `false`; defaults to `true`

### Link

- `url`: optional link URL for the whole card or the button
- `button_label`: if set together with `url`, shows a button instead of linking the entire card; defaults to `""`
- `button_variant`: button style — `btn-primary`, `btn-secondary`, `btn-success`, `btn-danger`, `btn-warning`, `btn-info`, `btn-light`, `btn-dark`, `btn-link`; defaults to `btn-primary`

## Orientation values

| Value | Layout |
|---|---|
| `image-top` | Image on top |
| `image-left` | Image on start |
| `image-right` | Image on end |
| `image-bottom` | Image on bottom |

## Image ratio values

| Value | Ratio |
|---|---|
| `auto` | Auto |
| `ratio-16x9` | Wide (16:9) |
| `ratio-4x3` | Standard (4:3) |
| `ratio-1x1` | Square (1:1) |

## Example: simple image-top card

```twig
{{ include('vartheme_bs5:card', {
  heading_text: 'Card title',
  text: 'A short description goes here.',
  orientation: 'image-top',
  media: {
    src: '/components/foundation/images/assets/teaser-1.png',
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

## Example: horizontal card with a button

```twig
{{ include('vartheme_bs5:card', {
  heading_text: 'Explore more',
  text: 'This card uses the image-right layout and shows a button.',
  orientation: 'image-right',
  content_vertical: 'justify-content-center',
  media: {
    src: '/components/foundation/images/assets/teaser-1.png',
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

- The heading is always rendered as an `<h3>`.
- `content_vertical` only applies to the `image-left` and `image-right` (horizontal) layouts; `media_ratio` only applies to the top/bottom (vertical) layouts and is ignored when set to `auto`.
- A button is shown only when `url`, `button_label`, and a valid `button_variant` are all provided; the button is rendered through the `vartheme_bs5:button` component at `btn-sm`.
- If `url` is provided without `button_label`, the whole card becomes clickable via a Bootstrap `stretched-link` and the card gains `position-relative`.
- Layout-driven column widths and ordering are computed in the template; the card uses Bootstrap utility classes only.
- The boolean prop `has_padding` is validated by SDC and arrives as a real boolean.
