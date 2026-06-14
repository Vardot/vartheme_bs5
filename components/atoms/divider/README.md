# Divider

A Bootstrap 5.3-compatible horizontal divider rendered with the native `<hr>` element.

## Bootstrap reference

> [Bootstrap 5.3 — Horizontal rules](https://getbootstrap.com/docs/5.3/content/reboot/#horizontal-rules)

## What it does

Use this component when you need a clean visual separator between sections, cards, text blocks, media areas, or layout groups that can:

- render a semantic `<hr>` element following the Bootstrap 5.3 horizontal rule approach
- control border width, border color, and opacity with Bootstrap utilities
- control top and bottom spacing with Bootstrap margin utilities

## Files

- `divider.component.yml` — component schema and props
- `divider.twig` — component template
- `README.md` — usage notes and examples
- `divider.mdx` — Storybook docs page
- `divider.stories.json` — Storybook story configuration
- `divider.stories.twig` — Storybook story templates

## Props overview

### Appearance

- `border_width`: Bootstrap border width utility — `border-1`, `border-2`, `border-3`, `border-4`, `border-5`; defaults to `border-1`
- `border_color`: Bootstrap border color utility — `border-secondary`, `border-light`, `border-dark`, `border-primary`, `border-success`, `border-danger`, `border-warning`, `border-info`, `border-white`, `border-black`; defaults to `border-secondary`
- `opacity`: Bootstrap opacity utility — `opacity-25`, `opacity-50`, `opacity-75`, `opacity-100`; defaults to `opacity-100`

### Spacing

- `margin_top`: Bootstrap margin-top utility — `mt-0` through `mt-5`; defaults to `mt-3`
- `margin_bottom`: Bootstrap margin-bottom utility — `mb-0` through `mb-5`; defaults to `mb-3`

## Available attributes

- `attributes` — HTML attributes for the `<hr>` element

## Example

```twig
{% include 'vartheme_bs5:divider' with {
  border_width: 'border-1',
  border_color: 'border-secondary',
  opacity: 'opacity-100',
  margin_top: 'mt-3',
  margin_bottom: 'mb-3'
} only %}
```

## Notes

- The divider is full width by default, matching standard Bootstrap behavior.
- No inline styles or custom CSS/SCSS are used; styling is driven entirely by Bootstrap utility classes.
- All props have schema defaults, so the component renders correctly with no values supplied.
