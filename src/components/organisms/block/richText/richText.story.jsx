import config from './richText.config.yml';
import richText from './richText.twig';
import twigCode from '!!raw-loader!./richText.twig';
import DrupalAttribute from 'drupal-attribute';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';

export default {
  title : config.title,
  component: richText,
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
    title_tag: {
      control: { type: "select" },
      options: config.title_tag.options,
      description: config.title_tag.description,
      defaultValue: {summary: config.title_tag.default},
      table: config.title_tag.table,
    },
    heading: {
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
    width: {
      control: { type: "select" },
      options: config.width.options,
      description: config.width.description,
      defaultValue: {summary: config.width.default},
      table: config.width.table,
    },
    bg_color: {
      control: { type: "select" },
      options: config.bg_color.options,
      description: config.bg_color.description,
      defaultValue: {summary: config.bg_color.default},
      table: config.bg_color.table,
    },
    text_color: {
      control: { type: "select" },
      options: config.text_color.options,
      description: config.text_color.description,
      defaultValue: {summary: config.text_color.default},
      table: config.text_color.table,
    },
    border_radius: {
      control: { type: "select" },
      options: config.border_radius.options,
      description: config.border_radius.description,
      defaultValue: {summary: config.border_radius.default},
      table: config.border_radius.table,
    },
  },
};

export const RichText = (args) => {
  return (
    richText({
      attributes: new DrupalAttribute(),
      heading_attributes: new DrupalAttribute(),
      tag: 'div',
      title_tag: args.title_tag ? args.title_tag : 'h2',
      heading: args.heading ? args.heading : '',
      content: args.content ? args.content : '',
      width: args.width ? args.width : 'w-50',
      bg_color: args.bg_color ? args.bg_color : 'white',
      text_color: args.cta_color ? args.cta_color : 'dark',
      border_radius: args.border_radius ? args.border_radius : '0',
      ...args
    })
  )
}

RichText.args = {
  title_tag: 'h2',
  heading: 'Rich Title',
  content: 'Morbi magna ex, volutpat sit amet erat vitae, dictum bibendum massa. Vivamus interdum accumsan luctus. Curabitur dignissim efficitur ex, in posuere lacus molestie sit amet. Aenean semper euismod sollicitudin. Integer vitae ultricies erat. Morbi fringilla lorem at pretium suscipit. Duis turpis mi, porta eu leo nec, consectetur accumsan lectus. Quisque dapibus, enim ut vulputate ornare, diam nibh rhoncus est, sit amet pellentesque risus ante in neque. Phasellus eu fermentum elit, vitae imperdiet tellus. Vivamus molestie ultricies metus, in tristique sem venenatis quis. Vestibulum viverra nisi nec lorem ultrices, ut luctus ex rutrum. Proin eget magna leo.',
  width: 'w-50',
  bg_color: 'white',
  text_color: 'dark',
  border_radius: '0',
};
