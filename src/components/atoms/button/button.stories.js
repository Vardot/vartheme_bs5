// Button.stories.js|jsx|ts|tsx

import button from './button.twig';
import DrupalAttribute from 'drupal-attribute';
import twigCode from '!!raw-loader!./button.twig';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';

/**
 * Button component controls settings.
 */
const buttonSettings = require('./button.settings.json');

export default {
  title : 'Atoms/Button',
  component: button,
  parameters: {
    docs: {
      container: DocsContainer,
      page: DocsPage,
      source: {
        code: twigCode,
      },
    },
  },
  argTypes: {
    label: {
      label: { control: 'text' }
    },
    backgroundColor: {
      control: { type: "select" },
      options: buttonSettings.button.backgroundColor
    },
    size: {
      control: { type: 'radio' },
      options: Object.keys(buttonSettings.button.size),
    },
    disabled: {
      control: { type: 'boolean' }
    }
  },
};

// const Template = (args) => button({...args});
// export const primary = Template.bind({});
// primary.args = {
//   primary: true,
//   label: 'Button',
// };

export const Button = (args) => {
  return (
    button({
      attributes: new DrupalAttribute(),
      button_utility_classes: [],
      type: args.backgroundColor ? args.backgroundColor : 'primary',
      button_content: args.label,
      size: args.size ? buttonSettings.button.size[args.size] : '',
      disabled: args.disabled ? "disabled" : "",
      props: {...args},
    })
  )
}

Button.args = {
  label: 'Button',
  backgroundColor: 'primary',
  size: "Default",
  disabled: false
};