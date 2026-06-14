# Video

A responsive uploaded-video player that renders a Bootstrap ratio wrapper and a `<video>` element only when a video has been selected.

## Bootstrap reference

> [Bootstrap 5.3 — Ratio helper](https://getbootstrap.com/docs/5.3/helpers/ratio/)

## What it does

Use this component when you need to:

- embed an uploaded/selected Media Library video
- constrain the player to a responsive aspect ratio
- control native lazy/eager loading
- add extra Bootstrap utility classes to the figure wrapper

## Files

- `video.component.yml` — component schema and props
- `video.twig` — component template
- `README.md` — usage notes and examples

## Props overview

### Media

- `video_file`: uploaded/selected video object (provides `src` and optional `poster`)

### Layout

- `ratio`: responsive ratio wrapper — `16x9`, `4x3`, `1x1`, `21x9`; defaults to `16x9`
- `extra_classes`: space-separated Bootstrap utility classes added to the `<figure>`; defaults to `''`

### Behavior

- `loading`: native loading behavior — `lazy` or `eager`; defaults to `lazy`

## Ratio values

| Value | Label |
|---|---|
| `16x9` | 16:9 (Wide) |
| `4x3` | 4:3 (Standard) |
| `1x1` | 1:1 (Square) |
| `21x9` | 21:9 (Ultra-wide) |

## Loading values

| Value | Label |
|---|---|
| `lazy` | Lazy |
| `eager` | Eager |

## Available attributes

- `attributes` / `figure_attributes`: attributes for the `<figure>` wrapper
- `ratio_attributes`: attributes for the responsive ratio wrapper `<div>`

## Example

```twig
{% include 'vartheme_bs5:video' with {
  video_file: {
    src: '/sites/default/files/media/sample.mp4',
    poster: '/sites/default/files/media/sample-poster.jpg'
  },
  ratio: '16x9',
  loading: 'lazy',
  extra_classes: 'rounded shadow'
} only %}
```

## Notes

- On the front end, when no video is set the component renders the `<figure>` and ratio wrapper but shows NO placeholder text — only an empty ratio box. The `<video>` element is rendered only when a video `src` is present. The picker placeholder only appears in the Canvas editor.
- The video source comes from `video_file.src`; an optional `video_file.poster` is rendered as the `poster` attribute when present.
- The `<video>` element renders with `controls` and `preload="metadata"`; its only fallback content is the "Your browser does not support the video tag." message.
- The figure is always full width (`d-block w-100`); the inner frame fills the ratio box (`w-100 h-100`).
- `extra_classes` is split on spaces and merged onto the `<figure>` wrapper.
