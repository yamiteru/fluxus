export type ErrorProps<
  $Reason extends string,
  $Context extends Record<string, any>,
> = [
  reason?: $Reason,
  message?: string,
  context?: $Context,
  children?: unknown,
];

export class FluxusError<
  $Reason extends string = string,
  $Context extends Record<string, any> = Record<string, any>,
> extends Error {
  constructor(cause: ErrorProps<$Reason, $Context>) {
    super(cause[0] ?? "", { cause });
  }
}

export const error = <
  $Reason extends string = string,
  $Context extends Record<string, any> = Record<string, any>,
>(
  ...props: ErrorProps<$Reason, $Context>
) => {
  throw new FluxusError(props);
};
