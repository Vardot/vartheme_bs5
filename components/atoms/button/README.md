# Button

A Bootstrap 5 button that renders as a `<button>` by default, or as a link (`<a>`) when a URL is provided, with support for variant, size, outline, radius, an optional icon, alignment wrapper and full-width.

Use Bootstrap's custom button styles for actions in forms, dialogs, and more with support for multiple sizes, states, and more.

## Bootstrap reference

> #### [Bootstrap Documentation on Buttons](https://getbootstrap.com/docs/5.3/components/buttons)
> * [Button tags](https://getbootstrap.com/docs/5.3/components/buttons/#button-tags)
> * [Outline buttons](https://getbootstrap.com/docs/5.3/components/buttons/#outline-buttons)
> * [Disabled state](https://getbootstrap.com/docs/5.3/components/buttons/#disabled-state)
> * [Link functionality caveat](https://getbootstrap.com/docs/5.3/components/buttons/#link-functionality-caveat)
> * [Button plugin](https://getbootstrap.com/docs/5.3/components/buttons/#button-plugin)
> * [Toggle states](https://getbootstrap.com/docs/5.3/components/buttons/#toggle-states)

## What it does

Use this component when you need a reusable button that can:

- render as a `<button>` element, or as a link (`<a>`) when `href` is provided
- apply any Bootstrap variant, with an optional outline style
- switch between small, medium, and large sizes
- show an optional Bootstrap Icon before or after the label
- choose a border-radius utility from none to pill
- wrap in an alignment container (left, center, right) or render inline
- become full width with the `w-100` utility
- be disabled, with correct semantics for both button and link

## Files

- `button.component.yml` — component schema and props
- `button.twig` — component template
- `README.md` — usage notes and examples
- `button.scss` / `button.css` — component styles
- `button.mdx` — Storybook docs page
- `button.stories.json` — Storybook story configuration
- `button.stories.twig` — Storybook story templates

## Props overview

### Content

- `label`: button text; defaults to `Button label`

### Appearance

- `variant` (required): Bootstrap button style — `btn-primary`, `btn-secondary`, `btn-success`, `btn-danger`, `btn-warning`, `btn-info`, `btn-light`, `btn-dark`, `btn-link`; defaults to `btn-primary`
- `outline`: use the outline variant (`btn-outline-*`); not applied to `btn-link` — `true` / `false`; defaults to `false`
- `size` (required): button size — `btn-md`, `btn-sm`, `btn-lg`; defaults to `btn`
- `radius`: border-radius utility — `rounded`, `rounded-0`, `rounded-1`, `rounded-2`, `rounded-3`, `rounded-4`, `rounded-pill`; defaults to `rounded`
- `full_width`: make the button full width with `w-100` — `true` / `false`; defaults to `false`

### Link

- `href`: if provided, renders as a link (`<a>`) instead of a `<button>`
- `target`: where to open the link (only when `href` is set) — `self`, `blank`; defaults to `self`

### Icon

- `icon`: optional Bootstrap Icon name without the `bi-` prefix; use `none` to disable; defaults to `none`
- `icon_first`: change the icon position to the left — `true` / `false`; defaults to `false`

### Layout

- `alignment`: alignment wrapper for a single button (use inline for multiple buttons) — `inline`, `left`, `center`, `right`; defaults to `inline`

### State

- `disabled`: disable the button — `true` / `false`; defaults to `false`

## Variant values

| Value | Style |
|---|---|
| `btn-primary` | Primary |
| `btn-secondary` | Secondary |
| `btn-success` | Success |
| `btn-danger` | Danger |
| `btn-warning` | Warning |
| `btn-info` | Info |
| `btn-light` | Light |
| `btn-dark` | Dark |
| `btn-link` | Link |

## Radius values

| Value | Label |
|---|---|
| `rounded` | Default |
| `rounded-0` | None |
| `rounded-1` | Small |
| `rounded-2` | Medium |
| `rounded-3` | Large |
| `rounded-4` | Extra Large |
| `rounded-pill` | Round |

## Available attributes

The template exposes named attribute objects you can pass in to add classes or attributes to specific elements:

- `wrapper_attributes` — HTML attributes for the alignment wrapper element (rendered only for non-inline alignments)
- `button_attributes` — HTML attributes for the button or link element

## Example: basic button

```twig
{% include 'vartheme_bs5:button' with {
  label: 'Read more',
  variant: 'btn-primary',
  size: 'btn',
  radius: 'rounded'
} only %}
```

## Example: link button opening in a new tab

```twig
{% include 'vartheme_bs5:button' with {
  label: 'Visit website',
  href: 'https://example.com',
  target: 'blank',
  variant: 'btn-primary',
  size: 'btn-lg'
} only %}
```

## Example: outline button with icon, centered

```twig
{% include 'vartheme_bs5:button' with {
  label: 'Search',
  variant: 'btn-primary',
  outline: true,
  icon: 'search',
  icon_first: true,
  alignment: 'center'
} only %}
```

## Notes

- When `href` is provided (and the button is not disabled) the root element is an `<a>`; otherwise it is a `<button type="button">`.
- For links opening in a new tab (`target: blank`), `rel="noopener noreferrer"` is added automatically.
- Disabling a link removes its `href` and adds `aria-disabled="true"` and `tabindex="-1"`; disabling a button adds the native `disabled` attribute.
- The `btn-link` variant gets `p-0` automatically; the outline style is never applied to `btn-link`.
- The `btn-lg` size also adds the `fs-5` text class.
- Inline buttons receive `me-3 mb-3` so multiple sibling buttons get consistent spacing; non-inline alignments wrap the button in a `d-flex justify-content-*` container instead.
- The icon is rendered through the `vartheme_bs5:bootstrap-icon` component; `icon_first: false` reverses the flex order so the icon follows the label.
- Boolean props (`outline`, `disabled`, `full_width`, `icon_first`) are validated by SDC and arrive as real booleans.
