# Column

A very simple Bootstrap column component for use inside the Row component.

## What it does

This component renders a plain Bootstrap `.col` wrapper and exposes a single content slot.

## Behavior

- No settings
- No custom classes
- No width controls
- No spacing controls
- Always renders as `.col`

This keeps the component small and easy to use when the Row component controls the layout.

## Example

```twig
{% embed 'your_theme:column' %}
  {% block content %}
    <div class="p-3 border rounded bg-light">
      Column content
    </div>
  {% endblock %}
{% endembed %}
```

## Notes

- Use this component inside the **Row** component.
- Column width can be controlled by the parent **Row** component using Bootstrap row utilities such as `row-cols-*`.
- If you need custom widths later, that can be added in a separate advanced column component.
