import type {StoryObj} from '@storybook/react-vite';

import {Stick, StickPresets} from '@/components/index';
import {StickProps} from '@/util/types';

export default {
  component: Stick,
  parameters: {
    layout: 'fullscreen',
  },
  // Not working right now
  // args: StickPresets.Default,
  // argTypes: typeof Stick,
} as StoryObj<StickProps>;

const BaseBig = {
  ...StickPresets.Default,
  dimensions: {
    width: '25vmin',
    height: '25vmin',
    thickness: '2px',
  },
};

const BaseHuge = {
  ...StickPresets.Default,
  dimensions: {
    width: '90vmin',
    height: '90vmin',
    thickness: '0.5vmin',
  },
};

export const Default: StoryObj<StickProps> = {args: StickPresets.Default};

export const Big: StoryObj<StickProps> = {
  args: BaseBig,
};

export const Huge: StoryObj<StickProps> = {args: BaseHuge};

export const Point: StoryObj<StickProps> = {
  args: {
    ...BaseHuge,
    posId: 'pointL',
  },
};

export const Weirdo: StoryObj<StickProps> = {
  args: {
    ...BaseHuge,
    bgColor: '#eeeeee',
    color: '#88a888',
    customPos: {
      limbs: {
        base: 10,
        arms: {
          left: {
            angle: -53,
          },
          right: {
            angle: 133,
          },
        },
        legs: {
          left: {
            angle: -25,
          },
          right: {
            angle: 95,
          },
        },
      },
    },
    posId: 'custom',
  },
};
