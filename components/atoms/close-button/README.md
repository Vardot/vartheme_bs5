# Close button

A generic close button for dismissing content like modals and alerts.

> #### [Bootstrap Documentation on Close Button](https://getbootstrap.com/docs/5.3/components/close-button/)
> * [Close Button](https://getbootstrap.com/docs/5.3/components/close-button/#example)
> * [Disabled state](https://getbootstrap.com/docs/5.3/components/close-button/#disabled-state)
> * [Dark variant](https://getbootstrap.com/docs/5.3/components/close-button/#dark-variant)

Provide an option to dismiss or close a component with `.btn-close`. Default styling is limited, but highly customizable. Modify the Sass variables to replace the default `background-image`. Be sure to include text for screen readers, as we’ve done with `aria-label`.

## Properties:
* `size`: (btn-sm|btn-lg) Bootstrap button size class.
* `disabled`: (true|false) Disabled button.
* `close_button_utility_classes`: An array of utility classes that can
                    be used to add extra Bootstrap utility classes or custom
                    classes to this component.

## Attributes:
* `attributes`: HTML attributes for the close button element.

## Slots:
* N/A

### Examples:

**Example #1** Dismissible Alert close button
```
{% if dismissible %}
  {% if not dismissible_attributes %}
   {% set dismissible_attributes = create_attribute() %}
  {% endif %}
  {% set dismissible_attributes = dismissible_attributes.setAttribute('data-bs-dismiss', 'alert') %}
  {% include 'vartheme_bs5:close-button' with {
      size: 'btn-sm',
      attributes: dismissible_attributes
    } only %}
{% endif %}
```