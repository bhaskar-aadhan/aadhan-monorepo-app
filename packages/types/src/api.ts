/**
 * API-related types
 */

// HTTP Methods
export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

// HTTP Status codes
export enum HttpStatus {
    OK = 200,
    CREATED = 201,
    NO_CONTENT = 204,
    BAD_REQUEST = 400,
    UNAUTHORIZED = 401,
    FORBIDDEN = 403,
    NOT_FOUND = 404,
    INTERNAL_SERVER_ERROR = 500,
}

// Request headers
export interface RequestHeaders {
    'Content-Type'?: string;
    'Authorization'?: string;
    'Accept'?: string;
    [key: string]: string | undefined;
}

// API Request configuration
export interface ApiRequestConfig {
    method: HttpMethod;
    url: string;
    headers?: RequestHeaders;
    params?: Record<string, string | number | boolean>;
    body?: unknown;
    timeout?: number;
}

// API Endpoint definition
export interface ApiEndpoint {
    path: string;
    method: HttpMethod;
    requiresAuth?: boolean;
}

// Query parameters
export type QueryParams = Record<string, string | number | boolean | string[]>;

// Form data types
export type FormData = Record<string, string | number | boolean | File | File[]>;
