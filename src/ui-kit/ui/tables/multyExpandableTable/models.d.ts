import { TAnyObject } from '../../../models';
import { NCommonTable } from '../..';
import { NTable } from '../models/model.ts';
/**
 * Неймспейс с типизацией NMultiExpandTable
 */
export declare namespace NMultiExpandTable {
    type TMultiExpandProps = NTable.TTableProps<TAnyObject> & {
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
        rowKey: string | NCommonTable.TGetRowKey<TAnyObject>;
    };
}
