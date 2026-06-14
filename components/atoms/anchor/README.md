# Anchor

An invisible element with an ID you can link to with a URL fragment (e.g. `#intro`).

## What it does

Use this component when you need a reusable in-page jump target that can:

- create a valid in-page anchor from a single `id` prop
- normalize the provided value with Drupal's `clean_id` filter
- stay invisible on the frontend while remaining linkable
- show a small visually-hidden helper label (icon plus the ID) for assistive tech and editor visibility
- pair with navigation, buttons, table-of-contents links, and section headings

## Files

- `anchor.component.yml` — component schema and props
- `anchor.twig` — component template
- `README.md` — usage notes and examples
- `anchor.js` — behavior script (loaded as an ES module)
- `anchor.mdx` — Storybook docs page
- `anchor.stories.json` — Storybook story configuration
- `anchor.stories.twig` — Storybook story templates

## Props overview

### Identity

- `id` (required): string used in the URL fragment. Should begin with a letter and contain only lowercase letters, numerals, and hyphens. Example: `anchor-id`

## Example: basic anchor

```twig
{% include 'vartheme_bs5:anchor' with {
  id: 'pricing'
} only %}
```

Link to it with:

```twig
<a href="#pricing" class="btn btn-primary">Go to pricing</a>
```

## Example: anchor before a section

```twig
{% include 'vartheme_bs5:anchor' with {
  id: 'faq'
} only %}

<section class="py-5">
  <h2>Frequently Asked Questions</h2>
  <p>…</p>
</section>
```

## Notes

- The `id` prop is required and is passed through `clean_id`, so unsafe characters are normalized before output.
- The rendered `<span class="anchor">` is invisible and has `tabindex="-1"` so it is reachable as a fragment target without entering the tab order.
- The helper text (a `link-45deg` Bootstrap icon plus the raw `id`) is `visually-hidden` — intended for assistive tech and editor visibility, with no visible effect on the frontend.
- Keep anchor IDs short, readable, unique on the page, and hyphen-separated (e.g. `features`, `pricing`, `contact-us`).
- Place the anchor immediately before the heading or block you want to jump to.
