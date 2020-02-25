export const isProduction = () => {
    if (typeof window !== "undefined") {
        return !window.location.hostname.includes("localhost");
    } else {
        return false;
    }
};

export const GOOGLE_ANALYTICS_TRACKING_CODE = "UA-129597474-2";
