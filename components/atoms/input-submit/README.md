# Input Submit

A thin wrapper around the shared `input` component that renders a submit button form element.

## Bootstrap reference

> [Bootstrap 5.3 — Buttons](https://getbootstrap.com/docs/5.3/components/buttons/)

## What it does

Use this component when you need a submit input that:

- renders an `<input type="submit">` through the shared `vartheme_bs5:input` component
- accepts arbitrary HTML attributes on the input element
- lets you append extra Bootstrap utility or custom classes

## Files

- `input-submit.component.yml` — component schema and props
- `input-submit.twig` — component template
- `README.md` — usage notes and examples
- `input-submit.mdx` — Storybook docs page
- `input-submit.stories.json` — Storybook story configuration
- `input-submit.stories.twig` — Storybook story templates

## Props overview

### Content and attributes

- `input_submit_utility_classes`: array of extra Bootstrap utility or custom CSS classes added to the component; defaults to `[]`
- `children`: optional additional rendered elements
- `attributes`: HTML attributes for the input element

## Example

```twig
{% include 'vartheme_bs5:input-submit' with {
  input_submit_utility_classes: ['btn', 'btn-primary'],
  attributes: create_attribute({
    name: 'op',
    value: 'Submit',
  }),
} only %}
```

## Notes

- The template normalizes `input_submit_utility_classes` to an empty array when not provided, then forwards it to the shared `input` component as `input_utility_classes`.
- It calls the underlying `input` with `type: 'submit'`.
- `attributes` defaults to an empty attribute object when not supplied.
