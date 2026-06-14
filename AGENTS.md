# AGENTS.md — Vartheme BS5 component authoring standard

Guidance for AI agents (and humans) creating or changing **Single Directory
Components (SDC)** in this theme so every component stays consistent and
Drupal Canvas–ready. This file follows the [agents.md](https://agents.md)
convention; `CLAUDE.md` imports it.

> **Canonical reference:** `components/atoms/section/section.twig`. When in
> doubt, copy its structure, comment style, and ordering. Read it first.

> **Read the source when you need depth.** This file is the *contract*, not the
> whole truth. When a task needs more than it states — an exact API, an edge
> case, the real migration logic, a Bootstrap option — **open the relevant
> resource in §0 and read it; do not guess or invent.** Verify a claim against
> the code/docs before acting on it.

---

## 0. Resources — read these when you need depth

| Topic | Read this | When |
| --- | --- | --- |
| Component template pattern | `components/atoms/section/section.twig` (in this theme) | Before writing/changing any `.twig`. |
| A component's real props/enums | that component's `*.component.yml` | Before referencing any prop — never assume. |
| Starterkit / sub-theme | `starterkit.md` (this theme) + [Varbase: theme development](https://docs.varbase.vardot.com/developers/theme-development-with-varbase) and [creating-your-own-theme](https://docs.varbase.vardot.com/developers/theme-development-with-varbase/creating-your-own-theme) | Generating/configuring a sub-theme. |
| Vartheme BS5 architecture | [understanding-vartheme-bs5](https://docs.varbase.vardot.com/developers/theme-development-with-varbase/understanding-vartheme-bs5) | SCSS/SDC/CVA/build structure questions. |
| Theme-switch & component migration | `varbase_components` 4.0.x — `src/EventSubscriber/ActiveThemeChangeSubscriber.php`, `src/Commands/VarbaseComponentsCommands.php` (<https://git.drupalcode.org/project/varbase_components/-/tree/4.0.x>) + [troubleshooting-theme-switch-issues](https://docs.varbase.vardot.com/developers/theme-development-with-varbase/troubleshooting-theme-switch-issues) | Component IDs, version hashes, `auto_switch_components`, migration. |
| Storybook | [integration-of-varbase-with-storybook](https://docs.varbase.vardot.com/developers/theme-development-with-varbase/integration-of-varbase-with-storybook) + live demo <https://storybook.demo.varbase.vardot.com/> | Stories, `ddev init-storybook`, running on :6006. |
| Preloaded fonts | [add-preloaded-fonts-in-vartheme](https://docs.varbase.vardot.com/developers/theme-development-with-varbase/add-preloaded-fonts-in-vartheme) | Adding `@font-face` + preload. |
| Theming tools install | [manually-install-needed-theming-tools](https://docs.varbase.vardot.com/developers/theme-development-with-varbase/manually-install-needed-theming-tools) | Node 20.x / Yarn / build deps setup. |
| Drupal SDC | <https://www.drupal.org/docs/develop/theming-drupal/using-single-directory-components> | `attributes`, slots, props, library auto-attach behaviour. |
| Drupal Canvas | the installed `drupal/canvas` module + its REST API under `/canvas/api/v0/` | Component versions, content templates, page authoring. |
| Bootstrap 5.3 | <https://getbootstrap.com/docs/5.3/> | Utilities, components, SCSS variables, breakpoints. |
| This convention | [agents.md](https://agents.md) | The AGENTS.md format itself. |

When a section below says "→ read X", consult X before acting.

---

## 1. Scope — what to touch and what NOT to touch

Apply this standard to **SDC components** (a directory with a
`*.component.yml` + `*.twig`) under `components/atoms`, `components/molecules`,
`components/organisms`, `components/pages`, and `components/templates`.

**Never restructure / keep upstream-unchanged:**

- `components/foundation/**` — Storybook foundation/reference pages.
- `components/getting-started/**` — Storybook intro pages.
- `components/base/root/**` — empty root-variables component.

These are demo/reference stubs; leave their `.twig` and docs exactly as
shipped upstream.

---

## 2. Template structure & ordering (mirror section.twig)

Every component `.twig` is written in this exact order:

```twig
{#
/**
 * @file
 * Vartheme BS5 Starter Kit implementation for the <Name> component.
 *
 * <Short description.>
 *
 * Available properties:
 * - prop_name: <description>. (<enum a | enum b>) Defaults to `<default>`.
 *
 * Available attributes:
 * - attributes: HTML attributes for the root element.
 * - <region>_attributes: HTML attributes for the <region> element.
 *
 * Available slots:
 * - slot_name: <description>.
 */
#}

{# AI guidance:
 # - Do not alter property descriptions or existing logic unless new
 #   properties are added.
 # - Keep the structure: 1) variables, 2) logical variable manipulations,
 #   3) print the HTML.
 # - Always handle classes as arrays with `merge` (never string
 #   concatenation) to avoid duplicate classes and data type conflicts.
 #}

{# Variables: scalar props with schema defaults. #}
{% set x = x|default('...') %}

{# Variables: boolean props.
 # SDC validates `type: boolean` props and applies their schema defaults,
 # so the values arrive as real booleans — only a presence fallback is
 # needed here, never type coercion.
 #}
{% set flag = flag ?? false %}

{# Logic: merge classes as arrays. #}
{% set classes = ['base-class', flag ? 'active' : '']|merge(other_classes) %}
{% set attributes = attributes.addClass(classes) %}

{# Print the HTML. #}
<tag{{ attributes }}> ... </tag>
```

- `@file` first descriptive line is **exactly**
  `Vartheme BS5 Starter Kit implementation for the <Name> component.`
  (`<Name>` = the human title, e.g. `Card Hero`, `Badge`).
- Copy the **AI guidance** comment block verbatim from section.twig.
- Sections: `Variables` (scalars first, then booleans) → `Logic` → `Print`.

---

## 3. The `attributes` rule (most important)

Drupal SDC **automatically provides** an `attributes` object
(`Drupal\Core\Template\Attribute`) to every component — both for top-level
render and for `include('vartheme_bs5:<name>', …)` sub-components.
(→ read §0 "Drupal SDC" if unsure how `attributes`/slots/props are injected.)

1. **Do NOT add** `{% set attributes = attributes|default(create_attribute()) %}`
   for the root — it is redundant. (Verified: SDC always provides it.)
2. The component's **outermost / root element uses the provided
   `attributes`**, applied via a `set` then printed bare — never inline:

   ```twig
   {% set attributes = attributes.addClass(classes) %}
   <div{{ attributes }}>      {# correct: set in logic, bare at print #}
   ```
   ```twig
   <div{{ attributes.addClass(classes) }}>   {# WRONG: inline addClass at print #}
   <div{{ create_attribute().addClass(classes) }}>  {# WRONG: anonymous #}
   <div{{ card_attributes }}>  {# WRONG: custom-named object on the root #}
   ```
3. **Named `*_attributes` objects are only for nested / non-root elements**
   (media wrapper, content body, overlay, footer, columns, …). Initialise
   them lazily so callers can pass their own:
   ```twig
   {% if not media_attributes %}
     {% set media_attributes = create_attribute() %}
   {% endif %}
   {% set media_attributes = media_attributes.addClass(media_classes) %}
   <div{{ media_attributes }}> … </div>
   ```
4. Route **static markup attributes** (`id`, `tabindex`, `role`, `data-*`,
   `aria-*`) through the attribute object too — never hard-code them inline:
   `attributes.setAttribute('id', id|clean_id).setAttribute('tabindex', -1)`.
   Print bare `<span{{ attributes }}>`.
5. Loops / recursion: create the attribute object **fresh inside each
   iteration** so per-item `id`/`aria`/`class` stay correct and don't
   accumulate.
6. Declare every `*_attributes` object you use in the docblock
   `Available attributes:` list.

---

## 4. Classes

- Build class lists as **arrays** merged with `|merge`. Never string
  concatenation, never `class="{{ a }} {{ b }}"`.
- No empty-string / `null` array members from else-less ternaries — use
  `cond ? 'x' : ''` then a `|filter(v => v is not empty)`, or a conditional
  `|merge(['x'])`.
- Value→class mapping (`'col-md-' ~ md`, `preset_map[key]`) is fine — that is
  render logic, not concatenation of the class *list*.

---

## 5. Trust SDC prop validation — do not re-validate

SDC validates props against the `*.component.yml` schema (types + enums) and
applies their defaults. Therefore:

- **Booleans:** `{% set flag = flag ?? <yml-default> %}`. Never coerce
  strings (`((flag ?? false) ~ '')|lower|trim in ['1','true',…]` is banned).
- **Enums:** never re-check membership (`{% if x not in ['a','b'] %}…`); trust
  the value. Keep only the logic that *maps* a value to output.
- Scalars: `{% set x = x|default('<yml-default>') %}` (presence fallback only).
- Do **not** edit `*.component.yml` unless you are genuinely adding a prop;
  keep `examples:` matching `default:` so Canvas stores default inputs.

---

## 6. README per component

Each SDC component directory (except the §1 untouched dirs) has a `README.md`
following `components/atoms/section/README.md`:

`# Name` + one-line intro → `## Bootstrap reference` (a `> [Bootstrap 5.3 —
<Label>](https://getbootstrap.com/docs/5.3/…)` blockquote when the component
maps to a Bootstrap component/utility) → `## What it does` → `## Files` →
`## Props overview` / `## Slots` → `## Example` → `## Notes`. Use the **real**
props/enums/defaults from the `.component.yml`. Keep getbootstrap.com links
correct (valid page **and** `#fragment`).

---

## 7. Special cases (do not "normalise" these away)

- **`molecules/dynamic-responsive-image`** (drimage): the field formatter
  provides **`item_attributes`** for the wrapper, not the SDC `attributes`.
  Keep `<div{{ item_attributes }}>{% apply spaceless %}` with its
  `{% if not item_attributes %}` guard.
- **`atoms/field`**: branch-specific `attributes.addClass(classes, 'field__item')`
  inside `{% for %}` loops stays inline — a cumulative `{% set %}` would wrongly
  accumulate classes across iterations.
- **Page-level Drupal templates** (`pages/page`, `pages/page-user-*`): Drupal
  does **not** pass `attributes` to page templates. Build local `*_classes`
  arrays and print `class="{{ x_classes|join(' ') }}"`; do not invent
  `attributes` there. Entity/views/field/comment/form templates **do** receive
  `attributes` — use it.

---

## 8. Workflow & verification

- **Mirror every change** to the products copy:
  `/var/www/html/products/vartheme_bs5/` (same sub-path).
- After editing: `drush cr`, then render the affected component(s) and the
  demo pages. Target **zero** Twig/PHP errors, **zero** Canvas component
  version-mismatch warnings, and **zero** browser-console errors. (Benign
  theme font-preload + drimage `srcset`-placeholder warnings are expected.)
- Editing a component's `.twig`/`.component.yml` changes its Canvas component
  **version hash**. If demo content / `canvas.content_template.*` pins an old
  hash you'll see "version … not found, falling back to active" warnings — fix
  them with the official command:
  `drush varbase-components:fix-versions <theme>` (corrects stored hashes that
  reference old snapshots).
- Tests: `tests/features/09-drupal-canvas/components/*.feature` (self-seeding
  via `tests/step-definitions/drupal-canvas.steps.js`). Run
  `npx cucumber-js --dry-run` (no undefined/ambiguous) then the suite.

---

## 9. Do / Don't checklist

**Do**
- **Bootstrap-first:** use ready Bootstrap 5.3 classes + `--bs-*` / `$bs`
  variables; write new CSS only for genuine special cases (and build it from
  Bootstrap tokens). See §11.
- Mirror section.twig structure, ordering, and comments.
- Root → provided `attributes`; nested → named `*_attributes`.
- `set` the attribute object in Logic, print it **bare** `<tag{{ attributes }}>`.
- Classes as `|merge` arrays; booleans `?? default`; scalars `|default`.
- Add a Bootstrap-referenced README; mirror to products; run tests.

**Don't**
- Don't add `attributes|default(create_attribute())` for the root.
- Don't use inline `{{ attributes.addClass(...) }}` at the print, an anonymous
  `create_attribute()` root, or a custom-named root object.
- Don't string-coerce booleans or re-validate enums.
- Don't string-concatenate the class list.
- Don't reinvent what Bootstrap already provides (colors, spacing, radii,
  shadows, breakpoints, components) — use the Bootstrap class/variable.
- Don't edit `components/foundation`, `components/getting-started`, or
  `components/base/root`.
- Don't run a git commit unless explicitly asked.

---

# Part B — Component files: styling, JavaScript & build

Vartheme BS5 is a **Drupal starterkit theme**: developers generate a sub-theme
from it and inherit these conventions. Keep every component self-contained and
on-standard so generated themes stay consistent.

## 10. Component directory layout

One directory per component; files share the component machine name:

```
components/<atoms|molecules|organisms|pages|templates>/<name>/
├── <name>.component.yml     # SDC schema: name, status, description, props, slots,
│                            #   libraryOverrides, examples (examples MUST match defaults).
├── <name>.twig              # template (see Part A).
├── <name>.scss              # SOURCE styles (edit this).
├── <name>.css               # COMPILED from .scss — do NOT hand-edit (build output).
├── <name>.js                # behaviour (Drupal.behaviors + once), optional.
├── README.md                # docs (see §6).
├── <name>.stories.json      # Storybook story config (optional).
└── <name>.stories.twig      # Storybook story template (optional).
```

SDC **auto-attaches** `<name>.css` and `<name>.js` to the component — you do not
register them in `*.libraries.yml`. Add only library *dependencies* (e.g.
`core/drupal`, `core/once`) via `libraryOverrides.dependencies` in the
`*.component.yml`.

## 11. SCSS / CSS conventions

**Bootstrap-first — this is the default, logical approach.** Bootstrap 5.3
already ships almost everything. Reach for custom CSS only when nothing
built-in expresses the need. Decision order, top to bottom — stop at the first
that works:

1. **A ready Bootstrap 5.3 utility / component class** in the Twig markup
   (`d-flex`, `gap-3`, `text-center`, `rounded-3`, `shadow`, `col-md-6`,
   `btn btn-primary`, `card`, `ratio ratio-16x9`, …). → read §0 "Bootstrap 5.3".
2. **A ready Bootstrap CSS custom property** (`--bs-*`) or **SCSS variable**
   (`$spacer`, `$primary`, `$border-radius`, `$font-weight-bold`) — reference
   these so the component follows the active (sub-)theme automatically.
3. **Only as a genuine special case**, write new SCSS — and even then build it
   from the Bootstrap tokens above (expose component-local `--name-*` custom
   properties computed from `$bs`/`--bs-*`), never hard-coded magic values.

If you're adding a custom color, size, radius, shadow, or breakpoint that
Bootstrap already defines, you're doing it wrong — use the Bootstrap one.

- **Edit `.scss`, never `.css`.** `.css` is webpack/dart-sass build output.
  Rebuild with `yarn components:build` (or `yarn theme:full-build`); stylelint
  `--fix` runs as part of the build. Never commit a hand-edited `.css`.
- Start each SCSS file with a `// @file` header describing the component.
- `@import "../../defaults";` (`components/_defaults.scss`) to get Bootstrap 5
  variables, functions, and mixins.
- **Theme through tokens — no hard-coded visual values.** Every visual value
  flows through:
  - Bootstrap **SCSS** variables at compile time: `#{$spacer * 2.5}`,
    `$primary`, `$border-radius-sm`, `$font-weight-bold`; and/or
  - Bootstrap **CSS custom properties** at runtime: `var(--bs-primary)`,
    `var(--bs-secondary-bg)`, `var(--bs-border-radius)`.
  Expose component-local tokens as CSS custom properties on the block root and
  reference them everywhere, e.g.:
  ```scss
  .webshare {
    --webshare-button-size: #{$spacer * 2.5};
    --webshare-button-bg: var(--bs-secondary-bg);
  }
  ```
  This makes components inherit the active (sub-)theme automatically — light/dark
  and brand changes "just work".
- **Naming: BEM, namespaced to the component block.** Block `.webshare`,
  element `.webshare__item`, modifier `.webshare--vertical`. Do not leak generic
  class names. Prefer Bootstrap utility classes in the Twig markup; reserve SCSS
  for what utilities can't express.
- **Variants via CVA (Class Variance Authority).** Vartheme BS5 manages
  component variants with structured class definitions: a base class plus size
  and color/style variant classes (e.g. button → base `btn`, size `btn-sm`/
  `btn-lg`, variant `btn-primary`/`btn-secondary`). Build variant class lists
  from enum props this way (still as `|merge` arrays in Twig).
  (→ read §0 "Vartheme BS5 architecture" for the CVA/SCSS structure.)
- Keep specificity low (single class), use `&` nesting for states
  (`&:hover, &:focus`), factor repeated patterns into `@mixin`s.
- Reference the source of a value where useful (Bootstrap var name, or the
  Figma node) in a comment.

## 12. JavaScript conventions

- Only add a `<name>.js` when the component needs behaviour; prefer
  CSS/Bootstrap data-API where possible.
- Use the **Drupal behaviors + `once`** pattern, wrapped to avoid globals:
  ```js
  ((Drupal, once) => {
    Drupal.behaviors.<componentName> = {
      attach(context) {
        once('<unique-id>', '<root-selector>', context).forEach((el) => {
          // progressive enhancement here
        });
      },
    };
  })(Drupal, once);
  ```
- Declare deps in `<name>.component.yml`:
  ```yaml
  libraryOverrides:
    dependencies:
      - core/drupal
      - core/once
  ```
- Start with a `/** @file */` JSDoc block; document non-obvious behaviour,
  browser-API caveats, and expected error outcomes. Progressive enhancement
  only — the component must render and be usable without JS. ESLint clean
  (`yarn lint:js`).

## 13. `*.component.yml` essentials

- `name`, `status` (`stable` for shipped components), `description`, `props`
  (typed, with `enum`/`default`), `slots`, optional `libraryOverrides`,
  and `examples`.
- **`examples` must match `default`s** for every prop so Drupal Canvas stores
  the default inputs when a component is dropped in (issue #3595562). Editing
  props/enums/defaults changes the component **version hash** — see §8.
- Don't add a prop the template doesn't use, and don't rename a prop devs rely
  on without a migration note.

## 14. Build, lint & starterkit

- Build: `yarn theme:build` (theme assets), `yarn components:build`
  (component `.scss`→`.css`), `yarn theme:full-build` (both). Watch:
  `yarn theme:watch`.
- Lint: `yarn lint:css` (stylelint), `yarn lint:js` (eslint),
  `yarn lint:yaml`, `yarn phpcs`, `yarn spellcheck`.
- Generate a sub-theme from this starterkit:
  ```sh
  php core/scripts/drupal generate-theme my_theme --starterkit vartheme_bs5 \
    --name "My Theme" --description "Custom theme generated from Vartheme BS5"
  ```
  The generated theme inherits all components and these conventions; new/changed
  components in it MUST follow this AGENTS.md.

## 15. Definition of done (per component)

1. `.twig` follows Part A (structure, `attributes`, classes, trust-SDC).
2. `.scss` token-driven + BEM; `.css` rebuilt via the build (not hand-edited).
3. `.js` (if any) uses behaviors + `once`, deps declared, ESLint clean.
4. `.component.yml` props typed, `examples` match defaults.
5. `README.md` present with a valid getbootstrap.com reference.
6. Mirrored to `/var/www/html/products/vartheme_bs5/`.
7. `drush cr`; zero Twig/PHP errors, zero Canvas version warnings, zero console
   errors; lints pass; component test (`tests/features/09-drupal-canvas/`) green.

---

# Part C — Building a sub-theme from this starterkit (Varbase docs)

Authoritative reference:
<https://docs.varbase.vardot.com/developers/theme-development-with-varbase>.
Live design system / Storybook: <https://storybook.demo.varbase.vardot.com/>.
**Extend Vartheme BS5 — don't build from scratch.**

## 16. Tooling

- **Node.js 20.x**, **Yarn** (use Yarn — *not* npm; npm causes install issues).
  Also `sed` + `gawk` (used by the generate-theme rename step).
- `node_modules/` is git-ignored — after any clone, reinstall before building.

## 17. Generate & build the sub-theme

```sh
# from docroot (web/)
php core/scripts/drupal generate-theme mytheme \
  --starterkit vartheme_bs5 \
  --path themes/custom \
  --name "My Theme" \
  --description "Custom theme generated from Vartheme BS5 theme"

cd themes/custom/mytheme
yarn install        # Yarn only
yarn theme:init     # REQUIRED immediately after generate + install
yarn theme:full-build   # or: theme:build (styles), components:build, theme:watch
```

Teammates after cloning the repo: `yarn install && yarn theme:init &&
yarn theme:full-build`.

- The generated `mytheme.info.yml` ships `auto_switch_components: true` — this
  enables automatic Drupal Canvas component-ID migration when the theme is
  activated. Keep it.
- The sub-theme is independent: after generating, Vartheme BS5 can be
  uninstalled and the sub-theme still works.
- New/changed components in the sub-theme **must follow Parts A & B** of this
  file (the standard is inherited).

## 18. Theme switching & component migration (`varbase_components`)

SDC component IDs are **theme-prefixed**: `sdc.<theme>.<name>` (e.g.
`sdc.vartheme_bs5.button`). So forking/renaming the theme changes every
component ID, and stored Canvas component **version hashes** are per
component-config — both must migrate when the default theme changes.

The `varbase_components` module's `ActiveThemeChangeSubscriber` does this
**automatically** on default-theme change — but only when **both** the old and
new theme declare `auto_switch_components: true` in their `.info.yml`. It runs,
in order:

1. Replace the old theme name in active **config** entities.
2. Rewrite **`component_tree`** field data in content entities:
   `sdc.<old>.* → sdc.<new>.*`.
3. Replace the old theme **filesystem path** with the new theme's path in text
   fields.
4. **Fix component versions**: any stored `component_version` that isn't a
   known/active version of its component is replaced with that component's
   **active** version.

Manual / diagnostic equivalents (`@bootstrap full`):

```sh
drush varbase-components:scan-refs <theme>                  # audit lingering refs (table)
drush varbase-components:switch-theme <old> <new> --dry-run # preview (always dry-run first)
drush varbase-components:switch-theme <old> <new>           # apply all 4 steps
drush varbase-components:fix-versions <theme>               # only step 4 (stale → active)
```

"Components not migrating" almost always = missing
`auto_switch_components: true` in a theme's `.info.yml`. Add it, `drush cr`,
re-run. Use `fix-versions` after editing components in-place (no theme switch)
when demo content / `canvas.content_template.*` warns
"version … not found, falling back to active".

## 19. Storybook integration

Stories live beside each component (`<name>.stories.json`, optional `<name>.mdx`).
Storybook runs on its own port (6006) but renders SDC by calling the Drupal site.

```sh
ddev init-storybook          # installs deps, enables storybook module, perms, env
ddev yarn storybook:gen      # drush storybook:generate-all-stories from SDC
ddev yarn storybook:dev      # serve on :6006   (storybook:ddev binds 0.0.0.0)
ddev yarn storybook:build    # static export    (storybook:kill to stop)
```

Config: `.storybook/main.ts` (component paths), `preview.ts` (Drupal asset
fetch / SDC param cleaning), `middleware.js` (asset proxy / CORS),
`.env.storybook` (`STORYBOOK_SERVER_URL`, `STORYBOOK_SERVER_RENDER_URL`).

## 20. Preloaded fonts

1. Font files → `MYTHEME/fonts/<name>/webfonts/`.
2. `@font-face` CSS → `MYTHEME/fonts/<name>/css/<name>.css`.
3. Register in `MYTHEME.libraries.yml` under `global-styles` →
   `css: theme: { fonts/<name>/css/<name>.css: {} }`.
4. Add the preload link in `MYTHEME/templates/includes/preload.twig`:
   ```twig
   <link rel="preload" href="/{{ vartheme_bs5_path }}/fonts/<name>/<File>.ttf"
         as="font" type="font/ttf" crossorigin="anonymous">
   ```
   `preload.twig` is included from `html.html.twig`; available vars:
   `vartheme_bs5_path` (theme path) and `html_dir` (`ltr`/`rtl`).

## 21. Responsive breakpoints (Bootstrap 5)

`xs` 0 · `sm` 576 · `md` 768 · `lg` 992 · `xl` 1200 · `xxl` 1400 px
(`vartheme_bs5.breakpoints.yml`). Theme regions are defined in
`vartheme_bs5.info.yml` (Header, Content, Footer + more).
