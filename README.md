[![Varbase](https://raw.githubusercontent.com/Vardot/varbase/11.0.x/images/varbase-logo.png)](https://www.drupal.org/project/varbase)

# Vartheme BS5
[![pipeline status](https://git.drupalcode.org/project/vartheme_bs5/badges/5.0.x/pipeline.svg)](https://git.drupalcode.org/project/vartheme_bs5/-/pipelines)
[![Vartheme BS5](https://img.shields.io/badge/Vartheme%20BS5-5.0.0--alpha3-0d6efc?labelColor=001d38&style=flat-square)](https://git.drupalcode.org/project/vartheme_bs5/-/pipelines?ref=5.0.0-alpha3)
[![Automated Functional Testing](https://git.drupalcode.org/project/varbase_project/badges/11.0.x/pipeline.svg)](https://git.drupalcode.org/project/varbase_project/-/pipelines)

A Starterkit theme for Varbase websites.

A new generation of theming based on **Bootstrap 5**, **Single Directory Components (SDC)** with **Drupal**, and **UI Patterns** `~2.0`.


# Installation
Require the theme in a Drupal
```
composer require 'drupal/vartheme_bs5:~4.0.0'
```

## Compile custom styling
Uses [Webpack](https://webpack.js.org) to compile and
bundle SASS and JS.

#### Step 1

Make sure you have Node and npm installed.
You can read a guide on how to install node here:
https://docs.npmjs.com/getting-started/installing-node

If you prefer to use [Yarn](https://yarnpkg.com) instead of npm, install Yarn by
following the guide [here](https://yarnpkg.com/docs/install).

#### Step 2

Go to the root of the theme and run the following commands: `yarn install`.

#### Step 3
Initialize the theme with latest Bootstrap 5 version

```
yarn theme:init
```

#### Step 4

Run the following command to compile Sass

```
yarn theme:build
```

Run the following to build components for custom components
```
yarn components:build
```
