import { configure } from '@storybook/html';
import twig from 'twig';
import twigDrupal from 'twig-drupal-filters';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';

configure(require.context('../src/components', true, /\.stories\.js$/), module);

twigDrupal(twig);
