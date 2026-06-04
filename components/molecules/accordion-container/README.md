# Accordion container

The Accordion container component renders the parent Bootstrap accordion wrapper and manages shared behavior for nested accordion items.

## Design

| State         | Background               | Text color         |
|---------------|--------------------------|--------------------|
| Default       | `bg-secondary-subtle`    | `text-dark`        |
| Hover / focus | `bg-secondary`           | `#0D6EFD` (primary)|
| Active (open) | `bg-secondary-subtle`    | `text-dark`        |

## When to use

Use this component when you want to group multiple Accordion items under a single accordion system. It is useful for FAQs, pricing details, product specifications, policy summaries, and any content that should be grouped into collapsible sections.

## Features

- Bootstrap 5 accordion wrapper markup
- Optional flush style
- Optional always-open behavior for multiple expanded items
- Shared generated or custom accordion ID
- Optional color override passed to nested accordion items
- Works cleanly with drag-and-drop accordion item content

## Properties

### `id`
Optional ID for the accordion wrapper. Used for Bootstrap `data-bs-parent` behavior. Default: empty (auto-generated)

### `flush`
Applies Bootstrap `accordion-flush` styling to remove the default outer borders and rounding. Default: `false`

### `always_open`
Allows multiple accordion items to remain open at the same time. Default: `false`

### `color`
Optional Bootstrap `text-bg-*` class passed to nested accordion items when an item uses `inherit`. Leave empty to use the default design (secondary-subtle background, dark text).

Options: `''` (default) `text-bg-primary` `text-bg-secondary` `text-bg-success` `text-bg-danger` `text-bg-warning` `text-bg-info` `text-bg-dark`

Default: `''` (empty — CSS controls styling)

## Slot

### `accordion_content`
Place one or more Accordion items inside this slot.

## Usage example

### Basic grouped accordion

```twig
{% embed 'vartheme_bs5:accordion-container' with {
  id: 'faq-accordion',
  flush: false,
  always_open: false,
} %}
  {% block accordion_content %}
    {% embed 'vartheme_bs5:accordion-block' with {
      title: 'First item',
      heading_level: 3,
      open_by_default: true,
      color: 'inherit'
    } %}
      {% block accordion_content %}
        <p class="mb-0">First accordion content.</p>
      {% endblock %}
    {% endembed %}

    {% embed 'vartheme_bs5:accordion-block' with {
      title: 'Second item',
      heading_level: 3,
      open_by_default: false,
      color: 'inherit'
    } %}
      {% block accordion_content %}
        <p class="mb-0">Second accordion content.</p>
      {% endblock %}
    {% endembed %}
  {% endblock %}
{% endembed %}
```

### Always-open accordion

```twig
{% embed 'vartheme_bs5:accordion-container' with {
  id: 'support-topics',
  always_open: true,
} %}
  {% block accordion_content %}
    {% embed 'vartheme_bs5:accordion-block' with {
      title: 'Topic 1',
      open_by_default: true,
      color: 'inherit'
    } %}
      {% block accordion_content %}
        <p class="mb-0">This item can stay open with other items.</p>
      {% endblock %}
    {% endembed %}
  {% endblock %}
{% endembed %}
```

## Notes

- Add the container first, then place Accordion items inside it.
- Nested items can inherit the container color by using `inherit` on the block.
- If no ID is provided, the component generates one automatically.
