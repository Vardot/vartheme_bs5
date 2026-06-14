# Text

A rich text block rendered with optional Bootstrap font-size and text color utilities.

## What it does

Use this component when you need to:

- output a block of filtered HTML rich text
- apply an optional Bootstrap font-size utility
- apply a Bootstrap text color utility

## Files

- `text.component.yml` — component schema and props
- `text.twig` — component template
- `README.md` — usage notes and examples
- `text.mdx` — Storybook docs page
- `text.stories.json` — Storybook story configuration
- `text.stories.twig` — Storybook story templates

## Props overview

### Content

- `text`: HTML content (rich text); defaults to `<p>Lorem ipsum dolor sit amet.</p>`. Make sure this content is filtered/safe before rendering.

### Appearance

- `text_size`: Bootstrap font-size utility class — `none`, `fs-6`, `fs-5`, `fs-4`, `fs-3`; defaults to `none`
- `text_color`: Bootstrap text color utility class; defaults to `text-body`

## Text size values

| Value | Label |
|---|---|
| `none` | None |
| `fs-6` | Small |
| `fs-5` | Medium |
| `fs-4` | Large |
| `fs-3` | Extra large |

## Text color values

| Value | Label |
|---|---|
| `text-body` | Default |
| `text-primary` | Primary |
| `text-secondary` | Secondary |
| `text-success` | Success |
| `text-danger` | Danger |
| `text-warning` | Warning |
| `text-info` | Info |
| `text-muted` | Muted |
| `text-dark` | Dark |
| `text-white` | White |
| `text-subtle-text` | Subtle Text |

## Available attributes

- `attributes`: attributes object merged onto the wrapping `<div>`

## Example

```twig
{% include 'vartheme_bs5:text' with {
  text: '<p>Welcome to our site. This paragraph is rendered as rich text.</p>',
  text_size: 'fs-5',
  text_color: 'text-primary'
} only %}
```

## Notes

- The content is wrapped in a `<div class="rich-text">` and printed with `|raw`, so the `text` value must already be filtered/safe.
- `text_size: none` adds no font-size class; any other value is applied directly.
- The `text_color` value is applied directly as a class.
