import config from './input.config.yml';
import input from './input.twig';
import twigCode from '!!raw-loader!./input.twig';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';

export default {
  title : config.title,
  component: input,
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

// Textfield input story
export const Textfield = (args) => {
  return (
    input({
      type: 'text',
      size: args.size ? args.size : '',
      form_control: args.form_control,
      placeholder: 'Text Field',
      utility_classes: [],
    })
  )
}

Textfield.args = {
  size: '',
  form_control: true,
};
