# Hero Card component

A flexible Bootstrap 5.3 card component for promotional sections, feature highlights, and call-to-action blocks.

It supports multiple media layouts, optional edge-to-edge backgrounds, content alignment controls, and a configurable primary action.

---

## Features

- Renders hero content using Bootstrap 5.3 card structure
- Supports media positions: overlay, start, end, top, bottom, content, or none
- Supports optional edge-to-edge background treatment
- Supports horizontal and vertical content alignment
- Supports configurable card border, padding, and background color
- Uses shared components for image, heading, and button output where appropriate

---

## Props

| Prop | Type | Default | Description |
|---|---|---:|---|
| `title` | string | `Demo title` | Card heading text. |
| `heading_tag` | string | `h2` | Heading level used for the title. |
| `content_text` | string | rich text | Main body content rendered as HTML. |
| `media` | object | placeholder image | Image object with `src`, `alt`, `width`, and `height`. |
| `container_type` | string | `container` | Wrapper width: `container`, `container-fluid`, or `none`. |
| `bg_edge2edge` | boolean | `false` | Expands the background treatment to the outer wrapper. |
| `media_position` | string | `end` | Media placement: `overlay`, `start`, `end`, `top`, `bottom`, `content`, or `none`. |
| `split_gap` | string | `g-4` | Grid gap utility used in split layouts. |
| `card_border` | boolean | `false` | Adds Bootstrap card border to the main card only. |
| `padding` | boolean | `false` | Adds inner spacing to the content area. |
| `horizontal_alignment` | string | `text-start` | Text alignment utility. |
| `vertical_alignment` | string | `justify-content-center` | Vertical content alignment utility. |
| `background_color` | string | `bg-transparent` | Background color utility applied to the card or outer wrapper depending on edge-to-edge mode. |
| `content_color` | string | `text-dark` | Text color utility applied to card content. |
| `overlay_bg` | string | `bg-dark` | Overlay color utility for overlay image mode. |
| `overlay_opacity` | string | `opacity-50` | Overlay opacity utility for overlay image mode. |
| `object_position` | string | `center` | Requested focal position for the media. |
| `overlay_image_mode` | string | `object-fit-cover` | Image fit utility. |
| `button_1_label` | string | `Learn more` | Primary button label. |
| `button_1_url` | string | `#` | Primary button URL. |
| `button_1_style` | string | `btn-primary` | Bootstrap button style utility. |
| `button_1_size` | string | `default` | Button size option. |
| `button_1_target` | string | `default` | Link target behavior. |

---

## Slots

| Slot | Description |
|---|---|
| `media_slot` | Optional custom media override, such as video or custom markup. |
| `actions` | Optional custom actions area. Replaces the built-in primary button output. |

---

## Layout modes

### Overlay
Places media behind the content using Bootstrap card overlay structure.

### Start / End
Creates a split card layout with media and content side by side.

### Top / Bottom
Places media above or below the content in a standard stacked card.

### Content
Places media inside the content area above the text.

### None
Renders a text-only card.

---

## Examples

### 1) Split hero with image on the right

- `media_position`: `end`
- `title`: `Build faster with reusable components`
- `horizontal_alignment`: `text-start`
- `vertical_alignment`: `justify-content-center`
- `button_1_style`: `btn-primary`

### 2) Overlay hero

- `media_position`: `overlay`
- `overlay_bg`: `bg-dark`
- `overlay_opacity`: `opacity-50`
- `content_color`: `text-white`
- `heading_tag`: `h2`

### 3) Edge-to-edge promotional block

- `bg_edge2edge`: `true`
- `background_color`: `bg-dark`
- `content_color`: `text-white`
- `container_type`: `container`

### 4) Simple text-only card

- `media_position`: `none`
- `card_border`: `true`
- `padding`: `true`
- `background_color`: `bg-light`

---

## Twig usage

```twig
{% include 'vartheme_bs5:hero-card' with {
  title: 'Build faster with reusable components',
  heading_tag: 'h2',
  content_text: '<p>Create polished layouts with a flexible Bootstrap card structure.</p>',
  media: {
    src: 'https://via.placeholder.com/1200x800',
    alt: 'Example placeholder image',
    width: 1200,
    height: 800
  },
  media_position: 'end',
  split_gap: 'g-4',
  padding: true,
  horizontal_alignment: 'text-start',
  vertical_alignment: 'justify-content-center',
  background_color: 'bg-white',
  content_color: 'text-dark',
  button_1_label: 'Learn more',
  button_1_url: '/features',
  button_1_style: 'btn-primary',
  button_1_size: 'default',
  button_1_target: 'default'
} only %}
```

### With a custom media slot

```twig
{% include 'vartheme_bs5:hero-card' with {
  title: 'Watch the overview',
  media_position: 'content',
  content_text: '<p>Use the media slot to provide custom media markup.</p>'
} %}
  {% block media_slot %}
    <div class="ratio ratio-16x9">
      <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Video preview" allowfullscreen></iframe>
    </div>
  {% endblock %}
{% endinclude %}
```

---

## Notes

- Select field values are stored as Bootstrap utility class names where possible, so they can be applied directly in Twig.
- The component uses Bootstrap card substructure such as `card-body`, `card-text`, `card-img`, `card-img-top`, `card-img-bottom`, and `card-img-overlay`.
- In split layouts, the image area is stretched to match the content height.
- When `bg_edge2edge` is enabled, the outer wrapper receives `bg-edge2edge`.
