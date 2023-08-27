import { error } from "@utils/error/index.dev.js";

export const one_of =
  <$Options extends readonly any[]>(options: $Options) =>
  (value: $Options[number]) => (
    !options.includes(value) &&
      error(
        `Value [${value}] should strictly equal to one of [${options}]`,
        "ONE_OF",
        { options },
      ),
    value
  );
