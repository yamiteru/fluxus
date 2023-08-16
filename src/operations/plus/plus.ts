export const plus =
  <$Left extends number>(left: $Left) =>
  <$Right extends number>(right: $Right) =>
    left + right;
