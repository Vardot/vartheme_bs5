# Icon Toggle

A single icon button for the header/navbar (or anywhere else). Clicking it overlays a popover panel holding whatever is dropped into it, without disturbing the rest of the page — sibling elements (e.g. the main menu) stay visible the whole time; clicking it again, pressing Escape, or clicking outside closes the panel.

## Bootstrap reference

> [Bootstrap 5.3 — Icons](https://getbootstrap.com/docs/5.3/extend/icons/)

This is a custom disclosure widget rather than Bootstrap's own Collapse/Offcanvas/Popover plugin, so the same markup/behavior works regardless of which icon is chosen or where the component is dropped in the header.

## What it does

Use this component when you need a header/navbar icon trigger that can:

- render as a single icon button (any Bootstrap Icon) until clicked
- reveal a popover panel containing whatever is dropped into its `content` slot — e.g. the "Exposed form: search-page" block for a search toggle
- overlay the panel in place, on top of the page, leaving sibling elements (e.g. the main menu) visible and unaffected
- close on a second click of the same button (which swaps to a close icon), on <kbd>Escape</kbd>, or on an outside click
- align the panel to the start or end side of the button (RTL-aware)
- show the panel either as a boxed popover or as an inline search bar (`panel: bar`) — one hairline-underlined line carrying the icon, the field and its own close button

## Files

- `icon-toggle.component.yml` — component schema, props, and the `content` slot
- `icon-toggle.twig` — component template
- `icon-toggle.css` — compiled component styles
- `icon-toggle.scss` — component styles source
- `icon-toggle.js` — open/close + focus behavior
- `README.md` — usage notes and examples

## Props overview

- `icon`: Bootstrap Icon name shown in the closed state (without the `bi-` prefix); swaps to a close (X) icon while the panel is open; defaults to `search`
- `label`: accessible label for the closed state (visually hidden text via `aria-label`); defaults to `Search`
- `open_label`: accessible label announced on the button while the panel is open; defaults to `Close search`
- `placement`: which side the popover panel aligns to — `end` or `start` (RTL-aware); defaults to `end`
- `expand_in_editor`: force the panel open while previewed inside the Drupal Canvas editor, so its `content` slot stays reachable for dropping components in; turn off once content is placed if the always-open panel clutters the editor view; defaults to `true`
- `panel`: how the revealed panel looks — `popover` (boxed panel under the button) or `bar` (inline search bar); defaults to `popover`

## Slots

- `content`: the content revealed in the popover. Drop the "Exposed form: search-page" component (or any other block/component) here. When left empty, a builder-friendly placeholder is shown instead.

## Example

```twig
{% embed 'vartheme_bs5:icon-toggle' with {
  icon: 'search',
  label: 'Search',
  open_label: 'Close search',
  placement: 'end',
  panel: 'bar',
} %}
  {% block content %}
    {{ drupal_block('views_exposed_filter_block:search-page') }}
  {% endblock %}
{% endembed %}
```

## Notes

- Place this component as the last item in the same flex group/row as the main menu (e.g. the header's navigation group) so it lands at "the end of the menu."
- The panel is `position: absolute`, so it overlays the page instead of pushing content around; sibling elements (e.g. the main menu) are never touched — `icon-toggle.js` only toggles the `icon-toggle--open` class on its own root and manages focus/`aria-*`.
- The toggle button's icon swaps between the configured `icon` and `bi-x-lg` in JS to signal state; `aria-expanded` and `aria-label` (via `open_label`) are kept in sync for assistive tech.
- On open, focus moves to the first text/search input found inside the `content` slot, if any. Closing with the close button or <kbd>Escape</kbd> returns focus to the trigger.
- With `panel: bar` the trigger hands over to the bar's own close button while the bar is open (it keeps its space so the header row does not reflow). From `lg` up the bar stretches across the header row, ending where the trigger sits and covering the main menu; below `lg` it becomes a full-width band directly under the header. The geometry CSS cannot know — where the header band starts, ends and bottoms out, and the room left beside the brand — is measured in `icon-toggle.js` and published as `--icon-toggle-bar-*` custom properties, re-measured on resize and scroll so a sticky header keeps the bar attached.
- In bar mode the search block's submit button is only removed visually (it stays in the tab order and readable by assistive technology); the field submits with <kbd>Enter</kbd>.
- The trigger's `transition` is deliberately narrowed to `background-color, color`. Bootstrap's transition token covers `all`, which would also animate `visibility` — a discrete property, so the trigger would keep reporting `hidden` for the whole duration after the bar closes and focus could not return to it.
- Without JavaScript the button is inert (progressive enhancement isn't meaningful for a popover trigger); this matches the theme's other JS-driven overlays (e.g. Bootstrap's own collapse/offcanvas, already loaded site-wide).
