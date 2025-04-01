import { TExtendedThemeConfig } from './models';
import { TTheme } from './theme-registry';
/**
 * Регистрирует тему для её дальнейшего использования.
 */
export declare const registerTheme: ({ id, algorithm, token, components }: TTheme) => void;
/**
 * Хук для взаимодействия с регистром тем.
 */
export declare const useThemeRegistry: () => [TExtendedThemeConfig, (id: string, isStrict?: boolean) => void];
