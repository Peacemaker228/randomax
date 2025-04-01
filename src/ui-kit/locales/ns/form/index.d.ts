import { TFunction } from 'i18next';
import { ValidateMessages } from 'rc-field-form/lib/interface';
declare const Locale: (t: TFunction<"translation", undefined>) => {
    optional?: string;
    defaultValidateMessages: ValidateMessages;
};
export { Locale };
