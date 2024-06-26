/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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

// MODULES //

var isString = require( '@stdlib/assert-is-string' ).isPrimitive;
var isNonNegativeInteger = require( '@stdlib/assert-is-nonnegative-integer' ).isPrimitive;
var isCollection = require( '@stdlib/assert-is-collection' );
var isTypedArrayLike = require( '@stdlib/assert-is-typed-array-like' );
var isArrayBuffer = require( '@stdlib/assert-is-arraybuffer' );
var isComplexDataType = require( '@stdlib/array-base-assert-is-complex-floating-point-data-type' );
var isComplex64Array = require( '@stdlib/assert-is-complex64array' );
var isComplex128Array = require( '@stdlib/assert-is-complex128array' );
var isBooleanArray = require( '@stdlib/assert-is-booleanarray' );
var setReadOnly = require( '@stdlib/utils-define-nonenumerable-read-only-property' );
var setReadOnlyAccessor = require( '@stdlib/utils-define-nonenumerable-read-only-accessor' );
var ctors = require( '@stdlib/array-typed-ctors' );
var reinterpret64 = require( '@stdlib/strided-base-reinterpret-complex64' );
var reinterpret128 = require( '@stdlib/strided-base-reinterpret-complex128' );
var reinterpretBoolean = require( '@stdlib/strided-base-reinterpret-boolean' );
var resolveGetter = require( '@stdlib/array-base-resolve-getter' );
var resolveSetter = require( '@stdlib/array-base-resolve-setter' );
var ARRAY_DEFAULTS = require( '@stdlib/array-defaults' );
var format = require( '@stdlib/string-format' );
var ArrayBuffer = require( '@stdlib/array-buffer' );
var ceil = require( '@stdlib/math-base-special-ceil' );
var floor = require( '@stdlib/math-base-special-floor' );
var ceil2 = require( '@stdlib/math-base-special-ceil2' );
var log2 = require( '@stdlib/math-base-special-log2' );
var min = require( '@stdlib/math-base-special-min' );
var defaults = require( './defaults.js' );
var validate = require( './validate.js' );
var createPool = require( './pool.js' );
var BYTES_PER_ELEMENT = require( './bytes_per_element.json' );


// VARIABLES //

var DEFAULT_DTYPE = ARRAY_DEFAULTS.get( 'dtypes.default' );
var Complex64Array = ctors( 'complex64' );
var Complex128Array = ctors( 'complex128' );
var BooleanArray = ctors( 'bool' );


// FUNCTIONS //

/**
* Tests whether an array is a single-precision complex floating-point number array.
*
* @private
* @param {Collection} arr - input array
* @returns {boolean} boolean indicating whether an input array is a single-precision complex floating-point number array
*/
function isCmplx64Array( arr ) {
	return ( arr instanceof Complex64Array );
}

/**
* Tests whether an array is a double-precision complex floating-point number array.
*
* @private
* @param {Collection} arr - input array
* @returns {boolean} boolean indicating whether an input array is a double-precision complex floating-point number array
*/
function isCmplx128Array( arr ) {
	return ( arr instanceof Complex128Array );
}

/**
* Tests whether an array is a boolean array.
*
* @private
* @param {Collection} arr - input array
* @returns {boolean} boolean indicating whether an input array is a boolean array
*/
function isBoolArray( arr ) {
	return ( arr instanceof BooleanArray );
}


// MAIN //

