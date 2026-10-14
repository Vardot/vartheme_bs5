# Divider vertical

A Bootstrap 5.3-compatible vertical divider that automatically stretches to the
full height of its parent section or container, with no `height` prop to set.

## Bootstrap reference

> [Bootstrap 5.3 — Borders](https://getbootstrap.com/docs/5.3/utilities/borders/)
> [Bootstrap 5.3 — Flex / Align self](https://getbootstrap.com/docs/5.3/utilities/flex/#align-self)

## What it does

Use this component when you need a clean vertical separator between two pieces
of content sitting side by side (columns, toolbar items, meta info) that can:

- render an accessible `<div role="separator" aria-orientation="vertical">`
- control border width, border color, and opacity with Bootstrap utilities
- control start/end (horizontal) spacing with Bootstrap margin utilities
- **size itself automatically** — no height prop required: placed as a
  *direct* child of a flex or grid container (e.g. `atoms/row`, or any
  `d-flex` wrapper), `align-self: stretch` matches the tallest sibling,
  regardless of the parent's own `align-items` setting. Outside any flex/grid
  context, a `min-height` keeps the line visible as a fallback.

## Files

- `divider-vertical.component.yml` — component schema and props
- `divider-vertical.twig` — component template
- `divider-vertical.scss` — component styles (auto-height behavior)
- `README.md` — usage notes and examples
- `divider-vertical.mdx` — Storybook docs page
- `divider-vertical.stories.json` — Storybook story configuration
- `divider-vertical.stories.twig` — Storybook story templates

## Props overview

### Appearance

- `border_width`: Bootstrap border width utility — `border-1`, `border-2`, `border-3`, `border-4`, `border-5`; defaults to `border-1`
- `border_color`: Bootstrap border color utility — `border-secondary`, `border-light`, `border-dark`, `border-primary`, `border-success`, `border-danger`, `border-warning`, `border-info`, `border-white`, `border-black`; defaults to `border-secondary`
- `opacity`: Bootstrap opacity utility — `opacity-25`, `opacity-50`, `opacity-75`, `opacity-100`; defaults to `opacity-100`

### Spacing

- `margin_start`: Bootstrap margin-start utility — `ms-0` through `ms-5`; defaults to `ms-3`
- `margin_end`: Bootstrap margin-end utility — `me-0` through `me-5`; defaults to `me-3`

## Available attributes

- `attributes` — HTML attributes for the root element

## Example

Between two Bootstrap columns in a row — place the divider as a **direct**
child of the row, *not* wrapped in a `.col`/`.col-auto`. It has zero width of
its own, so it doesn't need a grid column, and wrapping it in one would make
it a block child of that column instead of a flex item of the row, breaking
the automatic stretch. Placed directly, `align-self: stretch` matches the
tallest column automatically, regardless of the row's `align_items` setting:

```twig
{% embed 'vartheme_bs5:row' %}
  {% block content %}
    <div class="col">First column</div>
    {% include 'vartheme_bs5:divider-vertical' with {
      border_width: 'border-1',
      border_color: 'border-secondary',
      opacity: 'opacity-100',
      margin_start: 'ms-3',
      margin_end: 'me-3'
    } only %}
    <div class="col">Second column</div>
  {% endblock %}
{% endembed %}
```

Between two inline items in a flex toolbar:

```twig
<div class="d-flex align-items-center">
  <span>Item one</span>
  {% include 'vartheme_bs5:divider-vertical' with {
    border_width: 'border-1',
    border_color: 'border-secondary',
    opacity: 'opacity-100',
    margin_start: 'ms-2',
    margin_end: 'me-2'
  } only %}
  <span>Item two</span>
</div>
```

## Notes

- The divider has zero intrinsic width — set by the `border-start` border, not
  a background fill — matching standard Bootstrap border behavior.
- Place it as a **direct** child of a flex/grid container (a `.row`, or any
  `d-flex`/`d-grid` wrapper) to get automatic full-height stretching; no height
  configuration is needed. Do **not** wrap it in a `.col`/`.col-auto` — that
  extra non-flex wrapper blocks the stretch, since the divider would then be a
  block child of the column instead of a flex item of the row.
- Outside any flex/grid context (e.g. dropped into plain prose) it falls back
  to a small fixed `min-height` so the line stays visible instead of
  collapsing to nothing.
- No inline styles are used; styling is driven entirely by Bootstrap utility
  classes plus the component's own auto-height SCSS.
- All props have schema defaults, so the component renders correctly with no
  values supplied.
