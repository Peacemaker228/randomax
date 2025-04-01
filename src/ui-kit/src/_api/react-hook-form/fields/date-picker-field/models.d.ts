import { ReactNode } from 'react';
import { FieldPathValue, FieldValues, Path, UseControllerProps } from 'react-hook-form';
import { LabelTooltipType } from 'antd/es/form/FormItemLabel';
import { Dayjs } from 'dayjs';
import { NDatePicker } from '../../../../ui/datetime';
/**
 * Неймспейс с типизацией DatePickerField
 */
export declare namespace NDatePickerField {
    type TProps<ControlType extends FieldValues> = Omit<NDatePicker.TProps, 'defaultValue' | 'onChange' | 'multiple'> & Omit<UseControllerProps<ControlType>, 'name' | 'disabled'> & {
        fieldName: Path<ControlType>;
        /**
         * Ф-я форматирования значения с формы к Dayjs, если форматирование по умолчанию работает с ошибками
         */
        formatter?: (date: FieldPathValue<ControlType, Path<ControlType>>) => Dayjs;
        /**
         * Настройка лейаута
         */
        isHorizontal?: boolean;
        /**
         * Отображения обязательности
         */
        isRequiredRight?: boolean;
        label?: ReactNode;
        onChange?: (date: Dayjs, dateString: string) => void;
        /**
         * Ф-я форматирования значения филда для прокидывания в форму
         * По умолчанию преобразуется в ISO
         */
        parser?: (value: Dayjs, stringValue: string) => FieldPathValue<ControlType, Path<ControlType>>;
        /**
         * Форматтер для режима readonly
         */
        readonlyFormatter?: (value: FieldPathValue<ControlType, Path<ControlType>>) => string;
        tooltip?: LabelTooltipType;
    };
}
