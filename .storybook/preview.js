import { configure } from "@storybook/html";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";

import Twig from "twig";
import twigDrupal from "twig-drupal-filters";

twigDrupal(Twig);

configure(
  require.context("../src/components", true, /\.stories|.story\.jsx$/),
  module
);
