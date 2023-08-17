import { regex } from "../regex/regex.js";

/*
 * Checks if the input is a valid email.
 * */
export const email = regex(
  /^([A-Z0-9_+-]+\.?)*[A-Z0-9_+-]@([A-Z0-9][A-Z0-9-]*\.)+[A-Z]{2,}$/i,
);
