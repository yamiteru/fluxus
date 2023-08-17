/*
 * Multiplies two numbers.
 * */
import { Operation } from "../../types.js";

/*
 * Multiplies two numbers.
 * */
export const multiply =
  <$Left extends number>(left: $Left): Operation<number> =>
  <$Right extends number>(right: $Right) =>
    left * right;
