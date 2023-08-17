/*
 * Divides two numbers
 *
 * */
export const divide =
  <$Left extends number>(left: $Left) =>
  <$Right extends number>(right: $Right) =>
    left / right;
