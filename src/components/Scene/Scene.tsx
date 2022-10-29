import React, {FC} from 'react';

import {Default} from './presets';

import './style.css';
import Stick from '@/components/Stick';
import {baseCSSProps} from '@/util/css';
import {SceneProps, StickProps} from '@/util/types';
import {chainClickable} from '@/hooks/chainClickable';

const Scene: FC<SceneProps> = ({bgColor, childProps, color, dimensions, lineStyle, sticks, onClick}) => {
  const {width, height, thickness} = dimensions ?? Default.dimensions;

  const sceneStyle = baseCSSProps({
    width,
    height,
    thickness,
    bgColor,
    color,
  });

  return (
    <div className={`${lineStyle ?? ''} scene`} style={sceneStyle} onClick={() => onClick()}>
      {(childProps ?? sticks)
        ?.filter(({type}) => type === 'stick')
        .map(sp => ({bgColor, color, lineStyle, ...sp} as StickProps))
        .map((stickProps, idx) => (
          <Stick {...stickProps} onClick={onClick} key={`stick-${idx}-${stickProps.id}`} />
        ))}
    </div>
  );
};

export default chainClickable(Scene);
