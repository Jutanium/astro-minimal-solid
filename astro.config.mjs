import { defineConfig } from "astro/config";
import netlify from "@astrojs/netlify/functions";

import solid from "@astrojs/solid-js";

// https://astro.build/config
export default defineConfig({
  adapter: netlify(),
  integrations: [solid()]
});