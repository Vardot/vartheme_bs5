# Group

A flexible Bootstrap-based wrapper for grouping content in a horizontal or vertical flex layout, with gap, alignment, spacing, wrapping, background, border, radius, and Animate On Scroll support.

## Bootstrap reference

> [Bootstrap 5.3 — Flex utilities](https://getbootstrap.com/docs/5.3/utilities/flex/)

## What it does

Use this component when you need a reusable layout wrapper that can:

- stack items vertically or horizontally
- control the gap between items with Bootstrap utilities
- align and distribute items with flex utilities
- wrap horizontal items onto multiple lines when needed
- add top, bottom, start, and end padding or margin with Bootstrap spacing classes
- apply Bootstrap background, border, and border-radius utilities
- play an optional Animate On Scroll (AOS) effect on the wrapper

## Files

- `group.component.yml` — component schema and props
- `group.twig` — component template
- `README.md` — usage notes and examples
- `group.mdx` — Storybook docs page
- `group.stories.json` — Storybook story configuration
- `group.stories.twig` — Storybook story templates

## Props overview

### Layout

- `direction`: `vertical` or `horizontal`; defaults to `vertical`
- `gap`: Bootstrap gap utility — `gap-0` through `gap-5`; defaults to `gap-3`
- `wrap`: wrapping mode for horizontal layouts — `wrap`, `nowrap`, `wrap-reverse`; defaults to `wrap`
- `align_items`: cross-axis alignment — `align-items-start`, `align-items-center`, `align-items-end`, `align-items-stretch`, `align-items-baseline`; defaults to `align-items-stretch`
- `justify_content`: main-axis distribution — `justify-content-start`, `justify-content-center`, `justify-content-end`, `justify-content-between`, `justify-content-around`, `justify-content-evenly`; defaults to `justify-content-start`

### Appearance

- `background_color`: Bootstrap background utility or `none` — full set: `bg-primary`, `bg-primary-subtle`, `bg-secondary`, `bg-secondary-subtle`, `bg-success`, `bg-success-subtle`, `bg-danger`, `bg-danger-subtle`, `bg-warning`, `bg-warning-subtle`, `bg-info`, `bg-info-subtle`, `bg-light`, `bg-light-subtle`, `bg-dark`, `bg-dark-subtle`, `bg-body`, `bg-body-secondary`, `bg-body-tertiary`, `bg-black`, `bg-white`, `bg-transparent`, `bg-tertiary`, `bg-accent`; defaults to `none`
- `radius`: Bootstrap border-radius utility — `none`, `rounded`, `rounded-0`, `rounded-1`, `rounded-2`, `rounded-3`, `rounded-4`, `rounded-pill`; defaults to `none`

### Border

- `border`: which sides to apply a border to — `none`, `border` (all), `border-top`, `border-bottom`, `border-start`, `border-end`; defaults to `none`
- `border_color`: Bootstrap border color utility; only applied when `border` is not `none`; defaults to `none`
- `border_width`: Bootstrap border width utility (`border-1` through `border-5`); only applied when `border` is not `none`; defaults to `none`

### Spacing

- `padding_block_start` (`pt-0`–`pt-5`), `padding_block_end` (`pb-0`–`pb-5`)
- `padding_inline_start` (`ps-0`–`ps-5`), `padding_inline_end` (`pe-0`–`pe-5`)
- `margin_block_start` (`mt-0`–`mt-5`), `margin_block_end` (`mb-0`–`mb-5`)
- `margin_inline_start` (`ms-0`–`ms-5`), `margin_inline_end` (`me-0`–`me-5`)

### Animation (AOS)

- `aos_animation`: Animate On Scroll effect — `none`, `fade`, `fade-up`, `fade-down`, `fade-left`, `fade-right`, `fade-up-right`, `fade-up-left`, `fade-down-right`, `fade-down-left`, `flip-up`, `flip-down`, `flip-left`, `flip-right`, `slide-up`, `slide-down`, `slide-left`, `slide-right`, `zoom-in`, `zoom-in-up`, `zoom-in-down`, `zoom-in-left`, `zoom-in-right`, `zoom-out`, `zoom-out-up`, `zoom-out-down`, `zoom-out-left`, `zoom-out-right`; defaults to `none`
- `aos_duration`: animation duration in ms — `default`, `400`, `600`, `800`, `1000`, `1200`, `1500`, `2000`; defaults to `default`
- `aos_delay`: animation delay in ms — `0`, `100`, `200`, `300`, `400`, `500`, `600`; defaults to `0`
- `aos_once`: animate only once — `true` or `false`; defaults to `true`

When `aos_animation` is not `none`, the `varbase_components/aos` library is attached and the attributes `data-aos`, `data-aos-duration`, `data-aos-delay`, and `data-aos-once` are rendered on the wrapper.

## Slots

- `content` — the group content

## Available attributes

- `attributes` — HTML attributes for the outer `<div>` element

## Example: vertical stacked group

```twig
{% embed 'vartheme_bs5:group' with {
  background_color: 'bg-light',
  direction: 'vertical',
  gap: 'gap-3',
  align_items: 'align-items-stretch',
  justify_content: 'justify-content-start',
  padding_block_start: 'pt-4',
  padding_block_end: 'pb-4',
  padding_inline_start: 'ps-3',
  padding_inline_end: 'pe-3',
  radius: 'rounded-3'
} only %}
  {% block content %}
    <div class="p-3 border rounded">Item one</div>
    <div class="p-3 border rounded">Item two</div>
    <div class="p-3 border rounded">Item three</div>
  {% endblock %}
{% endembed %}
```

## Example: horizontal toolbar-style group with AOS

```twig
{% embed 'vartheme_bs5:group' with {
  direction: 'horizontal',
  gap: 'gap-2',
  wrap: 'wrap',
  align_items: 'align-items-center',
  justify_content: 'justify-content-between',
  padding_block_start: 'pt-2',
  padding_block_end: 'pb-2',
  border: 'border',
  border_color: 'border-secondary',
  border_width: 'border-1',
  aos_animation: 'fade-up',
  aos_duration: '800',
  aos_delay: '200',
  aos_once: true
} only %}
  {% block content %}
    <button class="btn btn-primary">Save</button>
    <button class="btn btn-outline-secondary">Preview</button>
    <button class="btn btn-link">Cancel</button>
  {% endblock %}
{% endembed %}
```

## Notes

- The component uses Bootstrap flex utilities directly, so the selected values are applied as-is in Twig.
- `wrap` only affects horizontal layouts.
- `border_color` and `border_width` are only applied when `border` is not `none`.
- `aos_once` is validated by SDC as a real boolean, so only a presence fallback is applied in the template.
