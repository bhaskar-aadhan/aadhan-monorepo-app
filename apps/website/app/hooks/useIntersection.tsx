import { useState, useEffect } from 'react';

const useIntersection = <T extends HTMLElement = HTMLElement>(
    ref: React.RefObject<T>,
    threshold: number = 0.5
) => {
    const [isInView, setIsInView] = useState<boolean>(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsInView(entry.isIntersecting);
            },
            { threshold }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [ref, threshold]);

    return { isInView, setIsInView };
}

export default useIntersection