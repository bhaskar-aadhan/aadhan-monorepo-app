import React from 'react'
import { getAssetUrl } from '@repo/utils';
import { cn } from '@repo/ui'
import StreamPlayer from './video-players/stream-player';
import type { VideoPlayerOptionsTypes } from '@repo/types';

type props = {
    className?: string,
    src?: string,
    alt?: string,
    width?: number,
    height?: number
    type?: 'stream' | 'static',
    assetType?: 'icons' | 'images' | 'videos' | 'fonts'
    thumbnail?: string
    wrapperClassName?: string
    posterClassName?: string
    options?: VideoPlayerOptionsTypes
}

const VideoRender: React.FC<props> = ({
    className = "",
    src = "",
    thumbnail = "",
    alt = "asset",
    width = 30,
    height = 30,
    assetType = "videos",
    type = "static",
    wrapperClassName = "",
    posterClassName = "",
    options = {
        controls: true,
        autoPlay: true,
        muted: true,
        loop: true,
    }
}) => {
    return (
        <>
            {
                type === 'stream' ?
                    <StreamPlayer
                        playBackId={src}
                        className={cn('w-24 h-24 object-contain', className)}
                        poster={getAssetUrl(thumbnail)}
                        wrapperClassName={wrapperClassName}
                        posterClassName={posterClassName}
                        options={options}
                    />
                    :
                    <video
                        src={getAssetUrl(src, import.meta.env.VITE_FASTPIX_STREAM_BASE_URL, assetType, type)}
                        className={cn('w-24 h-24 object-contain', className)}
                        width={width}
                        height={height}
                    />
            }
        </>
    )
}

export default VideoRender