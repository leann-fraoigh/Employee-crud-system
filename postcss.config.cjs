module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-nested-import': {},
    'postcss-nested': {},
    'postcss-advanced-variables': {},
    'postcss-inline-svg': {},
    'postcss-preset-env': {
      browsers: 'last 3 versions, not dead',
      autoprefixer: {
        grid: true,
      },
      features: {
        'custom-media-queries': true,
      },
      stage: 3,
      preserve: false,
    },
    'postcss-sort-media-queries': {},
  },
};
