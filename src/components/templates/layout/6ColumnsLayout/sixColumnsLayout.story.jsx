import config from "./sixColumnsLayout.config.yml";
import sixColumnsLayout from "./sixColumnsLayout.twig";
import twigCode from "!!raw-loader!./sixColumnsLayout.twig";
import DrupalAttribute from "drupal-attribute";
import { DocsPage, DocsContainer } from "@storybook/addon-docs/blocks";
import { getColumnsSizeClasses } from "../../../../helpers";
import "./sixColumnsLayout.css";

export default {
  title: config.title,
  component: sixColumnsLayout,
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
    columnFiveContent: {
      content: { control: "text" },
      description: config.column_5_content.description,
      defaultValue: { summary: config.column_5_content.default },
      table: config.column_5_content.table,
    },
    columnSixContent: {
      content: { control: "text" },
      description: config.column_6_content.description,
      defaultValue: { summary: config.column_6_content.default },
      table: config.column_6_content.table,
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

export const _6ColumnsLayout = (args) => {
  const desktopColumnsClasses = getColumnsSizeClasses(args.desktopColumnsSize, "lg");
  const tabletColumnsClasses = getColumnsSizeClasses(args.tabletColumnsSize, "md");
  const mobileColumnsClasses = getColumnsSizeClasses(args.mobileColumnsSize, "sm");

  const columnsData = [
    {
      attributes: new DrupalAttribute(),
      size: `varbase-col ${desktopColumnsClasses[0]} ${tabletColumnsClasses[0]} ${mobileColumnsClasses[0]}`,
      content: args.columnOneContent,
    },
    {
      attributes: new DrupalAttribute(),
      size: `varbase-col ${desktopColumnsClasses[1]} ${tabletColumnsClasses[1]} ${mobileColumnsClasses[1]}`,
      content: args.columnTwoContent,
    },
    {
      attributes: new DrupalAttribute(),
      size: `varbase-col ${desktopColumnsClasses[2]} ${tabletColumnsClasses[2]} ${mobileColumnsClasses[2]}`,
      content: args.columnThreeContent,
    },
    {
      attributes: new DrupalAttribute(),
      size: `varbase-col ${desktopColumnsClasses[3]} ${tabletColumnsClasses[3]} ${mobileColumnsClasses[3]}`,
      content: args.columnFourContent,
    },
    {
      attributes: new DrupalAttribute(),
      size: `varbase-col ${desktopColumnsClasses[4]} ${tabletColumnsClasses[4]} ${mobileColumnsClasses[4]}`,
      content: args.columnFiveContent,
    },
    {
      attributes: new DrupalAttribute(),
      size: `varbase-col ${desktopColumnsClasses[5]} ${tabletColumnsClasses[5]} ${mobileColumnsClasses[5]}`,
      content: args.columnSixContent,
    },
  ]

  return sixColumnsLayout({
    attributes: new DrupalAttribute(),
    container_attributes: new DrupalAttribute(),
    row_attributes: new DrupalAttribute(),
    col_attributes: new DrupalAttribute(),
    row: args.row,
    container: args.container,
    container_classes: [],
    row_classes: [],
    columns: columnsData
  });
};

_6ColumnsLayout.args = {
  row: true,
  container: true,
  columnOneContent: "Column 1 content",
  columnTwoContent: "Column 2 content",
  columnThreeContent: "Column 3 content",
  columnFourContent: "Column 4 content",
  columnFiveContent: "Column 5 content",
  columnSixContent: "Column 6 content",
  desktopColumnsSize: "16_16_16_16_16_16",
  tabletColumnsSize: "33_33_33_33_33_33",
  mobileColumnsSize: "100_100_100_100_100_100",
};
