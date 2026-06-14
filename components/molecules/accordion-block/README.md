# Accordion

A single Bootstrap 5 accordion item with a clickable header and a collapsible content area, designed to live inside an Accordion container.

## Bootstrap reference

> ### [Bootstrap documentation on Accordion](https://getbootstrap.com/docs/5.3/components/accordion/)
> * [Example](https://getbootstrap.com/docs/5.3/components/accordion/#example)
> * [Flush](https://getbootstrap.com/docs/5.3/components/accordion/#flush)
> * [Always open](https://getbootstrap.com/docs/5.3/components/accordion/#always-open)
> * [Accessibility](https://getbootstrap.com/docs/5.3/components/accordion/#accessibility)

## What it does

Use this component when you need a reusable accordion item that can:

- show a clickable header button with a configurable heading level (`H2`–`H6`)
- open or stay collapsed on first load
- bind to a parent accordion container so only one item is open at a time
- stay independent of the parent so it can remain open alongside its siblings
- override its header color with a Bootstrap `text-bg-*` utility, or inherit the container color
- render hidden body content from a slot, with a placeholder when the slot is empty

## Files

- `accordion-block.component.yml` — component schema and props
- `accordion-block.twig` — component template
- `README.md` — usage notes and examples
- `accordion-block.scss` / `accordion-block.css` — component styles
- `accordion-block.mdx` — Storybook docs page
- `accordion-block.stories.json` — Storybook story configuration
- `accordion-block.stories.twig` — Storybook story templates

## Props overview

### Content

- `title`: text shown in the header button; defaults to `Accordion item`
- `heading_level`: heading tag for the header — `2`, `3`, `4`, `5`, `6`; defaults to `3`

### Behavior

- `open_by_default`: open this item when the page first loads — `true` / `false`; defaults to `true`
- `always_open`: keep this item independent of the parent so it can stay open alongside others — `true` / `false`; defaults to `false`

### Binding

- `parent_id`: optional accordion container ID for Bootstrap `data-bs-parent` binding; usually provided automatically by the Accordion container
- `item_id`: optional stable ID suffix for this item, useful for links, testing, or automation

### Appearance

- `color`: optional Bootstrap `text-bg-*` class applied to the button — `inherit`, `text-bg-primary`, `text-bg-secondary`, `text-bg-success`, `text-bg-danger`, `text-bg-warning`, `text-bg-info`, `text-bg-dark`; defaults to `inherit`

## Slots

- `accordion_content` — content hidden when the accordion is collapsed

## Header color values

| Value | Header style |
|---|---|
| `inherit` | Inherit from container |
| `text-bg-primary` | Primary |
| `text-bg-secondary` | Secondary |
| `text-bg-success` | Success |
| `text-bg-danger` | Danger |
| `text-bg-warning` | Warning |
| `text-bg-info` | Info |
| `text-bg-dark` | Dark |

## Example: single item bound to a container

```twig
{% embed 'vartheme_bs5:accordion-block' with {
  title: 'What is your refund policy?',
  heading_level: 3,
  open_by_default: true,
  parent_id: 'faq-accordion',
  item_id: 'refunds',
  color: 'inherit'
} only %}
  {% block accordion_content %}
    <p class="mb-0">You can request a refund within 30 days of purchase.</p>
  {% endblock %}
{% endembed %}
```

## Example: independent item with a color override

```twig
{% embed 'vartheme_bs5:accordion-block' with {
  title: 'Standalone note',
  heading_level: 4,
  open_by_default: false,
  always_open: true,
  color: 'text-bg-primary'
} only %}
  {% block accordion_content %}
    <p class="mb-0">This item is not controlled by the parent accordion.</p>
  {% endblock %}
{% endembed %}
```

## Notes

- The component reads `accordion_parent_id`, `accordion_always_open`, and `accordion_color` from the Twig context supplied by the Accordion container, so nesting items inside a container wires up parent binding, multi-open behavior, and color automatically.
- `parent_id`, `item_id`, and `color` set directly on the item override the container-provided values.
- When `item_id` is empty, a unique ID is generated so the `heading-*` / `collapse-*` IDs stay unique on the page.
- `data-bs-parent` is only added when a parent ID is resolved and the item is not in always-open mode.
- In the Canvas / SDC component preview, items are forced open so their body content is visible while editing.
- When `accordion_content` is empty, a placeholder body is rendered via the `vartheme_bs5:text` component.
- Boolean props (`open_by_default`, `always_open`) are validated by SDC and arrive as real booleans.
