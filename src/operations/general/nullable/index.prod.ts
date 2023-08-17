import { Operation } from "../../../types.js";
import { literal } from "../literal/index.prod.js";
import { or } from "../or/index.prod.js";

/*
 * Checks if the value is `undefined` or `null` or the operation.
 * */
export const nullable = <$Operation extends Operation>(operation: $Operation) =>
  or([literal(null), operation]);
