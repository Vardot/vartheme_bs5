# Share

Social share buttons with native Web Share API support. This is the Vartheme BS5 override of `webshare:share`, exposed in Drupal Canvas, rendering platform icons with the Bootstrap Icons font.

## What it does

Use this component when you need a sharing UI that can:

- render share buttons for the enabled platforms (LinkedIn, Facebook, X, WhatsApp, Copy URL, and more)
- optionally show a heading above the buttons
- lay the buttons out horizontally or vertically, aligned to the start or end side (RTL-aware)
- place the buttons inline or as a sticky rail beside the content
- control visibility on mobile screens
- optionally show a native share button using the Web Share API (with a desktop copy-URL fallback)

## Files

- `share.component.yml` — component schema and props
- `share.twig` — component template
- `share.css` — compiled component styles
- `share.scss` — component styles source
- `share.js` — native share / copy-URL behavior
- `share.stories.json` — Storybook story configuration
- `share.stories.twig` — Storybook story templates
- `README.md` — usage notes and examples

## Props overview

### Heading

- `heading`: title displayed above the buttons; defaults to `Share`
- `display_title`: show the title above the buttons — `true` or `false`; defaults to `true`

### Layout

- `alignment`: which side the buttons sit on — `start` or `end` (RTL-aware); defaults to `end`
- `orientation`: lay the buttons out `horizontal` or `vertical`; defaults to `vertical`
- `placement`: `inline` keeps the buttons in the content flow; `rail-end` floats them as a sticky column beside the content; defaults to `rail-end`
- `mobile_visibility`: `all`, `hide_mobile`, or `mobile_only` (max-width 768px); defaults to `all`

### Native share

- `native_share`: render a button that opens the device share sheet via the Web Share API, falling back to copying the page URL on desktop — `true` or `false`; defaults to `false`

### Implementation props (auto-populated at render time)

- `url`: explicit URL to share; leave empty to use the current page URL; defaults to `''`
- `share_title`: title forwarded to the Web Share API payload; defaults to `''`
- `share_text`: text forwarded to the Web Share API payload; defaults to `''`

## Mobile visibility

| Value | Behavior |
|---|---|
| `all` | shown on all devices |
| `hide_mobile` | adds `webshare--hide-mobile` |
| `mobile_only` | adds `webshare--mobile-only` |

## Example

```twig
{% include 'vartheme_bs5:share' with {
  heading: 'Share this article',
  display_title: true,
  alignment: 'end',
  orientation: 'vertical',
  placement: 'rail-end',
  mobile_visibility: 'all',
  native_share: true,
} only %}
```

## Notes

- The root element is a `<nav>` with the classes `webshare webshare--<orientation> webshare--<placement> webshare--align-<alignment>` plus the mobile-visibility modifier; its `aria-label` falls back to `heading` or `Share this page`.
- When `display_title` is `false`, the heading is suppressed even if `heading` is non-empty.
- When rendered through Drupal Canvas no `platforms`/`url` are passed; the Twig falls back to `webshare_share_data()` to resolve the current page URL and enabled platform links. A caller that supplies these explicitly keeps full control and skips the service call.
- The `platforms` prop (an array of share-link objects) is intentionally NOT declared in the schema, because Drupal Canvas cannot match an array-of-objects shape to a field widget.
- Platform keys map to Bootstrap Icon classes (`linkedin → bi-linkedin`, `facebook_share → bi-facebook`, `x → bi-twitter-x`, `whatsapp → bi-whatsapp`, `copy → bi-clipboard`), falling through to `bi-share`.
- Copy-URL platforms render a `webshare-copy-url` button; the native share button is rendered first in the list when `native_share` is enabled.
- Boolean props (`display_title`, `native_share`) arrive as real booleans from SDC; only a presence fallback is applied in the template.
