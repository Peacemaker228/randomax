import { Key } from 'react';
import { NColumns } from '../..';
type TIColumnsSettingsCellProps<T extends NColumns.TColumnsSettingsCellOption> = {
    columns: T[];
    checkedColumns: Key[];
    setCheckedColumns: (value: Key[]) => void;
    iconSettings?: React.ReactNode;
    iconSettingsCheck?: React.ReactNode;
};
export declare const ColumnsSettingsCell: <T extends NColumns.TColumnsSettingsCellOption>(props: TIColumnsSettingsCellProps<T>) => import("react/jsx-runtime").JSX.Element;
export {};
