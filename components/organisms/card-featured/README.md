# Featured Card

The **Featured Card** component displays highlighted content using a flexible two-column layout.  
It supports optional media, flexible grid ratios, responsive gutters, and content alignment using **Bootstrap 5 utilities only**.

The component is designed to work seamlessly with **Canvas** and uses **Bootstrap utility classes directly** so layouts can be controlled through props without additional CSS.

## Features

- Optional **media column** with image support
- Flexible **column ratios** (50/50, 60/40, 33/66, etc.)
- Media can appear **before or after content**
- Optional **equal height columns**
- Control **vertical alignment of content**
- Fully responsive layout using **Bootstrap grid**
- Optional **link wrapper** to make the entire card clickable
- Supports **any Canvas components** inside the content slot
- Uses **Bootstrap utility classes directly**

## Component Structure

The component renders a responsive row with two columns:

```
+--------------------------------------+
| Media Column | Content Column        |
|              |                       |
| Image        | Heading               |
|              | Text                  |
|              | Button                |
+--------------------------------------+
```

Media is optional. If no media is provided, the content column expands automatically.

## Props

### Layout

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `ratio` | string | `06_06` | Controls media/content column width |
| `media_position` | string | `start` | Position of media column |
| `gutters_between` | string | `g-2 g-lg-3` | Bootstrap gutter utilities |
| `equal_height` | boolean | `false` | Makes both columns equal height |

#### Ratio options

- `03_09`
- `04_08`
- `04_08`
- `06_06`
- `08_04`
- `08_04`
- `09_03`
- `12_12`

Example:

```twig
{% include 'vartheme_bs5:card-featured' with { ratio: '08_04' } %}
```

### Content options

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `padded` | boolean | `false` | Adds padding to the content column (`p-4`) |
| `content_vertical_alignment` | string | `justify-content-center` | Bootstrap flex alignment for content column |

#### Size options

- `fs-6`
- `fs-5`
- `fs-4`

#### Vertical alignment options

- `justify-content-start`
- `justify-content-center`
- `justify-content-end`

### Media

| Prop | Type | Description |
|------|------|-------------|
| `media_image` | object | Image object used for the media column |

Example:

```yaml
media_image:
  src: /images/example.jpg
  alt: Example image
```

### Link options

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `link_url` | string | *(empty)* | Makes the card clickable |
| `link_target` | string | `default` | Link target behavior |

Target options:

- `default`
- `_blank`
- `_parent`
- `_top`

## Usage examples

### Basic featured card

```twig
{% include 'vartheme_bs5:card-featured' with {
  ratio: '06_06',
  media_position: 'start'
} %}
```

### Card with image

```twig
{% include 'vartheme_bs5:card-featured' with {
  ratio: '08_04',
  media_image: {
    src: '/images/example.jpg',
    alt: 'Example image'
  }
} %}
```

### Card with padded content

```twig
{% include 'vartheme_bs5:card-featured' with {
  ratio: '06_06',
  padded: true
} %}
  {% block content %}
    {% include 'vartheme_bs5:heading' with { title: 'Featured Card' } %}

    {% include 'vartheme_bs5:text' with { text: 'Example description text.' } %}
  {% endblock %}
{% endinclude %}
```

### Clickable card

```twig
{% include 'vartheme_bs5:card-featured' with {
  link_url: '/example-page',
  link_target: '_blank'
} %}
```

## Best practices

- Use **`06_06`** or **`08_04`** ratios for most layouts.
- Use **`equal_height`** when cards appear in grids.
- Keep images **landscape oriented** for consistent results.
- Combine with **heading, text, and button components** inside the content slot.
