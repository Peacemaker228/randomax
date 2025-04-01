import { ReactNode } from 'react';
import { TableProps } from '../../Table';
import { ColumnsType } from '../../models';
import { DataType } from '../models';
export declare const DragNDropRowsTable: {
    (argTypes: TableProps<DataType>): ReactNode;
    storyName: string;
    args: {
        columns: ColumnsType<DataType>;
        data: DataType[];
    };
};
