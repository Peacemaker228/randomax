import { NProgress } from '../models';
export interface IUseSegmentsActions {
    progressId: string;
    progressType?: NProgress.TType;
    onSegmentSuccessClick?: () => void;
    onSegmentFailureClick?: () => void;
    onSegmentRestClick?: () => void;
}
export declare const useSegmentActions: ({ progressId, progressType, onSegmentSuccessClick, onSegmentFailureClick, onSegmentRestClick, }: IUseSegmentsActions) => void;
