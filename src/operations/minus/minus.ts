import { Operation } from "../../types.js";

/*
 * Subtracts two numbers.
 * */
export const minus =
  <$Left extends number>(left: $Left): Operation<number> =>
  <$Right extends number>(right: $Right) =>
    left - right;
