export class FluxusError {}

/*
 * Throws a new `FluxusError`.
 * */
export const error = () => {
  throw new FluxusError();
};
