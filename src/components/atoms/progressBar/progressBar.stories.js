import config from './progressBar.config.yml';
import progressbar from './progressBar.twig';
import twigCode from '!!raw-loader!./progressBar.twig';
import DrupalAttribute from 'drupal-attribute';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';

export default {
  title : config.title,
  component: progressbar,
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
    color: {
      control: { type: "select" },
      options: config.color.options,
      description: config.color.description,
      defaultValue: {summary: config.color.default},
      table: config.color.table,
    },
    striped: {
      control: { type: 'boolean' },
      description: config.striped.description,
      defaultValue: {summary: config.striped.default},
      table: config.striped.table,
    },
    animated: {
      control: { type: 'boolean' },
      description: config.animated.description,
      defaultValue: {summary: config.animated.default},
      table: config.animated.table,
    },
    label: {
      content: { control: 'text' },
      description: config.label.description,
      defaultValue: {summary: config.label.default},
      table: config.label.table,
    },
    percent: {
      content: { type: 'range', min: 0, max: 100, step: 1 },
      description: config.percent.description,
      defaultValue: {summary: config.percent.default},
      table: config.percent.table,
    },
    message: {
      content: { control: 'text' },
      description: config.message.description,
      defaultValue: {summary: config.message.default},
      table: config.message.table,
    }
  },
};

export const ProgressBar = (args) => {
  return (
    progressbar({
      attributes: new DrupalAttribute(),
      utility_classes: [],
      color: args.color ? args.color : config.color.default,
      striped: args.striped ? args.striped : '',
      animated: args.animated ? args.animated : '',
      label: args.label ? args.label : config.label.default,
      percent: args.percent ? args.percent : config.percent.default,
      message: args.message ? args.message : config.message.default
    })
  )
}

ProgressBar.args = {
  color: config.color.default,
  striped: true,
  animated: true,
  label: config.label.default,
  percent: config.percent.default,
  message: config.message.default
};
