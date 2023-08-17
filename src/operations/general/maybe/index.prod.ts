import { Operation } from "../../../types.js";
import { or } from "../or/index.prod.js";
import { literal } from "../literal/index.prod.js";

/*
 * Checks if the value is `undefined` or `null` or the operation.
 * */
export const maybe = <$Operation extends Operation>(operation: $Operation) =>
  or([literal(undefined), literal(null), operation]);
