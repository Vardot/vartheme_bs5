<?php

declare(strict_types=1);

namespace Drupal\vartheme_bs5\Hook;

use Drupal\Core\Config\ConfigFactoryInterface;
use Drupal\Core\DependencyInjection\ContainerInjectionInterface;
use Drupal\Core\Extension\ModuleHandlerInterface;
use Drupal\Core\Extension\ThemeExtensionList;
use Drupal\Core\Hook\Attribute\Hook;
use Drupal\Core\Language\LanguageInterface;
use Drupal\Core\Language\LanguageManagerInterface;
use Drupal\Core\Path\PathMatcherInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Symfony\Component\HttpFoundation\RequestStack;

/**
 * Hook implementations for the Vartheme BS5 theme.
 *
 * Themes are not scanned by the object-oriented hook attribute discovery
 * (\Drupal\Core\Hook\HookCollectorPass collects from modules only), so the
 * thin procedural functions in vartheme_bs5.theme delegate every hook to this
 * class through the class resolver. The #[Hook] attributes are kept so the
 * implementations switch over automatically once core adds theme support.
 */
class VarthemeBs5Hooks implements ContainerInjectionInterface {

  /**
   * Constructs a VarthemeBs5Hooks object.
   *
   * @param \Drupal\Core\Extension\ThemeExtensionList $themeExtensionList
   *   The theme extension list.
   * @param \Symfony\Component\HttpFoundation\RequestStack $requestStack
   *   The request stack.
   * @param \Drupal\Core\Config\ConfigFactoryInterface $configFactory
   *   The config factory.
   * @param \Drupal\Core\Path\PathMatcherInterface $pathMatcher
   *   The path matcher.
   * @param \Drupal\Core\Extension\ModuleHandlerInterface $moduleHandler
   *   The module handler.
   * @param \Drupal\Core\Language\LanguageManagerInterface $languageManager
   *   The language manager.
   */
  public function __construct(
    protected ThemeExtensionList $themeExtensionList,
    protected RequestStack $requestStack,
    protected ConfigFactoryInterface $configFactory,
    protected PathMatcherInterface $pathMatcher,
    protected ModuleHandlerInterface $moduleHandler,
    protected LanguageManagerInterface $languageManager,
  ) {}

  /**
   * {@inheritdoc}
   */
  public static function create(ContainerInterface $container): static {
    return new static(
      $container->get('extension.list.theme'),
      $container->get('request_stack'),
      $container->get('config.factory'),
      $container->get('path.matcher'),
      $container->get('module_handler'),
      $container->get('language_manager'),
    );
  }

  /**
   * Implements hook_theme().
   */
  #[Hook('theme')]
  public function theme($existing, $type, $theme, $path): array {
    return [
      'media_oembed_iframe__remote_video__varbase_heroslider' => [
        'template' => 'media/media-oembed-iframe--remote-video--varbase-heroslider',
        'variables' => [
          'provider' => NULL,
          'media' => NULL,
          'base_path' => base_path(),
          'vartheme_bs5' => $this->themeExtensionList->getPath('vartheme_bs5'),
        ],
      ],
    ];
  }

  /**
   * Implements hook_preprocess_HOOK().
   */
  #[Hook('preprocess_media_oembed_iframe__remote_video__varbase_heroslider')]
  public function preprocessMediaOembedIframeRemoteVideoVarbaseHeroslider(&$variables): void {
    // Send variables for the remote_video varbase heroslier oembed iframe.
    $query = $this->requestStack->getCurrentRequest()->query;
    $variables['type'] = $query->get('type');
    $variables['provider'] = $query->get('provider');
    $variables['view_mode'] = $query->get('view_mode');
    $variables['base_path'] = base_path();
    $variables['vartheme_bs5'] = $this->themeExtensionList->getPath('vartheme_bs5');
  }

  /**
   * Implements hook_library_info_alter().
   */
  #[Hook('library_info_alter')]
  public function libraryInfoAlter(array &$libraries, $module): void {
    if ($module === 'sitewide_alert' && isset($libraries['init'])) {
      // Add the dependency only if it's not already present.
      if (!in_array('core/components.vartheme_bs5--alert', $libraries['init']['dependencies'])) {
        $libraries['init']['dependencies'][] = 'core/components.vartheme_bs5--alert';
      }
      unset($libraries['init']['css']);
    }

    // Load components root and styles for CKEditor5 styles.
    if ($module === 'ckeditor5' && isset($libraries['internal.drupal.ckeditor5.stylesheets'])) {
      $libraries['internal.drupal.ckeditor5.stylesheets']['dependencies'][] = 'vartheme_bs5/ckeditor5-root';
      $libraries['internal.drupal.ckeditor5.stylesheets']['dependencies'][] = 'vartheme_bs5/ckeditor5-styles';
    }

    // Replace the Popper.js library file from the Responsive Theme preview
    // module. Vartheme BS5 need a different version which still works for the
    // Responsive Theme preview module.
    if ($module === 'responsive_preview'
      && isset($libraries['drupal.responsive-preview'])
      && isset($libraries['drupal.responsive-preview']['js'])
      && isset($libraries['drupal.responsive-preview']['js']['js/popperjs/popper.min.js'])) {

      unset($libraries['drupal.responsive-preview']['js']['js/popperjs/popper.min.js']);
      $libraries['drupal.responsive-preview']['dependencies'][] = 'vartheme_bs5/popper-script';
    }
  }

  /**
   * Implements hook_preprocess_HOOK().
   */
  #[Hook('preprocess_field')]
  public function preprocessField(&$variables): void {
    $ckeditor5_fields = [
      'text_with_summary',
      'text_long',
    ];

    // Check if the field type is in the list of CKEditor5 fields.
    if (in_array($variables['field_type'], $ckeditor5_fields)) {
      // Attach the library to the field.
      $variables['#attached']['library'][] = 'vartheme_bs5/ckeditor5-styles';
    }
  }

