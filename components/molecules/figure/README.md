# Figure

A semantic `<figure>` wrapper for an image with an optional caption.

## Bootstrap reference

> [Bootstrap 5.3 — Figures](https://getbootstrap.com/docs/5.3/content/figures/)

## What it does

Use this component when you need a figure element that can:

- wrap image content in a `<figure class="figure">` element
- render an optional `<figcaption class="figure-caption">` caption
- accept extra Bootstrap utility or custom classes

## Files

- `figure.component.yml` — component schema and props
- `figure.twig` — component template
- `README.md` — usage notes and examples

## Props overview

### Content

- `image`: the image content placed inside the figure
- `caption`: the figure caption content (rendered only when provided)

### Appearance

- `figure_utility_classes`: array of extra utility classes merged onto the `figure` element

## Slots

- `image` — the image content
- `caption` — the figure caption content

## Available attributes

- `attributes` — HTML attributes for the `<figure>` element (the `figure` class is added by the template)

## Example

```twig
{% embed 'vartheme_bs5:figure' with {
  figure_utility_classes: ['text-center']
} only %}
  {% block image %}
    <img src="/path/to/image.jpg" class="figure-img img-fluid rounded" alt="Descriptive alt text">
  {% endblock %}

  {% block caption %}
    A caption describing the image.
  {% endblock %}
{% endembed %}
```

## Notes

- The `figure` class is always applied and `figure_utility_classes` are merged in as an array.
- The caption block/variable is optional; when empty no `<figcaption>` is rendered.
