# Heading component

A flexible heading component that renders **h1–h6** with optional link support, using **Bootstrap utility classes** for styling.

---

## Features

- ✅ Renders **h1–h6** via `level`
- ✅ Optional **linked heading** via `url`
- ✅ Optional **link target** via `target` (adds safe `rel` for `_blank`)
- ✅ Uses **Bootstrap utility classes** for color/alignment/weight/style

---

## Props

| Prop | Type | Default | Description |
|---|---|---:|---|
| `text` | string | `Heading` | The heading text. |
| `level` | string | `h2` | Heading level: `h1`–`h6`. |
| `url` | string | *(empty)* | If provided, the heading becomes a link. |
| `target` | string | `default` | Link target: `default`, `_self`, `_blank`, `_parent`, `_top`. |
| `text_color` | string | `text-body` | Bootstrap text utility class (enum keys match class names). |
| `text_align` | string | `text-start` | Bootstrap alignment class (enum keys match class names). |
| `font_weight` | string | *(empty)* | Bootstrap font weight utility class. |
| `font_style` | string | *(empty)* | Bootstrap font style utility class. |

### Bootstrap enum keys

For select props (like `text_color`, `text_align`), the **stored value is the actual Bootstrap utility class name** (e.g. `text-primary`, `text-center`).  
This means the Twig template can apply them directly without mapping.

---

## Examples

### 1) Basic heading

- `level`: `h2`  
- `text`: `About us`

### 2) Colored heading

- `level`: `h3`
- `text`: `Latest updates`
- `text_color`: `text-primary`

### 3) Centered, lighter weight

- `level`: `h4`
- `text`: `Highlights`
- `text_align`: `text-center`
- `font_weight`: `fw-semibold`
- `font_style`: `fst-italic`

### 4) Linked heading (same tab)

- `level`: `h2`
- `text`: `Read more`
- `url`: `/blog`

### 5) Linked heading (new tab)

- `level`: `h2`
- `text`: `Visit website`
- `url`: `https://example.com`
- `target`: `_blank`

> When `target` is `_blank`, the component automatically adds:  
> `rel="noopener noreferrer"` (recommended for security).

---

## Twig usage

```twig
{% include 'vartheme_bs5:heading' with {
  text: 'Documentation',
  level: 'h2',
  text_color: 'text-primary',
  text_align: 'text-start',
  font_weight: 'fw-bold',
  font_style: 'fst-italic',
  url: 'https://example.com',
  target: '_blank'
} only %}
```

---

## Notes

- The component relies on **Bootstrap utilities** for most styling.
