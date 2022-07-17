export default { 'title' : 'Atoms/Button' };

import button from './button.twig';
import DrupalAttribute from 'drupal-attribute';

const buttonVariant = [
  'primary',
  'secondary',
  'success',
  'danger',
  'warning',
  'info',
  'dark',
  'light',
  'link',
  'outline-primary',
  'outline-secondary',
  'outline-success',
  'outline-danger',
  'outline-warning',
  'outline-info',
  'outline-dark',
  'outline-light'
];

export const Button = (props) => (
  button({
    attributes: new DrupalAttribute(),
    button_utility_classes: [],
    type: 'primary',
    button_content: 'Button',
    variations: buttonVariant
  })
)