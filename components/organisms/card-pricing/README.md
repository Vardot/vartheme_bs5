# Pricing card

The **Pricing card** component displays a pricing plan with an optional badge, description, price details, features list, and call-to-action button.

It is built with Bootstrap utilities and is designed for plan comparisons such as **Basic**, **Pro**, or **Enterprise** offers.

---

## Features

- Optional badge label
- Configurable heading level
- Price with currency symbol before or after the amount
- Optional price period and price note
- Rich text features list
- Optional divider above the features list
- Bootstrap utility-based styling for:
  - shadow
  - border
  - background
  - text alignment
- Optional highlight mode for promoted plans
- Optional CTA button rendered using the shared button component

---

## Component properties

### Content

#### `badge_text`
Optional badge text.

Example:

```text
Most popular
```

#### `heading_text`
Card heading.

Example:

```text
Premium
```

#### `level`
Heading level for the card title.

Available options:

```text
2
3
4
```

Default: `3`

#### `description`
Optional short description shown below the heading.

#### `price`
Price value.

Example:

```text
159
```

#### `currency_symbol`
Visible currency symbol.

Example:

```text
$
```

#### `currency_code`
Used in the `<data>` element.

Example:

```text
USD
```

#### `symbol_position`
Controls whether the currency symbol appears before or after the amount.

Available options:

```text
before
after
```

Default: `before`

#### `price_period`
Optional text displayed next to the price.

Example:

```text
/month
```

#### `price_note`
Optional supporting note below the price.

Example:

```text
Billed annually
```

#### `text`
Rich text HTML used for the features list.

Example:

```html
<ul>
  <li>Unlimited projects</li>
  <li>Email support</li>
  <li>Analytics dashboard</li>
</ul>
```

---

### Display options

#### `show_features_divider`
Adds a border above the features section.

Default: `true`

#### `shadow`
Bootstrap shadow utility class.

Available options:

```text
shadow-none
shadow-sm
shadow
shadow-lg
```

Default: `shadow`

#### `border`
Bootstrap border utility class.

Examples:

```text
border
border-primary
border-dark
border-0
```

Default: `border`

#### `background_color`
Bootstrap background utility class.

Examples:

```text
bg-body
bg-light
bg-primary text-white
bg-dark text-white
```

Default: `bg-body`

#### `text_align`
Bootstrap text alignment utility class.

Available options:

```text
text-start
text-center
```

Default: `text-start`

#### `promote`
Highlights the card visually.

Default: `false`

---

### Button

#### `button_url`
Optional button link.

#### `button_label`
Optional button text.

Example:

```text
Choose plan
```

#### `button_variant`
Bootstrap button variant passed to the shared button component.

Examples:

```text
btn-primary
btn-secondary
btn-success
btn-dark
btn-link
```

Default: `btn-primary`

#### `button_target`
Where the button link opens.

Available options:

```text
self
blank
```

Default: `self`

---

## Usage

### Basic example

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

### Promoted plan example

```twig
{{ include('vartheme_bs5:card-pricing', {
  badge_text: 'Most popular',
  heading_text: 'Pro',
  level: 3,
  description: 'Best option for growing teams.',
  price: '79',
  currency_symbol: '$',
  currency_code: 'USD',
  symbol_position: 'before',
  price_period: '/month',
  price_note: 'Billed annually',
  text: '<ul><li>Unlimited users</li><li>Priority support</li><li>Advanced analytics</li></ul>',
  show_features_divider: true,
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

### Dark card example

```twig
{{ include('vartheme_bs5:card-pricing', {
  heading_text: 'Enterprise',
  level: 3,
  description: 'For larger organizations with custom needs.',
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

---

## Best practices

- Use semantic heading levels appropriate to the page structure.
- Keep the `text` field focused on short feature lists.
- Use `promote: true` for only one primary plan in a pricing group.
- Prefer Bootstrap utility values already exposed by the component props.
- Use the button props instead of writing custom button markup inside the card.
