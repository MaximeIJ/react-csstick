import type {StoryObj} from '@storybook/react-vite';

import {Comic, ComicPresets} from '@/components/index';
import {ComicProps} from '@/util/types';

export default {
  component: Comic,
  parameters: {
    layout: 'centered',
  },
} as StoryObj<ComicProps>;

const BaseBig = {
  ...ComicPresets.Default,
  dimensions: {
    width: '90vmin',
    height: '60vmin',
    thickness: '4px',
  },
};

export const Default: StoryObj<ComicProps> = {args: ComicPresets.Default};

export const Big: StoryObj<ComicProps> = {args: BaseBig};
