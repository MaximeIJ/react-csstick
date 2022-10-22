import { ComponentType, SyntheticEvent } from 'react';
import { CommonProps } from '../../../../../../../src/util/types';
export declare function chainClickable<T extends CommonProps>(Component: ComponentType<T>): {
    (props: T): JSX.Element;
    displayName: string;
};
export declare function chainCall(fn: (id?: string) => void): (event: SyntheticEvent) => void;
