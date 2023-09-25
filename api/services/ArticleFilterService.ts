/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ArticleFilterListResponse } from '../models/ArticleFilterListResponse';
import type { ArticleFilterRequest } from '../models/ArticleFilterRequest';
import type { ArticleFilterResponse } from '../models/ArticleFilterResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ArticleFilterService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * @returns ArticleFilterListResponse OK
     * @throws ApiError
     */
    public getArticleFilters({
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
    }): CancelablePromise<ArticleFilterListResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/article-filters',
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
     * @returns ArticleFilterResponse OK
     * @throws ApiError
     */
    public postArticleFilters({
        requestBody,
    }: {
        requestBody: ArticleFilterRequest,
    }): CancelablePromise<ArticleFilterResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/article-filters',
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
     * @returns ArticleFilterResponse OK
     * @throws ApiError
     */
    public getArticleFiltersId({
        id,
    }: {
        id: number,
    }): CancelablePromise<ArticleFilterResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/article-filters/{id}',
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
     * @returns ArticleFilterResponse OK
     * @throws ApiError
     */
    public putArticleFiltersId({
        id,
        requestBody,
    }: {
        id: number,
        requestBody: ArticleFilterRequest,
    }): CancelablePromise<ArticleFilterResponse> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/article-filters/{id}',
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
    public deleteArticleFiltersId({
        id,
    }: {
        id: number,
    }): CancelablePromise<number> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/article-filters/{id}',
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
