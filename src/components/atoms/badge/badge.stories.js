import badge from './badge.twig';
import twigCode from '!!raw-loader!./badge.twig';
import badgeSettings from "./badge.settings.json";
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';

export default {
  title: 'Atoms/Badge',
  component: badge,
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
    label: {
      label: { control: 'text' }
    },
    backgroundColor: {
      control: { type: "select" },
      options: badgeSettings.badge.backgroundColor
    }
  }
};

export const Badge = (args) => (
  badge({
    html_tag: "span",
    color: "white",
    bg: args.backgroundColor ? args.backgroundColor : 'secondary',
    content: args.label,
    utility_classes: [],
    url: "",
    props: {...args},
  })
);

Badge.args = {
  label: "Badge",
  backgroundColor: "secondary"
};
