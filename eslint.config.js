import js from '@eslint/js'
import prettier from 'eslint-config-prettier'
import typescriptPlugin from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import prettierPlugin from 'eslint-plugin-prettier'

/** @type {import("eslint").Linter.FlatConfig[]} */
export default [
  js.configs.recommended,
  prettier,
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    ignores: [
      '/app/__tests__/**',
      '*/vitest.config.ts',
      'dist',
      '**/coverage/**',
    ],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      '@typescript-eslint': typescriptPlugin,
      react,
      'react-hooks': reactHooks,
      prettier: prettierPlugin,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'no-unused-vars': 'off',
      'no-undef': 'off',
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      'jsx-a11y/no-onchange': 'off',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
]
