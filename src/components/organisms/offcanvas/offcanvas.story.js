import config from './offcanvas.config.yml';
import offcanvas from './offcanvas.twig';
import twigCode from '!!raw-loader!./offcanvas.twig';
import DrupalAttribute from 'drupal-attribute';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';

export default {
  title : config.title,
  component: offcanvas,
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
    button_label: {
      content: { control: 'text' },
      description: config.button_label.description,
      defaultValue: {summary: config.button_label.default},
      table: config.button_label.table,
    },
    offcanvas_title: {
      content: { control: 'text' },
      description: config.offcanvas_title.description,
      defaultValue: {summary: config.offcanvas_title.default},
      table: config.offcanvas_title.table,
    },
    offcanvas_body: {
      content: { control: 'text' },
      description: config.offcanvas_body.description,
      defaultValue: {summary: config.offcanvas_body.default},
      table: config.offcanvas_body.table,
    }
  },
};

export const Offcanvas = (args) => {
  return (
    offcanvas({
      main_button_attributes: new DrupalAttribute(),
      close_button_attributes: new DrupalAttribute(),
      dropdown_button_attributes: new DrupalAttribute(),
      button_label: args.show_button ? args.show_button : '',
      dropdown: config.dropdown,
      offcanvas_title: args.offcanvas_title ? args.offcanvas_title : '',
      offcanvas_body: args.offcanvas_body ? args.offcanvas_body : '',
      utility_classes: [],
      ...args
    })
  )
}

Offcanvas.args = {
  offcanvas_title: 'Offcanvas',
  offcanvas_body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet ex vitae eros malesuada pharetra. Praesent magna nibh, molestie ac suscipit non, convallis quis risus. Phasellus eu elit pharetra, mollis metus et, aliquet purus. In ultricies nisi orci, eu dignissim ex dignissim vitae. Nam sagittis nibh purus, quis feugiat enim tincidunt eget. Phasellus quis ante sapien. Curabitur eget varius metus.',
  button_label: 'Click'
};
