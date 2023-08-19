import { error } from "@utils/error/index.dev.js";
import { Operation } from "@types";

/*
 * Checks if the value is equal to a desired value.
 * */
export const literal =
  <$Type>(desiredValue: $Type): Operation<$Type> =>
  (currentValue) => (
    currentValue !== desiredValue &&
      error(
        `Value [${currentValue}] should be equal to [${desiredValue}]`,
        "LITERAL",
        { desiredValue, currentValue },
      ),
    currentValue
  );
