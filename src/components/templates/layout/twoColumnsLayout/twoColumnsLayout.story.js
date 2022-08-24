import config from './twoColumnsLayout.config.yml';
import twoColumnsLayout from './twoColumnsLayout.twig';
import twigCode from '!!raw-loader!./twoColumnsLayout.twig';
import DrupalAttribute from 'drupal-attribute';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';
import './twoColumnsLayout.css';

export default {
  title : config.title,
  component: twoColumnsLayout,
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
    columnOneContent: {
      content: { control: 'text' },
      description: config.column_1_content.description,
      defaultValue: {summary: config.column_1_content.default},
      table: config.column_1_content.table,
    },
    columnTwoContent: {
      content: { control: 'text' },
      description: config.column_2_content.description,
      defaultValue: {summary: config.column_2_content.default},
      table: config.column_2_content.table,
    },
    columnOneSize: {
      control: { type: "select" },
      options: config.column_1.options,
      description: config.column_1.description,
      defaultValue: {summary: config.column_1.default},
      table: config.column_1.table,
    },
    columnTwoSize: {
      control: { type: "select" },
      options: config.column_2.options,
      description: config.column_2.description,
      defaultValue: {summary: config.column_2.default},
      table: config.column_2.table,
    }
  },
};

export const TwoColumnsLayout = (args) => {
  return (
    twoColumnsLayout({
      attributes: new DrupalAttribute(),
      col_attributes: new DrupalAttribute(),
      row: args.row && 'row',
      container: args.container && 'container',
      content: args.content,
      container_classes: [],
      row_classes: [],
      columns: {
        col1: {attributes: new DrupalAttribute(), size: `varbase-col ${args.columnOneSize}`, content: args.columnOneContent},
        col2: {attributes: new DrupalAttribute(), size: `varbase-col ${args.columnTwoSize}`, content: args.columnTwoContent},
      },
    })
  )
}

TwoColumnsLayout.args = {
  row: true,
  container: true,
  columnOneSize: 'col-6',
  columnTwoSize: 'col-6',
  columnOneContent: 'Column one content',
  columnTwoContent: 'Column one content',
};
