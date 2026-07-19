# Views exposed filters

A wrapper for the exposed filter form of a view, so a listing can lay its filters out without reaching for the form ID Views happens to generate.

## Bootstrap reference

> [Bootstrap 5.3 — Forms layout](https://getbootstrap.com/docs/5.3/forms/layout/)

## What it does

Use this component when you need the exposed filters of a view listing to:

- sit in one wrapping row whose controls bottom-align with each other
- let the keyword filter absorb the free space while select filters keep a steady column
- switch to a stacked, one-control-per-row layout
- collapse every control to the full row width below the `md` breakpoint
- take extra Bootstrap utility classes on the filter row
- expose the exposed form itself through a single slot

## Files

- `views-exposed-filters.component.yml` — component schema and props
- `views-exposed-filters.twig` — component template
- `views-exposed-filters.scss` / `views-exposed-filters.css` — component styles
- `README.md` — usage notes and examples

## Props overview

### Layout

- `layout`: how the filters sit next to each other — `inline` or `stacked`; defaults to `inline`
- `utility_classes`: array of extra Bootstrap utility classes for the filter row; defaults to `[]`

## Slots

- `filters` — the exposed filter form of the view

## Example

```twig
{% embed 'vartheme_bs5:views-exposed-filters' with {
  layout: 'inline',
  utility_classes: ['mb-4'],
} only %}
  {% block filters %}
    {{ exposed }}
  {% endblock %}
{% endembed %}
```

## Notes

- The component is `noUi: true` and `use_in_views: true` — it is not offered in the Canvas component list; it is meant to wrap the exposed form from a views template.
- `layout` adds the `views-exposed-filters--inline` / `views-exposed-filters--stacked` modifier class; the styles hang off `.views-exposed-form`, the wrapper Views renders inside the slot.
- The keyword filter is matched on `[class*="form-item-search"]`, so any exposed filter whose form item class contains `form-item-search` grows to fill the row.
- Spacing and control widths are exposed as `--views-exposed-filters-*` custom properties derived from Bootstrap's `$spacer`, so a sub-theme can retune the row without forking the component.
- The gap (`1rem`) and the select-column width (`16.4375rem`) match the exposed-filter custom properties the theme already defines for its blog exposed-form block in `scss/base/vartheme.base.scss` — `--vb-filter-gap` and `--vb-filter-col-width`. Those are scoped to the `#views-exposed-form-blog-all` block rather than to `:root`, so the component restates the values instead of referencing them and stays standalone.
- `views-exposed-filters.css` is build output — edit `views-exposed-filters.scss` and run `yarn components:build`.
