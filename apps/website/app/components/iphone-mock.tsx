import React from 'react'
import StreamPlayer from '~/shared/video-players/stream-player'
import { cn } from '@repo/ui'
import VideoRender from '~/shared/VideoRender'
import type { VideoPlayerOptionsTypes } from '@repo/types'

type IphoneMockProps = {
    playBackId?: string;
    poster?: string;
    options?: VideoPlayerOptionsTypes
    className?: string;
    playerClassName?: string;
    posterClassName?: string;
}

const IphoneMock = ({
    playBackId = 'f523dc19-c0d5-42b8-a999-9b332d046756',
    poster = 'creator-hub/aadhan-app-iphone-mock-thumb.png',
    options = {
        controls: false,
        autoPlay: true,
        muted: true,
        loop: true
    },
    className,
    playerClassName,
    posterClassName
}: IphoneMockProps) => {
    return (
        <div className={cn("w-80 h-98 bg-iphone-mock bg-center bg-contain bg-no-repeat mx-auto px-7 py-3 rounded-t-3xl translate-y-1", className)}>
            <div className='rounded-t-3xl'>
                <VideoRender
                    src={playBackId}
                    thumbnail={poster}
                    type='stream'
                    className={cn('w-full h-full rounded-t-3xl', playerClassName)}
                    posterClassName={cn('rounded-t-3xl', posterClassName)}
                    options={options}
                />
            </div>
        </div>
    )
}

export default IphoneMock