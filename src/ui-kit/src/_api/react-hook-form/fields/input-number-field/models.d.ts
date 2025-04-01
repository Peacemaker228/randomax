import { ReactNode } from 'react';
import { FieldValues, UseControllerProps } from 'react-hook-form';
import { LabelTooltipType } from 'antd/es/form/FormItemLabel';
import { NInputNumber } from '../../../../ui/form/inputs';
/**
 * Неймспейс с типизацией InputField
 */
export declare namespace NInputNumberField {
    type TProps<ControlType extends FieldValues> = Omit<NInputNumber.TProps, 'defaultValue'> & Omit<UseControllerProps<ControlType>, 'name'> & {
        fieldName: UseControllerProps<ControlType>['name'];
        /**
         * Настройка лейаута
         */
        isHorizontal?: boolean;
        label?: ReactNode;
        tooltip?: LabelTooltipType;
        /**
         * Флаг отображения обязательности
         */
        isRequiredRight?: boolean;
    };
}
