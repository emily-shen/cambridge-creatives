/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CommitteeCommitteeListComponent } from './CommitteeCommitteeListComponent';
import type { ContentBodyTextComponent } from './ContentBodyTextComponent';
import type { ContentDropdownComponent } from './ContentDropdownComponent';
import type { ContentFileDownloadComponent } from './ContentFileDownloadComponent';
import type { ContentHeadingComponent } from './ContentHeadingComponent';
import type { ContentImageComponent } from './ContentImageComponent';
import type { ContentQuoteComponent } from './ContentQuoteComponent';
import type { ContentSubheadingComponent } from './ContentSubheadingComponent';

export type AboutPageRequest = {
    data: {
        page_title?: string;
        page_description?: string;
        content?: Array<(ContentBodyTextComponent | ContentHeadingComponent | ContentSubheadingComponent | ContentDropdownComponent | ContentQuoteComponent | ContentImageComponent | ContentFileDownloadComponent | CommitteeCommitteeListComponent)>;
    };
};

