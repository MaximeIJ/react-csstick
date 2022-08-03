import React, {FC} from 'react';

import {Default, POSITIONS} from './presets';

import './style.css';
import {rotateTransformCSSProp, stickCSSProps} from '@/util/css';
import {LimbAngleProps, StickProps} from '@/util/types';

const Stick: FC<StickProps> = (props = Default) => {
  const {color, posId, customPos, dimensions, coord} = props;
  const hasCustomPose = posId === 'custom' && customPos;
  const {limbs, offsets} = !hasCustomPose ? POSITIONS[posId ?? 'custom'] : customPos;
  const {width, height, thickness} = {...Default.dimensions, ...dimensions};
  const {base = 0, arms, legs} = {...Default.customPos.limbs, ...limbs};

  const stickStyle = stickCSSProps({
    width,
    height,
    thickness,
    color,
    base,
    offsets,
    coord,
  });

  const renderLimb = (p?: LimbAngleProps) => {
    const limbStyle = p?.angle ? rotateTransformCSSProp(p.angle) : {};
    return <div style={limbStyle} />;
  };

  return (
    <div className="stick" style={stickStyle}>
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
    </div>
  );
};

export default Stick;
