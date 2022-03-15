module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard',
    'eslint-config-prettier'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    'no-unused-vars': 'warn',
		'react/prop-types': 'off',
		'multiline-ternary': 'off',
		'no-throw-literal': 'off',
		'prefer-const': 'warn',
		'spaced-comment': 'warn',
		'camelcase': 'warn',
  }
}
