# Fluxus

Is this library for you?

Do you care about performance and bundle size and don't mind a bit steeper learning curve?

If you need more information then check out our [Comparison](./docs/comparison.md) section.

## Example

```ts
import type { Output } from "fluxus";
import { and, email, gt, tap, length, object, string_type, parse } from "fluxus"; // 0.47 kB

// Create login schema with email and password
const login_schema = object({
  email: and(string_type, email),
  password: and(string_type, tap(and(length, gt(8)))),
});

// Infer output TypeScript type of login schema
// { email: string; password: string }
type LoginData = Output<typeof login_schema>;

// Throws error saying email does not match email regex
parse(login_schema, { email: '', password: '' });

// Returns data as { email: string; password: string }
parse(login_schema, { email: 'yamiteru@icloud.com', password: 'helloworld' });
```
