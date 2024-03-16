import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import icon from "astro-icon";
import { defineConfig } from "astro/config";
import db from "@astrojs/db";


// https://astro.build/config
export default defineConfig({
  site: "https://visitmyl.ink",
  integrations: [mdx({
    syntaxHighlight: "shiki",
    shikiConfig: {
      theme: "material-theme-darker"
    },
    gfm: true
  }), icon(), sitemap(), react(), tailwind({
    applyBaseStyles: false
  }), db()],
  output: "server",
  adapter: vercel()
  // adapter: cloudflare({mode : "directory"})
});