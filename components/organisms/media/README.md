# Media

The Media component is designed to display a media item with customizable styling and options.

### Properties

* `media`: The media item, with limited access to object properties and methods.
* `name`: Name of the media.
* `view_mode`: The view mode of the media item; for example, `media_01_01` or `media_16_09`.
* `title_prefix`: Additional output displayed before the main title tag.
* `title_suffix`: Additional output displayed after the main title tag.
* `media_utility_classes`: An array of utility classes for the root element.

### Attributes

* `attributes`: HTML attributes for the containing element.
* `title_attributes`: HTML attributes for the main title tag.

### Slots

* `content`: Media content.

#### Exmaple:

```
{% include 'vartheme_bs5:media' with {
  media: media,
  media_utility_classes: [],
  content: content,
} only %}
```
