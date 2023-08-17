import { ObjectKey } from "../../types.js";

export class CustomError {
  constructor(
    public reason: string,
    public context?: Record<ObjectKey, unknown>,
    public children?: CustomError | any,
  ) {
    // ...
  }
}

/*
 * Throws a new `CustomError` with the given `reason`.
 * */
export const error = (
  // TODO: reason should always be uppercase and snake case
  reason: string,
  context?: Record<ObjectKey, unknown>,
  children?: CustomError | any,
) => {
  throw new CustomError(reason, context, children);
};
