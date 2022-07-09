<!--

@license Apache-2.0

Copyright (c) 2020 The Stdlib Authors.

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

# scbrt

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Compute the [cube root][@stdlib/math/base/special/cbrtf] of each element in a single-precision floating-point strided array.

<section class="intro">

</section>

<!-- /.intro -->



<section class="usage">

## Usage

To use in Observable,

```javascript
scbrt = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/math-strided-special-scbrt@umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var scbrt = require( 'path/to/vendor/umd/math-strided-special-scbrt/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/math-strided-special-scbrt@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.scbrt;
})();
</script>
```

#### scbrt( N, x, strideX, y, strideY )

Computes the [cube root][@stdlib/math/base/special/cbrtf] of each element in a single-precision floating-point strided array `x` and assigns the results to elements in a single-precision floating-point strided array `y`.

```javascript
var Float32Array = require( '@stdlib/array-float32' );

var x = new Float32Array( [ 0.0, 1.0, 8.0, 27.0, 64.0 ] );

// Perform operation in-place:
scbrt( x.length, x, 1, x, 1 );
// x => <Float32Array>[ 0.0, 1.0, 2.0, 3.0, 4.0 ]
```

The function accepts the following arguments:

-   **N**: number of indexed elements.
-   **x**: input [`Float32Array`][@stdlib/array/float32].
-   **strideX**: index increment for `x`.
-   **y**: output [`Float32Array`][@stdlib/array/float32].
-   **strideY**: index increment for `y`.

The `N` and `stride` parameters determine which elements in `x` and `y` are accessed at runtime. For example, to index every other value in `x` and to index the first `N` elements of `y` in reverse order,

```javascript
var Float32Array = require( '@stdlib/array-float32' );

var x = new Float32Array( [ 0.0, 1.0, 8.0, 27.0, 64.0, 125.0 ] );
var y = new Float32Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

scbrt( 3, x, 2, y, -1 );
// y => <Float32Array>[ 4.0, 2.0, 0.0, 0.0, 0.0, 0.0 ]
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][@stdlib/array/float32] views.

```javascript
var Float32Array = require( '@stdlib/array-float32' );

// Initial arrays...
var x0 = new Float32Array( [ 0.0, 1.0, 8.0, 27.0, 64.0, 125.0 ] );
var y0 = new Float32Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

// Create offset views...
var x1 = new Float32Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element
var y1 = new Float32Array( y0.buffer, y0.BYTES_PER_ELEMENT*3 ); // start at 4th element

scbrt( 3, x1, -2, y1, 1 );
// y0 => <Float32Array>[ 0.0, 0.0, 0.0, 5.0, 3.0, 1.0 ]
```

#### scbrt.ndarray( N, x, strideX, offsetX, y, strideY, offsetY )

Computes the [cube root][@stdlib/math/base/special/cbrtf] of each element in a single-precision floating-point strided array `x` and assigns the results to elements in a single-precision floating-point strided array `y` using alternative indexing semantics.

```javascript
var Float32Array = require( '@stdlib/array-float32' );

var x = new Float32Array( [ 0.0, 1.0, 8.0, 27.0, 64.0 ] );
var y = new Float32Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );

scbrt.ndarray( x.length, x, 1, 0, y, 1, 0 );
// y => <Float32Array>[ 0.0, 1.0, 2.0, 3.0, 4.0 ]
```

The function accepts the following additional arguments:

-   **offsetX**: starting index for `x`.
-   **offsetY**: starting index for `y`.

While [`typed array`][@stdlib/array/float32] views mandate a view offset based on the underlying `buffer`, the `offsetX` and `offsetY` parameters support indexing semantics based on starting indices. For example, to index every other value in `x` starting from the second value and to index the last `N` elements in `y`,

```javascript
var Float32Array = require( '@stdlib/array-float32' );

var x = new Float32Array( [ 0.0, 1.0, 8.0, 27.0, 64.0, 125.0 ] );
var y = new Float32Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

scbrt.ndarray( 3, x, 2, 1, y, -1, y.length-1 );
// y => <Float32Array>[ 0.0, 0.0, 0.0, 5.0, 3.0, 1.0 ]
```

</section>

<!-- /.usage -->

<section class="notes">

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/random-base-uniform@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/array-float32@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/math-strided-special-scbrt@umd/browser.js"></script>
<script type="text/javascript">
(function () {

var x = new Float32Array( 10 );
var y = new Float32Array( 10 );

var i;
for ( i = 0; i < x.length; i++ ) {
    x[ i ] = uniform( -100.0, 100.0 );
}
console.log( x );
console.log( y );

scbrt.ndarray( x.length, x, 1, 0, y, -1, y.length-1 );
console.log( y );

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->



<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math/strided/special/dcbrt`][@stdlib/math/strided/special/dcbrt]</span><span class="delimiter">: </span><span class="description">compute the cube root of each element in a double-precision floating-point strided array.</span>
-   <span class="package-name">[`@stdlib/math/strided/special/cbrt`][@stdlib/math/strided/special/cbrt]</span><span class="delimiter">: </span><span class="description">compute the cube root of each element in a strided array.</span>
-   <span class="package-name">[`@stdlib/math/strided/special/ssqrt`][@stdlib/math/strided/special/ssqrt]</span><span class="delimiter">: </span><span class="description">compute the principal square root for each element in a single-precision floating-point strided array.</span>

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

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-strided-special-scbrt.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-strided-special-scbrt

[test-image]: https://github.com/stdlib-js/math-strided-special-scbrt/actions/workflows/test.yml/badge.svg?branch=v0.0.7
[test-url]: https://github.com/stdlib-js/math-strided-special-scbrt/actions/workflows/test.yml?query=branch:v0.0.7

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-strided-special-scbrt/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-strided-special-scbrt?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-strided-special-scbrt.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-strided-special-scbrt/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-strided-special-scbrt/tree/deno
[umd-url]: https://github.com/stdlib-js/math-strided-special-scbrt/tree/umd
[esm-url]: https://github.com/stdlib-js/math-strided-special-scbrt/tree/esm
[branches-url]: https://github.com/stdlib-js/math-strided-special-scbrt/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-strided-special-scbrt/main/LICENSE

[@stdlib/array/float32]: https://github.com/stdlib-js/array-float32/tree/umd

[@stdlib/math/base/special/cbrtf]: https://github.com/stdlib-js/math-base-special-cbrtf/tree/umd

<!-- <related-links> -->

[@stdlib/math/strided/special/dcbrt]: https://github.com/stdlib-js/math-strided-special-dcbrt/tree/umd

[@stdlib/math/strided/special/cbrt]: https://github.com/stdlib-js/math-strided-special-cbrt/tree/umd

[@stdlib/math/strided/special/ssqrt]: https://github.com/stdlib-js/math-strided-special-ssqrt/tree/umd

<!-- </related-links> -->

</section>

<!-- /.links -->
