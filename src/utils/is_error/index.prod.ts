import { FluxusError } from "@types";
import { ERROR_SYMBOL } from "@constants";

export const is_error = (input: unknown): input is FluxusError =>
  input?.[0] === ERROR_SYMBOL;
