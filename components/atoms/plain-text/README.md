# Plain Text

Renders plain text with optional smart trimming by words or characters.

## What it does

Use this component when you need a simple text block that can:

- output text content as-is, escaped, inside a `<div>`
- optionally trim the content to a number of words or characters
- optionally strip HTML before trimming
- append a configurable suffix when content is trimmed

## Files

- `plain-text.component.yml` — component schema and props
- `plain-text.twig` — component template
- `README.md` — usage notes and examples
- `plain-text.mdx` — Storybook docs page
- `plain-text.stories.json` — Storybook story configuration
- `plain-text.stories.twig` — Storybook story templates

## Props overview

### Content

- `text`: the text content; defaults to the Lorem ipsum example. When Trim is disabled, the original text is shown as-is.

### Trimming

- `trim`: enable smart trimming — `true` or `false`; defaults to `false`
- `trim_length`: number of characters or words to keep (minimum `0`); defaults to `50`
- `trim_units`: measure trim length in `characters` or `words`; defaults to `words`
- `suffix`: text appended when content is trimmed; defaults to `'...'`
- `strip_html`: strip HTML before trimming — `true` or `false`; defaults to `false`. Only works when Trim is enabled; if Trim is disabled, the original text is shown.

## Trim units

| Value | Behavior |
|---|---|
| `words` | `trim_length` counts whole words |
| `characters` | `trim_length` counts characters |

## Example

```twig
{% include 'vartheme_bs5:plain-text' with {
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  trim: true,
  trim_length: 5,
  trim_units: 'words',
  suffix: ' Read more',
  strip_html: false,
} only %}
```

## Notes

- Nothing is rendered when `text` is empty.
- Trimming only runs when `trim` is enabled and `trim_length` is greater than `0`; otherwise the original text is shown.
- When `strip_html` is enabled, the content is stripped of tags and the output is escaped. When it is disabled and trimming is active, the raw (unstripped) HTML string is trimmed and rendered as-is.
- Boolean props (`trim`, `strip_html`) arrive as real booleans from SDC; only a presence fallback is applied in the template.
