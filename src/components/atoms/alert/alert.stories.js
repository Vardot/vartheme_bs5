
import alert from './alert.twig';
import DrupalAttribute from 'drupal-attribute';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';

import code_twig from '!!raw-loader!./alert.twig';

/**
 * Alert component controls settings.
 */
const alertSettings = require('./alert.settings.json');

export default {
  title : 'Atoms/Alert',
  component: alert,
  parameters: {
    docs: {
      container: DocsContainer,
      page: DocsPage,
      source: {
        code: code_twig,
      },
    },
  },
  argTypes: {
    type: {
      control: { type: "select" },
      options: alertSettings.alert.types
    },
    heading: {
      heading: { control: 'text' }
    },
    content: {
      content: { control: 'text' }
    },
    dismissible: {
      control: { type: 'boolean' }
    }
  }
};

export const Alert = (args) => {
  return (
    alert({
      attributes: new DrupalAttribute(),
      utility_classes: [],
      type: args.type ? args.type : 'primary',
      heading: args.heading,
      content: args.content,
      dismissible: args.dismissible,
      props: {...args},
    })
  )
}

Alert.args = {
  type: 'primary',
  heading: 'Lorem Ipsum',
  content: 'A simple alert check it out!',
  dismissible: true
};
