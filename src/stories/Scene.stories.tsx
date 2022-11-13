import type {StoryObj} from '@storybook/react-vite';
import {MutableRefObject} from 'react';

import {Scene, ScenePresets} from '@/components/index';
import {SceneProps} from '@/util/types';

export default {
  component: Scene,
  parameters: {
    layout: 'centered',
  },
} as StoryObj<SceneProps>;

const BaseBig: SceneProps = {
  ...ScenePresets.Default,
  dimensions: {
    width: '50vmin',
    height: '30vmin',
    thickness: '3px',
  },
};

const ClickableTest: SceneProps = {
  ...BaseBig,
  onClick: (ref: MutableRefObject<HTMLSpanElement | null>) => {
    if (!ref || !ref.current) {
      return;
    }
    console.log({ref});
    ref.current.style.backgroundColor = '#f00';
  },
};

export const Default: StoryObj<SceneProps> = {args: ScenePresets.Default};

export const Big: StoryObj<SceneProps> = {args: BaseBig};

export const Clickable: StoryObj<SceneProps> = {args: ClickableTest};
