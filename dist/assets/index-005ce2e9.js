(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const fa="155",bi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Ti={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Su=0,Wa=1,Eu=2,ih=1,wu=2,Ln=3,Qn=0,Be=1,Nn=2,Kn=0,ts=1,Xa=2,qa=3,ja=4,bu=5,ji=100,Tu=101,Au=102,Ya=103,Ka=104,Cu=200,Ru=201,Pu=202,Lu=203,sh=204,rh=205,Iu=206,Du=207,Nu=208,Uu=209,Fu=210,Ou=0,Bu=1,zu=2,Ko=3,ku=4,Vu=5,Hu=6,Gu=7,Br=0,Wu=1,Xu=2,Zn=0,qu=1,ju=2,Yu=3,Ku=4,Zu=5,oh=300,ss=301,rs=302,Pr=303,Zo=304,zr=306,Ns=1e3,He=1001,$o=1002,we=1003,Za=1004,Jr=1005,je=1006,$u=1007,Us=1008,$n=1009,Ju=1010,Qu=1011,pa=1012,ah=1013,qn=1014,Un=1015,Fs=1016,lh=1017,ch=1018,vi=1020,td=1021,Ye=1023,ed=1024,nd=1025,_i=1026,os=1027,id=1028,hh=1029,sd=1030,uh=1031,dh=1033,Qr=33776,to=33777,eo=33778,no=33779,$a=35840,Ja=35841,Qa=35842,tl=35843,rd=36196,el=37492,nl=37496,il=37808,sl=37809,rl=37810,ol=37811,al=37812,ll=37813,cl=37814,hl=37815,ul=37816,dl=37817,fl=37818,pl=37819,ml=37820,gl=37821,io=36492,od=36283,vl=36284,_l=36285,xl=36286,kr=2200,ad=2201,ld=2202,Lr=2300,Ir=2301,so=2302,Ki=2400,Zi=2401,Dr=2402,ma=2500,cd=2501,fh=3e3,xi=3001,hd=3200,ud=3201,Vr=0,dd=1,yi="",zt="srgb",gn="srgb-linear",ph="display-p3",ro=7680,fd=519,pd=512,md=513,gd=514,vd=515,_d=516,xd=517,yd=518,Md=519,yl=35044,Ml="300 es",Jo=1035,Fn=2e3,Nr=2001;class ii{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,t);t.target=null}}}const Te=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Sl=1234567;const As=Math.PI/180,as=180/Math.PI;function On(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Te[r&255]+Te[r>>8&255]+Te[r>>16&255]+Te[r>>24&255]+"-"+Te[t&255]+Te[t>>8&255]+"-"+Te[t>>16&15|64]+Te[t>>24&255]+"-"+Te[e&63|128]+Te[e>>8&255]+"-"+Te[e>>16&255]+Te[e>>24&255]+Te[n&255]+Te[n>>8&255]+Te[n>>16&255]+Te[n>>24&255]).toLowerCase()}function Ee(r,t,e){return Math.max(t,Math.min(e,r))}function ga(r,t){return(r%t+t)%t}function Sd(r,t,e,n,i){return n+(r-t)*(i-n)/(e-t)}function Ed(r,t,e){return r!==t?(e-r)/(t-r):0}function Cs(r,t,e){return(1-e)*r+e*t}function wd(r,t,e,n){return Cs(r,t,1-Math.exp(-e*n))}function bd(r,t=1){return t-Math.abs(ga(r,t*2)-t)}function Td(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*(3-2*r))}function Ad(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*r*(r*(r*6-15)+10))}function Cd(r,t){return r+Math.floor(Math.random()*(t-r+1))}function Rd(r,t){return r+Math.random()*(t-r)}function Pd(r){return r*(.5-Math.random())}function Ld(r){r!==void 0&&(Sl=r);let t=Sl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Id(r){return r*As}function Dd(r){return r*as}function Qo(r){return(r&r-1)===0&&r!==0}function mh(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Ur(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Nd(r,t,e,n,i){const s=Math.cos,o=Math.sin,a=s(e/2),l=o(e/2),c=s((t+n)/2),h=o((t+n)/2),u=s((t-n)/2),d=o((t-n)/2),f=s((n-t)/2),m=o((n-t)/2);switch(i){case"XYX":r.set(a*h,l*u,l*d,a*c);break;case"YZY":r.set(l*d,a*h,l*u,a*c);break;case"ZXZ":r.set(l*u,l*d,a*h,a*c);break;case"XZX":r.set(a*h,l*m,l*f,a*c);break;case"YXY":r.set(l*f,a*h,l*m,a*c);break;case"ZYZ":r.set(l*m,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Yi(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Le(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const on={DEG2RAD:As,RAD2DEG:as,generateUUID:On,clamp:Ee,euclideanModulo:ga,mapLinear:Sd,inverseLerp:Ed,lerp:Cs,damp:wd,pingpong:bd,smoothstep:Td,smootherstep:Ad,randInt:Cd,randFloat:Rd,randFloatSpread:Pd,seededRandom:Ld,degToRad:Id,radToDeg:Dd,isPowerOfTwo:Qo,ceilPowerOfTwo:mh,floorPowerOfTwo:Ur,setQuaternionFromProperEuler:Nd,normalize:Le,denormalize:Yi};class ht{constructor(t=0,e=0){ht.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ee(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*i+t.x,this.y=s*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ht{constructor(t,e,n,i,s,o,a,l,c){Ht.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c)}set(t,e,n,i,s,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],m=n[8],v=i[0],g=i[3],p=i[6],x=i[1],_=i[4],y=i[7],S=i[2],A=i[5],b=i[8];return s[0]=o*v+a*x+l*S,s[3]=o*g+a*_+l*A,s[6]=o*p+a*y+l*b,s[1]=c*v+h*x+u*S,s[4]=c*g+h*_+u*A,s[7]=c*p+h*y+u*b,s[2]=d*v+f*x+m*S,s[5]=d*g+f*_+m*A,s[8]=d*p+f*y+m*b,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*s*h+n*a*l+i*s*c-i*o*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*s,f=c*s-o*l,m=e*u+n*d+i*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/m;return t[0]=u*v,t[1]=(i*c-h*n)*v,t[2]=(a*n-i*o)*v,t[3]=d*v,t[4]=(h*e-i*l)*v,t[5]=(i*s-a*e)*v,t[6]=f*v,t[7]=(n*l-c*e)*v,t[8]=(o*e-n*s)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(oo.makeScale(t,e)),this}rotate(t){return this.premultiply(oo.makeRotation(-t)),this}translate(t,e){return this.premultiply(oo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const oo=new Ht;function gh(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Os(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}const El={};function Rs(r){r in El||(El[r]=!0,console.warn(r))}function es(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function ao(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const Ud=new Ht().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),Fd=new Ht().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function Od(r){return r.convertSRGBToLinear().applyMatrix3(Fd)}function Bd(r){return r.applyMatrix3(Ud).convertLinearToSRGB()}const zd={[gn]:r=>r,[zt]:r=>r.convertSRGBToLinear(),[ph]:Od},kd={[gn]:r=>r,[zt]:r=>r.convertLinearToSRGB(),[ph]:Bd},Je={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(r){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!r},get workingColorSpace(){return gn},set workingColorSpace(r){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(r,t,e){if(this.enabled===!1||t===e||!t||!e)return r;const n=zd[t],i=kd[e];if(n===void 0||i===void 0)throw new Error(`Unsupported color space conversion, "${t}" to "${e}".`);return i(n(r))},fromWorkingColorSpace:function(r,t){return this.convert(r,this.workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this.workingColorSpace)}};let Ai;class vh{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ai===void 0&&(Ai=Os("canvas")),Ai.width=t.width,Ai.height=t.height;const n=Ai.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ai}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Os("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=es(s[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(es(e[n]/255)*255):e[n]=es(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Vd=0;class _h{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Vd++}),this.uuid=On(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(lo(i[o].image)):s.push(lo(i[o]))}else s=lo(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function lo(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?vh.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Hd=0;class be extends ii{constructor(t=be.DEFAULT_IMAGE,e=be.DEFAULT_MAPPING,n=He,i=He,s=je,o=Us,a=Ye,l=$n,c=be.DEFAULT_ANISOTROPY,h=yi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Hd++}),this.uuid=On(),this.name="",this.source=new _h(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ht(0,0),this.repeat=new ht(1,1),this.center=new ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Rs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===xi?zt:yi),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==oh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ns:t.x=t.x-Math.floor(t.x);break;case He:t.x=t.x<0?0:1;break;case $o:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ns:t.y=t.y-Math.floor(t.y);break;case He:t.y=t.y<0?0:1;break;case $o:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Rs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===zt?xi:fh}set encoding(t){Rs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===xi?zt:yi}}be.DEFAULT_IMAGE=null;be.DEFAULT_MAPPING=oh;be.DEFAULT_ANISOTROPY=1;class Jt{constructor(t=0,e=0,n=0,i=1){Jt.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],m=l[9],v=l[2],g=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(m+g)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const _=(c+1)/2,y=(f+1)/2,S=(p+1)/2,A=(h+d)/4,b=(u+v)/4,I=(m+g)/4;return _>y&&_>S?_<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(_),i=A/n,s=b/n):y>S?y<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(y),n=A/i,s=I/i):S<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(S),n=b/s,i=I/s),this.set(n,i,s,e),this}let x=Math.sqrt((g-m)*(g-m)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(x)<.001&&(x=1),this.x=(g-m)/x,this.y=(u-v)/x,this.z=(d-h)/x,this.w=Math.acos((c+f+p-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Gd extends ii{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Jt(0,0,t,e),this.scissorTest=!1,this.viewport=new Jt(0,0,t,e);const i={width:t,height:e,depth:1};n.encoding!==void 0&&(Rs("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===xi?zt:yi),this.texture=new be(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:je,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new _h(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Mi extends Gd{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class xh extends be{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=we,this.minFilter=we,this.wrapR=He,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Wd extends be{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=we,this.minFilter=we,this.wrapR=He,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}let Ne=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const d=s[o+0],f=s[o+1],m=s[o+2],v=s[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=m,t[e+3]=v;return}if(u!==v||l!==d||c!==f||h!==m){let g=1-a;const p=l*d+c*f+h*m+u*v,x=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){const S=Math.sqrt(_),A=Math.atan2(S,p*x);g=Math.sin(g*A)/S,a=Math.sin(a*A)/S}const y=a*x;if(l=l*g+d*y,c=c*g+f*y,h=h*g+m*y,u=u*g+v*y,g===1-a){const S=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=S,c*=S,h*=S,u*=S}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=s[o],d=s[o+1],f=s[o+2],m=s[o+3];return t[e]=a*m+h*u+l*f-c*d,t[e+1]=l*m+h*d+c*u-a*f,t[e+2]=c*m+h*f+a*d-l*u,t[e+3]=h*m-a*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){const n=t._x,i=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(s/2),d=l(n/2),f=l(i/2),m=l(s/2);switch(o){case"XYZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"YXZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"ZXY":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"ZYX":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"YZX":this._x=d*h*u+c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u-d*f*m;break;case"XZY":this._x=d*h*u-c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u+d*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(o-i)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(s+c)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(s-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-i)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ee(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-s*l,this._y=i*h+o*l+s*a-n*c,this._z=s*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*s+e*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(s),n*Math.cos(s),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};class N{constructor(t=0,e=0,n=0){N.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(wl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(wl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=l*e+o*i-a*n,h=l*n+a*e-s*i,u=l*i+s*n-o*e,d=-s*e-o*n-a*i;return this.x=c*l+d*-s+h*-a-u*-o,this.y=h*l+d*-o+u*-s-c*-a,this.z=u*l+d*-a+c*-o-h*-s,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return co.copy(this).projectOnVector(t),this.sub(co)}reflect(t){return this.sub(co.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ee(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const co=new N,wl=new Ne;class si{constructor(t=new N(1/0,1/0,1/0),e=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Mn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Mn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Mn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){if(t.updateWorldMatrix(!1,!1),t.boundingBox!==void 0)t.boundingBox===null&&t.computeBoundingBox(),Ci.copy(t.boundingBox),Ci.applyMatrix4(t.matrixWorld),this.union(Ci);else{const i=t.geometry;if(i!==void 0)if(e&&i.attributes!==void 0&&i.attributes.position!==void 0){const s=i.attributes.position;for(let o=0,a=s.count;o<a;o++)Mn.fromBufferAttribute(s,o).applyMatrix4(t.matrixWorld),this.expandByPoint(Mn)}else i.boundingBox===null&&i.computeBoundingBox(),Ci.copy(i.boundingBox),Ci.applyMatrix4(t.matrixWorld),this.union(Ci)}const n=t.children;for(let i=0,s=n.length;i<s;i++)this.expandByObject(n[i],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Mn),Mn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(gs),Zs.subVectors(this.max,gs),Ri.subVectors(t.a,gs),Pi.subVectors(t.b,gs),Li.subVectors(t.c,gs),zn.subVectors(Pi,Ri),kn.subVectors(Li,Pi),ci.subVectors(Ri,Li);let e=[0,-zn.z,zn.y,0,-kn.z,kn.y,0,-ci.z,ci.y,zn.z,0,-zn.x,kn.z,0,-kn.x,ci.z,0,-ci.x,-zn.y,zn.x,0,-kn.y,kn.x,0,-ci.y,ci.x,0];return!ho(e,Ri,Pi,Li,Zs)||(e=[1,0,0,0,1,0,0,0,1],!ho(e,Ri,Pi,Li,Zs))?!1:($s.crossVectors(zn,kn),e=[$s.x,$s.y,$s.z],ho(e,Ri,Pi,Li,Zs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Mn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Mn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(yn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),yn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),yn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),yn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),yn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),yn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),yn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),yn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(yn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const yn=[new N,new N,new N,new N,new N,new N,new N,new N],Mn=new N,Ci=new si,Ri=new N,Pi=new N,Li=new N,zn=new N,kn=new N,ci=new N,gs=new N,Zs=new N,$s=new N,hi=new N;function ho(r,t,e,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){hi.fromArray(r,s);const a=i.x*Math.abs(hi.x)+i.y*Math.abs(hi.y)+i.z*Math.abs(hi.z),l=t.dot(hi),c=e.dot(hi),h=n.dot(hi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Xd=new si,vs=new N,uo=new N;let cs=class{constructor(t=new N,e=-1){this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Xd.setFromPoints(t).getCenter(n);let i=0;for(let s=0,o=t.length;s<o;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;vs.subVectors(t,this.center);const e=vs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(vs,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(uo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(vs.copy(t.center).add(uo)),this.expandByPoint(vs.copy(t.center).sub(uo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}};const Sn=new N,fo=new N,Js=new N,Vn=new N,po=new N,Qs=new N,mo=new N;let Xs=class{constructor(t=new N,e=new N(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Sn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Sn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Sn.copy(this.origin).addScaledVector(this.direction,e),Sn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){fo.copy(t).add(e).multiplyScalar(.5),Js.copy(e).sub(t).normalize(),Vn.copy(this.origin).sub(fo);const s=t.distanceTo(e)*.5,o=-this.direction.dot(Js),a=Vn.dot(this.direction),l=-Vn.dot(Js),c=Vn.lengthSq(),h=Math.abs(1-o*o);let u,d,f,m;if(h>0)if(u=o*l-a,d=o*a-l,m=s*h,u>=0)if(d>=-m)if(d<=m){const v=1/h;u*=v,d*=v,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-m?(u=Math.max(0,-(-o*s+a)),d=u>0?-s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c):d<=m?(u=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(u=Math.max(0,-(o*s+a)),d=u>0?s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c);else d=o>0?-s:s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(fo).addScaledVector(Js,d),f}intersectSphere(t,e){Sn.subVectors(t.center,this.origin);const n=Sn.dot(this.direction),i=Sn.dot(Sn)-n*n,s=t.radius*t.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,i=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,i=(t.min.x-d.x)*c),h>=0?(s=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(s=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Sn)!==null}intersectTriangle(t,e,n,i,s){po.subVectors(e,t),Qs.subVectors(n,t),mo.crossVectors(po,Qs);let o=this.direction.dot(mo),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Vn.subVectors(this.origin,t);const l=a*this.direction.dot(Qs.crossVectors(Vn,Qs));if(l<0)return null;const c=a*this.direction.dot(po.cross(Vn));if(c<0||l+c>o)return null;const h=-a*Vn.dot(mo);return h<0?null:this.at(h/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};class Pt{constructor(t,e,n,i,s,o,a,l,c,h,u,d,f,m,v,g){Pt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c,h,u,d,f,m,v,g)}set(t,e,n,i,s,o,a,l,c,h,u,d,f,m,v,g){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=m,p[11]=v,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Pt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Ii.setFromMatrixColumn(t,0).length(),s=1/Ii.setFromMatrixColumn(t,1).length(),o=1/Ii.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){const d=o*h,f=o*u,m=a*h,v=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+m*c,e[5]=d-v*c,e[9]=-a*l,e[2]=v-d*c,e[6]=m+f*c,e[10]=o*l}else if(t.order==="YXZ"){const d=l*h,f=l*u,m=c*h,v=c*u;e[0]=d+v*a,e[4]=m*a-f,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-m,e[6]=v+d*a,e[10]=o*l}else if(t.order==="ZXY"){const d=l*h,f=l*u,m=c*h,v=c*u;e[0]=d-v*a,e[4]=-o*u,e[8]=m+f*a,e[1]=f+m*a,e[5]=o*h,e[9]=v-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const d=o*h,f=o*u,m=a*h,v=a*u;e[0]=l*h,e[4]=m*c-f,e[8]=d*c+v,e[1]=l*u,e[5]=v*c+d,e[9]=f*c-m,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const d=o*l,f=o*c,m=a*l,v=a*c;e[0]=l*h,e[4]=v-d*u,e[8]=m*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*u+m,e[10]=d-v*u}else if(t.order==="XZY"){const d=o*l,f=o*c,m=a*l,v=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+v,e[5]=o*h,e[9]=f*u-m,e[2]=m*u-f,e[6]=a*h,e[10]=v*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(qd,t,jd)}lookAt(t,e,n){const i=this.elements;return ke.subVectors(t,e),ke.lengthSq()===0&&(ke.z=1),ke.normalize(),Hn.crossVectors(n,ke),Hn.lengthSq()===0&&(Math.abs(n.z)===1?ke.x+=1e-4:ke.z+=1e-4,ke.normalize(),Hn.crossVectors(n,ke)),Hn.normalize(),tr.crossVectors(ke,Hn),i[0]=Hn.x,i[4]=tr.x,i[8]=ke.x,i[1]=Hn.y,i[5]=tr.y,i[9]=ke.y,i[2]=Hn.z,i[6]=tr.z,i[10]=ke.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],m=n[2],v=n[6],g=n[10],p=n[14],x=n[3],_=n[7],y=n[11],S=n[15],A=i[0],b=i[4],I=i[8],E=i[12],T=i[1],k=i[5],Z=i[9],P=i[13],F=i[2],U=i[6],O=i[10],X=i[14],G=i[3],q=i[7],Q=i[11],z=i[15];return s[0]=o*A+a*T+l*F+c*G,s[4]=o*b+a*k+l*U+c*q,s[8]=o*I+a*Z+l*O+c*Q,s[12]=o*E+a*P+l*X+c*z,s[1]=h*A+u*T+d*F+f*G,s[5]=h*b+u*k+d*U+f*q,s[9]=h*I+u*Z+d*O+f*Q,s[13]=h*E+u*P+d*X+f*z,s[2]=m*A+v*T+g*F+p*G,s[6]=m*b+v*k+g*U+p*q,s[10]=m*I+v*Z+g*O+p*Q,s[14]=m*E+v*P+g*X+p*z,s[3]=x*A+_*T+y*F+S*G,s[7]=x*b+_*k+y*U+S*q,s[11]=x*I+_*Z+y*O+S*Q,s[15]=x*E+_*P+y*X+S*z,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],m=t[3],v=t[7],g=t[11],p=t[15];return m*(+s*l*u-i*c*u-s*a*d+n*c*d+i*a*f-n*l*f)+v*(+e*l*f-e*c*d+s*o*d-i*o*f+i*c*h-s*l*h)+g*(+e*c*u-e*a*f-s*o*u+n*o*f+s*a*h-n*c*h)+p*(-i*a*h-e*l*u+e*a*d+i*o*u-n*o*d+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],m=t[12],v=t[13],g=t[14],p=t[15],x=u*g*c-v*d*c+v*l*f-a*g*f-u*l*p+a*d*p,_=m*d*c-h*g*c-m*l*f+o*g*f+h*l*p-o*d*p,y=h*v*c-m*u*c+m*a*f-o*v*f-h*a*p+o*u*p,S=m*u*l-h*v*l-m*a*d+o*v*d+h*a*g-o*u*g,A=e*x+n*_+i*y+s*S;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/A;return t[0]=x*b,t[1]=(v*d*s-u*g*s-v*i*f+n*g*f+u*i*p-n*d*p)*b,t[2]=(a*g*s-v*l*s+v*i*c-n*g*c-a*i*p+n*l*p)*b,t[3]=(u*l*s-a*d*s-u*i*c+n*d*c+a*i*f-n*l*f)*b,t[4]=_*b,t[5]=(h*g*s-m*d*s+m*i*f-e*g*f-h*i*p+e*d*p)*b,t[6]=(m*l*s-o*g*s-m*i*c+e*g*c+o*i*p-e*l*p)*b,t[7]=(o*d*s-h*l*s+h*i*c-e*d*c-o*i*f+e*l*f)*b,t[8]=y*b,t[9]=(m*u*s-h*v*s-m*n*f+e*v*f+h*n*p-e*u*p)*b,t[10]=(o*v*s-m*a*s+m*n*c-e*v*c-o*n*p+e*a*p)*b,t[11]=(h*a*s-o*u*s-h*n*c+e*u*c+o*n*f-e*a*f)*b,t[12]=S*b,t[13]=(h*v*i-m*u*i+m*n*d-e*v*d-h*n*g+e*u*g)*b,t[14]=(m*a*i-o*v*i-m*n*l+e*v*l+o*n*g-e*a*g)*b,t[15]=(o*u*i-h*a*i+h*n*l-e*u*l-o*n*d+e*a*d)*b,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,c=s*o,h=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,o){return this.set(1,n,s,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,h=o+o,u=a+a,d=s*c,f=s*h,m=s*u,v=o*h,g=o*u,p=a*u,x=l*c,_=l*h,y=l*u,S=n.x,A=n.y,b=n.z;return i[0]=(1-(v+p))*S,i[1]=(f+y)*S,i[2]=(m-_)*S,i[3]=0,i[4]=(f-y)*A,i[5]=(1-(d+p))*A,i[6]=(g+x)*A,i[7]=0,i[8]=(m+_)*b,i[9]=(g-x)*b,i[10]=(1-(d+v))*b,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let s=Ii.set(i[0],i[1],i[2]).length();const o=Ii.set(i[4],i[5],i[6]).length(),a=Ii.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],Qe.copy(this);const c=1/s,h=1/o,u=1/a;return Qe.elements[0]*=c,Qe.elements[1]*=c,Qe.elements[2]*=c,Qe.elements[4]*=h,Qe.elements[5]*=h,Qe.elements[6]*=h,Qe.elements[8]*=u,Qe.elements[9]*=u,Qe.elements[10]*=u,e.setFromRotationMatrix(Qe),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,i,s,o,a=Fn){const l=this.elements,c=2*s/(e-t),h=2*s/(n-i),u=(e+t)/(e-t),d=(n+i)/(n-i);let f,m;if(a===Fn)f=-(o+s)/(o-s),m=-2*o*s/(o-s);else if(a===Nr)f=-o/(o-s),m=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,s,o,a=Fn){const l=this.elements,c=1/(e-t),h=1/(n-i),u=1/(o-s),d=(e+t)*c,f=(n+i)*h;let m,v;if(a===Fn)m=(o+s)*u,v=-2*u;else if(a===Nr)m=s*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=v,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Ii=new N,Qe=new Pt,qd=new N(0,0,0),jd=new N(1,1,1),Hn=new N,tr=new N,ke=new N,bl=new Pt,Tl=new Ne;class $e{constructor(t=0,e=0,n=0,i=$e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(Ee(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ee(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ee(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ee(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ee(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Ee(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return bl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(bl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Tl.setFromEuler(this),this.setFromQuaternion(Tl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}$e.DEFAULT_ORDER="XYZ";class va{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Yd=0;const Al=new N,Di=new Ne,En=new Pt,er=new N,_s=new N,Kd=new N,Zd=new Ne,Cl=new N(1,0,0),Rl=new N(0,1,0),Pl=new N(0,0,1),$d={type:"added"},Ll={type:"removed"};class le extends ii{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Yd++}),this.uuid=On(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=le.DEFAULT_UP.clone();const t=new N,e=new $e,n=new Ne,i=new N(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Pt},normalMatrix:{value:new Ht}}),this.matrix=new Pt,this.matrixWorld=new Pt,this.matrixAutoUpdate=le.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=le.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new va,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Di.setFromAxisAngle(t,e),this.quaternion.multiply(Di),this}rotateOnWorldAxis(t,e){return Di.setFromAxisAngle(t,e),this.quaternion.premultiply(Di),this}rotateX(t){return this.rotateOnAxis(Cl,t)}rotateY(t){return this.rotateOnAxis(Rl,t)}rotateZ(t){return this.rotateOnAxis(Pl,t)}translateOnAxis(t,e){return Al.copy(t).applyQuaternion(this.quaternion),this.position.add(Al.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Cl,t)}translateY(t){return this.translateOnAxis(Rl,t)}translateZ(t){return this.translateOnAxis(Pl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(En.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?er.copy(t):er.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),_s.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?En.lookAt(_s,er,this.up):En.lookAt(er,_s,this.up),this.quaternion.setFromRotationMatrix(En),i&&(En.extractRotation(i.matrixWorld),Di.setFromRotationMatrix(En),this.quaternion.premultiply(Di.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent($d)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Ll)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){for(let t=0;t<this.children.length;t++){const e=this.children[t];e.parent=null,e.dispatchEvent(Ll)}return this.children.length=0,this}attach(t){return this.updateWorldMatrix(!0,!1),En.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),En.multiply(t.parent.matrixWorld)),t.applyMatrix4(En),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e){let n=[];this[t]===e&&n.push(this);for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectsByProperty(t,e);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_s,t,Kd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_s,Zd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++){const s=e[n];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++){const a=i[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(t.shapes,u)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),m=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=i,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}le.DEFAULT_UP=new N(0,1,0);le.DEFAULT_MATRIX_AUTO_UPDATE=!0;le.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const tn=new N,wn=new N,go=new N,bn=new N,Ni=new N,Ui=new N,Il=new N,vo=new N,_o=new N,xo=new N;let nr=!1;class rn{constructor(t=new N,e=new N,n=new N){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),tn.subVectors(t,e),i.cross(tn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){tn.subVectors(i,e),wn.subVectors(n,e),go.subVectors(t,e);const o=tn.dot(tn),a=tn.dot(wn),l=tn.dot(go),c=wn.dot(wn),h=wn.dot(go),u=o*c-a*a;if(u===0)return s.set(-2,-1,-1);const d=1/u,f=(c*l-a*h)*d,m=(o*h-a*l)*d;return s.set(1-f-m,m,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,bn),bn.x>=0&&bn.y>=0&&bn.x+bn.y<=1}static getUV(t,e,n,i,s,o,a,l){return nr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),nr=!0),this.getInterpolation(t,e,n,i,s,o,a,l)}static getInterpolation(t,e,n,i,s,o,a,l){return this.getBarycoord(t,e,n,i,bn),l.setScalar(0),l.addScaledVector(s,bn.x),l.addScaledVector(o,bn.y),l.addScaledVector(a,bn.z),l}static isFrontFacing(t,e,n,i){return tn.subVectors(n,e),wn.subVectors(t,e),tn.cross(wn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return tn.subVectors(this.c,this.b),wn.subVectors(this.a,this.b),tn.cross(wn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return rn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return rn.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,s){return nr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),nr=!0),rn.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}getInterpolation(t,e,n,i,s){return rn.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return rn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return rn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let o,a;Ni.subVectors(i,n),Ui.subVectors(s,n),vo.subVectors(t,n);const l=Ni.dot(vo),c=Ui.dot(vo);if(l<=0&&c<=0)return e.copy(n);_o.subVectors(t,i);const h=Ni.dot(_o),u=Ui.dot(_o);if(h>=0&&u<=h)return e.copy(i);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Ni,o);xo.subVectors(t,s);const f=Ni.dot(xo),m=Ui.dot(xo);if(m>=0&&f<=m)return e.copy(s);const v=f*c-l*m;if(v<=0&&c>=0&&m<=0)return a=c/(c-m),e.copy(n).addScaledVector(Ui,a);const g=h*m-f*u;if(g<=0&&u-h>=0&&f-m>=0)return Il.subVectors(s,i),a=(u-h)/(u-h+(f-m)),e.copy(i).addScaledVector(Il,a);const p=1/(g+v+d);return o=v*p,a=d*p,e.copy(n).addScaledVector(Ni,o).addScaledVector(Ui,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}let Jd=0,ri=class extends ii{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Jd++}),this.uuid=On(),this.name="",this.type="Material",this.blending=ts,this.side=Qn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=sh,this.blendDst=rh,this.blendEquation=ji,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Ko,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=fd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ro,this.stencilZFail=ro,this.stencilZPass=ro,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ts&&(n.blending=this.blending),this.side!==Qn&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=this.alphaHash),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(e){const s=i(t.textures),o=i(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};const yh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},en={h:0,s:0,l:0},ir={h:0,s:0,l:0};function yo(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}class Ut{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=zt){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Je.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Je.workingColorSpace){return this.r=t,this.g=e,this.b=n,Je.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Je.workingColorSpace){if(t=ga(t,1),e=Ee(e,0,1),n=Ee(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=yo(o,s,t+1/3),this.g=yo(o,s,t),this.b=yo(o,s,t-1/3)}return Je.toWorkingColorSpace(this,i),this}setStyle(t,e=zt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=zt){const n=yh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=es(t.r),this.g=es(t.g),this.b=es(t.b),this}copyLinearToSRGB(t){return this.r=ao(t.r),this.g=ao(t.g),this.b=ao(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=zt){return Je.fromWorkingColorSpace(Ae.copy(this),t),Math.round(Ee(Ae.r*255,0,255))*65536+Math.round(Ee(Ae.g*255,0,255))*256+Math.round(Ee(Ae.b*255,0,255))}getHexString(t=zt){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Je.workingColorSpace){Je.fromWorkingColorSpace(Ae.copy(this),e);const n=Ae.r,i=Ae.g,s=Ae.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-s)/u+(i<s?6:0);break;case i:l=(s-n)/u+2;break;case s:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Je.workingColorSpace){return Je.fromWorkingColorSpace(Ae.copy(this),e),t.r=Ae.r,t.g=Ae.g,t.b=Ae.b,t}getStyle(t=zt){Je.fromWorkingColorSpace(Ae.copy(this),t);const e=Ae.r,n=Ae.g,i=Ae.b;return t!==zt?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(en),en.h+=t,en.s+=e,en.l+=n,this.setHSL(en.h,en.s,en.l),this}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(en),t.getHSL(ir);const n=Cs(en.h,ir.h,e),i=Cs(en.s,ir.s,e),s=Cs(en.l,ir.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ae=new Ut;Ut.NAMES=yh;class _a extends ri{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Br,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const pe=new N,sr=new ht;class mn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=yl,this.updateRange={offset:0,count:-1},this.gpuType=Un,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)sr.fromBufferAttribute(this,e),sr.applyMatrix3(t),this.setXY(e,sr.x,sr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix3(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix4(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyNormalMatrix(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.transformDirection(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Yi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Le(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Yi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Yi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Yi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Yi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Le(e,this.array),n=Le(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Le(e,this.array),n=Le(n,this.array),i=Le(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=Le(e,this.array),n=Le(n,this.array),i=Le(i,this.array),s=Le(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==yl&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}}class xa extends mn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Mh extends mn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class _e extends mn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Qd=0;const qe=new Pt,Mo=new le,Fi=new N,Ve=new si,xs=new si,Me=new N;class Ge extends ii{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Qd++}),this.uuid=On(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(gh(t)?Mh:xa)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ht().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return qe.makeRotationFromQuaternion(t),this.applyMatrix4(qe),this}rotateX(t){return qe.makeRotationX(t),this.applyMatrix4(qe),this}rotateY(t){return qe.makeRotationY(t),this.applyMatrix4(qe),this}rotateZ(t){return qe.makeRotationZ(t),this.applyMatrix4(qe),this}translate(t,e,n){return qe.makeTranslation(t,e,n),this.applyMatrix4(qe),this}scale(t,e,n){return qe.makeScale(t,e,n),this.applyMatrix4(qe),this}lookAt(t){return Mo.lookAt(t),Mo.updateMatrix(),this.applyMatrix4(Mo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fi).negate(),this.translate(Fi.x,Fi.y,Fi.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new _e(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new si);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];Ve.setFromBufferAttribute(s),this.morphTargetsRelative?(Me.addVectors(this.boundingBox.min,Ve.min),this.boundingBox.expandByPoint(Me),Me.addVectors(this.boundingBox.max,Ve.max),this.boundingBox.expandByPoint(Me)):(this.boundingBox.expandByPoint(Ve.min),this.boundingBox.expandByPoint(Ve.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new cs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new N,1/0);return}if(t){const n=this.boundingSphere.center;if(Ve.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];xs.setFromBufferAttribute(a),this.morphTargetsRelative?(Me.addVectors(Ve.min,xs.min),Ve.expandByPoint(Me),Me.addVectors(Ve.max,xs.max),Ve.expandByPoint(Me)):(Ve.expandByPoint(xs.min),Ve.expandByPoint(xs.max))}Ve.getCenter(n);let i=0;for(let s=0,o=t.count;s<o;s++)Me.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(Me));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Me.fromBufferAttribute(a,c),l&&(Fi.fromBufferAttribute(t,c),Me.add(Fi)),i=Math.max(i,n.distanceToSquared(Me))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,i=e.position.array,s=e.normal.array,o=e.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new mn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let T=0;T<a;T++)c[T]=new N,h[T]=new N;const u=new N,d=new N,f=new N,m=new ht,v=new ht,g=new ht,p=new N,x=new N;function _(T,k,Z){u.fromArray(i,T*3),d.fromArray(i,k*3),f.fromArray(i,Z*3),m.fromArray(o,T*2),v.fromArray(o,k*2),g.fromArray(o,Z*2),d.sub(u),f.sub(u),v.sub(m),g.sub(m);const P=1/(v.x*g.y-g.x*v.y);isFinite(P)&&(p.copy(d).multiplyScalar(g.y).addScaledVector(f,-v.y).multiplyScalar(P),x.copy(f).multiplyScalar(v.x).addScaledVector(d,-g.x).multiplyScalar(P),c[T].add(p),c[k].add(p),c[Z].add(p),h[T].add(x),h[k].add(x),h[Z].add(x))}let y=this.groups;y.length===0&&(y=[{start:0,count:n.length}]);for(let T=0,k=y.length;T<k;++T){const Z=y[T],P=Z.start,F=Z.count;for(let U=P,O=P+F;U<O;U+=3)_(n[U+0],n[U+1],n[U+2])}const S=new N,A=new N,b=new N,I=new N;function E(T){b.fromArray(s,T*3),I.copy(b);const k=c[T];S.copy(k),S.sub(b.multiplyScalar(b.dot(k))).normalize(),A.crossVectors(I,k);const P=A.dot(h[T])<0?-1:1;l[T*4]=S.x,l[T*4+1]=S.y,l[T*4+2]=S.z,l[T*4+3]=P}for(let T=0,k=y.length;T<k;++T){const Z=y[T],P=Z.start,F=Z.count;for(let U=P,O=P+F;U<O;U+=3)E(n[U+0]),E(n[U+1]),E(n[U+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new mn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new N,s=new N,o=new N,a=new N,l=new N,c=new N,h=new N,u=new N;if(t)for(let d=0,f=t.count;d<f;d+=3){const m=t.getX(d+0),v=t.getX(d+1),g=t.getX(d+2);i.fromBufferAttribute(e,m),s.fromBufferAttribute(e,v),o.fromBufferAttribute(e,g),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,g),a.add(h),l.add(h),c.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)i.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Me.fromBufferAttribute(t,e),Me.normalize(),t.setXYZ(e,Me.x,Me.y,Me.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let f=0,m=0;for(let v=0,g=l.length;v<g;v++){a.isInterleavedBufferAttribute?f=l[v]*a.data.stride+a.offset:f=l[v]*h;for(let p=0;p<h;p++)d[m++]=c[f++]}return new mn(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ge,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=t(l,n);e.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(i[l]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const s=t.morphAttributes;for(const c in s){const h=[],u=s[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Dl=new Pt,ui=new Xs,rr=new cs,Nl=new N,Oi=new N,Bi=new N,zi=new N,So=new N,or=new N,ar=new ht,lr=new ht,cr=new ht,Ul=new N,Fl=new N,Ol=new N,hr=new N,ur=new N;class Oe extends le{constructor(t=new Ge,e=new _a){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(s&&a){or.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=a[l],u=s[l];h!==0&&(So.fromBufferAttribute(u,t),o?or.addScaledVector(So,h):or.addScaledVector(So.sub(e),h))}e.add(or)}return e}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),rr.copy(n.boundingSphere),rr.applyMatrix4(s),ui.copy(t.ray).recast(t.near),!(rr.containsPoint(ui.origin)===!1&&(ui.intersectSphere(rr,Nl)===null||ui.origin.distanceToSquared(Nl)>(t.far-t.near)**2))&&(Dl.copy(s).invert(),ui.copy(t.ray).applyMatrix4(Dl),!(n.boundingBox!==null&&ui.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ui)))}_computeIntersections(t,e,n){let i;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,v=d.length;m<v;m++){const g=d[m],p=o[g.materialIndex],x=Math.max(g.start,f.start),_=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let y=x,S=_;y<S;y+=3){const A=a.getX(y),b=a.getX(y+1),I=a.getX(y+2);i=dr(this,p,t,n,c,h,u,A,b,I),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{const m=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let g=m,p=v;g<p;g+=3){const x=a.getX(g),_=a.getX(g+1),y=a.getX(g+2);i=dr(this,o,t,n,c,h,u,x,_,y),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,v=d.length;m<v;m++){const g=d[m],p=o[g.materialIndex],x=Math.max(g.start,f.start),_=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let y=x,S=_;y<S;y+=3){const A=y,b=y+1,I=y+2;i=dr(this,p,t,n,c,h,u,A,b,I),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{const m=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let g=m,p=v;g<p;g+=3){const x=g,_=g+1,y=g+2;i=dr(this,o,t,n,c,h,u,x,_,y),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}}}function tf(r,t,e,n,i,s,o,a){let l;if(t.side===Be?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,t.side===Qn,a),l===null)return null;ur.copy(a),ur.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(ur);return c<e.near||c>e.far?null:{distance:c,point:ur.clone(),object:r}}function dr(r,t,e,n,i,s,o,a,l,c){r.getVertexPosition(a,Oi),r.getVertexPosition(l,Bi),r.getVertexPosition(c,zi);const h=tf(r,t,e,n,Oi,Bi,zi,hr);if(h){i&&(ar.fromBufferAttribute(i,a),lr.fromBufferAttribute(i,l),cr.fromBufferAttribute(i,c),h.uv=rn.getInterpolation(hr,Oi,Bi,zi,ar,lr,cr,new ht)),s&&(ar.fromBufferAttribute(s,a),lr.fromBufferAttribute(s,l),cr.fromBufferAttribute(s,c),h.uv1=rn.getInterpolation(hr,Oi,Bi,zi,ar,lr,cr,new ht),h.uv2=h.uv1),o&&(Ul.fromBufferAttribute(o,a),Fl.fromBufferAttribute(o,l),Ol.fromBufferAttribute(o,c),h.normal=rn.getInterpolation(hr,Oi,Bi,zi,Ul,Fl,Ol,new N),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new N,materialIndex:0};rn.getNormal(Oi,Bi,zi,u.normal),h.face=u}return h}class hs extends Ge{constructor(t=1,e=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,f=0;m("z","y","x",-1,-1,n,e,t,o,s,0),m("z","y","x",1,-1,n,e,-t,o,s,1),m("x","z","y",1,1,t,n,e,i,o,2),m("x","z","y",1,-1,t,n,-e,i,o,3),m("x","y","z",1,-1,t,e,n,i,s,4),m("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new _e(c,3)),this.setAttribute("normal",new _e(h,3)),this.setAttribute("uv",new _e(u,2));function m(v,g,p,x,_,y,S,A,b,I,E){const T=y/b,k=S/I,Z=y/2,P=S/2,F=A/2,U=b+1,O=I+1;let X=0,G=0;const q=new N;for(let Q=0;Q<O;Q++){const z=Q*k-P;for(let V=0;V<U;V++){const ct=V*T-Z;q[v]=ct*x,q[g]=z*_,q[p]=F,c.push(q.x,q.y,q.z),q[v]=0,q[g]=0,q[p]=A>0?1:-1,h.push(q.x,q.y,q.z),u.push(V/b),u.push(1-Q/I),X+=1}}for(let Q=0;Q<I;Q++)for(let z=0;z<b;z++){const V=d+z+U*Q,ct=d+z+U*(Q+1),dt=d+(z+1)+U*(Q+1),pt=d+(z+1)+U*Q;l.push(V,ct,pt),l.push(ct,dt,pt),G+=6}a.addGroup(f,G,E),f+=G,d+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new hs(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ls(r){const t={};for(const e in r){t[e]={};for(const n in r[e]){const i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Ie(r){const t={};for(let e=0;e<r.length;e++){const n=ls(r[e]);for(const i in n)t[i]=n[i]}return t}function ef(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function Sh(r){return r.getRenderTarget()===null?r.outputColorSpace:gn}const nf={clone:ls,merge:Ie};var sf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,rf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Si extends ri{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=sf,this.fragmentShader=rf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ls(t.uniforms),this.uniformsGroups=ef(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Eh extends le{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Pt,this.projectionMatrix=new Pt,this.projectionMatrixInverse=new Pt,this.coordinateSystem=Fn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(-e[8],-e[9],-e[10]).normalize()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class De extends Eh{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=as*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(As*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return as*2*Math.atan(Math.tan(As*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(As*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ki=-90,Vi=1;class of extends le{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null;const i=new De(ki,Vi,t,e);i.layers=this.layers,this.add(i);const s=new De(ki,Vi,t,e);s.layers=this.layers,this.add(s);const o=new De(ki,Vi,t,e);o.layers=this.layers,this.add(o);const a=new De(ki,Vi,t,e);a.layers=this.layers,this.add(a);const l=new De(ki,Vi,t,e);l.layers=this.layers,this.add(l);const c=new De(ki,Vi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,s,o,a,l]=e;for(const c of e)this.remove(c);if(t===Fn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Nr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[i,s,o,a,l,c]=this.children,h=t.getRenderTarget(),u=t.xr.enabled;t.xr.enabled=!1;const d=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0),t.render(e,i),t.setRenderTarget(n,1),t.render(e,s),t.setRenderTarget(n,2),t.render(e,o),t.setRenderTarget(n,3),t.render(e,a),t.setRenderTarget(n,4),t.render(e,l),n.texture.generateMipmaps=d,t.setRenderTarget(n,5),t.render(e,c),t.setRenderTarget(h),t.xr.enabled=u,n.texture.needsPMREMUpdate=!0}}class wh extends be{constructor(t,e,n,i,s,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:ss,super(t,e,n,i,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class af extends Mi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];e.encoding!==void 0&&(Rs("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===xi?zt:yi),this.texture=new wh(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:je}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new hs(5,5,5),s=new Si({name:"CubemapFromEquirect",uniforms:ls(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Be,blending:Kn});s.uniforms.tEquirect.value=e;const o=new Oe(i,s),a=e.minFilter;return e.minFilter===Us&&(e.minFilter=je),new of(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(s)}}const Eo=new N,lf=new N,cf=new Ht;class Dn{constructor(t=new N(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Eo.subVectors(n,e).cross(lf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Eo),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||cf.getNormalMatrix(t),i=this.coplanarPoint(Eo).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const di=new cs,fr=new N;class ya{constructor(t=new Dn,e=new Dn,n=new Dn,i=new Dn,s=new Dn,o=new Dn){this.planes=[t,e,n,i,s,o]}set(t,e,n,i,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Fn){const n=this.planes,i=t.elements,s=i[0],o=i[1],a=i[2],l=i[3],c=i[4],h=i[5],u=i[6],d=i[7],f=i[8],m=i[9],v=i[10],g=i[11],p=i[12],x=i[13],_=i[14],y=i[15];if(n[0].setComponents(l-s,d-c,g-f,y-p).normalize(),n[1].setComponents(l+s,d+c,g+f,y+p).normalize(),n[2].setComponents(l+o,d+h,g+m,y+x).normalize(),n[3].setComponents(l-o,d-h,g-m,y-x).normalize(),n[4].setComponents(l-a,d-u,g-v,y-_).normalize(),e===Fn)n[5].setComponents(l+a,d+u,g+v,y+_).normalize();else if(e===Nr)n[5].setComponents(a,u,v,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),di.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),di.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(di)}intersectsSprite(t){return di.center.set(0,0,0),di.radius=.7071067811865476,di.applyMatrix4(t.matrixWorld),this.intersectsSphere(di)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(fr.x=i.normal.x>0?t.max.x:t.min.x,fr.y=i.normal.y>0?t.max.y:t.min.y,fr.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(fr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function bh(){let r=null,t=!1,e=null,n=null;function i(s,o){e(s,o),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function hf(r,t){const e=t.isWebGL2,n=new WeakMap;function i(c,h){const u=c.array,d=c.usage,f=r.createBuffer();r.bindBuffer(h,f),r.bufferData(h,u,d),c.onUploadCallback();let m;if(u instanceof Float32Array)m=r.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)m=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else m=r.UNSIGNED_SHORT;else if(u instanceof Int16Array)m=r.SHORT;else if(u instanceof Uint32Array)m=r.UNSIGNED_INT;else if(u instanceof Int32Array)m=r.INT;else if(u instanceof Int8Array)m=r.BYTE;else if(u instanceof Uint8Array)m=r.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)m=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:f,type:m,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version}}function s(c,h,u){const d=h.array,f=h.updateRange;r.bindBuffer(u,c),f.count===-1?r.bufferSubData(u,0,d):(e?r.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):r.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h&&(r.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u===void 0?n.set(c,i(c,h)):u.version<c.version&&(s(u.buffer,c,h),u.version=c.version)}return{get:o,remove:a,update:l}}class Ma extends Ge{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=t/a,d=e/l,f=[],m=[],v=[],g=[];for(let p=0;p<h;p++){const x=p*d-o;for(let _=0;_<c;_++){const y=_*u-s;m.push(y,-x,0),v.push(0,0,1),g.push(_/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let x=0;x<a;x++){const _=x+c*p,y=x+c*(p+1),S=x+1+c*(p+1),A=x+1+c*p;f.push(_,y,A),f.push(y,S,A)}this.setIndex(f),this.setAttribute("position",new _e(m,3)),this.setAttribute("normal",new _e(v,3)),this.setAttribute("uv",new _e(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ma(t.width,t.height,t.widthSegments,t.heightSegments)}}var uf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,df=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,ff=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,pf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mf=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,gf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,vf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,_f=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,xf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,yf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Mf=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Sf=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Ef=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,wf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,bf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Tf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Af=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Cf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Rf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Pf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Lf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,If=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Df=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Nf=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Uf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ff=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Of=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Bf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,zf="gl_FragColor = linearToOutputTexel( gl_FragColor );",kf=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Vf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Hf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Gf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Wf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Xf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,qf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,jf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Yf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Kf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Zf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,$f=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Jf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Qf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,tp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ep=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,np=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,ip=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,sp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,rp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,op=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ap=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,lp=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,cp=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,hp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometry.viewDir, geometry.normal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,up=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,dp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,fp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,mp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,gp=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,vp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_p=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,xp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Mp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Sp=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ep=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,wp=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,bp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Tp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,Ap=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Cp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Pp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Lp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Ip=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Dp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Np=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Up=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Fp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Op=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Bp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,zp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,kp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Vp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Hp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Gp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Wp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Xp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,qp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,jp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Yp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Kp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Zp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$p=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Jp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Qp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,em=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,nm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,im=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,sm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,rm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,om=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,am=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const lm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,cm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,um=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pm=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,mm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,gm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,vm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,_m=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,xm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ym=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Mm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Sm=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Em=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Am=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Rm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Pm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Lm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Im=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Dm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Um=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Om=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Bm=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,km=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Vm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Vt={alphahash_fragment:uf,alphahash_pars_fragment:df,alphamap_fragment:ff,alphamap_pars_fragment:pf,alphatest_fragment:mf,alphatest_pars_fragment:gf,aomap_fragment:vf,aomap_pars_fragment:_f,begin_vertex:xf,beginnormal_vertex:yf,bsdfs:Mf,iridescence_fragment:Sf,bumpmap_pars_fragment:Ef,clipping_planes_fragment:wf,clipping_planes_pars_fragment:bf,clipping_planes_pars_vertex:Tf,clipping_planes_vertex:Af,color_fragment:Cf,color_pars_fragment:Rf,color_pars_vertex:Pf,color_vertex:Lf,common:If,cube_uv_reflection_fragment:Df,defaultnormal_vertex:Nf,displacementmap_pars_vertex:Uf,displacementmap_vertex:Ff,emissivemap_fragment:Of,emissivemap_pars_fragment:Bf,colorspace_fragment:zf,colorspace_pars_fragment:kf,envmap_fragment:Vf,envmap_common_pars_fragment:Hf,envmap_pars_fragment:Gf,envmap_pars_vertex:Wf,envmap_physical_pars_fragment:np,envmap_vertex:Xf,fog_vertex:qf,fog_pars_vertex:jf,fog_fragment:Yf,fog_pars_fragment:Kf,gradientmap_pars_fragment:Zf,lightmap_fragment:$f,lightmap_pars_fragment:Jf,lights_lambert_fragment:Qf,lights_lambert_pars_fragment:tp,lights_pars_begin:ep,lights_toon_fragment:ip,lights_toon_pars_fragment:sp,lights_phong_fragment:rp,lights_phong_pars_fragment:op,lights_physical_fragment:ap,lights_physical_pars_fragment:lp,lights_fragment_begin:cp,lights_fragment_maps:hp,lights_fragment_end:up,logdepthbuf_fragment:dp,logdepthbuf_pars_fragment:fp,logdepthbuf_pars_vertex:pp,logdepthbuf_vertex:mp,map_fragment:gp,map_pars_fragment:vp,map_particle_fragment:_p,map_particle_pars_fragment:xp,metalnessmap_fragment:yp,metalnessmap_pars_fragment:Mp,morphcolor_vertex:Sp,morphnormal_vertex:Ep,morphtarget_pars_vertex:wp,morphtarget_vertex:bp,normal_fragment_begin:Tp,normal_fragment_maps:Ap,normal_pars_fragment:Cp,normal_pars_vertex:Rp,normal_vertex:Pp,normalmap_pars_fragment:Lp,clearcoat_normal_fragment_begin:Ip,clearcoat_normal_fragment_maps:Dp,clearcoat_pars_fragment:Np,iridescence_pars_fragment:Up,opaque_fragment:Fp,packing:Op,premultiplied_alpha_fragment:Bp,project_vertex:zp,dithering_fragment:kp,dithering_pars_fragment:Vp,roughnessmap_fragment:Hp,roughnessmap_pars_fragment:Gp,shadowmap_pars_fragment:Wp,shadowmap_pars_vertex:Xp,shadowmap_vertex:qp,shadowmask_pars_fragment:jp,skinbase_vertex:Yp,skinning_pars_vertex:Kp,skinning_vertex:Zp,skinnormal_vertex:$p,specularmap_fragment:Jp,specularmap_pars_fragment:Qp,tonemapping_fragment:tm,tonemapping_pars_fragment:em,transmission_fragment:nm,transmission_pars_fragment:im,uv_pars_fragment:sm,uv_pars_vertex:rm,uv_vertex:om,worldpos_vertex:am,background_vert:lm,background_frag:cm,backgroundCube_vert:hm,backgroundCube_frag:um,cube_vert:dm,cube_frag:fm,depth_vert:pm,depth_frag:mm,distanceRGBA_vert:gm,distanceRGBA_frag:vm,equirect_vert:_m,equirect_frag:xm,linedashed_vert:ym,linedashed_frag:Mm,meshbasic_vert:Sm,meshbasic_frag:Em,meshlambert_vert:wm,meshlambert_frag:bm,meshmatcap_vert:Tm,meshmatcap_frag:Am,meshnormal_vert:Cm,meshnormal_frag:Rm,meshphong_vert:Pm,meshphong_frag:Lm,meshphysical_vert:Im,meshphysical_frag:Dm,meshtoon_vert:Nm,meshtoon_frag:Um,points_vert:Fm,points_frag:Om,shadow_vert:Bm,shadow_frag:zm,sprite_vert:km,sprite_frag:Vm},mt={common:{diffuse:{value:new Ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ht}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ht},normalScale:{value:new ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0},uvTransform:{value:new Ht}},sprite:{diffuse:{value:new Ut(16777215)},opacity:{value:1},center:{value:new ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}}},fn={basic:{uniforms:Ie([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.fog]),vertexShader:Vt.meshbasic_vert,fragmentShader:Vt.meshbasic_frag},lambert:{uniforms:Ie([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new Ut(0)}}]),vertexShader:Vt.meshlambert_vert,fragmentShader:Vt.meshlambert_frag},phong:{uniforms:Ie([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new Ut(0)},specular:{value:new Ut(1118481)},shininess:{value:30}}]),vertexShader:Vt.meshphong_vert,fragmentShader:Vt.meshphong_frag},standard:{uniforms:Ie([mt.common,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.roughnessmap,mt.metalnessmap,mt.fog,mt.lights,{emissive:{value:new Ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag},toon:{uniforms:Ie([mt.common,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.gradientmap,mt.fog,mt.lights,{emissive:{value:new Ut(0)}}]),vertexShader:Vt.meshtoon_vert,fragmentShader:Vt.meshtoon_frag},matcap:{uniforms:Ie([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,{matcap:{value:null}}]),vertexShader:Vt.meshmatcap_vert,fragmentShader:Vt.meshmatcap_frag},points:{uniforms:Ie([mt.points,mt.fog]),vertexShader:Vt.points_vert,fragmentShader:Vt.points_frag},dashed:{uniforms:Ie([mt.common,mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Vt.linedashed_vert,fragmentShader:Vt.linedashed_frag},depth:{uniforms:Ie([mt.common,mt.displacementmap]),vertexShader:Vt.depth_vert,fragmentShader:Vt.depth_frag},normal:{uniforms:Ie([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,{opacity:{value:1}}]),vertexShader:Vt.meshnormal_vert,fragmentShader:Vt.meshnormal_frag},sprite:{uniforms:Ie([mt.sprite,mt.fog]),vertexShader:Vt.sprite_vert,fragmentShader:Vt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Vt.background_vert,fragmentShader:Vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Vt.backgroundCube_vert,fragmentShader:Vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Vt.cube_vert,fragmentShader:Vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Vt.equirect_vert,fragmentShader:Vt.equirect_frag},distanceRGBA:{uniforms:Ie([mt.common,mt.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Vt.distanceRGBA_vert,fragmentShader:Vt.distanceRGBA_frag},shadow:{uniforms:Ie([mt.lights,mt.fog,{color:{value:new Ut(0)},opacity:{value:1}}]),vertexShader:Vt.shadow_vert,fragmentShader:Vt.shadow_frag}};fn.physical={uniforms:Ie([fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ht},clearcoatNormalScale:{value:new ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ht},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ht},sheen:{value:0},sheenColor:{value:new Ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ht},transmissionSamplerSize:{value:new ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ht},attenuationDistance:{value:0},attenuationColor:{value:new Ut(0)},specularColor:{value:new Ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ht},anisotropyVector:{value:new ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ht}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag};const pr={r:0,b:0,g:0};function Hm(r,t,e,n,i,s,o){const a=new Ut(0);let l=s===!0?0:1,c,h,u=null,d=0,f=null;function m(g,p){let x=!1,_=p.isScene===!0?p.background:null;switch(_&&_.isTexture&&(_=(p.backgroundBlurriness>0?e:t).get(_)),_===null?v(a,l):_&&_.isColor&&(v(_,1),x=!0),r.xr.getEnvironmentBlendMode()){case"opaque":x=!0;break;case"additive":n.buffers.color.setClear(0,0,0,1,o),x=!0;break;case"alpha-blend":n.buffers.color.setClear(0,0,0,0,o),x=!0;break}(r.autoClear||x)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),_&&(_.isCubeTexture||_.mapping===zr)?(h===void 0&&(h=new Oe(new hs(1,1,1),new Si({name:"BackgroundCubeMaterial",uniforms:ls(fn.backgroundCube.uniforms),vertexShader:fn.backgroundCube.vertexShader,fragmentShader:fn.backgroundCube.fragmentShader,side:Be,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,b,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=_.colorSpace!==zt,(u!==_||d!==_.version||f!==r.toneMapping)&&(h.material.needsUpdate=!0,u=_,d=_.version,f=r.toneMapping),h.layers.enableAll(),g.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new Oe(new Ma(2,2),new Si({name:"BackgroundMaterial",uniforms:ls(fn.background.uniforms),vertexShader:fn.background.vertexShader,fragmentShader:fn.background.fragmentShader,side:Qn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=_.colorSpace!==zt,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||d!==_.version||f!==r.toneMapping)&&(c.material.needsUpdate=!0,u=_,d=_.version,f=r.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null))}function v(g,p){g.getRGB(pr,Sh(r)),n.buffers.color.setClear(pr.r,pr.g,pr.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(g,p=1){a.set(g),l=p,v(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,v(a,l)},render:m}}function Gm(r,t,e,n){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:t.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},l=g(null);let c=l,h=!1;function u(F,U,O,X,G){let q=!1;if(o){const Q=v(X,O,U);c!==Q&&(c=Q,f(c.object)),q=p(F,X,O,G),q&&x(F,X,O,G)}else{const Q=U.wireframe===!0;(c.geometry!==X.id||c.program!==O.id||c.wireframe!==Q)&&(c.geometry=X.id,c.program=O.id,c.wireframe=Q,q=!0)}G!==null&&e.update(G,r.ELEMENT_ARRAY_BUFFER),(q||h)&&(h=!1,I(F,U,O,X),G!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function d(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function f(F){return n.isWebGL2?r.bindVertexArray(F):s.bindVertexArrayOES(F)}function m(F){return n.isWebGL2?r.deleteVertexArray(F):s.deleteVertexArrayOES(F)}function v(F,U,O){const X=O.wireframe===!0;let G=a[F.id];G===void 0&&(G={},a[F.id]=G);let q=G[U.id];q===void 0&&(q={},G[U.id]=q);let Q=q[X];return Q===void 0&&(Q=g(d()),q[X]=Q),Q}function g(F){const U=[],O=[],X=[];for(let G=0;G<i;G++)U[G]=0,O[G]=0,X[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:O,attributeDivisors:X,object:F,attributes:{},index:null}}function p(F,U,O,X){const G=c.attributes,q=U.attributes;let Q=0;const z=O.getAttributes();for(const V in z)if(z[V].location>=0){const dt=G[V];let pt=q[V];if(pt===void 0&&(V==="instanceMatrix"&&F.instanceMatrix&&(pt=F.instanceMatrix),V==="instanceColor"&&F.instanceColor&&(pt=F.instanceColor)),dt===void 0||dt.attribute!==pt||pt&&dt.data!==pt.data)return!0;Q++}return c.attributesNum!==Q||c.index!==X}function x(F,U,O,X){const G={},q=U.attributes;let Q=0;const z=O.getAttributes();for(const V in z)if(z[V].location>=0){let dt=q[V];dt===void 0&&(V==="instanceMatrix"&&F.instanceMatrix&&(dt=F.instanceMatrix),V==="instanceColor"&&F.instanceColor&&(dt=F.instanceColor));const pt={};pt.attribute=dt,dt&&dt.data&&(pt.data=dt.data),G[V]=pt,Q++}c.attributes=G,c.attributesNum=Q,c.index=X}function _(){const F=c.newAttributes;for(let U=0,O=F.length;U<O;U++)F[U]=0}function y(F){S(F,0)}function S(F,U){const O=c.newAttributes,X=c.enabledAttributes,G=c.attributeDivisors;O[F]=1,X[F]===0&&(r.enableVertexAttribArray(F),X[F]=1),G[F]!==U&&((n.isWebGL2?r:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](F,U),G[F]=U)}function A(){const F=c.newAttributes,U=c.enabledAttributes;for(let O=0,X=U.length;O<X;O++)U[O]!==F[O]&&(r.disableVertexAttribArray(O),U[O]=0)}function b(F,U,O,X,G,q,Q){Q===!0?r.vertexAttribIPointer(F,U,O,G,q):r.vertexAttribPointer(F,U,O,X,G,q)}function I(F,U,O,X){if(n.isWebGL2===!1&&(F.isInstancedMesh||X.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;_();const G=X.attributes,q=O.getAttributes(),Q=U.defaultAttributeValues;for(const z in q){const V=q[z];if(V.location>=0){let ct=G[z];if(ct===void 0&&(z==="instanceMatrix"&&F.instanceMatrix&&(ct=F.instanceMatrix),z==="instanceColor"&&F.instanceColor&&(ct=F.instanceColor)),ct!==void 0){const dt=ct.normalized,pt=ct.itemSize,bt=e.get(ct);if(bt===void 0)continue;const Tt=bt.buffer,At=bt.type,Kt=bt.bytesPerElement,te=n.isWebGL2===!0&&(At===r.INT||At===r.UNSIGNED_INT||ct.gpuType===ah);if(ct.isInterleavedBufferAttribute){const Lt=ct.data,L=Lt.stride,ut=ct.offset;if(Lt.isInstancedInterleavedBuffer){for(let tt=0;tt<V.locationSize;tt++)S(V.location+tt,Lt.meshPerAttribute);F.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=Lt.meshPerAttribute*Lt.count)}else for(let tt=0;tt<V.locationSize;tt++)y(V.location+tt);r.bindBuffer(r.ARRAY_BUFFER,Tt);for(let tt=0;tt<V.locationSize;tt++)b(V.location+tt,pt/V.locationSize,At,dt,L*Kt,(ut+pt/V.locationSize*tt)*Kt,te)}else{if(ct.isInstancedBufferAttribute){for(let Lt=0;Lt<V.locationSize;Lt++)S(V.location+Lt,ct.meshPerAttribute);F.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let Lt=0;Lt<V.locationSize;Lt++)y(V.location+Lt);r.bindBuffer(r.ARRAY_BUFFER,Tt);for(let Lt=0;Lt<V.locationSize;Lt++)b(V.location+Lt,pt/V.locationSize,At,dt,pt*Kt,pt/V.locationSize*Lt*Kt,te)}}else if(Q!==void 0){const dt=Q[z];if(dt!==void 0)switch(dt.length){case 2:r.vertexAttrib2fv(V.location,dt);break;case 3:r.vertexAttrib3fv(V.location,dt);break;case 4:r.vertexAttrib4fv(V.location,dt);break;default:r.vertexAttrib1fv(V.location,dt)}}}}A()}function E(){Z();for(const F in a){const U=a[F];for(const O in U){const X=U[O];for(const G in X)m(X[G].object),delete X[G];delete U[O]}delete a[F]}}function T(F){if(a[F.id]===void 0)return;const U=a[F.id];for(const O in U){const X=U[O];for(const G in X)m(X[G].object),delete X[G];delete U[O]}delete a[F.id]}function k(F){for(const U in a){const O=a[U];if(O[F.id]===void 0)continue;const X=O[F.id];for(const G in X)m(X[G].object),delete X[G];delete O[F.id]}}function Z(){P(),h=!0,c!==l&&(c=l,f(c.object))}function P(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:Z,resetDefaultState:P,dispose:E,releaseStatesOfGeometry:T,releaseStatesOfProgram:k,initAttributes:_,enableAttribute:y,disableUnusedAttributes:A}}function Wm(r,t,e,n){const i=n.isWebGL2;let s;function o(c){s=c}function a(c,h){r.drawArrays(s,c,h),e.update(h,s,1)}function l(c,h,u){if(u===0)return;let d,f;if(i)d=r,f="drawArraysInstanced";else if(d=t.get("ANGLE_instanced_arrays"),f="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[f](s,c,h,u),e.update(h,s,u)}this.setMode=o,this.render=a,this.renderInstances=l}function Xm(r,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const b=t.get("EXT_texture_filter_anisotropic");n=r.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(b){if(b==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext";let a=e.precision!==void 0?e.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),d=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),v=r.getParameter(r.MAX_VERTEX_ATTRIBS),g=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),p=r.getParameter(r.MAX_VARYING_VECTORS),x=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),_=d>0,y=o||t.has("OES_texture_float"),S=_&&y,A=o?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:m,maxAttributes:v,maxVertexUniforms:g,maxVaryings:p,maxFragmentUniforms:x,vertexTextures:_,floatFragmentTextures:y,floatVertexTextures:S,maxSamples:A}}function qm(r){const t=this;let e=null,n=0,i=!1,s=!1;const o=new Dn,a=new Ht,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const m=u.clippingPlanes,v=u.clipIntersection,g=u.clipShadows,p=r.get(u);if(!i||m===null||m.length===0||s&&!g)s?h(null):c();else{const x=s?0:n,_=x*4;let y=p.clippingState||null;l.value=y,y=h(m,d,_,f);for(let S=0;S!==_;++S)y[S]=e[S];p.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,m){const v=u!==null?u.length:0;let g=null;if(v!==0){if(g=l.value,m!==!0||g===null){const p=f+v*4,x=d.matrixWorldInverse;a.getNormalMatrix(x),(g===null||g.length<p)&&(g=new Float32Array(p));for(let _=0,y=f;_!==v;++_,y+=4)o.copy(u[_]).applyMatrix4(x,a),o.normal.toArray(g,y),g[y+3]=o.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,g}}function jm(r){let t=new WeakMap;function e(o,a){return a===Pr?o.mapping=ss:a===Zo&&(o.mapping=rs),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===Pr||a===Zo)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new af(l.height/2);return c.fromEquirectangularTexture(r,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class Sa extends Eh{constructor(t=-1,e=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const $i=4,Bl=[.125,.215,.35,.446,.526,.582],mi=20,wo=new Sa,zl=new Ut;let bo=null;const pi=(1+Math.sqrt(5))/2,Hi=1/pi,kl=[new N(1,1,1),new N(-1,1,1),new N(1,1,-1),new N(-1,1,-1),new N(0,pi,Hi),new N(0,pi,-Hi),new N(Hi,0,pi),new N(-Hi,0,pi),new N(pi,Hi,0),new N(-pi,Hi,0)];class Vl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){bo=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Wl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Gl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(bo),t.scissorTest=!1,mr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ss||t.mapping===rs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),bo=this._renderer.getRenderTarget();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:je,minFilter:je,generateMipmaps:!1,type:Fs,format:Ye,colorSpace:gn,depthBuffer:!1},i=Hl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Hl(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ym(s)),this._blurMaterial=Km(s,t,e)}return i}_compileMaterial(t){const e=new Oe(this._lodPlanes[0],t);this._renderer.compile(e,wo)}_sceneToCubeUV(t,e,n,i){const a=new De(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(zl),h.toneMapping=Zn,h.autoClear=!1;const f=new _a({name:"PMREM.Background",side:Be,depthWrite:!1,depthTest:!1}),m=new Oe(new hs,f);let v=!1;const g=t.background;g?g.isColor&&(f.color.copy(g),t.background=null,v=!0):(f.color.copy(zl),v=!0);for(let p=0;p<6;p++){const x=p%3;x===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):x===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const _=this._cubeSize;mr(i,x*_,p>2?_:0,_,_),h.setRenderTarget(i),v&&h.render(m,a),h.render(t,a)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=g}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===ss||t.mapping===rs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Wl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Gl());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new Oe(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const l=this._cubeSize;mr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,wo)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=kl[(i-1)%kl.length];this._blur(t,i-1,i,s,o)}e.autoClear=n}_blur(t,e,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",s),this._halfBlur(o,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Oe(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,m=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*mi-1),v=s/m,g=isFinite(s)?1+Math.floor(h*v):mi;g>mi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${mi}`);const p=[];let x=0;for(let b=0;b<mi;++b){const I=b/v,E=Math.exp(-I*I/2);p.push(E),b===0?x+=E:b<g&&(x+=2*E)}for(let b=0;b<p.length;b++)p[b]=p[b]/x;d.envMap.value=t.texture,d.samples.value=g,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:_}=this;d.dTheta.value=m,d.mipInt.value=_-n;const y=this._sizeLods[i],S=3*y*(i>_-$i?i-_+$i:0),A=4*(this._cubeSize-y);mr(e,S,A,3*y,2*y),l.setRenderTarget(e),l.render(u,wo)}}function Ym(r){const t=[],e=[],n=[];let i=r;const s=r-$i+1+Bl.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);e.push(a);let l=1/a;o>r-$i?l=Bl[o-r+$i-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,m=6,v=3,g=2,p=1,x=new Float32Array(v*m*f),_=new Float32Array(g*m*f),y=new Float32Array(p*m*f);for(let A=0;A<f;A++){const b=A%3*2/3-1,I=A>2?0:-1,E=[b,I,0,b+2/3,I,0,b+2/3,I+1,0,b,I,0,b+2/3,I+1,0,b,I+1,0];x.set(E,v*m*A),_.set(d,g*m*A);const T=[A,A,A,A,A,A];y.set(T,p*m*A)}const S=new Ge;S.setAttribute("position",new mn(x,v)),S.setAttribute("uv",new mn(_,g)),S.setAttribute("faceIndex",new mn(y,p)),t.push(S),i>$i&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Hl(r,t,e){const n=new Mi(r,t,e);return n.texture.mapping=zr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function mr(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function Km(r,t,e){const n=new Float32Array(mi),i=new N(0,1,0);return new Si({name:"SphericalGaussianBlur",defines:{n:mi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Ea(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function Gl(){return new Si({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ea(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function Wl(){return new Si({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ea(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function Ea(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Zm(r){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Pr||l===Zo,h=l===ss||l===rs;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=t.get(a);return e===null&&(e=new Vl(r)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),t.set(a,u),u.texture}else{if(t.has(a))return t.get(a).texture;{const u=a.image;if(c&&u&&u.height>0||h&&u&&i(u)){e===null&&(e=new Vl(r));const d=c?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function i(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function $m(r){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?e("EXT_color_buffer_float"):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Jm(r,t,e,n){const i={},s=new WeakMap;function o(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const m in d.attributes)t.remove(d.attributes[m]);for(const m in d.morphAttributes){const v=d.morphAttributes[m];for(let g=0,p=v.length;g<p;g++)t.remove(v[g])}d.removeEventListener("dispose",o),delete i[d.id];const f=s.get(d);f&&(t.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const m in d)t.update(d[m],r.ARRAY_BUFFER);const f=u.morphAttributes;for(const m in f){const v=f[m];for(let g=0,p=v.length;g<p;g++)t.update(v[g],r.ARRAY_BUFFER)}}function c(u){const d=[],f=u.index,m=u.attributes.position;let v=0;if(f!==null){const x=f.array;v=f.version;for(let _=0,y=x.length;_<y;_+=3){const S=x[_+0],A=x[_+1],b=x[_+2];d.push(S,A,A,b,b,S)}}else if(m!==void 0){const x=m.array;v=m.version;for(let _=0,y=x.length/3-1;_<y;_+=3){const S=_+0,A=_+1,b=_+2;d.push(S,A,A,b,b,S)}}else return;const g=new(gh(d)?Mh:xa)(d,1);g.version=v;const p=s.get(u);p&&t.remove(p),s.set(u,g)}function h(u){const d=s.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return s.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Qm(r,t,e,n){const i=n.isWebGL2;let s;function o(d){s=d}let a,l;function c(d){a=d.type,l=d.bytesPerElement}function h(d,f){r.drawElements(s,f,a,d*l),e.update(f,s,1)}function u(d,f,m){if(m===0)return;let v,g;if(i)v=r,g="drawElementsInstanced";else if(v=t.get("ANGLE_instanced_arrays"),g="drawElementsInstancedANGLE",v===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[g](s,f,a,d*l,m),e.update(f,s,m)}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=u}function tg(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case r.TRIANGLES:e.triangles+=a*(s/3);break;case r.LINES:e.lines+=a*(s/2);break;case r.LINE_STRIP:e.lines+=a*(s-1);break;case r.LINE_LOOP:e.lines+=a*s;break;case r.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function eg(r,t){return r[0]-t[0]}function ng(r,t){return Math.abs(t[1])-Math.abs(r[1])}function ig(r,t,e){const n={},i=new Float32Array(8),s=new WeakMap,o=new Jt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,u){const d=c.morphTargetInfluences;if(t.isWebGL2===!0){const f=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,m=f!==void 0?f.length:0;let v=s.get(h);if(v===void 0||v.count!==m){let F=function(){Z.dispose(),s.delete(h),h.removeEventListener("dispose",F)};v!==void 0&&v.texture.dispose();const x=h.morphAttributes.position!==void 0,_=h.morphAttributes.normal!==void 0,y=h.morphAttributes.color!==void 0,S=h.morphAttributes.position||[],A=h.morphAttributes.normal||[],b=h.morphAttributes.color||[];let I=0;x===!0&&(I=1),_===!0&&(I=2),y===!0&&(I=3);let E=h.attributes.position.count*I,T=1;E>t.maxTextureSize&&(T=Math.ceil(E/t.maxTextureSize),E=t.maxTextureSize);const k=new Float32Array(E*T*4*m),Z=new xh(k,E,T,m);Z.type=Un,Z.needsUpdate=!0;const P=I*4;for(let U=0;U<m;U++){const O=S[U],X=A[U],G=b[U],q=E*T*4*U;for(let Q=0;Q<O.count;Q++){const z=Q*P;x===!0&&(o.fromBufferAttribute(O,Q),k[q+z+0]=o.x,k[q+z+1]=o.y,k[q+z+2]=o.z,k[q+z+3]=0),_===!0&&(o.fromBufferAttribute(X,Q),k[q+z+4]=o.x,k[q+z+5]=o.y,k[q+z+6]=o.z,k[q+z+7]=0),y===!0&&(o.fromBufferAttribute(G,Q),k[q+z+8]=o.x,k[q+z+9]=o.y,k[q+z+10]=o.z,k[q+z+11]=G.itemSize===4?o.w:1)}}v={count:m,texture:Z,size:new ht(E,T)},s.set(h,v),h.addEventListener("dispose",F)}let g=0;for(let x=0;x<d.length;x++)g+=d[x];const p=h.morphTargetsRelative?1:1-g;u.getUniforms().setValue(r,"morphTargetBaseInfluence",p),u.getUniforms().setValue(r,"morphTargetInfluences",d),u.getUniforms().setValue(r,"morphTargetsTexture",v.texture,e),u.getUniforms().setValue(r,"morphTargetsTextureSize",v.size)}else{const f=d===void 0?0:d.length;let m=n[h.id];if(m===void 0||m.length!==f){m=[];for(let _=0;_<f;_++)m[_]=[_,0];n[h.id]=m}for(let _=0;_<f;_++){const y=m[_];y[0]=_,y[1]=d[_]}m.sort(ng);for(let _=0;_<8;_++)_<f&&m[_][1]?(a[_][0]=m[_][0],a[_][1]=m[_][1]):(a[_][0]=Number.MAX_SAFE_INTEGER,a[_][1]=0);a.sort(eg);const v=h.morphAttributes.position,g=h.morphAttributes.normal;let p=0;for(let _=0;_<8;_++){const y=a[_],S=y[0],A=y[1];S!==Number.MAX_SAFE_INTEGER&&A?(v&&h.getAttribute("morphTarget"+_)!==v[S]&&h.setAttribute("morphTarget"+_,v[S]),g&&h.getAttribute("morphNormal"+_)!==g[S]&&h.setAttribute("morphNormal"+_,g[S]),i[_]=A,p+=A):(v&&h.hasAttribute("morphTarget"+_)===!0&&h.deleteAttribute("morphTarget"+_),g&&h.hasAttribute("morphNormal"+_)===!0&&h.deleteAttribute("morphNormal"+_),i[_]=0)}const x=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(r,"morphTargetBaseInfluence",x),u.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:l}}function sg(r,t,e,n){let i=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return u}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:o}}const Th=new be,Ah=new xh,Ch=new Wd,Rh=new wh,Xl=[],ql=[],jl=new Float32Array(16),Yl=new Float32Array(9),Kl=new Float32Array(4);function us(r,t,e){const n=r[0];if(n<=0||n>0)return r;const i=t*e;let s=Xl[i];if(s===void 0&&(s=new Float32Array(i),Xl[i]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,r[o].toArray(s,a)}return s}function xe(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function ye(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function Hr(r,t){let e=ql[t];e===void 0&&(e=new Int32Array(t),ql[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function rg(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function og(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;r.uniform2fv(this.addr,t),ye(e,t)}}function ag(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(xe(e,t))return;r.uniform3fv(this.addr,t),ye(e,t)}}function lg(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;r.uniform4fv(this.addr,t),ye(e,t)}}function cg(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(xe(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),ye(e,t)}else{if(xe(e,n))return;Kl.set(n),r.uniformMatrix2fv(this.addr,!1,Kl),ye(e,n)}}function hg(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(xe(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),ye(e,t)}else{if(xe(e,n))return;Yl.set(n),r.uniformMatrix3fv(this.addr,!1,Yl),ye(e,n)}}function ug(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(xe(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),ye(e,t)}else{if(xe(e,n))return;jl.set(n),r.uniformMatrix4fv(this.addr,!1,jl),ye(e,n)}}function dg(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function fg(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;r.uniform2iv(this.addr,t),ye(e,t)}}function pg(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(xe(e,t))return;r.uniform3iv(this.addr,t),ye(e,t)}}function mg(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;r.uniform4iv(this.addr,t),ye(e,t)}}function gg(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function vg(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;r.uniform2uiv(this.addr,t),ye(e,t)}}function _g(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(xe(e,t))return;r.uniform3uiv(this.addr,t),ye(e,t)}}function xg(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;r.uniform4uiv(this.addr,t),ye(e,t)}}function yg(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2D(t||Th,i)}function Mg(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Ch,i)}function Sg(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Rh,i)}function Eg(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Ah,i)}function wg(r){switch(r){case 5126:return rg;case 35664:return og;case 35665:return ag;case 35666:return lg;case 35674:return cg;case 35675:return hg;case 35676:return ug;case 5124:case 35670:return dg;case 35667:case 35671:return fg;case 35668:case 35672:return pg;case 35669:case 35673:return mg;case 5125:return gg;case 36294:return vg;case 36295:return _g;case 36296:return xg;case 35678:case 36198:case 36298:case 36306:case 35682:return yg;case 35679:case 36299:case 36307:return Mg;case 35680:case 36300:case 36308:case 36293:return Sg;case 36289:case 36303:case 36311:case 36292:return Eg}}function bg(r,t){r.uniform1fv(this.addr,t)}function Tg(r,t){const e=us(t,this.size,2);r.uniform2fv(this.addr,e)}function Ag(r,t){const e=us(t,this.size,3);r.uniform3fv(this.addr,e)}function Cg(r,t){const e=us(t,this.size,4);r.uniform4fv(this.addr,e)}function Rg(r,t){const e=us(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function Pg(r,t){const e=us(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function Lg(r,t){const e=us(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function Ig(r,t){r.uniform1iv(this.addr,t)}function Dg(r,t){r.uniform2iv(this.addr,t)}function Ng(r,t){r.uniform3iv(this.addr,t)}function Ug(r,t){r.uniform4iv(this.addr,t)}function Fg(r,t){r.uniform1uiv(this.addr,t)}function Og(r,t){r.uniform2uiv(this.addr,t)}function Bg(r,t){r.uniform3uiv(this.addr,t)}function zg(r,t){r.uniform4uiv(this.addr,t)}function kg(r,t,e){const n=this.cache,i=t.length,s=Hr(e,i);xe(n,s)||(r.uniform1iv(this.addr,s),ye(n,s));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||Th,s[o])}function Vg(r,t,e){const n=this.cache,i=t.length,s=Hr(e,i);xe(n,s)||(r.uniform1iv(this.addr,s),ye(n,s));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||Ch,s[o])}function Hg(r,t,e){const n=this.cache,i=t.length,s=Hr(e,i);xe(n,s)||(r.uniform1iv(this.addr,s),ye(n,s));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||Rh,s[o])}function Gg(r,t,e){const n=this.cache,i=t.length,s=Hr(e,i);xe(n,s)||(r.uniform1iv(this.addr,s),ye(n,s));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||Ah,s[o])}function Wg(r){switch(r){case 5126:return bg;case 35664:return Tg;case 35665:return Ag;case 35666:return Cg;case 35674:return Rg;case 35675:return Pg;case 35676:return Lg;case 5124:case 35670:return Ig;case 35667:case 35671:return Dg;case 35668:case 35672:return Ng;case 35669:case 35673:return Ug;case 5125:return Fg;case 36294:return Og;case 36295:return Bg;case 36296:return zg;case 35678:case 36198:case 36298:case 36306:case 35682:return kg;case 35679:case 36299:case 36307:return Vg;case 35680:case 36300:case 36308:case 36293:return Hg;case 36289:case 36303:case 36311:case 36292:return Gg}}class Xg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.setValue=wg(e.type)}}class qg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.size=e.size,this.setValue=Wg(e.type)}}class jg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(t,e[a.id],n)}}}const To=/(\w+)(\])?(\[|\.)?/g;function Zl(r,t){r.seq.push(t),r.map[t.id]=t}function Yg(r,t,e){const n=r.name,i=n.length;for(To.lastIndex=0;;){const s=To.exec(n),o=To.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Zl(e,c===void 0?new Xg(a,r,t):new qg(a,r,t));break}else{let u=e.map[a];u===void 0&&(u=new jg(a),Zl(e,u)),e=u}}}class Cr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=t.getActiveUniform(e,i),o=t.getUniformLocation(e,s.name);Yg(s,o,this)}}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,o=e.length;s!==o;++s){const a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function $l(r,t,e){const n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}let Kg=0;function Zg(r,t){const e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function $g(r){switch(r){case gn:return["Linear","( value )"];case zt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),["Linear","( value )"]}}function Jl(r,t,e){const n=r.getShaderParameter(t,r.COMPILE_STATUS),i=r.getShaderInfoLog(t).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+Zg(r.getShaderSource(t),o)}else return i}function Jg(r,t){const e=$g(t);return"vec4 "+r+"( vec4 value ) { return LinearTo"+e[0]+e[1]+"; }"}function Qg(r,t){let e;switch(t){case qu:e="Linear";break;case ju:e="Reinhard";break;case Yu:e="OptimizedCineon";break;case Ku:e="ACESFilmic";break;case Zu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function tv(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ts).join(`
`)}function ev(r){const t=[];for(const e in r){const n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function nv(r,t){const e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(t,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:r.getAttribLocation(t,o),locationSize:a}}return e}function Ts(r){return r!==""}function Ql(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function tc(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const iv=/^[ \t]*#include +<([\w\d./]+)>/gm;function ta(r){return r.replace(iv,rv)}const sv=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function rv(r,t){let e=Vt[t];if(e===void 0){const n=sv.get(t);if(n!==void 0)e=Vt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return ta(e)}const ov=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ec(r){return r.replace(ov,av)}function av(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function nc(r){let t="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function lv(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===ih?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===wu?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Ln&&(t="SHADOWMAP_TYPE_VSM"),t}function cv(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case ss:case rs:t="ENVMAP_TYPE_CUBE";break;case zr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function hv(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case rs:t="ENVMAP_MODE_REFRACTION";break}return t}function uv(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Br:t="ENVMAP_BLENDING_MULTIPLY";break;case Wu:t="ENVMAP_BLENDING_MIX";break;case Xu:t="ENVMAP_BLENDING_ADD";break}return t}function dv(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function fv(r,t,e,n){const i=r.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=lv(e),c=cv(e),h=hv(e),u=uv(e),d=dv(e),f=e.isWebGL2?"":tv(e),m=ev(s),v=i.createProgram();let g,p,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Ts).join(`
`),g.length>0&&(g+=`
`),p=[f,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Ts).join(`
`),p.length>0&&(p+=`
`)):(g=[nc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ts).join(`
`),p=[f,nc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Zn?"#define TONE_MAPPING":"",e.toneMapping!==Zn?Vt.tonemapping_pars_fragment:"",e.toneMapping!==Zn?Qg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Vt.colorspace_pars_fragment,Jg("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ts).join(`
`)),o=ta(o),o=Ql(o,e),o=tc(o,e),a=ta(a),a=Ql(a,e),a=tc(a,e),o=ec(o),a=ec(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,g=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===Ml?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ml?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const _=x+g+o,y=x+p+a,S=$l(i,i.VERTEX_SHADER,_),A=$l(i,i.FRAGMENT_SHADER,y);if(i.attachShader(v,S),i.attachShader(v,A),e.index0AttributeName!==void 0?i.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v),r.debug.checkShaderErrors){const E=i.getProgramInfoLog(v).trim(),T=i.getShaderInfoLog(S).trim(),k=i.getShaderInfoLog(A).trim();let Z=!0,P=!0;if(i.getProgramParameter(v,i.LINK_STATUS)===!1)if(Z=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,v,S,A);else{const F=Jl(i,S,"vertex"),U=Jl(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,i.VALIDATE_STATUS)+`

Program Info Log: `+E+`
`+F+`
`+U)}else E!==""?console.warn("THREE.WebGLProgram: Program Info Log:",E):(T===""||k==="")&&(P=!1);P&&(this.diagnostics={runnable:Z,programLog:E,vertexShader:{log:T,prefix:g},fragmentShader:{log:k,prefix:p}})}i.deleteShader(S),i.deleteShader(A);let b;this.getUniforms=function(){return b===void 0&&(b=new Cr(i,v)),b};let I;return this.getAttributes=function(){return I===void 0&&(I=nv(i,v)),I},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Kg++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=S,this.fragmentShader=A,this}let pv=0;class mv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new gv(t),e.set(t,n)),n}}class gv{constructor(t){this.id=pv++,this.code=t,this.usedTimes=0}}function vv(r,t,e,n,i,s,o){const a=new va,l=new mv,c=[],h=i.isWebGL2,u=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(E){return E===0?"uv":`uv${E}`}function g(E,T,k,Z,P){const F=Z.fog,U=P.geometry,O=E.isMeshStandardMaterial?Z.environment:null,X=(E.isMeshStandardMaterial?e:t).get(E.envMap||O),G=X&&X.mapping===zr?X.image.height:null,q=m[E.type];E.precision!==null&&(f=i.getMaxPrecision(E.precision),f!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",f,"instead."));const Q=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,z=Q!==void 0?Q.length:0;let V=0;U.morphAttributes.position!==void 0&&(V=1),U.morphAttributes.normal!==void 0&&(V=2),U.morphAttributes.color!==void 0&&(V=3);let ct,dt,pt,bt;if(q){const ne=fn[q];ct=ne.vertexShader,dt=ne.fragmentShader}else ct=E.vertexShader,dt=E.fragmentShader,l.update(E),pt=l.getVertexShaderID(E),bt=l.getFragmentShaderID(E);const Tt=r.getRenderTarget(),At=P.isInstancedMesh===!0,Kt=!!E.map,te=!!E.matcap,Lt=!!X,L=!!E.aoMap,ut=!!E.lightMap,tt=!!E.bumpMap,ot=!!E.normalMap,nt=!!E.displacementMap,Rt=!!E.emissiveMap,yt=!!E.metalnessMap,St=!!E.roughnessMap,Dt=E.anisotropy>0,Wt=E.clearcoat>0,re=E.iridescence>0,R=E.sheen>0,w=E.transmission>0,j=Dt&&!!E.anisotropyMap,rt=Wt&&!!E.clearcoatMap,it=Wt&&!!E.clearcoatNormalMap,at=Wt&&!!E.clearcoatRoughnessMap,Ct=re&&!!E.iridescenceMap,lt=re&&!!E.iridescenceThicknessMap,K=R&&!!E.sheenColorMap,D=R&&!!E.sheenRoughnessMap,et=!!E.specularMap,xt=!!E.specularColorMap,ft=!!E.specularIntensityMap,_t=w&&!!E.transmissionMap,Bt=w&&!!E.thicknessMap,Yt=!!E.gradientMap,B=!!E.alphaMap,gt=E.alphaTest>0,Y=!!E.alphaHash,st=!!E.extensions,vt=!!U.attributes.uv1,Gt=!!U.attributes.uv2,Qt=!!U.attributes.uv3;let ee=Zn;return E.toneMapped&&(Tt===null||Tt.isXRRenderTarget===!0)&&(ee=r.toneMapping),{isWebGL2:h,shaderID:q,shaderType:E.type,shaderName:E.name,vertexShader:ct,fragmentShader:dt,defines:E.defines,customVertexShaderID:pt,customFragmentShaderID:bt,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:f,instancing:At,instancingColor:At&&P.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:Tt===null?r.outputColorSpace:Tt.isXRRenderTarget===!0?Tt.texture.colorSpace:gn,map:Kt,matcap:te,envMap:Lt,envMapMode:Lt&&X.mapping,envMapCubeUVHeight:G,aoMap:L,lightMap:ut,bumpMap:tt,normalMap:ot,displacementMap:d&&nt,emissiveMap:Rt,normalMapObjectSpace:ot&&E.normalMapType===dd,normalMapTangentSpace:ot&&E.normalMapType===Vr,metalnessMap:yt,roughnessMap:St,anisotropy:Dt,anisotropyMap:j,clearcoat:Wt,clearcoatMap:rt,clearcoatNormalMap:it,clearcoatRoughnessMap:at,iridescence:re,iridescenceMap:Ct,iridescenceThicknessMap:lt,sheen:R,sheenColorMap:K,sheenRoughnessMap:D,specularMap:et,specularColorMap:xt,specularIntensityMap:ft,transmission:w,transmissionMap:_t,thicknessMap:Bt,gradientMap:Yt,opaque:E.transparent===!1&&E.blending===ts,alphaMap:B,alphaTest:gt,alphaHash:Y,combine:E.combine,mapUv:Kt&&v(E.map.channel),aoMapUv:L&&v(E.aoMap.channel),lightMapUv:ut&&v(E.lightMap.channel),bumpMapUv:tt&&v(E.bumpMap.channel),normalMapUv:ot&&v(E.normalMap.channel),displacementMapUv:nt&&v(E.displacementMap.channel),emissiveMapUv:Rt&&v(E.emissiveMap.channel),metalnessMapUv:yt&&v(E.metalnessMap.channel),roughnessMapUv:St&&v(E.roughnessMap.channel),anisotropyMapUv:j&&v(E.anisotropyMap.channel),clearcoatMapUv:rt&&v(E.clearcoatMap.channel),clearcoatNormalMapUv:it&&v(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:at&&v(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Ct&&v(E.iridescenceMap.channel),iridescenceThicknessMapUv:lt&&v(E.iridescenceThicknessMap.channel),sheenColorMapUv:K&&v(E.sheenColorMap.channel),sheenRoughnessMapUv:D&&v(E.sheenRoughnessMap.channel),specularMapUv:et&&v(E.specularMap.channel),specularColorMapUv:xt&&v(E.specularColorMap.channel),specularIntensityMapUv:ft&&v(E.specularIntensityMap.channel),transmissionMapUv:_t&&v(E.transmissionMap.channel),thicknessMapUv:Bt&&v(E.thicknessMap.channel),alphaMapUv:B&&v(E.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(ot||Dt),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,vertexUv1s:vt,vertexUv2s:Gt,vertexUv3s:Qt,pointsUvs:P.isPoints===!0&&!!U.attributes.uv&&(Kt||B),fog:!!F,useFog:E.fog===!0,fogExp2:F&&F.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:P.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:z,morphTextureStride:V,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:r.shadowMap.enabled&&k.length>0,shadowMapType:r.shadowMap.type,toneMapping:ee,useLegacyLights:r._useLegacyLights,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Nn,flipSided:E.side===Be,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionDerivatives:st&&E.extensions.derivatives===!0,extensionFragDepth:st&&E.extensions.fragDepth===!0,extensionDrawBuffers:st&&E.extensions.drawBuffers===!0,extensionShaderTextureLOD:st&&E.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),customProgramCacheKey:E.customProgramCacheKey()}}function p(E){const T=[];if(E.shaderID?T.push(E.shaderID):(T.push(E.customVertexShaderID),T.push(E.customFragmentShaderID)),E.defines!==void 0)for(const k in E.defines)T.push(k),T.push(E.defines[k]);return E.isRawShaderMaterial===!1&&(x(T,E),_(T,E),T.push(r.outputColorSpace)),T.push(E.customProgramCacheKey),T.join()}function x(E,T){E.push(T.precision),E.push(T.outputColorSpace),E.push(T.envMapMode),E.push(T.envMapCubeUVHeight),E.push(T.mapUv),E.push(T.alphaMapUv),E.push(T.lightMapUv),E.push(T.aoMapUv),E.push(T.bumpMapUv),E.push(T.normalMapUv),E.push(T.displacementMapUv),E.push(T.emissiveMapUv),E.push(T.metalnessMapUv),E.push(T.roughnessMapUv),E.push(T.anisotropyMapUv),E.push(T.clearcoatMapUv),E.push(T.clearcoatNormalMapUv),E.push(T.clearcoatRoughnessMapUv),E.push(T.iridescenceMapUv),E.push(T.iridescenceThicknessMapUv),E.push(T.sheenColorMapUv),E.push(T.sheenRoughnessMapUv),E.push(T.specularMapUv),E.push(T.specularColorMapUv),E.push(T.specularIntensityMapUv),E.push(T.transmissionMapUv),E.push(T.thicknessMapUv),E.push(T.combine),E.push(T.fogExp2),E.push(T.sizeAttenuation),E.push(T.morphTargetsCount),E.push(T.morphAttributeCount),E.push(T.numDirLights),E.push(T.numPointLights),E.push(T.numSpotLights),E.push(T.numSpotLightMaps),E.push(T.numHemiLights),E.push(T.numRectAreaLights),E.push(T.numDirLightShadows),E.push(T.numPointLightShadows),E.push(T.numSpotLightShadows),E.push(T.numSpotLightShadowsWithMaps),E.push(T.shadowMapType),E.push(T.toneMapping),E.push(T.numClippingPlanes),E.push(T.numClipIntersection),E.push(T.depthPacking)}function _(E,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),E.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.skinning&&a.enable(4),T.morphTargets&&a.enable(5),T.morphNormals&&a.enable(6),T.morphColors&&a.enable(7),T.premultipliedAlpha&&a.enable(8),T.shadowMapEnabled&&a.enable(9),T.useLegacyLights&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),E.push(a.mask)}function y(E){const T=m[E.type];let k;if(T){const Z=fn[T];k=nf.clone(Z.uniforms)}else k=E.uniforms;return k}function S(E,T){let k;for(let Z=0,P=c.length;Z<P;Z++){const F=c[Z];if(F.cacheKey===T){k=F,++k.usedTimes;break}}return k===void 0&&(k=new fv(r,T,E,s),c.push(k)),k}function A(E){if(--E.usedTimes===0){const T=c.indexOf(E);c[T]=c[c.length-1],c.pop(),E.destroy()}}function b(E){l.remove(E)}function I(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:y,acquireProgram:S,releaseProgram:A,releaseShaderCache:b,programs:c,dispose:I}}function _v(){let r=new WeakMap;function t(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function e(s){r.delete(s)}function n(s,o,a){r.get(s)[o]=a}function i(){r=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function xv(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function ic(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function sc(){const r=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function o(u,d,f,m,v,g){let p=r[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:m,renderOrder:u.renderOrder,z:v,group:g},r[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=m,p.renderOrder=u.renderOrder,p.z=v,p.group=g),t++,p}function a(u,d,f,m,v,g){const p=o(u,d,f,m,v,g);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):e.push(p)}function l(u,d,f,m,v,g){const p=o(u,d,f,m,v,g);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):e.unshift(p)}function c(u,d){e.length>1&&e.sort(u||xv),n.length>1&&n.sort(d||ic),i.length>1&&i.sort(d||ic)}function h(){for(let u=t,d=r.length;u<d;u++){const f=r[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:h,sort:c}}function yv(){let r=new WeakMap;function t(n,i){const s=r.get(n);let o;return s===void 0?(o=new sc,r.set(n,[o])):i>=s.length?(o=new sc,s.push(o)):o=s[i],o}function e(){r=new WeakMap}return{get:t,dispose:e}}function Mv(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new N,color:new Ut};break;case"SpotLight":e={position:new N,direction:new N,color:new Ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new N,color:new Ut,distance:0,decay:0};break;case"HemisphereLight":e={direction:new N,skyColor:new Ut,groundColor:new Ut};break;case"RectAreaLight":e={color:new Ut,position:new N,halfWidth:new N,halfHeight:new N};break}return r[t.id]=e,e}}}function Sv(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let Ev=0;function wv(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function bv(r,t){const e=new Mv,n=Sv(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let h=0;h<9;h++)i.probe.push(new N);const s=new N,o=new Pt,a=new Pt;function l(h,u){let d=0,f=0,m=0;for(let k=0;k<9;k++)i.probe[k].set(0,0,0);let v=0,g=0,p=0,x=0,_=0,y=0,S=0,A=0,b=0,I=0;h.sort(wv);const E=u===!0?Math.PI:1;for(let k=0,Z=h.length;k<Z;k++){const P=h[k],F=P.color,U=P.intensity,O=P.distance,X=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)d+=F.r*U*E,f+=F.g*U*E,m+=F.b*U*E;else if(P.isLightProbe)for(let G=0;G<9;G++)i.probe[G].addScaledVector(P.sh.coefficients[G],U);else if(P.isDirectionalLight){const G=e.get(P);if(G.color.copy(P.color).multiplyScalar(P.intensity*E),P.castShadow){const q=P.shadow,Q=n.get(P);Q.shadowBias=q.bias,Q.shadowNormalBias=q.normalBias,Q.shadowRadius=q.radius,Q.shadowMapSize=q.mapSize,i.directionalShadow[v]=Q,i.directionalShadowMap[v]=X,i.directionalShadowMatrix[v]=P.shadow.matrix,y++}i.directional[v]=G,v++}else if(P.isSpotLight){const G=e.get(P);G.position.setFromMatrixPosition(P.matrixWorld),G.color.copy(F).multiplyScalar(U*E),G.distance=O,G.coneCos=Math.cos(P.angle),G.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),G.decay=P.decay,i.spot[p]=G;const q=P.shadow;if(P.map&&(i.spotLightMap[b]=P.map,b++,q.updateMatrices(P),P.castShadow&&I++),i.spotLightMatrix[p]=q.matrix,P.castShadow){const Q=n.get(P);Q.shadowBias=q.bias,Q.shadowNormalBias=q.normalBias,Q.shadowRadius=q.radius,Q.shadowMapSize=q.mapSize,i.spotShadow[p]=Q,i.spotShadowMap[p]=X,A++}p++}else if(P.isRectAreaLight){const G=e.get(P);G.color.copy(F).multiplyScalar(U),G.halfWidth.set(P.width*.5,0,0),G.halfHeight.set(0,P.height*.5,0),i.rectArea[x]=G,x++}else if(P.isPointLight){const G=e.get(P);if(G.color.copy(P.color).multiplyScalar(P.intensity*E),G.distance=P.distance,G.decay=P.decay,P.castShadow){const q=P.shadow,Q=n.get(P);Q.shadowBias=q.bias,Q.shadowNormalBias=q.normalBias,Q.shadowRadius=q.radius,Q.shadowMapSize=q.mapSize,Q.shadowCameraNear=q.camera.near,Q.shadowCameraFar=q.camera.far,i.pointShadow[g]=Q,i.pointShadowMap[g]=X,i.pointShadowMatrix[g]=P.shadow.matrix,S++}i.point[g]=G,g++}else if(P.isHemisphereLight){const G=e.get(P);G.skyColor.copy(P.color).multiplyScalar(U*E),G.groundColor.copy(P.groundColor).multiplyScalar(U*E),i.hemi[_]=G,_++}}x>0&&(t.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=mt.LTC_FLOAT_1,i.rectAreaLTC2=mt.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=mt.LTC_HALF_1,i.rectAreaLTC2=mt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=f,i.ambient[2]=m;const T=i.hash;(T.directionalLength!==v||T.pointLength!==g||T.spotLength!==p||T.rectAreaLength!==x||T.hemiLength!==_||T.numDirectionalShadows!==y||T.numPointShadows!==S||T.numSpotShadows!==A||T.numSpotMaps!==b)&&(i.directional.length=v,i.spot.length=p,i.rectArea.length=x,i.point.length=g,i.hemi.length=_,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=A,i.spotShadowMap.length=A,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=A+b-I,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=I,T.directionalLength=v,T.pointLength=g,T.spotLength=p,T.rectAreaLength=x,T.hemiLength=_,T.numDirectionalShadows=y,T.numPointShadows=S,T.numSpotShadows=A,T.numSpotMaps=b,i.version=Ev++)}function c(h,u){let d=0,f=0,m=0,v=0,g=0;const p=u.matrixWorldInverse;for(let x=0,_=h.length;x<_;x++){const y=h[x];if(y.isDirectionalLight){const S=i.directional[d];S.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(p),d++}else if(y.isSpotLight){const S=i.spot[m];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(p),m++}else if(y.isRectAreaLight){const S=i.rectArea[v];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(p),a.identity(),o.copy(y.matrixWorld),o.premultiply(p),a.extractRotation(o),S.halfWidth.set(y.width*.5,0,0),S.halfHeight.set(0,y.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),v++}else if(y.isPointLight){const S=i.point[f];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(p),f++}else if(y.isHemisphereLight){const S=i.hemi[g];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(p),g++}}}return{setup:l,setupView:c,state:i}}function rc(r,t){const e=new bv(r,t),n=[],i=[];function s(){n.length=0,i.length=0}function o(u){n.push(u)}function a(u){i.push(u)}function l(u){e.setup(n,u)}function c(u){e.setupView(n,u)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Tv(r,t){let e=new WeakMap;function n(s,o=0){const a=e.get(s);let l;return a===void 0?(l=new rc(r,t),e.set(s,[l])):o>=a.length?(l=new rc(r,t),a.push(l)):l=a[o],l}function i(){e=new WeakMap}return{get:n,dispose:i}}class Av extends ri{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=hd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Cv extends ri{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Rv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Pv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Lv(r,t,e){let n=new ya;const i=new ht,s=new ht,o=new Jt,a=new Av({depthPacking:ud}),l=new Cv,c={},h=e.maxTextureSize,u={[Qn]:Be,[Be]:Qn,[Nn]:Nn},d=new Si({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ht},radius:{value:4}},vertexShader:Rv,fragmentShader:Pv}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const m=new Ge;m.setAttribute("position",new mn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Oe(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ih;let p=this.type;this.render=function(S,A,b){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||S.length===0)return;const I=r.getRenderTarget(),E=r.getActiveCubeFace(),T=r.getActiveMipmapLevel(),k=r.state;k.setBlending(Kn),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const Z=p!==Ln&&this.type===Ln,P=p===Ln&&this.type!==Ln;for(let F=0,U=S.length;F<U;F++){const O=S[F],X=O.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",O,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;i.copy(X.mapSize);const G=X.getFrameExtents();if(i.multiply(G),s.copy(X.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/G.x),i.x=s.x*G.x,X.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/G.y),i.y=s.y*G.y,X.mapSize.y=s.y)),X.map===null||Z===!0||P===!0){const Q=this.type!==Ln?{minFilter:we,magFilter:we}:{};X.map!==null&&X.map.dispose(),X.map=new Mi(i.x,i.y,Q),X.map.texture.name=O.name+".shadowMap",X.camera.updateProjectionMatrix()}r.setRenderTarget(X.map),r.clear();const q=X.getViewportCount();for(let Q=0;Q<q;Q++){const z=X.getViewport(Q);o.set(s.x*z.x,s.y*z.y,s.x*z.z,s.y*z.w),k.viewport(o),X.updateMatrices(O,Q),n=X.getFrustum(),y(A,b,X.camera,O,this.type)}X.isPointLightShadow!==!0&&this.type===Ln&&x(X,b),X.needsUpdate=!1}p=this.type,g.needsUpdate=!1,r.setRenderTarget(I,E,T)};function x(S,A){const b=t.update(v);d.defines.VSM_SAMPLES!==S.blurSamples&&(d.defines.VSM_SAMPLES=S.blurSamples,f.defines.VSM_SAMPLES=S.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new Mi(i.x,i.y)),d.uniforms.shadow_pass.value=S.map.texture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,r.setRenderTarget(S.mapPass),r.clear(),r.renderBufferDirect(A,null,b,d,v,null),f.uniforms.shadow_pass.value=S.mapPass.texture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,r.setRenderTarget(S.map),r.clear(),r.renderBufferDirect(A,null,b,f,v,null)}function _(S,A,b,I){let E=null;const T=b.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(T!==void 0)E=T;else if(E=b.isPointLight===!0?l:a,r.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const k=E.uuid,Z=A.uuid;let P=c[k];P===void 0&&(P={},c[k]=P);let F=P[Z];F===void 0&&(F=E.clone(),P[Z]=F),E=F}if(E.visible=A.visible,E.wireframe=A.wireframe,I===Ln?E.side=A.shadowSide!==null?A.shadowSide:A.side:E.side=A.shadowSide!==null?A.shadowSide:u[A.side],E.alphaMap=A.alphaMap,E.alphaTest=A.alphaTest,E.map=A.map,E.clipShadows=A.clipShadows,E.clippingPlanes=A.clippingPlanes,E.clipIntersection=A.clipIntersection,E.displacementMap=A.displacementMap,E.displacementScale=A.displacementScale,E.displacementBias=A.displacementBias,E.wireframeLinewidth=A.wireframeLinewidth,E.linewidth=A.linewidth,b.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const k=r.properties.get(E);k.light=b}return E}function y(S,A,b,I,E){if(S.visible===!1)return;if(S.layers.test(A.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&E===Ln)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,S.matrixWorld);const Z=t.update(S),P=S.material;if(Array.isArray(P)){const F=Z.groups;for(let U=0,O=F.length;U<O;U++){const X=F[U],G=P[X.materialIndex];if(G&&G.visible){const q=_(S,G,I,E);r.renderBufferDirect(b,null,Z,q,S,X)}}}else if(P.visible){const F=_(S,P,I,E);r.renderBufferDirect(b,null,Z,F,S,null)}}const k=S.children;for(let Z=0,P=k.length;Z<P;Z++)y(k[Z],A,b,I,E)}}function Iv(r,t,e){const n=e.isWebGL2;function i(){let B=!1;const gt=new Jt;let Y=null;const st=new Jt(0,0,0,0);return{setMask:function(vt){Y!==vt&&!B&&(r.colorMask(vt,vt,vt,vt),Y=vt)},setLocked:function(vt){B=vt},setClear:function(vt,Gt,Qt,ee,Bn){Bn===!0&&(vt*=ee,Gt*=ee,Qt*=ee),gt.set(vt,Gt,Qt,ee),st.equals(gt)===!1&&(r.clearColor(vt,Gt,Qt,ee),st.copy(gt))},reset:function(){B=!1,Y=null,st.set(-1,0,0,0)}}}function s(){let B=!1,gt=null,Y=null,st=null;return{setTest:function(vt){vt?Tt(r.DEPTH_TEST):At(r.DEPTH_TEST)},setMask:function(vt){gt!==vt&&!B&&(r.depthMask(vt),gt=vt)},setFunc:function(vt){if(Y!==vt){switch(vt){case Ou:r.depthFunc(r.NEVER);break;case Bu:r.depthFunc(r.ALWAYS);break;case zu:r.depthFunc(r.LESS);break;case Ko:r.depthFunc(r.LEQUAL);break;case ku:r.depthFunc(r.EQUAL);break;case Vu:r.depthFunc(r.GEQUAL);break;case Hu:r.depthFunc(r.GREATER);break;case Gu:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Y=vt}},setLocked:function(vt){B=vt},setClear:function(vt){st!==vt&&(r.clearDepth(vt),st=vt)},reset:function(){B=!1,gt=null,Y=null,st=null}}}function o(){let B=!1,gt=null,Y=null,st=null,vt=null,Gt=null,Qt=null,ee=null,Bn=null;return{setTest:function(ne){B||(ne?Tt(r.STENCIL_TEST):At(r.STENCIL_TEST))},setMask:function(ne){gt!==ne&&!B&&(r.stencilMask(ne),gt=ne)},setFunc:function(ne,cn,Re){(Y!==ne||st!==cn||vt!==Re)&&(r.stencilFunc(ne,cn,Re),Y=ne,st=cn,vt=Re)},setOp:function(ne,cn,Re){(Gt!==ne||Qt!==cn||ee!==Re)&&(r.stencilOp(ne,cn,Re),Gt=ne,Qt=cn,ee=Re)},setLocked:function(ne){B=ne},setClear:function(ne){Bn!==ne&&(r.clearStencil(ne),Bn=ne)},reset:function(){B=!1,gt=null,Y=null,st=null,vt=null,Gt=null,Qt=null,ee=null,Bn=null}}}const a=new i,l=new s,c=new o,h=new WeakMap,u=new WeakMap;let d={},f={},m=new WeakMap,v=[],g=null,p=!1,x=null,_=null,y=null,S=null,A=null,b=null,I=null,E=!1,T=null,k=null,Z=null,P=null,F=null;const U=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,X=0;const G=r.getParameter(r.VERSION);G.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(G)[1]),O=X>=1):G.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),O=X>=2);let q=null,Q={};const z=r.getParameter(r.SCISSOR_BOX),V=r.getParameter(r.VIEWPORT),ct=new Jt().fromArray(z),dt=new Jt().fromArray(V);function pt(B,gt,Y,st){const vt=new Uint8Array(4),Gt=r.createTexture();r.bindTexture(B,Gt),r.texParameteri(B,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(B,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Qt=0;Qt<Y;Qt++)n&&(B===r.TEXTURE_3D||B===r.TEXTURE_2D_ARRAY)?r.texImage3D(gt,0,r.RGBA,1,1,st,0,r.RGBA,r.UNSIGNED_BYTE,vt):r.texImage2D(gt+Qt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,vt);return Gt}const bt={};bt[r.TEXTURE_2D]=pt(r.TEXTURE_2D,r.TEXTURE_2D,1),bt[r.TEXTURE_CUBE_MAP]=pt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(bt[r.TEXTURE_2D_ARRAY]=pt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),bt[r.TEXTURE_3D]=pt(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Tt(r.DEPTH_TEST),l.setFunc(Ko),nt(!1),Rt(Wa),Tt(r.CULL_FACE),tt(Kn);function Tt(B){d[B]!==!0&&(r.enable(B),d[B]=!0)}function At(B){d[B]!==!1&&(r.disable(B),d[B]=!1)}function Kt(B,gt){return f[B]!==gt?(r.bindFramebuffer(B,gt),f[B]=gt,n&&(B===r.DRAW_FRAMEBUFFER&&(f[r.FRAMEBUFFER]=gt),B===r.FRAMEBUFFER&&(f[r.DRAW_FRAMEBUFFER]=gt)),!0):!1}function te(B,gt){let Y=v,st=!1;if(B)if(Y=m.get(gt),Y===void 0&&(Y=[],m.set(gt,Y)),B.isWebGLMultipleRenderTargets){const vt=B.texture;if(Y.length!==vt.length||Y[0]!==r.COLOR_ATTACHMENT0){for(let Gt=0,Qt=vt.length;Gt<Qt;Gt++)Y[Gt]=r.COLOR_ATTACHMENT0+Gt;Y.length=vt.length,st=!0}}else Y[0]!==r.COLOR_ATTACHMENT0&&(Y[0]=r.COLOR_ATTACHMENT0,st=!0);else Y[0]!==r.BACK&&(Y[0]=r.BACK,st=!0);st&&(e.isWebGL2?r.drawBuffers(Y):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(Y))}function Lt(B){return g!==B?(r.useProgram(B),g=B,!0):!1}const L={[ji]:r.FUNC_ADD,[Tu]:r.FUNC_SUBTRACT,[Au]:r.FUNC_REVERSE_SUBTRACT};if(n)L[Ya]=r.MIN,L[Ka]=r.MAX;else{const B=t.get("EXT_blend_minmax");B!==null&&(L[Ya]=B.MIN_EXT,L[Ka]=B.MAX_EXT)}const ut={[Cu]:r.ZERO,[Ru]:r.ONE,[Pu]:r.SRC_COLOR,[sh]:r.SRC_ALPHA,[Fu]:r.SRC_ALPHA_SATURATE,[Nu]:r.DST_COLOR,[Iu]:r.DST_ALPHA,[Lu]:r.ONE_MINUS_SRC_COLOR,[rh]:r.ONE_MINUS_SRC_ALPHA,[Uu]:r.ONE_MINUS_DST_COLOR,[Du]:r.ONE_MINUS_DST_ALPHA};function tt(B,gt,Y,st,vt,Gt,Qt,ee){if(B===Kn){p===!0&&(At(r.BLEND),p=!1);return}if(p===!1&&(Tt(r.BLEND),p=!0),B!==bu){if(B!==x||ee!==E){if((_!==ji||A!==ji)&&(r.blendEquation(r.FUNC_ADD),_=ji,A=ji),ee)switch(B){case ts:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Xa:r.blendFunc(r.ONE,r.ONE);break;case qa:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case ja:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case ts:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Xa:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case qa:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case ja:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}y=null,S=null,b=null,I=null,x=B,E=ee}return}vt=vt||gt,Gt=Gt||Y,Qt=Qt||st,(gt!==_||vt!==A)&&(r.blendEquationSeparate(L[gt],L[vt]),_=gt,A=vt),(Y!==y||st!==S||Gt!==b||Qt!==I)&&(r.blendFuncSeparate(ut[Y],ut[st],ut[Gt],ut[Qt]),y=Y,S=st,b=Gt,I=Qt),x=B,E=!1}function ot(B,gt){B.side===Nn?At(r.CULL_FACE):Tt(r.CULL_FACE);let Y=B.side===Be;gt&&(Y=!Y),nt(Y),B.blending===ts&&B.transparent===!1?tt(Kn):tt(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.premultipliedAlpha),l.setFunc(B.depthFunc),l.setTest(B.depthTest),l.setMask(B.depthWrite),a.setMask(B.colorWrite);const st=B.stencilWrite;c.setTest(st),st&&(c.setMask(B.stencilWriteMask),c.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),c.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),St(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?Tt(r.SAMPLE_ALPHA_TO_COVERAGE):At(r.SAMPLE_ALPHA_TO_COVERAGE)}function nt(B){T!==B&&(B?r.frontFace(r.CW):r.frontFace(r.CCW),T=B)}function Rt(B){B!==Su?(Tt(r.CULL_FACE),B!==k&&(B===Wa?r.cullFace(r.BACK):B===Eu?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):At(r.CULL_FACE),k=B}function yt(B){B!==Z&&(O&&r.lineWidth(B),Z=B)}function St(B,gt,Y){B?(Tt(r.POLYGON_OFFSET_FILL),(P!==gt||F!==Y)&&(r.polygonOffset(gt,Y),P=gt,F=Y)):At(r.POLYGON_OFFSET_FILL)}function Dt(B){B?Tt(r.SCISSOR_TEST):At(r.SCISSOR_TEST)}function Wt(B){B===void 0&&(B=r.TEXTURE0+U-1),q!==B&&(r.activeTexture(B),q=B)}function re(B,gt,Y){Y===void 0&&(q===null?Y=r.TEXTURE0+U-1:Y=q);let st=Q[Y];st===void 0&&(st={type:void 0,texture:void 0},Q[Y]=st),(st.type!==B||st.texture!==gt)&&(q!==Y&&(r.activeTexture(Y),q=Y),r.bindTexture(B,gt||bt[B]),st.type=B,st.texture=gt)}function R(){const B=Q[q];B!==void 0&&B.type!==void 0&&(r.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function w(){try{r.compressedTexImage2D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function j(){try{r.compressedTexImage3D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function rt(){try{r.texSubImage2D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function it(){try{r.texSubImage3D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function at(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ct(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function lt(){try{r.texStorage2D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function K(){try{r.texStorage3D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function D(){try{r.texImage2D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function et(){try{r.texImage3D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function xt(B){ct.equals(B)===!1&&(r.scissor(B.x,B.y,B.z,B.w),ct.copy(B))}function ft(B){dt.equals(B)===!1&&(r.viewport(B.x,B.y,B.z,B.w),dt.copy(B))}function _t(B,gt){let Y=u.get(gt);Y===void 0&&(Y=new WeakMap,u.set(gt,Y));let st=Y.get(B);st===void 0&&(st=r.getUniformBlockIndex(gt,B.name),Y.set(B,st))}function Bt(B,gt){const st=u.get(gt).get(B);h.get(gt)!==st&&(r.uniformBlockBinding(gt,st,B.__bindingPointIndex),h.set(gt,st))}function Yt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),n===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),d={},q=null,Q={},f={},m=new WeakMap,v=[],g=null,p=!1,x=null,_=null,y=null,S=null,A=null,b=null,I=null,E=!1,T=null,k=null,Z=null,P=null,F=null,ct.set(0,0,r.canvas.width,r.canvas.height),dt.set(0,0,r.canvas.width,r.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Tt,disable:At,bindFramebuffer:Kt,drawBuffers:te,useProgram:Lt,setBlending:tt,setMaterial:ot,setFlipSided:nt,setCullFace:Rt,setLineWidth:yt,setPolygonOffset:St,setScissorTest:Dt,activeTexture:Wt,bindTexture:re,unbindTexture:R,compressedTexImage2D:w,compressedTexImage3D:j,texImage2D:D,texImage3D:et,updateUBOMapping:_t,uniformBlockBinding:Bt,texStorage2D:lt,texStorage3D:K,texSubImage2D:rt,texSubImage3D:it,compressedTexSubImage2D:at,compressedTexSubImage3D:Ct,scissor:xt,viewport:ft,reset:Yt}}function Dv(r,t,e,n,i,s,o){const a=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,h=i.maxTextureSize,u=i.maxSamples,d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new WeakMap;let v;const g=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(R,w){return p?new OffscreenCanvas(R,w):Os("canvas")}function _(R,w,j,rt){let it=1;if((R.width>rt||R.height>rt)&&(it=rt/Math.max(R.width,R.height)),it<1||w===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap){const at=w?Ur:Math.floor,Ct=at(it*R.width),lt=at(it*R.height);v===void 0&&(v=x(Ct,lt));const K=j?x(Ct,lt):v;return K.width=Ct,K.height=lt,K.getContext("2d").drawImage(R,0,0,Ct,lt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+Ct+"x"+lt+")."),K}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function y(R){return Qo(R.width)&&Qo(R.height)}function S(R){return a?!1:R.wrapS!==He||R.wrapT!==He||R.minFilter!==we&&R.minFilter!==je}function A(R,w){return R.generateMipmaps&&w&&R.minFilter!==we&&R.minFilter!==je}function b(R){r.generateMipmap(R)}function I(R,w,j,rt,it=!1){if(a===!1)return w;if(R!==null){if(r[R]!==void 0)return r[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let at=w;return w===r.RED&&(j===r.FLOAT&&(at=r.R32F),j===r.HALF_FLOAT&&(at=r.R16F),j===r.UNSIGNED_BYTE&&(at=r.R8)),w===r.RED_INTEGER&&(j===r.UNSIGNED_BYTE&&(at=r.R8UI),j===r.UNSIGNED_SHORT&&(at=r.R16UI),j===r.UNSIGNED_INT&&(at=r.R32UI),j===r.BYTE&&(at=r.R8I),j===r.SHORT&&(at=r.R16I),j===r.INT&&(at=r.R32I)),w===r.RG&&(j===r.FLOAT&&(at=r.RG32F),j===r.HALF_FLOAT&&(at=r.RG16F),j===r.UNSIGNED_BYTE&&(at=r.RG8)),w===r.RGBA&&(j===r.FLOAT&&(at=r.RGBA32F),j===r.HALF_FLOAT&&(at=r.RGBA16F),j===r.UNSIGNED_BYTE&&(at=rt===zt&&it===!1?r.SRGB8_ALPHA8:r.RGBA8),j===r.UNSIGNED_SHORT_4_4_4_4&&(at=r.RGBA4),j===r.UNSIGNED_SHORT_5_5_5_1&&(at=r.RGB5_A1)),(at===r.R16F||at===r.R32F||at===r.RG16F||at===r.RG32F||at===r.RGBA16F||at===r.RGBA32F)&&t.get("EXT_color_buffer_float"),at}function E(R,w,j){return A(R,j)===!0||R.isFramebufferTexture&&R.minFilter!==we&&R.minFilter!==je?Math.log2(Math.max(w.width,w.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?w.mipmaps.length:1}function T(R){return R===we||R===Za||R===Jr?r.NEAREST:r.LINEAR}function k(R){const w=R.target;w.removeEventListener("dispose",k),P(w),w.isVideoTexture&&m.delete(w)}function Z(R){const w=R.target;w.removeEventListener("dispose",Z),U(w)}function P(R){const w=n.get(R);if(w.__webglInit===void 0)return;const j=R.source,rt=g.get(j);if(rt){const it=rt[w.__cacheKey];it.usedTimes--,it.usedTimes===0&&F(R),Object.keys(rt).length===0&&g.delete(j)}n.remove(R)}function F(R){const w=n.get(R);r.deleteTexture(w.__webglTexture);const j=R.source,rt=g.get(j);delete rt[w.__cacheKey],o.memory.textures--}function U(R){const w=R.texture,j=n.get(R),rt=n.get(w);if(rt.__webglTexture!==void 0&&(r.deleteTexture(rt.__webglTexture),o.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let it=0;it<6;it++){if(Array.isArray(j.__webglFramebuffer[it]))for(let at=0;at<j.__webglFramebuffer[it].length;at++)r.deleteFramebuffer(j.__webglFramebuffer[it][at]);else r.deleteFramebuffer(j.__webglFramebuffer[it]);j.__webglDepthbuffer&&r.deleteRenderbuffer(j.__webglDepthbuffer[it])}else{if(Array.isArray(j.__webglFramebuffer))for(let it=0;it<j.__webglFramebuffer.length;it++)r.deleteFramebuffer(j.__webglFramebuffer[it]);else r.deleteFramebuffer(j.__webglFramebuffer);if(j.__webglDepthbuffer&&r.deleteRenderbuffer(j.__webglDepthbuffer),j.__webglMultisampledFramebuffer&&r.deleteFramebuffer(j.__webglMultisampledFramebuffer),j.__webglColorRenderbuffer)for(let it=0;it<j.__webglColorRenderbuffer.length;it++)j.__webglColorRenderbuffer[it]&&r.deleteRenderbuffer(j.__webglColorRenderbuffer[it]);j.__webglDepthRenderbuffer&&r.deleteRenderbuffer(j.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let it=0,at=w.length;it<at;it++){const Ct=n.get(w[it]);Ct.__webglTexture&&(r.deleteTexture(Ct.__webglTexture),o.memory.textures--),n.remove(w[it])}n.remove(w),n.remove(R)}let O=0;function X(){O=0}function G(){const R=O;return R>=l&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+l),O+=1,R}function q(R){const w=[];return w.push(R.wrapS),w.push(R.wrapT),w.push(R.wrapR||0),w.push(R.magFilter),w.push(R.minFilter),w.push(R.anisotropy),w.push(R.internalFormat),w.push(R.format),w.push(R.type),w.push(R.generateMipmaps),w.push(R.premultiplyAlpha),w.push(R.flipY),w.push(R.unpackAlignment),w.push(R.colorSpace),w.join()}function Q(R,w){const j=n.get(R);if(R.isVideoTexture&&Wt(R),R.isRenderTargetTexture===!1&&R.version>0&&j.__version!==R.version){const rt=R.image;if(rt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(rt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Kt(j,R,w);return}}e.bindTexture(r.TEXTURE_2D,j.__webglTexture,r.TEXTURE0+w)}function z(R,w){const j=n.get(R);if(R.version>0&&j.__version!==R.version){Kt(j,R,w);return}e.bindTexture(r.TEXTURE_2D_ARRAY,j.__webglTexture,r.TEXTURE0+w)}function V(R,w){const j=n.get(R);if(R.version>0&&j.__version!==R.version){Kt(j,R,w);return}e.bindTexture(r.TEXTURE_3D,j.__webglTexture,r.TEXTURE0+w)}function ct(R,w){const j=n.get(R);if(R.version>0&&j.__version!==R.version){te(j,R,w);return}e.bindTexture(r.TEXTURE_CUBE_MAP,j.__webglTexture,r.TEXTURE0+w)}const dt={[Ns]:r.REPEAT,[He]:r.CLAMP_TO_EDGE,[$o]:r.MIRRORED_REPEAT},pt={[we]:r.NEAREST,[Za]:r.NEAREST_MIPMAP_NEAREST,[Jr]:r.NEAREST_MIPMAP_LINEAR,[je]:r.LINEAR,[$u]:r.LINEAR_MIPMAP_NEAREST,[Us]:r.LINEAR_MIPMAP_LINEAR},bt={[pd]:r.NEVER,[Md]:r.ALWAYS,[md]:r.LESS,[vd]:r.LEQUAL,[gd]:r.EQUAL,[yd]:r.GEQUAL,[_d]:r.GREATER,[xd]:r.NOTEQUAL};function Tt(R,w,j){if(j?(r.texParameteri(R,r.TEXTURE_WRAP_S,dt[w.wrapS]),r.texParameteri(R,r.TEXTURE_WRAP_T,dt[w.wrapT]),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,dt[w.wrapR]),r.texParameteri(R,r.TEXTURE_MAG_FILTER,pt[w.magFilter]),r.texParameteri(R,r.TEXTURE_MIN_FILTER,pt[w.minFilter])):(r.texParameteri(R,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(R,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(w.wrapS!==He||w.wrapT!==He)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(R,r.TEXTURE_MAG_FILTER,T(w.magFilter)),r.texParameteri(R,r.TEXTURE_MIN_FILTER,T(w.minFilter)),w.minFilter!==we&&w.minFilter!==je&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),w.compareFunction&&(r.texParameteri(R,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(R,r.TEXTURE_COMPARE_FUNC,bt[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const rt=t.get("EXT_texture_filter_anisotropic");if(w.magFilter===we||w.minFilter!==Jr&&w.minFilter!==Us||w.type===Un&&t.has("OES_texture_float_linear")===!1||a===!1&&w.type===Fs&&t.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||n.get(w).__currentAnisotropy)&&(r.texParameterf(R,rt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,i.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy)}}function At(R,w){let j=!1;R.__webglInit===void 0&&(R.__webglInit=!0,w.addEventListener("dispose",k));const rt=w.source;let it=g.get(rt);it===void 0&&(it={},g.set(rt,it));const at=q(w);if(at!==R.__cacheKey){it[at]===void 0&&(it[at]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,j=!0),it[at].usedTimes++;const Ct=it[R.__cacheKey];Ct!==void 0&&(it[R.__cacheKey].usedTimes--,Ct.usedTimes===0&&F(w)),R.__cacheKey=at,R.__webglTexture=it[at].texture}return j}function Kt(R,w,j){let rt=r.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(rt=r.TEXTURE_2D_ARRAY),w.isData3DTexture&&(rt=r.TEXTURE_3D);const it=At(R,w),at=w.source;e.bindTexture(rt,R.__webglTexture,r.TEXTURE0+j);const Ct=n.get(at);if(at.version!==Ct.__version||it===!0){e.activeTexture(r.TEXTURE0+j),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,w.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,w.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.NONE);const lt=S(w)&&y(w.image)===!1;let K=_(w.image,lt,!1,h);K=re(w,K);const D=y(K)||a,et=s.convert(w.format,w.colorSpace);let xt=s.convert(w.type),ft=I(w.internalFormat,et,xt,w.colorSpace);Tt(rt,w,D);let _t;const Bt=w.mipmaps,Yt=a&&w.isVideoTexture!==!0,B=Ct.__version===void 0||it===!0,gt=E(w,K,D);if(w.isDepthTexture)ft=r.DEPTH_COMPONENT,a?w.type===Un?ft=r.DEPTH_COMPONENT32F:w.type===qn?ft=r.DEPTH_COMPONENT24:w.type===vi?ft=r.DEPTH24_STENCIL8:ft=r.DEPTH_COMPONENT16:w.type===Un&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===_i&&ft===r.DEPTH_COMPONENT&&w.type!==pa&&w.type!==qn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=qn,xt=s.convert(w.type)),w.format===os&&ft===r.DEPTH_COMPONENT&&(ft=r.DEPTH_STENCIL,w.type!==vi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=vi,xt=s.convert(w.type))),B&&(Yt?e.texStorage2D(r.TEXTURE_2D,1,ft,K.width,K.height):e.texImage2D(r.TEXTURE_2D,0,ft,K.width,K.height,0,et,xt,null));else if(w.isDataTexture)if(Bt.length>0&&D){Yt&&B&&e.texStorage2D(r.TEXTURE_2D,gt,ft,Bt[0].width,Bt[0].height);for(let Y=0,st=Bt.length;Y<st;Y++)_t=Bt[Y],Yt?e.texSubImage2D(r.TEXTURE_2D,Y,0,0,_t.width,_t.height,et,xt,_t.data):e.texImage2D(r.TEXTURE_2D,Y,ft,_t.width,_t.height,0,et,xt,_t.data);w.generateMipmaps=!1}else Yt?(B&&e.texStorage2D(r.TEXTURE_2D,gt,ft,K.width,K.height),e.texSubImage2D(r.TEXTURE_2D,0,0,0,K.width,K.height,et,xt,K.data)):e.texImage2D(r.TEXTURE_2D,0,ft,K.width,K.height,0,et,xt,K.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Yt&&B&&e.texStorage3D(r.TEXTURE_2D_ARRAY,gt,ft,Bt[0].width,Bt[0].height,K.depth);for(let Y=0,st=Bt.length;Y<st;Y++)_t=Bt[Y],w.format!==Ye?et!==null?Yt?e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Y,0,0,0,_t.width,_t.height,K.depth,et,_t.data,0,0):e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Y,ft,_t.width,_t.height,K.depth,0,_t.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Yt?e.texSubImage3D(r.TEXTURE_2D_ARRAY,Y,0,0,0,_t.width,_t.height,K.depth,et,xt,_t.data):e.texImage3D(r.TEXTURE_2D_ARRAY,Y,ft,_t.width,_t.height,K.depth,0,et,xt,_t.data)}else{Yt&&B&&e.texStorage2D(r.TEXTURE_2D,gt,ft,Bt[0].width,Bt[0].height);for(let Y=0,st=Bt.length;Y<st;Y++)_t=Bt[Y],w.format!==Ye?et!==null?Yt?e.compressedTexSubImage2D(r.TEXTURE_2D,Y,0,0,_t.width,_t.height,et,_t.data):e.compressedTexImage2D(r.TEXTURE_2D,Y,ft,_t.width,_t.height,0,_t.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Yt?e.texSubImage2D(r.TEXTURE_2D,Y,0,0,_t.width,_t.height,et,xt,_t.data):e.texImage2D(r.TEXTURE_2D,Y,ft,_t.width,_t.height,0,et,xt,_t.data)}else if(w.isDataArrayTexture)Yt?(B&&e.texStorage3D(r.TEXTURE_2D_ARRAY,gt,ft,K.width,K.height,K.depth),e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,et,xt,K.data)):e.texImage3D(r.TEXTURE_2D_ARRAY,0,ft,K.width,K.height,K.depth,0,et,xt,K.data);else if(w.isData3DTexture)Yt?(B&&e.texStorage3D(r.TEXTURE_3D,gt,ft,K.width,K.height,K.depth),e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,et,xt,K.data)):e.texImage3D(r.TEXTURE_3D,0,ft,K.width,K.height,K.depth,0,et,xt,K.data);else if(w.isFramebufferTexture){if(B)if(Yt)e.texStorage2D(r.TEXTURE_2D,gt,ft,K.width,K.height);else{let Y=K.width,st=K.height;for(let vt=0;vt<gt;vt++)e.texImage2D(r.TEXTURE_2D,vt,ft,Y,st,0,et,xt,null),Y>>=1,st>>=1}}else if(Bt.length>0&&D){Yt&&B&&e.texStorage2D(r.TEXTURE_2D,gt,ft,Bt[0].width,Bt[0].height);for(let Y=0,st=Bt.length;Y<st;Y++)_t=Bt[Y],Yt?e.texSubImage2D(r.TEXTURE_2D,Y,0,0,et,xt,_t):e.texImage2D(r.TEXTURE_2D,Y,ft,et,xt,_t);w.generateMipmaps=!1}else Yt?(B&&e.texStorage2D(r.TEXTURE_2D,gt,ft,K.width,K.height),e.texSubImage2D(r.TEXTURE_2D,0,0,0,et,xt,K)):e.texImage2D(r.TEXTURE_2D,0,ft,et,xt,K);A(w,D)&&b(rt),Ct.__version=at.version,w.onUpdate&&w.onUpdate(w)}R.__version=w.version}function te(R,w,j){if(w.image.length!==6)return;const rt=At(R,w),it=w.source;e.bindTexture(r.TEXTURE_CUBE_MAP,R.__webglTexture,r.TEXTURE0+j);const at=n.get(it);if(it.version!==at.__version||rt===!0){e.activeTexture(r.TEXTURE0+j),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,w.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,w.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.NONE);const Ct=w.isCompressedTexture||w.image[0].isCompressedTexture,lt=w.image[0]&&w.image[0].isDataTexture,K=[];for(let Y=0;Y<6;Y++)!Ct&&!lt?K[Y]=_(w.image[Y],!1,!0,c):K[Y]=lt?w.image[Y].image:w.image[Y],K[Y]=re(w,K[Y]);const D=K[0],et=y(D)||a,xt=s.convert(w.format,w.colorSpace),ft=s.convert(w.type),_t=I(w.internalFormat,xt,ft,w.colorSpace),Bt=a&&w.isVideoTexture!==!0,Yt=at.__version===void 0||rt===!0;let B=E(w,D,et);Tt(r.TEXTURE_CUBE_MAP,w,et);let gt;if(Ct){Bt&&Yt&&e.texStorage2D(r.TEXTURE_CUBE_MAP,B,_t,D.width,D.height);for(let Y=0;Y<6;Y++){gt=K[Y].mipmaps;for(let st=0;st<gt.length;st++){const vt=gt[st];w.format!==Ye?xt!==null?Bt?e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,st,0,0,vt.width,vt.height,xt,vt.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,st,_t,vt.width,vt.height,0,vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Bt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,st,0,0,vt.width,vt.height,xt,ft,vt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,st,_t,vt.width,vt.height,0,xt,ft,vt.data)}}}else{gt=w.mipmaps,Bt&&Yt&&(gt.length>0&&B++,e.texStorage2D(r.TEXTURE_CUBE_MAP,B,_t,K[0].width,K[0].height));for(let Y=0;Y<6;Y++)if(lt){Bt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,K[Y].width,K[Y].height,xt,ft,K[Y].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,_t,K[Y].width,K[Y].height,0,xt,ft,K[Y].data);for(let st=0;st<gt.length;st++){const Gt=gt[st].image[Y].image;Bt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,st+1,0,0,Gt.width,Gt.height,xt,ft,Gt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,st+1,_t,Gt.width,Gt.height,0,xt,ft,Gt.data)}}else{Bt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,xt,ft,K[Y]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,_t,xt,ft,K[Y]);for(let st=0;st<gt.length;st++){const vt=gt[st];Bt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,st+1,0,0,xt,ft,vt.image[Y]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,st+1,_t,xt,ft,vt.image[Y])}}}A(w,et)&&b(r.TEXTURE_CUBE_MAP),at.__version=it.version,w.onUpdate&&w.onUpdate(w)}R.__version=w.version}function Lt(R,w,j,rt,it,at){const Ct=s.convert(j.format,j.colorSpace),lt=s.convert(j.type),K=I(j.internalFormat,Ct,lt,j.colorSpace);if(!n.get(w).__hasExternalTextures){const et=Math.max(1,w.width>>at),xt=Math.max(1,w.height>>at);it===r.TEXTURE_3D||it===r.TEXTURE_2D_ARRAY?e.texImage3D(it,at,K,et,xt,w.depth,0,Ct,lt,null):e.texImage2D(it,at,K,et,xt,0,Ct,lt,null)}e.bindFramebuffer(r.FRAMEBUFFER,R),Dt(w)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,rt,it,n.get(j).__webglTexture,0,St(w)):(it===r.TEXTURE_2D||it>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&it<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,rt,it,n.get(j).__webglTexture,at),e.bindFramebuffer(r.FRAMEBUFFER,null)}function L(R,w,j){if(r.bindRenderbuffer(r.RENDERBUFFER,R),w.depthBuffer&&!w.stencilBuffer){let rt=r.DEPTH_COMPONENT16;if(j||Dt(w)){const it=w.depthTexture;it&&it.isDepthTexture&&(it.type===Un?rt=r.DEPTH_COMPONENT32F:it.type===qn&&(rt=r.DEPTH_COMPONENT24));const at=St(w);Dt(w)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,at,rt,w.width,w.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,at,rt,w.width,w.height)}else r.renderbufferStorage(r.RENDERBUFFER,rt,w.width,w.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,R)}else if(w.depthBuffer&&w.stencilBuffer){const rt=St(w);j&&Dt(w)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,rt,r.DEPTH24_STENCIL8,w.width,w.height):Dt(w)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,rt,r.DEPTH24_STENCIL8,w.width,w.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,w.width,w.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,R)}else{const rt=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let it=0;it<rt.length;it++){const at=rt[it],Ct=s.convert(at.format,at.colorSpace),lt=s.convert(at.type),K=I(at.internalFormat,Ct,lt,at.colorSpace),D=St(w);j&&Dt(w)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,D,K,w.width,w.height):Dt(w)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,D,K,w.width,w.height):r.renderbufferStorage(r.RENDERBUFFER,K,w.width,w.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function ut(R,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,R),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),Q(w.depthTexture,0);const rt=n.get(w.depthTexture).__webglTexture,it=St(w);if(w.depthTexture.format===_i)Dt(w)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,rt,0,it):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,rt,0);else if(w.depthTexture.format===os)Dt(w)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,rt,0,it):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,rt,0);else throw new Error("Unknown depthTexture format")}function tt(R){const w=n.get(R),j=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!w.__autoAllocateDepthBuffer){if(j)throw new Error("target.depthTexture not supported in Cube render targets");ut(w.__webglFramebuffer,R)}else if(j){w.__webglDepthbuffer=[];for(let rt=0;rt<6;rt++)e.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer[rt]),w.__webglDepthbuffer[rt]=r.createRenderbuffer(),L(w.__webglDepthbuffer[rt],R,!1)}else e.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer=r.createRenderbuffer(),L(w.__webglDepthbuffer,R,!1);e.bindFramebuffer(r.FRAMEBUFFER,null)}function ot(R,w,j){const rt=n.get(R);w!==void 0&&Lt(rt.__webglFramebuffer,R,R.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),j!==void 0&&tt(R)}function nt(R){const w=R.texture,j=n.get(R),rt=n.get(w);R.addEventListener("dispose",Z),R.isWebGLMultipleRenderTargets!==!0&&(rt.__webglTexture===void 0&&(rt.__webglTexture=r.createTexture()),rt.__version=w.version,o.memory.textures++);const it=R.isWebGLCubeRenderTarget===!0,at=R.isWebGLMultipleRenderTargets===!0,Ct=y(R)||a;if(it){j.__webglFramebuffer=[];for(let lt=0;lt<6;lt++)if(a&&w.mipmaps&&w.mipmaps.length>0){j.__webglFramebuffer[lt]=[];for(let K=0;K<w.mipmaps.length;K++)j.__webglFramebuffer[lt][K]=r.createFramebuffer()}else j.__webglFramebuffer[lt]=r.createFramebuffer()}else{if(a&&w.mipmaps&&w.mipmaps.length>0){j.__webglFramebuffer=[];for(let lt=0;lt<w.mipmaps.length;lt++)j.__webglFramebuffer[lt]=r.createFramebuffer()}else j.__webglFramebuffer=r.createFramebuffer();if(at)if(i.drawBuffers){const lt=R.texture;for(let K=0,D=lt.length;K<D;K++){const et=n.get(lt[K]);et.__webglTexture===void 0&&(et.__webglTexture=r.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&R.samples>0&&Dt(R)===!1){const lt=at?w:[w];j.__webglMultisampledFramebuffer=r.createFramebuffer(),j.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let K=0;K<lt.length;K++){const D=lt[K];j.__webglColorRenderbuffer[K]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,j.__webglColorRenderbuffer[K]);const et=s.convert(D.format,D.colorSpace),xt=s.convert(D.type),ft=I(D.internalFormat,et,xt,D.colorSpace,R.isXRRenderTarget===!0),_t=St(R);r.renderbufferStorageMultisample(r.RENDERBUFFER,_t,ft,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+K,r.RENDERBUFFER,j.__webglColorRenderbuffer[K])}r.bindRenderbuffer(r.RENDERBUFFER,null),R.depthBuffer&&(j.__webglDepthRenderbuffer=r.createRenderbuffer(),L(j.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(it){e.bindTexture(r.TEXTURE_CUBE_MAP,rt.__webglTexture),Tt(r.TEXTURE_CUBE_MAP,w,Ct);for(let lt=0;lt<6;lt++)if(a&&w.mipmaps&&w.mipmaps.length>0)for(let K=0;K<w.mipmaps.length;K++)Lt(j.__webglFramebuffer[lt][K],R,w,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+lt,K);else Lt(j.__webglFramebuffer[lt],R,w,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0);A(w,Ct)&&b(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(at){const lt=R.texture;for(let K=0,D=lt.length;K<D;K++){const et=lt[K],xt=n.get(et);e.bindTexture(r.TEXTURE_2D,xt.__webglTexture),Tt(r.TEXTURE_2D,et,Ct),Lt(j.__webglFramebuffer,R,et,r.COLOR_ATTACHMENT0+K,r.TEXTURE_2D,0),A(et,Ct)&&b(r.TEXTURE_2D)}e.unbindTexture()}else{let lt=r.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(a?lt=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(lt,rt.__webglTexture),Tt(lt,w,Ct),a&&w.mipmaps&&w.mipmaps.length>0)for(let K=0;K<w.mipmaps.length;K++)Lt(j.__webglFramebuffer[K],R,w,r.COLOR_ATTACHMENT0,lt,K);else Lt(j.__webglFramebuffer,R,w,r.COLOR_ATTACHMENT0,lt,0);A(w,Ct)&&b(lt),e.unbindTexture()}R.depthBuffer&&tt(R)}function Rt(R){const w=y(R)||a,j=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let rt=0,it=j.length;rt<it;rt++){const at=j[rt];if(A(at,w)){const Ct=R.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,lt=n.get(at).__webglTexture;e.bindTexture(Ct,lt),b(Ct),e.unbindTexture()}}}function yt(R){if(a&&R.samples>0&&Dt(R)===!1){const w=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],j=R.width,rt=R.height;let it=r.COLOR_BUFFER_BIT;const at=[],Ct=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,lt=n.get(R),K=R.isWebGLMultipleRenderTargets===!0;if(K)for(let D=0;D<w.length;D++)e.bindFramebuffer(r.FRAMEBUFFER,lt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+D,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,lt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+D,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,lt.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,lt.__webglFramebuffer);for(let D=0;D<w.length;D++){at.push(r.COLOR_ATTACHMENT0+D),R.depthBuffer&&at.push(Ct);const et=lt.__ignoreDepthValues!==void 0?lt.__ignoreDepthValues:!1;if(et===!1&&(R.depthBuffer&&(it|=r.DEPTH_BUFFER_BIT),R.stencilBuffer&&(it|=r.STENCIL_BUFFER_BIT)),K&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,lt.__webglColorRenderbuffer[D]),et===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[Ct]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[Ct])),K){const xt=n.get(w[D]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,xt,0)}r.blitFramebuffer(0,0,j,rt,0,0,j,rt,it,r.NEAREST),f&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,at)}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),K)for(let D=0;D<w.length;D++){e.bindFramebuffer(r.FRAMEBUFFER,lt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+D,r.RENDERBUFFER,lt.__webglColorRenderbuffer[D]);const et=n.get(w[D]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,lt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+D,r.TEXTURE_2D,et,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,lt.__webglMultisampledFramebuffer)}}function St(R){return Math.min(u,R.samples)}function Dt(R){const w=n.get(R);return a&&R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Wt(R){const w=o.render.frame;m.get(R)!==w&&(m.set(R,w),R.update())}function re(R,w){const j=R.colorSpace,rt=R.format,it=R.type;return R.isCompressedTexture===!0||R.format===Jo||j!==gn&&j!==yi&&(j===zt?a===!1?t.has("EXT_sRGB")===!0&&rt===Ye?(R.format=Jo,R.minFilter=je,R.generateMipmaps=!1):w=vh.sRGBToLinear(w):(rt!==Ye||it!==$n)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",j)),w}this.allocateTextureUnit=G,this.resetTextureUnits=X,this.setTexture2D=Q,this.setTexture2DArray=z,this.setTexture3D=V,this.setTextureCube=ct,this.rebindTextures=ot,this.setupRenderTarget=nt,this.updateRenderTargetMipmap=Rt,this.updateMultisampleRenderTarget=yt,this.setupDepthRenderbuffer=tt,this.setupFrameBufferTexture=Lt,this.useMultisampledRTT=Dt}function Nv(r,t,e){const n=e.isWebGL2;function i(s,o=yi){let a;if(s===$n)return r.UNSIGNED_BYTE;if(s===lh)return r.UNSIGNED_SHORT_4_4_4_4;if(s===ch)return r.UNSIGNED_SHORT_5_5_5_1;if(s===Ju)return r.BYTE;if(s===Qu)return r.SHORT;if(s===pa)return r.UNSIGNED_SHORT;if(s===ah)return r.INT;if(s===qn)return r.UNSIGNED_INT;if(s===Un)return r.FLOAT;if(s===Fs)return n?r.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===td)return r.ALPHA;if(s===Ye)return r.RGBA;if(s===ed)return r.LUMINANCE;if(s===nd)return r.LUMINANCE_ALPHA;if(s===_i)return r.DEPTH_COMPONENT;if(s===os)return r.DEPTH_STENCIL;if(s===Jo)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===id)return r.RED;if(s===hh)return r.RED_INTEGER;if(s===sd)return r.RG;if(s===uh)return r.RG_INTEGER;if(s===dh)return r.RGBA_INTEGER;if(s===Qr||s===to||s===eo||s===no)if(o===zt)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Qr)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===to)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===eo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===no)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Qr)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===to)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===eo)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===no)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===$a||s===Ja||s===Qa||s===tl)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===$a)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Ja)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Qa)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===tl)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===rd)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===el||s===nl)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(s===el)return o===zt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===nl)return o===zt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===il||s===sl||s===rl||s===ol||s===al||s===ll||s===cl||s===hl||s===ul||s===dl||s===fl||s===pl||s===ml||s===gl)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(s===il)return o===zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===sl)return o===zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===rl)return o===zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===ol)return o===zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===al)return o===zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===ll)return o===zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===cl)return o===zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===hl)return o===zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===ul)return o===zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===dl)return o===zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===fl)return o===zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===pl)return o===zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===ml)return o===zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===gl)return o===zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===io)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(s===io)return o===zt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===od||s===vl||s===_l||s===xl)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(s===io)return a.COMPRESSED_RED_RGTC1_EXT;if(s===vl)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===_l)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===xl)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===vi?n?r.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class Uv extends De{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Ji extends le{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Fv={type:"move"};class Ao{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ji,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ji,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ji,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const v of t.hand.values()){const g=e.getJointPose(v,n),p=this._getHandJoint(c,v);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,m=.005;c.inputState.pinching&&d>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Fv)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Ji;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Ov extends be{constructor(t,e,n,i,s,o,a,l,c,h){if(h=h!==void 0?h:_i,h!==_i&&h!==os)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===_i&&(n=qn),n===void 0&&h===os&&(n=vi),super(null,i,s,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:we,this.minFilter=l!==void 0?l:we,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Bv extends ii{constructor(t,e){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,m=null;const v=e.getContextAttributes();let g=null,p=null;const x=[],_=[],y=new De;y.layers.enable(1),y.viewport=new Jt;const S=new De;S.layers.enable(2),S.viewport=new Jt;const A=[y,S],b=new Uv;b.layers.enable(1),b.layers.enable(2);let I=null,E=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let V=x[z];return V===void 0&&(V=new Ao,x[z]=V),V.getTargetRaySpace()},this.getControllerGrip=function(z){let V=x[z];return V===void 0&&(V=new Ao,x[z]=V),V.getGripSpace()},this.getHand=function(z){let V=x[z];return V===void 0&&(V=new Ao,x[z]=V),V.getHandSpace()};function T(z){const V=_.indexOf(z.inputSource);if(V===-1)return;const ct=x[V];ct!==void 0&&(ct.update(z.inputSource,z.frame,c||o),ct.dispatchEvent({type:z.type,data:z.inputSource}))}function k(){i.removeEventListener("select",T),i.removeEventListener("selectstart",T),i.removeEventListener("selectend",T),i.removeEventListener("squeeze",T),i.removeEventListener("squeezestart",T),i.removeEventListener("squeezeend",T),i.removeEventListener("end",k),i.removeEventListener("inputsourceschange",Z);for(let z=0;z<x.length;z++){const V=_[z];V!==null&&(_[z]=null,x[z].disconnect(V))}I=null,E=null,t.setRenderTarget(g),f=null,d=null,u=null,i=null,p=null,Q.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){s=z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){a=z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(z){c=z},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(z){if(i=z,i!==null){if(g=t.getRenderTarget(),i.addEventListener("select",T),i.addEventListener("selectstart",T),i.addEventListener("selectend",T),i.addEventListener("squeeze",T),i.addEventListener("squeezestart",T),i.addEventListener("squeezeend",T),i.addEventListener("end",k),i.addEventListener("inputsourceschange",Z),v.xrCompatible!==!0&&await e.makeXRCompatible(),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const V={antialias:i.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,e,V),i.updateRenderState({baseLayer:f}),p=new Mi(f.framebufferWidth,f.framebufferHeight,{format:Ye,type:$n,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil})}else{let V=null,ct=null,dt=null;v.depth&&(dt=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,V=v.stencil?os:_i,ct=v.stencil?vi:qn);const pt={colorFormat:e.RGBA8,depthFormat:dt,scaleFactor:s};u=new XRWebGLBinding(i,e),d=u.createProjectionLayer(pt),i.updateRenderState({layers:[d]}),p=new Mi(d.textureWidth,d.textureHeight,{format:Ye,type:$n,depthTexture:new Ov(d.textureWidth,d.textureHeight,ct,void 0,void 0,void 0,void 0,void 0,void 0,V),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0});const bt=t.properties.get(p);bt.__ignoreDepthValues=d.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Q.setContext(i),Q.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function Z(z){for(let V=0;V<z.removed.length;V++){const ct=z.removed[V],dt=_.indexOf(ct);dt>=0&&(_[dt]=null,x[dt].disconnect(ct))}for(let V=0;V<z.added.length;V++){const ct=z.added[V];let dt=_.indexOf(ct);if(dt===-1){for(let bt=0;bt<x.length;bt++)if(bt>=_.length){_.push(ct),dt=bt;break}else if(_[bt]===null){_[bt]=ct,dt=bt;break}if(dt===-1)break}const pt=x[dt];pt&&pt.connect(ct)}}const P=new N,F=new N;function U(z,V,ct){P.setFromMatrixPosition(V.matrixWorld),F.setFromMatrixPosition(ct.matrixWorld);const dt=P.distanceTo(F),pt=V.projectionMatrix.elements,bt=ct.projectionMatrix.elements,Tt=pt[14]/(pt[10]-1),At=pt[14]/(pt[10]+1),Kt=(pt[9]+1)/pt[5],te=(pt[9]-1)/pt[5],Lt=(pt[8]-1)/pt[0],L=(bt[8]+1)/bt[0],ut=Tt*Lt,tt=Tt*L,ot=dt/(-Lt+L),nt=ot*-Lt;V.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(nt),z.translateZ(ot),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert();const Rt=Tt+ot,yt=At+ot,St=ut-nt,Dt=tt+(dt-nt),Wt=Kt*At/yt*Rt,re=te*At/yt*Rt;z.projectionMatrix.makePerspective(St,Dt,Wt,re,Rt,yt),z.projectionMatrixInverse.copy(z.projectionMatrix).invert()}function O(z,V){V===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(V.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(i===null)return;b.near=S.near=y.near=z.near,b.far=S.far=y.far=z.far,(I!==b.near||E!==b.far)&&(i.updateRenderState({depthNear:b.near,depthFar:b.far}),I=b.near,E=b.far);const V=z.parent,ct=b.cameras;O(b,V);for(let dt=0;dt<ct.length;dt++)O(ct[dt],V);ct.length===2?U(b,y,S):b.projectionMatrix.copy(y.projectionMatrix),X(z,b,V)};function X(z,V,ct){ct===null?z.matrix.copy(V.matrixWorld):(z.matrix.copy(ct.matrixWorld),z.matrix.invert(),z.matrix.multiply(V.matrixWorld)),z.matrix.decompose(z.position,z.quaternion,z.scale),z.updateMatrixWorld(!0);const dt=z.children;for(let pt=0,bt=dt.length;pt<bt;pt++)dt[pt].updateMatrixWorld(!0);z.projectionMatrix.copy(V.projectionMatrix),z.projectionMatrixInverse.copy(V.projectionMatrixInverse),z.isPerspectiveCamera&&(z.fov=as*2*Math.atan(1/z.projectionMatrix.elements[5]),z.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(z){l=z,d!==null&&(d.fixedFoveation=z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=z)};let G=null;function q(z,V){if(h=V.getViewerPose(c||o),m=V,h!==null){const ct=h.views;f!==null&&(t.setRenderTargetFramebuffer(p,f.framebuffer),t.setRenderTarget(p));let dt=!1;ct.length!==b.cameras.length&&(b.cameras.length=0,dt=!0);for(let pt=0;pt<ct.length;pt++){const bt=ct[pt];let Tt=null;if(f!==null)Tt=f.getViewport(bt);else{const Kt=u.getViewSubImage(d,bt);Tt=Kt.viewport,pt===0&&(t.setRenderTargetTextures(p,Kt.colorTexture,d.ignoreDepthValues?void 0:Kt.depthStencilTexture),t.setRenderTarget(p))}let At=A[pt];At===void 0&&(At=new De,At.layers.enable(pt),At.viewport=new Jt,A[pt]=At),At.matrix.fromArray(bt.transform.matrix),At.matrix.decompose(At.position,At.quaternion,At.scale),At.projectionMatrix.fromArray(bt.projectionMatrix),At.projectionMatrixInverse.copy(At.projectionMatrix).invert(),At.viewport.set(Tt.x,Tt.y,Tt.width,Tt.height),pt===0&&(b.matrix.copy(At.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),dt===!0&&b.cameras.push(At)}}for(let ct=0;ct<x.length;ct++){const dt=_[ct],pt=x[ct];dt!==null&&pt!==void 0&&pt.update(dt,V,c||o)}G&&G(z,V),V.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:V}),m=null}const Q=new bh;Q.setAnimationLoop(q),this.setAnimationLoop=function(z){G=z},this.dispose=function(){}}}function zv(r,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Sh(r)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function i(g,p,x,_,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(g,p):p.isMeshToonMaterial?(s(g,p),u(g,p)):p.isMeshPhongMaterial?(s(g,p),h(g,p)):p.isMeshStandardMaterial?(s(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,y)):p.isMeshMatcapMaterial?(s(g,p),m(g,p)):p.isMeshDepthMaterial?s(g,p):p.isMeshDistanceMaterial?(s(g,p),v(g,p)):p.isMeshNormalMaterial?s(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,x,_):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Be&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Be&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const x=t.get(p).envMap;if(x&&(g.envMap.value=x,g.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap){g.lightMap.value=p.lightMap;const _=r._useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=p.lightMapIntensity*_,e(p.lightMap,g.lightMapTransform)}p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,x,_){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*x,g.scale.value=_*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),t.get(p).envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,x){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Be&&g.clearcoatNormalScale.value.negate())),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function v(g,p){const x=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function kv(r,t,e,n){let i={},s={},o=[];const a=e.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(x,_){const y=_.program;n.uniformBlockBinding(x,y)}function c(x,_){let y=i[x.id];y===void 0&&(m(x),y=h(x),i[x.id]=y,x.addEventListener("dispose",g));const S=_.program;n.updateUBOMapping(x,S);const A=t.render.frame;s[x.id]!==A&&(d(x),s[x.id]=A)}function h(x){const _=u();x.__bindingPointIndex=_;const y=r.createBuffer(),S=x.__size,A=x.usage;return r.bindBuffer(r.UNIFORM_BUFFER,y),r.bufferData(r.UNIFORM_BUFFER,S,A),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,_,y),y}function u(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const _=i[x.id],y=x.uniforms,S=x.__cache;r.bindBuffer(r.UNIFORM_BUFFER,_);for(let A=0,b=y.length;A<b;A++){const I=y[A];if(f(I,A,S)===!0){const E=I.__offset,T=Array.isArray(I.value)?I.value:[I.value];let k=0;for(let Z=0;Z<T.length;Z++){const P=T[Z],F=v(P);typeof P=="number"?(I.__data[0]=P,r.bufferSubData(r.UNIFORM_BUFFER,E+k,I.__data)):P.isMatrix3?(I.__data[0]=P.elements[0],I.__data[1]=P.elements[1],I.__data[2]=P.elements[2],I.__data[3]=P.elements[0],I.__data[4]=P.elements[3],I.__data[5]=P.elements[4],I.__data[6]=P.elements[5],I.__data[7]=P.elements[0],I.__data[8]=P.elements[6],I.__data[9]=P.elements[7],I.__data[10]=P.elements[8],I.__data[11]=P.elements[0]):(P.toArray(I.__data,k),k+=F.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,E,I.__data)}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(x,_,y){const S=x.value;if(y[_]===void 0){if(typeof S=="number")y[_]=S;else{const A=Array.isArray(S)?S:[S],b=[];for(let I=0;I<A.length;I++)b.push(A[I].clone());y[_]=b}return!0}else if(typeof S=="number"){if(y[_]!==S)return y[_]=S,!0}else{const A=Array.isArray(y[_])?y[_]:[y[_]],b=Array.isArray(S)?S:[S];for(let I=0;I<A.length;I++){const E=A[I];if(E.equals(b[I])===!1)return E.copy(b[I]),!0}}return!1}function m(x){const _=x.uniforms;let y=0;const S=16;let A=0;for(let b=0,I=_.length;b<I;b++){const E=_[b],T={boundary:0,storage:0},k=Array.isArray(E.value)?E.value:[E.value];for(let Z=0,P=k.length;Z<P;Z++){const F=k[Z],U=v(F);T.boundary+=U.boundary,T.storage+=U.storage}if(E.__data=new Float32Array(T.storage/Float32Array.BYTES_PER_ELEMENT),E.__offset=y,b>0){A=y%S;const Z=S-A;A!==0&&Z-T.boundary<0&&(y+=S-A,E.__offset=y)}y+=T.storage}return A=y%S,A>0&&(y+=S-A),x.__size=y,x.__cache={},this}function v(x){const _={boundary:0,storage:0};return typeof x=="number"?(_.boundary=4,_.storage=4):x.isVector2?(_.boundary=8,_.storage=8):x.isVector3||x.isColor?(_.boundary=16,_.storage=12):x.isVector4?(_.boundary=16,_.storage=16):x.isMatrix3?(_.boundary=48,_.storage=48):x.isMatrix4?(_.boundary=64,_.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),_}function g(x){const _=x.target;_.removeEventListener("dispose",g);const y=o.indexOf(_.__bindingPointIndex);o.splice(y,1),r.deleteBuffer(i[_.id]),delete i[_.id],delete s[_.id]}function p(){for(const x in i)r.deleteBuffer(i[x]);o=[],i={},s={}}return{bind:l,update:c,dispose:p}}function Vv(){const r=Os("canvas");return r.style.display="block",r}class Ph{constructor(t={}){const{canvas:e=Vv(),context:n=null,depth:i=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=o;const f=new Uint32Array(4),m=new Int32Array(4);let v=null,g=null;const p=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=zt,this._useLegacyLights=!1,this.toneMapping=Zn,this.toneMappingExposure=1;const _=this;let y=!1,S=0,A=0,b=null,I=-1,E=null;const T=new Jt,k=new Jt;let Z=null;const P=new Ut(0);let F=0,U=e.width,O=e.height,X=1,G=null,q=null;const Q=new Jt(0,0,U,O),z=new Jt(0,0,U,O);let V=!1;const ct=new ya;let dt=!1,pt=!1,bt=null;const Tt=new Pt,At=new ht,Kt=new N,te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Lt(){return b===null?X:1}let L=n;function ut(C,W){for(let J=0;J<C.length;J++){const H=C[J],$=e.getContext(H,W);if($!==null)return $}return null}try{const C={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${fa}`),e.addEventListener("webglcontextlost",gt,!1),e.addEventListener("webglcontextrestored",Y,!1),e.addEventListener("webglcontextcreationerror",st,!1),L===null){const W=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&W.shift(),L=ut(W,C),L===null)throw ut(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&L instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),L.getShaderPrecisionFormat===void 0&&(L.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let tt,ot,nt,Rt,yt,St,Dt,Wt,re,R,w,j,rt,it,at,Ct,lt,K,D,et,xt,ft,_t,Bt;function Yt(){tt=new $m(L),ot=new Xm(L,tt,t),tt.init(ot),ft=new Nv(L,tt,ot),nt=new Iv(L,tt,ot),Rt=new tg(L),yt=new _v,St=new Dv(L,tt,nt,yt,ot,ft,Rt),Dt=new jm(_),Wt=new Zm(_),re=new hf(L,ot),_t=new Gm(L,tt,re,ot),R=new Jm(L,re,Rt,_t),w=new sg(L,R,re,Rt),D=new ig(L,ot,St),Ct=new qm(yt),j=new vv(_,Dt,Wt,tt,ot,_t,Ct),rt=new zv(_,yt),it=new yv,at=new Tv(tt,ot),K=new Hm(_,Dt,Wt,nt,w,d,l),lt=new Lv(_,w,ot),Bt=new kv(L,Rt,ot,nt),et=new Wm(L,tt,Rt,ot),xt=new Qm(L,tt,Rt,ot),Rt.programs=j.programs,_.capabilities=ot,_.extensions=tt,_.properties=yt,_.renderLists=it,_.shadowMap=lt,_.state=nt,_.info=Rt}Yt();const B=new Bv(_,L);this.xr=B,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const C=tt.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=tt.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(C){C!==void 0&&(X=C,this.setSize(U,O,!1))},this.getSize=function(C){return C.set(U,O)},this.setSize=function(C,W,J=!0){if(B.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=C,O=W,e.width=Math.floor(C*X),e.height=Math.floor(W*X),J===!0&&(e.style.width=C+"px",e.style.height=W+"px"),this.setViewport(0,0,C,W)},this.getDrawingBufferSize=function(C){return C.set(U*X,O*X).floor()},this.setDrawingBufferSize=function(C,W,J){U=C,O=W,X=J,e.width=Math.floor(C*J),e.height=Math.floor(W*J),this.setViewport(0,0,C,W)},this.getCurrentViewport=function(C){return C.copy(T)},this.getViewport=function(C){return C.copy(Q)},this.setViewport=function(C,W,J,H){C.isVector4?Q.set(C.x,C.y,C.z,C.w):Q.set(C,W,J,H),nt.viewport(T.copy(Q).multiplyScalar(X).floor())},this.getScissor=function(C){return C.copy(z)},this.setScissor=function(C,W,J,H){C.isVector4?z.set(C.x,C.y,C.z,C.w):z.set(C,W,J,H),nt.scissor(k.copy(z).multiplyScalar(X).floor())},this.getScissorTest=function(){return V},this.setScissorTest=function(C){nt.setScissorTest(V=C)},this.setOpaqueSort=function(C){G=C},this.setTransparentSort=function(C){q=C},this.getClearColor=function(C){return C.copy(K.getClearColor())},this.setClearColor=function(){K.setClearColor.apply(K,arguments)},this.getClearAlpha=function(){return K.getClearAlpha()},this.setClearAlpha=function(){K.setClearAlpha.apply(K,arguments)},this.clear=function(C=!0,W=!0,J=!0){let H=0;if(C){let $=!1;if(b!==null){const wt=b.texture.format;$=wt===dh||wt===uh||wt===hh}if($){const wt=b.texture.type,It=wt===$n||wt===qn||wt===pa||wt===vi||wt===lh||wt===ch,Ft=K.getClearColor(),Ot=K.getClearAlpha(),Xt=Ft.r,Nt=Ft.g,kt=Ft.b;It?(f[0]=Xt,f[1]=Nt,f[2]=kt,f[3]=Ot,L.clearBufferuiv(L.COLOR,0,f)):(m[0]=Xt,m[1]=Nt,m[2]=kt,m[3]=Ot,L.clearBufferiv(L.COLOR,0,m))}else H|=L.COLOR_BUFFER_BIT}W&&(H|=L.DEPTH_BUFFER_BIT),J&&(H|=L.STENCIL_BUFFER_BIT),L.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",gt,!1),e.removeEventListener("webglcontextrestored",Y,!1),e.removeEventListener("webglcontextcreationerror",st,!1),it.dispose(),at.dispose(),yt.dispose(),Dt.dispose(),Wt.dispose(),w.dispose(),_t.dispose(),Bt.dispose(),j.dispose(),B.dispose(),B.removeEventListener("sessionstart",ne),B.removeEventListener("sessionend",cn),bt&&(bt.dispose(),bt=null),Re.stop()};function gt(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function Y(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const C=Rt.autoReset,W=lt.enabled,J=lt.autoUpdate,H=lt.needsUpdate,$=lt.type;Yt(),Rt.autoReset=C,lt.enabled=W,lt.autoUpdate=J,lt.needsUpdate=H,lt.type=$}function st(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function vt(C){const W=C.target;W.removeEventListener("dispose",vt),Gt(W)}function Gt(C){Qt(C),yt.remove(C)}function Qt(C){const W=yt.get(C).programs;W!==void 0&&(W.forEach(function(J){j.releaseProgram(J)}),C.isShaderMaterial&&j.releaseShaderCache(C))}this.renderBufferDirect=function(C,W,J,H,$,wt){W===null&&(W=te);const It=$.isMesh&&$.matrixWorld.determinant()<0,Ft=_u(C,W,J,H,$);nt.setMaterial(H,It);let Ot=J.index,Xt=1;if(H.wireframe===!0){if(Ot=R.getWireframeAttribute(J),Ot===void 0)return;Xt=2}const Nt=J.drawRange,kt=J.attributes.position;let ce=Nt.start*Xt,he=(Nt.start+Nt.count)*Xt;wt!==null&&(ce=Math.max(ce,wt.start*Xt),he=Math.min(he,(wt.start+wt.count)*Xt)),Ot!==null?(ce=Math.max(ce,0),he=Math.min(he,Ot.count)):kt!=null&&(ce=Math.max(ce,0),he=Math.min(he,kt.count));const Xe=he-ce;if(Xe<0||Xe===1/0)return;_t.setup($,H,Ft,J,Ot);let xn,de=et;if(Ot!==null&&(xn=re.get(Ot),de=xt,de.setIndex(xn)),$.isMesh)H.wireframe===!0?(nt.setLineWidth(H.wireframeLinewidth*Lt()),de.setMode(L.LINES)):de.setMode(L.TRIANGLES);else if($.isLine){let jt=H.linewidth;jt===void 0&&(jt=1),nt.setLineWidth(jt*Lt()),$.isLineSegments?de.setMode(L.LINES):$.isLineLoop?de.setMode(L.LINE_LOOP):de.setMode(L.LINE_STRIP)}else $.isPoints?de.setMode(L.POINTS):$.isSprite&&de.setMode(L.TRIANGLES);if($.isInstancedMesh)de.renderInstances(ce,Xe,$.count);else if(J.isInstancedBufferGeometry){const jt=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,Yr=Math.min(J.instanceCount,jt);de.renderInstances(ce,Xe,Yr)}else de.render(ce,Xe)},this.compile=function(C,W){function J(H,$,wt){H.transparent===!0&&H.side===Nn&&H.forceSinglePass===!1?(H.side=Be,H.needsUpdate=!0,Ks(H,$,wt),H.side=Qn,H.needsUpdate=!0,Ks(H,$,wt),H.side=Nn):Ks(H,$,wt)}g=at.get(C),g.init(),x.push(g),C.traverseVisible(function(H){H.isLight&&H.layers.test(W.layers)&&(g.pushLight(H),H.castShadow&&g.pushShadow(H))}),g.setupLights(_._useLegacyLights),C.traverse(function(H){const $=H.material;if($)if(Array.isArray($))for(let wt=0;wt<$.length;wt++){const It=$[wt];J(It,C,H)}else J($,C,H)}),x.pop(),g=null};let ee=null;function Bn(C){ee&&ee(C)}function ne(){Re.stop()}function cn(){Re.start()}const Re=new bh;Re.setAnimationLoop(Bn),typeof self<"u"&&Re.setContext(self),this.setAnimationLoop=function(C){ee=C,B.setAnimationLoop(C),C===null?Re.stop():Re.start()},B.addEventListener("sessionstart",ne),B.addEventListener("sessionend",cn),this.render=function(C,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),B.enabled===!0&&B.isPresenting===!0&&(B.cameraAutoUpdate===!0&&B.updateCamera(W),W=B.getCamera()),C.isScene===!0&&C.onBeforeRender(_,C,W,b),g=at.get(C,x.length),g.init(),x.push(g),Tt.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),ct.setFromProjectionMatrix(Tt),pt=this.localClippingEnabled,dt=Ct.init(this.clippingPlanes,pt),v=it.get(C,p.length),v.init(),p.push(v),Ba(C,W,0,_.sortObjects),v.finish(),_.sortObjects===!0&&v.sort(G,q),this.info.render.frame++,dt===!0&&Ct.beginShadows();const J=g.state.shadowsArray;if(lt.render(J,C,W),dt===!0&&Ct.endShadows(),this.info.autoReset===!0&&this.info.reset(),K.render(v,C),g.setupLights(_._useLegacyLights),W.isArrayCamera){const H=W.cameras;for(let $=0,wt=H.length;$<wt;$++){const It=H[$];za(v,C,It,It.viewport)}}else za(v,C,W);b!==null&&(St.updateMultisampleRenderTarget(b),St.updateRenderTargetMipmap(b)),C.isScene===!0&&C.onAfterRender(_,C,W),_t.resetDefaultState(),I=-1,E=null,x.pop(),x.length>0?g=x[x.length-1]:g=null,p.pop(),p.length>0?v=p[p.length-1]:v=null};function Ba(C,W,J,H){if(C.visible===!1)return;if(C.layers.test(W.layers)){if(C.isGroup)J=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(W);else if(C.isLight)g.pushLight(C),C.castShadow&&g.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||ct.intersectsSprite(C)){H&&Kt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Tt);const It=w.update(C),Ft=C.material;Ft.visible&&v.push(C,It,Ft,J,Kt.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||ct.intersectsObject(C))){const It=w.update(C),Ft=C.material;if(H&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Kt.copy(C.boundingSphere.center)):(It.boundingSphere===null&&It.computeBoundingSphere(),Kt.copy(It.boundingSphere.center)),Kt.applyMatrix4(C.matrixWorld).applyMatrix4(Tt)),Array.isArray(Ft)){const Ot=It.groups;for(let Xt=0,Nt=Ot.length;Xt<Nt;Xt++){const kt=Ot[Xt],ce=Ft[kt.materialIndex];ce&&ce.visible&&v.push(C,It,ce,J,Kt.z,kt)}}else Ft.visible&&v.push(C,It,Ft,J,Kt.z,null)}}const wt=C.children;for(let It=0,Ft=wt.length;It<Ft;It++)Ba(wt[It],W,J,H)}function za(C,W,J,H){const $=C.opaque,wt=C.transmissive,It=C.transparent;g.setupLightsView(J),dt===!0&&Ct.setGlobalState(_.clippingPlanes,J),wt.length>0&&vu($,wt,W,J),H&&nt.viewport(T.copy(H)),$.length>0&&Ys($,W,J),wt.length>0&&Ys(wt,W,J),It.length>0&&Ys(It,W,J),nt.buffers.depth.setTest(!0),nt.buffers.depth.setMask(!0),nt.buffers.color.setMask(!0),nt.setPolygonOffset(!1)}function vu(C,W,J,H){const $=ot.isWebGL2;bt===null&&(bt=new Mi(1,1,{generateMipmaps:!0,type:tt.has("EXT_color_buffer_half_float")?Fs:$n,minFilter:Us,samples:$?4:0})),_.getDrawingBufferSize(At),$?bt.setSize(At.x,At.y):bt.setSize(Ur(At.x),Ur(At.y));const wt=_.getRenderTarget();_.setRenderTarget(bt),_.getClearColor(P),F=_.getClearAlpha(),F<1&&_.setClearColor(16777215,.5),_.clear();const It=_.toneMapping;_.toneMapping=Zn,Ys(C,J,H),St.updateMultisampleRenderTarget(bt),St.updateRenderTargetMipmap(bt);let Ft=!1;for(let Ot=0,Xt=W.length;Ot<Xt;Ot++){const Nt=W[Ot],kt=Nt.object,ce=Nt.geometry,he=Nt.material,Xe=Nt.group;if(he.side===Nn&&kt.layers.test(H.layers)){const xn=he.side;he.side=Be,he.needsUpdate=!0,ka(kt,J,H,ce,he,Xe),he.side=xn,he.needsUpdate=!0,Ft=!0}}Ft===!0&&(St.updateMultisampleRenderTarget(bt),St.updateRenderTargetMipmap(bt)),_.setRenderTarget(wt),_.setClearColor(P,F),_.toneMapping=It}function Ys(C,W,J){const H=W.isScene===!0?W.overrideMaterial:null;for(let $=0,wt=C.length;$<wt;$++){const It=C[$],Ft=It.object,Ot=It.geometry,Xt=H===null?It.material:H,Nt=It.group;Ft.layers.test(J.layers)&&ka(Ft,W,J,Ot,Xt,Nt)}}function ka(C,W,J,H,$,wt){C.onBeforeRender(_,W,J,H,$,wt),C.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),$.onBeforeRender(_,W,J,H,C,wt),$.transparent===!0&&$.side===Nn&&$.forceSinglePass===!1?($.side=Be,$.needsUpdate=!0,_.renderBufferDirect(J,W,H,$,C,wt),$.side=Qn,$.needsUpdate=!0,_.renderBufferDirect(J,W,H,$,C,wt),$.side=Nn):_.renderBufferDirect(J,W,H,$,C,wt),C.onAfterRender(_,W,J,H,$,wt)}function Ks(C,W,J){W.isScene!==!0&&(W=te);const H=yt.get(C),$=g.state.lights,wt=g.state.shadowsArray,It=$.state.version,Ft=j.getParameters(C,$.state,wt,W,J),Ot=j.getProgramCacheKey(Ft);let Xt=H.programs;H.environment=C.isMeshStandardMaterial?W.environment:null,H.fog=W.fog,H.envMap=(C.isMeshStandardMaterial?Wt:Dt).get(C.envMap||H.environment),Xt===void 0&&(C.addEventListener("dispose",vt),Xt=new Map,H.programs=Xt);let Nt=Xt.get(Ot);if(Nt!==void 0){if(H.currentProgram===Nt&&H.lightsStateVersion===It)return Va(C,Ft),Nt}else Ft.uniforms=j.getUniforms(C),C.onBuild(J,Ft,_),C.onBeforeCompile(Ft,_),Nt=j.acquireProgram(Ft,Ot),Xt.set(Ot,Nt),H.uniforms=Ft.uniforms;const kt=H.uniforms;(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(kt.clippingPlanes=Ct.uniform),Va(C,Ft),H.needsLights=yu(C),H.lightsStateVersion=It,H.needsLights&&(kt.ambientLightColor.value=$.state.ambient,kt.lightProbe.value=$.state.probe,kt.directionalLights.value=$.state.directional,kt.directionalLightShadows.value=$.state.directionalShadow,kt.spotLights.value=$.state.spot,kt.spotLightShadows.value=$.state.spotShadow,kt.rectAreaLights.value=$.state.rectArea,kt.ltc_1.value=$.state.rectAreaLTC1,kt.ltc_2.value=$.state.rectAreaLTC2,kt.pointLights.value=$.state.point,kt.pointLightShadows.value=$.state.pointShadow,kt.hemisphereLights.value=$.state.hemi,kt.directionalShadowMap.value=$.state.directionalShadowMap,kt.directionalShadowMatrix.value=$.state.directionalShadowMatrix,kt.spotShadowMap.value=$.state.spotShadowMap,kt.spotLightMatrix.value=$.state.spotLightMatrix,kt.spotLightMap.value=$.state.spotLightMap,kt.pointShadowMap.value=$.state.pointShadowMap,kt.pointShadowMatrix.value=$.state.pointShadowMatrix);const ce=Nt.getUniforms(),he=Cr.seqWithValue(ce.seq,kt);return H.currentProgram=Nt,H.uniformsList=he,Nt}function Va(C,W){const J=yt.get(C);J.outputColorSpace=W.outputColorSpace,J.instancing=W.instancing,J.instancingColor=W.instancingColor,J.skinning=W.skinning,J.morphTargets=W.morphTargets,J.morphNormals=W.morphNormals,J.morphColors=W.morphColors,J.morphTargetsCount=W.morphTargetsCount,J.numClippingPlanes=W.numClippingPlanes,J.numIntersection=W.numClipIntersection,J.vertexAlphas=W.vertexAlphas,J.vertexTangents=W.vertexTangents,J.toneMapping=W.toneMapping}function _u(C,W,J,H,$){W.isScene!==!0&&(W=te),St.resetTextureUnits();const wt=W.fog,It=H.isMeshStandardMaterial?W.environment:null,Ft=b===null?_.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:gn,Ot=(H.isMeshStandardMaterial?Wt:Dt).get(H.envMap||It),Xt=H.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,Nt=!!J.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),kt=!!J.morphAttributes.position,ce=!!J.morphAttributes.normal,he=!!J.morphAttributes.color;let Xe=Zn;H.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(Xe=_.toneMapping);const xn=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,de=xn!==void 0?xn.length:0,jt=yt.get(H),Yr=g.state.lights;if(dt===!0&&(pt===!0||C!==E)){const ze=C===E&&H.id===I;Ct.setState(H,C,ze)}let fe=!1;H.version===jt.__version?(jt.needsLights&&jt.lightsStateVersion!==Yr.state.version||jt.outputColorSpace!==Ft||$.isInstancedMesh&&jt.instancing===!1||!$.isInstancedMesh&&jt.instancing===!0||$.isSkinnedMesh&&jt.skinning===!1||!$.isSkinnedMesh&&jt.skinning===!0||$.isInstancedMesh&&jt.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&jt.instancingColor===!1&&$.instanceColor!==null||jt.envMap!==Ot||H.fog===!0&&jt.fog!==wt||jt.numClippingPlanes!==void 0&&(jt.numClippingPlanes!==Ct.numPlanes||jt.numIntersection!==Ct.numIntersection)||jt.vertexAlphas!==Xt||jt.vertexTangents!==Nt||jt.morphTargets!==kt||jt.morphNormals!==ce||jt.morphColors!==he||jt.toneMapping!==Xe||ot.isWebGL2===!0&&jt.morphTargetsCount!==de)&&(fe=!0):(fe=!0,jt.__version=H.version);let ai=jt.currentProgram;fe===!0&&(ai=Ks(H,W,$));let Ha=!1,ms=!1,Kr=!1;const Pe=ai.getUniforms(),li=jt.uniforms;if(nt.useProgram(ai.program)&&(Ha=!0,ms=!0,Kr=!0),H.id!==I&&(I=H.id,ms=!0),Ha||E!==C){if(Pe.setValue(L,"projectionMatrix",C.projectionMatrix),ot.logarithmicDepthBuffer&&Pe.setValue(L,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),E!==C&&(E=C,ms=!0,Kr=!0),H.isShaderMaterial||H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshStandardMaterial||H.envMap){const ze=Pe.map.cameraPosition;ze!==void 0&&ze.setValue(L,Kt.setFromMatrixPosition(C.matrixWorld))}(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&Pe.setValue(L,"isOrthographic",C.isOrthographicCamera===!0),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial||H.isShadowMaterial||$.isSkinnedMesh)&&Pe.setValue(L,"viewMatrix",C.matrixWorldInverse)}if($.isSkinnedMesh){Pe.setOptional(L,$,"bindMatrix"),Pe.setOptional(L,$,"bindMatrixInverse");const ze=$.skeleton;ze&&(ot.floatVertexTextures?(ze.boneTexture===null&&ze.computeBoneTexture(),Pe.setValue(L,"boneTexture",ze.boneTexture,St),Pe.setValue(L,"boneTextureSize",ze.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Zr=J.morphAttributes;if((Zr.position!==void 0||Zr.normal!==void 0||Zr.color!==void 0&&ot.isWebGL2===!0)&&D.update($,J,ai),(ms||jt.receiveShadow!==$.receiveShadow)&&(jt.receiveShadow=$.receiveShadow,Pe.setValue(L,"receiveShadow",$.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(li.envMap.value=Ot,li.flipEnvMap.value=Ot.isCubeTexture&&Ot.isRenderTargetTexture===!1?-1:1),ms&&(Pe.setValue(L,"toneMappingExposure",_.toneMappingExposure),jt.needsLights&&xu(li,Kr),wt&&H.fog===!0&&rt.refreshFogUniforms(li,wt),rt.refreshMaterialUniforms(li,H,X,O,bt),Cr.upload(L,jt.uniformsList,li,St)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Cr.upload(L,jt.uniformsList,li,St),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&Pe.setValue(L,"center",$.center),Pe.setValue(L,"modelViewMatrix",$.modelViewMatrix),Pe.setValue(L,"normalMatrix",$.normalMatrix),Pe.setValue(L,"modelMatrix",$.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const ze=H.uniformsGroups;for(let $r=0,Mu=ze.length;$r<Mu;$r++)if(ot.isWebGL2){const Ga=ze[$r];Bt.update(Ga,ai),Bt.bind(Ga,ai)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ai}function xu(C,W){C.ambientLightColor.needsUpdate=W,C.lightProbe.needsUpdate=W,C.directionalLights.needsUpdate=W,C.directionalLightShadows.needsUpdate=W,C.pointLights.needsUpdate=W,C.pointLightShadows.needsUpdate=W,C.spotLights.needsUpdate=W,C.spotLightShadows.needsUpdate=W,C.rectAreaLights.needsUpdate=W,C.hemisphereLights.needsUpdate=W}function yu(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(C,W,J){yt.get(C.texture).__webglTexture=W,yt.get(C.depthTexture).__webglTexture=J;const H=yt.get(C);H.__hasExternalTextures=!0,H.__hasExternalTextures&&(H.__autoAllocateDepthBuffer=J===void 0,H.__autoAllocateDepthBuffer||tt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,W){const J=yt.get(C);J.__webglFramebuffer=W,J.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(C,W=0,J=0){b=C,S=W,A=J;let H=!0,$=null,wt=!1,It=!1;if(C){const Ot=yt.get(C);Ot.__useDefaultFramebuffer!==void 0?(nt.bindFramebuffer(L.FRAMEBUFFER,null),H=!1):Ot.__webglFramebuffer===void 0?St.setupRenderTarget(C):Ot.__hasExternalTextures&&St.rebindTextures(C,yt.get(C.texture).__webglTexture,yt.get(C.depthTexture).__webglTexture);const Xt=C.texture;(Xt.isData3DTexture||Xt.isDataArrayTexture||Xt.isCompressedArrayTexture)&&(It=!0);const Nt=yt.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Nt[W])?$=Nt[W][J]:$=Nt[W],wt=!0):ot.isWebGL2&&C.samples>0&&St.useMultisampledRTT(C)===!1?$=yt.get(C).__webglMultisampledFramebuffer:Array.isArray(Nt)?$=Nt[J]:$=Nt,T.copy(C.viewport),k.copy(C.scissor),Z=C.scissorTest}else T.copy(Q).multiplyScalar(X).floor(),k.copy(z).multiplyScalar(X).floor(),Z=V;if(nt.bindFramebuffer(L.FRAMEBUFFER,$)&&ot.drawBuffers&&H&&nt.drawBuffers(C,$),nt.viewport(T),nt.scissor(k),nt.setScissorTest(Z),wt){const Ot=yt.get(C.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+W,Ot.__webglTexture,J)}else if(It){const Ot=yt.get(C.texture),Xt=W||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ot.__webglTexture,J||0,Xt)}I=-1},this.readRenderTargetPixels=function(C,W,J,H,$,wt,It){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ft=yt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&It!==void 0&&(Ft=Ft[It]),Ft){nt.bindFramebuffer(L.FRAMEBUFFER,Ft);try{const Ot=C.texture,Xt=Ot.format,Nt=Ot.type;if(Xt!==Ye&&ft.convert(Xt)!==L.getParameter(L.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const kt=Nt===Fs&&(tt.has("EXT_color_buffer_half_float")||ot.isWebGL2&&tt.has("EXT_color_buffer_float"));if(Nt!==$n&&ft.convert(Nt)!==L.getParameter(L.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Nt===Un&&(ot.isWebGL2||tt.has("OES_texture_float")||tt.has("WEBGL_color_buffer_float")))&&!kt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=C.width-H&&J>=0&&J<=C.height-$&&L.readPixels(W,J,H,$,ft.convert(Xt),ft.convert(Nt),wt)}finally{const Ot=b!==null?yt.get(b).__webglFramebuffer:null;nt.bindFramebuffer(L.FRAMEBUFFER,Ot)}}},this.copyFramebufferToTexture=function(C,W,J=0){const H=Math.pow(2,-J),$=Math.floor(W.image.width*H),wt=Math.floor(W.image.height*H);St.setTexture2D(W,0),L.copyTexSubImage2D(L.TEXTURE_2D,J,0,0,C.x,C.y,$,wt),nt.unbindTexture()},this.copyTextureToTexture=function(C,W,J,H=0){const $=W.image.width,wt=W.image.height,It=ft.convert(J.format),Ft=ft.convert(J.type);St.setTexture2D(J,0),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,J.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,J.unpackAlignment),W.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,H,C.x,C.y,$,wt,It,Ft,W.image.data):W.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,H,C.x,C.y,W.mipmaps[0].width,W.mipmaps[0].height,It,W.mipmaps[0].data):L.texSubImage2D(L.TEXTURE_2D,H,C.x,C.y,It,Ft,W.image),H===0&&J.generateMipmaps&&L.generateMipmap(L.TEXTURE_2D),nt.unbindTexture()},this.copyTextureToTexture3D=function(C,W,J,H,$=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const wt=C.max.x-C.min.x+1,It=C.max.y-C.min.y+1,Ft=C.max.z-C.min.z+1,Ot=ft.convert(H.format),Xt=ft.convert(H.type);let Nt;if(H.isData3DTexture)St.setTexture3D(H,0),Nt=L.TEXTURE_3D;else if(H.isDataArrayTexture)St.setTexture2DArray(H,0),Nt=L.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,H.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,H.unpackAlignment);const kt=L.getParameter(L.UNPACK_ROW_LENGTH),ce=L.getParameter(L.UNPACK_IMAGE_HEIGHT),he=L.getParameter(L.UNPACK_SKIP_PIXELS),Xe=L.getParameter(L.UNPACK_SKIP_ROWS),xn=L.getParameter(L.UNPACK_SKIP_IMAGES),de=J.isCompressedTexture?J.mipmaps[0]:J.image;L.pixelStorei(L.UNPACK_ROW_LENGTH,de.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,de.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,C.min.x),L.pixelStorei(L.UNPACK_SKIP_ROWS,C.min.y),L.pixelStorei(L.UNPACK_SKIP_IMAGES,C.min.z),J.isDataTexture||J.isData3DTexture?L.texSubImage3D(Nt,$,W.x,W.y,W.z,wt,It,Ft,Ot,Xt,de.data):J.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),L.compressedTexSubImage3D(Nt,$,W.x,W.y,W.z,wt,It,Ft,Ot,de.data)):L.texSubImage3D(Nt,$,W.x,W.y,W.z,wt,It,Ft,Ot,Xt,de),L.pixelStorei(L.UNPACK_ROW_LENGTH,kt),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ce),L.pixelStorei(L.UNPACK_SKIP_PIXELS,he),L.pixelStorei(L.UNPACK_SKIP_ROWS,Xe),L.pixelStorei(L.UNPACK_SKIP_IMAGES,xn),$===0&&H.generateMipmaps&&L.generateMipmap(Nt),nt.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?St.setTextureCube(C,0):C.isData3DTexture?St.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?St.setTexture2DArray(C,0):St.setTexture2D(C,0),nt.unbindTexture()},this.resetState=function(){S=0,A=0,b=null,nt.reset(),_t.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Fn}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(t){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!t}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===zt?xi:fh}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===xi?zt:gn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class Hv extends Ph{}Hv.prototype.isWebGL1Renderer=!0;class Gv extends le{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}const oc=new N,ac=new Jt,lc=new Jt,Wv=new N,cc=new Pt,Gi=new N,Co=new cs,hc=new Pt,Ro=new Xs;class Xv extends Oe{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new Pt,this.bindMatrixInverse=new Pt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new si),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)Gi.fromBufferAttribute(e,n),this.applyBoneTransform(n,Gi),this.boundingBox.expandByPoint(Gi)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new cs),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)Gi.fromBufferAttribute(e,n),this.applyBoneTransform(n,Gi),this.boundingSphere.expandByPoint(Gi)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Co.copy(this.boundingSphere),Co.applyMatrix4(i),t.ray.intersectsSphere(Co)!==!1&&(hc.copy(i).invert(),Ro.copy(t.ray).applyMatrix4(hc),!(this.boundingBox!==null&&Ro.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,Ro)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new Jt,e=this.geometry.attributes.skinWeight;for(let n=0,i=e.count;n<i;n++){t.fromBufferAttribute(e,n);const s=1/t.manhattanLength();s!==1/0?t.multiplyScalar(s):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const n=this.skeleton,i=this.geometry;ac.fromBufferAttribute(i.attributes.skinIndex,t),lc.fromBufferAttribute(i.attributes.skinWeight,t),oc.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let s=0;s<4;s++){const o=lc.getComponent(s);if(o!==0){const a=ac.getComponent(s);cc.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),e.addScaledVector(Wv.copy(oc).applyMatrix4(cc),o)}}return e.applyMatrix4(this.bindMatrixInverse)}boneTransform(t,e){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(t,e)}}class ea extends le{constructor(){super(),this.isBone=!0,this.type="Bone"}}class qv extends be{constructor(t=null,e=1,n=1,i,s,o,a,l,c=we,h=we,u,d){super(null,o,a,l,c,h,i,s,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const uc=new Pt,jv=new Pt;class wa{constructor(t=[],e=[]){this.uuid=On(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Pt)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const n=new Pt;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const t=this.bones,e=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,o=t.length;s<o;s++){const a=t[s]?t[s].matrixWorld:jv;uc.multiplyMatrices(a,e[s]),uc.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new wa(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=mh(t),t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const n=new qv(e,t,t,Ye,Un);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this.boneTextureSize=t,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){const i=this.bones[e];if(i.name===t)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,i=t.bones.length;n<i;n++){const s=t.bones[n];let o=e[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new ea),this.bones.push(o),this.boneInverses.push(new Pt().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){const t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,n=this.boneInverses;for(let i=0,s=e.length;i<s;i++){const o=e[i];t.bones.push(o.uuid);const a=n[i];t.boneInverses.push(a.toArray())}return t}}class Lh extends ri{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ut(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const dc=new N,fc=new N,pc=new Pt,Po=new Xs,gr=new cs;class Yv extends le{constructor(t=new Ge,e=new Lh){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,s=e.count;i<s;i++)dc.fromBufferAttribute(e,i-1),fc.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=dc.distanceTo(fc);t.setAttribute("lineDistance",new _e(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),gr.copy(n.boundingSphere),gr.applyMatrix4(i),gr.radius+=s,t.ray.intersectsSphere(gr)===!1)return;pc.copy(i).invert(),Po.copy(t.ray).applyMatrix4(pc);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new N,h=new N,u=new N,d=new N,f=this.isLineSegments?2:1,m=n.index,g=n.attributes.position;if(m!==null){const p=Math.max(0,o.start),x=Math.min(m.count,o.start+o.count);for(let _=p,y=x-1;_<y;_+=f){const S=m.getX(_),A=m.getX(_+1);if(c.fromBufferAttribute(g,S),h.fromBufferAttribute(g,A),Po.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);const I=t.ray.origin.distanceTo(d);I<t.near||I>t.far||e.push({distance:I,point:u.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}else{const p=Math.max(0,o.start),x=Math.min(g.count,o.start+o.count);for(let _=p,y=x-1;_<y;_+=f){if(c.fromBufferAttribute(g,_),h.fromBufferAttribute(g,_+1),Po.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);const A=t.ray.origin.distanceTo(d);A<t.near||A>t.far||e.push({distance:A,point:u.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}class ln{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),s+=n.distanceTo(i),e.push(s),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const s=n.length;let o;e?o=e:o=t*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(s-1);const h=n[i],d=n[i+1]-h,f=(o-h)/d;return(i+f)/(s-1)}getTangent(t,e){let i=t-1e-4,s=t+1e-4;i<0&&(i=0),s>1&&(s=1);const o=this.getPoint(i),a=this.getPoint(s),l=e||(o.isVector2?new ht:new N);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new N,i=[],s=[],o=[],a=new N,l=new Pt;for(let f=0;f<=t;f++){const m=f/t;i[f]=this.getTangentAt(m,new N)}s[0]=new N,o[0]=new N;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),o[0].crossVectors(i[0],s[0]);for(let f=1;f<=t;f++){if(s[f]=s[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();const m=Math.acos(Ee(i[f-1].dot(i[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(a,m))}o[f].crossVectors(i[f],s[f])}if(e===!0){let f=Math.acos(Ee(s[0].dot(s[t]),-1,1));f/=t,i[0].dot(a.crossVectors(s[0],s[t]))>0&&(f=-f);for(let m=1;m<=t;m++)s[m].applyMatrix4(l.makeRotationAxis(i[m],f*m)),o[m].crossVectors(i[m],s[m])}return{tangents:i,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class ba extends ln{constructor(t=0,e=0,n=1,i=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e){const n=e||new ht,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(o?s=0:s=i),this.aClockwise===!0&&!o&&(s===i?s=-i:s=s-i);const a=this.aStartAngle+t*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Kv extends ba{constructor(t,e,n,i,s,o){super(t,e,n,n,i,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Ta(){let r=0,t=0,e=0,n=0;function i(s,o,a,l){r=s,t=a,e=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){i(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,h,u){let d=(o-s)/c-(a-s)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,f*=h,i(o,a,d,f)},calc:function(s){const o=s*s,a=o*s;return r+t*s+e*o+n*a}}}const vr=new N,Lo=new Ta,Io=new Ta,Do=new Ta;class Zv extends ln{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new N){const n=e,i=this.points,s=i.length,o=(s-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%s]:(vr.subVectors(i[0],i[1]).add(i[0]),c=vr);const u=i[a%s],d=i[(a+1)%s];if(this.closed||a+2<s?h=i[(a+2)%s]:(vr.subVectors(i[s-1],i[s-2]).add(i[s-1]),h=vr),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let m=Math.pow(c.distanceToSquared(u),f),v=Math.pow(u.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(h),f);v<1e-4&&(v=1),m<1e-4&&(m=v),g<1e-4&&(g=v),Lo.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,m,v,g),Io.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,m,v,g),Do.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,m,v,g)}else this.curveType==="catmullrom"&&(Lo.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Io.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Do.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Lo.calc(l),Io.calc(l),Do.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new N().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function mc(r,t,e,n,i){const s=(n-t)*.5,o=(i-e)*.5,a=r*r,l=r*a;return(2*e-2*n+s+o)*l+(-3*e+3*n-2*s-o)*a+s*r+e}function $v(r,t){const e=1-r;return e*e*t}function Jv(r,t){return 2*(1-r)*r*t}function Qv(r,t){return r*r*t}function Ps(r,t,e,n){return $v(r,t)+Jv(r,e)+Qv(r,n)}function t_(r,t){const e=1-r;return e*e*e*t}function e_(r,t){const e=1-r;return 3*e*e*r*t}function n_(r,t){return 3*(1-r)*r*r*t}function i_(r,t){return r*r*r*t}function Ls(r,t,e,n,i){return t_(r,t)+e_(r,e)+n_(r,n)+i_(r,i)}class Ih extends ln{constructor(t=new ht,e=new ht,n=new ht,i=new ht){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new ht){const n=e,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Ls(t,i.x,s.x,o.x,a.x),Ls(t,i.y,s.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class s_ extends ln{constructor(t=new N,e=new N,n=new N,i=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new N){const n=e,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Ls(t,i.x,s.x,o.x,a.x),Ls(t,i.y,s.y,o.y,a.y),Ls(t,i.z,s.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Aa extends ln{constructor(t=new ht,e=new ht){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ht){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ht){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class r_ extends ln{constructor(t=new N,e=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new N){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new N){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Dh extends ln{constructor(t=new ht,e=new ht,n=new ht){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ht){const n=e,i=this.v0,s=this.v1,o=this.v2;return n.set(Ps(t,i.x,s.x,o.x),Ps(t,i.y,s.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class o_ extends ln{constructor(t=new N,e=new N,n=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new N){const n=e,i=this.v0,s=this.v1,o=this.v2;return n.set(Ps(t,i.x,s.x,o.x),Ps(t,i.y,s.y,o.y),Ps(t,i.z,s.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Nh extends ln{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ht){const n=e,i=this.points,s=(i.length-1)*t,o=Math.floor(s),a=s-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(mc(a,l.x,c.x,h.x,u.x),mc(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new ht().fromArray(i))}return this}}var Uh=Object.freeze({__proto__:null,ArcCurve:Kv,CatmullRomCurve3:Zv,CubicBezierCurve:Ih,CubicBezierCurve3:s_,EllipseCurve:ba,LineCurve:Aa,LineCurve3:r_,QuadraticBezierCurve:Dh,QuadraticBezierCurve3:o_,SplineCurve:Nh});class a_ extends ln{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);t.equals(e)||this.curves.push(new Aa(e,t))}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const o=i[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const o=s[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new Uh[i.type]().fromJSON(i))}return this}}class na extends a_{constructor(t){super(),this.type="Path",this.currentPoint=new ht,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Aa(this.currentPoint.clone(),new ht(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const s=new Dh(this.currentPoint.clone(),new ht(t,e),new ht(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,s,o){const a=new Ih(this.currentPoint.clone(),new ht(t,e),new ht(n,i),new ht(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Nh(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,i,s,o),this}absarc(t,e,n,i,s,o){return this.absellipse(t,e,n,n,i,s,o),this}ellipse(t,e,n,i,s,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,s,o,a,l),this}absellipse(t,e,n,i,s,o,a,l){const c=new ba(t,e,n,i,s,o,a,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}let Rr=class extends na{constructor(t){super(t),this.uuid=On(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new na().fromJSON(i))}return this}};const l_={triangulate:function(r,t,e=2){const n=t&&t.length,i=n?t[0]*e:r.length;let s=Fh(r,0,i,e,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c,h,u,d,f;if(n&&(s=f_(r,t,s,e)),r.length>80*e){a=c=r[0],l=h=r[1];for(let m=e;m<i;m+=e)u=r[m],d=r[m+1],u<a&&(a=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);f=Math.max(c-a,h-l),f=f!==0?32767/f:0}return Bs(s,o,e,a,l,f,0),o}};function Fh(r,t,e,n,i){let s,o;if(i===w_(r,t,e,n)>0)for(s=t;s<e;s+=n)o=gc(s,r[s],r[s+1],o);else for(s=e-n;s>=t;s-=n)o=gc(s,r[s],r[s+1],o);return o&&Gr(o,o.next)&&(ks(o),o=o.next),o}function Ei(r,t){if(!r)return r;t||(t=r);let e=r,n;do if(n=!1,!e.steiner&&(Gr(e,e.next)||ae(e.prev,e,e.next)===0)){if(ks(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Bs(r,t,e,n,i,s,o){if(!r)return;!o&&s&&__(r,n,i,s);let a=r,l,c;for(;r.prev!==r.next;){if(l=r.prev,c=r.next,s?h_(r,n,i,s):c_(r)){t.push(l.i/e|0),t.push(r.i/e|0),t.push(c.i/e|0),ks(r),r=c.next,a=c.next;continue}if(r=c,r===a){o?o===1?(r=u_(Ei(r),t,e),Bs(r,t,e,n,i,s,2)):o===2&&d_(r,t,e,n,i,s):Bs(Ei(r),t,e,n,i,s,1);break}}}function c_(r){const t=r.prev,e=r,n=r.next;if(ae(t,e,n)>=0)return!1;const i=t.x,s=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=i<s?i<o?i:o:s<o?s:o,u=a<l?a<c?a:c:l<c?l:c,d=i>s?i>o?i:o:s>o?s:o,f=a>l?a>c?a:c:l>c?l:c;let m=n.next;for(;m!==t;){if(m.x>=h&&m.x<=d&&m.y>=u&&m.y<=f&&Qi(i,a,s,l,o,c,m.x,m.y)&&ae(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function h_(r,t,e,n){const i=r.prev,s=r,o=r.next;if(ae(i,s,o)>=0)return!1;const a=i.x,l=s.x,c=o.x,h=i.y,u=s.y,d=o.y,f=a<l?a<c?a:c:l<c?l:c,m=h<u?h<d?h:d:u<d?u:d,v=a>l?a>c?a:c:l>c?l:c,g=h>u?h>d?h:d:u>d?u:d,p=ia(f,m,t,e,n),x=ia(v,g,t,e,n);let _=r.prevZ,y=r.nextZ;for(;_&&_.z>=p&&y&&y.z<=x;){if(_.x>=f&&_.x<=v&&_.y>=m&&_.y<=g&&_!==i&&_!==o&&Qi(a,h,l,u,c,d,_.x,_.y)&&ae(_.prev,_,_.next)>=0||(_=_.prevZ,y.x>=f&&y.x<=v&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&Qi(a,h,l,u,c,d,y.x,y.y)&&ae(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;_&&_.z>=p;){if(_.x>=f&&_.x<=v&&_.y>=m&&_.y<=g&&_!==i&&_!==o&&Qi(a,h,l,u,c,d,_.x,_.y)&&ae(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;y&&y.z<=x;){if(y.x>=f&&y.x<=v&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&Qi(a,h,l,u,c,d,y.x,y.y)&&ae(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function u_(r,t,e){let n=r;do{const i=n.prev,s=n.next.next;!Gr(i,s)&&Oh(i,n,n.next,s)&&zs(i,s)&&zs(s,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(s.i/e|0),ks(n),ks(n.next),n=r=s),n=n.next}while(n!==r);return Ei(n)}function d_(r,t,e,n,i,s){let o=r;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&M_(o,a)){let l=Bh(o,a);o=Ei(o,o.next),l=Ei(l,l.next),Bs(o,t,e,n,i,s,0),Bs(l,t,e,n,i,s,0);return}a=a.next}o=o.next}while(o!==r)}function f_(r,t,e,n){const i=[];let s,o,a,l,c;for(s=0,o=t.length;s<o;s++)a=t[s]*n,l=s<o-1?t[s+1]*n:r.length,c=Fh(r,a,l,n,!1),c===c.next&&(c.steiner=!0),i.push(y_(c));for(i.sort(p_),s=0;s<i.length;s++)e=m_(i[s],e);return e}function p_(r,t){return r.x-t.x}function m_(r,t){const e=g_(r,t);if(!e)return t;const n=Bh(e,r);return Ei(n,n.next),Ei(e,e.next)}function g_(r,t){let e=t,n=-1/0,i;const s=r.x,o=r.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const d=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=s&&d>n&&(n=d,i=e.x<e.next.x?e:e.next,d===s))return i}e=e.next}while(e!==t);if(!i)return null;const a=i,l=i.x,c=i.y;let h=1/0,u;e=i;do s>=e.x&&e.x>=l&&s!==e.x&&Qi(o<c?s:n,o,l,c,o<c?n:s,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(s-e.x),zs(e,r)&&(u<h||u===h&&(e.x>i.x||e.x===i.x&&v_(i,e)))&&(i=e,h=u)),e=e.next;while(e!==a);return i}function v_(r,t){return ae(r.prev,r,t.prev)<0&&ae(t.next,r,r.next)<0}function __(r,t,e,n){let i=r;do i.z===0&&(i.z=ia(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,x_(i)}function x_(r){let t,e,n,i,s,o,a,l,c=1;do{for(e=r,r=null,s=null,o=0;e;){for(o++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,a--):(i=n,n=n.nextZ,l--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;e=n}s.nextZ=null,c*=2}while(o>1);return r}function ia(r,t,e,n,i){return r=(r-e)*i|0,t=(t-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,r|t<<1}function y_(r){let t=r,e=r;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==r);return e}function Qi(r,t,e,n,i,s,o,a){return(i-o)*(t-a)>=(r-o)*(s-a)&&(r-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(s-a)>=(i-o)*(n-a)}function M_(r,t){return r.next.i!==t.i&&r.prev.i!==t.i&&!S_(r,t)&&(zs(r,t)&&zs(t,r)&&E_(r,t)&&(ae(r.prev,r,t.prev)||ae(r,t.prev,t))||Gr(r,t)&&ae(r.prev,r,r.next)>0&&ae(t.prev,t,t.next)>0)}function ae(r,t,e){return(t.y-r.y)*(e.x-t.x)-(t.x-r.x)*(e.y-t.y)}function Gr(r,t){return r.x===t.x&&r.y===t.y}function Oh(r,t,e,n){const i=xr(ae(r,t,e)),s=xr(ae(r,t,n)),o=xr(ae(e,n,r)),a=xr(ae(e,n,t));return!!(i!==s&&o!==a||i===0&&_r(r,e,t)||s===0&&_r(r,n,t)||o===0&&_r(e,r,n)||a===0&&_r(e,t,n))}function _r(r,t,e){return t.x<=Math.max(r.x,e.x)&&t.x>=Math.min(r.x,e.x)&&t.y<=Math.max(r.y,e.y)&&t.y>=Math.min(r.y,e.y)}function xr(r){return r>0?1:r<0?-1:0}function S_(r,t){let e=r;do{if(e.i!==r.i&&e.next.i!==r.i&&e.i!==t.i&&e.next.i!==t.i&&Oh(e,e.next,r,t))return!0;e=e.next}while(e!==r);return!1}function zs(r,t){return ae(r.prev,r,r.next)<0?ae(r,t,r.next)>=0&&ae(r,r.prev,t)>=0:ae(r,t,r.prev)<0||ae(r,r.next,t)<0}function E_(r,t){let e=r,n=!1;const i=(r.x+t.x)/2,s=(r.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&i<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==r);return n}function Bh(r,t){const e=new sa(r.i,r.x,r.y),n=new sa(t.i,t.x,t.y),i=r.next,s=t.prev;return r.next=t,t.prev=r,e.next=i,i.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function gc(r,t,e,n){const i=new sa(r,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function ks(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function sa(r,t,e){this.i=r,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function w_(r,t,e,n){let i=0;for(let s=t,o=e-n;s<e;s+=n)i+=(r[o]-r[s])*(r[s+1]+r[o+1]),o=s;return i}class ns{static area(t){const e=t.length;let n=0;for(let i=e-1,s=0;s<e;i=s++)n+=t[i].x*t[s].y-t[s].x*t[i].y;return n*.5}static isClockWise(t){return ns.area(t)<0}static triangulateShape(t,e){const n=[],i=[],s=[];vc(t),_c(n,t);let o=t.length;e.forEach(vc);for(let l=0;l<e.length;l++)i.push(o),o+=e[l].length,_c(n,e[l]);const a=l_.triangulate(n,i);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function vc(r){const t=r.length;t>2&&r[t-1].equals(r[0])&&r.pop()}function _c(r,t){for(let e=0;e<t.length;e++)r.push(t[e].x),r.push(t[e].y)}class Ca extends Ge{constructor(t=new Rr([new ht(.5,.5),new ht(-.5,.5),new ht(-.5,-.5),new ht(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,i=[],s=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];o(c)}this.setAttribute("position",new _e(i,3)),this.setAttribute("uv",new _e(s,2)),this.computeVertexNormals();function o(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,m=e.bevelSize!==void 0?e.bevelSize:f-.1,v=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,x=e.UVGenerator!==void 0?e.UVGenerator:b_;let _,y=!1,S,A,b,I;p&&(_=p.getSpacedPoints(h),y=!0,d=!1,S=p.computeFrenetFrames(h,!1),A=new N,b=new N,I=new N),d||(g=0,f=0,m=0,v=0);const E=a.extractPoints(c);let T=E.shape;const k=E.holes;if(!ns.isClockWise(T)){T=T.reverse();for(let L=0,ut=k.length;L<ut;L++){const tt=k[L];ns.isClockWise(tt)&&(k[L]=tt.reverse())}}const P=ns.triangulateShape(T,k),F=T;for(let L=0,ut=k.length;L<ut;L++){const tt=k[L];T=T.concat(tt)}function U(L,ut,tt){return ut||console.error("THREE.ExtrudeGeometry: vec does not exist"),L.clone().addScaledVector(ut,tt)}const O=T.length,X=P.length;function G(L,ut,tt){let ot,nt,Rt;const yt=L.x-ut.x,St=L.y-ut.y,Dt=tt.x-L.x,Wt=tt.y-L.y,re=yt*yt+St*St,R=yt*Wt-St*Dt;if(Math.abs(R)>Number.EPSILON){const w=Math.sqrt(re),j=Math.sqrt(Dt*Dt+Wt*Wt),rt=ut.x-St/w,it=ut.y+yt/w,at=tt.x-Wt/j,Ct=tt.y+Dt/j,lt=((at-rt)*Wt-(Ct-it)*Dt)/(yt*Wt-St*Dt);ot=rt+yt*lt-L.x,nt=it+St*lt-L.y;const K=ot*ot+nt*nt;if(K<=2)return new ht(ot,nt);Rt=Math.sqrt(K/2)}else{let w=!1;yt>Number.EPSILON?Dt>Number.EPSILON&&(w=!0):yt<-Number.EPSILON?Dt<-Number.EPSILON&&(w=!0):Math.sign(St)===Math.sign(Wt)&&(w=!0),w?(ot=-St,nt=yt,Rt=Math.sqrt(re)):(ot=yt,nt=St,Rt=Math.sqrt(re/2))}return new ht(ot/Rt,nt/Rt)}const q=[];for(let L=0,ut=F.length,tt=ut-1,ot=L+1;L<ut;L++,tt++,ot++)tt===ut&&(tt=0),ot===ut&&(ot=0),q[L]=G(F[L],F[tt],F[ot]);const Q=[];let z,V=q.concat();for(let L=0,ut=k.length;L<ut;L++){const tt=k[L];z=[];for(let ot=0,nt=tt.length,Rt=nt-1,yt=ot+1;ot<nt;ot++,Rt++,yt++)Rt===nt&&(Rt=0),yt===nt&&(yt=0),z[ot]=G(tt[ot],tt[Rt],tt[yt]);Q.push(z),V=V.concat(z)}for(let L=0;L<g;L++){const ut=L/g,tt=f*Math.cos(ut*Math.PI/2),ot=m*Math.sin(ut*Math.PI/2)+v;for(let nt=0,Rt=F.length;nt<Rt;nt++){const yt=U(F[nt],q[nt],ot);Tt(yt.x,yt.y,-tt)}for(let nt=0,Rt=k.length;nt<Rt;nt++){const yt=k[nt];z=Q[nt];for(let St=0,Dt=yt.length;St<Dt;St++){const Wt=U(yt[St],z[St],ot);Tt(Wt.x,Wt.y,-tt)}}}const ct=m+v;for(let L=0;L<O;L++){const ut=d?U(T[L],V[L],ct):T[L];y?(b.copy(S.normals[0]).multiplyScalar(ut.x),A.copy(S.binormals[0]).multiplyScalar(ut.y),I.copy(_[0]).add(b).add(A),Tt(I.x,I.y,I.z)):Tt(ut.x,ut.y,0)}for(let L=1;L<=h;L++)for(let ut=0;ut<O;ut++){const tt=d?U(T[ut],V[ut],ct):T[ut];y?(b.copy(S.normals[L]).multiplyScalar(tt.x),A.copy(S.binormals[L]).multiplyScalar(tt.y),I.copy(_[L]).add(b).add(A),Tt(I.x,I.y,I.z)):Tt(tt.x,tt.y,u/h*L)}for(let L=g-1;L>=0;L--){const ut=L/g,tt=f*Math.cos(ut*Math.PI/2),ot=m*Math.sin(ut*Math.PI/2)+v;for(let nt=0,Rt=F.length;nt<Rt;nt++){const yt=U(F[nt],q[nt],ot);Tt(yt.x,yt.y,u+tt)}for(let nt=0,Rt=k.length;nt<Rt;nt++){const yt=k[nt];z=Q[nt];for(let St=0,Dt=yt.length;St<Dt;St++){const Wt=U(yt[St],z[St],ot);y?Tt(Wt.x,Wt.y+_[h-1].y,_[h-1].x+tt):Tt(Wt.x,Wt.y,u+tt)}}}dt(),pt();function dt(){const L=i.length/3;if(d){let ut=0,tt=O*ut;for(let ot=0;ot<X;ot++){const nt=P[ot];At(nt[2]+tt,nt[1]+tt,nt[0]+tt)}ut=h+g*2,tt=O*ut;for(let ot=0;ot<X;ot++){const nt=P[ot];At(nt[0]+tt,nt[1]+tt,nt[2]+tt)}}else{for(let ut=0;ut<X;ut++){const tt=P[ut];At(tt[2],tt[1],tt[0])}for(let ut=0;ut<X;ut++){const tt=P[ut];At(tt[0]+O*h,tt[1]+O*h,tt[2]+O*h)}}n.addGroup(L,i.length/3-L,0)}function pt(){const L=i.length/3;let ut=0;bt(F,ut),ut+=F.length;for(let tt=0,ot=k.length;tt<ot;tt++){const nt=k[tt];bt(nt,ut),ut+=nt.length}n.addGroup(L,i.length/3-L,1)}function bt(L,ut){let tt=L.length;for(;--tt>=0;){const ot=tt;let nt=tt-1;nt<0&&(nt=L.length-1);for(let Rt=0,yt=h+g*2;Rt<yt;Rt++){const St=O*Rt,Dt=O*(Rt+1),Wt=ut+ot+St,re=ut+nt+St,R=ut+nt+Dt,w=ut+ot+Dt;Kt(Wt,re,R,w)}}}function Tt(L,ut,tt){l.push(L),l.push(ut),l.push(tt)}function At(L,ut,tt){te(L),te(ut),te(tt);const ot=i.length/3,nt=x.generateTopUV(n,i,ot-3,ot-2,ot-1);Lt(nt[0]),Lt(nt[1]),Lt(nt[2])}function Kt(L,ut,tt,ot){te(L),te(ut),te(ot),te(ut),te(tt),te(ot);const nt=i.length/3,Rt=x.generateSideWallUV(n,i,nt-6,nt-3,nt-2,nt-1);Lt(Rt[0]),Lt(Rt[1]),Lt(Rt[3]),Lt(Rt[1]),Lt(Rt[2]),Lt(Rt[3])}function te(L){i.push(l[L*3+0]),i.push(l[L*3+1]),i.push(l[L*3+2])}function Lt(L){s.push(L.x),s.push(L.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return T_(e,n,t)}static fromJSON(t,e){const n=[];for(let s=0,o=t.shapes.length;s<o;s++){const a=e[t.shapes[s]];n.push(a)}const i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new Uh[i.type]().fromJSON(i)),new Ca(n,t.options)}}const b_={generateTopUV:function(r,t,e,n,i){const s=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[i*3],h=t[i*3+1];return[new ht(s,o),new ht(a,l),new ht(c,h)]},generateSideWallUV:function(r,t,e,n,i,s){const o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[i*3],f=t[i*3+1],m=t[i*3+2],v=t[s*3],g=t[s*3+1],p=t[s*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new ht(o,1-l),new ht(c,1-u),new ht(d,1-m),new ht(v,1-p)]:[new ht(a,1-l),new ht(h,1-u),new ht(f,1-m),new ht(g,1-p)]}};function T_(r,t,e){if(e.shapes=[],Array.isArray(r))for(let n=0,i=r.length;n<i;n++){const s=r[n];e.shapes.push(s.uuid)}else e.shapes.push(r.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Wr extends Ge{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new N,d=new N,f=[],m=[],v=[],g=[];for(let p=0;p<=n;p++){const x=[],_=p/n;let y=0;p===0&&o===0?y=.5/e:p===n&&l===Math.PI&&(y=-.5/e);for(let S=0;S<=e;S++){const A=S/e;u.x=-t*Math.cos(i+A*s)*Math.sin(o+_*a),u.y=t*Math.cos(o+_*a),u.z=t*Math.sin(i+A*s)*Math.sin(o+_*a),m.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),g.push(A+y,1-_),x.push(c++)}h.push(x)}for(let p=0;p<n;p++)for(let x=0;x<e;x++){const _=h[p][x+1],y=h[p][x],S=h[p+1][x],A=h[p+1][x+1];(p!==0||o>0)&&f.push(_,y,A),(p!==n-1||l<Math.PI)&&f.push(y,S,A)}this.setIndex(f),this.setAttribute("position",new _e(m,3)),this.setAttribute("normal",new _e(v,3)),this.setAttribute("uv",new _e(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wr(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class A_ extends ri{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ut(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vr,this.normalScale=new ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Is extends ri{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ut(16777215),this.specular=new Ut(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vr,this.normalScale=new ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Br,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class C_ extends ri{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vr,this.normalScale=new ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Br,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}function Gn(r,t,e){return zh(r)?new r.constructor(r.subarray(t,e!==void 0?e:r.length)):r.slice(t,e)}function yr(r,t,e){return!r||!e&&r.constructor===t?r:typeof t.BYTES_PER_ELEMENT=="number"?new t(r):Array.prototype.slice.call(r)}function zh(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function R_(r){function t(i,s){return r[i]-r[s]}const e=r.length,n=new Array(e);for(let i=0;i!==e;++i)n[i]=i;return n.sort(t),n}function xc(r,t,e){const n=r.length,i=new r.constructor(n);for(let s=0,o=0;o!==n;++s){const a=e[s]*t;for(let l=0;l!==t;++l)i[o++]=r[a+l]}return i}function kh(r,t,e,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(t.push(s.time),e.push.apply(e,o)),s=r[i++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(t.push(s.time),o.toArray(e,e.length)),s=r[i++];while(s!==void 0);else do o=s[n],o!==void 0&&(t.push(s.time),e.push(o)),s=r[i++];while(s!==void 0)}class Xr{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let n=this._cachedIndex,i=e[n],s=e[n-1];t:{e:{let o;n:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=e[++n],t<i)break e}o=e.length;break n}if(!(t>=s)){const a=e[1];t<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=e[--n-1],t>=s)break e}o=n,n=0;break n}break t}for(;n<o;){const a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i;for(let o=0;o!==i;++o)e[o]=n[s+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class P_ extends Xr{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ki,endingEnd:Ki}}intervalChanged_(t,e,n){const i=this.parameterPositions;let s=t-2,o=t+1,a=i[s],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Zi:s=t,a=2*e-n;break;case Dr:s=i.length-2,a=e+i[s]-i[s+1];break;default:s=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Zi:o=t,l=2*n-e;break;case Dr:o=1,l=n+i[1]-i[0];break;default:o=t-1,l=e}const c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(t,e,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(n-e)/(i-e),v=m*m,g=v*m,p=-d*g+2*d*v-d*m,x=(1+d)*g+(-1.5-2*d)*v+(-.5+d)*m+1,_=(-1-f)*g+(1.5+f)*v+.5*m,y=f*g-f*v;for(let S=0;S!==a;++S)s[S]=p*o[h+S]+x*o[c+S]+_*o[l+S]+y*o[u+S];return s}}class Vh extends Xr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(i-e),u=1-h;for(let d=0;d!==a;++d)s[d]=o[c+d]*u+o[l+d]*h;return s}}class L_ extends Xr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}}class _n{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=yr(e,this.TimeBufferType),this.values=yr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:yr(t.times,Array),values:yr(t.values,Array)};const i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new L_(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Vh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new P_(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Lr:e=this.InterpolantFactoryMethodDiscrete;break;case Ir:e=this.InterpolantFactoryMethodLinear;break;case so:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Lr;case this.InterpolantFactoryMethodLinear:return Ir;case this.InterpolantFactoryMethodSmooth:return so}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){const n=this.times,i=n.length;let s=0,o=i-1;for(;s!==i&&n[s]<t;)++s;for(;o!==-1&&n[o]>e;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=Gn(n,s,o),this.values=Gn(this.values,s*a,o*a)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==s;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(i!==void 0&&zh(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){const t=Gn(this.times),e=Gn(this.values),n=this.getValueSize(),i=this.getInterpolation()===so,s=t.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(i)l=!0;else{const u=a*n,d=u-n,f=u+n;for(let m=0;m!==n;++m){const v=e[u+m];if(v!==e[d+m]||v!==e[f+m]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];const u=a*n,d=o*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++o}}if(s>0){t[o]=t[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=Gn(t,0,o),this.values=Gn(e,0,o*n)):(this.times=t,this.values=e),this}clone(){const t=Gn(this.times,0),e=Gn(this.values,0),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}}_n.prototype.TimeBufferType=Float32Array;_n.prototype.ValueBufferType=Float32Array;_n.prototype.DefaultInterpolation=Ir;class ds extends _n{}ds.prototype.ValueTypeName="bool";ds.prototype.ValueBufferType=Array;ds.prototype.DefaultInterpolation=Lr;ds.prototype.InterpolantFactoryMethodLinear=void 0;ds.prototype.InterpolantFactoryMethodSmooth=void 0;class Hh extends _n{}Hh.prototype.ValueTypeName="color";class Vs extends _n{}Vs.prototype.ValueTypeName="number";class I_ extends Xr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(i-e);let c=t*a;for(let h=c+a;c!==h;c+=4)Ne.slerpFlat(s,0,o,c-a,o,c,l);return s}}class fs extends _n{InterpolantFactoryMethodLinear(t){return new I_(this.times,this.values,this.getValueSize(),t)}}fs.prototype.ValueTypeName="quaternion";fs.prototype.DefaultInterpolation=Ir;fs.prototype.InterpolantFactoryMethodSmooth=void 0;class ps extends _n{}ps.prototype.ValueTypeName="string";ps.prototype.ValueBufferType=Array;ps.prototype.DefaultInterpolation=Lr;ps.prototype.InterpolantFactoryMethodLinear=void 0;ps.prototype.InterpolantFactoryMethodSmooth=void 0;class Hs extends _n{}Hs.prototype.ValueTypeName="vector";class ra{constructor(t,e=-1,n,i=ma){this.name=t,this.tracks=n,this.duration=e,this.blendMode=i,this.uuid=On(),this.duration<0&&this.resetDuration()}static parse(t){const e=[],n=t.tracks,i=1/(t.fps||1);for(let o=0,a=n.length;o!==a;++o)e.push(N_(n[o]).scale(i));const s=new this(t.name,t.duration,e,t.blendMode);return s.uuid=t.uuid,s}static toJSON(t){const e=[],n=t.tracks,i={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let s=0,o=n.length;s!==o;++s)e.push(_n.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(t,e,n,i){const s=e.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const h=R_(l);l=xc(l,1,h),c=xc(c,1,h),!i&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new Vs(".morphTargetInfluences["+e[a].name+"]",l,c).scale(1/n))}return new this(t,-1,o)}static findByName(t,e){let n=t;if(!Array.isArray(t)){const i=t;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===e)return n[i];return null}static CreateClipsFromMorphTargetSequences(t,e,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=t.length;a<l;a++){const c=t[a],h=c.name.match(s);if(h&&h.length>1){const u=h[1];let d=i[u];d||(i[u]=d=[]),d.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],e,n));return o}static parseAnimation(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,f,m,v){if(f.length!==0){const g=[],p=[];kh(f,g,p,m),g.length!==0&&v.push(new u(d,g,p))}},i=[],s=t.name||"default",o=t.fps||30,a=t.blendMode;let l=t.length||-1;const c=t.hierarchy||[];for(let u=0;u<c.length;u++){const d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let m;for(m=0;m<d.length;m++)if(d[m].morphTargets)for(let v=0;v<d[m].morphTargets.length;v++)f[d[m].morphTargets[v]]=-1;for(const v in f){const g=[],p=[];for(let x=0;x!==d[m].morphTargets.length;++x){const _=d[m];g.push(_.time),p.push(_.morphTarget===v?1:0)}i.push(new Vs(".morphTargetInfluence["+v+"]",g,p))}l=f.length*o}else{const f=".bones["+e[u].name+"]";n(Hs,f+".position",d,"pos",i),n(fs,f+".quaternion",d,"rot",i),n(Hs,f+".scale",d,"scl",i)}}return i.length===0?null:new this(s,l,i,a)}resetDuration(){const t=this.tracks;let e=0;for(let n=0,i=t.length;n!==i;++n){const s=this.tracks[n];e=Math.max(e,s.times[s.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function D_(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Vs;case"vector":case"vector2":case"vector3":case"vector4":return Hs;case"color":return Hh;case"quaternion":return fs;case"bool":case"boolean":return ds;case"string":return ps}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function N_(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=D_(r.type);if(r.times===void 0){const e=[],n=[];kh(r.keys,e,n,"value"),r.times=e,r.values=n}return t.parse!==void 0?t.parse(r):new t(r.name,r.times,r.values,r.interpolation)}const Fr={enabled:!1,files:{},add:function(r,t){this.enabled!==!1&&(this.files[r]=t)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class U_{constructor(t,e,n){const i=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,s===!1&&i.onStart!==void 0&&i.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const f=c[u],m=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null}}}const F_=new U_;class ti{constructor(t){this.manager=t!==void 0?t:F_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}ti.DEFAULT_MATERIAL_NAME="__DEFAULT";const Tn={};class O_ extends Error{constructor(t,e){super(t),this.response=e}}class Gh extends ti{constructor(t){super(t)}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=Fr.get(t);if(s!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(s),this.manager.itemEnd(t)},0),s;if(Tn[t]!==void 0){Tn[t].push({onLoad:e,onProgress:n,onError:i});return}Tn[t]=[],Tn[t].push({onLoad:e,onProgress:n,onError:i});const o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=Tn[t],u=c.body.getReader(),d=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),f=d?parseInt(d):0,m=f!==0;let v=0;const g=new ReadableStream({start(p){x();function x(){u.read().then(({done:_,value:y})=>{if(_)p.close();else{v+=y.byteLength;const S=new ProgressEvent("progress",{lengthComputable:m,loaded:v,total:f});for(let A=0,b=h.length;A<b;A++){const I=h[A];I.onProgress&&I.onProgress(S)}p.enqueue(y),x()}})}}});return new Response(g)}else throw new O_(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a===void 0)return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(m=>f.decode(m))}}}).then(c=>{Fr.add(t,c);const h=Tn[t];delete Tn[t];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{const h=Tn[t];if(h===void 0)throw this.manager.itemError(t),c;delete Tn[t];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class B_ extends ti{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,o=Fr.get(t);if(o!==void 0)return s.manager.itemStart(t),setTimeout(function(){e&&e(o),s.manager.itemEnd(t)},0),o;const a=Os("img");function l(){h(),Fr.add(t,this),e&&e(this),s.manager.itemEnd(t)}function c(u){h(),i&&i(u),s.manager.itemError(t),s.manager.itemEnd(t)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(t),a.src=t,a}}class z_ extends ti{constructor(t){super(t)}load(t,e,n,i){const s=new be,o=new B_(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){s.image=a,s.needsUpdate=!0,e!==void 0&&e(s)},n,i),s}}class qr extends le{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ut(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}const No=new Pt,yc=new N,Mc=new N;class Ra{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ht(512,512),this.map=null,this.mapPass=null,this.matrix=new Pt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ya,this._frameExtents=new ht(1,1),this._viewportCount=1,this._viewports=[new Jt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;yc.setFromMatrixPosition(t.matrixWorld),e.position.copy(yc),Mc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Mc),e.updateMatrixWorld(),No.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(No),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(No)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class k_ extends Ra{constructor(){super(new De(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=as*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=t.distance||e.far;(n!==e.fov||i!==e.aspect||s!==e.far)&&(e.fov=n,e.aspect=i,e.far=s,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class V_ extends qr{constructor(t,e,n=0,i=Math.PI/3,s=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(le.DEFAULT_UP),this.updateMatrix(),this.target=new le,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new k_}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const Sc=new Pt,ys=new N,Uo=new N;class H_ extends Ra{constructor(){super(new De(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ht(4,2),this._viewportCount=6,this._viewports=[new Jt(2,1,1,1),new Jt(0,1,1,1),new Jt(3,1,1,1),new Jt(1,1,1,1),new Jt(3,0,1,1),new Jt(1,0,1,1)],this._cubeDirections=[new N(1,0,0),new N(-1,0,0),new N(0,0,1),new N(0,0,-1),new N(0,1,0),new N(0,-1,0)],this._cubeUps=[new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,0,1),new N(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),ys.setFromMatrixPosition(t.matrixWorld),n.position.copy(ys),Uo.copy(n.position),Uo.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Uo),n.updateMatrixWorld(),i.makeTranslation(-ys.x,-ys.y,-ys.z),Sc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Sc)}}class Ec extends qr{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new H_}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class G_ extends Ra{constructor(){super(new Sa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Wh extends qr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(le.DEFAULT_UP),this.updateMatrix(),this.target=new le,this.shadow=new G_}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class W_ extends qr{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class X_{static decodeText(t){if(typeof TextDecoder<"u")return new TextDecoder().decode(t);let e="";for(let n=0,i=t.length;n<i;n++)e+=String.fromCharCode(t[n]);try{return decodeURIComponent(escape(e))}catch{return e}}static extractUrlBase(t){const e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}class q_{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=wc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=wc();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function wc(){return(typeof performance>"u"?Date:performance).now()}class j_{constructor(t,e,n){this.binding=t,this.valueSize=n;let i,s,o;switch(e){case"quaternion":i=this._slerp,s=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,s=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,s=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=s,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(t,e){const n=this.buffer,i=this.valueSize,s=t*i+i;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[s+a]=n[a];o=e}else{o+=e;const a=e/o;this._mixBufferRegion(n,s,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(t){const e=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(e,i,0,t,n),this.cumulativeWeightAdditive+=t}apply(t){const e=this.valueSize,n=this.buffer,i=t*e+e,s=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const l=e*this._origIndex;this._mixBufferRegion(n,i,l,1-s,e)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*e,1,e);for(let l=e,c=e+e;l!==c;++l)if(n[l]!==n[l+e]){a.setValue(n,i);break}}saveOriginalState(){const t=this.binding,e=this.buffer,n=this.valueSize,i=n*this._origIndex;t.getValue(e,i);for(let s=n,o=i;s!==o;++s)e[s]=e[i+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const t=this.valueSize*3;this.binding.setValue(this.buffer,t)}_setAdditiveIdentityNumeric(){const t=this._addIndex*this.valueSize,e=t+this.valueSize;for(let n=t;n<e;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const t=this._origIndex*this.valueSize,e=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[e+n]=this.buffer[t+n]}_select(t,e,n,i,s){if(i>=.5)for(let o=0;o!==s;++o)t[e+o]=t[n+o]}_slerp(t,e,n,i){Ne.slerpFlat(t,e,t,e,t,n,i)}_slerpAdditive(t,e,n,i,s){const o=this._workIndex*s;Ne.multiplyQuaternionsFlat(t,o,t,e,t,n),Ne.slerpFlat(t,e,t,e,t,o,i)}_lerp(t,e,n,i,s){const o=1-i;for(let a=0;a!==s;++a){const l=e+a;t[l]=t[l]*o+t[n+a]*i}}_lerpAdditive(t,e,n,i,s){for(let o=0;o!==s;++o){const a=e+o;t[a]=t[a]+t[n+o]*i}}}const Pa="\\[\\]\\.:\\/",Y_=new RegExp("["+Pa+"]","g"),La="[^"+Pa+"]",K_="[^"+Pa.replace("\\.","")+"]",Z_=/((?:WC+[\/:])*)/.source.replace("WC",La),$_=/(WCOD+)?/.source.replace("WCOD",K_),J_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",La),Q_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",La),t0=new RegExp("^"+Z_+$_+J_+Q_+"$"),e0=["material","materials","bones","map"];class n0{constructor(t,e,n){const i=n||Zt.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class Zt{constructor(t,e,n){this.path=e,this.parsedPath=n||Zt.parseTrackName(e),this.node=Zt.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new Zt.Composite(t,e,n):new Zt(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Y_,"")}static parseTrackName(t){const e=t0.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);e0.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){const n=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===e||a.uuid===e)return a;const l=n(a.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,n=e.objectName,i=e.propertyName;let s=e.propertyIndex;if(t||(t=Zt.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}const o=t[i];if(o===void 0){const c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Zt.Composite=n0;Zt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Zt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Zt.prototype.GetterByBindingType=[Zt.prototype._getValue_direct,Zt.prototype._getValue_array,Zt.prototype._getValue_arrayElement,Zt.prototype._getValue_toArray];Zt.prototype.SetterByBindingTypeAndVersioning=[[Zt.prototype._setValue_direct,Zt.prototype._setValue_direct_setNeedsUpdate,Zt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Zt.prototype._setValue_array,Zt.prototype._setValue_array_setNeedsUpdate,Zt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Zt.prototype._setValue_arrayElement,Zt.prototype._setValue_arrayElement_setNeedsUpdate,Zt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Zt.prototype._setValue_fromArray,Zt.prototype._setValue_fromArray_setNeedsUpdate,Zt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class i0{constructor(t,e,n=null,i=e.blendMode){this._mixer=t,this._clip=e,this._localRoot=n,this.blendMode=i;const s=e.tracks,o=s.length,a=new Array(o),l={endingStart:Ki,endingEnd:Ki};for(let c=0;c!==o;++c){const h=s[c].createInterpolant(null);a[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=ad,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(t){return this._startTime=t,this}setLoop(t,e){return this.loop=t,this.repetitions=e,this}setEffectiveWeight(t){return this.weight=t,this._effectiveWeight=this.enabled?t:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(t){return this._scheduleFading(t,0,1)}fadeOut(t){return this._scheduleFading(t,1,0)}crossFadeFrom(t,e,n){if(t.fadeOut(e),this.fadeIn(e),n){const i=this._clip.duration,s=t._clip.duration,o=s/i,a=i/s;t.warp(1,o,e),this.warp(a,1,e)}return this}crossFadeTo(t,e,n){return t.crossFadeFrom(this,e,n)}stopFading(){const t=this._weightInterpolant;return t!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}setEffectiveTimeScale(t){return this.timeScale=t,this._effectiveTimeScale=this.paused?0:t,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(t){return this.timeScale=this._clip.duration/t,this.stopWarping()}syncWith(t){return this.time=t.time,this.timeScale=t.timeScale,this.stopWarping()}halt(t){return this.warp(this._effectiveTimeScale,0,t)}warp(t,e,n){const i=this._mixer,s=i.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);const l=a.parameterPositions,c=a.sampleValues;return l[0]=s,l[1]=s+n,c[0]=t/o,c[1]=e/o,this}stopWarping(){const t=this._timeScaleInterpolant;return t!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(t,e,n,i){if(!this.enabled){this._updateWeight(t);return}const s=this._startTime;if(s!==null){const l=(t-s)*n;l<0||n===0?e=0:(this._startTime=null,e=n*l)}e*=this._updateTimeScale(t);const o=this._updateTime(e),a=this._updateWeight(t);if(a>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case cd:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(o),c[h].accumulateAdditive(a);break;case ma:default:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(o),c[h].accumulate(i,a)}}}_updateWeight(t){let e=0;if(this.enabled){e=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(t)[0];e*=i,t>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=e,e}_updateTimeScale(t){let e=0;if(!this.paused){e=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(t)[0];e*=i,t>n.parameterPositions[1]&&(this.stopWarping(),e===0?this.paused=!0:this.timeScale=e)}}return this._effectiveTimeScale=e,e}_updateTime(t){const e=this._clip.duration,n=this.loop;let i=this.time+t,s=this._loopCount;const o=n===ld;if(t===0)return s===-1?i:o&&(s&1)===1?e-i:i;if(n===kr){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));t:{if(i>=e)i=e;else if(i<0)i=0;else{this.time=i;break t}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t<0?-1:1})}}else{if(s===-1&&(t>=0?(s=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=e||i<0){const a=Math.floor(i/e);i-=e*a,s+=Math.abs(a);const l=this.repetitions-s;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=t>0?e:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t>0?1:-1});else{if(l===1){const c=t<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=s,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=i;if(o&&(s&1)===1)return e-i}return i}_setEndings(t,e,n){const i=this._interpolantSettings;n?(i.endingStart=Zi,i.endingEnd=Zi):(t?i.endingStart=this.zeroSlopeAtStart?Zi:Ki:i.endingStart=Dr,e?i.endingEnd=this.zeroSlopeAtEnd?Zi:Ki:i.endingEnd=Dr)}_scheduleFading(t,e,n){const i=this._mixer,s=i.time;let o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,l=o.sampleValues;return a[0]=s,l[0]=e,a[1]=s+t,l[1]=n,this}}const s0=new Float32Array(1);class r0 extends ii{constructor(t){super(),this._root=t,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(t,e){const n=t._localRoot||this._root,i=t._clip.tracks,s=i.length,o=t._propertyBindings,a=t._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let h=c[l];h===void 0&&(h={},c[l]=h);for(let u=0;u!==s;++u){const d=i[u],f=d.name;let m=h[f];if(m!==void 0)++m.referenceCount,o[u]=m;else{if(m=o[u],m!==void 0){m._cacheIndex===null&&(++m.referenceCount,this._addInactiveBinding(m,l,f));continue}const v=e&&e._propertyBindings[u].binding.parsedPath;m=new j_(Zt.create(n,f,v),d.ValueTypeName,d.getValueSize()),++m.referenceCount,this._addInactiveBinding(m,l,f),o[u]=m}a[u].resultBuffer=m.buffer}}_activateAction(t){if(!this._isActiveAction(t)){if(t._cacheIndex===null){const n=(t._localRoot||this._root).uuid,i=t._clip.uuid,s=this._actionsByClip[i];this._bindAction(t,s&&s.knownActions[0]),this._addInactiveAction(t,i,n)}const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const s=e[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(t)}}_deactivateAction(t){if(this._isActiveAction(t)){const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const s=e[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(t)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const t=this;this.stats={actions:{get total(){return t._actions.length},get inUse(){return t._nActiveActions}},bindings:{get total(){return t._bindings.length},get inUse(){return t._nActiveBindings}},controlInterpolants:{get total(){return t._controlInterpolants.length},get inUse(){return t._nActiveControlInterpolants}}}}_isActiveAction(t){const e=t._cacheIndex;return e!==null&&e<this._nActiveActions}_addInactiveAction(t,e,n){const i=this._actions,s=this._actionsByClip;let o=s[e];if(o===void 0)o={knownActions:[t],actionByRoot:{}},t._byClipCacheIndex=0,s[e]=o;else{const a=o.knownActions;t._byClipCacheIndex=a.length,a.push(t)}t._cacheIndex=i.length,i.push(t),o.actionByRoot[n]=t}_removeInactiveAction(t){const e=this._actions,n=e[e.length-1],i=t._cacheIndex;n._cacheIndex=i,e[i]=n,e.pop(),t._cacheIndex=null;const s=t._clip.uuid,o=this._actionsByClip,a=o[s],l=a.knownActions,c=l[l.length-1],h=t._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),t._byClipCacheIndex=null;const u=a.actionByRoot,d=(t._localRoot||this._root).uuid;delete u[d],l.length===0&&delete o[s],this._removeInactiveBindingsForAction(t)}_removeInactiveBindingsForAction(t){const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const s=e[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(t){const e=this._actions,n=t._cacheIndex,i=this._nActiveActions++,s=e[i];t._cacheIndex=i,e[i]=t,s._cacheIndex=n,e[n]=s}_takeBackAction(t){const e=this._actions,n=t._cacheIndex,i=--this._nActiveActions,s=e[i];t._cacheIndex=i,e[i]=t,s._cacheIndex=n,e[n]=s}_addInactiveBinding(t,e,n){const i=this._bindingsByRootAndName,s=this._bindings;let o=i[e];o===void 0&&(o={},i[e]=o),o[n]=t,t._cacheIndex=s.length,s.push(t)}_removeInactiveBinding(t){const e=this._bindings,n=t.binding,i=n.rootNode.uuid,s=n.path,o=this._bindingsByRootAndName,a=o[i],l=e[e.length-1],c=t._cacheIndex;l._cacheIndex=c,e[c]=l,e.pop(),delete a[s],Object.keys(a).length===0&&delete o[i]}_lendBinding(t){const e=this._bindings,n=t._cacheIndex,i=this._nActiveBindings++,s=e[i];t._cacheIndex=i,e[i]=t,s._cacheIndex=n,e[n]=s}_takeBackBinding(t){const e=this._bindings,n=t._cacheIndex,i=--this._nActiveBindings,s=e[i];t._cacheIndex=i,e[i]=t,s._cacheIndex=n,e[n]=s}_lendControlInterpolant(){const t=this._controlInterpolants,e=this._nActiveControlInterpolants++;let n=t[e];return n===void 0&&(n=new Vh(new Float32Array(2),new Float32Array(2),1,s0),n.__cacheIndex=e,t[e]=n),n}_takeBackControlInterpolant(t){const e=this._controlInterpolants,n=t.__cacheIndex,i=--this._nActiveControlInterpolants,s=e[i];t.__cacheIndex=i,e[i]=t,s.__cacheIndex=n,e[n]=s}clipAction(t,e,n){const i=e||this._root,s=i.uuid;let o=typeof t=="string"?ra.findByName(i,t):t;const a=o!==null?o.uuid:t,l=this._actionsByClip[a];let c=null;if(n===void 0&&(o!==null?n=o.blendMode:n=ma),l!==void 0){const u=l.actionByRoot[s];if(u!==void 0&&u.blendMode===n)return u;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;const h=new i0(this,o,e,n);return this._bindAction(h,c),this._addInactiveAction(h,a,s),h}existingAction(t,e){const n=e||this._root,i=n.uuid,s=typeof t=="string"?ra.findByName(n,t):t,o=s?s.uuid:t,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){const t=this._actions,e=this._nActiveActions;for(let n=e-1;n>=0;--n)t[n].stop();return this}update(t){t*=this.timeScale;const e=this._actions,n=this._nActiveActions,i=this.time+=t,s=Math.sign(t),o=this._accuIndex^=1;for(let c=0;c!==n;++c)e[c]._update(i,t,s,o);const a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(t){this.time=0;for(let e=0;e<this._actions.length;e++)this._actions[e].time=0;return this.update(t)}getRoot(){return this._root}uncacheClip(t){const e=this._actions,n=t.uuid,i=this._actionsByClip,s=i[n];if(s!==void 0){const o=s.knownActions;for(let a=0,l=o.length;a!==l;++a){const c=o[a];this._deactivateAction(c);const h=c._cacheIndex,u=e[e.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=h,e[h]=u,e.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(t){const e=t.uuid,n=this._actionsByClip;for(const o in n){const a=n[o].actionByRoot,l=a[e];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const i=this._bindingsByRootAndName,s=i[e];if(s!==void 0)for(const o in s){const a=s[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(t,e){const n=this.existingAction(t,e);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}class o0{constructor(t,e,n=0,i=1/0){this.ray=new Xs(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new va,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,n=[]){return oa(t,this,n,e),n.sort(bc),n}intersectObjects(t,e=!0,n=[]){for(let i=0,s=t.length;i<s;i++)oa(t[i],this,n,e);return n.sort(bc),n}}function bc(r,t){return r.distance-t.distance}function oa(r,t,e,n){if(r.layers.test(t.layers)&&r.raycast(t,e),n===!0){const i=r.children;for(let s=0,o=i.length;s<o;s++)oa(i[s],t,e,!0)}}class Tc{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Ee(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class a0{constructor(){this.type="ShapePath",this.color=new Ut,this.subPaths=[],this.currentPath=null}moveTo(t,e){return this.currentPath=new na,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,e),this}lineTo(t,e){return this.currentPath.lineTo(t,e),this}quadraticCurveTo(t,e,n,i){return this.currentPath.quadraticCurveTo(t,e,n,i),this}bezierCurveTo(t,e,n,i,s,o){return this.currentPath.bezierCurveTo(t,e,n,i,s,o),this}splineThru(t){return this.currentPath.splineThru(t),this}toShapes(t){function e(p){const x=[];for(let _=0,y=p.length;_<y;_++){const S=p[_],A=new Rr;A.curves=S.curves,x.push(A)}return x}function n(p,x){const _=x.length;let y=!1;for(let S=_-1,A=0;A<_;S=A++){let b=x[S],I=x[A],E=I.x-b.x,T=I.y-b.y;if(Math.abs(T)>Number.EPSILON){if(T<0&&(b=x[A],E=-E,I=x[S],T=-T),p.y<b.y||p.y>I.y)continue;if(p.y===b.y){if(p.x===b.x)return!0}else{const k=T*(p.x-b.x)-E*(p.y-b.y);if(k===0)return!0;if(k<0)continue;y=!y}}else{if(p.y!==b.y)continue;if(I.x<=p.x&&p.x<=b.x||b.x<=p.x&&p.x<=I.x)return!0}}return y}const i=ns.isClockWise,s=this.subPaths;if(s.length===0)return[];let o,a,l;const c=[];if(s.length===1)return a=s[0],l=new Rr,l.curves=a.curves,c.push(l),c;let h=!i(s[0].getPoints());h=t?!h:h;const u=[],d=[];let f=[],m=0,v;d[m]=void 0,f[m]=[];for(let p=0,x=s.length;p<x;p++)a=s[p],v=a.getPoints(),o=i(v),o=t?!o:o,o?(!h&&d[m]&&m++,d[m]={s:new Rr,p:v},d[m].s.curves=a.curves,h&&m++,f[m]=[]):f[m].push({h:a,p:v[0]});if(!d[0])return e(s);if(d.length>1){let p=!1,x=0;for(let _=0,y=d.length;_<y;_++)u[_]=[];for(let _=0,y=d.length;_<y;_++){const S=f[_];for(let A=0;A<S.length;A++){const b=S[A];let I=!0;for(let E=0;E<d.length;E++)n(b.p,d[E].p)&&(_!==E&&x++,I?(I=!1,u[E].push(b)):p=!0);I&&u[_].push(b)}}x>0&&p===!1&&(f=u)}let g;for(let p=0,x=d.length;p<x;p++){l=d[p].s,c.push(l),g=f[p];for(let _=0,y=g.length;_<y;_++)l.holes.push(g[_].h)}return c}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:fa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=fa);class an{constructor(t){t===void 0&&(t=[0,0,0,0,0,0,0,0,0]),this.elements=t}identity(){const t=this.elements;t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1}setZero(){const t=this.elements;t[0]=0,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=0,t[6]=0,t[7]=0,t[8]=0}setTrace(t){const e=this.elements;e[0]=t.x,e[4]=t.y,e[8]=t.z}getTrace(t){t===void 0&&(t=new M);const e=this.elements;return t.x=e[0],t.y=e[4],t.z=e[8],t}vmult(t,e){e===void 0&&(e=new M);const n=this.elements,i=t.x,s=t.y,o=t.z;return e.x=n[0]*i+n[1]*s+n[2]*o,e.y=n[3]*i+n[4]*s+n[5]*o,e.z=n[6]*i+n[7]*s+n[8]*o,e}smult(t){for(let e=0;e<this.elements.length;e++)this.elements[e]*=t}mmult(t,e){e===void 0&&(e=new an);const n=this.elements,i=t.elements,s=e.elements,o=n[0],a=n[1],l=n[2],c=n[3],h=n[4],u=n[5],d=n[6],f=n[7],m=n[8],v=i[0],g=i[1],p=i[2],x=i[3],_=i[4],y=i[5],S=i[6],A=i[7],b=i[8];return s[0]=o*v+a*x+l*S,s[1]=o*g+a*_+l*A,s[2]=o*p+a*y+l*b,s[3]=c*v+h*x+u*S,s[4]=c*g+h*_+u*A,s[5]=c*p+h*y+u*b,s[6]=d*v+f*x+m*S,s[7]=d*g+f*_+m*A,s[8]=d*p+f*y+m*b,e}scale(t,e){e===void 0&&(e=new an);const n=this.elements,i=e.elements;for(let s=0;s!==3;s++)i[3*s+0]=t.x*n[3*s+0],i[3*s+1]=t.y*n[3*s+1],i[3*s+2]=t.z*n[3*s+2];return e}solve(t,e){e===void 0&&(e=new M);const n=3,i=4,s=[];let o,a;for(o=0;o<n*i;o++)s.push(0);for(o=0;o<3;o++)for(a=0;a<3;a++)s[o+i*a]=this.elements[o+3*a];s[3+4*0]=t.x,s[3+4*1]=t.y,s[3+4*2]=t.z;let l=3;const c=l;let h;const u=4;let d;do{if(o=c-l,s[o+i*o]===0){for(a=o+1;a<c;a++)if(s[o+i*a]!==0){h=u;do d=u-h,s[d+i*o]+=s[d+i*a];while(--h);break}}if(s[o+i*o]!==0)for(a=o+1;a<c;a++){const f=s[o+i*a]/s[o+i*o];h=u;do d=u-h,s[d+i*a]=d<=o?0:s[d+i*a]-s[d+i*o]*f;while(--h)}}while(--l);if(e.z=s[2*i+3]/s[2*i+2],e.y=(s[1*i+3]-s[1*i+2]*e.z)/s[1*i+1],e.x=(s[0*i+3]-s[0*i+2]*e.z-s[0*i+1]*e.y)/s[0*i+0],isNaN(e.x)||isNaN(e.y)||isNaN(e.z)||e.x===1/0||e.y===1/0||e.z===1/0)throw`Could not solve equation! Got x=[${e.toString()}], b=[${t.toString()}], A=[${this.toString()}]`;return e}e(t,e,n){if(n===void 0)return this.elements[e+3*t];this.elements[e+3*t]=n}copy(t){for(let e=0;e<t.elements.length;e++)this.elements[e]=t.elements[e];return this}toString(){let t="";const e=",";for(let n=0;n<9;n++)t+=this.elements[n]+e;return t}reverse(t){t===void 0&&(t=new an);const e=3,n=6,i=l0;let s,o;for(s=0;s<3;s++)for(o=0;o<3;o++)i[s+n*o]=this.elements[s+3*o];i[3+6*0]=1,i[3+6*1]=0,i[3+6*2]=0,i[4+6*0]=0,i[4+6*1]=1,i[4+6*2]=0,i[5+6*0]=0,i[5+6*1]=0,i[5+6*2]=1;let a=3;const l=a;let c;const h=n;let u;do{if(s=l-a,i[s+n*s]===0){for(o=s+1;o<l;o++)if(i[s+n*o]!==0){c=h;do u=h-c,i[u+n*s]+=i[u+n*o];while(--c);break}}if(i[s+n*s]!==0)for(o=s+1;o<l;o++){const d=i[s+n*o]/i[s+n*s];c=h;do u=h-c,i[u+n*o]=u<=s?0:i[u+n*o]-i[u+n*s]*d;while(--c)}}while(--a);s=2;do{o=s-1;do{const d=i[s+n*o]/i[s+n*s];c=n;do u=n-c,i[u+n*o]=i[u+n*o]-i[u+n*s]*d;while(--c)}while(o--)}while(--s);s=2;do{const d=1/i[s+n*s];c=n;do u=n-c,i[u+n*s]=i[u+n*s]*d;while(--c)}while(s--);s=2;do{o=2;do{if(u=i[e+o+n*s],isNaN(u)||u===1/0)throw`Could not reverse! A=[${this.toString()}]`;t.e(s,o,u)}while(o--)}while(s--);return t}setRotationFromQuaternion(t){const e=t.x,n=t.y,i=t.z,s=t.w,o=e+e,a=n+n,l=i+i,c=e*o,h=e*a,u=e*l,d=n*a,f=n*l,m=i*l,v=s*o,g=s*a,p=s*l,x=this.elements;return x[3*0+0]=1-(d+m),x[3*0+1]=h-p,x[3*0+2]=u+g,x[3*1+0]=h+p,x[3*1+1]=1-(c+m),x[3*1+2]=f-v,x[3*2+0]=u-g,x[3*2+1]=f+v,x[3*2+2]=1-(c+d),this}transpose(t){t===void 0&&(t=new an);const e=this.elements,n=t.elements;let i;return n[0]=e[0],n[4]=e[4],n[8]=e[8],i=e[1],n[1]=e[3],n[3]=i,i=e[2],n[2]=e[6],n[6]=i,i=e[5],n[5]=e[7],n[7]=i,t}}const l0=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];class M{constructor(t,e,n){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),this.x=t,this.y=e,this.z=n}cross(t,e){e===void 0&&(e=new M);const n=t.x,i=t.y,s=t.z,o=this.x,a=this.y,l=this.z;return e.x=a*s-l*i,e.y=l*n-o*s,e.z=o*i-a*n,e}set(t,e,n){return this.x=t,this.y=e,this.z=n,this}setZero(){this.x=this.y=this.z=0}vadd(t,e){if(e)e.x=t.x+this.x,e.y=t.y+this.y,e.z=t.z+this.z;else return new M(this.x+t.x,this.y+t.y,this.z+t.z)}vsub(t,e){if(e)e.x=this.x-t.x,e.y=this.y-t.y,e.z=this.z-t.z;else return new M(this.x-t.x,this.y-t.y,this.z-t.z)}crossmat(){return new an([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])}normalize(){const t=this.x,e=this.y,n=this.z,i=Math.sqrt(t*t+e*e+n*n);if(i>0){const s=1/i;this.x*=s,this.y*=s,this.z*=s}else this.x=0,this.y=0,this.z=0;return i}unit(t){t===void 0&&(t=new M);const e=this.x,n=this.y,i=this.z;let s=Math.sqrt(e*e+n*n+i*i);return s>0?(s=1/s,t.x=e*s,t.y=n*s,t.z=i*s):(t.x=1,t.y=0,t.z=0),t}length(){const t=this.x,e=this.y,n=this.z;return Math.sqrt(t*t+e*e+n*n)}lengthSquared(){return this.dot(this)}distanceTo(t){const e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z;return Math.sqrt((s-e)*(s-e)+(o-n)*(o-n)+(a-i)*(a-i))}distanceSquared(t){const e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z;return(s-e)*(s-e)+(o-n)*(o-n)+(a-i)*(a-i)}scale(t,e){e===void 0&&(e=new M);const n=this.x,i=this.y,s=this.z;return e.x=t*n,e.y=t*i,e.z=t*s,e}vmul(t,e){return e===void 0&&(e=new M),e.x=t.x*this.x,e.y=t.y*this.y,e.z=t.z*this.z,e}addScaledVector(t,e,n){return n===void 0&&(n=new M),n.x=this.x+t*e.x,n.y=this.y+t*e.y,n.z=this.z+t*e.z,n}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}isZero(){return this.x===0&&this.y===0&&this.z===0}negate(t){return t===void 0&&(t=new M),t.x=-this.x,t.y=-this.y,t.z=-this.z,t}tangents(t,e){const n=this.length();if(n>0){const i=c0,s=1/n;i.set(this.x*s,this.y*s,this.z*s);const o=h0;Math.abs(i.x)<.9?(o.set(1,0,0),i.cross(o,t)):(o.set(0,1,0),i.cross(o,t)),i.cross(t,e)}else t.set(1,0,0),e.set(0,1,0)}toString(){return`${this.x},${this.y},${this.z}`}toArray(){return[this.x,this.y,this.z]}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}lerp(t,e,n){const i=this.x,s=this.y,o=this.z;n.x=i+(t.x-i)*e,n.y=s+(t.y-s)*e,n.z=o+(t.z-o)*e}almostEquals(t,e){return e===void 0&&(e=1e-6),!(Math.abs(this.x-t.x)>e||Math.abs(this.y-t.y)>e||Math.abs(this.z-t.z)>e)}almostZero(t){return t===void 0&&(t=1e-6),!(Math.abs(this.x)>t||Math.abs(this.y)>t||Math.abs(this.z)>t)}isAntiparallelTo(t,e){return this.negate(Ac),Ac.almostEquals(t,e)}clone(){return new M(this.x,this.y,this.z)}}M.ZERO=new M(0,0,0);M.UNIT_X=new M(1,0,0);M.UNIT_Y=new M(0,1,0);M.UNIT_Z=new M(0,0,1);const c0=new M,h0=new M,Ac=new M;class We{constructor(t){t===void 0&&(t={}),this.lowerBound=new M,this.upperBound=new M,t.lowerBound&&this.lowerBound.copy(t.lowerBound),t.upperBound&&this.upperBound.copy(t.upperBound)}setFromPoints(t,e,n,i){const s=this.lowerBound,o=this.upperBound,a=n;s.copy(t[0]),a&&a.vmult(s,s),o.copy(s);for(let l=1;l<t.length;l++){let c=t[l];a&&(a.vmult(c,Cc),c=Cc),c.x>o.x&&(o.x=c.x),c.x<s.x&&(s.x=c.x),c.y>o.y&&(o.y=c.y),c.y<s.y&&(s.y=c.y),c.z>o.z&&(o.z=c.z),c.z<s.z&&(s.z=c.z)}return e&&(e.vadd(s,s),e.vadd(o,o)),i&&(s.x-=i,s.y-=i,s.z-=i,o.x+=i,o.y+=i,o.z+=i),this}copy(t){return this.lowerBound.copy(t.lowerBound),this.upperBound.copy(t.upperBound),this}clone(){return new We().copy(this)}extend(t){this.lowerBound.x=Math.min(this.lowerBound.x,t.lowerBound.x),this.upperBound.x=Math.max(this.upperBound.x,t.upperBound.x),this.lowerBound.y=Math.min(this.lowerBound.y,t.lowerBound.y),this.upperBound.y=Math.max(this.upperBound.y,t.upperBound.y),this.lowerBound.z=Math.min(this.lowerBound.z,t.lowerBound.z),this.upperBound.z=Math.max(this.upperBound.z,t.upperBound.z)}overlaps(t){const e=this.lowerBound,n=this.upperBound,i=t.lowerBound,s=t.upperBound,o=i.x<=n.x&&n.x<=s.x||e.x<=s.x&&s.x<=n.x,a=i.y<=n.y&&n.y<=s.y||e.y<=s.y&&s.y<=n.y,l=i.z<=n.z&&n.z<=s.z||e.z<=s.z&&s.z<=n.z;return o&&a&&l}volume(){const t=this.lowerBound,e=this.upperBound;return(e.x-t.x)*(e.y-t.y)*(e.z-t.z)}contains(t){const e=this.lowerBound,n=this.upperBound,i=t.lowerBound,s=t.upperBound;return e.x<=i.x&&n.x>=s.x&&e.y<=i.y&&n.y>=s.y&&e.z<=i.z&&n.z>=s.z}getCorners(t,e,n,i,s,o,a,l){const c=this.lowerBound,h=this.upperBound;t.copy(c),e.set(h.x,c.y,c.z),n.set(h.x,h.y,c.z),i.set(c.x,h.y,h.z),s.set(h.x,c.y,h.z),o.set(c.x,h.y,c.z),a.set(c.x,c.y,h.z),l.copy(h)}toLocalFrame(t,e){const n=Rc,i=n[0],s=n[1],o=n[2],a=n[3],l=n[4],c=n[5],h=n[6],u=n[7];this.getCorners(i,s,o,a,l,c,h,u);for(let d=0;d!==8;d++){const f=n[d];t.pointToLocal(f,f)}return e.setFromPoints(n)}toWorldFrame(t,e){const n=Rc,i=n[0],s=n[1],o=n[2],a=n[3],l=n[4],c=n[5],h=n[6],u=n[7];this.getCorners(i,s,o,a,l,c,h,u);for(let d=0;d!==8;d++){const f=n[d];t.pointToWorld(f,f)}return e.setFromPoints(n)}overlapsRay(t){const{direction:e,from:n}=t,i=1/e.x,s=1/e.y,o=1/e.z,a=(this.lowerBound.x-n.x)*i,l=(this.upperBound.x-n.x)*i,c=(this.lowerBound.y-n.y)*s,h=(this.upperBound.y-n.y)*s,u=(this.lowerBound.z-n.z)*o,d=(this.upperBound.z-n.z)*o,f=Math.max(Math.max(Math.min(a,l),Math.min(c,h)),Math.min(u,d)),m=Math.min(Math.min(Math.max(a,l),Math.max(c,h)),Math.max(u,d));return!(m<0||f>m)}}const Cc=new M,Rc=[new M,new M,new M,new M,new M,new M,new M,new M];class Pc{constructor(){this.matrix=[]}get(t,e){let{index:n}=t,{index:i}=e;if(i>n){const s=i;i=n,n=s}return this.matrix[(n*(n+1)>>1)+i-1]}set(t,e,n){let{index:i}=t,{index:s}=e;if(s>i){const o=s;s=i,i=o}this.matrix[(i*(i+1)>>1)+s-1]=n?1:0}reset(){for(let t=0,e=this.matrix.length;t!==e;t++)this.matrix[t]=0}setNumObjects(t){this.matrix.length=t*(t-1)>>1}}class Xh{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;return n[t]===void 0&&(n[t]=[]),n[t].includes(e)||n[t].push(e),this}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return!!(n[t]!==void 0&&n[t].includes(e))}hasAnyEventListener(t){return this._listeners===void 0?!1:this._listeners[t]!==void 0}removeEventListener(t,e){if(this._listeners===void 0)return this;const n=this._listeners;if(n[t]===void 0)return this;const i=n[t].indexOf(e);return i!==-1&&n[t].splice(i,1),this}dispatchEvent(t){if(this._listeners===void 0)return this;const n=this._listeners[t.type];if(n!==void 0){t.target=this;for(let i=0,s=n.length;i<s;i++)n[i].call(this,t)}return this}}class ge{constructor(t,e,n,i){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),i===void 0&&(i=1),this.x=t,this.y=e,this.z=n,this.w=i}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}toString(){return`${this.x},${this.y},${this.z},${this.w}`}toArray(){return[this.x,this.y,this.z,this.w]}setFromAxisAngle(t,e){const n=Math.sin(e*.5);return this.x=t.x*n,this.y=t.y*n,this.z=t.z*n,this.w=Math.cos(e*.5),this}toAxisAngle(t){t===void 0&&(t=new M),this.normalize();const e=2*Math.acos(this.w),n=Math.sqrt(1-this.w*this.w);return n<.001?(t.x=this.x,t.y=this.y,t.z=this.z):(t.x=this.x/n,t.y=this.y/n,t.z=this.z/n),[t,e]}setFromVectors(t,e){if(t.isAntiparallelTo(e)){const n=u0,i=d0;t.tangents(n,i),this.setFromAxisAngle(n,Math.PI)}else{const n=t.cross(e);this.x=n.x,this.y=n.y,this.z=n.z,this.w=Math.sqrt(t.length()**2*e.length()**2)+t.dot(e),this.normalize()}return this}mult(t,e){e===void 0&&(e=new ge);const n=this.x,i=this.y,s=this.z,o=this.w,a=t.x,l=t.y,c=t.z,h=t.w;return e.x=n*h+o*a+i*c-s*l,e.y=i*h+o*l+s*a-n*c,e.z=s*h+o*c+n*l-i*a,e.w=o*h-n*a-i*l-s*c,e}inverse(t){t===void 0&&(t=new ge);const e=this.x,n=this.y,i=this.z,s=this.w;this.conjugate(t);const o=1/(e*e+n*n+i*i+s*s);return t.x*=o,t.y*=o,t.z*=o,t.w*=o,t}conjugate(t){return t===void 0&&(t=new ge),t.x=-this.x,t.y=-this.y,t.z=-this.z,t.w=this.w,t}normalize(){let t=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(t=1/t,this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}normalizeFast(){const t=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}vmult(t,e){e===void 0&&(e=new M);const n=t.x,i=t.y,s=t.z,o=this.x,a=this.y,l=this.z,c=this.w,h=c*n+a*s-l*i,u=c*i+l*n-o*s,d=c*s+o*i-a*n,f=-o*n-a*i-l*s;return e.x=h*c+f*-o+u*-l-d*-a,e.y=u*c+f*-a+d*-o-h*-l,e.z=d*c+f*-l+h*-a-u*-o,e}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w,this}toEuler(t,e){e===void 0&&(e="YZX");let n,i,s;const o=this.x,a=this.y,l=this.z,c=this.w;switch(e){case"YZX":const h=o*a+l*c;if(h>.499&&(n=2*Math.atan2(o,c),i=Math.PI/2,s=0),h<-.499&&(n=-2*Math.atan2(o,c),i=-Math.PI/2,s=0),n===void 0){const u=o*o,d=a*a,f=l*l;n=Math.atan2(2*a*c-2*o*l,1-2*d-2*f),i=Math.asin(2*h),s=Math.atan2(2*o*c-2*a*l,1-2*u-2*f)}break;default:throw new Error(`Euler order ${e} not supported yet.`)}t.y=n,t.z=i,t.x=s}setFromEuler(t,e,n,i){i===void 0&&(i="XYZ");const s=Math.cos(t/2),o=Math.cos(e/2),a=Math.cos(n/2),l=Math.sin(t/2),c=Math.sin(e/2),h=Math.sin(n/2);return i==="XYZ"?(this.x=l*o*a+s*c*h,this.y=s*c*a-l*o*h,this.z=s*o*h+l*c*a,this.w=s*o*a-l*c*h):i==="YXZ"?(this.x=l*o*a+s*c*h,this.y=s*c*a-l*o*h,this.z=s*o*h-l*c*a,this.w=s*o*a+l*c*h):i==="ZXY"?(this.x=l*o*a-s*c*h,this.y=s*c*a+l*o*h,this.z=s*o*h+l*c*a,this.w=s*o*a-l*c*h):i==="ZYX"?(this.x=l*o*a-s*c*h,this.y=s*c*a+l*o*h,this.z=s*o*h-l*c*a,this.w=s*o*a+l*c*h):i==="YZX"?(this.x=l*o*a+s*c*h,this.y=s*c*a+l*o*h,this.z=s*o*h-l*c*a,this.w=s*o*a-l*c*h):i==="XZY"&&(this.x=l*o*a-s*c*h,this.y=s*c*a-l*o*h,this.z=s*o*h+l*c*a,this.w=s*o*a+l*c*h),this}clone(){return new ge(this.x,this.y,this.z,this.w)}slerp(t,e,n){n===void 0&&(n=new ge);const i=this.x,s=this.y,o=this.z,a=this.w;let l=t.x,c=t.y,h=t.z,u=t.w,d,f,m,v,g;return f=i*l+s*c+o*h+a*u,f<0&&(f=-f,l=-l,c=-c,h=-h,u=-u),1-f>1e-6?(d=Math.acos(f),m=Math.sin(d),v=Math.sin((1-e)*d)/m,g=Math.sin(e*d)/m):(v=1-e,g=e),n.x=v*i+g*l,n.y=v*s+g*c,n.z=v*o+g*h,n.w=v*a+g*u,n}integrate(t,e,n,i){i===void 0&&(i=new ge);const s=t.x*n.x,o=t.y*n.y,a=t.z*n.z,l=this.x,c=this.y,h=this.z,u=this.w,d=e*.5;return i.x+=d*(s*u+o*h-a*c),i.y+=d*(o*u+a*l-s*h),i.z+=d*(a*u+s*c-o*l),i.w+=d*(-s*l-o*c-a*h),i}}const u0=new M,d0=new M,f0={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256};class Et{constructor(t){t===void 0&&(t={}),this.id=Et.idCounter++,this.type=t.type||0,this.boundingSphereRadius=0,this.collisionResponse=t.collisionResponse?t.collisionResponse:!0,this.collisionFilterGroup=t.collisionFilterGroup!==void 0?t.collisionFilterGroup:1,this.collisionFilterMask=t.collisionFilterMask!==void 0?t.collisionFilterMask:-1,this.material=t.material?t.material:null,this.body=null}updateBoundingSphereRadius(){throw`computeBoundingSphereRadius() not implemented for shape type ${this.type}`}volume(){throw`volume() not implemented for shape type ${this.type}`}calculateLocalInertia(t,e){throw`calculateLocalInertia() not implemented for shape type ${this.type}`}calculateWorldAABB(t,e,n,i){throw`calculateWorldAABB() not implemented for shape type ${this.type}`}}Et.idCounter=0;Et.types=f0;class $t{constructor(t){t===void 0&&(t={}),this.position=new M,this.quaternion=new ge,t.position&&this.position.copy(t.position),t.quaternion&&this.quaternion.copy(t.quaternion)}pointToLocal(t,e){return $t.pointToLocalFrame(this.position,this.quaternion,t,e)}pointToWorld(t,e){return $t.pointToWorldFrame(this.position,this.quaternion,t,e)}vectorToWorldFrame(t,e){return e===void 0&&(e=new M),this.quaternion.vmult(t,e),e}static pointToLocalFrame(t,e,n,i){return i===void 0&&(i=new M),n.vsub(t,i),e.conjugate(Lc),Lc.vmult(i,i),i}static pointToWorldFrame(t,e,n,i){return i===void 0&&(i=new M),e.vmult(n,i),i.vadd(t,i),i}static vectorToWorldFrame(t,e,n){return n===void 0&&(n=new M),t.vmult(e,n),n}static vectorToLocalFrame(t,e,n,i){return i===void 0&&(i=new M),e.w*=-1,e.vmult(n,i),e.w*=-1,i}}const Lc=new ge;class is extends Et{constructor(t){t===void 0&&(t={});const{vertices:e=[],faces:n=[],normals:i=[],axes:s,boundingSphereRadius:o}=t;super({type:Et.types.CONVEXPOLYHEDRON}),this.vertices=e,this.faces=n,this.faceNormals=i,this.faceNormals.length===0&&this.computeNormals(),o?this.boundingSphereRadius=o:this.updateBoundingSphereRadius(),this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.worldFaceNormals=[],this.worldFaceNormalsNeedsUpdate=!0,this.uniqueAxes=s?s.slice():null,this.uniqueEdges=[],this.computeEdges()}computeEdges(){const t=this.faces,e=this.vertices,n=this.uniqueEdges;n.length=0;const i=new M;for(let s=0;s!==t.length;s++){const o=t[s],a=o.length;for(let l=0;l!==a;l++){const c=(l+1)%a;e[o[l]].vsub(e[o[c]],i),i.normalize();let h=!1;for(let u=0;u!==n.length;u++)if(n[u].almostEquals(i)||n[u].almostEquals(i)){h=!0;break}h||n.push(i.clone())}}}computeNormals(){this.faceNormals.length=this.faces.length;for(let t=0;t<this.faces.length;t++){for(let i=0;i<this.faces[t].length;i++)if(!this.vertices[this.faces[t][i]])throw new Error(`Vertex ${this.faces[t][i]} not found!`);const e=this.faceNormals[t]||new M;this.getFaceNormal(t,e),e.negate(e),this.faceNormals[t]=e;const n=this.vertices[this.faces[t][0]];if(e.dot(n)<0){console.error(`.faceNormals[${t}] = Vec3(${e.toString()}) looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.`);for(let i=0;i<this.faces[t].length;i++)console.warn(`.vertices[${this.faces[t][i]}] = Vec3(${this.vertices[this.faces[t][i]].toString()})`)}}}getFaceNormal(t,e){const n=this.faces[t],i=this.vertices[n[0]],s=this.vertices[n[1]],o=this.vertices[n[2]];is.computeNormal(i,s,o,e)}static computeNormal(t,e,n,i){const s=new M,o=new M;e.vsub(t,o),n.vsub(e,s),s.cross(o,i),i.isZero()||i.normalize()}clipAgainstHull(t,e,n,i,s,o,a,l,c){const h=new M;let u=-1,d=-Number.MAX_VALUE;for(let m=0;m<n.faces.length;m++){h.copy(n.faceNormals[m]),s.vmult(h,h);const v=h.dot(o);v>d&&(d=v,u=m)}const f=[];for(let m=0;m<n.faces[u].length;m++){const v=n.vertices[n.faces[u][m]],g=new M;g.copy(v),s.vmult(g,g),i.vadd(g,g),f.push(g)}u>=0&&this.clipFaceAgainstHull(o,t,e,f,a,l,c)}findSeparatingAxis(t,e,n,i,s,o,a,l){const c=new M,h=new M,u=new M,d=new M,f=new M,m=new M;let v=Number.MAX_VALUE;const g=this;if(g.uniqueAxes)for(let p=0;p!==g.uniqueAxes.length;p++){n.vmult(g.uniqueAxes[p],c);const x=g.testSepAxis(c,t,e,n,i,s);if(x===!1)return!1;x<v&&(v=x,o.copy(c))}else{const p=a?a.length:g.faces.length;for(let x=0;x<p;x++){const _=a?a[x]:x;c.copy(g.faceNormals[_]),n.vmult(c,c);const y=g.testSepAxis(c,t,e,n,i,s);if(y===!1)return!1;y<v&&(v=y,o.copy(c))}}if(t.uniqueAxes)for(let p=0;p!==t.uniqueAxes.length;p++){s.vmult(t.uniqueAxes[p],h);const x=g.testSepAxis(h,t,e,n,i,s);if(x===!1)return!1;x<v&&(v=x,o.copy(h))}else{const p=l?l.length:t.faces.length;for(let x=0;x<p;x++){const _=l?l[x]:x;h.copy(t.faceNormals[_]),s.vmult(h,h);const y=g.testSepAxis(h,t,e,n,i,s);if(y===!1)return!1;y<v&&(v=y,o.copy(h))}}for(let p=0;p!==g.uniqueEdges.length;p++){n.vmult(g.uniqueEdges[p],d);for(let x=0;x!==t.uniqueEdges.length;x++)if(s.vmult(t.uniqueEdges[x],f),d.cross(f,m),!m.almostZero()){m.normalize();const _=g.testSepAxis(m,t,e,n,i,s);if(_===!1)return!1;_<v&&(v=_,o.copy(m))}}return i.vsub(e,u),u.dot(o)>0&&o.negate(o),!0}testSepAxis(t,e,n,i,s,o){const a=this;is.project(a,t,n,i,Fo),is.project(e,t,s,o,Oo);const l=Fo[0],c=Fo[1],h=Oo[0],u=Oo[1];if(l<u||h<c)return!1;const d=l-u,f=h-c;return d<f?d:f}calculateLocalInertia(t,e){const n=new M,i=new M;this.computeLocalAABB(i,n);const s=n.x-i.x,o=n.y-i.y,a=n.z-i.z;e.x=1/12*t*(2*o*2*o+2*a*2*a),e.y=1/12*t*(2*s*2*s+2*a*2*a),e.z=1/12*t*(2*o*2*o+2*s*2*s)}getPlaneConstantOfFace(t){const e=this.faces[t],n=this.faceNormals[t],i=this.vertices[e[0]];return-n.dot(i)}clipFaceAgainstHull(t,e,n,i,s,o,a){const l=new M,c=new M,h=new M,u=new M,d=new M,f=new M,m=new M,v=new M,g=this,p=[],x=i,_=p;let y=-1,S=Number.MAX_VALUE;for(let T=0;T<g.faces.length;T++){l.copy(g.faceNormals[T]),n.vmult(l,l);const k=l.dot(t);k<S&&(S=k,y=T)}if(y<0)return;const A=g.faces[y];A.connectedFaces=[];for(let T=0;T<g.faces.length;T++)for(let k=0;k<g.faces[T].length;k++)A.indexOf(g.faces[T][k])!==-1&&T!==y&&A.connectedFaces.indexOf(T)===-1&&A.connectedFaces.push(T);const b=A.length;for(let T=0;T<b;T++){const k=g.vertices[A[T]],Z=g.vertices[A[(T+1)%b]];k.vsub(Z,c),h.copy(c),n.vmult(h,h),e.vadd(h,h),u.copy(this.faceNormals[y]),n.vmult(u,u),e.vadd(u,u),h.cross(u,d),d.negate(d),f.copy(k),n.vmult(f,f),e.vadd(f,f);const P=A.connectedFaces[T];m.copy(this.faceNormals[P]);const F=this.getPlaneConstantOfFace(P);v.copy(m),n.vmult(v,v);const U=F-v.dot(e);for(this.clipFaceAgainstPlane(x,_,v,U);x.length;)x.shift();for(;_.length;)x.push(_.shift())}m.copy(this.faceNormals[y]);const I=this.getPlaneConstantOfFace(y);v.copy(m),n.vmult(v,v);const E=I-v.dot(e);for(let T=0;T<x.length;T++){let k=v.dot(x[T])+E;if(k<=s&&(console.log(`clamped: depth=${k} to minDist=${s}`),k=s),k<=o){const Z=x[T];if(k<=1e-6){const P={point:Z,normal:v,depth:k};a.push(P)}}}}clipFaceAgainstPlane(t,e,n,i){let s,o;const a=t.length;if(a<2)return e;let l=t[t.length-1],c=t[0];s=n.dot(l)+i;for(let h=0;h<a;h++){if(c=t[h],o=n.dot(c)+i,s<0)if(o<0){const u=new M;u.copy(c),e.push(u)}else{const u=new M;l.lerp(c,s/(s-o),u),e.push(u)}else if(o<0){const u=new M;l.lerp(c,s/(s-o),u),e.push(u),e.push(c)}l=c,s=o}return e}computeWorldVertices(t,e){for(;this.worldVertices.length<this.vertices.length;)this.worldVertices.push(new M);const n=this.vertices,i=this.worldVertices;for(let s=0;s!==this.vertices.length;s++)e.vmult(n[s],i[s]),t.vadd(i[s],i[s]);this.worldVerticesNeedsUpdate=!1}computeLocalAABB(t,e){const n=this.vertices;t.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),e.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(let i=0;i<this.vertices.length;i++){const s=n[i];s.x<t.x?t.x=s.x:s.x>e.x&&(e.x=s.x),s.y<t.y?t.y=s.y:s.y>e.y&&(e.y=s.y),s.z<t.z?t.z=s.z:s.z>e.z&&(e.z=s.z)}}computeWorldFaceNormals(t){const e=this.faceNormals.length;for(;this.worldFaceNormals.length<e;)this.worldFaceNormals.push(new M);const n=this.faceNormals,i=this.worldFaceNormals;for(let s=0;s!==e;s++)t.vmult(n[s],i[s]);this.worldFaceNormalsNeedsUpdate=!1}updateBoundingSphereRadius(){let t=0;const e=this.vertices;for(let n=0;n!==e.length;n++){const i=e[n].lengthSquared();i>t&&(t=i)}this.boundingSphereRadius=Math.sqrt(t)}calculateWorldAABB(t,e,n,i){const s=this.vertices;let o,a,l,c,h,u,d=new M;for(let f=0;f<s.length;f++){d.copy(s[f]),e.vmult(d,d),t.vadd(d,d);const m=d;(o===void 0||m.x<o)&&(o=m.x),(c===void 0||m.x>c)&&(c=m.x),(a===void 0||m.y<a)&&(a=m.y),(h===void 0||m.y>h)&&(h=m.y),(l===void 0||m.z<l)&&(l=m.z),(u===void 0||m.z>u)&&(u=m.z)}n.set(o,a,l),i.set(c,h,u)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}getAveragePointLocal(t){t===void 0&&(t=new M);const e=this.vertices;for(let n=0;n<e.length;n++)t.vadd(e[n],t);return t.scale(1/e.length,t),t}transformAllPoints(t,e){const n=this.vertices.length,i=this.vertices;if(e){for(let s=0;s<n;s++){const o=i[s];e.vmult(o,o)}for(let s=0;s<this.faceNormals.length;s++){const o=this.faceNormals[s];e.vmult(o,o)}}if(t)for(let s=0;s<n;s++){const o=i[s];o.vadd(t,o)}}pointIsInside(t){const e=this.vertices,n=this.faces,i=this.faceNormals,s=null,o=new M;this.getAveragePointLocal(o);for(let a=0;a<this.faces.length;a++){let l=i[a];const c=e[n[a][0]],h=new M;t.vsub(c,h);const u=l.dot(h),d=new M;o.vsub(c,d);const f=l.dot(d);if(u<0&&f>0||u>0&&f<0)return!1}return s?1:-1}static project(t,e,n,i,s){const o=t.vertices.length,a=p0;let l=0,c=0;const h=m0,u=t.vertices;h.setZero(),$t.vectorToLocalFrame(n,i,e,a),$t.pointToLocalFrame(n,i,h,h);const d=h.dot(a);c=l=u[0].dot(a);for(let f=1;f<o;f++){const m=u[f].dot(a);m>l&&(l=m),m<c&&(c=m)}if(c-=d,l-=d,c>l){const f=c;c=l,l=f}s[0]=l,s[1]=c}}const Fo=[],Oo=[];new M;const p0=new M,m0=new M;class jr extends Et{constructor(t){super({type:Et.types.BOX}),this.halfExtents=t,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}updateConvexPolyhedronRepresentation(){const t=this.halfExtents.x,e=this.halfExtents.y,n=this.halfExtents.z,i=M,s=[new i(-t,-e,-n),new i(t,-e,-n),new i(t,e,-n),new i(-t,e,-n),new i(-t,-e,n),new i(t,-e,n),new i(t,e,n),new i(-t,e,n)],o=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]],a=[new i(0,0,1),new i(0,1,0),new i(1,0,0)],l=new is({vertices:s,faces:o,axes:a});this.convexPolyhedronRepresentation=l,l.material=this.material}calculateLocalInertia(t,e){return e===void 0&&(e=new M),jr.calculateInertia(this.halfExtents,t,e),e}static calculateInertia(t,e,n){const i=t;n.x=1/12*e*(2*i.y*2*i.y+2*i.z*2*i.z),n.y=1/12*e*(2*i.x*2*i.x+2*i.z*2*i.z),n.z=1/12*e*(2*i.y*2*i.y+2*i.x*2*i.x)}getSideNormals(t,e){const n=t,i=this.halfExtents;if(n[0].set(i.x,0,0),n[1].set(0,i.y,0),n[2].set(0,0,i.z),n[3].set(-i.x,0,0),n[4].set(0,-i.y,0),n[5].set(0,0,-i.z),e!==void 0)for(let s=0;s!==n.length;s++)e.vmult(n[s],n[s]);return n}volume(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z}updateBoundingSphereRadius(){this.boundingSphereRadius=this.halfExtents.length()}forEachWorldCorner(t,e,n){const i=this.halfExtents,s=[[i.x,i.y,i.z],[-i.x,i.y,i.z],[-i.x,-i.y,i.z],[-i.x,-i.y,-i.z],[i.x,-i.y,-i.z],[i.x,i.y,-i.z],[-i.x,i.y,-i.z],[i.x,-i.y,i.z]];for(let o=0;o<s.length;o++)Wn.set(s[o][0],s[o][1],s[o][2]),e.vmult(Wn,Wn),t.vadd(Wn,Wn),n(Wn.x,Wn.y,Wn.z)}calculateWorldAABB(t,e,n,i){const s=this.halfExtents;hn[0].set(s.x,s.y,s.z),hn[1].set(-s.x,s.y,s.z),hn[2].set(-s.x,-s.y,s.z),hn[3].set(-s.x,-s.y,-s.z),hn[4].set(s.x,-s.y,-s.z),hn[5].set(s.x,s.y,-s.z),hn[6].set(-s.x,s.y,-s.z),hn[7].set(s.x,-s.y,s.z);const o=hn[0];e.vmult(o,o),t.vadd(o,o),i.copy(o),n.copy(o);for(let a=1;a<8;a++){const l=hn[a];e.vmult(l,l),t.vadd(l,l);const c=l.x,h=l.y,u=l.z;c>i.x&&(i.x=c),h>i.y&&(i.y=h),u>i.z&&(i.z=u),c<n.x&&(n.x=c),h<n.y&&(n.y=h),u<n.z&&(n.z=u)}}}const Wn=new M,hn=[new M,new M,new M,new M,new M,new M,new M,new M],Ia={DYNAMIC:1,STATIC:2,KINEMATIC:4},Da={AWAKE:0,SLEEPY:1,SLEEPING:2};class Mt extends Xh{constructor(t){t===void 0&&(t={}),super(),this.id=Mt.idCounter++,this.index=-1,this.world=null,this.vlambda=new M,this.collisionFilterGroup=typeof t.collisionFilterGroup=="number"?t.collisionFilterGroup:1,this.collisionFilterMask=typeof t.collisionFilterMask=="number"?t.collisionFilterMask:-1,this.collisionResponse=typeof t.collisionResponse=="boolean"?t.collisionResponse:!0,this.position=new M,this.previousPosition=new M,this.interpolatedPosition=new M,this.initPosition=new M,t.position&&(this.position.copy(t.position),this.previousPosition.copy(t.position),this.interpolatedPosition.copy(t.position),this.initPosition.copy(t.position)),this.velocity=new M,t.velocity&&this.velocity.copy(t.velocity),this.initVelocity=new M,this.force=new M;const e=typeof t.mass=="number"?t.mass:0;this.mass=e,this.invMass=e>0?1/e:0,this.material=t.material||null,this.linearDamping=typeof t.linearDamping=="number"?t.linearDamping:.01,this.type=e<=0?Mt.STATIC:Mt.DYNAMIC,typeof t.type==typeof Mt.STATIC&&(this.type=t.type),this.allowSleep=typeof t.allowSleep<"u"?t.allowSleep:!0,this.sleepState=Mt.AWAKE,this.sleepSpeedLimit=typeof t.sleepSpeedLimit<"u"?t.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof t.sleepTimeLimit<"u"?t.sleepTimeLimit:1,this.timeLastSleepy=0,this.wakeUpAfterNarrowphase=!1,this.torque=new M,this.quaternion=new ge,this.initQuaternion=new ge,this.previousQuaternion=new ge,this.interpolatedQuaternion=new ge,t.quaternion&&(this.quaternion.copy(t.quaternion),this.initQuaternion.copy(t.quaternion),this.previousQuaternion.copy(t.quaternion),this.interpolatedQuaternion.copy(t.quaternion)),this.angularVelocity=new M,t.angularVelocity&&this.angularVelocity.copy(t.angularVelocity),this.initAngularVelocity=new M,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new M,this.invInertia=new M,this.invInertiaWorld=new an,this.invMassSolve=0,this.invInertiaSolve=new M,this.invInertiaWorldSolve=new an,this.fixedRotation=typeof t.fixedRotation<"u"?t.fixedRotation:!1,this.angularDamping=typeof t.angularDamping<"u"?t.angularDamping:.01,this.linearFactor=new M(1,1,1),t.linearFactor&&this.linearFactor.copy(t.linearFactor),this.angularFactor=new M(1,1,1),t.angularFactor&&this.angularFactor.copy(t.angularFactor),this.aabb=new We,this.aabbNeedsUpdate=!0,this.boundingRadius=0,this.wlambda=new M,this.isTrigger=!!t.isTrigger,t.shape&&this.addShape(t.shape),this.updateMassProperties()}wakeUp(){const t=this.sleepState;this.sleepState=Mt.AWAKE,this.wakeUpAfterNarrowphase=!1,t===Mt.SLEEPING&&this.dispatchEvent(Mt.wakeupEvent)}sleep(){this.sleepState=Mt.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.wakeUpAfterNarrowphase=!1}sleepTick(t){if(this.allowSleep){const e=this.sleepState,n=this.velocity.lengthSquared()+this.angularVelocity.lengthSquared(),i=this.sleepSpeedLimit**2;e===Mt.AWAKE&&n<i?(this.sleepState=Mt.SLEEPY,this.timeLastSleepy=t,this.dispatchEvent(Mt.sleepyEvent)):e===Mt.SLEEPY&&n>i?this.wakeUp():e===Mt.SLEEPY&&t-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(Mt.sleepEvent))}}updateSolveMassProperties(){this.sleepState===Mt.SLEEPING||this.type===Mt.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))}pointToLocalFrame(t,e){return e===void 0&&(e=new M),t.vsub(this.position,e),this.quaternion.conjugate().vmult(e,e),e}vectorToLocalFrame(t,e){return e===void 0&&(e=new M),this.quaternion.conjugate().vmult(t,e),e}pointToWorldFrame(t,e){return e===void 0&&(e=new M),this.quaternion.vmult(t,e),e.vadd(this.position,e),e}vectorToWorldFrame(t,e){return e===void 0&&(e=new M),this.quaternion.vmult(t,e),e}addShape(t,e,n){const i=new M,s=new ge;return e&&i.copy(e),n&&s.copy(n),this.shapes.push(t),this.shapeOffsets.push(i),this.shapeOrientations.push(s),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=this,this}removeShape(t){const e=this.shapes.indexOf(t);return e===-1?(console.warn("Shape does not belong to the body"),this):(this.shapes.splice(e,1),this.shapeOffsets.splice(e,1),this.shapeOrientations.splice(e,1),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=null,this)}updateBoundingRadius(){const t=this.shapes,e=this.shapeOffsets,n=t.length;let i=0;for(let s=0;s!==n;s++){const o=t[s];o.updateBoundingSphereRadius();const a=e[s].length(),l=o.boundingSphereRadius;a+l>i&&(i=a+l)}this.boundingRadius=i}updateAABB(){const t=this.shapes,e=this.shapeOffsets,n=this.shapeOrientations,i=t.length,s=g0,o=v0,a=this.quaternion,l=this.aabb,c=_0;for(let h=0;h!==i;h++){const u=t[h];a.vmult(e[h],s),s.vadd(this.position,s),a.mult(n[h],o),u.calculateWorldAABB(s,o,c.lowerBound,c.upperBound),h===0?l.copy(c):l.extend(c)}this.aabbNeedsUpdate=!1}updateInertiaWorld(t){const e=this.invInertia;if(!(e.x===e.y&&e.y===e.z&&!t)){const n=x0,i=y0;n.setRotationFromQuaternion(this.quaternion),n.transpose(i),n.scale(e,n),n.mmult(i,this.invInertiaWorld)}}applyForce(t,e){if(e===void 0&&(e=new M),this.type!==Mt.DYNAMIC)return;this.sleepState===Mt.SLEEPING&&this.wakeUp();const n=S0;e.cross(t,n),this.force.vadd(t,this.force),this.torque.vadd(n,this.torque)}applyLocalForce(t,e){if(e===void 0&&(e=new M),this.type!==Mt.DYNAMIC)return;const n=E0,i=w0;this.vectorToWorldFrame(t,n),this.vectorToWorldFrame(e,i),this.applyForce(n,i)}applyTorque(t){this.type===Mt.DYNAMIC&&(this.sleepState===Mt.SLEEPING&&this.wakeUp(),this.torque.vadd(t,this.torque))}applyImpulse(t,e){if(e===void 0&&(e=new M),this.type!==Mt.DYNAMIC)return;this.sleepState===Mt.SLEEPING&&this.wakeUp();const n=e,i=b0;i.copy(t),i.scale(this.invMass,i),this.velocity.vadd(i,this.velocity);const s=T0;n.cross(t,s),this.invInertiaWorld.vmult(s,s),this.angularVelocity.vadd(s,this.angularVelocity)}applyLocalImpulse(t,e){if(e===void 0&&(e=new M),this.type!==Mt.DYNAMIC)return;const n=A0,i=C0;this.vectorToWorldFrame(t,n),this.vectorToWorldFrame(e,i),this.applyImpulse(n,i)}updateMassProperties(){const t=R0;this.invMass=this.mass>0?1/this.mass:0;const e=this.inertia,n=this.fixedRotation;this.updateAABB(),t.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),jr.calculateInertia(t,this.mass,e),this.invInertia.set(e.x>0&&!n?1/e.x:0,e.y>0&&!n?1/e.y:0,e.z>0&&!n?1/e.z:0),this.updateInertiaWorld(!0)}getVelocityAtWorldPoint(t,e){const n=new M;return t.vsub(this.position,n),this.angularVelocity.cross(n,e),this.velocity.vadd(e,e),e}integrate(t,e,n){if(this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),!(this.type===Mt.DYNAMIC||this.type===Mt.KINEMATIC)||this.sleepState===Mt.SLEEPING)return;const i=this.velocity,s=this.angularVelocity,o=this.position,a=this.force,l=this.torque,c=this.quaternion,h=this.invMass,u=this.invInertiaWorld,d=this.linearFactor,f=h*t;i.x+=a.x*f*d.x,i.y+=a.y*f*d.y,i.z+=a.z*f*d.z;const m=u.elements,v=this.angularFactor,g=l.x*v.x,p=l.y*v.y,x=l.z*v.z;s.x+=t*(m[0]*g+m[1]*p+m[2]*x),s.y+=t*(m[3]*g+m[4]*p+m[5]*x),s.z+=t*(m[6]*g+m[7]*p+m[8]*x),o.x+=i.x*t,o.y+=i.y*t,o.z+=i.z*t,c.integrate(this.angularVelocity,t,this.angularFactor,c),e&&(n?c.normalizeFast():c.normalize()),this.aabbNeedsUpdate=!0,this.updateInertiaWorld()}}Mt.idCounter=0;Mt.COLLIDE_EVENT_NAME="collide";Mt.DYNAMIC=Ia.DYNAMIC;Mt.STATIC=Ia.STATIC;Mt.KINEMATIC=Ia.KINEMATIC;Mt.AWAKE=Da.AWAKE;Mt.SLEEPY=Da.SLEEPY;Mt.SLEEPING=Da.SLEEPING;Mt.wakeupEvent={type:"wakeup"};Mt.sleepyEvent={type:"sleepy"};Mt.sleepEvent={type:"sleep"};const g0=new M,v0=new ge,_0=new We,x0=new an,y0=new an,M0=new an,S0=new M,E0=new M,w0=new M,b0=new M,T0=new M,A0=new M,C0=new M,R0=new M;class P0{constructor(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}collisionPairs(t,e,n){throw new Error("collisionPairs not implemented for this BroadPhase class!")}needBroadphaseCollision(t,e){return!(!(t.collisionFilterGroup&e.collisionFilterMask)||!(e.collisionFilterGroup&t.collisionFilterMask)||(t.type&Mt.STATIC||t.sleepState===Mt.SLEEPING)&&(e.type&Mt.STATIC||e.sleepState===Mt.SLEEPING))}intersectionTest(t,e,n,i){this.useBoundingBoxes?this.doBoundingBoxBroadphase(t,e,n,i):this.doBoundingSphereBroadphase(t,e,n,i)}doBoundingSphereBroadphase(t,e,n,i){const s=L0;e.position.vsub(t.position,s);const o=(t.boundingRadius+e.boundingRadius)**2;s.lengthSquared()<o&&(n.push(t),i.push(e))}doBoundingBoxBroadphase(t,e,n,i){t.aabbNeedsUpdate&&t.updateAABB(),e.aabbNeedsUpdate&&e.updateAABB(),t.aabb.overlaps(e.aabb)&&(n.push(t),i.push(e))}makePairsUnique(t,e){const n=I0,i=D0,s=N0,o=t.length;for(let a=0;a!==o;a++)i[a]=t[a],s[a]=e[a];t.length=0,e.length=0;for(let a=0;a!==o;a++){const l=i[a].id,c=s[a].id,h=l<c?`${l},${c}`:`${c},${l}`;n[h]=a,n.keys.push(h)}for(let a=0;a!==n.keys.length;a++){const l=n.keys.pop(),c=n[l];t.push(i[c]),e.push(s[c]),delete n[l]}}setWorld(t){}static boundingSphereCheck(t,e){const n=new M;t.position.vsub(e.position,n);const i=t.shapes[0],s=e.shapes[0];return Math.pow(i.boundingSphereRadius+s.boundingSphereRadius,2)>n.lengthSquared()}aabbQuery(t,e,n){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}}const L0=new M;new M;new ge;new M;const I0={keys:[]},D0=[],N0=[];new M;new M;new M;class U0 extends P0{constructor(){super()}collisionPairs(t,e,n){const i=t.bodies,s=i.length;let o,a;for(let l=0;l!==s;l++)for(let c=0;c!==l;c++)o=i[l],a=i[c],this.needBroadphaseCollision(o,a)&&this.intersectionTest(o,a,e,n)}aabbQuery(t,e,n){n===void 0&&(n=[]);for(let i=0;i<t.bodies.length;i++){const s=t.bodies[i];s.aabbNeedsUpdate&&s.updateAABB(),s.aabb.overlaps(e)&&n.push(s)}return n}}class Or{constructor(){this.rayFromWorld=new M,this.rayToWorld=new M,this.hitNormalWorld=new M,this.hitPointWorld=new M,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}reset(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}abort(){this.shouldStop=!0}set(t,e,n,i,s,o,a){this.rayFromWorld.copy(t),this.rayToWorld.copy(e),this.hitNormalWorld.copy(n),this.hitPointWorld.copy(i),this.shape=s,this.body=o,this.distance=a}}let qh,jh,Yh,Kh,Zh,$h,Jh;const Na={CLOSEST:1,ANY:2,ALL:4};qh=Et.types.SPHERE;jh=Et.types.PLANE;Yh=Et.types.BOX;Kh=Et.types.CYLINDER;Zh=Et.types.CONVEXPOLYHEDRON;$h=Et.types.HEIGHTFIELD;Jh=Et.types.TRIMESH;class me{get[qh](){return this._intersectSphere}get[jh](){return this._intersectPlane}get[Yh](){return this._intersectBox}get[Kh](){return this._intersectConvex}get[Zh](){return this._intersectConvex}get[$h](){return this._intersectHeightfield}get[Jh](){return this._intersectTrimesh}constructor(t,e){t===void 0&&(t=new M),e===void 0&&(e=new M),this.from=t.clone(),this.to=e.clone(),this.direction=new M,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=me.ANY,this.result=new Or,this.hasHit=!1,this.callback=n=>{}}intersectWorld(t,e){return this.mode=e.mode||me.ANY,this.result=e.result||new Or,this.skipBackfaces=!!e.skipBackfaces,this.collisionFilterMask=typeof e.collisionFilterMask<"u"?e.collisionFilterMask:-1,this.collisionFilterGroup=typeof e.collisionFilterGroup<"u"?e.collisionFilterGroup:-1,this.checkCollisionResponse=typeof e.checkCollisionResponse<"u"?e.checkCollisionResponse:!0,e.from&&this.from.copy(e.from),e.to&&this.to.copy(e.to),this.callback=e.callback||(()=>{}),this.hasHit=!1,this.result.reset(),this.updateDirection(),this.getAABB(Ic),Bo.length=0,t.broadphase.aabbQuery(t,Ic,Bo),this.intersectBodies(Bo),this.hasHit}intersectBody(t,e){e&&(this.result=e,this.updateDirection());const n=this.checkCollisionResponse;if(n&&!t.collisionResponse||!(this.collisionFilterGroup&t.collisionFilterMask)||!(t.collisionFilterGroup&this.collisionFilterMask))return;const i=F0,s=O0;for(let o=0,a=t.shapes.length;o<a;o++){const l=t.shapes[o];if(!(n&&!l.collisionResponse)&&(t.quaternion.mult(t.shapeOrientations[o],s),t.quaternion.vmult(t.shapeOffsets[o],i),i.vadd(t.position,i),this.intersectShape(l,s,i,t),this.result.shouldStop))break}}intersectBodies(t,e){e&&(this.result=e,this.updateDirection());for(let n=0,i=t.length;!this.result.shouldStop&&n<i;n++)this.intersectBody(t[n])}updateDirection(){this.to.vsub(this.from,this.direction),this.direction.normalize()}intersectShape(t,e,n,i){const s=this.from;if($0(s,this.direction,n)>t.boundingSphereRadius)return;const a=this[t.type];a&&a.call(this,t,e,n,i,t)}_intersectBox(t,e,n,i,s){return this._intersectConvex(t.convexPolyhedronRepresentation,e,n,i,s)}_intersectPlane(t,e,n,i,s){const o=this.from,a=this.to,l=this.direction,c=new M(0,0,1);e.vmult(c,c);const h=new M;o.vsub(n,h);const u=h.dot(c);a.vsub(n,h);const d=h.dot(c);if(u*d>0||o.distanceTo(a)<u)return;const f=c.dot(l);if(Math.abs(f)<this.precision)return;const m=new M,v=new M,g=new M;o.vsub(n,m);const p=-c.dot(m)/f;l.scale(p,v),o.vadd(v,g),this.reportIntersection(c,g,s,i,-1)}getAABB(t){const{lowerBound:e,upperBound:n}=t,i=this.to,s=this.from;e.x=Math.min(i.x,s.x),e.y=Math.min(i.y,s.y),e.z=Math.min(i.z,s.z),n.x=Math.max(i.x,s.x),n.y=Math.max(i.y,s.y),n.z=Math.max(i.z,s.z)}_intersectHeightfield(t,e,n,i,s){t.data,t.elementSize;const o=B0;o.from.copy(this.from),o.to.copy(this.to),$t.pointToLocalFrame(n,e,o.from,o.from),$t.pointToLocalFrame(n,e,o.to,o.to),o.updateDirection();const a=z0;let l,c,h,u;l=c=0,h=u=t.data.length-1;const d=new We;o.getAABB(d),t.getIndexOfPosition(d.lowerBound.x,d.lowerBound.y,a,!0),l=Math.max(l,a[0]),c=Math.max(c,a[1]),t.getIndexOfPosition(d.upperBound.x,d.upperBound.y,a,!0),h=Math.min(h,a[0]+1),u=Math.min(u,a[1]+1);for(let f=l;f<h;f++)for(let m=c;m<u;m++){if(this.result.shouldStop)return;if(t.getAabbAtIndex(f,m,d),!!d.overlapsRay(o)){if(t.getConvexTrianglePillar(f,m,!1),$t.pointToWorldFrame(n,e,t.pillarOffset,Mr),this._intersectConvex(t.pillarConvex,e,Mr,i,s,Dc),this.result.shouldStop)return;t.getConvexTrianglePillar(f,m,!0),$t.pointToWorldFrame(n,e,t.pillarOffset,Mr),this._intersectConvex(t.pillarConvex,e,Mr,i,s,Dc)}}}_intersectSphere(t,e,n,i,s){const o=this.from,a=this.to,l=t.radius,c=(a.x-o.x)**2+(a.y-o.y)**2+(a.z-o.z)**2,h=2*((a.x-o.x)*(o.x-n.x)+(a.y-o.y)*(o.y-n.y)+(a.z-o.z)*(o.z-n.z)),u=(o.x-n.x)**2+(o.y-n.y)**2+(o.z-n.z)**2-l**2,d=h**2-4*c*u,f=k0,m=V0;if(!(d<0))if(d===0)o.lerp(a,d,f),f.vsub(n,m),m.normalize(),this.reportIntersection(m,f,s,i,-1);else{const v=(-h-Math.sqrt(d))/(2*c),g=(-h+Math.sqrt(d))/(2*c);if(v>=0&&v<=1&&(o.lerp(a,v,f),f.vsub(n,m),m.normalize(),this.reportIntersection(m,f,s,i,-1)),this.result.shouldStop)return;g>=0&&g<=1&&(o.lerp(a,g,f),f.vsub(n,m),m.normalize(),this.reportIntersection(m,f,s,i,-1))}}_intersectConvex(t,e,n,i,s,o){const a=H0,l=Nc,c=o&&o.faceList||null,h=t.faces,u=t.vertices,d=t.faceNormals,f=this.direction,m=this.from,v=this.to,g=m.distanceTo(v),p=c?c.length:h.length,x=this.result;for(let _=0;!x.shouldStop&&_<p;_++){const y=c?c[_]:_,S=h[y],A=d[y],b=e,I=n;l.copy(u[S[0]]),b.vmult(l,l),l.vadd(I,l),l.vsub(m,l),b.vmult(A,a);const E=f.dot(a);if(Math.abs(E)<this.precision)continue;const T=a.dot(l)/E;if(!(T<0)){f.scale(T,Ue),Ue.vadd(m,Ue),nn.copy(u[S[0]]),b.vmult(nn,nn),I.vadd(nn,nn);for(let k=1;!x.shouldStop&&k<S.length-1;k++){un.copy(u[S[k]]),dn.copy(u[S[k+1]]),b.vmult(un,un),b.vmult(dn,dn),I.vadd(un,un),I.vadd(dn,dn);const Z=Ue.distanceTo(m);!(me.pointInTriangle(Ue,nn,un,dn)||me.pointInTriangle(Ue,un,nn,dn))||Z>g||this.reportIntersection(a,Ue,s,i,y)}}}}_intersectTrimesh(t,e,n,i,s,o){const a=G0,l=K0,c=Z0,h=Nc,u=W0,d=X0,f=q0,m=Y0,v=j0,g=t.indices;t.vertices;const p=this.from,x=this.to,_=this.direction;c.position.copy(n),c.quaternion.copy(e),$t.vectorToLocalFrame(n,e,_,u),$t.pointToLocalFrame(n,e,p,d),$t.pointToLocalFrame(n,e,x,f),f.x*=t.scale.x,f.y*=t.scale.y,f.z*=t.scale.z,d.x*=t.scale.x,d.y*=t.scale.y,d.z*=t.scale.z,f.vsub(d,u),u.normalize();const y=d.distanceSquared(f);t.tree.rayQuery(this,c,l);for(let S=0,A=l.length;!this.result.shouldStop&&S!==A;S++){const b=l[S];t.getNormal(b,a),t.getVertex(g[b*3],nn),nn.vsub(d,h);const I=u.dot(a),E=a.dot(h)/I;if(E<0)continue;u.scale(E,Ue),Ue.vadd(d,Ue),t.getVertex(g[b*3+1],un),t.getVertex(g[b*3+2],dn);const T=Ue.distanceSquared(d);!(me.pointInTriangle(Ue,un,nn,dn)||me.pointInTriangle(Ue,nn,un,dn))||T>y||($t.vectorToWorldFrame(e,a,v),$t.pointToWorldFrame(n,e,Ue,m),this.reportIntersection(v,m,s,i,b))}l.length=0}reportIntersection(t,e,n,i,s){const o=this.from,a=this.to,l=o.distanceTo(e),c=this.result;if(!(this.skipBackfaces&&t.dot(this.direction)>0))switch(c.hitFaceIndex=typeof s<"u"?s:-1,this.mode){case me.ALL:this.hasHit=!0,c.set(o,a,t,e,n,i,l),c.hasHit=!0,this.callback(c);break;case me.CLOSEST:(l<c.distance||!c.hasHit)&&(this.hasHit=!0,c.hasHit=!0,c.set(o,a,t,e,n,i,l));break;case me.ANY:this.hasHit=!0,c.hasHit=!0,c.set(o,a,t,e,n,i,l),c.shouldStop=!0;break}}static pointInTriangle(t,e,n,i){i.vsub(e,gi),n.vsub(e,Ms),t.vsub(e,zo);const s=gi.dot(gi),o=gi.dot(Ms),a=gi.dot(zo),l=Ms.dot(Ms),c=Ms.dot(zo);let h,u;return(h=l*a-o*c)>=0&&(u=s*c-o*a)>=0&&h+u<s*l-o*o}}me.CLOSEST=Na.CLOSEST;me.ANY=Na.ANY;me.ALL=Na.ALL;const Ic=new We,Bo=[],Ms=new M,zo=new M,F0=new M,O0=new ge,Ue=new M,nn=new M,un=new M,dn=new M;new M;new Or;const Dc={faceList:[0]},Mr=new M,B0=new me,z0=[],k0=new M,V0=new M,H0=new M;new M;new M;const Nc=new M,G0=new M,W0=new M,X0=new M,q0=new M,j0=new M,Y0=new M;new We;const K0=[],Z0=new $t,gi=new M,Sr=new M;function $0(r,t,e){e.vsub(r,gi);const n=gi.dot(t);return t.scale(n,Sr),Sr.vadd(r,Sr),e.distanceTo(Sr)}class J0{static defaults(t,e){t===void 0&&(t={});for(let n in e)n in t||(t[n]=e[n]);return t}}class Uc{constructor(){this.spatial=new M,this.rotational=new M}multiplyElement(t){return t.spatial.dot(this.spatial)+t.rotational.dot(this.rotational)}multiplyVectors(t,e){return t.dot(this.spatial)+e.dot(this.rotational)}}class qs{constructor(t,e,n,i){n===void 0&&(n=-1e6),i===void 0&&(i=1e6),this.id=qs.idCounter++,this.minForce=n,this.maxForce=i,this.bi=t,this.bj=e,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new Uc,this.jacobianElementB=new Uc,this.enabled=!0,this.multiplier=0,this.setSpookParams(1e7,4,1/60)}setSpookParams(t,e,n){const i=e,s=t,o=n;this.a=4/(o*(1+4*i)),this.b=4*i/(1+4*i),this.eps=4/(o*o*s*(1+4*i))}computeB(t,e,n){const i=this.computeGW(),s=this.computeGq(),o=this.computeGiMf();return-s*t-i*e-o*n}computeGq(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.position,o=i.position;return t.spatial.dot(s)+e.spatial.dot(o)}computeGW(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.velocity,o=i.velocity,a=n.angularVelocity,l=i.angularVelocity;return t.multiplyVectors(s,a)+e.multiplyVectors(o,l)}computeGWlambda(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.vlambda,o=i.vlambda,a=n.wlambda,l=i.wlambda;return t.multiplyVectors(s,a)+e.multiplyVectors(o,l)}computeGiMf(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.force,o=n.torque,a=i.force,l=i.torque,c=n.invMassSolve,h=i.invMassSolve;return s.scale(c,Fc),a.scale(h,Oc),n.invInertiaWorldSolve.vmult(o,Bc),i.invInertiaWorldSolve.vmult(l,zc),t.multiplyVectors(Fc,Bc)+e.multiplyVectors(Oc,zc)}computeGiMGt(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.invMassSolve,o=i.invMassSolve,a=n.invInertiaWorldSolve,l=i.invInertiaWorldSolve;let c=s+o;return a.vmult(t.rotational,Er),c+=Er.dot(t.rotational),l.vmult(e.rotational,Er),c+=Er.dot(e.rotational),c}addToWlambda(t){const e=this.jacobianElementA,n=this.jacobianElementB,i=this.bi,s=this.bj,o=Q0;i.vlambda.addScaledVector(i.invMassSolve*t,e.spatial,i.vlambda),s.vlambda.addScaledVector(s.invMassSolve*t,n.spatial,s.vlambda),i.invInertiaWorldSolve.vmult(e.rotational,o),i.wlambda.addScaledVector(t,o,i.wlambda),s.invInertiaWorldSolve.vmult(n.rotational,o),s.wlambda.addScaledVector(t,o,s.wlambda)}computeC(){return this.computeGiMGt()+this.eps}}qs.idCounter=0;const Fc=new M,Oc=new M,Bc=new M,zc=new M,Er=new M,Q0=new M;class tx extends qs{constructor(t,e,n){n===void 0&&(n=1e6),super(t,e,0,n),this.restitution=0,this.ri=new M,this.rj=new M,this.ni=new M}computeB(t){const e=this.a,n=this.b,i=this.bi,s=this.bj,o=this.ri,a=this.rj,l=ex,c=nx,h=i.velocity,u=i.angularVelocity;i.force,i.torque;const d=s.velocity,f=s.angularVelocity;s.force,s.torque;const m=ix,v=this.jacobianElementA,g=this.jacobianElementB,p=this.ni;o.cross(p,l),a.cross(p,c),p.negate(v.spatial),l.negate(v.rotational),g.spatial.copy(p),g.rotational.copy(c),m.copy(s.position),m.vadd(a,m),m.vsub(i.position,m),m.vsub(o,m);const x=p.dot(m),_=this.restitution+1,y=_*d.dot(p)-_*h.dot(p)+f.dot(c)-u.dot(l),S=this.computeGiMf();return-x*e-y*n-t*S}getImpactVelocityAlongNormal(){const t=sx,e=rx,n=ox,i=ax,s=lx;return this.bi.position.vadd(this.ri,n),this.bj.position.vadd(this.rj,i),this.bi.getVelocityAtWorldPoint(n,t),this.bj.getVelocityAtWorldPoint(i,e),t.vsub(e,s),this.ni.dot(s)}}const ex=new M,nx=new M,ix=new M,sx=new M,rx=new M,ox=new M,ax=new M,lx=new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;class kc extends qs{constructor(t,e,n){super(t,e,-n,n),this.ri=new M,this.rj=new M,this.t=new M}computeB(t){this.a;const e=this.b;this.bi,this.bj;const n=this.ri,i=this.rj,s=cx,o=hx,a=this.t;n.cross(a,s),i.cross(a,o);const l=this.jacobianElementA,c=this.jacobianElementB;a.negate(l.spatial),s.negate(l.rotational),c.spatial.copy(a),c.rotational.copy(o);const h=this.computeGW(),u=this.computeGiMf();return-h*e-t*u}}const cx=new M,hx=new M;class jn{constructor(t,e,n){n=J0.defaults(n,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=jn.idCounter++,this.materials=[t,e],this.friction=n.friction,this.restitution=n.restitution,this.contactEquationStiffness=n.contactEquationStiffness,this.contactEquationRelaxation=n.contactEquationRelaxation,this.frictionEquationStiffness=n.frictionEquationStiffness,this.frictionEquationRelaxation=n.frictionEquationRelaxation}}jn.idCounter=0;class oi{constructor(t){t===void 0&&(t={});let e="";typeof t=="string"&&(e=t,t={}),this.name=e,this.id=oi.idCounter++,this.friction=typeof t.friction<"u"?t.friction:-1,this.restitution=typeof t.restitution<"u"?t.restitution:-1}}oi.idCounter=0;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new me;new M;new M;new M;new M(1,0,0),new M(0,1,0),new M(0,0,1);new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;class Ua extends Et{constructor(t){if(super({type:Et.types.SPHERE}),this.radius=t!==void 0?t:1,this.radius<0)throw new Error("The sphere radius cannot be negative.");this.updateBoundingSphereRadius()}calculateLocalInertia(t,e){e===void 0&&(e=new M);const n=2*t*this.radius*this.radius/5;return e.x=n,e.y=n,e.z=n,e}volume(){return 4*Math.PI*Math.pow(this.radius,3)/3}updateBoundingSphereRadius(){this.boundingSphereRadius=this.radius}calculateWorldAABB(t,e,n,i){const s=this.radius,o=["x","y","z"];for(let a=0;a<o.length;a++){const l=o[a];n[l]=t[l]-s,i[l]=t[l]+s}}}new M;new M;new M;new M;new M;new M;new M;new M;new M;class ux extends is{constructor(t,e,n,i){if(t===void 0&&(t=1),e===void 0&&(e=1),n===void 0&&(n=1),i===void 0&&(i=8),t<0)throw new Error("The cylinder radiusTop cannot be negative.");if(e<0)throw new Error("The cylinder radiusBottom cannot be negative.");const s=i,o=[],a=[],l=[],c=[],h=[],u=Math.cos,d=Math.sin;o.push(new M(-e*d(0),-n*.5,e*u(0))),c.push(0),o.push(new M(-t*d(0),n*.5,t*u(0))),h.push(1);for(let m=0;m<s;m++){const v=2*Math.PI/s*(m+1),g=2*Math.PI/s*(m+.5);m<s-1?(o.push(new M(-e*d(v),-n*.5,e*u(v))),c.push(2*m+2),o.push(new M(-t*d(v),n*.5,t*u(v))),h.push(2*m+3),l.push([2*m,2*m+1,2*m+3,2*m+2])):l.push([2*m,2*m+1,1,0]),(s%2===1||m<s/2)&&a.push(new M(-d(g),0,u(g)))}l.push(c),a.push(new M(0,1,0));const f=[];for(let m=0;m<h.length;m++)f.push(h[h.length-m-1]);l.push(f),super({vertices:o,faces:l,axes:a}),this.type=Et.types.CYLINDER,this.radiusTop=t,this.radiusBottom=e,this.height=n,this.numSegments=i}}new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new We;new M;new We;new M;new M;new M;new M;new M;new M;new M;new We;new M;new $t;new We;class dx{constructor(){this.equations=[]}solve(t,e){return 0}addEquation(t){t.enabled&&!t.bi.isTrigger&&!t.bj.isTrigger&&this.equations.push(t)}removeEquation(t){const e=this.equations,n=e.indexOf(t);n!==-1&&e.splice(n,1)}removeAllEquations(){this.equations.length=0}}class fx extends dx{constructor(){super(),this.iterations=10,this.tolerance=1e-7}solve(t,e){let n=0;const i=this.iterations,s=this.tolerance*this.tolerance,o=this.equations,a=o.length,l=e.bodies,c=l.length,h=t;let u,d,f,m,v,g;if(a!==0)for(let y=0;y!==c;y++)l[y].updateSolveMassProperties();const p=mx,x=gx,_=px;p.length=a,x.length=a,_.length=a;for(let y=0;y!==a;y++){const S=o[y];_[y]=0,x[y]=S.computeB(h),p[y]=1/S.computeC()}if(a!==0){for(let A=0;A!==c;A++){const b=l[A],I=b.vlambda,E=b.wlambda;I.set(0,0,0),E.set(0,0,0)}for(n=0;n!==i;n++){m=0;for(let A=0;A!==a;A++){const b=o[A];u=x[A],d=p[A],g=_[A],v=b.computeGWlambda(),f=d*(u-v-b.eps*g),g+f<b.minForce?f=b.minForce-g:g+f>b.maxForce&&(f=b.maxForce-g),_[A]+=f,m+=f>0?f:-f,b.addToWlambda(f)}if(m*m<s)break}for(let A=0;A!==c;A++){const b=l[A],I=b.velocity,E=b.angularVelocity;b.vlambda.vmul(b.linearFactor,b.vlambda),I.vadd(b.vlambda,I),b.wlambda.vmul(b.angularFactor,b.wlambda),E.vadd(b.wlambda,E)}let y=o.length;const S=1/h;for(;y--;)o[y].multiplier=_[y]*S}return n}}const px=[],mx=[],gx=[];Mt.STATIC;class vx{constructor(){this.objects=[],this.type=Object}release(){const t=arguments.length;for(let e=0;e!==t;e++)this.objects.push(e<0||arguments.length<=e?void 0:arguments[e]);return this}get(){return this.objects.length===0?this.constructObject():this.objects.pop()}constructObject(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}resize(t){const e=this.objects;for(;e.length>t;)e.pop();for(;e.length<t;)e.push(this.constructObject());return this}}class _x extends vx{constructor(){super(...arguments),this.type=M}constructObject(){return new M}}const ie={sphereSphere:Et.types.SPHERE,spherePlane:Et.types.SPHERE|Et.types.PLANE,boxBox:Et.types.BOX|Et.types.BOX,sphereBox:Et.types.SPHERE|Et.types.BOX,planeBox:Et.types.PLANE|Et.types.BOX,convexConvex:Et.types.CONVEXPOLYHEDRON,sphereConvex:Et.types.SPHERE|Et.types.CONVEXPOLYHEDRON,planeConvex:Et.types.PLANE|Et.types.CONVEXPOLYHEDRON,boxConvex:Et.types.BOX|Et.types.CONVEXPOLYHEDRON,sphereHeightfield:Et.types.SPHERE|Et.types.HEIGHTFIELD,boxHeightfield:Et.types.BOX|Et.types.HEIGHTFIELD,convexHeightfield:Et.types.CONVEXPOLYHEDRON|Et.types.HEIGHTFIELD,sphereParticle:Et.types.PARTICLE|Et.types.SPHERE,planeParticle:Et.types.PLANE|Et.types.PARTICLE,boxParticle:Et.types.BOX|Et.types.PARTICLE,convexParticle:Et.types.PARTICLE|Et.types.CONVEXPOLYHEDRON,cylinderCylinder:Et.types.CYLINDER,sphereCylinder:Et.types.SPHERE|Et.types.CYLINDER,planeCylinder:Et.types.PLANE|Et.types.CYLINDER,boxCylinder:Et.types.BOX|Et.types.CYLINDER,convexCylinder:Et.types.CONVEXPOLYHEDRON|Et.types.CYLINDER,heightfieldCylinder:Et.types.HEIGHTFIELD|Et.types.CYLINDER,particleCylinder:Et.types.PARTICLE|Et.types.CYLINDER,sphereTrimesh:Et.types.SPHERE|Et.types.TRIMESH,planeTrimesh:Et.types.PLANE|Et.types.TRIMESH};class xx{get[ie.sphereSphere](){return this.sphereSphere}get[ie.spherePlane](){return this.spherePlane}get[ie.boxBox](){return this.boxBox}get[ie.sphereBox](){return this.sphereBox}get[ie.planeBox](){return this.planeBox}get[ie.convexConvex](){return this.convexConvex}get[ie.sphereConvex](){return this.sphereConvex}get[ie.planeConvex](){return this.planeConvex}get[ie.boxConvex](){return this.boxConvex}get[ie.sphereHeightfield](){return this.sphereHeightfield}get[ie.boxHeightfield](){return this.boxHeightfield}get[ie.convexHeightfield](){return this.convexHeightfield}get[ie.sphereParticle](){return this.sphereParticle}get[ie.planeParticle](){return this.planeParticle}get[ie.boxParticle](){return this.boxParticle}get[ie.convexParticle](){return this.convexParticle}get[ie.cylinderCylinder](){return this.convexConvex}get[ie.sphereCylinder](){return this.sphereConvex}get[ie.planeCylinder](){return this.planeConvex}get[ie.boxCylinder](){return this.boxConvex}get[ie.convexCylinder](){return this.convexConvex}get[ie.heightfieldCylinder](){return this.heightfieldCylinder}get[ie.particleCylinder](){return this.particleCylinder}get[ie.sphereTrimesh](){return this.sphereTrimesh}get[ie.planeTrimesh](){return this.planeTrimesh}constructor(t){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new _x,this.world=t,this.currentContactMaterial=t.defaultContactMaterial,this.enableFrictionReduction=!1}createContactEquation(t,e,n,i,s,o){let a;this.contactPointPool.length?(a=this.contactPointPool.pop(),a.bi=t,a.bj=e):a=new tx(t,e),a.enabled=t.collisionResponse&&e.collisionResponse&&n.collisionResponse&&i.collisionResponse;const l=this.currentContactMaterial;a.restitution=l.restitution,a.setSpookParams(l.contactEquationStiffness,l.contactEquationRelaxation,this.world.dt);const c=n.material||t.material,h=i.material||e.material;return c&&h&&c.restitution>=0&&h.restitution>=0&&(a.restitution=c.restitution*h.restitution),a.si=s||n,a.sj=o||i,a}createFrictionEquationsFromContact(t,e){const n=t.bi,i=t.bj,s=t.si,o=t.sj,a=this.world,l=this.currentContactMaterial;let c=l.friction;const h=s.material||n.material,u=o.material||i.material;if(h&&u&&h.friction>=0&&u.friction>=0&&(c=h.friction*u.friction),c>0){const d=c*(a.frictionGravity||a.gravity).length();let f=n.invMass+i.invMass;f>0&&(f=1/f);const m=this.frictionEquationPool,v=m.length?m.pop():new kc(n,i,d*f),g=m.length?m.pop():new kc(n,i,d*f);return v.bi=g.bi=n,v.bj=g.bj=i,v.minForce=g.minForce=-d*f,v.maxForce=g.maxForce=d*f,v.ri.copy(t.ri),v.rj.copy(t.rj),g.ri.copy(t.ri),g.rj.copy(t.rj),t.ni.tangents(v.t,g.t),v.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,a.dt),g.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,a.dt),v.enabled=g.enabled=t.enabled,e.push(v,g),!0}return!1}createFrictionFromAverage(t){let e=this.result[this.result.length-1];if(!this.createFrictionEquationsFromContact(e,this.frictionResult)||t===1)return;const n=this.frictionResult[this.frictionResult.length-2],i=this.frictionResult[this.frictionResult.length-1];fi.setZero(),Wi.setZero(),Xi.setZero();const s=e.bi;e.bj;for(let a=0;a!==t;a++)e=this.result[this.result.length-1-a],e.bi!==s?(fi.vadd(e.ni,fi),Wi.vadd(e.ri,Wi),Xi.vadd(e.rj,Xi)):(fi.vsub(e.ni,fi),Wi.vadd(e.rj,Wi),Xi.vadd(e.ri,Xi));const o=1/t;Wi.scale(o,n.ri),Xi.scale(o,n.rj),i.ri.copy(n.ri),i.rj.copy(n.rj),fi.normalize(),fi.tangents(n.t,i.t)}getContacts(t,e,n,i,s,o,a){this.contactPointPool=s,this.frictionEquationPool=a,this.result=i,this.frictionResult=o;const l=Sx,c=Ex,h=yx,u=Mx;for(let d=0,f=t.length;d!==f;d++){const m=t[d],v=e[d];let g=null;m.material&&v.material&&(g=n.getContactMaterial(m.material,v.material)||null);const p=m.type&Mt.KINEMATIC&&v.type&Mt.STATIC||m.type&Mt.STATIC&&v.type&Mt.KINEMATIC||m.type&Mt.KINEMATIC&&v.type&Mt.KINEMATIC;for(let x=0;x<m.shapes.length;x++){m.quaternion.mult(m.shapeOrientations[x],l),m.quaternion.vmult(m.shapeOffsets[x],h),h.vadd(m.position,h);const _=m.shapes[x];for(let y=0;y<v.shapes.length;y++){v.quaternion.mult(v.shapeOrientations[y],c),v.quaternion.vmult(v.shapeOffsets[y],u),u.vadd(v.position,u);const S=v.shapes[y];if(!(_.collisionFilterMask&S.collisionFilterGroup&&S.collisionFilterMask&_.collisionFilterGroup)||h.distanceTo(u)>_.boundingSphereRadius+S.boundingSphereRadius)continue;let A=null;_.material&&S.material&&(A=n.getContactMaterial(_.material,S.material)||null),this.currentContactMaterial=A||g||n.defaultContactMaterial;const b=_.type|S.type,I=this[b];if(I){let E=!1;_.type<S.type?E=I.call(this,_,S,h,u,l,c,m,v,_,S,p):E=I.call(this,S,_,u,h,c,l,v,m,_,S,p),E&&p&&(n.shapeOverlapKeeper.set(_.id,S.id),n.bodyOverlapKeeper.set(m.id,v.id))}}}}}sphereSphere(t,e,n,i,s,o,a,l,c,h,u){if(u)return n.distanceSquared(i)<(t.radius+e.radius)**2;const d=this.createContactEquation(a,l,t,e,c,h);i.vsub(n,d.ni),d.ni.normalize(),d.ri.copy(d.ni),d.rj.copy(d.ni),d.ri.scale(t.radius,d.ri),d.rj.scale(-e.radius,d.rj),d.ri.vadd(n,d.ri),d.ri.vsub(a.position,d.ri),d.rj.vadd(i,d.rj),d.rj.vsub(l.position,d.rj),this.result.push(d),this.createFrictionEquationsFromContact(d,this.frictionResult)}spherePlane(t,e,n,i,s,o,a,l,c,h,u){const d=this.createContactEquation(a,l,t,e,c,h);if(d.ni.set(0,0,1),o.vmult(d.ni,d.ni),d.ni.negate(d.ni),d.ni.normalize(),d.ni.scale(t.radius,d.ri),n.vsub(i,wr),d.ni.scale(d.ni.dot(wr),Vc),wr.vsub(Vc,d.rj),-wr.dot(d.ni)<=t.radius){if(u)return!0;const f=d.ri,m=d.rj;f.vadd(n,f),f.vsub(a.position,f),m.vadd(i,m),m.vsub(l.position,m),this.result.push(d),this.createFrictionEquationsFromContact(d,this.frictionResult)}}boxBox(t,e,n,i,s,o,a,l,c,h,u){return t.convexPolyhedronRepresentation.material=t.material,e.convexPolyhedronRepresentation.material=e.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e.convexPolyhedronRepresentation,n,i,s,o,a,l,t,e,u)}sphereBox(t,e,n,i,s,o,a,l,c,h,u){const d=this.v3pool,f=Kx;n.vsub(i,br),e.getSideNormals(f,o);const m=t.radius;let v=!1;const g=$x,p=Jx,x=Qx;let _=null,y=0,S=0,A=0,b=null;for(let O=0,X=f.length;O!==X&&v===!1;O++){const G=qx;G.copy(f[O]);const q=G.length();G.normalize();const Q=br.dot(G);if(Q<q+m&&Q>0){const z=jx,V=Yx;z.copy(f[(O+1)%3]),V.copy(f[(O+2)%3]);const ct=z.length(),dt=V.length();z.normalize(),V.normalize();const pt=br.dot(z),bt=br.dot(V);if(pt<ct&&pt>-ct&&bt<dt&&bt>-dt){const Tt=Math.abs(Q-q-m);if((b===null||Tt<b)&&(b=Tt,S=pt,A=bt,_=q,g.copy(G),p.copy(z),x.copy(V),y++,u))return!0}}}if(y){v=!0;const O=this.createContactEquation(a,l,t,e,c,h);g.scale(-m,O.ri),O.ni.copy(g),O.ni.negate(O.ni),g.scale(_,g),p.scale(S,p),g.vadd(p,g),x.scale(A,x),g.vadd(x,O.rj),O.ri.vadd(n,O.ri),O.ri.vsub(a.position,O.ri),O.rj.vadd(i,O.rj),O.rj.vsub(l.position,O.rj),this.result.push(O),this.createFrictionEquationsFromContact(O,this.frictionResult)}let I=d.get();const E=Zx;for(let O=0;O!==2&&!v;O++)for(let X=0;X!==2&&!v;X++)for(let G=0;G!==2&&!v;G++)if(I.set(0,0,0),O?I.vadd(f[0],I):I.vsub(f[0],I),X?I.vadd(f[1],I):I.vsub(f[1],I),G?I.vadd(f[2],I):I.vsub(f[2],I),i.vadd(I,E),E.vsub(n,E),E.lengthSquared()<m*m){if(u)return!0;v=!0;const q=this.createContactEquation(a,l,t,e,c,h);q.ri.copy(E),q.ri.normalize(),q.ni.copy(q.ri),q.ri.scale(m,q.ri),q.rj.copy(I),q.ri.vadd(n,q.ri),q.ri.vsub(a.position,q.ri),q.rj.vadd(i,q.rj),q.rj.vsub(l.position,q.rj),this.result.push(q),this.createFrictionEquationsFromContact(q,this.frictionResult)}d.release(I),I=null;const T=d.get(),k=d.get(),Z=d.get(),P=d.get(),F=d.get(),U=f.length;for(let O=0;O!==U&&!v;O++)for(let X=0;X!==U&&!v;X++)if(O%3!==X%3){f[X].cross(f[O],T),T.normalize(),f[O].vadd(f[X],k),Z.copy(n),Z.vsub(k,Z),Z.vsub(i,Z);const G=Z.dot(T);T.scale(G,P);let q=0;for(;q===O%3||q===X%3;)q++;F.copy(n),F.vsub(P,F),F.vsub(k,F),F.vsub(i,F);const Q=Math.abs(G),z=F.length();if(Q<f[q].length()&&z<m){if(u)return!0;v=!0;const V=this.createContactEquation(a,l,t,e,c,h);k.vadd(P,V.rj),V.rj.copy(V.rj),F.negate(V.ni),V.ni.normalize(),V.ri.copy(V.rj),V.ri.vadd(i,V.ri),V.ri.vsub(n,V.ri),V.ri.normalize(),V.ri.scale(m,V.ri),V.ri.vadd(n,V.ri),V.ri.vsub(a.position,V.ri),V.rj.vadd(i,V.rj),V.rj.vsub(l.position,V.rj),this.result.push(V),this.createFrictionEquationsFromContact(V,this.frictionResult)}}d.release(T,k,Z,P,F)}planeBox(t,e,n,i,s,o,a,l,c,h,u){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,e.convexPolyhedronRepresentation.id=e.id,this.planeConvex(t,e.convexPolyhedronRepresentation,n,i,s,o,a,l,t,e,u)}convexConvex(t,e,n,i,s,o,a,l,c,h,u,d,f){const m=py;if(!(n.distanceTo(i)>t.boundingSphereRadius+e.boundingSphereRadius)&&t.findSeparatingAxis(e,n,s,i,o,m,d,f)){const v=[],g=my;t.clipAgainstHull(n,s,e,i,o,m,-100,100,v);let p=0;for(let x=0;x!==v.length;x++){if(u)return!0;const _=this.createContactEquation(a,l,t,e,c,h),y=_.ri,S=_.rj;m.negate(_.ni),v[x].normal.negate(g),g.scale(v[x].depth,g),v[x].point.vadd(g,y),S.copy(v[x].point),y.vsub(n,y),S.vsub(i,S),y.vadd(n,y),y.vsub(a.position,y),S.vadd(i,S),S.vsub(l.position,S),this.result.push(_),p++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(_,this.frictionResult)}this.enableFrictionReduction&&p&&this.createFrictionFromAverage(p)}}sphereConvex(t,e,n,i,s,o,a,l,c,h,u){const d=this.v3pool;n.vsub(i,ty);const f=e.faceNormals,m=e.faces,v=e.vertices,g=t.radius;let p=!1;for(let x=0;x!==v.length;x++){const _=v[x],y=sy;o.vmult(_,y),i.vadd(y,y);const S=iy;if(y.vsub(n,S),S.lengthSquared()<g*g){if(u)return!0;p=!0;const A=this.createContactEquation(a,l,t,e,c,h);A.ri.copy(S),A.ri.normalize(),A.ni.copy(A.ri),A.ri.scale(g,A.ri),y.vsub(i,A.rj),A.ri.vadd(n,A.ri),A.ri.vsub(a.position,A.ri),A.rj.vadd(i,A.rj),A.rj.vsub(l.position,A.rj),this.result.push(A),this.createFrictionEquationsFromContact(A,this.frictionResult);return}}for(let x=0,_=m.length;x!==_&&p===!1;x++){const y=f[x],S=m[x],A=ry;o.vmult(y,A);const b=oy;o.vmult(v[S[0]],b),b.vadd(i,b);const I=ay;A.scale(-g,I),n.vadd(I,I);const E=ly;I.vsub(b,E);const T=E.dot(A),k=cy;if(n.vsub(b,k),T<0&&k.dot(A)>0){const Z=[];for(let P=0,F=S.length;P!==F;P++){const U=d.get();o.vmult(v[S[P]],U),i.vadd(U,U),Z.push(U)}if(Xx(Z,A,n)){if(u)return!0;p=!0;const P=this.createContactEquation(a,l,t,e,c,h);A.scale(-g,P.ri),A.negate(P.ni);const F=d.get();A.scale(-T,F);const U=d.get();A.scale(-g,U),n.vsub(i,P.rj),P.rj.vadd(U,P.rj),P.rj.vadd(F,P.rj),P.rj.vadd(i,P.rj),P.rj.vsub(l.position,P.rj),P.ri.vadd(n,P.ri),P.ri.vsub(a.position,P.ri),d.release(F),d.release(U),this.result.push(P),this.createFrictionEquationsFromContact(P,this.frictionResult);for(let O=0,X=Z.length;O!==X;O++)d.release(Z[O]);return}else for(let P=0;P!==S.length;P++){const F=d.get(),U=d.get();o.vmult(v[S[(P+1)%S.length]],F),o.vmult(v[S[(P+2)%S.length]],U),i.vadd(F,F),i.vadd(U,U);const O=ey;U.vsub(F,O);const X=ny;O.unit(X);const G=d.get(),q=d.get();n.vsub(F,q);const Q=q.dot(X);X.scale(Q,G),G.vadd(F,G);const z=d.get();if(G.vsub(n,z),Q>0&&Q*Q<O.lengthSquared()&&z.lengthSquared()<g*g){if(u)return!0;const V=this.createContactEquation(a,l,t,e,c,h);G.vsub(i,V.rj),G.vsub(n,V.ni),V.ni.normalize(),V.ni.scale(g,V.ri),V.rj.vadd(i,V.rj),V.rj.vsub(l.position,V.rj),V.ri.vadd(n,V.ri),V.ri.vsub(a.position,V.ri),this.result.push(V),this.createFrictionEquationsFromContact(V,this.frictionResult);for(let ct=0,dt=Z.length;ct!==dt;ct++)d.release(Z[ct]);d.release(F),d.release(U),d.release(G),d.release(z),d.release(q);return}d.release(F),d.release(U),d.release(G),d.release(z),d.release(q)}for(let P=0,F=Z.length;P!==F;P++)d.release(Z[P])}}}planeConvex(t,e,n,i,s,o,a,l,c,h,u){const d=hy,f=uy;f.set(0,0,1),s.vmult(f,f);let m=0;const v=dy;for(let g=0;g!==e.vertices.length;g++)if(d.copy(e.vertices[g]),o.vmult(d,d),i.vadd(d,d),d.vsub(n,v),f.dot(v)<=0){if(u)return!0;const x=this.createContactEquation(a,l,t,e,c,h),_=fy;f.scale(f.dot(v),_),d.vsub(_,_),_.vsub(n,x.ri),x.ni.copy(f),d.vsub(i,x.rj),x.ri.vadd(n,x.ri),x.ri.vsub(a.position,x.ri),x.rj.vadd(i,x.rj),x.rj.vsub(l.position,x.rj),this.result.push(x),m++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(x,this.frictionResult)}this.enableFrictionReduction&&m&&this.createFrictionFromAverage(m)}boxConvex(t,e,n,i,s,o,a,l,c,h,u){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e,n,i,s,o,a,l,t,e,u)}sphereHeightfield(t,e,n,i,s,o,a,l,c,h,u){const d=e.data,f=t.radius,m=e.elementSize,v=Ay,g=Ty;$t.pointToLocalFrame(i,o,n,g);let p=Math.floor((g.x-f)/m)-1,x=Math.ceil((g.x+f)/m)+1,_=Math.floor((g.y-f)/m)-1,y=Math.ceil((g.y+f)/m)+1;if(x<0||y<0||p>d.length||_>d[0].length)return;p<0&&(p=0),x<0&&(x=0),_<0&&(_=0),y<0&&(y=0),p>=d.length&&(p=d.length-1),x>=d.length&&(x=d.length-1),y>=d[0].length&&(y=d[0].length-1),_>=d[0].length&&(_=d[0].length-1);const S=[];e.getRectMinMax(p,_,x,y,S);const A=S[0],b=S[1];if(g.z-f>b||g.z+f<A)return;const I=this.result;for(let E=p;E<x;E++)for(let T=_;T<y;T++){const k=I.length;let Z=!1;if(e.getConvexTrianglePillar(E,T,!1),$t.pointToWorldFrame(i,o,e.pillarOffset,v),n.distanceTo(v)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(Z=this.sphereConvex(t,e.pillarConvex,n,v,s,o,a,l,t,e,u)),u&&Z||(e.getConvexTrianglePillar(E,T,!0),$t.pointToWorldFrame(i,o,e.pillarOffset,v),n.distanceTo(v)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(Z=this.sphereConvex(t,e.pillarConvex,n,v,s,o,a,l,t,e,u)),u&&Z))return!0;if(I.length-k>2)return}}boxHeightfield(t,e,n,i,s,o,a,l,c,h,u){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexHeightfield(t.convexPolyhedronRepresentation,e,n,i,s,o,a,l,t,e,u)}convexHeightfield(t,e,n,i,s,o,a,l,c,h,u){const d=e.data,f=e.elementSize,m=t.boundingSphereRadius,v=wy,g=by,p=Ey;$t.pointToLocalFrame(i,o,n,p);let x=Math.floor((p.x-m)/f)-1,_=Math.ceil((p.x+m)/f)+1,y=Math.floor((p.y-m)/f)-1,S=Math.ceil((p.y+m)/f)+1;if(_<0||S<0||x>d.length||y>d[0].length)return;x<0&&(x=0),_<0&&(_=0),y<0&&(y=0),S<0&&(S=0),x>=d.length&&(x=d.length-1),_>=d.length&&(_=d.length-1),S>=d[0].length&&(S=d[0].length-1),y>=d[0].length&&(y=d[0].length-1);const A=[];e.getRectMinMax(x,y,_,S,A);const b=A[0],I=A[1];if(!(p.z-m>I||p.z+m<b))for(let E=x;E<_;E++)for(let T=y;T<S;T++){let k=!1;if(e.getConvexTrianglePillar(E,T,!1),$t.pointToWorldFrame(i,o,e.pillarOffset,v),n.distanceTo(v)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(k=this.convexConvex(t,e.pillarConvex,n,v,s,o,a,l,null,null,u,g,null)),u&&k||(e.getConvexTrianglePillar(E,T,!0),$t.pointToWorldFrame(i,o,e.pillarOffset,v),n.distanceTo(v)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(k=this.convexConvex(t,e.pillarConvex,n,v,s,o,a,l,null,null,u,g,null)),u&&k))return!0}}sphereParticle(t,e,n,i,s,o,a,l,c,h,u){const d=xy;if(d.set(0,0,1),i.vsub(n,d),d.lengthSquared()<=t.radius*t.radius){if(u)return!0;const m=this.createContactEquation(l,a,e,t,c,h);d.normalize(),m.rj.copy(d),m.rj.scale(t.radius,m.rj),m.ni.copy(d),m.ni.negate(m.ni),m.ri.set(0,0,0),this.result.push(m),this.createFrictionEquationsFromContact(m,this.frictionResult)}}planeParticle(t,e,n,i,s,o,a,l,c,h,u){const d=gy;d.set(0,0,1),a.quaternion.vmult(d,d);const f=vy;if(i.vsub(a.position,f),d.dot(f)<=0){if(u)return!0;const v=this.createContactEquation(l,a,e,t,c,h);v.ni.copy(d),v.ni.negate(v.ni),v.ri.set(0,0,0);const g=_y;d.scale(d.dot(i),g),i.vsub(g,g),v.rj.copy(g),this.result.push(v),this.createFrictionEquationsFromContact(v,this.frictionResult)}}boxParticle(t,e,n,i,s,o,a,l,c,h,u){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexParticle(t.convexPolyhedronRepresentation,e,n,i,s,o,a,l,t,e,u)}convexParticle(t,e,n,i,s,o,a,l,c,h,u){let d=-1;const f=My,m=Sy;let v=null;const g=yy;if(g.copy(i),g.vsub(n,g),s.conjugate(Hc),Hc.vmult(g,g),t.pointIsInside(g)){t.worldVerticesNeedsUpdate&&t.computeWorldVertices(n,s),t.worldFaceNormalsNeedsUpdate&&t.computeWorldFaceNormals(s);for(let p=0,x=t.faces.length;p!==x;p++){const _=[t.worldVertices[t.faces[p][0]]],y=t.worldFaceNormals[p];i.vsub(_[0],Gc);const S=-y.dot(Gc);if(v===null||Math.abs(S)<Math.abs(v)){if(u)return!0;v=S,d=p,f.copy(y)}}if(d!==-1){const p=this.createContactEquation(l,a,e,t,c,h);f.scale(v,m),m.vadd(i,m),m.vsub(n,m),p.rj.copy(m),f.negate(p.ni),p.ri.set(0,0,0);const x=p.ri,_=p.rj;x.vadd(i,x),x.vsub(l.position,x),_.vadd(n,_),_.vsub(a.position,_),this.result.push(p),this.createFrictionEquationsFromContact(p,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}}heightfieldCylinder(t,e,n,i,s,o,a,l,c,h,u){return this.convexHeightfield(e,t,i,n,o,s,l,a,c,h,u)}particleCylinder(t,e,n,i,s,o,a,l,c,h,u){return this.convexParticle(e,t,i,n,o,s,l,a,c,h,u)}sphereTrimesh(t,e,n,i,s,o,a,l,c,h,u){const d=Lx,f=Ix,m=Dx,v=Nx,g=Ux,p=Fx,x=kx,_=Px,y=Cx,S=Vx;$t.pointToLocalFrame(i,o,n,g);const A=t.radius;x.lowerBound.set(g.x-A,g.y-A,g.z-A),x.upperBound.set(g.x+A,g.y+A,g.z+A),e.getTrianglesInAABB(x,S);const b=Rx,I=t.radius*t.radius;for(let P=0;P<S.length;P++)for(let F=0;F<3;F++)if(e.getVertex(e.indices[S[P]*3+F],b),b.vsub(g,y),y.lengthSquared()<=I){if(_.copy(b),$t.pointToWorldFrame(i,o,_,b),b.vsub(n,y),u)return!0;let U=this.createContactEquation(a,l,t,e,c,h);U.ni.copy(y),U.ni.normalize(),U.ri.copy(U.ni),U.ri.scale(t.radius,U.ri),U.ri.vadd(n,U.ri),U.ri.vsub(a.position,U.ri),U.rj.copy(b),U.rj.vsub(l.position,U.rj),this.result.push(U),this.createFrictionEquationsFromContact(U,this.frictionResult)}for(let P=0;P<S.length;P++)for(let F=0;F<3;F++){e.getVertex(e.indices[S[P]*3+F],d),e.getVertex(e.indices[S[P]*3+(F+1)%3],f),f.vsub(d,m),g.vsub(f,p);const U=p.dot(m);g.vsub(d,p);let O=p.dot(m);if(O>0&&U<0&&(g.vsub(d,p),v.copy(m),v.normalize(),O=p.dot(v),v.scale(O,p),p.vadd(d,p),p.distanceTo(g)<t.radius)){if(u)return!0;const G=this.createContactEquation(a,l,t,e,c,h);p.vsub(g,G.ni),G.ni.normalize(),G.ni.scale(t.radius,G.ri),G.ri.vadd(n,G.ri),G.ri.vsub(a.position,G.ri),$t.pointToWorldFrame(i,o,p,p),p.vsub(l.position,G.rj),$t.vectorToWorldFrame(o,G.ni,G.ni),$t.vectorToWorldFrame(o,G.ri,G.ri),this.result.push(G),this.createFrictionEquationsFromContact(G,this.frictionResult)}}const E=Ox,T=Bx,k=zx,Z=Ax;for(let P=0,F=S.length;P!==F;P++){e.getTriangleVertices(S[P],E,T,k),e.getNormal(S[P],Z),g.vsub(E,p);let U=p.dot(Z);if(Z.scale(U,p),g.vsub(p,p),U=p.distanceTo(g),me.pointInTriangle(p,E,T,k)&&U<t.radius){if(u)return!0;let O=this.createContactEquation(a,l,t,e,c,h);p.vsub(g,O.ni),O.ni.normalize(),O.ni.scale(t.radius,O.ri),O.ri.vadd(n,O.ri),O.ri.vsub(a.position,O.ri),$t.pointToWorldFrame(i,o,p,p),p.vsub(l.position,O.rj),$t.vectorToWorldFrame(o,O.ni,O.ni),$t.vectorToWorldFrame(o,O.ri,O.ri),this.result.push(O),this.createFrictionEquationsFromContact(O,this.frictionResult)}}S.length=0}planeTrimesh(t,e,n,i,s,o,a,l,c,h,u){const d=new M,f=wx;f.set(0,0,1),s.vmult(f,f);for(let m=0;m<e.vertices.length/3;m++){e.getVertex(m,d);const v=new M;v.copy(d),$t.pointToWorldFrame(i,o,v,d);const g=bx;if(d.vsub(n,g),f.dot(g)<=0){if(u)return!0;const x=this.createContactEquation(a,l,t,e,c,h);x.ni.copy(f);const _=Tx;f.scale(g.dot(f),_),d.vsub(_,_),x.ri.copy(_),x.ri.vsub(a.position,x.ri),x.rj.copy(d),x.rj.vsub(l.position,x.rj),this.result.push(x),this.createFrictionEquationsFromContact(x,this.frictionResult)}}}}const fi=new M,Wi=new M,Xi=new M,yx=new M,Mx=new M,Sx=new ge,Ex=new ge,wx=new M,bx=new M,Tx=new M,Ax=new M,Cx=new M;new M;const Rx=new M,Px=new M,Lx=new M,Ix=new M,Dx=new M,Nx=new M,Ux=new M,Fx=new M,Ox=new M,Bx=new M,zx=new M,kx=new We,Vx=[],wr=new M,Vc=new M,Hx=new M,Gx=new M,Wx=new M;function Xx(r,t,e){let n=null;const i=r.length;for(let s=0;s!==i;s++){const o=r[s],a=Hx;r[(s+1)%i].vsub(o,a);const l=Gx;a.cross(t,l);const c=Wx;e.vsub(o,c);const h=l.dot(c);if(n===null||h>0&&n===!0||h<=0&&n===!1){n===null&&(n=h>0);continue}else return!1}return!0}const br=new M,qx=new M,jx=new M,Yx=new M,Kx=[new M,new M,new M,new M,new M,new M],Zx=new M,$x=new M,Jx=new M,Qx=new M,ty=new M,ey=new M,ny=new M,iy=new M,sy=new M,ry=new M,oy=new M,ay=new M,ly=new M,cy=new M;new M;new M;const hy=new M,uy=new M,dy=new M,fy=new M,py=new M,my=new M,gy=new M,vy=new M,_y=new M,xy=new M,Hc=new ge,yy=new M;new M;const My=new M,Gc=new M,Sy=new M,Ey=new M,wy=new M,by=[0],Ty=new M,Ay=new M;class Wc{constructor(){this.current=[],this.previous=[]}getKey(t,e){if(e<t){const n=e;e=t,t=n}return t<<16|e}set(t,e){const n=this.getKey(t,e),i=this.current;let s=0;for(;n>i[s];)s++;if(n!==i[s]){for(let o=i.length-1;o>=s;o--)i[o+1]=i[o];i[s]=n}}tick(){const t=this.current;this.current=this.previous,this.previous=t,this.current.length=0}getDiff(t,e){const n=this.current,i=this.previous,s=n.length,o=i.length;let a=0;for(let l=0;l<s;l++){let c=!1;const h=n[l];for(;h>i[a];)a++;c=h===i[a],c||Xc(t,h)}a=0;for(let l=0;l<o;l++){let c=!1;const h=i[l];for(;h>n[a];)a++;c=n[a]===h,c||Xc(e,h)}}}function Xc(r,t){r.push((t&4294901760)>>16,t&65535)}const ko=(r,t)=>r<t?`${r}-${t}`:`${t}-${r}`;class Cy{constructor(){this.data={keys:[]}}get(t,e){const n=ko(t,e);return this.data[n]}set(t,e,n){const i=ko(t,e);this.get(t,e)||this.data.keys.push(i),this.data[i]=n}delete(t,e){const n=ko(t,e),i=this.data.keys.indexOf(n);i!==-1&&this.data.keys.splice(i,1),delete this.data[n]}reset(){const t=this.data,e=t.keys;for(;e.length>0;){const n=e.pop();delete t[n]}}}class Ry extends Xh{constructor(t){t===void 0&&(t={}),super(),this.dt=-1,this.allowSleep=!!t.allowSleep,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=t.quatNormalizeSkip!==void 0?t.quatNormalizeSkip:0,this.quatNormalizeFast=t.quatNormalizeFast!==void 0?t.quatNormalizeFast:!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new M,t.gravity&&this.gravity.copy(t.gravity),t.frictionGravity&&(this.frictionGravity=new M,this.frictionGravity.copy(t.frictionGravity)),this.broadphase=t.broadphase!==void 0?t.broadphase:new U0,this.bodies=[],this.hasActiveBodies=!1,this.solver=t.solver!==void 0?t.solver:new fx,this.constraints=[],this.narrowphase=new xx(this),this.collisionMatrix=new Pc,this.collisionMatrixPrevious=new Pc,this.bodyOverlapKeeper=new Wc,this.shapeOverlapKeeper=new Wc,this.contactmaterials=[],this.contactMaterialTable=new Cy,this.defaultMaterial=new oi("default"),this.defaultContactMaterial=new jn(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.accumulator=0,this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null},this.idToBodyMap={},this.broadphase.setWorld(this)}getContactMaterial(t,e){return this.contactMaterialTable.get(t.id,e.id)}collisionMatrixTick(){const t=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=t,this.collisionMatrix.reset(),this.bodyOverlapKeeper.tick(),this.shapeOverlapKeeper.tick()}addConstraint(t){this.constraints.push(t)}removeConstraint(t){const e=this.constraints.indexOf(t);e!==-1&&this.constraints.splice(e,1)}rayTest(t,e,n){n instanceof Or?this.raycastClosest(t,e,{skipBackfaces:!0},n):this.raycastAll(t,e,{skipBackfaces:!0},n)}raycastAll(t,e,n,i){return n===void 0&&(n={}),n.mode=me.ALL,n.from=t,n.to=e,n.callback=i,Vo.intersectWorld(this,n)}raycastAny(t,e,n,i){return n===void 0&&(n={}),n.mode=me.ANY,n.from=t,n.to=e,n.result=i,Vo.intersectWorld(this,n)}raycastClosest(t,e,n,i){return n===void 0&&(n={}),n.mode=me.CLOSEST,n.from=t,n.to=e,n.result=i,Vo.intersectWorld(this,n)}addBody(t){this.bodies.includes(t)||(t.index=this.bodies.length,this.bodies.push(t),t.world=this,t.initPosition.copy(t.position),t.initVelocity.copy(t.velocity),t.timeLastSleepy=this.time,t instanceof Mt&&(t.initAngularVelocity.copy(t.angularVelocity),t.initQuaternion.copy(t.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=t,this.idToBodyMap[t.id]=t,this.dispatchEvent(this.addBodyEvent))}removeBody(t){t.world=null;const e=this.bodies.length-1,n=this.bodies,i=n.indexOf(t);if(i!==-1){n.splice(i,1);for(let s=0;s!==n.length;s++)n[s].index=s;this.collisionMatrix.setNumObjects(e),this.removeBodyEvent.body=t,delete this.idToBodyMap[t.id],this.dispatchEvent(this.removeBodyEvent)}}getBodyById(t){return this.idToBodyMap[t]}getShapeById(t){const e=this.bodies;for(let n=0;n<e.length;n++){const i=e[n].shapes;for(let s=0;s<i.length;s++){const o=i[s];if(o.id===t)return o}}return null}addContactMaterial(t){this.contactmaterials.push(t),this.contactMaterialTable.set(t.materials[0].id,t.materials[1].id,t)}removeContactMaterial(t){const e=this.contactmaterials.indexOf(t);e!==-1&&(this.contactmaterials.splice(e,1),this.contactMaterialTable.delete(t.materials[0].id,t.materials[1].id))}fixedStep(t,e){t===void 0&&(t=1/60),e===void 0&&(e=10);const n=ve.now()/1e3;if(!this.lastCallTime)this.step(t,void 0,e);else{const i=n-this.lastCallTime;this.step(t,i,e)}this.lastCallTime=n}step(t,e,n){if(n===void 0&&(n=10),e===void 0)this.internalStep(t),this.time+=t;else{this.accumulator+=e;const i=ve.now();let s=0;for(;this.accumulator>=t&&s<n&&(this.internalStep(t),this.accumulator-=t,s++,!(ve.now()-i>t*1e3)););this.accumulator=this.accumulator%t;const o=this.accumulator/t;for(let a=0;a!==this.bodies.length;a++){const l=this.bodies[a];l.previousPosition.lerp(l.position,o,l.interpolatedPosition),l.previousQuaternion.slerp(l.quaternion,o,l.interpolatedQuaternion),l.previousQuaternion.normalize()}this.time+=e}}internalStep(t){this.dt=t;const e=this.contacts,n=Ny,i=Uy,s=this.bodies.length,o=this.bodies,a=this.solver,l=this.gravity,c=this.doProfiling,h=this.profile,u=Mt.DYNAMIC;let d=-1/0;const f=this.constraints,m=Dy;l.length();const v=l.x,g=l.y,p=l.z;let x=0;for(c&&(d=ve.now()),x=0;x!==s;x++){const P=o[x];if(P.type===u){const F=P.force,U=P.mass;F.x+=U*v,F.y+=U*g,F.z+=U*p}}for(let P=0,F=this.subsystems.length;P!==F;P++)this.subsystems[P].update();c&&(d=ve.now()),n.length=0,i.length=0,this.broadphase.collisionPairs(this,n,i),c&&(h.broadphase=ve.now()-d);let _=f.length;for(x=0;x!==_;x++){const P=f[x];if(!P.collideConnected)for(let F=n.length-1;F>=0;F-=1)(P.bodyA===n[F]&&P.bodyB===i[F]||P.bodyB===n[F]&&P.bodyA===i[F])&&(n.splice(F,1),i.splice(F,1))}this.collisionMatrixTick(),c&&(d=ve.now());const y=Iy,S=e.length;for(x=0;x!==S;x++)y.push(e[x]);e.length=0;const A=this.frictionEquations.length;for(x=0;x!==A;x++)m.push(this.frictionEquations[x]);for(this.frictionEquations.length=0,this.narrowphase.getContacts(n,i,this,e,y,this.frictionEquations,m),c&&(h.narrowphase=ve.now()-d),c&&(d=ve.now()),x=0;x<this.frictionEquations.length;x++)a.addEquation(this.frictionEquations[x]);const b=e.length;for(let P=0;P!==b;P++){const F=e[P],U=F.bi,O=F.bj,X=F.si,G=F.sj;let q;if(U.material&&O.material?q=this.getContactMaterial(U.material,O.material)||this.defaultContactMaterial:q=this.defaultContactMaterial,q.friction,U.material&&O.material&&(U.material.friction>=0&&O.material.friction>=0&&U.material.friction*O.material.friction,U.material.restitution>=0&&O.material.restitution>=0&&(F.restitution=U.material.restitution*O.material.restitution)),a.addEquation(F),U.allowSleep&&U.type===Mt.DYNAMIC&&U.sleepState===Mt.SLEEPING&&O.sleepState===Mt.AWAKE&&O.type!==Mt.STATIC){const Q=O.velocity.lengthSquared()+O.angularVelocity.lengthSquared(),z=O.sleepSpeedLimit**2;Q>=z*2&&(U.wakeUpAfterNarrowphase=!0)}if(O.allowSleep&&O.type===Mt.DYNAMIC&&O.sleepState===Mt.SLEEPING&&U.sleepState===Mt.AWAKE&&U.type!==Mt.STATIC){const Q=U.velocity.lengthSquared()+U.angularVelocity.lengthSquared(),z=U.sleepSpeedLimit**2;Q>=z*2&&(O.wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(U,O,!0),this.collisionMatrixPrevious.get(U,O)||(Ss.body=O,Ss.contact=F,U.dispatchEvent(Ss),Ss.body=U,O.dispatchEvent(Ss)),this.bodyOverlapKeeper.set(U.id,O.id),this.shapeOverlapKeeper.set(X.id,G.id)}for(this.emitContactEvents(),c&&(h.makeContactConstraints=ve.now()-d,d=ve.now()),x=0;x!==s;x++){const P=o[x];P.wakeUpAfterNarrowphase&&(P.wakeUp(),P.wakeUpAfterNarrowphase=!1)}for(_=f.length,x=0;x!==_;x++){const P=f[x];P.update();for(let F=0,U=P.equations.length;F!==U;F++){const O=P.equations[F];a.addEquation(O)}}a.solve(t,this),c&&(h.solve=ve.now()-d),a.removeAllEquations();const I=Math.pow;for(x=0;x!==s;x++){const P=o[x];if(P.type&u){const F=I(1-P.linearDamping,t),U=P.velocity;U.scale(F,U);const O=P.angularVelocity;if(O){const X=I(1-P.angularDamping,t);O.scale(X,O)}}}this.dispatchEvent(Ly),c&&(d=ve.now());const T=this.stepnumber%(this.quatNormalizeSkip+1)===0,k=this.quatNormalizeFast;for(x=0;x!==s;x++)o[x].integrate(t,T,k);this.clearForces(),this.broadphase.dirty=!0,c&&(h.integrate=ve.now()-d),this.stepnumber+=1,this.dispatchEvent(Py);let Z=!0;if(this.allowSleep)for(Z=!1,x=0;x!==s;x++){const P=o[x];P.sleepTick(this.time),P.sleepState!==Mt.SLEEPING&&(Z=!0)}this.hasActiveBodies=Z}emitContactEvents(){const t=this.hasAnyEventListener("beginContact"),e=this.hasAnyEventListener("endContact");if((t||e)&&this.bodyOverlapKeeper.getDiff(An,Cn),t){for(let s=0,o=An.length;s<o;s+=2)Es.bodyA=this.getBodyById(An[s]),Es.bodyB=this.getBodyById(An[s+1]),this.dispatchEvent(Es);Es.bodyA=Es.bodyB=null}if(e){for(let s=0,o=Cn.length;s<o;s+=2)ws.bodyA=this.getBodyById(Cn[s]),ws.bodyB=this.getBodyById(Cn[s+1]),this.dispatchEvent(ws);ws.bodyA=ws.bodyB=null}An.length=Cn.length=0;const n=this.hasAnyEventListener("beginShapeContact"),i=this.hasAnyEventListener("endShapeContact");if((n||i)&&this.shapeOverlapKeeper.getDiff(An,Cn),n){for(let s=0,o=An.length;s<o;s+=2){const a=this.getShapeById(An[s]),l=this.getShapeById(An[s+1]);Rn.shapeA=a,Rn.shapeB=l,a&&(Rn.bodyA=a.body),l&&(Rn.bodyB=l.body),this.dispatchEvent(Rn)}Rn.bodyA=Rn.bodyB=Rn.shapeA=Rn.shapeB=null}if(i){for(let s=0,o=Cn.length;s<o;s+=2){const a=this.getShapeById(Cn[s]),l=this.getShapeById(Cn[s+1]);Pn.shapeA=a,Pn.shapeB=l,a&&(Pn.bodyA=a.body),l&&(Pn.bodyB=l.body),this.dispatchEvent(Pn)}Pn.bodyA=Pn.bodyB=Pn.shapeA=Pn.shapeB=null}}clearForces(){const t=this.bodies,e=t.length;for(let n=0;n!==e;n++){const i=t[n];i.force,i.torque,i.force.set(0,0,0),i.torque.set(0,0,0)}}}new We;const Vo=new me,ve=globalThis.performance||{};if(!ve.now){let r=Date.now();ve.timing&&ve.timing.navigationStart&&(r=ve.timing.navigationStart),ve.now=()=>Date.now()-r}new M;const Py={type:"postStep"},Ly={type:"preStep"},Ss={type:Mt.COLLIDE_EVENT_NAME,body:null,contact:null},Iy=[],Dy=[],Ny=[],Uy=[],An=[],Cn=[],Es={type:"beginContact",bodyA:null,bodyB:null},ws={type:"endContact",bodyA:null,bodyB:null},Rn={type:"beginShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},Pn={type:"endShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},qc={type:"change"},Ho={type:"start"},jc={type:"end"},Tr=new Xs,Yc=new Dn,Fy=Math.cos(70*on.DEG2RAD);class Oy extends ii{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new N,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:bi.ROTATE,MIDDLE:bi.DOLLY,RIGHT:bi.PAN},this.touches={ONE:Ti.ROTATE,TWO:Ti.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(D){D.addEventListener("keydown",w),this._domElementKeyEvents=D},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",w),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(qc),n.update(),s=i.NONE},this.update=function(){const D=new N,et=new Ne().setFromUnitVectors(t.up,new N(0,1,0)),xt=et.clone().invert(),ft=new N,_t=new Ne,Bt=new N,Yt=2*Math.PI;return function(){const gt=n.object.position;D.copy(gt).sub(n.target),D.applyQuaternion(et),a.setFromVector3(D),n.autoRotate&&s===i.NONE&&k(E()),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let Y=n.minAzimuthAngle,st=n.maxAzimuthAngle;isFinite(Y)&&isFinite(st)&&(Y<-Math.PI?Y+=Yt:Y>Math.PI&&(Y-=Yt),st<-Math.PI?st+=Yt:st>Math.PI&&(st-=Yt),Y<=st?a.theta=Math.max(Y,Math.min(st,a.theta)):a.theta=a.theta>(Y+st)/2?Math.max(Y,a.theta):Math.min(st,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),n.zoomToCursor&&A||n.object.isOrthographicCamera?a.radius=q(a.radius):a.radius=q(a.radius*c),D.setFromSpherical(a),D.applyQuaternion(xt),gt.copy(n.target).add(D),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),h.set(0,0,0));let vt=!1;if(n.zoomToCursor&&A){let Gt=null;if(n.object.isPerspectiveCamera){const Qt=D.length();Gt=q(Qt*c);const ee=Qt-Gt;n.object.position.addScaledVector(y,ee),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const Qt=new N(S.x,S.y,0);Qt.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),vt=!0;const ee=new N(S.x,S.y,0);ee.unproject(n.object),n.object.position.sub(ee).add(Qt),n.object.updateMatrixWorld(),Gt=D.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;Gt!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(Gt).add(n.object.position):(Tr.origin.copy(n.object.position),Tr.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(Tr.direction))<Fy?t.lookAt(n.target):(Yc.setFromNormalAndCoplanarPoint(n.object.up,n.target),Tr.intersectPlane(Yc,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),vt=!0);return c=1,A=!1,vt||ft.distanceToSquared(n.object.position)>o||8*(1-_t.dot(n.object.quaternion))>o||Bt.distanceToSquared(n.target)>0?(n.dispatchEvent(qc),ft.copy(n.object.position),_t.copy(n.object.quaternion),Bt.copy(n.target),vt=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",it),n.domElement.removeEventListener("pointerdown",yt),n.domElement.removeEventListener("pointercancel",Dt),n.domElement.removeEventListener("wheel",R),n.domElement.removeEventListener("pointermove",St),n.domElement.removeEventListener("pointerup",Dt),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",w),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=i.NONE;const o=1e-6,a=new Tc,l=new Tc;let c=1;const h=new N,u=new ht,d=new ht,f=new ht,m=new ht,v=new ht,g=new ht,p=new ht,x=new ht,_=new ht,y=new N,S=new ht;let A=!1;const b=[],I={};function E(){return 2*Math.PI/60/60*n.autoRotateSpeed}function T(){return Math.pow(.95,n.zoomSpeed)}function k(D){l.theta-=D}function Z(D){l.phi-=D}const P=function(){const D=new N;return function(xt,ft){D.setFromMatrixColumn(ft,0),D.multiplyScalar(-xt),h.add(D)}}(),F=function(){const D=new N;return function(xt,ft){n.screenSpacePanning===!0?D.setFromMatrixColumn(ft,1):(D.setFromMatrixColumn(ft,0),D.crossVectors(n.object.up,D)),D.multiplyScalar(xt),h.add(D)}}(),U=function(){const D=new N;return function(xt,ft){const _t=n.domElement;if(n.object.isPerspectiveCamera){const Bt=n.object.position;D.copy(Bt).sub(n.target);let Yt=D.length();Yt*=Math.tan(n.object.fov/2*Math.PI/180),P(2*xt*Yt/_t.clientHeight,n.object.matrix),F(2*ft*Yt/_t.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(P(xt*(n.object.right-n.object.left)/n.object.zoom/_t.clientWidth,n.object.matrix),F(ft*(n.object.top-n.object.bottom)/n.object.zoom/_t.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function O(D){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=D:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function X(D){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=D:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function G(D){if(!n.zoomToCursor)return;A=!0;const et=n.domElement.getBoundingClientRect(),xt=D.clientX-et.left,ft=D.clientY-et.top,_t=et.width,Bt=et.height;S.x=xt/_t*2-1,S.y=-(ft/Bt)*2+1,y.set(S.x,S.y,1).unproject(t).sub(t.position).normalize()}function q(D){return Math.max(n.minDistance,Math.min(n.maxDistance,D))}function Q(D){u.set(D.clientX,D.clientY)}function z(D){G(D),p.set(D.clientX,D.clientY)}function V(D){m.set(D.clientX,D.clientY)}function ct(D){d.set(D.clientX,D.clientY),f.subVectors(d,u).multiplyScalar(n.rotateSpeed);const et=n.domElement;k(2*Math.PI*f.x/et.clientHeight),Z(2*Math.PI*f.y/et.clientHeight),u.copy(d),n.update()}function dt(D){x.set(D.clientX,D.clientY),_.subVectors(x,p),_.y>0?O(T()):_.y<0&&X(T()),p.copy(x),n.update()}function pt(D){v.set(D.clientX,D.clientY),g.subVectors(v,m).multiplyScalar(n.panSpeed),U(g.x,g.y),m.copy(v),n.update()}function bt(D){G(D),D.deltaY<0?X(T()):D.deltaY>0&&O(T()),n.update()}function Tt(D){let et=!1;switch(D.code){case n.keys.UP:D.ctrlKey||D.metaKey||D.shiftKey?Z(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):U(0,n.keyPanSpeed),et=!0;break;case n.keys.BOTTOM:D.ctrlKey||D.metaKey||D.shiftKey?Z(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):U(0,-n.keyPanSpeed),et=!0;break;case n.keys.LEFT:D.ctrlKey||D.metaKey||D.shiftKey?k(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):U(n.keyPanSpeed,0),et=!0;break;case n.keys.RIGHT:D.ctrlKey||D.metaKey||D.shiftKey?k(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):U(-n.keyPanSpeed,0),et=!0;break}et&&(D.preventDefault(),n.update())}function At(){if(b.length===1)u.set(b[0].pageX,b[0].pageY);else{const D=.5*(b[0].pageX+b[1].pageX),et=.5*(b[0].pageY+b[1].pageY);u.set(D,et)}}function Kt(){if(b.length===1)m.set(b[0].pageX,b[0].pageY);else{const D=.5*(b[0].pageX+b[1].pageX),et=.5*(b[0].pageY+b[1].pageY);m.set(D,et)}}function te(){const D=b[0].pageX-b[1].pageX,et=b[0].pageY-b[1].pageY,xt=Math.sqrt(D*D+et*et);p.set(0,xt)}function Lt(){n.enableZoom&&te(),n.enablePan&&Kt()}function L(){n.enableZoom&&te(),n.enableRotate&&At()}function ut(D){if(b.length==1)d.set(D.pageX,D.pageY);else{const xt=K(D),ft=.5*(D.pageX+xt.x),_t=.5*(D.pageY+xt.y);d.set(ft,_t)}f.subVectors(d,u).multiplyScalar(n.rotateSpeed);const et=n.domElement;k(2*Math.PI*f.x/et.clientHeight),Z(2*Math.PI*f.y/et.clientHeight),u.copy(d)}function tt(D){if(b.length===1)v.set(D.pageX,D.pageY);else{const et=K(D),xt=.5*(D.pageX+et.x),ft=.5*(D.pageY+et.y);v.set(xt,ft)}g.subVectors(v,m).multiplyScalar(n.panSpeed),U(g.x,g.y),m.copy(v)}function ot(D){const et=K(D),xt=D.pageX-et.x,ft=D.pageY-et.y,_t=Math.sqrt(xt*xt+ft*ft);x.set(0,_t),_.set(0,Math.pow(x.y/p.y,n.zoomSpeed)),O(_.y),p.copy(x)}function nt(D){n.enableZoom&&ot(D),n.enablePan&&tt(D)}function Rt(D){n.enableZoom&&ot(D),n.enableRotate&&ut(D)}function yt(D){n.enabled!==!1&&(b.length===0&&(n.domElement.setPointerCapture(D.pointerId),n.domElement.addEventListener("pointermove",St),n.domElement.addEventListener("pointerup",Dt)),at(D),D.pointerType==="touch"?j(D):Wt(D))}function St(D){n.enabled!==!1&&(D.pointerType==="touch"?rt(D):re(D))}function Dt(D){Ct(D),b.length===0&&(n.domElement.releasePointerCapture(D.pointerId),n.domElement.removeEventListener("pointermove",St),n.domElement.removeEventListener("pointerup",Dt)),n.dispatchEvent(jc),s=i.NONE}function Wt(D){let et;switch(D.button){case 0:et=n.mouseButtons.LEFT;break;case 1:et=n.mouseButtons.MIDDLE;break;case 2:et=n.mouseButtons.RIGHT;break;default:et=-1}switch(et){case bi.DOLLY:if(n.enableZoom===!1)return;z(D),s=i.DOLLY;break;case bi.ROTATE:if(D.ctrlKey||D.metaKey||D.shiftKey){if(n.enablePan===!1)return;V(D),s=i.PAN}else{if(n.enableRotate===!1)return;Q(D),s=i.ROTATE}break;case bi.PAN:if(D.ctrlKey||D.metaKey||D.shiftKey){if(n.enableRotate===!1)return;Q(D),s=i.ROTATE}else{if(n.enablePan===!1)return;V(D),s=i.PAN}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(Ho)}function re(D){switch(s){case i.ROTATE:if(n.enableRotate===!1)return;ct(D);break;case i.DOLLY:if(n.enableZoom===!1)return;dt(D);break;case i.PAN:if(n.enablePan===!1)return;pt(D);break}}function R(D){n.enabled===!1||n.enableZoom===!1||s!==i.NONE||(D.preventDefault(),n.dispatchEvent(Ho),bt(D),n.dispatchEvent(jc))}function w(D){n.enabled===!1||n.enablePan===!1||Tt(D)}function j(D){switch(lt(D),b.length){case 1:switch(n.touches.ONE){case Ti.ROTATE:if(n.enableRotate===!1)return;At(),s=i.TOUCH_ROTATE;break;case Ti.PAN:if(n.enablePan===!1)return;Kt(),s=i.TOUCH_PAN;break;default:s=i.NONE}break;case 2:switch(n.touches.TWO){case Ti.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Lt(),s=i.TOUCH_DOLLY_PAN;break;case Ti.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;L(),s=i.TOUCH_DOLLY_ROTATE;break;default:s=i.NONE}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(Ho)}function rt(D){switch(lt(D),s){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;ut(D),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;tt(D),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;nt(D),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Rt(D),n.update();break;default:s=i.NONE}}function it(D){n.enabled!==!1&&D.preventDefault()}function at(D){b.push(D)}function Ct(D){delete I[D.pointerId];for(let et=0;et<b.length;et++)if(b[et].pointerId==D.pointerId){b.splice(et,1);return}}function lt(D){let et=I[D.pointerId];et===void 0&&(et=new ht,I[D.pointerId]=et),et.set(D.pageX,D.pageY)}function K(D){const et=D.pointerId===b[0].pointerId?b[1]:b[0];return I[et.pointerId]}n.domElement.addEventListener("contextmenu",it),n.domElement.addEventListener("pointerdown",yt),n.domElement.addEventListener("pointercancel",Dt),n.domElement.addEventListener("wheel",R,{passive:!1}),this.update()}}/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.6.9
*/var Kc=function(r){return URL.createObjectURL(new Blob([r],{type:"text/javascript"}))};try{URL.revokeObjectURL(Kc(""))}catch{Kc=function(t){return"data:application/javascript;charset=UTF-8,"+encodeURI(t)}}var Ke=Uint8Array,Yn=Uint16Array,aa=Uint32Array,Qh=new Ke([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),tu=new Ke([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),By=new Ke([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),eu=function(r,t){for(var e=new Yn(31),n=0;n<31;++n)e[n]=t+=1<<r[n-1];for(var i=new aa(e[30]),n=1;n<30;++n)for(var s=e[n];s<e[n+1];++s)i[s]=s-e[n]<<5|n;return[e,i]},nu=eu(Qh,2),iu=nu[0],zy=nu[1];iu[28]=258,zy[258]=28;var ky=eu(tu,0),Vy=ky[0],la=new Yn(32768);for(var se=0;se<32768;++se){var Xn=(se&43690)>>>1|(se&21845)<<1;Xn=(Xn&52428)>>>2|(Xn&13107)<<2,Xn=(Xn&61680)>>>4|(Xn&3855)<<4,la[se]=((Xn&65280)>>>8|(Xn&255)<<8)>>>1}var Ds=function(r,t,e){for(var n=r.length,i=0,s=new Yn(t);i<n;++i)++s[r[i]-1];var o=new Yn(t);for(i=0;i<t;++i)o[i]=o[i-1]+s[i-1]<<1;var a;if(e){a=new Yn(1<<t);var l=15-t;for(i=0;i<n;++i)if(r[i])for(var c=i<<4|r[i],h=t-r[i],u=o[r[i]-1]++<<h,d=u|(1<<h)-1;u<=d;++u)a[la[u]>>>l]=c}else for(a=new Yn(n),i=0;i<n;++i)r[i]&&(a[i]=la[o[r[i]-1]++]>>>15-r[i]);return a},js=new Ke(288);for(var se=0;se<144;++se)js[se]=8;for(var se=144;se<256;++se)js[se]=9;for(var se=256;se<280;++se)js[se]=7;for(var se=280;se<288;++se)js[se]=8;var su=new Ke(32);for(var se=0;se<32;++se)su[se]=5;var Hy=Ds(js,9,1),Gy=Ds(su,5,1),Go=function(r){for(var t=r[0],e=1;e<r.length;++e)r[e]>t&&(t=r[e]);return t},sn=function(r,t,e){var n=t/8|0;return(r[n]|r[n+1]<<8)>>(t&7)&e},Wo=function(r,t){var e=t/8|0;return(r[e]|r[e+1]<<8|r[e+2]<<16)>>(t&7)},Wy=function(r){return(r/8|0)+(r&7&&1)},Xy=function(r,t,e){(t==null||t<0)&&(t=0),(e==null||e>r.length)&&(e=r.length);var n=new(r instanceof Yn?Yn:r instanceof aa?aa:Ke)(e-t);return n.set(r.subarray(t,e)),n},qy=function(r,t,e){var n=r.length;if(!n||e&&!e.l&&n<5)return t||new Ke(0);var i=!t||e,s=!e||e.i;e||(e={}),t||(t=new Ke(n*3));var o=function(bt){var Tt=t.length;if(bt>Tt){var At=new Ke(Math.max(Tt*2,bt));At.set(t),t=At}},a=e.f||0,l=e.p||0,c=e.b||0,h=e.l,u=e.d,d=e.m,f=e.n,m=n*8;do{if(!h){e.f=a=sn(r,l,1);var v=sn(r,l+1,3);if(l+=3,v)if(v==1)h=Hy,u=Gy,d=9,f=5;else if(v==2){var _=sn(r,l,31)+257,y=sn(r,l+10,15)+4,S=_+sn(r,l+5,31)+1;l+=14;for(var A=new Ke(S),b=new Ke(19),I=0;I<y;++I)b[By[I]]=sn(r,l+I*3,7);l+=y*3;for(var E=Go(b),T=(1<<E)-1,k=Ds(b,E,1),I=0;I<S;){var Z=k[sn(r,l,T)];l+=Z&15;var g=Z>>>4;if(g<16)A[I++]=g;else{var P=0,F=0;for(g==16?(F=3+sn(r,l,3),l+=2,P=A[I-1]):g==17?(F=3+sn(r,l,7),l+=3):g==18&&(F=11+sn(r,l,127),l+=7);F--;)A[I++]=P}}var U=A.subarray(0,_),O=A.subarray(_);d=Go(U),f=Go(O),h=Ds(U,d,1),u=Ds(O,f,1)}else throw"invalid block type";else{var g=Wy(l)+4,p=r[g-4]|r[g-3]<<8,x=g+p;if(x>n){if(s)throw"unexpected EOF";break}i&&o(c+p),t.set(r.subarray(g,x),c),e.b=c+=p,e.p=l=x*8;continue}if(l>m){if(s)throw"unexpected EOF";break}}i&&o(c+131072);for(var X=(1<<d)-1,G=(1<<f)-1,q=l;;q=l){var P=h[Wo(r,l)&X],Q=P>>>4;if(l+=P&15,l>m){if(s)throw"unexpected EOF";break}if(!P)throw"invalid length/literal";if(Q<256)t[c++]=Q;else if(Q==256){q=l,h=null;break}else{var z=Q-254;if(Q>264){var I=Q-257,V=Qh[I];z=sn(r,l,(1<<V)-1)+iu[I],l+=V}var ct=u[Wo(r,l)&G],dt=ct>>>4;if(!ct)throw"invalid distance";l+=ct&15;var O=Vy[dt];if(dt>3){var V=tu[dt];O+=Wo(r,l)&(1<<V)-1,l+=V}if(l>m){if(s)throw"unexpected EOF";break}i&&o(c+131072);for(var pt=c+z;c<pt;c+=4)t[c]=t[c-O],t[c+1]=t[c+1-O],t[c+2]=t[c+2-O],t[c+3]=t[c+3-O];c=pt}}e.l=h,e.p=q,e.b=c,h&&(a=1,e.m=d,e.d=u,e.n=f)}while(!a);return c==t.length?t:Xy(t,0,c)},jy=new Ke(0),Yy=function(r){if((r[0]&15)!=8||r[0]>>>4>7||(r[0]<<8|r[1])%31)throw"invalid zlib data";if(r[1]&32)throw"invalid zlib data: preset dictionaries not supported"};function Ky(r,t){return qy((Yy(r),r.subarray(2,-4)),t)}var Zy=typeof TextDecoder<"u"&&new TextDecoder,$y=0;try{Zy.decode(jy,{stream:!0}),$y=1}catch{}function ru(r,t,e){const n=e.length-r-1;if(t>=e[n])return n-1;if(t<=e[r])return r;let i=r,s=n,o=Math.floor((i+s)/2);for(;t<e[o]||t>=e[o+1];)t<e[o]?s=o:i=o,o=Math.floor((i+s)/2);return o}function Jy(r,t,e,n){const i=[],s=[],o=[];i[0]=1;for(let a=1;a<=e;++a){s[a]=t-n[r+1-a],o[a]=n[r+a]-t;let l=0;for(let c=0;c<a;++c){const h=o[c+1],u=s[a-c],d=i[c]/(h+u);i[c]=l+h*d,l=u*d}i[a]=l}return i}function Qy(r,t,e,n){const i=ru(r,n,t),s=Jy(i,n,r,t),o=new Jt(0,0,0,0);for(let a=0;a<=r;++a){const l=e[i-r+a],c=s[a],h=l.w*c;o.x+=l.x*h,o.y+=l.y*h,o.z+=l.z*h,o.w+=l.w*c}return o}function tM(r,t,e,n,i){const s=[];for(let u=0;u<=e;++u)s[u]=0;const o=[];for(let u=0;u<=n;++u)o[u]=s.slice(0);const a=[];for(let u=0;u<=e;++u)a[u]=s.slice(0);a[0][0]=1;const l=s.slice(0),c=s.slice(0);for(let u=1;u<=e;++u){l[u]=t-i[r+1-u],c[u]=i[r+u]-t;let d=0;for(let f=0;f<u;++f){const m=c[f+1],v=l[u-f];a[u][f]=m+v;const g=a[f][u-1]/a[u][f];a[f][u]=d+m*g,d=v*g}a[u][u]=d}for(let u=0;u<=e;++u)o[0][u]=a[u][e];for(let u=0;u<=e;++u){let d=0,f=1;const m=[];for(let v=0;v<=e;++v)m[v]=s.slice(0);m[0][0]=1;for(let v=1;v<=n;++v){let g=0;const p=u-v,x=e-v;u>=v&&(m[f][0]=m[d][0]/a[x+1][p],g=m[f][0]*a[p][x]);const _=p>=-1?1:-p,y=u-1<=x?v-1:e-u;for(let A=_;A<=y;++A)m[f][A]=(m[d][A]-m[d][A-1])/a[x+1][p+A],g+=m[f][A]*a[p+A][x];u<=x&&(m[f][v]=-m[d][v-1]/a[x+1][u],g+=m[f][v]*a[u][x]),o[v][u]=g;const S=d;d=f,f=S}}let h=e;for(let u=1;u<=n;++u){for(let d=0;d<=e;++d)o[u][d]*=h;h*=e-u}return o}function eM(r,t,e,n,i){const s=i<r?i:r,o=[],a=ru(r,n,t),l=tM(a,n,r,s,t),c=[];for(let h=0;h<e.length;++h){const u=e[h].clone(),d=u.w;u.x*=d,u.y*=d,u.z*=d,c[h]=u}for(let h=0;h<=s;++h){const u=c[a-r].clone().multiplyScalar(l[h][0]);for(let d=1;d<=r;++d)u.add(c[a-r+d].clone().multiplyScalar(l[h][d]));o[h]=u}for(let h=s+1;h<=i+1;++h)o[h]=new Jt(0,0,0);return o}function nM(r,t){let e=1;for(let i=2;i<=r;++i)e*=i;let n=1;for(let i=2;i<=t;++i)n*=i;for(let i=2;i<=r-t;++i)n*=i;return e/n}function iM(r){const t=r.length,e=[],n=[];for(let s=0;s<t;++s){const o=r[s];e[s]=new N(o.x,o.y,o.z),n[s]=o.w}const i=[];for(let s=0;s<t;++s){const o=e[s].clone();for(let a=1;a<=s;++a)o.sub(i[s-a].clone().multiplyScalar(nM(s,a)*n[a]));i[s]=o.divideScalar(n[0])}return i}function sM(r,t,e,n,i){const s=eM(r,t,e,n,i);return iM(s)}class rM extends ln{constructor(t,e,n,i,s){super(),this.degree=t,this.knots=e,this.controlPoints=[],this.startKnot=i||0,this.endKnot=s||this.knots.length-1;for(let o=0;o<n.length;++o){const a=n[o];this.controlPoints[o]=new Jt(a.x,a.y,a.z,a.w)}}getPoint(t,e=new N){const n=e,i=this.knots[this.startKnot]+t*(this.knots[this.endKnot]-this.knots[this.startKnot]),s=Qy(this.degree,this.knots,this.controlPoints,i);return s.w!==1&&s.divideScalar(s.w),n.set(s.x,s.y,s.z)}getTangent(t,e=new N){const n=e,i=this.knots[0]+t*(this.knots[this.knots.length-1]-this.knots[0]),s=sM(this.degree,this.knots,this.controlPoints,i,1);return n.copy(s[1]).normalize(),n}}let qt,ue,Fe;class oM extends ti{constructor(t){super(t)}load(t,e,n,i){const s=this,o=s.path===""?X_.extractUrlBase(t):s.path,a=new Gh(this.manager);a.setPath(s.path),a.setResponseType("arraybuffer"),a.setRequestHeader(s.requestHeader),a.setWithCredentials(s.withCredentials),a.load(t,function(l){try{e(s.parse(l,o))}catch(c){i?i(c):console.error(c),s.manager.itemError(t)}},n,i)}parse(t,e){if(dM(t))qt=new uM().parse(t);else{const i=cu(t);if(!fM(i))throw new Error("THREE.FBXLoader: Unknown format.");if($c(i)<7e3)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+$c(i));qt=new hM().parse(i)}const n=new z_(this.manager).setPath(this.resourcePath||e).setCrossOrigin(this.crossOrigin);return new aM(n,this.manager).parse(qt)}}class aM{constructor(t,e){this.textureLoader=t,this.manager=e}parse(){ue=this.parseConnections();const t=this.parseImages(),e=this.parseTextures(t),n=this.parseMaterials(e),i=this.parseDeformers(),s=new lM().parse(i);return this.parseScene(i,s,n),Fe}parseConnections(){const t=new Map;return"Connections"in qt&&qt.Connections.connections.forEach(function(n){const i=n[0],s=n[1],o=n[2];t.has(i)||t.set(i,{parents:[],children:[]});const a={ID:s,relationship:o};t.get(i).parents.push(a),t.has(s)||t.set(s,{parents:[],children:[]});const l={ID:i,relationship:o};t.get(s).children.push(l)}),t}parseImages(){const t={},e={};if("Video"in qt.Objects){const n=qt.Objects.Video;for(const i in n){const s=n[i],o=parseInt(i);if(t[o]=s.RelativeFilename||s.Filename,"Content"in s){const a=s.Content instanceof ArrayBuffer&&s.Content.byteLength>0,l=typeof s.Content=="string"&&s.Content!=="";if(a||l){const c=this.parseImage(n[i]);e[s.RelativeFilename||s.Filename]=c}}}}for(const n in t){const i=t[n];e[i]!==void 0?t[n]=e[i]:t[n]=t[n].split("\\").pop()}return t}parseImage(t){const e=t.Content,n=t.RelativeFilename||t.Filename,i=n.slice(n.lastIndexOf(".")+1).toLowerCase();let s;switch(i){case"bmp":s="image/bmp";break;case"jpg":case"jpeg":s="image/jpeg";break;case"png":s="image/png";break;case"tif":s="image/tiff";break;case"tga":this.manager.getHandler(".tga")===null&&console.warn("FBXLoader: TGA loader not found, skipping ",n),s="image/tga";break;default:console.warn('FBXLoader: Image type "'+i+'" is not supported.');return}if(typeof e=="string")return"data:"+s+";base64,"+e;{const o=new Uint8Array(e);return window.URL.createObjectURL(new Blob([o],{type:s}))}}parseTextures(t){const e=new Map;if("Texture"in qt.Objects){const n=qt.Objects.Texture;for(const i in n){const s=this.parseTexture(n[i],t);e.set(parseInt(i),s)}}return e}parseTexture(t,e){const n=this.loadTexture(t,e);n.ID=t.id,n.name=t.attrName;const i=t.WrapModeU,s=t.WrapModeV,o=i!==void 0?i.value:0,a=s!==void 0?s.value:0;if(n.wrapS=o===0?Ns:He,n.wrapT=a===0?Ns:He,"Scaling"in t){const l=t.Scaling.value;n.repeat.x=l[0],n.repeat.y=l[1]}if("Translation"in t){const l=t.Translation.value;n.offset.x=l[0],n.offset.y=l[1]}return n}loadTexture(t,e){let n;const i=this.textureLoader.path,s=ue.get(t.id).children;s!==void 0&&s.length>0&&e[s[0].ID]!==void 0&&(n=e[s[0].ID],(n.indexOf("blob:")===0||n.indexOf("data:")===0)&&this.textureLoader.setPath(void 0));let o;const a=t.FileName.slice(-3).toLowerCase();if(a==="tga"){const l=this.manager.getHandler(".tga");l===null?(console.warn("FBXLoader: TGA loader not found, creating placeholder texture for",t.RelativeFilename),o=new be):(l.setPath(this.textureLoader.path),o=l.load(n))}else a==="psd"?(console.warn("FBXLoader: PSD textures are not supported, creating placeholder texture for",t.RelativeFilename),o=new be):o=this.textureLoader.load(n);return this.textureLoader.setPath(i),o}parseMaterials(t){const e=new Map;if("Material"in qt.Objects){const n=qt.Objects.Material;for(const i in n){const s=this.parseMaterial(n[i],t);s!==null&&e.set(parseInt(i),s)}}return e}parseMaterial(t,e){const n=t.id,i=t.attrName;let s=t.ShadingModel;if(typeof s=="object"&&(s=s.value),!ue.has(n))return null;const o=this.parseParameters(t,e,n);let a;switch(s.toLowerCase()){case"phong":a=new Is;break;case"lambert":a=new C_;break;default:console.warn('THREE.FBXLoader: unknown material type "%s". Defaulting to MeshPhongMaterial.',s),a=new Is;break}return a.setValues(o),a.name=i,a}parseParameters(t,e,n){const i={};t.BumpFactor&&(i.bumpScale=t.BumpFactor.value),t.Diffuse?i.color=new Ut().fromArray(t.Diffuse.value).convertSRGBToLinear():t.DiffuseColor&&(t.DiffuseColor.type==="Color"||t.DiffuseColor.type==="ColorRGB")&&(i.color=new Ut().fromArray(t.DiffuseColor.value).convertSRGBToLinear()),t.DisplacementFactor&&(i.displacementScale=t.DisplacementFactor.value),t.Emissive?i.emissive=new Ut().fromArray(t.Emissive.value).convertSRGBToLinear():t.EmissiveColor&&(t.EmissiveColor.type==="Color"||t.EmissiveColor.type==="ColorRGB")&&(i.emissive=new Ut().fromArray(t.EmissiveColor.value).convertSRGBToLinear()),t.EmissiveFactor&&(i.emissiveIntensity=parseFloat(t.EmissiveFactor.value)),t.Opacity&&(i.opacity=parseFloat(t.Opacity.value)),i.opacity<1&&(i.transparent=!0),t.ReflectionFactor&&(i.reflectivity=t.ReflectionFactor.value),t.Shininess&&(i.shininess=t.Shininess.value),t.Specular?i.specular=new Ut().fromArray(t.Specular.value).convertSRGBToLinear():t.SpecularColor&&t.SpecularColor.type==="Color"&&(i.specular=new Ut().fromArray(t.SpecularColor.value).convertSRGBToLinear());const s=this;return ue.get(n).children.forEach(function(o){const a=o.relationship;switch(a){case"Bump":i.bumpMap=s.getTexture(e,o.ID);break;case"Maya|TEX_ao_map":i.aoMap=s.getTexture(e,o.ID);break;case"DiffuseColor":case"Maya|TEX_color_map":i.map=s.getTexture(e,o.ID),i.map!==void 0&&(i.map.colorSpace=zt);break;case"DisplacementColor":i.displacementMap=s.getTexture(e,o.ID);break;case"EmissiveColor":i.emissiveMap=s.getTexture(e,o.ID),i.emissiveMap!==void 0&&(i.emissiveMap.colorSpace=zt);break;case"NormalMap":case"Maya|TEX_normal_map":i.normalMap=s.getTexture(e,o.ID);break;case"ReflectionColor":i.envMap=s.getTexture(e,o.ID),i.envMap!==void 0&&(i.envMap.mapping=Pr,i.envMap.colorSpace=zt);break;case"SpecularColor":i.specularMap=s.getTexture(e,o.ID),i.specularMap!==void 0&&(i.specularMap.colorSpace=zt);break;case"TransparentColor":case"TransparencyFactor":i.alphaMap=s.getTexture(e,o.ID),i.transparent=!0;break;case"AmbientColor":case"ShininessExponent":case"SpecularFactor":case"VectorDisplacementColor":default:console.warn("THREE.FBXLoader: %s map is not supported in three.js, skipping texture.",a);break}}),i}getTexture(t,e){return"LayeredTexture"in qt.Objects&&e in qt.Objects.LayeredTexture&&(console.warn("THREE.FBXLoader: layered textures are not supported in three.js. Discarding all but first layer."),e=ue.get(e).children[0].ID),t.get(e)}parseDeformers(){const t={},e={};if("Deformer"in qt.Objects){const n=qt.Objects.Deformer;for(const i in n){const s=n[i],o=ue.get(parseInt(i));if(s.attrType==="Skin"){const a=this.parseSkeleton(o,n);a.ID=i,o.parents.length>1&&console.warn("THREE.FBXLoader: skeleton attached to more than one geometry is not supported."),a.geometryID=o.parents[0].ID,t[i]=a}else if(s.attrType==="BlendShape"){const a={id:i};a.rawTargets=this.parseMorphTargets(o,n),a.id=i,o.parents.length>1&&console.warn("THREE.FBXLoader: morph target attached to more than one geometry is not supported."),e[i]=a}}}return{skeletons:t,morphTargets:e}}parseSkeleton(t,e){const n=[];return t.children.forEach(function(i){const s=e[i.ID];if(s.attrType!=="Cluster")return;const o={ID:i.ID,indices:[],weights:[],transformLink:new Pt().fromArray(s.TransformLink.a)};"Indexes"in s&&(o.indices=s.Indexes.a,o.weights=s.Weights.a),n.push(o)}),{rawBones:n,bones:[]}}parseMorphTargets(t,e){const n=[];for(let i=0;i<t.children.length;i++){const s=t.children[i],o=e[s.ID],a={name:o.attrName,initialWeight:o.DeformPercent,id:o.id,fullWeights:o.FullWeights.a};if(o.attrType!=="BlendShapeChannel")return;a.geoID=ue.get(parseInt(s.ID)).children.filter(function(l){return l.relationship===void 0})[0].ID,n.push(a)}return n}parseScene(t,e,n){Fe=new Ji;const i=this.parseModels(t.skeletons,e,n),s=qt.Objects.Model,o=this;i.forEach(function(l){const c=s[l.ID];o.setLookAtProperties(l,c),ue.get(l.ID).parents.forEach(function(u){const d=i.get(u.ID);d!==void 0&&d.add(l)}),l.parent===null&&Fe.add(l)}),this.bindSkeleton(t.skeletons,e,i),this.createAmbientLight(),Fe.traverse(function(l){if(l.userData.transformData){l.parent&&(l.userData.transformData.parentMatrix=l.parent.matrix,l.userData.transformData.parentMatrixWorld=l.parent.matrixWorld);const c=au(l.userData.transformData);l.applyMatrix4(c),l.updateWorldMatrix()}});const a=new cM().parse();Fe.children.length===1&&Fe.children[0].isGroup&&(Fe.children[0].animations=a,Fe=Fe.children[0]),Fe.animations=a}parseModels(t,e,n){const i=new Map,s=qt.Objects.Model;for(const o in s){const a=parseInt(o),l=s[o],c=ue.get(a);let h=this.buildSkeleton(c,t,a,l.attrName);if(!h){switch(l.attrType){case"Camera":h=this.createCamera(c);break;case"Light":h=this.createLight(c);break;case"Mesh":h=this.createMesh(c,e,n);break;case"NurbsCurve":h=this.createCurve(c,e);break;case"LimbNode":case"Root":h=new ea;break;case"Null":default:h=new Ji;break}h.name=l.attrName?Zt.sanitizeNodeName(l.attrName):"",h.ID=a}this.getTransformData(h,l),i.set(a,h)}return i}buildSkeleton(t,e,n,i){let s=null;return t.parents.forEach(function(o){for(const a in e){const l=e[a];l.rawBones.forEach(function(c,h){if(c.ID===o.ID){const u=s;s=new ea,s.matrixWorld.copy(c.transformLink),s.name=i?Zt.sanitizeNodeName(i):"",s.ID=n,l.bones[h]=s,u!==null&&s.add(u)}})}}),s}createCamera(t){let e,n;if(t.children.forEach(function(i){const s=qt.Objects.NodeAttribute[i.ID];s!==void 0&&(n=s)}),n===void 0)e=new le;else{let i=0;n.CameraProjectionType!==void 0&&n.CameraProjectionType.value===1&&(i=1);let s=1;n.NearPlane!==void 0&&(s=n.NearPlane.value/1e3);let o=1e3;n.FarPlane!==void 0&&(o=n.FarPlane.value/1e3);let a=window.innerWidth,l=window.innerHeight;n.AspectWidth!==void 0&&n.AspectHeight!==void 0&&(a=n.AspectWidth.value,l=n.AspectHeight.value);const c=a/l;let h=45;n.FieldOfView!==void 0&&(h=n.FieldOfView.value);const u=n.FocalLength?n.FocalLength.value:null;switch(i){case 0:e=new De(h,c,s,o),u!==null&&e.setFocalLength(u);break;case 1:e=new Sa(-a/2,a/2,l/2,-l/2,s,o);break;default:console.warn("THREE.FBXLoader: Unknown camera type "+i+"."),e=new le;break}}return e}createLight(t){let e,n;if(t.children.forEach(function(i){const s=qt.Objects.NodeAttribute[i.ID];s!==void 0&&(n=s)}),n===void 0)e=new le;else{let i;n.LightType===void 0?i=0:i=n.LightType.value;let s=16777215;n.Color!==void 0&&(s=new Ut().fromArray(n.Color.value).convertSRGBToLinear());let o=n.Intensity===void 0?1:n.Intensity.value/100;n.CastLightOnObject!==void 0&&n.CastLightOnObject.value===0&&(o=0);let a=0;n.FarAttenuationEnd!==void 0&&(n.EnableFarAttenuation!==void 0&&n.EnableFarAttenuation.value===0?a=0:a=n.FarAttenuationEnd.value);const l=1;switch(i){case 0:e=new Ec(s,o,a,l);break;case 1:e=new Wh(s,o);break;case 2:let c=Math.PI/3;n.InnerAngle!==void 0&&(c=on.degToRad(n.InnerAngle.value));let h=0;n.OuterAngle!==void 0&&(h=on.degToRad(n.OuterAngle.value),h=Math.max(h,1)),e=new V_(s,o,a,c,h,l);break;default:console.warn("THREE.FBXLoader: Unknown light type "+n.LightType.value+", defaulting to a PointLight."),e=new Ec(s,o);break}n.CastShadows!==void 0&&n.CastShadows.value===1&&(e.castShadow=!0)}return e}createMesh(t,e,n){let i,s=null,o=null;const a=[];return t.children.forEach(function(l){e.has(l.ID)&&(s=e.get(l.ID)),n.has(l.ID)&&a.push(n.get(l.ID))}),a.length>1?o=a:a.length>0?o=a[0]:(o=new Is({name:ti.DEFAULT_MATERIAL_NAME,color:13421772}),a.push(o)),"color"in s.attributes&&a.forEach(function(l){l.vertexColors=!0}),s.FBX_Deformer?(i=new Xv(s,o),i.normalizeSkinWeights()):i=new Oe(s,o),i}createCurve(t,e){const n=t.children.reduce(function(s,o){return e.has(o.ID)&&(s=e.get(o.ID)),s},null),i=new Lh({name:ti.DEFAULT_MATERIAL_NAME,color:3342591,linewidth:1});return new Yv(n,i)}getTransformData(t,e){const n={};"InheritType"in e&&(n.inheritType=parseInt(e.InheritType.value)),"RotationOrder"in e?n.eulerOrder=lu(e.RotationOrder.value):n.eulerOrder="ZYX","Lcl_Translation"in e&&(n.translation=e.Lcl_Translation.value),"PreRotation"in e&&(n.preRotation=e.PreRotation.value),"Lcl_Rotation"in e&&(n.rotation=e.Lcl_Rotation.value),"PostRotation"in e&&(n.postRotation=e.PostRotation.value),"Lcl_Scaling"in e&&(n.scale=e.Lcl_Scaling.value),"ScalingOffset"in e&&(n.scalingOffset=e.ScalingOffset.value),"ScalingPivot"in e&&(n.scalingPivot=e.ScalingPivot.value),"RotationOffset"in e&&(n.rotationOffset=e.RotationOffset.value),"RotationPivot"in e&&(n.rotationPivot=e.RotationPivot.value),t.userData.transformData=n}setLookAtProperties(t,e){"LookAtProperty"in e&&ue.get(t.ID).children.forEach(function(i){if(i.relationship==="LookAtProperty"){const s=qt.Objects.Model[i.ID];if("Lcl_Translation"in s){const o=s.Lcl_Translation.value;t.target!==void 0?(t.target.position.fromArray(o),Fe.add(t.target)):t.lookAt(new N().fromArray(o))}}})}bindSkeleton(t,e,n){const i=this.parsePoseNodes();for(const s in t){const o=t[s];ue.get(parseInt(o.ID)).parents.forEach(function(l){if(e.has(l.ID)){const c=l.ID;ue.get(c).parents.forEach(function(u){n.has(u.ID)&&n.get(u.ID).bind(new wa(o.bones),i[u.ID])})}})}}parsePoseNodes(){const t={};if("Pose"in qt.Objects){const e=qt.Objects.Pose;for(const n in e)if(e[n].attrType==="BindPose"&&e[n].NbPoseNodes>0){const i=e[n].PoseNode;Array.isArray(i)?i.forEach(function(s){t[s.Node]=new Pt().fromArray(s.Matrix.a)}):t[i.Node]=new Pt().fromArray(i.Matrix.a)}}return t}createAmbientLight(){if("GlobalSettings"in qt&&"AmbientColor"in qt.GlobalSettings){const t=qt.GlobalSettings.AmbientColor.value,e=t[0],n=t[1],i=t[2];if(e!==0||n!==0||i!==0){const s=new Ut(e,n,i).convertSRGBToLinear();Fe.add(new W_(s,1))}}}}class lM{constructor(){this.negativeMaterialIndices=!1}parse(t){const e=new Map;if("Geometry"in qt.Objects){const n=qt.Objects.Geometry;for(const i in n){const s=ue.get(parseInt(i)),o=this.parseGeometry(s,n[i],t);e.set(parseInt(i),o)}}return this.negativeMaterialIndices===!0&&console.warn("THREE.FBXLoader: The FBX file contains invalid (negative) material indices. The asset might not render as expected."),e}parseGeometry(t,e,n){switch(e.attrType){case"Mesh":return this.parseMeshGeometry(t,e,n);case"NurbsCurve":return this.parseNurbsGeometry(e)}}parseMeshGeometry(t,e,n){const i=n.skeletons,s=[],o=t.parents.map(function(u){return qt.Objects.Model[u.ID]});if(o.length===0)return;const a=t.children.reduce(function(u,d){return i[d.ID]!==void 0&&(u=i[d.ID]),u},null);t.children.forEach(function(u){n.morphTargets[u.ID]!==void 0&&s.push(n.morphTargets[u.ID])});const l=o[0],c={};"RotationOrder"in l&&(c.eulerOrder=lu(l.RotationOrder.value)),"InheritType"in l&&(c.inheritType=parseInt(l.InheritType.value)),"GeometricTranslation"in l&&(c.translation=l.GeometricTranslation.value),"GeometricRotation"in l&&(c.rotation=l.GeometricRotation.value),"GeometricScaling"in l&&(c.scale=l.GeometricScaling.value);const h=au(c);return this.genGeometry(e,a,s,h)}genGeometry(t,e,n,i){const s=new Ge;t.attrName&&(s.name=t.attrName);const o=this.parseGeoNode(t,e),a=this.genBuffers(o),l=new _e(a.vertex,3);if(l.applyMatrix4(i),s.setAttribute("position",l),a.colors.length>0&&s.setAttribute("color",new _e(a.colors,3)),e&&(s.setAttribute("skinIndex",new xa(a.weightsIndices,4)),s.setAttribute("skinWeight",new _e(a.vertexWeights,4)),s.FBX_Deformer=e),a.normal.length>0){const c=new Ht().getNormalMatrix(i),h=new _e(a.normal,3);h.applyNormalMatrix(c),s.setAttribute("normal",h)}if(a.uvs.forEach(function(c,h){const u=h===0?"uv":`uv${h}`;s.setAttribute(u,new _e(a.uvs[h],2))}),o.material&&o.material.mappingType!=="AllSame"){let c=a.materialIndex[0],h=0;if(a.materialIndex.forEach(function(u,d){u!==c&&(s.addGroup(h,d-h,c),c=u,h=d)}),s.groups.length>0){const u=s.groups[s.groups.length-1],d=u.start+u.count;d!==a.materialIndex.length&&s.addGroup(d,a.materialIndex.length-d,c)}s.groups.length===0&&s.addGroup(0,a.materialIndex.length,a.materialIndex[0])}return this.addMorphTargets(s,t,n,i),s}parseGeoNode(t,e){const n={};if(n.vertexPositions=t.Vertices!==void 0?t.Vertices.a:[],n.vertexIndices=t.PolygonVertexIndex!==void 0?t.PolygonVertexIndex.a:[],t.LayerElementColor&&(n.color=this.parseVertexColors(t.LayerElementColor[0])),t.LayerElementMaterial&&(n.material=this.parseMaterialIndices(t.LayerElementMaterial[0])),t.LayerElementNormal&&(n.normal=this.parseNormals(t.LayerElementNormal[0])),t.LayerElementUV){n.uv=[];let i=0;for(;t.LayerElementUV[i];)t.LayerElementUV[i].UV&&n.uv.push(this.parseUVs(t.LayerElementUV[i])),i++}return n.weightTable={},e!==null&&(n.skeleton=e,e.rawBones.forEach(function(i,s){i.indices.forEach(function(o,a){n.weightTable[o]===void 0&&(n.weightTable[o]=[]),n.weightTable[o].push({id:s,weight:i.weights[a]})})})),n}genBuffers(t){const e={vertex:[],normal:[],colors:[],uvs:[],materialIndex:[],vertexWeights:[],weightsIndices:[]};let n=0,i=0,s=!1,o=[],a=[],l=[],c=[],h=[],u=[];const d=this;return t.vertexIndices.forEach(function(f,m){let v,g=!1;f<0&&(f=f^-1,g=!0);let p=[],x=[];if(o.push(f*3,f*3+1,f*3+2),t.color){const _=Ar(m,n,f,t.color);l.push(_[0],_[1],_[2])}if(t.skeleton){if(t.weightTable[f]!==void 0&&t.weightTable[f].forEach(function(_){x.push(_.weight),p.push(_.id)}),x.length>4){s||(console.warn("THREE.FBXLoader: Vertex has more than 4 skinning weights assigned to vertex. Deleting additional weights."),s=!0);const _=[0,0,0,0],y=[0,0,0,0];x.forEach(function(S,A){let b=S,I=p[A];y.forEach(function(E,T,k){if(b>E){k[T]=b,b=E;const Z=_[T];_[T]=I,I=Z}})}),p=_,x=y}for(;x.length<4;)x.push(0),p.push(0);for(let _=0;_<4;++_)h.push(x[_]),u.push(p[_])}if(t.normal){const _=Ar(m,n,f,t.normal);a.push(_[0],_[1],_[2])}t.material&&t.material.mappingType!=="AllSame"&&(v=Ar(m,n,f,t.material)[0],v<0&&(d.negativeMaterialIndices=!0,v=0)),t.uv&&t.uv.forEach(function(_,y){const S=Ar(m,n,f,_);c[y]===void 0&&(c[y]=[]),c[y].push(S[0]),c[y].push(S[1])}),i++,g&&(i>4&&console.warn("THREE.FBXLoader: Polygons with more than four sides are not supported. Make sure to triangulate the geometry during export."),d.genFace(e,t,o,v,a,l,c,h,u,i),n++,i=0,o=[],a=[],l=[],c=[],h=[],u=[])}),e}genFace(t,e,n,i,s,o,a,l,c,h){for(let u=2;u<h;u++)t.vertex.push(e.vertexPositions[n[0]]),t.vertex.push(e.vertexPositions[n[1]]),t.vertex.push(e.vertexPositions[n[2]]),t.vertex.push(e.vertexPositions[n[(u-1)*3]]),t.vertex.push(e.vertexPositions[n[(u-1)*3+1]]),t.vertex.push(e.vertexPositions[n[(u-1)*3+2]]),t.vertex.push(e.vertexPositions[n[u*3]]),t.vertex.push(e.vertexPositions[n[u*3+1]]),t.vertex.push(e.vertexPositions[n[u*3+2]]),e.skeleton&&(t.vertexWeights.push(l[0]),t.vertexWeights.push(l[1]),t.vertexWeights.push(l[2]),t.vertexWeights.push(l[3]),t.vertexWeights.push(l[(u-1)*4]),t.vertexWeights.push(l[(u-1)*4+1]),t.vertexWeights.push(l[(u-1)*4+2]),t.vertexWeights.push(l[(u-1)*4+3]),t.vertexWeights.push(l[u*4]),t.vertexWeights.push(l[u*4+1]),t.vertexWeights.push(l[u*4+2]),t.vertexWeights.push(l[u*4+3]),t.weightsIndices.push(c[0]),t.weightsIndices.push(c[1]),t.weightsIndices.push(c[2]),t.weightsIndices.push(c[3]),t.weightsIndices.push(c[(u-1)*4]),t.weightsIndices.push(c[(u-1)*4+1]),t.weightsIndices.push(c[(u-1)*4+2]),t.weightsIndices.push(c[(u-1)*4+3]),t.weightsIndices.push(c[u*4]),t.weightsIndices.push(c[u*4+1]),t.weightsIndices.push(c[u*4+2]),t.weightsIndices.push(c[u*4+3])),e.color&&(t.colors.push(o[0]),t.colors.push(o[1]),t.colors.push(o[2]),t.colors.push(o[(u-1)*3]),t.colors.push(o[(u-1)*3+1]),t.colors.push(o[(u-1)*3+2]),t.colors.push(o[u*3]),t.colors.push(o[u*3+1]),t.colors.push(o[u*3+2])),e.material&&e.material.mappingType!=="AllSame"&&(t.materialIndex.push(i),t.materialIndex.push(i),t.materialIndex.push(i)),e.normal&&(t.normal.push(s[0]),t.normal.push(s[1]),t.normal.push(s[2]),t.normal.push(s[(u-1)*3]),t.normal.push(s[(u-1)*3+1]),t.normal.push(s[(u-1)*3+2]),t.normal.push(s[u*3]),t.normal.push(s[u*3+1]),t.normal.push(s[u*3+2])),e.uv&&e.uv.forEach(function(d,f){t.uvs[f]===void 0&&(t.uvs[f]=[]),t.uvs[f].push(a[f][0]),t.uvs[f].push(a[f][1]),t.uvs[f].push(a[f][(u-1)*2]),t.uvs[f].push(a[f][(u-1)*2+1]),t.uvs[f].push(a[f][u*2]),t.uvs[f].push(a[f][u*2+1])})}addMorphTargets(t,e,n,i){if(n.length===0)return;t.morphTargetsRelative=!0,t.morphAttributes.position=[];const s=this;n.forEach(function(o){o.rawTargets.forEach(function(a){const l=qt.Objects.Geometry[a.geoID];l!==void 0&&s.genMorphGeometry(t,e,l,i,a.name)})})}genMorphGeometry(t,e,n,i,s){const o=e.PolygonVertexIndex!==void 0?e.PolygonVertexIndex.a:[],a=n.Vertices!==void 0?n.Vertices.a:[],l=n.Indexes!==void 0?n.Indexes.a:[],c=t.attributes.position.count*3,h=new Float32Array(c);for(let m=0;m<l.length;m++){const v=l[m]*3;h[v]=a[m*3],h[v+1]=a[m*3+1],h[v+2]=a[m*3+2]}const u={vertexIndices:o,vertexPositions:h},d=this.genBuffers(u),f=new _e(d.vertex,3);f.name=s||n.attrName,f.applyMatrix4(i),t.morphAttributes.position.push(f)}parseNormals(t){const e=t.MappingInformationType,n=t.ReferenceInformationType,i=t.Normals.a;let s=[];return n==="IndexToDirect"&&("NormalIndex"in t?s=t.NormalIndex.a:"NormalsIndex"in t&&(s=t.NormalsIndex.a)),{dataSize:3,buffer:i,indices:s,mappingType:e,referenceType:n}}parseUVs(t){const e=t.MappingInformationType,n=t.ReferenceInformationType,i=t.UV.a;let s=[];return n==="IndexToDirect"&&(s=t.UVIndex.a),{dataSize:2,buffer:i,indices:s,mappingType:e,referenceType:n}}parseVertexColors(t){const e=t.MappingInformationType,n=t.ReferenceInformationType,i=t.Colors.a;let s=[];n==="IndexToDirect"&&(s=t.ColorIndex.a);for(let o=0,a=new Ut;o<i.length;o+=4)a.fromArray(i,o).convertSRGBToLinear().toArray(i,o);return{dataSize:4,buffer:i,indices:s,mappingType:e,referenceType:n}}parseMaterialIndices(t){const e=t.MappingInformationType,n=t.ReferenceInformationType;if(e==="NoMappingInformation")return{dataSize:1,buffer:[0],indices:[0],mappingType:"AllSame",referenceType:n};const i=t.Materials.a,s=[];for(let o=0;o<i.length;++o)s.push(o);return{dataSize:1,buffer:i,indices:s,mappingType:e,referenceType:n}}parseNurbsGeometry(t){const e=parseInt(t.Order);if(isNaN(e))return console.error("THREE.FBXLoader: Invalid Order %s given for geometry ID: %s",t.Order,t.id),new Ge;const n=e-1,i=t.KnotVector.a,s=[],o=t.Points.a;for(let u=0,d=o.length;u<d;u+=4)s.push(new Jt().fromArray(o,u));let a,l;if(t.Form==="Closed")s.push(s[0]);else if(t.Form==="Periodic"){a=n,l=i.length-1-a;for(let u=0;u<n;++u)s.push(s[u])}const h=new rM(n,i,s,a,l).getPoints(s.length*12);return new Ge().setFromPoints(h)}}class cM{parse(){const t=[],e=this.parseClips();if(e!==void 0)for(const n in e){const i=e[n],s=this.addClip(i);t.push(s)}return t}parseClips(){if(qt.Objects.AnimationCurve===void 0)return;const t=this.parseAnimationCurveNodes();this.parseAnimationCurves(t);const e=this.parseAnimationLayers(t);return this.parseAnimStacks(e)}parseAnimationCurveNodes(){const t=qt.Objects.AnimationCurveNode,e=new Map;for(const n in t){const i=t[n];if(i.attrName.match(/S|R|T|DeformPercent/)!==null){const s={id:i.id,attr:i.attrName,curves:{}};e.set(s.id,s)}}return e}parseAnimationCurves(t){const e=qt.Objects.AnimationCurve;for(const n in e){const i={id:e[n].id,times:e[n].KeyTime.a.map(pM),values:e[n].KeyValueFloat.a},s=ue.get(i.id);if(s!==void 0){const o=s.parents[0].ID,a=s.parents[0].relationship;a.match(/X/)?t.get(o).curves.x=i:a.match(/Y/)?t.get(o).curves.y=i:a.match(/Z/)?t.get(o).curves.z=i:a.match(/DeformPercent/)&&t.has(o)&&(t.get(o).curves.morph=i)}}}parseAnimationLayers(t){const e=qt.Objects.AnimationLayer,n=new Map;for(const i in e){const s=[],o=ue.get(parseInt(i));o!==void 0&&(o.children.forEach(function(l,c){if(t.has(l.ID)){const h=t.get(l.ID);if(h.curves.x!==void 0||h.curves.y!==void 0||h.curves.z!==void 0){if(s[c]===void 0){const u=ue.get(l.ID).parents.filter(function(d){return d.relationship!==void 0})[0].ID;if(u!==void 0){const d=qt.Objects.Model[u.toString()];if(d===void 0){console.warn("THREE.FBXLoader: Encountered a unused curve.",l);return}const f={modelName:d.attrName?Zt.sanitizeNodeName(d.attrName):"",ID:d.id,initialPosition:[0,0,0],initialRotation:[0,0,0],initialScale:[1,1,1]};Fe.traverse(function(m){m.ID===d.id&&(f.transform=m.matrix,m.userData.transformData&&(f.eulerOrder=m.userData.transformData.eulerOrder))}),f.transform||(f.transform=new Pt),"PreRotation"in d&&(f.preRotation=d.PreRotation.value),"PostRotation"in d&&(f.postRotation=d.PostRotation.value),s[c]=f}}s[c]&&(s[c][h.attr]=h)}else if(h.curves.morph!==void 0){if(s[c]===void 0){const u=ue.get(l.ID).parents.filter(function(p){return p.relationship!==void 0})[0].ID,d=ue.get(u).parents[0].ID,f=ue.get(d).parents[0].ID,m=ue.get(f).parents[0].ID,v=qt.Objects.Model[m],g={modelName:v.attrName?Zt.sanitizeNodeName(v.attrName):"",morphName:qt.Objects.Deformer[u].attrName};s[c]=g}s[c][h.attr]=h}}}),n.set(parseInt(i),s))}return n}parseAnimStacks(t){const e=qt.Objects.AnimationStack,n={};for(const i in e){const s=ue.get(parseInt(i)).children;s.length>1&&console.warn("THREE.FBXLoader: Encountered an animation stack with multiple layers, this is currently not supported. Ignoring subsequent layers.");const o=t.get(s[0].ID);n[i]={name:e[i].attrName,layer:o}}return n}addClip(t){let e=[];const n=this;return t.layer.forEach(function(i){e=e.concat(n.generateTracks(i))}),new ra(t.name,-1,e)}generateTracks(t){const e=[];let n=new N,i=new Ne,s=new N;if(t.transform&&t.transform.decompose(n,i,s),n=n.toArray(),i=new $e().setFromQuaternion(i,t.eulerOrder).toArray(),s=s.toArray(),t.T!==void 0&&Object.keys(t.T.curves).length>0){const o=this.generateVectorTrack(t.modelName,t.T.curves,n,"position");o!==void 0&&e.push(o)}if(t.R!==void 0&&Object.keys(t.R.curves).length>0){const o=this.generateRotationTrack(t.modelName,t.R.curves,i,t.preRotation,t.postRotation,t.eulerOrder);o!==void 0&&e.push(o)}if(t.S!==void 0&&Object.keys(t.S.curves).length>0){const o=this.generateVectorTrack(t.modelName,t.S.curves,s,"scale");o!==void 0&&e.push(o)}if(t.DeformPercent!==void 0){const o=this.generateMorphTrack(t);o!==void 0&&e.push(o)}return e}generateVectorTrack(t,e,n,i){const s=this.getTimesForAllAxes(e),o=this.getKeyframeTrackValues(s,e,n);return new Hs(t+"."+i,s,o)}generateRotationTrack(t,e,n,i,s,o){e.x!==void 0&&(this.interpolateRotations(e.x),e.x.values=e.x.values.map(on.degToRad)),e.y!==void 0&&(this.interpolateRotations(e.y),e.y.values=e.y.values.map(on.degToRad)),e.z!==void 0&&(this.interpolateRotations(e.z),e.z.values=e.z.values.map(on.degToRad));const a=this.getTimesForAllAxes(e),l=this.getKeyframeTrackValues(a,e,n);i!==void 0&&(i=i.map(on.degToRad),i.push(o),i=new $e().fromArray(i),i=new Ne().setFromEuler(i)),s!==void 0&&(s=s.map(on.degToRad),s.push(o),s=new $e().fromArray(s),s=new Ne().setFromEuler(s).invert());const c=new Ne,h=new $e,u=[];for(let d=0;d<l.length;d+=3)h.set(l[d],l[d+1],l[d+2],o),c.setFromEuler(h),i!==void 0&&c.premultiply(i),s!==void 0&&c.multiply(s),c.toArray(u,d/3*4);return new fs(t+".quaternion",a,u)}generateMorphTrack(t){const e=t.DeformPercent.curves.morph,n=e.values.map(function(s){return s/100}),i=Fe.getObjectByName(t.modelName).morphTargetDictionary[t.morphName];return new Vs(t.modelName+".morphTargetInfluences["+i+"]",e.times,n)}getTimesForAllAxes(t){let e=[];if(t.x!==void 0&&(e=e.concat(t.x.times)),t.y!==void 0&&(e=e.concat(t.y.times)),t.z!==void 0&&(e=e.concat(t.z.times)),e=e.sort(function(n,i){return n-i}),e.length>1){let n=1,i=e[0];for(let s=1;s<e.length;s++){const o=e[s];o!==i&&(e[n]=o,i=o,n++)}e=e.slice(0,n)}return e}getKeyframeTrackValues(t,e,n){const i=n,s=[];let o=-1,a=-1,l=-1;return t.forEach(function(c){if(e.x&&(o=e.x.times.indexOf(c)),e.y&&(a=e.y.times.indexOf(c)),e.z&&(l=e.z.times.indexOf(c)),o!==-1){const h=e.x.values[o];s.push(h),i[0]=h}else s.push(i[0]);if(a!==-1){const h=e.y.values[a];s.push(h),i[1]=h}else s.push(i[1]);if(l!==-1){const h=e.z.values[l];s.push(h),i[2]=h}else s.push(i[2])}),s}interpolateRotations(t){for(let e=1;e<t.values.length;e++){const n=t.values[e-1],i=t.values[e]-n,s=Math.abs(i);if(s>=180){const o=s/180,a=i/o;let l=n+a;const c=t.times[e-1],u=(t.times[e]-c)/o;let d=c+u;const f=[],m=[];for(;d<t.times[e];)f.push(d),d+=u,m.push(l),l+=a;t.times=Jc(t.times,e,f),t.values=Jc(t.values,e,m)}}}}class hM{getPrevNode(){return this.nodeStack[this.currentIndent-2]}getCurrentNode(){return this.nodeStack[this.currentIndent-1]}getCurrentProp(){return this.currentProp}pushStack(t){this.nodeStack.push(t),this.currentIndent+=1}popStack(){this.nodeStack.pop(),this.currentIndent-=1}setCurrentProp(t,e){this.currentProp=t,this.currentPropName=e}parse(t){this.currentIndent=0,this.allNodes=new ou,this.nodeStack=[],this.currentProp=[],this.currentPropName="";const e=this,n=t.split(/[\r\n]+/);return n.forEach(function(i,s){const o=i.match(/^[\s\t]*;/),a=i.match(/^[\s\t]*$/);if(o||a)return;const l=i.match("^\\t{"+e.currentIndent+"}(\\w+):(.*){",""),c=i.match("^\\t{"+e.currentIndent+"}(\\w+):[\\s\\t\\r\\n](.*)"),h=i.match("^\\t{"+(e.currentIndent-1)+"}}");l?e.parseNodeBegin(i,l):c?e.parseNodeProperty(i,c,n[++s]):h?e.popStack():i.match(/^[^\s\t}]/)&&e.parseNodePropertyContinued(i)}),this.allNodes}parseNodeBegin(t,e){const n=e[1].trim().replace(/^"/,"").replace(/"$/,""),i=e[2].split(",").map(function(l){return l.trim().replace(/^"/,"").replace(/"$/,"")}),s={name:n},o=this.parseNodeAttr(i),a=this.getCurrentNode();this.currentIndent===0?this.allNodes.add(n,s):n in a?(n==="PoseNode"?a.PoseNode.push(s):a[n].id!==void 0&&(a[n]={},a[n][a[n].id]=a[n]),o.id!==""&&(a[n][o.id]=s)):typeof o.id=="number"?(a[n]={},a[n][o.id]=s):n!=="Properties70"&&(n==="PoseNode"?a[n]=[s]:a[n]=s),typeof o.id=="number"&&(s.id=o.id),o.name!==""&&(s.attrName=o.name),o.type!==""&&(s.attrType=o.type),this.pushStack(s)}parseNodeAttr(t){let e=t[0];t[0]!==""&&(e=parseInt(t[0]),isNaN(e)&&(e=t[0]));let n="",i="";return t.length>1&&(n=t[1].replace(/^(\w+)::/,""),i=t[2]),{id:e,name:n,type:i}}parseNodeProperty(t,e,n){let i=e[1].replace(/^"/,"").replace(/"$/,"").trim(),s=e[2].replace(/^"/,"").replace(/"$/,"").trim();i==="Content"&&s===","&&(s=n.replace(/"/g,"").replace(/,$/,"").trim());const o=this.getCurrentNode();if(o.name==="Properties70"){this.parseNodeSpecialProperty(t,i,s);return}if(i==="C"){const l=s.split(",").slice(1),c=parseInt(l[0]),h=parseInt(l[1]);let u=s.split(",").slice(3);u=u.map(function(d){return d.trim().replace(/^"/,"")}),i="connections",s=[c,h],gM(s,u),o[i]===void 0&&(o[i]=[])}i==="Node"&&(o.id=s),i in o&&Array.isArray(o[i])?o[i].push(s):i!=="a"?o[i]=s:o.a=s,this.setCurrentProp(o,i),i==="a"&&s.slice(-1)!==","&&(o.a=qo(s))}parseNodePropertyContinued(t){const e=this.getCurrentNode();e.a+=t,t.slice(-1)!==","&&(e.a=qo(e.a))}parseNodeSpecialProperty(t,e,n){const i=n.split('",').map(function(h){return h.trim().replace(/^\"/,"").replace(/\s/,"_")}),s=i[0],o=i[1],a=i[2],l=i[3];let c=i[4];switch(o){case"int":case"enum":case"bool":case"ULongLong":case"double":case"Number":case"FieldOfView":c=parseFloat(c);break;case"Color":case"ColorRGB":case"Vector3D":case"Lcl_Translation":case"Lcl_Rotation":case"Lcl_Scaling":c=qo(c);break}this.getPrevNode()[s]={type:o,type2:a,flag:l,value:c},this.setCurrentProp(this.getPrevNode(),s)}}class uM{parse(t){const e=new Zc(t);e.skip(23);const n=e.getUint32();if(n<6400)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+n);const i=new ou;for(;!this.endOfContent(e);){const s=this.parseNode(e,n);s!==null&&i.add(s.name,s)}return i}endOfContent(t){return t.size()%16===0?(t.getOffset()+160+16&-16)>=t.size():t.getOffset()+160+16>=t.size()}parseNode(t,e){const n={},i=e>=7500?t.getUint64():t.getUint32(),s=e>=7500?t.getUint64():t.getUint32();e>=7500?t.getUint64():t.getUint32();const o=t.getUint8(),a=t.getString(o);if(i===0)return null;const l=[];for(let d=0;d<s;d++)l.push(this.parseProperty(t));const c=l.length>0?l[0]:"",h=l.length>1?l[1]:"",u=l.length>2?l[2]:"";for(n.singleProperty=s===1&&t.getOffset()===i;i>t.getOffset();){const d=this.parseNode(t,e);d!==null&&this.parseSubNode(a,n,d)}return n.propertyList=l,typeof c=="number"&&(n.id=c),h!==""&&(n.attrName=h),u!==""&&(n.attrType=u),a!==""&&(n.name=a),n}parseSubNode(t,e,n){if(n.singleProperty===!0){const i=n.propertyList[0];Array.isArray(i)?(e[n.name]=n,n.a=i):e[n.name]=i}else if(t==="Connections"&&n.name==="C"){const i=[];n.propertyList.forEach(function(s,o){o!==0&&i.push(s)}),e.connections===void 0&&(e.connections=[]),e.connections.push(i)}else if(n.name==="Properties70")Object.keys(n).forEach(function(s){e[s]=n[s]});else if(t==="Properties70"&&n.name==="P"){let i=n.propertyList[0],s=n.propertyList[1];const o=n.propertyList[2],a=n.propertyList[3];let l;i.indexOf("Lcl ")===0&&(i=i.replace("Lcl ","Lcl_")),s.indexOf("Lcl ")===0&&(s=s.replace("Lcl ","Lcl_")),s==="Color"||s==="ColorRGB"||s==="Vector"||s==="Vector3D"||s.indexOf("Lcl_")===0?l=[n.propertyList[4],n.propertyList[5],n.propertyList[6]]:l=n.propertyList[4],e[i]={type:s,type2:o,flag:a,value:l}}else e[n.name]===void 0?typeof n.id=="number"?(e[n.name]={},e[n.name][n.id]=n):e[n.name]=n:n.name==="PoseNode"?(Array.isArray(e[n.name])||(e[n.name]=[e[n.name]]),e[n.name].push(n)):e[n.name][n.id]===void 0&&(e[n.name][n.id]=n)}parseProperty(t){const e=t.getString(1);let n;switch(e){case"C":return t.getBoolean();case"D":return t.getFloat64();case"F":return t.getFloat32();case"I":return t.getInt32();case"L":return t.getInt64();case"R":return n=t.getUint32(),t.getArrayBuffer(n);case"S":return n=t.getUint32(),t.getString(n);case"Y":return t.getInt16();case"b":case"c":case"d":case"f":case"i":case"l":const i=t.getUint32(),s=t.getUint32(),o=t.getUint32();if(s===0)switch(e){case"b":case"c":return t.getBooleanArray(i);case"d":return t.getFloat64Array(i);case"f":return t.getFloat32Array(i);case"i":return t.getInt32Array(i);case"l":return t.getInt64Array(i)}const a=Ky(new Uint8Array(t.getArrayBuffer(o))),l=new Zc(a.buffer);switch(e){case"b":case"c":return l.getBooleanArray(i);case"d":return l.getFloat64Array(i);case"f":return l.getFloat32Array(i);case"i":return l.getInt32Array(i);case"l":return l.getInt64Array(i)}break;default:throw new Error("THREE.FBXLoader: Unknown property type "+e)}}}class Zc{constructor(t,e){this.dv=new DataView(t),this.offset=0,this.littleEndian=e!==void 0?e:!0,this._textDecoder=new TextDecoder}getOffset(){return this.offset}size(){return this.dv.buffer.byteLength}skip(t){this.offset+=t}getBoolean(){return(this.getUint8()&1)===1}getBooleanArray(t){const e=[];for(let n=0;n<t;n++)e.push(this.getBoolean());return e}getUint8(){const t=this.dv.getUint8(this.offset);return this.offset+=1,t}getInt16(){const t=this.dv.getInt16(this.offset,this.littleEndian);return this.offset+=2,t}getInt32(){const t=this.dv.getInt32(this.offset,this.littleEndian);return this.offset+=4,t}getInt32Array(t){const e=[];for(let n=0;n<t;n++)e.push(this.getInt32());return e}getUint32(){const t=this.dv.getUint32(this.offset,this.littleEndian);return this.offset+=4,t}getInt64(){let t,e;return this.littleEndian?(t=this.getUint32(),e=this.getUint32()):(e=this.getUint32(),t=this.getUint32()),e&2147483648?(e=~e&4294967295,t=~t&4294967295,t===4294967295&&(e=e+1&4294967295),t=t+1&4294967295,-(e*4294967296+t)):e*4294967296+t}getInt64Array(t){const e=[];for(let n=0;n<t;n++)e.push(this.getInt64());return e}getUint64(){let t,e;return this.littleEndian?(t=this.getUint32(),e=this.getUint32()):(e=this.getUint32(),t=this.getUint32()),e*4294967296+t}getFloat32(){const t=this.dv.getFloat32(this.offset,this.littleEndian);return this.offset+=4,t}getFloat32Array(t){const e=[];for(let n=0;n<t;n++)e.push(this.getFloat32());return e}getFloat64(){const t=this.dv.getFloat64(this.offset,this.littleEndian);return this.offset+=8,t}getFloat64Array(t){const e=[];for(let n=0;n<t;n++)e.push(this.getFloat64());return e}getArrayBuffer(t){const e=this.dv.buffer.slice(this.offset,this.offset+t);return this.offset+=t,e}getString(t){const e=this.offset;let n=new Uint8Array(this.dv.buffer,e,t);this.skip(t);const i=n.indexOf(0);return i>=0&&(n=new Uint8Array(this.dv.buffer,e,i)),this._textDecoder.decode(n)}}class ou{add(t,e){this[t]=e}}function dM(r){const t="Kaydara FBX Binary  \0";return r.byteLength>=t.length&&t===cu(r,0,t.length)}function fM(r){const t=["K","a","y","d","a","r","a","\\","F","B","X","\\","B","i","n","a","r","y","\\","\\"];let e=0;function n(i){const s=r[i-1];return r=r.slice(e+i),e++,s}for(let i=0;i<t.length;++i)if(n(1)===t[i])return!1;return!0}function $c(r){const t=/FBXVersion: (\d+)/,e=r.match(t);if(e)return parseInt(e[1]);throw new Error("THREE.FBXLoader: Cannot find the version number for the file given.")}function pM(r){return r/46186158e3}const mM=[];function Ar(r,t,e,n){let i;switch(n.mappingType){case"ByPolygonVertex":i=r;break;case"ByPolygon":i=t;break;case"ByVertice":i=e;break;case"AllSame":i=n.indices[0];break;default:console.warn("THREE.FBXLoader: unknown attribute mapping type "+n.mappingType)}n.referenceType==="IndexToDirect"&&(i=n.indices[i]);const s=i*n.dataSize,o=s+n.dataSize;return vM(mM,n.buffer,s,o)}const Xo=new $e,qi=new N;function au(r){const t=new Pt,e=new Pt,n=new Pt,i=new Pt,s=new Pt,o=new Pt,a=new Pt,l=new Pt,c=new Pt,h=new Pt,u=new Pt,d=new Pt,f=r.inheritType?r.inheritType:0;if(r.translation&&t.setPosition(qi.fromArray(r.translation)),r.preRotation){const T=r.preRotation.map(on.degToRad);T.push(r.eulerOrder||$e.DEFAULT_ORDER),e.makeRotationFromEuler(Xo.fromArray(T))}if(r.rotation){const T=r.rotation.map(on.degToRad);T.push(r.eulerOrder||$e.DEFAULT_ORDER),n.makeRotationFromEuler(Xo.fromArray(T))}if(r.postRotation){const T=r.postRotation.map(on.degToRad);T.push(r.eulerOrder||$e.DEFAULT_ORDER),i.makeRotationFromEuler(Xo.fromArray(T)),i.invert()}r.scale&&s.scale(qi.fromArray(r.scale)),r.scalingOffset&&a.setPosition(qi.fromArray(r.scalingOffset)),r.scalingPivot&&o.setPosition(qi.fromArray(r.scalingPivot)),r.rotationOffset&&l.setPosition(qi.fromArray(r.rotationOffset)),r.rotationPivot&&c.setPosition(qi.fromArray(r.rotationPivot)),r.parentMatrixWorld&&(u.copy(r.parentMatrix),h.copy(r.parentMatrixWorld));const m=e.clone().multiply(n).multiply(i),v=new Pt;v.extractRotation(h);const g=new Pt;g.copyPosition(h);const p=g.clone().invert().multiply(h),x=v.clone().invert().multiply(p),_=s,y=new Pt;if(f===0)y.copy(v).multiply(m).multiply(x).multiply(_);else if(f===1)y.copy(v).multiply(x).multiply(m).multiply(_);else{const k=new Pt().scale(new N().setFromMatrixScale(u)).clone().invert(),Z=x.clone().multiply(k);y.copy(v).multiply(m).multiply(Z).multiply(_)}const S=c.clone().invert(),A=o.clone().invert();let b=t.clone().multiply(l).multiply(c).multiply(e).multiply(n).multiply(i).multiply(S).multiply(a).multiply(o).multiply(s).multiply(A);const I=new Pt().copyPosition(b),E=h.clone().multiply(I);return d.copyPosition(E),b=d.clone().multiply(y),b.premultiply(h.invert()),b}function lu(r){r=r||0;const t=["ZYX","YZX","XZY","ZXY","YXZ","XYZ"];return r===6?(console.warn("THREE.FBXLoader: unsupported Euler Order: Spherical XYZ. Animations and rotations may be incorrect."),t[0]):t[r]}function qo(r){return r.split(",").map(function(e){return parseFloat(e)})}function cu(r,t,e){return t===void 0&&(t=0),e===void 0&&(e=r.byteLength),new TextDecoder().decode(new Uint8Array(r,t,e))}function gM(r,t){for(let e=0,n=r.length,i=t.length;e<i;e++,n++)r[n]=t[e]}function vM(r,t,e,n){for(let i=e,s=0;i<n;i++,s++)r[s]=t[i];return r}function Jc(r,t,e){return r.slice(0,t).concat(e).concat(r.slice(t))}class _M extends Ca{constructor(t,e={}){const n=e.font;if(n===void 0)super();else{const i=n.generateShapes(t,e.size);e.depth=e.height!==void 0?e.height:50,e.bevelThickness===void 0&&(e.bevelThickness=10),e.bevelSize===void 0&&(e.bevelSize=8),e.bevelEnabled===void 0&&(e.bevelEnabled=!1),super(i,e)}this.type="TextGeometry"}}class xM extends ti{constructor(t){super(t)}load(t,e,n,i){const s=this,o=new Gh(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(t,function(a){const l=s.parse(JSON.parse(a));e&&e(l)},n,i)}parse(t){return new yM(t)}}class yM{constructor(t){this.isFont=!0,this.type="Font",this.data=t}generateShapes(t,e=100){const n=[],i=MM(t,e,this.data);for(let s=0,o=i.length;s<o;s++)n.push(...i[s].toShapes());return n}}function MM(r,t,e){const n=Array.from(r),i=t/e.resolution,s=(e.boundingBox.yMax-e.boundingBox.yMin+e.underlineThickness)*i,o=[];let a=0,l=0;for(let c=0;c<n.length;c++){const h=n[c];if(h===`
`)a=0,l-=s;else{const u=SM(h,i,a,l,e);a+=u.offsetX,o.push(u.path)}}return o}function SM(r,t,e,n,i){const s=i.glyphs[r]||i.glyphs["?"];if(!s){console.error('THREE.Font: character "'+r+'" does not exists in font family '+i.familyName+".");return}const o=new a0;let a,l,c,h,u,d,f,m;if(s.o){const v=s._cachedOutline||(s._cachedOutline=s.o.split(" "));for(let g=0,p=v.length;g<p;)switch(v[g++]){case"m":a=v[g++]*t+e,l=v[g++]*t+n,o.moveTo(a,l);break;case"l":a=v[g++]*t+e,l=v[g++]*t+n,o.lineTo(a,l);break;case"q":c=v[g++]*t+e,h=v[g++]*t+n,u=v[g++]*t+e,d=v[g++]*t+n,o.quadraticCurveTo(u,d,c,h);break;case"b":c=v[g++]*t+e,h=v[g++]*t+n,u=v[g++]*t+e,d=v[g++]*t+n,f=v[g++]*t+e,m=v[g++]*t+n,o.bezierCurveTo(u,d,f,m,c,h);break}}return{offsetX:s.ha*t,path:o}}function hu(){for(var r="#",t=0;t<6;t++)r+=Math.floor(Math.random()*10);return r}const uu=()=>{const r=new Oe(new hs(3,4,.1),new A_({color:hu()}));r.receiveShadow=!0;const t=new oi,e=new Mt({shape:new jr(new M(1.5,2,.001)),material:t});return{plankMesh:r,plankCannonBody:e,plankCannonMat:t}},EM=()=>{const r=new Oe(new Wr(1.5),new Is({color:hu()}));r.receiveShadow=!0;const t=new oi,e=new Mt({shape:new Ua(1.5),material:t});return{ballMesh:r,ballCannonBody:e,ballCannonMat:t}},wM=()=>{const r=new Oe(new Wr(.18,50,50),new Is({color:Math.random()*16777215,shininess:60}));r.castShadow=!0;const t=new oi;return{sphereCannonBody:new Mt({shape:new Ua(.15),mass:1,material:t}),sphereMesh:r,sphereCannonMat:t}},du=({loader:r,filename:t})=>new Promise((e,n)=>{r.load(t,i=>{e(i)})},void 0,e=>rej(e)),In={walk:"walk",zombieDie:"zombie_die",die:"die",rightTurn:"right_turn",jab:"jab",twerk:"twerk",wave:"wave",dance:"dance"},bM=async({loader:r,mixer:t})=>{let e={};const n=[{name:In.walk,file:"strut_walk.fbx"},{name:In.zombieDie,file:"zombie_die.fbx"},{name:In.jab,file:"jab.fbx"},{name:In.rightTurn,file:"right_turn.fbx"},{name:In.die,file:"die.fbx"},{name:In.twerk,file:"twerk.fbx"},{name:In.wave,file:"wave.fbx"},{name:In.dance,file:"dance.fbx"}];for(let i=0;i<n.length;i++){const{file:s,name:o}=n[i],l=(await du({loader:r,filename:s})).animations[0];l.name=o;const c=t.clipAction(l);e[o]=c}return e},TM=async()=>{let r,t;const e=new oM;e.setPath("/assets/characters/timmy/"),r=await du({loader:e,filename:"timmy.fbx"}),t=new r0(r);const n=await bM({loader:e,mixer:t});return{timmy:r,animations:n,mixer:t,TIMMY_ANIMATIONS:In}},AM=({color:r,text:t})=>new Promise((e,n)=>{const i=new xM;let s;i.load("/assets/fonts/supermario.json",o=>{const a=new _M(t,{font:o,size:.4,height:.01}),l=new _a({color:r});s=new Oe(a,l),e({textMesh:s})})}),vn=new Gv,CM=new Ut("#e7af4c"),RM=new Ut("#2a848d");vn.background=CM;const ei=new De(80,window.innerWidth/window.innerHeight,.1,100),wi=new Ph({antialias:!0});wi.setSize(window.innerWidth,window.innerHeight);wi.shadowMap.enabled=!0;document.body.appendChild(wi.domElement);const PM=new Oy(ei,wi.domElement);ei.position.set(0,2,10);PM.update();const Fa=new Wh("#ffffff",5);Fa.position.set(0,5,3);Fa.castShadow=!0;vn.add(Fa);const pn=new Ry({gravity:new M(0,-9.81,0)}),bs=new ht,jo=new N,Qc=new N,th=new Dn,eh=new o0,fu=[],ca=[],{plankMesh:ha,plankCannonBody:Gs,plankCannonMat:LM}=uu();vn.add(ha);Gs.position.copy(new M(-5,4,-2));Gs.quaternion.setFromEuler(-Math.PI/2.1,.5,0);pn.addBody(Gs);const{plankMesh:ua,plankCannonBody:Ws,plankCannonMat:IM}=uu();vn.add(ua);Ws.position.copy(new M(5,4,-2));Ws.quaternion.setFromEuler(-Math.PI/2,-.5,0);pn.addBody(Ws);const{ballMesh:pu,ballCannonBody:Oa,ballCannonMat:DM}=EM();vn.add(pu);Oa.position.copy(new M(1,1,-1));pn.addBody(Oa);AM({color:RM,text:"Don't click here, It might hurt TIMMY"}).then(({textMesh:r})=>{const t=new si().setFromObject(r),e=new N;t.getSize(e),r.position.set(-e.x/2,6,0),vn.add(r)});let Ze;const{timmy:Ce,animations:Se,mixer:mu,TIMMY_ANIMATIONS:oe}=await TM(),da=[oe.die,oe.zombieDie,oe.jab,oe.wave,oe.dance];Ce.scale.set(.02,.02,.02);Ce.position.set(9,-7,1);Ce.rotation.y=-1.5;vn.add(Ce);Se[oe.walk].play();Ze=Se[oe.walk];const NM=new si().setFromObject(Ce),Jn=new N;NM.getSize(Jn);Jn.x/=Ce.scale.x;Jn.y/=Ce.scale.y;Jn.z/=Ce.scale.z;const gu=new oi,UM=new ux(Jn.x/2,Jn.x/2,Jn.y,16),FM=new Ua(Jn.x/1.5),ni=new Mt({}),OM=new M(0,0,0);ni.addShape(UM,OM);const BM=new M(0,1,0);ni.addShape(FM,BM);ni.material=gu;ni.position.copy(Ce.position);pn.addBody(ni);ni.addEventListener("collide",function(r){Ze===Se[oe.walk]&&(Ze.fadeOut(),Ze=Se[da[Math.floor(Math.random()*10%da.length)]],Ze.reset().fadeIn().play(),Ze.loop=kr)});mu.addEventListener("finished",function(r){const t=r.action._clip;t.name===oe.rightTurn&&(Se[oe.rightTurn].fadeOut(),Ce.rotation.y+=Math.PI,Se[oe.walk].reset().fadeIn().play(),Ze=Se[oe.walk]),da.includes(t.name)&&(Ze.fadeOut(),Ce.rotation.y+=Math.PI*3.5/2,Se[oe.twerk].reset().fadeIn().play(),Se[oe.twerk].loop=kr,Ze=Se[oe.twerk]),t.name===oe.twerk&&(Ce.rotation.y-=Math.PI*3.5/2,Se[oe.twerk].fadeOut(),Se[oe.walk].reset().fadeIn().play(),Ze=Se[oe.walk])});let nh=-1,Yo=0;const zM=9*2;let kM=1.5;const VM=r=>{const t=new N;Ce.getWorldPosition(t),t.clone().project(ei);const n=kM*r;Ze===Se[oe.walk]&&(Ce.position.x+=n*nh,Yo+=n),Yo>zM&&(Ze=Se[oe.rightTurn],Se[oe.walk].fadeOut(),Se[oe.rightTurn].reset().fadeIn().play(),Se[oe.rightTurn].loop=kr,nh*=-1,Yo=0)},HM=new q_,GM=()=>{const r=HM.getDelta();mu.update(r),VM(r),pn.step(1/60),fu.forEach((t,e)=>{t.position.copy(ca.at(e).position),t.quaternion.copy(ca.at(e).quaternion)}),ha.position.copy(Gs.position),ha.quaternion.copy(Gs.quaternion),ua.position.copy(Ws.position),ua.quaternion.copy(Ws.quaternion),ni.position.copy(Ce.position),ni.quaternion.copy(Ce.quaternion),pu.position.copy(Oa.position),wi.render(vn,ei)};window.addEventListener("click",function(r){if(bs.x=r.clientX/window.innerWidth*2-1,bs.y=r.clientY/window.innerHeight*-2+1,bs.y<.5||Math.abs(bs.x)>.5)return;Qc.copy(ei.position).normalize(),th.setFromNormalAndCoplanarPoint(Qc,vn.position),eh.setFromCamera(bs,ei),eh.ray.intersectPlane(th,jo);const{sphereMesh:t,sphereCannonBody:e,sphereCannonMat:n}=wM();vn.add(t),t.position.copy(jo),e.position.copy(jo),pn.addBody(e);const i=new jn(LM,n,{restitution:.8});pn.addContactMaterial(i);const s=new jn(IM,n,{restitution:.8});pn.addContactMaterial(s);const o=new jn(DM,n,{restitution:.8});pn.addContactMaterial(o);const a=new jn(gu,n,{restitution:.3,friction:0});pn.addContactMaterial(a),fu.push(t),ca.push(e)});function WM(){ei.aspect=window.innerWidth/window.innerHeight,ei.updateProjectionMatrix(),wi.setSize(window.innerWidth,window.innerHeight)}window.addEventListener("resize",WM,!1);wi.setAnimationLoop(GM);
