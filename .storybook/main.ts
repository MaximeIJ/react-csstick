import { StorybookConfig , ViteFinal } from '@storybook/builder-vite';
import { mergeConfig } from 'vite';

const viteFinal: ViteFinal = async (config, {configType}) => {
  // modify and return config
  if (configType === 'DEVELOPMENT') {
    // Your development configuration goes here
  }
  if (configType === 'PRODUCTION') {
    // Your production configuration goes here.
  }
  // Merge custom configuration into the default config
  return mergeConfig(config, {
    // Add dependencies to pre-optimization
    optimizeDeps: {
      include: ['storybook-dark-mode']
    }
  });
};

const config: StorybookConfig  = {
  stories: ['../src/stories/**/*.stories.mdx', '../src/stories/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  core: {
    builder: '@storybook/builder-vite'
  },
  framework: '@storybook/react-vite',
  viteFinal,
};
export default config;
// export const framework = '@storybook/react';