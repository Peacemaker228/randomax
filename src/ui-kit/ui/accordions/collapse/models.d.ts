import { TSize as TSizeC } from '../../../models';
import { NCommonAccordion } from '../_common/models';
/**
 * Неймспейс с типизацией NCollapse
 */
export declare namespace NCollapse {
    type TCollapseExpandIconPosition = NCommonAccordion.TCollapseExpandIconPosition;
    type TCollapseItem = NCommonAccordion.TCollapseItem;
    type TCollapsible = NCommonAccordion.TCollapsible;
    type TSize = TSizeC;
    type TProps = NCommonAccordion.TBaseProps & {
        /**
         * Ключи активных панелей
         */
        activeKey?: (string | number)[] | string | number;
        /**
         * Ключи активных панелей по дефолту
         */
        defaultActiveKey?: (string | number)[] | string | number;
        /**
         * Изменение стилей при встраивании
         */
        isOutline?: boolean;
    };
}
