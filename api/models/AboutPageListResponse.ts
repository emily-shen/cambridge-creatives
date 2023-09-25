/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AboutPageListResponseDataItem } from './AboutPageListResponseDataItem';

export type AboutPageListResponse = {
    data?: Array<AboutPageListResponseDataItem>;
    meta?: {
        pagination?: {
            page?: number;
            pageSize?: number;
            pageCount?: number;
            total?: number;
        };
    };
};

