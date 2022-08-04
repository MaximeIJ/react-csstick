import {StickPresets} from '@/components/Stick';
import {divCss, offsetVar} from '@/util/css';
import {Coordinates, SceneProps} from '@/util/types';

const DEFAULT_SCENE_SIZE = '100%';

export const Default: Required<SceneProps> = {
  color: StickPresets.Default.color,
  dimensions: {
    width: DEFAULT_SCENE_SIZE,
    height: DEFAULT_SCENE_SIZE,
    thickness: StickPresets.Default.dimensions.thickness,
  },
  id: '',
  onClick: () => null,
  sticks: [],
};

const H = 'h';
const W = 'w';
const OP = '0%';

export const Directions: Record<string, Coordinates> = {
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
