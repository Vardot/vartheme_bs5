# Checkbox

A thin wrapper around the shared `input` component that renders a Bootstrap-styled `form-check-input` checkbox.

## Bootstrap reference

> [Bootstrap 5.3 — Checks and radios](https://getbootstrap.com/docs/5.3/forms/checks-radios/)

## What it does

Use this component when you need a checkbox form element that:

- renders an `<input type="checkbox">` through the shared `vartheme_bs5:input` component
- applies the Bootstrap `form-check-input` class automatically
- accepts arbitrary HTML attributes on the input element
- lets you append extra Bootstrap utility or custom classes

## Files

- `input-checkbox.component.yml` — component schema and props
- `input-checkbox.twig` — component template
- `README.md` — usage notes and examples
- `input-checkbox.mdx` — Storybook docs page
- `input-checkbox.stories.json` — Storybook story configuration
- `input-checkbox.stories.twig` — Storybook story templates

## Props overview

### Content and attributes

- `input_checkbox_utility_classes`: array of extra Bootstrap utility or custom CSS classes added to the component; defaults to `[]`
- `children`: optional additional rendered elements
- `attributes`: HTML attributes for the input element

## Example

```twig
{% include 'vartheme_bs5:input-checkbox' with {
  input_checkbox_utility_classes: ['mt-2'],
  attributes: create_attribute({
    id: 'agree',
    name: 'agree',
    value: '1',
    checked: 'checked',
  }),
} only %}
```

## Notes

- The template always passes `input_checkbox_utility_classes: ['form-check-input']` down to the shared `input` component, so the Bootstrap checkbox class is applied even when no extra classes are provided.
- It calls the underlying `input` with `type: 'checkbox'`, `bs_form_control: false`, and `bs_size: ''`, so general form-control sizing is intentionally not applied to checkboxes.
- `attributes` defaults to an empty attribute object when not supplied.
