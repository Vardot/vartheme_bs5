# Text component

A minimal a component that renders **plain text only**.

## Props

### `text` (string)
Plain text without HTML tags. Output is escaped in Twig (`|e`).

## Example

```twig
{{ include('vartheme_bs5:plain-text', {
  text: 'Hello world'
}) }}
```
