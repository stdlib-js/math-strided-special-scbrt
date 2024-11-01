// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function i(r,e,t){var i=!1,a=e-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+n(a):n(a)+r,i&&(r="-"+r)),r}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function c(r){var e,n,c;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,c=parseInt(n,10),!isFinite(c)){if(!t(n))throw new Error("invalid integer. Value: "+n);c=0}return c<0&&("u"===r.specifier||10!==e)&&(c=4294967295+c+1),c<0?(n=(-c).toString(e),r.precision&&(n=i(n,r.precision,r.padRight)),n="-"+n):(n=c.toString(e),c||r.precision?r.precision&&(n=i(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===o.call(r.specifier)?o.call(n):a.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var f=Math.abs,u=String.prototype.toLowerCase,l=String.prototype.toUpperCase,p=String.prototype.replace,s=/e\+(\d)$/,y=/e-(\d)$/,d=/^(\d+)$/,g=/^(\d+)e/,h=/\.0$/,w=/\.0*e/,b=/(\..*[^0])0*e/;function v(r){var e,n,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);i=r.arg}switch(r.specifier){case"e":case"E":n=i.toExponential(r.precision);break;case"f":case"F":n=i.toFixed(r.precision);break;case"g":case"G":f(i)<1e-4?((e=r.precision)>0&&(e-=1),n=i.toExponential(e)):n=i.toPrecision(r.precision),r.alternate||(n=p.call(n,b,"$1e"),n=p.call(n,w,"e"),n=p.call(n,h,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=p.call(n,s,"e+0$1"),n=p.call(n,y,"e-0$1"),r.alternate&&(n=p.call(n,d,"$1."),n=p.call(n,g,"$1.e")),i>=0&&r.sign&&(n=r.sign+n),n=r.specifier===l.call(r.specifier)?l.call(n):u.call(n)}function m(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}var A=String.fromCharCode,_=Array.isArray;function E(r){return r!=r}function F(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function U(r){var e,t,n,a,o,f,u,l,p,s,y,d,g;if(!_(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",u=1,l=0;l<r.length;l++)if("string"==typeof(n=r[l]))f+=n;else{if(e=void 0!==n.precision,!(n=F(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+n+"`.");for(n.mapping&&(u=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(a=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,E(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[u],10),u+=1,E(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=e?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!E(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=E(o)?String(n.arg):A(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=v(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(s=n.arg,y=n.width,d=n.padRight,g=void 0,(g=y-s.length)<0?s:s=d?s+m(g):m(g)+s)),f+=n.arg||"",u+=1}return f}var S=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function I(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function x(r){var e,t,n,i;for(t=[],i=0,n=S.exec(r);n;)(e=r.slice(i,S.lastIndex-n[0].length)).length&&t.push(e),t.push(I(n)),i=S.lastIndex,n=S.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function j(r){var e,t;if("string"!=typeof r)throw new TypeError(j("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[x(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return U.apply(null,e)}var k=Object.prototype,T=k.toString,O=k.__defineGetter__,V=k.__defineSetter__,$=k.__lookupGetter__,G=k.__lookupSetter__,N=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===T.call(r))throw new TypeError(j("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===T.call(t))throw new TypeError(j("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&($.call(r,e)||G.call(r,e)?(n=r.__proto__,r.__proto__=k,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&O&&O.call(r,e,t.get),o&&V&&V.call(r,e,t.set),r};function H(r,e,t){N(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function W(r,e){return e>0?0:(1-r)*e}function C(r,e,t,n,i,a,o,c){var f,u,l;if(r<=0)return i;for(f=n,u=o,l=0;l<r;l++)i[u]=c(e[f]),f+=t,u+=a;return i}function L(r,e,t,n,i,a){return C(r,e,t,W(r,t),n,i,W(r,i),a)}H(L,"ndarray",C);var P,R="function"==typeof Math.fround?Math.fround:null,Z="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),M=Object.prototype.toString,X=Object.prototype.hasOwnProperty,Y="function"==typeof Symbol?Symbol:void 0,z="function"==typeof Y?Y.toStringTag:"",q=Z&&"symbol"==typeof Symbol.toStringTag?function(r){var e,t,n,i,a;if(null==r)return M.call(r);t=r[z],a=z,e=null!=(i=r)&&X.call(i,a);try{r[z]=void 0}catch(e){return M.call(r)}return n=M.call(r),e?r[z]=t:delete r[z],n}:function(r){return M.call(r)},B="function"==typeof Float32Array,D=Number.POSITIVE_INFINITY,J="function"==typeof Float32Array?Float32Array:null,K="function"==typeof Float32Array?Float32Array:void 0;P=function(){var r,e,t;if("function"!=typeof J)return!1;try{e=new J([1,3.14,-3.14,5e40]),t=e,r=(B&&t instanceof Float32Array||"[object Float32Array]"===q(t))&&1===e[0]&&3.140000104904175===e[1]&&-3.140000104904175===e[2]&&e[3]===D}catch(e){r=!1}return r}()?K:function(){throw new Error("not implemented")};var Q,rr=new P(1),er="function"==typeof R?R:function(r){return rr[0]=r,rr[0]},tr=2147483648,nr=2147483647,ir="function"==typeof Uint32Array,ar="function"==typeof Uint32Array?Uint32Array:null,or="function"==typeof Uint32Array?Uint32Array:void 0;Q=function(){var r,e,t;if("function"!=typeof ar)return!1;try{e=new ar(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(ir&&t instanceof Uint32Array||"[object Uint32Array]"===q(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?or:function(){throw new Error("not implemented")};var cr,fr=Q,ur="function"==typeof Float64Array,lr="function"==typeof Float64Array?Float64Array:null,pr="function"==typeof Float64Array?Float64Array:void 0;cr=function(){var r,e,t;if("function"!=typeof lr)return!1;try{e=new lr([1,3.14,-3.14,NaN]),t=e,r=(ur&&t instanceof Float64Array||"[object Float64Array]"===q(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?pr:function(){throw new Error("not implemented")};var sr,yr=cr,dr="function"==typeof Uint8Array,gr="function"==typeof Uint8Array?Uint8Array:null,hr="function"==typeof Uint8Array?Uint8Array:void 0;sr=function(){var r,e,t;if("function"!=typeof gr)return!1;try{e=new gr(e=[1,3.14,-3.14,256,257]),t=e,r=(dr&&t instanceof Uint8Array||"[object Uint8Array]"===q(t))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?hr:function(){throw new Error("not implemented")};var wr,br=sr,vr="function"==typeof Uint16Array,mr="function"==typeof Uint16Array?Uint16Array:null,Ar="function"==typeof Uint16Array?Uint16Array:void 0;wr=function(){var r,e,t;if("function"!=typeof mr)return!1;try{e=new mr(e=[1,3.14,-3.14,65536,65537]),t=e,r=(vr&&t instanceof Uint16Array||"[object Uint16Array]"===q(t))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Ar:function(){throw new Error("not implemented")};var _r,Er={uint16:wr,uint8:br};(_r=new Er.uint16(1))[0]=4660;var Fr=52===new Er.uint8(_r.buffer)[0],Ur=!0===Fr?1:0,Sr=new yr(1),Ir=new fr(Sr.buffer);function xr(r){return Sr[0]=r,Ir[Ur]}var jr,kr,Tr=!0===Fr?1:0,Or=new yr(1),Vr=new fr(Or.buffer),$r=Number.NEGATIVE_INFINITY;!0===Fr?(jr=1,kr=0):(jr=0,kr=1);var Gr,Nr,Hr={HIGH:jr,LOW:kr},Wr=new yr(1),Cr=new fr(Wr.buffer),Lr=Hr.HIGH,Pr=Hr.LOW;function Rr(r,e){return Cr[Lr]=r,Cr[Pr]=e,Wr[0]}!0===Fr?(Gr=1,Nr=0):(Gr=0,Nr=1);var Zr={HIGH:Gr,LOW:Nr},Mr=new yr(1),Xr=new fr(Mr.buffer),Yr=Zr.HIGH,zr=Zr.LOW;function qr(r,e,t,n){return Mr[0]=r,e[n]=Xr[Yr],e[n+t]=Xr[zr],e}function Br(r){return qr(r,[0,0],1,0)}H(Br,"assign",qr);var Dr=4294967295,Jr=3221225472,Kr=0x40000000000000,Qr=2147483648,re=1,ee=715094163,te=696219795,ne=xr(22250738585072014e-324),ie=[0,0];function ae(r){var e,t,n,i;return 0===r||function(r){return r!=r}(r)||function(r){return r===D||r===$r}(r)?r:(e=((t=xr(r)>>>0)&tr)>>>0,i=(t&=nr)<ne?Rr(e|(((xr(i=Kr*r)&nr)>>>0)/3>>>0)+te>>>0,0):function(r,e){return Or[0]=r,Vr[Tr]=e>>>0,Or[0]}(i=0,e|(t/3>>>0)+ee>>>0),i*=function(r){return 0===r?1.87595182427177:1.87595182427177+r*(r*(1.6214297201053545+r*(.14599619288661245*r-.758397934778766))-1.8849797954337717)}(n=i*i*(i/r)),Br.assign(i,ie,1,0),ie[1]&Qr?(ie[0]+=re,ie[1]&=~Qr):ie[1]|=Qr,i=Rr(ie[0]&Dr,ie[1]&Jr),i+=i*(n=((n=r/(i*i))-i)/(i+i+n)))}function oe(r){return er(ae(er(r)))}function ce(r,e,t,n,i){return L(r,e,t,n,i,oe)}return H(ce,"ndarray",(function(r,e,t,n,i,a,o){return C(r,e,t,n,i,a,o,oe)})),ce},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).scbrt=e();
//# sourceMappingURL=index.js.map
