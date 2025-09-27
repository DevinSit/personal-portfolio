import {useEffect, useRef, useState} from "preact/hooks";
import classNames from "classnames";

const intersectionObserverAvailable = () => (
    typeof window !== undefined &&
    "IntersectionObserver" in window &&
    "isIntersecting" in window.IntersectionObserverEntry.prototype
);

const LazyImage = ({src, ...otherProps}) => {
    const [inView, setInView] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const whenInView = (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting){
                    const image = entry.target;

                    setInView(true);
                    observer.unobserve(image);
                }
            });
        };

        if (intersectionObserverAvailable()) {
            const observer = new IntersectionObserver(whenInView);
            observer.observe(ref.current);
        } else {
            // Don't bother with polyfilling IntersectionObserver; just load the image non-lazily.
            setInView(true);
        }
    }, [ref, setInView]);

    return (
        <img
            src={inView ? src : undefined}
            data-src={inView ? undefined : src}
            ref={ref}
            {...otherProps}
        />
    );
};

export default LazyImage;
