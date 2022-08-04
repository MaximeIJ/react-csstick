export type Dimensions = {
  width: string;
  height: string;
  thickness: string;
};

export type Coordinates = {
  x: string;
  y: string;
};

export type Side = 'left' | 'right';
export type PosType = 'default' | 'custom' | 'pointL' | 'pointR' | 'sitL' | 'walkL' | 'walkR';
export type LimbAngleProps = {
  angle: number;
  // joint?: number;
};
export type LimbsProps = Partial<Record<Side, LimbAngleProps>>;

export type LimbAngles = {
  base?: number;
  arms?: LimbsProps;
  legs?: LimbsProps;
};

export type StickPosition = {limbs?: LimbAngles; offsets?: Coordinates};

export type Clickable = {
  onClick: (id?: string) => void;
}

export type CommonProps = Clickable & {
  id: string;
  color?: string;
  dimensions?: Partial<Dimensions>;
};

export type StickProps = CommonProps & {
  posId?: PosType;
  coord?: Coordinates;
  customPos?: StickPosition;
};


export type BaseCSSPropsInput =  {
  color?: string;
  width?: string;
  height?: string;
  thickness?: string;
};

export type StickCSSPropsInput = BaseCSSPropsInput & {
  base?: number;
  coord?: Coordinates;
  offsets?: Coordinates;
};

export type SceneProps = CommonProps & {
  sticks?: Array<StickProps>;
};

export type ComicProps = CommonProps & {
  scenes: Array<SceneProps>;
  layout: Array<Array<number>>;
};

export type EditorProps<T> = {
  onChange: (newProps: T) => void;
  starter?: T;
  selection?: string;
  setSelection?: (s: string) => void;
  showPreview?: boolean;
};