  /**
   * Implements hook_preprocess_HOOK() for menus.
   */
  #[Hook('preprocess_menu')]
  public function preprocessMenu(&$variables, $hook, $info): void {
    // Checks the nested level of a menu.
    $this->processMenuLevel($variables['items']);
  }

  /**
   * Add menu_link_level to menus.
   */
  protected function processMenuLevel(&$menu_items, $menu_level = 1): void {
    foreach ($menu_items as &$menu_item) {
      // Set the menu level for the current item.
      $menu_item['menu_link_level'] = $menu_level;

      // If there are child items, process them recursively.
      if (!empty($menu_item['below'])) {
        $this->processMenuLevel($menu_item['below'], $menu_level + 1);
      }
    }
  }

  /**
   * Implements hook_preprocess_HOOK() for the page.
   */
  #[Hook('preprocess_page')]
  public function preprocessPage(&$variables): void {
    $request = $this->requestStack->getCurrentRequest();
    $theme_path = $this->themeExtensionList->getPath('vartheme_bs5');

    // Add the print logo.
    $variables['logo_print'] = $request->getBaseUrl() . '/' . $theme_path . '/logo-print.png';

    // Add the white logo.
    $variables['logo_white'] = $request->getBaseUrl() . '/' . $theme_path . '/logo-white.svg';

    // Add the site name and slogan.
    $variables['site_name'] = $this->configFactory->get('system.site')->get('name');
    $variables['site_slogan'] = $this->configFactory->get('system.site')->get('slogan');

    $vartheme_bs5_contained_regions = [
      'container_top_bar',
      // 'container_navbar_branding',
      // 'container_navigation',
      // 'container_highlighted',
      'container_content_above',
      // 'container_primary_sidebar',
      'container_content',
      // 'container_secondary_sidebar',
      'container_content_below',
      'container_footer_top',
      'container_footer_bottom',
    ];

    foreach ($vartheme_bs5_contained_regions as $contained_region) {
      $theme_settings_for_contained_region = theme_get_setting($contained_region);
      if (isset($theme_settings_for_contained_region)
        && $theme_settings_for_contained_region !== '') {
        $variables[$contained_region] = $theme_settings_for_contained_region;
      }
    }

  }

  /**
   * Implements hook_preprocess_HOOK() for the page title.
   */
  #[Hook('preprocess_page_title')]
  public function preprocessPageTitle(&$variables): void {
    // Hide page title for the front page and let screen readers only see it.
    if ($this->pathMatcher->isFrontPage()) {
      $variables['title_attributes']['class'][] = 'visually-hidden';
    }
  }

  /**
   * Implements hook_preprocess_HOOK() for html.
   */
  #[Hook('preprocess_html')]
  public function preprocessHtml(&$variables): void {
    $request = $this->requestStack->getCurrentRequest();
    // The path for Vartheme BS5 theme in variables.
    $variables['vartheme_bs5_path'] = $request->getSchemeAndHttpHost() . $request->getBaseUrl() . '/' . $this->themeExtensionList->getPath('vartheme_bs5');
  }

  /**
   * Implements hook_form_alter().
   */
  #[Hook('form_alter')]
  public function formAlter(&$form, $form_state, $form_id): void {

    // Have a default style for moderation entity form.
    if ($form_id == 'content_moderation_entity_moderation_form') {
      $form['#attributes']['class'][] = 'card card-body bg-light mb-3';
    }

    // Have a default style for the moderation status in the layout editing node
    // pages.
    if ((preg_match('/^node_.*._layout_builder_form$/', $form_id)
      && isset($form['moderation_state']))) {
      $form['moderation_state']['#attributes']['class'][] = 'card card-body bg-light mb-3';
      $form['#attached']['library'][] = 'vartheme_bs5/content_moderation';
    }
  }

  /**
   * Implements hook_preprocess_HOOK() for login_with.
   */
  #[Hook('preprocess_login_with')]
  public function preprocessLoginWith(&$variables): void {
    // Check if the Social Auth module exists and social networks are set.
    if (!$this->moduleHandler->moduleExists('social_auth') || empty($variables['networks'])) {
      return;
    }

    if (is_array($variables['networks']) && $variables['networks'] > 0) {
      foreach ($variables['networks'] as $id => $network) {
        $network_definition = $network->getPluginDefinition();
        if (isset($network_definition['img_path'])) {
          $theme_path = $this->themeExtensionList->getPath('vartheme_bs5');
          $network_img_path_in_vartheme = $theme_path . '/images/social_auth/' . $network_definition['provider'] . '/' . $network_definition['img_path'];

          if (file_exists(DRUPAL_ROOT . '/' . $network_img_path_in_vartheme)) {
            $variables['custom_networks'][$id] = [
              'img_path' => $network_img_path_in_vartheme,
            ];
          }
        }
      }
    }
  }

  /**
   * Implements hook_preprocess_HOOK() for regions.
   */
  #[Hook('preprocess_region')]
  public function preprocessRegion(&$variables): void {
    $isFront = $this->pathMatcher->isFrontPage();
    if ($isFront && $variables["region"] === "header") {
      $variables["is_front"] = $isFront;
    }
  }

  /**
   * Implements hook_preprocess().
   */
  #[Hook('preprocess')]
  public function preprocess(&$variables, $hook, $info): void {
    $language = $this->languageManager->getCurrentLanguage(LanguageInterface::TYPE_CONTENT);
    $language_direction = $language->getDirection();
    $variables['lang_dir'] = $language_direction;
  }

}
