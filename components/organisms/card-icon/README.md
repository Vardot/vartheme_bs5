# Card Icon

A Bootstrap card with an optional Bootstrap Icon, heading, description, and either a full-card link or an action button.

## Bootstrap reference

> [Bootstrap 5.3 — Card](https://getbootstrap.com/docs/5.3/components/card/)

## What it does

Use this component when you need a simple icon-led card that can:

- show an optional Bootstrap Icon above a heading and a rich-text description
- align the icon, heading, and description together (start, center, or end)
- apply a background theme, shadow, and optional padding
- either turn the whole card into a link or render an action button

## Files

- `card-icon.component.yml` — component schema and props
- `card-icon.twig` — component template
- `README.md` — usage notes and examples
- `card-icon.mdx` — Storybook docs page
- `card-icon.stories.json` — Storybook story configuration
- `card-icon.stories.twig` — Storybook story templates

## Props overview

### Content

- `text`: heading text; defaults to `Your heading here` (always rendered as an `h3`)
- `description`: supporting text, HTML allowed

### Icon

- `icon`: Bootstrap Icon name without the `bi-` prefix, or `none` to disable; defaults to `people`
- `icon_size`: Bootstrap font-size utility — `fs-6`, `fs-5`, `fs-4`, `fs-3`, `fs-2`, `fs-1`; defaults to `fs-4`

### Layout and appearance

- `text_align`: `text-start`, `text-center`, `text-end`; defaults to `text-center`
- `background_color`: background theme — `bg-body`, `bg-primary text-white`, `bg-secondary text-white`, `bg-success text-white`, `bg-danger text-white`, `bg-warning`, `bg-info`, `bg-light`, `bg-dark text-white`; defaults to `bg-body`
- `shadow`: `shadow-none`, `shadow-sm`, `shadow`, `shadow-lg`; defaults to `shadow`
- `has_padding`: adds `p-4` to the card body; defaults to `true`

### Link and button

- `url`: optional link URL
- `button_label`: when set together with `url`, renders a button instead of a full-card link; defaults to empty
- `button_variant`: button style — `btn-primary`, `btn-secondary`, `btn-success`, `btn-danger`, `btn-warning`, `btn-info`, `btn-light`, `btn-dark`, `btn-link`; defaults to `btn-primary`

## Link vs button behavior

| `url` | `button_label` | Result |
|---|---|---|
| empty | any | Static card, no link |
| set | empty | Whole card becomes clickable (stretched link) |
| set | set | Action button rendered (`btn-sm`), card itself is not clickable |

## Example: simple card

```twig
{{ include('vartheme_bs5:card-icon', {
  text: 'Support services',
  description: '<p>Find information about available services and guidance.</p>',
  icon: 'info',
  icon_size: 'fs-3',
  text_align: 'text-start',
  background_color: 'bg-light',
  shadow: 'shadow',
  has_padding: true
}, with_context: false) }}
```

## Example: linked card with button

```twig
{{ include('vartheme_bs5:card-icon', {
  text: 'Create account',
  description: '<p>Start your registration process.</p>',
  icon: 'person-plus',
  text_align: 'text-center',
  background_color: 'bg-body',
  url: 'https://example.com/register',
  button_label: 'Get started',
  button_variant: 'btn-primary',
  has_padding: true
}, with_context: false) }}
```

## Example: full-card link

```twig
{{ include('vartheme_bs5:card-icon', {
  text: 'Community updates',
  description: '<p>Read the latest announcements and notices.</p>',
  icon: 'people',
  text_align: 'text-end',
  background_color: 'bg-primary text-white',
  shadow: 'shadow-lg',
  url: 'https://example.com/updates'
}, with_context: false) }}
```

## Notes

- The card heading is always an `h3`.
- `text_align` controls the icon row alignment, heading, and description together.
- The card uses natural height only.
- Some `background_color` values carry a paired text utility (e.g. `bg-primary text-white`); the component splits and applies both.
- The icon is rendered via the `vartheme_bs5:bootstrap-icon` component; use `none` to hide it.
- `has_padding` toggles only `p-4` on the card body.
- `has_padding` is validated and defaulted by SDC, so it arrives as a real boolean.
