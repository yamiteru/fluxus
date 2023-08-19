import { Operation } from "@types";

/*
 * Divides two numbers
 *
 * */
export const divide =
  <$Right extends number>(right: $Right): Operation<number> =>
  <$Left extends number>(left: $Left) =>
    left / right;
