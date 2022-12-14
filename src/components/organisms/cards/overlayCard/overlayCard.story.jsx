import config from "./overlayCard.config.yml";
import overlayCard from "./overlayCard.twig";
import twigCode from "!!raw-loader!./overlayCard.twig";
import DrupalAttribute from "drupal-attribute";
import { DocsPage, DocsContainer } from "@storybook/addon-docs/blocks";
import img from "../../../../assets/images/placeholder-image.png";
import "../../../../../dist/css/components/organisms/cards/overlayCard/overlay-card.css";

export default {
  title: config.title,
  component: overlayCard,
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
    headingTag: {
      control: { type: "select" },
      options: config.heading_tag.options,
      description: config.heading_tag.description,
      defaultValue: { summary: config.heading_tag.default },
      table: config.heading_tag.table,
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
    horizontalAlignment: {
      control: { type: "select" },
      options: config.horizontal_alignment.options,
      description: config.horizontal_alignment.description,
      defaultValue: { summary: config.horizontal_alignment.default },
      table: config.horizontal_alignment.table,
    },
    verticalAlignment: {
      control: { type: "select" },
      options: config.vertical_alignment.options,
      description: config.vertical_alignment.description,
      defaultValue: { summary: config.vertical_alignment.default },
      table: config.vertical_alignment.table,
    }
  },
};

export const OverlayCard = (args) => {

  const image = `<img src=${img} />`;
  const content = `
    <${args.headingTag}>${args.heading}</${args.headingTag}>
    <p>${args.body}</p>
    <a href="https://www.vardot.com" class="btn btn-primary" target="_blank">${args.linkText}</a>
  `;

  return overlayCard({
    attributes: new DrupalAttribute(),
    content_attributes: new DrupalAttribute(),
    image: image,
    content: content,
    horizontal_alignment: args.horizontalAlignment,
    vertical_alignment: args.verticalAlignment,
    card_classes: [],
    content_classes: [],
    utility_classes: ["w-50"],
    ...args,
  });
};

OverlayCard.args = {
  headingTag: "h2",
  heading: "Card title",
  body: "Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Cras ultricies ligula sed magna dictum porta. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Proin eget tortor risus. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Vivamus suscipit tortor eget felis porttitor volutpat.",
  linkText: "Read more",
  horizontalAlignment: 'center',
  verticalAlignment: 'center'
};
