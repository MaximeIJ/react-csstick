import {StickPresets} from '@/components/Stick';
import {ComicProps} from '@/util/types';

const DEFAULT_COMIC_SIZE = '50vmin';

export const Default: Required<ComicProps> = {
  color: StickPresets.Default.color,
  dimensions: {
    width: DEFAULT_COMIC_SIZE,
    height: DEFAULT_COMIC_SIZE,
    thickness: StickPresets.Default.dimensions.thickness,
  },
  id: '',
  scenes: [],
  layout: [],
};
