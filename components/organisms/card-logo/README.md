# Card Logo

A simple Bootstrap logo card with an optional full-card link.

## Features

- Displays a logo image inside a card
- Optional full-card link using `url`
- Natural auto height
- Bootstrap shadow options
- Uses Bootstrap utility classes only

## Available props

### Content
- `media`: Logo image object

### Link
- `url`: Optional link URL for making the whole card clickable

### Style
- `shadow`: Shadow utility class value
  - `shadow-none`
  - `shadow-sm`
  - `shadow`
  - `shadow-lg`

## Behavior notes

- The card always uses auto height.
- The logo is centered inside the card body.
- The image uses `object-fit-contain` so logos keep their proportions.
- If `url` is provided, the whole card becomes clickable with a stretched link.
- If no `url` is provided, the card is rendered as static content.

## Example: basic logo card

```twig
{{ include('vartheme_bs5:card-logo', {
  media: {
    src: 'assets/logo-placeholder.svg',
    alt: 'Partner logo',
    width: '600',
    height: '240'
  },
  shadow: 'shadow'
}, with_context: false) }}
```

## Example: linked logo card

```twig
{{ include('vartheme_bs5:card-logo', {
  media: {
    src: 'assets/logo-placeholder.svg',
    alt: 'Partner logo',
    width: '600',
    height: '240'
  },
  url: 'https://example.com',
  shadow: 'shadow-sm'
}, with_context: false) }}
```
