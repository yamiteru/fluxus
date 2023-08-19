import { regex } from "@operations/regex/index.dev.js";

/*
 * Checks if the input is a valid emoji.
 * */
export const emoji = regex(
  /^(\p{Extended_Pictographic}|\p{Emoji_Component})+$/u,
);
