import { NProgress } from '../models';
export interface IUseSegmentsTooltips {
    progressId: string;
    progressType?: NProgress.TType;
    segmentTooltips?: NProgress.TSegmentTooltips;
}
export declare const useSegmentTooltips: ({ progressId, progressType, segmentTooltips }: IUseSegmentsTooltips) => {
    activeSegmentTooltipText: string;
};
