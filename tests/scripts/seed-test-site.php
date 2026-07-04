<?php

/**
 * @file
 * Seeds the Vartheme BS5 test site with the content the browser suite needs.
 *
 * Run with:  drush php:script tests/scripts/seed-test-site.php
 *
 * It creates:
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

use Drupal\menu_link_content\Entity\MenuLinkContent;
use Drupal\node\Entity\Node;

// A titled page, set as the site front page so the title hook has a title to
// hide. Its id is resolved at runtime and only used to configure the front page.
$front = Node::create([
  'type' => 'page',
  'title' => 'Welcome to Vartheme BS5',
  'uid' => 1,
  'status' => 1,
  'body' => [
    'value' => '<p>Vartheme BS5 front page body content.</p>',
    'format' => 'basic_html',
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
