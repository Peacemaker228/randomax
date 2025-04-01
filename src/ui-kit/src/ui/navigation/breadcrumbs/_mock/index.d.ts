export declare const MENU_ITEMS: ({
    title: string;
    className?: undefined;
} | {
    title: string;
    className: string;
})[];
export declare const WITH_MENU_ITEMS: ({
    title: string;
    className?: undefined;
    menu?: undefined;
} | {
    title: string;
    className: string;
    menu?: undefined;
} | {
    title: string;
    menu: {
        items: {
            key: string;
            label: import("react/jsx-runtime").JSX.Element;
        }[];
    };
    className?: undefined;
})[];
