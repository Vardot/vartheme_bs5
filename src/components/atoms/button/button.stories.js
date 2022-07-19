// Button.stories.js|jsx|ts|tsx

import button from './button.twig';
import DrupalAttribute from 'drupal-attribute';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';

export default {
  title : 'Atoms/Button',
  component: button,
  parameters: {
    docs: {
      container: DocsContainer,
      page: DocsPage,
      source: {
        code: button,
        language: "twig",
      },
    },
  },
  argTypes: {
    backgroundColor: {
      control: {
        type: "select",
        options: [
          'primary',
          'secondary',
          'success',
          'danger',
          'warning',
          'info',
          'dark',
          'light',
          'link',
          'outline-primary',
          'outline-secondary',
          'outline-success',
          'outline-danger',
          'outline-warning',
          'outline-info',
          'outline-dark',
          'outline-light'
        ],
      }
    },
  },
};

const Template = (args) => button({...args});
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
      props: {...args},
    })
  )
}

Button.args = {
  label: 'Button',
};
