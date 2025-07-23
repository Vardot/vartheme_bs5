# Spinner

Indicate the loading state of a component or page with Bootstrap spinners, built entirely with HTML, CSS, and no JavaScript.

> ### [Bootstrap Documentation on Spinners](https://getbootstrap.com/docs/5.3/components/spinners/)
> * [Border spinner](https://getbootstrap.com/docs/5.3/components/spinners/#border-spinner)
> * [Growing spinner](https://getbootstrap.com/docs/5.3/components/spinners/#growing-spinner)
> * [Colors](https://getbootstrap.com/docs/5.3/components/spinners/#colors)
> * [Size](https://getbootstrap.com/docs/5.3/components/spinners/#size)
> * [Hidden Status](https://getbootstrap.com/docs/5.3/components/spinners/#buttons)

### Properties:
* `html_tag`: Having the spinner as div or span.
* `type`: Use the border spinners for a lightweight loading indicator. If you do not fancy a border spinner, switch to the grow spinner. While it does not technically spin, it does repeatedly grow!
* `color`: Built with current Color, so you can easily change its appearance with text color utilities.
         (primary|secondary|success|danger|warning|info|dark|light)
* `size`: Make a smaller spinner that can quickly be used within other components.
* `hidden_status`: Hidden spinner status message.
* `spinner_utility_classes`: An array of utility classes that can
                    be used to add extra Bootstrap utility classes or custom
                    classes to this component.

### Attributes:
* `attributes`: HTML attributes for the Spinner element.
* `spinner_status_attributes`: HTML attributes for the Spinner status element.

### Slots:
* `content`: Spinner content.

### Examples
**Example #1:** Secondary Spinner
```
  {% include 'vartheme_bs5:spinner' with {
    color: 'secondary',
    content: 'Loading ...'|t,
  } %}
```

**Example #2:** Grow Spinner
```
  {% include 'vartheme_bs5:spinner' with {
    type: 'grow',
    content: 'Please, waite ...'|t,
    color: 'info',
  } %}
```

**Example #3:** Small saving border spinner with status
```
{% include 'vartheme_bs5:spinner' with {
    color: 'primary',
    type: 'border',
    content: 'Saving ...',
    size: 'sm',
    hidden_status: false
  } %}
```

**Example #4:** Small saving grow spinner with status
```
  {% include 'vartheme_bs5:spinner' with {
    color: 'primary',
    type: 'grow',
    content: 'Saving ...'|t,
    size: 'sm',
    hidden_status: false
  } %}
```

