import React, { useEffect, useRef } from 'react';
import Hls from 'hls.js';
import { cn } from '@repo/ui';

interface HlsVideoPlayerProps {
    src: string;
    poster?: string;
    className?: string;
    wrapperClassName?: string;
    posterClassName?: string;
    controls?: boolean;
    autoPlay?: boolean;
    muted?: boolean;
    loop?: boolean;
}

export default function HlsVideoPlayer({ src, poster, className, wrapperClassName, posterClassName, controls = false, autoPlay = false, muted = true, loop = true }: Readonly<HlsVideoPlayerProps>) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const hlsRef = useRef<Hls | null>(null);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const initializeHls = () => {
            if (hlsRef.current) {
                hlsRef.current.destroy();
            }

            const hls = new Hls({
                autoStartLoad: false, // Wait for user interaction
                capLevelToPlayerSize: true, // Auto-select resolution based on player size
                maxBufferLength: 30, // Smoother seeking
                backBufferLength: 15, // Reduce memory usage
                maxMaxBufferLength: 60,
                enableWorker: true, // Offload processing to web worker
                lowLatencyMode: true,
                maxLoadingDelay: 2,
            });

            hlsRef.current = hls;

            hls.attachMedia(video);

            hls.on(Hls.Events.MEDIA_ATTACHED, () => {
                hls.loadSource(src);

                hls.on(Hls.Events.MANIFEST_PARSED, (_, data) => {
                    console.log('Available qualities:', data.levels);
                    // Auto-select initial quality based on network
                    hls.currentLevel = data.levels.length - 1; // Start with lowest quality
                    hls.startLoad(-1); // Load first fragment
                });

                hls.on(Hls.Events.ERROR, (_, data) => {
                    if (data.fatal) {
                        switch (data.type) {
                            case Hls.ErrorTypes.NETWORK_ERROR:
                                hls.startLoad();
                                break;
                            case Hls.ErrorTypes.MEDIA_ERROR:
                                hls.recoverMediaError();
                                break;
                            default:
                                destroyHls();
                                break;
                        }
                    }
                });
            });
        };

        const destroyHls = () => {
            if (hlsRef.current) {
                hlsRef.current.destroy();
                hlsRef.current = null;
            }
        };

        if (Hls.isSupported()) {
            initializeHls();
        } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
            // Native HLS support (Safari)
            video.src = src;
        }

        return () => {
            destroyHls();
        };
    }, [src]);

    const handlePlay = () => {
        if (hlsRef.current) {
            hlsRef.current.startLoad();
            videoRef.current?.play().catch((error) => {
                console.error('Autoplay failed:', error);
            });
        }
    };

    if (!Hls.isSupported()) {
        console.warn("Your browser doesn't support HLS video playback")
    }

    console.log('poster:', poster);

    return (
        <div className={cn("relative w-full h-full", wrapperClassName)}>
            <div className={cn('absolute inset-0 z-[-1]', posterClassName)}>
                <img src={poster} alt="logo" className={cn('w-full h-full object-cover', posterClassName)} />
            </div>
            <video
                ref={videoRef}
                muted={muted}
                autoPlay={autoPlay}
                loop={loop}
                controls={controls}
                playsInline
                poster={poster}
                preload="auto"
                onPlay={handlePlay}
                className={cn(`object-cover w-full h-full`, className)}
            // style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
            // className={cn(`object-cover w-full h-full bg-transparent bg-[url('${poster}')] bg-center bg-no-repeat bg-fixed`, className)}
            />
        </div>
    );
}