<!--

@license Apache-2.0

Copyright (c) 2024 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# typedarraypool

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Allocate typed arrays from a typed array memory pool.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="installation">

## Installation

```bash
npm install @stdlib/array-pool
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var typedarraypool = require( '@stdlib/array-pool' );
```

#### typedarraypool( \[dtype] )

Returns an **uninitialized** [typed array][mdn-typed-array] having a specified [data type][@stdlib/array/typed-dtypes] `dtype`.

```javascript
var arr = typedarraypool();
// returns <Float64Array>[]

// ...

typedarraypool.free( arr );
```

By default, the output [typed array][mdn-typed-array] is `float64`. To specify an alternative [data type][@stdlib/array/typed-dtypes], set the `dtype` parameter.

```javascript
var arr = typedarraypool( 'int32' );
// returns <Int32Array>[]

// ...

typedarraypool.free( arr );
```

#### typedarraypool( length\[, dtype] )

Returns an **uninitialized** [typed array][mdn-typed-array] having a specified `length` from a [typed array][mdn-typed-array] memory pool.

```javascript
var arr1 = typedarraypool( 5 );
// returns <Float64Array>

var arr2 = typedarraypool( 5, 'uint8' );
// returns <Uint8Array>

// ...

typedarraypool.free( arr1 );
typedarraypool.free( arr2 );
```

#### typedarraypool( typedarray\[, dtype] )

Returns a pooled [typed array][mdn-typed-array] from another [typed array][mdn-typed-array].

```javascript
var arr1 = typedarraypool( [ 5.0, -3.0, 2.0 ] );
// returns <Float64Array>[ 5.0, -3.0, 2.0 ]

var arr2 = typedarraypool( arr1 );
// returns <Float64Array>[ 5.0, -3.0, 2.0 ]

var arr3 = typedarraypool( arr1, 'int32' );
// returns <Int32Array>[ 5, -3, 2 ]

// ...

typedarraypool.free( arr1 );
typedarraypool.free( arr2 );
typedarraypool.free( arr3 );
```

#### typedarraypool( obj\[, dtype] )

Returns a pooled [typed array][mdn-typed-array] from an array-like `object`.

```javascript
var arr1 = typedarraypool( [ 0.5, 0.5, 0.5 ] );
// returns <Float64Array>[ 0.5, 0.5, 0.5 ]

var arr2 = typedarraypool( [ 0.5, 0.5, 0.5 ], 'float32' );
// returns <Float32Array>[ 0.5, 0.5, 0.5 ]

// ...

typedarraypool.free( arr1 );
typedarraypool.free( arr2 );
```

#### typedarraypool.malloc( \[dtype] )

Returns an **uninitialized** [typed array][mdn-typed-array] having a specified [data type][@stdlib/array/typed-dtypes] `dtype`.

```javascript
var arr1 = typedarraypool.malloc();
// returns <Float64Array>[]

var arr2 = typedarraypool.malloc( 'int32' );
// returns <Int32Array>[]

// ...

typedarraypool.free( arr1 );
typedarraypool.free( arr2 );
```

#### typedarraypool.malloc( length\[, dtype] )

Returns an **uninitialized** [typed array][mdn-typed-array] having a specified `length` from a [typed array][mdn-typed-array] memory pool.

```javascript
var arr1 = typedarraypool.malloc( 5 );
// returns <Float64Array>

var arr2 = typedarraypool.malloc( 5, 'uint8' );
// returns <Uint8Array>

// ...

typedarraypool.free( arr1 );
typedarraypool.free( arr2 );
```

#### typedarraypool.malloc( typedarray\[, dtype] )

Returns a pooled [typed array][mdn-typed-array] from another [typed array][mdn-typed-array].

```javascript
var arr1 = typedarraypool.malloc( [ 5.0, -3.0, 2.0 ] );
// returns <Float64Array>[ 5.0, -3.0, 2.0 ]

var arr2 = typedarraypool.malloc( arr1 );
// returns <Float64Array>[ 5.0, -3.0, 2.0 ]

var arr3 = typedarraypool.malloc( arr1, 'int32' );
// returns <Int32Array>[ 5, -3, 2 ]

// ...

typedarraypool.free( arr1 );
typedarraypool.free( arr2 );
typedarraypool.free( arr3 );
```

