import config from "./threeColumnsLayout.config.yml";
import threeColumnsLayout from "./threeColumnsLayout.twig";
import twigCode from "!!raw-loader!./threeColumnsLayout.twig";
import DrupalAttribute from "drupal-attribute";
import { DocsPage, DocsContainer } from "@storybook/addon-docs/blocks";
import { getColumnsSizeClasses } from "../../../../helpers";
import "./threeColumnsLayout.css";

export default {
  title: config.title,
  component: threeColumnsLayout,
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
    desktopColumnsSize: {
      control: { type: "select" },
      options: config.desktop_columns_size.options,
      description: config.desktop_columns_size.description,
      defaultValue: { summary: config.desktop_columns_size.default },
      table: config.desktop_columns_size.table,
    },
    tabletColumnsSize: {
      control: { type: "select" },
      options: config.tablet_columns_size.options,
      description: config.tablet_columns_size.description,
      defaultValue: { summary: config.tablet_columns_size.default },
      table: config.tablet_columns_size.table,
    },
    mobileColumnsSize: {
      control: { type: "select" },
      options: config.mobile_columns_size.options,
      description: config.mobile_columns_size.description,
      defaultValue: { summary: config.mobile_columns_size.default },
      table: config.mobile_columns_size.table,
    }
  },
};

export const _3ColumnsLayout = (args) => {
  const desktopColumnsClasses = getColumnsSizeClasses(args.desktopColumnsSize, "lg");
  const tabletColumnsClasses = getColumnsSizeClasses(args.tabletColumnsSize, "md");
  const mobileColumnsClasses = getColumnsSizeClasses(args.mobileColumnsSize, "sm");

  return threeColumnsLayout({
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
        size: `varbase-col ${desktopColumnsClasses[0]} ${tabletColumnsClasses[0]} ${mobileColumnsClasses[0]}`,
        content: args.columnOneContent,
      },
      col2: {
        attributes: new DrupalAttribute(),
        size: `varbase-col ${desktopColumnsClasses[1]} ${tabletColumnsClasses[1]} ${mobileColumnsClasses[1]}`,
        content: args.columnTwoContent,
      },
      col3: {
        attributes: new DrupalAttribute(),
        size: `varbase-col ${desktopColumnsClasses[2]} ${tabletColumnsClasses[2]} ${mobileColumnsClasses[2]}`,
        content: args.columnThreeContent,
      },
    },
  });
};

_3ColumnsLayout.args = {
  row: true,
  container: true,
  columnOneContent: "Column one content",
  columnTwoContent: "Column two content",
  columnThreeContent: "Column three content",
  desktopColumnsSize: "33_33_33",
  tabletColumnsSize: "100_100_100",
  mobileColumnsSize: "100_100_100",
};