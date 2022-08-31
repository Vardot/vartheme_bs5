import config from './dropdownNav.config.yml';
import nav from '../nav.twig';
import twigCode from '!!raw-loader!../nav.twig';
import DrupalAttribute from 'drupal-attribute';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';

export default {
  title : config.title,
  component: nav,
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
    alignment: {
      control: { type: "select" },
      options: config.alignment.options,
      description: config.alignment.description,
      defaultValue: {summary: config.alignment.default},
      table: config.alignment.table,
    }
  },
};

export const DropdownNav = (args) => {
  return (
    nav({
      attributes: new DrupalAttribute(),
      items: config.items,
      alignment: args.alignment ? args.alignment : '',
      utility_classes: []
    })
  )
}

DropdownNav.args = {
  alignment: ''
};
