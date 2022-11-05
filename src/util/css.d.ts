import { CSSProperties } from 'react';
import { BaseCSSPropsInput, StickCSSPropsInput, TextProps } from './types';
/**
 * Generate CSS strings
 */
/**
 *
 * @param css Initial css string to wrap
 * @param f factor to multiply by
 * @returns Input wrapped in calc multiplied by the f
 */
export declare const multCss: (css: string, f: number) => string;
/**
 *
 * @param css Initial css string to wrap
 * @param f factor to divide by (replaces 0 with 1 for safe division)
 * @returns Input wrapped in calc divided by the f
 */
export declare const divCss: (css: string, f: number) => string;
/**
 *
 * @param varName Name of the CSS var to offset by (omit the --)
 * @returns CSS calc for 100% - the provided var
 */
export declare const offsetVar: (varName: string) => string;
/**
 *
 * @param angle the numeric angle in degrees
 * @returns CSS string with 'deg' appended to the provided angle
 */
export declare const deg: (angle?: number) => string;
/**
 *
 * @param angle the numeric angle in degrees
 * @returns CSS string for the rotate transfrom with *deg()* applied to the number to append 'deg'
 */
export declare const rotate: (angle?: number) => string;
/**
 * Generate CSS-in-JS style objects
 */
/**
 *
 * @param angle In Degrees
 * @returns Input wrapped in calc multiplied by the f
 */
export declare const rotateTransformCSSProp: (angle?: number) => CSSProperties;
/**
 *
 * @param input Subset of StickProps needed for dynamic CSS props
 * @returns CSSProperties object with the inputs processed where needed
 */
export declare const baseCSSProps: (input: BaseCSSPropsInput) => CSSProperties;
/**
 *
 * @param input Subset of StickProps needed for dynamic CSS props
 * @param prefix Prefix of the CSS variable name
 * @returns CSSProperties object with the inputs processed where needed
 */
export declare const anglesCSSProps: (input: number | Array<number>, prefix: string) => CSSProperties;
/**
 *
 * @param input Subset of StickProps needed for dynamic CSS props
 * @returns CSSProperties object with the inputs processed where needed
 */
export declare const stickCSSProps: (input: StickCSSPropsInput) => CSSProperties;
/**
 *
 * @param input Subset of StickProps needed for dynamic CSS props
 * @returns CSSProperties object with the inputs processed where needed
 */
export declare const textCSSProps: (input: TextProps) => CSSProperties;
/**
 * Type Caster
 * @param input A map of property name to value, both being freeform strings
 * @returns A cast CSSProperties objects
 */
export declare const arbitraryCSSProps: (input: Record<string, string>) => CSSProperties;
