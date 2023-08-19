import { Operation } from "@types";

/*
 * Adds two numbers.
 * */
export const plus =
  <$Right extends number>(right: $Right): Operation<number> =>
  <$Left extends number>(left: $Left) =>
    left + right;
