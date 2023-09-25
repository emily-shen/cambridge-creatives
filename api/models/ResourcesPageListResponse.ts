/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ResourcesPageListResponseDataItem } from './ResourcesPageListResponseDataItem';

export type ResourcesPageListResponse = {
    data?: Array<ResourcesPageListResponseDataItem>;
    meta?: {
        pagination?: {
            page?: number;
            pageSize?: number;
            pageCount?: number;
            total?: number;
        };
    };
};

