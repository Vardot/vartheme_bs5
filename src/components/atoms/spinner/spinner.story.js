import config from './spinner.config.yml';
import spinner from './spinner.twig';
import twigCode from '!!raw-loader!./spinner.twig';
import DrupalAttribute from 'drupal-attribute';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';

export default {
  title : config.title,
  component: spinner,
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
    tag: {
      control: { type: "select" },
      options: config.tag.options,
      description: config.tag.description,
      defaultValue: {summary: config.tag.default},
      table: config.tag.table,
    },
    type: {
      control: { type: "select" },
      options: config.type.options,
      description: config.type.description,
      defaultValue: {summary: config.type.default},
      table: config.type.table,
    },
    color: {
      control: { type: "select" },
      options: config.color.options,
      description: config.color.description,
      defaultValue: {summary: config.color.default},
      table: config.color.table,
    },
    size: {
      control: { type: "select" },
      options: config.size.options,
      description: config.size.description,
      defaultValue: {summary: config.size.default},
      table: config.size.table,
    },
    content: {
      content: { control: 'text' },
      description: config.content.description,
      defaultValue: {summary: config.content.default},
      table: config.content.table,
    }
  },
};

export const Spinner = (args) => {
  return (
    spinner({
      attributes: new DrupalAttribute(),
      utility_classes: [],
      tag: args.tag ? args.tag: config.tag.default,
      type: args.type ? args.type : config.type.default,
      color: args.color ? args.color : config.color.default,
      size: args.size ? args.size : config.size.default,
      content: args.content ? args.content : config.content.default
    })
  )
}

Spinner.args = {
  tag: config.tag.default,
  type: config.type.default,
  color: config.color.default,
  content: config.content.default
};
