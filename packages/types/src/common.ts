/**
 * Common types used across all apps
 */

// Generic API Response wrapper
export interface ApiResponse<T = unknown> {
    success: boolean;
    data?: T;
    error?: ApiError;
    message?: string;
}

// API Error structure
export interface ApiError {
    code: string;
    message: string;
    details?: Record<string, unknown>;
}

// Pagination parameters
export interface PaginationParams {
    page: number;
    limit: number;
    offset?: number;
}

// Paginated response
export interface PaginatedResponse<T> {
    items: T[];
    total: number;
    page: number;
    limit: number;
    hasNext: boolean;
    hasPrevious: boolean;
}

// Common status enum
export enum Status {
    ACTIVE = 'active',
    INACTIVE = 'inactive',
    PENDING = 'pending',
    ARCHIVED = 'archived',
}

// Common ID types
export type ID = string | number;
export type UUID = string;

// Utility types
export type Nullable<T> = T | null;
export type Optional<T> = T | undefined;
export type Maybe<T> = T | null | undefined;

// Timestamp types
export interface Timestamps {
    createdAt: string;
    updatedAt: string;
}

export interface SoftDelete extends Timestamps {
    deletedAt?: string;
}
