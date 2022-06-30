module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recess-order',
    'stylelint-config-prettier',
  ],
  rules: {
    'unit-no-unknown': true,
    'block-no-empty': true,
    'at-rule-no-unknown': null,
  },
};