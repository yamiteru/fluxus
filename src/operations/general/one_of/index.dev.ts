import { error } from "../../../index.dev.js";

/*
 * Checks if the value is one of the literal values.
 * */
export const one_of =
  <$Options extends readonly any[]>(options: $Options) =>
  (value: $Options[number]) => (
    !options.includes(value) && error("ONE_OF"), value
  );
