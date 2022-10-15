import { StorybookConfig , ViteFinal } from '@storybook/builder-vite';

const viteFinal: ViteFinal = async (config, {configType}) => {
  // modify and return config
  if (configType === 'DEVELOPMENT') {
    // Your development configuration goes here
  }
  if (configType === 'PRODUCTION') {
    // Your production configuration goes here.
  }
  // Merge custom configuration into the default config
  return {
    ...config,
  };
};

const config: StorybookConfig  = {
  stories: ['../stories/**/*.stories.mdx', '../src/stories/**/*.stories.@(ts|tsx|js|jsx)'],
  logLevel: 'debug',
  addons: [
    // Addons are currently not working, need to upgrade/fix
    // '@storybook/addon-storysource',
    // '@storybook/addon-actions',
    // '@storybook/addon-docs',
    // '@storybook/addon-links',
    // '@storybook/addon-viewport',
    // '@storybook/addon-backgrounds',
    // '@storybook/addon-a11y',
    // '@storybook/addon-links',
    // '@storybook/addon-essentials',
    // '@storybook/addon-highlight',
  ],
  core: {
    builder: '@storybook/builder-vite'
  },
  framework: '@storybook/react-vite',
  viteFinal,
};
export default config;