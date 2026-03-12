# Plain Text component

A minimal text component for rendering plain text, with optional smart trimming.

## Props

### `text` (string)
Text content to display.

### `trim` (boolean)
Enables smart trimming.

### `trim_length` (integer)
Number of characters or words to keep when trimming is enabled.

### `trim_units` (string)
Available values:
- `characters`
- `words`

### `suffix` (string)
Text appended when content is trimmed.

### `strip_html` (boolean)
Only applies when `trim` is enabled.

Behavior:
- `Trim = off, Strip HTML = off` → original text
- `Trim = off, Strip HTML = on` → original text
- `Trim = on, Strip HTML = on` → trims plain text after stripping HTML
- `Trim = on, Strip HTML = off` → trims content without stripping HTML

## Example

```twig
{{ include('vartheme_bs5:plain-text', {
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  trim: true,
  trim_length: 4,
  trim_units: 'words',
  suffix: '...',
  strip_html: true
}) }}
```
