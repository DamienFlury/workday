module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  parser: '@typescript-eslint/parser',
  extends: [ 'airbnb', 'plugin:@typescript-eslint/recommended' ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'react-hooks'
  ],
  rules: {
    'max-len': 'off',
    'react/prop-types': 'off',
    'no-nested-ternary': 'off',
    'react/jsx-filename-extension': ["error", { "extensions": [".js", ".jsx", ".ts", ".tsx"] }],
    'no-unused-vars': 'off',
    "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
    "react-hooks/exhaustive-deps": "warn",
    'import/prefer-default-export': 'off',
    'import/extensions': 'off',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js','.jsx','.ts','.tsx']
      }
    },
  }
};
