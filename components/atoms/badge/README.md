# Badge component

A Canvas + SDC compatible Badge component built on Bootstrap 5 badges.

## Features

- Optional link wrapper (`url`)
- Optional Bootstrap Icon (via VarTheme icon component)
- Optional notification indicator (dot or count)
- Uses Bootstrap utility classes for variant, size, and radius (select values match class names)

## Props

| Prop | Type | Required | Default | Notes |
|---|---|---:|---|---|
| `label` | string | ✅ | — | Text shown inside the badge |
| `url` | string | — | `""` | If set, renders as `<a>` |
| `variant` | string (select) | ✅ | `text-bg-primary` | Bootstrap badge variant utility (`text-bg-*`) |
| `size` | string (select) | — | `fs-6 px-3 py-2` | Bootstrap sizing utilities (font-size + padding). Internal SCSS uses a size modifier class to keep indicator sizing consistent. |
| `icon` | string (select) | — | `none` | Bootstrap Icon name (as supported by your icon component) |
| `icon_first` | boolean | — | `true` | Icon before label when true |
| `radius` | string (select) | — | `rounded-1` | Bootstrap border-radius utility |
| `indicator` | string (select) | — | `none` | `none`, `dot`, `count` |
| `indicator_text` | string | — | `99+` | Used when `indicator=count` |

## Styling

Custom styling is intentionally minimal and implemented in `badge.scss` using **CSS Logical Properties and Values** (e.g. `padding-inline`, `padding-block`, `inline-size`, `block-size`) to support RTL/LTR layouts.

## Example

```twig
{% include 'vartheme_bs5:badge' with {
  label: 'New',
  url: 'https://example.com',
  variant: 'text-bg-success',
  size: 'fs-6 px-3 py-2',
  radius: 'rounded-pill',
  icon: 'check',
  icon_first: true,
  indicator: 'count',
  indicator_text: '3'
} only %}
```
