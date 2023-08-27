# Fluxus

## Highlights

- Full type inference
- Tiny bundle size
- Fast runtime
- Production safe errors
- 100% test coverage
- No dependencies
- Low-level and declarative API

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
