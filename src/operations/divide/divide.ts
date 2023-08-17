import { Operation } from "../../types.js";

/*
 * Divides two numbers
 *
 * */
export const divide =
  <$Left extends number>(left: $Left): Operation<number> =>
  <$Right extends number>(right: $Right) =>
    left / right;
