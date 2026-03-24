# Hero Blog

Hero Blog is a content header for blog posts, articles, and editorial pages. It renders the published date, title, optional author link, and optional media in a simple centered layout.

## What it does

- Displays a formatted published date
- Renders the title through `vartheme_bs5:heading`
- Supports plain author text or a linked author name
- Supports an optional `blog_media` slot under the text content
- Uses Bootstrap utility classes for spacing and layout

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `heading_text` | string | `Enter the title` | Main title text. |
| `level` | integer | `2` | Heading level for the title. Allowed values: `2` to `6`. |
| `heading_size` | string | `default` | Visual heading size. Use `default` to follow the selected heading level, or pass a Bootstrap heading/display class value such as `h3` or `display-4`. |
| `date` | string | `2026-03-24` | Published date as an ISO 8601 date string in `YYYY-MM-DD` format. |
| `author` | string | empty | Author name. |
| `author_url` | string | empty | Optional URL for the author name. |

## Slots

| Slot | Description |
|---|---|
| `blog_media` | Optional media rendered below the text content. |

## Date format

The `date` prop now expects a date string instead of a Unix timestamp.

Valid example:

```text
2026-03-24
```

## Examples

### Basic

```twig
{% include 'vartheme_bs5:hero-blog' with {
  heading_text: 'How design systems scale content',
  level: 2,
  heading_size: 'default',
  date: '2026-03-24',
  author: 'John Smith',
  author_url: ''
} only %}
```

### With linked author

```twig
{% include 'vartheme_bs5:hero-blog' with {
  heading_text: 'Inside the new publishing workflow',
  level: 2,
  heading_size: 'display-4',
  date: '2026-03-24',
  author: 'Jane Doe',
  author_url: 'https://example.com/authors/jane-doe'
} only %}
```

### With media slot

```twig
{% embed 'vartheme_bs5:hero-blog' with {
  heading_text: 'Editorial release notes',
  level: 3,
  heading_size: 'h4',
  date: '2026-03-24',
  author: 'Editorial team'
} only %}
  {% block blog_media %}
    <img src="/path/to/image.jpg" alt="Blog cover" class="img-fluid rounded">
  {% endblock %}
{% endembed %}
```

## Notes

- `heading_size: default` does not pass a visual size override to the heading component.
- The component renders heading levels `h2` through `h6`.
- If `author_url` is empty, the author is rendered as plain text.
- If `date` is empty, the date row is not rendered.
