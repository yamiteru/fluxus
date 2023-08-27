# and

Sequentially applies a list of operations to a value.

Given operations `A`, `B`, `C` and value `X`, the result will be `C(B(A(X)))`.

It supports up to 32 operations with automatic type inference.

## example

```ts
and([
  number_type,
  positive,
  integer,
  lte(0),
  gte(100)
]);
```
