import { offsetVar } from '@/util/css';
import {PosType, StickPosition, StickProps, TextBubbleProps} from '@/util/types';

const DEFAULT_STICK_SIZE = '12rem';

export const Default: Required<StickProps> = {
  children: [{
    type: 'text',
    id: 'test',
    text: 'Hello World!',
    coord: {
      x: offsetVar('w'),
      y: '0%',
    },
    

  } as TextBubbleProps],
  bgColor: 'transparent',
  color: '#888888',
  coord: {
    x: '0',
    y: '0',
  },
  customPos: {
    limbs: {
      base: 10,
    },
  },
  dimensions: {
    width: DEFAULT_STICK_SIZE,
    height: DEFAULT_STICK_SIZE,
    thickness: '2px',
  },
  id: 'stick',
  onClick: () => null,
  posId: 'default',
  type: 'stick',
};

export const Positions: Record<PosType, StickPosition> = {
  default: Default.customPos,
  custom: {},
  pointL: {
    limbs: {...Default.customPos.limbs, arms: {left: {angle: 89}}},
  },
  pointR: {
    limbs: {...Default.customPos.limbs, arms: {right: {angle: -89}}},
  },
  sitL: {
    limbs: {
      ...Default.customPos.limbs,
      legs: {left: {angle: 90}, right: {angle: 90}},
    },
    offsets: {x: '0', y: '-3rem'},
  },
  walkL: {},
  walkR: {},
};
