# Bootstrap Icon

A lightweight Bootstrap icon component that renders icons with Bootstrap Icons classes.

## Features

- Uses Bootstrap Icons classes such as `bi bi-arrow-right`
- Icon size input uses rem values
- Color uses Bootstrap utility class values directly
- Clean Twig structure with logic prepared above the markup

## Available props

### Core
- `icon`: Bootstrap icon name
- `icon_size`: Size in rem as a string, for example `1`, `fs-4`, or `2`

### Style
- `color`: Bootstrap text utility class value
  - `text-body`
  - `text-primary`
  - `text-secondary`
  - `text-success`
  - `text-danger`
  - `text-warning`
  - `text-info`
  - `text-light`
  - `text-dark`
  - `text-muted`
  - `text-white`

## Example

```twig
{{ include('vartheme_bs5:bootstrap-icon', {
  icon: 'arrow-right',
  icon_size: '2',
  color: 'text-primary'
}, with_context: false) }}
```


## Icon size options

- Extra small → `fs-6`
- Small → `fs-5`
- Medium → `fs-4`
- Large → `fs-3`
- Extra large → `fs-2`
- Huge → `fs-1`
