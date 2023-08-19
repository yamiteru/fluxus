import { error } from "@utils/error/index.dev.js";
import { Operation } from "@types";

/*
 * Based on the condition, returns the output of either the true case or the false case.
 *
 * By default, if the condition throws an errorProd, it will throw a when errorProd.
 * */
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
          `Condition [${
            condition.name
          }] failed with value [${value}] of type [${typeof value}]`,
          "WHEN",
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
