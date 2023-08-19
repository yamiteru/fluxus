import { FluxusError } from "@types";
import { ERROR_SYMBOL } from "@constants";

/*
 * Throws a new custom error.
 * */
export const error = (...props: Partial<FluxusError>) => {
  throw [ERROR_SYMBOL, ...props];
};
