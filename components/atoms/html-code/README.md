# HTML Code

A minimal wrapper that outputs raw, trusted HTML markup.

## What it does

Use this component when you need to:

- inject a block of raw HTML markup into a page
- render trusted, author-provided HTML that should not be escaped

## Files

- `html-code.component.yml` — component schema and props
- `html-code.twig` — component template
- `README.md` — usage notes and examples
- `html-code.mdx` — Storybook docs page
- `html-code.stories.json` — Storybook story configuration
- `html-code.stories.twig` — Storybook story templates

## Props overview

### Content

- `code`: raw HTML markup string; printed unescaped. Use only with trusted content. Defaults to empty.

## Example

```twig
{% include 'vartheme_bs5:html-code' with {
  code: '<p class="mb-0">Hello <strong>world</strong>.</p>'
} only %}
```

## Notes

- The `code` value is rendered with the Twig `raw` filter — only ever pass trusted content, as no sanitization or escaping is applied.
- When `code` is empty (or whitespace only), the component renders nothing.
