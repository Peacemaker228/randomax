import { NMultiExpandTable } from '../models.ts';
import { MultiExpandTable } from '../MultiExpandableTable.tsx';
declare const _default: {
    title: string;
    parameters: {
        layout: string;
        controls: {
            expanded: boolean;
        };
    };
    component: typeof MultiExpandTable;
};
export default _default;
export declare const DefaultMultiExpandTable: {
    (argTypes: NMultiExpandTable.TProps): import("react/jsx-runtime").JSX.Element;
    args: {
        columns: {
            title: string;
            dataIndex: string;
            key: string;
        }[];
        data: {
            key: number;
            name: string;
            age: number;
            address: string;
        }[];
        groupedKey: string[];
        isExpanded: boolean;
        isExpandedByDefault: boolean;
        rowKey: string;
    };
};
