export const split =
  <$Separator extends string>(separator: $Separator) =>
  <$Input extends string>(input: $Input) =>
    input.split(separator);
