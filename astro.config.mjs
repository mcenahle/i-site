// @ts-check
import { defineConfig } from "astro/config";
import icon from "astro-icon";
import pagefind from "astro-pagefind";

// https://astro.build/config
export default defineConfig({
  site: "https://hi.mcenahle.page",
  trailingSlash: "always",
  prefetch: true,
  devToolbar: {
    enabled: false,
  },
  integrations: [icon(), pagefind()],
  redirects: {
    "/game/": "https://game.mcenahle.dev/",
    "/site-affairs-documents/": "https://mcenahle.dev/site-affairs-documents/",
  },
});
