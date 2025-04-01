import { FormItemProps } from 'antd';
/**
 * Неймспейс с типизацией NFromItem
 */
export declare namespace NFormItem {
    type TProps = {
        /**
         * Флаг отображения знака обязательности
         */
        isRequired?: boolean;
        /**
         * Позиция знака обязательности
         * По умолчанию 'right'
         */
        requiredMarkPosition?: 'left' | 'right';
    } & Omit<FormItemProps, 'required'>;
}
