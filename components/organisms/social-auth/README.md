# Social Auth

Renders a list of social-network sign-in links for the Social Auth module, each with the provider logo and name.

## What it does

Iterates over a set of social-auth `networks` and, for each one, outputs a linked button containing the provider logo image and the provider name. The redirect URL is taken from the network object; when a `destination` is supplied it is appended as a query parameter so the user returns to the right place after authenticating. A custom logo path can override the provider default.

Markup structure:

- a root `<div class="social-auth">` with any passed `attributes`
- per network: `<div class="social-network {id}">` containing an `<a class="social-auth auth-link">` with the logo `<img class="social-auth auth-icon">` and an `<span class="auth-name">`

## Files

- `social-auth.component.yml` — component schema and props
- `social-auth.twig` — component template
- `social-auth.scss` — component styles (source)
- `social-auth.css` — compiled component styles
- `README.md` — usage notes

## Props overview

- `attributes` (`Drupal\Core\Template\Attribute`) — HTML attributes for the containing element; the `social-auth` class is added automatically

## Template variables

In addition to the declared prop, the template reads these context variables (provided by the Social Auth integration, not declared as schema props):

- `networks` — keyed list of social network objects to render
- `custom_networks` — optional per-network overrides, including `img_path`
- `destination` — optional redirect destination appended to each auth link
- `base_path` — site base path prepended to logo image sources

## Notes

- This component is driven by the Social Auth module's data; it is not meant to be embedded with hand-written props.
- Each link label and image alt text is translatable via `t()` with the provider name.
