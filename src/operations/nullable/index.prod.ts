import { Operation } from "@types";
import { or } from "@operations/or/index.prod.js";
import { literal } from "@operations/literal/index.prod.js";

/*
 * Checks if the value is `undefined` or `null` or the operation.
 * */
export const nullable = <$Operation extends Operation>(operation: $Operation) =>
  or([literal(null), operation]);
