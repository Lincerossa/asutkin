module.exports = {
  extends: [
    'next/core-web-vitals',
    'airbnb',
  ],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', 'ts', 'tsx'] }],
    'no-use-before-define': 'off',
    semi: ['error', 'never'],
    'import/extensions': 0,
    'import/prefer-default-export': 0,
    'react/function-component-definition': 0,
    'react/prop-types': 0,
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'off',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
}
