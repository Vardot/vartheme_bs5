# Link

Link with Bootstrap Link helpers and utility classes

## Bootstrap reference

> #### [Bootstrap Documentation on Buttons](https://getbootstrap.com/docs/5.3/utilities/link/)
> * [Colored links](https://getbootstrap.com/docs/5.3/helpers/colored-links/)
> * [Link opacity](https://getbootstrap.com/docs/5.3/utilities/link/#link-opacity)
> * [Link underlines](https://getbootstrap.com/docs/5.3/utilities/link/#link-underlines)
> * [Underline color](https://getbootstrap.com/docs/5.3/utilities/link/#underline-color)
> * [Underline offset](https://getbootstrap.com/docs/5.3/utilities/link/#underline-offset)
> * [Underline opacity](https://getbootstrap.com/docs/5.3/utilities/link/#underline-opacity)
> * [Hover variants](https://getbootstrap.com/docs/5.3/utilities/link/#hover-variants)

## Properties:
* `url`: URL Link
* `color`: Bootstrap includes several predefined button styles, each serving its own
          semantic purpose, with a few extras thrown in for more control.
          (primary|secondary|success|danger|warning|info|light|dark|body-emphasis)
* `opacity`: Change the alpha opacity of the link rgba() color value with utilities.
            Please be aware that changes to a color’s opacity can lead to links with
            insufficient contrast.
            (10|25|50|75|100)
* `underline_color`: Change the underline’s color independent of the link text color.
                    (primary|secondary|success|danger|warning|info|light|dark)
* `underline_offset`: Change the underline’s distance from your text. Offset is set in em
                     units to automatically scale with the element’s current font-size.
                     (1|2|3)
* `underline_opacity`: Change the underline’s opacity. Requires adding .link-underline to
                      first set an rgba() color we use to then modify the alpha opacity.
                      (0|10|25|50|75|100)
* `link_utility_classes`: An array of utility classes that can
                    be used to add extra Bootstrap utility classes or custom
                    classes to this component.

## Attributes:
* `attributes`: Drupal attributes for link.

## Slots:
* `content`: Link content.

### Examples
**Example #1:** Secondary link
```
  {% include 'vartheme_bs5:link' with {
    url: 'https://drupal.org',
    content: 'Link to Drupal site'|t,
    color: 'secondary',
  } %}
```

**Example #2:** A Read more link with to use with Cards components
```
  {% include 'vartheme_bs5:link' with {
    url: '/blog/blog-test1',
    content: 'Read more'|t,
    color: 'primary',
    link_utility_classes: ['card-link', 'float-end', 'mt-3', 'read-more']
  } %}
```

**Example #3:** Add a link for a breadcrumb item
```
  {% if item.url %}
    <li class="breadcrumb-item">
      {% include 'vartheme_bs5:link' with {
        url: item.url,
        content: item.text
      } only %}
    </li>
  {% else %}
```
