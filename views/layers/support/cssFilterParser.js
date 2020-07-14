// COPYRIGHT © 2020 Esri
//
// All rights reserved under the copyright laws of the United States
// and applicable international laws, treaties, and conventions.
//
// This material is licensed for use under the Esri Master License
// Agreement (MLA), and is bound by the terms of that agreement.
// You may redistribute and use this code without modification,
// provided you adhere to the terms of the MLA and include this
// copyright notice.
//
// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english
//
// For additional information, contact:
// Environmental Systems Research Institute, Inc.
// Attn: Contracts and Legal Services Department
// 380 New York Street
// Redlands, California, USA 92373
// USA
//
// email: contracts@esri.com
//
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

!function(r,e){"function"==typeof define&&define.amd?define([],e):"object"==typeof module&&module.exports&&(module.exports=e())}(0,(function(){"use strict";function r(e,t,n,a){this.message=e,this.expected=t,this.found=n,this.location=a,this.name="SyntaxError","function"==typeof Error.captureStackTrace&&Error.captureStackTrace(this,r)}return function(r,e){function t(){this.constructor=r}t.prototype=e.prototype,r.prototype=new t}(r,Error),r.buildMessage=function(r,e){var t={literal:function(r){return'"'+a(r.text)+'"'},class:function(r){var e,t="";for(e=0;e<r.parts.length;e++)t+=r.parts[e]instanceof Array?o(r.parts[e][0])+"-"+o(r.parts[e][1]):o(r.parts[e]);return"["+(r.inverted?"^":"")+t+"]"},any:function(r){return"any character"},end:function(r){return"end of input"},other:function(r){return r.description}};function n(r){return r.charCodeAt(0).toString(16).toUpperCase()}function a(r){return r.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,(function(r){return"\\x0"+n(r)})).replace(/[\x10-\x1F\x7F-\x9F]/g,(function(r){return"\\x"+n(r)}))}function o(r){return r.replace(/\\/g,"\\\\").replace(/\]/g,"\\]").replace(/\^/g,"\\^").replace(/-/g,"\\-").replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,(function(r){return"\\x0"+n(r)})).replace(/[\x10-\x1F\x7F-\x9F]/g,(function(r){return"\\x"+n(r)}))}return"Expected "+function(r){var e,n,a,o=new Array(r.length);for(e=0;e<r.length;e++)o[e]=(a=r[e],t[a.type](a));if(o.sort(),o.length>0){for(e=1,n=1;e<o.length;e++)o[e-1]!==o[e]&&(o[n]=o[e],n++);o.length=n}switch(o.length){case 1:return o[0];case 2:return o[0]+" or "+o[1];default:return o.slice(0,-1).join(", ")+", or "+o[o.length-1]}}(r)+" but "+function(r){return r?'"'+a(r)+'"':"end of input"}(e)+" found."},{SyntaxError:r,parse:function(e,t){t=void 0!==t?t:{};var n,a={},o={start:zr},u=zr,i=qr("none"),c=Fr("none",!1),s=qr("blur()"),l=Fr("blur(",!1),h=Fr(")",!1),d=qr("brightness()"),g=Fr("brightness(",!1),p=qr("contrast()"),f=Fr("contrast(",!1),b=qr("drop-shadow()"),m=Fr("drop-shadow(",!1),y=qr("grayscale()"),A=Fr("grayscale(",!1),v=qr("hue-rotate()"),C=Fr("hue-rotate(",!1),w=qr("invert()"),k=Fr("invert(",!1),x=qr("opacity()"),F=Fr("opacity(",!1),j=qr("saturate()"),q=Fr("saturate(",!1),I=qr("sepia()"),E=Fr("sepia(",!1),S=qr("<number-percentage>"),R=qr("<integer>"),z=/^[0-9]/,M=jr([["0","9"]],!1,!1),Q=qr("<number>"),T=Fr(".",!1),N=function(){return parseFloat(xr())},O=qr("<signedNumber>"),P=/^[+\-]/,U=jr(["+","-"],!1,!1),X=Fr("%",!1),Y=qr("<angle>"),B=function(r,e){return r*e},D=Fr("0",!1),G=qr("<unit>"),H=Fr("deg",!1),J=Fr("grad",!1),K=Fr("rad",!1),L=Fr("turn",!1),V=qr("<length>"),W=Fr("px",!1),Z=Fr("cm",!1),$=Fr("mm",!1),_=Fr("Q",!1),rr=Fr("in",!1),er=Fr("pc",!1),tr=Fr("pt",!1),nr=Fr("#",!1),ar=Fr("rgba(",!1),or=Fr(",",!1),ur=function(r,e,t){return[255*r,255*e,255*t,1]},ir=function(r,e,t){return[r,e,t,1]},cr=Fr("rgb(",!1),sr=/^[0-9a-fA-F]/,lr=jr([["0","9"],["a","f"],["A","F"]],!1,!1),hr=qr("whitespace"),dr=/^[ \t\n\r]/,gr=jr([" ","\t","\n","\r"],!1,!1),pr=qr("<named-color>"),fr=/^[a-z]/,br=jr([["a","z"]],!1,!1),mr=function(){var e=xr();return Gr.has(e)||function(e,t){throw t=void 0!==t?t:Er(Ar,yr),function(e,t){return new r(e,null,null,t)}(e,t)}('unknown color "'+e+'"'),Dr[e].concat(1)},yr=0,Ar=0,vr=[{line:1,column:1}],Cr=0,wr=[],kr=0;if("startRule"in t){if(!(t.startRule in o))throw new Error("Can't start parsing from rule \""+t.startRule+'".');u=o[t.startRule]}function xr(){return e.substring(Ar,yr)}function Fr(r,e){return{type:"literal",text:r,ignoreCase:e}}function jr(r,e,t){return{type:"class",parts:r,inverted:e,ignoreCase:t}}function qr(r){return{type:"other",description:r}}function Ir(r){var t,n=vr[r];if(n)return n;for(t=r-1;!vr[t];)t--;for(n={line:(n=vr[t]).line,column:n.column};t<r;)10===e.charCodeAt(t)?(n.line++,n.column=1):n.column++,t++;return vr[r]=n,n}function Er(r,e){var t=Ir(r),n=Ir(e);return{start:{offset:r,line:t.line,column:t.column},end:{offset:e,line:n.line,column:n.column}}}function Sr(r){yr<Cr||(yr>Cr&&(Cr=yr,wr=[]),wr.push(r))}function Rr(e,t,n){return new r(r.buildMessage(e,t),e,t,n)}function zr(){var r;return(r=function(){var r,t;kr++,r=yr,Br()!==a?("none"===e.substr(yr,4)?(t="none",yr+=4):(t=a,0===kr&&Sr(c)),t!==a&&Br()!==a?(Ar=r,r=null):(yr=r,r=a)):(yr=r,r=a);kr--,r===a&&(a,0===kr&&Sr(i));return r}())===a&&(r=function(){var r,e;if(r=[],(e=Mr())!==a)for(;e!==a;)r.push(e),e=Mr();else r=a;return r}()),r}function Mr(){var r;return(r=function(){var r,t,n,o;kr++,r=yr,Br()!==a?("blur("===e.substr(yr,5)?(t="blur(",yr+=5):(t=a,0===kr&&Sr(l)),t!==a&&Br()!==a&&(n=Ur())!==a&&Br()!==a?(41===e.charCodeAt(yr)?(o=")",yr++):(o=a,0===kr&&Sr(h)),o!==a&&Br()!==a?(Ar=r,r={type:"blur",radius:n}):(yr=r,r=a)):(yr=r,r=a)):(yr=r,r=a);kr--,r===a&&(a,0===kr&&Sr(s));return r}())===a&&(r=function(){var r,t,n,o;kr++,r=yr,Br()!==a?("brightness("===e.substr(yr,11)?(t="brightness(",yr+=11):(t=a,0===kr&&Sr(g)),t!==a&&Br()!==a&&(n=Qr())!==a&&Br()!==a?(41===e.charCodeAt(yr)?(o=")",yr++):(o=a,0===kr&&Sr(h)),o!==a&&Br()!==a?(Ar=r,r={type:"brightness",amount:n}):(yr=r,r=a)):(yr=r,r=a)):(yr=r,r=a);kr--,r===a&&(a,0===kr&&Sr(d));return r}())===a&&(r=function(){var r,t,n,o;kr++,r=yr,Br()!==a?("contrast("===e.substr(yr,9)?(t="contrast(",yr+=9):(t=a,0===kr&&Sr(f)),t!==a&&Br()!==a&&(n=Qr())!==a&&Br()!==a?(41===e.charCodeAt(yr)?(o=")",yr++):(o=a,0===kr&&Sr(h)),o!==a&&Br()!==a?(Ar=r,r={type:"contrast",amount:n}):(yr=r,r=a)):(yr=r,r=a)):(yr=r,r=a);kr--,r===a&&(a,0===kr&&Sr(p));return r}())===a&&(r=function(){var r,t,n,o,u,i,c;kr++,r=yr,Br()!==a?("drop-shadow("===e.substr(yr,12)?(t="drop-shadow(",yr+=12):(t=a,0===kr&&Sr(m)),t!==a&&Br()!==a&&(n=Ur())!==a&&Br()!==a&&(o=Ur())!==a&&Br()!==a?((u=Ur())===a&&(u=null),u!==a&&Br()!==a?((i=function(){var r,t,n,o,u,i,c,s,l,d,g,p,f,b,m;r=yr,35===e.charCodeAt(yr)?(t="#",yr++):(t=a,0===kr&&Sr(nr));t!==a?(n=yr,(o=Yr())!==a&&(u=Yr())!==a?n=o=[o,u]:(yr=n,n=a),n!==a?(o=yr,(u=Yr())!==a&&(i=Yr())!==a?o=u=[u,i]:(yr=o,o=a),o!==a?(u=yr,(i=Yr())!==a&&(c=Yr())!==a?u=i=[i,c]:(yr=u,u=a),u!==a?(Ar=r,y=o,A=u,t=[parseInt(n.join(""),16),parseInt(y.join(""),16),parseInt(A.join(""),16)],r=t):(yr=r,r=a)):(yr=r,r=a)):(yr=r,r=a)):(yr=r,r=a);var y,A;r===a&&(r=yr,35===e.charCodeAt(yr)?(t="#",yr++):(t=a,0===kr&&Sr(nr)),t!==a&&(n=Yr())!==a&&(o=Yr())!==a&&(u=Yr())!==a?(Ar=r,t=function(r,e,t){return[parseInt([r,r].join(""),16),parseInt([e,e].join(""),16),parseInt([t,t].join(""),16)]}(n,o,u),r=t):(yr=r,r=a),r===a&&(r=yr,"rgba("===e.substr(yr,5)?(t="rgba(",yr+=5):(t=a,0===kr&&Sr(ar)),t!==a&&(n=Br())!==a&&(o=Or())!==a&&(u=Br())!==a?(44===e.charCodeAt(yr)?(i=",",yr++):(i=a,0===kr&&Sr(or)),i!==a&&(c=Br())!==a&&(s=Or())!==a&&Br()!==a?(44===e.charCodeAt(yr)?(l=",",yr++):(l=a,0===kr&&Sr(or)),l!==a&&Br()!==a&&(d=Or())!==a&&(g=Br())!==a?(44===e.charCodeAt(yr)?(p=",",yr++):(p=a,0===kr&&Sr(or)),p!==a&&(f=Br())!==a&&(b=Qr())!==a&&Br()!==a?(41===e.charCodeAt(yr)?(m=")",yr++):(m=a,0===kr&&Sr(h)),m!==a?(Ar=r,t=function(r,e,t,n){return[255*r,255*e,255*t,n]}(o,s,d,b),r=t):(yr=r,r=a)):(yr=r,r=a)):(yr=r,r=a)):(yr=r,r=a)):(yr=r,r=a),r===a&&(r=yr,"rgba("===e.substr(yr,5)?(t="rgba(",yr+=5):(t=a,0===kr&&Sr(ar)),t!==a&&(n=Br())!==a&&(o=Nr())!==a&&(u=Br())!==a?(44===e.charCodeAt(yr)?(i=",",yr++):(i=a,0===kr&&Sr(or)),i!==a&&(c=Br())!==a&&(s=Nr())!==a&&Br()!==a?(44===e.charCodeAt(yr)?(l=",",yr++):(l=a,0===kr&&Sr(or)),l!==a&&Br()!==a&&(d=Nr())!==a?(44===e.charCodeAt(yr)?(g=",",yr++):(g=a,0===kr&&Sr(or)),g!==a&&(p=Br())!==a&&(f=Qr())!==a?(41===e.charCodeAt(yr)?(b=")",yr++):(b=a,0===kr&&Sr(h)),b!==a?(Ar=r,t=function(r,e,t,n){return[r,e,t,n]}(o,s,d,f),r=t):(yr=r,r=a)):(yr=r,r=a)):(yr=r,r=a)):(yr=r,r=a)):(yr=r,r=a),r===a&&(r=yr,"rgba("===e.substr(yr,5)?(t="rgba(",yr+=5):(t=a,0===kr&&Sr(ar)),t!==a&&(n=Br())!==a&&(o=Or())!==a&&(u=Br())!==a?(44===e.charCodeAt(yr)?(i=",",yr++):(i=a,0===kr&&Sr(or)),i!==a&&(c=Br())!==a&&(s=Or())!==a&&Br()!==a?(44===e.charCodeAt(yr)?(l=",",yr++):(l=a,0===kr&&Sr(or)),l!==a&&Br()!==a&&(d=Or())!==a&&(g=Br())!==a?(41===e.charCodeAt(yr)?(p=")",yr++):(p=a,0===kr&&Sr(h)),p!==a?(Ar=r,t=ur(o,s,d),r=t):(yr=r,r=a)):(yr=r,r=a)):(yr=r,r=a)):(yr=r,r=a),r===a&&(r=yr,"rgba("===e.substr(yr,5)?(t="rgba(",yr+=5):(t=a,0===kr&&Sr(ar)),t!==a&&(n=Br())!==a&&(o=Nr())!==a&&(u=Br())!==a?(44===e.charCodeAt(yr)?(i=",",yr++):(i=a,0===kr&&Sr(or)),i!==a&&(c=Br())!==a&&(s=Nr())!==a&&Br()!==a?(44===e.charCodeAt(yr)?(l=",",yr++):(l=a,0===kr&&Sr(or)),l!==a&&Br()!==a&&(d=Nr())!==a?(41===e.charCodeAt(yr)?(g=")",yr++):(g=a,0===kr&&Sr(h)),g!==a?(Ar=r,t=ir(o,s,d),r=t):(yr=r,r=a)):(yr=r,r=a)):(yr=r,r=a)):(yr=r,r=a),r===a&&(r=yr,"rgb("===e.substr(yr,4)?(t="rgb(",yr+=4):(t=a,0===kr&&Sr(cr)),t!==a&&(n=Br())!==a&&(o=Or())!==a&&(u=Br())!==a?(44===e.charCodeAt(yr)?(i=",",yr++):(i=a,0===kr&&Sr(or)),i!==a&&(c=Br())!==a&&(s=Or())!==a&&Br()!==a?(44===e.charCodeAt(yr)?(l=",",yr++):(l=a,0===kr&&Sr(or)),l!==a&&Br()!==a&&(d=Or())!==a&&(g=Br())!==a?(41===e.charCodeAt(yr)?(p=")",yr++):(p=a,0===kr&&Sr(h)),p!==a?(Ar=r,t=ur(o,s,d),r=t):(yr=r,r=a)):(yr=r,r=a)):(yr=r,r=a)):(yr=r,r=a),r===a&&(r=yr,"rgb("===e.substr(yr,4)?(t="rgb(",yr+=4):(t=a,0===kr&&Sr(cr)),t!==a&&(n=Br())!==a&&(o=Nr())!==a&&(u=Br())!==a?(44===e.charCodeAt(yr)?(i=",",yr++):(i=a,0===kr&&Sr(or)),i!==a&&(c=Br())!==a&&(s=Nr())!==a&&Br()!==a?(44===e.charCodeAt(yr)?(l=",",yr++):(l=a,0===kr&&Sr(or)),l!==a&&Br()!==a&&(d=Nr())!==a&&(g=Br())!==a?(41===e.charCodeAt(yr)?(p=")",yr++):(p=a,0===kr&&Sr(h)),p!==a?(Ar=r,t=ir(o,s,d),r=t):(yr=r,r=a)):(yr=r,r=a)):(yr=r,r=a)):(yr=r,r=a),r===a&&(r=function(){var r,t,n;kr++,r=yr,t=[],fr.test(e.charAt(yr))?(n=e.charAt(yr),yr++):(n=a,0===kr&&Sr(br));if(n!==a)for(;n!==a;)t.push(n),fr.test(e.charAt(yr))?(n=e.charAt(yr),yr++):(n=a,0===kr&&Sr(br));else t=a;t!==a&&(Ar=r,t=mr());kr--,(r=t)===a&&(t=a,0===kr&&Sr(pr));return r}()))))))));return r}())===a&&(i=null),i!==a&&Br()!==a?(41===e.charCodeAt(yr)?(c=")",yr++):(c=a,0===kr&&Sr(h)),c!==a&&Br()!==a?(Ar=r,r={type:"drop-shadow",offsetX:n,offsetY:o,blurRadius:u,color:i}):(yr=r,r=a)):(yr=r,r=a)):(yr=r,r=a)):(yr=r,r=a)):(yr=r,r=a);kr--,r===a&&(a,0===kr&&Sr(b));return r}())===a&&(r=function(){var r,t,n,o;kr++,r=yr,Br()!==a?("grayscale("===e.substr(yr,10)?(t="grayscale(",yr+=10):(t=a,0===kr&&Sr(A)),t!==a&&Br()!==a&&(n=Qr())!==a&&Br()!==a?(41===e.charCodeAt(yr)?(o=")",yr++):(o=a,0===kr&&Sr(h)),o!==a&&Br()!==a?(Ar=r,r={type:"grayscale",amount:n}):(yr=r,r=a)):(yr=r,r=a)):(yr=r,r=a);kr--,r===a&&(a,0===kr&&Sr(y));return r}())===a&&(r=function(){var r,t,n,o;kr++,r=yr,Br()!==a?("hue-rotate("===e.substr(yr,11)?(t="hue-rotate(",yr+=11):(t=a,0===kr&&Sr(C)),t!==a&&Br()!==a&&(n=function(){var r,t,n;kr++,r=yr,(t=function(){var r,t;kr++,r=yr,P.test(e.charAt(yr))?(t=e.charAt(yr),yr++):(t=a,0===kr&&Sr(U));t===a&&(t=null);t!==a&&Nr()!==a?(Ar=r,t=N(),r=t):(yr=r,r=a);kr--,r===a&&(t=a,0===kr&&Sr(O));return r}())!==a&&(n=Pr())!==a?(Ar=r,t=B(t,n),r=t):(yr=r,r=a);r===a&&(r=yr,48===e.charCodeAt(yr)?(t="0",yr++):(t=a,0===kr&&Sr(D)),t!==a?((n=Pr())===a&&(n=null),n!==a?(Ar=r,r=t=0):(yr=r,r=a)):(yr=r,r=a));kr--,r===a&&(t=a,0===kr&&Sr(Y));return r}())!==a&&Br()!==a?(41===e.charCodeAt(yr)?(o=")",yr++):(o=a,0===kr&&Sr(h)),o!==a&&Br()!==a?(Ar=r,r={type:"hue-rotate",angle:n}):(yr=r,r=a)):(yr=r,r=a)):(yr=r,r=a);kr--,r===a&&(a,0===kr&&Sr(v));return r}())===a&&(r=function(){var r,t,n,o;kr++,r=yr,Br()!==a?("invert("===e.substr(yr,7)?(t="invert(",yr+=7):(t=a,0===kr&&Sr(k)),t!==a&&Br()!==a&&(n=Qr())!==a&&Br()!==a?(41===e.charCodeAt(yr)?(o=")",yr++):(o=a,0===kr&&Sr(h)),o!==a&&Br()!==a?(Ar=r,r={type:"invert",amount:n}):(yr=r,r=a)):(yr=r,r=a)):(yr=r,r=a);kr--,r===a&&(a,0===kr&&Sr(w));return r}())===a&&(r=function(){var r,t,n,o;kr++,r=yr,Br()!==a?("opacity("===e.substr(yr,8)?(t="opacity(",yr+=8):(t=a,0===kr&&Sr(F)),t!==a&&Br()!==a&&(n=Qr())!==a&&Br()!==a?(41===e.charCodeAt(yr)?(o=")",yr++):(o=a,0===kr&&Sr(h)),o!==a&&Br()!==a?(Ar=r,r={type:"opacity",amount:n}):(yr=r,r=a)):(yr=r,r=a)):(yr=r,r=a);kr--,r===a&&(a,0===kr&&Sr(x));return r}())===a&&(r=function(){var r,t,n,o;kr++,r=yr,Br()!==a?("saturate("===e.substr(yr,9)?(t="saturate(",yr+=9):(t=a,0===kr&&Sr(q)),t!==a&&Br()!==a&&(n=Qr())!==a&&Br()!==a?(41===e.charCodeAt(yr)?(o=")",yr++):(o=a,0===kr&&Sr(h)),o!==a&&Br()!==a?(Ar=r,r={type:"saturate",amount:n}):(yr=r,r=a)):(yr=r,r=a)):(yr=r,r=a);kr--,r===a&&(a,0===kr&&Sr(j));return r}())===a&&(r=function(){var r,t,n,o;kr++,r=yr,Br()!==a?("sepia("===e.substr(yr,6)?(t="sepia(",yr+=6):(t=a,0===kr&&Sr(E)),t!==a&&Br()!==a&&(n=Qr())!==a&&Br()!==a?(41===e.charCodeAt(yr)?(o=")",yr++):(o=a,0===kr&&Sr(h)),o!==a&&Br()!==a?(Ar=r,r={type:"sepia",amount:n}):(yr=r,r=a)):(yr=r,r=a)):(yr=r,r=a);kr--,r===a&&(a,0===kr&&Sr(I));return r}()),r}function Qr(){var r;return kr++,(r=Or())===a&&(r=Nr()),kr--,r===a&&(a,0===kr&&Sr(S)),r}function Tr(){var r,t,n;if(kr++,r=yr,t=[],z.test(e.charAt(yr))?(n=e.charAt(yr),yr++):(n=a,0===kr&&Sr(M)),n!==a)for(;n!==a;)t.push(n),z.test(e.charAt(yr))?(n=e.charAt(yr),yr++):(n=a,0===kr&&Sr(M));else t=a;return t!==a&&(Ar=r,t=parseInt(xr(),10)),kr--,(r=t)===a&&(t=a,0===kr&&Sr(R)),r}function Nr(){var r,t,n,o,u;if(kr++,r=yr,t=[],z.test(e.charAt(yr))?(n=e.charAt(yr),yr++):(n=a,0===kr&&Sr(M)),n!==a)for(;n!==a;)t.push(n),z.test(e.charAt(yr))?(n=e.charAt(yr),yr++):(n=a,0===kr&&Sr(M));else t=a;if(t!==a)if(46===e.charCodeAt(yr)?(n=".",yr++):(n=a,0===kr&&Sr(T)),n!==a){if(o=[],z.test(e.charAt(yr))?(u=e.charAt(yr),yr++):(u=a,0===kr&&Sr(M)),u!==a)for(;u!==a;)o.push(u),z.test(e.charAt(yr))?(u=e.charAt(yr),yr++):(u=a,0===kr&&Sr(M));else o=a;o!==a?(Ar=r,r=t=N()):(yr=r,r=a)}else yr=r,r=a;else yr=r,r=a;return r===a&&(r=Tr()),kr--,r===a&&(t=a,0===kr&&Sr(Q)),r}function Or(){var r,t,n;return r=yr,(t=Nr())!==a?(37===e.charCodeAt(yr)?(n="%",yr++):(n=a,0===kr&&Sr(X)),n!==a?(Ar=r,r=t=t/100):(yr=r,r=a)):(yr=r,r=a),r}function Pr(){var r,t;return kr++,r=yr,"deg"===e.substr(yr,3)?(t="deg",yr+=3):(t=a,0===kr&&Sr(H)),t!==a&&(Ar=r,t=1),(r=t)===a&&(r=yr,"grad"===e.substr(yr,4)?(t="grad",yr+=4):(t=a,0===kr&&Sr(J)),t!==a&&(Ar=r,t=.9),(r=t)===a&&(r=yr,"rad"===e.substr(yr,3)?(t="rad",yr+=3):(t=a,0===kr&&Sr(K)),t!==a&&(Ar=r,t=180/Math.PI),(r=t)===a&&(r=yr,"turn"===e.substr(yr,4)?(t="turn",yr+=4):(t=a,0===kr&&Sr(L)),t!==a&&(Ar=r,t=1/360),r=t))),kr--,r===a&&(t=a,0===kr&&Sr(G)),r}function Ur(){var r,t,n;return kr++,r=yr,(t=Nr())!==a&&(n=Xr())!==a?(Ar=r,r=t=B(t,n)):(yr=r,r=a),r===a&&(r=yr,48===e.charCodeAt(yr)?(t="0",yr++):(t=a,0===kr&&Sr(D)),t!==a?((n=Xr())===a&&(n=null),n!==a?(Ar=r,r=t=0):(yr=r,r=a)):(yr=r,r=a)),kr--,r===a&&(t=a,0===kr&&Sr(V)),r}function Xr(){var r,t;return r=yr,"px"===e.substr(yr,2)?(t="px",yr+=2):(t=a,0===kr&&Sr(W)),t!==a&&(Ar=r,t=1),(r=t)===a&&(r=yr,"cm"===e.substr(yr,2)?(t="cm",yr+=2):(t=a,0===kr&&Sr(Z)),t!==a&&(Ar=r,t=96/2.54),(r=t)===a&&(r=yr,"mm"===e.substr(yr,2)?(t="mm",yr+=2):(t=a,0===kr&&Sr($)),t!==a&&(Ar=r,t=96/2.54/10),(r=t)===a&&(r=yr,81===e.charCodeAt(yr)?(t="Q",yr++):(t=a,0===kr&&Sr(_)),t!==a&&(Ar=r,t=96/2.54/40),(r=t)===a&&(r=yr,"in"===e.substr(yr,2)?(t="in",yr+=2):(t=a,0===kr&&Sr(rr)),t!==a&&(Ar=r,t=96),(r=t)===a&&(r=yr,"pc"===e.substr(yr,2)?(t="pc",yr+=2):(t=a,0===kr&&Sr(er)),t!==a&&(Ar=r,t=16),(r=t)===a&&(r=yr,"pt"===e.substr(yr,2)?(t="pt",yr+=2):(t=a,0===kr&&Sr(tr)),t!==a&&(Ar=r,t=96/73),r=t)))))),r}function Yr(){var r;return sr.test(e.charAt(yr))?(r=e.charAt(yr),yr++):(r=a,0===kr&&Sr(lr)),r}function Br(){var r,t;for(kr++,r=[],dr.test(e.charAt(yr))?(t=e.charAt(yr),yr++):(t=a,0===kr&&Sr(gr));t!==a;)r.push(t),dr.test(e.charAt(yr))?(t=e.charAt(yr),yr++):(t=a,0===kr&&Sr(gr));return kr--,r===a&&(t=a,0===kr&&Sr(hr)),r}var Dr={transparent:[0,0,0,0],black:[0,0,0],silver:[192,192,192],gray:[128,128,128],white:[255,255,255],maroon:[128,0,0],red:[255,0,0],purple:[128,0,128],fuchsia:[255,0,255],green:[0,128,0],lime:[0,255,0],olive:[128,128,0],yellow:[255,255,0],navy:[0,0,128],blue:[0,0,255],teal:[0,128,128],aqua:[0,255,255],aliceblue:[240,248,255],antiquewhite:[250,235,215],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],blanchedalmond:[255,235,205],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],oldlace:[253,245,230],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],rebeccapurple:[102,51,153],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],whitesmoke:[245,245,245],yellowgreen:[154,205,50]},Gr=new Set(Object.keys(Dr));if((n=u())!==a&&yr===e.length)return n;throw n!==a&&yr<e.length&&Sr({type:"end"}),Rr(wr,Cr<e.length?e.charAt(Cr):null,Cr<e.length?Er(Cr,Cr+1):Er(Cr,Cr))}}}));