---
slug: rx-js-pluck
title: RxJS Pluck Operator
authors: dradu

tags: [rxjs, essentials, pluck]
---


```typescript
import { from } from 'rxjs';
import { pluck } from 'rxjs/operators';

const source = from([{ name: 'Joe', age: 30 }, { name: 'Sarah', age: 35 }]);
//grab names
const example = source.pipe(pluck('name'));
//output: "Joe", "Sarah"
const subscribe = example.subscribe(val => console.log(val));
```
