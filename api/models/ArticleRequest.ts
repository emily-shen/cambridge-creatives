/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ContentBodyTextComponent } from './ContentBodyTextComponent';
import type { ContentDropdownComponent } from './ContentDropdownComponent';
import type { ContentFileDownloadComponent } from './ContentFileDownloadComponent';
import type { ContentHeadingComponent } from './ContentHeadingComponent';
import type { ContentImageComponent } from './ContentImageComponent';
import type { ContentQuoteComponent } from './ContentQuoteComponent';
import type { ContentSubheadingComponent } from './ContentSubheadingComponent';

export type ArticleRequest = {
    data: {
        title: string;
        image_banner: (number | string);
        author: string;
        article_body: Array<(ContentBodyTextComponent | ContentDropdownComponent | ContentFileDownloadComponent | ContentHeadingComponent | ContentImageComponent | ContentQuoteComponent | ContentSubheadingComponent)>;
        article_url: string;
        article_filters?: Array<(number | string)>;
        old_url?: string;
        publish_date: string;
        leader?: string;
    };
};

