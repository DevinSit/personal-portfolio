export const debounceWithLeading = (func, wait) => {
    /* A special case of debounce that fires immediately _and_
     * after the series of events has exceeded the wait time.
     *
     * This is useful for things like triggering a callback when a scroll
     * event starts _and_ when it ends. */
    let timeout;

    return () => {
        const context = this, args = arguments;

        const later = () => {
            timeout = null;
            func.apply(context, args);
        };

        const callNow = !timeout;

        clearTimeout(timeout);
        timeout = setTimeout(later, wait);

        if (callNow) func.apply(context, args);
    };
};

export const scrollTo = (id) => {
    // Guard for server side rendering.
    if (typeof window === "undefined") {
        return;
    }

    const element = document.getElementById(id);
    const headerOffset = 80;  // The $header-height variable in style/_dimens.scss
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementPosition = element.getBoundingClientRect().top - bodyRect;
    const offsetPosition = elementPosition - headerOffset;

    window.scrollTo({top: offsetPosition, behavior: "smooth"});

    // Update URL hash.
    // Don't want to update window.location.hash by itself because that doesn't do smooth scroll.
    if (history.pushState) {
        history.pushState(null, null, `#${id}`);
    } else {
        window.location.hash = `#${id}`;
    }
};
