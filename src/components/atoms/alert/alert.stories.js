import alert from './alert.twig';
import DrupalAttribute from 'drupal-attribute';
import codeTwig from '!!raw-loader!./alert.twig';
import config from "./alert.config.yml";
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';

export default {
  title : config.title,
  component: alert,
  parameters: {
    options: { showPanel: false },
    docs: {
      container: DocsContainer,
      page: DocsPage,
      source: {code: codeTwig},
      description: config.description,
      iframeHeight: config.height
    },
  },
  argTypes: {
    color: {
      control: { type: "select" },
      options: config.color.options,
      description: config.color.description,
      defaultValue: {summary: config.color.default},
      table: config.color.table,
    },
    heading: {
      heading: { control: 'text' },
      description: config.heading.description,
      defaultValue: {summary: config.heading.default},
      table: config.heading.table,
    },
    content: {
      content: { control: 'text' },
      description: config.content.description,
      defaultValue: {summary: config.content.default},
      table: config.content.table,
    },
    dismissible: {
      control: { type: 'boolean' },
      description: config.dismissible.description,
      defaultValue: {summary: config.dismissible.default},
      table: config.dismissible.table,
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

