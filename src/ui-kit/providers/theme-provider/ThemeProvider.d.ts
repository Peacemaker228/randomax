import { ReactNode } from 'react';
import { HashPriority } from '@ant-design/cssinjs/lib/StyleContext';
import { ThemeConfig } from 'antd';
type TProps = {
    theme?: ThemeConfig;
    children: ReactNode;
    shouldUseLayer?: boolean;
    hashPriority?: HashPriority;
};
export declare function ThemeProvider({ children, shouldUseLayer, hashPriority }: TProps): import("react/jsx-runtime").JSX.Element;
export {};
