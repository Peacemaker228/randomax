import { default as React } from 'react';
import { TableProps } from '../../../tables';
import { DataType } from './models';
interface IDragNDropTableProps extends TableProps<DataType> {
    data: DataType[];
}
export declare const DragNDropTable: React.FC<IDragNDropTableProps>;
export {};
