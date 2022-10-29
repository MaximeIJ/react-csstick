import {TextBubbleProps} from '@/util/types';

const DEFAULT_SIZE = '3rem';

export const Default: Required<TextBubbleProps> = {
  childProps: [],
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
  lineStyle: '',
  onClick: () => null,
  text: '',
  font: 'Comic Sans MS, Comic Sans, cursive',
  fontSize: '1.5rem',
  fontWeight: 'normal',
  borderColor: 'transparent',
  borderRadius: '40%',
};
