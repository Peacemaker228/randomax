import { default as React } from 'react';
import { InputRef } from 'antd';
import { NInput } from './models';
export declare const InputSearchComponent: ({ placeholder, ...props }: NInput.TInputSearchProps, ref: React.LegacyRef<InputRef>) => import("react/jsx-runtime").JSX.Element;
export declare const InputSearch: React.ForwardRefExoticComponent<Omit<NInput.TInputSearchProps, "ref"> & React.RefAttributes<InputRef>>;
