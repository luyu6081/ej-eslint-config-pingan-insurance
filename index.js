module.exports = {
  extends: [
    'plugin:vue/essential',
  ],
  rules: {
    'comma-dangle': ['error', 'always-multiline'],
    'object-curly-spacing': ['error', 'never'],
    // 项目允许在需要注释时换行书写 else，但 ESLint 不允许混用多种 if-else 风格，因此只得停用此规则。
    'brace-style': 'off',

    'vue/script-indent': ['error', 2, {baseIndent: 1, switchCase: 1}],
  },
  overrides: [
    {
      files: ['*.vue'],
      rules: {
        'indent': 'off',
      },
    },
  ],
}
