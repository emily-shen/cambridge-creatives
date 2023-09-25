/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CommitteeCommitteeListComponent = {
    id?: number;
    __component?: string;
    committee_members?: {
        data?: Array<{
            id?: number;
            attributes?: {
                name?: string;
                role?: string;
                pronouns?: string;
                past_committee?: boolean;
                bio?: string;
                year?: number;
                photo?: {
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
                createdAt?: string;
                updatedAt?: string;
                publishedAt?: string;
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
        }>;
    };
};

