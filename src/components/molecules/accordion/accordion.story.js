import config from "./accordion.config.yml";
import accordion from './accordion.twig';
import twigCode from '!!raw-loader!./accordion.twig';
import DrupalAttribute from 'drupal-attribute';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';

export default {
  title : config.title,
  component: accordion,
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
    heading: {
      heading: { control: 'text' },
      description: config.heading.description,
      defaultValue: {summary: config.heading.default},
      table: config.heading.table,
    },
    body: {
      heading: { control: 'text' },
      description: config.body.description,
      defaultValue: {summary: config.body.default},
      table: config.body.table,
    },
  }
};

export const Accordion = (args) => {
  return (
    accordion({
      heading: args.heading ? args.heading : 'Title',
      body: args.body ? args.body : 'Body',
      accordion_id: 'accordionExample',
      heading_id: 'headingOne',
      collapse_id: 'collapseOne'
    })
  )
}

Accordion.args = {
  heading: 'Accordion item heading',
  body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi rhoncus sollicitudin fermentum. Sed lobortis, felis non bibendum tristique, orci nisl porttitor libero, eget feugiat nulla eros ac felis. Praesent ac lobortis risus, sed luctus turpis. Curabitur sed ex ex. Praesent vitae tempus nunc. Donec facilisis diam vitae ipsum sodales, a efficitur sapien maximus. Vivamus pulvinar mauris sed lorem vulputate, in dignissim odio laoreet. Sed et libero eu magna blandit venenatis eu sit amet risus. Morbi non elit dui. Donec est risus, molestie ut urna id, luctus venenatis elit. Phasellus cursus nulla felis, ac maximus lacus semper a.'
};
