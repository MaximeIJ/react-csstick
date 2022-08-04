import React, {FC, useMemo} from 'react';

import {Default} from './presets';

import './style.css';
import Scene from '@/components/Scene';
import {baseCSSProps, divCss, multCss} from '@/util/css';
import {ComicProps} from '@/util/types';
import {chainClickable} from 'hooks/chainClickable';

const Comic: FC<ComicProps> = ({color, dimensions, layout, onClick, scenes}) => {
  const {width, height, thickness} = dimensions ?? Default.dimensions;

  const comicStyle = baseCSSProps({
    width,
    height,
    thickness,
    color,
  });

  const panels = useMemo(() => {
    const normalized = layout.flatMap(r => {
      const total = r.reduce((t, n) => t + n, 0);
      return r.map(ogN => ogN / (total || 1));
    });

    return (
      <div className="row">
        {normalized.map((nf, idx) => {
          const sp = scenes[idx];
          const normalizedProps = sp
            ? {
                ...sp,
                dimensions: {
                  ...sp.dimensions,
                  width: multCss(sp.dimensions?.width ?? '', nf),
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
    <div className="container" style={comicStyle}>
      {panels}
    </div>
  );
};

export default chainClickable(Comic);
