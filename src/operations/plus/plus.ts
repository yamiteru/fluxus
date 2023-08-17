/*
 * Adds two numbers.
 * */
import { Operation } from "../../types.js";

export const plus =
  <$Left extends number>(left: $Left): Operation<number> =>
  <$Right extends number>(right: $Right) =>
    left + right;
