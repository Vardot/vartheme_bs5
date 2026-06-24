# Media banner

A Bootstrap media banner with a background image, color overlay, and flexible content positioning.

## What it does

Use this component when you need a banner that can:

- render a full-bleed background image with an adjustable color overlay
- position its content using flex presets (top, center, bottom, or hero-center)
- switch between contained, fluid, sized, or no-container layouts
- control banner height, inline padding, and border radius
- expose a single slot for the banner content

## Files

- `media-banner.component.yml` — component schema and props
- `media-banner.twig` — component template
- `README.md` — usage notes and examples
- `media-banner.mdx` — Storybook docs page
- `media-banner.stories.json` — Storybook story configuration
- `media-banner.stories.twig` — Storybook story templates
- `assets/` — bundled placeholder media

## Props overview

### Layout

- `container_type`: `container`, `container-fluid`, `container-sm`, `container-md`, `container-lg`, `container-xl`, `container-xxl`, or `none`; defaults to `container`
- `bg_edge2edge`: adds `bg-edge2edge` to the outer section so the background image can extend full width; defaults to `false`
- `height`: banner vertical size — `ribbon` or `large`; defaults to `ribbon`
- `flex_position`: content position — `top-left`, `center-left`, `bottom-left`, `hero-center`; defaults to `center-left`
- `content_width`: Bootstrap width utility — `w-100`, `w-75`, `w-50`, `w-25`; defaults to `w-100`

### Background and overlay

- `media`: background image object
- `object_position`: background image position — `top`, `center`, `bottom`; defaults to `center`
- `overlay_bg`: overlay background utility — `bg-transparent`, `bg-dark`, `bg-black`, `bg-primary`, `bg-secondary`, `bg-success`, `bg-danger`, `bg-warning`, `bg-info`, `bg-white`; defaults to `bg-transparent`
- `overlay_opacity`: overlay opacity utility — `opacity-0`, `opacity-25`, `opacity-50`, `opacity-75`, `opacity-100`; defaults to `opacity-50`

### Spacing and appearance

- `padding_inline_start`: `none`, `ps-0`–`ps-5`; defaults to `none`
- `padding_inline_end`: `none`, `pe-0`–`pe-5`; defaults to `none`
- `radius`: border-radius utility — `none`, `rounded`, `rounded-0`, `rounded-1`, `rounded-2`, `rounded-3`, `rounded-4`, `rounded-pill`; defaults to `none`

## Slots

- `media_banner_slot` — the banner content

## Content position presets

| Value | Vertical alignment | Text alignment |
|---|---|---|
| `top-left` | top (`justify-content-start`) | start |
| `center-left` | center (`justify-content-center`) | start |
| `bottom-left` | bottom (`justify-content-end`) | start |
| `hero-center` | center (`justify-content-center`) | center |

## Example

```twig
{% embed 'vartheme_bs5:media-banner' with {
  container_type: 'container',
  bg_edge2edge: true,
  height: 'large',
  flex_position: 'hero-center',
  overlay_bg: 'bg-dark',
  overlay_opacity: 'opacity-50',
  content_width: 'w-75',
  object_position: 'center',
  radius: 'rounded-3',
  media: {
    src: '/components/foundation/images/assets/banner-2.jpg',
    alt: 'Placeholder image',
    width: 1920,
    height: 1075
  }
} only %}
  {% block media_banner_slot %}
    <h1 class="display-4 text-white">Banner heading</h1>
    <p class="lead text-white mb-0">A short supporting line of copy.</p>
  {% endblock %}
{% endembed %}
```

## Notes

- The background image layer is only rendered when a `media` source is resolved; it is decorative (`aria-hidden="true"`) and rendered through `vartheme_bs5:image` with `object-fit-cover` and eager loading.
- The media source is normalized from a string or iterable value (`url`, `uri`, or `value`).
- `height: large` applies `py-5 py-lg-6`; `ribbon` applies `py-4 py-lg-5`.
- The section carries `text-bg-dark` by default, so light content sits well over the overlay.
- `container_type: none` removes the inner container class while keeping the content wrapper.
- The boolean prop `bg_edge2edge` arrives as a real boolean from SDC; only a presence fallback is applied in the template.
