# Tabs

A Bootstrap tabbed interface that renders a tab list and matching tab panes from an items array.

## Bootstrap reference

> [Bootstrap 5.3 — Navs and tabs](https://getbootstrap.com/docs/5.3/components/navs-tabs/)

## What it does

Use this component when you need to:

- render a set of toggleable tabs with associated content panes
- switch between the `tabs` and `pills` Bootstrap navigation styles
- mark one tab active by default
- wire up Bootstrap's tab JavaScript via the bundled `bs-tab-script` library

## Files

- `tabs.component.yml` — component schema and props
- `tabs.twig` — component template
- `tabs.scss` / `tabs.css` — component styles
- `README.md` — usage notes and examples

## Props overview

### Appearance

- `shape`: Bootstrap navigation style — `tabs` or `pills`; defaults to `tabs` in the template

### Data

These are passed in as template variables (not schema props) and drive the rendered markup:

- `tabs_id`: id applied to the tab list `<ul>`
- `items`: array of tab items; nothing renders unless `items` is non-empty
- `item.title`: tab button label
- `item.body`: tab pane content
- `item.id`: unique id for the tab button (used by `aria-labelledby`)
- `item.target`: unique id of the related tab pane (used by `data-bs-target` / `aria-controls`)
- `item.is_active`: marks the item as the default active tab/pane

## Shape values

| Value | Output |
|---|---|
| `tabs` | `nav nav-tabs` styling |
| `pills` | `nav nav-pills` styling |

## Available attributes

- `attributes`: attributes for the nav (tab list `<ul>`) element
- `tab_button_attributes`: attributes for each tab `<button>`
- `nav_attributes`: attributes for the `tab-content` wrapper
- `tab_content_attributes`: attributes for each tab pane

## Example

```twig
{% include 'vartheme_bs5:tabs' with {
  shape: 'pills',
  tabs_id: 'features-tabs',
  items: [
    {
      title: 'Overview',
      body: '<p>Overview content.</p>',
      id: 'tab-overview',
      target: 'pane-overview',
      is_active: true
    },
    {
      title: 'Details',
      body: '<p>Details content.</p>',
      id: 'tab-details',
      target: 'pane-details',
      is_active: false
    }
  ]
} only %}
```

## Notes

- The whole component is wrapped in `{% if items %}`; with no items it renders nothing.
- Active state is driven by `item.is_active`: the active button gains `active`, and its pane gains `show active`.
- Non-active panes start as `tab-pane fade`.
- The component depends on the `vartheme_bs5/bs-tab-script` library (declared via `libraryOverrides`) for tab toggling behavior.
