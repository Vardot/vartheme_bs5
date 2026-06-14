# Navbar brand

The Bootstrap navbar branding element, rendering an optional logo image and brand text as either a link or a plain span.

## Bootstrap reference

> [Bootstrap 5.3 — Navbar](https://getbootstrap.com/docs/5.3/components/navbar/)

## What it does

Use this component when you need a navbar brand that can:

- render an optional logo image alongside brand text
- output a link (`<a class="navbar-brand">`) when a path is supplied, or a span (`<span class="navbar-brand h1">`) otherwise
- set an accessible `aria-label` from the brand text
- accept extra Bootstrap utility or custom classes

## Files

- `navbar-brand.component.yml` — component schema and props
- `navbar-brand.twig` — component template
- `navbar-brand.css` — compiled component styles
- `navbar-brand.scss` — component styles source
- `README.md` — usage notes and examples

## Props overview

### Content

- `text`: the brand text
- `path`: the link path; leave blank for a non-linked span
- `image_path`: the path/source for the logo image
- `width`, `height`, `alt`: dimensions and alternative text for the logo image

### Classes

- `navbar_brand_utility_classes`: array of extra Bootstrap utility or custom classes added to the brand element; defaults to `[]`

## Available attributes

- `attributes`: the component attributes array
- `brand_attributes`: HTML attributes for the brand wrapper element (the link or span)

## Example: linked brand with logo

```twig
{% include 'vartheme_bs5:navbar-brand' with {
  text: 'Vartheme',
  path: '/',
  image_path: '/themes/contrib/vartheme_bs5/logo.svg',
  width: 120,
  height: 32,
  alt: 'Vartheme logo',
  navbar_brand_utility_classes: ['fw-bold'],
} only %}
```

## Example: text-only brand (no link)

```twig
{% include 'vartheme_bs5:navbar-brand' with {
  text: 'Vartheme',
} only %}
```

## Notes

- When `path` is set, the brand renders as a link with the classes `navbar-brand d-flex align-items-center`; otherwise it renders as a span with `navbar-brand h1 mb-0`.
- The logo image is only rendered when `image_path` is supplied, and is output with the `brand-logo-image` class.
- The component declares library dependencies on `vartheme_bs5/bs-collapse-script` and `vartheme_bs5/bs-dropdown-script`.
