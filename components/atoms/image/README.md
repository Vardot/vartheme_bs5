# Image

Image component with responsive behavior for the system image.

Images in Bootstrap are made responsive with `.img-fluid`. This applies
 `max-width: 100%;` and `height: auto;` to the image so that it scales
 with the parent width.

> ## [Bootstrap Documentation on Images](https://getbootstrap.com/docs/5.3/content/images)
> * [Images](https://getbootstrap.com/docs/5.3/content/images)
> * [Responsive Images](https://getbootstrap.com/docs/5.3/content/images/#responsive-images)


## Properties:
* `align`: (optional) Align images with the helper float classes or text alignment classes.
            block-level images can be centered using the .mx-auto margin utility class.
            options (`float-start`, `mx-auto d-block`, `float-end`)
* `responsive`: (optional) Images in Bootstrap are made responsive with `.img-fluid`.
                This applies max-width with 100% and height with auto to the image so
                that it scales with the parent width.
* `thumbnails`: (optional)(true|false) In addition to Bootstrap border-radius utilities, you can
                use `.img-thumbnail` to give an image a rounded 1px border appearance.
* `rounded`: (optional)(true|false) Rounded image
* `image_utility_classes`: An array of utility classes that can
                    be used to add extra Bootstrap utility classes or custom
                    classes to this component.

## Attributes:
* `attributes`: HTML attributes for the img tag.

## Slots:
* N/A

### Examples

**Example #1:** Default system image
```
{% include 'vartheme_bs5:image' %}
```

**Example #2:** Use the Image component with Responsive image
```
{% include 'vartheme_bs5:image' with {
    responsive: true
  }
%}
```

**Example #3:** Use the Image component with align center, rounded, and thumbnails 
```
{% include 'vartheme_bs5:image' with {
    align: 'center',
    responsive: true,
    rounded: true,
    thumbnails: true
  }
%}
```

**Example #3:** Use the Image component with align center, rounded, and thumbnails 
```
{% include 'vartheme_bs5:image' with {
    align: 'center',
    responsive: true,
    rounded: true,
    thumbnails: true
    attributes: ["src": "https://raw.githubusercontent.com/Vardot/varbase_media_demo/10.0.0/content/file/coworking-1.jpg"]
  }
%}
```