import config from './breadcrumb.config.yml'
import breadcrumb from './breadcrumb.twig';
import twigCode from '!!raw-loader!./breadcrumb.twig';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';

export default {
  'title' : config.title,
  component: breadcrumb,
  options: { showPanel: false },
  parameters: {
    docs: {
      container: DocsContainer,
      page: DocsPage,
      source: {code: twigCode},
      description: config.description,
      iframeHeight: config.height
    },
  }
};

export const Breadcrumb = (args) => (
  breadcrumb({
    utility_classes: [],
    breadcrumb: config.data,
    props: {...args},
  })
);

Breadcrumb.args = {};