import { InputNumberProps } from 'antd';
/**
 * Неймспейс с типизацией NInputNumber
 */
export declare namespace NInputNumber {
    type TProps = Omit<InputNumberProps, 'disabled' | 'readOnly'> & {
        isDisabled?: boolean;
        isReadOnly?: boolean;
    };
}
