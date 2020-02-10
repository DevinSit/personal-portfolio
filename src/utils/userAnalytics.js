import Analytics from "analytics";
import googleAnalytics from "@analytics/google-analytics";
import {isProduction, GOOGLE_ANALYTICS_TRACKING_CODE} from "src/config";

export const initAnalytics = () => {
    if (isProduction()) {
        console.log("HERE");

        const analytics = Analytics({
            app: "devin-sit-portfolio",
            version: 1,
            plugins: [googleAnalytics({trackingId: GOOGLE_ANALYTICS_TRACKING_CODE})]
        });

        analytics.page({url: window.location.pathname + window.location.hash});
    }
}
