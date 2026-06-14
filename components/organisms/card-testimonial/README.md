# Testimonial card

A Bootstrap card for a customer quote, with an optional decorative quote icon, avatar, author name, and role.

## Bootstrap reference

> [Bootstrap 5.3 — Card](https://getbootstrap.com/docs/5.3/components/card/)

## What it does

Use this component when you need a testimonial/quote card that can:

- display a quote with an optional decorative quote icon in the corner
- show an optional avatar image, author name, and author role
- switch between a light and an inverted dark style
- align the quote and author block (start, center, or end)
- apply a Bootstrap shadow

## Files

- `card-testimonial.component.yml` — component schema and props
- `card-testimonial.twig` — component template
- `README.md` — usage notes and examples
- `card-testimonial.mdx` — Storybook docs page
- `card-testimonial.stories.json` — Storybook story configuration
- `card-testimonial.stories.twig` — Storybook story templates
- `assets/` — placeholder avatar used by examples

## Props overview

### Content

- `text`: testimonial quote text
- `cite_name`: optional author name
- `cite_text`: optional author title / role
- `media`: optional Canvas avatar image object (`src`, `alt`, `width`, `height`)

### Appearance

- `style`: card background style — `bg-body` (light) or `bg-dark text-white` (inverted); defaults to `bg-body` (required prop)
- `shadow`: `shadow-none`, `shadow-sm`, `shadow`, `shadow-lg`; defaults to `shadow`
- `align`: content alignment — `text-start`, `text-center`, `text-end`; defaults to `text-center` (required prop)
- `show_quote_icon`: shows a decorative quote icon in the top-left corner; defaults to `true`

## Example: basic testimonial

```twig
{{ include('vartheme_bs5:card-testimonial', {
  style: 'bg-body',
  shadow: 'shadow',
  align: 'text-center',
  show_quote_icon: true,
  text: 'My career guidance was crucial in helping me understand the tech industry landscape and ultimately secure my role.',
  cite_name: 'Isiah Julio',
  cite_text: 'Engineer, Technical Services',
  media: {
    src: 'assets/avatar-placeholder.svg',
    alt: 'Avatar placeholder',
    width: 120,
    height: 120
  }
}, with_context: false) }}
```

## Example: left-aligned, no quote icon

```twig
{{ include('vartheme_bs5:card-testimonial', {
  style: 'bg-body',
  shadow: 'shadow-sm',
  align: 'text-start',
  show_quote_icon: false,
  text: 'The mentorship and support gave me the confidence to move forward in my career.',
  cite_name: 'Ariana Khan',
  cite_text: 'Product Designer'
}, with_context: false) }}
```

## Example: dark style

```twig
{{ include('vartheme_bs5:card-testimonial', {
  style: 'bg-dark text-white',
  shadow: 'shadow-lg',
  align: 'text-center',
  show_quote_icon: true,
  text: 'Working with the team was smooth, supportive, and highly professional from start to finish.',
  cite_name: 'Michael Rivera',
  cite_text: 'Founder, Studio North'
}, with_context: false) }}
```

## Notes

- The card always uses `h-100`, so testimonials in a row share equal height.
- `style` and `align` are required props.
- The footer (avatar + author block) is only rendered when at least one of `cite_name`, `cite_text`, or `media` is present.
- The avatar is rendered via the `vartheme_bs5:image` component; it falls back to a 60×60 box and uses `cite_name` as the alt text when no `alt` is provided.
- `shadow-none` intentionally adds no shadow class.
- `show_quote_icon` is validated and defaulted by SDC, so `false` reliably hides the icon.
