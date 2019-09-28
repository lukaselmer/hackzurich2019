import Analytics from 'analytics';
import { history } from './router';

// import googleAnalyticsPlugin from 'analytics-plugin-ga';
// Initialize analytics and plugins
// Documentation: https://getanalytics.io
export const analytics = Analytics({
  debug: process.env.NODE_ENV !== 'production',
  plugins: [
    // 1) Create a Google Analytics account: https://bit.ly/2G1ZWNN
    // 2) Setup a property and add your trackingId below
    // 3) Uncomment the following code to start tracking
    /*
      googleAnalyticsPlugin({
        trackingId: ''
      })
      */
  ]
} as any);

// Track initial pageview
if (typeof window !== 'undefined') {
  analytics.page();
}

// Track pageview on route change
history.listen(() => {
  analytics.page();
});
