# object

Checks if the value is an object and then runs the schema on it.

The schema is an object where each key is a key in the object and each value is an operation.

If the operation throws an errorProd, the errorProd is caught and wrapper in object errorProd.

The resulting object has the same keys as the schema so no extra keys are allowed.

# Example

```ts
object({
  name: string_type,
  age: and(number_type, integer, gte(18)),
  address: object({
    street: string_type,
    city: string_type,
  })
});
```
