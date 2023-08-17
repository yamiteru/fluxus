import { Operation } from "../../../types.js";
import { literal } from "../literal/index.prod.js";
import { or } from "../or/index.prod.js";

/*
 * Checks if the value is `undefined` or the operation.
 * */
export const optional = <$Operation extends Operation>(operation: $Operation) =>
  or([literal(undefined), operation]);
