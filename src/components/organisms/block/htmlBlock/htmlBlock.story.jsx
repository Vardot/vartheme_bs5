import config from './htmlBlock.config.yml';
import htmlBlock from './htmlBlock.twig';
import twigCode from '!!raw-loader!./htmlBlock.twig';
import DrupalAttribute from 'drupal-attribute';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';

export default {
  title : config.title,
  component: htmlBlock,
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
    label: {
      content: { control: 'text' },
      description: config.label.description,
      defaultValue: {summary: config.label.default},
      table: config.label.table,
    },
    body: {
      content: { control: 'text' },
      description: config.body.description,
      defaultValue: {summary: config.body.default},
      table: config.body.table,
    },
  },
};

export const HtmlBlock = (args) => {
  return (
    htmlBlock({
      attributes: new DrupalAttribute(),
      tag: 'div',
      label: args.label ? args.label : '',
      body: args.body ? args.body : '',
      ...args
    })
  )
}

HtmlBlock.args = {
  label: 'Block Title',
  body: '<div><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum posuere imperdiet leo sit amet consectetur. Aliquam in dapibus nibh. Praesent quis volutpat sem. Integer pellentesque ex quam, sit amet efficitur risus bibendum ut. Phasellus ipsum erat, suscipit sed lobortis rhoncus, congue eget urna. Praesent tincidunt justo odio, ac finibus odio euismod vitae. In aliquet efficitur est, sed congue justo. Aenean dignissim suscipit turpis, in tincidunt dolor pulvinar quis. Ut vel luctus felis. Sed ut porttitor nisi, ac volutpat eros. Quisque sed leo consequat, rutrum leo sit amet, consectetur neque. Nullam faucibus erat lacus, eu dignissim neque scelerisque at.</p></div>',
};
