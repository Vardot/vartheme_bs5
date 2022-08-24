import config from './threeColumnsLayout.config.yml';
import threeColumnsLayout from './threeColumnsLayout.twig';
import twigCode from '!!raw-loader!./threeColumnsLayout.twig';
import DrupalAttribute from 'drupal-attribute';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';
import './threeColumnsLayout.css';

export default {
  title : config.title,
  component: threeColumnsLayout,
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
    columnThreeContent: {
      content: { control: 'text' },
      description: config.column_3_content.description,
      defaultValue: {summary: config.column_3_content.default},
      table: config.column_3_content.table,
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
    },
    columnThreeSize: {
      control: { type: "select" },
      options: config.column_3.options,
      description: config.column_3.description,
      defaultValue: {summary: config.column_3.default},
      table: config.column_3.table,
    }
  },
};

export const ThreeColumnsLayout = (args) => {
  return (
    threeColumnsLayout({
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
        col3: {attributes: new DrupalAttribute(), size: `varbase-col ${args.columnThreeSize}`, content: args.columnThreeContent},
      },
    })
  )
}

ThreeColumnsLayout.args = {
  row: true,
  container: true,
  columnOneContent: 'Column one content',
  columnTwoContent: 'Column two content',
  columnThreeContent: 'Column three content',
  columnOneSize: 'col-4',
  columnTwoSize: 'col-4',
  columnThreeSize: 'col-4',
};
