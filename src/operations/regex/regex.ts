import { error } from "../../utils/index.js";

export const regex = (pattern: string | RegExp) => (value: string) => (
  !new RegExp(pattern).test(value) && error("REGEX", { pattern }), value
);
