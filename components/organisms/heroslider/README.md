# Heroslider

A slideshow component for cycling through elements images/media or slides of text—like a heroslider.

## Bootstrap reference

> [Bootstrap 5.3 — Carousel](https://getbootstrap.com/docs/5.3/components/carousel/)

## Available properties:
* `id`: Set a unique id on the heroslider for optional controls,
 especially if the single page is using multiple hero sliders.
* `items`: An array of slider items, with a formatted UI Pattern for Cards.
* `controls`: Add the previous/next controls.
* `indicators`: Add indicators to the heroslider, alongside
                the previous/next controls.
* `controls_indicators_position`: Choose the location of the media from (overlay|start|end|top|bottom).
* `interval`: The amount of time to delay between automatically cycling an item.
* `keyboard`: Whether the carousel should react to keyboard events. (true|false)
* `pause`: If set to `hover`, pauses the cycling of the carousel on mouseenter and resumes
          the cycling of the carousel on mouseleave. If set to false, hovering over the carousel
          won’t pause it. On touch-enabled devices, when set to `hover`, cycling will pause
          on touchend (once the user finished interacting with the carousel) for two intervals,
          before automatically resuming. This is in addition to the mouse behavior.
* `ride`: If set to `true`, autoplays the carousel after the user manually cycles the first item.
         If set to `carousel`, autoplays the carousel on load.
* `touch`: Whether the carousel should support left/right swipe interactions on touchscreen devices. (true|false)
* `wrap`: Whether the carousel should cycle continuously or have hard stops. (true|false)
* `heroslider_utility_classes`: An array of utility classes. Use to add extra Bootstrap
  utility classes or custom CSS classes over to the heroslider element.
* `heroslider_controls_utility_classes`: An array of utility classes. Use to add extra 
  Bootstrap utility classes or custom CSS classes over to the controls element.
* `heroslider_indicators_utility_classes`: An array of utility classes. Use to add extra
  Bootstrap utility classes or custom CSS classes over to the indicators element.


## Available attributes:
* `attributes`: HTML attributes to apply to the heroslider main wrapper tag.
* `controls_attributes`: HTML attributes to apply to the controls wrapper tag.
* `indicators_attributes`: HTML attributes to apply to the indicators wrapper tag.

## Available slots:
* `empty`: The output when the Hero Slider has no slides (empty).


## Examples:

### Example 1:
Pass rows for the Hero Slider content type from the Hero Slider view display which uses the Hero Card for the view mode. 
```
{{ 
  include('vartheme_bs5:heroslider',
    {
      id: id,
      controls: controls ?? true,
      indicators: indicators ?? true,
      controls_indicators_position: controls_indicators_position ?? 'overlay',
      interval: interval ?? 6000,
      keyboard: keyboard ?? true,
      pause: pause ?? 'hover',
      ride: ride ?? 'carousel',
      touch: touch ?? true,
      wrap: wrap ?? true,
      items: rows ?? [],
      empty: empty
    },
    with_context = false
  )
}}
```

### Example 2:
Pass rows for the Hero Slider content type from an unformatted view display which uses the Hero Card for the view mode. 
```
{%
  include "vartheme_bs5:heroslider" with {
    id: id,
    controls: true,
    indicators: true,
    controls_indicators_position: 'start',
    interval: 6000,
    keyboard: true,
    pause: "hover",
    ride: "carousel",
    touch: true,
    wrap: true,
    items: rows[0]['#rows'] ?? [],
  }
%}
```
