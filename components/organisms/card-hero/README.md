# Hero Card

Hero card component for a media and a text over the media.

## Properties:
* `card_border`: Add a default border to the card. (`true`|`false`)
* `padded`: Add a default padding to the card. (`true`|`false`)
* `media_position`: Choose the location of the media from (`overlay`|`start`|`end`|`top`|`bottom`).
* `horizontal_alignment`: Horizontal alignment of the content. (`start`|`center`|`end`)
* `vertical_alignment`: Vertical alignment of the content. (`start`|`center`|`end`)
* `card_hero_utility_classes`: Use to add extra Bootstrap utility classes for the main Card wrapper. E.g. `mb-3 shadow-lg` ( Do not add `card`)
* `card_hero_media_utility_classes`: Use to add extra Bootstrap utility classes for the Card Media region wrapper. E.g. `bg-secondary mb-3` ( Do not add `card-img`)
* `card_hero_content_utility_classes`: Use to add extra Bootstrap utility classes for the Card Content region wrapper. E.g. `w-75 mb-3 overflow-y-hidden`  ( Do not add `card-body`)

## Attributes:
* `card_attributes`: HTML attributes for the card element.
* `media_attributes`: HTML attributes for the content element.
* `content_attributes`: HTML attributes for the media element.

## Slots:
* `media`: Card Media slot region.
* `content`: Card Content slot region.

### Options to custom:
- Full clone/copy the **Hero Card** component and [customize it in a custom theme](https://docs.varbase.vardot.com/v/10.0.x/developers/theme-development-with-varbase/customize-a-varbase-sdc-component-in-a-custom-theme)
- Minimal copy of parts of the component and use for targeted selected entity type or bundle, and have the custom changes with styles(`css`) and scripts(`js`), or even with custom props and slots.
```
{% include 'vartheme_bs5:card-hero' with {
  card_border: true,
  padded: true,
  media_position: 'overlay',
  horizontal_alignment: 'center',
  vertical_alignment: 'center',
  card_hero_utility_classes: [],
  card_hero_media_utility_classes: [],
  card_hero_content_utility_classes: [],
  media: media,
  content: content,
} only %}
```
