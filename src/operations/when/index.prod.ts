import { error } from "@utils/error/index.prod.js";
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
        error();
      }
    }
  };

  parse.condition = condition;
  parse.trueCase = trueCase;
  parse.falseCase = falseCase;

  return parse as never;
};
