import React, {FC} from 'react';

import {Default} from './presets';

import './style.css';
import Stick from '@/components/Stick';
import {baseCSSProps} from '@/util/css';
import {SceneProps} from '@/util/types';

const Scene: FC<SceneProps> = ({color, dimensions, sticks}) => {
  const {width, height, thickness} = dimensions ?? Default.dimensions;

  const sceneStyle = baseCSSProps({
    width,
    height,
    thickness,
    color,
  });

  return (
    <div className="container" style={sceneStyle}>
      {sticks?.map((stickProps, idx) => (
        <Stick {...stickProps} key={`stick-${idx}-${stickProps.id}`} />
      ))}
    </div>
  );
};

export default Scene;
