import { withLive } from "$live/live.ts";

export const handler = withLive({
  siteId: 476,
  site: "orthocrin",
  domains: ["deco-sites-orthocrin.deno.dev"],
});