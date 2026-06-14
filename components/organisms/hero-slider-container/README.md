# Hero Slider (Container)

A Bootstrap 5 carousel wrapper for Hero Slide items, handling transitions, autoplay, indicators, prev/next controls, height, and controller color, while slide content is supplied through a slot.

## What it does

Use this component when you need a hero banner that can:

- wrap one or more `vartheme_bs5:hero-slide` components as carousel slides
- accept unlimited slides through the `slides` slot (drag-and-drop reorder in Canvas)
- toggle autoplay with a configurable interval and pause-on-hover
- show or hide indicators and previous/next (plus pause/play) controls
- switch between `slide` and `fade` transitions
- set a fixed slider height preset and a controller color
- optionally span the background full width with `bg-edge2edge`
- render a fallback placeholder slide when no slides are added

## Files

- `hero-slider-container.component.yml` — component schema and props
- `hero-slider-container.twig` — component template
- `hero-slider-container.scss` / `hero-slider-container.css` — component styles
- `hero-slider-container.js` — carousel behavior (pause/play, navigation)
- `README.md` — usage notes and examples
- `hero-slider-container.mdx` — Storybook docs page
- `hero-slider-container.stories.json` — Storybook story configuration
- `hero-slider-container.stories.twig` — Storybook story templates

## Props overview

### Behavior

- `transition`: carousel transition — `slide`, `fade`; defaults to `slide`
- `autoplay`: enable automatic rotation; defaults to `true`
- `interval_ms`: autoplay interval in milliseconds (1000–60000); defaults to `5000`
- `pause_on_hover`: pause autoplay on pointer hover; defaults to `true`

### Navigation

- `show_indicators`: show the indicator dots; defaults to `true`
- `show_controls`: show prev/next and pause/play controls; defaults to `true`
- `controller_color`: controller color — `primary`, `light`, `dark`, `white`; defaults to `primary`

### Layout

- `bg_edge2edge`: full-width edge-to-edge background; defaults to `true`
- `slider_height`: fixed height preset in px — `500`, `700`, `900`; defaults to `700`

## Slider height values

| Value | Output |
|---|---|
| `500` | 500px |
| `700` | 700px (default) |
| `900` | 900px |

## Slots

- `slides`: add one or more `vartheme_bs5:hero-slide` components here (unlimited, drag-and-drop reorder)

## Example: basic slider with two slides

```twig
{% embed 'vartheme_bs5:hero-slider-container' with {
  transition: 'slide',
  autoplay: true,
  interval_ms: 5000,
  pause_on_hover: true,
  show_indicators: true,
  show_controls: true,
  slider_height: '700',
  controller_color: 'primary'
} only %}
  {% block slides %}
    {{ include('vartheme_bs5:hero-slide', {
      active: true,
      title: 'Build faster with reusable components',
      content: '<p>Create flexible pages using consistent slider patterns.</p>',
      button_text: 'Get started',
      button_url: '#',
      media_position: 'overlay'
    }, with_context = false) }}

    {{ include('vartheme_bs5:hero-slide', {
      active: false,
      title: 'Keep content clean and scalable',
      content: '<p>Use separate slide items while the container handles behavior.</p>',
      button_text: 'Explore more',
      button_url: '#',
      media_position: 'overlay'
    }, with_context = false) }}
  {% endblock %}
{% endembed %}
```

## Example: fade transition without autoplay

```twig
{% embed 'vartheme_bs5:hero-slider-container' with {
  transition: 'fade',
  autoplay: false,
  show_indicators: true,
  show_controls: true,
  slider_height: '500',
  controller_color: 'white'
} only %}
  {% block slides %}
    {{ include('vartheme_bs5:hero-slide', {
      active: true,
      title: 'Manual navigation mode',
      content: '<p>Use this setup when slides should not rotate automatically.</p>',
      media_position: 'none',
      background_color: 'bg-dark',
      text_color: 'text-white'
    }, with_context = false) }}
  {% endblock %}
{% endembed %}
```

## Notes

- The container exposes shared context to nested slides, including `hero_slider_media_position` (defaults to `overlay`) and `hero_slider_container_type` (defaults to `container`).
- When `autoplay` is enabled, the carousel renders `data-bs-ride="carousel"` and `data-bs-interval` from `interval_ms`; when disabled, `data-bs-interval` is set to `false`.
- `pause_on_hover` sets `data-bs-pause` to `hover` or `false`.
- The navigation block is only rendered when `show_indicators` or `show_controls` is enabled.
- Boolean props are validated by SDC and arrive as real booleans; only a presence fallback is applied in the template.
- When the `slides` slot is empty, a fallback placeholder slide is rendered prompting the editor to add Hero Slide components.
