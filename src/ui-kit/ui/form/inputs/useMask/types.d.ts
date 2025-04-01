export type TMaskProps = (string | RegExp)[];
/**
 * Неймспейс с типизацией UseMaskOptions
 */
export declare namespace NUseMask {
    type TMaskProps = (string | RegExp)[];
    type TUseMaskOptions = {
        mask: TMaskProps | ((value: string) => TMaskProps);
        initValue?: string;
    };
}
