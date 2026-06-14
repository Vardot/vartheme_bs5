# List Group Component

A Bootstrap 5.3 List Group component for displaying flexible lists of content with support for links, badges, contextual styling, and various layout options.

## Bootstrap reference

> [Bootstrap 5.3 — List group](https://getbootstrap.com/docs/5.3/components/list-group/)

## Features

- **Basic List Groups**: Simple unordered lists with Bootstrap styling
- **Actionable Items**: Support for links and buttons with hover states
- **Active/Disabled States**: Visual indicators for current and disabled items
- **Contextual Variants**: All Bootstrap contextual colors (primary, success, danger, etc.)
- **Flush Lists**: Remove borders for edge-to-edge rendering
- **Numbered Lists**: Automatic numbering with custom counter styling
- **Horizontal Layout**: Responsive horizontal layouts at various breakpoints
- **Badges**: Built-in support for badges with customizable variants
- **Custom Content**: Support for complex HTML content within list items

## Usage

### Basic Example

```twig
{% include "vartheme_bs5:list-group" with {
  items: [
    {content: "First item"},
    {content: "Second item"},
    {content: "Third item"}
  ]
} %}
```

### With Links and Active States

```twig
{% include "vartheme_bs5:list-group" with {
  items: [
    {content: "Home", href: "/", active: true},
    {content: "About", href: "/about"},
    {content: "Contact", href: "/contact", disabled: true}
  ]
} %}
```

### Contextual Variants with Badges

```twig
{% include "vartheme_bs5:list-group" with {
  items: [
    {
      content: "Messages", 
      variant: "primary",
      badge: {text: "12", variant: "light"}
    },
    {
      content: "Warnings", 
      variant: "warning",
      badge: {text: "3", variant: "dark"}
    }
  ]
} %}
```

### Horizontal and Numbered

```twig
{% include "vartheme_bs5:list-group" with {
  numbered: true,
  horizontal: "md",
  items: [
    {content: "Step one"},
    {content: "Step two"},
    {content: "Step three"}
  ]
} %}
```

## Available Properties

| Property | Type | Description | Default |
|----------|------|-------------|---------|
| `items` | array | Array of list items with content, active, disabled, href, badge, and variant properties | `[]` |
| `flush` | boolean | Remove borders and rounded corners | `false` |
| `numbered` | boolean | Add numbers to list items | `false` |
| `horizontal` | string | Make horizontal at breakpoint (sm, md, lg, xl, xxl) | `""` |
| `utility_classes` | array | Additional Bootstrap utility classes | `[]` |
| `attributes` | object | HTML attributes for the list group | `{}` |

## Item Properties

Each item in the `items` array can have:

| Property | Type | Description |
|----------|------|-------------|
| `content` | string | The content of the list item (can include HTML) |
| `active` | boolean | Whether the item is active |
| `disabled` | boolean | Whether the item is disabled |
| `href` | string | URL to make the item a link |
| `variant` | string | Bootstrap contextual variant (primary, success, etc.) |
| `badge` | object | Badge configuration with `text` and `variant` properties |