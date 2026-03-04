# Rich Text

Renders **trusted HTML** (rich text) using Bootstrap’s default typography styles.

## Usage

```twig
{% include 'vartheme_bs5:rich-text' with {
  text: '<p><strong>Hello</strong> from rich text.</p>'
} only %}
```

## Notes

- The `text` prop is rendered with `|raw`. Ensure the HTML is already filtered/safe before passing it to the component.
- Use Bootstrap utility classes inside your HTML if you need additional styling (for example: `mb-0`, `lead`, `text-muted`, etc.).
