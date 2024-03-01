// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import{isPrimitive as t}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@v0.2.1-esm/index.mjs";import{isPrimitive as r}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@v0.2.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-collection@v0.2.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-typed-array-like@v0.2.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-arraybuffer@v0.2.1-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-complex64array@v0.2.1-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-complex128array@v0.2.1-esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@v0.2.2-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/array-typed-ctors@v0.2.1-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-reinterpret-complex64@v0.2.0-esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-reinterpret-complex128@v0.2.1-esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-resolve-getter@v0.2.1-esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-resolve-setter@v0.2.1-esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/array-defaults@v0.2.1-esm/index.mjs";import c from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.1-esm/index.mjs";import v from"https://cdn.jsdelivr.net/gh/stdlib-js/array-buffer@v0.2.1-esm/index.mjs";import g from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-ceil@v0.2.1-esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@v0.2.1-esm/index.mjs";import b from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-ceil2@v0.2.1-esm/index.mjs";import x from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-log2@v0.2.1-esm/index.mjs";import y from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-min@v0.2.1-esm/index.mjs";import w from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.2.1-esm/index.mjs";import k from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.2.1-esm/index.mjs";var M={float64:8,float32:4,int16:2,int32:4,int8:1,uint16:2,uint32:4,uint8:1,uint8c:1,complex64:8,complex128:16},W=j.get("dtypes.default"),E=d("complex64"),H=d("complex128");function T(e){return e instanceof E}function L(e){return e instanceof H}function P(j){var E,H,P,V;if(P={highWaterMark:9007199254740992},arguments.length&&(V=function(e,t){return w(t)?k(t,"highWaterMark")&&(e.highWaterMark=t.highWaterMark,!r(e.highWaterMark))?new TypeError(c("01H2t","highWaterMark",e.highWaterMark)):null:new TypeError(c("01H2V",t))}(P,j),V))throw V;return H=function(e){var t,r;for(t=[],r=0;r<e+1;r++)t.push([]);return t}(g(x(P.highWaterMark))),E=0,e(q,"malloc",q),e(q,"calloc",(function(){var e,t,r,s;e=arguments.length,t=0===e?q():1===e?q(arguments[0]):q(arguments[0],arguments[1]);if(null!==t)for(r=L(t)?h(t,0):T(t)?a(t,0):t,s=0;s<r.length;s++)r[s]=0;return t})),e(q,"free",(function(e){var t,r,s;if(i(e)&&e.buffer)e=e.buffer;else if(!n(e))throw new TypeError(c("01H2s",e));if(e.byteLength>0){for(t=u(x(e.byteLength)),t=y(H.length-1,t),r=H[t],s=0;s<r.length;s++)if(r[s]===e)return!1;r.push(e)}return!0})),e(q,"clear",(function(){var e;for(e=0;e<H.length;e++)H[e].length=0;E=0})),e(q,"highWaterMark",P.highWaterMark),l(q,"nbytes",(function(){return E})),q;function Y(e,t,r){var s;return 0===t?new e(0):null===(s=function(e){var t,r;return(r=x(e))<H.length&&H[r].length?H[r].pop():E+e>P.highWaterMark?null:(t=new v(e),E+=e,t)}(b(t)*M[r]))?s:new e(s,0,t)}function q(){var e,i,n,l,j,v,g,u,b;if(i=(e=arguments.length)&&t(arguments[e-1])?arguments[e-=1]:W,null===(n=d(i)))throw new TypeError(c("01H2Y",i));if(e<=0)return new n(0);if(r(arguments[0]))return Y(n,arguments[0],i);if(s(arguments[0])){if(u=(l=arguments[0]).length,o(l)?l=h(l,0):m(l)?l=a(l,0):/^complex/.test(i)&&(u/=2),null===(j=Y(n,u,i)))return j;if(L(j)||T(j))return j.set(l),j;for(g=p(l),v=f(j),b=0;b<u;b++)v(j,b,g(l,b));return j}throw new TypeError(c("01H2r",arguments[0]))}}var V=P();e(V,"factory",P);export{V as default,P as factory};
//# sourceMappingURL=index.mjs.map
