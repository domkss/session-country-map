const postcss = require('rollup-plugin-postcss');
//const copy = require('rollup-plugin-copy-glob');
const url = require('postcss-url');

module.exports = {
  rollup(config, options) {
    config.plugins.push(
      postcss({
        plugins: [
          url({
            url: 'inline',
          }),
        ],
        config: {
          path: './postcss.config.js',
        },
        extensions: ['.css'],
        minimize: true,
        inject: {
          insertAt: 'top',
        },
      })
    );

    return config;
  },
};
