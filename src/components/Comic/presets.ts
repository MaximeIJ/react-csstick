import {StickPresets} from '@/components/Stick';
import {ComicProps} from '@/util/types';

const DEFAULT_COMIC_SIZE = '50vmin';

export const Default: Required<ComicProps> = {
  childProps: [],
  color: StickPresets.Default.color,
  type: 'comic',
  bgColor: 'transparent',
  coord: {
    x: '0',
    y: '0',
  },
  dimensions: {
    width: DEFAULT_COMIC_SIZE,
    height: DEFAULT_COMIC_SIZE,
    thickness: StickPresets.Default.dimensions.thickness,
  },
  id: '',
  onClick: () => null,
  scenes: [],
  layout: [],
};
