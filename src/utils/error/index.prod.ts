import { FluxusError } from "@types";
import { ERROR_SYMBOL } from "@constants";

export const error = (...props: Partial<FluxusError>) => {
  throw [ERROR_SYMBOL, ...props];
};
