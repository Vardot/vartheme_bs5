import config from "./badge.config.yml";
import badge from './badge.twig';
import twigCode from '!!raw-loader!./badge.twig';
import DrupalAttribute from 'drupal-attribute';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';

export default {
  title : config.title,
  component: badge,
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
      table: config.color.table
    },
    tag: {
      control: { type: "select" },
      options: config.tag.options,
      description: config.tag.description,
      defaultValue: {summary: config.tag.default},
      table: config.tag.table
    },
    content: {
      content: { control: 'text' },
      description: config.content.description,
      defaultValue: {summary: config.content.default},
      table: config.content.table
    },
    url: {
      content: { control: 'text' },
      description: config.url.description,
      defaultValue: {summary: config.url.default},
      table: config.url.table
    }
  }
};

export const Badge = (args) => (
  badge({
    attributes: new DrupalAttribute(),
    utility_classes: [],
    color: args.color ? args.color : 'text-bg-secondary',
    tag: args.tag ? args.tag : 'span',
    content: args.content ? args.content : 'Badge',
    url: args.url ? args.url : '',
    props: {...args},
  })
);

Badge.args = {
  color: "text-bg-secondary",
  tag: 'span',
  content: "Badge",
  url: '',
};
