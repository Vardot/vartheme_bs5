# Rich Text

Rich Text renders trusted HTML content and supports optional smart trimming.

## Props

- **text**: Rich HTML content.
- **trim**: Enables trimming behavior.
- **trim_length**: Number of characters or words to keep.
- **trim_units**: `characters` or `words`.
- **suffix**: Text added after trimmed content.
- **strip_html**: Only works when **trim** is enabled.

## Behavior

- **Trim = off, Strip HTML = off** → keeps original rich HTML
- **Trim = off, Strip HTML = on** → keeps original rich HTML
- **Trim = on, Strip HTML = on** → trims plain text
- **Trim = on, Strip HTML = off** → applies trim and keeps HTML output

## Example

```twig
{{ include('vartheme_bs5:rich-text', {
  text: '<p><strong>Hello</strong> world from <em>rich text</em>.</p>',
  trim: true,
  trim_length: 3,
  trim_units: 'words',
  suffix: '...',
  strip_html: false
}) }}
```
