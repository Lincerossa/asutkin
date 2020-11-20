module.exports = {
  globals: { __PATH_PREFIX__: true },
  rules: {
    semi: ['warn', 'never'],
    'object-curly-newline': ['error', { multiline: true }],
    'comma-dangle': ['warn', 'never'],
    quotes: ['warn', 'single'],
    indent: ['warn', 2],
    'max-len': 'off',
    'react/prop-types': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-one-expression-per-line': 'off'
  },
  extends: ['airbnb', 'airbnb/hooks', 'react-app']
}