#### typedarraypool.malloc( obj\[, dtype] )

Returns a pooled [typed array][mdn-typed-array] from an array-like `object`.

```javascript
var arr1 = typedarraypool.malloc( [ 0.5, 0.5, 0.5 ] );
// returns <Float64Array>[ 0.5, 0.5, 0.5 ]

var arr2 = typedarraypool.malloc( [ 0.5, 0.5, 0.5 ], 'float32' );
// returns <Float32Array>[ 0.5, 0.5, 0.5 ]

// ...

typedarraypool.free( arr1 );
typedarraypool.free( arr2 );
```

#### typedarraypool.calloc( \[dtype] )

Returns a **zero-initialized** [typed array][mdn-typed-array] having a specified [data type][@stdlib/array/typed-dtypes] `dtype`.

```javascript
var arr1 = typedarraypool.calloc();
// returns <Float64Array>[]

var arr2 = typedarraypool.calloc( 'int32' );
// returns <Int32Array>[]

// ...

typedarraypool.free( arr1 );
typedarraypool.free( arr2 );
```

#### typedarraypool.calloc( length\[, dtype] )

Returns a **zero-initialized** [typed array][mdn-typed-array] having a specified `length` from a [typed array][mdn-typed-array] memory pool.

```javascript
var arr1 = typedarraypool.calloc( 5 );
// returns <Float64Array>[ 0.0, 0.0, 0.0, 0.0, 0.0 ]

var arr2 = typedarraypool.calloc( 5, 'uint8' );
// returns <Uint8Array>[ 0, 0, 0, 0, 0 ]

// ...

typedarraypool.free( arr1 );
typedarraypool.free( arr2 );
```

#### typedarraypool.free( buf )

Frees a [typed array][mdn-typed-array] or typed array [buffer][mdn-arraybuffer] for use in a future allocation.

```javascript
var arr = typedarraypool( 10, 'float64' );
// returns <Float64Array>

// ...

// Free the allocated typed array for use in a future allocation:
typedarraypool.free( arr );

// Create another typed array:
arr = typedarraypool( 10, 'float64' );
// returns <Float64Array>

// ...

// Free the allocated typed array buffer for use in a future allocation:
typedarraypool.free( arr.buffer );
```

#### typedarraypool.clear()

Clears the [typed array][mdn-typed-array] pool allowing garbage collection of previously allocated (and currently free) [array buffers][mdn-arraybuffer].

```javascript
var arr = typedarraypool( 10, 'float64' );
// returns <Float64Array>

// ...

typedarraypool.free( arr );

// ...

// Clear all freed buffers:
typedarraypool.clear();
```

#### typedarraypool.highWaterMark

**Read-only** property returning the pool's high water mark (in bytes).

```javascript
var limit = typedarraypool.highWaterMark;
// returns <number>
```

Once a high water mark is reached, [typed array][mdn-typed-array] allocation **fails**.

#### typedarraypool.nbytes

**Read-only** property returning the total number of allocated bytes.

```javascript
var arr = typedarraypool( 5, 'float64' );

var nbytes = typedarraypool.nbytes;
// returns <number>
```

The returned value is the total **accumulated** value. Hence, anytime a pool must allocate a new [array buffer][mdn-arraybuffer] (i.e., more memory), the pool increments this value. The only time this value is decremented is when a pool is cleared. This behavior means that, while allocated buffers which are never freed may, in fact, be garbage collected, they continue to count against the high water mark limit. Accordingly, you should **always** free allocated buffers in order to prevent the pool from believing that non-freed buffers are continually in use.

#### typedarraypool.factory( \[options] )

Creates a new [typed array][mdn-typed-array] pool.

```javascript
var pool = typedarraypool.factory();

var arr = pool( 5, 'float64' );
// returns <Float64Array>

// ...

pool.free( arr );
```

The method accepts the following `options`:

-   **highWaterMark**: maximum total memory (in bytes) which can be allocated. Default: `2^53` bytes.

