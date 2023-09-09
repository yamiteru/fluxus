import { regex } from "@operations/string/regex/index.prod.js";

export const emoji = regex(
  /^(\p{Extended_Pictographic}|\p{Emoji_Component})+$/u,
);
