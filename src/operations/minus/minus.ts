/*
 * Subtracts two numbers.
 * */
export const minus =
  <$Left extends number>(left: $Left) =>
  <$Right extends number>(right: $Right) =>
    left - right;
