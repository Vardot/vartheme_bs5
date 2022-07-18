export default { title: 'Atoms/Alert' };

import alert from './alert.twig';
import DrupalAttribute from 'drupal-attribute';

const types = [
  'primary',
  'secondary',
  'success',
  'danger',
  'warning',
  'info',
  'light',
  'dark',
];

export const primary = () => (
  alert({
    attributes: new DrupalAttribute(),
    type: 'primary',
    dismissible: true,
    utility_classes: [],
    heading: 'Lorem Ipsum',
    content: 'A simple primary alert—check it out!'
  })
)

export const secondary = () => (
  alert({
    attributes: new DrupalAttribute(),
    type: 'secondary',
    dismissible: true,
    utility_classes: [],
    heading: 'Lorem Ipsum',
    content: 'A simple secondary alert—check it out!'
  })
)

export const success = () => (
  alert({
    attributes: new DrupalAttribute(),
    type: 'success',
    dismissible: true,
    utility_classes: [],
    heading: 'Lorem Ipsum',
    content: 'A simple success alert—check it out!'
  })
)

export const danger = () => (
  alert({
    attributes: new DrupalAttribute(),
    type: 'danger',
    dismissible: true,
    utility_classes: [],
    heading: 'Lorem Ipsum',
    content: 'A simple danger alert—check it out!'
  })
)

export const warning = () => (
  alert({
    attributes: new DrupalAttribute(),
    type: 'warning',
    dismissible: true,
    utility_classes: [],
    heading: 'Lorem Ipsum',
    content: 'A simple warning alert—check it out!'
  })
)

export const info = () => (
  alert({
    attributes: new DrupalAttribute(),
    type: 'info',
    dismissible: true,
    utility_classes: [],
    heading: 'Lorem Ipsum',
    content: 'A simple info alert—check it out!'
  })
)

export const light = () => (
  alert({
    attributes: new DrupalAttribute(),
    type: 'light',
    dismissible: true,
    utility_classes: [],
    heading: 'Lorem Ipsum',
    content: 'A simple light alert—check it out!'
  })
)

export const dark = () => (
  alert({
    attributes: new DrupalAttribute(),
    type: 'dark',
    dismissible: true,
    utility_classes: [],
    heading: 'Lorem Ipsum',
    content: 'A simple dark alert—check it out!'
  })
)