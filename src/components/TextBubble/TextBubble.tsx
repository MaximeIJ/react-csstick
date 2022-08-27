import React, {FC} from 'react';

import {chainCall, chainClickable} from '../../hooks/chainClickable';

import {Default} from './presets';

import './style.css';
import {stickCSSProps, textCSSProps} from '@/util/css';
import {TextBubbleProps} from '@/util/types';

const TextBubble: FC<TextBubbleProps> = (props = Default) => {
  const {font, fontSize, fontWeight, borderColor, borderRadius, color, dimensions, coord, text, onClick} = props;
  const {width, height, thickness} = {...Default.dimensions, ...dimensions};

  const stickStyle = stickCSSProps({
    width,
    height,
    thickness,
    color,
    coord,
  });
  const textStyle = textCSSProps({
    font,
    fontSize,
    fontWeight,
    borderColor,
    borderRadius,
  });
  const bubbleStyle = {
    ...stickStyle,
    ...textStyle,
  };

  return (
    <div className="bubble" style={bubbleStyle} onClick={chainCall(onClick)}>
      <div className="text">{text ?? ''}</div>
    </div>
  );
};

export default chainClickable(TextBubble);
