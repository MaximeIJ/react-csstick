import {divCss, offsetVar} from '@/util/css';
import {Coordinates, PosType, StickPosition, StickProps} from '@/util/types';

export const DEFAULT_STICK_SIZE = '12rem';

export const Default: Required<StickProps> = {
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
  posId: 'default',
};

const H = 'h';
const W = 'w';
const OP = '0%';

export const COORD: Record<string, Coordinates> = {
  C: {
    x: divCss(offsetVar(W), 2),
    y: divCss(offsetVar(H), 2),
  },
  SW: {
    x: OP,
    y: offsetVar(H),
  },
  W: {
    x: OP,
    y: divCss(offsetVar(H), 2),
  },
  NW: {
    x: OP,
    y: OP,
  },
  N: {
    x: divCss(offsetVar(W), 2),
    y: OP,
  },
  NE: {
    x: offsetVar(W),
    y: OP,
  },
  E: {
    x: offsetVar(W),
    y: divCss(offsetVar(H), 2),
  },
  SE: {
    x: offsetVar(W),
    y: offsetVar(H),
  },
  S: {
    x: divCss(offsetVar(W), 2),
    y: offsetVar(H),
  },
};

export const POSITIONS: Record<PosType, StickPosition> = {
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

export const POINT_SIDES: Array<StickProps> = [
  {
    ...Default,
    coord: COORD.E,
    posId: 'pointL',
    id: 'R',
  },
  {
    ...Default,
    coord: COORD.W,
    posId: 'pointR',
    id: 'L',
  },
];

// export const SIX_CELL_SCENE_PROPS: SceneProps = {
//   ...DEFAULT_COMMON,
//   dimensions: {
//     width: multCss(DEFAULT_STICK_SIZE, 3),
//     height: multCss(DEFAULT_STICK_SIZE, 2),
//   },
//   sticks: POINT_SIDES,
// };

// export const TWO_CELL_SCENE_PROPS: SceneProps = {
//   ...DEFAULT_COMMON,
//   dimensions: {
//     width: multCss(DEFAULT_STICK_SIZE, 2),
//     height: DEFAULT_STICK_SIZE,
//   },
//   sticks: POINT_SIDES,
// };

// export const TWO_ROW_COMIC_PROPS: ComicProps = {
//   ...DEFAULT_COMMON,
//   id: "def-comic",
//   dimensions: {
//     width: multCss(DEFAULT_STICK_SIZE, 4),
//     height: multCss(DEFAULT_STICK_SIZE, 2),
//   },
//   scenes: [
//     DEFAULT_SCENE_PROPS,
//     DEFAULT_SCENE_PROPS,
//     DEFAULT_SCENE_PROPS,
//     DEFAULT_SCENE_PROPS,
//     DEFAULT_SCENE_PROPS,
//     DEFAULT_SCENE_PROPS,
//   ],
//   layout: [
//     [150, 50, 75],
//     [50, 50, 75],
//   ],
// };

// export const COMIC_LAYOUTS: Record<string, Partial<ComicProps>> = {
//   THREE_STRIP: {
//     dimensions: {
//       width: multCss(DEFAULT_STICK_SIZE, 4),
//       height: DEFAULT_STICK_SIZE,
//     },
//     layout: [[2, 2, 3]],
//   },
//   THREE_BY_THREE: {
//     dimensions: {
//       width: multCss(DEFAULT_STICK_SIZE, 4),
//       height: multCss(DEFAULT_STICK_SIZE, 4),
//     },
//     layout: [
//       [2, 2, 3],
//       [3, 2, 2],
//       [2, 3, 2],
//     ],
//   },
//   SINGLE_MINI: {
//     dimensions: {
//       width: DEFAULT_STICK_SIZE,
//       height: DEFAULT_STICK_SIZE,
//     },
//     layout: [[1]],
//   },
//   SINGLE_BIG: {
//     dimensions: {
//       width: multCss(DEFAULT_STICK_SIZE, 4),
//       height: multCss(DEFAULT_STICK_SIZE, 4),
//     },
//     layout: [[1]],
//   },
// };

// export const DEFAULT_COMIC_PROPS: ComicProps = {
//   ...DEFAULT_COMMON,
//   id: "def-comic",
//   dimensions: COMIC_LAYOUTS.THREE_STRIP.dimensions,
//   scenes: [],
//   layout: COMIC_LAYOUTS.THREE_STRIP.layout ?? [],
// };
