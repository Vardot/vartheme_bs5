import config from './page.config.yml';
import navConfig from '../../organisms/nav/basicNav/basicNav.config.yml';
import page from './page.twig';
import navbarBrand from '../../molecules/navbar-brand/navbar-brand.twig';
import nav from '../../organisms/nav/nav.twig';
import footer from '../../organisms/footer/footer.twig';
import block from '../../organisms/block/block.twig';
import twigCode from '!!raw-loader!./page.twig';
import DrupalAttribute from 'drupal-attribute';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';
import logo from '../../../assets/images/logo.svg';
import "../../../../dist/css/components/pages/page/page.css";

export default {
  title : config.title,
  component: page,
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
    content: {
      content: { control: 'text' }
    }
  }
};

export const basicPage = (args) => {
  return (
    page({
      attributes: new DrupalAttribute(),
      page: {
        navbar_branding: navbarBrand({
          image_path: logo,
          width: 'auto',
          height: 'auto'
        }),
        navbar_right: nav({
          attributes: new DrupalAttribute(),
          items: navConfig.items,
          alignment: 'right',
          utility_classes: []
        }),
        content: args.content,
        footer: footer({
          content: block({
            title_attributes: new DrupalAttribute(),
            label: args.footer_label ? args.footer_label : '',
            content: args.footer_content ? args.footer_content : '',
          })
        })
      },
      ...args,
    })
  )
}

basicPage.args = {
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec dui leo. Duis pellentesque diam nec nisl varius pretium. Curabitur iaculis pretium lacus. Donec non ligula a libero tincidunt bibendum. In quis gravida dolor. In eu egestas velit, sit amet varius massa. Proin lacinia vel ipsum sit amet imperdiet. Suspendisse cursus auctor mollis. Nunc felis ex, eleifend mattis turpis vel, dictum posuere risus. Donec a scelerisque felis, sed imperdiet velit.',
  footer_label: 'Footer label',
  footer_content: '©Copyright, all rights reserved.',
};
