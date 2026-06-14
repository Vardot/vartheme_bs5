# Icon

A Bootstrap Icon renderer with size and color utilities, delegating to the `vartheme_bs5:bootstrap-icon` component.

Varbase implementation for Bootstrap icons.

## Bootstrap reference

> [Bootstrap Icons](https://icons.getbootstrap.com)
> * [Bootstrap Icons library](https://icons.getbootstrap.com)
> * [Accessibility](https://icons.getbootstrap.com/#accessibility)

## What it does

Use this component when you need to:

- render a Bootstrap Icon by name from a predefined list (no `bi-` prefix)
- control the icon size with a Bootstrap font-size utility
- control the icon color with a Bootstrap text color utility

## Files

- `icon.component.yml` — component schema and props
- `icon.twig` — component template
- `README.md` — usage notes and examples
- `icon.mdx` — Storybook docs page
- `icon.stories.json` — Storybook story configuration
- `icon.stories.twig` — Storybook story templates

## Props overview

### Icon

- `icon`: Bootstrap Icon name without the `bi-` prefix, chosen from the predefined enum; defaults to `people`
- `icon_size`: Bootstrap font-size utility — `fs-1`, `fs-2`, `fs-3`, `fs-4`, `fs-5`, `fs-6`; defaults to `fs-4`
- `color`: Bootstrap text color utility; defaults to `text-body`

## Icon size values

| Value | Output |
|---|---|
| `fs-1` | Extra large |
| `fs-2` | Large |
| `fs-3` | Medium large |
| `fs-4` | Medium (default) |
| `fs-5` | Small |
| `fs-6` | Extra small |

## Color values

`text-body`, `text-primary`, `text-secondary`, `text-success`, `text-danger`, `text-warning`, `text-info`, `text-light`, `text-dark`, `text-white`, `text-muted`, `text-body-secondary`, `text-body-tertiary`, `text-primary-emphasis`, `text-secondary-emphasis`, `text-success-emphasis`, `text-danger-emphasis`, `text-warning-emphasis`, `text-info-emphasis`

## Available icons

`facebook`, `twitter-x`, `instagram`, `linkedin`, `x`, `plus`, `exclamation`, `check`, `dash`, `question`, `info`, `search`, `person`, `people`, `person-plus`, `person-check`, `chevron-up`, `chevron-down`, `chevron-left`, `chevron-right`, `chevron-double-up`, `chevron-double-down`, `chevron-double-left`, `chevron-double-right`, `arrow-up`, `arrow-down`, `arrow-left`, `arrow-right`, `arrow-up-right`, `arrow-up-left`, `arrow-down-right`, `arrow-down-left`, `arrow-repeat`, `arrows-angle-expand`, `arrows-angle-contract`, `play`, `pause`, `skip-backward`, `skip-forward`, `circle`, `circle-fill`, `record-circle`, `house-door-fill`, `house-door`, `box-arrow-in-right`, `person-fill`, `person-circle`, `shield-check`, `chat-dots`, `laptop`, `gear`

## Example: default people icon

```twig
{% include 'vartheme_bs5:icon' with {
  icon: 'people',
  icon_size: 'fs-4',
  color: 'text-body'
} only %}
```

## Example: large primary search icon

```twig
{% include 'vartheme_bs5:icon' with {
  icon: 'search',
  icon_size: 'fs-1',
  color: 'text-primary'
} only %}
```

## Notes

- The icon is rendered through `vartheme_bs5:bootstrap-icon`, with `icon`, `icon_size`, and `color` passed through.
- Nothing is rendered when `icon` is empty.
- `icon_size` and `color` apply their schema defaults (`fs-4`, `text-body`) when not provided.
