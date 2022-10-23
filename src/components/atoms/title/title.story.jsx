export default { 'title' : 'Atoms/Title' };

import title from './title.twig';
import DrupalAttribute from 'drupal-attribute';

export const Title = () => (
  title({
    title_attributes: new DrupalAttribute(),
    title_prefix: "",
    title_suffix: "",
    titleTag: "h1",
    title: "Lorem Ipsum",
    displaySize: "4",
    title_utility_classes: []
  })
)