By default, the maximum total memory a pool may allocate is `2^53` bytes (approximately `1` petabyte, which, in practical terms, means a pool has **unlimited** capacity). To specify an alternative limit, set the `highWaterMark` option.

```javascript
// Create a new typed array pool which can allocate up to 1MB:
var pool = typedarraypool.factory({
    'highWaterMark': 1e6
});

var arr = pool( 5, 'float64' );
// returns <Float64Array>

// ...

pool.free( arr );
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   Uninitialized typed arrays may contain sensitive contents. If security is paramount (e.g., if freed [typed arrays][mdn-typed-array] have been used to store sensitive contents), use `calloc`.
-   An allocated [typed array][mdn-typed-array] is **guaranteed** to have an underlying [array buffer][mdn-arraybuffer] with _at least_ `N * w` bytes, where `N` is the number of [typed array][mdn-typed-array] elements and `w` is the number of bytes per element. Note, however, that the underlying [array buffer][mdn-arraybuffer] is likely to have **excess** capacity. Thus, if you create many [typed arrays][mdn-typed-array] which are held in memory and are **not** freed, you are likely to consume significantly more memory than if you had directly used [typed array][mdn-typed-array] constructors. However, if you create many [typed arrays][mdn-typed-array] which are rapidly discarded and of relatively large size, then using a [typed array][mdn-typed-array] pool can offer significant performance advantages.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random-base-randu' );
var typedarraypool = require( '@stdlib/array-pool' );

// Create a typed array pool which can allocate at most 1GB:
var typedarray = typedarraypool.factory({
    'highWaterMark': 1e9
});

// Inspect the pool:
console.log( 'Max bytes: %d', typedarray.highWaterMark );
console.log( 'nbytes: %d', typedarray.nbytes );

// Allocate an array for storing double-precision floating-point numbers:
var arr1 = typedarray( 5, 'float64' );
// returns <Float64Array>[ 0.0, 0.0, 0.0, 0.0, 0.0 ]

// Inspect the pool:
console.log( 'nbytes: %d', typedarray.nbytes );

// Fill the array...
var i;
for ( i = 0; i < arr1.length; i++ ) {
    arr1[ i ] = randu();
}

// Inspect array contents:
console.log( arr1 );

// Free the array:
typedarray.free( arr1 );

// Allocate another array similar to the previous one:
var arr2 = typedarray( 5, 'float64' );
// returns <Float64Array>

// Check that we have been returned a new typed array view:
console.log( arr2 === arr1 );
// => false

// Inspect array contents:
console.log( arr2 );

// Free the array:
typedarray.free( arr2 );

// Allocate an initialized array:
var arr3 = typedarray.calloc( 5, 'float64' );
// returns <Float64Array>[ 0.0, 0.0, 0.0, 0.0, 0.0 ]

// Inspect array contents:
console.log( arr3 );

// Free the array:
typedarray.free( arr3 );

// Clear the pool:
typedarray.clear();

// Inspect the pool:
console.log( 'nbytes: %d', typedarray.nbytes );
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/array-typed`][@stdlib/array/typed]</span><span class="delimiter">: </span><span class="description">create a typed array.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/array-pool.svg
[npm-url]: https://npmjs.org/package/@stdlib/array-pool

[test-image]: https://github.com/stdlib-js/array-pool/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/array-pool/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/array-pool/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/array-pool?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/array-pool.svg
[dependencies-url]: https://david-dm.org/stdlib-js/array-pool/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/array-pool/tree/deno
[deno-readme]: https://github.com/stdlib-js/array-pool/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/array-pool/tree/umd
[umd-readme]: https://github.com/stdlib-js/array-pool/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/array-pool/tree/esm
[esm-readme]: https://github.com/stdlib-js/array-pool/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/array-pool/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/array-pool/main/LICENSE

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

[mdn-arraybuffer]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer

[@stdlib/array/typed-dtypes]: https://github.com/stdlib-js/array-typed-dtypes

<!-- <related-links> -->

[@stdlib/array/typed]: https://github.com/stdlib-js/array-typed

<!-- </related-links> -->

</section>

<!-- /.links -->
