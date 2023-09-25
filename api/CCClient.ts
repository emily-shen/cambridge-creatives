/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseHttpRequest } from './core/BaseHttpRequest';
import type { OpenAPIConfig } from './core/OpenAPI';
import { FetchHttpRequest } from './core/FetchHttpRequest';

import { AboutPageService } from './services/AboutPageService';
import { ArticleService } from './services/ArticleService';
import { ArticleFilterService } from './services/ArticleFilterService';
import { CommitteeMemberService } from './services/CommitteeMemberService';
import { HomepageService } from './services/HomepageService';
import { InterviewService } from './services/InterviewService';
import { InterviewFilterService } from './services/InterviewFilterService';
import { NavbarService } from './services/NavbarService';
import { OpinionsPageService } from './services/OpinionsPageService';
import { QAndAPageService } from './services/QAndAPageService';
import { ResourcesPageService } from './services/ResourcesPageService';

type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;

export class CCClient {

    public readonly aboutPage: AboutPageService;
    public readonly article: ArticleService;
    public readonly articleFilter: ArticleFilterService;
    public readonly committeeMember: CommitteeMemberService;
    public readonly homepage: HomepageService;
    public readonly interview: InterviewService;
    public readonly interviewFilter: InterviewFilterService;
    public readonly navbar: NavbarService;
    public readonly opinionsPage: OpinionsPageService;
    public readonly qAndAPage: QAndAPageService;
    public readonly resourcesPage: ResourcesPageService;

    public readonly request: BaseHttpRequest;

    constructor(config?: Partial<OpenAPIConfig>, HttpRequest: HttpRequestConstructor = FetchHttpRequest) {
        this.request = new HttpRequest({
            BASE: config?.BASE ?? 'http://localhost:1337/api',
            VERSION: config?.VERSION ?? '1.0.0',
            WITH_CREDENTIALS: config?.WITH_CREDENTIALS ?? false,
            CREDENTIALS: config?.CREDENTIALS ?? 'include',
            TOKEN: config?.TOKEN,
            USERNAME: config?.USERNAME,
            PASSWORD: config?.PASSWORD,
            HEADERS: config?.HEADERS,
            ENCODE_PATH: config?.ENCODE_PATH,
        });

        this.aboutPage = new AboutPageService(this.request);
        this.article = new ArticleService(this.request);
        this.articleFilter = new ArticleFilterService(this.request);
        this.committeeMember = new CommitteeMemberService(this.request);
        this.homepage = new HomepageService(this.request);
        this.interview = new InterviewService(this.request);
        this.interviewFilter = new InterviewFilterService(this.request);
        this.navbar = new NavbarService(this.request);
        this.opinionsPage = new OpinionsPageService(this.request);
        this.qAndAPage = new QAndAPageService(this.request);
        this.resourcesPage = new ResourcesPageService(this.request);
    }
}

