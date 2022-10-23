import config from "./tabs.config.yml";
import tabs from './tabs.twig';
import twigCode from '!!raw-loader!./tabs.twig';
import DrupalAttribute from 'drupal-attribute';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';
import './tabs.css';

export default {
  title : config.title,
  component: tabs,
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
    shape: {
      control: { type: "select" },
      options: config.shape.options,
      description: config.shape.description,
      defaultValue: {summary: config.shape.default},
      table: config.shape.table,
    }
  }
};

export const Tabs = (args) => {
  return (
    tabs({
      attributes: new DrupalAttribute(),
      tabs_id: 'nav-tabs',
      shape: args.shape ? args.shape : 'tabs',
      items: config.tabs
    })
  )
}

Tabs.args = {
  shape: 'tabs'
};
