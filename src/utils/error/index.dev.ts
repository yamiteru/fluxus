export class CustomError {
  constructor(public reason: string) {
    // ...
  }
}

/*
 * Throws a new `CustomError` with the given `reason`.
 * */
export const error = (
  // TODO: reason should always be uppercase and snake case
  reason: string,
) => {
  throw new CustomError(reason);
};
