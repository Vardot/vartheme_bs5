# Featured Card

A responsive two-column featured card with an optional media image, a **media overlay slot**, and a flexible drag-and-drop content slot. Built entirely with Bootstrap 5 utility classes — no custom CSS required.

---

## Features

- Optional **media column** with image upload (prop-based, no slot)
- **`overlay` slot** — absolute-positioned drop zone over the media image (same pattern as Impressed Card)
- Media column appears automatically when the overlay slot has content, even without an uploaded image
- Configurable **column ratios per breakpoint** (XS → XXL)
- Media can appear **before (start) or after (end) the content column**
- Optional **equal height columns** for grid layouts
- Control **vertical alignment** of the content column
- Fully responsive using **Bootstrap grid**
- Optional **stretched-link** to make the entire card clickable
- Supports any Canvas component inside both slots

---

## Slots

| Slot | Position | Description |
|---|---|---|
| `overlay` | Media image — top-left corner | Drag & drop a Badge, label, or any inline element. Renders as `position-absolute` over the image. The media column auto-appears when this slot has content. |
| `content` | Content column | Main drag & drop area for headings, text, buttons, etc. |

---

## Props

### Media

| Prop | Type | Default | Description |
|---|---|---|---|
| `media_position` | string | `start` | `start`, `end`, or `no-media`. Controls which side the media column appears on. |
| `media_image` | object | — | Canvas image ref (`$ref: json-schema-definitions://canvas.module/image`). Leave empty to use the placeholder or show only the overlay. |
| `ratio` | string | `ratio-16x9` | Image crop ratio: `ratio-auto`, `ratio-16x9`, `ratio-4x3`, `ratio-1x1`, `ratio-21x9`. |
| `fit` | string | `object-fit-cover` | `object-fit-cover` (fill/crop) or `object-fit-contain` (letterbox). |

### Column ratios (per breakpoint)

Each prop accepts values like `06_06` (50%/50%), `08_04` (67%/33%), `04_08` (33%/67%), etc.

| Prop | Breakpoint | Default |
|---|---|---|
| `columns_xs_size` | All (≥ 0) | `06_06` |
| `columns_sm_size` | Small (≥ 576 px) | inherits xs |
| `columns_md_size` | Medium (≥ 768 px) | inherits xs |
| `columns_lg_size` | Large (≥ 992 px) | inherits xs |
| `columns_xl_size` | X-Large (≥ 1200 px) | inherits xs |
| `columns_xxl_size` | XX-Large (≥ 1400 px) | inherits xs |

Available ratios: `02_10` (17%/83%), `03_09` (25%/75%), `04_08` (33%/67%), `05_07` (42%/58%), `06_06` (50%/50%), `07_05` (58%/42%), `08_04` (67%/33%), `09_03` (75%/25%), `10_02` (83%/17%), `12_12` (100%/100%).

### Layout

| Prop | Type | Default | Description |
|---|---|---|---|
| `gutters_between` | string | `g-2 g-lg-3` | Bootstrap gutter utilities between the two columns. |
| `content_vertical_alignment` | string | `align-items-center` | `align-items-start`, `align-items-center`, or `align-items-end`. |
| `equal_height` | boolean | `false` | Adds `h-100` to both columns for grid row alignment. |
| `padded` | boolean | `false` | Adds `p-4` to the content area. |

### Card style

| Prop | Type | Default | Description |
|---|---|---|---|
| `card_border` | boolean | `false` | Adds Bootstrap border to the card. |
| `corner_style` | string | `rounded-0` | Bootstrap rounded utility. Applied to the whole card (with border) or image only (without border). |

### Link

| Prop | Type | Default | Description |
|---|---|---|---|
| `stretched_link` | boolean | `false` | Makes the entire card clickable (requires `link_url`). |
| `link_url` | string | `''` | Optional URL. |
| `link_target` | string | `default` | `default` (same tab), `_self`, or `_blank`. |

---

## Overlay slot behaviour

The `overlay` slot renders as an absolutely positioned container at `top-0 start-0` of the media image with `z-3 m-3 d-flex align-items-center w-25 mw-100`. The media column's wrapper has `position-relative` to support this.

