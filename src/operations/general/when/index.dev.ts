import { error } from "@utils/error/index.dev.js";
import { Operation } from "@types";

export const when = <$Input, $TrueOutput, $FalseOutput = never>(
  condition: Operation<$Input, any>,
  trueCase: Operation<$Input, $TrueOutput>,
  falseCase?: Operation<$Input, $FalseOutput>,
): Operation<
  $Input,
  $TrueOutput | $FalseOutput,
  {
    condition: Operation<$Input, any>;
    trueCase: Operation<$Input, $TrueOutput>;
    falseCase: Operation<$Input, $FalseOutput>;
  }
> => {
  const parse = (value: $Input) => {
    try {
      condition(value);
      return trueCase(value);
    } catch (e) {
      if (falseCase) {
        return falseCase(value);
      } else {
        error(
          "WHEN",
          `Condition [${
            condition.name
          }] failed with value [${value}] of type [${typeof value}]`,
          {
            trueCase,
            falseCase,
          },
          e,
        );
      }
    }
  };

  parse.condition = condition;
  parse.trueCase = trueCase;
  parse.falseCase = falseCase;

  return parse as never;
};
