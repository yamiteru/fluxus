import { Operation } from "../../types.js";
import { literal } from "../literal/index.js";
import { or } from "../or/index.js";

/*
 * Checks if the value is `undefined` or the operation.
 * */
export const optional = <$Operation extends Operation<any>>(
  operation: $Operation,
) => or([literal(undefined), operation]);
