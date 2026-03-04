# HTML Code

Render **trusted HTML markup** inside a lightweight wrapper.

This is useful when you need to place a small block of custom HTML in a layout while still using a consistent SDC component include.

## Important

This component renders the provided markup **unescaped** using Twig `|raw`.

Only use it with **trusted** content.

## Props

- **code** (string): HTML markup to output.

## Example

```twig
{{ include('vartheme_bs5:html-code', {
  code: '<p class="mb-0">Hello <strong>world</strong>.</p>'
}) }}
```
