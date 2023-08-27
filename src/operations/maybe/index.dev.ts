import { Operation } from "@types";
import { or } from "@operations/or/index.dev.js";
import { literal } from "@operations/literal/index.dev.js";

export const maybe = <$Operation extends Operation>(operation: $Operation) =>
  or([literal(undefined), literal(null), operation]);
