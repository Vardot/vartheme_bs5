import heading from './heading.twig';
import headingSettings from "./heading.settings.json";
import DrupalAttribute from 'drupal-attribute';
import twigCode from '!!raw-loader!./heading.twig';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';

export default {
  title: "Atoms/Heading",
  component: heading,
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
    tag: {
      control: { type: "select" },
      options: Object.keys(headingSettings.heading.tag)
    },
  },
}

export const Heading = (args) => {
  return (
    heading({
      attributes: new DrupalAttribute(),
      tag: args.tag ? headingSettings.heading.tag[args.tag] : "h1",
      heading_content: "Heading",
      utility_classes: [headingSettings.heading.tag[args.tag]],
      args: {...args}
    })
  )
}

Heading.args = {
  tag: "h1",
}