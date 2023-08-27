# wrap

Wrap an operation in a try/catch block that will log an error if the operation throws.

It's useful for throwing a custom message in production since in production an empty error is thrown.

## Example

```ts
and(
  wrap(check_email, () => "Invalid email", "EMAIL"),
  wrap(check_password, () => "Invalid password", "PASSWORD"),
)
```
