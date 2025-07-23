# Callout

Call out specific text from the content. These are intended to draw priority attention to that text.

Callout is not part of Bootstrap 5, It is part of [Creating your own](https://getbootstrap.com/docs/5.3/customize/components/#creating-your-own). They built it as a custom for thier docs so thier messages to you stand out. It has three variants via modifier classes.

### Properties:
* `type`: Predefined callout type styles.
         (''|bs-callout-info|bs-callout-warning|bs-callout-danger), If not provided the fallback default callout style will apply.
* `callout_utility_classes`: An array of utility classes. Use to add extra Bootstrap utility classes or custom CSS classes over to this component.

### Attributes:
 * `attributes`: HTML attributes for the callout element.

### Slots:
* `content`: The content of the callout.


### Examples:

**Example #1** Default callout
```
{% include 'vartheme_bs5:callout' with {
  content: '<strong>Default callout.</strong> Example text to show it in action.'
} %}
```

**Example #2** Info callout
```
{% include 'vartheme_bs5:callout' with {
  type: 'bs-callout-info',
  content: '<strong>This is an info callout.</strong> Example text to show it in action.'
} %}
```

**Example #3** Warning callout
```
{% include 'vartheme_bs5:callout' with {
  type: 'bs-callout-warning',
  content: '<strong>This is a warning callout.</strong> Example text to show it in action.'
} %}
```

**Example #3** Danger callout
```
{% include 'vartheme_bs5:callout' with {
  type: 'bs-callout-danger',
  content: '<strong>This is a danger callout.</strong> Example text to show it in action.'
} %}
```
