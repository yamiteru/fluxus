/*
 * Splits a string into an array of substrings, using a specified separator string to determine where to make each split.
 * */
export const split =
  <$Separator extends string>(separator: $Separator) =>
  <$Input extends string>(input: $Input) =>
    input.split(separator);
