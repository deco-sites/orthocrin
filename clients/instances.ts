import { createClient as createVTEXClient } from "$live/std/commerce/vtex/client.ts";

export const vtex = createVTEXClient({
  platform: "vtex",
  // account: "footerlucaslima--codeby",
  // defaultLocale: "pt-BR",
  // defaultSalesChannel: "1",
});
