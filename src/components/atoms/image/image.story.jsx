import config from './image.config.yml';
import image from './image.twig';
import twigCode from '!!raw-loader!./image.twig';
import DrupalAttribute from 'drupal-attribute';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';
import image_src from '../../../assets/images/placeholder-image.png';

export default {
  title : config.title,
  component: image,
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
    align: {
      control: { type: "select" },
      options: config.align.options,
      description: config.align.description,
      defaultValue: {summary: config.align.default},
      table: config.align.table,
    },
    responsive: {
      control: { type: 'boolean' },
      description: config.responsive.description,
      defaultValue: {summary: config.responsive.default},
      table: config.responsive.table,
    },
    // label: {
    //   content: { control: 'text' },
    //   description: config.label.description,
    //   defaultValue: {summary: config.label.default},
    //   table: config.label.table,
    // },
    // media_link: {
    //   content: { control: 'text' },
    //   description: config.media_link.description,
    //   defaultValue: {summary: config.media_link.default},
    //   table: config.media_link.table,
    // },
    // content: {
    //   content: { control: 'text' },
    //   description: config.content.description,
    //   defaultValue: {summary: config.content.default},
    //   table: config.content.table,
    // },
    // width: {
    //   control: { type: "select" },
    //   options: config.width.options,
    //   description: config.width.description,
    //   defaultValue: {summary: config.width.default},
    //   table: config.width.table,
    // },
    // bg_color: {
    //   control: { type: "select" },
    //   options: config.bg_color.options,
    //   description: config.bg_color.description,
    //   defaultValue: {summary: config.bg_color.default},
    //   table: config.bg_color.table,
    // },
    // text_color: {
    //   control: { type: "select" },
    //   options: config.text_color.options,
    //   description: config.text_color.description,
    //   defaultValue: {summary: config.text_color.default},
    //   table: config.text_color.table,
    // },
    // border_radius: {
    //   control: { type: "select" },
    //   options: config.border_radius.options,
    //   description: config.border_radius.description,
    //   defaultValue: {summary: config.border_radius.default},
    //   table: config.border_radius.table,
    // },
  },
};

export const Image = (args) => {
  return (
    image({
      attributes: new DrupalAttribute(),
      responsive: false,
      align: '',
      src: image_src,
      utility_classes: [],
      ...args
    })
  )
}

Image.args = {
};
