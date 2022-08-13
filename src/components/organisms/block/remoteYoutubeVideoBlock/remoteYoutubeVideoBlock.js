import { checkDocumentIsReady } from '../../../../helpers';
import { removeElementOnClick } from '../../../../helpers';

checkDocumentIsReady(() => {
  removeElementOnClick('thumb_wrapper', 'thumb_wrapper');
});