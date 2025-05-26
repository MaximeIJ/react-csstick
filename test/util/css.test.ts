import {describe, it} from 'vitest';

import {
  anglesCSSProps,
  arbitraryCSSProps,
  baseCSSProps,
  deg,
  divCss,
  multCss,
  offsetVar,
  rotate,
  rotateTransformCSSProp,
  stickCSSProps,
  textCSSProps,
} from '../../src/util/css';

import {StickPresets} from '@/components/Stick';
import {TextBubblePresets} from '@/components/TextBubble';

describe.concurrent('formatters', () => {
  it('multCss returns a css calc multiplying the expression passed', async ({expect}) => {
    expect(multCss('2px', 10)).toMatchSnapshot();
  });
  it('divCss returns a css calc divinding the expression passed', async ({expect}) => {
    expect(divCss('3px', 20)).toMatchSnapshot();
    expect(divCss('7px', 0)).toMatchSnapshot();
  });
  it('offsetVar returns a css calc offsetting the var passed from 100%', async ({expect}) => {
    expect(offsetVar('varName')).toMatchSnapshot();
  });
  it('deg returns a css deg of the optional number, or 0', async ({expect}) => {
    expect(deg(20)).toMatchSnapshot();
    expect(deg()).toMatchSnapshot();
  });
  it('rotate returns a css rotate of an optional angle, or 0', async ({expect}) => {
    expect(rotate(13)).toMatchSnapshot();
    expect(rotate()).toMatchSnapshot();
  });
});

describe.concurrent('CSS props', () => {
  it('rotateTransformCSSProp returns a css prop with a transform attribute for the optional value', async ({
    expect,
  }) => {
    expect(rotateTransformCSSProp(89)).toMatchSnapshot();
    expect(rotateTransformCSSProp()).toMatchSnapshot();
  });
  it('baseCSSProps returns optional css variables', async ({expect}) => {
    expect(baseCSSProps({})).toMatchSnapshot();
    expect(
      baseCSSProps({bgColor: '#123', color: '#456', width: '2vmin', height: '1vmax', thickness: '1pt'}),
    ).toMatchSnapshot();
  });
  it('anglesCSSProps returns css variables for one or more angles', async ({expect}) => {
    expect(anglesCSSProps(1, 'single')).toMatchSnapshot();
    expect(anglesCSSProps([91, 6, 10], 'multi')).toMatchSnapshot();
  });
  it('stickCSSProps returns css variables for optional stick props', async ({expect}) => {
    expect(stickCSSProps({})).toMatchSnapshot();
    expect(stickCSSProps(StickPresets.Default)).toMatchSnapshot();
    expect(
      stickCSSProps({...StickPresets.Default, coord: {x: '10%', y: '1px'}, offsets: {x: '10%', y: '1px'}}),
    ).toMatchSnapshot();
  });
  it('textCSSProps returns css variables for optional text props', async ({expect}) => {
    expect(textCSSProps({})).toMatchSnapshot();
    expect(textCSSProps(TextBubblePresets.Default)).toMatchSnapshot();
  });
  it('arbitraryCSSProps returns arbitrary css variables', async ({expect}) => {
    // Trivial, coverage
    expect(arbitraryCSSProps({})).toMatchSnapshot();
    expect(arbitraryCSSProps({a: 'b', c: 'd'})).toMatchSnapshot();
  });
});
