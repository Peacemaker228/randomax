import { default as React } from 'react';
import { NInput } from '../../..';
type TFloatInputRef = {
    input: HTMLInputElement | null;
};
export declare const FloatInput: React.ForwardRefExoticComponent<Omit<NInput.TProps, "ref"> & React.RefAttributes<TFloatInputRef>>;
export {};
