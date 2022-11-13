import React, {FC} from 'react';

import {chainClickable} from '../../hooks/chainClickable';

import {Default} from './presets';

import './style.css';
import {stickCSSProps, textCSSProps} from '@/util/css';
import {TextBubbleProps} from '@/util/types';

const TextBubble: FC<TextBubbleProps> = (props = Default) => {
  const {id, font, fontSize, fontWeight, bgColor, borderColor, borderRadius, color, dimensions, coord, text} = props;
  const {width, height, thickness} = {...Default.dimensions, ...dimensions};

  const stickStyle = stickCSSProps({
    width,
    height,
    thickness,
    bgColor,
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
    <div className="bubble" style={bubbleStyle} id={id || undefined}>
      <div className="text">{text ?? ''}</div>
    </div>
  );
};

export default chainClickable(TextBubble);
