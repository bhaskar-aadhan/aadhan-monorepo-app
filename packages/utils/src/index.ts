/**
 * Main entry point for @repo/utils
 * Re-exports all utility modules
 */

import { FASTPIX_STREAM_BASE_URL } from "@repo/assets/config";

export * from './string';
export * from './array';
export * from './object';
export * from './date';
export * from './validation';
export * from './format';

export const getAssetUrl = (
    assetPath: string,
    streamUrl: string = FASTPIX_STREAM_BASE_URL,
    assetType: 'icons' | 'images' | 'videos' | 'fonts' = 'images',
    type: 'stream' | 'static' = 'static',
) => {
    if (type === 'stream') {
        return `${streamUrl}/assets/${assetType}/${assetPath}`;
    }
    return `/assets/${assetType}/${assetPath}`;
};
