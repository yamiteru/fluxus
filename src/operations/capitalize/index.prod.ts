export const capitalize = <$Value extends string>(value: $Value) =>
  `${value[0].toUpperCase()}${value.slice(1)}` as Capitalize<$Value>;
