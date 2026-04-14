<?php

/**
 * @file
 * theme-settings.php
 *
 * Provides theme settings for Vartheme BS5
 */

use Drupal\Core\Form\FormStateInterface;
use Drupal\Core\Url;
use Drupal\Core\Link;

/**
 * Implements hook_form_FORM_ID_alter().
 */
function vartheme_bs5_form_system_theme_settings_alter(&$form, FormStateInterface $form_state, $form_id = NULL) {

  // General "alters" use a form id. Settings should not be set here. The only
  // thing useful about this is if you need to alter the form for the running
  // theme and *not* the theme setting.
  // @see http://drupal.org/node/943212
  if (isset($form_id)) {
    return;
  }

  // Bootstrap 5 Responsive containers options.
  $container_options = [
    '' => t('- none -'),
    'no-container' => t('No Container'),
    'container' => t('Container'),
    'container-md' => t('Container Medium'),
    'container-lg' => t('Container Large'),
    'container-xl' => t('Container Extra Large'),
    'container-xxl' => t('Container Extra Extra Large'),
    'container-fluid' => t('Container Fluid'),
  ];

  // Containers configurations.
  $form['containers'] = [
    '#type' => 'details',
    '#title' => t('Containers'),
    '#collapsible' => TRUE,
    '#collapsed' => TRUE,
    '#description' => t('Containers are a fundamental building block of Bootstrap that contain, pad, and align your content within a given device or viewport. Have a look at @containers_link.', [
      '@containers_link' => Link::fromTextAndUrl('Containers in the Bootstrap 5 documentation', Url::fromUri('https://getbootstrap.com/docs/5.3/layout/containers/#responsive-containers', ['absolute' => TRUE, 'fragment' => 'containers']))->toString(),
    ]),
  ];

  $vartheme_bs5_contained_regions = [
    'content' => t('Content'),
    'header' => t('Header'),
    'footer' => t('Footer '),
  ];

  foreach ($vartheme_bs5_contained_regions as $contained_region_name => $contained_region_title) {
    $contained_region_container_setting_name = 'container_' . $contained_region_name;
    $contained_region_container_setting_title = t('Container for') . ' ' . $contained_region_title . ' ' . t('region');
    $form['containers'][$contained_region_container_setting_name] = [
      '#type' => 'select',
      '#title' => $contained_region_container_setting_title,
      '#default_value' => theme_get_setting($contained_region_container_setting_name) ?? 'container',
      '#options' => $container_options,
    ];
  }

}
