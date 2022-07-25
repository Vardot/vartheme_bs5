export default { 'title': 'Organisms/Card' };

import card from './card.twig';
import img  from "../../../assets/images/placeholder-image.png";

export const Card = () => (
  card({
    width: "300px",
    img_src: img,
    title: "Card Title",
    body: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    link_url: "#",
    link_text: "Go somewhere"
  })
);