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
    columnContent: {
      content: { control: 'text' },
      description: config.column_content.description,
      defaultValue: {summary: config.column_content.default},
      table: config.column_content.table,
    },
    columnSize: {
      control: { type: "select" },
      options: config.column_size.options,
      description: config.column_size.description,
      defaultValue: {summary: config.column_size.default},
      table: config.column_size.table,
    },
  },
};

export const _1ColumnLayout = (args) => {
  const columnsData = [
    {
      attributes: new DrupalAttribute(),
      size: `varbase-col ${args.columnSize}`,
      content: args.columnContent
    }
  ]

  return (
    oneColumnLayout({
      attributes: new DrupalAttribute(),
      container_attributes: new DrupalAttribute(),
      row_attributes: new DrupalAttribute(),
      col_attributes: new DrupalAttribute(),
      row: args.row,
      container: args.container,
      container_classes: [],
      row_classes: [],
      columns: columnsData
    })
  )
}

_1ColumnLayout.args = {
  row: true,
  container: true,
  columnSize: 'col-12',
  columnContent: 'Column content',
};
