import {CSSProperties} from 'react';

import {BaseCSSPropsInput, StickCSSPropsInput, TextProps} from './types';

/**
 * Generate CSS strings
 */

/**
 *
 * @param css Initial css string to wrap
 * @param f factor to multiply by
 * @returns Input wrapped in calc multiplied by the f
 */
export const multCss = (css: string, f: number) => `calc(${css} * ${f})`;
/**
 *
 * @param css Initial css string to wrap
 * @param f factor to divide by (replaces 0 with 1 for safe division)
 * @returns Input wrapped in calc divided by the f
 */
export const divCss = (css: string, f: number) => `calc(${css} / ${f || 1})`;
/**
 *
 * @param varName Name of the CSS var to offset by (omit the --)
 * @returns CSS calc for 100% - the provided var
 */
export const offsetVar = (varName: string) => `calc(100% - var(--${varName}))`;
/**
 *
 * @param angle the numeric angle in degrees
 * @returns CSS string with 'deg' appended to the provided angle
 */
export const deg = (angle?: number) => `${angle ?? 0}deg`;
/**
 *
 * @param angle the numeric angle in degrees
 * @returns CSS string for the rotate transfrom with *deg()* applied to the number to append 'deg'
 */
export const rotate = (angle?: number) => `rotate(${deg(angle)})`;

/**
 * Generate CSS-in-JS style objects
 */

/**
 *
 * @param angle In Degrees
 * @returns Input wrapped in calc multiplied by the f
 */
export const rotateTransformCSSProp = (angle?: number) =>
  ({
    transform: rotate(angle),
  } as CSSProperties);

/**
 *
 * @param input Subset of StickProps needed for dynamic CSS props
 * @returns CSSProperties object with the inputs process where needed
 */
export const baseCSSProps = (input: BaseCSSPropsInput): CSSProperties => {
  const {bgColor, color, width, height, thickness} = input;
  return {
    ['--w']: width,
    ['--h']: height,
    ['--t']: thickness,
    ['--c']: color,
    ['--bgc']: bgColor,
  } as CSSProperties;
};

/**
 *
 * @param input Subset of StickProps needed for dynamic CSS props
 * @returns CSSProperties object with the inputs process where needed
 */
export const stickCSSProps = (input: StickCSSPropsInput): CSSProperties => {
  const {bgColor, color, width, height, thickness, base, coord, offsets} = input;
  return {
    ...baseCSSProps({bgColor, color, width, height, thickness}),
    ['--angle']: deg(base ?? 0),
    top: `calc(${coord?.y ?? 0} - ${offsets?.y ?? '0%'})`,
    left: `calc(${coord?.x ?? 0} - ${offsets?.x ?? '0%'})`,
  } as CSSProperties;
};

/**
 *
 * @param input Subset of StickProps needed for dynamic CSS props
 * @returns CSSProperties object with the inputs process where needed
 */
export const textCSSProps = (input: TextProps): CSSProperties => {
  const {font, fontSize, fontWeight, borderColor, borderRadius} = input;
  return {
    ['--f']: font,
    ['--fs']: fontSize,
    ['--fw']: fontWeight,
    ['--bc']: borderColor,
    ['--br']: borderRadius,
  } as CSSProperties;
};
