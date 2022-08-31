import config from './footer.config.yml';
import footer from './footer.twig';
import block from '../block/block.twig';
import twigCode from '!!raw-loader!./footer.twig';
import DrupalAttribute from 'drupal-attribute';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';

export default {
  title : config.title,
  component: footer,
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
};

export const Footer = (args) => (
  footer({
    content: block({
      title_attributes: new DrupalAttribute(),
      label: args.label ? args.label : '',
      content: args.content ? args.content : '',
    })
  })
);

Footer.args = {
  label: "Footer block title",
  content: "©Copyright, all rights reserved."
}