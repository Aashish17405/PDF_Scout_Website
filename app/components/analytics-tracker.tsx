"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    gtag?: (...args: unknown[]) => void;
    YT?: {
      Player: new (
        elementId: string,
        options: {
          events?: {
            onStateChange?: (event: { data: number }) => void;
          };
        }
      ) => unknown;
      PlayerState: { PLAYING: number };
    };
    onYouTubeIframeAPIReady?: () => void;
  }
}

function track(event: string, params: Record<string, unknown> = {}) {
  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push({ event, ...params });
  if (typeof window.gtag === "function") {
    window.gtag("event", event, params);
  }
}

export function AnalyticsTracker() {
  useEffect(() => {
    const clickHandler = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const tracked = target?.closest<HTMLElement>("[data-analytics-event]");
      if (!tracked) {
        return;
      }
      const eventName = tracked.dataset.analyticsEvent;
      if (!eventName) {
        return;
      }
      track(eventName, {
        label: tracked.dataset.analyticsLabel ?? tracked.textContent?.trim(),
        href: tracked.getAttribute("href") ?? undefined,
      });
    };

    document.addEventListener("click", clickHandler);

    const milestones = [25, 50, 75, 100];
    const sent = new Set<number>();
    const scrollHandler = () => {
      const maxScrollable = document.documentElement.scrollHeight - window.innerHeight;
      if (maxScrollable <= 0) {
        return;
      }
      const progress = Math.round((window.scrollY / maxScrollable) * 100);
      milestones.forEach((milestone) => {
        if (progress >= milestone && !sent.has(milestone)) {
          sent.add(milestone);
          track("scroll_depth", { percent: milestone });
        }
      });
    };

    window.addEventListener("scroll", scrollHandler, { passive: true });
    scrollHandler();

    const iframe = document.getElementById("walkthrough-video") as HTMLIFrameElement | null;
    if (iframe) {
      iframe.src = iframe.src.includes("enablejsapi=1")
        ? iframe.src
        : `${iframe.src}${iframe.src.includes("?") ? "&" : "?"}enablejsapi=1`;

      const initYouTubeTracking = () => {
        if (!window.YT?.Player) {
          return;
        }
        const player = new window.YT.Player("walkthrough-video", {
          events: {
            onStateChange: (stateEvent) => {
              if (stateEvent.data === window.YT?.PlayerState.PLAYING) {
                track("video_play", { video: "pdf-scout-walkthrough" });
              }
            },
          },
        });
        void player;
      };

      if (window.YT?.Player) {
        initYouTubeTracking();
      } else {
        const script = document.createElement("script");
        script.src = "https://www.youtube.com/iframe_api";
        script.async = true;
        document.body.appendChild(script);
        window.onYouTubeIframeAPIReady = initYouTubeTracking;
      }
    }

    return () => {
      document.removeEventListener("click", clickHandler);
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return null;
}
