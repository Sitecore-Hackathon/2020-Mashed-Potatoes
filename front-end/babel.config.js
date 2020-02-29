module.exports = {
  env: {
    test: {
      plugins: ['styled-jsx/babel-test'],
    },
  },
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    '@babel/preset-react',
    ['@babel/preset-typescript', { allExtensions: true, isTSX: true }],
  ],
};
