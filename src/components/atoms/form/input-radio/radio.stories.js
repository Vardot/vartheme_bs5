import config from './input-radio.config.yml';
import radio from './input-radio.twig';
import twigCode from '!!raw-loader!./input-radio.twig';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';

export default {
  title : config.title,
  component: radio,
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

// Radio input story
export const Radio = (args) => {
  return (
    radio({
      type: 'radio',
      size: args.size ? args.size : '',
      form_control: args.form_control,
      utility_classes: [],
    })
  )
}

Radio.args = {
  size: '',
  form_control: false,
};
