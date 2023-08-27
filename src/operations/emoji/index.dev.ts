import { regex } from "@operations/regex/index.dev.js";

export const emoji = regex(
  /^(\p{Extended_Pictographic}|\p{Emoji_Component})+$/u,
);
