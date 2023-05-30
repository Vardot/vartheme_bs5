<?php

namespace Drupal\vartheme_bs5;

use Drupal\Component\Serialization\Yaml;
use Drupal\Core\Theme\StarterKitInterface;
use Symfony\Component\Filesystem\Filesystem;
use Symfony\Component\Finder\Finder;

final class VarthemeStarterKit implements StarterKitInterface {

  /**
   * List of classes defined in Vartheme BS5.
   *   Used to differentiate capitalized machine name from theme name used in comments and string content.
   *
   * @var array
   */
  private static $classes = [
    'VarthemeStarterKit',
  ];

  /**
   * List of files & directories that shouldn't be copied over.
   *
   * @var array
   */
  private static $deletable = [
    '/tests',
    '/src/VarthemeStarterKit.php',
    '/README.md',
  ];

  /**
   * Array of scripts to keep from Vartheme BS5 package.json.
   *
   * @var array
   */
  private static $scripts_to_keep = [
    'theme:init',
    'theme:build',
    'theme:full-build',
    'theme:watch',
    'components:build',
    'phpcs',
    'phpcbf',
    'lint:js',
    'lint:css',
    'lint:yaml'
  ];

  /**
   * Array of dependencies as pattern strings to keep from package.json.
   *
   * @var array
   */
  private static $deps_to_keep = [];

  /**
   * Array of files to avoid renaming.
   *
   * @var array files
   */
  private static $skipFileRename = [];

  /**
   * Array of files to avoid editing.
   *
   * @var array files
   */
  private static $skipFileContentEdit = [
    'starterkit.md',
  ];

  /**
   * Finds and replaces string/regex matches in file names and contents.
   *
   * @param string $dir
   *   The working directory of the template being generated.
   * @param string $find
   *   The string to be removed.
   * @param string $replace
   *   The string to be added.
   * @param bool $skip_filters
   *   If `true`, do not filter results based on $skipFileRename or $skipFileContentEdit arrays.
   */
  private static function findAndReplace($dir, $find, $replace, $skip_filters = FALSE): void {
    $fs = new Filesystem();

    // Edit file names.
    $finder = new Finder();
    $finder->files()
      ->in($dir)
      ->name("/$find/")
      ->filter(function (\SplFileInfo $file) use ($dir, $skip_filters) {
        if (!$skip_filters) {
          $relative_path = str_replace($dir . '/', '', $file->getPathname());
          return !in_array($relative_path, self::$skipFileRename);
        }
        else {
          return TRUE;
        }
      });
    foreach ($finder as $file) {
      $filepath_segments = explode('/', $file->getRealPath());
      $filename = array_pop($filepath_segments);
      $filename = str_replace($find, $replace, $filename);
      $filepath_segments[] = $filename;
      $fs->rename($file->getRealPath(), implode('/', $filepath_segments));
    }

    // Edit file contents.
    $finder = new Finder();
    $finder->files()
      ->in($dir)
      ->contains($find)
      ->filter(function (\SplFileInfo $file) use ($dir, $skip_filters) {
        if (!$skip_filters) {
          $relative_path = str_replace($dir . '/', '', $file->getPathname());
          return !in_array($relative_path, self::$skipFileContentEdit);
        }
        else {
          return TRUE;
        }
      });
    foreach ($finder as $file) {
      $contents = file_get_contents($file->getRealPath());
      $contents = str_replace($find, $replace, $contents);
      file_put_contents($file->getRealPath(), $contents);
    }
  }

  /**
   * Updates values in the new theme's .info.yml file.
   *
   * @param string $working_dir
   *   The working directory of the template being generated.
   * @param string $machine_name
   *   The theme's machine name.
   * @param string $theme_name
   *   The theme's name.
   */
  private static function updateThemeInfo(string $working_dir, string $machine_name, string $theme_name): void {
    // Edit the info file for new theme
    $info_file = "$working_dir/$machine_name.info.yml";
    $info = Yaml::decode(file_get_contents($info_file));
    unset($info['starterkit']);
    unset($info['package']);
    $info['version'] = '1.0.0';
    file_put_contents($info_file, Yaml::encode($info));
  }

  /**
   * Removes $deletable files & directories from the working directory prior to copying into final destination.
   *
   * @param string $working_dir
   *   The working directory of the template being generated.
   */
  private static function removeDeletableFiles(string $working_dir): void {
    $fs = new Filesystem();

    foreach (self::$deletable as $item) {
      $fs->remove($working_dir . $item);
    }
  }

  /**
   * Copies bundler files from core.
   *
   * @param string $dir
   *   The working directory of the template being generated.
   * @param string $machine_name
   *   The theme's machine name.
   */
  private static function getBuildFiles(string $dir, string $machine_name): void {
    // Copy & simplify package.json.
    $finder = new Finder();
    $finder->in(__DIR__ . '/../../../')->depth('== 0')->files()->name('package.json');
    if (count($finder) === 1) {
      foreach ($finder as $file) {
        $package_json = json_decode($file->getContents());

        $package_json->name = $machine_name;
        unset($package_json->description);

        foreach ($package_json->scripts as $key => $value) {
          if (!in_array($key, self::$scripts_to_keep)) {
            unset($package_json->scripts->$key);
          }
        }

        foreach ($package_json->devDependencies as $dep => $version) {
          $keep = FALSE;
          foreach (self::$deps_to_keep as $dep_pattern) {
            if (preg_match($dep_pattern, $dep)) {
              $keep = TRUE;
            }
          }
          if (!$keep) {
            unset($package_json->devDependencies->$dep);
          }
        }

        file_put_contents($dir . '/package.json', str_replace('    ', '  ', json_encode($package_json, JSON_PRETTY_PRINT)));
      }
    }

    $fs = new Filesystem();

  }

  /**
   * {@inheritdoc}
   */
  public static function postProcess(string $working_dir, string $machine_name, string $theme_name): void {

    self::updateThemeInfo($working_dir, $machine_name, $theme_name);

    self::removeDeletableFiles($working_dir);

    // Replace "Vartheme BS5" in class names before doing bulk find/replace.
    $old_pattern = 'Vartheme BS5';
    $new_pattern = str_replace(' ', '', ucwords(str_replace('_', ' ', $machine_name)));
    foreach (self::$classes as $old_class) {
      $new_class = str_replace($old_pattern, $new_pattern, $old_class);
      self::findAndReplace($working_dir, $old_class, $new_class);
    }

    self::findAndReplace($working_dir, 'vartheme_bs5', $machine_name);
    self::findAndReplace($working_dir, 'Vartheme BS5', $theme_name);
    self::findAndReplace($working_dir, 'starterkit.md', 'README.md', TRUE);

    self::getBuildFiles($working_dir, $machine_name);
  }

}
