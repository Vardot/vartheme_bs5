# Accordion

The Accordion component renders a single Bootstrap accordion item with a clickable header and a collapsible content area.

## Design

| State         | Background               | Text color         |
|---------------|--------------------------|--------------------|
| Default       | `bg-secondary-subtle`    | `text-dark`        |
| Hover / focus | `bg-secondary`           | `#0D6EFD` (primary)|
| Active (open) | `bg-secondary-subtle`    | `text-dark`        |

## When to use

Use this component for one collapsible section inside an Accordion container. It is best for FAQs, grouped details, feature explanations, content toggles, and structured long-form content where readers should open one section at a time.

## Features

- Bootstrap 5 accordion item markup
- Configurable heading level from H2 to H6
- Optional default open state
- Optional stable item ID for links and testing
- Supports inherited or direct header color class overrides
- Works with any content dropped into the body slot
- Keeps logic centralized at the top of the Twig template

## Properties

### `title`
Text shown inside the accordion header button.

### `heading_level`
Heading tag level used for the accordion header wrapper.

Options: `H2` `H3` `H4` `H5` `H6` — Default: `H3`

### `open_by_default`
Controls whether the accordion item starts open. Default: `true`

### `parent_id`
Optional accordion container ID used for Bootstrap `data-bs-parent` binding. Normally supplied by the Accordion container automatically.

### `item_id`
Optional stable suffix for predictable heading and collapse IDs. Default: empty (auto-generated)

### `always_open`
Allows the item to stay open independently even inside a grouped accordion. Default: `false`

### `color`
Optional Bootstrap `text-bg-*` class applied directly to the accordion button to override the default design. Use `inherit` to receive the color set by the parent Accordion container.

Options: `inherit` `text-bg-primary` `text-bg-secondary` `text-bg-success` `text-bg-danger` `text-bg-warning` `text-bg-info` `text-bg-dark`

Default: `inherit`

## Slot

### `accordion_content`
Any body content: text, lists, images, buttons, links, media, or nested components.

## Usage example

```twig
{% embed 'vartheme_bs5:accordion-block' with {
  title: 'What is included?',
  heading_level: 3,
  open_by_default: false,
} %}
  {% block accordion_content %}
    <p class="mb-0">This section contains the accordion body content.</p>
  {% endblock %}
{% endembed %}
```

## Notes

- Add this component inside the Accordion container for normal grouped accordion behavior.
- Use `inherit` (default) when the container should control the button color.
- When the body slot is empty in preview, the component shows fallback content for easier editing.
