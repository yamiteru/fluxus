import { Operation } from "@types";
import { or } from "@operations/or/index.prod.js";
import { literal } from "@operations/literal/index.prod.js";

export const optional = <$Operation extends Operation>(operation: $Operation) =>
  or([literal(undefined), operation]);
