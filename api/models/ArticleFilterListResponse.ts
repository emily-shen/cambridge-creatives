/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ArticleFilterListResponseDataItem } from './ArticleFilterListResponseDataItem';

export type ArticleFilterListResponse = {
    data?: Array<ArticleFilterListResponseDataItem>;
    meta?: {
        pagination?: {
            page?: number;
            pageSize?: number;
            pageCount?: number;
            total?: number;
        };
    };
};

