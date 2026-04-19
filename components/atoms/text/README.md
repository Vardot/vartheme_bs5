# Text

A **text** component that renders trusted HTML content and lets you control typography using **Bootstrap utility classes**.

It also supports **Smart trim** options so you can limit the output by characters or words.

## Usage

```twig
{% include 'vartheme_bs5:text' with {
  text: '<p><strong>Hello</strong> from rich text.</p>',
  text_size: 'fs-6',
  text_color: 'text-body',
  trim_length: 18,
  trim_units: 'words',
  suffix: '...',
  strip_html: true
} %}
```

> **Important:** `text` is rendered with `|raw` when trimming is disabled. Make sure the HTML is already filtered / trusted before passing it to this component.

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `text` | `string` | `<p>Lorem ipsum dolor sit amet.</p>` | HTML content. |
| `text_size` | `string` | `none` | Bootstrap font-size utility class. Examples: `fs-6`, `fs-5`, `fs-4`, `fs-3`. |
| `text_color` | `string` | `text-body` | Bootstrap text color utility class. Examples: `text-body`, `text-primary`, `text-muted`, `text-white`. |
| `trim_length` | `number` | `0` | Number of characters or words to keep. Set `0` to disable trimming. |
| `trim_units` | `string` | `characters` | Trim by `characters` or `words`. |
| `suffix` | `string` | `...` | Text appended when the content is trimmed. |
| `strip_html` | `boolean` | `false` | Removes HTML tags before trimming. Recommended when using smart trim. |

## Notes

- When `strip_html` is enabled, the component trims plain text output.
- When trimming is disabled, trusted HTML is rendered as-is.
- For the safest trimmed output, use `strip_html: true`.
