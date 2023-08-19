export type Pretty<$Type> = {
  [$Key in keyof $Type]: $Type[$Key];
} & {};

export type FluxusError = [
  message: string,
  reason: string,
  context?: Record<string, any>,
  children?: FluxusError | unknown,
];

export type Operation<
  $Input = any,
  $Output = $Input,
  $Context extends Record<string, any> = {},
> = ((value: $Input) => $Output) & $Context;

export type Input<$Operation extends Operation> = $Operation extends Operation<
  infer $Input,
  any
>
  ? $Input
  : never;

export type Output<$Operation extends Operation> = $Operation extends Operation<
  any,
  infer $Output
>
  ? $Output
  : never;

export type ObjectSchema = Record<string, Operation>;

export type ObjectInput<$Schema extends ObjectSchema> = Pretty<{
  [$Key in keyof $Schema]: Input<$Schema[$Key]>;
}>;

export type ObjectOutput<$Schema extends ObjectSchema> = Pretty<{
  [$Key in keyof $Schema]: Output<$Schema[$Key]>;
}>;

export type InferTupleOutput<$Tuple extends Operation[]> = {
  [$Key in keyof $Tuple]: Output<$Tuple[$Key]>;
};

export type InferTupleInput<$Tuple extends Operation[]> = {
  [$Key in keyof $Tuple]: Input<$Tuple[$Key]>;
};

export type Instance<$Type> = (new () => $Type) | $Type;

export type ObjectKey = string | number | symbol;

export type TypeOfOptions =
  | "string"
  | "number"
  | "bigint"
  | "boolean"
  | "symbol"
  | "undefined"
  | "object"
  | "function";

export type TypeOfMap = {
  string: string;
  number: number;
  bigint: bigint;
  boolean: boolean;
  symbol: symbol;
  undefined: undefined;
  object: Record<ObjectKey, any>;
  function: (...props: any[]) => any;
};

export type TypeOfType<$TypeOfOptions extends TypeOfOptions> =
  TypeOfMap[$TypeOfOptions];

export type ComparisonType = number | Date;

export type InferComparisonType<$Type> = $Type extends number ? number : Date;

export type ToStringType = string | number | boolean;

export type ToString<$Value extends ToStringType> = $Value extends string
  ? $Value
  : `${$Value}`;

export type ToBigIntType = bigint | boolean | number | string;

export type ToBigInt<$Value extends ToBigIntType> = $Value extends bigint
  ? $Value
  : $Value extends boolean
  ? $Value extends true
    ? 1n
    : 0n
  : $Value extends number
  ? BigInt
  : $Value extends string
  ? BigInt
  : $Value;

export type ToBooleanType = boolean | number | string | bigint;

export type ToBoolean<$Value extends ToBooleanType> = $Value extends boolean
  ? $Value
  : $Value extends number
  ? $Value extends 0
    ? false
    : true
  : $Value extends string
  ? $Value extends ""
    ? false
    : true
  : $Value extends bigint
  ? $Value extends 0n
    ? false
    : true
  : $Value;

export type ToNumberType = number | string | boolean;

export type ToNumber<$Value extends ToNumberType> = $Value extends number
  ? $Value
  : $Value extends string
  ? $Value extends ""
    ? never
    : $Value extends `${infer $Number extends number}`
    ? $Number
    : never
  : $Value extends boolean
  ? $Value extends true
    ? 1
    : 0
  : $Value;

export type ToDateType = number | string | Date;

export type ToDate<$Value extends ToDateType> = $Value extends Date
  ? $Value
  : Date;

export type Whitespace = " " | "\n" | "\t";

export type TrimStart<$Value extends string> =
  $Value extends `${Whitespace}${infer $Rest}` ? TrimStart<$Rest> : $Value;

export type TrimEnd<$Value extends string> =
  $Value extends `${infer $Rest}${Whitespace}` ? TrimEnd<$Rest> : $Value;

export type Trim<$Value extends string> = TrimEnd<TrimStart<$Value>>;
