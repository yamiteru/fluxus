import { Operation } from "@types";
import { or } from "@operations/general/or/index.prod.js";
import { literal } from "@operations/general/literal/index.prod.js";

export const optional = <$Operation extends Operation>(operation: $Operation) =>
  or([literal(undefined), operation]);
