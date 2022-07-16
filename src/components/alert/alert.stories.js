export default { title: 'Molecules/Alert' };

import alert from './alert.twig';

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

const content = [];
types.map((item, index) => (
  content.push(`A simple ${item} alert—check it out!`)
));

export const Alert = () => (
  alert({
    heading: "alert heading",
    variations: types
  })
);
