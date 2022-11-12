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
export type PosType = 'default' | 'custom' | 'panik' |'pointL' | 'pointR' | 'sitL' | 'walkL' | 'walkR';
export type LimbPosType = 'default' | 'armPoint' | 'armHip' | 'armHeadHold' | 'legHalfSquat';
export type LimbAngleProps = {
  angle: number | Array<number>;
};
export type LimbsProps = Partial<Record<Side, LimbAngleProps>>;

export type LimbAngles = {
  base?: number | Array<number>;
  arms?: LimbsProps;
  legs?: LimbsProps;
};

export type StickPosition = {limbs?: LimbAngles; offsets?: Coordinates};

export type Clickable = {
  onClick: (id?: string) => void;
};

export type CommonProps<T = unknown> = Clickable & {
  id: string;
  type: 'common' | 'stick' | 'text' | 'scene' | 'comic';
  lineStyle?: 'sketch' | '';
  bgColor?: string;
  color?: string;
  coord?: Coordinates;
  dimensions?: Partial<Dimensions>;
  childProps?: Array<T extends CommonProps ? T : CommonProps>;
};

export type StickProps = CommonProps & {
  posId?: PosType;
  customPos?: StickPosition;
  /** @deprecated use childProps instead */
  children: Array<TextBubbleProps>;
};

export type BaseCSSPropsInput = {
  color?: string;
  coord?: Coordinates;
  width?: string;
  height?: string;
  thickness?: string;
  bgColor?: string;
};

export type StickCSSPropsInput = BaseCSSPropsInput & {
  base?: number | Array<number>;
  offsets?: Coordinates;
};

export type TextProps = {
  text?: string;
  font?: string;
  fontSize?: string;
  fontWeight?: string;
  borderColor?: string;
  borderRadius?: string;
};

export type TextBubbleProps = CommonProps & TextProps;

export type SceneProps = CommonProps & {
  /** @deprecated use childProps field instead */
  sticks?: Array<StickProps>;
};

export type ComicProps = CommonProps & {
  /** @deprecated use childProps field instead */
  scenes: Array<SceneProps>;
  layout: Array<Array<number>>;
};
