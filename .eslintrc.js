module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  extends: 'airbnb',
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
  ],
  rules: {
    'max-len': 'off',
    'react/prop-types': 'off',
    'no-nested-ternary': 'off',
    'react/jsx-filename-extension': ["error", { "extensions": [".js", ".jsx", ".ts", ".tsx"] }],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js','.jsx','.ts','.tsx']
      }
    },
  }
};
