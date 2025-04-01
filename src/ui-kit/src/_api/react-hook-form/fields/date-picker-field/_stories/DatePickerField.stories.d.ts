import { Meta } from '@storybook/react';
import { DatePickerField } from '../DatePickerField';
import { NDatePickerField } from '../models';
declare const FIELD_NAME = "datePicker";
type TForm = {
    [FIELD_NAME]: string;
};
declare const _default: Meta<typeof DatePickerField>;
export default _default;
export declare const Default: import('@storybook/csf').AnnotatedStoryFn<import('@storybook/react').ReactRenderer, NDatePickerField.TProps<TForm>>;
export declare const CustomParser: import('@storybook/csf').AnnotatedStoryFn<import('@storybook/react').ReactRenderer, NDatePickerField.TProps<TForm>>;
export declare const Readonly: import('@storybook/csf').AnnotatedStoryFn<import('@storybook/react').ReactRenderer, NDatePickerField.TProps<TForm>>;
export declare const ReadonlyWithCustomFormatter: import('@storybook/csf').AnnotatedStoryFn<import('@storybook/react').ReactRenderer, NDatePickerField.TProps<TForm>>;
