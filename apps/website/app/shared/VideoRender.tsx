import React from 'react'
import { getAssetUrl } from '@repo/utils';
import { cn } from '@repo/ui'

type props = {
    className?: string,
    src?: string,
    alt?: string,
    width?: number,
    height?: number
    type?: 'stream' | 'static',
    assetType?: 'icons' | 'images' | 'videos' | 'fonts'
}

const VideoRender: React.FC<props> = ({
    className = "",
    src = "",
    alt = "asset",
    width = 30,
    height = 30,
    assetType = "videos",
    type = "static"
}) => {
    return (
        <video
            src={getAssetUrl(src, import.meta.env.VITE_FASTPIX_STREAM_BASE_URL, assetType, type)}
            className={cn('w-24 h-24 object-contain', className)}
            width={width}
            height={height}
        />
    )
}

export default VideoRender