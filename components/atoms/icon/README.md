# Icon

Renders a Bootstrap Icon.

## Properties
- `icon`: Bootstrap Icon name from the predefined list. Use the icon name without the `bi-` prefix.

## Notes
- The component automatically adds the `bi` base class.
- You can pass the custom icon name with or without the `bi-` prefix.
- Icon size and color are not controlled by the component.
- The icon inherits size and color from the parent element or surrounding Bootstrap utility classes.

## Examples

### Example #1: Default icon
```twig
{% include "vartheme_bs5:icon" with {
  icon: 'people'
} %}
```

### Example #2: Inherit size and color from parent
```twig
<div class="fs-1 text-primary">
  {% include "vartheme_bs5:icon" with {
    icon: 'search'
  } %}
</div>
```

### Example #3: Custom icon override
```twig
{% include "vartheme_bs5:icon" with {
  icon: 'info',
} %}
```