# Page Title

The Page Title component is responsible for rendering the page's main heading using the h1 HTML tag.

> ## Bootstrap Documentation on Page Title
> * [Headings](https://getbootstrap.com/docs/5.3/content/typography/#headings)
> * [Display Headings](https://getbootstrap.com/docs/5.3/content/typography/#display-headings)

## Properties:
* `title`: The page title, for use in the actual content.
* `display`: When you need a heading to stand out, consider using a display
   heading—a larger, slightly more opinionated heading style.
   optional values are:
   ( display-1, display-2, display-3, display-4, display-5, display-6)
* `page_title_utility_classes`: An array of utility classes. Use this property to add
   extra Bootstrap utility classes or your custom class over to this to this component.

## Attributes:        
* `title_attributes`: HTML attributes for the page title element.

## Variables:        
* `title_prefix`: Additional output populated by modules, intended to be
                 displayed in front of the main title tag that appears in the template.
* `title_suffix`: Additional output populated by modules, intended to be
                 displayed after the main title tag that appears in the template.

## Slots:
* N/A

## Examples
Used in the `page-title.html.twig` default theme implementation for a page title.

**Example #1:** Normal Page title 
```
  {% include 'vartheme_bs5:page-title' %}
```

**Example #2:** Have a Bootstrap display class with the page title.
```
  {% include 'vartheme_bs5:page-title' with {
      display: 'display-1'
    }
  %}
```

**Example #3:** Have custom title class with the page title.
```
  {% include 'vartheme_bs5:page-title' with {
      page_title_utility_classes: ['custom-section-title1', 'custom-title2']
    }
  %}
```
