import config from './input-color.config.yml';
import color from './input-color.twig';
import twigCode from '!!raw-loader!./input-color.twig';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';

export default {
  title : config.title,
  component: color,
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
    size: {
      control: { type: "select" },
      options: config.size.options,
      description: config.size.description,
      defaultValue: {summary: config.size.default},
      table: config.size.table,
    },
    form_control: {
      control: {type: "boolean"},
      description: config.form_control.description,
      defaultValue: {summary: config.form_control.default},
      table: config.form_control.table
    }
  },
};

// Color input story
export const Color = (args) => {
  return (
    color({
      type: 'color',
      size: args.size ? args.size : '',
      form_control: args.form_control,
      utility_classes: [],
    })
  )
}

Color.args = {
  size: '',
  form_control: false,
};
