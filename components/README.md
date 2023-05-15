# Components

Copy any Component from the Varbase Components module to replace.

### Example:

Given that the site has a custom style for the Alert component
Which in most cases the default 
Steps:
1. Copy the `alert` folder Varbase Components to the project's theme
```
cd PATH_TO_THE_PROJECT/docroot/themes/custom/PROJECT_THEME
cp -r PATH_TO_THE_PROJECT/docroot/modules/contrib/varbase_components/components/molecules/alert components/molecules/alert 
```
2. Edit the `alert.component.yml` in the current PROJECT_THEME
Add `replaces: 'varbase_components:alert'` after `name: Alert` in the yml file.

```
$schema: https://git.drupalcode.org/project/sdc/-/raw/1.x/src/metadata.schema.json
name: Alert
replaces: 'varbase_components:alert'
```

4. Uncomment the following in the `PROJECT_THEME/webpack.config.components.js` file
```
    // ##########################################################################
    // Components
    // ##########################################################################
    './components/molecules/alert/alert': ['./components/molecules/alert/alert.scss'],
```

3. Change the `templates/misc/status-messages.html.twig` template file for Drupal's status messages

Replace `varbase_components:alert` with `PROJECT_THEME:alert`

Before:
```
		{% embed 'varbase_components:alert' with {
      type: types[type],
    } %}
```

After:
```
		{% embed 'PROJECT_THEME:alert' with {
      type: types[type],
    } %}
```

Themes are entitled to change any part in the `status-messages.html.twig` and in the `components/molecules/alert` component

4. Compile SASS to CSS for components
```
yarn components:build
```
