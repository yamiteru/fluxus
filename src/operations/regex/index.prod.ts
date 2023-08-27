import { error } from "@utils/error/index.prod.js";

export const regex = (pattern: string | RegExp) => (value: string) => (
  !new RegExp(pattern).test(value) && error(), value
);
