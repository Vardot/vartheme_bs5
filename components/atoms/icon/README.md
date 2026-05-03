# Icon

Renders a Bootstrap Icon.

## Properties
- `icon`: Bootstrap Icon name from the predefined list. Use the icon name without the `bi-` prefix.
- `icon_size`: Bootstrap font-size utility class. Supported values: `fs-1`, `fs-2`, `fs-3`, `fs-4`, `fs-5`, `fs-6`.
- `color`: Bootstrap text color utility class. Supported values include `text-body`, `text-primary`, `text-secondary`, `text-success`, `text-danger`, `text-warning`, `text-info`, `text-light`, `text-dark`, `text-white`, `text-muted`, and Bootstrap 5.3 emphasis/body color utilities.

## Notes
- The component automatically uses the Bootstrap icon name with the existing `vartheme_bs5:bootstrap-icon` component.
- Size is passed to the Bootstrap icon component as `icon_size`.
- Color is passed to the Bootstrap icon component as `color`, the same way size is passed as `icon_size`.

## Examples

### Example #1: Default icon
```twig
{% include "vartheme_bs5:icon" with {
  icon: 'people',
  icon_size: 'fs-4',
  color: 'text-body'
} %}
```

### Example #2: Large primary search icon
```twig
{% include "vartheme_bs5:icon" with {
  icon: 'search',
  icon_size: 'fs-1',
  color: 'text-primary'
} %}
```

### Example #3: Info icon
```twig
{% include "vartheme_bs5:icon" with {
  icon: 'info',
  icon_size: 'fs-3',
  color: 'text-info'
} %}
```
