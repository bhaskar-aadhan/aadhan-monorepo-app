import { nanoid } from 'nanoid';
import dayjs from 'dayjs';
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


export const getUniqueKey = () => nanoid(8);

export const generateYears = (count = 100, startYear = dayjs().year(), isString = true) => Array.from({ length: count }, (_, i) => ({ key: isString ? (startYear - i).toString() : startYear - i, label: isString ? (startYear - i).toString() : startYear - i }));

export const getCatidFromParams = (catidParam: string | undefined) => {
    if (!catidParam) return "";
    const parts = catidParam.split('-');
    const lastPart = parts?.[parts?.length - 1];
    const catid = parseInt(lastPart, 10);
    return { catid: isNaN(catid) ? "" : catid, catidName: parts?.slice(0, -1).join(' ') || "" };
}

export const truncate = (text: string | undefined, max = 100) => {
    if (!text) return "";
    return text.length > max ? text.slice(0, max).trimEnd() + "…" : text;
};