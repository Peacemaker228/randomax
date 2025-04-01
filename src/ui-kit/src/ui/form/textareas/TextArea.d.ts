import { default as React } from 'react';
import { TextAreaRef } from 'antd/es/input/TextArea';
import { NTextArea } from './models.ts';
/**
 * Текстовая область (обертка текстовой области из Ant Design)
 */
export declare const TextAreaComponent: ({ isDisabled, isTopContent, inputValueClassName, placeholder, value, ...props }: NTextArea.TProps, ref: React.LegacyRef<TextAreaRef>) => import("react/jsx-runtime").JSX.Element;
export declare const TextArea: React.ForwardRefExoticComponent<Omit<NTextArea.TProps, "ref"> & React.RefAttributes<TextAreaRef>>;
