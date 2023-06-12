# Page title

The Page Title component is responsible for rendering the page's main heading using the h1 HTML tag.

## Bootstrap Documentation
https://getbootstrap.com/docs/5.2/content/typography/#headings
https://getbootstrap.com/docs/5.2/content/typography/#display-headings


## Available Properties:

#### Display (`display`):
When you need a heading to stand out, consider using a display
heading—a larger, slightly more opinionated heading style.
optional values are: ( display-1, display-2, display-3, display-4, display-5, display-6)
https://getbootstrap.com/docs/5.2/content/typography/#display-headings

#### Utility Classes (`utility_classes`):
This property contains an array of utility classes that can be used to
add extra Bootstrap utility classes or custom classes to this component.

### Examples
Used in the `page-title.html.twig` default theme implementation for a page title.

**Example #1:** Normal Page title 
```
  {% include 'vartheme_bs5:page-title' %}
```

**Example #2:** Have a Bootstrap display class with the page title.
```
  {% include 'c:page-title' with {
      display: 'display-1'
    }
  %}
```

**Example #3:** Have custom title class with the page title.
```
  {% include 'vartheme_bs5:page-title' with {
      utility_classes: ['custom-section-title1', 'custom-title2']
    }
  %}
```