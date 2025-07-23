# Text Card

Text card component and pattern with content.

## Properties:
* - `style_size`: Card style size. (xsmall|small|medium|large|xlarge).
* - `card_border`: Add a default border to the card. (true|false)
* - `padded`: Add a default padding to the card. (true|false)
* - `equal_height`: Equal height. (true|false)
* - `anchor_all`: Anchor All. (true|false)
* - `utility_classes`: Use to add extra Bootstrap utility classes for the main Card wrapper.
                       E.g. `mb-3 shadow-lg` ( Do not add `card`).
* - `content_utility_classes`: Use to add extra Bootstrap utility classes for the Card Content region wrapper.
                               E.g. `w-75 mb-3 overflow-y-hidden`  ( Do not add `card-body`).

## Attributes:
* `card_attributes`: HTML attributes for the Card element.
* `content_attributes`: HTML attributes for the content element.

## Slots:
* `content`: Card Content slot region.

### Options to custom:
- Full clone/copy the **Text Card** component and [customize it in a custom theme](https://docs.varbase.vardot.com/v/10.0.x/developers/theme-development-with-varbase/customize-a-varbase-sdc-component-in-a-custom-theme)
- Minimal copy of parts of the component and use for targeted selected entity type or bundle, and have the custom changes with styles(`css`) and scripts(`js`), or even with custom props and slots.
```
{% include 'vartheme_bs5:card-text' with {
  style_size: small,
  card_border: false,
  padded: false,
  equal_height: false,
  anchor_all: false,
  card_text_utility_classes: [],
  card_text_content_utility_classes: [],
  content: content,
} only %}
```
