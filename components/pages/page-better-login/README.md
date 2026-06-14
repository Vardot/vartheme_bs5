# Page Better Login

A page-level component for the Better Login layout that renders the page's above-content region while filtering out unwanted blocks.

## What it does

Prints `page.content_above` with a set of blocks removed via the Twig `without` filter. This lets the Better Login page template reuse the standard above-content region while suppressing blocks that should not appear on the login screen. The template defines no classes and produces no wrapper markup of its own.

## Files

- `page-better-login.component.yml` — component schema and props
- `page-better-login.twig` — component template
- `page-better-login.scss` — page styles (source)
- `page-better-login.css` — compiled page styles
- `README.md` — usage notes

## Props overview

- `attributes` (`Drupal\Core\Template\Attribute`) — HTML attributes for the containing element
- `without_blocks` (array) — list of block keys to exclude from `page.content_above`

## Notes

- The template renders `page.content_above|without(without_blocks)`; the `attributes` prop is declared but the current template does not emit a wrapper element using it.
- This is a page component wired up by the Better Login page template, not intended for standalone embedding.
