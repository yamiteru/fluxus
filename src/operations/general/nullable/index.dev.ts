import { Operation } from "../../../types.js";
import { literal } from "../literal/index.dev.js";
import { or } from "../or/index.dev.js";

/*
 * Checks if the value is `undefined` or `null` or the operation.
 * */
export const nullable = <$Operation extends Operation>(operation: $Operation) =>
  or([literal(null), operation]);
