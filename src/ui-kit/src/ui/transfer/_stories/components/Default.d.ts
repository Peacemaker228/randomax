import { ReactNode } from 'react';
import { IRecordType } from '../../_mock/TransferItems';
import { NTransfer } from '../../models';
export declare const Default: {
    (argTypes: NTransfer.TProps): ReactNode;
    args: {
        titles: string[];
        dataSource: IRecordType[];
    };
};
export declare const OneWay: {
    (argTypes: NTransfer.TProps): ReactNode;
    args: {
        titles: string[];
        isOneWay: boolean;
        dataSource: IRecordType[];
    };
};
export declare const Search: {
    (argTypes: NTransfer.TProps): ReactNode;
    args: {
        isShowSearch: boolean;
    };
};
export declare const Advanced: {
    (argTypes: NTransfer.TProps): ReactNode;
    args: {
        listStyle: {
            width: number;
            height: number;
        };
        operations: string[];
    };
};
export declare const CustomDataSource: {
    (argTypes: NTransfer.TProps): ReactNode;
    args: {
        listStyle: {
            width: number;
            height: number;
        };
    };
};
export declare const Pagination: (argTypes: NTransfer.TProps) => ReactNode;
export declare const Status: (argTypes: NTransfer.TProps) => ReactNode;
