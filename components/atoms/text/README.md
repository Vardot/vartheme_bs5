# Rich Text

A **rich text** component that renders trusted HTML content and lets you control typography using **Bootstrap utility classes**.

## Usage

```twig
{% include 'vartheme_bs5:text' with {
  text: '<p><strong>Hello</strong> from rich text.</p>',
  text_size: 'fs-6',
  text_color: 'text-body'
} %}
```

> **Important:** `text` is rendered with `|raw`. Make sure the HTML is already filtered / trusted before passing it to this component.

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `text` | `string` | `<p>Lorem ipsum dolor sit amet.</p>` | HTML content (rendered as-is). |
| `text_size` | `string` | `fs-6` | Bootstrap font-size utility class. Examples: `fs-6`, `fs-5`, `fs-4`, `fs-3`. |
| `text_color` | `string` | `text-body` | Bootstrap text color utility class. Examples: `text-body`, `text-primary`, `text-muted`, `text-white`. |
