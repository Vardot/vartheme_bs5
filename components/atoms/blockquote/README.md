# Blockquote

A Bootstrap 5 blockquote with an optional citation footer and a dark or light color style.

## Bootstrap reference

> [Bootstrap 5.3 — Blockquotes](https://getbootstrap.com/docs/5.3/content/typography/#blockquotes)

## What it does

Use this component when you need a reusable blockquote that can:

- render quote text inside a styled, italic, bold blockquote
- switch between a dark or light color style (text and border utilities)
- optionally show a citation footer with the quotee name and position
- expose per-region attribute objects for the blockquote, footer, and cite elements

## Files

- `blockquote.component.yml` — component schema and props
- `blockquote.twig` — component template
- `README.md` — usage notes and examples
- `blockquote.mdx` — Storybook docs page
- `blockquote.stories.json` — Storybook story configuration
- `blockquote.stories.twig` — Storybook story templates

## Props overview

### Content

- `text` (required): the main content of the blockquote; make sure it is filtered/safe before rendering
- `cite_text`: name and role, organization, or source of the quote; shown as a citation footer when present

### Appearance

- `type`: color style — `dark`, `light`; defaults to `dark`

## Color style values

| Value | Style |
|---|---|
| `dark` | Dark — `text-dark`, `border-secondary` |
| `light` | Light — `text-white`, `border-light` |

## Available attributes

The template exposes named attribute objects you can pass in to add classes or attributes to specific elements:

- `blockquote_attributes` — HTML attributes for the `<blockquote>` element
- `footer_attributes` — HTML attributes for the `<footer>` element
- `cite_attributes` — HTML attributes for the `<cite>` element

## Example: dark blockquote with citation

```twig
{% include 'vartheme_bs5:blockquote' with {
  type: 'dark',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  cite_text: 'Quotee Name and Position'
} only %}
```

## Example: light blockquote

```twig
{% include 'vartheme_bs5:blockquote' with {
  type: 'light',
  text: 'A short quote that needs a light style.',
  cite_text: 'Someone, Organization'
} only %}
```

## Notes

- The `text` prop is required and is printed as-is — ensure it is filtered/safe before rendering.
- The citation footer is only rendered when `cite_text` is not empty.
- A `data-type` attribute reflecting the selected `type` is rendered on the `<blockquote>` element.
- The Twig template uses Bootstrap utilities only; typography adjustments live in `blockquote.scss`, which uses CSS Logical Properties for LTR/RTL support.
