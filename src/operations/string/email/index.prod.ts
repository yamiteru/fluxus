import { regex } from "@operations/string/regex/index.prod.js";

export const email = regex(
  /^([A-Z0-9_+-]+\.?)*[A-Z0-9_+-]@([A-Z0-9][A-Z0-9-]*\.)+[A-Z]{2,}$/i,
);
