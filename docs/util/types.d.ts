export declare type Dimensions = {
    width: string;
    height: string;
    thickness: string;
};
export declare type Coordinates = {
    x: string;
    y: string;
};
export declare type Side = 'left' | 'right';
export declare type PosType = 'default' | 'custom' | 'pointL' | 'pointR' | 'sitL' | 'walkL' | 'walkR';
export declare type LimbAngleProps = {
    angle: number | Array<number>;
};
export declare type LimbsProps = Partial<Record<Side, LimbAngleProps>>;
export declare type LimbAngles = {
    base?: number | Array<number>;
    arms?: LimbsProps;
    legs?: LimbsProps;
};
export declare type StickPosition = {
    limbs?: LimbAngles;
    offsets?: Coordinates;
};
export declare type Clickable = {
    onClick: (id?: string) => void;
};
export declare type CommonProps<T = unknown> = Clickable & {
    id: string;
    type: 'common' | 'stick' | 'text' | 'scene' | 'comic';
    bgColor?: string;
    color?: string;
    coord?: Coordinates;
    dimensions?: Partial<Dimensions>;
    childProps?: Array<T extends CommonProps ? T : CommonProps>;
};
export declare type StickProps = CommonProps & {
    posId?: PosType;
    customPos?: StickPosition;
    /** @deprecated use childProps instead */
    children: Array<TextBubbleProps>;
};
export declare type BaseCSSPropsInput = {
    color?: string;
    coord?: Coordinates;
    width?: string;
    height?: string;
    thickness?: string;
    bgColor?: string;
};
export declare type StickCSSPropsInput = BaseCSSPropsInput & {
    base?: number | Array<number>;
    offsets?: Coordinates;
};
export declare type TextProps = {
    text?: string;
    font?: string;
    fontSize?: string;
    fontWeight?: string;
    borderColor?: string;
    borderRadius?: string;
};
export declare type TextBubbleProps = CommonProps & TextProps;
export declare type SceneProps = CommonProps & {
    /** @deprecated (ignore for now) use childProps field instead */
    sticks?: Array<StickProps>;
};
export declare type ComicProps = CommonProps & {
    /** @deprecated (ignore for now) use childProps field instead */
    scenes: Array<SceneProps>;
    layout: Array<Array<number>>;
};
