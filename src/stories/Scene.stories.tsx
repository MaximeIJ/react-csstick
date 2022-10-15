import type {StoryObj} from '@storybook/react-vite';

import {Scene, ScenePresets} from '@/components/index';
import {SceneProps} from '@/util/types';

export default {
  component: Scene,
  parameters: {
    layout: 'centered',
  },
} as StoryObj<SceneProps>;

const BaseBig = {
  ...ScenePresets.Default,
  dimensions: {
    width: '50vmin',
    height: '30vmin',
    thickness: '3px',
  },
};

export const Default: StoryObj<SceneProps> = {args: ScenePresets.Default};

export const Big: StoryObj<SceneProps> = {args: BaseBig};
