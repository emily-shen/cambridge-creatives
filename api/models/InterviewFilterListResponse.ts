/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { InterviewFilterListResponseDataItem } from './InterviewFilterListResponseDataItem';

export type InterviewFilterListResponse = {
    data?: Array<InterviewFilterListResponseDataItem>;
    meta?: {
        pagination?: {
            page?: number;
            pageSize?: number;
            pageCount?: number;
            total?: number;
        };
    };
};

