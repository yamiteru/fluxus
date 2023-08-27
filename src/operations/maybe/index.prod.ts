import { Operation } from "@types";
import { or } from "@operations/or/index.prod.js";
import { literal } from "@operations/literal/index.prod.js";

export const maybe = <$Operation extends Operation>(operation: $Operation) =>
  or([literal(undefined), literal(null), operation]);
