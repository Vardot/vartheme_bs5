# Testimonial card

The **Testimonial card** component displays a customer quote, speaker details, and an optional avatar in a clean Bootstrap card layout.

It is useful for testimonials, endorsements, student feedback, client reviews, and highlighted quotes across landing pages and content sections.

## Features

- Bootstrap card-based layout
- Light and dark style options
- Optional quote icon toggle
- Optional avatar image
- Optional author name and role
- Bootstrap utility class values used directly in select props
- Clean Twig structure with logic prepared at the top
- Uses the `vartheme_bs5:image` component for the avatar

## Properties

### `style`
Card theme style.

Available values:

```text
bg-body
bg-dark text-white
```

Example:

```yaml
style: bg-body
```

### `shadow`
Bootstrap shadow utility class.

Available values:

```text
shadow-none
shadow-sm
shadow
shadow-lg
```

Example:

```yaml
shadow: shadow
```

### `align`
Content alignment for the quote and author area.

Available values:

```text
text-center
text-start
```

Example:

```yaml
align: text-center
```

### `show_quote_icon`
Shows or hides the decorative quote icon.

Example:

```yaml
show_quote_icon: true
```

### `text`
Main testimonial quote text.

Example:

```yaml
text: "My career guidance was crucial in helping me understand the tech industry landscape and ultimately secure my role."
```

### `cite_name`
Author name.

Example:

```yaml
cite_name: "Isiah Julio"
```

### `cite_text`
Author title or role.

Example:

```yaml
cite_text: "Engineer, Technical Services"
```

### `media`
Avatar image object.

Example:

```yaml
media:
  src: "assets/avatar-placeholder.svg"
  alt: "Avatar placeholder"
  width: 120
  height: 120
```

## Usage

### Basic example

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

### Left-aligned example without quote icon

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

### Dark style example

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

- The avatar uses the `vartheme_bs5:image` component.
- `shadow-none` intentionally avoids adding a shadow class in Twig.
- `show_quote_icon` uses proper boolean handling, so `false` will actually hide the icon.
