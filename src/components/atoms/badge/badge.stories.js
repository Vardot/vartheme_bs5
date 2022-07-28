import config from "./badge.config.yml";
import badge from './badge.twig';
import twigCode from '!!raw-loader!./badge.twig';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';

export default {
  title : config.title,
  component: badge,
  parameters: {
    options: { showPanel: false },
    docs: {
      container: DocsContainer,
      page: DocsPage,
      source: {code: twigCode},
      description: config.description,
      iframeHeight: config.height
    },
  },
  argTypes: {
    color: {
      control: { type: "select" },
      options: config.color.options,
      description: config.color.description,
      defaultValue: {summary: config.color.default},
      table: config.color.table,
    },
    content: {
      content: { control: 'text' }
    },
  }
};

export const Badge = (args) => (
  badge({
    attributes: new DrupalAttribute(),
    utility_classes: [],
    tag: "span",
    background_color: args.color ? args.color : 'text-bg-secondary',
    content: args.content,
    url: "",
    props: {...args},
  })
);

Badge.args = {
  label: "Badge",
  color: "text-bg-secondary"
};
