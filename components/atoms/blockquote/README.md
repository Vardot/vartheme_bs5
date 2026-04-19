# Blockquote

Canvas-supported **Blockquote** component built for Drupal SDC and styled with **Bootstrap 5** utilities.

## Props

| Prop | Type | Required | Default | Description |
|---|---:|:---:|---:|---|
| `type` | string | No | `dark` | Visual style. Options: `dark`, `light`. |
| `text` | string | **Yes** | — | The quote text (ensure it is filtered/safe before rendering). |
| `cite_text` | string | No | — | Name / position / source shown as a citation line. |

## Twig usage

```twig
{# Example: dark (default) #}
{% include 'vartheme_bs5:blockquote' with {
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  cite_text: 'Quotee Name and Position'
} only %}

{# Example: light #}
{% include 'vartheme_bs5:blockquote' with {
  type: 'light',
  text: 'A short quote that needs a light style.',
  cite_text: 'Someone, Organization'
} only %}
```

## Notes

- Uses **Bootstrap utilities only** in Twig.
- Typography adjustments are handled in `blockquote.scss`.
- Uses **CSS Logical Properties** for better LTR/RTL support.
