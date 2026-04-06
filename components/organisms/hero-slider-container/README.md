# Hero Slider Container

The **Hero Slider Container** component provides the outer Bootstrap carousel wrapper for one or more hero slides. It handles carousel behavior, navigation controls, indicators, autoplay settings, and shared slider-level options, while the individual slide content is supplied through the `slides` slot.

Use this component when you need a reusable hero banner with multiple slides and editor-friendly slide ordering.

---

# Features

- Bootstrap 5 carousel wrapper for hero slides
- Supports unlimited slides through the `slides` slot
- Optional autoplay with configurable interval
- Optional pause on hover
- Optional indicators and previous/next controls
- Supports `slide` and `fade` transitions
- Slider height presets
- Controller color options that map cleanly to Bootstrap text utility classes
- Includes a fallback state when no slides are added

---

# Component Properties

## Optional Properties

### `bg_edge2edge`
Controls whether the slider background spans edge to edge.

Options:

```yaml
true
false
```

Default:

```yaml
true
```

---

### `transition`
Defines the carousel transition style.

Options:

```yaml
slide
fade
```

Default:

```yaml
slide
```

---

### `autoplay`
Enables automatic slide rotation.

Options:

```yaml
true
false
```

Default:

```yaml
true
```

---

### `interval_ms`
Autoplay interval in milliseconds.

Example values:

```yaml
3000
5000
8000
```

Default:

```yaml
5000
```

---

### `pause_on_hover`
Pauses autoplay when the pointer is over the slider.

Options:

```yaml
true
false
```

Default:

```yaml
true
```

---

### `show_indicators`
Shows or hides the indicator dots below the slider.

Options:

```yaml
true
false
```

Default:

```yaml
true
```

---

### `show_controls`
Shows or hides the previous/next controls and pause/play button.

Options:

```yaml
true
false
```

Default:

```yaml
true
```

---

### `slider_height`
Sets a predefined slider height.

Options:

```yaml
'500'
'700'
'900'
```

Default:

```yaml
'700'
```

---

### `controller_color`
Sets the controller text color. These values are designed to align with Bootstrap utility naming in the rendered output.

Options:

```yaml
primary
light
dark
white
```

Default:

```yaml
primary
```

---

# Slots

## `slides`
Use this slot to add one or more hero slide items.

Typical usage:
- add multiple `Hero Slide` components
- reorder slides as needed
- mix overlay, split, or text-only slide layouts

---

# Usage

## Example #1: Basic hero slider with two slides

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
      content: '<p>Use separate slide items while the container handles behavior and navigation.</p>',
      button_text: 'Explore more',
      button_url: '#',
      media_position: 'overlay'
    }, with_context = false) }}
  {% endblock %}
{% endembed %}
```

---

## Example #2: Fade transition without autoplay

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
      content: '<p>Use this setup when you do not want slides to rotate automatically.</p>',
      media_position: 'none',
      background_color: 'bg-dark',
      text_color: 'text-white'
    }, with_context = false) }}
  {% endblock %}
{% endembed %}
```

---

## Example #3: Minimal slider with controls only

```twig
{% embed 'vartheme_bs5:hero-slider-container' with {
  autoplay: true,
  show_indicators: false,
  show_controls: true,
  slider_height: '900',
  controller_color: 'light'
} only %}
  {% block slides %}
    {{ include('vartheme_bs5:hero-slide', {
      active: true,
      title: 'Large visual presentation',
      content: '<p>Use a taller layout when the slider is the main hero area.</p>',
      media_position: 'overlay'
    }, with_context = false) }}
  {% endblock %}
{% endembed %}
```

---

# Notes

- The container is responsible for carousel behavior and navigation.
- Individual content, imagery, and CTA configuration belong inside each slide.
- When no slides are added, the component renders a fallback placeholder slide.
