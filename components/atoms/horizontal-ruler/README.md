# Horizontal Ruler

The Horizontal Ruler component renders a Bootstrap 5.3-compatible divider using the native `<hr>` element.

## When to use

Use this component when you need a clean visual separator between sections, cards, text blocks, media areas, or layout groups.

## Features

- Uses the semantic `<hr>` element
- Follows the Bootstrap 5.3 horizontal rule approach
- Supports Bootstrap utility classes directly
- Supports Bootstrap border color, border width, opacity, and spacing utilities
- Keeps Twig logic at the top of the file
- No inline styles
- No custom SCSS or CSS files
- No custom width option

## Important note

This version keeps the divider full width by default, matching normal Bootstrap behavior.

## Properties

### `border_width`
Bootstrap border width utility class.

Stored values:

```text
border-1
border-2
border-3
border-4
border-5
```

Default: `border-1`

### `border_color`
Bootstrap border color utility class.

Stored values:

```text
border-secondary
border-light
border-dark
border-primary
border-success
border-danger
border-warning
border-info
border-white
border-black
```

Default: `border-secondary`

### `opacity`
Bootstrap opacity utility class.

Stored values:

```text
opacity-25
opacity-50
opacity-75
opacity-100
```

Default: `opacity-25`

### `margin_top`
Bootstrap top spacing utility.

Stored values:

```text
mt-0
mt-1
mt-2
mt-3
mt-4
mt-5
```

Default: `mt-3`

### `margin_bottom`
Bootstrap bottom spacing utility.

Stored values:

```text
mb-0
mb-1
mb-2
mb-3
mb-4
mb-5
```

Default: `mb-3`

## Usage example

```twig
{% include 'vartheme_bs5:horizontal-ruler' with {
  border_width: 'border-1',
  border_color: 'border-secondary',
  opacity: 'opacity-25',
  margin_top: 'mt-3',
  margin_bottom: 'mb-3'
} %}
```
