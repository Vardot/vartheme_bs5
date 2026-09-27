# Vartheme BS5 - Varbase functional testing suite (accessibility)

Automated functional acceptance testing for the accessibility of what this
theme renders, built on [@vardot/varbase-e2e](https://www.npmjs.com/package/@vardot/varbase-e2e)
(Playwright + Cucumber-js).

Self-contained: this directory carries its own `package.json` and `node_modules`,
so the theme's yarn build toolchain never pulls in Playwright.

## Running the suite

```bash
cd tests
npm install
npx playwright install chromium
LAUNCH_URL=https://my-host.ddev.site npm test
```

Other entry points:

```bash
npm run test:dry-run                       # resolve every step phrasing, no browser
npm run test:headed                        # watch it drive
FEATURES=features/01-05-*.feature npm test  # one feature file
```

`LAUNCH_URL` is the only thing that changes between environments. No feature
file contains a hostname.

## The host the suite expects

A Varbase 11 site carrying the **Varbase Starter** site template, with
`vartheme_bs5` as the default theme. The suite drives it anonymously, so it
sees the theme's own output rather than an editor's. CI builds that host from
this checkout of the theme; see `.gitlab-ci.yml`.

The paths under test (`/features`, `/about-varbase`, `/contact-us`, `/blog`,
`/blog/community-behind-varbase-support-and-collaboration`, `/search`) are
Varbase Starter content. A rename there is a suite change here.

## What each feature covers

| File | Covers |
| --- | --- |
| `01-01-page-shell-accessibility.feature` | Title, language, zoom, skip link, landmarks, one h1, heading order, tabindex |
| `01-02-theme-components-accessibility.feature` | Image alt, accessible names on buttons and links, ARIA references and roles |
| `01-03-accessibility-impact-gates.feature` | axe impact gates per page |
| `01-04-accessibility-rule-regressions.feature` | Named axe rules pinned so a passing rule cannot quietly start failing |
| `01-05-hero-slider-accessibility.feature` | The hero slider organism |

## Two things the scenarios cannot say themselves

**The hero slider audit is the target size regression gate.** Vartheme BS5
5.0.4 spaced the hero slider indicators 24px apart between centres for WCAG 2.2
SC 2.5.8, with `gap: 1rem` on `.carousel-indicators` in
`components/organisms/hero-slider-container/hero-slider-container.scss`. The
scenario that pins it is *Check that the hero slider passes a WCAG AA
accessibility audit*, because that step runs axe with the WCAG 2.2 AA tag.

Do not replace it with `should not violate the accessibility rule "target-size"`.
That step runs axe with no tag filter, `target-size` is not in axe's default
rule set, so the rule never runs and the scenario passes whatever the spacing
is. Verified against axe-core 4.13.0: removing the `gap` turns the audit
scenario red with `target-size (4 nodes)` and leaves the rule-named form green.

**Four pages are gated at critical rather than serious.** `/features`,
`/about-varbase`, `/contact-us` and `/blog` each carry a serious
`color-contrast` finding: `#0d6efd` on `#f3f1ef` at 3.99:1, a
`btn-outline-primary` inside a `bg-secondary-subtle` card, plus the Views
exposed filter Reset button on `/blog` at 2.24:1. Those are colour decisions,
not a defect in this suite. Every other page is gated at serious, which since
varbase-e2e 2.0.7 covers critical too. Raising those four to serious is
blocked on the contrast finding being resolved.

## Tags

Every scenario carries `@a11y` and the four environment tags
`@local @development @staging @production`. CI runs `--tags "@a11y"`.

## Reports

`reports/cucumber_report.json` on every run; CI turns it into HTML and PDF with
`generate-reports`. Screenshots and video of failures land in `screenshots/`
and `videos/`.
