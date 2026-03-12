# Rich Text

Renders trusted rich text and supports optional smart trimming.

## Usage

```twig
{% include 'vartheme_bs5:rich-text' with {
  text: '<p><strong>Hello</strong> from rich text.</p>',
  trim_length: 20,
  trim_units: 'words',
  suffix: '...',
  strip_html: true
} only %}
```

## Props

- `text`: Rich text / HTML content.
- `trim_length`: Number of characters or words to keep. Use `0` to disable trimming.
- `trim_units`: `characters` or `words`.
- `suffix`: Text appended when content is trimmed.
- `strip_html`: Removes HTML before trimming and output.

## Notes

- When trimming is disabled and `strip_html` is `false`, the component renders `text` with `|raw`.
- When trimming is enabled, the output is converted to safe plain text for reliable trimming.
- Ensure incoming HTML is already filtered/safe before passing it to the component.
