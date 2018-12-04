module.exports = {
  extends: [
    'airbnb-base',
    'plugin:react/recommended'
  ],
  parser: 'babel-eslint',
  plugins: [
    'import',
    'prefer-class-properties',
    'jest',
    'react',
  ],
  globals: {
    'IS_CLIENT': true,
    'IS_SERVER': true,
  },
  rules: {
    'indent': ['error', 2, {
      SwitchCase: 1,
      VariableDeclarator: 1,
      outerIIFEBody: 1,
      FunctionDeclaration: {
        parameters: 1,
        body: 1
      },
      FunctionExpression: {
        parameters: 1,
        body: 1
      }
    }],
    'prefer-class-properties/prefer-class-properties': 2,
  },
  env: {
    'browser': true,
    'es6': true,
    'node': true,
    "jest/globals": true,
  },
};
