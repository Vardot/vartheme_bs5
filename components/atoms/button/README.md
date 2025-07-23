# Button

Use Bootstrap’s custom button styles for actions in forms, dialogs, and more with support for multiple sizes, states, and more.

> #### [Bootstrap Documentation on Buttons](https://getbootstrap.com/docs/5.3/components/buttons)
> * [Button tags](https://getbootstrap.com/docs/5.3/components/buttons/#button-tags)
> * [Outline buttons](https://getbootstrap.com/docs/5.3/components/buttons/#outline-buttons)
> * [Disabled state](https://getbootstrap.com/docs/5.3/components/buttons/#disabled-state)
> * [Link functionality caveat](https://getbootstrap.com/docs/5.3/components/buttons/#link-functionality-caveat)
> * [Button plugin](https://getbootstrap.com/docs/5.3/components/buttons/#button-plugin)
> * [Toggle states](https://getbootstrap.com/docs/5.3/components/buttons/#toggle-states)

## Properties:
* `html_tag`: The HTML tag to use for the button (button | a). Defaults to `button`.
* `url`: URL link for the button when the HTML tag is an anchor link.
* `color`: Bootstrap includes several predefined button styles, each serving its own
          semantic purpose, with a few extras thrown in for more control.
          (primary | secondary | success | danger | warning | info | dark | light | link)
* `outline`: (true|false) In need of a button, but not the hefty background colors they bring?
              Replace the default modifier classes with the `.btn-outline-*` ones to remove all
              background images and colors on any button.
* `size`: (btn-sm | btn-lg) Bootstrap button size
* `disabled`: (true|false) Disabled button
* `button_utility_classes`: An array of utility classes that can
                    be used to add extra Bootstrap utility classes or custom
                    classes to this component.

## Attributes:
* `attributes`: Drupal attributes for link.

## Slots:
* `content`: The content for the button

### Examples
**Example #1:** Primary button
```
{% include 'vartheme_bs5:button' with {
  html_tag: 'button',
  color: 'primary',
  content: 'Login'
} %}
```

**Example #2:** Anchor button as Read more link in a Card
```
{% include 'vartheme_bs5:button' with {
  html_tag: 'a',
  url: '/blog/blog-test1',
  content: 'Read more'|t,
  color: 'primary',
  outline: true,
  button_utility_classes: ['card-link', 'float-end', 'mt-3', 'read-more']
} %}
```

**Example #3:** Disabled Anchor button
```
{% include 'vartheme_bs5:button' with {
  html_tag: 'a',
  color: 'primary',
  content: 'Read more',
  url: '#',
  disabled: true,
} %}
```
