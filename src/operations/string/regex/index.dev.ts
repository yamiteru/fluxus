import { error } from "@utils/error/index.dev.js";

export const regex = (pattern: string | RegExp) => (value: string) => (
  !new RegExp(pattern).test(value) &&
    error("REGEX", `Value [${value}] does not match pattern [${pattern}]`, {
      pattern,
    }),
  value
);
