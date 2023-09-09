import { Operation } from "@types";
import { or } from "@operations/general/or/index.dev.js";
import { literal } from "@operations/general/literal/index.dev.js";

export const nullable = <$Operation extends Operation>(operation: $Operation) =>
  or([literal(null), operation]);
