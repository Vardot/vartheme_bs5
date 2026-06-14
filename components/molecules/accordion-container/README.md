# Accordion container

A container for any content, only one of whose accordions may be open at a time — the parent Bootstrap 5 accordion wrapper that manages shared behavior for nested accordion items. Build vertically collapsing accordions in combination with Bootstrap's Collapse JavaScript plugin.

## Bootstrap reference

> ### [Bootstrap documentation on Accordion](https://getbootstrap.com/docs/5.3/components/accordion/)
> * [Example](https://getbootstrap.com/docs/5.3/components/accordion/#example)
> * [Flush](https://getbootstrap.com/docs/5.3/components/accordion/#flush)
> * [Always open](https://getbootstrap.com/docs/5.3/components/accordion/#always-open)
> * [Accessibility](https://getbootstrap.com/docs/5.3/components/accordion/#accessibility)

## What it does

Use this component when you need a reusable accordion wrapper that can:

- group one or more accordion items under a single accordion system
- apply the Bootstrap `accordion-flush` style to remove outer borders and rounding
- allow multiple items to stay open at the same time, or restrict to one open item
- generate a stable container ID, or accept a custom one, for `data-bs-parent` binding
- pass a Bootstrap `text-bg-*` color override down to nested accordion items
- render a default two-item demo when the slot is empty (for preview)

## Files

- `accordion-container.component.yml` — component schema and props
- `accordion-container.twig` — component template
- `README.md` — usage notes and examples
- `accordion-container.js` — behavior script
- `accordion-container.mdx` — Storybook docs page
- `accordion-container.stories.json` — Storybook story configuration
- `accordion-container.stories.twig` — Storybook story templates

## Props overview

### Layout

- `id`: accordion container ID used for `data-bs-parent` binding; leave empty to auto-generate
- `flush`: remove the default outer borders and rounding — `true` / `false`; defaults to `false`

### Behavior

- `always_open`: allow multiple accordion items to stay open at the same time — `true` / `false`; defaults to `false`

### Appearance

- `color`: optional Bootstrap `text-bg-*` class passed to nested items — `text-bg-primary`, `text-bg-secondary`, `text-bg-success`, `text-bg-danger`, `text-bg-warning`, `text-bg-info`, `text-bg-dark`; omit to use the default design (secondary-subtle bg, dark text)

## Slots

- `accordion_content` — place one or more accordion items inside this slot

## Header color values

| Value | Header style |
|---|---|
| (omitted) | Default (secondary-subtle bg, dark text) |
| `text-bg-primary` | Primary |
| `text-bg-secondary` | Secondary |
| `text-bg-success` | Success |
| `text-bg-danger` | Danger |
| `text-bg-warning` | Warning |
| `text-bg-info` | Info |
| `text-bg-dark` | Dark |

## Example: basic grouped accordion

```twig
{% embed 'vartheme_bs5:accordion-container' with {
  id: 'faq-accordion',
  flush: false,
  always_open: false
} only %}
  {% block accordion_content %}
    {% embed 'vartheme_bs5:accordion-block' with {
      title: 'First item',
      heading_level: 3,
      open_by_default: true,
      color: 'inherit'
    } only %}
      {% block accordion_content %}
        <p class="mb-0">First accordion content.</p>
      {% endblock %}
    {% endembed %}

    {% embed 'vartheme_bs5:accordion-block' with {
      title: 'Second item',
      heading_level: 3,
      open_by_default: false,
      color: 'inherit'
    } only %}
      {% block accordion_content %}
        <p class="mb-0">Second accordion content.</p>
      {% endblock %}
    {% endembed %}
  {% endblock %}
{% endembed %}
```

## Example: always-open, flush, colored

```twig
{% embed 'vartheme_bs5:accordion-container' with {
  id: 'support-topics',
  flush: true,
  always_open: true,
  color: 'text-bg-primary'
} only %}
  {% block accordion_content %}
    {% embed 'vartheme_bs5:accordion-block' with {
      title: 'Topic 1',
      open_by_default: true,
      color: 'inherit'
    } only %}
      {% block accordion_content %}
        <p class="mb-0">This item can stay open alongside other items.</p>
      {% endblock %}
    {% endembed %}
  {% endblock %}
{% endembed %}
```

## Notes

- The container passes `accordion_parent_id`, `accordion_always_open`, and `accordion_color` to nested accordion items through the Twig context, so child items inherit binding, multi-open behavior, and color automatically when they use `inherit`.
- If no `id` is provided, an `accordion-*` ID is generated automatically.
- When `always_open` is enabled, items are not given a `data-bs-parent`, so opening one does not close the others.
- When the `accordion_content` slot is empty, a built-in two-item demo accordion is rendered for preview purposes.
- Boolean props (`flush`, `always_open`) are validated by SDC and arrive as real booleans.
