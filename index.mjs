// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import{isPrimitive as t}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@v0.2.0-esm/index.mjs";import{isPrimitive as r}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-collection@v0.2.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-typed-array-like@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-arraybuffer@esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-complex64array@esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-complex128array@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/array-typed-ctors@esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-reinterpret-complex64@esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-reinterpret-complex128@esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-resolve-getter@esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-resolve-setter@esm/index.mjs";import c from"https://cdn.jsdelivr.net/gh/stdlib-js/array-defaults@esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@esm/index.mjs";import g from"https://cdn.jsdelivr.net/gh/stdlib-js/array-buffer@esm/index.mjs";import b from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-ceil@esm/index.mjs";import v from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@esm/index.mjs";import x from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-ceil2@esm/index.mjs";import y from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-log2@esm/index.mjs";import w from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-min@esm/index.mjs";import k from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@esm/index.mjs";import M from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@esm/index.mjs";function W(e,t){return k(t)?M(t,"highWaterMark")&&(e.highWaterMark=t.highWaterMark,!r(e.highWaterMark))?new TypeError(u("invalid option. `%s` option must be a nonnegative integer. Option: `%s`.","highWaterMark",e.highWaterMark)):null:new TypeError(u("invalid argument. Options argument must be an object. Value: `%s`.",t))}function E(e){var t,r;for(t=[],r=0;r<e+1;r++)t.push([]);return t}var T={float64:8,float32:4,int16:2,int32:4,int8:1,uint16:2,uint32:4,uint8:1,uint8c:1,complex64:8,complex128:16},V=c.get("dtypes.default"),L=d("complex64"),O=d("complex128");function z(e){return e instanceof L}function A(e){return e instanceof O}function B(e){var c,k,M,L;if(M={highWaterMark:9007199254740992},arguments.length&&(L=W(M,e)))throw L;return k=E(b(y(M.highWaterMark))),c=0,o(P,"malloc",P),o(P,"calloc",q),o(P,"free",C),o(P,"clear",D),o(P,"highWaterMark",M.highWaterMark),l(P,"nbytes",O),P;function O(){return c}function B(e){var t,r;return(r=y(e))<k.length&&k[r].length?k[r].pop():c+e>M.highWaterMark?null:(t=new g(e),c+=e,t)}function F(e,t,r){var s;return 0===t?new e(0):null===(s=B(x(t)*T[r]))?s:new e(s,0,t)}function P(){var e,n,i,o,l,c,g,b,v;if(n=(e=arguments.length)&&t(arguments[e-1])?arguments[e-=1]:V,null===(i=d(n)))throw new TypeError(u("invalid argument. Must provide a recognized data type. Value: `%s`.",n));if(e<=0)return new i(0);if(r(arguments[0]))return F(i,arguments[0],n);if(s(arguments[0])){if(b=(o=arguments[0]).length,m(o)?o=p(o,0):a(o)?o=h(o,0):/^complex/.test(n)&&(b/=2),null===(l=F(i,b,n)))return l;if(A(l)||z(l))return l.set(o),l;for(g=f(o),c=j(l),v=0;v<b;v++)c(l,v,g(o,v));return l}throw new TypeError(u("invalid argument. First argument must be either an array length or an array-like object. Value: `%s`.",arguments[0]))}function q(){var e,t,r,s;if(null!==(t=0===(e=arguments.length)?P():1===e?P(arguments[0]):P(arguments[0],arguments[1])))for(r=A(t)?p(t,0):z(t)?h(t,0):t,s=0;s<r.length;s++)r[s]=0;return t}function C(e){var t,r,s;if(n(e)&&e.buffer)e=e.buffer;else if(!i(e))throw new TypeError(u("invalid argument. Must provide a typed array or ArrayBuffer. Value: `%s`.",e));if(e.byteLength>0){for(t=v(y(e.byteLength)),t=w(k.length-1,t),r=k[t],s=0;s<r.length;s++)if(r[s]===e)return!1;r.push(e)}return!0}function D(){var e;for(e=0;e<k.length;e++)k[e].length=0;c=0}}var F=B();e(F,"factory",B);export{F as default,B as factory};
//# sourceMappingURL=index.mjs.map