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

delete simpleStickArgs.lineStyle;

const simpleSceneArgs: SceneProps = {
  ...baseSceneArgs,
  childProps: [simpleStickArgs],
};

export const Big: StoryObj<SceneProps> = {
  args: simpleSceneArgs,
};

export const Sketch: StoryObj<SceneProps> = {
  args: {...simpleSceneArgs, lineStyle: 'sketch'},
};
