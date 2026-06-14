# Heading

A flexible HTML heading (h1–h6) with optional Bootstrap typography, color, alignment, weight, and style utilities, and an optional link wrapper.

All HTML headings, `<h1>` through `<h6>`, are available. When you need a heading to stand out, consider using a display heading—a larger, slightly more opinionated heading style.

## Bootstrap reference

> #### [Bootstrap Documentation on Heading](https://getbootstrap.com/docs/5.3/content/typography/#headings)
> * [Headings](https://getbootstrap.com/docs/5.3/content/typography/#headings)
> * [Display headings](https://getbootstrap.com/docs/5.3/content/typography/#display-headings)

## What it does

Use this component when you need a reusable heading that can:

- render any heading level from `h1` to `h6`
- apply an optional Bootstrap typography size that differs from the heading level
- apply Bootstrap text color, alignment, font weight, and font style utilities
- optionally render the heading text as a link via the `vartheme_bs5:link` component
- control where a linked heading opens (same tab or new tab)

## Files

- `heading.component.yml` — component schema and props
- `heading.twig` — component template
- `README.md` — usage notes and examples
- `heading.mdx` — Storybook docs page
- `heading.stories.json` — Storybook story configuration
- `heading.stories.twig` — Storybook story templates

## Props overview

### Content

- `heading_text`: the heading text; defaults to `Enter title`
- `level`: HTML heading tag — `1`, `2`, `3`, `4`, `5`, or `6`; defaults to `3`

### Typography and appearance

- `text_size`: optional Bootstrap typography utility — `h1`–`h6`, `display-1`–`display-6`; leave empty to match the selected heading level
- `text_color`: Bootstrap text color utility — `text-primary`, `text-secondary`, `text-success`, `text-danger`, `text-warning`, `text-info`, `text-muted`, `text-white`, `text-dark`; leave empty for theme default
- `align`: Bootstrap text alignment utility — `text-start`, `text-center`, `text-end`; leave empty for default alignment
- `font_weight`: Bootstrap font weight utility — `fw-light`, `fw-normal`, `fw-medium`, `fw-semibold`, `fw-bold`; leave empty for default weight
- `font_style`: Bootstrap font style utility — `fst-italic`; leave empty for default style

### Link

- `url`: optional URL; when provided the heading text is rendered as a link using the `vartheme_bs5:link` component
- `target`: where the linked heading opens — `_self` or `_blank`; defaults to `_self`

## Available attributes

- `attributes`: attributes object applied to the heading element; the selected utility classes (`text_size`, `text_color`, `align`, `font_weight`, `font_style`) are merged onto it

## Example: simple heading

```twig
{% include 'vartheme_bs5:heading' with {
  heading_text: 'Build better digital experiences',
  level: 2,
  text_size: 'display-5',
  text_color: 'text-primary',
  align: 'text-center',
  font_weight: 'fw-bold'
} only %}
```

## Example: linked heading opening in a new tab

```twig
{% include 'vartheme_bs5:heading' with {
  heading_text: 'Read the full article',
  level: 3,
  url: 'https://example.com/article',
  target: '_blank'
} only %}
```

## Notes

- `level` controls the rendered HTML tag (`h1`–`h6`); `text_size` controls only the visual typography and is independent of the level.
- Only utility props that are set are merged onto the element — empty values are filtered out, avoiding duplicate or empty classes.
- When `url` is provided, the heading content is delegated to the `vartheme_bs5:link` component; `target` is only passed through when it is not `_self`.
