/*
 * Multiplies two numbers.
 * */
export const multiply =
  <$Left extends number>(left: $Left) =>
  <$Right extends number>(right: $Right) =>
    left * right;
