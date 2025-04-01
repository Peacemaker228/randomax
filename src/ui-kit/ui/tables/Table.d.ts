import { TAnyObject } from '../../models';
import { NTable } from './models/model.ts';
export declare function Table<T extends TAnyObject>(props: NTable.TTableProps<T>): import("react/jsx-runtime").JSX.Element;
export declare namespace Table {
    var SELECTION_COLUMN: {};
    var EXPAND_COLUMN: {};
    var Summary: typeof import("rc-table/lib/Footer/Summary").default;
}
