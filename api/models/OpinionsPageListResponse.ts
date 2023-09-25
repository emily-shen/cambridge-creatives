/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { OpinionsPageListResponseDataItem } from './OpinionsPageListResponseDataItem';

export type OpinionsPageListResponse = {
    data?: Array<OpinionsPageListResponseDataItem>;
    meta?: {
        pagination?: {
            page?: number;
            pageSize?: number;
            pageCount?: number;
            total?: number;
        };
    };
};

