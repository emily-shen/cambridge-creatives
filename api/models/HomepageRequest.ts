/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { HomepageEventTitleOptionsComponent } from './HomepageEventTitleOptionsComponent';
import type { HomepageHomepageArticlesComponent } from './HomepageHomepageArticlesComponent';
import type { HomepageHomepageQAndAsComponent } from './HomepageHomepageQAndAsComponent';

export type HomepageRequest = {
    data: {
        about_text?: string;
        homepage_articles?: Array<HomepageHomepageArticlesComponent>;
        homepage_qandas?: Array<HomepageHomepageQAndAsComponent>;
        hero?: (number | string);
        qanda_title?: string;
        qanda_description?: string;
        article_title?: string;
        article_description?: string;
        event_description?: string;
        event_option?: Array<HomepageEventTitleOptionsComponent>;
    };
};

