# Taxonomy

A small taxonomy label component styled with **Bootstrap utilities**, plus minimal SCSS for details that Bootstrap doesn’t provide (letter-spacing + hover).

## Files
- `taxonomy.twig` – Component template
- `taxonomy.component.yml` – SDC metadata (Canvas-friendly props)
- `taxonomy.scss` / `taxonomy.css` – Minimal styling using CSS Logical Properties
- `taxonomy.mdx` / `taxonomy.stories.twig` / `taxonomy.stories.json` – Storybook docs & stories

## Props

| Prop | Type | Required | Default | Notes |
|---|---|---:|---|---|
| `label` | string | ✅ | – | Text shown inside the taxonomy badge |
| `url` | string | ❌ | `""` | If provided, renders as a link (`<a>`) |
| `target` | string | ❌ | `_self` | Only used when `url` is provided (`_self` / `_blank`) |
| `size` | string | ❌ | `taxonomy-lg` | Typography size modifier (`taxonomy-lg`, `taxonomy-sm`) |

## Twig usage

```twig
{% include "vartheme_bs5:taxonomy" with {
  label: "Taxonomy",
  url: "",
  target: "_self",
  size: "taxonomy-lg",
} %}
```

## Notes
- HTML ID / extra CSS class props are intentionally **not** included.
- SCSS uses **CSS Logical Properties** (`padding-block`, `padding-inline`).
