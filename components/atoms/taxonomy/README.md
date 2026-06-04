# Taxonomy

A small taxonomy badge component that renders as a `<span>` or an `<a>` link. Styled entirely with Bootstrap utilities.

## Props

| Prop     | Type   | Required | Default       | Description |
|----------|--------|:--------:|---------------|-------------|
| `label`  | string | ✅       | —             | Text shown inside the badge |
| `url`    | string | ❌       | `""`          | When provided, renders as a link (`<a>`) |
| `target` | string | ❌       | `_self`       | `_self` or `_blank`. Only used when `url` is set. `_blank` automatically adds `rel="noopener noreferrer"` |
| `size`   | string | ❌       | `taxonomy-lg` | `taxonomy-lg` (large) or `taxonomy-sm` (small) |

## Usage

```twig
{% include "vartheme_bs5:taxonomy" with {
  label: "Taxonomy",
  url: "",
  target: "_self",
  size: "taxonomy-lg",
} %}
```

## Files

- [taxonomy.twig](taxonomy.twig) — Component template
- [taxonomy.component.yml](taxonomy.component.yml) — SDC metadata and prop definitions
- [taxonomy.stories.twig](taxonomy.stories.twig) — Storybook stories
- [taxonomy.mdx](taxonomy.mdx) — Storybook documentation
