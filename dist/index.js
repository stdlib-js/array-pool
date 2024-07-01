"use strict";var s=function(n,i){return function(){return i||n((i={exports:{}}).exports,i),i.exports}};var M=s(function(Cr,w){"use strict";function z(){return{highWaterMark:9007199254740992}}w.exports=z});var T=s(function(Or,E){"use strict";var G=require("@stdlib/assert-is-plain-object"),H=require("@stdlib/assert-has-own-property"),J=require("@stdlib/assert-is-nonnegative-integer").isPrimitive,k=require("@stdlib/string-format");function K(n,i){return G(i)?H(i,"highWaterMark")&&(n.highWaterMark=i.highWaterMark,!J(n.highWaterMark))?new TypeError(k("invalid option. `%s` option must be a nonnegative integer. Option: `%s`.","highWaterMark",n.highWaterMark)):null:new TypeError(k("invalid argument. Options argument must be an object. Value: `%s`.",i))}E.exports=K});var B=s(function(Pr,W){"use strict";function Q(n){var i,u;for(i=[],u=0;u<n+1;u++)i.push([]);return i}W.exports=Q});var b=s(function(Lr,X){X.exports={bool:1,float64:8,float32:4,int16:2,int32:4,int8:1,uint16:2,uint32:4,uint8:1,uint8c:1,complex64:8,complex128:16}});var q=s(function(Rr,D){"use strict";var Z=require("@stdlib/assert-is-string").isPrimitive,$=require("@stdlib/assert-is-nonnegative-integer").isPrimitive,rr=require("@stdlib/assert-is-collection"),er=require("@stdlib/assert-is-typed-array-like"),ar=require("@stdlib/assert-is-arraybuffer"),tr=require("@stdlib/array-base-assert-is-complex-floating-point-data-type"),ir=require("@stdlib/assert-is-complex64array"),nr=require("@stdlib/assert-is-complex128array"),ur=require("@stdlib/assert-is-booleanarray"),g=require("@stdlib/utils-define-nonenumerable-read-only-property"),or=require("@stdlib/utils-define-nonenumerable-read-only-accessor"),p=require("@stdlib/array-typed-ctors"),C=require("@stdlib/strided-base-reinterpret-complex64"),O=require("@stdlib/strided-base-reinterpret-complex128"),P=require("@stdlib/strided-base-reinterpret-boolean"),lr=require("@stdlib/array-base-resolve-getter"),sr=require("@stdlib/array-base-resolve-setter"),vr=require("@stdlib/array-defaults"),y=require("@stdlib/string-format"),fr=require("@stdlib/array-buffer"),gr=require("@stdlib/math-base-special-ceil"),cr=require("@stdlib/math-base-special-floor"),pr=require("@stdlib/math-base-special-ceil2"),m=require("@stdlib/math-base-special-log2"),hr=require("@stdlib/math-base-special-min"),yr=M(),mr=T(),qr=B(),dr=b(),Ar=vr.get("dtypes.default"),xr=p("complex64"),wr=p("complex128"),Mr=p("bool");function L(n){return n instanceof xr}function R(n){return n instanceof wr}function N(n){return n instanceof Mr}function kr(n){var i,u,v,h;if(v=yr(),arguments.length&&(h=mr(v,n),h))throw h;return u=qr(gr(m(v.highWaterMark))),i=0,g(o,"malloc",o),g(o,"calloc",Y),g(o,"free",I),g(o,"clear",U),g(o,"highWaterMark",v.highWaterMark),or(o,"nbytes",j),o;function j(){return i}function F(r){var e,t;return t=m(r),t<u.length&&u[t].length?u[t].pop():i+r>v.highWaterMark?null:(e=new fr(r),i+=r,e)}function d(r,e,t){var a;return e===0?new r(0):(a=F(pr(e)*dr[t]),a===null?a:new r(a,0,e))}function o(){var r,e,t,a,l,A,x,c,f;if(r=arguments.length,r&&Z(arguments[r-1])?(r-=1,e=arguments[r]):e=Ar,t=p(e),t===null)throw new TypeError(y("invalid argument. Must provide a recognized data type. Value: `%s`.",e));if(r<=0)return new t(0);if($(arguments[0]))return d(t,arguments[0],e);if(rr(arguments[0])){if(a=arguments[0],c=a.length,nr(a)?a=O(a,0):ir(a)?a=C(a,0):ur(a)?a=P(a,0):tr(e)&&(c/=2),l=d(t,c,e),l===null)return l;if(R(l)||L(l)||N(l))return l.set(a),l;for(x=lr(a),A=sr(l),f=0;f<c;f++)A(l,f,x(a,f));return l}throw new TypeError(y("invalid argument. First argument must be either an array length or an array-like object. Value: `%s`.",arguments[0]))}function Y(){var r,e,t,a;if(r=arguments.length,r===0?e=o():r===1?e=o(arguments[0]):e=o(arguments[0],arguments[1]),e!==null)for(R(e)?t=O(e,0):L(e)?t=C(e,0):N(e)?t=P(e,0):t=e,a=0;a<t.length;a++)t[a]=0;return e}function I(r){var e,t,a;if(er(r)&&r.buffer)r=r.buffer;else if(!ar(r))throw new TypeError(y("invalid argument. Must provide a typed array or ArrayBuffer. Value: `%s`.",r));if(r.byteLength>0){for(e=cr(m(r.byteLength)),e=hr(u.length-1,e),t=u[e],a=0;a<t.length;a++)if(t[a]===r)return!1;t.push(r)}return!0}function U(){var r;for(r=0;r<u.length;r++)u[r].length=0;i=0}}D.exports=kr});var V=s(function(Nr,S){"use strict";var Er=q(),Tr=Er();S.exports=Tr});var Wr=require("@stdlib/utils-define-nonenumerable-read-only-property"),_=V(),Br=q();Wr(_,"factory",Br);module.exports=_;
/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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
//# sourceMappingURL=index.js.map
