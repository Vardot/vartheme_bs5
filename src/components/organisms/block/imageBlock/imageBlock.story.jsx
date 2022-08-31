import config from './imageBlock.config.yml';
import imageBlock from './imageBlock.twig';
import image from '../../../atoms/image/image.twig';
import twigCode from '!!raw-loader!./imageBlock.twig';
import DrupalAttribute from 'drupal-attribute';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';
import image_src from '../../../../assets/images/placeholder-image.png';

export default {
  title : config.title,
  component: imageBlock,
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
    allow_title: {
      control: { type: 'boolean' },
      description: config.allow_title.description,
      defaultValue: {summary: config.allow_title.default},
      table: config.allow_title.table,
    },
    title_tag: {
      control: { type: 'select' },
      options: config.title_tag.options,
      description: config.title_tag.description,
      defaultValue: {summary: config.title_tag.default},
      table: config.title_tag.table,
      if: { arg: 'allow_title' }
    },
    block_title: {
      content: { control: 'text' },
      description: config.block_title.description,
      defaultValue: {summary: config.block_title.default},
      table: config.block_title.table,
      if: { arg: 'allow_title' }
    },
    link: {
      control: { type: 'boolean' },
      description: config.link.description,
      defaultValue: {summary: config.link.default},
      table: config.link.table,
    },
    link_href: {
      content: { control: 'text' },
      description: config.link_href.description,
      defaultValue: {summary: config.link_href.default},
      table: config.link_href.table,
      if: { arg: 'link' }
    },
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
    }
  },
};

export const ImageBlock = (args, imageArgs) => {
  return (
    imageBlock({
      attributes: new DrupalAttribute(),
      title_attributes: new DrupalAttribute(),
      title_tag: args.title_tag ? args.title_tag : 'h2',
      title: args.block_title ? args.block_title : '',
      link_href: args.link_href ? args.link_href : '',
      content: image({
        attributes: new DrupalAttribute(),
        responsive: args.responsive,
        align: args.align,
        src: image_src,
        utility_classes: [],
        ...imageArgs
      }),
      ...args
    })
  )
}

ImageBlock.args = {
  allow_title: true,
  title_tag: 'h2',
  block_title: 'Image block title',
  link: false,
  link_href: 'https://www.vardot.com',
  responsive: true,
  align: ''
};