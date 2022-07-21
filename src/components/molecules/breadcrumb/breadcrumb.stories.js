import breadcrumb from './breadcrumb.twig';
import twigCode from '!!raw-loader!./breadcrumb.twig';
const breadcrumbSettings = require('./breadcrumb.settings.json');
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';

export default {
  'title' : 'Molecules/Breadcrumb',
  component: breadcrumb,
  parameters: {
    docs: {
      container: DocsContainer,
      page: DocsPage,
      source: {
        code: twigCode,
      },
    },
  },
};

export const Breadcrumb = (args) => (
  breadcrumb({
    utility_classes: [],
    breadcrumb: breadcrumbSettings.breadcrumb.data,
    props: {...args},
  })
);

Breadcrumb.args = {};