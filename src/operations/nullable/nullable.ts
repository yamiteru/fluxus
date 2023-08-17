import { or } from "../or/index.js";
import { literal } from "../literal/index.js";
import { Operation } from "../../types.js";

/*
 * Checks if the value is `undefined` or `null` or the operation.
 * */
export const nullable = <$Operation extends Operation<any, any>>(
  operation: $Operation,
) => or([literal(null), operation]);
