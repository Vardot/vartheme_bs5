import config from './listGroup.config.yml';
import listGroup from './listGroup.twig';
import twigCode from '!!raw-loader!./listGroup.twig';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';

export default {
  title : config.title,
  component: listGroup,
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
    tag: {
      control: { type: "select" },
      options: config.tag.options,
      description: config.tag.description,
      defaultValue: {summary: config.tag.default},
      table: config.tag.table,
    },
    flush: {
      control: { type: 'boolean' },
      description: config.flush.description,
      defaultValue: {summary: config.flush.default},
      table: config.flush.table,
    },
    horizontal: {
      control: { type: 'boolean' },
      description: config.horizontal.description,
      defaultValue: {summary: config.horizontal.default},
      table: config.horizontal.table,
    },
    items_bg_color: {
      control: { type: "select" },
      options: config.items_bg_color.options,
      description: config.items_bg_color.description,
      defaultValue: {summary: config.items_bg_color.default},
      table: config.items_bg_color.table,
    },
  },
};

export const ListGroup = (args) => {
  return (
    listGroup({
      tag: args.tag ? args.tag : 'ul',
      flush: args.flush ? args.flush : false,
      horizontal: args.horizontal ? args.horizontal : false,
      items_bg_color: args.items_bg_color ? args.items_bg_color : '',
      items: config.items,
      ...args
    })
  )
}

ListGroup.args = {
  tag: 'ul',
  flush: false,
  horizontal: false,
  items_bg_color: ''
};
