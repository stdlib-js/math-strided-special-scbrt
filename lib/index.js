/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

/**
* Compute the cube root of each element in a single-precision floating-point strided array `x` and assign the results to elements in a single-precision floating-point strided array `y`.
*
* @module @stdlib/math-strided-special-scbrt
*
* @example
* var Float32Array = require( '@stdlib/array-float32' );
* var scbrt = require( '@stdlib/math-strided-special-scbrt' );
*
* var x = new Float32Array( [ 0.0, 1.0, 8.0, 27.0, 64.0 ] );
* var y = new Float32Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
*
* scbrt( x.length, x, 1, y, 1 );
* // y => <Float32Array>[ 0.0, 1.0, 2.0, 3.0, 4.0 ]
*
* @example
* var Float32Array = require( '@stdlib/array-float32' );
* var scbrt = require( '@stdlib/math-strided-special-scbrt' );
*
* var x = new Float32Array( [ 0.0, 1.0, 8.0, 27.0, 64.0 ] );
* var y = new Float32Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
*
* scbrt.ndarray( x.length, x, 1, 0, y, 1, 0 );
* // y => <Float32Array>[ 0.0, 1.0, 2.0, 3.0, 4.0 ]
*/

// MODULES //

var join = require( 'path' ).join;
var tryRequire = require( '@stdlib/utils-try-require' );
var javascript = require( './main.js' );


// MAIN //

var main;
var tmp = tryRequire( join( __dirname, './native.js' ) );
if ( tmp instanceof Error ) {
	main = javascript;
} else {
	main = tmp;
}


// EXPORTS //

module.exports = main;

// exports: { "ndarray": "main.ndarray" }
