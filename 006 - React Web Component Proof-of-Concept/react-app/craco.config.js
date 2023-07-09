const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const changeProductionOutput = (config) => {
  if (process.env.NODE_ENV !== 'production') {
    return;
  }

  config.output.filename = 'static/js/[name].js';
  config.output.chunkFilename = 'static/js/[name].chunk.js';
  config.output.assetModuleFilename = 'static/media/[name].[ext]';
};

module.exports = {
  webpack: {
    plugins: {
      add: [
        process.env.NODE_ENV === 'production'
          ? [
            new MiniCssExtractPlugin({
              // Options similar to the same options in webpackOptions.output
              // both options are optional
              filename: 'static/css/[name].css',
              chunkFilename: 'static/css/[name].chunk.css',
            }),
            'append',
          ]
          : undefined,
      ].filter(Boolean),
      remove: ['MiniCssExtractPlugin'],
    },
    configure: (config) => {
      changeProductionOutput(config);
      return config;
    },
  },
};
