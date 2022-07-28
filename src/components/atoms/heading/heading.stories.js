import config from "./heading.config.yml";
import heading from './heading.twig';
import twigCode from '!!raw-loader!./heading.twig';
import DrupalAttribute from 'drupal-attribute';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';

export default {
  title : config.title,
  component: heading,
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
    content: {
      content: { control: 'text' },
      description: config.content.description,
      defaultValue: {summary: config.content.default},
      table: config.content.table,
    },
    tag: {
      control: { type: "select" },
      options: config.tag.options,
      description: config.tag.description,
      defaultValue: {summary: config.tag.default},
      table: config.tag.table
    }
  },
}

export const Heading = (args) => {
  return (
    heading({
      attributes: new DrupalAttribute(),
      utility_classes: [],
      tag: args.tag ? args.tag : "h1",
      content: args.content ? args.content : "Heading",
      args: {...args}
    })
  )
}

Heading.args = {
  content: "Heading",
  tag: "h1",
}