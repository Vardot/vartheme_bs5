# Spacer

The Spacer component adds consistent vertical space between sections using Bootstrap spacing utility classes.

## When to use

Use this component when you need clean separation between blocks, cards, text areas, banners, or layout sections without adding custom CSS.

## Props

### `size`
Controls the vertical spacing height by applying a Bootstrap `py-*` utility class directly to the spacer.

Available values:

- `py-0`
- `py-1`
- `py-2`
- `py-3`
- `py-4`
- `py-5`

Default:

- `py-3`

## Output

The component renders an empty full-width element:

```html
<div class="py-3 w-100" aria-hidden="true"></div>
```

## Example usage

### Small spacing

```twig
{% include 'your-theme:spacer' with {
  size: 'py-2'
} %}
```

### Large spacing

```twig
{% include 'your-theme:spacer' with {
  size: 'py-5'
} %}
```

## Notes

- Uses Bootstrap utility classes only.
- No custom CSS, SCSS, or inline styles are required.
- The spacer is decorative, so it is marked with `aria-hidden="true"`.
