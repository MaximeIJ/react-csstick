import React, {FC} from 'react';

import TextBubble from '../TextBubble';

import {Default, Positions} from './presets';

import {chainCall, chainClickable} from '@/hooks/chainClickable';
import './style.css';
import {anglesCSSProps, rotateTransformCSSProp, stickCSSProps} from '@/util/css';
import {LimbAngleProps, StickProps, TextBubbleProps} from '@/util/types';

// todo: move to props
const animated = false;

const Stick: FC<StickProps> = (props = Default) => {
  const {bgColor, color, posId, customPos, dimensions, coord, childProps, children, onClick} = props;
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
    // todo: fix animation when implemented
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

  return (
    <div className="stick" style={stickStyle} onClick={chainCall(onClick)}>
      <div className="head"></div>
      <div className="body">
        <div className="arms">
          {renderLimb(arms?.left)}
          {renderLimb(arms?.right)}
        </div>
        <div className="legs">
          {renderLimb(legs?.left)}
          {renderLimb(legs?.right)}
        </div>
      </div>
      {(childProps || children)?.map((child, idx) => {
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
        return ChildComponent && <ChildComponent {...(child as TextBubbleProps)} key={`stickchild-${idx}`} />;
      })}
    </div>
  );
};

export default chainClickable(Stick);
