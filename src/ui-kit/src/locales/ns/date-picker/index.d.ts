import { PickerLocale } from 'antd/lib/date-picker/generatePicker';
import { TFunction } from 'i18next';
declare const Locale: (t: TFunction<"translation", undefined>) => PickerLocale;
export { Locale };
