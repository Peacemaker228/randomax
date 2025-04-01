import { HTMLAttributes, PropsWithChildren } from 'react';
/**
 * Неймспейс с типизацией NScrollArea
 */
export declare namespace NScrollArea {
    type TProps = PropsWithChildren & HTMLAttributes<HTMLElement> & {
        className?: string;
        orientation?: 'vertical' | 'horizontal' | 'both';
    };
}
