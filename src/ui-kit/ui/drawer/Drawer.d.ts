import { default as React } from 'react';
import { TExtendedThemeConfig } from '../../providers/theme-provider';
import { NDrawer } from './models';
type TDrawerState = {
    drawerWidth: number;
    initialWidth: number;
    drawerHeight: number;
    initialHeight: number;
    initialX: number;
    initialY: number;
    isResizing: boolean;
};
export declare const ResizableDragger: ({ onMouseDown, placement, theme, state, isOpen, }: {
    onMouseDown: (event: React.MouseEvent<HTMLDivElement>) => void;
    placement: NDrawer.TBaseProps["placement"];
    theme: TExtendedThemeConfig;
    state: TDrawerState;
    isOpen: boolean;
}) => import("react/jsx-runtime").JSX.Element | null;
export declare function Drawer({ withDefaultFooter, defaultFooterProps, customFooter, ...props }: NDrawer.TProps): import("react/jsx-runtime").JSX.Element;
export {};
