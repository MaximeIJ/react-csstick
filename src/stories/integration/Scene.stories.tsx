import type {StoryObj} from '@storybook/react-vite';

import {Big as BigScene} from '../Scene.stories';

import {Big as BigStickInteg} from './Stick.stories';

import {Scene} from '@/components/index';
import {Directions} from '@/components/Scene/presets';
import type {SceneProps, StickProps} from '@/util/types';

export default {
  component: Scene,
  parameters: {
    layout: 'centered',
  },
} as StoryObj<SceneProps>;

const baseSceneArgs = BigScene.args as SceneProps;
const baseStickArgs = BigStickInteg.args as StickProps;

const simpleStickArgs: StickProps = {
  ...baseStickArgs,
  coord: Directions.SW,
};

const simpleSceneArgs: SceneProps = {
  ...baseSceneArgs,
  childProps: [simpleStickArgs],
  sticks: [simpleStickArgs],
};

export const Big: StoryObj<SceneProps> = {
  args: simpleSceneArgs,
};
