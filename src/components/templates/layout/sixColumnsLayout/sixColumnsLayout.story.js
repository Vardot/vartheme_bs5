import config from './sixColumnsLayout.config.yml';
import sixColumnsLayout from './sixColumnsLayout.twig';
import twigCode from '!!raw-loader!./sixColumnsLayout.twig';
import DrupalAttribute from 'drupal-attribute';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';
import './sixColumnsLayout.css';

export default {
  title : config.title,
  component: sixColumnsLayout,
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
    columnFiveContent: {
      content: { control: 'text' },
      description: config.column_5_content.description,
      defaultValue: {summary: config.column_5_content.default},
      table: config.column_5_content.table,
    },
    columnSixContent: {
      content: { control: 'text' },
      description: config.column_6_content.description,
      defaultValue: {summary: config.column_6_content.default},
      table: config.column_6_content.table,
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
    },
    columnFiveSize: {
      control: { type: "select" },
      options: config.column_5.options,
      description: config.column_5.description,
      defaultValue: {summary: config.column_5.default},
      table: config.column_5.table,
    },
    columnSixSize: {
      control: { type: "select" },
      options: config.column_6.options,
      description: config.column_6.description,
      defaultValue: {summary: config.column_6.default},
      table: config.column_6.table,
    }
  },
};

export const SixColumnsLayout = (args) => {
  return (
    sixColumnsLayout({
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
        col5: {attributes: new DrupalAttribute(), size: `varbase-col ${args.columnFiveSize}`, content: args.columnFiveContent},
        col6: {attributes: new DrupalAttribute(), size: `varbase-col ${args.columnSixSize}`, content: args.columnSixContent},
      },
    })
  )
}

SixColumnsLayout.args = {
  row: true,
  container: true,
  columnOneContent: 'Column one content',
  columnTwoContent: 'Column two content',
  columnThreeContent: 'Column three content',
  columnFourContent: 'Column four content',
  columnFiveContent: 'Column five content',
  columnSixContent: 'Column six content',
  columnOneSize: 'col-2',
  columnTwoSize: 'col-2',
  columnThreeSize: 'col-2',
  columnFourSize: 'col-2',
  columnFiveSize: 'col-2',
  columnSixSize: 'col-2',
};
