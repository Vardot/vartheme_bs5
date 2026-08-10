<?php

/**
 * @file
 * Seeds the Vartheme BS5 test site with the content the browser suite needs.
 *
 * Run with:  drush php:script tests/scripts/seed-test-site.php
 *
 * It creates:
 *   - The Basic page content type with a Body field when the install profile
 *     did not provide them, so the seed never depends on what the profile
 *     happens to ship. The type renders without author/date attribution,
 *     matching how a Basic page normally displays.
 *   - A published Basic page that is set as the site front page. Because it has
 *     a real title, visiting "/" exercises the preprocess_page_title hook (the
 *     front-page title gets the "visually-hidden" class). The node id is looked
 *     up dynamically and only ever referenced through the front-page route "/",
 *     so no scenario depends on a hard-coded entity id.
 *   - Three Main navigation links, all pointing at routes an anonymous visitor
 *     can always reach (front page, log in, reset password), so the Bootstrap
 *     navbar renders real nav-item / nav-link markup and never filters an item
 *     out by access - and, again, without referencing any entity id.
 */

declare(strict_types=1);

use Drupal\field\Entity\FieldConfig;
use Drupal\field\Entity\FieldStorageConfig;
use Drupal\filter\Entity\FilterFormat;
use Drupal\menu_link_content\Entity\MenuLinkContent;
use Drupal\node\Entity\Node;
use Drupal\node\Entity\NodeType;

// The suite only needs a rendering page node; create the pieces the install
// profile did not provide instead of assuming them.
if (NodeType::load('page') === NULL) {
  NodeType::create([
    'type' => 'page',
    'name' => 'Basic page',
    'display_submitted' => FALSE,
  ])->save();
}
if (FieldStorageConfig::loadByName('node', 'body') === NULL) {
  FieldStorageConfig::create([
    'field_name' => 'body',
    'entity_type' => 'node',
    'type' => 'text_with_summary',
  ])->save();
}
if (FieldConfig::loadByName('node', 'page', 'body') === NULL) {
  FieldConfig::create([
    'field_name' => 'body',
    'entity_type' => 'node',
    'bundle' => 'page',
    'label' => 'Body',
  ])->save();
  \Drupal::service('entity_display.repository')
    ->getViewDisplay('node', 'page')
    ->setComponent('body', ['type' => 'text_default', 'label' => 'hidden'])
    ->save();
}
$format = FilterFormat::load('basic_html') !== NULL ? 'basic_html' : 'plain_text';

// A titled page, set as the site front page so the title hook has a title to
// hide. Its id is resolved at runtime and only used to configure the front page.
$front = Node::create([
  'type' => 'page',
  'title' => 'Welcome to Vartheme BS5',
  'uid' => 1,
  'status' => 1,
  'body' => [
    'value' => '<p>Vartheme BS5 front page body content.</p>',
    'format' => $format,
  ],
]);
$front->save();

\Drupal::configFactory()
  ->getEditable('system.site')
  ->set('page.front', '/node/' . $front->id())
  ->save();

// Main navigation links. Every target is a stable, anonymous-accessible route
// (no entity ids), so the navbar always shows exactly these three items.
$links = [
  ['Home', 'internal:/'],
  ['Log in', 'internal:/user/login'],
  ['Reset password', 'internal:/user/password'],
];
foreach ($links as $weight => $link) {
  MenuLinkContent::create([
    'title' => $link[0],
    'link' => ['uri' => $link[1]],
    'menu_name' => 'main',
    'weight' => $weight,
    'expanded' => TRUE,
  ])->save();
}
