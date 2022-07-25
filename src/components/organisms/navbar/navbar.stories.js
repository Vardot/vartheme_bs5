import navbar from './navbar.twig';
import codeTwig from '!!raw-loader!./navbar.twig';
import DrupalAttribute from 'drupal-attribute';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';

/**
 * navbar component controls settings.
 */
const navbarSettings = require('./navbar.settings.json');

export default {
  title : 'Organisms/Navbar',
  component: navbar,
  parameters: {
    docs: {
      container: DocsContainer,
      page: DocsPage,
      source: {
        code: codeTwig,
      },
    },
  },
  argTypes: {
    container: {
      control: { type: "select" },
      options: navbarSettings.navbar.container
    },
    placement: {
      control: { type: "select" },
      options: navbarSettings.navbar.placement
    },
    color: {
      control: { type: "select" },
      options: navbarSettings.navbar.color
    },
    navbar_expand: {
      control: { type: "select" },
      options: navbarSettings.navbar.navbar_expand
    }
  }
};

export const Navbar = (args) => {
  return (
    navbar({
      attributes: new DrupalAttribute(),
      utility_classes: [],
      container: args.container ? args.container : 'fixed',
      placement: args.placement ? args.placement : 'sticky-top',
      color: args.color ? args.color : 'light',
      navbar_expand: args.navbar_expand ? args.navbar_expand : 'lg',
      props: {...args},
    })
  )
}

Navbar.args = {
  container: 'fixed',
  placement: 'sticky-top',
  color: 'light',
  navbar_expand: 'lg',
};
