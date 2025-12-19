import { channelPageData, type ChannelPageDataTypes } from '../../constants';
import { FASTPIX_STREAM_BASE_URL, R2_BASE_URL } from '../../configs';

const apiToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXNza2V5IjoiNTAxMTQyIiwiZXhwIjoxNjkyNzEwMjE3fQ.YAkRGWBlXdwYLnsW2fiG_y9889ADzjD30OEzNg3or40'

export const getChannelPageData = (pathname: string) => {
    const key = pathname?.replace('/channel', '') as keyof ChannelPageDataTypes;
    if (key in channelPageData) {
        return channelPageData[key]?.sections || {};
    }
    return {};
};

export const isNewdFeedpage = (pathname: string) => pathname?.includes('/feed')

export const isCurrentpage = (pathname: string, currentpage: string[]) => currentpage?.includes(pathname)

export class ApiSerivice {
    getToken = async (url: string) => {
        const tokenUrl = url + "/webcontent/generate_token";
        const tokenRes = await fetch(tokenUrl);
        if (!tokenRes.ok) {
            throw new Response("Failed to fetch token", { status: 500 });
        }
        const token = await tokenRes.json() as string;
        return token;
    }

    getApiData = async (url: string) => {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('no data found')
        }
        const data = await response.json();
        return data;
    }

    getApiDataWithHeaders = async (url: string, headers: RequestInit, name?: string) => {
        try {
            const response = await fetch(url, headers);
            if (!response.ok) {
                throw new Error('no data found')
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error(`Error fetching ${name ?? 'data'}:`, error);
            throw new Error(`Error fetching ${name ?? 'data'}`);
        }
    }

    submitApiData = async (
        url: string,
        body: any,
        token: string,
        isAutorised: boolean = false,
    ) => {
        const tokenHeader = {
            'token': token ?? apiToken
        }
        const apiInit = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        }
        if (isAutorised) {
            apiInit.headers = {
                ...apiInit.headers,
                ...tokenHeader
            }
        }
        const response = await fetch(url, apiInit);
        if (!response.ok) {
            throw new Error('no data found')
        }
        const data = await response.json();
        return data;
    }
}

export const getStreamUrl = (playBackId: string) => `${FASTPIX_STREAM_BASE_URL}/${playBackId}.m3u8`

export const getR2Url = (endpoint: string) => `${R2_BASE_URL}/${endpoint}`