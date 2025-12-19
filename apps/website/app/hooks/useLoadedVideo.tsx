import React from 'react'

const useLoadedVideo = (
    totalVideos: number
) => {
    const [loadedVideos, setLoadedVideos] = React.useState<number>(0);
    const [isLoading, setIsLoading] = React.useState<boolean>(true);

    const handleVideoLoad = () => {
        setLoadedVideos((prev) => prev + 1);
    }

    React.useEffect(() => {
        if (loadedVideos === totalVideos - 1) {
            setIsLoading(false);
        }
    }, [loadedVideos]);
    return { handleVideoLoad, isLoading };
}

export default useLoadedVideo