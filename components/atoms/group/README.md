# Group

A flexible Bootstrap-based wrapper for grouping content in a horizontal or vertical flex layout, with gap, alignment, spacing, wrapping, and background utility support.

## What it does

Use this component when you need a reusable layout wrapper that can:

- stack items vertically or horizontally
- control the gap between items with Bootstrap utilities
- align and distribute items with flex utilities
- wrap horizontal items onto multiple lines when needed
- add top and bottom padding or margin with Bootstrap spacing classes
- apply Bootstrap background utility classes

## Files

- `group.component.yml` — component schema and props
- `group.twig` — component template
- `README.md` — usage notes and examples
- `group.mdx` — Storybook docs page
- `group.stories.json` — Storybook story configuration
- `group.stories.twig` — Storybook story templates

## Props overview

### Appearance

- `background_color`: Bootstrap background utility or `none`

### Layout

- `direction`: `vertical` or `horizontal`
- `gap`: Bootstrap `gap-*` utility
- `wrap`: wrapping mode for horizontal layouts
- `align_items`: cross-axis alignment
- `justify_content`: main-axis distribution

### Spacing

- `padding_block_start`
- `padding_block_end`
- `margin_block_start`
- `margin_block_end`

## Slots

- `content`

## Example: vertical stacked group

```twig
{% embed 'vartheme_bs5:group' with {
  background_color: 'bg-light',
  direction: 'vertical',
  gap: 'gap-3',
  align_items: 'align-items-stretch',
  justify_content: 'justify-content-start',
  padding_block_start: 'pt-4',
  padding_block_end: 'pb-4',
  margin_block_start: 'mt-0',
  margin_block_end: 'mb-0'
} only %}
  {% block content %}
    <div class="p-3 border rounded">Item one</div>
    <div class="p-3 border rounded">Item two</div>
    <div class="p-3 border rounded">Item three</div>
  {% endblock %}
{% endembed %}
```

## Example: horizontal toolbar-style group

```twig
{% embed 'vartheme_bs5:group' with {
  direction: 'horizontal',
  gap: 'gap-2',
  wrap: 'wrap',
  align_items: 'align-items-center',
  justify_content: 'justify-content-between',
  padding_block_start: 'pt-2',
  padding_block_end: 'pb-2',
  margin_block_start: 'mt-3',
  margin_block_end: 'mb-3'
} only %}
  {% block content %}
    <button class="btn btn-primary">Save</button>
    <button class="btn btn-outline-secondary">Preview</button>
    <button class="btn btn-link">Cancel</button>
  {% endblock %}
{% endembed %}
```

## Notes

- The component uses Bootstrap flex utilities directly, so the selected values can be used as-is in Twig.
- `wrap` only affects horizontal layouts.
- For layout wrappers, spacing utilities are often useful for controlling section rhythm without custom CSS.
