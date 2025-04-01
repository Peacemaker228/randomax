import { Meta } from '@storybook/react';
import { InputNumberField } from '../InputNumberField';
import { NInputNumberField } from '../models';
declare const FIELD_NAME = "inputNumber";
type TForm = {
    [FIELD_NAME]: string;
};
declare const _default: Meta<typeof InputNumberField>;
export default _default;
export declare const Default: import('@storybook/csf').AnnotatedStoryFn<import('@storybook/react').ReactRenderer, NInputNumberField.TProps<TForm>>;
