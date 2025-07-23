# List Component

Provides a reusable Varbase Component for rendering HTML lists (`ul` or `ol`) with optional Bootstrap utility classes.

## Usage

This component renders a list of items using the specified tag (`ul` or `ol`) and allows for applying Bootstrap utility classes on the list and individual list items.

## Available Variables

| Variable                   | Type     | Description                                                                 |
|----------------------------|----------|-----------------------------------------------------------------------------|
| `type`                     | string   | The HTML tag for the list, either `ul` or `ol`. Defaults to `ul`.          |
| `items`                    | array    | The list items to render as `<li>`.                                        |
| `list_utility_classes`     | string   | (Optional) Additional classes on the list element.                         |
| `list_item_utility_classes`| string   | (Optional) Additional classes for each list item (`<li>`).                 |
| `attributes`               | object   | (Optional) HTML attributes for the list element. Supports `addClass()`.    |

## Example

```twig
{% include "vartheme_bs5:list" with {
  type: 'ul',
  items: ['First', 'Second', 'Third'],
  list_utility_classes: 'list-group',
  list_item_utility_classes: 'list-group-item'
}
 %}
