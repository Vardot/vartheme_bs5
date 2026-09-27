// cucumber-js configuration for the Vartheme BS5 accessibility suite.
//
// Self-contained under tests/: this directory carries its own package.json and
// node_modules so the theme's yarn build toolchain never pulls in Playwright.
//
//   cd tests && npm install && npx playwright install chromium
//   LAUNCH_URL=https://my-host.ddev.site npm test

module.exports = {
  default: {
    timeout: 60000,
    requireModule: ['tsx/cjs'],
    require: [
      'node_modules/@vardot/varbase-e2e/tests/step-definitions/**/*.js',
      'step-definitions/**/*.js',
    ],
    paths: [process.env.FEATURES || 'features/**/*.feature'],
    format: [
      '@cucumber/pretty-formatter',
      `json:reports/${process.env.CUCUMBER_JSON || 'cucumber_report'}.json`,
    ],
    formatOptions: {
      theme: {
        'feature keyword': ['bold', 'blue'],
        'feature name': ['blue', 'underline'],
        'scenario keyword': ['bold', 'magenta'],
        'scenario name': ['magenta', 'underline'],
        'step keyword': ['bold', 'green'],
        'step text': ['greenBright', 'italic'],
      },
    },
    worldParameters: {
      launchUrl:
        process.env.LAUNCH_URL ||
        process.env.DDEV_PRIMARY_URL ||
        'https://localhost',
      minWaitTime: {
        page: 8000,
        before_scenario: 0,
        after_scenario: 0,
        before_step: 0,
        after_step: 0,
      },
      selectors: {
        css: {},
        xpath: {},
        filesPath: './selectors/',
        files: [],
        offset: 60,
        breakpoints: {
          xs: { width: 375, height: 667 },
          sm: { width: 576, height: 800 },
          md: { width: 768, height: 1024 },
          lg: { width: 992, height: 768 },
          xl: { width: 1200, height: 900 },
          xxl: { width: 1400, height: 900 },
          xxxl: { width: 1920, height: 1080, default: true },
        },
      },
      screenshot: {
        dir: './screenshots',
        purge: false,
        onFailed: true,
        onEveryStep: false,
        alwaysFullscreen: false,
        failedPrefix: 'failed_',
        filenamePattern: '{datetime}.{feature_file}.feature_{step_line}.{ext}',
        filenamePatternFailed:
          '{failed_prefix}{datetime}.{feature_file}.feature_{step_line}.{ext}',
      },
      video: {
        mode: process.env.VARBASE_E2E_VIDEO || 'on-failure',
        dir: './videos',
        size: { width: 1920, height: 1080 },
        filenamePattern: '{datetime}.{feature_file}.{scenario}.{status}.{ext}',
      },
      javascript: {
        mode: process.env.VARBASE_E2E_JS_ERROR_MODE || 'warn',
        levels: ['error'],
        ignore: '',
        beforeScenario: false,
        afterScenario: true,
      },
    },
  },
};
