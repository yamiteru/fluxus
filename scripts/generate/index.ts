import { generate_and } from "./and.js";
import { generate_or } from "./or.js";

(async () => {
  await Promise.all([generate_and(), generate_or()]);
})();
