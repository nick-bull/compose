Composes functions

This package has been **deprecated** as it is part of [`functional-utils`](https://github.com/nick-bull/functional-utils)

## Installation

```
npm i @nick-bull/compose
```

## Usage

Note that `compose(a, b) === pipe(b, a)`

```
import {compose, pipe} from 'nick-bull/compose'

const addThree = (number) => number + 3;
const divideByTwo = (number) => number / 2;

const addAndDivide = compose(addThree, divideByTwo);
assert(addAndDivide(5) === 4);

const divideAndAdd = pipe(addThree, divideByTwo);
assert(divideAndAdd(8) === 7);
...
```

