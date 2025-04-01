import { InputNumberProps } from 'antd';
export declare namespace NInputNumber {
    type TProps = Omit<InputNumberProps, 'disabled' | 'readOnly'> & {
        isDisabled?: boolean;
        isReadOnly?: boolean;
    };
}
