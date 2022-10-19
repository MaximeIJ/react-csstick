import {StorybookConfig, ViteFinal} from '@storybook/builder-vite';

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

const config: StorybookConfig = {
  stories: ['../src/stories/**/*.stories.tsx'],
  logLevel: 'debug',
  addons: [
    // '@storybook/addon-actions',
    // '@storybook/addon-docs',
    // '@storybook/addon-links',
    // '@storybook/addon-backgrounds',
    // '@storybook/addon-a11y',
    // '@storybook/addon-essentials',
  ],
  core: {
    builder: '@storybook/builder-vite',
    disableTelemetry: true,
  },
  features: {
    postcss: false,
    storyStoreV7: true,
    buildStoriesJson: true,
    babelModeV7: true,
    breakingChangesV7: true,
  },
  framework: '@storybook/react-vite',
  viteFinal,
};
export default config;
