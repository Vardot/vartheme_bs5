# Root

Provides a list of Root CSS3 variables for Bootstrap 5

[Root variables](https://getbootstrap.com/docs/5.3/customize/css-variables/#root-variables)
Here are the variables we include (note that the `:root` is required) that can be accessed anywhere Bootstrap’s CSS is loaded. They’re located in our `_root.scss` file and included in our compiled dist files.

### Default 
These CSS variables are available everywhere, regardless of color mode.

### Dark mode 
These variables are scoped to our built-in dark mode.

### Component variables 
Bootstrap 5 is increasingly making use of custom properties as local variables for various components. This way we reduce our compiled CSS, ensure styles aren’t inherited in places like nested tables, and allow some basic restyling and extending of Bootstrap components after Sass compilation.

### Prefix 
Most CSS variables use a prefix to avoid collisions with your own codebase. This prefix is in addition to the -- that’s required on every CSS variable.

Customize the prefix via the `$prefix` Sass variable. By default, it’s set to `bs-` (note the trailing dash).
