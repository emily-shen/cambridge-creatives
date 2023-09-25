/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CommitteeMemberListResponse } from '../models/CommitteeMemberListResponse';
import type { CommitteeMemberRequest } from '../models/CommitteeMemberRequest';
import type { CommitteeMemberResponse } from '../models/CommitteeMemberResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class CommitteeMemberService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * @returns CommitteeMemberListResponse OK
     * @throws ApiError
     */
    public getCommitteeMembers({
        sort,
        paginationWithCount,
        paginationPage,
        paginationPageSize,
        paginationStart,
        paginationLimit,
        fields,
        populate,
        filters,
        locale,
    }: {
        /**
         * Sort by attributes ascending (asc) or descending (desc)
         */
        sort?: string,
        /**
         * Return page/pageSize (default: true)
         */
        paginationWithCount?: boolean,
        /**
         * Page number (default: 0)
         */
        paginationPage?: number,
        /**
         * Page size (default: 25)
         */
        paginationPageSize?: number,
        /**
         * Offset value (default: 0)
         */
        paginationStart?: number,
        /**
         * Number of entities to return (default: 25)
         */
        paginationLimit?: number,
        /**
         * Fields to return (ex: title,author)
         */
        fields?: string,
        /**
         * Relations to return
         */
        populate?: string,
        /**
         * Filters to apply
         */
        filters?: Record<string, any>,
        /**
         * Locale to apply
         */
        locale?: string,
    }): CancelablePromise<CommitteeMemberListResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/committee-members',
            query: {
                'sort': sort,
                'pagination[withCount]': paginationWithCount,
                'pagination[page]': paginationPage,
                'pagination[pageSize]': paginationPageSize,
                'pagination[start]': paginationStart,
                'pagination[limit]': paginationLimit,
                'fields': fields,
                'populate': populate,
                'filters': filters,
                'locale': locale,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * @returns CommitteeMemberResponse OK
     * @throws ApiError
     */
    public postCommitteeMembers({
        requestBody,
    }: {
        requestBody: CommitteeMemberRequest,
    }): CancelablePromise<CommitteeMemberResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/committee-members',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * @returns CommitteeMemberResponse OK
     * @throws ApiError
     */
    public getCommitteeMembersId({
        id,
    }: {
        id: number,
    }): CancelablePromise<CommitteeMemberResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/committee-members/{id}',
            path: {
                'id': id,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * @returns CommitteeMemberResponse OK
     * @throws ApiError
     */
    public putCommitteeMembersId({
        id,
        requestBody,
    }: {
        id: number,
        requestBody: CommitteeMemberRequest,
    }): CancelablePromise<CommitteeMemberResponse> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/committee-members/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * @returns number OK
     * @throws ApiError
     */
    public deleteCommitteeMembersId({
        id,
    }: {
        id: number,
    }): CancelablePromise<number> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/committee-members/{id}',
            path: {
                'id': id,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
                500: `Internal Server Error`,
            },
        });
    }

}
