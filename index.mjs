// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import{isPrimitive as t}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@esm/index.mjs";import{isPrimitive as r}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-collection@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-typed-array-like@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-arraybuffer@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-complex64array@esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-complex128array@esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/array-typed-ctors@esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-reinterpret-complex64@esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-reinterpret-complex128@esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-arraylike2object@esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-copy@esm/index.mjs";import c from"https://cdn.jsdelivr.net/gh/stdlib-js/array-buffer@esm/index.mjs";import g from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-ceil@esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@esm/index.mjs";import b from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-ceil2@esm/index.mjs";import v from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-log2@esm/index.mjs";import x from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-min@esm/index.mjs";import y from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@esm/index.mjs";import k from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@esm/index.mjs";var w={highWaterMark:9007199254740992};function M(e,t){return y(t)?k(t,"highWaterMark")&&(e.highWaterMark=t.highWaterMark,!r(e.highWaterMark))?new TypeError(f("00d35","highWaterMark",e.highWaterMark)):null:new TypeError(f("00d2h",t))}function W(e){var t,r;for(t=[],r=0;r<e+1;r++)t.push([]);return t}var E={float64:8,float32:4,int16:2,int32:4,int8:1,uint16:2,uint32:4,uint8:1,uint8c:1,complex64:8,complex128:16},T=d("complex64"),L=d("complex128");function A(e){return e instanceof T}function B(e){return e instanceof L}function P(y){var k,T,L,P;if(L=j(w),arguments.length&&(P=M(L,y)))throw P;return T=W(g(v(L.highWaterMark))),k=0,e(C,"malloc",C),e(C,"calloc",D),e(C,"free",F),e(C,"clear",G),e(C,"highWaterMark",L.highWaterMark),l(C,"nbytes",V),C;function V(){return k}function q(e){var t,r;return(r=v(e))<T.length&&T[r].length?T[r].pop():k+e>L.highWaterMark?null:(t=new c(e),k+=e,t)}function z(e,t,r){var s;return 0===t?new e(0):null===(s=q(b(t)*E[r]))?s:new e(s,0,t)}function C(){var e,i,n,l,j,c,g,u,b;if(i=(e=arguments.length)&&t(arguments[e-1])?arguments[e-=1]:"float64",null===(n=d(i)))throw new TypeError(f("00d2k",i));if(e<=0)return new n(0);if(r(arguments[0]))return z(n,arguments[0],i);if(s(arguments[0])){if(u=(l=arguments[0]).length,m(l)?l=h(l,0):o(l)?l=a(l,0):/^complex/.test(i)&&(u/=2),null===(j=z(n,u,i)))return j;if(B(j)||A(j))return j.set(l),j;for(g=p(l).getter,c=p(j).setter,b=0;b<u;b++)c(j,b,g(l,b));return j}throw new TypeError(f("00d33",arguments[0]))}function D(){var e,t,r,s;if(null!==(t=0===(e=arguments.length)?C():1===e?C(arguments[0]):C(arguments[0],arguments[1])))for(r=B(t)?h(t,0):A(t)?a(t,0):t,s=0;s<r.length;s++)r[s]=0;return t}function F(e){var t,r,s;if(i(e)&&e.buffer)e=e.buffer;else if(!n(e))throw new TypeError(f("invalid argument. Must provide a typed array or ArrayBuffer. Value: `%s`.",e));if(e.byteLength>0){for(t=u(v(e.byteLength)),t=x(T.length-1,t),r=T[t],s=0;s<r.length;s++)if(r[s]===e)return!1;r.push(e)}return!0}function G(){var e;for(e=0;e<T.length;e++)T[e].length=0;k=0}}var V=P();e(V,"factory",P);export{V as default,P as factory};
//# sourceMappingURL=index.mjs.map
