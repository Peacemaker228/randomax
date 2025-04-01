import { TSize as TSizeC } from '../../../models';
import { NCommonAccordion } from '../_common/models';
/**
 * Неймспейс с типизацией NAccordion
 */
export declare namespace NAccordion {
    type TCollapseExpandIconPosition = NCommonAccordion.TCollapseExpandIconPosition;
    type TCollapseItem = NCommonAccordion.TCollapseItem;
    type TCollapsible = NCommonAccordion.TCollapsible;
    type TSize = TSizeC;
    type TProps = NCommonAccordion.TBaseProps & {
        /**
         * Ключи активных панелей
         */
        activeKey?: string | number;
    };
}
