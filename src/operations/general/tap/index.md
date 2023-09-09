# tap

Run a callback function with the value and returns the value back.

If the callback throws, the tap will throw.

## Example

```ts
and(
  string_type,
  trim,
  tap(and(
    property("length"),
    gte(0),
    lte(20)
  ))
);
```
