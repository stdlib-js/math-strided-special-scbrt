"use strict";var s=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var v=s(function(z,n){
var y=require('@stdlib/strided-base-smap/dist'),j=require('@stdlib/math-base-special-cbrtf/dist');function x(e,r,a,t,i){return y(e,r,a,t,i,j)}n.exports=x
});var q=s(function(A,c){
var l=require('@stdlib/strided-base-smap/dist').ndarray,R=require('@stdlib/math-base-special-cbrtf/dist');function _(e,r,a,t,i,d,m){return l(e,r,a,t,i,d,m,R)}c.exports=_
});var f=s(function(B,p){
var E=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),o=v(),O=q();E(o,"ndarray",O);p.exports=o
});var g=require("path").join,h=require('@stdlib/utils-try-require/dist'),k=f(),u,b=h(g(__dirname,"./native.js"));b instanceof Error?u=k:u=b;module.exports=u;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
