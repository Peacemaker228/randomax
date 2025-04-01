import { default as React } from 'react';
import { NCheckbox } from '../checkboxes/models';
/**
 * Неймспейс с типизацией NCommonToggleComponents
 */
export declare namespace NCommonToggleComponents {
    type TCheckboxValue = string | number | boolean;
    type TAbstractCheckbox<T> = {
        prefixCls?: string;
        className?: string;
        rootClassName?: string;
        defaultChecked?: boolean;
        checked?: boolean;
        style?: React.CSSProperties;
        disabled?: boolean;
        title?: string;
        onChange?: (e: T) => void;
        onClick?: React.MouseEventHandler<HTMLElement>;
        onMouseEnter?: React.MouseEventHandler<HTMLElement>;
        onMouseLeave?: React.MouseEventHandler<HTMLElement>;
        onKeyPress?: React.KeyboardEventHandler<HTMLElement>;
        onKeyDown?: React.KeyboardEventHandler<HTMLElement>;
        value?: any;
        tabIndex?: number;
        name?: string;
        children?: React.ReactNode;
        id?: string;
        autoFocus?: boolean;
        type?: string;
        required?: boolean;
    };
    type TAbstractCheckboxGroup<T extends TCheckboxValue = TCheckboxValue> = {
        prefixCls?: string;
        className?: string;
        rootClassName?: string;
        options?: (TCheckboxOption<T> | string | number)[];
        isDisabled?: boolean;
        style?: React.CSSProperties;
    };
    type TCheckboxOption<T extends TCheckboxValue = TCheckboxValue> = {
        label: React.ReactNode;
        value: T;
        style?: React.CSSProperties;
        disabled?: boolean;
        title?: string;
        id?: string;
        onChange?: (e: TCheckboxChangeEvent) => void;
        required?: boolean;
    };
    type TCheckboxChangeEventTarget = NCheckbox.TProps & {
        checked: boolean;
    };
    type TCheckboxChangeEvent = {
        target: TCheckboxChangeEventTarget;
        stopPropagation: () => void;
        preventDefault: () => void;
        nativeEvent: MouseEvent;
    };
}
