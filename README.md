# Vartheme BS5

Base theme for Varbase standard websites. Based on Bootstrap 5 framework using SASS, and extending Radix theme.

# Installation

Uses [Webpack](https://webpack.js.org) to compile and
bundle SASS and JS.

#### Step 1
Make sure you have Node and npm installed.
You can read a guide on how to install node here:
https://docs.npmjs.com/getting-started/installing-node

If you prefer to use [Yarn](https://yarnpkg.com) instead of npm, install Yarn by
following the guide [here](https://yarnpkg.com/docs/install).

#### Step 2
Go to the root of the theme and run the following commands: `npm
install` or `yarn install`.

#### Step 3
Update `proxy` in **proxy.browsersync.js** with the following options:
* The domain name for the project. Example: `'http://exmaple.com'`
* Virtual domain. Example: `'http://varbase.local'`
* Localhost with path and docroot. Example: `'http://localhost/dev/PROJECT_NAME/docroot'`

#### Step 4
Run the following command to compile Sass and watch for changes: `npm run watch`
or `yarn watch`.
