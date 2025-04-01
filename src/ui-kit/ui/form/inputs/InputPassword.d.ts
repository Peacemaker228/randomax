import { default as React } from 'react';
import { InputRef } from 'antd';
import { NInput } from './models';
export declare const InputPasswordComponent: ({ isDisabled, isReadOnly, ...props }: NInput.TInputPasswordProps, ref: React.LegacyRef<InputRef>) => import("react/jsx-runtime").JSX.Element;
export declare const InputPassword: React.ForwardRefExoticComponent<Omit<NInput.TInputPasswordProps, "ref"> & React.RefAttributes<InputRef>>;
