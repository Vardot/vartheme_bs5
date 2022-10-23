import config from './headingBlock.config.yml';
import headingBlock from './headingBlock.twig';
import twigCode from '!!raw-loader!./headingBlock.twig';
import DrupalAttribute from 'drupal-attribute';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';

export default {
  title : config.title,
  component: headingBlock,
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
    headingTag: {
      control: { type: "select" },
      options: config.heading_tag.options,
      description: config.heading_tag.description,
      defaultValue: {summary: config.heading_tag.default},
      table: config.heading_tag.table,
    },
    label: {
      content: { control: 'text' },
      description: config.label.description,
      defaultValue: {summary: config.label.default},
      table: config.label.table,
    }
  },
};

export const HeadingBlock = (args) => {
  return (
    headingBlock({
      heading_tag: args.headingTag ? args.headingTag : 'h2',
      label: args.label ? args.label : 'Block Label',
      ...args
    })
  )
}

HeadingBlock.args = {
  headingTag: 'h2',
  label: 'Heading block label'
};
