var ja=Object.create;var rt=Object.defineProperty;var Ha=Object.getOwnPropertyDescriptor;var Ka=Object.getOwnPropertyNames;var Wa=Object.getPrototypeOf,Ga=Object.prototype.hasOwnProperty;var o=(r,e)=>rt(r,"name",{value:e,configurable:!0});var ae=(r,e)=>()=>(r&&(e=r(r=0)),e);var B=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports),fe=(r,e)=>{for(var t in e)
rt(r,t,{get:e[t],enumerable:!0})},On=(r,e,t,n)=>{if(e&&typeof e=="object"||typeof e==
"function")for(let i of Ka(e))!Ga.call(r,i)&&i!==t&&rt(r,i,{get:()=>e[i],enumerable:!(n=
Ha(e,i))||n.enumerable});return r};var nt=(r,e,t)=>(t=r!=null?ja(Wa(r)):{},On(e||!r||!r.__esModule?rt(t,"default",{
value:r,enumerable:!0}):t,r)),z=r=>On(rt({},"__esModule",{value:!0}),r);var jn=B(Lt=>{"use strict";y();Lt.byteLength=za;Lt.toByteArray=Ja;Lt.fromByteArray=
eo;var me=[],pe=[],Va=typeof Uint8Array<"u"?Uint8Array:Array,ir="ABCDEFGHIJKLMNO\
PQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(Pe=0,Qn=ir.length;Pe<Qn;++Pe)
me[Pe]=ir[Pe],pe[ir.charCodeAt(Pe)]=Pe;var Pe,Qn;pe["-".charCodeAt(0)]=62;pe["_".
charCodeAt(0)]=63;function $n(r){var e=r.length;if(e%4>0)throw new Error("Invali\
d string. Length must be a multiple of 4");var t=r.indexOf("=");t===-1&&(t=e);var n=t===
e?0:4-t%4;return[t,n]}o($n,"getLens");function za(r){var e=$n(r),t=e[0],n=e[1];return(t+
n)*3/4-n}o(za,"byteLength");function Ya(r,e,t){return(e+t)*3/4-t}o(Ya,"_byteLeng\
th");function Ja(r){var e,t=$n(r),n=t[0],i=t[1],s=new Va(Ya(r,n,i)),a=0,u=i>0?n-
4:n,c;for(c=0;c<u;c+=4)e=pe[r.charCodeAt(c)]<<18|pe[r.charCodeAt(c+1)]<<12|pe[r.
charCodeAt(c+2)]<<6|pe[r.charCodeAt(c+3)],s[a++]=e>>16&255,s[a++]=e>>8&255,s[a++]=
e&255;return i===2&&(e=pe[r.charCodeAt(c)]<<2|pe[r.charCodeAt(c+1)]>>4,s[a++]=e&
255),i===1&&(e=pe[r.charCodeAt(c)]<<10|pe[r.charCodeAt(c+1)]<<4|pe[r.charCodeAt(
c+2)]>>2,s[a++]=e>>8&255,s[a++]=e&255),s}o(Ja,"toByteArray");function Za(r){return me[r>>
18&63]+me[r>>12&63]+me[r>>6&63]+me[r&63]}o(Za,"tripletToBase64");function Xa(r,e,t){
for(var n,i=[],s=e;s<t;s+=3)n=(r[s]<<16&16711680)+(r[s+1]<<8&65280)+(r[s+2]&255),
i.push(Za(n));return i.join("")}o(Xa,"encodeChunk");function eo(r){for(var e,t=r.
length,n=t%3,i=[],s=16383,a=0,u=t-n;a<u;a+=s)i.push(Xa(r,a,a+s>u?u:a+s));return n===
1?(e=r[t-1],i.push(me[e>>2]+me[e<<4&63]+"==")):n===2&&(e=(r[t-2]<<8)+r[t-1],i.push(
me[e>>10]+me[e>>4&63]+me[e<<2&63]+"=")),i.join("")}o(eo,"fromByteArray")});var Hn=B(sr=>{y();sr.read=function(r,e,t,n,i){var s,a,u=i*8-n-1,c=(1<<u)-1,l=c>>
1,h=-7,f=t?i-1:0,p=t?-1:1,g=r[e+f];for(f+=p,s=g&(1<<-h)-1,g>>=-h,h+=u;h>0;s=s*256+
r[e+f],f+=p,h-=8);for(a=s&(1<<-h)-1,s>>=-h,h+=n;h>0;a=a*256+r[e+f],f+=p,h-=8);if(s===
0)s=1-l;else{if(s===c)return a?NaN:(g?-1:1)*(1/0);a=a+Math.pow(2,n),s=s-l}return(g?
-1:1)*a*Math.pow(2,s-n)};sr.write=function(r,e,t,n,i,s){var a,u,c,l=s*8-i-1,h=(1<<
l)-1,f=h>>1,p=i===23?Math.pow(2,-24)-Math.pow(2,-77):0,g=n?0:s-1,S=n?1:-1,A=e<0||
e===0&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(u=isNaN(e)?1:0,a=h):(a=Math.
floor(Math.log(e)/Math.LN2),e*(c=Math.pow(2,-a))<1&&(a--,c*=2),a+f>=1?e+=p/c:e+=
p*Math.pow(2,1-f),e*c>=2&&(a++,c/=2),a+f>=h?(u=0,a=h):a+f>=1?(u=(e*c-1)*Math.pow(
2,i),a=a+f):(u=e*Math.pow(2,f-1)*Math.pow(2,i),a=0));i>=8;r[t+g]=u&255,g+=S,u/=256,
i-=8);for(a=a<<i|u,l+=i;l>0;r[t+g]=a&255,g+=S,a/=256,l-=8);r[t+g-S]|=A*128}});var oi=B(Oe=>{"use strict";y();var ar=jn(),qe=Hn(),Kn=typeof Symbol=="function"&&
typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;Oe.Buffer=
d;Oe.SlowBuffer=ao;Oe.INSPECT_MAX_BYTES=50;var Tt=2147483647;Oe.kMaxLength=Tt;d.
TYPED_ARRAY_SUPPORT=to();!d.TYPED_ARRAY_SUPPORT&&typeof console<"u"&&typeof console.
error=="function"&&console.error("This browser lacks typed array (Uint8Array) su\
pport which is required by `buffer` v5.x. Use `buffer` v4.x if you require old b\
rowser support.");function to(){try{let r=new Uint8Array(1),e={foo:function(){return 42}};
return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(r,e),
r.foo()===42}catch{return!1}}o(to,"typedArraySupport");Object.defineProperty(d.prototype,
"parent",{enumerable:!0,get:function(){if(d.isBuffer(this))return this.buffer}});
Object.defineProperty(d.prototype,"offset",{enumerable:!0,get:function(){if(d.isBuffer(
this))return this.byteOffset}});function be(r){if(r>Tt)throw new RangeError('The\
 value "'+r+'" is invalid for option "size"');let e=new Uint8Array(r);return Object.
setPrototypeOf(e,d.prototype),e}o(be,"createBuffer");function d(r,e,t){if(typeof r==
"number"){if(typeof e=="string")throw new TypeError('The "string" argument must \
be of type string. Received type number');return lr(r)}return zn(r,e,t)}o(d,"Buf\
fer");d.poolSize=8192;function zn(r,e,t){if(typeof r=="string")return no(r,e);if(ArrayBuffer.
isView(r))return io(r);if(r==null)throw new TypeError("The first argument must b\
e one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received\
 type "+typeof r);if(ge(r,ArrayBuffer)||r&&ge(r.buffer,ArrayBuffer)||typeof SharedArrayBuffer<
"u"&&(ge(r,SharedArrayBuffer)||r&&ge(r.buffer,SharedArrayBuffer)))return ur(r,e,
t);if(typeof r=="number")throw new TypeError('The "value" argument must not be o\
f type number. Received type number');let n=r.valueOf&&r.valueOf();if(n!=null&&n!==
r)return d.from(n,e,t);let i=so(r);if(i)return i;if(typeof Symbol<"u"&&Symbol.toPrimitive!=
null&&typeof r[Symbol.toPrimitive]=="function")return d.from(r[Symbol.toPrimitive](
"string"),e,t);throw new TypeError("The first argument must be one of type strin\
g, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof r)}o(
zn,"from");d.from=function(r,e,t){return zn(r,e,t)};Object.setPrototypeOf(d.prototype,
Uint8Array.prototype);Object.setPrototypeOf(d,Uint8Array);function Yn(r){if(typeof r!=
"number")throw new TypeError('"size" argument must be of type number');if(r<0)throw new RangeError(
'The value "'+r+'" is invalid for option "size"')}o(Yn,"assertSize");function ro(r,e,t){
return Yn(r),r<=0?be(r):e!==void 0?typeof t=="string"?be(r).fill(e,t):be(r).fill(
e):be(r)}o(ro,"alloc");d.alloc=function(r,e,t){return ro(r,e,t)};function lr(r){
return Yn(r),be(r<0?0:hr(r)|0)}o(lr,"allocUnsafe");d.allocUnsafe=function(r){return lr(
r)};d.allocUnsafeSlow=function(r){return lr(r)};function no(r,e){if((typeof e!="\
string"||e==="")&&(e="utf8"),!d.isEncoding(e))throw new TypeError("Unknown encod\
ing: "+e);let t=Jn(r,e)|0,n=be(t),i=n.write(r,e);return i!==t&&(n=n.slice(0,i)),
n}o(no,"fromString");function or(r){let e=r.length<0?0:hr(r.length)|0,t=be(e);for(let n=0;n<
e;n+=1)t[n]=r[n]&255;return t}o(or,"fromArrayLike");function io(r){if(ge(r,Uint8Array)){
let e=new Uint8Array(r);return ur(e.buffer,e.byteOffset,e.byteLength)}return or(
r)}o(io,"fromArrayView");function ur(r,e,t){if(e<0||r.byteLength<e)throw new RangeError(
'"offset" is outside of buffer bounds');if(r.byteLength<e+(t||0))throw new RangeError(
'"length" is outside of buffer bounds');let n;return e===void 0&&t===void 0?n=new Uint8Array(
r):t===void 0?n=new Uint8Array(r,e):n=new Uint8Array(r,e,t),Object.setPrototypeOf(
n,d.prototype),n}o(ur,"fromArrayBuffer");function so(r){if(d.isBuffer(r)){let e=hr(
r.length)|0,t=be(e);return t.length===0||r.copy(t,0,0,e),t}if(r.length!==void 0)
return typeof r.length!="number"||dr(r.length)?be(0):or(r);if(r.type==="Buffer"&&
Array.isArray(r.data))return or(r.data)}o(so,"fromObject");function hr(r){if(r>=
Tt)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+
Tt.toString(16)+" bytes");return r|0}o(hr,"checked");function ao(r){return+r!=r&&
(r=0),d.alloc(+r)}o(ao,"SlowBuffer");d.isBuffer=o(function(e){return e!=null&&e.
_isBuffer===!0&&e!==d.prototype},"isBuffer");d.compare=o(function(e,t){if(ge(e,Uint8Array)&&
(e=d.from(e,e.offset,e.byteLength)),ge(t,Uint8Array)&&(t=d.from(t,t.offset,t.byteLength)),
!d.isBuffer(e)||!d.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments\
 must be one of type Buffer or Uint8Array');if(e===t)return 0;let n=e.length,i=t.
length;for(let s=0,a=Math.min(n,i);s<a;++s)if(e[s]!==t[s]){n=e[s],i=t[s];break}return n<
i?-1:i<n?1:0},"compare");d.isEncoding=o(function(e){switch(String(e).toLowerCase()){case"\
hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"\
ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},"isEn\
coding");d.concat=o(function(e,t){if(!Array.isArray(e))throw new TypeError('"lis\
t" argument must be an Array of Buffers');if(e.length===0)return d.alloc(0);let n;
if(t===void 0)for(t=0,n=0;n<e.length;++n)t+=e[n].length;let i=d.allocUnsafe(t),s=0;
for(n=0;n<e.length;++n){let a=e[n];if(ge(a,Uint8Array))s+a.length>i.length?(d.isBuffer(
a)||(a=d.from(a)),a.copy(i,s)):Uint8Array.prototype.set.call(i,a,s);else if(d.isBuffer(
a))a.copy(i,s);else throw new TypeError('"list" argument must be an Array of Buf\
fers');s+=a.length}return i},"concat");function Jn(r,e){if(d.isBuffer(r))return r.
length;if(ArrayBuffer.isView(r)||ge(r,ArrayBuffer))return r.byteLength;if(typeof r!=
"string")throw new TypeError('The "string" argument must be one of type string, \
Buffer, or ArrayBuffer. Received type '+typeof r);let t=r.length,n=arguments.length>
2&&arguments[2]===!0;if(!n&&t===0)return 0;let i=!1;for(;;)switch(e){case"ascii":case"\
latin1":case"binary":return t;case"utf8":case"utf-8":return cr(r).length;case"uc\
s2":case"ucs-2":case"utf16le":case"utf-16le":return t*2;case"hex":return t>>>1;case"\
base64":return ai(r).length;default:if(i)return n?-1:cr(r).length;e=(""+e).toLowerCase(),
i=!0}}o(Jn,"byteLength");d.byteLength=Jn;function oo(r,e,t){let n=!1;if((e===void 0||
e<0)&&(e=0),e>this.length||((t===void 0||t>this.length)&&(t=this.length),t<=0)||
(t>>>=0,e>>>=0,t<=e))return"";for(r||(r="utf8");;)switch(r){case"hex":return go(
this,e,t);case"utf8":case"utf-8":return Xn(this,e,t);case"ascii":return wo(this,
e,t);case"latin1":case"binary":return mo(this,e,t);case"base64":return po(this,e,
t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return So(this,e,t);default:
if(n)throw new TypeError("Unknown encoding: "+r);r=(r+"").toLowerCase(),n=!0}}o(
oo,"slowToString");d.prototype._isBuffer=!0;function Re(r,e,t){let n=r[e];r[e]=r[t],
r[t]=n}o(Re,"swap");d.prototype.swap16=o(function(){let e=this.length;if(e%2!==0)
throw new RangeError("Buffer size must be a multiple of 16-bits");for(let t=0;t<
e;t+=2)Re(this,t,t+1);return this},"swap16");d.prototype.swap32=o(function(){let e=this.
length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bit\
s");for(let t=0;t<e;t+=4)Re(this,t,t+3),Re(this,t+1,t+2);return this},"swap32");
d.prototype.swap64=o(function(){let e=this.length;if(e%8!==0)throw new RangeError(
"Buffer size must be a multiple of 64-bits");for(let t=0;t<e;t+=8)Re(this,t,t+7),
Re(this,t+1,t+6),Re(this,t+2,t+5),Re(this,t+3,t+4);return this},"swap64");d.prototype.
toString=o(function(){let e=this.length;return e===0?"":arguments.length===0?Xn(
this,0,e):oo.apply(this,arguments)},"toString");d.prototype.toLocaleString=d.prototype.
toString;d.prototype.equals=o(function(e){if(!d.isBuffer(e))throw new TypeError(
"Argument must be a Buffer");return this===e?!0:d.compare(this,e)===0},"equals");
d.prototype.inspect=o(function(){let e="",t=Oe.INSPECT_MAX_BYTES;return e=this.toString(
"hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(e+=" ... "),"<Buffer "+
e+">"},"inspect");Kn&&(d.prototype[Kn]=d.prototype.inspect);d.prototype.compare=
o(function(e,t,n,i,s){if(ge(e,Uint8Array)&&(e=d.from(e,e.offset,e.byteLength)),!d.
isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffe\
r or Uint8Array. Received type '+typeof e);if(t===void 0&&(t=0),n===void 0&&(n=e?
e.length:0),i===void 0&&(i=0),s===void 0&&(s=this.length),t<0||n>e.length||i<0||
s>this.length)throw new RangeError("out of range index");if(i>=s&&t>=n)return 0;
if(i>=s)return-1;if(t>=n)return 1;if(t>>>=0,n>>>=0,i>>>=0,s>>>=0,this===e)return 0;
let a=s-i,u=n-t,c=Math.min(a,u),l=this.slice(i,s),h=e.slice(t,n);for(let f=0;f<c;++f)
if(l[f]!==h[f]){a=l[f],u=h[f];break}return a<u?-1:u<a?1:0},"compare");function Zn(r,e,t,n,i){
if(r.length===0)return-1;if(typeof t=="string"?(n=t,t=0):t>2147483647?t=2147483647:
t<-2147483648&&(t=-2147483648),t=+t,dr(t)&&(t=i?0:r.length-1),t<0&&(t=r.length+t),
t>=r.length){if(i)return-1;t=r.length-1}else if(t<0)if(i)t=0;else return-1;if(typeof e==
"string"&&(e=d.from(e,n)),d.isBuffer(e))return e.length===0?-1:Wn(r,e,t,n,i);if(typeof e==
"number")return e=e&255,typeof Uint8Array.prototype.indexOf=="function"?i?Uint8Array.
prototype.indexOf.call(r,e,t):Uint8Array.prototype.lastIndexOf.call(r,e,t):Wn(r,
[e],t,n,i);throw new TypeError("val must be string, number or Buffer")}o(Zn,"bid\
irectionalIndexOf");function Wn(r,e,t,n,i){let s=1,a=r.length,u=e.length;if(n!==
void 0&&(n=String(n).toLowerCase(),n==="ucs2"||n==="ucs-2"||n==="utf16le"||n==="\
utf-16le")){if(r.length<2||e.length<2)return-1;s=2,a/=2,u/=2,t/=2}function c(h,f){
return s===1?h[f]:h.readUInt16BE(f*s)}o(c,"read");let l;if(i){let h=-1;for(l=t;l<
a;l++)if(c(r,l)===c(e,h===-1?0:l-h)){if(h===-1&&(h=l),l-h+1===u)return h*s}else h!==
-1&&(l-=l-h),h=-1}else for(t+u>a&&(t=a-u),l=t;l>=0;l--){let h=!0;for(let f=0;f<u;f++)
if(c(r,l+f)!==c(e,f)){h=!1;break}if(h)return l}return-1}o(Wn,"arrayIndexOf");d.prototype.
includes=o(function(e,t,n){return this.indexOf(e,t,n)!==-1},"includes");d.prototype.
indexOf=o(function(e,t,n){return Zn(this,e,t,n,!0)},"indexOf");d.prototype.lastIndexOf=
o(function(e,t,n){return Zn(this,e,t,n,!1)},"lastIndexOf");function uo(r,e,t,n){
t=Number(t)||0;let i=r.length-t;n?(n=Number(n),n>i&&(n=i)):n=i;let s=e.length;n>
s/2&&(n=s/2);let a;for(a=0;a<n;++a){let u=parseInt(e.substr(a*2,2),16);if(dr(u))
return a;r[t+a]=u}return a}o(uo,"hexWrite");function co(r,e,t,n){return It(cr(e,
r.length-t),r,t,n)}o(co,"utf8Write");function lo(r,e,t,n){return It(Ao(e),r,t,n)}
o(lo,"asciiWrite");function ho(r,e,t,n){return It(ai(e),r,t,n)}o(ho,"base64Write");
function fo(r,e,t,n){return It(vo(e,r.length-t),r,t,n)}o(fo,"ucs2Write");d.prototype.
write=o(function(e,t,n,i){if(t===void 0)i="utf8",n=this.length,t=0;else if(n===void 0&&
typeof t=="string")i=t,n=this.length,t=0;else if(isFinite(t))t=t>>>0,isFinite(n)?
(n=n>>>0,i===void 0&&(i="utf8")):(i=n,n=void 0);else throw new Error("Buffer.wri\
te(string, encoding, offset[, length]) is no longer supported");let s=this.length-
t;if((n===void 0||n>s)&&(n=s),e.length>0&&(n<0||t<0)||t>this.length)throw new RangeError(
"Attempt to write outside buffer bounds");i||(i="utf8");let a=!1;for(;;)switch(i){case"\
hex":return uo(this,e,t,n);case"utf8":case"utf-8":return co(this,e,t,n);case"asc\
ii":case"latin1":case"binary":return lo(this,e,t,n);case"base64":return ho(this,
e,t,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return fo(this,e,t,n);default:
if(a)throw new TypeError("Unknown encoding: "+i);i=(""+i).toLowerCase(),a=!0}},"\
write");d.prototype.toJSON=o(function(){return{type:"Buffer",data:Array.prototype.
slice.call(this._arr||this,0)}},"toJSON");function po(r,e,t){return e===0&&t===r.
length?ar.fromByteArray(r):ar.fromByteArray(r.slice(e,t))}o(po,"base64Slice");function Xn(r,e,t){
t=Math.min(r.length,t);let n=[],i=e;for(;i<t;){let s=r[i],a=null,u=s>239?4:s>223?
3:s>191?2:1;if(i+u<=t){let c,l,h,f;switch(u){case 1:s<128&&(a=s);break;case 2:c=
r[i+1],(c&192)===128&&(f=(s&31)<<6|c&63,f>127&&(a=f));break;case 3:c=r[i+1],l=r[i+
2],(c&192)===128&&(l&192)===128&&(f=(s&15)<<12|(c&63)<<6|l&63,f>2047&&(f<55296||
f>57343)&&(a=f));break;case 4:c=r[i+1],l=r[i+2],h=r[i+3],(c&192)===128&&(l&192)===
128&&(h&192)===128&&(f=(s&15)<<18|(c&63)<<12|(l&63)<<6|h&63,f>65535&&f<1114112&&
(a=f))}}a===null?(a=65533,u=1):a>65535&&(a-=65536,n.push(a>>>10&1023|55296),a=56320|
a&1023),n.push(a),i+=u}return yo(n)}o(Xn,"utf8Slice");var Gn=4096;function yo(r){
let e=r.length;if(e<=Gn)return String.fromCharCode.apply(String,r);let t="",n=0;
for(;n<e;)t+=String.fromCharCode.apply(String,r.slice(n,n+=Gn));return t}o(yo,"d\
ecodeCodePointsArray");function wo(r,e,t){let n="";t=Math.min(r.length,t);for(let i=e;i<
t;++i)n+=String.fromCharCode(r[i]&127);return n}o(wo,"asciiSlice");function mo(r,e,t){
let n="";t=Math.min(r.length,t);for(let i=e;i<t;++i)n+=String.fromCharCode(r[i]);
return n}o(mo,"latin1Slice");function go(r,e,t){let n=r.length;(!e||e<0)&&(e=0),
(!t||t<0||t>n)&&(t=n);let i="";for(let s=e;s<t;++s)i+=Co[r[s]];return i}o(go,"he\
xSlice");function So(r,e,t){let n=r.slice(e,t),i="";for(let s=0;s<n.length-1;s+=
2)i+=String.fromCharCode(n[s]+n[s+1]*256);return i}o(So,"utf16leSlice");d.prototype.
slice=o(function(e,t){let n=this.length;e=~~e,t=t===void 0?n:~~t,e<0?(e+=n,e<0&&
(e=0)):e>n&&(e=n),t<0?(t+=n,t<0&&(t=0)):t>n&&(t=n),t<e&&(t=e);let i=this.subarray(
e,t);return Object.setPrototypeOf(i,d.prototype),i},"slice");function J(r,e,t){if(r%
1!==0||r<0)throw new RangeError("offset is not uint");if(r+e>t)throw new RangeError(
"Trying to access beyond buffer length")}o(J,"checkOffset");d.prototype.readUintLE=
d.prototype.readUIntLE=o(function(e,t,n){e=e>>>0,t=t>>>0,n||J(e,t,this.length);let i=this[e],
s=1,a=0;for(;++a<t&&(s*=256);)i+=this[e+a]*s;return i},"readUIntLE");d.prototype.
readUintBE=d.prototype.readUIntBE=o(function(e,t,n){e=e>>>0,t=t>>>0,n||J(e,t,this.
length);let i=this[e+--t],s=1;for(;t>0&&(s*=256);)i+=this[e+--t]*s;return i},"re\
adUIntBE");d.prototype.readUint8=d.prototype.readUInt8=o(function(e,t){return e=
e>>>0,t||J(e,1,this.length),this[e]},"readUInt8");d.prototype.readUint16LE=d.prototype.
readUInt16LE=o(function(e,t){return e=e>>>0,t||J(e,2,this.length),this[e]|this[e+
1]<<8},"readUInt16LE");d.prototype.readUint16BE=d.prototype.readUInt16BE=o(function(e,t){
return e=e>>>0,t||J(e,2,this.length),this[e]<<8|this[e+1]},"readUInt16BE");d.prototype.
readUint32LE=d.prototype.readUInt32LE=o(function(e,t){return e=e>>>0,t||J(e,4,this.
length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216},"readUInt32LE");
d.prototype.readUint32BE=d.prototype.readUInt32BE=o(function(e,t){return e=e>>>0,
t||J(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+3])},"\
readUInt32BE");d.prototype.readBigUInt64LE=ve(o(function(e){e=e>>>0,ke(e,"offset");
let t=this[e],n=this[e+7];(t===void 0||n===void 0)&&it(e,this.length-8);let i=t+
this[++e]*2**8+this[++e]*2**16+this[++e]*2**24,s=this[++e]+this[++e]*2**8+this[++e]*
2**16+n*2**24;return BigInt(i)+(BigInt(s)<<BigInt(32))},"readBigUInt64LE"));d.prototype.
readBigUInt64BE=ve(o(function(e){e=e>>>0,ke(e,"offset");let t=this[e],n=this[e+7];
(t===void 0||n===void 0)&&it(e,this.length-8);let i=t*2**24+this[++e]*2**16+this[++e]*
2**8+this[++e],s=this[++e]*2**24+this[++e]*2**16+this[++e]*2**8+n;return(BigInt(
i)<<BigInt(32))+BigInt(s)},"readBigUInt64BE"));d.prototype.readIntLE=o(function(e,t,n){
e=e>>>0,t=t>>>0,n||J(e,t,this.length);let i=this[e],s=1,a=0;for(;++a<t&&(s*=256);)
i+=this[e+a]*s;return s*=128,i>=s&&(i-=Math.pow(2,8*t)),i},"readIntLE");d.prototype.
readIntBE=o(function(e,t,n){e=e>>>0,t=t>>>0,n||J(e,t,this.length);let i=t,s=1,a=this[e+
--i];for(;i>0&&(s*=256);)a+=this[e+--i]*s;return s*=128,a>=s&&(a-=Math.pow(2,8*t)),
a},"readIntBE");d.prototype.readInt8=o(function(e,t){return e=e>>>0,t||J(e,1,this.
length),this[e]&128?(255-this[e]+1)*-1:this[e]},"readInt8");d.prototype.readInt16LE=
o(function(e,t){e=e>>>0,t||J(e,2,this.length);let n=this[e]|this[e+1]<<8;return n&
32768?n|4294901760:n},"readInt16LE");d.prototype.readInt16BE=o(function(e,t){e=e>>>
0,t||J(e,2,this.length);let n=this[e+1]|this[e]<<8;return n&32768?n|4294901760:n},
"readInt16BE");d.prototype.readInt32LE=o(function(e,t){return e=e>>>0,t||J(e,4,this.
length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},"readInt32LE");d.prototype.
readInt32BE=o(function(e,t){return e=e>>>0,t||J(e,4,this.length),this[e]<<24|this[e+
1]<<16|this[e+2]<<8|this[e+3]},"readInt32BE");d.prototype.readBigInt64LE=ve(o(function(e){
e=e>>>0,ke(e,"offset");let t=this[e],n=this[e+7];(t===void 0||n===void 0)&&it(e,
this.length-8);let i=this[e+4]+this[e+5]*2**8+this[e+6]*2**16+(n<<24);return(BigInt(
i)<<BigInt(32))+BigInt(t+this[++e]*2**8+this[++e]*2**16+this[++e]*2**24)},"readB\
igInt64LE"));d.prototype.readBigInt64BE=ve(o(function(e){e=e>>>0,ke(e,"offset");
let t=this[e],n=this[e+7];(t===void 0||n===void 0)&&it(e,this.length-8);let i=(t<<
24)+this[++e]*2**16+this[++e]*2**8+this[++e];return(BigInt(i)<<BigInt(32))+BigInt(
this[++e]*2**24+this[++e]*2**16+this[++e]*2**8+n)},"readBigInt64BE"));d.prototype.
readFloatLE=o(function(e,t){return e=e>>>0,t||J(e,4,this.length),qe.read(this,e,
!0,23,4)},"readFloatLE");d.prototype.readFloatBE=o(function(e,t){return e=e>>>0,
t||J(e,4,this.length),qe.read(this,e,!1,23,4)},"readFloatBE");d.prototype.readDoubleLE=
o(function(e,t){return e=e>>>0,t||J(e,8,this.length),qe.read(this,e,!0,52,8)},"r\
eadDoubleLE");d.prototype.readDoubleBE=o(function(e,t){return e=e>>>0,t||J(e,8,this.
length),qe.read(this,e,!1,52,8)},"readDoubleBE");function ue(r,e,t,n,i,s){if(!d.
isBuffer(r))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>
i||e<s)throw new RangeError('"value" argument is out of bounds');if(t+n>r.length)
throw new RangeError("Index out of range")}o(ue,"checkInt");d.prototype.writeUintLE=
d.prototype.writeUIntLE=o(function(e,t,n,i){if(e=+e,t=t>>>0,n=n>>>0,!i){let u=Math.
pow(2,8*n)-1;ue(this,e,t,n,u,0)}let s=1,a=0;for(this[t]=e&255;++a<n&&(s*=256);)this[t+
a]=e/s&255;return t+n},"writeUIntLE");d.prototype.writeUintBE=d.prototype.writeUIntBE=
o(function(e,t,n,i){if(e=+e,t=t>>>0,n=n>>>0,!i){let u=Math.pow(2,8*n)-1;ue(this,
e,t,n,u,0)}let s=n-1,a=1;for(this[t+s]=e&255;--s>=0&&(a*=256);)this[t+s]=e/a&255;
return t+n},"writeUIntBE");d.prototype.writeUint8=d.prototype.writeUInt8=o(function(e,t,n){
return e=+e,t=t>>>0,n||ue(this,e,t,1,255,0),this[t]=e&255,t+1},"writeUInt8");d.prototype.
writeUint16LE=d.prototype.writeUInt16LE=o(function(e,t,n){return e=+e,t=t>>>0,n||
ue(this,e,t,2,65535,0),this[t]=e&255,this[t+1]=e>>>8,t+2},"writeUInt16LE");d.prototype.
writeUint16BE=d.prototype.writeUInt16BE=o(function(e,t,n){return e=+e,t=t>>>0,n||
ue(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=e&255,t+2},"writeUInt16BE");d.prototype.
writeUint32LE=d.prototype.writeUInt32LE=o(function(e,t,n){return e=+e,t=t>>>0,n||
ue(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=
e&255,t+4},"writeUInt32LE");d.prototype.writeUint32BE=d.prototype.writeUInt32BE=
o(function(e,t,n){return e=+e,t=t>>>0,n||ue(this,e,t,4,4294967295,0),this[t]=e>>>
24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4},"writeUInt32BE");function ei(r,e,t,n,i){
si(e,n,i,r,t,7);let s=Number(e&BigInt(4294967295));r[t++]=s,s=s>>8,r[t++]=s,s=s>>
8,r[t++]=s,s=s>>8,r[t++]=s;let a=Number(e>>BigInt(32)&BigInt(4294967295));return r[t++]=
a,a=a>>8,r[t++]=a,a=a>>8,r[t++]=a,a=a>>8,r[t++]=a,t}o(ei,"wrtBigUInt64LE");function ti(r,e,t,n,i){
si(e,n,i,r,t,7);let s=Number(e&BigInt(4294967295));r[t+7]=s,s=s>>8,r[t+6]=s,s=s>>
8,r[t+5]=s,s=s>>8,r[t+4]=s;let a=Number(e>>BigInt(32)&BigInt(4294967295));return r[t+
3]=a,a=a>>8,r[t+2]=a,a=a>>8,r[t+1]=a,a=a>>8,r[t]=a,t+8}o(ti,"wrtBigUInt64BE");d.
prototype.writeBigUInt64LE=ve(o(function(e,t=0){return ei(this,e,t,BigInt(0),BigInt(
"0xffffffffffffffff"))},"writeBigUInt64LE"));d.prototype.writeBigUInt64BE=ve(o(function(e,t=0){
return ti(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))},"writeBigUInt64BE"));
d.prototype.writeIntLE=o(function(e,t,n,i){if(e=+e,t=t>>>0,!i){let c=Math.pow(2,
8*n-1);ue(this,e,t,n,c-1,-c)}let s=0,a=1,u=0;for(this[t]=e&255;++s<n&&(a*=256);)
e<0&&u===0&&this[t+s-1]!==0&&(u=1),this[t+s]=(e/a>>0)-u&255;return t+n},"writeIn\
tLE");d.prototype.writeIntBE=o(function(e,t,n,i){if(e=+e,t=t>>>0,!i){let c=Math.
pow(2,8*n-1);ue(this,e,t,n,c-1,-c)}let s=n-1,a=1,u=0;for(this[t+s]=e&255;--s>=0&&
(a*=256);)e<0&&u===0&&this[t+s+1]!==0&&(u=1),this[t+s]=(e/a>>0)-u&255;return t+n},
"writeIntBE");d.prototype.writeInt8=o(function(e,t,n){return e=+e,t=t>>>0,n||ue(
this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=e&255,t+1},"writeInt8");d.prototype.
writeInt16LE=o(function(e,t,n){return e=+e,t=t>>>0,n||ue(this,e,t,2,32767,-32768),
this[t]=e&255,this[t+1]=e>>>8,t+2},"writeInt16LE");d.prototype.writeInt16BE=o(function(e,t,n){
return e=+e,t=t>>>0,n||ue(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=e&255,
t+2},"writeInt16BE");d.prototype.writeInt32LE=o(function(e,t,n){return e=+e,t=t>>>
0,n||ue(this,e,t,4,2147483647,-2147483648),this[t]=e&255,this[t+1]=e>>>8,this[t+
2]=e>>>16,this[t+3]=e>>>24,t+4},"writeInt32LE");d.prototype.writeInt32BE=o(function(e,t,n){
return e=+e,t=t>>>0,n||ue(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+
e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4},"write\
Int32BE");d.prototype.writeBigInt64LE=ve(o(function(e,t=0){return ei(this,e,t,-BigInt(
"0x8000000000000000"),BigInt("0x7fffffffffffffff"))},"writeBigInt64LE"));d.prototype.
writeBigInt64BE=ve(o(function(e,t=0){return ti(this,e,t,-BigInt("0x8000000000000\
000"),BigInt("0x7fffffffffffffff"))},"writeBigInt64BE"));function ri(r,e,t,n,i,s){
if(t+n>r.length)throw new RangeError("Index out of range");if(t<0)throw new RangeError(
"Index out of range")}o(ri,"checkIEEE754");function ni(r,e,t,n,i){return e=+e,t=
t>>>0,i||ri(r,e,t,4,34028234663852886e22,-34028234663852886e22),qe.write(r,e,t,n,
23,4),t+4}o(ni,"writeFloat");d.prototype.writeFloatLE=o(function(e,t,n){return ni(
this,e,t,!0,n)},"writeFloatLE");d.prototype.writeFloatBE=o(function(e,t,n){return ni(
this,e,t,!1,n)},"writeFloatBE");function ii(r,e,t,n,i){return e=+e,t=t>>>0,i||ri(
r,e,t,8,17976931348623157e292,-17976931348623157e292),qe.write(r,e,t,n,52,8),t+8}
o(ii,"writeDouble");d.prototype.writeDoubleLE=o(function(e,t,n){return ii(this,e,
t,!0,n)},"writeDoubleLE");d.prototype.writeDoubleBE=o(function(e,t,n){return ii(
this,e,t,!1,n)},"writeDoubleBE");d.prototype.copy=o(function(e,t,n,i){if(!d.isBuffer(
e))throw new TypeError("argument should be a Buffer");if(n||(n=0),!i&&i!==0&&(i=
this.length),t>=e.length&&(t=e.length),t||(t=0),i>0&&i<n&&(i=n),i===n||e.length===
0||this.length===0)return 0;if(t<0)throw new RangeError("targetStart out of boun\
ds");if(n<0||n>=this.length)throw new RangeError("Index out of range");if(i<0)throw new RangeError(
"sourceEnd out of bounds");i>this.length&&(i=this.length),e.length-t<i-n&&(i=e.length-
t+n);let s=i-n;return this===e&&typeof Uint8Array.prototype.copyWithin=="functio\
n"?this.copyWithin(t,n,i):Uint8Array.prototype.set.call(e,this.subarray(n,i),t),
s},"copy");d.prototype.fill=o(function(e,t,n,i){if(typeof e=="string"){if(typeof t==
"string"?(i=t,t=0,n=this.length):typeof n=="string"&&(i=n,n=this.length),i!==void 0&&
typeof i!="string")throw new TypeError("encoding must be a string");if(typeof i==
"string"&&!d.isEncoding(i))throw new TypeError("Unknown encoding: "+i);if(e.length===
1){let a=e.charCodeAt(0);(i==="utf8"&&a<128||i==="latin1")&&(e=a)}}else typeof e==
"number"?e=e&255:typeof e=="boolean"&&(e=Number(e));if(t<0||this.length<t||this.
length<n)throw new RangeError("Out of range index");if(n<=t)return this;t=t>>>0,
n=n===void 0?this.length:n>>>0,e||(e=0);let s;if(typeof e=="number")for(s=t;s<n;++s)
this[s]=e;else{let a=d.isBuffer(e)?e:d.from(e,i),u=a.length;if(u===0)throw new TypeError(
'The value "'+e+'" is invalid for argument "value"');for(s=0;s<n-t;++s)this[s+t]=
a[s%u]}return this},"fill");var Ne={};function fr(r,e,t){Ne[r]=class extends t{static{
o(this,"NodeError")}constructor(){super(),Object.defineProperty(this,"message",{
value:e.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name}\
 [${r}]`,this.stack,delete this.name}get code(){return r}set code(i){Object.defineProperty(
this,"code",{configurable:!0,enumerable:!0,value:i,writable:!0})}toString(){return`${this.
name} [${r}]: ${this.message}`}}}o(fr,"E");fr("ERR_BUFFER_OUT_OF_BOUNDS",function(r){
return r?`${r} is outside of buffer bounds`:"Attempt to access memory outside bu\
ffer bounds"},RangeError);fr("ERR_INVALID_ARG_TYPE",function(r,e){return`The "${r}\
" argument must be of type number. Received type ${typeof e}`},TypeError);fr("ER\
R_OUT_OF_RANGE",function(r,e,t){let n=`The value of "${r}" is out of range.`,i=t;
return Number.isInteger(t)&&Math.abs(t)>2**32?i=Vn(String(t)):typeof t=="bigint"&&
(i=String(t),(t>BigInt(2)**BigInt(32)||t<-(BigInt(2)**BigInt(32)))&&(i=Vn(i)),i+=
"n"),n+=` It must be ${e}. Received ${i}`,n},RangeError);function Vn(r){let e="",
t=r.length,n=r[0]==="-"?1:0;for(;t>=n+4;t-=3)e=`_${r.slice(t-3,t)}${e}`;return`${r.
slice(0,t)}${e}`}o(Vn,"addNumericalSeparator");function Eo(r,e,t){ke(e,"offset"),
(r[e]===void 0||r[e+t]===void 0)&&it(e,r.length-(t+1))}o(Eo,"checkBounds");function si(r,e,t,n,i,s){
if(r>t||r<e){let a=typeof e=="bigint"?"n":"",u;throw s>3?e===0||e===BigInt(0)?u=
`>= 0${a} and < 2${a} ** ${(s+1)*8}${a}`:u=`>= -(2${a} ** ${(s+1)*8-1}${a}) and \
< 2 ** ${(s+1)*8-1}${a}`:u=`>= ${e}${a} and <= ${t}${a}`,new Ne.ERR_OUT_OF_RANGE(
"value",u,r)}Eo(n,i,s)}o(si,"checkIntBI");function ke(r,e){if(typeof r!="number")
throw new Ne.ERR_INVALID_ARG_TYPE(e,"number",r)}o(ke,"validateNumber");function it(r,e,t){
throw Math.floor(r)!==r?(ke(r,t),new Ne.ERR_OUT_OF_RANGE(t||"offset","an integer",
r)):e<0?new Ne.ERR_BUFFER_OUT_OF_BOUNDS:new Ne.ERR_OUT_OF_RANGE(t||"offset",`>= ${t?
1:0} and <= ${e}`,r)}o(it,"boundsError");var bo=/[^+/0-9A-Za-z-_]/g;function xo(r){
if(r=r.split("=")[0],r=r.trim().replace(bo,""),r.length<2)return"";for(;r.length%
4!==0;)r=r+"=";return r}o(xo,"base64clean");function cr(r,e){e=e||1/0;let t,n=r.
length,i=null,s=[];for(let a=0;a<n;++a){if(t=r.charCodeAt(a),t>55295&&t<57344){if(!i){
if(t>56319){(e-=3)>-1&&s.push(239,191,189);continue}else if(a+1===n){(e-=3)>-1&&
s.push(239,191,189);continue}i=t;continue}if(t<56320){(e-=3)>-1&&s.push(239,191,
189),i=t;continue}t=(i-55296<<10|t-56320)+65536}else i&&(e-=3)>-1&&s.push(239,191,
189);if(i=null,t<128){if((e-=1)<0)break;s.push(t)}else if(t<2048){if((e-=2)<0)break;
s.push(t>>6|192,t&63|128)}else if(t<65536){if((e-=3)<0)break;s.push(t>>12|224,t>>
6&63|128,t&63|128)}else if(t<1114112){if((e-=4)<0)break;s.push(t>>18|240,t>>12&63|
128,t>>6&63|128,t&63|128)}else throw new Error("Invalid code point")}return s}o(
cr,"utf8ToBytes");function Ao(r){let e=[];for(let t=0;t<r.length;++t)e.push(r.charCodeAt(
t)&255);return e}o(Ao,"asciiToBytes");function vo(r,e){let t,n,i,s=[];for(let a=0;a<
r.length&&!((e-=2)<0);++a)t=r.charCodeAt(a),n=t>>8,i=t%256,s.push(i),s.push(n);return s}
o(vo,"utf16leToBytes");function ai(r){return ar.toByteArray(xo(r))}o(ai,"base64T\
oBytes");function It(r,e,t,n){let i;for(i=0;i<n&&!(i+t>=e.length||i>=r.length);++i)
e[i+t]=r[i];return i}o(It,"blitBuffer");function ge(r,e){return r instanceof e||
r!=null&&r.constructor!=null&&r.constructor.name!=null&&r.constructor.name===e.name}
o(ge,"isInstance");function dr(r){return r!==r}o(dr,"numberIsNaN");var Co=function(){
let r="0123456789abcdef",e=new Array(256);for(let t=0;t<16;++t){let n=t*16;for(let i=0;i<
16;++i)e[n+i]=r[t]+r[i]}return e}();function ve(r){return typeof BigInt>"u"?_o:r}
o(ve,"defineBigIntMethod");function _o(){throw new Error("BigInt not supported")}
o(_o,"BufferBigIntNotDefined")});var C,U,L,x,w,m,y=ae(()=>{"use strict";C=globalThis,U=globalThis.setImmediate??(r=>setTimeout(
r,0)),L=globalThis.clearImmediate??(r=>clearTimeout(r)),x=globalThis.crypto??{};
x.subtle??={};w=typeof globalThis.Buffer=="function"&&typeof globalThis.Buffer.allocUnsafe==
"function"?globalThis.Buffer:oi().Buffer,m=globalThis.process??{};m.env??={};try{
m.nextTick(()=>{})}catch{let e=Promise.resolve();m.nextTick=e.then.bind(e)}});var Ii={};fe(Ii,{parse:()=>Cr});function Cr(r,e=!1){let{protocol:t}=new URL(r),n="\
http:"+r.substring(t.length),{username:i,password:s,host:a,hostname:u,port:c,pathname:l,
search:h,searchParams:f,hash:p}=new URL(n);s=decodeURIComponent(s);let g=i+":"+s,
S=e?Object.fromEntries(f.entries()):h;return{href:r,protocol:t,auth:g,username:i,
password:s,host:a,hostname:u,port:c,pathname:l,search:h,query:S,hash:p}}var _r=ae(
()=>{"use strict";y();o(Cr,"parse")});var Ue=B((uf,Ur)=>{"use strict";y();var He=typeof Reflect=="object"?Reflect:null,
Bi=He&&typeof He.apply=="function"?He.apply:o(function(e,t,n){return Function.prototype.
apply.call(e,t,n)},"ReflectApply"),Dt;He&&typeof He.ownKeys=="function"?Dt=He.ownKeys:
Object.getOwnPropertySymbols?Dt=o(function(e){return Object.getOwnPropertyNames(
e).concat(Object.getOwnPropertySymbols(e))},"ReflectOwnKeys"):Dt=o(function(e){return Object.
getOwnPropertyNames(e)},"ReflectOwnKeys");function Au(r){console&&console.warn&&
console.warn(r)}o(Au,"ProcessEmitWarning");var Ri=Number.isNaN||o(function(e){return e!==
e},"NumberIsNaN");function Q(){Q.init.call(this)}o(Q,"EventEmitter");Ur.exports=
Q;Ur.exports.once=Uu;Q.EventEmitter=Q;Q.prototype._events=void 0;Q.prototype._eventsCount=
0;Q.prototype._maxListeners=void 0;var Pi=10;function Nt(r){if(typeof r!="functi\
on")throw new TypeError('The "listener" argument must be of type Function. Recei\
ved type '+typeof r)}o(Nt,"checkListener");Object.defineProperty(Q,"defaultMaxLi\
steners",{enumerable:!0,get:function(){return Pi},set:function(r){if(typeof r!="\
number"||r<0||Ri(r))throw new RangeError('The value of "defaultMaxListeners" is \
out of range. It must be a non-negative number. Received '+r+".");Pi=r}});Q.init=
function(){(this._events===void 0||this._events===Object.getPrototypeOf(this)._events)&&
(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||
void 0};Q.prototype.setMaxListeners=o(function(e){if(typeof e!="number"||e<0||Ri(
e))throw new RangeError('The value of "n" is out of range. It must be a non-nega\
tive number. Received '+e+".");return this._maxListeners=e,this},"setMaxListener\
s");function Mi(r){return r._maxListeners===void 0?Q.defaultMaxListeners:r._maxListeners}
o(Mi,"_getMaxListeners");Q.prototype.getMaxListeners=o(function(){return Mi(this)},
"getMaxListeners");Q.prototype.emit=o(function(e){for(var t=[],n=1;n<arguments.length;n++)
t.push(arguments[n]);var i=e==="error",s=this._events;if(s!==void 0)i=i&&s.error===
void 0;else if(!i)return!1;if(i){var a;if(t.length>0&&(a=t[0]),a instanceof Error)
throw a;var u=new Error("Unhandled error."+(a?" ("+a.message+")":""));throw u.context=
a,u}var c=s[e];if(c===void 0)return!1;if(typeof c=="function")Bi(c,this,t);else for(var l=c.
length,h=ki(c,l),n=0;n<l;++n)Bi(h[n],this,t);return!0},"emit");function Fi(r,e,t,n){
var i,s,a;if(Nt(t),s=r._events,s===void 0?(s=r._events=Object.create(null),r._eventsCount=
0):(s.newListener!==void 0&&(r.emit("newListener",e,t.listener?t.listener:t),s=r.
_events),a=s[e]),a===void 0)a=s[e]=t,++r._eventsCount;else if(typeof a=="functio\
n"?a=s[e]=n?[t,a]:[a,t]:n?a.unshift(t):a.push(t),i=Mi(r),i>0&&a.length>i&&!a.warned){
a.warned=!0;var u=new Error("Possible EventEmitter memory leak detected. "+a.length+
" "+String(e)+" listeners added. Use emitter.setMaxListeners() to increase limit");
u.name="MaxListenersExceededWarning",u.emitter=r,u.type=e,u.count=a.length,Au(u)}
return r}o(Fi,"_addListener");Q.prototype.addListener=o(function(e,t){return Fi(
this,e,t,!1)},"addListener");Q.prototype.on=Q.prototype.addListener;Q.prototype.
prependListener=o(function(e,t){return Fi(this,e,t,!0)},"prependListener");function vu(){
if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=
!0,arguments.length===0?this.listener.call(this.target):this.listener.apply(this.
target,arguments)}o(vu,"onceWrapper");function Di(r,e,t){var n={fired:!1,wrapFn:void 0,
target:r,type:e,listener:t},i=vu.bind(n);return i.listener=t,n.wrapFn=i,i}o(Di,"\
_onceWrap");Q.prototype.once=o(function(e,t){return Nt(t),this.on(e,Di(this,e,t)),
this},"once");Q.prototype.prependOnceListener=o(function(e,t){return Nt(t),this.
prependListener(e,Di(this,e,t)),this},"prependOnceListener");Q.prototype.removeListener=
o(function(e,t){var n,i,s,a,u;if(Nt(t),i=this._events,i===void 0)return this;if(n=
i[e],n===void 0)return this;if(n===t||n.listener===t)--this._eventsCount===0?this.
_events=Object.create(null):(delete i[e],i.removeListener&&this.emit("removeList\
ener",e,n.listener||t));else if(typeof n!="function"){for(s=-1,a=n.length-1;a>=0;a--)
if(n[a]===t||n[a].listener===t){u=n[a].listener,s=a;break}if(s<0)return this;s===
0?n.shift():Cu(n,s),n.length===1&&(i[e]=n[0]),i.removeListener!==void 0&&this.emit(
"removeListener",e,u||t)}return this},"removeListener");Q.prototype.off=Q.prototype.
removeListener;Q.prototype.removeAllListeners=o(function(e){var t,n,i;if(n=this.
_events,n===void 0)return this;if(n.removeListener===void 0)return arguments.length===
0?(this._events=Object.create(null),this._eventsCount=0):n[e]!==void 0&&(--this.
_eventsCount===0?this._events=Object.create(null):delete n[e]),this;if(arguments.
length===0){var s=Object.keys(n),a;for(i=0;i<s.length;++i)a=s[i],a!=="removeList\
ener"&&this.removeAllListeners(a);return this.removeAllListeners("removeListener"),
this._events=Object.create(null),this._eventsCount=0,this}if(t=n[e],typeof t=="f\
unction")this.removeListener(e,t);else if(t!==void 0)for(i=t.length-1;i>=0;i--)this.
removeListener(e,t[i]);return this},"removeAllListeners");function Ni(r,e,t){var n=r.
_events;if(n===void 0)return[];var i=n[e];return i===void 0?[]:typeof i=="functi\
on"?t?[i.listener||i]:[i]:t?_u(i):ki(i,i.length)}o(Ni,"_listeners");Q.prototype.
listeners=o(function(e){return Ni(this,e,!0)},"listeners");Q.prototype.rawListeners=
o(function(e){return Ni(this,e,!1)},"rawListeners");Q.listenerCount=function(r,e){
return typeof r.listenerCount=="function"?r.listenerCount(e):qi.call(r,e)};Q.prototype.
listenerCount=qi;function qi(r){var e=this._events;if(e!==void 0){var t=e[r];if(typeof t==
"function")return 1;if(t!==void 0)return t.length}return 0}o(qi,"listenerCount");
Q.prototype.eventNames=o(function(){return this._eventsCount>0?Dt(this._events):
[]},"eventNames");function ki(r,e){for(var t=new Array(e),n=0;n<e;++n)t[n]=r[n];
return t}o(ki,"arrayClone");function Cu(r,e){for(;e+1<r.length;e++)r[e]=r[e+1];r.
pop()}o(Cu,"spliceOne");function _u(r){for(var e=new Array(r.length),t=0;t<e.length;++t)
e[t]=r[t].listener||r[t];return e}o(_u,"unwrapListeners");function Uu(r,e){return new Promise(
function(t,n){function i(a){r.removeListener(e,s),n(a)}o(i,"errorListener");function s(){
typeof r.removeListener=="function"&&r.removeListener("error",i),t([].slice.call(
arguments))}o(s,"resolver"),Oi(r,e,s,{once:!0}),e!=="error"&&Lu(r,i,{once:!0})})}
o(Uu,"once");function Lu(r,e,t){typeof r.on=="function"&&Oi(r,"error",e,t)}o(Lu,
"addErrorHandlerIfEventEmitter");function Oi(r,e,t,n){if(typeof r.on=="function")
n.once?r.once(e,t):r.on(e,t);else if(typeof r.addEventListener=="function")r.addEventListener(
e,o(function i(s){n.once&&r.removeEventListener(e,i),t(s)},"wrapListener"));else
throw new TypeError('The "emitter" argument must be of type EventEmitter. Receiv\
ed type '+typeof r)}o(Oi,"eventTargetAgnosticAddListener")});var $i={};fe($i,{Socket:()=>de,isIP:()=>Tu});function Tu(r){return 0}var Qi,de,qt=ae(
()=>{"use strict";y();Qi=nt(Ue(),1);o(Tu,"isIP");de=class r extends Qi.EventEmitter{static{
o(this,"Socket")}static defaults={poolQueryViaFetch:!1,fetchEndpoint:e=>"https:/\
/"+e+"/sql",fetchConnectionCache:!1,fetchFunction:void 0,webSocketConstructor:void 0,
wsProxy:e=>e+"/v2",useSecureWebSocket:!0,forceDisablePgSSL:!0,coalesceWrites:!0,
pipelineConnect:"password",subtls:void 0,rootCerts:"",pipelineTLS:!1,disableSNI:!1};static opts={};opts={};static get poolQueryViaFetch(){
return r.opts.poolQueryViaFetch??r.defaults.poolQueryViaFetch}static set poolQueryViaFetch(e){
r.opts.poolQueryViaFetch=e}static get fetchEndpoint(){return r.opts.fetchEndpoint??
r.defaults.fetchEndpoint}static set fetchEndpoint(e){r.opts.fetchEndpoint=e}static get fetchConnectionCache(){
return r.opts.fetchConnectionCache??r.defaults.fetchConnectionCache}static set fetchConnectionCache(e){
r.opts.fetchConnectionCache=e}static get fetchFunction(){return r.opts.fetchFunction??
r.defaults.fetchFunction}static set fetchFunction(e){r.opts.fetchFunction=e}static get webSocketConstructor(){
return r.opts.webSocketConstructor??r.defaults.webSocketConstructor}static set webSocketConstructor(e){
r.opts.webSocketConstructor=e}get webSocketConstructor(){return this.opts.webSocketConstructor??
r.webSocketConstructor}set webSocketConstructor(e){this.opts.webSocketConstructor=
e}static get wsProxy(){return r.opts.wsProxy??r.defaults.wsProxy}static set wsProxy(e){
r.opts.wsProxy=e}get wsProxy(){return this.opts.wsProxy??r.wsProxy}set wsProxy(e){
this.opts.wsProxy=e}static get coalesceWrites(){return r.opts.coalesceWrites??r.
defaults.coalesceWrites}static set coalesceWrites(e){r.opts.coalesceWrites=e}get coalesceWrites(){
return this.opts.coalesceWrites??r.coalesceWrites}set coalesceWrites(e){this.opts.
coalesceWrites=e}static get useSecureWebSocket(){return r.opts.useSecureWebSocket??
r.defaults.useSecureWebSocket}static set useSecureWebSocket(e){r.opts.useSecureWebSocket=
e}get useSecureWebSocket(){return this.opts.useSecureWebSocket??r.useSecureWebSocket}set useSecureWebSocket(e){
this.opts.useSecureWebSocket=e}static get forceDisablePgSSL(){return r.opts.forceDisablePgSSL??
r.defaults.forceDisablePgSSL}static set forceDisablePgSSL(e){r.opts.forceDisablePgSSL=
e}get forceDisablePgSSL(){return this.opts.forceDisablePgSSL??r.forceDisablePgSSL}set forceDisablePgSSL(e){
this.opts.forceDisablePgSSL=e}static get disableSNI(){return r.opts.disableSNI??
r.defaults.disableSNI}static set disableSNI(e){r.opts.disableSNI=e}get disableSNI(){
return this.opts.disableSNI??r.disableSNI}set disableSNI(e){this.opts.disableSNI=
e}static get pipelineConnect(){return r.opts.pipelineConnect??r.defaults.pipelineConnect}static set pipelineConnect(e){
r.opts.pipelineConnect=e}get pipelineConnect(){return this.opts.pipelineConnect??
r.pipelineConnect}set pipelineConnect(e){this.opts.pipelineConnect=e}static get subtls(){
return r.opts.subtls??r.defaults.subtls}static set subtls(e){r.opts.subtls=e}get subtls(){
return this.opts.subtls??r.subtls}set subtls(e){this.opts.subtls=e}static get pipelineTLS(){
return r.opts.pipelineTLS??r.defaults.pipelineTLS}static set pipelineTLS(e){r.opts.
pipelineTLS=e}get pipelineTLS(){return this.opts.pipelineTLS??r.pipelineTLS}set pipelineTLS(e){
this.opts.pipelineTLS=e}static get rootCerts(){return r.opts.rootCerts??r.defaults.
rootCerts}static set rootCerts(e){r.opts.rootCerts=e}get rootCerts(){return this.
opts.rootCerts??r.rootCerts}set rootCerts(e){this.opts.rootCerts=e}wsProxyAddrForHost(e,t){
let n=this.wsProxy;if(n===void 0)throw new Error("No WebSocket proxy is configur\
ed. Please refer to https://github.com/neondatabase/serverless#run-your-own-webs\
ocket-proxy");return typeof n=="function"?n(e,t):`${n}?address=${e}:${t}`}connecting=!1;pending=!0;writable=!0;encrypted=!1;authorized=!1;destroyed=!1;ws=null;writeBuffer;tlsState=0;tlsRead;tlsWrite;setNoDelay(){
return this}setKeepAlive(){return this}ref(){return this}unref(){return this}async connect(e,t,n){
this.connecting=!0,n&&this.once("connect",n);let i;try{i=this.wsProxyAddrForHost(
t,typeof e=="string"?parseInt(e,10):e)}catch(s){this.emit("error",s),this.emit("\
close");return}return this.ws=await new Promise(async s=>{try{let u=(this.useSecureWebSocket?
"wss:":"ws:")+"//"+i,c;if(this.webSocketConstructor!==void 0)c=new this.webSocketConstructor(
u);else try{c=new WebSocket(u)}catch{c=new __unstable_WebSocket(u)}c.addEventListener(
"open",()=>{s(c)})}catch(a){try{let c=(this.useSecureWebSocket?"https:":"http:")+
"//"+i;await fetch(c,{headers:{Upgrade:"websocket"}}).then(l=>{let h=l.webSocket;
if(h==null)throw a;h.accept(),s(h)})}catch{this.emit("error",new Error("All atte\
mpts to open a WebSocket to connect to the database failed. Please refer to http\
s://github.com/neondatabase/serverless#run-on-node")),this.emit("close");return}}}),
this.ws.binaryType="arraybuffer",this.ws.addEventListener("error",s=>{this.emit(
"error",s),this.emit("close")}),this.ws.addEventListener("close",()=>{this.emit(
"close")}),this.ws.addEventListener("message",s=>{if(this.tlsState===0){let a=w.
from(s.data);this.emit("data",a)}}),this.connecting=!1,this.pending=!1,this.emit(
"connect"),this.emit("ready"),this}async startTls(e){if(this.subtls===void 0)throw new Error(
"For Postgres SSL connections, you must set `neonConfig.subtls` to the subtls li\
brary. See https://github.com/neondatabase/serverless/blob/main/CONFIG.md for mo\
re information.");this.tlsState=1;let t=this.subtls.TrustedCert.fromPEM(this.rootCerts),
n=new this.subtls.WebSocketReadQueue(this.ws),i=n.read.bind(n),s=this.rawWrite.bind(
this),[a,u]=await this.subtls.startTls(e,t,i,s,{useSNI:!this.disableSNI,expectPreData:this.
pipelineTLS?new Uint8Array([83]):void 0});this.tlsRead=a,this.tlsWrite=u,this.tlsState=
2,this.encrypted=!0,this.authorized=!0,this.emit("secureConnection",this),this.tlsReadLoop()}async tlsReadLoop(){
for(;;){let e=await this.tlsRead();if(e===void 0)break;{let t=w.from(e);this.emit(
"data",t)}}}rawWrite(e){if(!this.coalesceWrites){this.ws.send(e);return}if(this.
writeBuffer===void 0)this.writeBuffer=e,setTimeout(()=>{this.ws.send(this.writeBuffer),
this.writeBuffer=void 0},0);else{let t=new Uint8Array(this.writeBuffer.length+e.
length);t.set(this.writeBuffer),t.set(e,this.writeBuffer.length),this.writeBuffer=
t}}write(e,t="utf8",n=i=>{}){return e.length===0?n():(typeof e=="string"&&(e=w.from(
e,t)),this.tlsState===0?this.rawWrite(e):this.tlsState===1?this.once("secureConn\
ection",()=>this.write(e,t,n)):this.tlsWrite(e),!0)}end(e=w.alloc(0),t="utf8",n){
return this.write(e,t,()=>{this.ws.close(),n&&n()}),this}destroy(){return this.destroyed=
!0,this.end()}}});function ut(r){let e=1779033703,t=3144134277,n=1013904242,i=2773480762,s=1359893119,
a=2600822924,u=528734635,c=1541459225,l=0,h=0,f=[1116352408,1899447441,3049323471,
3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,
1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,
604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,
3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,
1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,
3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,
883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,
2361852424,2428436474,2756734187,3204031479,3329325298],p=o((v,E)=>v>>>E|v<<32-E,
"rrot"),g=new Uint32Array(64),S=new Uint8Array(64),A=o(()=>{for(let _=0,P=0;_<16;_++,
P+=4)g[_]=S[P]<<24|S[P+1]<<16|S[P+2]<<8|S[P+3];for(let _=16;_<64;_++){let P=p(g[_-
15],7)^p(g[_-15],18)^g[_-15]>>>3,$=p(g[_-2],17)^p(g[_-2],19)^g[_-2]>>>10;g[_]=g[_-
16]+P+g[_-7]+$|0}let v=e,E=t,M=n,H=i,F=s,Y=a,O=u,G=c;for(let _=0;_<64;_++){let P=p(
F,6)^p(F,11)^p(F,25),$=F&Y^~F&O,D=G+P+$+f[_]+g[_]|0,N=p(v,2)^p(v,13)^p(v,22),j=v&
E^v&M^E&M,q=N+j|0;G=O,O=Y,Y=F,F=H+D|0,H=M,M=E,E=v,v=D+q|0}e=e+v|0,t=t+E|0,n=n+M|
0,i=i+H|0,s=s+F|0,a=a+Y|0,u=u+O|0,c=c+G|0,h=0},"process"),b=o(v=>{typeof v=="str\
ing"&&(v=new TextEncoder().encode(v));for(let E=0;E<v.length;E++)S[h++]=v[E],h===
64&&A();l+=v.length},"add"),T=o(()=>{if(S[h++]=128,h==64&&A(),h+8>64){for(;h<64;)
S[h++]=0;A()}for(;h<58;)S[h++]=0;let v=l*8;S[h++]=v/1099511627776&255,S[h++]=v/4294967296&
255,S[h++]=v>>>24,S[h++]=v>>>16&255,S[h++]=v>>>8&255,S[h++]=v&255,A();let E=new Uint8Array(
32);return E[0]=e>>>24,E[1]=e>>>16&255,E[2]=e>>>8&255,E[3]=e&255,E[4]=t>>>24,E[5]=
t>>>16&255,E[6]=t>>>8&255,E[7]=t&255,E[8]=n>>>24,E[9]=n>>>16&255,E[10]=n>>>8&255,
E[11]=n&255,E[12]=i>>>24,E[13]=i>>>16&255,E[14]=i>>>8&255,E[15]=i&255,E[16]=s>>>
24,E[17]=s>>>16&255,E[18]=s>>>8&255,E[19]=s&255,E[20]=a>>>24,E[21]=a>>>16&255,E[22]=
a>>>8&255,E[23]=a&255,E[24]=u>>>24,E[25]=u>>>16&255,E[26]=u>>>8&255,E[27]=u&255,
E[28]=c>>>24,E[29]=c>>>16&255,E[30]=c>>>8&255,E[31]=c&255,E},"digest");return r===
void 0?{add:b,digest:T}:(b(r),T())}var ji=ae(()=>{"use strict";y();o(ut,"sha256")});var ct,Hi=ae(()=>{"use strict";y();ct=class r{static{o(this,"Md5")}static hashByteArray(e,t=!1){
return this.onePassHasher.start().appendByteArray(e).end(t)}static hashStr(e,t=!1){
return this.onePassHasher.start().appendStr(e).end(t)}static hashAsciiStr(e,t=!1){
return this.onePassHasher.start().appendAsciiStr(e).end(t)}static stateIdentity=new Int32Array(
[1732584193,-271733879,-1732584194,271733878]);static buffer32Identity=new Int32Array(
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);static hexChars="0123456789abcdef";static hexOut=[];static onePassHasher=new r;static _hex(e){
let t=r.hexChars,n=r.hexOut,i,s,a,u;for(u=0;u<4;u+=1)for(s=u*8,i=e[u],a=0;a<8;a+=
2)n[s+1+a]=t.charAt(i&15),i>>>=4,n[s+0+a]=t.charAt(i&15),i>>>=4;return n.join("")}static _md5cycle(e,t){
let n=e[0],i=e[1],s=e[2],a=e[3];n+=(i&s|~i&a)+t[0]-680876936|0,n=(n<<7|n>>>25)+i|
0,a+=(n&i|~n&s)+t[1]-389564586|0,a=(a<<12|a>>>20)+n|0,s+=(a&n|~a&i)+t[2]+606105819|
0,s=(s<<17|s>>>15)+a|0,i+=(s&a|~s&n)+t[3]-1044525330|0,i=(i<<22|i>>>10)+s|0,n+=(i&
s|~i&a)+t[4]-176418897|0,n=(n<<7|n>>>25)+i|0,a+=(n&i|~n&s)+t[5]+1200080426|0,a=(a<<
12|a>>>20)+n|0,s+=(a&n|~a&i)+t[6]-1473231341|0,s=(s<<17|s>>>15)+a|0,i+=(s&a|~s&n)+
t[7]-45705983|0,i=(i<<22|i>>>10)+s|0,n+=(i&s|~i&a)+t[8]+1770035416|0,n=(n<<7|n>>>
25)+i|0,a+=(n&i|~n&s)+t[9]-1958414417|0,a=(a<<12|a>>>20)+n|0,s+=(a&n|~a&i)+t[10]-
42063|0,s=(s<<17|s>>>15)+a|0,i+=(s&a|~s&n)+t[11]-1990404162|0,i=(i<<22|i>>>10)+s|
0,n+=(i&s|~i&a)+t[12]+1804603682|0,n=(n<<7|n>>>25)+i|0,a+=(n&i|~n&s)+t[13]-40341101|
0,a=(a<<12|a>>>20)+n|0,s+=(a&n|~a&i)+t[14]-1502002290|0,s=(s<<17|s>>>15)+a|0,i+=
(s&a|~s&n)+t[15]+1236535329|0,i=(i<<22|i>>>10)+s|0,n+=(i&a|s&~a)+t[1]-165796510|
0,n=(n<<5|n>>>27)+i|0,a+=(n&s|i&~s)+t[6]-1069501632|0,a=(a<<9|a>>>23)+n|0,s+=(a&
i|n&~i)+t[11]+643717713|0,s=(s<<14|s>>>18)+a|0,i+=(s&n|a&~n)+t[0]-373897302|0,i=
(i<<20|i>>>12)+s|0,n+=(i&a|s&~a)+t[5]-701558691|0,n=(n<<5|n>>>27)+i|0,a+=(n&s|i&
~s)+t[10]+38016083|0,a=(a<<9|a>>>23)+n|0,s+=(a&i|n&~i)+t[15]-660478335|0,s=(s<<14|
s>>>18)+a|0,i+=(s&n|a&~n)+t[4]-405537848|0,i=(i<<20|i>>>12)+s|0,n+=(i&a|s&~a)+t[9]+
568446438|0,n=(n<<5|n>>>27)+i|0,a+=(n&s|i&~s)+t[14]-1019803690|0,a=(a<<9|a>>>23)+
n|0,s+=(a&i|n&~i)+t[3]-187363961|0,s=(s<<14|s>>>18)+a|0,i+=(s&n|a&~n)+t[8]+1163531501|
0,i=(i<<20|i>>>12)+s|0,n+=(i&a|s&~a)+t[13]-1444681467|0,n=(n<<5|n>>>27)+i|0,a+=(n&
s|i&~s)+t[2]-51403784|0,a=(a<<9|a>>>23)+n|0,s+=(a&i|n&~i)+t[7]+1735328473|0,s=(s<<
14|s>>>18)+a|0,i+=(s&n|a&~n)+t[12]-1926607734|0,i=(i<<20|i>>>12)+s|0,n+=(i^s^a)+
t[5]-378558|0,n=(n<<4|n>>>28)+i|0,a+=(n^i^s)+t[8]-2022574463|0,a=(a<<11|a>>>21)+
n|0,s+=(a^n^i)+t[11]+1839030562|0,s=(s<<16|s>>>16)+a|0,i+=(s^a^n)+t[14]-35309556|
0,i=(i<<23|i>>>9)+s|0,n+=(i^s^a)+t[1]-1530992060|0,n=(n<<4|n>>>28)+i|0,a+=(n^i^s)+
t[4]+1272893353|0,a=(a<<11|a>>>21)+n|0,s+=(a^n^i)+t[7]-155497632|0,s=(s<<16|s>>>
16)+a|0,i+=(s^a^n)+t[10]-1094730640|0,i=(i<<23|i>>>9)+s|0,n+=(i^s^a)+t[13]+681279174|
0,n=(n<<4|n>>>28)+i|0,a+=(n^i^s)+t[0]-358537222|0,a=(a<<11|a>>>21)+n|0,s+=(a^n^i)+
t[3]-722521979|0,s=(s<<16|s>>>16)+a|0,i+=(s^a^n)+t[6]+76029189|0,i=(i<<23|i>>>9)+
s|0,n+=(i^s^a)+t[9]-640364487|0,n=(n<<4|n>>>28)+i|0,a+=(n^i^s)+t[12]-421815835|0,
a=(a<<11|a>>>21)+n|0,s+=(a^n^i)+t[15]+530742520|0,s=(s<<16|s>>>16)+a|0,i+=(s^a^n)+
t[2]-995338651|0,i=(i<<23|i>>>9)+s|0,n+=(s^(i|~a))+t[0]-198630844|0,n=(n<<6|n>>>
26)+i|0,a+=(i^(n|~s))+t[7]+1126891415|0,a=(a<<10|a>>>22)+n|0,s+=(n^(a|~i))+t[14]-
1416354905|0,s=(s<<15|s>>>17)+a|0,i+=(a^(s|~n))+t[5]-57434055|0,i=(i<<21|i>>>11)+
s|0,n+=(s^(i|~a))+t[12]+1700485571|0,n=(n<<6|n>>>26)+i|0,a+=(i^(n|~s))+t[3]-1894986606|
0,a=(a<<10|a>>>22)+n|0,s+=(n^(a|~i))+t[10]-1051523|0,s=(s<<15|s>>>17)+a|0,i+=(a^
(s|~n))+t[1]-2054922799|0,i=(i<<21|i>>>11)+s|0,n+=(s^(i|~a))+t[8]+1873313359|0,n=
(n<<6|n>>>26)+i|0,a+=(i^(n|~s))+t[15]-30611744|0,a=(a<<10|a>>>22)+n|0,s+=(n^(a|~i))+
t[6]-1560198380|0,s=(s<<15|s>>>17)+a|0,i+=(a^(s|~n))+t[13]+1309151649|0,i=(i<<21|
i>>>11)+s|0,n+=(s^(i|~a))+t[4]-145523070|0,n=(n<<6|n>>>26)+i|0,a+=(i^(n|~s))+t[11]-
1120210379|0,a=(a<<10|a>>>22)+n|0,s+=(n^(a|~i))+t[2]+718787259|0,s=(s<<15|s>>>17)+
a|0,i+=(a^(s|~n))+t[9]-343485551|0,i=(i<<21|i>>>11)+s|0,e[0]=n+e[0]|0,e[1]=i+e[1]|
0,e[2]=s+e[2]|0,e[3]=a+e[3]|0}_dataLength=0;_bufferLength=0;_state=new Int32Array(
4);_buffer=new ArrayBuffer(68);_buffer8;_buffer32;constructor(){this._buffer8=new Uint8Array(
this._buffer,0,68),this._buffer32=new Uint32Array(this._buffer,0,17),this.start()}start(){
return this._dataLength=0,this._bufferLength=0,this._state.set(r.stateIdentity),
this}appendStr(e){let t=this._buffer8,n=this._buffer32,i=this._bufferLength,s,a;
for(a=0;a<e.length;a+=1){if(s=e.charCodeAt(a),s<128)t[i++]=s;else if(s<2048)t[i++]=
(s>>>6)+192,t[i++]=s&63|128;else if(s<55296||s>56319)t[i++]=(s>>>12)+224,t[i++]=
s>>>6&63|128,t[i++]=s&63|128;else{if(s=(s-55296)*1024+(e.charCodeAt(++a)-56320)+
65536,s>1114111)throw new Error("Unicode standard supports code points up to U+1\
0FFFF");t[i++]=(s>>>18)+240,t[i++]=s>>>12&63|128,t[i++]=s>>>6&63|128,t[i++]=s&63|
128}i>=64&&(this._dataLength+=64,r._md5cycle(this._state,n),i-=64,n[0]=n[16])}return this.
_bufferLength=i,this}appendAsciiStr(e){let t=this._buffer8,n=this._buffer32,i=this.
_bufferLength,s,a=0;for(;;){for(s=Math.min(e.length-a,64-i);s--;)t[i++]=e.charCodeAt(
a++);if(i<64)break;this._dataLength+=64,r._md5cycle(this._state,n),i=0}return this.
_bufferLength=i,this}appendByteArray(e){let t=this._buffer8,n=this._buffer32,i=this.
_bufferLength,s,a=0;for(;;){for(s=Math.min(e.length-a,64-i);s--;)t[i++]=e[a++];if(i<
64)break;this._dataLength+=64,r._md5cycle(this._state,n),i=0}return this._bufferLength=
i,this}getState(){let e=this._state;return{buffer:String.fromCharCode.apply(null,
Array.from(this._buffer8)),buflen:this._bufferLength,length:this._dataLength,state:[
e[0],e[1],e[2],e[3]]}}setState(e){let t=e.buffer,n=e.state,i=this._state,s;for(this.
_dataLength=e.length,this._bufferLength=e.buflen,i[0]=n[0],i[1]=n[1],i[2]=n[2],i[3]=
n[3],s=0;s<t.length;s+=1)this._buffer8[s]=t.charCodeAt(s)}end(e=!1){let t=this._bufferLength,
n=this._buffer8,i=this._buffer32,s=(t>>2)+1;this._dataLength+=t;let a=this._dataLength*
8;if(n[t]=128,n[t+1]=n[t+2]=n[t+3]=0,i.set(r.buffer32Identity.subarray(s),s),t>55&&
(r._md5cycle(this._state,i),i.set(r.buffer32Identity)),a<=4294967295)i[14]=a;else{
let u=a.toString(16).match(/(.*?)(.{0,8})$/);if(u===null)return;let c=parseInt(u[2],
16),l=parseInt(u[1],16)||0;i[14]=c,i[15]=l}return r._md5cycle(this._state,i),e?this.
_state:r._hex(this._state)}}});var Lr={};fe(Lr,{createHash:()=>Bu,createHmac:()=>Pu,randomBytes:()=>Iu});function Iu(r){
return x.getRandomValues(w.alloc(r))}function Bu(r){if(r==="sha256")return{update:function(e){
return{digest:function(){return w.from(ut(e))}}}};if(r==="md5")return{update:function(e){
return{digest:function(){return typeof e=="string"?ct.hashStr(e):ct.hashByteArray(
e)}}}};throw new Error(`Hash type '${r}' not supported`)}function Pu(r,e){if(r!==
"sha256")throw new Error(`Only sha256 is supported (requested: '${r}')`);return{
update:function(t){return{digest:function(){typeof e=="string"&&(e=new TextEncoder().
encode(e)),typeof t=="string"&&(t=new TextEncoder().encode(t));let n=e.length;if(n>
64)e=ut(e);else if(n<64){let c=new Uint8Array(64);c.set(e),e=c}let i=new Uint8Array(
64),s=new Uint8Array(64);for(let c=0;c<64;c++)i[c]=54^e[c],s[c]=92^e[c];let a=new Uint8Array(
t.length+64);a.set(i,0),a.set(t,64);let u=new Uint8Array(64+32);return u.set(s,0),
u.set(ut(a),64),w.from(ut(u))}}}}}var Tr=ae(()=>{y();ji();Hi();o(Iu,"randomBytes");
o(Bu,"createHash");o(Pu,"createHmac")});var Br=B(Ki=>{"use strict";y();Ki.parse=function(r,e){return new Ir(r,e).parse()};
var Ir=class r{static{o(this,"ArrayParser")}constructor(e,t){this.source=e,this.
transform=t||Ru,this.position=0,this.entries=[],this.recorded=[],this.dimension=
0}isEof(){return this.position>=this.source.length}nextCharacter(){var e=this.source[this.
position++];return e==="\\"?{value:this.source[this.position++],escaped:!0}:{value:e,
escaped:!1}}record(e){this.recorded.push(e)}newEntry(e){var t;(this.recorded.length>
0||e)&&(t=this.recorded.join(""),t==="NULL"&&!e&&(t=null),t!==null&&(t=this.transform(
t)),this.entries.push(t),this.recorded=[])}consumeDimensions(){if(this.source[0]===
"[")for(;!this.isEof();){var e=this.nextCharacter();if(e.value==="=")break}}parse(e){
var t,n,i;for(this.consumeDimensions();!this.isEof();)if(t=this.nextCharacter(),
t.value==="{"&&!i)this.dimension++,this.dimension>1&&(n=new r(this.source.substr(
this.position-1),this.transform),this.entries.push(n.parse(!0)),this.position+=n.
position-2);else if(t.value==="}"&&!i){if(this.dimension--,!this.dimension&&(this.
newEntry(),e))return this.entries}else t.value==='"'&&!t.escaped?(i&&this.newEntry(
!0),i=!i):t.value===","&&!i?this.newEntry():this.record(t.value);if(this.dimension!==
0)throw new Error("array dimension not balanced");return this.entries}};function Ru(r){
return r}o(Ru,"identity")});var Pr=B((_f,Wi)=>{y();var Mu=Br();Wi.exports={create:function(r,e){return{parse:function(){
return Mu.parse(r,e)}}}}});var zi=B((Lf,Vi)=>{"use strict";y();var Fu=/(\d{1,})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2})(\.\d{1,})?.*?( BC)?$/,
Du=/^(\d{1,})-(\d{2})-(\d{2})( BC)?$/,Nu=/([Z+-])(\d{2})?:?(\d{2})?:?(\d{2})?/,qu=/^-?infinity$/;
Vi.exports=o(function(e){if(qu.test(e))return Number(e.replace("i","I"));var t=Fu.
exec(e);if(!t)return ku(e)||null;var n=!!t[8],i=parseInt(t[1],10);n&&(i=Gi(i));var s=parseInt(
t[2],10)-1,a=t[3],u=parseInt(t[4],10),c=parseInt(t[5],10),l=parseInt(t[6],10),h=t[7];
h=h?1e3*parseFloat(h):0;var f,p=Ou(e);return p!=null?(f=new Date(Date.UTC(i,s,a,
u,c,l,h)),Rr(i)&&f.setUTCFullYear(i),p!==0&&f.setTime(f.getTime()-p)):(f=new Date(
i,s,a,u,c,l,h),Rr(i)&&f.setFullYear(i)),f},"parseDate");function ku(r){var e=Du.
exec(r);if(e){var t=parseInt(e[1],10),n=!!e[4];n&&(t=Gi(t));var i=parseInt(e[2],
10)-1,s=e[3],a=new Date(t,i,s);return Rr(t)&&a.setFullYear(t),a}}o(ku,"getDate");
function Ou(r){if(r.endsWith("+00"))return 0;var e=Nu.exec(r.split(" ")[1]);if(e){
var t=e[1];if(t==="Z")return 0;var n=t==="-"?-1:1,i=parseInt(e[2],10)*3600+parseInt(
e[3]||0,10)*60+parseInt(e[4]||0,10);return i*n*1e3}}o(Ou,"timeZoneOffset");function Gi(r){
return-(r-1)}o(Gi,"bcYearToNegativeYear");function Rr(r){return r>=0&&r<100}o(Rr,
"is0To99")});var Ji=B((Bf,Yi)=>{y();Yi.exports=$u;var Qu=Object.prototype.hasOwnProperty;function $u(r){
for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Qu.call(t,
n)&&(r[n]=t[n])}return r}o($u,"extend")});var es=B((Mf,Xi)=>{"use strict";y();var ju=Ji();Xi.exports=Ke;function Ke(r){if(!(this instanceof
Ke))return new Ke(r);ju(this,tc(r))}o(Ke,"PostgresInterval");var Hu=["seconds","\
minutes","hours","days","months","years"];Ke.prototype.toPostgres=function(){var r=Hu.
filter(this.hasOwnProperty,this);return this.milliseconds&&r.indexOf("seconds")<
0&&r.push("seconds"),r.length===0?"0":r.map(function(e){var t=this[e]||0;return e===
"seconds"&&this.milliseconds&&(t=(t+this.milliseconds/1e3).toFixed(6).replace(/\.?0+$/,
"")),t+" "+e},this).join(" ")};var Ku={years:"Y",months:"M",days:"D",hours:"H",minutes:"\
M",seconds:"S"},Wu=["years","months","days"],Gu=["hours","minutes","seconds"];Ke.
prototype.toISOString=Ke.prototype.toISO=function(){var r=Wu.map(t,this).join(""),
e=Gu.map(t,this).join("");return"P"+r+"T"+e;function t(n){var i=this[n]||0;return n===
"seconds"&&this.milliseconds&&(i=(i+this.milliseconds/1e3).toFixed(6).replace(/0+$/,
"")),i+Ku[n]}};var Mr="([+-]?\\d+)",Vu=Mr+"\\s+years?",zu=Mr+"\\s+mons?",Yu=Mr+"\
\\s+days?",Ju="([+-])?([\\d]*):(\\d\\d):(\\d\\d)\\.?(\\d{1,6})?",Zu=new RegExp([
Vu,zu,Yu,Ju].map(function(r){return"("+r+")?"}).join("\\s*")),Zi={years:2,months:4,
days:6,hours:9,minutes:10,seconds:11,milliseconds:12},Xu=["hours","minutes","sec\
onds","milliseconds"];function ec(r){var e=r+"000000".slice(r.length);return parseInt(
e,10)/1e3}o(ec,"parseMilliseconds");function tc(r){if(!r)return{};var e=Zu.exec(
r),t=e[8]==="-";return Object.keys(Zi).reduce(function(n,i){var s=Zi[i],a=e[s];return!a||
(a=i==="milliseconds"?ec(a):parseInt(a,10),!a)||(t&&~Xu.indexOf(i)&&(a*=-1),n[i]=
a),n},{})}o(tc,"parse")});var rs=B((Nf,ts)=>{"use strict";y();ts.exports=o(function(e){if(/^\\x/.test(e))return new w(
e.substr(2),"hex");for(var t="",n=0;n<e.length;)if(e[n]!=="\\")t+=e[n],++n;else if(/[0-7]{3}/.
test(e.substr(n+1,3)))t+=String.fromCharCode(parseInt(e.substr(n+1,3),8)),n+=4;else{
for(var i=1;n+i<e.length&&e[n+i]==="\\";)i++;for(var s=0;s<Math.floor(i/2);++s)t+=
"\\";n+=Math.floor(i/2)*2}return new w(t,"binary")},"parseBytea")});var cs=B((Of,us)=>{y();var lt=Br(),ht=Pr(),kt=zi(),is=es(),ss=rs();function Ot(r){
return o(function(t){return t===null?t:r(t)},"nullAllowed")}o(Ot,"allowNull");function as(r){
return r===null?r:r==="TRUE"||r==="t"||r==="true"||r==="y"||r==="yes"||r==="on"||
r==="1"}o(as,"parseBool");function rc(r){return r?lt.parse(r,as):null}o(rc,"pars\
eBoolArray");function nc(r){return parseInt(r,10)}o(nc,"parseBaseTenInt");function Fr(r){
return r?lt.parse(r,Ot(nc)):null}o(Fr,"parseIntegerArray");function ic(r){return r?
lt.parse(r,Ot(function(e){return os(e).trim()})):null}o(ic,"parseBigIntegerArray");
var sc=o(function(r){if(!r)return null;var e=ht.create(r,function(t){return t!==
null&&(t=kr(t)),t});return e.parse()},"parsePointArray"),Dr=o(function(r){if(!r)
return null;var e=ht.create(r,function(t){return t!==null&&(t=parseFloat(t)),t});
return e.parse()},"parseFloatArray"),ye=o(function(r){if(!r)return null;var e=ht.
create(r);return e.parse()},"parseStringArray"),Nr=o(function(r){if(!r)return null;
var e=ht.create(r,function(t){return t!==null&&(t=kt(t)),t});return e.parse()},"\
parseDateArray"),ac=o(function(r){if(!r)return null;var e=ht.create(r,function(t){
return t!==null&&(t=is(t)),t});return e.parse()},"parseIntervalArray"),oc=o(function(r){
return r?lt.parse(r,Ot(ss)):null},"parseByteAArray"),qr=o(function(r){return parseInt(
r,10)},"parseInteger"),os=o(function(r){var e=String(r);return/^\d+$/.test(e)?e:
r},"parseBigInteger"),ns=o(function(r){return r?lt.parse(r,Ot(JSON.parse)):null},
"parseJsonArray"),kr=o(function(r){return r[0]!=="("?null:(r=r.substring(1,r.length-
1).split(","),{x:parseFloat(r[0]),y:parseFloat(r[1])})},"parsePoint"),uc=o(function(r){
if(r[0]!=="<"&&r[1]!=="(")return null;for(var e="(",t="",n=!1,i=2;i<r.length-1;i++){
if(n||(e+=r[i]),r[i]===")"){n=!0;continue}else if(!n)continue;r[i]!==","&&(t+=r[i])}
var s=kr(e);return s.radius=parseFloat(t),s},"parseCircle"),cc=o(function(r){r(20,
os),r(21,qr),r(23,qr),r(26,qr),r(700,parseFloat),r(701,parseFloat),r(16,as),r(1082,
kt),r(1114,kt),r(1184,kt),r(600,kr),r(651,ye),r(718,uc),r(1e3,rc),r(1001,oc),r(1005,
Fr),r(1007,Fr),r(1028,Fr),r(1016,ic),r(1017,sc),r(1021,Dr),r(1022,Dr),r(1231,Dr),
r(1014,ye),r(1015,ye),r(1008,ye),r(1009,ye),r(1040,ye),r(1041,ye),r(1115,Nr),r(1182,
Nr),r(1185,Nr),r(1186,is),r(1187,ac),r(17,ss),r(114,JSON.parse.bind(JSON)),r(3802,
JSON.parse.bind(JSON)),r(199,ns),r(3807,ns),r(3907,ye),r(2951,ye),r(791,ye),r(1183,
ye),r(1270,ye)},"init");us.exports={init:cc}});var hs=B((jf,ls)=>{"use strict";y();var ce=1e6;function lc(r){var e=r.readInt32BE(
0),t=r.readUInt32BE(4),n="";e<0&&(e=~e+(t===0),t=~t+1>>>0,n="-");var i="",s,a,u,
c,l,h;{if(s=e%ce,e=e/ce>>>0,a=4294967296*s+t,t=a/ce>>>0,u=""+(a-ce*t),t===0&&e===
0)return n+u+i;for(c="",l=6-u.length,h=0;h<l;h++)c+="0";i=c+u+i}{if(s=e%ce,e=e/ce>>>
0,a=4294967296*s+t,t=a/ce>>>0,u=""+(a-ce*t),t===0&&e===0)return n+u+i;for(c="",l=
6-u.length,h=0;h<l;h++)c+="0";i=c+u+i}{if(s=e%ce,e=e/ce>>>0,a=4294967296*s+t,t=a/
ce>>>0,u=""+(a-ce*t),t===0&&e===0)return n+u+i;for(c="",l=6-u.length,h=0;h<l;h++)
c+="0";i=c+u+i}return s=e%ce,a=4294967296*s+t,u=""+a%ce,n+u+i}o(lc,"readInt8");ls.
exports=lc});var ws=B((Wf,ys)=>{y();var hc=hs(),K=o(function(r,e,t,n,i){t=t||0,n=n||!1,i=i||function(g,S,A){
return g*Math.pow(2,A)+S};var s=t>>3,a=o(function(g){return n?~g&255:g},"inv"),u=255,
c=8-t%8;e<c&&(u=255<<8-e&255,c=e),t&&(u=u>>t%8);var l=0;t%8+e>=8&&(l=i(0,a(r[s])&
u,c));for(var h=e+t>>3,f=s+1;f<h;f++)l=i(l,a(r[f]),8);var p=(e+t)%8;return p>0&&
(l=i(l,a(r[h])>>8-p,p)),l},"parseBits"),ps=o(function(r,e,t){var n=Math.pow(2,t-
1)-1,i=K(r,1),s=K(r,t,1);if(s===0)return 0;var a=1,u=o(function(l,h,f){l===0&&(l=
1);for(var p=1;p<=f;p++)a/=2,(h&1<<f-p)>0&&(l+=a);return l},"parsePrecisionBits"),
c=K(r,e,t+1,!1,u);return s==Math.pow(2,t+1)-1?c===0?i===0?1/0:-1/0:NaN:(i===0?1:
-1)*Math.pow(2,s-n)*c},"parseFloatFromBits"),fc=o(function(r){return K(r,1)==1?-1*
(K(r,15,1,!0)+1):K(r,15,1)},"parseInt16"),fs=o(function(r){return K(r,1)==1?-1*(K(
r,31,1,!0)+1):K(r,31,1)},"parseInt32"),dc=o(function(r){return ps(r,23,8)},"pars\
eFloat32"),pc=o(function(r){return ps(r,52,11)},"parseFloat64"),yc=o(function(r){
var e=K(r,16,32);if(e==49152)return NaN;for(var t=Math.pow(1e4,K(r,16,16)),n=0,i=[],
s=K(r,16),a=0;a<s;a++)n+=K(r,16,64+16*a)*t,t/=1e4;var u=Math.pow(10,K(r,16,48));
return(e===0?1:-1)*Math.round(n*u)/u},"parseNumeric"),ds=o(function(r,e){var t=K(
e,1),n=K(e,63,1),i=new Date((t===0?1:-1)*n/1e3+9466848e5);return r||i.setTime(i.
getTime()+i.getTimezoneOffset()*6e4),i.usec=n%1e3,i.getMicroSeconds=function(){return this.
usec},i.setMicroSeconds=function(s){this.usec=s},i.getUTCMicroSeconds=function(){
return this.usec},i},"parseDate"),ft=o(function(r){for(var e=K(r,32),t=K(r,32,32),
n=K(r,32,64),i=96,s=[],a=0;a<e;a++)s[a]=K(r,32,i),i+=32,i+=32;var u=o(function(l){
var h=K(r,32,i);if(i+=32,h==4294967295)return null;var f;if(l==23||l==20)return f=
K(r,h*8,i),i+=h*8,f;if(l==25)return f=r.toString(this.encoding,i>>3,(i+=h<<3)>>3),
f;console.log("ERROR: ElementType not implemented: "+l)},"parseElement"),c=o(function(l,h){
var f=[],p;if(l.length>1){var g=l.shift();for(p=0;p<g;p++)f[p]=c(l,h);l.unshift(
g)}else for(p=0;p<l[0];p++)f[p]=u(h);return f},"parse");return c(s,n)},"parseArr\
ay"),wc=o(function(r){return r.toString("utf8")},"parseText"),mc=o(function(r){return r===
null?null:K(r,8)>0},"parseBool"),gc=o(function(r){r(20,hc),r(21,fc),r(23,fs),r(26,
fs),r(1700,yc),r(700,dc),r(701,pc),r(16,mc),r(1114,ds.bind(null,!1)),r(1184,ds.bind(
null,!0)),r(1e3,ft),r(1007,ft),r(1016,ft),r(1008,ft),r(1009,ft),r(25,wc)},"init");
ys.exports={init:gc}});var gs=B((zf,ms)=>{y();ms.exports={BOOL:16,BYTEA:17,CHAR:18,INT8:20,INT2:21,INT4:23,
REGPROC:24,TEXT:25,OID:26,TID:27,XID:28,CID:29,JSON:114,XML:142,PG_NODE_TREE:194,
SMGR:210,PATH:602,POLYGON:604,CIDR:650,FLOAT4:700,FLOAT8:701,ABSTIME:702,RELTIME:703,
TINTERVAL:704,CIRCLE:718,MACADDR8:774,MONEY:790,MACADDR:829,INET:869,ACLITEM:1033,
BPCHAR:1042,VARCHAR:1043,DATE:1082,TIME:1083,TIMESTAMP:1114,TIMESTAMPTZ:1184,INTERVAL:1186,
TIMETZ:1266,BIT:1560,VARBIT:1562,NUMERIC:1700,REFCURSOR:1790,REGPROCEDURE:2202,REGOPER:2203,
REGOPERATOR:2204,REGCLASS:2205,REGTYPE:2206,UUID:2950,TXID_SNAPSHOT:2970,PG_LSN:3220,
PG_NDISTINCT:3361,PG_DEPENDENCIES:3402,TSVECTOR:3614,TSQUERY:3615,GTSVECTOR:3642,
REGCONFIG:3734,REGDICTIONARY:3769,JSONB:3802,REGNAMESPACE:4089,REGROLE:4096}});var yt=B(pt=>{y();var Sc=cs(),Ec=ws(),bc=Pr(),xc=gs();pt.getTypeParser=Ac;pt.setTypeParser=
vc;pt.arrayParser=bc;pt.builtins=xc;var dt={text:{},binary:{}};function Ss(r){return String(
r)}o(Ss,"noParse");function Ac(r,e){return e=e||"text",dt[e]&&dt[e][r]||Ss}o(Ac,
"getTypeParser");function vc(r,e,t){typeof e=="function"&&(t=e,e="text"),dt[e][r]=
t}o(vc,"setTypeParser");Sc.init(function(r,e){dt.text[r]=e});Ec.init(function(r,e){
dt.binary[r]=e})});var wt=B((ed,Or)=>{"use strict";y();Or.exports={host:"localhost",user:m.platform===
"win32"?m.env.USERNAME:m.env.USER,database:void 0,password:null,connectionString:void 0,
port:5432,rows:0,binary:!1,max:10,idleTimeoutMillis:3e4,client_encoding:"",ssl:!1,
application_name:void 0,fallback_application_name:void 0,options:void 0,parseInputDatesAsUTC:!1,
statement_timeout:!1,lock_timeout:!1,idle_in_transaction_session_timeout:!1,query_timeout:!1,
connect_timeout:0,keepalives:1,keepalives_idle:0};var We=yt(),Cc=We.getTypeParser(
20,"text"),_c=We.getTypeParser(1016,"text");Or.exports.__defineSetter__("parseIn\
t8",function(r){We.setTypeParser(20,"text",r?We.getTypeParser(23,"text"):Cc),We.
setTypeParser(1016,"text",r?We.getTypeParser(1007,"text"):_c)})});var mt=B((rd,bs)=>{"use strict";y();var Uc=(Tr(),z(Lr)),Lc=wt();function Tc(r){var e=r.
replace(/\\/g,"\\\\").replace(/"/g,'\\"');return'"'+e+'"'}o(Tc,"escapeElement");
function Es(r){for(var e="{",t=0;t<r.length;t++)t>0&&(e=e+","),r[t]===null||typeof r[t]>
"u"?e=e+"NULL":Array.isArray(r[t])?e=e+Es(r[t]):r[t]instanceof w?e+="\\\\x"+r[t].
toString("hex"):e+=Tc(Qt(r[t]));return e=e+"}",e}o(Es,"arrayString");var Qt=o(function(r,e){
if(r==null)return null;if(r instanceof w)return r;if(ArrayBuffer.isView(r)){var t=w.
from(r.buffer,r.byteOffset,r.byteLength);return t.length===r.byteLength?t:t.slice(
r.byteOffset,r.byteOffset+r.byteLength)}return r instanceof Date?Lc.parseInputDatesAsUTC?
Pc(r):Bc(r):Array.isArray(r)?Es(r):typeof r=="object"?Ic(r,e):r.toString()},"pre\
pareValue");function Ic(r,e){if(r&&typeof r.toPostgres=="function"){if(e=e||[],e.
indexOf(r)!==-1)throw new Error('circular reference detected while preparing "'+
r+'" for query');return e.push(r),Qt(r.toPostgres(Qt),e)}return JSON.stringify(r)}
o(Ic,"prepareObject");function se(r,e){for(r=""+r;r.length<e;)r="0"+r;return r}o(
se,"pad");function Bc(r){var e=-r.getTimezoneOffset(),t=r.getFullYear(),n=t<1;n&&
(t=Math.abs(t)+1);var i=se(t,4)+"-"+se(r.getMonth()+1,2)+"-"+se(r.getDate(),2)+"\
T"+se(r.getHours(),2)+":"+se(r.getMinutes(),2)+":"+se(r.getSeconds(),2)+"."+se(r.
getMilliseconds(),3);return e<0?(i+="-",e*=-1):i+="+",i+=se(Math.floor(e/60),2)+
":"+se(e%60,2),n&&(i+=" BC"),i}o(Bc,"dateToString");function Pc(r){var e=r.getUTCFullYear(),
t=e<1;t&&(e=Math.abs(e)+1);var n=se(e,4)+"-"+se(r.getUTCMonth()+1,2)+"-"+se(r.getUTCDate(),
2)+"T"+se(r.getUTCHours(),2)+":"+se(r.getUTCMinutes(),2)+":"+se(r.getUTCSeconds(),
2)+"."+se(r.getUTCMilliseconds(),3);return n+="+00:00",t&&(n+=" BC"),n}o(Pc,"dat\
eToStringUTC");function Rc(r,e,t){return r=typeof r=="string"?{text:r}:r,e&&(typeof e==
"function"?r.callback=e:r.values=e),t&&(r.callback=t),r}o(Rc,"normalizeQueryConf\
ig");var Qr=o(function(r){return Uc.createHash("md5").update(r,"utf-8").digest("\
hex")},"md5"),Mc=o(function(r,e,t){var n=Qr(e+r),i=Qr(w.concat([w.from(n),t]));return"\
md5"+i},"postgresMd5PasswordHash");bs.exports={prepareValue:o(function(e){return Qt(
e)},"prepareValueWrapper"),normalizeQueryConfig:Rc,postgresMd5PasswordHash:Mc,md5:Qr}});var Et={};fe(Et,{default:()=>Fc});var Fc,bt=ae(()=>{y();Fc={}});var Us=B((fd,_s)=>{"use strict";y();var $r=(Tr(),z(Lr));function Dc(r){if(r.indexOf(
"SCRAM-SHA-256")===-1)throw new Error("SASL: Only mechanism SCRAM-SHA-256 is cur\
rently supported");let e=$r.randomBytes(18).toString("base64");return{mechanism:"\
SCRAM-SHA-256",clientNonce:e,response:"n,,n=*,r="+e,message:"SASLInitialResponse"}}
o(Dc,"startSession");function Nc(r,e,t){if(r.message!=="SASLInitialResponse")throw new Error(
"SASL: Last message was not SASLInitialResponse");if(typeof e!="string")throw new Error(
"SASL: SCRAM-SERVER-FIRST-MESSAGE: client password must be a string");if(typeof t!=
"string")throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: serverData must be a\
 string");let n=Oc(t);if(n.nonce.startsWith(r.clientNonce)){if(n.nonce.length===
r.clientNonce.length)throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: server n\
once is too short")}else throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: serv\
er nonce does not start with client nonce");var i=w.from(n.salt,"base64"),s=jc(e,
i,n.iteration),a=Ge(s,"Client Key"),u=$c(a),c="n=*,r="+r.clientNonce,l="r="+n.nonce+
",s="+n.salt+",i="+n.iteration,h="c=biws,r="+n.nonce,f=c+","+l+","+h,p=Ge(u,f),g=Cs(
a,p),S=g.toString("base64"),A=Ge(s,"Server Key"),b=Ge(A,f);r.message="SASLRespon\
se",r.serverSignature=b.toString("base64"),r.response=h+",p="+S}o(Nc,"continueSe\
ssion");function qc(r,e){if(r.message!=="SASLResponse")throw new Error("SASL: La\
st message was not SASLResponse");if(typeof e!="string")throw new Error("SASL: S\
CRAM-SERVER-FINAL-MESSAGE: serverData must be a string");let{serverSignature:t}=Qc(
e);if(t!==r.serverSignature)throw new Error("SASL: SCRAM-SERVER-FINAL-MESSAGE: s\
erver signature does not match")}o(qc,"finalizeSession");function kc(r){if(typeof r!=
"string")throw new TypeError("SASL: text must be a string");return r.split("").map(
(e,t)=>r.charCodeAt(t)).every(e=>e>=33&&e<=43||e>=45&&e<=126)}o(kc,"isPrintableC\
hars");function As(r){return/^(?:[a-zA-Z0-9+/]{4})*(?:[a-zA-Z0-9+/]{2}==|[a-zA-Z0-9+/]{3}=)?$/.
test(r)}o(As,"isBase64");function vs(r){if(typeof r!="string")throw new TypeError(
"SASL: attribute pairs text must be a string");return new Map(r.split(",").map(e=>{
if(!/^.=/.test(e))throw new Error("SASL: Invalid attribute pair entry");let t=e[0],
n=e.substring(2);return[t,n]}))}o(vs,"parseAttributePairs");function Oc(r){let e=vs(
r),t=e.get("r");if(t){if(!kc(t))throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAG\
E: nonce must only contain printable characters")}else throw new Error("SASL: SC\
RAM-SERVER-FIRST-MESSAGE: nonce missing");let n=e.get("s");if(n){if(!As(n))throw new Error(
"SASL: SCRAM-SERVER-FIRST-MESSAGE: salt must be base64")}else throw new Error("S\
ASL: SCRAM-SERVER-FIRST-MESSAGE: salt missing");let i=e.get("i");if(i){if(!/^[1-9][0-9]*$/.
test(i))throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: invalid iteration cou\
nt")}else throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: iteration missing");
let s=parseInt(i,10);return{nonce:t,salt:n,iteration:s}}o(Oc,"parseServerFirstMe\
ssage");function Qc(r){let t=vs(r).get("v");if(t){if(!As(t))throw new Error("SAS\
L: SCRAM-SERVER-FINAL-MESSAGE: server signature must be base64")}else throw new Error(
"SASL: SCRAM-SERVER-FINAL-MESSAGE: server signature is missing");return{serverSignature:t}}
o(Qc,"parseServerFinalMessage");function Cs(r,e){if(!w.isBuffer(r))throw new TypeError(
"first argument must be a Buffer");if(!w.isBuffer(e))throw new TypeError("second\
 argument must be a Buffer");if(r.length!==e.length)throw new Error("Buffer leng\
ths must match");if(r.length===0)throw new Error("Buffers cannot be empty");return w.
from(r.map((t,n)=>r[n]^e[n]))}o(Cs,"xorBuffers");function $c(r){return $r.createHash(
"sha256").update(r).digest()}o($c,"sha256");function Ge(r,e){return $r.createHmac(
"sha256",r).update(e).digest()}o(Ge,"hmacSha256");function jc(r,e,t){for(var n=Ge(
r,w.concat([e,w.from([0,0,0,1])])),i=n,s=0;s<t-1;s++)n=Ge(r,n),i=Cs(i,n);return i}
o(jc,"Hi");_s.exports={startSession:Dc,continueSession:Nc,finalizeSession:qc}});var jr={};fe(jr,{join:()=>Hc});function Hc(...r){return r.join("/")}var Hr=ae(()=>{
y();o(Hc,"join")});var Kr={};fe(Kr,{stat:()=>Kc});function Kc(r,e){e(new Error("No filesystem"))}var Wr=ae(
()=>{y();o(Kc,"stat")});var Gr={};fe(Gr,{default:()=>Wc});var Wc,Vr=ae(()=>{y();Wc={}});var Ls={};fe(Ls,{StringDecoder:()=>zr});var zr,Ts=ae(()=>{y();zr=class{static{o(
this,"StringDecoder")}td;constructor(e){this.td=new TextDecoder(e)}write(e){return this.
td.decode(e,{stream:!0})}end(e){return this.td.decode(e)}}});var Rs=B((xd,Ps)=>{"use strict";y();var{Transform:Gc}=(Vr(),z(Gr)),{StringDecoder:Vc}=(Ts(),z(Ls)),
Te=Symbol("last"),$t=Symbol("decoder");function zc(r,e,t){let n;if(this.overflow){
if(n=this[$t].write(r).split(this.matcher),n.length===1)return t();n.shift(),this.
overflow=!1}else this[Te]+=this[$t].write(r),n=this[Te].split(this.matcher);this[Te]=
n.pop();for(let i=0;i<n.length;i++)try{Bs(this,this.mapper(n[i]))}catch(s){return t(
s)}if(this.overflow=this[Te].length>this.maxLength,this.overflow&&!this.skipOverflow){
t(new Error("maximum buffer reached"));return}t()}o(zc,"transform");function Yc(r){
if(this[Te]+=this[$t].end(),this[Te])try{Bs(this,this.mapper(this[Te]))}catch(e){
return r(e)}r()}o(Yc,"flush");function Bs(r,e){e!==void 0&&r.push(e)}o(Bs,"push");
function Is(r){return r}o(Is,"noop");function Jc(r,e,t){switch(r=r||/\r?\n/,e=e||
Is,t=t||{},arguments.length){case 1:typeof r=="function"?(e=r,r=/\r?\n/):typeof r==
"object"&&!(r instanceof RegExp)&&!r[Symbol.split]&&(t=r,r=/\r?\n/);break;case 2:
typeof r=="function"?(t=e,e=r,r=/\r?\n/):typeof e=="object"&&(t=e,e=Is)}t=Object.
assign({},t),t.autoDestroy=!0,t.transform=zc,t.flush=Yc,t.readableObjectMode=!0;
let n=new Gc(t);return n[Te]="",n[$t]=new Vc("utf8"),n.matcher=r,n.mapper=e,n.maxLength=
t.maxLength,n.skipOverflow=t.skipOverflow||!1,n.overflow=!1,n._destroy=function(i,s){
this._writableState.errorEmitted=!1,s(i)},n}o(Jc,"split");Ps.exports=Jc});var Ds=B((Cd,xe)=>{"use strict";y();var Ms=(Hr(),z(jr)),Zc=(Vr(),z(Gr)).Stream,Xc=Rs(),
Fs=(bt(),z(Et)),el=5432,jt=m.platform==="win32",xt=m.stderr,tl=56,rl=7,nl=61440,
il=32768;function sl(r){return(r&nl)==il}o(sl,"isRegFile");var Ve=["host","port",
"database","user","password"],Yr=Ve.length,al=Ve[Yr-1];function Jr(){var r=xt instanceof
Zc&&xt.writable===!0;if(r){var e=Array.prototype.slice.call(arguments).concat(`
`);xt.write(Fs.format.apply(Fs,e))}}o(Jr,"warn");Object.defineProperty(xe.exports,
"isWin",{get:function(){return jt},set:function(r){jt=r}});xe.exports.warnTo=function(r){
var e=xt;return xt=r,e};xe.exports.getFileName=function(r){var e=r||m.env,t=e.PGPASSFILE||
(jt?Ms.join(e.APPDATA||"./","postgresql","pgpass.conf"):Ms.join(e.HOME||"./",".p\
gpass"));return t};xe.exports.usePgPass=function(r,e){return Object.prototype.hasOwnProperty.
call(m.env,"PGPASSWORD")?!1:jt?!0:(e=e||"<unkn>",sl(r.mode)?r.mode&(tl|rl)?(Jr('\
WARNING: password file "%s" has group or world access; permissions should be u=r\
w (0600) or less',e),!1):!0:(Jr('WARNING: password file "%s" is not a plain file',
e),!1))};var ol=xe.exports.match=function(r,e){return Ve.slice(0,-1).reduce(function(t,n,i){
return i==1&&Number(r[n]||el)===Number(e[n])?t&&!0:t&&(e[n]==="*"||e[n]===r[n])},
!0)};xe.exports.getPassword=function(r,e,t){var n,i=e.pipe(Xc());function s(c){var l=ul(
c);l&&cl(l)&&ol(r,l)&&(n=l[al],i.end())}o(s,"onLine");var a=o(function(){e.destroy(),
t(n)},"onEnd"),u=o(function(c){e.destroy(),Jr("WARNING: error on reading file: %\
s",c),t(void 0)},"onErr");e.on("error",u),i.on("data",s).on("end",a).on("error",
u)};var ul=xe.exports.parseLine=function(r){if(r.length<11||r.match(/^\s+#/))return null;
for(var e="",t="",n=0,i=0,s=0,a={},u=!1,c=o(function(h,f,p){var g=r.substring(f,
p);Object.hasOwnProperty.call(m.env,"PGPASS_NO_DEESCAPE")||(g=g.replace(/\\([:\\])/g,
"$1")),a[Ve[h]]=g},"addToObj"),l=0;l<r.length-1;l+=1){if(e=r.charAt(l+1),t=r.charAt(
l),u=n==Yr-1,u){c(n,i);break}l>=0&&e==":"&&t!=="\\"&&(c(n,i,l+1),i=l+2,n+=1)}return a=
Object.keys(a).length===Yr?a:null,a},cl=xe.exports.isValidEntry=function(r){for(var e={
0:function(a){return a.length>0},1:function(a){return a==="*"?!0:(a=Number(a),isFinite(
a)&&a>0&&a<9007199254740992&&Math.floor(a)===a)},2:function(a){return a.length>0},
3:function(a){return a.length>0},4:function(a){return a.length>0}},t=0;t<Ve.length;t+=
1){var n=e[t],i=r[Ve[t]]||"",s=n(i);if(!s)return!1}return!0}});var qs=B((Td,Zr)=>{"use strict";y();var Ld=(Hr(),z(jr)),Ns=(Wr(),z(Kr)),Ht=Ds();
Zr.exports=function(r,e){var t=Ht.getFileName();Ns.stat(t,function(n,i){if(n||!Ht.
usePgPass(i,t))return e(void 0);var s=Ns.createReadStream(t);Ht.getPassword(r,s,
e)})};Zr.exports.warnTo=Ht.warnTo});var Xr=B((Bd,ks)=>{"use strict";y();var ll=yt();function Kt(r){this._types=r||ll,
this.text={},this.binary={}}o(Kt,"TypeOverrides");Kt.prototype.getOverrides=function(r){
switch(r){case"text":return this.text;case"binary":return this.binary;default:return{}}};
Kt.prototype.setTypeParser=function(r,e,t){typeof e=="function"&&(t=e,e="text"),
this.getOverrides(e)[r]=t};Kt.prototype.getTypeParser=function(r,e){return e=e||
"text",this.getOverrides(e)[r]||this._types.getTypeParser(r,e)};ks.exports=Kt});var Os={};fe(Os,{default:()=>hl});var hl,Qs=ae(()=>{y();hl={}});var js=B((Fd,$s)=>{"use strict";y();var fl=(_r(),z(Ii)),en=(Wr(),z(Kr));function tn(r){
if(r.charAt(0)==="/"){var t=r.split(" ");return{host:t[0],database:t[1]}}var e=fl.
parse(/ |%[^a-f0-9]|%[a-f0-9][^a-f0-9]/i.test(r)?encodeURI(r).replace(/\%25(\d\d)/g,
"%$1"):r,!0),t=e.query;for(var n in t)Array.isArray(t[n])&&(t[n]=t[n][t[n].length-
1]);var i=(e.auth||":").split(":");if(t.user=i[0],t.password=i.splice(1).join(":"),
t.port=e.port,e.protocol=="socket:")return t.host=decodeURI(e.pathname),t.database=
e.query.db,t.client_encoding=e.query.encoding,t;t.host||(t.host=e.hostname);var s=e.
pathname;if(!t.host&&s&&/^%2f/i.test(s)){var a=s.split("/");t.host=decodeURIComponent(
a[0]),s=a.splice(1).join("/")}switch(s&&s.charAt(0)==="/"&&(s=s.slice(1)||null),
t.database=s&&decodeURI(s),(t.ssl==="true"||t.ssl==="1")&&(t.ssl=!0),t.ssl==="0"&&
(t.ssl=!1),(t.sslcert||t.sslkey||t.sslrootcert||t.sslmode)&&(t.ssl={}),t.sslcert&&
(t.ssl.cert=en.readFileSync(t.sslcert).toString()),t.sslkey&&(t.ssl.key=en.readFileSync(
t.sslkey).toString()),t.sslrootcert&&(t.ssl.ca=en.readFileSync(t.sslrootcert).toString()),
t.sslmode){case"disable":{t.ssl=!1;break}case"prefer":case"require":case"verify-\
ca":case"verify-full":break;case"no-verify":{t.ssl.rejectUnauthorized=!1;break}}
return t}o(tn,"parse");$s.exports=tn;tn.parse=tn});var Wt=B((qd,Ws)=>{"use strict";y();var dl=(Qs(),z(Os)),Ks=wt(),Hs=js().parse,oe=o(
function(r,e,t){return t===void 0?t=m.env["PG"+r.toUpperCase()]:t===!1||(t=m.env[t]),
e[r]||t||Ks[r]},"val"),pl=o(function(){switch(m.env.PGSSLMODE){case"disable":return!1;case"\
prefer":case"require":case"verify-ca":case"verify-full":return!0;case"no-verify":
return{rejectUnauthorized:!1}}return Ks.ssl},"readSSLConfigFromEnvironment"),ze=o(
function(r){return"'"+(""+r).replace(/\\/g,"\\\\").replace(/'/g,"\\'")+"'"},"quo\
teParamValue"),we=o(function(r,e,t){var n=e[t];n!=null&&r.push(t+"="+ze(n))},"ad\
d"),rn=class{static{o(this,"ConnectionParameters")}constructor(e){e=typeof e=="s\
tring"?Hs(e):e||{},e.connectionString&&(e=Object.assign({},e,Hs(e.connectionString))),
this.user=oe("user",e),this.database=oe("database",e),this.database===void 0&&(this.
database=this.user),this.port=parseInt(oe("port",e),10),this.host=oe("host",e),Object.
defineProperty(this,"password",{configurable:!0,enumerable:!1,writable:!0,value:oe(
"password",e)}),this.binary=oe("binary",e),this.options=oe("options",e),this.ssl=
typeof e.ssl>"u"?pl():e.ssl,typeof this.ssl=="string"&&this.ssl==="true"&&(this.
ssl=!0),this.ssl==="no-verify"&&(this.ssl={rejectUnauthorized:!1}),this.ssl&&this.
ssl.key&&Object.defineProperty(this.ssl,"key",{enumerable:!1}),this.client_encoding=
oe("client_encoding",e),this.replication=oe("replication",e),this.isDomainSocket=
!(this.host||"").indexOf("/"),this.application_name=oe("application_name",e,"PGA\
PPNAME"),this.fallback_application_name=oe("fallback_application_name",e,!1),this.
statement_timeout=oe("statement_timeout",e,!1),this.lock_timeout=oe("lock_timeou\
t",e,!1),this.idle_in_transaction_session_timeout=oe("idle_in_transaction_sessio\
n_timeout",e,!1),this.query_timeout=oe("query_timeout",e,!1),e.connectionTimeoutMillis===
void 0?this.connect_timeout=m.env.PGCONNECT_TIMEOUT||0:this.connect_timeout=Math.
floor(e.connectionTimeoutMillis/1e3),e.keepAlive===!1?this.keepalives=0:e.keepAlive===
!0&&(this.keepalives=1),typeof e.keepAliveInitialDelayMillis=="number"&&(this.keepalives_idle=
Math.floor(e.keepAliveInitialDelayMillis/1e3))}getLibpqConnectionString(e){var t=[];
we(t,this,"user"),we(t,this,"password"),we(t,this,"port"),we(t,this,"application\
_name"),we(t,this,"fallback_application_name"),we(t,this,"connect_timeout"),we(t,
this,"options");var n=typeof this.ssl=="object"?this.ssl:this.ssl?{sslmode:this.
ssl}:{};if(we(t,n,"sslmode"),we(t,n,"sslca"),we(t,n,"sslkey"),we(t,n,"sslcert"),
we(t,n,"sslrootcert"),this.database&&t.push("dbname="+ze(this.database)),this.replication&&
t.push("replication="+ze(this.replication)),this.host&&t.push("host="+ze(this.host)),
this.isDomainSocket)return e(null,t.join(" "));this.client_encoding&&t.push("cli\
ent_encoding="+ze(this.client_encoding)),dl.lookup(this.host,function(i,s){return i?
e(i,null):(t.push("hostaddr="+ze(s)),e(null,t.join(" ")))})}};Ws.exports=rn});var zs=B((Qd,Vs)=>{"use strict";y();var yl=yt(),Gs=/^([A-Za-z]+)(?: (\d+))?(?: (\d+))?/,
nn=class{static{o(this,"Result")}constructor(e,t){this.command=null,this.rowCount=
null,this.oid=null,this.rows=[],this.fields=[],this._parsers=void 0,this._types=
t,this.RowCtor=null,this.rowAsArray=e==="array",this.rowAsArray&&(this.parseRow=
this._parseRowAsArray)}addCommandComplete(e){var t;e.text?t=Gs.exec(e.text):t=Gs.
exec(e.command),t&&(this.command=t[1],t[3]?(this.oid=parseInt(t[2],10),this.rowCount=
parseInt(t[3],10)):t[2]&&(this.rowCount=parseInt(t[2],10)))}_parseRowAsArray(e){
for(var t=new Array(e.length),n=0,i=e.length;n<i;n++){var s=e[n];s!==null?t[n]=this.
_parsers[n](s):t[n]=null}return t}parseRow(e){for(var t={},n=0,i=e.length;n<i;n++){
var s=e[n],a=this.fields[n].name;s!==null?t[a]=this._parsers[n](s):t[a]=null}return t}addRow(e){
this.rows.push(e)}addFields(e){this.fields=e,this.fields.length&&(this._parsers=
new Array(e.length));for(var t=0;t<e.length;t++){var n=e[t];this._types?this._parsers[t]=
this._types.getTypeParser(n.dataTypeID,n.format||"text"):this._parsers[t]=yl.getTypeParser(
n.dataTypeID,n.format||"text")}}};Vs.exports=nn});var Xs=B((Hd,Zs)=>{"use strict";y();var{EventEmitter:wl}=Ue(),Ys=zs(),Js=mt(),sn=class extends wl{static{
o(this,"Query")}constructor(e,t,n){super(),e=Js.normalizeQueryConfig(e,t,n),this.
text=e.text,this.values=e.values,this.rows=e.rows,this.types=e.types,this.name=e.
name,this.binary=e.binary,this.portal=e.portal||"",this.callback=e.callback,this.
_rowMode=e.rowMode,m.domain&&e.callback&&(this.callback=m.domain.bind(e.callback)),
this._result=new Ys(this._rowMode,this.types),this._results=this._result,this.isPreparedStatement=
!1,this._canceledDueToError=!1,this._promise=null}requiresPreparation(){return this.
name||this.rows?!0:!this.text||!this.values?!1:this.values.length>0}_checkForMultirow(){
this._result.command&&(Array.isArray(this._results)||(this._results=[this._result]),
this._result=new Ys(this._rowMode,this.types),this._results.push(this._result))}handleRowDescription(e){
this._checkForMultirow(),this._result.addFields(e.fields),this._accumulateRows=this.
callback||!this.listeners("row").length}handleDataRow(e){let t;if(!this._canceledDueToError){
try{t=this._result.parseRow(e.fields)}catch(n){this._canceledDueToError=n;return}
this.emit("row",t,this._result),this._accumulateRows&&this._result.addRow(t)}}handleCommandComplete(e,t){
this._checkForMultirow(),this._result.addCommandComplete(e),this.rows&&t.sync()}handleEmptyQuery(e){
this.rows&&e.sync()}handleError(e,t){if(this._canceledDueToError&&(e=this._canceledDueToError,
this._canceledDueToError=!1),this.callback)return this.callback(e);this.emit("er\
ror",e)}handleReadyForQuery(e){if(this._canceledDueToError)return this.handleError(
this._canceledDueToError,e);if(this.callback)try{this.callback(null,this._results)}catch(t){
m.nextTick(()=>{throw t})}this.emit("end",this._results)}submit(e){if(typeof this.
text!="string"&&typeof this.name!="string")return new Error("A query must have e\
ither text or a name. Supplying neither is unsupported.");let t=e.parsedStatements[this.
name];return this.text&&t&&this.text!==t?new Error(`Prepared statements must be \
unique - '${this.name}' was used for a different statement`):this.values&&!Array.
isArray(this.values)?new Error("Query values must be an array"):(this.requiresPreparation()?
this.prepare(e):e.query(this.text),null)}hasBeenParsed(e){return this.name&&e.parsedStatements[this.
name]}handlePortalSuspended(e){this._getRows(e,this.rows)}_getRows(e,t){e.execute(
{portal:this.portal,rows:t}),t?e.flush():e.sync()}prepare(e){this.isPreparedStatement=
!0,this.hasBeenParsed(e)||e.parse({text:this.text,name:this.name,types:this.types});
try{e.bind({portal:this.portal,statement:this.name,values:this.values,binary:this.
binary,valueMapper:Js.prepareValue})}catch(t){this.handleError(t,e);return}e.describe(
{type:"P",name:this.portal||""}),this._getRows(e,this.rows)}handleCopyInResponse(e){
e.sendCopyFail("No source stream defined")}handleCopyData(e,t){}};Zs.exports=sn});var En=B(I=>{"use strict";y();Object.defineProperty(I,"__esModule",{value:!0});I.
NoticeMessage=I.DataRowMessage=I.CommandCompleteMessage=I.ReadyForQueryMessage=I.
NotificationResponseMessage=I.BackendKeyDataMessage=I.AuthenticationMD5Password=
I.ParameterStatusMessage=I.ParameterDescriptionMessage=I.RowDescriptionMessage=I.
Field=I.CopyResponse=I.CopyDataMessage=I.DatabaseError=I.copyDone=I.emptyQuery=I.
replicationStart=I.portalSuspended=I.noData=I.closeComplete=I.bindComplete=I.parseComplete=
void 0;I.parseComplete={name:"parseComplete",length:5};I.bindComplete={name:"bin\
dComplete",length:5};I.closeComplete={name:"closeComplete",length:5};I.noData={name:"\
noData",length:5};I.portalSuspended={name:"portalSuspended",length:5};I.replicationStart=
{name:"replicationStart",length:4};I.emptyQuery={name:"emptyQuery",length:4};I.copyDone=
{name:"copyDone",length:4};var an=class extends Error{static{o(this,"DatabaseErr\
or")}constructor(e,t,n){super(e),this.length=t,this.name=n}};I.DatabaseError=an;
var on=class{static{o(this,"CopyDataMessage")}constructor(e,t){this.length=e,this.
chunk=t,this.name="copyData"}};I.CopyDataMessage=on;var un=class{static{o(this,"\
CopyResponse")}constructor(e,t,n,i){this.length=e,this.name=t,this.binary=n,this.
columnTypes=new Array(i)}};I.CopyResponse=un;var cn=class{static{o(this,"Field")}constructor(e,t,n,i,s,a,u){
this.name=e,this.tableID=t,this.columnID=n,this.dataTypeID=i,this.dataTypeSize=s,
this.dataTypeModifier=a,this.format=u}};I.Field=cn;var ln=class{static{o(this,"R\
owDescriptionMessage")}constructor(e,t){this.length=e,this.fieldCount=t,this.name=
"rowDescription",this.fields=new Array(this.fieldCount)}};I.RowDescriptionMessage=
ln;var hn=class{static{o(this,"ParameterDescriptionMessage")}constructor(e,t){this.
length=e,this.parameterCount=t,this.name="parameterDescription",this.dataTypeIDs=
new Array(this.parameterCount)}};I.ParameterDescriptionMessage=hn;var fn=class{static{
o(this,"ParameterStatusMessage")}constructor(e,t,n){this.length=e,this.parameterName=
t,this.parameterValue=n,this.name="parameterStatus"}};I.ParameterStatusMessage=fn;
var dn=class{static{o(this,"AuthenticationMD5Password")}constructor(e,t){this.length=
e,this.salt=t,this.name="authenticationMD5Password"}};I.AuthenticationMD5Password=
dn;var pn=class{static{o(this,"BackendKeyDataMessage")}constructor(e,t,n){this.length=
e,this.processID=t,this.secretKey=n,this.name="backendKeyData"}};I.BackendKeyDataMessage=
pn;var yn=class{static{o(this,"NotificationResponseMessage")}constructor(e,t,n,i){
this.length=e,this.processId=t,this.channel=n,this.payload=i,this.name="notifica\
tion"}};I.NotificationResponseMessage=yn;var wn=class{static{o(this,"ReadyForQue\
ryMessage")}constructor(e,t){this.length=e,this.status=t,this.name="readyForQuer\
y"}};I.ReadyForQueryMessage=wn;var mn=class{static{o(this,"CommandCompleteMessag\
e")}constructor(e,t){this.length=e,this.text=t,this.name="commandComplete"}};I.CommandCompleteMessage=
mn;var gn=class{static{o(this,"DataRowMessage")}constructor(e,t){this.length=e,this.
fields=t,this.name="dataRow",this.fieldCount=t.length}};I.DataRowMessage=gn;var Sn=class{static{
o(this,"NoticeMessage")}constructor(e,t){this.length=e,this.message=t,this.name=
"notice"}};I.NoticeMessage=Sn});var ea=B(Gt=>{"use strict";y();Object.defineProperty(Gt,"__esModule",{value:!0});
Gt.Writer=void 0;var bn=class{static{o(this,"Writer")}constructor(e=256){this.size=
e,this.offset=5,this.headerPosition=0,this.buffer=w.allocUnsafe(e)}ensure(e){var t=this.
buffer.length-this.offset;if(t<e){var n=this.buffer,i=n.length+(n.length>>1)+e;this.
buffer=w.allocUnsafe(i),n.copy(this.buffer)}}addInt32(e){return this.ensure(4),this.
buffer[this.offset++]=e>>>24&255,this.buffer[this.offset++]=e>>>16&255,this.buffer[this.
offset++]=e>>>8&255,this.buffer[this.offset++]=e>>>0&255,this}addInt16(e){return this.
ensure(2),this.buffer[this.offset++]=e>>>8&255,this.buffer[this.offset++]=e>>>0&
255,this}addCString(e){if(!e)this.ensure(1);else{var t=w.byteLength(e);this.ensure(
t+1),this.buffer.write(e,this.offset,"utf-8"),this.offset+=t}return this.buffer[this.
offset++]=0,this}addString(e=""){var t=w.byteLength(e);return this.ensure(t),this.
buffer.write(e,this.offset),this.offset+=t,this}add(e){return this.ensure(e.length),
e.copy(this.buffer,this.offset),this.offset+=e.length,this}join(e){if(e){this.buffer[this.
headerPosition]=e;let t=this.offset-(this.headerPosition+1);this.buffer.writeInt32BE(
t,this.headerPosition+1)}return this.buffer.slice(e?0:5,this.offset)}flush(e){var t=this.
join(e);return this.offset=5,this.headerPosition=0,this.buffer=w.allocUnsafe(this.
size),t}};Gt.Writer=bn});var ra=B(zt=>{"use strict";y();Object.defineProperty(zt,"__esModule",{value:!0});
zt.serialize=void 0;var xn=ea(),W=new xn.Writer,ml=o(r=>{W.addInt16(3).addInt16(
0);for(let n of Object.keys(r))W.addCString(n).addCString(r[n]);W.addCString("cl\
ient_encoding").addCString("UTF8");var e=W.addCString("").flush(),t=e.length+4;return new xn.
Writer().addInt32(t).add(e).flush()},"startup"),gl=o(()=>{let r=w.allocUnsafe(8);
return r.writeInt32BE(8,0),r.writeInt32BE(80877103,4),r},"requestSsl"),Sl=o(r=>W.
addCString(r).flush(112),"password"),El=o(function(r,e){return W.addCString(r).addInt32(
w.byteLength(e)).addString(e),W.flush(112)},"sendSASLInitialResponseMessage"),bl=o(
function(r){return W.addString(r).flush(112)},"sendSCRAMClientFinalMessage"),xl=o(
r=>W.addCString(r).flush(81),"query"),ta=[],Al=o(r=>{let e=r.name||"";e.length>63&&
(console.error("Warning! Postgres only supports 63 characters for query names."),
console.error("You supplied %s (%s)",e,e.length),console.error("This can cause c\
onflicts and silent errors executing queries"));let t=r.types||ta;for(var n=t.length,
i=W.addCString(e).addCString(r.text).addInt16(n),s=0;s<n;s++)i.addInt32(t[s]);return W.
flush(80)},"parse"),Ye=new xn.Writer,vl=o(function(r,e){for(let t=0;t<r.length;t++){
let n=e?e(r[t],t):r[t];n==null?(W.addInt16(0),Ye.addInt32(-1)):n instanceof w?(W.
addInt16(1),Ye.addInt32(n.length),Ye.add(n)):(W.addInt16(0),Ye.addInt32(w.byteLength(
n)),Ye.addString(n))}},"writeValues"),Cl=o((r={})=>{let e=r.portal||"",t=r.statement||
"",n=r.binary||!1,i=r.values||ta,s=i.length;return W.addCString(e).addCString(t),
W.addInt16(s),vl(i,r.valueMapper),W.addInt16(s),W.add(Ye.flush()),W.addInt16(n?1:
0),W.flush(66)},"bind"),_l=w.from([69,0,0,0,9,0,0,0,0,0]),Ul=o(r=>{if(!r||!r.portal&&
!r.rows)return _l;let e=r.portal||"",t=r.rows||0,n=w.byteLength(e),i=4+n+1+4,s=w.
allocUnsafe(1+i);return s[0]=69,s.writeInt32BE(i,1),s.write(e,5,"utf-8"),s[n+5]=
0,s.writeUInt32BE(t,s.length-4),s},"execute"),Ll=o((r,e)=>{let t=w.allocUnsafe(16);
return t.writeInt32BE(16,0),t.writeInt16BE(1234,4),t.writeInt16BE(5678,6),t.writeInt32BE(
r,8),t.writeInt32BE(e,12),t},"cancel"),An=o((r,e)=>{let n=4+w.byteLength(e)+1,i=w.
allocUnsafe(1+n);return i[0]=r,i.writeInt32BE(n,1),i.write(e,5,"utf-8"),i[n]=0,i},
"cstringMessage"),Tl=W.addCString("P").flush(68),Il=W.addCString("S").flush(68),
Bl=o(r=>r.name?An(68,`${r.type}${r.name||""}`):r.type==="P"?Tl:Il,"describe"),Pl=o(
r=>{let e=`${r.type}${r.name||""}`;return An(67,e)},"close"),Rl=o(r=>W.add(r).flush(
100),"copyData"),Ml=o(r=>An(102,r),"copyFail"),Vt=o(r=>w.from([r,0,0,0,4]),"code\
OnlyBuffer"),Fl=Vt(72),Dl=Vt(83),Nl=Vt(88),ql=Vt(99),kl={startup:ml,password:Sl,
requestSsl:gl,sendSASLInitialResponseMessage:El,sendSCRAMClientFinalMessage:bl,query:xl,
parse:Al,bind:Cl,execute:Ul,describe:Bl,close:Pl,flush:()=>Fl,sync:()=>Dl,end:()=>Nl,
copyData:Rl,copyDone:()=>ql,copyFail:Ml,cancel:Ll};zt.serialize=kl});var na=B(Yt=>{"use strict";y();Object.defineProperty(Yt,"__esModule",{value:!0});
Yt.BufferReader=void 0;var Ol=w.allocUnsafe(0),vn=class{static{o(this,"BufferRea\
der")}constructor(e=0){this.offset=e,this.buffer=Ol,this.encoding="utf-8"}setBuffer(e,t){
this.offset=e,this.buffer=t}int16(){let e=this.buffer.readInt16BE(this.offset);return this.
offset+=2,e}byte(){let e=this.buffer[this.offset];return this.offset++,e}int32(){
let e=this.buffer.readInt32BE(this.offset);return this.offset+=4,e}string(e){let t=this.
buffer.toString(this.encoding,this.offset,this.offset+e);return this.offset+=e,t}cstring(){
let e=this.offset,t=e;for(;this.buffer[t++]!==0;);return this.offset=t,this.buffer.
toString(this.encoding,e,t-1)}bytes(e){let t=this.buffer.slice(this.offset,this.
offset+e);return this.offset+=e,t}};Yt.BufferReader=vn});var ia={};fe(ia,{default:()=>Ql});var Ql,sa=ae(()=>{y();Ql={}});var ua=B(Je=>{"use strict";y();var $l=Je&&Je.__importDefault||function(r){return r&&
r.__esModule?r:{default:r}};Object.defineProperty(Je,"__esModule",{value:!0});Je.
Parser=void 0;var V=En(),jl=na(),Hl=$l((sa(),z(ia))),Cn=1,Kl=4,aa=Cn+Kl,oa=w.allocUnsafe(
0),_n=class{static{o(this,"Parser")}constructor(e){if(this.buffer=oa,this.bufferLength=
0,this.bufferOffset=0,this.reader=new jl.BufferReader,e?.mode==="binary")throw new Error(
"Binary mode not supported yet");this.mode=e?.mode||"text"}parse(e,t){this.mergeBuffer(
e);let n=this.bufferOffset+this.bufferLength,i=this.bufferOffset;for(;i+aa<=n;){
let s=this.buffer[i],a=this.buffer.readUInt32BE(i+Cn),u=Cn+a;if(u+i<=n){let c=this.
handlePacket(i+aa,s,a,this.buffer);t(c),i+=u}else break}i===n?(this.buffer=oa,this.
bufferLength=0,this.bufferOffset=0):(this.bufferLength=n-i,this.bufferOffset=i)}mergeBuffer(e){
if(this.bufferLength>0){let t=this.bufferLength+e.byteLength;if(t+this.bufferOffset>
this.buffer.byteLength){let i;if(t<=this.buffer.byteLength&&this.bufferOffset>=this.
bufferLength)i=this.buffer;else{let s=this.buffer.byteLength*2;for(;t>=s;)s*=2;i=
w.allocUnsafe(s)}this.buffer.copy(i,0,this.bufferOffset,this.bufferOffset+this.bufferLength),
this.buffer=i,this.bufferOffset=0}e.copy(this.buffer,this.bufferOffset+this.bufferLength),
this.bufferLength=t}else this.buffer=e,this.bufferOffset=0,this.bufferLength=e.byteLength}handlePacket(e,t,n,i){
switch(t){case 50:return V.bindComplete;case 49:return V.parseComplete;case 51:return V.
closeComplete;case 110:return V.noData;case 115:return V.portalSuspended;case 99:
return V.copyDone;case 87:return V.replicationStart;case 73:return V.emptyQuery;case 68:
return this.parseDataRowMessage(e,n,i);case 67:return this.parseCommandCompleteMessage(
e,n,i);case 90:return this.parseReadyForQueryMessage(e,n,i);case 65:return this.
parseNotificationMessage(e,n,i);case 82:return this.parseAuthenticationResponse(
e,n,i);case 83:return this.parseParameterStatusMessage(e,n,i);case 75:return this.
parseBackendKeyData(e,n,i);case 69:return this.parseErrorMessage(e,n,i,"error");case 78:
return this.parseErrorMessage(e,n,i,"notice");case 84:return this.parseRowDescriptionMessage(
e,n,i);case 116:return this.parseParameterDescriptionMessage(e,n,i);case 71:return this.
parseCopyInMessage(e,n,i);case 72:return this.parseCopyOutMessage(e,n,i);case 100:
return this.parseCopyData(e,n,i);default:Hl.default.fail(`unknown message code: ${t.
toString(16)}`)}}parseReadyForQueryMessage(e,t,n){this.reader.setBuffer(e,n);let i=this.
reader.string(1);return new V.ReadyForQueryMessage(t,i)}parseCommandCompleteMessage(e,t,n){
this.reader.setBuffer(e,n);let i=this.reader.cstring();return new V.CommandCompleteMessage(
t,i)}parseCopyData(e,t,n){let i=n.slice(e,e+(t-4));return new V.CopyDataMessage(
t,i)}parseCopyInMessage(e,t,n){return this.parseCopyMessage(e,t,n,"copyInRespons\
e")}parseCopyOutMessage(e,t,n){return this.parseCopyMessage(e,t,n,"copyOutRespon\
se")}parseCopyMessage(e,t,n,i){this.reader.setBuffer(e,n);let s=this.reader.byte()!==
0,a=this.reader.int16(),u=new V.CopyResponse(t,i,s,a);for(let c=0;c<a;c++)u.columnTypes[c]=
this.reader.int16();return u}parseNotificationMessage(e,t,n){this.reader.setBuffer(
e,n);let i=this.reader.int32(),s=this.reader.cstring(),a=this.reader.cstring();return new V.
NotificationResponseMessage(t,i,s,a)}parseRowDescriptionMessage(e,t,n){this.reader.
setBuffer(e,n);let i=this.reader.int16(),s=new V.RowDescriptionMessage(t,i);for(let a=0;a<
i;a++)s.fields[a]=this.parseField();return s}parseField(){let e=this.reader.cstring(),
t=this.reader.int32(),n=this.reader.int16(),i=this.reader.int32(),s=this.reader.
int16(),a=this.reader.int32(),u=this.reader.int16()===0?"text":"binary";return new V.
Field(e,t,n,i,s,a,u)}parseParameterDescriptionMessage(e,t,n){this.reader.setBuffer(
e,n);let i=this.reader.int16(),s=new V.ParameterDescriptionMessage(t,i);for(let a=0;a<
i;a++)s.dataTypeIDs[a]=this.reader.int32();return s}parseDataRowMessage(e,t,n){this.
reader.setBuffer(e,n);let i=this.reader.int16(),s=new Array(i);for(let a=0;a<i;a++){
let u=this.reader.int32();s[a]=u===-1?null:this.reader.string(u)}return new V.DataRowMessage(
t,s)}parseParameterStatusMessage(e,t,n){this.reader.setBuffer(e,n);let i=this.reader.
cstring(),s=this.reader.cstring();return new V.ParameterStatusMessage(t,i,s)}parseBackendKeyData(e,t,n){
this.reader.setBuffer(e,n);let i=this.reader.int32(),s=this.reader.int32();return new V.
BackendKeyDataMessage(t,i,s)}parseAuthenticationResponse(e,t,n){this.reader.setBuffer(
e,n);let i=this.reader.int32(),s={name:"authenticationOk",length:t};switch(i){case 0:
break;case 3:s.length===8&&(s.name="authenticationCleartextPassword");break;case 5:
if(s.length===12){s.name="authenticationMD5Password";let u=this.reader.bytes(4);
return new V.AuthenticationMD5Password(t,u)}break;case 10:s.name="authentication\
SASL",s.mechanisms=[];let a;do a=this.reader.cstring(),a&&s.mechanisms.push(a);while(a);
break;case 11:s.name="authenticationSASLContinue",s.data=this.reader.string(t-8);
break;case 12:s.name="authenticationSASLFinal",s.data=this.reader.string(t-8);break;default:
throw new Error("Unknown authenticationOk message type "+i)}return s}parseErrorMessage(e,t,n,i){
this.reader.setBuffer(e,n);let s={},a=this.reader.string(1);for(;a!=="\0";)s[a]=
this.reader.cstring(),a=this.reader.string(1);let u=s.M,c=i==="notice"?new V.NoticeMessage(
t,u):new V.DatabaseError(u,t,i);return c.severity=s.S,c.code=s.C,c.detail=s.D,c.
hint=s.H,c.position=s.P,c.internalPosition=s.p,c.internalQuery=s.q,c.where=s.W,c.
schema=s.s,c.table=s.t,c.column=s.c,c.dataType=s.d,c.constraint=s.n,c.file=s.F,c.
line=s.L,c.routine=s.R,c}};Je.Parser=_n});var Un=B(Ie=>{"use strict";y();Object.defineProperty(Ie,"__esModule",{value:!0});
Ie.DatabaseError=Ie.serialize=Ie.parse=void 0;var Wl=En();Object.defineProperty(
Ie,"DatabaseError",{enumerable:!0,get:function(){return Wl.DatabaseError}});var Gl=ra();
Object.defineProperty(Ie,"serialize",{enumerable:!0,get:function(){return Gl.serialize}});
var Vl=ua();function zl(r,e){let t=new Vl.Parser;return r.on("data",n=>t.parse(n,
e)),new Promise(n=>r.on("end",()=>n()))}o(zl,"parse");Ie.parse=zl});var ca={};fe(ca,{connect:()=>Yl});function Yl({socket:r,servername:e}){return r.
startTls(e),r}var la=ae(()=>{y();o(Yl,"connect")});var Tn=B((pp,da)=>{"use strict";y();var ha=(qt(),z($i)),Jl=Ue().EventEmitter,{parse:Zl,
serialize:Z}=Un(),fa=Z.flush(),Xl=Z.sync(),eh=Z.end(),Ln=class extends Jl{static{
o(this,"Connection")}constructor(e){super(),e=e||{},this.stream=e.stream||new ha.
Socket,this._keepAlive=e.keepAlive,this._keepAliveInitialDelayMillis=e.keepAliveInitialDelayMillis,
this.lastBuffer=!1,this.parsedStatements={},this.ssl=e.ssl||!1,this._ending=!1,this.
_emitMessage=!1;var t=this;this.on("newListener",function(n){n==="message"&&(t._emitMessage=
!0)})}connect(e,t){var n=this;this._connecting=!0,this.stream.setNoDelay(!0),this.
stream.connect(e,t),this.stream.once("connect",function(){n._keepAlive&&n.stream.
setKeepAlive(!0,n._keepAliveInitialDelayMillis),n.emit("connect")});let i=o(function(s){
n._ending&&(s.code==="ECONNRESET"||s.code==="EPIPE")||n.emit("error",s)},"report\
StreamError");if(this.stream.on("error",i),this.stream.on("close",function(){n.emit(
"end")}),!this.ssl)return this.attachListeners(this.stream);this.stream.once("da\
ta",function(s){var a=s.toString("utf8");switch(a){case"S":break;case"N":return n.
stream.end(),n.emit("error",new Error("The server does not support SSL connectio\
ns"));default:return n.stream.end(),n.emit("error",new Error("There was an error\
 establishing an SSL connection"))}var u=(la(),z(ca));let c={socket:n.stream};n.
ssl!==!0&&(Object.assign(c,n.ssl),"key"in n.ssl&&(c.key=n.ssl.key)),ha.isIP(t)===
0&&(c.servername=t);try{n.stream=u.connect(c)}catch(l){return n.emit("error",l)}
n.attachListeners(n.stream),n.stream.on("error",i),n.emit("sslconnect")})}attachListeners(e){
e.on("end",()=>{this.emit("end")}),Zl(e,t=>{var n=t.name==="error"?"errorMessage":
t.name;this._emitMessage&&this.emit("message",t),this.emit(n,t)})}requestSsl(){this.
stream.write(Z.requestSsl())}startup(e){this.stream.write(Z.startup(e))}cancel(e,t){
this._send(Z.cancel(e,t))}password(e){this._send(Z.password(e))}sendSASLInitialResponseMessage(e,t){
this._send(Z.sendSASLInitialResponseMessage(e,t))}sendSCRAMClientFinalMessage(e){
this._send(Z.sendSCRAMClientFinalMessage(e))}_send(e){return this.stream.writable?
this.stream.write(e):!1}query(e){this._send(Z.query(e))}parse(e){this._send(Z.parse(
e))}bind(e){this._send(Z.bind(e))}execute(e){this._send(Z.execute(e))}flush(){this.
stream.writable&&this.stream.write(fa)}sync(){this._ending=!0,this._send(fa),this.
_send(Xl)}ref(){this.stream.ref()}unref(){this.stream.unref()}end(){if(this._ending=
!0,!this._connecting||!this.stream.writable){this.stream.end();return}return this.
stream.write(eh,()=>{this.stream.end()})}close(e){this._send(Z.close(e))}describe(e){
this._send(Z.describe(e))}sendCopyFromChunk(e){this._send(Z.copyData(e))}endCopyFrom(){
this._send(Z.copyDone())}sendCopyFail(e){this._send(Z.copyFail(e))}};da.exports=
Ln});var wa=B((gp,ya)=>{"use strict";y();var th=Ue().EventEmitter,mp=(bt(),z(Et)),rh=mt(),
In=Us(),nh=qs(),ih=Xr(),sh=Wt(),pa=Xs(),ah=wt(),oh=Tn(),Jt=class extends th{static{
o(this,"Client")}constructor(e){super(),this.connectionParameters=new sh(e),this.
user=this.connectionParameters.user,this.database=this.connectionParameters.database,
this.port=this.connectionParameters.port,this.host=this.connectionParameters.host,
Object.defineProperty(this,"password",{configurable:!0,enumerable:!1,writable:!0,
value:this.connectionParameters.password}),this.replication=this.connectionParameters.
replication;var t=e||{};this._Promise=t.Promise||C.Promise,this._types=new ih(t.
types),this._ending=!1,this._connecting=!1,this._connected=!1,this._connectionError=
!1,this._queryable=!0,this.connection=t.connection||new oh({stream:t.stream,ssl:this.
connectionParameters.ssl,keepAlive:t.keepAlive||!1,keepAliveInitialDelayMillis:t.
keepAliveInitialDelayMillis||0,encoding:this.connectionParameters.client_encoding||
"utf8"}),this.queryQueue=[],this.binary=t.binary||ah.binary,this.processID=null,
this.secretKey=null,this.ssl=this.connectionParameters.ssl||!1,this.ssl&&this.ssl.
key&&Object.defineProperty(this.ssl,"key",{enumerable:!1}),this._connectionTimeoutMillis=
t.connectionTimeoutMillis||0}_errorAllQueries(e){let t=o(n=>{m.nextTick(()=>{n.handleError(
e,this.connection)})},"enqueueError");this.activeQuery&&(t(this.activeQuery),this.
activeQuery=null),this.queryQueue.forEach(t),this.queryQueue.length=0}_connect(e){
var t=this,n=this.connection;if(this._connectionCallback=e,this._connecting||this.
_connected){let i=new Error("Client has already been connected. You cannot reuse\
 a client.");m.nextTick(()=>{e(i)});return}this._connecting=!0,this.connectionTimeoutHandle,
this._connectionTimeoutMillis>0&&(this.connectionTimeoutHandle=setTimeout(()=>{n.
_ending=!0,n.stream.destroy(new Error("timeout expired"))},this._connectionTimeoutMillis)),
this.host&&this.host.indexOf("/")===0?n.connect(this.host+"/.s.PGSQL."+this.port):
n.connect(this.port,this.host),n.on("connect",function(){t.ssl?n.requestSsl():n.
startup(t.getStartupConf())}),n.on("sslconnect",function(){n.startup(t.getStartupConf())}),
this._attachListeners(n),n.once("end",()=>{let i=this._ending?new Error("Connect\
ion terminated"):new Error("Connection terminated unexpectedly");clearTimeout(this.
connectionTimeoutHandle),this._errorAllQueries(i),this._ending||(this._connecting&&
!this._connectionError?this._connectionCallback?this._connectionCallback(i):this.
_handleErrorEvent(i):this._connectionError||this._handleErrorEvent(i)),m.nextTick(
()=>{this.emit("end")})})}connect(e){if(e){this._connect(e);return}return new this.
_Promise((t,n)=>{this._connect(i=>{i?n(i):t()})})}_attachListeners(e){e.on("auth\
enticationCleartextPassword",this._handleAuthCleartextPassword.bind(this)),e.on(
"authenticationMD5Password",this._handleAuthMD5Password.bind(this)),e.on("authen\
ticationSASL",this._handleAuthSASL.bind(this)),e.on("authenticationSASLContinue",
this._handleAuthSASLContinue.bind(this)),e.on("authenticationSASLFinal",this._handleAuthSASLFinal.
bind(this)),e.on("backendKeyData",this._handleBackendKeyData.bind(this)),e.on("e\
rror",this._handleErrorEvent.bind(this)),e.on("errorMessage",this._handleErrorMessage.
bind(this)),e.on("readyForQuery",this._handleReadyForQuery.bind(this)),e.on("not\
ice",this._handleNotice.bind(this)),e.on("rowDescription",this._handleRowDescription.
bind(this)),e.on("dataRow",this._handleDataRow.bind(this)),e.on("portalSuspended",
this._handlePortalSuspended.bind(this)),e.on("emptyQuery",this._handleEmptyQuery.
bind(this)),e.on("commandComplete",this._handleCommandComplete.bind(this)),e.on(
"parseComplete",this._handleParseComplete.bind(this)),e.on("copyInResponse",this.
_handleCopyInResponse.bind(this)),e.on("copyData",this._handleCopyData.bind(this)),
e.on("notification",this._handleNotification.bind(this))}_checkPgPass(e){let t=this.
connection;typeof this.password=="function"?this._Promise.resolve().then(()=>this.
password()).then(n=>{if(n!==void 0){if(typeof n!="string"){t.emit("error",new TypeError(
"Password must be a string"));return}this.connectionParameters.password=this.password=
n}else this.connectionParameters.password=this.password=null;e()}).catch(n=>{t.emit(
"error",n)}):this.password!==null?e():nh(this.connectionParameters,n=>{n!==void 0&&
(this.connectionParameters.password=this.password=n),e()})}_handleAuthCleartextPassword(e){
this._checkPgPass(()=>{this.connection.password(this.password)})}_handleAuthMD5Password(e){
this._checkPgPass(()=>{let t=rh.postgresMd5PasswordHash(this.user,this.password,
e.salt);this.connection.password(t)})}_handleAuthSASL(e){this._checkPgPass(()=>{
this.saslSession=In.startSession(e.mechanisms),this.connection.sendSASLInitialResponseMessage(
this.saslSession.mechanism,this.saslSession.response)})}_handleAuthSASLContinue(e){
In.continueSession(this.saslSession,this.password,e.data),this.connection.sendSCRAMClientFinalMessage(
this.saslSession.response)}_handleAuthSASLFinal(e){In.finalizeSession(this.saslSession,
e.data),this.saslSession=null}_handleBackendKeyData(e){this.processID=e.processID,
this.secretKey=e.secretKey}_handleReadyForQuery(e){this._connecting&&(this._connecting=
!1,this._connected=!0,clearTimeout(this.connectionTimeoutHandle),this._connectionCallback&&
(this._connectionCallback(null,this),this._connectionCallback=null),this.emit("c\
onnect"));let{activeQuery:t}=this;this.activeQuery=null,this.readyForQuery=!0,t&&
t.handleReadyForQuery(this.connection),this._pulseQueryQueue()}_handleErrorWhileConnecting(e){
if(!this._connectionError){if(this._connectionError=!0,clearTimeout(this.connectionTimeoutHandle),
this._connectionCallback)return this._connectionCallback(e);this.emit("error",e)}}_handleErrorEvent(e){
if(this._connecting)return this._handleErrorWhileConnecting(e);this._queryable=!1,
this._errorAllQueries(e),this.emit("error",e)}_handleErrorMessage(e){if(this._connecting)
return this._handleErrorWhileConnecting(e);let t=this.activeQuery;if(!t){this._handleErrorEvent(
e);return}this.activeQuery=null,t.handleError(e,this.connection)}_handleRowDescription(e){
this.activeQuery.handleRowDescription(e)}_handleDataRow(e){this.activeQuery.handleDataRow(
e)}_handlePortalSuspended(e){this.activeQuery.handlePortalSuspended(this.connection)}_handleEmptyQuery(e){
this.activeQuery.handleEmptyQuery(this.connection)}_handleCommandComplete(e){this.
activeQuery.handleCommandComplete(e,this.connection)}_handleParseComplete(e){this.
activeQuery.name&&(this.connection.parsedStatements[this.activeQuery.name]=this.
activeQuery.text)}_handleCopyInResponse(e){this.activeQuery.handleCopyInResponse(
this.connection)}_handleCopyData(e){this.activeQuery.handleCopyData(e,this.connection)}_handleNotification(e){
this.emit("notification",e)}_handleNotice(e){this.emit("notice",e)}getStartupConf(){
var e=this.connectionParameters,t={user:e.user,database:e.database},n=e.application_name||
e.fallback_application_name;return n&&(t.application_name=n),e.replication&&(t.replication=
""+e.replication),e.statement_timeout&&(t.statement_timeout=String(parseInt(e.statement_timeout,
10))),e.lock_timeout&&(t.lock_timeout=String(parseInt(e.lock_timeout,10))),e.idle_in_transaction_session_timeout&&
(t.idle_in_transaction_session_timeout=String(parseInt(e.idle_in_transaction_session_timeout,
10))),e.options&&(t.options=e.options),t}cancel(e,t){if(e.activeQuery===t){var n=this.
connection;this.host&&this.host.indexOf("/")===0?n.connect(this.host+"/.s.PGSQL."+
this.port):n.connect(this.port,this.host),n.on("connect",function(){n.cancel(e.processID,
e.secretKey)})}else e.queryQueue.indexOf(t)!==-1&&e.queryQueue.splice(e.queryQueue.
indexOf(t),1)}setTypeParser(e,t,n){return this._types.setTypeParser(e,t,n)}getTypeParser(e,t){
return this._types.getTypeParser(e,t)}escapeIdentifier(e){return'"'+e.replace(/"/g,
'""')+'"'}escapeLiteral(e){for(var t=!1,n="'",i=0;i<e.length;i++){var s=e[i];s===
"'"?n+=s+s:s==="\\"?(n+=s+s,t=!0):n+=s}return n+="'",t===!0&&(n=" E"+n),n}_pulseQueryQueue(){
if(this.readyForQuery===!0)if(this.activeQuery=this.queryQueue.shift(),this.activeQuery){
this.readyForQuery=!1,this.hasExecuted=!0;let e=this.activeQuery.submit(this.connection);
e&&m.nextTick(()=>{this.activeQuery.handleError(e,this.connection),this.readyForQuery=
!0,this._pulseQueryQueue()})}else this.hasExecuted&&(this.activeQuery=null,this.
emit("drain"))}query(e,t,n){var i,s,a,u,c;if(e==null)throw new TypeError("Client\
 was passed a null or undefined query");return typeof e.submit=="function"?(a=e.
query_timeout||this.connectionParameters.query_timeout,s=i=e,typeof t=="function"&&
(i.callback=i.callback||t)):(a=this.connectionParameters.query_timeout,i=new pa(
e,t,n),i.callback||(s=new this._Promise((l,h)=>{i.callback=(f,p)=>f?h(f):l(p)}))),
a&&(c=i.callback,u=setTimeout(()=>{var l=new Error("Query read timeout");m.nextTick(
()=>{i.handleError(l,this.connection)}),c(l),i.callback=()=>{};var h=this.queryQueue.
indexOf(i);h>-1&&this.queryQueue.splice(h,1),this._pulseQueryQueue()},a),i.callback=
(l,h)=>{clearTimeout(u),c(l,h)}),this.binary&&!i.binary&&(i.binary=!0),i._result&&
!i._result._types&&(i._result._types=this._types),this._queryable?this._ending?(m.
nextTick(()=>{i.handleError(new Error("Client was closed and is not queryable"),
this.connection)}),s):(this.queryQueue.push(i),this._pulseQueryQueue(),s):(m.nextTick(
()=>{i.handleError(new Error("Client has encountered a connection error and is n\
ot queryable"),this.connection)}),s)}ref(){this.connection.ref()}unref(){this.connection.
unref()}end(e){if(this._ending=!0,!this.connection._connecting)if(e)e();else return this.
_Promise.resolve();if(this.activeQuery||!this._queryable?this.connection.stream.
destroy():this.connection.end(),e)this.connection.once("end",e);else return new this.
_Promise(t=>{this.connection.once("end",t)})}};Jt.Query=pa;ya.exports=Jt});var Ea=B((bp,Sa)=>{"use strict";y();var uh=Ue().EventEmitter,ma=o(function(){},"\
NOOP"),ga=o((r,e)=>{let t=r.findIndex(e);return t===-1?void 0:r.splice(t,1)[0]},
"removeWhere"),Bn=class{static{o(this,"IdleItem")}constructor(e,t,n){this.client=
e,this.idleListener=t,this.timeoutId=n}},Ze=class{static{o(this,"PendingItem")}constructor(e){
this.callback=e}};function ch(){throw new Error("Release called on client which \
has already been released to the pool.")}o(ch,"throwOnDoubleRelease");function Zt(r,e){
if(e)return{callback:e,result:void 0};let t,n,i=o(function(a,u){a?t(a):n(u)},"cb"),
s=new r(function(a,u){n=a,t=u}).catch(a=>{throw Error.captureStackTrace(a),a});return{
callback:i,result:s}}o(Zt,"promisify");function lh(r,e){return o(function t(n){n.
client=e,e.removeListener("error",t),e.on("error",()=>{r.log("additional client \
error after disconnection due to error",n)}),r._remove(e),r.emit("error",n,e)},"\
idleListener")}o(lh,"makeIdleListener");var Pn=class extends uh{static{o(this,"P\
ool")}constructor(e,t){super(),this.options=Object.assign({},e),e!=null&&"passwo\
rd"in e&&Object.defineProperty(this.options,"password",{configurable:!0,enumerable:!1,
writable:!0,value:e.password}),e!=null&&e.ssl&&e.ssl.key&&Object.defineProperty(
this.options.ssl,"key",{enumerable:!1}),this.options.max=this.options.max||this.
options.poolSize||10,this.options.maxUses=this.options.maxUses||1/0,this.options.
allowExitOnIdle=this.options.allowExitOnIdle||!1,this.options.maxLifetimeSeconds=
this.options.maxLifetimeSeconds||0,this.log=this.options.log||function(){},this.
Client=this.options.Client||t||Xt().Client,this.Promise=this.options.Promise||C.
Promise,typeof this.options.idleTimeoutMillis>"u"&&(this.options.idleTimeoutMillis=
1e4),this._clients=[],this._idle=[],this._expired=new WeakSet,this._pendingQueue=
[],this._endCallback=void 0,this.ending=!1,this.ended=!1}_isFull(){return this._clients.
length>=this.options.max}_pulseQueue(){if(this.log("pulse queue"),this.ended){this.
log("pulse queue ended");return}if(this.ending){this.log("pulse queue on ending"),
this._idle.length&&this._idle.slice().map(t=>{this._remove(t.client)}),this._clients.
length||(this.ended=!0,this._endCallback());return}if(!this._pendingQueue.length){
this.log("no queued requests");return}if(!this._idle.length&&this._isFull())return;
let e=this._pendingQueue.shift();if(this._idle.length){let t=this._idle.pop();clearTimeout(
t.timeoutId);let n=t.client;n.ref&&n.ref();let i=t.idleListener;return this._acquireClient(
n,e,i,!1)}if(!this._isFull())return this.newClient(e);throw new Error("unexpecte\
d condition")}_remove(e){let t=ga(this._idle,n=>n.client===e);t!==void 0&&clearTimeout(
t.timeoutId),this._clients=this._clients.filter(n=>n!==e),e.end(),this.emit("rem\
ove",e)}connect(e){if(this.ending){let i=new Error("Cannot use a pool after call\
ing end on the pool");return e?e(i):this.Promise.reject(i)}let t=Zt(this.Promise,
e),n=t.result;if(this._isFull()||this._idle.length){if(this._idle.length&&m.nextTick(
()=>this._pulseQueue()),!this.options.connectionTimeoutMillis)return this._pendingQueue.
push(new Ze(t.callback)),n;let i=o((u,c,l)=>{clearTimeout(a),t.callback(u,c,l)},
"queueCallback"),s=new Ze(i),a=setTimeout(()=>{ga(this._pendingQueue,u=>u.callback===
i),s.timedOut=!0,t.callback(new Error("timeout exceeded when trying to connect"))},
this.options.connectionTimeoutMillis);return this._pendingQueue.push(s),n}return this.
newClient(new Ze(t.callback)),n}newClient(e){let t=new this.Client(this.options);
this._clients.push(t);let n=lh(this,t);this.log("checking client timeout");let i,
s=!1;this.options.connectionTimeoutMillis&&(i=setTimeout(()=>{this.log("ending c\
lient due to timeout"),s=!0,t.connection?t.connection.stream.destroy():t.end()},
this.options.connectionTimeoutMillis)),this.log("connecting new client"),t.connect(
a=>{if(i&&clearTimeout(i),t.on("error",n),a)this.log("client failed to connect",
a),this._clients=this._clients.filter(u=>u!==t),s&&(a.message="Connection termin\
ated due to connection timeout"),this._pulseQueue(),e.timedOut||e.callback(a,void 0,
ma);else{if(this.log("new client connected"),this.options.maxLifetimeSeconds!==0){
let u=setTimeout(()=>{this.log("ending client due to expired lifetime"),this._expired.
add(t),this._idle.findIndex(l=>l.client===t)!==-1&&this._acquireClient(t,new Ze(
(l,h,f)=>f()),n,!1)},this.options.maxLifetimeSeconds*1e3);u.unref(),t.once("end",
()=>clearTimeout(u))}return this._acquireClient(t,e,n,!0)}})}_acquireClient(e,t,n,i){
i&&this.emit("connect",e),this.emit("acquire",e),e.release=this._releaseOnce(e,n),
e.removeListener("error",n),t.timedOut?i&&this.options.verify?this.options.verify(
e,e.release):e.release():i&&this.options.verify?this.options.verify(e,s=>{if(s)return e.
release(s),t.callback(s,void 0,ma);t.callback(void 0,e,e.release)}):t.callback(void 0,
e,e.release)}_releaseOnce(e,t){let n=!1;return i=>{n&&ch(),n=!0,this._release(e,
t,i)}}_release(e,t,n){if(e.on("error",t),e._poolUseCount=(e._poolUseCount||0)+1,
this.emit("release",n,e),n||this.ending||!e._queryable||e._ending||e._poolUseCount>=
this.options.maxUses){e._poolUseCount>=this.options.maxUses&&this.log("remove ex\
pended client"),this._remove(e),this._pulseQueue();return}if(this._expired.has(e)){
this.log("remove expired client"),this._expired.delete(e),this._remove(e),this._pulseQueue();
return}let s;this.options.idleTimeoutMillis&&(s=setTimeout(()=>{this.log("remove\
 idle client"),this._remove(e)},this.options.idleTimeoutMillis),this.options.allowExitOnIdle&&
s.unref()),this.options.allowExitOnIdle&&e.unref(),this._idle.push(new Bn(e,t,s)),
this._pulseQueue()}query(e,t,n){if(typeof e=="function"){let s=Zt(this.Promise,e);
return U(function(){return s.callback(new Error("Passing a function as the first\
 parameter to pool.query is not supported"))}),s.result}typeof t=="function"&&(n=
t,t=void 0);let i=Zt(this.Promise,n);return n=i.callback,this.connect((s,a)=>{if(s)
return n(s);let u=!1,c=o(l=>{u||(u=!0,a.release(l),n(l))},"onError");a.once("err\
or",c),this.log("dispatching query");try{a.query(e,t,(l,h)=>{if(this.log("query \
dispatched"),a.removeListener("error",c),!u)return u=!0,a.release(l),l?n(l):n(void 0,
h)})}catch(l){return a.release(l),n(l)}}),i.result}end(e){if(this.log("ending"),
this.ending){let n=new Error("Called end on pool more than once");return e?e(n):
this.Promise.reject(n)}this.ending=!0;let t=Zt(this.Promise,e);return this._endCallback=
t.callback,this._pulseQueue(),t.result}get waitingCount(){return this._pendingQueue.
length}get idleCount(){return this._idle.length}get expiredCount(){return this._clients.
reduce((e,t)=>e+(this._expired.has(t)?1:0),0)}get totalCount(){return this._clients.
length}};Sa.exports=Pn});var ba={};fe(ba,{default:()=>hh});var hh,xa=ae(()=>{y();hh={}});var Aa=B((Cp,fh)=>{fh.exports={name:"pg",version:"8.8.0",description:"PostgreSQL\
 client - pure javascript & libpq with the same API",keywords:["database","libpq",
"pg","postgre","postgres","postgresql","rdbms"],homepage:"https://github.com/bri\
anc/node-postgres",repository:{type:"git",url:"git://github.com/brianc/node-post\
gres.git",directory:"packages/pg"},author:"Brian Carlson <brian.m.carlson@gmail.\
com>",main:"./lib",dependencies:{"buffer-writer":"2.0.0","packet-reader":"1.0.0",
"pg-connection-string":"^2.5.0","pg-pool":"^3.5.2","pg-protocol":"^1.5.0","pg-ty\
pes":"^2.1.0",pgpass:"1.x"},devDependencies:{async:"2.6.4",bluebird:"3.5.2",co:"\
4.6.0","pg-copy-streams":"0.3.0"},peerDependencies:{"pg-native":">=3.0.1"},peerDependenciesMeta:{
"pg-native":{optional:!0}},scripts:{test:"make test-all"},files:["lib","SPONSORS\
.md"],license:"MIT",engines:{node:">= 8.0.0"},gitHead:"c99fb2c127ddf8d712500db2c\
7b9a5491a178655"}});var _a=B((_p,Ca)=>{"use strict";y();var va=Ue().EventEmitter,dh=(bt(),z(Et)),Rn=mt(),
Xe=Ca.exports=function(r,e,t){va.call(this),r=Rn.normalizeQueryConfig(r,e,t),this.
text=r.text,this.values=r.values,this.name=r.name,this.callback=r.callback,this.
state="new",this._arrayMode=r.rowMode==="array",this._emitRowEvents=!1,this.on("\
newListener",function(n){n==="row"&&(this._emitRowEvents=!0)}.bind(this))};dh.inherits(
Xe,va);var ph={sqlState:"code",statementPosition:"position",messagePrimary:"mess\
age",context:"where",schemaName:"schema",tableName:"table",columnName:"column",dataTypeName:"\
dataType",constraintName:"constraint",sourceFile:"file",sourceLine:"line",sourceFunction:"\
routine"};Xe.prototype.handleError=function(r){var e=this.native.pq.resultErrorFields();
if(e)for(var t in e){var n=ph[t]||t;r[n]=e[t]}this.callback?this.callback(r):this.
emit("error",r),this.state="error"};Xe.prototype.then=function(r,e){return this.
_getPromise().then(r,e)};Xe.prototype.catch=function(r){return this._getPromise().
catch(r)};Xe.prototype._getPromise=function(){return this._promise?this._promise:
(this._promise=new Promise(function(r,e){this._once("end",r),this._once("error",
e)}.bind(this)),this._promise)};Xe.prototype.submit=function(r){this.state="runn\
ing";var e=this;this.native=r.native,r.native.arrayMode=this._arrayMode;var t=o(
function(s,a,u){if(r.native.arrayMode=!1,U(function(){e.emit("_done")}),s)return e.
handleError(s);e._emitRowEvents&&(u.length>1?a.forEach((c,l)=>{c.forEach(h=>{e.emit(
"row",h,u[l])})}):a.forEach(function(c){e.emit("row",c,u)})),e.state="end",e.emit(
"end",u),e.callback&&e.callback(null,u)},"after");if(m.domain&&(t=m.domain.bind(
t)),this.name){this.name.length>63&&(console.error("Warning! Postgres only suppo\
rts 63 characters for query names."),console.error("You supplied %s (%s)",this.name,
this.name.length),console.error("This can cause conflicts and silent errors exec\
uting queries"));var n=(this.values||[]).map(Rn.prepareValue);if(r.namedQueries[this.
name]){if(this.text&&r.namedQueries[this.name]!==this.text){let s=new Error(`Pre\
pared statements must be unique - '${this.name}' was used for a different statem\
ent`);return t(s)}return r.native.execute(this.name,n,t)}return r.native.prepare(
this.name,this.text,n.length,function(s){return s?t(s):(r.namedQueries[e.name]=e.
text,e.native.execute(e.name,n,t))})}else if(this.values){if(!Array.isArray(this.
values)){let s=new Error("Query values must be an array");return t(s)}var i=this.
values.map(Rn.prepareValue);r.native.query(this.text,i,t)}else r.native.query(this.
text,t)}});var Ia=B((Ip,Ta)=>{"use strict";y();var yh=(xa(),z(ba)),wh=Xr(),Tp=Aa(),Ua=Ue().
EventEmitter,mh=(bt(),z(Et)),gh=Wt(),La=_a(),le=Ta.exports=function(r){Ua.call(this),
r=r||{},this._Promise=r.Promise||C.Promise,this._types=new wh(r.types),this.native=
new yh({types:this._types}),this._queryQueue=[],this._ending=!1,this._connecting=
!1,this._connected=!1,this._queryable=!0;var e=this.connectionParameters=new gh(
r);this.user=e.user,Object.defineProperty(this,"password",{configurable:!0,enumerable:!1,
writable:!0,value:e.password}),this.database=e.database,this.host=e.host,this.port=
e.port,this.namedQueries={}};le.Query=La;mh.inherits(le,Ua);le.prototype._errorAllQueries=
function(r){let e=o(t=>{m.nextTick(()=>{t.native=this.native,t.handleError(r)})},
"enqueueError");this._hasActiveQuery()&&(e(this._activeQuery),this._activeQuery=
null),this._queryQueue.forEach(e),this._queryQueue.length=0};le.prototype._connect=
function(r){var e=this;if(this._connecting){m.nextTick(()=>r(new Error("Client h\
as already been connected. You cannot reuse a client.")));return}this._connecting=
!0,this.connectionParameters.getLibpqConnectionString(function(t,n){if(t)return r(
t);e.native.connect(n,function(i){if(i)return e.native.end(),r(i);e._connected=!0,
e.native.on("error",function(s){e._queryable=!1,e._errorAllQueries(s),e.emit("er\
ror",s)}),e.native.on("notification",function(s){e.emit("notification",{channel:s.
relname,payload:s.extra})}),e.emit("connect"),e._pulseQueryQueue(!0),r()})})};le.
prototype.connect=function(r){if(r){this._connect(r);return}return new this._Promise(
(e,t)=>{this._connect(n=>{n?t(n):e()})})};le.prototype.query=function(r,e,t){var n,
i,s,a,u;if(r==null)throw new TypeError("Client was passed a null or undefined qu\
ery");if(typeof r.submit=="function")s=r.query_timeout||this.connectionParameters.
query_timeout,i=n=r,typeof e=="function"&&(r.callback=e);else if(s=this.connectionParameters.
query_timeout,n=new La(r,e,t),!n.callback){let c,l;i=new this._Promise((h,f)=>{c=
h,l=f}),n.callback=(h,f)=>h?l(h):c(f)}return s&&(u=n.callback,a=setTimeout(()=>{
var c=new Error("Query read timeout");m.nextTick(()=>{n.handleError(c,this.connection)}),
u(c),n.callback=()=>{};var l=this._queryQueue.indexOf(n);l>-1&&this._queryQueue.
splice(l,1),this._pulseQueryQueue()},s),n.callback=(c,l)=>{clearTimeout(a),u(c,l)}),
this._queryable?this._ending?(n.native=this.native,m.nextTick(()=>{n.handleError(
new Error("Client was closed and is not queryable"))}),i):(this._queryQueue.push(
n),this._pulseQueryQueue(),i):(n.native=this.native,m.nextTick(()=>{n.handleError(
new Error("Client has encountered a connection error and is not queryable"))}),i)};
le.prototype.end=function(r){var e=this;this._ending=!0,this._connected||this.once(
"connect",this.end.bind(this,r));var t;return r||(t=new this._Promise(function(n,i){
r=o(s=>s?i(s):n(),"cb")})),this.native.end(function(){e._errorAllQueries(new Error(
"Connection terminated")),m.nextTick(()=>{e.emit("end"),r&&r()})}),t};le.prototype.
_hasActiveQuery=function(){return this._activeQuery&&this._activeQuery.state!=="\
error"&&this._activeQuery.state!=="end"};le.prototype._pulseQueryQueue=function(r){
if(this._connected&&!this._hasActiveQuery()){var e=this._queryQueue.shift();if(!e){
r||this.emit("drain");return}this._activeQuery=e,e.submit(this);var t=this;e.once(
"_done",function(){t._pulseQueryQueue()})}};le.prototype.cancel=function(r){this.
_activeQuery===r?this.native.cancel(function(){}):this._queryQueue.indexOf(r)!==
-1&&this._queryQueue.splice(this._queryQueue.indexOf(r),1)};le.prototype.ref=function(){};
le.prototype.unref=function(){};le.prototype.setTypeParser=function(r,e,t){return this.
_types.setTypeParser(r,e,t)};le.prototype.getTypeParser=function(r,e){return this.
_types.getTypeParser(r,e)}});var Mn=B((Rp,Ba)=>{"use strict";y();Ba.exports=Ia()});var Xt=B((Dp,At)=>{"use strict";y();var Sh=wa(),Eh=wt(),bh=Tn(),xh=Ea(),{DatabaseError:Ah}=Un(),
vh=o(r=>class extends xh{static{o(this,"BoundPool")}constructor(t){super(t,r)}},
"poolFactory"),Fn=o(function(r){this.defaults=Eh,this.Client=r,this.Query=this.Client.
Query,this.Pool=vh(this.Client),this._pools=[],this.Connection=bh,this.types=yt(),
this.DatabaseError=Ah},"PG");typeof m.env.NODE_PG_FORCE_NATIVE<"u"?At.exports=new Fn(
Mn()):(At.exports=new Fn(Sh),Object.defineProperty(At.exports,"native",{configurable:!0,
enumerable:!1,get(){var r=null;try{r=new Fn(Mn())}catch(e){if(e.code!=="MODULE_N\
OT_FOUND")throw e}return Object.defineProperty(At.exports,"native",{value:r}),r}}))});y();var Ar={};fe(Ar,{SocketReadQueue:()=>Jo,TrustedCert:()=>wi,WebSocketReadQueue:()=>Yo,
startTls:()=>zo});y();function ne(...r){if(r.length===1&&r[0]instanceof Uint8Array)return r[0];let e=r.
reduce((i,s)=>i+s.length,0),t=new Uint8Array(e),n=0;for(let i of r)t.set(i,n),n+=
i.length;return t}o(ne,"p");function at(r,e){let t=r.length;if(t!==e.length)return!1;
for(let n=0;n<t;n++)if(r[n]!==e[n])return!1;return!0}o(at,"O");var mr="\xB7\xB7 ",
ui=new TextEncoder,Uo=new TextDecoder,Se=class{static{o(this,"N")}offset;dataView;data;comments;indents;indent;constructor(r){
this.offset=0,this.data=typeof r=="number"?new Uint8Array(r):r,this.dataView=new DataView(
this.data.buffer,this.data.byteOffset,this.data.byteLength),this.comments={},this.
indents={},this.indent=0}extend(r){let e=typeof r=="number"?new Uint8Array(r):r;
this.data=ne(this.data,e),this.dataView=new DataView(this.data.buffer,this.data.
byteOffset,this.data.byteLength)}remaining(){return this.data.length-this.offset}subarray(r){
return this.data.subarray(this.offset,this.offset+=r)}skip(r,e){return this.offset+=
r,e&&this.comment(e),this}comment(r,e=this.offset){throw new Error("No comments \
should be emitted outside of chatty mode")}readBytes(r){return this.data.slice(this.
offset,this.offset+=r)}readUTF8String(r){let e=this.subarray(r);return Uo.decode(
e)}readUTF8StringNullTerminated(){let r=this.offset;for(;this.data[r]!==0;)r++;let e=this.
readUTF8String(r-this.offset);return this.expectUint8(0,"end of string"),e}readUint8(r){
let e=this.dataView.getUint8(this.offset);return this.offset+=1,e}readUint16(r){
let e=this.dataView.getUint16(this.offset);return this.offset+=2,e}readUint24(r){
let e=this.readUint8(),t=this.readUint16();return(e<<16)+t}readUint32(r){let e=this.
dataView.getUint32(this.offset);return this.offset+=4,e}expectBytes(r,e){let t=this.
readBytes(r.length);if(!at(t,r))throw new Error("Unexpected bytes")}expectUint8(r,e){
let t=this.readUint8();if(t!==r)throw new Error(`Expected ${r}, got ${t}`)}expectUint16(r,e){
let t=this.readUint16();if(t!==r)throw new Error(`Expected ${r}, got ${t}`)}expectUint24(r,e){
let t=this.readUint24();if(t!==r)throw new Error(`Expected ${r}, got ${t}`)}expectUint32(r,e){
let t=this.readUint32();if(t!==r)throw new Error(`Expected ${r}, got ${t}`)}expectLength(r,e=1){
let t=this.offset,n=t+r;if(n>this.data.length)throw new Error("Expected length e\
xceeds remaining data length");return this.indent+=e,this.indents[t]=this.indent,
[()=>{if(this.indent-=e,this.indents[this.offset]=this.indent,this.offset!==n)throw new Error(
`${r} bytes expected but ${this.offset-t} read`)},()=>n-this.offset]}expectLengthUint8(r){
let e=this.readUint8();return this.expectLength(e)}expectLengthUint16(r){let e=this.
readUint16();return this.expectLength(e)}expectLengthUint24(r){let e=this.readUint24();
return this.expectLength(e)}expectLengthUint32(r){let e=this.readUint32();return this.
expectLength(e)}expectLengthUint8Incl(r){let e=this.readUint8();return this.expectLength(
e-1)}expectLengthUint16Incl(r){let e=this.readUint16();return this.expectLength(
e-2)}expectLengthUint24Incl(r){let e=this.readUint24();return this.expectLength(
e-3)}expectLengthUint32Incl(r){let e=this.readUint32();return this.expectLength(
e-4)}writeBytes(r){return this.data.set(r,this.offset),this.offset+=r.length,this}writeUTF8String(r){
let e=ui.encode(r);return this.writeBytes(e),this}writeUTF8StringNullTerminated(r){
let e=ui.encode(r);return this.writeBytes(e),this.writeUint8(0),this}writeUint8(r,e){
return this.dataView.setUint8(this.offset,r),this.offset+=1,this}writeUint16(r,e){
return this.dataView.setUint16(this.offset,r),this.offset+=2,this}writeUint24(r,e){
return this.writeUint8((r&16711680)>>16),this.writeUint16(r&65535,e),this}writeUint32(r,e){
return this.dataView.setUint32(this.offset,r),this.offset+=4,this}_writeLengthGeneric(r,e,t){
let n=this.offset;this.offset+=r;let i=this.offset;return this.indent+=1,this.indents[i]=
this.indent,()=>{let s=this.offset-(e?n:i);if(r===1)this.dataView.setUint8(n,s);else if(r===
2)this.dataView.setUint16(n,s);else if(r===3)this.dataView.setUint8(n,(s&16711680)>>
16),this.dataView.setUint16(n+1,s&65535);else if(r===4)this.dataView.setUint32(n,
s);else throw new Error(`Invalid length for length field: ${r}`);this.indent-=1,
this.indents[this.offset]=this.indent}}writeLengthUint8(r){return this._writeLengthGeneric(
1,!1,r)}writeLengthUint16(r){return this._writeLengthGeneric(2,!1,r)}writeLengthUint24(r){
return this._writeLengthGeneric(3,!1,r)}writeLengthUint32(r){return this._writeLengthGeneric(
4,!1,r)}writeLengthUint8Incl(r){return this._writeLengthGeneric(1,!0,r)}writeLengthUint16Incl(r){
return this._writeLengthGeneric(2,!0,r)}writeLengthUint24Incl(r){return this._writeLengthGeneric(
3,!0,r)}writeLengthUint32Incl(r){return this._writeLengthGeneric(4,!0,r)}array(){
return this.data.subarray(0,this.offset)}commentedString(r=!1){let e=this.indents[0]!==
void 0?mr.repeat(this.indents[0]):"",t=this.indents[0]??0,n=r?this.data.length:this.
offset;for(let i=0;i<n;i++){e+=this.data[i].toString(16).padStart(2,"0")+" ";let s=this.
comments[i+1];this.indents[i+1]!==void 0&&(t=this.indents[i+1]),s&&(e+=` ${s}
${mr.repeat(t)}`)}return e}};function Lo(r,e,t,n=!0){let i=new Se(1024);i.writeUint8(
22,0),i.writeUint16(769,0);let s=i.writeLengthUint16();i.writeUint8(1,0);let a=i.
writeLengthUint24();i.writeUint16(771,0),x.getRandomValues(i.subarray(32));let u=i.
writeLengthUint8(0);i.writeBytes(t),u();let c=i.writeLengthUint16(0);i.writeUint16(
4865,0),c();let l=i.writeLengthUint8(0);i.writeUint8(0,0),l();let h=i.writeLengthUint16(
0);if(n){i.writeUint16(0,0);let F=i.writeLengthUint16(0),Y=i.writeLengthUint16(0);
i.writeUint8(0,0);let O=i.writeLengthUint16(0);i.writeUTF8String(r),O(),Y(),F()}
i.writeUint16(11,0);let f=i.writeLengthUint16(0),p=i.writeLengthUint8(0);i.writeUint8(
0,0),p(),f(),i.writeUint16(10,0);let g=i.writeLengthUint16(0),S=i.writeLengthUint16(
0);i.writeUint16(23,0),S(),g(),i.writeUint16(13,0);let A=i.writeLengthUint16(0),
b=i.writeLengthUint16(0);i.writeUint16(1027,0),i.writeUint16(2052,0),b(),A(),i.writeUint16(
43,0);let T=i.writeLengthUint16(0),v=i.writeLengthUint8(0);i.writeUint16(772,0),
v(),T(),i.writeUint16(51,0);let E=i.writeLengthUint16(0),M=i.writeLengthUint16(0);
i.writeUint16(23,0);let H=i.writeLengthUint16(0);return i.writeBytes(new Uint8Array(
e)),H(),M(),E(),h(),a(),s(),i}o(Lo,"St");function Ce(r,e=""){return[...r].map(t=>t.
toString(16).padStart(2,"0")).join(e)}o(Ce,"K");function To(r,e){let t,n,[i]=r.expectLength(
r.remaining());r.expectUint8(2,0);let[s]=r.expectLengthUint24(0);r.expectUint16(
771,0);let a=r.readBytes(32);if(at(a,[207,33,173,116,229,154,97,17,190,29,140,2,
30,101,184,145,194,162,17,22,122,187,140,94,7,158,9,226,200,168,51,156]))throw new Error(
"Unexpected HelloRetryRequest");r.expectUint8(e.length,0),r.expectBytes(e,0),r.expectUint16(
4865,0),r.expectUint8(0,0);let[u,c]=r.expectLengthUint16(0);for(;c()>0;){let l=r.
readUint16(0),[h]=r.expectLengthUint16(0);if(l===43)r.expectUint16(772,0),n=!0;else if(l===
51)r.expectUint16(23,0),r.expectUint16(65),t=r.readBytes(65);else throw new Error(
`Unexpected extension 0x${Ce([l])}`);h()}if(u(),s(),i(),n!==!0)throw new Error("\
No TLS version provided");if(t===void 0)throw new Error("No key provided");return t}
o(To,"Ut");var qh=new RegExp(`  .+|^(${mr})+`,"gm"),st=16384,Io=st+1+255;async function gr(r,e,t=st){
let n=await r(5);if(n===void 0)return;if(n.length<5)throw new Error("TLS record \
header truncated");let i=new Se(n),s=i.readUint8();if(s<20||s>24)throw new Error(
`Illegal TLS record type 0x${s.toString(16)}`);if(e!==void 0&&s!==e)throw new Error(
`Unexpected TLS record type 0x${s.toString(16).padStart(2,"0")} (expected 0x${e.
toString(16).padStart(2,"0")})`);i.expectUint16(771,"TLS record version 1.2 (mid\
dlebox compatibility)");let a=i.readUint16(0);if(a>t)throw new Error(`Record too\
 long: ${a} bytes`);let u=await r(a);if(u===void 0||u.length<a)throw new Error("\
TLS record content truncated");return{headerData:n,header:i,type:s,length:a,content:u}}
o(gr,"ht");async function Sr(r,e,t){let n=await gr(r,23,Io);if(n===void 0)return;
let i=new Se(n.content),[s]=i.expectLength(i.remaining());i.skip(n.length-16,0),
i.skip(16,0),s();let a=await e.process(n.content,16,n.headerData),u=a.length-1;for(;a[u]===
0;)u-=1;if(u<0)throw new Error("Decrypted message has no record type indicator (\
all zeroes)");let c=a[u],l=a.subarray(0,u);if(!(c===21&&l.length===2&&l[0]===1&&
l[1]===0)){if(c===22&&l[0]===4)return Sr(r,e,t);if(t!==void 0&&c!==t)throw new Error(
`Unexpected TLS record type 0x${c.toString(16).padStart(2,"0")} (expected 0x${t.
toString(16).padStart(2,"0")})`);return l}}o(Sr,"dt");async function Bo(r,e,t){let n=ne(
r,[t]),i=5,s=n.length+16,a=new Se(i+s);a.writeUint8(23,0),a.writeUint16(771,0),a.
writeUint16(s,`${s} bytes follow`);let[u]=a.expectLength(s),c=a.array(),l=await e.
process(n,16,c);return a.writeBytes(l.subarray(0,l.length-16)),a.writeBytes(l.subarray(
l.length-16)),u(),a.array()}o(Bo,"ee");async function ci(r,e,t){let n=Math.ceil(
r.length/st),i=[];for(let s=0;s<n;s++){let a=r.subarray(s*st,(s+1)*st),u=await Bo(
a,e,t);i.push(u)}return i}o(ci,"At");var R=x.subtle,pi=new TextEncoder;async function Er(r,e,t){
let n=await R.importKey("raw",r,{name:"HMAC",hash:{name:`SHA-${t}`}},!1,["sign"]);
var i=new Uint8Array(await R.sign("HMAC",n,e));return i}o(Er,"lt");async function Po(r,e,t,n){
let i=n>>3,s=Math.ceil(t/i),a=new Uint8Array(s*i),u=await R.importKey("raw",r,{name:"\
HMAC",hash:{name:`SHA-${n}`}},!1,["sign"]),c=new Uint8Array(0);for(let l=0;l<s;l++){
let h=ne(c,e,[l+1]),f=await R.sign("HMAC",u,h),p=new Uint8Array(f);a.set(p,i*l),
c=p}return a.subarray(0,t)}o(Po,"ne");var li=pi.encode("tls13 ");async function ie(r,e,t,n,i){
let s=pi.encode(e),a=ne([(n&65280)>>8,n&255],[li.length+s.length],li,s,[t.length],
t);return Po(r,a,n,i)}o(ie,"S");async function Ro(r,e,t,n,i){let s=n>>>3,a=new Uint8Array(
s),u=await R.importKey("raw",r,{name:"ECDH",namedCurve:"P-256"},!1,[]),c=await R.
deriveBits({name:"ECDH",public:u},e,256),l=new Uint8Array(c),h=await R.digest("S\
HA-256",t),f=new Uint8Array(h),p=await Er(new Uint8Array(1),a,n),g=await R.digest(
`SHA-${n}`,new Uint8Array(0)),S=new Uint8Array(g),A=await ie(p,"derived",S,s,n),
b=await Er(A,l,n),T=await ie(b,"c hs traffic",f,s,n),v=await ie(b,"s hs traffic",
f,s,n),E=await ie(T,"key",new Uint8Array(0),i,n),M=await ie(v,"key",new Uint8Array(
0),i,n),H=await ie(T,"iv",new Uint8Array(0),12,n),F=await ie(v,"iv",new Uint8Array(
0),12,n);return{serverHandshakeKey:M,serverHandshakeIV:F,clientHandshakeKey:E,clientHandshakeIV:H,
handshakeSecret:b,clientSecret:T,serverSecret:v}}o(Ro,"Kt");async function Mo(r,e,t,n){
let i=t>>>3,s=new Uint8Array(i),a=await R.digest(`SHA-${t}`,new Uint8Array(0)),u=new Uint8Array(
a),c=await ie(r,"derived",u,i,t),l=await Er(c,s,t),h=await ie(l,"c ap traffic",e,
i,t),f=await ie(l,"s ap traffic",e,i,t),p=await ie(h,"key",new Uint8Array(0),n,t),
g=await ie(f,"key",new Uint8Array(0),n,t),S=await ie(h,"iv",new Uint8Array(0),12,
t),A=await ie(f,"iv",new Uint8Array(0),12,t);return{serverApplicationKey:g,serverApplicationIV:A,
clientApplicationKey:p,clientApplicationIV:S}}o(Mo,"Tt");var Bt=class{static{o(this,
"Z")}constructor(r,e,t){this.mode=r,this.key=e,this.initialIv=t}recordsProcessed=0n;priorPromise=Promise.
resolve(new Uint8Array);async process(r,e,t){let n=this.processUnsequenced(r,e,t);
return this.priorPromise=this.priorPromise.then(()=>n)}async processUnsequenced(r,e,t){
let n=this.recordsProcessed;this.recordsProcessed+=1n;let i=this.initialIv.slice(),
s=BigInt(i.length),a=s-1n;for(let h=0n;h<s;h++){let f=n>>(h<<3n);if(f===0n)break;
i[Number(a-h)]^=Number(f&0xffn)}let u=e<<3,c={name:"AES-GCM",iv:i,tagLength:u,additionalData:t},
l=await R[this.mode](c,this.key,r);return new Uint8Array(l)}};function Pt(r){return r>
64&&r<91?r-65:r>96&&r<123?r-71:r>47&&r<58?r+4:r===43?62:r===47?63:r===61?64:void 0}
o(Pt,"yt");function Fo(r){let e=r.length,t=0,n=0,i=64,s=64,a=64,u=64,c=new Uint8Array(
e*.75);for(;t<e;)i=Pt(r.charCodeAt(t++)),s=Pt(r.charCodeAt(t++)),a=Pt(r.charCodeAt(
t++)),u=Pt(r.charCodeAt(t++)),c[n++]=i<<2|s>>4,c[n++]=(s&15)<<4|a>>2,c[n++]=(a&3)<<
6|u;let l=s===64?0:a===64?2:u===64?1:0;return c.subarray(0,n-l)}o(Fo,"Dt");var Rt=class extends Se{static{
o(this,"M")}readASN1Length(r){let e=this.readUint8();if(e<128)return e;let t=e&127,
n=0;if(t===1)return this.readUint8(n);if(t===2)return this.readUint16(n);if(t===
3)return this.readUint24(n);if(t===4)return this.readUint32(n);throw new Error(`\
ASN.1 length fields are only supported up to 4 bytes (this one is ${t} bytes)`)}expectASN1Length(r){
let e=this.readASN1Length(r);return this.expectLength(e)}readASN1OID(){let[r,e]=this.
expectASN1Length(0),t=this.readUint8(),n=`${Math.floor(t/40)}.${t%40}`;for(;e()>
0;){let i=0;for(;;){let s=this.readUint8();if(i<<=7,i+=s&127,s<128)break}n+=`.${i}`}
return r(),n}readASN1Boolean(){let[r,e]=this.expectASN1Length(0),t=e();if(t!==1)
throw new Error(`Boolean has weird length: ${t}`);let n=this.readUint8(),i;if(n===
255)i=!0;else if(n===0)i=!1;else throw new Error(`Boolean has weird value: 0x${Ce(
[n])}`);return r(),i}readASN1UTCTime(){let[r,e]=this.expectASN1Length(0),t=this.
readUTF8String(e()).match(/^(\d\d)(\d\d)(\d\d)(\d\d)(\d\d)(\d\d)Z$/);if(!t)throw new Error(
"Unrecognised ASN.1 UTC time format");let[,n,i,s,a,u,c]=t,l=parseInt(n,10),h=l+(l>=
50?1900:2e3),f=new Date(`${h}-${i}-${s}T${a}:${u}:${c}Z`);return r(),f}readASN1BitString(){
let[r,e]=this.expectASN1Length(0),t=this.readUint8(0),n=e(),i=this.readBytes(n);
if(t>7)throw new Error(`Invalid right pad value: ${t}`);if(t>0){let s=8-t;for(let a=n-
1;a>0;a--)i[a]=255&i[a-1]<<s|i[a]>>>t;i[0]=i[0]>>>t}return r(),i}};function hi(r,e=(n,i)=>i,t){
return JSON.stringify(r,(n,i)=>e(n,typeof i!="object"||i===null||Array.isArray(i)?
i:Object.fromEntries(Object.entries(i).sort(([s],[a])=>s<a?-1:s>a?1:0))),t)}o(hi,
"mt");var pr=1,Mt=2,re=48,Do=49,$e=6,No=19,qo=12,fi=23,yr=5,Me=4,wr=3,ko=163,Qe=128,
Oo={"2.5.4.6":"C","2.5.4.10":"O","2.5.4.11":"OU","2.5.4.3":"CN","2.5.4.7":"L","2\
.5.4.8":"ST","2.5.4.12":"T","2.5.4.42":"GN","2.5.4.43":"I","2.5.4.4":"SN","1.2.8\
40.113549.1.9.1":"E-mail"};function Qo(r){let{length:e}=r;if(e>4)throw new Error(
`Bit string length ${e} would overflow JS bit operators`);let t=0,n=0;for(let i=r.
length-1;i>=0;i--)t|=r[i]<<n,n+=8;return t}o(Qo,"qt");function di(r,e){let t={};
r.expectUint8(re,0);let[n,i]=r.expectASN1Length(0);for(;i()>0;){r.expectUint8(Do,
0);let[s]=r.expectASN1Length(0);r.expectUint8(re,0);let[a]=r.expectASN1Length(0);
r.expectUint8($e,0);let u=r.readASN1OID(),c=Oo[u]??u,l=r.readUint8();if(l!==No&&
l!==qo)throw new Error(`Unexpected item type in certificate ${e}: 0x${Ce([l])}`);
let[h,f]=r.expectASN1Length(0),p=r.readUTF8String(f());if(h(),a(),s(),t[c]!==void 0)
throw new Error(`Duplicate OID ${c} in certificate ${e}`);t[c]=p}return n(),t}o(
di,"Ct");function $o(r,e=0){let t=[],[n,i]=r.expectASN1Length(0);for(;i()>0;){let s=r.
readUint8(0),[a,u]=r.expectASN1Length(0),c;s===(e|2)?c=r.readUTF8String(u()):c=r.
readBytes(u()),t.push({name:c,type:s}),a()}return n(),t}o($o,"Bt");function jo(r){
let e={"1.2.840.113549.1.1.1":{name:"RSAES-PKCS1-v1_5"},"1.2.840.113549.1.1.5":{
name:"RSASSA-PKCS1-v1_5",hash:{name:"SHA-1"}},"1.2.840.113549.1.1.11":{name:"RSA\
SSA-PKCS1-v1_5",hash:{name:"SHA-256"}},"1.2.840.113549.1.1.12":{name:"RSASSA-PKC\
S1-v1_5",hash:{name:"SHA-384"}},"1.2.840.113549.1.1.13":{name:"RSASSA-PKCS1-v1_5",
hash:{name:"SHA-512"}},"1.2.840.113549.1.1.10":{name:"RSA-PSS"},"1.2.840.113549.\
1.1.7":{name:"RSA-OAEP"},"1.2.840.10045.2.1":{name:"ECDSA",hash:{name:"SHA-1"}},
"1.2.840.10045.4.1":{name:"ECDSA",hash:{name:"SHA-1"}},"1.2.840.10045.4.3.2":{name:"\
ECDSA",hash:{name:"SHA-256"}},"1.2.840.10045.4.3.3":{name:"ECDSA",hash:{name:"SH\
A-384"}},"1.2.840.10045.4.3.4":{name:"ECDSA",hash:{name:"SHA-512"}},"1.3.133.16.\
840.63.0.2":{name:"ECDH",kdf:"SHA-1"},"1.3.132.1.11.1":{name:"ECDH",kdf:"SHA-256"},
"1.3.132.1.11.2":{name:"ECDH",kdf:"SHA-384"},"1.3.132.1.11.3":{name:"ECDH",kdf:"\
SHA-512"},"2.16.840.1.101.3.4.1.2":{name:"AES-CBC",length:128},"2.16.840.1.101.3\
.4.1.22":{name:"AES-CBC",length:192},"2.16.840.1.101.3.4.1.42":{name:"AES-CBC",length:256},
"2.16.840.1.101.3.4.1.6":{name:"AES-GCM",length:128},"2.16.840.1.101.3.4.1.26":{
name:"AES-GCM",length:192},"2.16.840.1.101.3.4.1.46":{name:"AES-GCM",length:256},
"2.16.840.1.101.3.4.1.4":{name:"AES-CFB",length:128},"2.16.840.1.101.3.4.1.24":{
name:"AES-CFB",length:192},"2.16.840.1.101.3.4.1.44":{name:"AES-CFB",length:256},
"2.16.840.1.101.3.4.1.5":{name:"AES-KW",length:128},"2.16.840.1.101.3.4.1.25":{name:"\
AES-KW",length:192},"2.16.840.1.101.3.4.1.45":{name:"AES-KW",length:256},"1.2.84\
0.113549.2.7":{name:"HMAC",hash:{name:"SHA-1"}},"1.2.840.113549.2.9":{name:"HMAC",
hash:{name:"SHA-256"}},"1.2.840.113549.2.10":{name:"HMAC",hash:{name:"SHA-384"}},
"1.2.840.113549.2.11":{name:"HMAC",hash:{name:"SHA-512"}},"1.2.840.113549.1.9.16\
.3.5":{name:"DH"},"1.3.14.3.2.26":{name:"SHA-1"},"2.16.840.1.101.3.4.2.1":{name:"\
SHA-256"},"2.16.840.1.101.3.4.2.2":{name:"SHA-384"},"2.16.840.1.101.3.4.2.3":{name:"\
SHA-512"},"1.2.840.113549.1.5.12":{name:"PBKDF2"},"1.2.840.10045.3.1.7":{name:"P\
-256"},"1.3.132.0.34":{name:"P-384"},"1.3.132.0.35":{name:"P-521"}}[r];if(e===void 0)
throw new Error(`Unsupported algorithm identifier: ${r}`);return e}o(jo,"Ft");function yi(r,e=[]){
return Object.values(r).forEach(t=>{typeof t=="string"?e=[...e,t]:e=yi(t,e)}),e}
o(yi,"Ot");function Ho(r){return yi(r).join(" / ")}o(Ho,"Pt");var Ko=["digitalSi\
gnature","nonRepudiation","keyEncipherment","dataEncipherment","keyAgreement","k\
eyCertSign","cRLSign","encipherOnly","decipherOnly"],xr=class br{static{o(this,"\
r")}serialNumber;algorithm;issuer;validityPeriod;subject;publicKey;signature;keyUsage;subjectAltNames;extKeyUsage;authorityKeyIdentifier;subjectKeyIdentifier;basicConstraints;signedData;static distinguishedNamesAreEqual(e,t){
return hi(e)===hi(t)}static readableDN(e){return Object.entries(e).map(t=>t.join(
"=")).join(", ")}constructor(e){let t=e instanceof Rt?e:new Rt(e);t.expectUint8(
re,0);let[n]=t.expectASN1Length(0),i=t.offset;t.expectUint8(re,0);let[s]=t.expectASN1Length(
0);t.expectBytes([160,3,2,1,2],0),t.expectUint8(Mt,0);let[a,u]=t.expectASN1Length(
0);this.serialNumber=t.subarray(u()),a(),t.expectUint8(re,0);let[c,l]=t.expectASN1Length(
0);t.expectUint8($e,0),this.algorithm=t.readASN1OID(),l()>0&&(t.expectUint8(yr,0),
t.expectUint8(0,0)),c(),this.issuer=di(t,"issuer"),t.expectUint8(re,0);let[h]=t.
expectASN1Length(0);t.expectUint8(fi,0);let f=t.readASN1UTCTime();t.expectUint8(
fi,0);let p=t.readASN1UTCTime();this.validityPeriod={notBefore:f,notAfter:p},h(),
this.subject=di(t,"subject");let g=t.offset;t.expectUint8(re,0);let[S]=t.expectASN1Length(
0);t.expectUint8(re,0);let[A,b]=t.expectASN1Length(0),T=[];for(;b()>0;){let G=t.
readUint8();if(G===$e){let _=t.readASN1OID();T.push(_)}else G===yr&&t.expectUint8(
0,0)}A(),t.expectUint8(wr,0);let v=t.readASN1BitString();this.publicKey={identifiers:T,
data:v,all:t.data.subarray(g,t.offset)},S(),t.expectUint8(ko,0);let[E]=t.expectASN1Length();
t.expectUint8(re,0);let[M,H]=t.expectASN1Length(0);for(;H()>0;){t.expectUint8(re,
0);let[G,_]=t.expectASN1Length();t.expectUint8($e,0);let P=t.readASN1OID();if(P===
"2.5.29.17"){t.expectUint8(Me,0);let[$]=t.expectASN1Length(0);t.expectUint8(re,0);
let D=$o(t,Qe);this.subjectAltNames=D.filter(N=>N.type===(2|Qe)).map(N=>N.name),
$()}else if(P==="2.5.29.15"){t.expectUint8(pr,0);let $=t.readASN1Boolean();t.expectUint8(
Me,0);let[D]=t.expectASN1Length(0);t.expectUint8(wr,0);let N=t.readASN1BitString(),
j=Qo(N),q=new Set(Ko.filter((X,te)=>j&1<<te));D(),this.keyUsage={critical:$,usages:q}}else if(P===
"2.5.29.37"){this.extKeyUsage={},t.expectUint8(Me,0);let[$]=t.expectASN1Length(0);
t.expectUint8(re,0);let[D,N]=t.expectASN1Length(0);for(;N()>0;){t.expectUint8($e,
0);let j=t.readASN1OID();j==="1.3.6.1.5.5.7.3.1"&&(this.extKeyUsage.serverTls=!0),
j==="1.3.6.1.5.5.7.3.2"&&(this.extKeyUsage.clientTls=!0)}D(),$()}else if(P==="2.\
5.29.35"){t.expectUint8(Me,0);let[$]=t.expectASN1Length(0);t.expectUint8(re,0);let[
D,N]=t.expectASN1Length(0);for(;N()>0;){let j=t.readUint8();if(j===(Qe|0)){let[q,
X]=t.expectASN1Length(0);this.authorityKeyIdentifier=t.readBytes(X()),q()}else if(j===
(Qe|1)){let[q,X]=t.expectASN1Length(0);t.skip(X(),0),q()}else if(j===(Qe|2)){let[
q,X]=t.expectASN1Length(0);t.skip(X(),0),q()}else if(j===(Qe|33)){let[q,X]=t.expectASN1Length(
0);t.skip(X(),0),q()}else throw new Error(`Unexpected data type ${j} in authorit\
yKeyIdentifier certificate extension`)}D(),$()}else if(P==="2.5.29.14"){t.expectUint8(
Me,0);let[$]=t.expectASN1Length(0);t.expectUint8(Me,0);let[D,N]=t.expectASN1Length(
0);this.subjectKeyIdentifier=t.readBytes(N()),D(),$()}else if(P==="2.5.29.19"){let $,
D=t.readUint8();if(D===pr&&($=t.readASN1Boolean(),D=t.readUint8()),D!==Me)throw new Error(
"Unexpected type in certificate basic constraints");let[N]=t.expectASN1Length(0);
t.expectUint8(re,0);let[j,q]=t.expectASN1Length(),X;q()>0&&(t.expectUint8(pr,0),
X=t.readASN1Boolean());let te;if(q()>0){t.expectUint8(Mt,0);let k=t.readASN1Length(
0);if(te=k===1?t.readUint8():k===2?t.readUint16():k===3?t.readUint24():void 0,te===
void 0)throw new Error("Too many bytes in max path length in certificate basicCo\
nstraints")}j(),N(),this.basicConstraints={critical:$,ca:X,pathLength:te}}else t.
skip(_(),0);G()}M(),E(),s(),this.signedData=t.data.subarray(i,t.offset),t.expectUint8(
re,0);let[F,Y]=t.expectASN1Length(0);t.expectUint8($e,0);let O=t.readASN1OID();if(Y()>
0&&(t.expectUint8(yr,0),t.expectUint8(0,0)),F(),O!==this.algorithm)throw new Error(
`Certificate specifies different signature algorithms inside (${this.algorithm})\
 and out (${O})`);t.expectUint8(wr,0),this.signature=t.readASN1BitString(),n()}static fromPEM(e){
let t="[A-Z0-9 ]+",n=new RegExp(`-{5}BEGIN ${t}-{5}([a-zA-Z0-9=+\\/\\n\\r]+)-{5}END\
 ${t}-{5}`,"g"),i=[],s=null;for(;s=n.exec(e);){let a=s[1].replace(/[\r\n]/g,""),
u=Fo(a),c=new this(u);i.push(c)}return i}subjectAltNameMatchingHost(e){let t=/[.][^.]+[.][^.]+$/;
return(this.subjectAltNames??[]).find(n=>{let i=n,s=e;if(t.test(e)&&t.test(i)&&i.
startsWith("*.")&&(i=i.slice(1),s=s.slice(s.indexOf("."))),i===s)return!0})}isValidAtMoment(e=new Date){
return e>=this.validityPeriod.notBefore&&e<=this.validityPeriod.notAfter}description(){
return"subject: "+br.readableDN(this.subject)+(this.subjectAltNames?`
subject alt names: `+this.subjectAltNames.join(", "):"")+(this.subjectKeyIdentifier?
`
subject key id: ${Ce(this.subjectKeyIdentifier," ")}`:"")+`
issuer: `+br.readableDN(this.issuer)+(this.authorityKeyIdentifier?`
authority key id: ${Ce(this.authorityKeyIdentifier," ")}`:"")+`
validity: `+this.validityPeriod.notBefore.toISOString()+" \u2013 "+this.validityPeriod.
notAfter.toISOString()+` (${this.isValidAtMoment()?"currently valid":"not valid"}\
)`+(this.keyUsage?`
key usage (${this.keyUsage.critical?"critical":"non-critical"}): `+[...this.keyUsage.
usages].join(", "):"")+(this.extKeyUsage?`
extended key usage: TLS server \u2014\xA0${this.extKeyUsage.serverTls}, TLS clie\
nt \u2014\xA0${this.extKeyUsage.clientTls}`:"")+(this.basicConstraints?`
basic constraints (${this.basicConstraints.critical?"critical":"non-critical"}):\
 CA \u2014\xA0${this.basicConstraints.ca}, path length \u2014 ${this.basicConstraints.
pathLength}`:"")+`
signature algorithm: `+Ho(jo(this.algorithm))}toJSON(){return{serialNumber:[...this.
serialNumber],algorithm:this.algorithm,issuer:this.issuer,validityPeriod:{notBefore:this.
validityPeriod.notBefore.toISOString(),notAfter:this.validityPeriod.notAfter.toISOString()},
subject:this.subject,publicKey:{identifiers:this.publicKey.identifiers,data:[...this.
publicKey.data],all:[...this.publicKey.all]},signature:[...this.signature],keyUsage:{
critical:this.keyUsage?.critical,usages:[...this.keyUsage?.usages??[]]},subjectAltNames:this.
subjectAltNames,extKeyUsage:this.extKeyUsage,authorityKeyIdentifier:this.authorityKeyIdentifier&&
[...this.authorityKeyIdentifier],subjectKeyIdentifier:this.subjectKeyIdentifier&&
[...this.subjectKeyIdentifier],basicConstraints:this.basicConstraints,signedData:[
...this.signedData]}}},wi=class extends xr{static{o(this,"st")}};async function mi(r,e,t,n,i){
r.expectUint8(re,0);let[s]=r.expectASN1Length(0);r.expectUint8(Mt,0);let[a,u]=r.
expectASN1Length(0),c=r.readBytes(u());a(),r.expectUint8(Mt,0);let[l,h]=r.expectASN1Length(
0),f=r.readBytes(h());l(),s();let p=o((b,T)=>b.length>T?b.subarray(b.length-T):b.
length<T?ne(new Uint8Array(T-b.length),b):b,"m"),g=n==="P-256"?32:48,S=ne(p(c,g),
p(f,g)),A=await R.importKey("spki",e,{name:"ECDSA",namedCurve:n},!1,["verify"]);
if(await R.verify({name:"ECDSA",hash:i},A,S,t)!==!0)throw new Error("ECDSA-SECP2\
56R1-SHA256 certificate verify failed")}o(mi,"pt");async function Wo(r,e,t,n=!0,i=!0){
for(let u of e);let s=e[0];if(s.subjectAltNameMatchingHost(r)===void 0)throw new Error(
`No matching subjectAltName for ${r}`);if(!s.isValidAtMoment())throw new Error("\
End-user certificate is not valid now");if(n&&!s.extKeyUsage?.serverTls)throw new Error(
"End-user certificate has no TLS server extKeyUsage");let a=!1;for(let u of t);for(let u=0,
c=e.length;u<c;u++){let l=e[u],h=l.authorityKeyIdentifier,f;if(h===void 0?f=t.find(
S=>xr.distinguishedNamesAreEqual(S.subject,l.issuer)):f=t.find(S=>S.subjectKeyIdentifier!==
void 0&&at(S.subjectKeyIdentifier,h)),f===void 0&&(f=e[u+1]),f===void 0)throw new Error(
"Ran out of certificates before reaching trusted root");let p=f instanceof wi;if(f.
isValidAtMoment()!==!0)throw new Error("Signing certificate is not valid now");if(i&&
f.keyUsage?.usages.has("digitalSignature")!==!0)throw new Error("Signing certifi\
cate keyUsage does not include digital signatures");if(f.basicConstraints?.ca!==
!0)throw new Error("Signing certificate basicConstraints do not indicate a CA ce\
rtificate");let{pathLength:g}=f.basicConstraints;if(g!==void 0&&g<u)throw new Error(
"Exceeded certificate pathLength");if(l.algorithm==="1.2.840.10045.4.3.2"||l.algorithm===
"1.2.840.10045.4.3.3"){let S=l.algorithm==="1.2.840.10045.4.3.2"?"SHA-256":"SHA-\
384",A=f.publicKey.identifiers,b=A.includes("1.2.840.10045.3.1.7")?"P-256":A.includes(
"1.3.132.0.34")?"P-384":void 0;if(b===void 0)throw new Error("Unsupported signin\
g key curve");let T=new Rt(l.signature);await mi(T,f.publicKey.all,l.signedData,
b,S)}else if(l.algorithm==="1.2.840.113549.1.1.11"||l.algorithm==="1.2.840.11354\
9.1.1.12"){let S=l.algorithm==="1.2.840.113549.1.1.11"?"SHA-256":"SHA-384",A=await R.
importKey("spki",f.publicKey.all,{name:"RSASSA-PKCS1-v1_5",hash:S},!1,["verify"]);
if(await R.verify({name:"RSASSA-PKCS1-v1_5"},A,l.signature,l.signedData)!==!0)throw new Error(
"RSASSA_PKCS1-v1_5-SHA256 certificate verify failed")}else throw new Error("Unsu\
pported signing algorithm");if(p){a=!0;break}}return a}o(Wo,"jt");var Go=new TextEncoder;
async function Vo(r,e,t,n,i,s=!0,a=!0){let u=new Rt(await e());u.expectUint8(8,0);
let[c]=u.expectLengthUint24(),[l,h]=u.expectLengthUint16(0);for(;h()>0;){let k=u.
readUint16(0);if(k===0)u.expectUint16(0,0);else if(k===10){let[he,Ee]=u.expectLengthUint16(
"groups data");u.skip(Ee(),0),he()}else throw new Error(`Unsupported server encr\
ypted extension type 0x${Ce([k]).padStart(4,"0")}`)}l(),c(),u.remaining()===0&&u.
extend(await e());let f=!1,p=u.readUint8();if(p===13){f=!0;let[k]=u.expectLengthUint24(
"certificate request data");u.expectUint8(0,0);let[he,Ee]=u.expectLengthUint16("\
certificate request extensions");u.skip(Ee(),0),he(),k(),u.remaining()===0&&u.extend(
await e()),p=u.readUint8()}if(p!==11)throw new Error(`Unexpected handshake messa\
ge type 0x${Ce([p])}`);let[g]=u.expectLengthUint24(0);u.expectUint8(0,0);let[S,A]=u.
expectLengthUint24(0),b=[];for(;A()>0;){let[k]=u.expectLengthUint24(0),he=new xr(
u);b.push(he),k();let[Ee,De]=u.expectLengthUint16(),Dn=u.subarray(De());Ee()}if(S(),
g(),b.length===0)throw new Error("No certificates supplied");let T=b[0],v=u.data.
subarray(0,u.offset),E=ne(n,v),M=await R.digest("SHA-256",E),H=new Uint8Array(M),
F=ne(Go.encode(" ".repeat(64)+"TLS 1.3, server CertificateVerify"),[0],H);u.remaining()===
0&&u.extend(await e()),u.expectUint8(15,0);let[Y]=u.expectLengthUint24(0),O=u.readUint16();
if(O===1027){let[k]=u.expectLengthUint16();await mi(u,T.publicKey.all,F,"P-256",
"SHA-256"),k()}else if(O===2052){let[k,he]=u.expectLengthUint16(),Ee=u.subarray(
he());k();let De=await R.importKey("spki",T.publicKey.all,{name:"RSA-PSS",hash:"\
SHA-256"},!1,["verify"]);if(await R.verify({name:"RSA-PSS",saltLength:32},De,Ee,
F)!==!0)throw new Error("RSA-PSS-RSAE-SHA256 certificate verify failed")}else throw new Error(
`Unsupported certificate verify signature type 0x${Ce([O]).padStart(4,"0")}`);Y();
let G=u.data.subarray(0,u.offset),_=ne(n,G),P=await ie(t,"finished",new Uint8Array(
0),32,256),$=await R.digest("SHA-256",_),D=await R.importKey("raw",P,{name:"HMAC",
hash:{name:"SHA-256"}},!1,["sign"]),N=await R.sign("HMAC",D,$),j=new Uint8Array(
N);u.remaining()===0&&u.extend(await e()),u.expectUint8(20,0);let[q,X]=u.expectLengthUint24(
0),te=u.readBytes(X());if(q(),u.remaining()!==0)throw new Error("Unexpected extr\
a bytes in server handshake");if(at(te,j)!==!0)throw new Error("Invalid server v\
erify hash");if(!await Wo(r,b,i,s,a))throw new Error("Validated certificate chai\
n did not end in a trusted root");return[u.data,f]}o(Vo,"Vt");async function zo(r,e,t,n,{
useSNI:i,requireServerTlsExtKeyUsage:s,requireDigitalSigKeyUsage:a,writePreData:u,
expectPreData:c,commentPreData:l}={}){i??=!0,s??=!0,a??=!0;let h=await R.generateKey(
{name:"ECDH",namedCurve:"P-256"},!0,["deriveKey","deriveBits"]),f=await R.exportKey(
"raw",h.publicKey),p=new Uint8Array(32);x.getRandomValues(p);let g=Lo(r,f,p,i).array(),
S=u?ne(u,g):g;if(n(S),c){let ee=await t(c.length);if(!ee||!at(ee,c))throw new Error(
"Pre data did not match expectation")}let A=await gr(t,22);if(A===void 0)throw new Error(
"Connection closed while awaiting server hello");let b=new Se(A.content),T=To(b,
p),v=await gr(t,20);if(v===void 0)throw new Error("Connection closed awaiting se\
rver cipher change");let E=new Se(v.content),[M]=E.expectLength(1);E.expectUint8(
1,0),M();let H=g.subarray(5),F=A.content,Y=ne(H,F),O=await Ro(T,h.privateKey,Y,256,
16),G=await R.importKey("raw",O.serverHandshakeKey,{name:"AES-GCM"},!1,["decrypt"]),
_=new Bt("decrypt",G,O.serverHandshakeIV),P=await R.importKey("raw",O.clientHandshakeKey,
{name:"AES-GCM"},!1,["encrypt"]),$=new Bt("encrypt",P,O.clientHandshakeIV),D=o(async()=>{
let ee=await Sr(t,_,22);if(ee===void 0)throw new Error("Premature end of encrypt\
ed server handshake");return ee},"C"),[N,j]=await Vo(r,D,O.serverSecret,Y,e,s,a),
q=new Se(6);q.writeUint8(20,0),q.writeUint16(771,0);let X=q.writeLengthUint16();
q.writeUint8(1,0),X();let te=q.array(),k=new Uint8Array(0);if(j){let ee=new Se(8);
ee.writeUint8(11,0);let tt=ee.writeLengthUint24("client certificate data");ee.writeUint8(
0,0),ee.writeUint24(0,0),tt(),k=ee.array()}let he=ne(Y,N,k),Ee=await R.digest("S\
HA-256",he),De=new Uint8Array(Ee),Dn=await ie(O.clientSecret,"finished",new Uint8Array(
0),32,256),Ra=await R.importKey("raw",Dn,{name:"HMAC",hash:{name:"SHA-256"}},!1,
["sign"]),Ma=await R.sign("HMAC",Ra,De),Fa=new Uint8Array(Ma),Ct=new Se(36);Ct.writeUint8(
20,0);let Da=Ct.writeLengthUint24(0);Ct.writeBytes(Fa),Da();let Na=Ct.array(),Nn=await ci(
ne(k,Na),$,22),qn=De;if(k.length>0){let ee=he.subarray(0,he.length-k.length),tt=await R.
digest("SHA-256",ee);qn=new Uint8Array(tt)}let _t=await Mo(O.handshakeSecret,qn,
256,16),qa=await R.importKey("raw",_t.clientApplicationKey,{name:"AES-GCM"},!0,[
"encrypt"]),ka=new Bt("encrypt",qa,_t.clientApplicationIV),Oa=await R.importKey(
"raw",_t.serverApplicationKey,{name:"AES-GCM"},!0,["decrypt"]),Qa=new Bt("decryp\
t",Oa,_t.serverApplicationIV),Ut=!1;return[()=>{if(!Ut){let ee=ne(te,...Nn);n(ee),
Ut=!0}return Sr(t,Qa)},async ee=>{let tt=Ut;Ut=!0;let kn=await ci(ee,ka,23),$a=tt?
ne(...kn):ne(te,...Nn,...kn);n($a)}]}o(zo,"he");var gi=class{static{o(this,"xt")}queue;outstandingRequest;constructor(){
this.queue=[]}enqueue(r){this.queue.push(r),this.dequeue()}dequeue(){if(this.outstandingRequest===
void 0)return;let{resolve:r,bytes:e}=this.outstandingRequest,t=this.bytesInQueue();
if(t<e&&this.socketIsNotClosed())return;if(e=Math.min(e,t),e===0)return r(void 0);
this.outstandingRequest=void 0;let n=this.queue[0],i=n.length;if(i===e)return this.
queue.shift(),r(n);if(i>e)return this.queue[0]=n.subarray(e),r(n.subarray(0,e));
{let s=new Uint8Array(e),a=e,u=0;for(;a>0;){let c=this.queue[0],l=c.length;l<=a?
(this.queue.shift(),s.set(c,u),u+=l,a-=l):(this.queue[0]=c.subarray(a),s.set(c.subarray(
0,a),u),a-=a,u+=a)}return r(s)}}bytesInQueue(){return this.queue.reduce((r,e)=>r+
e.length,0)}async read(r){if(this.outstandingRequest!==void 0)throw new Error("C\
an\u2019t read while already awaiting read");return new Promise(e=>{this.outstandingRequest=
{resolve:e,bytes:r},this.dequeue()})}},Yo=class extends gi{static{o(this,"vt")}constructor(r){
super(),this.socket=r,r.addEventListener("message",e=>this.enqueue(new Uint8Array(
e.data))),r.addEventListener("close",()=>this.dequeue())}socketIsNotClosed(){let{
socket:r}=this,{readyState:e}=r;return e<=1}},Jo=class extends gi{static{o(this,
"Lt")}constructor(r){super(),this.socket=r,r.on("data",e=>this.enqueue(new Uint8Array(
e))),r.on("close",()=>this.dequeue())}socketIsNotClosed(){let{socket:r}=this,{readyState:e}=r;
return e==="opening"||e==="open"}};var Si=`-----BEGIN CERTIFICATE-----
MIIFazCCA1OgAwIBAgIRAIIQz7DSQONZRGPgu2OCiwAwDQYJKoZIhvcNAQELBQAw
TzELMAkGA1UEBhMCVVMxKTAnBgNVBAoTIEludGVybmV0IFNlY3VyaXR5IFJlc2Vh
cmNoIEdyb3VwMRUwEwYDVQQDEwxJU1JHIFJvb3QgWDEwHhcNMTUwNjA0MTEwNDM4
WhcNMzUwNjA0MTEwNDM4WjBPMQswCQYDVQQGEwJVUzEpMCcGA1UEChMgSW50ZXJu
ZXQgU2VjdXJpdHkgUmVzZWFyY2ggR3JvdXAxFTATBgNVBAMTDElTUkcgUm9vdCBY
MTCCAiIwDQYJKoZIhvcNAQEBBQADggIPADCCAgoCggIBAK3oJHP0FDfzm54rVygc
h77ct984kIxuPOZXoHj3dcKi/vVqbvYATyjb3miGbESTtrFj/RQSa78f0uoxmyF+
0TM8ukj13Xnfs7j/EvEhmkvBioZxaUpmZmyPfjxwv60pIgbz5MDmgK7iS4+3mX6U
A5/TR5d8mUgjU+g4rk8Kb4Mu0UlXjIB0ttov0DiNewNwIRt18jA8+o+u3dpjq+sW
T8KOEUt+zwvo/7V3LvSye0rgTBIlDHCNAymg4VMk7BPZ7hm/ELNKjD+Jo2FR3qyH
B5T0Y3HsLuJvW5iB4YlcNHlsdu87kGJ55tukmi8mxdAQ4Q7e2RCOFvu396j3x+UC
B5iPNgiV5+I3lg02dZ77DnKxHZu8A/lJBdiB3QW0KtZB6awBdpUKD9jf1b0SHzUv
KBds0pjBqAlkd25HN7rOrFleaJ1/ctaJxQZBKT5ZPt0m9STJEadao0xAH0ahmbWn
OlFuhjuefXKnEgV4We0+UXgVCwOPjdAvBbI+e0ocS3MFEvzG6uBQE3xDk3SzynTn
jh8BCNAw1FtxNrQHusEwMFxIt4I7mKZ9YIqioymCzLq9gwQbooMDQaHWBfEbwrbw
qHyGO0aoSCqI3Haadr8faqU9GY/rOPNk3sgrDQoo//fb4hVC1CLQJ13hef4Y53CI
rU7m2Ys6xt0nUW7/vGT1M0NPAgMBAAGjQjBAMA4GA1UdDwEB/wQEAwIBBjAPBgNV
HRMBAf8EBTADAQH/MB0GA1UdDgQWBBR5tFnme7bl5AFzgAiIyBpY9umbbjANBgkq
hkiG9w0BAQsFAAOCAgEAVR9YqbyyqFDQDLHYGmkgJykIrGF1XIpu+ILlaS/V9lZL
ubhzEFnTIZd+50xx+7LSYK05qAvqFyFWhfFQDlnrzuBZ6brJFe+GnY+EgPbk6ZGQ
3BebYhtF8GaV0nxvwuo77x/Py9auJ/GpsMiu/X1+mvoiBOv/2X/qkSsisRcOj/KK
NFtY2PwByVS5uCbMiogziUwthDyC3+6WVwW6LLv3xLfHTjuCvjHIInNzktHCgKQ5
ORAzI4JMPJ+GslWYHb4phowim57iaztXOoJwTdwJx4nLCgdNbOhdjsnvzqvHu7Ur
TkXWStAmzOVyyghqpZXjFaH3pO3JLF+l+/+sKAIuvtd7u+Nxe5AW0wdeRlN8NwdC
jNPElpzVmbUq4JUagEiuTDkHzsxHpFKVK7q4+63SM1N95R1NbdWhscdCb+ZAJzVc
oyi3B43njTOQ5yOf+1CceWxG1bQVs5ZufpsMljq4Ui0/1lvh+wjChP4kqKOJ2qxq
4RgqsahDYVvTH9w7jXbyLeiNdd8XM2w9U/t7y0Ff/9yi0GE44Za4rF2LN9d11TPA
mRGunUHBcnWEvgJBQl9nJEiU0Zsnvgc/ubhPgXRR4Xq37Z0j4r7g1SgEEzwxA57d
emyPxgcYxn/eR44/KJ4EBs+lVDR3veyJm+kXQ99b21/+jh5Xos1AnX5iItreGCc=
-----END CERTIFICATE-----
`;y();var Xo=Object.getOwnPropertyNames,eu=Object.getOwnPropertySymbols,tu=Object.prototype.
hasOwnProperty;function Ei(r,e){return o(function(n,i,s){return r(n,i,s)&&e(n,i,
s)},"isEqual")}o(Ei,"combineComparators");function Ft(r){return o(function(t,n,i){
if(!t||!n||typeof t!="object"||typeof n!="object")return r(t,n,i);var s=i.cache,
a=s.get(t),u=s.get(n);if(a&&u)return a===n&&u===t;s.set(t,n),s.set(n,t);var c=r(
t,n,i);return s.delete(t),s.delete(n),c},"isCircular")}o(Ft,"createIsCircular");
function bi(r){return Xo(r).concat(eu(r))}o(bi,"getStrictProperties");var Li=Object.
hasOwn||function(r,e){return tu.call(r,e)};function je(r,e){return r||e?r===e:r===
e||r!==r&&e!==e}o(je,"sameValueZeroEqual");var Ti="_owner",xi=Object.getOwnPropertyDescriptor,
Ai=Object.keys;function ru(r,e,t){var n=r.length;if(e.length!==n)return!1;for(;n-- >
0;)if(!t.equals(r[n],e[n],n,n,r,e,t))return!1;return!0}o(ru,"areArraysEqual");function nu(r,e){
return je(r.getTime(),e.getTime())}o(nu,"areDatesEqual");function vi(r,e,t){if(r.
size!==e.size)return!1;for(var n={},i=r.entries(),s=0,a,u;(a=i.next())&&!a.done;){
for(var c=e.entries(),l=!1,h=0;(u=c.next())&&!u.done;){var f=a.value,p=f[0],g=f[1],
S=u.value,A=S[0],b=S[1];!l&&!n[h]&&(l=t.equals(p,A,s,h,r,e,t)&&t.equals(g,b,p,A,
r,e,t))&&(n[h]=!0),h++}if(!l)return!1;s++}return!0}o(vi,"areMapsEqual");function iu(r,e,t){
var n=Ai(r),i=n.length;if(Ai(e).length!==i)return!1;for(var s;i-- >0;)if(s=n[i],
s===Ti&&(r.$$typeof||e.$$typeof)&&r.$$typeof!==e.$$typeof||!Li(e,s)||!t.equals(r[s],
e[s],s,s,r,e,t))return!1;return!0}o(iu,"areObjectsEqual");function ot(r,e,t){var n=bi(
r),i=n.length;if(bi(e).length!==i)return!1;for(var s,a,u;i-- >0;)if(s=n[i],s===Ti&&
(r.$$typeof||e.$$typeof)&&r.$$typeof!==e.$$typeof||!Li(e,s)||!t.equals(r[s],e[s],
s,s,r,e,t)||(a=xi(r,s),u=xi(e,s),(a||u)&&(!a||!u||a.configurable!==u.configurable||
a.enumerable!==u.enumerable||a.writable!==u.writable)))return!1;return!0}o(ot,"a\
reObjectsEqualStrict");function su(r,e){return je(r.valueOf(),e.valueOf())}o(su,
"arePrimitiveWrappersEqual");function au(r,e){return r.source===e.source&&r.flags===
e.flags}o(au,"areRegExpsEqual");function Ci(r,e,t){if(r.size!==e.size)return!1;for(var n={},
i=r.values(),s,a;(s=i.next())&&!s.done;){for(var u=e.values(),c=!1,l=0;(a=u.next())&&
!a.done;)!c&&!n[l]&&(c=t.equals(s.value,a.value,s.value,a.value,r,e,t))&&(n[l]=!0),
l++;if(!c)return!1}return!0}o(Ci,"areSetsEqual");function ou(r,e){var t=r.length;
if(e.length!==t)return!1;for(;t-- >0;)if(r[t]!==e[t])return!1;return!0}o(ou,"are\
TypedArraysEqual");var uu="[object Arguments]",cu="[object Boolean]",lu="[object\
 Date]",hu="[object Map]",fu="[object Number]",du="[object Object]",pu="[object \
RegExp]",yu="[object Set]",wu="[object String]",mu=Array.isArray,_i=typeof ArrayBuffer==
"function"&&ArrayBuffer.isView?ArrayBuffer.isView:null,Ui=Object.assign,gu=Object.
prototype.toString.call.bind(Object.prototype.toString);function Su(r){var e=r.areArraysEqual,
t=r.areDatesEqual,n=r.areMapsEqual,i=r.areObjectsEqual,s=r.arePrimitiveWrappersEqual,
a=r.areRegExpsEqual,u=r.areSetsEqual,c=r.areTypedArraysEqual;return o(function(h,f,p){
if(h===f)return!0;if(h==null||f==null||typeof h!="object"||typeof f!="object")return h!==
h&&f!==f;var g=h.constructor;if(g!==f.constructor)return!1;if(g===Object)return i(
h,f,p);if(mu(h))return e(h,f,p);if(_i!=null&&_i(h))return c(h,f,p);if(g===Date)return t(
h,f,p);if(g===RegExp)return a(h,f,p);if(g===Map)return n(h,f,p);if(g===Set)return u(
h,f,p);var S=gu(h);return S===lu?t(h,f,p):S===pu?a(h,f,p):S===hu?n(h,f,p):S===yu?
u(h,f,p):S===du?typeof h.then!="function"&&typeof f.then!="function"&&i(h,f,p):S===
uu?i(h,f,p):S===cu||S===fu||S===wu?s(h,f,p):!1},"comparator")}o(Su,"createEquali\
tyComparator");function Eu(r){var e=r.circular,t=r.createCustomConfig,n=r.strict,
i={areArraysEqual:n?ot:ru,areDatesEqual:nu,areMapsEqual:n?Ei(vi,ot):vi,areObjectsEqual:n?
ot:iu,arePrimitiveWrappersEqual:su,areRegExpsEqual:au,areSetsEqual:n?Ei(Ci,ot):Ci,
areTypedArraysEqual:n?ot:ou};if(t&&(i=Ui({},i,t(i))),e){var s=Ft(i.areArraysEqual),
a=Ft(i.areMapsEqual),u=Ft(i.areObjectsEqual),c=Ft(i.areSetsEqual);i=Ui({},i,{areArraysEqual:s,
areMapsEqual:a,areObjectsEqual:u,areSetsEqual:c})}return i}o(Eu,"createEqualityC\
omparatorConfig");function bu(r){return function(e,t,n,i,s,a,u){return r(e,t,u)}}
o(bu,"createInternalEqualityComparator");function xu(r){var e=r.circular,t=r.comparator,
n=r.createState,i=r.equals,s=r.strict;if(n)return o(function(c,l){var h=n(),f=h.
cache,p=f===void 0?e?new WeakMap:void 0:f,g=h.meta;return t(c,l,{cache:p,equals:i,
meta:g,strict:s})},"isEqual");if(e)return o(function(c,l){return t(c,l,{cache:new WeakMap,
equals:i,meta:void 0,strict:s})},"isEqual");var a={cache:void 0,equals:i,meta:void 0,
strict:s};return o(function(c,l){return t(c,l,a)},"isEqual")}o(xu,"createIsEqual");
var vr=_e(),zh=_e({strict:!0}),Yh=_e({circular:!0}),Jh=_e({circular:!0,strict:!0}),
Zh=_e({createInternalComparator:function(){return je}}),Xh=_e({strict:!0,createInternalComparator:function(){
return je}}),ef=_e({circular:!0,createInternalComparator:function(){return je}}),
tf=_e({circular:!0,createInternalComparator:function(){return je},strict:!0});function _e(r){
r===void 0&&(r={});var e=r.circular,t=e===void 0?!1:e,n=r.createInternalComparator,
i=r.createState,s=r.strict,a=s===void 0?!1:s,u=Eu(r),c=Su(u),l=n?n(c):bu(c);return xu(
{circular:t,comparator:c,createState:i,equals:l,strict:a})}o(_e,"createCustomEqu\
al");y();y();_r();qt();var xs=nt(mt());var gt=class extends Error{static{o(this,"NeonDbError")}name="NeonDbError";code=null;sourceError};
function St(r,{arrayMode:e,fullResults:t,fetchOptions:n,queryCallback:i,resultCallback:s}={}){
if(!r)throw new Error("No database connection string was provided to `neon()`. P\
erhaps an environment variable has not been set?");let a;try{a=Cr(r)}catch{throw new Error(
"Database connection string provided to `neon()` is not a valid URL. Connection \
string: "+String(r))}let{protocol:u,username:c,password:l,hostname:h,port:f,pathname:p}=a;
if(u!=="postgres:"&&u!=="postgresql:"||!c||!l||!h||!p)throw new Error("Database \
connection string format for `neon()` should be: postgresql://user:password@host\
.tld/dbname?option=value");return async function(g,...S){let A=e??!1,b=t??!1,T=n??
{},v;if(typeof g=="string"){v=g;let _=S[1];_!==void 0&&(_.arrayMode!==void 0&&(A=
_.arrayMode),_.fullResults!==void 0&&(b=_.fullResults),_.fetchOptions!==void 0&&
(T={...T,..._.fetchOptions})),S=S[0]??[]}else{v="";for(let _=0;_<g.length;_++)v+=
g[_],_<S.length&&(v+="$"+(_+1))}S=S.map(_=>(0,xs.prepareValue)(_));let{fetchEndpoint:E,
fetchConnectionCache:M,fetchFunction:H}=de,F=typeof E=="function"?E(h,f):E,Y=M===
!0?{"Neon-Pool-Opt-In":"true"}:{},O={query:v,params:S};i&&i(O);let G;try{G=await(H??
fetch)(F,{method:"POST",body:JSON.stringify(O),headers:{"Neon-Connection-String":r,
"Neon-Raw-Text-Output":"true","Neon-Array-Mode":"true",...Y},...T})}catch(_){let P=new gt(
`Error connecting to database: ${_.message}`);throw P.sourceError=_,P}if(G.ok){let _=await G.
json(),P=_.fields.map(N=>N.name),$=_.fields.map(N=>Le.types.getTypeParser(N.dataTypeID)),
D=A===!0?_.rows.map(N=>N.map((j,q)=>j===null?null:$[q](j))):_.rows.map(N=>Object.
fromEntries(N.map((j,q)=>[P[q],j===null?null:$[q](j)])));return s&&s(O,_,D,{arrayMode:A,
fullResults:b}),b?(_.viaNeonFetch=!0,_.rowAsArray=A,_.rows=D,_):D}else{let{status:_}=G;
if(_===400){let{message:P,code:$}=await G.json(),D=new gt(P);throw D.code=$,D}else{
let P=await G.text();throw new gt(`Database error (HTTP status ${_}): ${P}`)}}}}
o(St,"neon");var er=nt(Xt());qt();var Pa=nt(Wt()),Le=nt(Xt());var Ae=class extends er.Client{constructor(t){super(t);this.config=t}static{o(this,
"NeonClient")}get neonConfig(){return this.connection.stream}connect(t){let{neonConfig:n}=this;
n.forceDisablePgSSL&&(this.ssl=this.connection.ssl=!1),this.ssl&&n.useSecureWebSocket&&
console.warn("SSL is enabled for both Postgres (e.g. ?sslmode=require in the con\
nection string + forceDisablePgSSL = false) and the WebSocket tunnel (useSecureW\
ebSocket = true). Double encryption will increase latency and CPU usage. It may \
be appropriate to disable SSL in the Postgres connection parameters or set force\
DisablePgSSL = true.");let i=this.config?.host!==void 0||this.config?.connectionString!==
void 0||m.env.PGHOST!==void 0,s=m.env.USER??m.env.USERNAME;if(!i&&this.host==="l\
ocalhost"&&this.user===s&&this.database===s&&this.password===null)throw new Error(
`No database host or connection string was set, and key parameters have default \
values (host: localhost, user: ${s}, db: ${s}, password: null). Is an environmen\
t variable missing? Alternatively, if you intended to connect with these paramet\
ers, please set the host to 'localhost' explicitly.`);let a=super.connect(t),u=n.
pipelineTLS&&this.ssl,c=n.pipelineConnect==="password";if(!u&&!n.pipelineConnect)
return a;let l=this.connection;if(u&&l.on("connect",()=>l.stream.emit("data","S")),
c){l.removeAllListeners("authenticationCleartextPassword"),l.removeAllListeners(
"readyForQuery"),l.once("readyForQuery",()=>l.on("readyForQuery",this._handleReadyForQuery.
bind(this)));let h=this.ssl?"sslconnect":"connect";l.on(h,()=>{this._handleAuthCleartextPassword(),
this._handleReadyForQuery()})}return a}async _handleAuthSASLContinue(t){let n=this.
saslSession,i=this.password,s=t.data;if(n.message!=="SASLInitialResponse"||typeof i!=
"string"||typeof s!="string")throw new Error("SASL: protocol error");let a=Object.
fromEntries(s.split(",").map(te=>{if(!/^.=/.test(te))throw new Error("SASL: Inva\
lid attribute pair entry");let k=te[0],he=te.substring(2);return[k,he]})),u=a.r,
c=a.s,l=a.i;if(!u||!/^[!-+--~]+$/.test(u))throw new Error("SASL: SCRAM-SERVER-FI\
RST-MESSAGE: nonce missing/unprintable");if(!c||!/^(?:[a-zA-Z0-9+/]{4})*(?:[a-zA-Z0-9+/]{2}==|[a-zA-Z0-9+/]{3}=)?$/.
test(c))throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: salt missing/not base\
64");if(!l||!/^[1-9][0-9]*$/.test(l))throw new Error("SASL: SCRAM-SERVER-FIRST-M\
ESSAGE: missing/invalid iteration count");if(!u.startsWith(n.clientNonce))throw new Error(
"SASL: SCRAM-SERVER-FIRST-MESSAGE: server nonce does not start with client nonce");
if(u.length===n.clientNonce.length)throw new Error("SASL: SCRAM-SERVER-FIRST-MES\
SAGE: server nonce is too short");let h=parseInt(l,10),f=w.from(c,"base64"),p=new TextEncoder,
g=p.encode(i),S=await x.subtle.importKey("raw",g,{name:"HMAC",hash:{name:"SHA-25\
6"}},!1,["sign"]),A=new Uint8Array(await x.subtle.sign("HMAC",S,w.concat([f,w.from(
[0,0,0,1])]))),b=A;for(var T=0;T<h-1;T++)A=new Uint8Array(await x.subtle.sign("H\
MAC",S,A)),b=w.from(b.map((te,k)=>b[k]^A[k]));let v=b,E=await x.subtle.importKey(
"raw",v,{name:"HMAC",hash:{name:"SHA-256"}},!1,["sign"]),M=new Uint8Array(await x.
subtle.sign("HMAC",E,p.encode("Client Key"))),H=await x.subtle.digest("SHA-256",
M),F="n=*,r="+n.clientNonce,Y="r="+u+",s="+c+",i="+h,O="c=biws,r="+u,G=F+","+Y+"\
,"+O,_=await x.subtle.importKey("raw",H,{name:"HMAC",hash:{name:"SHA-256"}},!1,[
"sign"]);var P=new Uint8Array(await x.subtle.sign("HMAC",_,p.encode(G))),$=w.from(
M.map((te,k)=>M[k]^P[k])),D=$.toString("base64");let N=await x.subtle.importKey(
"raw",v,{name:"HMAC",hash:{name:"SHA-256"}},!1,["sign"]),j=await x.subtle.sign("\
HMAC",N,p.encode("Server Key")),q=await x.subtle.importKey("raw",j,{name:"HMAC",
hash:{name:"SHA-256"}},!1,["sign"]);var X=w.from(await x.subtle.sign("HMAC",q,p.
encode(G)));n.message="SASLResponse",n.serverSignature=X.toString("base64"),n.response=
O+",p="+D,this.connection.sendSCRAMClientFinalMessage(this.saslSession.response)}};
function Ch(r,e){if(e)return{callback:e,result:void 0};let t,n,i=o(function(a,u){
a?t(a):n(u)},"cb"),s=new r(function(a,u){n=a,t=u});return{callback:i,result:s}}o(
Ch,"promisify");var Fe=class extends er.Pool{static{o(this,"NeonPool")}Client=Ae;hasFetchUnsupportedListeners=!1;on(e,t){
return e!=="error"&&(this.hasFetchUnsupportedListeners=!0),super.on(e,t)}query(e,t,n){
if(!de.poolQueryViaFetch||this.hasFetchUnsupportedListeners||typeof e=="function")
return super.query(e,t,n);typeof t=="function"&&(n=t,t=void 0);let i=Ch(this.Promise,
n);n=i.callback;try{let s=new Pa.default(this.options),a=encodeURIComponent,u=encodeURI,
c=`postgresql://${a(s.user)}:${a(s.password)}@${a(s.host)}/${u(s.database)}`,l=typeof e==
"string"?e:e.text,h=t??e.values??[];St(c,{fullResults:!0,arrayMode:e.rowMode==="\
array"})(l,h).then(p=>n(void 0,p)).catch(p=>n(p))}catch(s){n(s)}return i.result}};y();async function _h(r){let e=Date.now(),t=await r();return[Date.now()-e,t]}o(_h,"t\
imed");async function vt(r,e,t=(n,i)=>{}){let n=[];for(let s=0;s<r;s++){let a=await _h(
e),[u,c]=a;t(u,c),n.push(a)}return[n.reduce((s,[a])=>s+a,0),n]}o(vt,"timedRepeat\
s");async function tr(r,e){let{sql:t,test:n}=e,{rows:i}=await r.query(t);if(!n(i))
throw new Error(`Result fails test
Query: ${t}
Result: ${JSON.stringify(i)}`);return i}o(tr,"runQuery");async function et(r,e,t,n){
await e.connect();let i=await vt(r,()=>tr(e,n));return t.waitUntil(e.end()),i}o(
et,"clientRunQuery");async function rr(r,e,t,n){let i=new Fe({connectionString:e}),
s=await vt(r,()=>tr(i,n));return t.waitUntil(i.end()),s}o(rr,"poolRunQuery");y();var nr=[{sql:"SELECT * FROM employees LIMIT 10",test:r=>r.length>1&&typeof r[0].
first_name=="string"},{sql:"SELECT now()",test:r=>/^2\d\d\d-\d\d-\d\dT\d\d:\d\d:\d\d.\d+Z$/.
test(r[0].now.toISOString())}];async function s0(r,e,t){let n=[];for(let i of nr){let[,[[,s]]]=await rr(1,e.NEON_DB_URL,
t,i);n.push(s)}return new Response(JSON.stringify(n,null,2),{headers:{"Content-T\
ype":"application/json"}})}o(s0,"cf");var Be={waitUntil(r){},passThroughOnException(){}};
async function a0(r,e,t=(...n)=>{}){let n=[1,3],i=9;t(`Warm-up ...

`),await rr(1,r.NEON_DB_URL,Be,nr[0]);let s=0;t(`
===== SQL-over-HTTP tests =====

`);let a=new Set(["command","rowCount","rows","fields"]),u=await new Fe({connectionString:r.
NEON_DB_URL}),c=St(r.NEON_DB_URL,{resultCallback:async(p,g,S,A)=>{let b=await u.
query({text:p.query,values:p.params,...A.arrayMode?{rowMode:"array"}:{}}),T=g.command===
b.command,v=g.rowCount===b.rowCount,E=vr(g.fields.map(F=>F.dataTypeID),b.fields.
map(F=>F.dataTypeID)),M=vr(S,b.rows);t(T&&v&&M&&E?"\u2713":"X",JSON.stringify(p),
`
  -> us:`,JSON.stringify(S),`
  -> pg:`,JSON.stringify(b.rows),`
`)}}),l=new Date;await c`SELECT ${1} AS int_uncast`,await c`SELECT ${1}::int AS int`,
await c`SELECT ${1}::int8 AS int8num`,await c`SELECT ${1}::decimal AS decimalnum`,
await c`SELECT ${"[1,4)"}::int4range AS int4range`,await c`SELECT ${"hello"} AS str`,
await c`SELECT ${["a","b","c"]} AS arrstr_uncast`,await c`SELECT ${[[1,2],[3,4]]}::int[][] AS arrnumnested`,
await c`SELECT ${l}::timestamptz AS timestamptznow`,await c`SELECT ${"16:17:18+0\
1:00"}::timetz AS timetz`,await c`SELECT ${"17:18:19"}::time AS time`,await c`SELECT ${l}::date AS datenow`,
await c`SELECT ${{x:"y"}} AS obj_uncast`,await c`SELECT ${"11:22:33:44:55:66"}::macaddr AS macaddr`,
await c`SELECT ${"\\xDEADBEEF"}::bytea AS bytea`,await c`SELECT ${"(2, 3)"}::point AS point`,
await c`SELECT ${"<(2, 3), 1>"}::circle AS circle`,await c`SELECT ${"10.10.10.0/\
24"}::cidr AS cidr`,await c`SELECT ${!0} AS bool_uncast`,await c`SELECT ${"hello"} || ' ' || ${"\
world"} AS greeting`,await c`SELECT ${[1,2,3]}::int[] AS arrnum`,await c`SELECT ${[
"a","b","c"]}::text[] AS arrstr`,await c`SELECT ${{x:"y"}}::jsonb AS jsonb_obj`,
await c`SELECT ${{x:"y"}}::json AS json_obj`,await c`SELECT ${["11:22:33:44:55:6\
6"]}::macaddr[] AS arrmacaddr`,await c`SELECT ${["10.10.10.0/24"]}::cidr[] AS arrcidr`,
await c`SELECT ${!0}::boolean AS bool`,await c`SELECT ${[l]}::timestamptz[] AS arrtstz`,
await c`SELECT ${["(2, 3)"]}::point[] AS arrpoint`,await c`SELECT ${["<(2, 3), 1\
>"]}::circle[] AS arrcircle`,await c`SELECT ${["\\xDEADBEEF","\\xDEADBEEF"]}::bytea[] AS arrbytea`,
await c`SELECT null AS null`,await c`SELECT ${null} AS null`,await c`SELECT ${"N\
ULL"} AS null_str`,await c`SELECT ${[1,2,3]} AS arrnum_uncast`,await c`SELECT ${[
[1,2],[3,4]]} AS arrnumnested_uncast`,await c`SELECT ${l} AS timenow_uncast`,await c`SELECT ${l}::timestamp AS timestampnow`,
await c("SELECT $1::timestamp AS timestampnow",[l]),await c("SELECT $1 || ' ' ||\
 $2 AS greeting",["hello","world"]),await c("SELECT 123 AS num"),await c("SELECT\
 123 AS num",[],{arrayMode:!0,fullResults:!0}),de.fetchConnectionCache=!0,await c`SELECT ${"\
hello"} AS str`,await c`SELECT ${"world"} AS str`,await c("SELECT 123 AS num");function h(p,g,S=3){
return async function(A,...b){let T="";for(let v=0;v<A.length;v++)T+=A[v],v<b.length&&
(T+="$"+(v+1));for(let v=1;;v++){let E=new AbortController,M=setTimeout(()=>E.abort(
"fetch timed out"),g);try{let{signal:H}=E;return await p(T,b,{fetchOptions:{signal:H}})}catch(H){
if(!(H.sourceError&&H.sourceError instanceof DOMException&&H.sourceError.name===
"AbortError")||v>=S)throw H}finally{clearTimeout(M)}}}}o(h,"sqlWithRetries"),await h(
c,5e3)`SELECT ${"did this time out?"} AS str`,de.fetchFunction=(p,g)=>(console.log(
"custom fetch:",p,g),fetch(p,g)),await c`SELECT ${"customFetch"} AS str`,await new Promise(
p=>setTimeout(p,1e3)),u.end();for(let p of nr){t(`
===== ${p.sql} =====

`);async function g(A,b){let T=String.fromCharCode(s+(s>25?23:65));t(`${T}
`);try{await fetch(`http://localhost:443/${T}`)}catch{}t('<span class="live">Liv\
e:</span>    ');let[,v]=await vt(i,()=>b(A),E=>t(`<span class="live">${E.toFixed()}\
ms</span> `));t(`
Sorted:  `),v.map(([E])=>E).sort((E,M)=>E-M).forEach((E,M)=>{t(M===(i-1)/2?`<spa\
n class="median">${E.toFixed()}ms</span> `:`${E.toFixed()}ms `)}),t(`

`),s+=1}o(g,"section");async function S(A,b){t(`----- ${A} -----

`);for(let T of n)t(`${T} quer${T===1?"y":"ies"} \u2013 `),await g(T,b)}o(S,"sec\
tions"),await S("Neon/wss, no pipelining",async A=>{let b=new Ae(r.NEON_DB_URL);
b.neonConfig.pipelineConnect=!1,await et(A,b,Be,p)}),await S("Neon/wss, pipeline\
d connect (default)",async A=>{let b=new Ae(r.NEON_DB_URL);await et(A,b,Be,p)}),
await S("Neon/wss, pipelined connect, no coalescing",async A=>{let b=new Ae(r.NEON_DB_URL);
b.neonConfig.coalesceWrites=!1,await et(A,b,Be,p)}),await S("Neon/wss, pipelined\
 connect using Pool.query",async A=>{await rr(A,r.NEON_DB_URL,Be,p)}),await S("N\
eon/wss, pipelined connect using Pool.connect",async A=>{let b=new Fe({connectionString:r.
NEON_DB_URL}),T=await b.connect();await vt(A,()=>tr(T,p)),T.release(),Be.waitUntil(
b.end())}),await S("Patched pg/wss, pipelined connect",async A=>{let b=new Ae(r.
MY_DB_URL);b.neonConfig.wsProxy=(T,v)=>`ws.manipulexity.com/v1?address=${T}:${v}`,
b.neonConfig.pipelineConnect="password",await et(A,b,Be,p)}),e&&(de.subtls=Ar,de.
rootCerts=Si,await S("Patched pg/subtls, pipelined TLS + connect",async A=>{let b=new Ae(
r.MY_DB_URL);b.neonConfig.wsProxy=(T,v)=>`ws.manipulexity.com/v1?address=${T}:${v}`,
b.neonConfig.forceDisablePgSSL=b.neonConfig.useSecureWebSocket=!1,b.neonConfig.pipelineTLS=
!0,b.neonConfig.pipelineConnect="password",await et(A,b,Be,p)}))}}o(a0,"latencie\
s");export{s0 as cf,a0 as latencies,de as neonConfig};
/*! Bundled license information:

ieee754/index.js:
  (*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> *)

buffer/index.js:
  (*!
   * The buffer module from node.js, for the browser.
   *
   * @author   Feross Aboukhadijeh <https://feross.org>
   * @license  MIT
   *)
*/
