import { Operation } from "../../../types.js";
import { or } from "../or/index.dev.js";
import { literal } from "../literal/index.dev.js";

/*
 * Checks if the value is `undefined` or `null` or the operation.
 * */
export const maybe = <$Operation extends Operation>(operation: $Operation) =>
  or([literal(undefined), literal(null), operation]);
