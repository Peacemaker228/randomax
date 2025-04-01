import { ReactNode } from 'react';
import { NTransfer } from '../../models';
export declare const WithCustomEmptyText: {
    (argTypes: NTransfer.TProps): ReactNode;
    args: {
        titles: string[];
        dataSource: import('../../_mock/TransferItems').IRecordType[];
        customNotFoundText: string;
    };
};
