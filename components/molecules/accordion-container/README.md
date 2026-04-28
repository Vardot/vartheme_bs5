# Accordion container

The Accordion container component renders the parent Bootstrap accordion wrapper and manages shared behavior for nested accordion items.

## When to use

Use this component when you want to group multiple Accordion items under a single accordion system. It is useful for FAQs, pricing details, product specifications, policy summaries, and any content that should be grouped into collapsible sections.

## Features

- Bootstrap 5 accordion wrapper markup
- Optional flush style
- Optional always-open behavior for multiple expanded items
- Shared generated or custom accordion ID
- Passes a default header color to nested accordion items
- Works cleanly with drag-and-drop accordion item content

## Properties

### `id`
Optional ID for the accordion wrapper. This is used for Bootstrap `data-bs-parent` behavior.

Example:

```text
faq-accordion
```

Default: empty (auto-generated)

### `flush`
Applies Bootstrap `accordion-flush` styling to remove the default outer borders and rounding.

Options:

```text
true
false
```

Default: `false`

### `always_open`
Allows multiple accordion items to remain open at the same time.

Options:

```text
true
false
```

Default: `false`

### `color`
Default header color passed to nested accordion items when an item uses `inherit`.

Editor options:

```text
Primary
Secondary
Success
Danger
Warning
Info
Light
Dark
```

Stored values:

```text
text-bg-primary
text-bg-secondary
text-bg-success
text-bg-danger
text-bg-warning
text-bg-info
text-bg-light
text-bg-dark
```

Default: `text-bg-light`

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
  color: 'text-bg-light'
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
      color: 'text-bg-primary'
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
  color: 'text-bg-info'
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
- Nested Accordion items can inherit the container color by using `inherit` on the item.
- If no ID is provided, the component generates one automatically.
