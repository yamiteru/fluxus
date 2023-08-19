import { Operation } from "@types";
import { or } from "@operations/or/index.dev.js";
import { literal } from "@operations/literal/index.dev.js";

/*
 * Checks if the value is `undefined` or `null` or the operation.
 * */
export const maybe = <$Operation extends Operation>(operation: $Operation) =>
  or([literal(undefined), literal(null), operation]);
