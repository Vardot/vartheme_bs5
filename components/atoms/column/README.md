# Column

A simple Bootstrap column wrapper (`.col`) for use inside the Row component.

## Bootstrap reference

> [Bootstrap 5.3 — Grid columns](https://getbootstrap.com/docs/5.3/layout/columns/)

## What it does

Use this component when you need a minimal column element that:

- renders a single `<div class="col">` wrapper
- holds arbitrary content via a slot
- nests cleanly inside a Bootstrap row

## Files

- `column.component.yml` — component schema and props
- `column.twig` — component template
- `README.md` — usage notes and examples
- `column.mdx` — Storybook docs page
- `column.stories.json` — Storybook story configuration
- `column.stories.twig` — Storybook story templates

## Props overview

This component has no configurable props. It only exposes a content slot and accepts HTML attributes.

## Slots

- `content` — content placed inside the column

## Available attributes

- `attributes` — HTML attributes for the `<div class="col">` element

## Example

```twig
{% embed 'vartheme_bs5:column' only %}
  {% block content %}
    <p class="mb-0">Column content goes here.</p>
  {% endblock %}
{% endembed %}
```

## Notes

- The `col` class is always applied; pass extra Bootstrap column classes (for example `col-md-6`) through `attributes` when you need explicit sizing.
- Intended to be used inside a Bootstrap **Row** component, which controls the layout.
