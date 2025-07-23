# Dynamic Responsive Image

Vartheme BS5 Starter Kit implementation to display a dynamic responsive image

Generate (nearly) perfectly scaled (or cropped) images on-the-fly assumes the width of images is set in CSS, either directly in the wrapper-div or inherited through a parent element. Any grid system will do just fine for this.

This is an implementation for single directory component for the [Dynamic Responsive Image (or drimage)](https://www.drupal.org/project/drimage) module.

Created by [Wesley Sandra (weseze)](https://www.drupal.org/u/weseze)

### Properties:
* `url`: An optional URL the image can be linked to.
* `width`: The original width of the image.
* `height`: The original height of the image.
* `alt`: The alt text for the image.
* `data`: json encoded drimage data object
* `dynamic_responsive_image_utility_classes`: Use to add extra Bootstrap utility classes for the main wrapper.

### attributes:
* `item_attributes`: HTML attributes for the item wrapper element.
* `picture_source_attributes`: HTML attributes for the picture source element.
* `picture_img_attributes`: HTML attributes for the picture image element.
* `url_attributes`: HTML attributes for the URL element.
* `noscript_img_attributes`: HTML attributes for the No JavaScript Image element.

### slots:
 * N/A
