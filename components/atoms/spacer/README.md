# Spacer

A simple full-width Bootstrap spacer for adding vertical space between sections.

## Bootstrap reference

> [Bootstrap 5.3 — Spacing utilities](https://getbootstrap.com/docs/5.3/utilities/spacing/)

## What it does

Use this component when you need to:

- insert consistent vertical spacing between page sections
- pick the amount of space from Bootstrap's vertical padding scale
- render a decorative, full-width element that is hidden from assistive technology

## Files

- `spacer.component.yml` — component schema and props
- `spacer.twig` — component template
- `README.md` — usage notes and examples
- `spacer.mdx` — Storybook docs page
- `spacer.stories.json` — Storybook story configuration
- `spacer.stories.twig` — Storybook story templates

## Props overview

### Spacing

- `size`: Bootstrap vertical spacing utility class applied directly to the spacer; one of `py-0`, `py-1`, `py-2`, `py-3`, `py-4`, `py-5`; defaults to `py-3`

## Size values

| Value | Label |
|---|---|
| `py-0` | None |
| `py-1` | Extra small |
| `py-2` | Small |
| `py-3` | Medium |
| `py-4` | Large |
| `py-5` | Extra large |

## Available attributes

- `attributes`: attributes object merged onto the spacer `<div>`

## Example

```twig
{% include 'vartheme_bs5:spacer' with {
  size: 'py-5'
} only %}
```

## Notes

- The spacer always renders a full-width `<div>` with the `w-100` class plus the chosen `size` class.
- It carries `aria-hidden="true"`, so it is purely visual and ignored by assistive technology.
- The `size` value is applied directly as a class, so it is expected to be one of the enum values above.
