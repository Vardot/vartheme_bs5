import config from './button.config.yml';
import button from './button.twig';
import twigCode from '!!raw-loader!./button.twig';
import DrupalAttribute from 'drupal-attribute';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';

export default {
  title : config.title,
  component: button,
  options: { showPanel: true },
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
    color: {
      control: { type: "select" },
      options: config.color.options,
      description: config.color.description,
      defaultValue: {summary: config.color.default},
      table: config.color.table,
    },
    outline: {
      control: { type: 'boolean' },
      description: config.outline.description,
      defaultValue: {summary: config.outline.default},
      table: config.outline.table,
    },
    size: {
      control: { type: "select" },
      options: config.size.options,
      description: config.size.description,
      defaultValue: {summary: config.size.default},
      table: config.size.table,
    },
    disabled: {
      control: { type: 'boolean' },
      description: config.disabled.description,
      defaultValue: {summary: config.disabled.default},
      table: config.disabled.table,
    },
    content: {
      content: { control: 'text' },
      description: config.content.description,
      defaultValue: {summary: config.content.default},
      table: config.content.table,
    }
  },
};

export const Button = (args) => {
  return (
    button({
      attributes: new DrupalAttribute(),
      utility_classes: [],
      color: args.color ? args.color : 'primary',
      outline: args.outline ? args.outline : false,
      size: args.size ? args.size : '',
      disabled: args.disabled ? 'disabled' : '',
      content: args.content
    })
  )
}

Button.args = {
  color: 'primary',
  outline: false,
  size: "",
  disabled: false,
  content: 'Button'
};
