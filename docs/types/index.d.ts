/*
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

// TypeScript Version: 4.1

/// <reference types="@stdlib/types"/>

import { ArrayLike, RealOrComplexTypedArray, BooleanArray, NumericDataType as DataType } from '@stdlib/types/array';
import ArrayBuffer = require( '@stdlib/array-buffer' );

/**
* Typed array or null.
*/
type TypedArrayOrNull = RealOrComplexTypedArray | BooleanArray | null;

/**
* Interface defining pool options.
*/
interface Options {
	/**
	* Maximum total memory which can be allocated.
	*/
	highWaterMark?: number;
}

/**
* Pool interface.
*/
interface Pool {
	/**
	* Returns an uninitialized typed array.
	*
	* ## Notes
	*
	* -   Memory is **not** initialized.
	* -   Memory is lazily allocated.
	* -   If the function returns `null`, the function was unable to allocate a new typed array from the typed array pool (most likely due to insufficient memory).
	*
	* @param dtype - data type (default: 'float64')
	* @returns typed array or null
	*
	* @example
	* var arr = typedarraypool();
	* // returns <Float64Array>[]
	*
	* @example
	* var arr = typedarraypool( 'float32' );
	* // returns <Float32Array>[]
	*/
	( dtype?: DataType ): TypedArrayOrNull;

	/**
	* Returns an uninitialized typed array.
	*
	* ## Notes
	*
	* -   Memory is **not** initialized.
	* -   Memory is lazily allocated.
	* -   If the function returns `null`, the function was unable to allocate a new typed array from the typed array pool (most likely due to insufficient memory).
	*
	* @param arg - an array length or an array-like object
	* @param dtype - data type (default: 'float64')
	* @returns typed array or null
	*
	* @example
	* // Allocate an array of doubles:
	* var arr = typedarraypool( 5, 'float64' );
	* // e.g., returns <Float64Array>[ 0.0, 0.0, 0.0, 0.0, 0.0 ]
	*
	* arr[ 0 ] = 3.14;
	* arr[ 1 ] = 3.14;
	*
	* // ...
	*
	* // Free the allocated memory to be used in a future allocation:
	* typedarraypool.free( arr );
	*
	* @example
	* var arr1 = typedarraypool( [ 0.5, 0.5, 0.5 ] );
	* var arr2 = typedarraypool( arr1, 'float32' );
	* // returns <Float32Array>[ 0.5, 0.5, 0.5 ]
	*
	* @example
	* var arr1 = [ 0.5, 0.5, 0.5 ];
	* var arr2 = typedarraypool( arr1, 'float32' );
	* // returns <Float32Array>[ 0.5, 0.5, 0.5 ]
	*/
	( arg: number | ArrayLike<any>, dtype?: DataType ): TypedArrayOrNull;

	/**
	* Returns a zero-initialized typed array.
	*
	* ## Notes
	*
	* -   If the function returns `null`, the function was unable to allocate a new typed array from the typed array pool (most likely due to insufficient memory).
	*
	* @param dtype - data type (default: 'float64')
	* @returns typed array or null
	*
	* @example
	* var arr1 = typedarraypool.calloc();
	* // returns <Float64Array>[]
	*
	* var arr2 = typedarraypool.calloc( 'int32' );
	* // returns <Int32Array>[]
	*
	* // ...
	*
	* typedarraypool.free( arr1 );
	* typedarraypool.free( arr2 );
	*/
	calloc( dtype?: DataType ): TypedArrayOrNull;

	/**
	* Returns a zero-initialized typed array.
	*
	* ## Notes
	*
	* -   If the function returns `null`, the function was unable to allocate a new typed array from the typed array pool (most likely due to insufficient memory).
	*
	* @param length - typed array length
	* @param dtype - data type (default: 'float64')
	* @returns typed array or null
	*
	* @example
	* var arr1 = typedarraypool.calloc( 5 );
	* // returns <Float64Array>[ 0.0, 0.0, 0.0, 0.0, 0.0 ]
	*
	* var arr2 = typedarraypool.calloc( 5, 'uint8' );
	* // returns <Uint8Array>[ 0, 0, 0, 0, 0 ]
	*
	* // ...
	*
	* typedarraypool.free( arr1 );
	* typedarraypool.free( arr2 );
	*/
	calloc( length: number, dtype?: DataType ): TypedArrayOrNull;

	/**
	* Returns an uninitialized typed array.
	*
	* ## Notes
	*
	* -   Memory is **not** initialized.
	* -   Memory is lazily allocated.
	* -   If the function returns `null`, the function was unable to allocate a new typed array from the typed array pool (most likely due to insufficient memory).
	*
	* @param dtype - data type (default: 'float64')
	* @returns typed array or null
	*
	* @example
	* var arr1 = typedarraypool.malloc();
	* // returns <Float64Array>[]
	*
	* var arr2 = typedarraypool.malloc( 'int32' );
	* // returns <Int32Array>[]
	*
	* // ...
	*
	* typedarraypool.free( arr1 );
	* typedarraypool.free( arr2 );
	*/
	malloc( dtype?: DataType ): TypedArrayOrNull;

