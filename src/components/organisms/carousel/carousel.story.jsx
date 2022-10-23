import config from './carousel.config.yml';
import carousel from './carousel.twig';
import twigCode from '!!raw-loader!./carousel.twig';
import DrupalAttribute from 'drupal-attribute';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';

export default {
  title : config.title,
  component: Carousel,
  options: { showPanel: true },
  parameters: {
    docs: {
      container: DocsContainer,
      page: DocsPage,
      source: {code: twigCode},
      description: config.description
    },
  },
  argTypes: {
    controls: {
      control: { type: 'boolean' },
      description: config.controls.description,
      defaultValue: {summary: config.controls.default},
      table: config.controls.table,
    },
    indicators: {
      control: { type: 'boolean' },
      description: config.indicators.description,
      defaultValue: {summary: config.indicators.default},
      table: config.indicators.table,
    }
  },
};

export const Carousel = (args) => {
  return (
    carousel({
      attributes: new DrupalAttribute(),
      utility_classes: [],
      controls: args.controls ? args.controls : config.controls.default,
      indicators: args.indicators ? args.indicators : config.indicators.default,
      id: config.data.id,
      items: config.data.items,
    })
  )
}

Carousel.args = {
  controls: config.controls.default,
  indicators: config.indicators.default
};
