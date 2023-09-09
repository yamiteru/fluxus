import { Operation } from "@types";
import { or } from "@operations/general/or/index.dev.js";
import { literal } from "@operations/general/literal/index.dev.js";

export const optional = <$Operation extends Operation>(operation: $Operation) =>
  or([literal(undefined), operation]);
