import config from './oneColumnLayout.config.yml';
import oneColumnLayout from './oneColumnLayout.twig';
import twigCode from '!!raw-loader!./oneColumnLayout.twig';
import DrupalAttribute from 'drupal-attribute';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';
import './oneColumnLayout.css';

export default {
  title : config.title,
  component: oneColumnLayout,
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
    row: {
      control: { type: 'boolean' },
      description: config.row.description,
      defaultValue: {summary: config.row.default},
      table: config.row.table,
    },
    container: {
      control: { type: 'boolean' },
      description: config.container.description,
      defaultValue: {summary: config.container.default},
      table: config.container.table,
    },
    content: {
      content: { control: 'text' },
      description: config.content.description,
      defaultValue: {summary: config.content.default},
      table: config.content.table,
    }
  },
};

export const OneColumnLayout = (args) => {
  return (
    oneColumnLayout({
      attributes: new DrupalAttribute(),
      col_attributes: new DrupalAttribute(),
      row: args.row && 'row',
      container: args.container && 'container',
      content: args.content,
      container_classes: [],
      row_classes: [],
    })
  )
}

OneColumnLayout.args = {
  row: true,
  container: true,
  content: 'One column layout',
};
