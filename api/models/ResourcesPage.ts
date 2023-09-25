/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ResourcesPage = {
    page_title?: string;
    page_description?: string;
    article_filters?: {
        data?: Array<{
            id?: number;
            attributes?: {
                tag?: string;
                articles?: {
                    data?: Array<{
                        id?: number;
                        attributes?: {
                            title?: string;
                            image_banner?: {
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
                                                attributes?: {
                                                    name?: string;
                                                    pathId?: number;
                                                    parent?: {
                                                        data?: {
                                                            id?: number;
                                                            attributes?: any;
                                                        };
                                                    };
                                                    children?: {
                                                        data?: Array<{
                                                            id?: number;
                                                            attributes?: any;
                                                        }>;
                                                    };
                                                    files?: {
                                                        data?: Array<{
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
                                                    path?: string;
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
                            author?: string;
                            article_body?: Array<({
                                id?: number;
                                __component?: string;
                                text?: string;
                            } | {
                                id?: number;
                                __component?: string;
                                heading?: string;
                                dropdown_content?: string;
                            } | {
                                id?: number;
                                __component?: string;
                                file?: {
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
                                file_name?: string;
                            } | {
                                id?: number;
                                __component?: string;
                                heading?: string;
                            } | {
                                id?: number;
                                __component?: string;
                                image?: {
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
                                caption?: string;
                            } | {
                                id?: number;
                                __component?: string;
                                quote?: string;
                                attribution?: string;
                            } | {
                                id?: number;
                                __component?: string;
                                subheading?: string;
                            })>;
                            article_url?: string;
                            article_filters?: {
                                data?: Array<{
                                    id?: number;
                                    attributes?: any;
                                }>;
                            };
                            old_url?: string;
                            publish_date?: string;
                            leader?: string;
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

