import config from './footer.config.yml';
import footer from './footer.twig';
import nav from '../nav/nav.twig';
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
  argTypes: {
    text: {
      content: { control: 'text' },
      description: config.text.description,
      defaultValue: {summary: config.text.default},
      table: config.text.table,
    }
  },
};

export const Footer = (args) => {
  const footerNav = nav({
    attributes: new DrupalAttribute(),
    items: config.items,
    utility_classes: []
  });

  const footerContent = `
    <div class="d-flex justify-content-between align-items-center w-100 small">
      <div>${args.text}</div>
      ${footerNav}
    </div>
  `;

  return footer({
    content: footerContent,
    utility_classes: ["small"]
  })
};

Footer.args = {
  text: `Powered by <a href="https://www.vardot.com">Vardot</a>. Enjoy the free software, or get a quote for enterprise support and fully functional websites.`,
}