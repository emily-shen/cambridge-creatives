/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CommitteeMemberListResponseDataItem } from './CommitteeMemberListResponseDataItem';

export type CommitteeMemberListResponse = {
    data?: Array<CommitteeMemberListResponseDataItem>;
    meta?: {
        pagination?: {
            page?: number;
            pageSize?: number;
            pageCount?: number;
            total?: number;
        };
    };
};

