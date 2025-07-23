# Progress bar

Bootstrap custom progress bars featuring support for stacked bars, animated backgrounds, and text labels.

> ### [Bootstrap Documentation on Progress](https://getbootstrap.com/docs/5.3/components/progress/)
> * [Bar sizing](https://getbootstrap.com/docs/5.3/components/progress/#bar-sizing)
> * [Height](https://getbootstrap.com/docs/5.3/components/progress/#height)
> * [Labels](https://getbootstrap.com/docs/5.3/components/progress/#labels)
> * [Backgrounds](https://getbootstrap.com/docs/5.3/components/progress/#backgrounds)
> * [Striped](https://getbootstrap.com/docs/5.3/components/progress/#striped)
> * [Animated stripes](https://getbootstrap.com/docs/5.3/components/progress/#animated-stripes)
> * [Hover variants](https://getbootstrap.com/docs/5.3/utilities/link/#hover-variants)

Progress components are built with two HTML elements, some CSS to set the width, and a few attributes.
We don’t use the HTML5 `<progress>` element, ensuring you can stack progress bars, animate them,
and place text labels over them.

## Properties:
* `color`: Use background utility classes to change the appearance of individual progress bars.
          (bg-primary|bg-secondary|bg-success|bg-info|bg-warning|bg-danger|
          bg-light|bg-dark|bg-black|bg-white|bg-body|bg-transparent|bg-opacity-10|
          bg-opacity-25|bg-opacity-50|bg-opacity-75|bg-opacity-100|bg-gradient)
* `striped`: Add .progress-bar-striped to any .progress-bar to
            apply a stripe via CSS gradient over the background color.
            (true|false)
* `animated`: The striped gradient can also be animated.
             Add .progress-bar-animated to .progress-bar to animate
             the stripes right to left via CSS3 animations.
             (true|false)
* `label`: The label of the working task.
* `percent`: [1 to 100] The percentage of the progress.
* `message`: A string containing information to be displayed.

## Attributes:
* `wrapper_attributes`: HTML attributes for the Progress Bar wrapper element.
* `indicator_attributes`: HTML attributes for the Progress Bar indicator element.
* `label_attributes`: HTML attributes for the Progress Bar label element.
* `message_attributes`: HTML attributes for the Progress Bar message element.

## Slots:
* - N/A


### Examples
**Example #1:** Use for the system progress
```
{% include 'vartheme_bs5:progress-bar' with {
  color: '',
  striped: true,
  animated: true,
  label: label,
  percent: percent,
  message: message
} %}
```

**Example #2:** Job process Warning
```
  {% include 'vartheme_bs5:progress-bar' with {
    color: 'bg-warning',
    striped: false,
    animated: false,
    label: 'Job process Warning',
    percent: percent,
    message: 'Warning of system status'
  } %}
```

**Example #3:** Success status passing progress
```
  {% include 'vartheme_bs5:progress-bar' with {
    color: 'bg-success',
    striped: false,
    animated: false,
    label: label,
    percent: percent,
    message: 'Passing status is in progress'|t
  } %}
```