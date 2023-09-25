/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Interview = {
    interviewee: string;
    link: string;
    interview_filters?: {
        data?: Array<{
            id?: number;
            attributes?: {
                tag?: string;
                interviews?: {
                    data?: Array<{
                        id?: number;
                        attributes?: {
                            interviewee?: string;
                            link?: string;
                            interview_filters?: {
                                data?: Array<{
                                    id?: number;
                                    attributes?: any;
                                }>;
                            };
                            occupation?: string;
                            description?: string;
                            publish_date?: string;
                            createdAt?: string;
                            updatedAt?: string;
                            publishedAt?: string;
                            createdBy?: {
                                data?: {
                                    id?: number;
                                    attributes?: {
                                        firstname?: string;
                                        lastname?: string;
                                        username?: string;
                                        email?: string;
                                        resetPasswordToken?: string;
                                        registrationToken?: string;
                                        isActive?: boolean;
                                        roles?: {
                                            data?: Array<{
                                                id?: number;
                                                attributes?: {
                                                    name?: string;
                                                    code?: string;
                                                    description?: string;
                                                    users?: {
                                                        data?: Array<{
                                                            id?: number;
                                                            attributes?: any;
                                                        }>;
                                                    };
                                                    permissions?: {
                                                        data?: Array<{
                                                            id?: number;
                                                            attributes?: {
                                                                action?: string;
                                                                subject?: string;
                                                                properties?: any;
                                                                conditions?: any;
                                                                role?: {
                                                                    data?: {
                                                                        id?: number;
                                                                        attributes?: any;
                                                                    };
                                                                };
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
                                                        }>;
                                                    };
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
                                            }>;
                                        };
                                        blocked?: boolean;
                                        preferedLanguage?: string;
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
                            updatedBy?: {
                                data?: {
                                    id?: number;
                                    attributes?: any;
                                };
                            };
                        };
                    }>;
                };
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
        }>;
    };
    occupation: string;
    description: string;
    publish_date: string;
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

