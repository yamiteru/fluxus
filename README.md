# Beren

## Goals

- Small footprint
- Hellishly fast
- No string_type error messages
- Meaningful errors only in dev
- Modular composition
- Has to support `partial(object({ ... }))` and `required(object({ ... }))`
- Narrowing down of types (e.g. int<10)

## Example


### General

```ts
const user_schema = merge(
  object({
    id: and(is_string, is_uuid),
    first_name: is_string,
    last_name: is_string,
    birth_date: and(
      match(
        [is_string, string_to_date],
        [is_number, number_to_date]
      ),
      min_age(18),
      max_age(100)
    )
  }),
  partial(object({
    friend_ids: array(
      transform(
        lazy(() => user_schema),
        and(is_string, is_uuid),
        property("id")
      )
    ),
    coordinates: tuple(
      and(isNumber, min(-90), max(90)),
      and(isNumber, min(-180), max(180))
    ),
    permissions: array(enum(
      "OPEN_FILE",
      "SEND_SUBMISSION"
    ))
  }));
);
```

### General

```ts
// any;
// unknown;
// never;
// boolean_type;
// undefined_type;
// symbol_type;

// and(a, b);
// or(a, b);
xand(a, b);
xnor(a, b);
xor(a, b);
// not(a);

match([a, () => {}], [b, () => {}])
when(() => true, a, b);
tranform(or(string_type, number_type), number_type, (v) => +v * 2);

// gt(5);
// gte(5);
// lt(5);
// lte(5);

// type_of("string");
// instance(Date);
// literal("hello");
// property("length");
// optional(a);
// nullable(a);
// maybe(a);

// truthy;
// falsy;

```

### Methods

```ts
// assert(a, 1);
// parse(a, 1);
// is(a, 1);
```

### Utils

```ts
// error("TYPE", { a: 1 }, children);
```

### Coerce

```ts
// to_string(5);
// to_number("5");
// to_date("2023-01-10T00:00:00.000Z");
// to_boolean(1);
// to_bigint(10);
```

### Object

```ts
// object_type;

// object({ ... });
// record(a, b);

merge(text_message, photo_message, video_message);

partial(user);
required(user);

omit(user, ["id"]);
pick(user, ["first_name", "last_name"]);

keys;
values;
entries;
```

### Array

```ts
array_type;

array(a);
tuple(a, b, c);

nonempty(users);
concat([1, 2, 3]);
sort((a, b) => a - b);
nth(1);

first;
last;
```

### String

```ts
// string_type;

// email;
// uuid;
// emoji;

// regex(email_pattern);
// includes("hell");
// starts_with("a");
// ends_with("a");
// prepend("a");
// append("a");
// split("/");

// trim;
// trim_start;
// trim_end;
// to_lower_case;
// to_upper_case;
// capitalize;
```

### Number

```ts
// number_type;

// positive;
// negative;
// integer;
// float;
// even;
// odd;
// finite;
// nan;

// multiple_of(2);
// range(18, 100);
// plus(1);
// minus(1);
// multiply(2);
// divide(2);
```

### Bigint

```ts
// bigint_type;

// positive;
// negative;

// multiple_of(2n);
// range(18n, 100n);
```

### Date

```ts
// date;

// min(new Date());
// max(new Date());
// range(new Date(), new Date());
```
