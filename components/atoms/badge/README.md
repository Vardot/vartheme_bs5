# Badge

Documentation and examples for badges, our small count and labeling component.

> #### [Bootstrap Documentation on Badges](https://getbootstrap.com/docs/5.3/components/badge/)
> * [Headings](https://getbootstrap.com/docs/5.3/components/badge/#headings) Badges scale to match the size of the immediate parent element.
> * [Background colors](https://getbootstrap.com/docs/5.3/components/badge/#background-colors) to make badges more rounded 
> * [Pill badges](https://getbootstrap.com/docs/5.3/components/badge/#pill-badges)
> * [Buttons](https://getbootstrap.com/docs/5.3/components/badge/#buttons): Badges can be used as part of links or buttons to provide a counter.
> * [Positioned](https://getbootstrap.com/docs/5.3/components/badge/#positioned)

## Properties:
* `html_tag`: The HTML tag to use for the badge. Defaults to span.
* `color`: Background and Text Color.Set a background-color with contrasting
          foreground color with our .text-bg-{color} helpers. Previously it
          was required to manually pair your choice of .text-{color}
          and .bg-{color} utilities for styling,
				  which you still may use if you prefer.
          (primary | secondary | success | info |
          warning | danger | light | dark)
* `url`: The HTML tag will automatically be set to a if an anchor is added to the URL.
* `badge_utility_classes`: An array of utility classes that can
                    be used to add extra Bootstrap utility classes or custom
                    classes to this component.

## Attributes
* N/A

## Slots
* `content`: The content of the badge.


### Examples
**Example #1:** New post badge.
```
  {% include 'vartheme_bs5:badge' with {
    html_tag: 'a',
    color: 'text-bg-primary',
    url: forum.new_url,
    content: forum.new_text
  } %}
```

**Example #2:** Pill badges with success content
```
  {% include 'vartheme_bs5:badge' with {
    html_tag: 'span',
    color: 'text-bg-success'
    content: 'Success',
    badge_utility_classes: ['rounded-pill']
  } %}
```
