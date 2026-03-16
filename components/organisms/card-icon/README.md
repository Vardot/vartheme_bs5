# Card Icon

A Bootstrap card component with an optional icon, heading, description, and link or button action.

## Features

- Heading always renders as `H3`
- Optional Bootstrap icon
- Text alignment applies to the icon, heading, and description
- Background theme and shadow options
- Natural card height
- Optional full-card link or action button
- Padding checkbox that adds `p-4` when enabled
- Bootstrap utility classes only

## Available props

### Content
- `text`: Card heading text
- `description`: Supporting content. HTML is allowed.

### Icon
- `icon`: Bootstrap icon name without the `bi-` prefix, or `none`

### Layout and style
- `text_align`: `text-start`, `text-center`, `text-end`
- `background_color`: Bootstrap background utility class values
- `shadow`: `shadow-none`, `shadow-sm`, `shadow`, `shadow-lg`
- `has_padding`: `true` or `false`

### Link and button
- `url`: Optional link URL
- `button_label`: If set with a URL, shows a button instead of a full-card link
- `button_variant`: Bootstrap button class values such as `btn-primary`

## Behavior notes

- The card heading is always an `h3`.
- Text alignment controls the icon row, heading, and description together.
- The card uses natural height only.
- If `button_label` is empty and `url` is set, the whole card becomes clickable.
- If `button_label` is set and `url` is set, a button is rendered instead.
- `has_padding` adds only `p-4` when enabled.

## Example: simple card

```twig
{{ include('vartheme_bs5:card-icon', {
  text: 'Support services',
  description: '<p>Find information about available services and guidance.</p>',
  icon: 'info',
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
