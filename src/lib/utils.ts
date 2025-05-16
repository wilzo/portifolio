import { DEFAULT_CONFIGURATION } from "./constants";
import type { CollectionEntry } from "astro:content";

export const formatDate = (date: Date) => {
  const formatter = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "UTC", // Default to UTC to prevent timezone issues
  });

  // Ensure we're parsing the date correctly
  return formatter.format(new Date(date));
};

export const generateAbsoluteUrl = (path: string) =>
  DEFAULT_CONFIGURATION.baseUrl.concat(path);

export const isDevelopment = () => import.meta.env.MODE === "development";

export const includeDraft = (draft: boolean) => {
  if (isDevelopment()) return true;
  return draft !== true;
};

export const sortJobsByDate = (jobs: CollectionEntry<"jobs">[]) => {
  return jobs.sort((a, b) => {
    // Handle 'Now' case
    const aTo = a.data.to === "Now" ? new Date().getFullYear() : a.data.to;
    const bTo = b.data.to === "Now" ? new Date().getFullYear() : b.data.to;

    // Sort by end date first, then by start date
    if (bTo !== aTo) {
      return bTo - aTo;
    }
    return b.data.from - a.data.from;
  });
};
