import { GetProp, TransferProps } from 'antd';
export interface DataType {
    key: string;
    name: string;
    code: string;
    type: string;
}
export type TransferItem = GetProp<TransferProps, 'dataSource'>[number];
