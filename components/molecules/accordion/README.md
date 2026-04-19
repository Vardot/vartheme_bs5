# Accordion

Build vertically collapsing accordions in combination with our Collapse JavaScript plugin.

> ### [Bootstrap documentation on Accordion](https://getbootstrap.com/docs/5.3/components/accordion/)
> * [Example](https://getbootstrap.com/docs/5.3/components/accordion/#example)
> * [Flush](https://getbootstrap.com/docs/5.3/components/accordion/#flush)
> * [Always open](https://getbootstrap.com/docs/5.3/components/accordion/#always-open)
> * [Accessibility](https://getbootstrap.com/docs/5.3/components/accordion/#accessibility)


### Available properties:
* `title`: The title of the accordion.
* `title_tag`: The HTML (h1, h2, h3, h4, h5, or h6) title of the accordion tag.
* `accordion_id`: Unique ID for the accordion component.
* `header_tag`: The HTML (h1, h2, h3, h4, h5, or h6) header tag of the accordion items.
* `items`: An array of accordion items inside the accordion.
         Each accordion item is an object that has (header, body) slots,
         with (id, header_tag, collapse, expanded, accordion_item_utility_classes, accordion_item_header_utility_classes,
         accordion_item_body_utility_classes, attributes, header_attributes, body_attributes) properties.
* `expanded_item_index`: The index of the accordion item which is opened by default.
                       (0 = no item, 1 = first item, 2 = second item)
* `toggle_all`: Have an expand all or collapse all option as [expand all] or [collapse all].
* `flush`: True if the accordion has no background color or borders.
* `accordion_utility_classes`: An array of utility classes that can be used to add extra
                   Bootstrap utility classes or custom classes to the root accordion wrapper.
* `accordion_title_utility_classes`: An array of utility classes that can be used to add extra
                         Bootstrap utility classes or custom classes to the title element.

### Available attributes:
* `attributes`: HTML attributes for the root accordion wrapper element.
* `title_attributes`: HTML attributes for the accordion title element.

### Available slots:
* N/A