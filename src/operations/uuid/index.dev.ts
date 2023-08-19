import { regex } from "@operations/regex/index.dev.js";

/*
 * Checks if the input is a valid UUID.
 * */
export const uuid = regex(
  /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,
);