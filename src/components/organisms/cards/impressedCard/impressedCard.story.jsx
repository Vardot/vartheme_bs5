import config from "./impressedCard.config.yml";
import impressedCard from "./impressedCard.twig";
import twigCode from "!!raw-loader!./impressedCard.twig";
import DrupalAttribute from "drupal-attribute";
import { DocsPage, DocsContainer } from "@storybook/addon-docs/blocks";
import img from "../../../../assets/images/placeholder-image.png";
import "../../../../../dist/css/components/organisms/cards/impressedCard/impressed-card.css";

export default {
  title: config.title,
  component: impressedCard,
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

export const ImpressedCard = (args) => {

  const image = `<img src=${img} />`;
  const content = `
    <${args.headingTag}>${args.heading}</${args.headingTag}>
    <p>${args.body}</p>
    <a href="https://www.vardot.com" class="btn btn-primary" target="_blank">${args.linkText}</a>
  `;

  return impressedCard({
    attributes: new DrupalAttribute(),
    content_attributes: new DrupalAttribute(),
    image: image,
    content: content,
    image_position: args.imagePosition,
    card_classes: [],
    content_classes: [],
    utility_classes: ["w-25"],
    ...args,
  });
};

ImpressedCard.args = {
  headingTag: "h4",
  heading: "Card title",
  body: "Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Cras ultricies ligula sed magna dictum porta. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Proin eget tortor risus. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Vivamus suscipit tortor eget felis porttitor volutpat.",
  linkText: "Read more",
  imagePosition: 'top'
};
