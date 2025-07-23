# Breadcrumb

Breadcrumb trail items that indicate the current page’s location within a navigational hierarchy that automatically adds separators via CSS.

> ### [Bootstrap documentation on Breadcrumb](https://getbootstrap.com/docs/5.3/components/breadcrumb)
> * [Unordered list with linked list items](https://getbootstrap.com/docs/5.3/components/breadcrumb/#example)
> * [Dividers](https://getbootstrap.com/docs/5.3/components/breadcrumb/#dividers)
> * [Accessibility: ARIA Authoring Practices Guide breadcrumb pattern](https://www.w3.org/WAI/ARIA/apg/patterns/breadcrumb/)

s
### Properties:
* `breadcrumb`: Breadcrumb trail items.
* `divider`: Dividers are automatically added in CSS through ::before and content. They can be changed by modifying a local CSS custom property --bs-breadcrumb-divider, or through the $breadcrumb-divider Sass variable — and $breadcrumb-divider-flipped for its RTL counterpart, if needed. 
* `breadcrumb_utility_classes`: An array of utility classes. Use to add extra Bootstrap utility classes or custom CSS classes over to this component.

### Available attributes:
* `attributes`: HTML attributes for the breadcrumb nav element.
* `items_attributes`: HTML attributes for the Breadcrumb trail items element.

### Examples:

**Example #1** Used in the `breadcrumb.html.twig` template
```
{% include 'vartheme_bs5:breadcrumb' with {
  breadcrumb: breadcrumb,
} %}
```

**Example #2** Change the style of divider
```
{% include 'vartheme_bs5:breadcrumb' with {
  breadcrumb: breadcrumb,
  divider: '>'
} %}
```

**Example #3** Have more spacing
```
{% include 'vartheme_bs5:breadcrumb' with {
  breadcrumb: breadcrumb,
  breadcrumb_utility_classes: ['m-sm-2', 'm-md-3', 'm-xxl-5']
} %}
```