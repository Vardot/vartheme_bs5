import config from './fourColumnsLayout.config.yml';
import fourColumnsLayout from './fourColumnsLayout.twig';
import twigCode from '!!raw-loader!./fourColumnsLayout.twig';
import DrupalAttribute from 'drupal-attribute';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';
import './fourColumnsLayout.css';

export default {
  title : config.title,
  component: fourColumnsLayout,
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
    columnFourContent: {
      content: { control: 'text' },
      description: config.column_4_content.description,
      defaultValue: {summary: config.column_4_content.default},
      table: config.column_4_content.table,
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
    },
    columnFourSize: {
      control: { type: "select" },
      options: config.column_4.options,
      description: config.column_4.description,
      defaultValue: {summary: config.column_4.default},
      table: config.column_4.table,
    }
  },
};

export const FourColumnsLayout = (args) => {
  return (
    fourColumnsLayout({
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
        col4: {attributes: new DrupalAttribute(), size: `varbase-col ${args.columnFourSize}`, content: args.columnFourContent},
      },
    })
  )
}

FourColumnsLayout.args = {
  row: true,
  container: true,
  columnOneContent: 'Column one content',
  columnTwoContent: 'Column two content',
  columnThreeContent: 'Column three content',
  columnFourContent: 'Column four content',
  columnOneSize: 'col-3',
  columnTwoSize: 'col-3',
  columnThreeSize: 'col-3',
  columnFourSize: 'col-3',
};
