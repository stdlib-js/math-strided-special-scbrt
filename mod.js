// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=Object.defineProperty;function n(r){return"number"==typeof r}function e(r){var t,n="";for(t=0;t<r;t++)n+="0";return n}function o(r,t,n){var o=!1,i=t-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(o=!0,r=r.substr(1)),r=n?r+e(i):e(i)+r,o&&(r="-"+r)),r}var i=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function c(r){var t,e,c;switch(r.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(e=r.arg,c=parseInt(e,10),!isFinite(c)){if(!n(e))throw new Error("invalid integer. Value: "+e);c=0}return c<0&&("u"===r.specifier||10!==t)&&(c=4294967295+c+1),c<0?(e=(-c).toString(t),r.precision&&(e=o(e,r.precision,r.padRight)),e="-"+e):(e=c.toString(t),c||r.precision?r.precision&&(e=o(e,r.precision,r.padRight)):e="",r.sign&&(e=r.sign+e)),16===t&&(r.alternate&&(e="0x"+e),e=r.specifier===a.call(r.specifier)?a.call(e):i.call(e)),8===t&&r.alternate&&"0"!==e.charAt(0)&&(e="0"+e),e}function u(r){return"string"==typeof r}var f=Math.abs,l=String.prototype.toLowerCase,y=String.prototype.toUpperCase,p=String.prototype.replace,s=/e\+(\d)$/,v=/e-(\d)$/,g=/^(\d+)$/,d=/^(\d+)e/,b=/\.0$/,h=/\.0*e/,m=/(\..*[^0])0*e/;function w(r){var t,e,o=parseFloat(r.arg);if(!isFinite(o)){if(!n(r.arg))throw new Error("invalid floating-point number. Value: "+e);o=r.arg}switch(r.specifier){case"e":case"E":e=o.toExponential(r.precision);break;case"f":case"F":e=o.toFixed(r.precision);break;case"g":case"G":f(o)<1e-4?((t=r.precision)>0&&(t-=1),e=o.toExponential(t)):e=o.toPrecision(r.precision),r.alternate||(e=p.call(e,m,"$1e"),e=p.call(e,h,"e"),e=p.call(e,b,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return e=p.call(e,s,"e+0$1"),e=p.call(e,v,"e-0$1"),r.alternate&&(e=p.call(e,g,"$1."),e=p.call(e,d,"$1.e")),o>=0&&r.sign&&(e=r.sign+e),e=r.specifier===y.call(r.specifier)?y.call(e):l.call(e)}function A(r){var t,n="";for(t=0;t<r;t++)n+=" ";return n}function S(r,t,n){var e=t-r.length;return e<0?r:r=n?r+A(e):A(e)+r}var U=String.fromCharCode,_=isNaN,E=Array.isArray;function T(r){var t={};return t.specifier=r.specifier,t.precision=void 0===r.precision?1:r.precision,t.width=r.width,t.flags=r.flags||"",t.mapping=r.mapping,t}function j(r){var t,n,e,i,a,f,l,y,p;if(!E(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",l=1,y=0;y<r.length;y++)if(u(e=r[y]))f+=e;else{if(t=void 0!==e.precision,!(e=T(e)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+y+"`. Value: `"+e+"`.");for(e.mapping&&(l=e.mapping),n=e.flags,p=0;p<n.length;p++)switch(i=n.charAt(p)){case" ":e.sign=" ";break;case"+":e.sign="+";break;case"-":e.padRight=!0,e.padZeros=!1;break;case"0":e.padZeros=n.indexOf("-")<0;break;case"#":e.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===e.width){if(e.width=parseInt(arguments[l],10),l+=1,_(e.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+e.width+"`.");e.width<0&&(e.padRight=!0,e.width=-e.width)}if(t&&"*"===e.precision){if(e.precision=parseInt(arguments[l],10),l+=1,_(e.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+e.precision+"`.");e.precision<0&&(e.precision=1,t=!1)}switch(e.arg=arguments[l],e.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(e.padZeros=!1),e.arg=c(e);break;case"s":e.maxWidth=t?e.precision:-1;break;case"c":if(!_(e.arg)){if((a=parseInt(e.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+e.arg);e.arg=_(a)?String(e.arg):U(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(e.precision=6),e.arg=w(e);break;default:throw new Error("invalid specifier: "+e.specifier)}e.maxWidth>=0&&e.arg.length>e.maxWidth&&(e.arg=e.arg.substring(0,e.maxWidth)),e.padZeros?e.arg=o(e.arg,e.width||e.precision,e.padRight):e.width&&(e.arg=S(e.arg,e.width,e.padRight)),f+=e.arg||"",l+=1}return f}var F=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function I(r){var t={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(t.precision="1"),t}function O(r){var t,n,e,o;for(n=[],o=0,e=F.exec(r);e;)(t=r.slice(o,F.lastIndex-e[0].length)).length&&n.push(t),n.push(I(e)),o=F.lastIndex,e=F.exec(r);return(t=r.slice(o)).length&&n.push(t),n}function x(r){return"string"==typeof r}function k(r){var t,n;if(!x(r))throw new TypeError(k("invalid argument. First argument must be a string. Value: `%s`.",r));for(t=[O(r)],n=1;n<arguments.length;n++)t.push(arguments[n]);return j.apply(null,t)}var N=Object.prototype,V=N.toString,$=N.__defineGetter__,G=N.__defineSetter__,H=N.__lookupGetter__,P=N.__lookupSetter__;var W=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,t,n){var e,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===V.call(r))throw new TypeError(k("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===V.call(n))throw new TypeError(k("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((o="value"in n)&&(H.call(r,t)||P.call(r,t)?(e=r.__proto__,r.__proto__=N,delete r[t],r[t]=n.value,r.__proto__=e):r[t]=n.value),i="get"in n,a="set"in n,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&$&&$.call(r,t,n.get),a&&G&&G.call(r,t,n.set),r};function C(r,t,n){W(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}function L(r,t,n,e,o,i){var a,c,u;if(r<=0)return e;for(a=n<0?(1-r)*n:0,c=o<0?(1-r)*o:0,u=0;u<r;u++)e[c]=i(t[a]),a+=n,c+=o;return e}function R(r,t,n,e,o,i,a,c){var u,f,l;if(r<=0)return o;for(u=e,f=a,l=0;l<r;l++)o[f]=c(t[u]),u+=n,f+=i;return o}C(L,"ndarray",R);var Z="function"==typeof Math.fround?Math.fround:null;function M(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}var Y=M();var X=Object.prototype.toString;var z=Object.prototype.hasOwnProperty;function q(r,t){return null!=r&&z.call(r,t)}var B="function"==typeof Symbol?Symbol:void 0,D="function"==typeof B?B.toStringTag:"";var J=Y&&"symbol"==typeof Symbol.toStringTag?function(r){var t,n,e;if(null==r)return X.call(r);n=r[D],t=q(r,D);try{r[D]=void 0}catch(t){return X.call(r)}return e=X.call(r),t?r[D]=n:delete r[D],e}:function(r){return X.call(r)},K="function"==typeof Float32Array;var Q=Number.POSITIVE_INFINITY,rr="function"==typeof Float32Array?Float32Array:null;var tr,nr="function"==typeof Float32Array?Float32Array:void 0;tr=function(){var r,t,n;if("function"!=typeof rr)return!1;try{t=new rr([1,3.14,-3.14,5e40]),n=t,r=(K&&n instanceof Float32Array||"[object Float32Array]"===J(n))&&1===t[0]&&3.140000104904175===t[1]&&-3.140000104904175===t[2]&&t[3]===Q}catch(t){r=!1}return r}()?nr:function(){throw new Error("not implemented")};var er=new tr(1);var or="function"==typeof Z?Z:function(r){return er[0]=r,er[0]},ir=M();var ar=Object.prototype.toString;var cr="function"==typeof Symbol?Symbol:void 0,ur="function"==typeof cr?cr.toStringTag:"";var fr=ir&&"symbol"==typeof Symbol.toStringTag?function(r){var t,n,e;if(null==r)return ar.call(r);n=r[ur],t=q(r,ur);try{r[ur]=void 0}catch(t){return ar.call(r)}return e=ar.call(r),t?r[ur]=n:delete r[ur],e}:function(r){return ar.call(r)},lr="function"==typeof Uint32Array;var yr="function"==typeof Uint32Array?Uint32Array:null;var pr,sr="function"==typeof Uint32Array?Uint32Array:void 0;pr=function(){var r,t,n;if("function"!=typeof yr)return!1;try{t=new yr(t=[1,3.14,-3.14,4294967296,4294967297]),n=t,r=(lr&&n instanceof Uint32Array||"[object Uint32Array]"===fr(n))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?sr:function(){throw new Error("not implemented")};var vr=pr,gr=M();var dr=Object.prototype.toString;var br="function"==typeof Symbol?Symbol:void 0,hr="function"==typeof br?br.toStringTag:"";var mr=gr&&"symbol"==typeof Symbol.toStringTag?function(r){var t,n,e;if(null==r)return dr.call(r);n=r[hr],t=q(r,hr);try{r[hr]=void 0}catch(t){return dr.call(r)}return e=dr.call(r),t?r[hr]=n:delete r[hr],e}:function(r){return dr.call(r)},wr="function"==typeof Float64Array;var Ar="function"==typeof Float64Array?Float64Array:null;var Sr,Ur="function"==typeof Float64Array?Float64Array:void 0;Sr=function(){var r,t,n;if("function"!=typeof Ar)return!1;try{t=new Ar([1,3.14,-3.14,NaN]),n=t,r=(wr&&n instanceof Float64Array||"[object Float64Array]"===mr(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?Ur:function(){throw new Error("not implemented")};var _r=Sr,Er=M();var Tr=Object.prototype.toString;var jr="function"==typeof Symbol?Symbol:void 0,Fr="function"==typeof jr?jr.toStringTag:"";var Ir=Er&&"symbol"==typeof Symbol.toStringTag?function(r){var t,n,e;if(null==r)return Tr.call(r);n=r[Fr],t=q(r,Fr);try{r[Fr]=void 0}catch(t){return Tr.call(r)}return e=Tr.call(r),t?r[Fr]=n:delete r[Fr],e}:function(r){return Tr.call(r)},Or="function"==typeof Uint8Array;var xr="function"==typeof Uint8Array?Uint8Array:null;var kr,Nr="function"==typeof Uint8Array?Uint8Array:void 0;kr=function(){var r,t,n;if("function"!=typeof xr)return!1;try{t=new xr(t=[1,3.14,-3.14,256,257]),n=t,r=(Or&&n instanceof Uint8Array||"[object Uint8Array]"===Ir(n))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Nr:function(){throw new Error("not implemented")};var Vr=kr,$r=M();var Gr=Object.prototype.toString;var Hr="function"==typeof Symbol?Symbol:void 0,Pr="function"==typeof Hr?Hr.toStringTag:"";var Wr=$r&&"symbol"==typeof Symbol.toStringTag?function(r){var t,n,e;if(null==r)return Gr.call(r);n=r[Pr],t=q(r,Pr);try{r[Pr]=void 0}catch(t){return Gr.call(r)}return e=Gr.call(r),t?r[Pr]=n:delete r[Pr],e}:function(r){return Gr.call(r)},Cr="function"==typeof Uint16Array;var Lr="function"==typeof Uint16Array?Uint16Array:null;var Rr,Zr="function"==typeof Uint16Array?Uint16Array:void 0;Rr=function(){var r,t,n;if("function"!=typeof Lr)return!1;try{t=new Lr(t=[1,3.14,-3.14,65536,65537]),n=t,r=(Cr&&n instanceof Uint16Array||"[object Uint16Array]"===Wr(n))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Zr:function(){throw new Error("not implemented")};var Mr,Yr={uint16:Rr,uint8:Vr};(Mr=new Yr.uint16(1))[0]=4660;var Xr=52===new Yr.uint8(Mr.buffer)[0],zr=!0===Xr?1:0,qr=new _r(1),Br=new vr(qr.buffer);function Dr(r){return qr[0]=r,Br[zr]}var Jr=M();var Kr=Object.prototype.toString;var Qr="function"==typeof Symbol?Symbol:void 0,rt="function"==typeof Qr?Qr.toStringTag:"";var tt=Jr&&"symbol"==typeof Symbol.toStringTag?function(r){var t,n,e;if(null==r)return Kr.call(r);n=r[rt],t=q(r,rt);try{r[rt]=void 0}catch(t){return Kr.call(r)}return e=Kr.call(r),t?r[rt]=n:delete r[rt],e}:function(r){return Kr.call(r)},nt="function"==typeof Uint32Array;var et="function"==typeof Uint32Array?Uint32Array:null;var ot,it="function"==typeof Uint32Array?Uint32Array:void 0;ot=function(){var r,t,n;if("function"!=typeof et)return!1;try{t=new et(t=[1,3.14,-3.14,4294967296,4294967297]),n=t,r=(nt&&n instanceof Uint32Array||"[object Uint32Array]"===tt(n))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?it:function(){throw new Error("not implemented")};var at=ot,ct=!0===Xr?1:0,ut=new _r(1),ft=new at(ut.buffer);var lt=Number.POSITIVE_INFINITY,yt=Number.NEGATIVE_INFINITY;var pt=M();var st=Object.prototype.toString;var vt="function"==typeof Symbol?Symbol:void 0,gt="function"==typeof vt?vt.toStringTag:"";var dt=pt&&"symbol"==typeof Symbol.toStringTag?function(r){var t,n,e;if(null==r)return st.call(r);n=r[gt],t=q(r,gt);try{r[gt]=void 0}catch(t){return st.call(r)}return e=st.call(r),t?r[gt]=n:delete r[gt],e}:function(r){return st.call(r)},bt="function"==typeof Uint32Array;var ht="function"==typeof Uint32Array?Uint32Array:null;var mt,wt="function"==typeof Uint32Array?Uint32Array:void 0;mt=function(){var r,t,n;if("function"!=typeof ht)return!1;try{t=new ht(t=[1,3.14,-3.14,4294967296,4294967297]),n=t,r=(bt&&n instanceof Uint32Array||"[object Uint32Array]"===dt(n))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?wt:function(){throw new Error("not implemented")};var At,St,Ut=mt;!0===Xr?(At=1,St=0):(At=0,St=1);var _t={HIGH:At,LOW:St},Et=new _r(1),Tt=new Ut(Et.buffer),jt=_t.HIGH,Ft=_t.LOW;function It(r,t){return Tt[jt]=r,Tt[Ft]=t,Et[0]}var Ot=M();var xt=Object.prototype.toString;var kt="function"==typeof Symbol?Symbol:void 0,Nt="function"==typeof kt?kt.toStringTag:"";var Vt=Ot&&"symbol"==typeof Symbol.toStringTag?function(r){var t,n,e;if(null==r)return xt.call(r);n=r[Nt],t=q(r,Nt);try{r[Nt]=void 0}catch(t){return xt.call(r)}return e=xt.call(r),t?r[Nt]=n:delete r[Nt],e}:function(r){return xt.call(r)},$t="function"==typeof Uint32Array;var Gt="function"==typeof Uint32Array?Uint32Array:null;var Ht,Pt="function"==typeof Uint32Array?Uint32Array:void 0;Ht=function(){var r,t,n;if("function"!=typeof Gt)return!1;try{t=new Gt(t=[1,3.14,-3.14,4294967296,4294967297]),n=t,r=($t&&n instanceof Uint32Array||"[object Uint32Array]"===Vt(n))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Pt:function(){throw new Error("not implemented")};var Wt,Ct,Lt=Ht;!0===Xr?(Wt=1,Ct=0):(Wt=0,Ct=1);var Rt={HIGH:Wt,LOW:Ct},Zt=new _r(1),Mt=new Lt(Zt.buffer),Yt=Rt.HIGH,Xt=Rt.LOW;function zt(r,t,n,e){return Zt[0]=r,t[e]=Mt[Yt],t[e+n]=Mt[Xt],t}function qt(r){return zt(r,[0,0],1,0)}C(qt,"assign",zt);var Bt=Dr(22250738585072014e-324),Dt=[0,0];function Jt(r){var t,n,e,o;return 0===r||function(r){return r!=r}(r)||function(r){return r===lt||r===yt}(r)?r:(t=(2147483648&(n=Dr(r)>>>0))>>>0,o=(n&=2147483647)<Bt?It(t|696219795+(((2147483647&Dr(o=0x40000000000000*r))>>>0)/3>>>0)>>>0,0):function(r,t){return ut[0]=r,ft[ct]=t>>>0,ut[0]}(o=0,t|715094163+(n/3>>>0)>>>0),o*=function(r){return 0===r?1.87595182427177:1.87595182427177+r*(r*(1.6214297201053545+r*(.14599619288661245*r-.758397934778766))-1.8849797954337717)}(e=o*o*(o/r)),qt.assign(o,Dt,1,0),2147483648&Dt[1]?(Dt[0]+=1,Dt[1]&=2147483647):Dt[1]|=2147483648,o=It(4294967295&Dt[0],3221225472&Dt[1]),o+=o*(e=((e=r/(o*o))-o)/(o+o+e)))}function Kt(r){return or(Jt(or(r)))}function Qt(r,t,n,e,o){return L(r,t,n,e,o,Kt)}function rn(r,t,n,e,o,i,a){return R(r,t,n,e,o,i,a,Kt)}C(Qt,"ndarray",rn);export{Qt as default,rn as ndarray};
//# sourceMappingURL=mod.js.map
