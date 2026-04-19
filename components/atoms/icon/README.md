# Icon

> [Bootstrap Icons](https://icons.getbootstrap.com)

Varbase implementation for Bootstrap icons.

## Available properties:
 - `name`: Icon name - The name of the icon in Bootstrap Icon library. (https://icons.getbootstrap.com)
 - `role`: The accessibility role for the icon as string. (https://icons.getbootstrap.com/#accessibility)
 - `rtl`: RTL Icon name - If needed, The name of the Right to Left (RTL) icon replacement Bootstrap Icon for the default LTR one.
 - `icon_utility_classes`: An array of utility classes that can be used to add extra
                     Bootstrap utility classes or custom classes to this component.

## Available attributes:
* `attributes`: HTML attributes for the icon element.

## Available slots:
* N/A


## Examples:

### Example 1
Bootstrap Icon for the stroke.

```
{% include 'vartheme_bs5:icon' with { name: 'bi-chevron-right'} only %}
```

### Example 2
Bootstrap Icon for a stroke and the right to left (RTL) replacement for it.

```
{% include 'vartheme_bs5:icon' with { name: 'bi-chevron-right', rtl: 'bi-chevron-left', lang_dir: lang_dir} only %}
```

```
{% include 'vartheme_bs5:icon' with { name: 'bi-chevron-right', rtl: 'bi-chevron-left'} %}
```

### Example 3
Bootstrap Icon for chevron with double down stokes and a role fo scroll.

```
{% include 'vartheme_bs5:icon' with { name: 'bi-chevron-double-down', role: 'scroll' } only %}
```

