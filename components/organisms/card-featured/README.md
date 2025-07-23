# Featured Card

Featured card component and pattern with media and content.

It contains a media element — typically an image — on the left with a headline and text on the right.

It is a versatile pattern that contain content such as blog posts, user information, and other content types.

## Properties:
* `style_size`: Card style size. (xsmall|small|medium|large|xlarge).
* `card_border`: Add a default border for the card. (true|false).
* `padded`: Add a default padding to the card. (true|false).
* `equal_height`: Equal height (true|false)
* `anchor_all`: Anchor All (true|false)
* `media_position`: Choose the location of the media from (start|end).
* `content_vertical_alignment`: Vertical alignment of the content.
* `gutters_between`: Gutters Between - (large|small-start|small-end|no) to manage the guttering between the start and end columns.
* `columns_xs_size`: All Breakpoints - Size of two columns for all devices.
                    Starting from Extra small and up.
* `columns_sm_size`: Small Breakpoint size (sm) - Size of two columns for Small devices
                    (landscape phones, 576px and up)
* `columns_md_size`: Medium Breakpoint size (md) - Size of two columns for Medium devices
                    (tablets, 768px and up)
* `columns_lg_size`: Large Breakpoint size (lg) - Size of two columns for Large devices
                    (desktops, 992px and up)
* `columns_xl_size`: Extra Large Breakpoint size (xl) - Size of two columns for X-Large devices
                    (large desktops, 1200px and up)
* `columns_xxl_size`: Extra Extra Large Breakpoint size (xxl) - Size of two columns for XX-Large devices
                      (larger desktops, 1400px and up)
* `card_featured_utility_classes`: Use to add extra Bootstrap utility classes for the main Card wrapper.
                    E.g. `mb-3 shadow-lg` ( Do not add `card`).
* `card_featured_media_utility_classes`: Use to add extra Bootstrap utility classes for the Card Media region wrapper.
                          E.g. `bg-secondary mb-3` ( Do not add `card-img`).
* `card_featured_content_utility_classes`: Use to add extra Bootstrap utility classes for the Card Content region wrapper.
                            E.g. `w-75 mb-3 overflow-y-hidden`  ( Do not add `card-body`).

## Attributes:
* `card_attributes`: HTML attributes for the card element.
* `media_attributes`: HTML attributes for the media element.
* `content_attributes`: HTML attributes for the content element.
* `row_attributes`: HTML attributes for the row element.
* `start_column_attributes`: HTML attributes for the start column element.
* `end_column_attributes`: HTML attributes for the end column element.

## Slots:
* `media`: Card Media slot region.
* `content`: Card Content slot region.

### Options to custom:
- Full clone/copy the **Featured Card** component and [customize it in a custom theme](https://docs.varbase.vardot.com/v/10.0.x/developers/theme-development-with-varbase/customize-a-varbase-sdc-component-in-a-custom-theme)
- Minimal copy of parts of the component in a new custom component. Use for targeted selected entity type or bundle, and have the custom changes with styles(`css`) and scripts(`js`), or even with custom props and slots.

#### Example:

```
{% include 'vartheme_bs5:card-featured' with {
  style_size: medium,
  card_border: true,
  padded: true,
  equal_height: true,
  anchor_all: true,
  media_position: 'start',
  gutters_between: 'large',
  columns_xs_size: '',
  columns_sm_size: '04_08',
  columns_md_size: '',
  columns_lg_size: '',
  columns_xl_size: '06_06',
  columns_xxl_size: '',
  card_featured_utility_classes: ['bg-light', 'shadow-lg'],
  card_featured_media_utility_classes: ['bg-secondary'],
  card_featured_content_utility_classes: ['overflow-y-hidden'],
  media: media,
  content: content,
} only %}
```
