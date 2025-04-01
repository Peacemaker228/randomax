import { ReactNode } from 'react';
import { TableProps } from '../../Table';
import { DataType } from '../models';
export declare const CustomFilterPanelTable: {
    (argTypes: TableProps<DataType>): ReactNode;
    storyName: string;
    args: {
        data: {
            key: string;
            name: string;
            age: number;
            address: string;
        }[];
    };
};
