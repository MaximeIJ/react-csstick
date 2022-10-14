import type {StoryObj} from '@storybook/react-vite';

import {Stick, StickPresets} from '@/components/index';
import {StickProps} from '@/util/types';

// export default Stick;

export default {
  title: 'Example/Stick',
  component: Stick,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as StoryObj<StickProps>;

export const Primary: StoryObj<StickProps> = {args: StickPresets.Default};
