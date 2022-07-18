export default {'title': 'Atoms/Badge'};

import badge from './badge.twig';

export const Badge = () => (
  badge({
    html_tag: "span",
    color: "white",
    bg: "secondary",
    utility_classes: [],
    content: "Badge Content",
    url: ""
  })
);