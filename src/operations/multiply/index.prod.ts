import { Operation } from "@types";

/*
 * Multiplies two numbers.
 * */
export const multiply =
  <$Right extends number>(right: $Right): Operation<number> =>
  <$Left extends number>(left: $Left) =>
    left * right;
