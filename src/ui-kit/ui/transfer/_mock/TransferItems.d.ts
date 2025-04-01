export type TRecordType = {
    key: string;
    title: string;
    description: string;
    disabled?: boolean;
    chosen?: boolean;
};
export declare const items: TRecordType[];
export declare const getItemsSearch: () => {
    tempMockData: {
        key: string;
        title: string;
        description: string;
        chosen: boolean;
    }[];
    tempTargetKeys: string[];
};
export declare const getItemsPagination: () => {
    tempMockData: {
        key: string;
        title: string;
        description: string;
        chosen: boolean;
    }[];
    tempTargetKeys: string[];
};
export declare const initialTargetKeys: string[];
export declare const oriTargetKeys: string[];
