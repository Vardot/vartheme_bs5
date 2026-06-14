# Dropdown menu

A recursive Bootstrap dropdown menu rendered from a Drupal menu items array.

## Bootstrap reference

> [Bootstrap 5.3 — Dropdowns](https://getbootstrap.com/docs/5.3/components/dropdowns/)

## What it does

Use this component when you need to render a Bootstrap dropdown menu that can:

- output a `<ul class="dropdown-menu">` list from a menu items array
- mark the active trail item with the `active` class
- render nested submenus recursively for expanded items that have children
- add a `dropdown-toggle` and `data-bs-toggle="dropdown"` on parent items with children

## Files

- `dropdown-menu.component.yml` — component schema and props
- `dropdown-menu.twig` — component template
- `README.md` — usage notes and examples

## Props overview

### Content

- `items`: the menu items to render
- `menu_level`: the current nesting level of the menu (used to add a `level-*` class to the wrapper)
- `content`: string content prop declared in the schema

## Available attributes

- `attributes` — attributes array for the component
- `menu_attributes` — attributes for the dropdown menu `<ul>` element (the `dropdown-menu` and `level-*` classes are added by the template)

## Example

```twig
{% include 'vartheme_bs5:dropdown-menu' with {
  items: menu.items,
  menu_level: 0
} only %}
```

Recursive submenus are produced automatically for items that are expanded and have a `below` array; the template re-includes `vartheme_bs5:dropdown-menu` for each nested level.

## Notes

- Active items receive the `active` class when `item.in_active_trail` is set.
- Any `item.url.options.attributes.class` values (string or iterable) are merged into the link classes.
- Expanded parent items render as a `dropdown-toggle` anchor with `data-bs-toggle="dropdown"`.
- The component depends on the `vartheme_bs5/bs-collapse-script` and `vartheme_bs5/bs-dropdown-script` libraries (declared via `libraryOverrides`).
