import config from './input-date.config.yml';
import date from './input-date.twig';
import twigCode from '!!raw-loader!./input-date.twig';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';

export default {
  title : config.title,
  component: date,
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

// Date input story
export const Date = (args) => {
  return (
    date({
      type: 'date',
      size: args.size ? args.size : '',
      form_control: args.form_control,
      placeholder: 'Password',
      utility_classes: [],
    })
  )
}

Date.args = {
  size: '',
  form_control: true,
};
