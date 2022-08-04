import React, {ComponentType, SyntheticEvent} from 'react';

import {CommonProps} from '@/util/types';

export function chainClickable<T extends CommonProps>(Component: ComponentType<T>) {
  const ClickableComponent = (props: T) => {
    const {id, onClick} = props;
    const clickHandler = (childID?: string) => {
      !onClick ? () => null : onClick([id, childID].join('|'));
    };
    return <Component {...props} onClick={clickHandler} />;
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
