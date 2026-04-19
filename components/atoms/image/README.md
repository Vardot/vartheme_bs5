# Image

Canvas + SDC **Image** component built with Bootstrap 5 utilities.

- Optional link wrapper (`link_url`)
- Optional fixed aspect ratio crop using Bootstrap `.ratio` (`ratio-*`)

## Props

### media (object) — required
Main image source.

Example:
- `src`: `assets/image-placeholder.svg`
- `alt`: `Placeholder image`
- `width`: `1200`
- `height`: `800`

### link_url (string) — optional
If provided, the image becomes clickable.

### target (string)
Link target:
- `self` → Same tab
- `blank` → New tab (adds `rel="noopener noreferrer"`)

### ratio (string)
Aspect ratio crop (Bootstrap classes):
- `ratio-auto` → Auto (no crop)
- `ratio-16x9` → Wide (16:9)
- `ratio-4x3` → Standard (4:3)
- `ratio-1x1` → Square (1:1)
- `ratio-21x9` → Ultra-wide (21:9)

### fit (string)
How the image behaves inside a fixed ratio (Bootstrap utilities):
- `object-fit-cover` → Fill (crop)
- `object-fit-contain` → Fit (no crop)

### align (string)
Alignment for the whole image block (Bootstrap utilities):
- `me-auto` → Left
- `mx-auto` → Center
- `ms-auto` → Right

### width (string)
Container width (Bootstrap utilities):
- `w-auto`, `w-25`, `w-50`, `w-75`, `w-100`

### rounded (string)
Corner rounding (Bootstrap utilities):
- `rounded-0`, `rounded-1`, `rounded-3`, `rounded-pill`

### loading (string)
Browser loading behavior:
- `lazy` (default)
- `eager`

## Twig usage examples

### Basic image
```twig
{% include 'sdc:vartheme_bs5.image' with {
  media: {
    src: 'assets/image-placeholder.svg',
    alt: 'Placeholder'
  }
} %}
```

### Clickable, centered, 50% width, rounded, fixed ratio
```twig
{% include 'sdc:vartheme_bs5.image' with {
  media: {
    src: 'assets/image-placeholder.svg',
    alt: 'Example'
  },
  link_url: 'https://example.com',
  target: 'blank',
  align: 'mx-auto',
  width: 'w-50',
  rounded: 'rounded-3',
  ratio: 'ratio-16x9',
  fit: 'object-fit-cover'
} %}
```

### Add extra utility classes
```twig
{% include 'sdc:vartheme_bs5.image' with {
  media: {
    src: 'assets/image-placeholder.svg',
    alt: 'Example'
  },
  ratio: 'ratio-16x9',
  width: 'w-100',
  fit: 'object-fit-cover',
  loading: 'lazy'
} %}
```
