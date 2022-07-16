export default { title: 'Molecules/Blocks' };

import block from './block.twig';
// import block_with_image from './block-with-image.twig';
import DrupalAttribute from 'drupal-attribute';

export const Block = () => (
  block({
    title_attributes: new DrupalAttribute(),
    id: "",
    bundle: "",
    html_tag: "div",
    title_prefix: "",
    title_suffix: "",
    label: "I'm a block!",
    content: "Lorem ipsum dolor sit amet."
  })
);