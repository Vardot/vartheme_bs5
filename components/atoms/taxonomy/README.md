# Taxonomy

A Bootstrap-styled taxonomy badge that renders as a link when a URL is provided, otherwise as a span.

## What it does

Use this component when you need to:

- display a taxonomy term as a compact, uppercase badge
- optionally turn the badge into a link to the term page
- open that link in the same or a new tab
- choose between a large and small typography size

## Files

- `taxonomy.component.yml` — component schema and props
- `taxonomy.twig` — component template
- `README.md` — usage notes and examples
- `taxonomy.mdx` — Storybook docs page
- `taxonomy.stories.json` — Storybook story configuration
- `taxonomy.stories.twig` — Storybook story templates

## Props overview

### Content

- `label`: text shown inside the taxonomy badge (required)

### Link

- `url`: if provided, the taxonomy renders as a link; defaults to `''`
- `target`: where to open the link, only used when `url` is provided — `_self` or `_blank`; defaults to `_self`

### Appearance

- `size`: typography size (taxonomy modifier class) — `taxonomy-lg` or `taxonomy-sm`; defaults to `taxonomy-lg`

## Target values

| Value | Label |
|---|---|
| `_self` | Same tab |
| `_blank` | New tab |

## Size values

| Value | Label |
|---|---|
| `taxonomy-lg` | Large |
| `taxonomy-sm` | Small |

## Available attributes

- `attributes`: attributes array available to the component
- `taxonomy_attributes`: attributes for the rendered badge element (`<a>` or `<span>`)

## Example

```twig
{% include 'vartheme_bs5:taxonomy' with {
  label: 'Announcements',
  url: '/taxonomy/term/12',
  target: '_blank',
  size: 'taxonomy-lg'
} only %}
```

```twig
{% include 'vartheme_bs5:taxonomy' with {
  label: 'Draft',
  size: 'taxonomy-sm'
} only %}
```

## Notes

- With a non-empty `url` the badge renders as `<a>`; otherwise it renders as `<span>`.
- The badge is built entirely from Bootstrap utilities (`badge`, `bg-dark`, `text-accent`, `border`, `border-accent`, and more) plus the `taxonomy` class — no custom CSS.
- The `taxonomy-lg` size adds the `fs-6` utility; `taxonomy-sm` omits it.
- When `target` is `_blank`, the link also gets `rel="noopener noreferrer"`.
- The link variant adds `text-decoration-none`; both `label` and `url` are escaped on output.
