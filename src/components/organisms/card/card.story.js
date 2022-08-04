import config from './card.config.yml';
import card from './card.twig';
import twigCode from '!!raw-loader!./card.twig';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';
import img  from "../../../assets/images/placeholder-image.png";

export default {
  title : config.title,
  component: card,
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
    image: {
      control: { type: 'boolean' },
      description: config.image.description,
      defaultValue: {summary: config.image.default},
      table: config.image.table,
    },
    card_title: {
      control: {type: 'text'},
      description: config.card_title.description,
      defaultValue: {summary: config.card_title.default},
      table: config.card_title.table
    },
    card_body: {
      control: {type: 'text'},
      description: config.card_body.description,
      defaultValue: {summary: config.card_body.default},
      table: config.card_body.table
    }
  },
};


export const Card = (args) => (
  card({
    image: args.image ? args.image : false,
    width: "300px",
    img_src: img,
    card_title: args.card_title ? args.card_title : '',
    body: args.card_body ? args.card_body : '',
    link_url: "#",
    link_text: "Go somewhere"
  })
);

Card.args = {
  image: true,
  card_title: 'Card Title',
  card_body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque mattis enim et tellus pellentesque, ut egestas est congue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut tincidunt magna vitae viverra fringilla.',
}