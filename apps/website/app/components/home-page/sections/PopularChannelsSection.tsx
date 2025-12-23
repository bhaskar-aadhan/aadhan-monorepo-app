import { useRef } from 'react';
import YtChannelsCarousel from '../components/YtChannelsCarousel';
import styles from '../styles/yt-channels.module.css';
import { channelsData } from '../../../../constants';
import useIntersection from '~/hooks/useIntersection'
import { getUniqueKey } from '@repo/utils';
import { Link } from 'react-router';
import ImageRender from '~/shared/ImageRender';

type ChannelCardTypes = {
    profileSrc: string
    channelName: string
    channelSrc: string
    description: string
    instaUrl: string
    ytUrl: string
    xUrl: string
    channelStats: string[]
}

const PopularChannelsSection = () => {
    return (
        <div className='py-16'>
            <div className='stack_layout flex flex-col gap-16'>
                <h3 className='font-main font-semibold text-4xl text-center w-fit mx-auto relative bg_gradient_text_hover'>Popular Channels</h3>
                {/* <h3 className='font-main font-semibold text-4xl text-center w-fit mx-auto relative underline_animate_hover bg_gradient_text_hover'>Popular Channels</h3> */}
                <div>
                    <YtChannelsCarousel containerStyles='gap-10 p-1 bg-white'>
                        {channelsData?.map((r: ChannelCardTypes, i: number) => (
                            <div key={r?.channelName} className={`${styles?.embla__slide} flex flex-col gap-3 p-1 shadow-xl bg-black`}>
                                <ChannelCard
                                    profileSrc={r?.profileSrc}
                                    channelName={r?.channelName}
                                    channelSrc={r?.channelSrc}
                                    description={r?.description}
                                    instaUrl={r?.instaUrl}
                                    ytUrl={r?.ytUrl}
                                    xUrl={r?.xUrl}
                                    channelStats={r?.channelStats}
                                />
                            </div>
                        ))}
                    </YtChannelsCarousel>
                </div>
            </div>
        </div>
    )
}

const ChannelCard = ({
    profileSrc,
    channelName,
    channelSrc,
    description,
    instaUrl,
    ytUrl,
    xUrl,
    channelStats,
}: ChannelCardTypes) => {
    const iframeRef = useRef<HTMLIFrameElement>(null);
    const { isInView } = useIntersection(iframeRef as React.RefObject<HTMLIFrameElement>);
    return (
        <div className='bg-black text-white text-xs pb-4 flex flex-col h-full'>
            <div className=''>
                <iframe
                    ref={iframeRef}
                    src={isInView ? (channelSrc + '&autoplay=1&mute=1&controls=0') : ""}
                    title={`YouTube video player ${channelName}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className='w-full min-h-[216px] mx-auto'
                    loading='lazy'
                >
                </iframe>
            </div>
            <div className='px-8 h-full flex flex-col gap-5'>
                <div className='flex items-center gap-2'>
                    <div className='-translate-y-4 rounded-full'>
                        <ImageRender
                            width={60}
                            src={profileSrc}
                            alt="channel"
                            className='rounded-full'
                        />
                    </div>
                    <h3 className='text-sm font-medium -translate-y-3'>{channelName}</h3>
                </div>
                <div className='leading-5'>
                    {description}
                </div>
                <hr className='bg-red border-red w-24 h-1 mt-auto' />
                <ul className='list-disc font-medium space-y-2 px-3'>
                    {channelStats?.map((stat: string) => {
                        const key = getUniqueKey();
                        return <li key={key}>{stat}</li>
                    })}
                </ul>
                <div className='flex items-center gap-3'>
                    {instaUrl ?
                        <Link target='_blank' to={instaUrl}>
                            <ImageRender
                                width={40}
                                src='insta-outline-logo.svg'
                                alt="insta"
                            />
                        </Link> : null
                    }
                    {ytUrl ?
                        <Link target='_blank' to={ytUrl}>
                            <ImageRender
                                width={25}
                                src='yt-outline-logo.svg'
                                alt="youtube"
                            />
                        </Link> : null
                    }
                    {xUrl ?
                        <Link target='_blank' to={xUrl}>
                            <ImageRender
                                width={18}
                                src='x-outline-logo.svg'
                                alt="twiter|X"
                            />
                        </Link> : null
                    }


                </div>
            </div>
        </div>
    )
}

export default PopularChannelsSection