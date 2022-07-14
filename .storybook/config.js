import { configure } from '@storybook/html';
import Twig from 'twig';
import twigDrupal from 'twig-drupal-filters';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
// Add the filters to Twig instance.
twigDrupal(Twig);

configure(require.context('../src/components', true, /\.stories\.js$/), module);
