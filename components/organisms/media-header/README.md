# Media Header

The universal media header style on top of web pages.

## Properties:
* `media_type`: Media entity type. (image, video, remote_video).
* `provider`: Video provider for remote videos. (youtube, video).
* `media_header_utility_classes`: An array of utility classes. Use to add extra Bootstrap utility classes or custom CSS classes over to this to this component.

## Attributes:
* N/A

## Slots:
* `page_breadcrumbs`: Media Header page breadcrumbs.
* `page_title`: Media Header page title.
* `background_media`: Background media (Image, local or remote videos).

### Examples:

#### Example #1: Default use in Varbase Media Header
```
{%
  include 'vartheme_bs5:media-header' with {
    media_type: vmh_media_type|default(''),
    provider: provider|default(''),
    background_media: vmh_background_media|default(''),
    page_breadcrumbs: vmh_page_breadcrumbs|default(''),
    page_title: vmh_page_title|default('')
  }
%}
```

#### Example #2: Page title with custom prefix
```
{%
  include 'vartheme_bs5:media-header' with {
    media_type: '',
    provider: '',
    background_media: '',
    page_breadcrumbs: breadcrumb,
    page_title: 'Custom title prefix -' ~ page_title
  }
%}
```

#### Example #3: Media Header for node with no breadcrumbs
```
{%
  include 'vartheme_bs5:media-header' with {
    media_type: '',
    provider: '',
    background_media: '',
    page_breadcrumbs: '',
    page_title: node.label
  }
%}
```
