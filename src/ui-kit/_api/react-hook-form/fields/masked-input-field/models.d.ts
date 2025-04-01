import { FieldValues, UseControllerProps } from 'react-hook-form';
import { NFormItem, NInput } from '../../../../ui';
/**
 * Неймспейс с типизацией InputField
 */
export declare namespace NMaskedInputField {
    /**
     * @see {@link NFormItem.TProps}
     * @see {@link NInput.TMaskedProps}
     * @see {@link UseControllerProps}
     */
    type TProps<T extends FieldValues> = Omit<NInput.TMaskedProps, 'defaultValue' | 'onChange'> & Pick<NFormItem.TProps, 'isRequired' | 'tooltip' | 'label'> & Omit<UseControllerProps<T>, 'name' | 'disabled'> & {
        /**
         * Имя поля
         */
        fieldName: UseControllerProps<T>['name'];
        /**
         * Отображения лейбла и поля в одну строку c gjktv
         */
        isHorizontal?: boolean;
        /**
         * Изменения значения инпута
         */
        onChange?: (value: string) => void;
    };
}
