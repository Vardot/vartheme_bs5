import config from "./featuredCard.config.yml";
import featuredCard from './featuredCard.twig';
import twigCode from '!!raw-loader!./featuredCard.twig';
import DrupalAttribute from 'drupal-attribute';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';
import img  from "../../../../assets/images/placeholder-image.png";
import "./featuredCard.css";

export default {
  title : config.title,
  component: featuredCard,
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
    imageAltText: {
      content: { control: 'text' },
      description: config.image_alt_text.description,
      defaultValue: {summary: config.image_alt_text.default},
      table: config.image_alt_text.table,
    },
    headingTag: {
      control: { type: "select" },
      options: config.heading_tag.options,
      description: config.heading_tag.description,
      defaultValue: {summary: config.heading_tag.default},
      table: config.heading_tag.table,
    },
    headingContent: {
      content: { control: 'text' },
      description: config.heading.description,
      defaultValue: {summary: config.heading.default},
      table: config.heading.table,
    },
    content: {
      content: { control: 'text' },
      description: config.content.description,
      defaultValue: {summary: config.content.default},
      table: config.content.table,
    },
    linkText: {
      content: { control: 'text' },
      description: config.link_text.description,
      defaultValue: {summary: config.link_text.default},
      table: config.link_text.table,
    },
    linkHref: {
      content: { control: 'text' },
      description: config.link_href.description,
      defaultValue: {summary: config.link_href.default},
      table: config.link_href.table,
    },
    reverse: {
      content: { control: 'boolean' },
      description: config.reverse.description,
      defaultValue: {summary: config.reverse.default},
      table: config.reverse.table,
    },
    withImage: {
      content: { control: 'boolean' },
      description: config.with_image.description,
      defaultValue: {summary: config.with_image.default},
      table: config.with_image.table,
    },
    withLink: {
      content: { control: 'boolean' },
      description: config.with_link.description,
      defaultValue: {summary: config.with_link.default},
      table: config.with_link.table,
    },
  },
}

export const FeaturedCard = (args) => {
  return (
    featuredCard({
      attributes: new DrupalAttribute(),
      row_attributes: new DrupalAttribute(),
      image_wrapper_attributes: new DrupalAttribute(),
      card_body_attributes: new DrupalAttribute(),
      heading_attributes: new DrupalAttribute(),
      text_attributes: new DrupalAttribute(),
      link_attributes: new DrupalAttribute(),
      image: img,
      headingTag: args.headingTag,
      heading: args.heading,
      content: args.content,
      linkText: args.linkText,
      linkHref: args.linkHref,
      reverse: args.reverse,
      withImage: args.withImage,
      withLink: args.withLink,
      utility_classes: [],
      ...args
    })
  )
}

FeaturedCard.args = {
  imageAltText: 'alternative text',
  headingTag: 'h4',
  headingContent: 'Short placeholder heading',
  content: "This is placeholder text. Some quick example text to build on the card title and make up the bulk of the card's content.",
  linkText: "Go somewhere",
  linkHref: "#",
  reverse: false,
  withImage: true,
  withLink: true
}