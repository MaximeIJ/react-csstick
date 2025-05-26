import {Dimensions, LimbAngleProps, LimbPosType, PosType, StickPosition, StickProps} from '@/util/types';

const DEFAULT_STICK_SIZE = '12rem';

export const LimbAnglePresets: Record<LimbPosType, LimbAngleProps> = {
  default: {angle: [10, 0, -180]},
  armPoint: {angle: [75, 15]},
  armHip: {angle: [75, -85, 10]},
  armHeadHold: {angle: [110, 80, -30]},
  legHalfSquat: {angle: [50, -50, 90]},
};

export const Default: Required<StickProps> = {
  childProps: [],
  children: [],
  bgColor: 'transparent',
  color: '#888888',
  coord: {
    x: '0',
    y: '0',
  },
  customPos: {
    limbs: {
      base: [10, 0, -180],
    },
  },
  dimensions: {
    width: DEFAULT_STICK_SIZE,
    height: DEFAULT_STICK_SIZE,
    thickness: '2px',
  } as Required<Dimensions>,
  id: '',
  lineStyle: '',
  onClick: () => null,
  posId: 'default',
  type: 'stick',
};

export const Positions: Record<PosType, StickPosition> = {
  default: Default.customPos,
  custom: {},
  panik: {
    limbs: {
      ...Default.customPos.limbs,
      arms: {
        left: LimbAnglePresets.armHeadHold,
        right: LimbAnglePresets.armHeadHold,
      },
      legs: {
        left: LimbAnglePresets.legHalfSquat,
        right: LimbAnglePresets.legHalfSquat,
      },
    },
    offsets: {
      x: '0px',
      y: 'calc(var(--h) / -14)',
    },
  },
  pointL: {
    limbs: {...Default.customPos.limbs, arms: {left: LimbAnglePresets.armPoint}},
  },
  pointR: {
    limbs: {...Default.customPos.limbs, arms: {right: LimbAnglePresets.armPoint}},
  },
  sitL: {
    limbs: {
      ...Default.customPos.limbs,
      legs: {left: {angle: 90}, right: {angle: 90}},
    },
    offsets: {x: '0px', y: '-3rem'},
  },
  walkL: {},
  walkR: {},
};
