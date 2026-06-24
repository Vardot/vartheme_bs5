# Card Logo

A simple Bootstrap logo card with an optional full-card link.

## Bootstrap reference

> [Bootstrap 5.3 — Card](https://getbootstrap.com/docs/5.3/components/card/)

## What it does

Use this component when you need a lightweight logo card that can:

- display a logo image inside a transparent, borderless card
- align the logo to the left, center, or right of the card body
- apply an optional Bootstrap shadow
- optionally turn the whole card into a clickable stretched link

## Files

- `card-logo.component.yml` — component schema and props
- `card-logo.twig` — component template
- `README.md` — usage notes and examples
- `card-logo.mdx` — Storybook docs page
- `card-logo.stories.json` — Storybook story configuration
- `card-logo.stories.twig` — Storybook story templates
- `assets/` — placeholder logo used by examples

## Props overview

### Content

- `media`: Canvas logo image object (`src`, `alt`, `width`, `height`)

### Layout and appearance

- `alignment`: horizontal alignment of the logo — `left`, `center`, `right`; defaults to `left`
- `shadow`: `shadow-none`, `shadow-sm`, `shadow`, `shadow-lg`; defaults to `shadow-none`

### Link

- `url`: optional link URL; when provided, the whole card becomes clickable

## Example: basic logo card

```twig
{{ include('vartheme_bs5:card-logo', {
  media: {
    src: '/components/foundation/images/assets/full-logo-dark.svg',
    alt: 'Partner logo',
    width: '600',
    height: '240'
  },
  alignment: 'center',
  shadow: 'shadow'
}, with_context: false) }}
```

## Example: linked logo card

```twig
{{ include('vartheme_bs5:card-logo', {
  media: {
    src: '/components/foundation/images/assets/full-logo-dark.svg',
    alt: 'Partner logo',
    width: '600',
    height: '240'
  },
  url: 'https://example.com',
  alignment: 'left',
  shadow: 'shadow-sm'
}, with_context: false) }}
```

## Notes

- The card always uses auto height and renders as `border-0 bg-transparent`.
- The logo uses `object-fit-contain` so it keeps its proportions.
- The `media.src` value may arrive as a plain string or an object; the component normalizes it (`url`/`uri`/`value`).
- When `url` is provided, the whole card becomes clickable via Bootstrap's `stretched-link`, with the logo `alt` used as the accessible label.
- This component is marked `noUI: true` and is intended to be composed by other components (e.g. logo grids) rather than placed directly in Canvas.
