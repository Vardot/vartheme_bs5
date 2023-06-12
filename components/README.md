# Components

The **Single Directory Components (SDC)** folder contains various components. To enhance the default components, we will be using the components provided by **[Varbase Components](https://www.drupal.org/project/varbase_components)** module.

To replace any component from the Varbase Components module, follow the example below:

### Example:
Suppose we have a custom style for the Alert component on our site, which differs from the default style. Here are the steps to implement the custom style:

1. Copy the alert folder from **Varbase Components** to your project's theme folder:
```
cd PATH_TO_THE_PROJECT/docroot/themes/custom/PROJECT_THEME
cp -r PATH_TO_THE_PROJECT/docroot/modules/contrib/varbase_components/components/molecules/alert components/molecules/alert
```

2. Edit the `alert.component.yml` file in your `PROJECT_THEME` folder. Add the following line after `name: Alert` in the YAML file:
```
replaces: 'varbase_components:alert'
```
The updated `alert.component.yml` should look like this:

```
name: Alert
replaces: 'varbase_components:alert'
```

3. Uncomment the following line in the `PROJECT_THEME/webpack.config.components.js` file:
```
    './components/molecules/alert/alert': ['./components/molecules/alert/alert.scss'],
```

**Note:** As a theme, you have the authority to modify any part of the `status-messages.html.twig` template file, which is the default system template in Drupal. You can also make changes to the **SASS**, **TWIG**, and **JavaScript** files in the `components/molecules/alert` folder.

4. Compile `SASS` to `CSS` files for the components:
```
yarn components:build
```

These steps will allow you to incorporate your custom style for the **Alert component**, using the **Varbase Components** module as a base.