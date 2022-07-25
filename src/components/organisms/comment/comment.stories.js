export default { 'title': 'Organisms/Comment' };

import comment from './comment.twig';
import img from "../../../assets/images/placeholder-image.png";
import DrupalAttribute from 'drupal-attribute';

export const Comment = () => (
  comment({
    attributes: new DrupalAttribute(),
    new_indicator_timestamp: "",
    user_picture: img,
    submitted: "Name Name",
    permalink: "24 April 2022 at 05:27",
    title_prefix: "",
    title: "Title",
    title_suffix: "",
    content: "Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vivamus suscipit tortor eget felis porttitor volutpat. Proin eget tortor risus. Proin eget tortor risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Cras ultricies ligula sed magna dictum porta.",
    parent: "",
    comment: {
      status: {
        value: 0
      }
    }
  })
);