/**
* Creates a typed array pool.
*
* @param {Options} [options] - pool options
* @param {NonNegativeInteger} [options.highWaterMark] - maximum total memory which can be allocated
* @throws {TypeError} options argument must be an object
* @throws {TypeError} must provide valid options
* @returns {Function} allocator
*
* @example
* var typedarraypool = factory();
*
* // Allocate an array of doubles:
* var arr = typedarraypool( 5, 'float64' );
* // returns <Float64Array>[ 0.0, 0.0, 0.0, 0.0, 0.0 ]
*
* arr[ 0 ] = 3.14;
* arr[ 1 ] = 3.14;
*
* // ...
*
* // Free the allocated memory to be used in a future allocation:
* typedarraypool.free( arr );
*/
function factory( options ) {
	var nbytes;
	var pool;
	var opts;
	var err;

	opts = defaults();
	if ( arguments.length ) {
		err = validate( opts, options );
		if ( err ) {
			throw err;
		}
	}
	pool = createPool( ceil( log2( opts.highWaterMark ) ) );
	nbytes = 0;

	setReadOnly( malloc, 'malloc', malloc ); // circular reference
	setReadOnly( malloc, 'calloc', calloc );
	setReadOnly( malloc, 'free', free );
	setReadOnly( malloc, 'clear', clear );
	setReadOnly( malloc, 'highWaterMark', opts.highWaterMark );
	setReadOnlyAccessor( malloc, 'nbytes', getBytes );

	return malloc;

	/**
	* Returns the number of allocated bytes.
	*
	* @private
	* @returns {NonNegativeInteger} number of allocated bytes
	*/
	function getBytes() {
		return nbytes;
	}

	/**
	* Returns an array buffer.
	*
	* @private
	* @param {NonNegativeInteger} n - number of bytes
	* @returns {(ArrayBuffer|null)} array buffer or null
	*/
	function arraybuffer( n ) {
		var buf;
		var i;

		// Convert the number of bytes to an index in our pool table:
		i = log2( n );

		// If we already have an available array buffer, use it...
		if ( i < pool.length && pool[ i ].length ) {
			return pool[ i ].pop();
		}
		// Before allocating a new array buffer, ensure that we have not exceeded the maximum number of bytes we are allowed to allocate...
		if ( nbytes+n > opts.highWaterMark ) {
			return null;
		}
		buf = new ArrayBuffer( n );

		// Update the running counter of allocated bytes:
		nbytes += n;

		return buf;
	}

	/**
	* Returns a typed array.
	*
	* @private
	* @param {Function} ctor - typed array constructor
	* @param {NonNegativeInteger} len - view length
	* @param {string} dtype - data type
	* @returns {(TypedArray|null)} typed array or null
	*/
	function typedarray( ctor, len, dtype ) {
		var buf;
		if ( len === 0 ) {
			return new ctor( 0 );
		}
		buf = arraybuffer( ceil2( len )*BYTES_PER_ELEMENT[ dtype ] );
		if ( buf === null ) {
			return buf;
		}
		return new ctor( buf, 0, len );
	}

	/**
	* Returns an uninitialized typed array.
	*
	* ## Notes
	*
	* -   Memory is **not** initialized.
	* -   Memory is lazily allocated.
	* -   If the function returns `null`, the function was unable to allocate a new typed array from the typed array pool (most likely due to insufficient memory).
	*
	* @private
	* @param {(NonNegativeInteger|Collection)} [arg] - an array length or an array-like object
	* @param {string} [dtype="float64"] - data type
	* @throws {TypeError} must provide a valid array length or an array-like object
	* @throws {TypeError} must provide a recognized data type
	* @returns {(TypedArray|null)} typed array or null
	*/
	function malloc() {
		var nargs;
		var dtype;
		var ctor;
		var arr;
		var out;
		var set;
		var get;
		var len;
		var i;

		nargs = arguments.length;
		if ( nargs && isString( arguments[ nargs-1 ] ) ) {
			nargs -= 1;
			dtype = arguments[ nargs ];
		} else {
			dtype = DEFAULT_DTYPE;
		}
		ctor = ctors( dtype );
		if ( ctor === null ) {
			throw new TypeError( format( 'invalid argument. Must provide a recognized data type. Value: `%s`.', dtype ) );
		}
		if ( nargs <= 0 ) {
			return new ctor( 0 );
		}
		// Check if provided a typed array length...
		if ( isNonNegativeInteger( arguments[ 0 ] ) ) {
			return typedarray( ctor, arguments[ 0 ], dtype );
		}
		// Check if provided an array-like object containing data elements...
		if ( isCollection( arguments[ 0 ] ) ) {
			arr = arguments[ 0 ];
			len = arr.length;
			if ( isComplex128Array( arr ) ) {
				arr = reinterpret128( arr, 0 );
			} else if ( isComplex64Array( arr ) ) {
				arr = reinterpret64( arr, 0 );
			} else if ( isBooleanArray( arr ) ) {
				arr = reinterpretBoolean( arr, 0 );
			} else if ( isComplexDataType( dtype ) ) {
				// Assume we've been provided an array of interleaved real and imaginary components...
				len /= 2;
			}
			out = typedarray( ctor, len, dtype );
			if ( out === null ) {
				return out;
			}
			if ( isCmplx128Array( out ) || isCmplx64Array( out ) || isBoolArray( out ) ) {
				out.set( arr );
				return out;
			}
			// Resolve element accessors in order to account for the possibility that `arr` is a complex number array. As we don't prohibit other "unsafe" casts (e.g., providing a `Float64Array` and specifying a `dtype` of `uint8`), we don't prohibit providing a complex number array and specifying a real `dtype`. The results will probably be unexpected/gibberish, but I am not sure we should be overly pedantic in ensuring users don't do ill-advised things...
			get = resolveGetter( arr );
			set = resolveSetter( out );
			for ( i = 0; i < len; i++ ) {
				set( out, i, get( arr, i ) );
			}
			return out;
		}
		throw new TypeError( format( 'invalid argument. First argument must be either an array length or an array-like object. Value: `%s`.', arguments[ 0 ] ) );
	}

	/**
	* Returns a zero-initialized typed array.
	*
	* ## Notes
	*
	* -   If the function returns `null`, the function was unable to allocate a new typed array from the typed array pool (most likely due to insufficient memory).
	*
	* @private
	* @param {NonNegativeInteger} [len=0] - array length
	* @param {string} [dtype="float64"] - data type
	* @throws {TypeError} must provide a valid array length
	* @throws {TypeError} must provide a recognized data type
	* @returns {(TypedArray|null)} typed array or null
	*/
	function calloc() {
		var nargs;
		var out;
		var tmp;
		var i;

		nargs = arguments.length;
		if ( nargs === 0 ) {
			out = malloc();
		} else if ( nargs === 1 ) {
			out = malloc( arguments[ 0 ] );
		} else {
			out = malloc( arguments[ 0 ], arguments[ 1 ] );
		}
		if ( out !== null ) {
			// Initialize the memory...
			if ( isCmplx128Array( out ) ) {
				tmp = reinterpret128( out, 0 );
			} else if ( isCmplx64Array( out ) ) {
				tmp = reinterpret64( out, 0 );
			} else if ( isBoolArray( out ) ) {
				tmp = reinterpretBoolean( out, 0 );
			} else {
				tmp = out;
			}
			for ( i = 0; i < tmp.length; i++ ) {
				tmp[ i ] = 0.0;
			}
		}
		return out;
	}

	/**
	* Frees a typed array or typed array buffer.
	*
	* ## Notes
	*
	* -   Implicitly, we support providing non-internally allocated arrays and array buffer (e.g., "freeing" a typed array allocated in userland); however, the freed array buffer is likely to have excess capacity when compared to other members in its pool.
	*
	* @private
	* @param {(TypedArray|ArrayBuffer)} buf - typed array or array buffer to free
	* @throws {TypeError} must provide a typed array or typed array buffer
	* @returns {boolean} boolean indicating whether the typed array or array buffer was successfully freed
	*/
	function free( buf ) {
		var n;
		var p;
		var i;
		if ( isTypedArrayLike( buf ) && buf.buffer ) {
			buf = buf.buffer;
		} else if ( !isArrayBuffer( buf ) ) {
			throw new TypeError( format( 'invalid argument. Must provide a typed array or ArrayBuffer. Value: `%s`.', buf ) );
		}
		if ( buf.byteLength > 0 ) {
			n = floor( log2( buf.byteLength ) );

			// Prohibit "freeing" array buffers which would potentially allow users to circumvent high water mark limits:
			n = min( pool.length-1, n );

			// Ensure that we do not attempt to free the same buffer more than once...
			p = pool[ n ];
			for ( i = 0; i < p.length; i++ ) {
				if ( p[ i ] === buf ) {
					return false;
				}
			}
			// Add the buffer to our pool of free buffers:
			p.push( buf );
		}
		return true;
	}

	/**
	* Clears the typed array pool allowing garbage collection of previously allocated (and currently free) array buffers.
	*
	* @private
	*/
	function clear() {
		var i;
		for ( i = 0; i < pool.length; i++ ) {
			pool[ i ].length = 0;
		}
		nbytes = 0;
	}
}


// EXPORTS //

module.exports = factory;
