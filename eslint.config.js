// eslint.config.js
import typescript from '@typescript-eslint/eslint-plugin'
import typescriptParser from '@typescript-eslint/parser'
import { defineFlatConfig } from 'eslint-define-config'
import importPlugin from 'eslint-plugin-import'
import prettier from 'eslint-plugin-prettier'
import eslintConfigPrettier from 'eslint-plugin-prettier/recommended'
import vue from 'eslint-plugin-vue'
import vueParser from 'vue-eslint-parser'

export default defineFlatConfig([
  eslintConfigPrettier,
  {
    ignores: ['node_modules', 'public', 'dist', '*.md'],
    files: ['**/*.{js,ts,vue}'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: typescriptParser,
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    plugins: {
      prettier,
      vue,
      '@typescript-eslint': typescript,
      import: importPlugin,
    },
    settings: {
      'import/resolver': {
        node: {
          extensions: ['.js', '.ts', '.vue'],
        },
      },
    },
    rules: {
      'import/order': [
        'error',
        {
          groups: [['builtin', 'external'], 'internal', 'parent', ['sibling', 'index']],
          pathGroups: [
            {
              pattern: '#apps/**',
              group: 'internal',
              position: 'before',
            },
            {
              pattern: '#pages/**',
              group: 'internal',
              position: 'before',
            },
            {
              pattern: '#widgets/**',
              group: 'internal',
              position: 'before',
            },
            {
              pattern: '#features/**',
              group: 'internal',
              position: 'before',
            },
            {
              pattern: '#entities/**',
              group: 'internal',
              position: 'before',
            },
            {
              pattern: '#shared/**',
              group: 'internal',
              position: 'before',
            },
          ],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
            orderImportKind: 'asc',
          },
        },
      ],
      semi: ['error', 'never'],
      quotes: ['error', 'single'],
      'no-useless-constructor': 'off',
      'linebreak-style': ['error', 'unix'],
      'object-curly-spacing': ['error', 'always', { objectsInObjects: true }],
      'padding-line-between-statements': [
        'warn',
        { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
        { blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] },
        { blankLine: 'always', prev: '*', next: 'return' },
        { blankLine: 'always', prev: '*', next: 'block-like' },
        { blankLine: 'always', prev: 'multiline-block-like', next: '*' },
        { blankLine: 'always', prev: 'block-like', next: '*' },
        { blankLine: 'always', prev: 'expression', next: '*' },
        { blankLine: 'always', prev: '*', next: 'block' },
        { blankLine: 'always', prev: 'block', next: '*' },
        { blankLine: 'any', prev: 'cjs-import', next: 'cjs-import' },
        { blankLine: 'any', prev: 'import', next: 'import' },
        { blankLine: 'always', prev: '*', next: 'export' },
        { blankLine: 'always', prev: 'export', next: '*' },
        { blankLine: 'always', prev: '*', next: 'function' },
        { blankLine: 'always', prev: 'try', next: '*' },
      ],
      ...typescript.configs['recommended'].rules,
      'max-len': [
        'error',
        {
          code: 120,
          tabWidth: 2,
          ignoreComments: true,
          ignoreTrailingComments: true,
          ignoreUrls: true,
        },
      ],
      'vue/no-v-html': 'off',
      'vue/require-default-prop': 'off',
      'vue/no-side-effects-in-computed-properties': 'off',
      'vue/object-curly-spacing': ['error', 'always', { objectsInObjects: true }],
      'vue/component-name-in-template-casing': ['error', 'kebab-case', { ignores: [] }],
      'vue/v-on-event-hyphenation': ['error', 'always', { ignore: ['update:modelValue'] }],
      'vue/padding-line-between-blocks': ['warn', 'always'],
      'vue/html-self-closing': [
        'error',
        {
          html: {
            void: 'any',
            normal: 'always',
            component: 'always',
          },
          svg: 'always',
          math: 'always',
        },
      ],
      '@typescript-eslint/no-var-requires': 0,
      '@typescript-eslint/ban-ts-comment': 0,
      '@typescript-eslint/no-explicit-any': 0,
    },
  },
])
