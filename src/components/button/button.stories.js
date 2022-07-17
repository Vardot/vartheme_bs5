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

export const primary = (props) => (
  button({
    attributes: new DrupalAttribute(),
    button_utility_classes: [],
    type: 'primary',
    button_content: 'Button'
  })
)

export const secondary = (props) => (
  button({
    attributes: new DrupalAttribute(),
    button_utility_classes: [],
    type: 'secondary',
    button_content: 'Button'
  })
)

export const success = (props) => (
  button({
    attributes: new DrupalAttribute(),
    button_utility_classes: [],
    type: 'success',
    button_content: 'Button'
  })
)

export const danger = (props) => (
  button({
    attributes: new DrupalAttribute(),
    button_utility_classes: [],
    type: 'danger',
    button_content: 'Button'
  })
)

export const info = (props) => (
  button({
    attributes: new DrupalAttribute(),
    button_utility_classes: [],
    type: 'info',
    button_content: 'Button'
  })
)

export const warning = (props) => (
  button({
    attributes: new DrupalAttribute(),
    button_utility_classes: [],
    type: 'warning',
    button_content: 'Button'
  })
)

export const dark = (props) => (
  button({
    attributes: new DrupalAttribute(),
    button_utility_classes: [],
    type: 'dark',
    button_content: 'Button'
  })
)

export const light = (props) => (
  button({
    attributes: new DrupalAttribute(),
    button_utility_classes: [],
    type: 'light',
    button_content: 'Button'
  })
)

export const link = (props) => (
  button({
    attributes: new DrupalAttribute(),
    button_utility_classes: [],
    type: 'link',
    button_content: 'Button'
  })
)

export const outlinePrimary = (props) => (
  button({
    attributes: new DrupalAttribute(),
    button_utility_classes: [],
    type: 'outline-primary',
    button_content: 'Button'
  })
)

export const outlineSecondary = (props) => (
  button({
    attributes: new DrupalAttribute(),
    button_utility_classes: [],
    type: 'outline-secondary',
    button_content: 'Button'
  })
)

export const outlineSuccess = (props) => (
  button({
    attributes: new DrupalAttribute(),
    button_utility_classes: [],
    type: 'outline-success',
    button_content: 'Button'
  })
)

export const outlineDanger = (props) => (
  button({
    attributes: new DrupalAttribute(),
    button_utility_classes: [],
    type: 'outline-danger',
    button_content: 'Button'
  })
)

export const outlineInfo = (props) => (
  button({
    attributes: new DrupalAttribute(),
    button_utility_classes: [],
    type: 'outline-info',
    button_content: 'Button'
  })
)

export const outlineWarning = (props) => (
  button({
    attributes: new DrupalAttribute(),
    button_utility_classes: [],
    type: 'outline-warning',
    button_content: 'Button'
  })
)

export const outlineDark = (props) => (
  button({
    attributes: new DrupalAttribute(),
    button_utility_classes: [],
    type: 'outline-dark',
    button_content: 'Button'
  })
)

export const outlineLight = (props) => (
  button({
    attributes: new DrupalAttribute(),
    button_utility_classes: [],
    type: 'outline-light',
    button_content: 'Button'
  })
)