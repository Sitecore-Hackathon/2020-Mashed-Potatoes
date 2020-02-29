module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: './tsconfig.json',
  },
  plugins: ['@typescript-eslint', 'sonarjs', 'jest'],
  extends: [
    'airbnb-typescript',
    'plugin:sonarjs/recommended',
    'plugin:jest/recommended',
    'prettier/@typescript-eslint',
  ],
  rules: {
    '@typescript-eslint/camelcase': ['error', { allow: ['^f[0-9]+_', 'api_key', 'access_token'] }],
    'consistent-return': 0,
    'implicit-arrow-linebreak': 0, // Handled by prettier
    'import/prefer-default-export': 0,
    'max-len': 0,
    'object-curly-newline': 0,
    'react/jsx-props-no-spreading': [
      'error',
      {
        custom: 'ignore',
      },
    ],
    'react/prop-types': 0,
  },
};
