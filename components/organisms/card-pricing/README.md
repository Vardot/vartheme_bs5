# Pricing card

A Bootstrap card for a single pricing plan — with an optional badge, heading, description, price block, features list, and call-to-action button.

## Bootstrap reference

> [Bootstrap 5.3 — Card](https://getbootstrap.com/docs/5.3/components/card/)

## What it does

Use this component when you need a pricing/plan card that can:

- show an optional badge (e.g. "Most popular") above a configurable heading
- render a price with a currency symbol before or after the amount, plus an optional period and note
- display a rich-text features list, optionally separated by a top divider
- apply Bootstrap shadow, border, background theme, and text alignment
- visually promote one plan with a stronger border and shadow
- render an optional CTA button via the shared button component

## Files

- `card-pricing.component.yml` — component schema and props
- `card-pricing.twig` — component template
- `README.md` — usage notes and examples
- `card-pricing.mdx` — Storybook docs page
- `card-pricing.stories.json` — Storybook story configuration
- `card-pricing.stories.twig` — Storybook story templates

## Props overview

### Content

- `badge_text`: optional badge label; defaults to empty
- `heading_text`: card heading
- `level`: heading level — `2`, `3`, `4`; defaults to `3`
- `description`: optional short description below the heading
- `text`: rich HTML used for the features list

### Price

- `price`: price value (string or number)
- `currency_symbol`: display symbol (e.g. `$`)
- `currency_code`: used in the `<data>` element (e.g. `USD`)
- `symbol_position`: `before` or `after` the price; defaults to `before` (required prop)
- `price_period`: optional short text after the price (e.g. `/month`); defaults to empty
- `price_note`: optional small note under the price (e.g. `Billed annually`); defaults to empty
- `show_features_divider`: adds a top border before the features list; defaults to `true`

### Appearance

- `shadow`: `shadow-none`, `shadow-sm`, `shadow`, `shadow-lg`; defaults to `shadow`
- `border`: `border`, `border-0`, `border-primary`, `border-secondary`, `border-success`, `border-danger`, `border-warning`, `border-info`, `border-light`, `border-dark`; defaults to `border`
- `background_color`: `bg-body`, `bg-primary text-white`, `bg-secondary text-white`, `bg-success text-white`, `bg-danger text-white`, `bg-warning`, `bg-info`, `bg-light`, `bg-dark text-white`; defaults to `bg-body`
- `text_align`: `text-start`, `text-center`, `text-end`; defaults to `text-start`
- `promote`: highlights the card with `border-primary` and `shadow-lg`; defaults to `false`

### Button

- `button_url`: optional button link
- `button_label`: optional button text
- `button_variant`: solid (`btn-primary` … `btn-dark`), `btn-link`, or outline (`btn-outline-primary` … `btn-outline-dark`); defaults to `btn-primary`
- `button_target`: `self` or `blank`; defaults to `self`

## Example: basic plan

```twig
{{ include('vartheme_bs5:card-pricing', {
  heading_text: 'Starter',
  level: 3,
  description: 'Good for small teams getting started.',
  price: '29',
  currency_symbol: '$',
  currency_code: 'USD',
  symbol_position: 'before',
  price_period: '/month',
  price_note: 'Billed monthly',
  text: '<ul><li>3 users</li><li>Email support</li><li>Basic reports</li></ul>',
  show_features_divider: true,
  shadow: 'shadow',
  border: 'border',
  background_color: 'bg-body',
  text_align: 'text-start',
  button_url: 'https://example.com/starter',
  button_label: 'Choose plan',
  button_variant: 'btn-primary',
  button_target: 'self',
  promote: false
}, with_context: false) }}
```

## Example: promoted plan

```twig
{{ include('vartheme_bs5:card-pricing', {
  badge_text: 'Most popular',
  heading_text: 'Pro',
  level: 3,
  price: '79',
  currency_symbol: '$',
  currency_code: 'USD',
  symbol_position: 'before',
  price_period: '/month',
  price_note: 'Billed annually',
  text: '<ul><li>Unlimited users</li><li>Priority support</li><li>Advanced analytics</li></ul>',
  shadow: 'shadow-lg',
  border: 'border-primary',
  background_color: 'bg-body',
  text_align: 'text-center',
  button_url: 'https://example.com/pro',
  button_label: 'Get started',
  button_variant: 'btn-primary',
  button_target: 'blank',
  promote: true
}, with_context: false) }}
```

## Example: dark plan

```twig
{{ include('vartheme_bs5:card-pricing', {
  heading_text: 'Enterprise',
  level: 3,
  price: '199',
  currency_symbol: '$',
  currency_code: 'USD',
  symbol_position: 'before',
  price_period: '/month',
  text: '<ul><li>Dedicated support</li><li>Custom onboarding</li><li>Security review</li></ul>',
  shadow: 'shadow-lg',
  border: 'border-dark',
  background_color: 'bg-dark text-white',
  text_align: 'text-start',
  button_url: 'https://example.com/enterprise',
  button_label: 'Contact sales',
  button_variant: 'btn-light',
  button_target: 'self',
  promote: false
}, with_context: false) }}
```

## Notes

- The card always uses `h-100`, so plans in a row share equal height.
- `symbol_position` is a required prop and defaults to `before`.
- The badge variant follows `promote`: `text-bg-primary` when promoted, otherwise `text-bg-secondary`.
- When `promote` is true, the card gains `border-primary` and `shadow-lg` regardless of the `border`/`shadow` props.
- The button only renders when both `button_url` and `button_label` are set; the price `<data>` element carries `value` and `data-currency` for machine readability.
- Some `background_color` values carry a paired text utility (e.g. `bg-primary text-white`); the component splits and applies both.
- Boolean props (`show_features_divider`, `promote`) are validated and defaulted by SDC, so they arrive as real booleans.
