export const tap =
  <$Value>(callback: (value: $Value) => any) =>
  (value: $Value) => (callback(value), value);
