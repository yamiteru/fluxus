# wrap

Wrap an operation in a try/catch block that will log an error if the operation throws.

It's useful for throwing a custom message in production since in production an empty error is thrown.

## Example

```ts
and(
  wrap(check_email, "EMAIL", () => "Invalid email"),
  wrap(check_password, "PASSWORD", () => "Invalid password"),
)
```
