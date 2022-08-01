import navbar_brand from './navbar-brand.twig';
import twigCode from '!!raw-loader!./navbar-brand.twig';
import config from "./navbar-brand.config.yml";
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';
import logo from "../../../assets/images/logo.svg";

export default {
  title : config.title,
  component: navbar_brand,
  parameters: {
    docs: {
      container: DocsContainer,
      page: DocsPage,
      source: {
        code: twigCode,
      },
      description: config.description,
    },
  },
  argTypes: {
    text: {
      control: { type: "text" },
      options: config.text,
      description: config.text.description,
      defaultValue: {summary: config.text.default},
    },
    path: {
      control: { type: "text" },
      options: config.path.value,
      description: config.path.description,
      defaultValue: {summary: config.path.default},
    },
    width: {
      control: { type: "text" },
      options: config.width.value,
      description: config.width.description,
      defaultValue: {summary: config.width.default},
    },
    height: {
      control: { type: "text" },
      options: config.height.value,
      description: config.height.description,
      defaultValue: {summary: config.height.default},
    }
  }
}

export const NavbarBrand = (args) => {
  return (
    navbar_brand({
      text: args.text ? args.text : "",
      image_path: logo,
      path: args.path ? args.path : '/',
      width: args.width ? args.width : '',
      height: args.height ? args.height : 'auto'
    })
  )
}

NavbarBrand.args = {
  text: '',
  path: '/',
  width: "auto",
  height: 'auto'
};
