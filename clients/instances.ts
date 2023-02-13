import { createClient as createVTEXClient } from "$live/std/commerce/vtex/client.ts";

export const defaultVTEXSettings = {
  account: "codeby",
  locale: "pt-BR",
  salesChannel: "1",
};

export const vtex = createVTEXClient({
  platform: "vtex",
});
