import { checkDocumentIsReady, removeElementOnClick } from '../../../../helpers';

checkDocumentIsReady(() => {
  removeElementOnClick('thumb_wrapper', 'thumb_wrapper');
});