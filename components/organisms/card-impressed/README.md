# Impressed Card

Impressed card component and pattern.

It contains a media element — typically an image — on the top with a headline and text on the bottom.

It is a versatile pattern that contain content such as blog posts, user information, and other content types.

### Properties:
* `style_size`: Card style size (xsmall|small|medium|large|xlarge).
* `card_border`: Card Border (true|false)
* `padded`: Add a default padding to the card. (true|false)
* `equal_height`: Equal height (true|false)
* `anchor_all`: Anchor All (true|false)
* `media_position`: Choose the location of the media from (top|bottom).
* `card_attributes`: Drupal attributes for featured card wrapper.
* `media_attributes`: Drupal attributes for card media slot region.
* `content_attributes`: Drupal attributes for card content slot region.
* `card_impressed_utility_classes: Use to add extra Bootstrap utility classes for the main Card wrapper. E.g. `mb-3 shadow-lg` ( Do not add card)
* `card_impressed_media_utility_classes`: Use to add extra Bootstrap utility classes for the Card Media region wrapper. E.g. `bg-secondary mb-3` ( Do not add card-img)
* `card_impressed_content_utility_classes`: Use to add extra Bootstrap utility classes for the Card Content region wrapper. E.g. `w-75 mb-3 overflow-y-hidden`  ( Do not add card-body)

### Slots:
* `media`: Card Media slot region.
* `content`: Card Content slot region.

### Options to custom:
- Full clone/copy the **Impressed Card** component and [customize it in a custom theme](https://docs.varbase.vardot.com/v/10.0.x/developers/theme-development-with-varbase/customize-a-varbase-sdc-component-in-a-custom-theme)
- Minimal copy of parts of the component and use for targeted selected entity type or bundle, and have the custom changes with styles(`css`) and scripts(`js`), or even with custom props and slots.
```
{% include 'vartheme_bs5:card-impressed' with {
  style_size: medium,
  card_border: false,
  padded: false,
  equal_height: true,
  anchor_all: true,
  media_position: 'top',
  card_impressed_utility_classes: [],
  card_impressed_media_utility_classes: [],
  card_impressed_content_utility_classes: [],
  media: media,
  content: content,
} only %}
```
