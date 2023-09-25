/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { HomepageEventTitleOptionsComponent } from './HomepageEventTitleOptionsComponent';
import type { HomepageHomepageArticlesComponent } from './HomepageHomepageArticlesComponent';
import type { HomepageHomepageQAndAsComponent } from './HomepageHomepageQAndAsComponent';

export type Homepage = {
    about_text?: string;
    homepage_articles?: Array<HomepageHomepageArticlesComponent>;
    homepage_qandas?: Array<HomepageHomepageQAndAsComponent>;
    hero?: {
        data?: {
            id?: number;
            attributes?: {
                name?: string;
                alternativeText?: string;
                caption?: string;
                width?: number;
                height?: number;
                formats?: any;
                hash?: string;
                ext?: string;
                mime?: string;
                size?: number;
                url?: string;
                previewUrl?: string;
                provider?: string;
                provider_metadata?: any;
                related?: {
                    data?: Array<{
                        id?: number;
                        attributes?: any;
                    }>;
                };
                folder?: {
                    data?: {
                        id?: number;
                        attributes?: any;
                    };
                };
                folderPath?: string;
                createdAt?: string;
                updatedAt?: string;
                createdBy?: {
                    data?: {
                        id?: number;
                        attributes?: any;
                    };
                };
                updatedBy?: {
                    data?: {
                        id?: number;
                        attributes?: any;
                    };
                };
            };
        };
    };
    qanda_title?: string;
    qanda_description?: string;
    article_title?: string;
    article_description?: string;
    event_description?: string;
    event_option?: Array<HomepageEventTitleOptionsComponent>;
    createdAt?: string;
    updatedAt?: string;
    createdBy?: {
        data?: {
            id?: number;
            attributes?: any;
        };
    };
    updatedBy?: {
        data?: {
            id?: number;
            attributes?: any;
        };
    };
};

