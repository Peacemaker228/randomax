import { ReactNode } from 'react';
import { Meta } from '@storybook/react';
import { NProgress } from '../models';
import { Progress } from '../Progress';
declare const _default: Meta<typeof Progress>;
export default _default;
export declare const Default: {
    (argTypes: NProgress.TProps): ReactNode;
    args: {
        type: string;
        size: number[];
    };
};
export declare const Circle: {
    (argTypes: NProgress.TProps): ReactNode;
    args: {
        type: string;
    };
};
export declare const Dashboard: {
    (argTypes: NProgress.TProps): ReactNode;
    args: {
        type: string;
    };
};
export declare const Size: (argTypes: NProgress.TProps) => ReactNode;
export declare const ValuePosition: {
    (argTypes: NProgress.TProps): ReactNode;
    args: {
        type: string;
    };
};
export declare const CustomTextFormat: {
    (argTypes: NProgress.TProps): ReactNode;
    args: {
        type: string;
    };
};
export declare const WithSteps: {
    (argTypes: NProgress.TProps): ReactNode;
    args: {
        type: string;
    };
};
export declare const WithSuccessSegment: {
    (argTypes: NProgress.TProps): ReactNode;
    args: {
        failurePercent: number;
        successPercent: number;
        type: string;
    };
};
export declare const StrokeLinecap: {
    (argTypes: NProgress.TProps): ReactNode;
    args: {
        strokeLinecap: string;
        failurePercent: number;
    };
};
export declare const CustomLineGradient: (argTypes: NProgress.TProps) => ReactNode;
export declare const CircularWithStepsAndGaps: {
    (argTypes: NProgress.TProps): ReactNode;
    args: {
        strokeWidth: number;
    };
};
export declare const ResponsiveCircularWithTooltip: {
    (argTypes: NProgress.TProps): ReactNode;
    args: {
        type: string;
        failurePercent: number;
        strokeWidth: number;
        size: number;
        format: () => string;
    };
};
export declare const WithSuccessSegmentCounting: {
    (argTypes: NProgress.TProps): ReactNode;
    args: {
        type: string;
        isShowInfo: boolean;
        withCounting: boolean;
        successCount: number;
        failureCount: number;
        totalCount: number;
    };
};
export declare const WithSuccessSegmentActionsAndTooltips: {
    (argTypes: NProgress.TProps): ReactNode;
    args: {
        type: string;
        size: number[];
        isShowInfo: boolean;
        withCounting: boolean;
        successCount: number;
        failureCount: number;
        totalCount: number;
        segmentTooltips: {
            success: string;
            failure: string;
            rest: string;
        };
        onSegmentSuccessClick: () => void;
        onSegmentFailureClick: () => void;
        onSegmentRestClick: () => void;
    };
};
