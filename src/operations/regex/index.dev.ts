import { error } from "@utils/error/index.dev.js";

/*
 * Checks if the value matches the pattern.
 * */
export const regex = (pattern: string | RegExp) => (value: string) => (
  !new RegExp(pattern).test(value) && error("REGEX", { pattern }), value
);
