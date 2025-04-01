import { AnyObject, GetRowKey, TableProps } from '../..';
export declare namespace NMultiExpandTable {
    type TProps = TableProps<AnyObject> & {
        /**
         * Ключ, по которому группируем
         */
        groupedKey: string[];
        /**
         * Раскрыты ли группы по умолчанию
         */
        isExpandedByDefault?: boolean;
        /**
         * Уникальный ключ строки
         */
        rowKey: string | GetRowKey<AnyObject>;
    };
}
