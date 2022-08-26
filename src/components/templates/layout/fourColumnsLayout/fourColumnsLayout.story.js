import config from "./fourColumnsLayout.config.yml";
import fourColumnsLayout from "./fourColumnsLayout.twig";
import twigCode from "!!raw-loader!./fourColumnsLayout.twig";
import DrupalAttribute from "drupal-attribute";
import { DocsPage, DocsContainer } from "@storybook/addon-docs/blocks";
import { getColumnsSizeClasses } from "../../../../helpers";
import "./fourColumnsLayout.css";

export default {
  title: config.title,
  component: fourColumnsLayout,
  options: { showPanel: true },
  parameters: {
    docs: {
      container: DocsContainer,
      page: DocsPage,
      source: { code: twigCode },
      description: config.description,
      iframeHeight: config.height,
    },
  },
  argTypes: {
    row: {
      control: { type: "boolean" },
      description: config.row.description,
      defaultValue: { summary: config.row.default },
      table: config.row.table,
    },
    container: {
      control: { type: "boolean" },
      description: config.container.description,
      defaultValue: { summary: config.container.default },
      table: config.container.table,
    },
    columnOneContent: {
      content: { control: "text" },
      description: config.column_1_content.description,
      defaultValue: { summary: config.column_1_content.default },
      table: config.column_1_content.table,
    },
    columnTwoContent: {
      content: { control: "text" },
      description: config.column_2_content.description,
      defaultValue: { summary: config.column_2_content.default },
      table: config.column_2_content.table,
    },
    columnThreeContent: {
      content: { control: "text" },
      description: config.column_3_content.description,
      defaultValue: { summary: config.column_3_content.default },
      table: config.column_3_content.table,
    },
    columnFourContent: {
      content: { control: "text" },
      description: config.column_4_content.description,
      defaultValue: { summary: config.column_4_content.default },
      table: config.column_4_content.table,
    },
    columnsSize: {
      control: { type: "select" },
      options: config.columns_size.options,
      description: config.columns_size.description,
      defaultValue: { summary: config.columns_size.default },
      table: config.columns_size.table,
    },
  },
};

export const FourColumnsLayout = (args) => {
  const sizeClasses = getColumnsSizeClasses(args.columnsSize);

  return fourColumnsLayout({
    attributes: new DrupalAttribute(),
    col_attributes: new DrupalAttribute(),
    row: args.row && "row",
    container: args.container && "container",
    content: args.content,
    container_classes: [],
    row_classes: [],
    columns: {
      col1: {
        attributes: new DrupalAttribute(),
        size: `varbase-col ${sizeClasses[0]}`,
        content: args.columnOneContent,
      },
      col2: {
        attributes: new DrupalAttribute(),
        size: `varbase-col ${sizeClasses[1]}`,
        content: args.columnTwoContent,
      },
      col3: {
        attributes: new DrupalAttribute(),
        size: `varbase-col ${sizeClasses[2]}`,
        content: args.columnThreeContent,
      },
      col4: {
        attributes: new DrupalAttribute(),
        size: `varbase-col ${sizeClasses[3]}`,
        content: args.columnFourContent,
      },
    },
  });
};

FourColumnsLayout.args = {
  row: true,
  container: true,
  columnOneContent: "Column one content",
  columnTwoContent: "Column two content",
  columnThreeContent: "Column three content",
  columnFourContent: "Column four content",
  columnsSize: "25_25_25_25",
};
