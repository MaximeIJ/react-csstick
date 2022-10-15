import type {StoryObj} from '@storybook/react-vite';

import {Big as BigComic} from '../Comic.stories';

import {Big as BigSceneInteg} from './Scene.stories';

import {Comic} from '@/components/index';
import type {ComicProps, SceneProps} from '@/util/types';

export default {
  component: Comic,
  parameters: {
    layout: 'centered',
  },
} as StoryObj<ComicProps>;

const baseComicArgs = BigComic.args as ComicProps;
const baseSceneArgs = BigSceneInteg.args as SceneProps;

const simpleSceneArgs: SceneProps = {
  ...baseSceneArgs,
  dimensions: {
    width: '100%',
    height: '100%',
    thickness: '1px',
  },
};

const simpleComicArgs: ComicProps = {
  ...baseComicArgs,
  layout: [
    [5, 3],
    [5, 3, 4],
  ],
  scenes: [simpleSceneArgs, simpleSceneArgs, simpleSceneArgs, simpleSceneArgs, simpleSceneArgs],
};

export const Big: StoryObj<ComicProps> = {
  args: simpleComicArgs,
};
