# Input

Textual form controls `<input>`s an upgrade with custom styles, sizing, focus states, and more.

> ### [Bootstrap Documentation on Form Input Controls](https://getbootstrap.com/docs/5.3/forms/form-control)
> * [Form controls](https://getbootstrap.com/docs/5.3/forms/form-control/#example)
> * [Sizing](https://getbootstrap.com/docs/5.3/forms/form-control/#sizing)
> * [Form text](https://getbootstrap.com/docs/5.3/forms/form-control/#form-text)

## Properties:
* `type`: Specifies the type `<input>` element to display
* `value`: Specifies the value of the input element
* `bs_form_control`: Have class `.form-control` related to input type.
* `bs_size`: Set heights using classes like `.form-control-lg` and `.form-control-sm`.
* `placeholder`: The input placeholder attribute specifies a short hint that describes
                 the expected value of an input field (a sample value or a short
                 description of the expected format).
* `input_utility_classes`: An array of utility classes that can
                    be used to add extra Bootstrap utility classes or custom
                    classes to this component.

## Attributes:
* `attributes`: HTML attributes for the input element.
* `children`: Optional additional rendered elements.

## Slots:
* - N/A


## Examples:

### Example #1 : Input type of checkbox form element.
```
{% include "vartheme_bs5:input" with {
  type: 'checkbox',
  bs_form_control: false,
  bs_size: '',
  input_utility_classes: ['form-check-input'],
  attributes: attributes
} %}
```

### Example #2 : Input type of Input submit form element.
```
{% include "vartheme_bs5:input" with {
  type: 'submit'
} %}
```
