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
    'top_bar' => t('Top bar'),
    // 'navbar_branding' => t('Navbar branding'),
    // 'navigation' => t('Navigation (Desktop and Collapse)'),
    // 'highlighted' => t('Highlighted'),
    'content_above' => t('Content above'),
    // 'primary_sidebar' => t('Primary sidebar'),
    'content' => t('Content'),
    // 'secondary_sidebar' => t('Secondary sidebar'),
    'content_below' => t('Content below'),
    'footer_top' => t('Footer top'),
    'footer_bottom' => t('Footer bottom'),
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

  // Email logo settings to be used with Varbase Email module.
  $form['email_logo'] = [
    '#type'     => 'details',
    '#title'    => t('Email Logo'),
    '#open' => FALSE,
    '#description' => t('Email logo settings to be used with Varbase Email module. Have a look at @varbase_docs_link.', [
      '@varbase_docs_link' => Link::fromTextAndUrl('Set the Email Logo for Symfony Mailer Template', Url::fromUri('https://docs.varbase.vardot.com/v/10.0.x/developers/understanding-varbase/core-components/varbase-email', ['absolute' => TRUE, 'fragment' => 'containers']))->toString(),
    ]),
  ];

  $form['email_logo']['email_logo_default'] = [
    "#type" => "checkbox",
    '#title'    => t('Use the logo supplied by the theme'),
    "#default_value" => theme_get_setting('email_logo_default'),
  ];

  $form['email_logo']['email_logo_settings'] = [
    "#type" => "container",
    '#states' => [
      "invisible" => [
        'input[name="email_logo_default"]' => [
          "checked" => TRUE,
        ],
      ],
    ],
  ];

  $form['email_logo']['email_logo_settings']["email_logo_path"] = [
    "#type" => "textfield",
    "#title" => "Path to custom logo",
    "#default_value" => theme_get_setting('email_logo_path'),
    "#description" => t("Examples: <code>@external-file</code>", ["@external-file" => "http://www.example.com/logo.png"]),
  ];

  $form['email_logo']['email_logo_settings']["email_logo_upload"] = [
    '#type'     => 'managed_file',
    "#title"    => t("Upload logo image"),
    "#description" => t("If you don't have direct file access to the server, use this field to upload your logo."),
    '#required' => FALSE,
    '#upload_location' => \Drupal::config('system.file')->get('default_scheme') . '://theme/email_logo/',
    '#default_value' => theme_get_setting('email_logo_upload'),
    '#upload_validators' => [
      'file_validate_extensions' => ['gif png jpg jpeg'],
    ],
  ];

}
