# Anchor

The **Anchor component** renders an invisible in-page target that can be linked to with a URL fragment such as `#overview` or `#pricing`.

It is useful for long landing pages, documentation pages, FAQ sections, and one-page layouts where you want buttons, menus, or table-of-contents links to jump to a specific section.

In the editor, the component becomes visible with a small helper label so content authors can identify the anchor location more easily.

---

# Features

- Creates a valid in-page jump target with an `id`
- Automatically cleans the provided value using Drupal's `clean_id`
- Invisible on the frontend
- Visible helper label in the editor only
- Easy to pair with navigation, buttons, and section links

---

# Component Properties

## Required

### `id`

The anchor ID used in the page URL fragment.

Example:

```text
pricing
```

This can be linked to as:

```text
#pricing
```

Recommended format:

- start with a letter
- use lowercase letters
- use numbers if needed
- separate words with hyphens

Examples:

```text
intro
pricing
faq
contact-us
plans-2026
```

---

# Usage

## Basic Anchor

```twig
{% include 'vartheme_bs5:anchor' with {
  id: 'pricing'
} %}
```

---

## Linking to the Anchor

```twig
<a href="#pricing" class="btn btn-primary">Go to pricing</a>
```

---

## Using With a Section

```twig
{% include 'vartheme_bs5:anchor' with {
  id: 'faq'
} %}

<section class="py-5">
  <h2>Frequently Asked Questions</h2>
  <p>...</p>
</section>
```

---

# Best Practices

- Keep anchor IDs short and readable
- Use unique IDs on the page
- Prefer hyphen-separated words instead of spaces or underscores
- Place the anchor immediately before the section heading or block you want to jump to
- Use meaningful names such as `features`, `pricing`, `testimonials`, or `contact`

---

# Notes

- The component uses `clean_id`, so unsafe characters are normalized before output
- The helper text is intended for editor visibility and does not affect the frontend experience
