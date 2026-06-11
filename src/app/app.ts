import { Component } from "@angular/core";

interface Project {
  name: string;
  tagline: string;
  desc: string;
  tech: string[];
  icon: string;
  links: { label: string; url: string }[];
  type: "app" | "web" | "contribution";
}

@Component({
  selector: "app-root",
  templateUrl: "./app.html",
  styleUrl: "./app.css",
})
export class App {
  isDark = localStorage.getItem("theme") === "dark";

  ngOnInit() {
    document.documentElement.setAttribute(
      "data-theme",
      this.isDark ? "dark" : "light",
    );
  }

  toggleTheme() {
    this.isDark = !this.isDark;
    document.documentElement.setAttribute(
      "data-theme",
      this.isDark ? "dark" : "light",
    );
    localStorage.setItem("theme", this.isDark ? "dark" : "light");
  }

  projects: Project[] = [
    {
      name: "OpenAir",
      tagline: "Free, open-source, cross-platform podcast player.",
      desc: "A feature-rich podcast player built with Flutter. Browse by category, popularity, or trending. Stream or download episodes, create playlists, manage subscriptions, import/export OPML, and sync across devices via Supabase.",
      tech: ["Flutter", "Dart", "Riverpod", "Supabase", "PodcastIndex", "Hive"],
      icon: "podcasts",
      type: "app",
      links: [
        { label: "Source", url: "https://github.com/LiquidHive/OpenAir" },
        {
          label: "Website",
          url: "https://github.com/LiquidHive/openair-website",
        },
      ],
    },
    {
      name: "Holy Scriptures",
      tagline: "King James Bible with Apocrypha — fully offline.",
      desc: "A complete KJV Bible study app for Android, Linux, and Windows. Features include continuous scroll, red-letter text, bookmarks with color coding, personal notes, daily verse reminders, full-text search, AI study assistant, curated scripture indexes, and text-to-speech.",
      tech: ["Flutter", "Dart", "Riverpod", "SQLite", "Gemini AI", "Hive"],
      icon: "menu_book",
      type: "app",
      links: [
        {
          label: "Source",
          url: "https://github.com/LiquidHive/holy_scriptures",
        },
        {
          label: "Website",
          url: "https://github.com/LiquidHive/holy-scriptures-website",
        },
      ],
    },
    {
      name: "AwnCalc",
      tagline: "Pricing calculator for awning & shade professionals.",
      desc: "A Flutter mobile app for installers and fabricators to quickly price jobs. Comes with 15 pre-loaded components (slats, flashings, tubes, hardware) with smart formulas, custom items, configurable tax/interest, multi-currency, and imperial/metric units. All data stored locally.",
      tech: ["Flutter", "Dart", "Hive", "Google Ads", "Riverpod"],
      icon: "calculate",
      type: "app",
      links: [
        {
          label: "Source",
          url: "https://github.com/LiquidHive/awning-calculator",
        },
        {
          label: "Website",
          url: "https://github.com/LiquidHive/awn-calc-website",
        },
      ],
    },
    {
      name: "Audilator",
      tagline: "Voice-powered calculator with unit conversions.",
      desc: "A cross-platform mobile calculator app that lets you perform arithmetic and unit conversions hands-free using voice commands, with text-to-speech readback. Supports 15+ conversion categories including length, area, mass, volume, temperature, speed, and more.",
      tech: ["Flutter", "Dart", "Riverpod", "Google Ads", "TTS"],
      icon: "record_voice_over",
      type: "app",
      links: [
        { label: "Source", url: "https://github.com/LiquidHive/audilator" },
      ],
    },
    {
      name: "Nutritrack",
      tagline: "Nutrition tracking app (in development).",
      desc: "A React Native (Expo) mobile app for tracking nutrition and dietary intake. Built with TypeScript, Expo Router for file-based navigation, and featuring light/dark theme support with responsive layouts.",
      tech: ["React Native", "Expo", "TypeScript", "Expo Router"],
      icon: "monitoring",
      type: "app",
      links: [
        { label: "Source", url: "https://github.com/LiquidHive/nutritrack" },
      ],
    },
    {
      name: "openair-website",
      tagline: "Marketing & documentation site for OpenAir.",
      desc: "Official website for the OpenAir podcast app built with Angular 21. Features pages for home, about, download, blog, contribute, documentation, and privacy policy. Deployed to GitHub Pages.",
      tech: ["Angular", "TypeScript", "RxJS", "SCSS", "GitHub Pages"],
      icon: "language",
      type: "web",
      links: [
        {
          label: "Source",
          url: "https://github.com/LiquidHive/openair-website",
        },
      ],
    },
    {
      name: "holy-scriptures-website",
      tagline: "Landing page for the Holy Scriptures app.",
      desc: "A single-page Angular 21 marketing site promoting the Holy Scriptures Bible app. Features hero section, feature grid, download cards, privacy highlights, and dark/light mode.",
      tech: ["Angular", "TypeScript", "SCSS", "GitHub Pages"],
      icon: "language",
      type: "web",
      links: [
        {
          label: "Source",
          url: "https://github.com/LiquidHive/holy-scriptures-website",
        },
      ],
    },
    {
      name: "awn-calc-website",
      tagline: "Marketing site for the AwnCalc pricing app.",
      desc: "Angular 21 landing page showcasing AwnCalc features for awning and shade professionals. Includes hero stats, feature grid, about section, and theme toggle. Deployed via GitHub Pages.",
      tech: ["Angular", "TypeScript", "CSS", "GitHub Pages"],
      icon: "language",
      type: "web",
      links: [
        {
          label: "Source",
          url: "https://github.com/LiquidHive/awn-calc-website",
        },
      ],
    },
    {
      name: "AntennaPod",
      tagline: "Open-source podcast manager for Android.",
      desc: "A contributed open-source project — the leading ad-free, privacy-respecting podcast manager for Android. Supports RSS subscriptions, offline downloads, variable speed playback, chapter navigation, and transcripts.",
      tech: ["Java", "Kotlin", "Android", "Gradle"],
      icon: "headphones",
      type: "contribution",
      links: [
        { label: "Source", url: "https://github.com/AntennaPod/AntennaPod" },
      ],
    },
    {
      name: "PodcastIndex Web UI",
      tagline: "Official web interface for PodcastIndex.org.",
      desc: "A contributed open-source project — the React-based web frontend for PodcastIndex.org. Features podcast search, audio player, app directory, developer docs, and API key management. Served via an Express/Node.js backend.",
      tech: ["React", "TypeScript", "Express", "Redux", "Webpack"],
      icon: "rss_feed",
      type: "contribution",
      links: [
        { label: "Source", url: "https://github.com/Podcastindex-org/web-ui" },
      ],
    },
  ];

  get apps(): Project[] {
    return this.projects.filter((p) => p.type === "app");
  }

  get websites(): Project[] {
    return this.projects.filter((p) => p.type === "web");
  }

  get contributions(): Project[] {
    return this.projects.filter((p) => p.type === "contribution");
  }
}
