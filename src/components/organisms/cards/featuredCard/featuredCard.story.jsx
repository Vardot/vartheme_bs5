import config from "./featuredCard.config.yml";
import featuredCard from "./featuredCard.twig";
import twigCode from "!!raw-loader!./featuredCard.twig";
import DrupalAttribute from "drupal-attribute";
import { DocsPage, DocsContainer } from "@storybook/addon-docs/blocks";
import img from "../../../../assets/images/placeholder-image.png";
import "../../../../../dist/css/components/organisms/cards/featuredCard/featured-card.css";

export default {
  title: config.title,
  component: featuredCard,
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
    columnsSmSize: {
      control: { type: "select" },
      options: config.columns_sm_size.options,
      description: config.columns_sm_size.description,
      defaultValue: { summary: config.columns_sm_size.default },
      table: config.columns_sm_size.table,
    },
    columnsMdSize: {
      control: { type: "select" },
      options: config.columns_md_size.options,
      description: config.columns_md_size.description,
      defaultValue: { summary: config.columns_md_size.default },
      table: config.columns_md_size.table,
    },
    columnsLgSize: {
      control: { type: "select" },
      options: config.columns_lg_size.options,
      description: config.columns_lg_size.description,
      defaultValue: { summary: config.columns_lg_size.default },
      table: config.columns_lg_size.table,
    },
    columnsXlSize: {
      control: { type: "select" },
      options: config.columns_xl_size.options,
      description: config.columns_xl_size.description,
      defaultValue: { summary: config.columns_xl_size.default },
      table: config.columns_xl_size.table,
    },
    columnsXxlSize: {
      control: { type: "select" },
      options: config.columns_xxl_size.options,
      description: config.columns_xxl_size.description,
      defaultValue: { summary: config.columns_xxl_size.default },
      table: config.columns_xxl_size.table,
    },
    headingTag: {
      control: { type: "select" },
      options: config.heading_tag.options,
      description: config.heading_tag.description,
      defaultValue: { summary: config.heading_tag.default },
      table: config.heading_tag.table,
    },
    imagePosition: {
      control: { type: "select" },
      options: config.image_position.options,
      description: config.image_position.description,
      defaultValue: { summary: config.image_position.default },
      table: config.image_position.table,
    },
    heading: {
      content: { control: 'text' },
      description: config.heading.description,
      defaultValue: {summary: config.heading.default},
      table: config.heading.table,
    },
    body: {
      content: { control: 'text' },
      description: config.body.description,
      defaultValue: {summary: config.body.default},
      table: config.body.table,
    },
    linkText: {
      content: { control: 'text' },
      description: config.link.description,
      defaultValue: {summary: config.link.default},
      table: config.link.table,
    },
  },
};

export const FeaturedCard = (args) => {

  const image = `<img src=${img} />`;
  const content = `
    <${args.headingTag}>${args.heading}</${args.headingTag}>
    <p>${args.body}</p>
    <a href="https://www.vardot.com" class="btn btn-primary" target="_blank">${args.linkText}</a>
  `;

  return featuredCard({
    card_attributes: new DrupalAttribute(),
    row_attributes: new DrupalAttribute(),
    left_column_attributes: new DrupalAttribute(),
    right_column_attributes: new DrupalAttribute(),
    headingTag: args.headingTag,
    columns_sm_size: args.columnsSmSize,
    columns_md_size: args.columnsMdSize,
    columns_lg_size: args.columnsLgSize,
    columns_xl_size: args.columnsXlSize,
    columns_xxl_size: args.columnsXxlSize,
    image_position: args.imagePosition,
    image: image,
    content: content,
    utility_classes: ["w-50"],
    ...args,
  });
};

FeaturedCard.args = {
  columnsSmSize: "12_12",
  columnsMdSize: "6_6",
  columnsLgSize: "",
  columnsXlSize: "",
  columnsXxlSize: "",
  headingTag: "h4",
  imagePosition: 'left',
  heading: "Card title",
  body: "Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Cras ultricies ligula sed magna dictum porta. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Proin eget tortor risus. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Vivamus suscipit tortor eget felis porttitor volutpat.",
  linkText: "Read more"
};
