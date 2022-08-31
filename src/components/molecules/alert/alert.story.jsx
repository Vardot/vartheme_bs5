import config from "./alert.config.yml";
import alert from './alert.twig';
import twigCode from '!!raw-loader!./alert.twig';
import DrupalAttribute from 'drupal-attribute';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';

export default {
  title : config.title,
  component: alert,
  parameters: {
    docs: {
      container: DocsContainer,
      page: DocsPage,
      source: {code: twigCode},
      description: config.description,
      iframeHeight: config.height
    },
  },
  argTypes: {
    type: {
      control: { type: "select" },
      options: config.type.options,
      description: config.type.description,
      defaultValue: {summary: config.type.default},
      table: config.type.table,
    },
    dismissible: {
      control: { type: 'boolean' },
      description: config.dismissible.description,
      defaultValue: {summary: config.dismissible.default},
      table: config.dismissible.table,
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
    }
  }
};

export const Alert = (args) => {
  return (
    alert({
      attributes: new DrupalAttribute(),
      utility_classes: [],
      type: args.type,
      dismissible: args.dismissible,
      heading: args.heading,
      content: args.content,
      props: {...args},
    })
  )
}

Alert.args = {
  type: 'alert-primary',
  dismissible: true,
  heading: 'Lorem Ipsum',
  content: 'A simple alert check it out!'
};
