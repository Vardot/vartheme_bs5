import config from './cta.config.yml';
import cta from './cta.twig';
import twigCode from '!!raw-loader!./cta.twig';
import DrupalAttribute from 'drupal-attribute';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';

export default {
  title : config.title,
  component: cta,
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
    cta_width: {
      control: { type: "select" },
      options: config.cta_width.options,
      description: config.cta_width.description,
      defaultValue: {summary: config.cta_width.default},
      table: config.cta_width.table,
    },
    bg_color: {
      control: { type: "select" },
      options: config.bg_color.options,
      description: config.bg_color.description,
      defaultValue: {summary: config.bg_color.default},
      table: config.bg_color.table,
    },
    cta_color: {
      control: { type: "select" },
      options: config.cta_color.options,
      description: config.cta_color.description,
      defaultValue: {summary: config.cta_color.default},
      table: config.cta_color.table,
    },
    border_radius: {
      control: { type: "select" },
      options: config.border_radius.options,
      description: config.border_radius.description,
      defaultValue: {summary: config.border_radius.default},
      table: config.border_radius.table,
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
    button_content: {
      content: { control: 'text' },
      description: config.button_content.description,
      defaultValue: {summary: config.button_content.default},
      table: config.button_content.table,
    },
    button_color: {
      control: { type: "select" },
      options: config.button_color.options,
      description: config.button_color.description,
      defaultValue: {summary: config.button_color.default},
      table: config.button_color.table,
    },
  },
};

export const CTA = (args) => {
  return (
    cta({
      title_tag: args.title_tag ? args.title_tag : 'h2',
      heading: args.heading ? args.heading : '',
      content: args.content ? args.content : '',
      cta_width: args.cta_width ? args.cta_width : 'w-50',
      bg_color: args.bg_color ? args.bg_color : 'white',
      cta_color: args.cta_color ? args.cta_color : 'dark',
      border_radius: args.border_radius ? args.border_radius : '0',
      attributes: new DrupalAttribute(),
      button_content: args.button_content ? args.button_content : '',
      button_color: args.button_color ? args.button_color : 'primary',
      outline: false,
      utility_classes: [],
      ...args
    })
  )
}

CTA.args = {
  cta_width: 'w-50',
  cta_color: 'dark',
  bg_color: 'white',
  border_radius: '0',
  title_tag: 'h2',
  heading: 'CTA Heading',
  content: 'Morbi magna ex, volutpat sit amet erat vitae, dictum bibendum massa. Vivamus interdum accumsan luctus. Curabitur dignissim efficitur ex, in posuere lacus molestie sit amet. Aenean semper euismod sollicitudin. Integer vitae ultricies erat. Morbi fringilla lorem at pretium suscipit. Duis turpis mi, porta eu leo nec, consectetur accumsan lectus. Quisque dapibus, enim ut vulputate ornare, diam nibh rhoncus est, sit amet pellentesque risus ante in neque. Phasellus eu fermentum elit, vitae imperdiet tellus. Vivamus molestie ultricies metus, in tristique sem venenatis quis. Vestibulum viverra nisi nec lorem ultrices, ut luctus ex rutrum. Proin eget magna leo.',
  cta_width: 'w-50',
  button_content: 'Click here!',
  button_color: 'primary'
};
