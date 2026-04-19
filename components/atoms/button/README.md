
# Button

The **Button component** provides a flexible way to render Bootstrap 5 buttons within the theme. It supports both standard `<button>` elements and link-style buttons (`<a>`), while maintaining full compatibility with Bootstrap utilities and Varbase component patterns.

The component allows you to control appearance, size, icon placement, and alignment through simple properties without needing additional custom classes.

---

# Features

- Built on **Bootstrap 5 button utilities**
- Can render as either:
  - `<button>` element
  - `<a>` element (when `href` is provided)
- Supports **Bootstrap variants**
- Optional **outline style**
- Supports **Bootstrap Icons**
- Configurable **button size**
- Configurable **border radius**
- Optional **alignment wrapper**
- Works seamlessly inside Canvas and Varbase component architecture

---

# Component Properties

## Required

### `variant`
Bootstrap button style.

Examples:

```
btn-primary
btn-secondary
btn-success
btn-danger
btn-link
```

---

### `size`
Bootstrap size utility.

Available options:

```
btn
btn-sm
btn-lg
```

Default: `btn`

---

# Optional Properties

### `label`

Text displayed inside the button.

Example

```
Read more
```

---

### `href`

If provided, the component renders an **anchor element instead of a button**.

Example

```
https://example.com
```

---

### `target`

Used only when `href` is provided.

Options

```
self
blank
```

Example

```
target: blank
```

---

### `outline`

When enabled, the button becomes an **outline button variant**.

Example

```
btn-primary → btn-outline-primary
```

Not applied to `btn-link`.

---

### `disabled`

Disables the button.

For `<button>` it adds the `disabled` attribute.  
For `<a>` it adds `aria-disabled="true"`.

---

### `icon`

Displays a **Bootstrap icon** inside the button.

Example

```
search
arrow-right
download
```

---

### `icon_first`

Controls icon placement.

```
true  → icon before label
false → icon after label
```

---

### `alignment`

Wraps the button in an alignment container.

Options

```
inline
left
center
right
```

Default

```
inline
```

---

### `full_width`

Makes the button full width using Bootstrap's `w-100` utility class.

```
true  → full width
false → normal width
```


---

### Link variant behavior

When `variant` is set to `btn-link`, the component now removes all button padding automatically using Bootstrap's `p-0` utility. This keeps the text aligned more naturally with surrounding content without adding extra configuration.


---

### `radius`

Bootstrap border radius utility.

Options

```
rounded
rounded-pill
rounded-0
```

Default

```
rounded
```

---

# Usage

## Basic Button

```twig
{% include 'vartheme_bs5:button' with {
  label: 'Read more',
  variant: 'btn-primary',
  size: 'btn',
  radius: 'rounded'
} %}
```

---

## Link Button

```twig
{% include 'vartheme_bs5:button' with {
  label: 'Visit website',
  href: 'https://example.com',
  target: 'blank',
  variant: 'btn-primary',
  size: 'btn-lg'
} %}
```

---

## Full Width Button

```twig
{% include 'vartheme_bs5:button' with {
  label: 'Submit',
  variant: 'btn-primary',
  size: 'btn-md',
  full_width: true
} %}
```

---

## Button With Icon

```twig
{% include 'vartheme_bs5:button' with {
  label: 'Search',
  variant: 'btn-primary',
  icon: 'search',
  icon_first: true
} %}
```

---

## Outline Button

```twig
{% include 'vartheme_bs5:button' with {
  label: 'Learn more',
  variant: 'btn-primary',
  outline: true
} %}
```

---

# Best Practices

- Use **Bootstrap utilities** for layout spacing instead of modifying the component.
- Avoid adding custom classes to the button directly.
- Use the available properties (`variant`, `size`, `radius`, etc.) to control styling.
- Keep the component consistent with Bootstrap design patterns.