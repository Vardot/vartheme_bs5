# Container

A division wrapper that optionally adds the Bootstrap `container` class plus any extra utility classes.

## Bootstrap reference

> [Bootstrap 5.3 — Containers](https://getbootstrap.com/docs/5.3/layout/containers/)

## What it does

Use this component when you need a generic wrapping element that can:

- optionally apply the Bootstrap `container` class
- add an arbitrary list of extra Bootstrap utility or custom classes
- wrap content passed through a slot or the `children` variable

## Files

- `container.component.yml` — component schema and props
- `container.twig` — component template
- `README.md` — usage notes and examples

## Props overview

### Layout

- `withContainer`: `true` or `false` — adds the Bootstrap `container` class; defaults to `false`
- `container_utility_classes`: array of extra Bootstrap utility or custom classes; defaults to `[]`

### Content

- `children`: string content for the container

## Slots

- `children` — content placed inside the container

## Available attributes

- `attributes` — HTML attributes for the containing `<div>` element

## Example

```twig
{% embed 'vartheme_bs5:container' with {
  withContainer: true,
  container_utility_classes: ['py-5', 'text-center']
} only %}
  {% block children %}
    <h2 class="h3 mb-0">Contained content</h2>
  {% endblock %}
{% endembed %}
```

You can also pass content through the `children` variable instead of the block:

```twig
{% include 'vartheme_bs5:container' with {
  withContainer: true,
  children: '<p class="mb-0">Plain children content.</p>'
} only %}
```

## Notes

- `withContainer` is a real boolean validated by SDC; only a presence fallback is applied in the template.
- `container_utility_classes` and the optional `container` class are merged as arrays to avoid duplicate classes.
- When the `children` block is not overridden, the `children` variable is printed instead.