	/**
	* Returns an uninitialized typed array.
	*
	* ## Notes
	*
	* -   Memory is **not** initialized.
	* -   Memory is lazily allocated.
	* -   If the function returns `null`, the function was unable to allocate a new typed array from the typed array pool (most likely due to insufficient memory).
	*
	* @param arg - an array length or an array-like object
	* @param dtype - data type (default: 'float64')
	* @returns typed array or null
	*
	* @example
	* var arr1 = typedarraypool.malloc( 5 );
	* // returns <Float64Array>
	*
	* var arr2 = typedarraypool.malloc( 5, 'uint8' );
	* // returns <Uint8Array>
	*
	* // ...
	*
	* typedarraypool.free( arr1 );
	* typedarraypool.free( arr2 );
	*
	* @example
	* var arr1 = typedarraypool.malloc( [ 5.0, -3.0, 2.0 ] );
	* // returns <Float64Array>[ 5.0, -3.0, 2.0 ]
	*
	* var arr2 = typedarraypool.malloc( arr1 );
	* // returns <Float64Array>[ 5.0, -3.0, 2.0 ]
	*
	* var arr3 = typedarraypool.malloc( arr1, 'int32' );
	* // returns <Int32Array>[ 5, -3, 2 ]
	*
	* // ...
	*
	* typedarraypool.free( arr1 );
	* typedarraypool.free( arr2 );
	* typedarraypool.free( arr3 );
	*
	* @example
	* var arr1 = typedarraypool.malloc( [ 0.5, 0.5, 0.5 ] );
	* // returns <Float64Array>[ 0.5, 0.5, 0.5 ]
	*
	* var arr2 = typedarraypool.malloc( [ 0.5, 0.5, 0.5 ], 'float32' );
	* // returns <Float32Array>[ 0.5, 0.5, 0.5 ]
	*
	* // ...
	*
	* typedarraypool.free( arr1 );
	* typedarraypool.free( arr2 );
	*/
	malloc( arg: number | ArrayLike<any>, dtype?: DataType ): TypedArrayOrNull;

	/**
	* Frees a typed array or typed array buffer for use in a future allocation.
	*
	* @param buf - typed array or typed array buffer to free
	*
	* @example
	* var arr = typedarraypool( 10, 'float64' );
	* // returns <Float64Array>
	*
	* // ...
	*
	* // Free the allocated typed array for use in a future allocation:
	* typedarraypool.free( arr );
	*
	* // Create another typed array:
	* arr = typedarraypool( 10, 'float64' );
	* // returns <Float64Array>
	*
	* // ...
	*
	* // Free the allocated typed array buffer for use in a future allocation:
	* typedarraypool.free( arr.buffer );
	*/
	free( buf: RealOrComplexTypedArray | BooleanArray | ArrayBuffer ): void;

	/**
	* Clears the typed array pool allowing garbage collection of previously allocated (and currently free) array buffers.
	*
	* @example
	* var arr = typedarraypool( 10, 'float64' );
	* // returns <Float64Array>
	*
	* // ...
	*
	* typedarraypool.free( arr );
	*
	* // ...
	*
	* // Clear all freed buffers:
	* typedarraypool.clear();
	*/
	clear(): void;

	/**
	* Read-only property returning the pool's high water mark.
	*
	* ## Notes
	*
	* -   Once a high water mark is reached, typed array allocation fails.
	*
	* @example
	* var limit = typedarraypool.highWaterMark;
	* // returns <number>
	*/
	readonly highWaterMark: number;

	/**
	* Read-only property returning the total number of allocated bytes.
	*
	* @example
	* var arr = typedarraypool( 5, 'float64' );
	*
	* var nbytes = typedarraypool.nbytes;
	* // returns <number>
	*/
	readonly nbytes: number;

	/**
	* Creates a typed array pool.
	*
	* @param options - pool options
	* @param options.highWaterMark - maximum total memory which can be allocated
	* @throws must provide valid options
	* @returns allocator
	*
	* @example
	* var allocator = typedarraypool.factory();
	*
	* // Allocate an array of doubles:
	* var arr = allocator( 5, 'float64' );
	* // returns <Float64Array>[ 0.0, 0.0, 0.0, 0.0, 0.0 ]
	*
	* arr[ 0 ] = 3.14;
	* arr[ 1 ] = 3.14;
	*
	* // ...
	*
	* // Free the allocated memory to be used in a future allocation:
	* allocator.free( arr );
	*/
	factory( options?: Options ): Pool;
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
* @param arg - an array length or an array-like object
* @param dtype - data type (default: 'float64')
* @returns typed array or null
*
* @example
* // Allocate an array of doubles:
* var arr = typedarraypool( 5, 'float64' );
* // e.g., returns <Float64Array>[ 0.0, 0.0, 0.0, 0.0, 0.0 ]
*
* arr[ 0 ] = 3.14;
* arr[ 1 ] = 3.14;
*
* // ...
*
* // Free the allocated memory to be used in a future allocation:
* typedarraypool.free( arr );
*/
declare var typedarraypool: Pool;


// EXPORTS //

export = typedarraypool;
