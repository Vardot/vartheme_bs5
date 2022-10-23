import config from './block.config.yml';
import block from './block.twig';
import twigCode from '!!raw-loader!./block.twig';
import DrupalAttribute from 'drupal-attribute';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';

export default {
  title : config.title,
  component: block,
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
    id: {
      control: { type: "text" },
      description: config.id.description,
      defaultValue: {summary: config.id.default},
      table: config.id.table,
    },
    bundle: {
      control: { type: "text" },
      description: config.bundle.description,
      defaultValue: {summary: config.bundle.default},
      table: config.bundle.table,
    },
    tag: {
      control: { type: "text" },
      description: config.tag.description,
      defaultValue: {summary: config.tag.default},
      table: config.tag.table,
    },
    title_prefix: {
      control: { type: "text" },
      description: config.title_prefix.description,
      defaultValue: {summary: config.title_prefix.default},
      table: config.title_prefix.table,
    },
    title_suffix: {
      control: { type: "text" },
      description: config.title_suffix.description,
      defaultValue: {summary: config.title_suffix.default},
      table: config.title_suffix.table,
    },
    label: {
      control: { type: "text" },
      description: config.label.description,
      defaultValue: {summary: config.label.default},
      table: config.label.table,
    },
    content: {
      control: { type: "text" },
      description: config.content.description,
      defaultValue: {summary: config.content.default},
      table: config.content.table,
    }
  },
};

export const basicBlock = (args) => (
  block({
    title_attributes: new DrupalAttribute(),
    id: args.id,
    bundle: args.bundle,
    tag: args.tag ? args.tag : 'div',
    title_prefix: args.title_prefix ? args.title_prefix : '',
    title_suffix: args.title_suffix ? args.title_suffix : '',
    label: args.label ? args.label : '',
    content: args.label ? args.label : '',
    ...args
  })
);

basicBlock.args = {
  id: 'sss',
  bundle: 'aaa',
  tag: 'div',
  title_prefix: '',
  title_suffix: '',
  label: "I'm a block!",
  content: "Lorem ipsum dolor sit amet."
}