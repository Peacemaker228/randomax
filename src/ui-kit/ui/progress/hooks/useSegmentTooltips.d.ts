import { NProgress } from '../models';
export type TUseSegmentsActions = {
    progressId: string;
    progressType?: NProgress.TType;
    segmentTooltips?: NProgress.TSegmentTooltips;
};
export declare const useSegmentTooltips: ({ progressId, progressType, segmentTooltips }: TUseSegmentsActions) => {
    activeSegmentTooltipText: string;
};
