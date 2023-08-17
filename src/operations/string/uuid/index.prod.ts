import { regex } from "../regex/index.prod.js";

/*
 * Checks if the input is a valid UUID.
 * */
export const uuid = regex(
  /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,
);
