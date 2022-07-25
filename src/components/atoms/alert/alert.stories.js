import alert from './alert.twig';
import DrupalAttribute from 'drupal-attribute';
import codeTwig from '!!raw-loader!./alert.twig';
import alertSettings from './alert.settings.json';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';

export default {
  title : alertSettings.title,
  component: alert,
  height: 200,
  parameters: {
    docs: {
      container: DocsContainer,
      page: DocsPage,
      source: {code: codeTwig},
      description: alertSettings.description,
      iframeHeight: alertSettings.height
    },
  },
  argTypes: {
    color: {
      control: { type: "select" },
      options: alertSettings.argTypes.color.types,
      description: alertSettings.argTypes.color.description,
      defaultValue: {summary: "primary"},
      table: alertSettings.argTypes.color.table,
    },
    heading: {
      heading: { control: 'text' },
      description: alertSettings.argTypes.heading.description,
      defaultValue: {summary: "string"},
      table: alertSettings.argTypes.heading.table,
    },
    content: {
      content: { control: 'text' },
      description: alertSettings.argTypes.content.description,
      defaultValue: {summary: "string"},
      table: alertSettings.argTypes.content.table,
    },
    dismissible: {
      control: { type: 'boolean' },
      description: alertSettings.argTypes.dismissible.description,
      defaultValue: {summary: true},
      table: alertSettings.argTypes.dismissible.table,
    }
  }
};

export const Alert = (args) => {
  return (
    alert({
      attributes: new DrupalAttribute(),
      utility_classes: [],
      type: args.color ? args.color : 'primary',
      heading: args.heading,
      content: args.content,
      dismissible: args.dismissible,
      props: {...args},
    })
  )
}

Alert.args = {
  color: 'primary',
  heading: 'Lorem Ipsum',
  content: 'A simple alert check it out!',
  dismissible: true
};

