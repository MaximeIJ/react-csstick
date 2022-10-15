import type {StoryObj} from '@storybook/react-vite';

import {TextBubble, TextBubblePresets} from '@/components/index';
import {TextBubbleProps} from '@/util/types';

export default {
  component: TextBubble,
  parameters: {
    layout: 'centered',
  },
} as StoryObj<TextBubbleProps>;

const BaseBig = {
  ...TextBubblePresets.Default,
  dimensions: {
    width: '20vmin',
    height: '7vmin',
    thickness: '2px',
  },
  fontSize: '3vmin',
  text: 'Hello World!',
};

export const Default: StoryObj<TextBubbleProps> = {args: TextBubblePresets.Default};

export const Big: StoryObj<TextBubbleProps> = {args: BaseBig};
