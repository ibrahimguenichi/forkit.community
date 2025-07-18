import { defineConfig, envField } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";

import vercel from "@astrojs/vercel";
import { getSiteUrl } from "./src/lib/getSiteURL";

// https://astro.build/config
export default defineConfig({
  site: getSiteUrl(),

  i18n: {
    locales: ["en", "fr"],
    defaultLocale: "en",
  },

  trailingSlash: "never",

  experimental: {
    contentIntellisense: true,
  },

  env: {
    schema: {
      ENV_NAME: envField.string({
        context: "server",
        access: "public",
        optional: true,
      }),
    },
  },

  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
    mdx(),
    sitemap({
      filter: (page) =>
        !page.endsWith("/attendee") && !page.endsWith("/events/locations"),
    }),
    robotsTxt(),
  ],

  adapter: vercel({ isr: true }),
});
