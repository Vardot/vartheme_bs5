import config from './input-email.config.yml';
import email from './input-email.twig';
import twigCode from '!!raw-loader!./input-email.twig';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';

export default {
  title : config.title,
  component: email,
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

// Email input story
export const Email = (args) => {
  return (
    email({
      type: 'email',
      size: args.size ? args.size : '',
      form_control: args.form_control,
      placeholder: 'example@example.com',
      utility_classes: [],
    })
  )
}

Email.args = {
  size: '',
  form_control: true,
};
