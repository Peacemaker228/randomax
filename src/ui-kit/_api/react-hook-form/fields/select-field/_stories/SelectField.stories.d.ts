import { Meta } from '@storybook/react';
import { NSelectField } from '../models';
import { SelectField } from '../SelectField';
declare const FIELD_NAME = "select";
type TForm = {
    [FIELD_NAME]: string;
};
declare const _default: Meta<typeof SelectField>;
export default _default;
export declare const Default: import('@storybook/csf').AnnotatedStoryFn<import('@storybook/react').ReactRenderer, NSelectField.TProps<TForm>>;
export declare const Readonly: import('@storybook/csf').AnnotatedStoryFn<import('@storybook/react').ReactRenderer, NSelectField.TProps<TForm>>;
