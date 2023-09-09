import { error } from "@utils/error/index.dev.js";
import { Operation } from "@types";

export const literal =
  <$Type>(desiredValue: $Type): Operation<$Type> =>
  (currentValue) => (
    currentValue !== desiredValue &&
      error(
        "LITERAL",
        `Value [${currentValue}] should be equal to [${desiredValue}]`,
        { desiredValue, currentValue },
      ),
    currentValue
  );
