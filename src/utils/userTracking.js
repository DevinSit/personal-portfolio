import ReactGA from "react-ga";
import {isProduction, GOOGLE_ANALYTICS_TRACKING_CODE} from "src/config";

export const initGoogleAnalytics = () => {
    if (isProduction()) {
        ReactGA.initialize(GOOGLE_ANALYTICS_TRACKING_CODE);
        ReactGA.pageview(window.location.pathname + window.location.hash);
    }
}
