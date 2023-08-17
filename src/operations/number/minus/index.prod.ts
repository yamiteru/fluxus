import { Operation } from "../../../types.js";

/*
 * Subtracts two numbers.
 * */
export const minus =
  <$Right extends number>(right: $Right): Operation<number> =>
  <$Left extends number>(left: $Left) =>
    left - right;
