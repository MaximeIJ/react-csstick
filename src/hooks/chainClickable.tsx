import React, {ComponentType, MouseEventHandler, SyntheticEvent, useRef} from 'react';

import {CommonProps} from '@/util/types';

export function chainClickable<T extends CommonProps>(Component: ComponentType<T>) {
  const ClickableComponent = (props: T) => {
    const {onClick} = props;
    const ref = useRef<HTMLSpanElement>(null);
    if (!onClick) {
      return <Component {...props} />;
    } else {
      const clickHandler: MouseEventHandler<HTMLSpanElement> = event => {
        event.preventDefault();
        event.stopPropagation();
        !onClick ? () => null : onClick(ref);
      };
      return (
        <span onClick={clickHandler} ref={ref}>
          <Component {...props} />
        </span>
      );
    }
  };
  ClickableComponent.displayName = `clickable(${Component.displayName || Component.name || 'Component'})`;
  return ClickableComponent;
}

export function chainCall(fn: (id?: string) => void) {
  return function handler(event: SyntheticEvent) {
    event.stopPropagation();
    fn();
  };
}
