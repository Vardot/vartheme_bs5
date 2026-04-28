# Accordion

The Accordion component renders a single Bootstrap accordion item with a clickable header and a collapsible content area.

## When to use

Use this component for one collapsible section inside an Accordion container. It is best for FAQs, grouped details, feature explanations, content toggles, and structured long-form content where readers should open one section at a time.

## Features

- Bootstrap 5 accordion item markup
- Configurable heading level from H2 to H6
- Optional default open state
- Optional stable item ID for links and testing
- Supports inherited or direct header color classes
- Works with any content dropped into the body slot
- Keeps logic centralized at the top of the Twig template

## Properties

### `title`
Text shown inside the accordion header button.

Example:

```text
Shipping information
```

### `heading_level`
Heading tag level used for the accordion header wrapper.

Editor options:

```text
H2
H3
H4
H5
H6
```

Default: `H3`

### `open_by_default`
Controls whether the accordion item starts open.

Options:

```text
true
false
```

Default: `true`

### `parent_id`
Optional accordion container ID used for Bootstrap `data-bs-parent` binding. In normal usage this is supplied by the Accordion container automatically.

Default: empty

### `item_id`
Optional stable suffix used to generate predictable heading and collapse IDs.

Example:

```text
faq-shipping
```

Default: empty (auto-generated)

### `always_open`
Allows the item to stay open independently, even when used inside a shared accordion group.

Default: `false`

### `color`
Header color class applied directly to the accordion button.

Editor options:

```text
Inherit from container
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
inherit
text-bg-primary
text-bg-secondary
text-bg-success
text-bg-danger
text-bg-warning
text-bg-info
text-bg-light
text-bg-dark
```

Default: `inherit`

## Slot

### `accordion_content`
Use this slot for any body content, including text, lists, images, buttons, links, media, or nested components.

## Usage example

### Basic item

```twig
{% embed 'vartheme_bs5:accordion-block' with {
  title: 'What is included?',
  heading_level: 3,
  open_by_default: false,
  color: 'text-bg-primary'
} %}
  {% block accordion_content %}
    <p class="mb-0">This section contains the accordion body content.</p>
  {% endblock %}
{% endembed %}
```

### Item with predictable ID

```twig
{% embed 'vartheme_bs5:accordion-block' with {
  title: 'Billing details',
  heading_level: 3,
  item_id: 'billing-details',
  open_by_default: true,
  color: 'text-bg-light'
} %}
  {% block accordion_content %}
    <ul class="mb-0">
      <li>Monthly invoicing</li>
      <li>Tax summary</li>
      <li>Payment methods</li>
    </ul>
  {% endblock %}
{% endembed %}
```

## Notes

- Add this component inside the Accordion container for normal grouped accordion behavior.
- Use `inherit` when the container should control the default button color.
- When the body slot is empty in preview, the component shows fallback content for easier editing.
