import config from './closeButton.config.yml';
import closeButton from './closeButton.twig';
import twigCode from '!!raw-loader!./closeButton.twig';
import DrupalAttribute from 'drupal-attribute';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';

export default {
  title : config.title,
  component: CloseButton,
  options: { showPanel: false },
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
    }
  },
};

export const CloseButton = (args) => {
  return (
    closeButton({
      attributes: new DrupalAttribute(),
      utility_classes: [],
      size: args.size ? args.size : '',
    })
  )
}

CloseButton.args = {
  size: ""
};
