import { ObjectKey } from "@types";

export class FluxusError {
  constructor(
    public reason: string,
    public context?: Record<ObjectKey, unknown>,
    public children?: FluxusError | any,
  ) {
    // ...
  }
}

/*
 * Throws a new `FluxusError`.
 * */
export const error = (
  reason: string,
  context?: Record<ObjectKey, unknown>,
  children?: FluxusError | any,
) => {
  throw new FluxusError(reason, context, children);
};
