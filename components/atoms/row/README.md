# Row

The Row component is a Bootstrap-based layout wrapper for building grid rows in Drupal. It supports standard `.row` behavior, responsive row column presets, alignment controls, optional container wrapping, background utilities, and Bootstrap spacing utilities.

## Features

- Bootstrap `.row` output
- Optional `container` or `container-fluid` wrapper
- Gutter control using Bootstrap grid gap utilities
- Responsive `row-cols-*` settings for mobile and desktop
- Vertical alignment and horizontal distribution controls
- Background color utility support
- Optional background image with overlay color and opacity
- Edge-to-edge background option with `bg-edge2edge`
- Top and bottom padding and margin utilities

## Available settings

### Layout
- **Container**: `none`, `container`, `container-fluid`
- **Grid gap**: `0` to `5`
- **Columns on mobile**: `none`, `1` to `6`
- **Columns on desktop**: `none`, `1` to `6`
- **Vertical alignment**: `align-items-start`, `align-items-center`, `align-items-end`, `align-items-stretch`
- **Horizontal distribution**: `justify-content-start`, `justify-content-center`, `justify-content-end`, `justify-content-between`, `justify-content-around`, `justify-content-evenly`

### Background
- **Background color**: Bootstrap background utility classes
- **Background edge-to-edge**: adds `bg-edge2edge`
- **Background image**: optional Canvas image field
- **Background overlay color**: `none`, `dark`, `light`
- **Background overlay opacity**: `0`, `25`, `50`, `75`, `100`

### Spacing
- **Padding top**: `pt-0` to `pt-5`
- **Padding bottom**: `pb-0` to `pb-5`
- **Margin top**: `mt-0` to `mt-5`
- **Margin bottom**: `mb-0` to `mb-5`

## Example usage

### Simple two-column row

```twig
{% embed 'vartheme_bs5:row' with {
  container_type: 'container',
  gutter: '3',
  columns_mobile: '1',
  columns_desktop: '2',
  padding_block_start: 'pt-4',
  padding_block_end: 'pb-4'
} %}
  {% block content %}
    <div class="col">
      <div class="p-3 border rounded">Column one</div>
    </div>
    <div class="col">
      <div class="p-3 border rounded">Column two</div>
    </div>
  {% endblock %}
{% endembed %}
```

### Centered card grid

```twig
{% embed 'vartheme_bs5:row' with {
  container_type: 'container',
  gutter: '4',
  columns_mobile: '1',
  columns_desktop: '3',
  align_items: 'align-items-stretch',
  justify_content: 'justify-content-center',
  background_color: 'bg-light',
  padding_block_start: 'pt-5',
  padding_block_end: 'pb-5'
} %}
  {% block content %}
    <div class="col"><div class="p-4 border rounded bg-white h-100">Card 1</div></div>
    <div class="col"><div class="p-4 border rounded bg-white h-100">Card 2</div></div>
    <div class="col"><div class="p-4 border rounded bg-white h-100">Card 3</div></div>
  {% endblock %}
{% endembed %}
```

### Full-bleed promotional row

```twig
{% embed 'vartheme_bs5:row' with {
  container_type: 'container',
  gutter: '3',
  background_color: 'bg-dark',
  bg_edge2edge: true,
  padding_block_start: 'pt-5',
  padding_block_end: 'pb-5'
} %}
  {% block content %}
    <div class="col-12 text-center text-white">
      <h2 class="mb-3">Promotional section</h2>
      <p class="mb-0">Use the wrapper background utilities without custom CSS.</p>
    </div>
  {% endblock %}
{% endembed %}
```

## Notes

- Child columns should still use Bootstrap column classes such as `col`, `col-md-6`, or `col-lg-4` unless you are using the row column presets.
- The background image is applied on the outer wrapper, not on the `.row` element itself.
- Top and bottom spacing utilities are applied on the outer wrapper so they affect the whole section consistently.
