import {TextBubbleProps} from '@/util/types';

const DEFAULT_SIZE = 'fit-content';

export const Default: Required<TextBubbleProps> = {
  children: [],
  type: 'text',
  bgColor: 'transparent',
  color: '#888888',
  coord: {
    x: '0',
    y: '0',
  },
  dimensions: {
    width: DEFAULT_SIZE,
    height: DEFAULT_SIZE,
    thickness: '2px',
  },
  id: 'text bubble',
  onClick: () => null,
  text: '',
  font: 'comic sans',
  fontSize: '2rem',
  fontWeight: 'normal',
  borderColor: 'transparent',
  borderRadius: '40%',
};
