import config from './navbar.config.yml';
import navConfig from '../nav/basicNav/basicNav.config.yml';
import navbar from './navbar.twig';
import navbarBrand from '../../molecules/navbar-brand/navbar-brand.twig';
import nav from '../nav/nav.twig';
import twigCode from '!!raw-loader!./navbar.twig';
import DrupalAttribute from 'drupal-attribute';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';
import logo from "../../../assets/images/logo.svg";
import lightLogo from "../../../assets/images/light-logo.svg";
import "./navbar.css";

export default {
  title : config.title,
  component: navbar,
  parameters: {
    docs: {
      container: DocsContainer,
      page: DocsPage,
      source: {
        code: twigCode,
      },
    },
  },
  argTypes: {
    container: {
      control: { type: "select" },
      options: config.container.options,
      description: config.container.description,
      defaultValue: {summary: config.container.default},
      table: config.container.table
    },
    color: {
      control: { type: "select" },
      options: config.color.options,
      description: config.color.description,
      defaultValue: {summary: config.color.default},
      table: config.color.table
    },
    placement: {
      control: { type: "select" },
      options: config.placement.options,
      description: config.placement.description,
      defaultValue: {summary: config.placement.default},
      table: config.placement.table
    },
    navbar_expand: {
      control: { type: "select" },
      options: config.navbar_expand.options,
      description: config.navbar_expand.description,
      defaultValue: {summary: config.navbar_expand.default},
      table: config.navbar_expand.table
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
      // Navbar brand component
      branding: navbarBrand({
        image_path: args.color === 'dark' ? lightLogo : logo,
        width: args.color === 'dark' ? 200 : 'auto',
        height: 'auto'
      }),
      // Nav component
      right: nav({
        attributes: new DrupalAttribute(),
        items: navConfig.items,
        alignment: 'right',
        utility_classes: ['w-100']
      }),
      props: {...args},
    })
  )
}

Navbar.args = {
  container: 'fixed',
  color: 'light',
  placement: 'sticky-top',
  navbar_expand: 'lg',
};
