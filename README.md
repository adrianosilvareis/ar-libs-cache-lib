# Cache-lib

lib to simplify creation of cache.

## Installation

Install added into your clone_libs script 
or `clone git@github.com:adrianosilvareis/ar-libs-cache-lib.git` into your packages folder

```bash
  git clone git@github.com:adrianosilvareis/ar-libs-cache-lib.git packages/libs
  yarn add @libs/cache-lib@1.0.0
```
    ## Use/Sample

```typescript
import { Cache } from '@libs/cache-lib'

// no need waiting finish
Cache.set('key', 'value') // Promise<void>

Cache.get('key') // Promise<null or value>

```
## Running tests

For runing the tests, use this command

```bash
  yarn workspace @libs/cache-lib run test
```
## Author

- [@adrianosilvareis](https://github.com/adrianosilvareis)

