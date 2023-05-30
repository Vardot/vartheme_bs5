# Vartheme BS5

A base theme for Varbase standard websites.

A new generation of theming (base theme) based on **Bootstrap 5**, **Single Directory Components (SDC)** with **Drupal** `~10.1.0`, and **UI Patterns** `2.0.x-dev`.

Having **[Varbase Components](https://www.drupal.org/project/varbase_components)** to provides component management system for Varbase and **Vartheme BS5**.

# Installation
Require the theme in a Drupal ^10.1.0
```
composer require 'drupal/vartheme_bs5:3.0.x-dev'
```
The Vartheme BS5 requires to enable the **Varbase Component** befor installing the theme
```
drush pm:enable varbase_components
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
