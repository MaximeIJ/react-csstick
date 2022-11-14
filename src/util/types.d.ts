import { MutableRefObject } from 'react';
/**
 * Generic dimension-related attributes, in any CSS unit
 * e.g.: '100px', '5%', '0.75vmin', 'inherit'
 */
export declare type Dimensions = {
    width: string;
    height: string;
    /** Determines the thickness of the lines in the object */
    thickness: string;
};
/**
 * Generic coordinate attributes for absolute position
 * e.g.: '0', '5em', '10.5%', 'inherit'
 */
export declare type Coordinates = {
    /** Calculated from the left */
    x: string;
    /** Calculated from the top */
    y: string;
};
/** Possible sides for a Stick */
export declare type Side = 'left' | 'right';
/** Stick position preset keys (some are not implemented) */
export declare type PosType = 'default' | 'custom' | 'panik' | 'pointL' | 'pointR' | 'sitL' | 'walkL' | 'walkR';
/** Stick limb position preset keys */
export declare type LimbPosType = 'default' | 'armPoint' | 'armHip' | 'armHeadHold' | 'legHalfSquat';
/**
 * Attributes related to the angle(s) of a Stick's limb
 */
export declare type LimbAngleProps = {
    /**
     * The first 3 angles (in degrees) will affect a limb's first three joints starting from the body
     * e.g.: On an arm, the values [30, 105, -45] would look like holding the hand horizontal with the elbow bent, or:
     * 30 degrees between the upper arm and the body (shoulder)
     * 105 degrees between the lower and upper arms (elbow) - Note: don't think about the anatomy of it
     * -45 degrees between the lower arm and the hand (wrist)
     * Note that angles are transitive: the sum of all angles equals the angle between the body and the hand (90 deg)
     */
    angle: number | Array<number>;
};
export declare type LimbsProps = Partial<Record<Side, LimbAngleProps>>;
/**
 * Attributes related to a Stick's limb angles
 */
export declare type LimbAngles = {
    /** Applies to every limb that doesn't have attributes in `arms` or `legs` */
    base?: number | Array<number>;
    /** Optionally override either or both arms' angles */
    arms?: LimbsProps;
    /** Optionally override either or both legs' angles */
    legs?: LimbsProps;
};
/** Attributes related to a Stick's body position */
export declare type StickPosition = {
    /** The angles in the Stick's body */
    limbs?: LimbAngles;
    /**
     * An offset applied after the Stick's coord to further adjust placement.
     * Useful for positions like sitting to lower the stick relative to where
     * it would render if it was standing.
     */
    offsets?: Coordinates;
};
/**
 * Property related to having Comic elements be clickable
 */
export declare type Clickable = {
    /**
     * Callback on element click returning ref to a wrapper around
     * the React Element clicked.
     */
    onClick?: (ref: MutableRefObject<HTMLSpanElement | null>) => void;
};
/** Common Component properties shared by all main elements */
export declare type CommonProps<T = unknown> = Clickable & {
    /** Will be prepended by the parent's id e.g. comic-scene1-stick2-text1 */
    id: string;
    /** Type discriminator representing the elements that extent this base */
    type: 'common' | 'stick' | 'text' | 'scene' | 'comic';
    /**
     * Affects the texture of the stroke for the drawn element,
     * with 'sketch' distorting straight lines/angles for a more natural look
     */
    lineStyle?: 'sketch' | '';
    bgColor?: string;
    color?: string;
    coord?: Coordinates;
    /** See preset defaults to see what the fallbacks are for missing attributes */
    dimensions?: Partial<Dimensions>;
    /** Generic array of children of either a predefined type or CommonProps itself (for multiple types) */
    childProps?: Array<T extends CommonProps ? T : CommonProps>;
};
/** Stick-specific Component properties */
export declare type StickProps = CommonProps & {
    /** Preset position key or 'custom' to define `customPos` */
    posId?: PosType;
    /** Ignored unless posId === 'custom' */
    customPos?: StickPosition;
    /** @deprecated use childProps instead */
    children: Array<TextBubbleProps>;
};
/** Properties that will be injected as CSS variables in various elements */
export declare type BaseCSSPropsInput = {
    color?: string;
    /** x and y extracted for absolute positioning */
    coord?: Coordinates;
    width?: string;
    height?: string;
    thickness?: string;
    bgColor?: string;
};
/** Properties that will be injected as CSS variables in Sticks */
export declare type StickCSSPropsInput = BaseCSSPropsInput & {
    /** See @LimbAngles */
    base?: number | Array<number>;
    /** See @StickPosition */
    offsets?: Coordinates;
};
/** Defines text-based content properties */
export declare type TextProps = {
    /** Text content for the bubble. Whitespaces and lines breaks are preserved */
    text?: string;
    /** Passed directly, no additional processing ensures the font is installed */
    font?: string;
    fontSize?: string;
    fontWeight?: string;
    borderColor?: string;
    borderRadius?: string;
};
/** TextBubble-specific Component properties */
export declare type TextBubbleProps = CommonProps & TextProps;
/** Scene-specific Component properties */
export declare type SceneProps = CommonProps & {
    /** @deprecated use childProps field instead */
    sticks?: Array<StickProps>;
};
/** Comic-specific Component properties */
export declare type ComicProps = CommonProps & {
    /** @deprecated use childProps field instead */
    scenes: Array<SceneProps>;
    /**
     * Determine the composition of the scenes
     * Each array within `layout` corresponds to a row,
     * with each number inside corresponding to its width ratio.
     * Ratios per row are summed to determine the % each one takes
     * Ratios must be > 0
     */
    layout: Array<Array<number>>;
};
