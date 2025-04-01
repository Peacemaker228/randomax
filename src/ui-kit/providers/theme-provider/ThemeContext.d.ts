import { TExtendedThemeConfig } from './models';
/**
 * Контекст темы.
 * Возвращает текущую тему и функцию для выбора темы по её `id`.
 */
export declare const ThemeContext: import('react').Context<{
    theme: TExtendedThemeConfig;
    setTheme: (theme: string) => void;
}>;
