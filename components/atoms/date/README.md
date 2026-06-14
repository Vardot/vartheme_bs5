# Date

A semantic date display that renders an ISO 8601 date inside a `<time>` element with optional Bootstrap text color and font-size utilities.

## What it does

Use this component when you need a machine-readable, accessible date that can:

- render an ISO 8601 date (`YYYY-MM-DD`) inside a `<time datetime="...">` element
- show the date as human-readable visible text (`M j, Y`, e.g. `Jan 31, 2025`)
- default to today's date when no date is provided
- apply a Bootstrap text color utility
- optionally apply a Bootstrap font-size utility

## Files

- `date.component.yml` — component schema and props
- `date.twig` — component template
- `README.md` — usage notes and examples

## Props overview

### Content

- `date`: ISO 8601 date string (`YYYY-MM-DD`); defaults to today's date. Uses `format: date` so Drupal Canvas maps it to a datetime field.

### Appearance

- `text_color`: Bootstrap text-color utility — `text-primary`, `text-secondary`, `text-success`, `text-danger`, `text-warning`, `text-info`, `text-muted`, `text-white`, `text-dark`, `text-body`; defaults to `text-body`
- `size`: Bootstrap font-size utility — `fs-6`, `fs-5`, `fs-4`, `fs-3`, `fs-2`, `fs-1`; defaults to none (inherits from context)

## Font size values

| Value | Meaning |
|---|---|
| `fs-6` | Extra small |
| `fs-5` | Small |
| `fs-4` | Medium |
| `fs-3` | Large |
| `fs-2` | Extra large |
| `fs-1` | Display |

## Available attributes

- `attributes` — HTML attributes for the `<time>` element (the `datetime` attribute and the `vb-date` class are set by the template)

## Example

```twig
{% include 'vartheme_bs5:date' with {
  date: '2025-01-31',
  text_color: 'text-muted',
  size: 'fs-4'
} only %}
```

Minimal usage (defaults to today's date and `text-body`):

```twig
{% include 'vartheme_bs5:date' only %}
```

## Notes

- The `datetime` attribute carries the raw ISO value while the visible text is formatted as `M j, Y`.
- The base classes `vb-date` and `gap-2` are always applied; `text_color` and `size` are merged in only when set.
- When `date` is empty, the template falls back to the current date.
