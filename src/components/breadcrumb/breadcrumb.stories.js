export default { 'title' : 'Molecules/Breadcrumb' };

import breadcrumb from './breadcrumb.twig';

const data = [
  {
    title: 'Home',
    url: '#'
  },
  {
    title: 'Library',
    url: '#'
  },
  {
    title: 'Data',
    url: '#'
  }
]

export const Breadcrumb = () => (
  breadcrumb({
    utility_classes: [],
    breadcrumb: data
  })
);