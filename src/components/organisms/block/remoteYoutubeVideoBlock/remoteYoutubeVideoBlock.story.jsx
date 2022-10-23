import config from './remoteYoutubeVideoBlock.config.yml';
import remoteYoutubeVideoBlock from './remoteYoutubeVideoBlock.twig';
import twigCode from '!!raw-loader!./remoteYoutubeVideoBlock.twig';
import DrupalAttribute from 'drupal-attribute';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';
import { remoteYoutubeVideoStringParser } from '../../../../helpers';
import thumb from '../../../../assets/images/placeholder-image.png';
import './remoteYoutubeVideoBlock.js';
import './remoteYoutubeVideoBlock.css';


export default {
  title : config.title,
  component: remoteYoutubeVideoBlock,
  options: { showPanel: true },
  parameters: {
    docs: {
      container: DocsContainer,
      page: DocsPage,
      source: {code: twigCode},
      description: config.description,
      iframeHeight: config.height,
      controls: {
        video_src: 'requiredFirst'
      }
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
    allow_thumb: {
      control: { type: 'boolean' },
      description: config.allow_thumb.description,
      defaultValue: {summary: config.allow_thumb.default},
      table: config.allow_thumb.table,
    },
    video_src: {
      content: { control: 'text' },
      description: config.video_src.description,
      defaultValue: {summary: config.video_src.default},
      table: config.video_src.table
    },
    media_width: {
      content: { control: 'text' },
      description: config.media_width.description,
      defaultValue: {summary: config.media_width.default},
      table: config.media_width.table
    },
    media_height: {
      content: { control: 'text' },
      description: config.media_height.description,
      defaultValue: {summary: config.media_height.default},
      table: config.media_height.table
    },
  },
};


export const RemoteYoutubeVideoBlock = (args) => {
  return (
    remoteYoutubeVideoBlock({
      attributes: new DrupalAttribute(),
      title_attributes: new DrupalAttribute(),
      title_tag: args.title_tag ? args.title_tag : 'h2',
      title: args.block_title ? args.block_title : '',
      iframe_src: remoteYoutubeVideoStringParser(args.video_src),
      media_width: args.media_width || '600',
      media_height: args.media_height || '400',
      thumb_src: thumb,
      ...args
    })
  )
}

RemoteYoutubeVideoBlock.args = {
  allow_title: true,
  title_tag: 'h2',
  block_title: 'Youtube video block title',
  allow_thumb: true,
  video_src: 'https://www.youtube.com/watch?v=5oXvF1Wam7k&ab_channel=USENIXmedia',
  media_width: '600',
  media_height: '400',
};
