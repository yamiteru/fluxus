import { Operation } from "../../types.js";
import { error } from "../../utils/index.js";

/*
 * Based on the condition, returns the output of either the true case or the false case.
 *
 * By default, if the condition throws an error, it will throw a when error.
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
        error("WHEN", { trueCase, falseCase }, e);
      }
    }
  };

  parse.condition = condition;
  parse.trueCase = trueCase;
  parse.falseCase = falseCase;

  return parse as never;
};
