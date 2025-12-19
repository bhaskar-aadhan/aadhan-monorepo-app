/**
 * Domain model types
 * Add your business entity types here
 */

import type { ID, Timestamps, Status } from './common';

// Example User model
export interface User extends Timestamps {
    id: ID;
    email: string;
    name: string;
    role: UserRole;
    status: Status;
    avatar?: string;
}

export enum UserRole {
    ADMIN = 'admin',
    USER = 'user',
    GUEST = 'guest',
}

// Example Content model
export interface Content extends Timestamps {
    id: ID;
    title: string;
    description?: string;
    type: ContentType;
    status: Status;
    authorId: ID;
    tags?: string[];
    metadata?: Record<string, unknown>;
}

export enum ContentType {
    ARTICLE = 'article',
    VIDEO = 'video',
    AUDIO = 'audio',
    IMAGE = 'image',
}

// Add more domain models as needed
