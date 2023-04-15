module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: [
    'filenames-simple',
    '@typescript-eslint',
    'react-refresh'
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended'
  ],
  settings: {
    react: {
      version: 'detect'
    }
  },
  rules: {
    'arrow-parens': ['warn'],
    'operator-linebreak': ['warn', 'before'],
    'no-var': ['error'],
    'prefer-const': ['warn'],
    'array-callback-return': ['error'],
    curly: ['error'],
    'default-case': 'off',
    'default-case-last': ['warn'],
    'default-param-last': ['warn'],
    'eqeqeq': ['error'],
    'no-eval': ['error'],
    'require-await': 'off',
    indent: ['error', 2, { SwitchCase: 1 }],
    quotes: ['error', 'single', { avoidEscape: true }],
    'keyword-spacing': ['error'],
    'no-use-before-define': 'off',
    camelcase: 'off',

    // https://github.com/epaew/eslint-plugin-filenames-simple#available-rules
    'filenames-simple/extension': 'error',
    'filenames-simple/named-export': 'off',
    'filenames-simple/naming-convention': ['error', { rule: 'kebab-case' }],
    'filenames-simple/no-index': 'off',
    'filenames-simple/pluralize': 'off',
    'filenames-simple/typescript-module-declaration': 'off',

    // https://github.com/jsx-eslint/eslint-plugin-react#list-of-supported-rules
    'react/react-in-jsx-scope': 'off',

    'react-refresh/only-export-components': 'warn'
  }
}
