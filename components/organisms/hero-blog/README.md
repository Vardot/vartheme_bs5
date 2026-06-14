# Hero Blog

A blog/article content header that renders a published date, title, optional author (plain or linked), and an optional media slot in a centered layout.

## What it does

Use this component when you need an editorial hero that can:

- display a formatted published date via the `vartheme_bs5:date` component
- render the title through the `vartheme_bs5:heading` component
- show the author as plain text or as a linked name via `vartheme_bs5:link`
- render optional media below the text content through a slot
- apply Bootstrap utility classes for spacing and a centered column layout

## Files

- `hero-blog.component.yml` — component schema and props
- `hero-blog.twig` — component template
- `README.md` — usage notes and examples
- `hero-blog.mdx` — Storybook docs page
- `hero-blog.stories.json` — Storybook story configuration
- `hero-blog.stories.twig` — Storybook story templates

## Props overview

### Content

- `heading_text`: main title text; defaults to `Enter the title`
- `level`: heading level for the title — `2`, `3`, `4`, `5`, or `6`; defaults to `2`
- `heading_size`: visual heading size — `default` (match the heading level), `h2`–`h6`, `display-1`–`display-6`; defaults to `default`

### Meta

- `date`: ISO 8601 date string (`YYYY-MM-DD`); rendered via `vartheme_bs5:date`
- `author`: author name; defaults to empty
- `author_url`: optional URL for the author name; defaults to empty

## Slots

- `blog_media`: optional media rendered below the content

## Available attributes

- `attributes` / `section_attributes`: the `<section>` wrapper
- `container_attributes`: the container wrapper
- `row_attributes`: the inner row wrapper
- `content_attributes`: the content column wrapper
- `media_attributes`: the blog media wrapper

## Example: basic blog hero

```twig
{% include 'vartheme_bs5:hero-blog' with {
  heading_text: 'How design systems scale content',
  level: 2,
  heading_size: 'default',
  date: '2026-03-24',
  author: 'John Smith'
} only %}
```

## Example: linked author with media slot

```twig
{% embed 'vartheme_bs5:hero-blog' with {
  heading_text: 'Inside the new publishing workflow',
  level: 2,
  heading_size: 'display-4',
  date: '2026-03-24',
  author: 'Jane Doe',
  author_url: 'https://example.com/authors/jane-doe'
} only %}
  {% block blog_media %}
    <img src="/path/to/cover.jpg" alt="Blog cover" class="img-fluid rounded">
  {% endblock %}
{% endembed %}
```

## Notes

- `heading_size: default` does not pass a visual size override; the heading then matches the selected `level`.
- The date row is only rendered when `date` is provided.
- The author block is only rendered when `author` is set; it is linked when `author_url` is provided, otherwise it is plain text.
- The `blog_media` slot is only rendered when it has content.
