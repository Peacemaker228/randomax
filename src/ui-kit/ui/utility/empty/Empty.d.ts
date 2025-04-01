import { CSSProperties, ReactNode } from 'react';
export type TProps = {
    description?: ReactNode;
    image?: ReactNode;
    imageStyle?: CSSProperties;
    children?: ReactNode;
    style?: CSSProperties;
};
export declare function Empty(props: TProps): import("react/jsx-runtime").JSX.Element;
