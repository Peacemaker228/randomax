import { CSSProperties, ReactNode } from 'react';
export interface IProps {
    description?: ReactNode;
    image?: ReactNode;
    imageStyle?: CSSProperties;
    children?: ReactNode;
    style?: CSSProperties;
}
export declare function Empty(props: IProps): import("react/jsx-runtime").JSX.Element;
