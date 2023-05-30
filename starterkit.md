# Vartheme BS5 Starterkit Theme

## How to use the Vartheme BS5 Starterkit

To generate a new theme from Vartheme BS5 using the starterkit/theme-generation
script, run the following from Drupal's installation root:

```sh
php core/scripts/drupal generate-theme new_theme_name --starterkit vartheme_bs5
```

Additionally, you can create the theme's human-readable name and it description
with two optional arguments:

```sh
php core/scripts/drupal generate-theme new_theme_name
  --starterkit vartheme_bs5
  --name "New Theme Name"
  --description "Custom theme generated from Vartheme BS5 theme"
```

This script will copy over all the files from the Vartheme BS5 theme, and replace
instances of Vartheme BS5's machine name and label with the strings you provide.

## Customizing CSS

Your new theme should look and function identically to Vartheme BS5 out of the box,
but you may wish to change the styles to suit your needs. Vartheme BS5's styles are
written using Bootstrap 5, SASS, PostCSS, which is installed and configured Varbase,
and allows CSS authors to write modern CSS while still supporting browsers that have
not fully implemented the newest methodologies.

As part of the `generate-theme` command, the necessary package.json dependencies
and scripts files are copied over for you. Simply install the dependencies and
then run `yarn theme:init` once, and then either the `yarn theme:full-build`
command to compile the assets once or the `yarn theme:watch` command
to re-compile the assets every time a .scss file is
changed.

```bash
yarn install # Install the dependencies

yarn theme:init # Initialize the theme once

yarn theme:full-build # Compile SASS once

yarn theme:watch # Compile SASS per save
```

## Reporting Starterkit Bugs

Should you encounter a bug while generating a new theme, please
[create a new issue](https://www.drupal.org/node/add/project-issue/vartheme_bs5)

## Additional Information

**Starterkit is for generating new themes** that include
reasonably un-opinionated templates and styles that eliminate much of the
the initial work required to create a theme.

Starterkit is the recommended approach for creating new themes. For more
information, consult the
[Starterkit documentation on Drupal.org](https://www.drupal.org/docs/core-modules-and-themes/core-themes/starterkit-theme).
