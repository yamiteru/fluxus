import { error } from "@utils/error/index.prod.js";

export const one_of =
  <$Options extends readonly any[]>(options: $Options) =>
  (value: $Options[number]) => (!options.includes(value) && error(), value);
