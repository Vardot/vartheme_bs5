# Alert

Alerts are available for any length of text, as well as an optional close button. For proper styling, use one of the eight required contextual classes (e.g., .alert-success). 

> ### [Bootstrap documentation on Alerts](https://getbootstrap.com/docs/5.3/components/alerts)
> * [Color](https://getbootstrap.com/docs/5.3/components/alerts/#examples)
> * [Link color](https://getbootstrap.com/docs/5.3/components/alerts/#link-color)
> * [Icons](https://getbootstrap.com/docs/5.3/components/alerts/#icons)
> * [Dismissing](https://getbootstrap.com/docs/5.3/components/alerts/#dismissing)

### Properties:
* `type`: Bootstrap includes several predefined alert type styles.
         (alert-primary|alert-secondary|alert-success|alert-info|
          alert-warning|alert-danger|alert-light|alert-dark)
* `dismissible`: It is possible to dismiss any alert inline, When an alert is dismissed, the element is completely removed from the page structure.
* `alert_utility_classes`: An array of utility classes. Use to add extra Bootstrap utility classes or custom CSS classes over to this component.

### Attributes:
 * `attributes`: HTML attributes for the alert element.
 * `dismissible_attributes`: HTML attributes for the alert dismiss close button element.

### Slots:
* `content`: The content of the alert.
* `heading`: Alerts can also contain primary alert heading.
