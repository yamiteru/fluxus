import { regex } from "../regex/regex.js";

/*
 * Checks if the input is a valid emoji.
 * */
export const emoji = regex(
  /^(\p{Extended_Pictographic}|\p{Emoji_Component})+$/u,
);
