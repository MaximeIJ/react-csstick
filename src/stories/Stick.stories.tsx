import type {StoryObj} from '@storybook/react-vite';

import {Stick, StickPresets} from '@/components/index';
import {StickProps} from '@/util/types';

export default {
  component: Stick,
  parameters: {
    layout: 'fullscreen',
  },
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
            angle: [63, -43, 48],
          },
          right: {
            angle: [20, 30, 40],
          },
        },
        legs: {
          left: {
            angle: [5, 34, -107],
          },
          right: {
            angle: [20, 1, 70],
          },
        },
      },
    },
    posId: 'custom',
  },
};
