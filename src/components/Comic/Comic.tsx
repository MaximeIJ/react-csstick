import React, {FC, useMemo} from 'react';

import {Default} from './presets';

import './style.css';
import Scene from '@/components/Scene';
import {baseCSSProps, divCss, multCss} from '@/util/css';
import {ComicProps} from '@/util/types';
import {chainClickable} from '@/hooks/chainClickable';

const Comic: FC<ComicProps> = ({bgColor, childProps, color, dimensions, layout, lineStyle, onClick, scenes}) => {
  const {width, height, thickness} = dimensions ?? Default.dimensions;

  const comicStyle = baseCSSProps({
    width,
    height,
    thickness,
    bgColor,
    color,
  });

  const panels = useMemo(() => {
    const normalized = layout
      .map(r => {
        const total = r.reduce((t, n) => t + n, 0);
        return r.map(ogN => ogN / (total || 1));
      })
      .flat();

    const sceneChildren = childProps?.filter(({type}) => type === 'scene');

    return (
      <div className="row">
        {normalized.map((nf, idx) => {
          const sp = [...(sceneChildren ?? []), ...(scenes ?? [])][idx];
          const normalizedProps = sp
            ? {
                bgColor,
                color,
                lineStyle,
                ...sp,
                dimensions: {
                  thickness,
                  ...sp.dimensions,
                  width: multCss('100%', nf),
                  height: divCss(dimensions?.height ?? '', layout.length || 1),
                },
              }
            : undefined;
          return normalizedProps && <Scene key={`scene-${idx}`} {...normalizedProps} onClick={onClick} />;
        })}
      </div>
    );
  }, [dimensions?.height, layout, scenes]);

  return (
    <div className={`${lineStyle ?? ''} comic`} style={comicStyle}>
      {panels}
    </div>
  );
};

export default chainClickable(Comic);
