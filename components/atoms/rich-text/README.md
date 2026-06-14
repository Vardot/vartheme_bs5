# Rich Text

Renders rich HTML with optional smart trimming by words or characters.

## What it does

Use this component when you need an HTML content block that can:

- output filtered/safe HTML content inside a `<div>`
- optionally trim the content to a number of words or characters
- optionally strip HTML before trimming
- append a configurable suffix when content is trimmed

## Files

- `rich-text.component.yml` — component schema and props
- `rich-text.twig` — component template
- `README.md` — usage notes and examples
- `rich-text.mdx` — Storybook docs page
- `rich-text.stories.json` — Storybook story configuration
- `rich-text.stories.twig` — Storybook story templates

## Props overview

### Content

- `text`: HTML content (e.g. Text); defaults to `<p>Lorem ipsum dolor sit amet.</p>`. Make sure this content is filtered/safe before rendering.

### Trimming

- `trim`: enable smart trimming — `true` or `false`; defaults to `false`
- `trim_length`: number of characters or words to keep (minimum `0`); defaults to `50`
- `trim_units`: measure trim length in `characters` or `words`; defaults to `words`
- `suffix`: text appended when content is trimmed; defaults to `'...'`
- `strip_html`: strip HTML before trimming — `true` or `false`; defaults to `false`. Only works when Trim is enabled; if Trim is disabled, the original rich HTML is shown.

## Trim units

| Value | Behavior |
|---|---|
| `words` | `trim_length` counts whole words |
| `characters` | `trim_length` counts characters |

## Example

```twig
{% include 'vartheme_bs5:rich-text' with {
  text: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>',
  trim: true,
  trim_length: 8,
  trim_units: 'words',
  suffix: '...',
  strip_html: false,
} only %}
```

## Notes

- The content is always wrapped in a `<div>`.
- By default the HTML is rendered raw; when `strip_html` is enabled and trimming is active, the content is stripped to plain text and escaped on output.
- Trimming only runs when `trim` is enabled and `trim_length` is greater than `0`; otherwise the original rich HTML is shown.
- When trimming HTML without stripping, the template trims the HTML string directly as a best-effort approach based on the visible (stripped) text length.
- Boolean props (`trim`, `strip_html`) arrive as real booleans from SDC; only a presence fallback is applied in the template.
