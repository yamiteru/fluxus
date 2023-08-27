# Comparison

## Zod

### Performance and size

Zod is based on OOP which makes treeshaking impossible.

As a result a lot of unnecessary code gets downloaded and parsed before you can use just one simple function.

This can also be problem in serverless environments such as Cloudflare Workers where there is a bundle size limit.

### API

Zod uses function chaining to compose complex validations.

Sometimes the same thing can be achieved with both functional chaining and wraping a function in another function:

```ts
partial(object({ /* .. */ }));
object({ /* .. */ }).partial();

nullable(string());
string().nullable();
```

This can lead to unnecessary confusion and forcing subjective rules in a team about which way is the "correct" way.

## Superstruct

TODO

## Typia

TODO

## Valibot

### Performance and size

Valibot is by far the closest library to Fluxus when it comes to performance and size.

Actually Fluxus was inspired by Valibot in the first place so they share a lot of similarities.

However Valibot is based on operations with optional pipes which introduces some performance and size overhead.

### API

As stated above Valibot is based on operations with optional pipes like `number(min(0), max(100), integer)`.

Just like in the case of Superstruct I believe this approach to be the best balance between DX and performance/size.
