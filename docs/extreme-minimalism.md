# Extreme minimalism

Fluxus is built around the idea of atomic and single-purpose operations.

These operations are then used to create more abstract and complex operations.

Each atomic operation includes only the necessary logic and absolutely nothing else.

The goal of this library is performance and size in this exact order.

## Introduction

What should `string_type` do?

It should check if `typeof` input is `string`.

If it is then return the input and if not then throw an error.

Nothing more and nothing less.

This is how a compiled production version of `string_type` looks like in fluxus `(v) => (typeof v !== "string" && error(), v)`.

## Comparison

Other data validation libraries usually ship and do a lot of unnecessary stuff.

Some of them might include sub-operations as a part of the main type-operation like `string().min(1).max(20).email()`.

Some other libraries might include pipe right in the type-operations like `string(min(1), max(20), email)`.

All of this is an utter waste of resources for any operation that doesn't need sub-operations.

## Meaningful errors

Meaningful errors with stack traces are thrown only in development/testing environments.

This ensures that you don't leak any error messages with potentially sensitive data in production.

Such sensitive information could be the shape of your endpoint's input data or anything revealing inner workings of your application which are not publicly known (such as in a Swagger endpoint documentation).

It also forces you to properly check for all of the different errors and make sure they're never leaked.

If you really want to return an error you have to do so explicitly by `wrap`ping operation with a custom error.

Getting rid of error data and try/catches in production makes the code smaller and faster.

## Can it be faster/smaller?

Theoretically speaking this library could be a lot faster if we either "compiled" operations using `new Function()` and/or forced users to use a compiler that supports macros.

However we cannot use `new Function()` since it's not allowed in certain environments such as Cloudflare Workers.

We also don't want to force users into using a specific TypeScript compiler which might not be compatible with their tech stack.

We could also very easily make this library smaller by using `...`/`.map`/`.reduce`/etc. but these changes would in turn make the library slower.

## Conclusion

Every operation's compiled version is benchmarked and meticulously inspected for any byte savings.

If operation says it does thing `A` then it must never do anything else than thing `A`.
