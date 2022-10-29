import type {StoryObj} from '@storybook/react-vite';

import {Big as BigStick} from '../Stick.stories';
import {Big as BigText} from '../TextBubble.stories';

import {Stick} from '@/components/index';
import {Directions} from '@/components/Scene/presets';
import type {StickProps, TextBubbleProps} from '@/util/types';

export default {
  component: Stick,
  parameters: {
    layout: 'centered',
  },
} as StoryObj<StickProps>;

const baseStickArgs = BigStick.args as StickProps;
const baseTextArgs = BigText.args as TextBubbleProps;

const simpleTextArgs: TextBubbleProps = {
  ...baseTextArgs,
  coord: Directions.N,
};

const simpleStickArgs: StickProps = {
  ...baseStickArgs,
  coord: Directions.C,
  childProps: [simpleTextArgs],
};

export const Big: StoryObj<StickProps> = {
  args: simpleStickArgs,
};

export const Sketch: StoryObj<StickProps> = {
  args: {...simpleStickArgs, lineStyle: 'sketch'},
};
