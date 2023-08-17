import { Operation } from "../../../types.js";

/*
 * Multiplies two numbers.
 * */
export const multiply =
  <$Right extends number>(right: $Right): Operation<number> =>
  <$Left extends number>(left: $Left) =>
    left * right;
