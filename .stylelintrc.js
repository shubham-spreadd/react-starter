/** @type {import('stylelint').Config} */
module.exports = {
  processors: ["stylelint-processor-styled-components"],
  extends: ["stylelint-config-recommended"],
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'tailwind',
          'apply',
          'variants',
          'responsive',
          'screen',
        ],
      },
    ],
  }
}
