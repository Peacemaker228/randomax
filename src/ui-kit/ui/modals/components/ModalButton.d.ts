import { NModalDocument } from '../components/model.ts';
/**
 * Компонент модального окна с кнопкой открытия.
 * * */
export declare function ModalButton<T extends {
    onClick: NModalDocument.TBtnClickHandler;
}>(props: NModalDocument.TModalButtonProps<T>): import("react/jsx-runtime").JSX.Element;
