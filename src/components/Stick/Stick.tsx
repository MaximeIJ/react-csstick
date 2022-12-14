import React, {FC} from 'react';

import TextBubble from '../TextBubble';

import {Default, Positions} from './presets';

import {chainClickable} from '@/hooks/chainClickable';
import {anglesCSSProps, arbitraryCSSProps, multCss, rotateTransformCSSProp, stickCSSProps} from '@/util/css';
import {LimbAngleProps, StickProps, TextBubbleProps} from '@/util/types';

import './style.css';

// todo: move to props
const animated = false;

const Stick: FC<StickProps> = (props = Default) => {
  const {id, bgColor, color, posId, customPos, dimensions, coord, childProps, lineStyle, onClick} = props;
  const hasCustomPose = posId === 'custom' && customPos;
  const {limbs, offsets} = !hasCustomPose ? Positions[posId ?? 'custom'] : customPos;
  const {width, height, thickness} = {...Default.dimensions, ...dimensions};
  const {base = 0, arms, legs} = {...Default.customPos.limbs, ...limbs};

  const stickStyle = stickCSSProps({
    width,
    height,
    thickness,
    bgColor,
    color,
    base,
    offsets,
    coord,
  });

  const renderLimb = (p?: LimbAngleProps) => {
    const angleProps = p?.angle;
    // todo: fix animation when implemented or use @Property instead
    const rotateTransform = animated && typeof angleProps === 'number' ? rotateTransformCSSProp(angleProps) : {};
    const angleVariables = angleProps ? anglesCSSProps(angleProps, 'angle') : {};
    return (
      <div style={{...rotateTransform, ...angleVariables}}>
        <div>
          <div />
        </div>
      </div>
    );
  };

  const bodyStyle = lineStyle === 'sketch' && thickness ? arbitraryCSSProps({['--t']: multCss(thickness, 1.75)}) : {};

  return (
    <div className={`${lineStyle ?? ''} stick`} style={stickStyle} id={id || undefined}>
      <div className="head"></div>
      <div className="body" style={bodyStyle}>
        <div className="arms">
          {renderLimb(arms?.left)}
          {renderLimb(arms?.right)}
        </div>
        <div className="legs">
          {renderLimb(legs?.left)}
          {renderLimb(legs?.right)}
        </div>
      </div>
      {childProps?.map((child, idx) => {
        const {type} = child;
        let ChildComponent = null;
        switch (type) {
          case 'stick':
            ChildComponent = Stick;
            return;
          case 'text':
            ChildComponent = TextBubble;
            break;
          default:
            break;
        }
        return (
          ChildComponent && (
            <ChildComponent onClick={onClick} {...(child as TextBubbleProps)} key={`stickchild-${idx}`} />
          )
        );
      })}
    </div>
  );
};

export default chainClickable(Stick);
