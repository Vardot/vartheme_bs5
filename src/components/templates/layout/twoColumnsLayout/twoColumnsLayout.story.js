import config from "./twoColumnsLayout.config.yml";
import twoColumnsLayout from "./twoColumnsLayout.twig";
import twigCode from "!!raw-loader!./twoColumnsLayout.twig";
import DrupalAttribute from "drupal-attribute";
import { DocsPage, DocsContainer } from "@storybook/addon-docs/blocks";
import { getColumnsSizeClasses } from "../../../../helpers";
import "./twoColumnsLayout.css";

export default {
  title: config.title,
  component: twoColumnsLayout,
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
    columnsSize: {
      control: { type: "select" },
      options: config.columns_size.options,
      description: config.columns_size.description,
      defaultValue: { summary: config.columns_size.default },
      table: config.columns_size.table,
    },
  },
};

export const TwoColumnsLayout = (args) => {
  const sizeClasses = getColumnsSizeClasses(args.columnsSize);
  return twoColumnsLayout({
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
    },
  });
};

TwoColumnsLayout.args = {
  row: true,
  container: true,
  columnOneContent: "Column one content",
  columnTwoContent: "Column one content",
  columnsSize: "50_50",
};
