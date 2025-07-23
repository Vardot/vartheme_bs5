# Heading Block

A heading block is used to add headings to your page or sections.
Headings help structure your page making your content easier to
read by humans and search engines.

## Bootstrap Documentation
https://getbootstrap.com/docs/5.3/content/typography/#headings
https://getbootstrap.com/docs/5.3/content/typography/#display-headings


## Available Properties:

#### Heading Tag (`heading_tag`)
Heading HTML tag (h1, h2, h3, h4, h5, h6)

#### Display (`display`):
When you need a heading to stand out, consider using a display
heading—a larger, slightly more opinionated heading style.
optional values are: ( display-1, display-2, display-3, display-4, display-5, display-6)

#### Utility Classes (`block_heading_utility_classes`):
This property contains an array of utility classes that can be used to
add extra Bootstrap utility classes or custom classes to this component.

## Examples

**Example #1**: Template for the inline Varbase Heading block
```
{% include "vartheme_bs5:block-heading" with {
  heading_tag: heading_size['#items'].getString(),
  heading_text: label
} %}
```