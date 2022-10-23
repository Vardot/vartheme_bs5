import config from './pagination.config.yml';
import pagination from './pagination.twig';
import twigCode from '!!raw-loader!./pagination.twig';
import DrupalAttribute from 'drupal-attribute';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';

export default {
  title : config.title,
  component: Pagination,
  options: { showPanel: false },
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
    size: {
      control: { type: "select" },
      options: config.size.options,
      description: config.size.description,
      defaultValue: {summary: config.size.default},
      table: config.size.table,
    },
    alignment: {
      control: { type: "select" },
      options: config.alignment.options,
      description: config.alignment.description,
      defaultValue: {summary: config.alignment.default},
      table: config.alignment.table,
    }
  },
};

export const Pagination = (args) => {
  return (
    pagination({
      attributes: new DrupalAttribute(),
      utility_classes: [],
      size: args.size ? args.size : config.alignment.default,
      alignment: args.alignment ? args.alignment : config.alignment.default,
      items: config.data.items,
      ellipses: config.data.ellipses
    })
  )
}

Pagination.args = {
  size: config.alignment.default,
  alignment: config.alignment.default
};
