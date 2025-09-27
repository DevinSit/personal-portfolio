import {type ImgHTMLAttributes, useEffect, useRef, useState} from "react";

const intersectionObserverAvailable = () =>
    typeof window !== "undefined" &&
    "IntersectionObserver" in window &&
    "isIntersecting" in window.IntersectionObserverEntry.prototype;

interface LazyImageProps extends ImgHTMLAttributes<HTMLImageElement> {
    src: string;
}

const LazyImage = ({src, ...otherProps}: LazyImageProps) => {
    const [inView, setInView] = useState(false);
    const ref = useRef<HTMLImageElement>(null);

    useEffect(() => {
        const whenInView = (
            entries: IntersectionObserverEntry[],
            observer: IntersectionObserver
        ) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const image = entry.target;

                    setInView(true);
                    observer.unobserve(image);
                }
            });
        };

        if (intersectionObserverAvailable()) {
            const observer = new IntersectionObserver(whenInView);
            if (ref.current) {
                observer.observe(ref.current);
            }
        } else {
            // Don't bother with polyfilling IntersectionObserver; just load the image non-lazily.
            setInView(true);
        }
    }, []);

    return <img ref={ref} src={inView ? src : ""} {...otherProps} />;
};

export default LazyImage;
