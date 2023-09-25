/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { InterviewFilterListResponse } from '../models/InterviewFilterListResponse';
import type { InterviewFilterRequest } from '../models/InterviewFilterRequest';
import type { InterviewFilterResponse } from '../models/InterviewFilterResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class InterviewFilterService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * @returns InterviewFilterListResponse OK
     * @throws ApiError
     */
    public getInterviewFilters({
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
    }): CancelablePromise<InterviewFilterListResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/interview-filters',
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
     * @returns InterviewFilterResponse OK
     * @throws ApiError
     */
    public postInterviewFilters({
        requestBody,
    }: {
        requestBody: InterviewFilterRequest,
    }): CancelablePromise<InterviewFilterResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/interview-filters',
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
     * @returns InterviewFilterResponse OK
     * @throws ApiError
     */
    public getInterviewFiltersId({
        id,
    }: {
        id: number,
    }): CancelablePromise<InterviewFilterResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/interview-filters/{id}',
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
     * @returns InterviewFilterResponse OK
     * @throws ApiError
     */
    public putInterviewFiltersId({
        id,
        requestBody,
    }: {
        id: number,
        requestBody: InterviewFilterRequest,
    }): CancelablePromise<InterviewFilterResponse> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/interview-filters/{id}',
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
    public deleteInterviewFiltersId({
        id,
    }: {
        id: number,
    }): CancelablePromise<number> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/interview-filters/{id}',
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
