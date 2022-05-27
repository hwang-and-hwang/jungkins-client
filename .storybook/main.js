const path = require('path');
const { vanillaExtractPlugin } = require('@vanilla-extract/vite-plugin');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  core: {
    builder: '@storybook/builder-vite',
  },
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  framework: '@storybook/react',
  viteFinal: async (config) => {
    config.plugins.push(vanillaExtractPlugin());
    return {
      ...config,
      resolve: {
        alias: [{ find: '@', replacement: path.resolve(__dirname, '../src') }],
      },
    };
  },
};
