import { Operation } from "../../types.js";
import { or } from "../or/index.js";
import { literal } from "../literal/index.js";

/*
 * Checks if the value is `undefined` or `null` or the operation.
 * */
export const maybe = <$Operation extends Operation<any>>(
  operation: $Operation,
) => or([literal(undefined), literal(null), operation]);
