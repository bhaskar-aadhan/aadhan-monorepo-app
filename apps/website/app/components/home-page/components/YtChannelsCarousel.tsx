import React from 'react';
import type { EmblaOptionsType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import styles from '../styles/yt-channels.module.css';
import { cn } from '@repo/ui';
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures'
import Autoplay from 'embla-carousel-autoplay';

type PropType = {
    options?: EmblaOptionsType
    children: React.ReactNode
    containerStyles: string
    autoPlay?: boolean
}

type HomeCarouselTypes = {
    children: React.ReactNode
    OPTIONS?: EmblaOptionsType
    containerStyles: string
    loopfree?: boolean
    SLIDE_COUNT?: number
    SLIDES?: any[]
    autoPlay?: boolean
}

const YtChannelsCarousel = ({
    children,
    OPTIONS = { align: 'start', loop: false, slidesToScroll: 'auto' },
    containerStyles = '1rem',
    loopfree = false,
    SLIDE_COUNT = 5,
    SLIDES = Array.from(Array(SLIDE_COUNT).keys()),
    autoPlay = false
}: HomeCarouselTypes) => {
    return (
        <Carousel autoPlay={autoPlay} containerStyles={containerStyles} options={OPTIONS}>
            {loopfree ?
                <>
                    {SLIDES?.map((index) => (
                        <div className={`${styles?.embla__slide}`} key={index}>
                            <div className='min-w-72 min-h-48'>
                                {children}
                            </div>
                        </div>
                    ))}
                </>
                :
                <>
                    {children}
                </>
            }
        </Carousel>
    )
}

const Carousel: React.FC<PropType> = (props) => {
    const { options, children, containerStyles, autoPlay = false } = props
    const [emblaRef, emblaApi] = useEmblaCarousel(options, [WheelGesturesPlugin(), Autoplay({ playOnInit: autoPlay, delay: 3000 })])

    return (
        <section className={`${styles?.embla}`}>
            <div className={`${styles?.embla__viewport} `} ref={emblaRef}>
                <div className={cn(`${styles?.embla__container} `, containerStyles)}>
                    {children}
                </div>
            </div>
        </section>
    )
}

export default YtChannelsCarousel