**Auto-show media column**: If `media_position` is `start` or `end` and the overlay slot has content but no `media_image` is uploaded, the media column renders automatically with the placeholder image — so the overlay always has a surface to appear on.

---

## Usage

### Basic featured card

```twig
{% embed 'vartheme_bs5:card-featured' with {
  card_border: true,
  padded: true,
  media_position: 'start',
  columns_xs_size: '06_06',
  columns_md_size: '08_04',
  gutters_between: 'g-2 g-lg-3',
  ratio: 'ratio-16x9',
  fit: 'object-fit-cover',
  media_image: {
    src: '/path/to/image.jpg',
    alt: 'Featured image',
    width: 800,
    height: 600
  }
} %}
  {% block content %}
    <h3 class="h5 mb-2">Featured card title</h3>
    <p class="mb-3">A short description.</p>
    <a class="btn btn-primary" href="#">Call to action</a>
  {% endblock %}
{% endembed %}
```

### With media overlay (badge on image)

```twig
{% embed 'vartheme_bs5:card-featured' with {
  card_border: true,
  padded: true,
  media_position: 'start',
  columns_xs_size: '06_06',
  columns_md_size: '08_04',
  ratio: 'ratio-16x9',
  media_image: {
    src: '/path/to/image.jpg',
    alt: 'Featured image',
    width: 800,
    height: 600
  }
} %}
  {% block overlay %}
    {{ include('vartheme_bs5:badge', {
      label: 'Feature',
      variant: 'text-bg-dark',
      size: 'fs-6 px-2 py-1',
      radius: 'rounded-1',
    }, with_context: false) }}
  {% endblock %}
  {% block content %}
    <h3 class="h5 mb-2">Featured card with badge overlay</h3>
    <p class="mb-3">The badge appears pinned to the top-left of the image.</p>
    <a class="btn btn-primary" href="#">Learn more</a>
  {% endblock %}
{% endembed %}
```

### Media on the end

```twig
{% embed 'vartheme_bs5:card-featured' with {
  card_border: true,
  padded: true,
  media_position: 'end',
  columns_xs_size: '06_06',
  columns_md_size: '08_04',
  ratio: 'ratio-16x9',
  media_image: {
    src: '/path/to/image.jpg',
    alt: 'Featured image',
    width: 800,
    height: 600
  }
} %}
  {% block content %}
    <h3 class="h5 mb-2">Media on the end</h3>
    <p class="mb-3">Content appears before the media column.</p>
    <a class="btn btn-primary" href="#">Learn more</a>
  {% endblock %}
{% endembed %}
```

### Clickable card (stretched link)

```twig
{% embed 'vartheme_bs5:card-featured' with {
  card_border: true,
  padded: true,
  stretched_link: true,
  link_url: 'https://example.com',
  link_target: '_blank',
  media_position: 'start',
  columns_xs_size: '06_06',
  columns_md_size: '08_04',
  ratio: 'ratio-16x9',
  media_image: {
    src: '/path/to/image.jpg',
    alt: 'Featured image',
    width: 800,
    height: 600
  }
} %}
  {% block content %}
    <h3 class="h5 mb-2">Clickable featured card</h3>
    <p class="mb-0">The whole card becomes clickable.</p>
  {% endblock %}
{% endembed %}
```

### Content-only (no media)

```twig
{% embed 'vartheme_bs5:card-featured' with {
  card_border: true,
  padded: true,
  media_position: 'no-media',
} %}
  {% block content %}
    <h3 class="h5 mb-2">Content only</h3>
    <p class="mb-3">When media_position is no-media, the content column spans full width.</p>
    <a class="btn btn-primary" href="#">Read more</a>
  {% endblock %}
{% endembed %}
```

---

## Best practices

- Use `06_06` or `08_04` ratios for most layouts.
- Use `equal_height: true` when featured cards appear in a grid row.
- Keep images landscape-oriented for consistent results.
- The `overlay` slot is designed for a single Badge or short label — keep it compact.
- When using `stretched_link`, avoid interactive elements (buttons, links) inside the content slot as they would conflict with the card-wide link.
