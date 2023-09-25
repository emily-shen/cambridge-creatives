/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { QAndAPageListResponseDataItem } from './QAndAPageListResponseDataItem';

export type QAndAPageListResponse = {
    data?: Array<QAndAPageListResponseDataItem>;
    meta?: {
        pagination?: {
            page?: number;
            pageSize?: number;
            pageCount?: number;
            total?: number;
        };
    };
};

