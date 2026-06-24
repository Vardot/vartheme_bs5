# Image

A Bootstrap-based image wrapper with optional aspect-ratio crop, fit control, alignment, width, rounding, lazy loading, and an optional link wrapper.

Images in Bootstrap are made responsive with `.img-fluid`. This applies `max-width: 100%;` and `height: auto;` to the image so that it scales with the parent width.

## Bootstrap reference

> ## [Bootstrap Documentation on Images](https://getbootstrap.com/docs/5.3/content/images)
> * [Images](https://getbootstrap.com/docs/5.3/content/images)
> * [Responsive Images](https://getbootstrap.com/docs/5.3/content/images/#responsive-images)

## What it does

Use this component when you need a reusable image that can:

- render a responsive image from a media source object
- optionally crop to a fixed Bootstrap aspect ratio (`.ratio`)
- control how the image fits inside a fixed ratio (cover or contain)
- align the image block left, center, or right
- control the container width with Bootstrap width utilities
- apply Bootstrap border-radius rounding
- choose the browser loading strategy (lazy or eager)
- optionally become clickable via a link wrapper

## Files

- `image.component.yml` — component schema and props
- `image.twig` — component template
- `README.md` — usage notes and examples
- `image.mdx` — Storybook docs page
- `image.stories.json` — Storybook story configuration
- `image.stories.twig` — Storybook story templates

## Props overview

### Source

- `media`: image source object with `src`, `alt`, `width`, and `height`

### Link

- `link_url`: optional URL; when provided the image becomes clickable
- `target`: link target — `self` or `blank`; defaults to `self`

### Crop and fit

- `ratio`: aspect-ratio crop — `ratio-auto` (no crop), `ratio-16x9`, `ratio-4x3`, `ratio-1x1`, `ratio-21x9`; defaults to `ratio-auto`
- `fit`: behavior inside a fixed ratio — `object-fit-cover`, `object-fit-contain`; defaults to `object-fit-cover`

### Layout and appearance

- `align`: alignment of the whole image block — `me-auto` (left), `mx-auto` (center), `ms-auto` (right); defaults to `me-auto`
- `width`: container width — `w-auto`, `w-25`, `w-50`, `w-75`, `w-100`; defaults to `w-auto`
- `rounded`: Bootstrap border-radius utility — `none`, `rounded`, `rounded-0`, `rounded-1`, `rounded-2`, `rounded-3`, `rounded-4`, `rounded-pill`; defaults to `none`
- `loading`: browser loading strategy — `lazy`, `eager`; defaults to `lazy`

## Ratio values

| Value | Output |
|---|---|
| `ratio-auto` | Auto (no crop) |
| `ratio-16x9` | Wide (16:9) |
| `ratio-4x3` | Standard (4:3) |
| `ratio-1x1` | Square (1:1) |
| `ratio-21x9` | Ultra-wide (21:9) |

## Example: basic image

```twig
{% include 'vartheme_bs5:image' with {
  media: {
    src: '/components/foundation/images/assets/placeholder.jpg',
    alt: 'Placeholder image',
    width: 1200,
    height: 800
  }
} only %}
```

## Example: clickable, centered, cropped image

```twig
{% include 'vartheme_bs5:image' with {
  media: {
    src: '/path/to/photo.jpg',
    alt: 'Example photo',
    width: 1600,
    height: 900
  },
  link_url: 'https://example.com',
  target: 'blank',
  ratio: 'ratio-16x9',
  fit: 'object-fit-cover',
  align: 'mx-auto',
  width: 'w-50',
  rounded: 'rounded-3',
  loading: 'lazy'
} only %}
```

## Notes

- The image is wrapped in a `<figure>` element; the width and alignment classes are applied to it.
- When `ratio` is anything other than `ratio-auto`, the image is wrapped in a Bootstrap `.ratio` box and stretched to fill it.
- When `target` is `blank`, the link opens in a new tab with `rel="noopener noreferrer"`.
- Raster images are rendered responsively via `vartheme_bs5:dynamic-responsive-image` (drimage); SVGs bypass image-style derivatives and render as a native `<img>` at their intrinsic size to avoid stretching and 404s.
- Nothing is rendered inside the `<figure>` when `media.src` is empty.
