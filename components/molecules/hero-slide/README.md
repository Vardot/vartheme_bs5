# Hero Slide

A single slide item for the Hero Slider, supporting overlay, split (image start/end), and text-only layouts with rich content and an optional CTA button.

## What it does

Use this component inside `vartheme_bs5:hero-slider-container` when you need a slide that can:

- render a title, rich-text content, and an optional CTA button (via `vartheme_bs5:button`)
- show an image as an overlay background, beside the text (split), or be omitted (text-only)
- inherit its media position from the container or override it per slide
- control title tag and visual size, content width, vertical and text alignment, and colors
- apply an overlay color and opacity over an overlay-layout image
- set a background color and grid gap for split and text-only layouts

## Files

- `hero-slide.component.yml` — component schema and props
- `hero-slide.twig` — component template
- `README.md` — usage notes and examples
- `hero-slide.mdx` — Storybook docs page
- `hero-slide.stories.json` — Storybook story configuration
- `hero-slide.stories.twig` — Storybook story templates

## Props overview

### State

- `enabled`: render the slide; defaults to `true` (when `false`, the slide outputs nothing)
- `active`: mark as active by default; defaults to `false` (the container auto-activates the first slide if none is active)

### Content

- `title`: slide title; defaults to `Varbase; better than ever`
- `content`: rich-text body (HTML); defaults to empty
- `button_text`: CTA button text; defaults to `Learn more`
- `button_url`: CTA button URL; defaults to `/`
- `button_variant`: button style — `btn-primary`, `btn-secondary`, `btn-light`, `btn-dark`; defaults to `btn-primary`

### Media

- `media`: image object for the slide
- `media_position`: per-slide media position — `inherit`, `overlay`, `start`, `end`, `none`; defaults to `inherit`

### Presentation

- `title_tag`: title element — `h2`, `h3`, `h4`, `h5`, `h6`; defaults to `h2`
- `title_size`: visual title size — `display-1`–`display-5`, `h1`, `h2`, `h3`; defaults to `display-5`
- `content_max_width`: text column width — `narrow`, `normal`, `wide`; defaults to `normal`
- `vertical_alignment`: vertical alignment of content — `start`, `center`, `end`; defaults to `center`
- `text_align`: text alignment — `text-start`, `text-center`, `text-end`; defaults to `text-start`
- `text_color`: text color — `text-white`, `text-dark`; defaults to `text-white`
- `split_gap`: grid gap for split layout — `none`, `sm`, `md`, `lg`; defaults to `md`
- `background_color`: background color for split/text-only layout — `bg-transparent`, `bg-white`, `bg-light`, `bg-dark`, `bg-black`, `bg-primary`, `bg-secondary`, `bg-success`, `bg-danger`, `bg-warning`, `bg-info`; defaults to `bg-black`
- `overlay_bg`: overlay color (overlay layout) — `none`, `bg-dark`, `bg-black`, `bg-white`, `bg-primary`, `bg-secondary`, `bg-success`, `bg-danger`, `bg-warning`, `bg-info`; defaults to `bg-dark`
- `overlay_opacity`: overlay opacity — `opacity-10`, `opacity-25`, `opacity-50`, `opacity-75`, `opacity-100`; defaults to `opacity-50`

## Media position values

| Value | Output |
|---|---|
| `inherit` | Follows the container's media position |
| `overlay` | Image used as a full-bleed background behind the content |
| `start` | Image on the left, text on the right (split) |
| `end` | Image on the right, text on the left (split) |
| `none` | No media; text-only slide |

## Example: overlay slide

```twig
{{ include('vartheme_bs5:hero-slide', {
  active: true,
  title: 'Build faster with Varbase',
  content: '<p>Create flexible landing pages with reusable components.</p>',
  button_text: 'Get started',
  button_url: '/get-started',
  button_variant: 'btn-primary',
  media: { src: 'assets/hero-slider-image.webp', alt: 'Hero image', width: 1600, height: 700 },
  media_position: 'overlay',
  title_tag: 'h2',
  title_size: 'display-5',
  text_align: 'text-start',
  text_color: 'text-white',
  overlay_bg: 'bg-dark',
  overlay_opacity: 'opacity-50'
}, with_context = false) }}
```

## Example: split layout with image at start

```twig
{{ include('vartheme_bs5:hero-slide', {
  title: 'Design with confidence',
  content: '<p>Use reusable pieces and keep the markup maintainable.</p>',
  button_text: 'Explore components',
  button_url: '/components',
  button_variant: 'btn-dark',
  media: { src: 'assets/hero-slider-image.webp', alt: 'Slide image' },
  media_position: 'start',
  background_color: 'bg-light',
  text_color: 'text-dark',
  split_gap: 'md',
  content_max_width: 'normal'
}, with_context = false) }}
```

## Example: text-only slide

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

## Notes

- This component is meant to live inside `vartheme_bs5:hero-slider-container`; it reads the container context variables `hero_slider_media_position` (default media position) and `hero_slider_container_type` (content width for overlay slides).
- `media_position: inherit` follows the container; any other value overrides it for that slide only.
- The overlay layer is only rendered when the layout is `overlay` and `overlay_bg` is not `none`.
- The CTA is only rendered when both `button_text` and `button_url` resolve to non-empty values; empty values fall back to their schema defaults.
- Boolean props (`enabled`, `active`) are validated by SDC and arrive as real booleans; only a presence fallback is applied in the template.
- Images render through `vartheme_bs5:image`; a black fallback box is shown when an overlay/split slide has no media.
