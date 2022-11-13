import React, {FC} from 'react';

import {Default} from './presets';

import './style.css';
import Stick from '@/components/Stick';
import {baseCSSProps} from '@/util/css';
import {SceneProps, StickProps} from '@/util/types';
import {chainClickable} from '@/hooks/chainClickable';

const Scene: FC<SceneProps> = ({id = 'scene', bgColor, childProps, color, dimensions, lineStyle, sticks, onClick}) => {
  const {width, height, thickness} = dimensions ?? Default.dimensions;

  const sceneStyle = baseCSSProps({
    width,
    height,
    thickness,
    bgColor,
    color,
  });

  return (
    <div className={`${lineStyle ?? ''} scene`} style={sceneStyle} id={id || undefined}>
      {[...(childProps ?? []), ...(sticks ?? [])]
        ?.filter(({type}) => type === 'stick')
        .map((sp, idx) => {
          const stickProps = {bgColor, color, lineStyle, ...sp} as StickProps;
          return <Stick {...stickProps} onClick={onClick} key={`stick-${idx}-${stickProps.id}`} />;
        })}
    </div>
  );
};

export default chainClickable(Scene);
