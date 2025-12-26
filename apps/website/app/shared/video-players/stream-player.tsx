import HlsVideoPlayer from './hls-palyer'
import type { VideoPlayerOptionsTypes } from '@repo/types';
import { getAssetUrl } from '@repo/utils';
// import { getStreamUrl } from '~/services';

type StreamPlayerTypes = {
  playBackId: string;
  mp4Src?: string;
  className?: string;
  wrapperClassName?: string;
  posterClassName?: string;
  id?: string;
  poster?: string;
  options?: VideoPlayerOptionsTypes
}

const StreamPlayer = ({
  playBackId,
  className = 'w-full h-full aspect-video',
  wrapperClassName,
  posterClassName = '',
  poster = '/aadhan-favicon.svg',
  id = '',
  options = {
    controls: true,
    autoPlay: true,
    muted: true,
    loop: true,
  },
  mp4Src = '',
}: StreamPlayerTypes) => {
  // const streamUrl: string = getStreamUrl(playBackId);
  const streamUrl: string = getAssetUrl(playBackId, import.meta.env.VITE_FASTPIX_STREAM_BASE_URL, 'videos', 'stream');
  return (
    <HlsVideoPlayer
      src={streamUrl}
      poster={poster}
      className={className}
      posterClassName={posterClassName}
      controls={options?.controls}
      autoPlay={options?.autoPlay}
      muted={options?.muted}
      loop={options?.loop}
      wrapperClassName={wrapperClassName}
    />
  )
}

export default StreamPlayer