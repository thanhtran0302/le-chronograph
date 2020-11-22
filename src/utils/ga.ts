import { GA_TRACKING_ID } from '../constants/common';

export const pageview = (url: URL) => {
  if (process.env.NEXT_PUBLIC_ENV === 'production') {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url
    });
  }
};

type GTagEvent = {
  action: string;
  category: string;
  label: string;
  value: number;
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }: GTagEvent) => {
  if (process.env.NEXT_PUBLIC_ENV === 'production') {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value
    });
  }
};
