"use strict";var l=function(n,i){return function(){return i||n((i={exports:{}}).exports,i),i.exports}};var k=l(function(kr,M){
function D(){return{highWaterMark:9007199254740992}}M.exports=D
});var E=l(function(Ar,W){
var G=require('@stdlib/assert-is-plain-object/dist'),H=require('@stdlib/assert-has-own-property/dist'),J=require('@stdlib/assert-is-nonnegative-integer/dist').isPrimitive,A=require('@stdlib/error-tools-fmtprodmsg/dist');function K(n,i){return G(i)?H(i,"highWaterMark")&&(n.highWaterMark=i.highWaterMark,!J(n.highWaterMark))?new TypeError(A('01H2t',"highWaterMark",n.highWaterMark)):null:new TypeError(A('01H2V',i));}W.exports=K
});var C=l(function(Wr,T){
function Q(n){var i,u;for(i=[],u=0;u<n+1;u++)i.push([]);return i}T.exports=Q
});var O=l(function(Er,U){U.exports={float64:8,float32:4,int16:2,int32:4,int8:1,uint16:2,uint32:4,uint8:1,uint8c:1,complex64:8,complex128:16}});var q=l(function(Tr,R){
var X=require('@stdlib/assert-is-string/dist').isPrimitive,Z=require('@stdlib/assert-is-nonnegative-integer/dist').isPrimitive,$=require('@stdlib/assert-is-collection/dist'),rr=require('@stdlib/assert-is-typed-array-like/dist'),er=require('@stdlib/assert-is-arraybuffer/dist'),ar=require('@stdlib/assert-is-complex64array/dist'),tr=require('@stdlib/assert-is-complex128array/dist'),g=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),ir=require('@stdlib/utils-define-nonenumerable-read-only-accessor/dist'),y=require('@stdlib/array-typed-ctors/dist'),b=require('@stdlib/strided-base-reinterpret-complex64/dist'),P=require('@stdlib/strided-base-reinterpret-complex128/dist'),B=require('@stdlib/array-base-accessors/dist'),nr=require('@stdlib/array-dtype/dist'),m=require('@stdlib/error-tools-fmtprodmsg/dist'),ur=require('@stdlib/array-buffer/dist'),sr=require('@stdlib/math-base-special-ceil/dist'),or=require('@stdlib/math-base-special-floor/dist'),lr=require('@stdlib/math-base-special-ceil2/dist'),p=require('@stdlib/math-base-special-log2/dist'),vr=require('@stdlib/math-base-special-min/dist'),fr=k(),gr=E(),cr=C(),hr=O(),mr=y("complex64"),pr=y("complex128");function N(n){return n instanceof mr}function L(n){return n instanceof pr}function yr(n){var i,u,v,h;if(v=fr(),arguments.length&&(h=gr(v,n),h))throw h;return u=cr(sr(p(v.highWaterMark))),i=0,g(s,"malloc",s),g(s,"calloc",z),g(s,"free",F),g(s,"clear",Y),g(s,"highWaterMark",v.highWaterMark),ir(s,"nbytes",S),s;function S(){return i}function _(r){var e,t;return t=p(r),t<u.length&&u[t].length?u[t].pop():i+r>v.highWaterMark?null:(e=new ur(r),i+=r,e)}function d(r,e,t){var a;return e===0?new r(0):(a=_(lr(e)*hr[t]),a===null?a:new r(a,0,e))}function s(){var r,e,t,a,o,x,w,c,f;if(r=arguments.length,r&&X(arguments[r-1])?(r-=1,e=arguments[r]):e="float64",t=y(e),t===null)throw new TypeError(m('01H2Y',e));if(r<=0)return new t(0);if(Z(arguments[0]))return d(t,arguments[0],e);if($(arguments[0])){if(a=arguments[0],c=a.length,tr(a)?a=P(a,0):ar(a)?a=b(a,0):/^complex/.test(e)&&(c/=2),o=d(t,c,e),o===null)return o;if(L(o)||N(o))return o.set(a),o;for(w=B(nr(a)).accessors[0],x=B(e).accessors[1],f=0;f<c;f++)x(o,f,w(a,f));return o}throw new TypeError(m('01H2r',arguments[0]))}function z(){var r,e,t,a;if(r=arguments.length,r===0?e=s():r===1?e=s(arguments[0]):e=s(arguments[0],arguments[1]),e!==null)for(L(e)?t=P(e,0):N(e)?t=b(e,0):t=e,a=0;a<t.length;a++)t[a]=0;return e}function F(r){var e,t,a;if(rr(r)&&r.buffer)r=r.buffer;else if(!er(r))throw new TypeError(m('01H2s',r));if(r.byteLength>0){for(e=or(p(r.byteLength)),e=vr(u.length-1,e),t=u[e],a=0;a<t.length;a++)if(t[a]===r)return!1;t.push(r)}return!0}function Y(){var r;for(r=0;r<u.length;r++)u[r].length=0;i=0}}R.exports=yr
});var j=l(function(Cr,V){
var qr=q(),dr=qr();V.exports=dr
});var xr=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),I=j(),wr=q();xr(I,"factory",wr);module.exports=I;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
