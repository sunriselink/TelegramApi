/*
 AngularJS v1.5.7
 (c) 2010-2016 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(E){'use strict';function O(a){return function(){var b=arguments[0],d;d="["+(a?a+":":"")+b+"] http://errors.angularjs.org/1.5.7/"+(a?a+"/":"")+b;for(b=1;b<arguments.length;b++){d=d+(1==b?"?":"&")+"p"+(b-1)+"=";var c=encodeURIComponent,e;e=arguments[b];e="function"==typeof e?e.toString().replace(/ \{[\s\S]*$/,""):"undefined"==typeof e?"undefined":"string"!=typeof e?JSON.stringify(e):e;d+=c(e)}return Error(d)}}function oa(a){if(null==a||Wa(a))return!1;if(J(a)||F(a)||B&&a instanceof B)return!0;
var b="length"in Object(a)&&a.length;return S(b)&&(0<=b&&(b-1 in a||a instanceof Array)||"function"==typeof a.item)}function r(a,b,d){var c,e;if(a)if(z(a))for(c in a)"prototype"==c||"length"==c||"name"==c||a.hasOwnProperty&&!a.hasOwnProperty(c)||b.call(d,a[c],c,a);else if(J(a)||oa(a)){var f="object"!==typeof a;c=0;for(e=a.length;c<e;c++)(f||c in a)&&b.call(d,a[c],c,a)}else if(a.forEach&&a.forEach!==r)a.forEach(b,d,a);else if(sc(a))for(c in a)b.call(d,a[c],c,a);else if("function"===typeof a.hasOwnProperty)for(c in a)a.hasOwnProperty(c)&&
b.call(d,a[c],c,a);else for(c in a)sa.call(a,c)&&b.call(d,a[c],c,a);return a}function tc(a,b,d){for(var c=Object.keys(a).sort(),e=0;e<c.length;e++)b.call(d,a[c[e]],c[e]);return c}function uc(a){return function(b,d){a(d,b)}}function Zd(){return++pb}function Pb(a,b,d){for(var c=a.$$hashKey,e=0,f=b.length;e<f;++e){var g=b[e];if(H(g)||z(g))for(var h=Object.keys(g),k=0,l=h.length;k<l;k++){var m=h[k],n=g[m];d&&H(n)?ia(n)?a[m]=new Date(n.valueOf()):Xa(n)?a[m]=new RegExp(n):n.nodeName?a[m]=n.cloneNode(!0):
Qb(n)?a[m]=n.clone():(H(a[m])||(a[m]=J(n)?[]:{}),Pb(a[m],[n],!0)):a[m]=n}}c?a.$$hashKey=c:delete a.$$hashKey;return a}function R(a){return Pb(a,ta.call(arguments,1),!1)}function $d(a){return Pb(a,ta.call(arguments,1),!0)}function aa(a){return parseInt(a,10)}function Rb(a,b){return R(Object.create(a),b)}function A(){}function Ya(a){return a}function da(a){return function(){return a}}function vc(a){return z(a.toString)&&a.toString!==ka}function w(a){return"undefined"===typeof a}function x(a){return"undefined"!==
typeof a}function H(a){return null!==a&&"object"===typeof a}function sc(a){return null!==a&&"object"===typeof a&&!wc(a)}function F(a){return"string"===typeof a}function S(a){return"number"===typeof a}function ia(a){return"[object Date]"===ka.call(a)}function z(a){return"function"===typeof a}function Xa(a){return"[object RegExp]"===ka.call(a)}function Wa(a){return a&&a.window===a}function Za(a){return a&&a.$evalAsync&&a.$watch}function Ea(a){return"boolean"===typeof a}function ae(a){return a&&S(a.length)&&
be.test(ka.call(a))}function Qb(a){return!(!a||!(a.nodeName||a.prop&&a.attr&&a.find))}function ce(a){var b={};a=a.split(",");var d;for(d=0;d<a.length;d++)b[a[d]]=!0;return b}function ua(a){return M(a.nodeName||a[0]&&a[0].nodeName)}function $a(a,b){var d=a.indexOf(b);0<=d&&a.splice(d,1);return d}function Z(a,b){function d(a,b){var d=b.$$hashKey,e;if(J(a)){e=0;for(var f=a.length;e<f;e++)b.push(c(a[e]))}else if(sc(a))for(e in a)b[e]=c(a[e]);else if(a&&"function"===typeof a.hasOwnProperty)for(e in a)a.hasOwnProperty(e)&&
(b[e]=c(a[e]));else for(e in a)sa.call(a,e)&&(b[e]=c(a[e]));d?b.$$hashKey=d:delete b.$$hashKey;return b}function c(a){if(!H(a))return a;var b=f.indexOf(a);if(-1!==b)return g[b];if(Wa(a)||Za(a))throw za("cpws");var b=!1,c=e(a);void 0===c&&(c=J(a)?[]:Object.create(wc(a)),b=!0);f.push(a);g.push(c);return b?d(a,c):c}function e(a){switch(ka.call(a)){case "[object Int8Array]":case "[object Int16Array]":case "[object Int32Array]":case "[object Float32Array]":case "[object Float64Array]":case "[object Uint8Array]":case "[object Uint8ClampedArray]":case "[object Uint16Array]":case "[object Uint32Array]":return new a.constructor(c(a.buffer));
case "[object ArrayBuffer]":if(!a.slice){var b=new ArrayBuffer(a.byteLength);(new Uint8Array(b)).set(new Uint8Array(a));return b}return a.slice(0);case "[object Boolean]":case "[object Number]":case "[object String]":case "[object Date]":return new a.constructor(a.valueOf());case "[object RegExp]":return b=new RegExp(a.source,a.toString().match(/[^\/]*$/)[0]),b.lastIndex=a.lastIndex,b;case "[object Blob]":return new a.constructor([a],{type:a.type})}if(z(a.cloneNode))return a.cloneNode(!0)}var f=[],
g=[];if(b){if(ae(b)||"[object ArrayBuffer]"===ka.call(b))throw za("cpta");if(a===b)throw za("cpi");J(b)?b.length=0:r(b,function(a,d){"$$hashKey"!==d&&delete b[d]});f.push(a);g.push(b);return d(a,b)}return c(a)}function na(a,b){if(a===b)return!0;if(null===a||null===b)return!1;if(a!==a&&b!==b)return!0;var d=typeof a,c;if(d==typeof b&&"object"==d)if(J(a)){if(!J(b))return!1;if((d=a.length)==b.length){for(c=0;c<d;c++)if(!na(a[c],b[c]))return!1;return!0}}else{if(ia(a))return ia(b)?na(a.getTime(),b.getTime()):
!1;if(Xa(a))return Xa(b)?a.toString()==b.toString():!1;if(Za(a)||Za(b)||Wa(a)||Wa(b)||J(b)||ia(b)||Xa(b))return!1;d=T();for(c in a)if("$"!==c.charAt(0)&&!z(a[c])){if(!na(a[c],b[c]))return!1;d[c]=!0}for(c in b)if(!(c in d)&&"$"!==c.charAt(0)&&x(b[c])&&!z(b[c]))return!1;return!0}return!1}function ab(a,b,d){return a.concat(ta.call(b,d))}function bb(a,b){var d=2<arguments.length?ta.call(arguments,2):[];return!z(b)||b instanceof RegExp?b:d.length?function(){return arguments.length?b.apply(a,ab(d,arguments,
0)):b.apply(a,d)}:function(){return arguments.length?b.apply(a,arguments):b.call(a)}}function de(a,b){var d=b;"string"===typeof a&&"$"===a.charAt(0)&&"$"===a.charAt(1)?d=void 0:Wa(b)?d="$WINDOW":b&&E.document===b?d="$DOCUMENT":Za(b)&&(d="$SCOPE");return d}function cb(a,b){if(!w(a))return S(b)||(b=b?2:null),JSON.stringify(a,de,b)}function xc(a){return F(a)?JSON.parse(a):a}function yc(a,b){a=a.replace(ee,"");var d=Date.parse("Jan 01, 1970 00:00:00 "+a)/6E4;return isNaN(d)?b:d}function Sb(a,b,d){d=d?
-1:1;var c=a.getTimezoneOffset();b=yc(b,c);d*=b-c;a=new Date(a.getTime());a.setMinutes(a.getMinutes()+d);return a}function va(a){a=B(a).clone();try{a.empty()}catch(b){}var d=B("<div>").append(a).html();try{return a[0].nodeType===Na?M(d):d.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/,function(a,b){return"<"+M(b)})}catch(c){return M(d)}}function zc(a){try{return decodeURIComponent(a)}catch(b){}}function Ac(a){var b={};r((a||"").split("&"),function(a){var c,e,f;a&&(e=a=a.replace(/\+/g,"%20"),c=a.indexOf("="),
-1!==c&&(e=a.substring(0,c),f=a.substring(c+1)),e=zc(e),x(e)&&(f=x(f)?zc(f):!0,sa.call(b,e)?J(b[e])?b[e].push(f):b[e]=[b[e],f]:b[e]=f))});return b}function Tb(a){var b=[];r(a,function(a,c){J(a)?r(a,function(a){b.push(ja(c,!0)+(!0===a?"":"="+ja(a,!0)))}):b.push(ja(c,!0)+(!0===a?"":"="+ja(a,!0)))});return b.length?b.join("&"):""}function qb(a){return ja(a,!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function ja(a,b){return encodeURIComponent(a).replace(/%40/gi,"@").replace(/%3A/gi,
":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%3B/gi,";").replace(/%20/g,b?"%20":"+")}function fe(a,b){var d,c,e=Oa.length;for(c=0;c<e;++c)if(d=Oa[c]+b,F(d=a.getAttribute(d)))return d;return null}function ge(a,b){var d,c,e={};r(Oa,function(b){b+="app";!d&&a.hasAttribute&&a.hasAttribute(b)&&(d=a,c=a.getAttribute(b))});r(Oa,function(b){b+="app";var e;!d&&(e=a.querySelector("["+b.replace(":","\\:")+"]"))&&(d=e,c=e.getAttribute(b))});d&&(e.strictDi=null!==fe(d,"strict-di"),b(d,c?[c]:[],e))}function Bc(a,
b,d){H(d)||(d={});d=R({strictDi:!1},d);var c=function(){a=B(a);if(a.injector()){var c=a[0]===E.document?"document":va(a);throw za("btstrpd",c.replace(/</,"&lt;").replace(/>/,"&gt;"));}b=b||[];b.unshift(["$provide",function(b){b.value("$rootElement",a)}]);d.debugInfoEnabled&&b.push(["$compileProvider",function(a){a.debugInfoEnabled(!0)}]);b.unshift("ng");c=db(b,d.strictDi);c.invoke(["$rootScope","$rootElement","$compile","$injector",function(a,b,d,c){a.$apply(function(){b.data("$injector",c);d(b)(a)})}]);
return c},e=/^NG_ENABLE_DEBUG_INFO!/,f=/^NG_DEFER_BOOTSTRAP!/;E&&e.test(E.name)&&(d.debugInfoEnabled=!0,E.name=E.name.replace(e,""));if(E&&!f.test(E.name))return c();E.name=E.name.replace(f,"");ea.resumeBootstrap=function(a){r(a,function(a){b.push(a)});return c()};z(ea.resumeDeferredBootstrap)&&ea.resumeDeferredBootstrap()}function he(){E.name="NG_ENABLE_DEBUG_INFO!"+E.name;E.location.reload()}function ie(a){a=ea.element(a).injector();if(!a)throw za("test");return a.get("$$testability")}function Cc(a,
b){b=b||"_";return a.replace(je,function(a,c){return(c?b:"")+a.toLowerCase()})}function ke(){var a;if(!Dc){var b=rb();(pa=w(b)?E.jQuery:b?E[b]:void 0)&&pa.fn.on?(B=pa,R(pa.fn,{scope:Pa.scope,isolateScope:Pa.isolateScope,controller:Pa.controller,injector:Pa.injector,inheritedData:Pa.inheritedData}),a=pa.cleanData,pa.cleanData=function(b){for(var c,e=0,f;null!=(f=b[e]);e++)(c=pa._data(f,"events"))&&c.$destroy&&pa(f).triggerHandler("$destroy");a(b)}):B=U;ea.element=B;Dc=!0}}function sb(a,b,d){if(!a)throw za("areq",
b||"?",d||"required");return a}function Qa(a,b,d){d&&J(a)&&(a=a[a.length-1]);sb(z(a),b,"not a function, got "+(a&&"object"===typeof a?a.constructor.name||"Object":typeof a));return a}function Ra(a,b){if("hasOwnProperty"===a)throw za("badname",b);}function Ec(a,b,d){if(!b)return a;b=b.split(".");for(var c,e=a,f=b.length,g=0;g<f;g++)c=b[g],a&&(a=(e=a)[c]);return!d&&z(a)?bb(e,a):a}function tb(a){for(var b=a[0],d=a[a.length-1],c,e=1;b!==d&&(b=b.nextSibling);e++)if(c||a[e]!==b)c||(c=B(ta.call(a,0,e))),
c.push(b);return c||a}function T(){return Object.create(null)}function le(a){function b(a,b,c){return a[b]||(a[b]=c())}var d=O("$injector"),c=O("ng");a=b(a,"angular",Object);a.$$minErr=a.$$minErr||O;return b(a,"module",function(){var a={};return function(f,g,h){if("hasOwnProperty"===f)throw c("badname","module");g&&a.hasOwnProperty(f)&&(a[f]=null);return b(a,f,function(){function a(b,d,e,f){f||(f=c);return function(){f[e||"push"]([b,d,arguments]);return V}}function b(a,d){return function(b,e){e&&
z(e)&&(e.$$moduleName=f);c.push([a,d,arguments]);return V}}if(!g)throw d("nomod",f);var c=[],e=[],p=[],s=a("$injector","invoke","push",e),V={_invokeQueue:c,_configBlocks:e,_runBlocks:p,requires:g,name:f,provider:b("$provide","provider"),factory:b("$provide","factory"),service:b("$provide","service"),value:a("$provide","value"),constant:a("$provide","constant","unshift"),decorator:b("$provide","decorator"),animation:b("$animateProvider","register"),filter:b("$filterProvider","register"),controller:b("$controllerProvider",
"register"),directive:b("$compileProvider","directive"),component:b("$compileProvider","component"),config:s,run:function(a){p.push(a);return this}};h&&s(h);return V})}})}function ga(a,b){if(J(a)){b=b||[];for(var d=0,c=a.length;d<c;d++)b[d]=a[d]}else if(H(a))for(d in b=b||{},a)if("$"!==d.charAt(0)||"$"!==d.charAt(1))b[d]=a[d];return b||a}function me(a){R(a,{bootstrap:Bc,copy:Z,extend:R,merge:$d,equals:na,element:B,forEach:r,injector:db,noop:A,bind:bb,toJson:cb,fromJson:xc,identity:Ya,isUndefined:w,
isDefined:x,isString:F,isFunction:z,isObject:H,isNumber:S,isElement:Qb,isArray:J,version:ne,isDate:ia,lowercase:M,uppercase:ub,callbacks:{counter:0},getTestability:ie,$$minErr:O,$$csp:Fa,reloadWithDebugInfo:he});Ub=le(E);Ub("ng",["ngLocale"],["$provide",function(a){a.provider({$$sanitizeUri:oe});a.provider("$compile",Fc).directive({a:pe,input:Gc,textarea:Gc,form:qe,script:re,select:se,style:te,option:ue,ngBind:ve,ngBindHtml:we,ngBindTemplate:xe,ngClass:ye,ngClassEven:ze,ngClassOdd:Ae,ngCloak:Be,ngController:Ce,
ngForm:De,ngHide:Ee,ngIf:Fe,ngInclude:Ge,ngInit:He,ngNonBindable:Ie,ngPluralize:Je,ngRepeat:Ke,ngShow:Le,ngStyle:Me,ngSwitch:Ne,ngSwitchWhen:Oe,ngSwitchDefault:Pe,ngOptions:Qe,ngTransclude:Re,ngModel:Se,ngList:Te,ngChange:Ue,pattern:Hc,ngPattern:Hc,required:Ic,ngRequired:Ic,minlength:Jc,ngMinlength:Jc,maxlength:Kc,ngMaxlength:Kc,ngValue:Ve,ngModelOptions:We}).directive({ngInclude:Xe}).directive(vb).directive(Lc);a.provider({$anchorScroll:Ye,$animate:Ze,$animateCss:$e,$$animateJs:af,$$animateQueue:bf,
$$AnimateRunner:cf,$$animateAsyncRun:df,$browser:ef,$cacheFactory:ff,$controller:gf,$document:hf,$exceptionHandler:jf,$filter:Mc,$$forceReflow:kf,$interpolate:lf,$interval:mf,$http:nf,$httpParamSerializer:of,$httpParamSerializerJQLike:pf,$httpBackend:qf,$xhrFactory:rf,$location:sf,$log:tf,$parse:uf,$rootScope:vf,$q:wf,$$q:xf,$sce:yf,$sceDelegate:zf,$sniffer:Af,$templateCache:Bf,$templateRequest:Cf,$$testability:Df,$timeout:Ef,$window:Ff,$$rAF:Gf,$$jqLite:Hf,$$HashMap:If,$$cookieReader:Jf})}])}function eb(a){return a.replace(Kf,
function(a,d,c,e){return e?c.toUpperCase():c}).replace(Lf,"Moz$1")}function Nc(a){a=a.nodeType;return 1===a||!a||9===a}function Oc(a,b){var d,c,e=b.createDocumentFragment(),f=[];if(Vb.test(a)){d=d||e.appendChild(b.createElement("div"));c=(Mf.exec(a)||["",""])[1].toLowerCase();c=ha[c]||ha._default;d.innerHTML=c[1]+a.replace(Nf,"<$1></$2>")+c[2];for(c=c[0];c--;)d=d.lastChild;f=ab(f,d.childNodes);d=e.firstChild;d.textContent=""}else f.push(b.createTextNode(a));e.textContent="";e.innerHTML="";r(f,function(a){e.appendChild(a)});
return e}function Pc(a,b){var d=a.parentNode;d&&d.replaceChild(b,a);b.appendChild(a)}function U(a){if(a instanceof U)return a;var b;F(a)&&(a=W(a),b=!0);if(!(this instanceof U)){if(b&&"<"!=a.charAt(0))throw Wb("nosel");return new U(a)}if(b){b=E.document;var d;a=(d=Of.exec(a))?[b.createElement(d[1])]:(d=Oc(a,b))?d.childNodes:[]}Qc(this,a)}function Xb(a){return a.cloneNode(!0)}function wb(a,b){b||fb(a);if(a.querySelectorAll)for(var d=a.querySelectorAll("*"),c=0,e=d.length;c<e;c++)fb(d[c])}function Rc(a,
b,d,c){if(x(c))throw Wb("offargs");var e=(c=xb(a))&&c.events,f=c&&c.handle;if(f)if(b){var g=function(b){var c=e[b];x(d)&&$a(c||[],d);x(d)&&c&&0<c.length||(a.removeEventListener(b,f,!1),delete e[b])};r(b.split(" "),function(a){g(a);yb[a]&&g(yb[a])})}else for(b in e)"$destroy"!==b&&a.removeEventListener(b,f,!1),delete e[b]}function fb(a,b){var d=a.ng339,c=d&&gb[d];c&&(b?delete c.data[b]:(c.handle&&(c.events.$destroy&&c.handle({},"$destroy"),Rc(a)),delete gb[d],a.ng339=void 0))}function xb(a,b){var d=
a.ng339,d=d&&gb[d];b&&!d&&(a.ng339=d=++Pf,d=gb[d]={events:{},data:{},handle:void 0});return d}function Yb(a,b,d){if(Nc(a)){var c=x(d),e=!c&&b&&!H(b),f=!b;a=(a=xb(a,!e))&&a.data;if(c)a[b]=d;else{if(f)return a;if(e)return a&&a[b];R(a,b)}}}function zb(a,b){return a.getAttribute?-1<(" "+(a.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").indexOf(" "+b+" "):!1}function Ab(a,b){b&&a.setAttribute&&r(b.split(" "),function(b){a.setAttribute("class",W((" "+(a.getAttribute("class")||"")+" ").replace(/[\n\t]/g,
" ").replace(" "+W(b)+" "," ")))})}function Bb(a,b){if(b&&a.setAttribute){var d=(" "+(a.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ");r(b.split(" "),function(a){a=W(a);-1===d.indexOf(" "+a+" ")&&(d+=a+" ")});a.setAttribute("class",W(d))}}function Qc(a,b){if(b)if(b.nodeType)a[a.length++]=b;else{var d=b.length;if("number"===typeof d&&b.window!==b){if(d)for(var c=0;c<d;c++)a[a.length++]=b[c]}else a[a.length++]=b}}function Sc(a,b){return Cb(a,"$"+(b||"ngController")+"Controller")}function Cb(a,
b,d){9==a.nodeType&&(a=a.documentElement);for(b=J(b)?b:[b];a;){for(var c=0,e=b.length;c<e;c++)if(x(d=B.data(a,b[c])))return d;a=a.parentNode||11===a.nodeType&&a.host}}function Tc(a){for(wb(a,!0);a.firstChild;)a.removeChild(a.firstChild)}function Db(a,b){b||wb(a);var d=a.parentNode;d&&d.removeChild(a)}function Qf(a,b){b=b||E;if("complete"===b.document.readyState)b.setTimeout(a);else B(b).on("load",a)}function Uc(a,b){var d=Eb[b.toLowerCase()];return d&&Vc[ua(a)]&&d}function Rf(a,b){var d=function(c,
d){c.isDefaultPrevented=function(){return c.defaultPrevented};var f=b[d||c.type],g=f?f.length:0;if(g){if(w(c.immediatePropagationStopped)){var h=c.stopImmediatePropagation;c.stopImmediatePropagation=function(){c.immediatePropagationStopped=!0;c.stopPropagation&&c.stopPropagation();h&&h.call(c)}}c.isImmediatePropagationStopped=function(){return!0===c.immediatePropagationStopped};var k=f.specialHandlerWrapper||Sf;1<g&&(f=ga(f));for(var l=0;l<g;l++)c.isImmediatePropagationStopped()||k(a,c,f[l])}};d.elem=
a;return d}function Sf(a,b,d){d.call(a,b)}function Tf(a,b,d){var c=b.relatedTarget;c&&(c===a||Uf.call(a,c))||d.call(a,b)}function Hf(){this.$get=function(){return R(U,{hasClass:function(a,b){a.attr&&(a=a[0]);return zb(a,b)},addClass:function(a,b){a.attr&&(a=a[0]);return Bb(a,b)},removeClass:function(a,b){a.attr&&(a=a[0]);return Ab(a,b)}})}}function Ga(a,b){var d=a&&a.$$hashKey;if(d)return"function"===typeof d&&(d=a.$$hashKey()),d;d=typeof a;return d="function"==d||"object"==d&&null!==a?a.$$hashKey=
d+":"+(b||Zd)():d+":"+a}function Sa(a,b){if(b){var d=0;this.nextUid=function(){return++d}}r(a,this.put,this)}function Wc(a){a=(Function.prototype.toString.call(a)+" ").replace(Vf,"");return a.match(Wf)||a.match(Xf)}function Yf(a){return(a=Wc(a))?"function("+(a[1]||"").replace(/[\s\r\n]+/," ")+")":"fn"}function db(a,b){function d(a){return function(b,c){if(H(b))r(b,uc(a));else return a(b,c)}}function c(a,b){Ra(a,"service");if(z(b)||J(b))b=p.instantiate(b);if(!b.$get)throw Ha("pget",a);return n[a+"Provider"]=
b}function e(a,b){return function(){var c=I.invoke(b,this);if(w(c))throw Ha("undef",a);return c}}function f(a,b,d){return c(a,{$get:!1!==d?e(a,b):b})}function g(a){sb(w(a)||J(a),"modulesToLoad","not an array");var b=[],c;r(a,function(a){function d(a){var b,c;b=0;for(c=a.length;b<c;b++){var e=a[b],f=p.get(e[0]);f[e[1]].apply(f,e[2])}}if(!m.get(a)){m.put(a,!0);try{F(a)?(c=Ub(a),b=b.concat(g(c.requires)).concat(c._runBlocks),d(c._invokeQueue),d(c._configBlocks)):z(a)?b.push(p.invoke(a)):J(a)?b.push(p.invoke(a)):
Qa(a,"module")}catch(e){throw J(a)&&(a=a[a.length-1]),e.message&&e.stack&&-1==e.stack.indexOf(e.message)&&(e=e.message+"\n"+e.stack),Ha("modulerr",a,e.stack||e.message||e);}}});return b}function h(a,c){function d(b,e){if(a.hasOwnProperty(b)){if(a[b]===k)throw Ha("cdep",b+" <- "+l.join(" <- "));return a[b]}try{return l.unshift(b),a[b]=k,a[b]=c(b,e)}catch(f){throw a[b]===k&&delete a[b],f;}finally{l.shift()}}function e(a,c,f){var g=[];a=db.$$annotate(a,b,f);for(var h=0,k=a.length;h<k;h++){var l=a[h];
if("string"!==typeof l)throw Ha("itkn",l);g.push(c&&c.hasOwnProperty(l)?c[l]:d(l,f))}return g}return{invoke:function(a,b,c,d){"string"===typeof c&&(d=c,c=null);c=e(a,c,d);J(a)&&(a=a[a.length-1]);d=11>=Ba?!1:"function"===typeof a&&/^(?:class\s|constructor\()/.test(Function.prototype.toString.call(a)+" ");return d?(c.unshift(null),new (Function.prototype.bind.apply(a,c))):a.apply(b,c)},instantiate:function(a,b,c){var d=J(a)?a[a.length-1]:a;a=e(a,b,c);a.unshift(null);return new (Function.prototype.bind.apply(d,
a))},get:d,annotate:db.$$annotate,has:function(b){return n.hasOwnProperty(b+"Provider")||a.hasOwnProperty(b)}}}b=!0===b;var k={},l=[],m=new Sa([],!0),n={$provide:{provider:d(c),factory:d(f),service:d(function(a,b){return f(a,["$injector",function(a){return a.instantiate(b)}])}),value:d(function(a,b){return f(a,da(b),!1)}),constant:d(function(a,b){Ra(a,"constant");n[a]=b;s[a]=b}),decorator:function(a,b){var c=p.get(a+"Provider"),d=c.$get;c.$get=function(){var a=I.invoke(d,c);return I.invoke(b,null,
{$delegate:a})}}}},p=n.$injector=h(n,function(a,b){ea.isString(b)&&l.push(b);throw Ha("unpr",l.join(" <- "));}),s={},V=h(s,function(a,b){var c=p.get(a+"Provider",b);return I.invoke(c.$get,c,void 0,a)}),I=V;n.$injectorProvider={$get:da(V)};var q=g(a),I=V.get("$injector");I.strictDi=b;r(q,function(a){a&&I.invoke(a)});return I}function Ye(){var a=!0;this.disableAutoScrolling=function(){a=!1};this.$get=["$window","$location","$rootScope",function(b,d,c){function e(a){var b=null;Array.prototype.some.call(a,
function(a){if("a"===ua(a))return b=a,!0});return b}function f(a){if(a){a.scrollIntoView();var c;c=g.yOffset;z(c)?c=c():Qb(c)?(c=c[0],c="fixed"!==b.getComputedStyle(c).position?0:c.getBoundingClientRect().bottom):S(c)||(c=0);c&&(a=a.getBoundingClientRect().top,b.scrollBy(0,a-c))}else b.scrollTo(0,0)}function g(a){a=F(a)?a:d.hash();var b;a?(b=h.getElementById(a))?f(b):(b=e(h.getElementsByName(a)))?f(b):"top"===a&&f(null):f(null)}var h=b.document;a&&c.$watch(function(){return d.hash()},function(a,b){a===
b&&""===a||Qf(function(){c.$evalAsync(g)})});return g}]}function hb(a,b){if(!a&&!b)return"";if(!a)return b;if(!b)return a;J(a)&&(a=a.join(" "));J(b)&&(b=b.join(" "));return a+" "+b}function Zf(a){F(a)&&(a=a.split(" "));var b=T();r(a,function(a){a.length&&(b[a]=!0)});return b}function Ia(a){return H(a)?a:{}}function $f(a,b,d,c){function e(a){try{a.apply(null,ta.call(arguments,1))}finally{if(V--,0===V)for(;I.length;)try{I.pop()()}catch(b){d.error(b)}}}function f(){y=null;g();h()}function g(){q=P();
q=w(q)?null:q;na(q,D)&&(q=D);D=q}function h(){if(v!==k.url()||K!==q)v=k.url(),K=q,r(L,function(a){a(k.url(),q)})}var k=this,l=a.location,m=a.history,n=a.setTimeout,p=a.clearTimeout,s={};k.isMock=!1;var V=0,I=[];k.$$completeOutstandingRequest=e;k.$$incOutstandingRequestCount=function(){V++};k.notifyWhenNoOutstandingRequests=function(a){0===V?a():I.push(a)};var q,K,v=l.href,u=b.find("base"),y=null,P=c.history?function(){try{return m.state}catch(a){}}:A;g();K=q;k.url=function(b,d,e){w(e)&&(e=null);l!==
a.location&&(l=a.location);m!==a.history&&(m=a.history);if(b){var f=K===e;if(v===b&&(!c.history||f))return k;var h=v&&Ja(v)===Ja(b);v=b;K=e;!c.history||h&&f?(h||(y=b),d?l.replace(b):h?(d=l,e=b.indexOf("#"),e=-1===e?"":b.substr(e),d.hash=e):l.href=b,l.href!==b&&(y=b)):(m[d?"replaceState":"pushState"](e,"",b),g(),K=q);y&&(y=b);return k}return y||l.href.replace(/%27/g,"'")};k.state=function(){return q};var L=[],C=!1,D=null;k.onUrlChange=function(b){if(!C){if(c.history)B(a).on("popstate",f);B(a).on("hashchange",
f);C=!0}L.push(b);return b};k.$$applicationDestroyed=function(){B(a).off("hashchange popstate",f)};k.$$checkUrlChange=h;k.baseHref=function(){var a=u.attr("href");return a?a.replace(/^(https?\:)?\/\/[^\/]*/,""):""};k.defer=function(a,b){var c;V++;c=n(function(){delete s[c];e(a)},b||0);s[c]=!0;return c};k.defer.cancel=function(a){return s[a]?(delete s[a],p(a),e(A),!0):!1}}function ef(){this.$get=["$window","$log","$sniffer","$document",function(a,b,d,c){return new $f(a,c,b,d)}]}function ff(){this.$get=
function(){function a(a,c){function e(a){a!=n&&(p?p==a&&(p=a.n):p=a,f(a.n,a.p),f(a,n),n=a,n.n=null)}function f(a,b){a!=b&&(a&&(a.p=b),b&&(b.n=a))}if(a in b)throw O("$cacheFactory")("iid",a);var g=0,h=R({},c,{id:a}),k=T(),l=c&&c.capacity||Number.MAX_VALUE,m=T(),n=null,p=null;return b[a]={put:function(a,b){if(!w(b)){if(l<Number.MAX_VALUE){var c=m[a]||(m[a]={key:a});e(c)}a in k||g++;k[a]=b;g>l&&this.remove(p.key);return b}},get:function(a){if(l<Number.MAX_VALUE){var b=m[a];if(!b)return;e(b)}return k[a]},
remove:function(a){if(l<Number.MAX_VALUE){var b=m[a];if(!b)return;b==n&&(n=b.p);b==p&&(p=b.n);f(b.n,b.p);delete m[a]}a in k&&(delete k[a],g--)},removeAll:function(){k=T();g=0;m=T();n=p=null},destroy:function(){m=h=k=null;delete b[a]},info:function(){return R({},h,{size:g})}}}var b={};a.info=function(){var a={};r(b,function(b,e){a[e]=b.info()});return a};a.get=function(a){return b[a]};return a}}function Bf(){this.$get=["$cacheFactory",function(a){return a("templates")}]}function Fc(a,b){function d(a,
b,c){var d=/^\s*([@&<]|=(\*?))(\??)\s*(\w*)\s*$/,e=T();r(a,function(a,f){if(a in n)e[f]=n[a];else{var g=a.match(d);if(!g)throw fa("iscp",b,f,a,c?"controller bindings definition":"isolate scope definition");e[f]={mode:g[1][0],collection:"*"===g[2],optional:"?"===g[3],attrName:g[4]||f};g[4]&&(n[a]=e[f])}});return e}function c(a){var b=a.charAt(0);if(!b||b!==M(b))throw fa("baddir",a);if(a!==a.trim())throw fa("baddir",a);}function e(a){var b=a.require||a.controller&&a.name;!J(b)&&H(b)&&r(b,function(a,
c){var d=a.match(l);a.substring(d[0].length)||(b[c]=d[0]+c)});return b}var f={},g=/^\s*directive\:\s*([\w\-]+)\s+(.*)$/,h=/(([\w\-]+)(?:\:([^;]+))?;?)/,k=ce("ngSrc,ngSrcset,src,srcset"),l=/^(?:(\^\^?)?(\?)?(\^\^?)?)?/,m=/^(on[a-z]+|formaction)$/,n=T();this.directive=function I(b,d){Ra(b,"directive");F(b)?(c(b),sb(d,"directiveFactory"),f.hasOwnProperty(b)||(f[b]=[],a.factory(b+"Directive",["$injector","$exceptionHandler",function(a,c){var d=[];r(f[b],function(f,g){try{var h=a.invoke(f);z(h)?h={compile:da(h)}:
!h.compile&&h.link&&(h.compile=da(h.link));h.priority=h.priority||0;h.index=g;h.name=h.name||b;h.require=e(h);h.restrict=h.restrict||"EA";h.$$moduleName=f.$$moduleName;d.push(h)}catch(k){c(k)}});return d}])),f[b].push(d)):r(b,uc(I));return this};this.component=function(a,b){function c(a){function e(b){return z(b)||J(b)?function(c,d){return a.invoke(b,this,{$element:c,$attrs:d})}:b}var f=b.template||b.templateUrl?b.template:"",g={controller:d,controllerAs:Xc(b.controller)||b.controllerAs||"$ctrl",
template:e(f),templateUrl:e(b.templateUrl),transclude:b.transclude,scope:{},bindToController:b.bindings||{},restrict:"E",require:b.require};r(b,function(a,b){"$"===b.charAt(0)&&(g[b]=a)});return g}var d=b.controller||function(){};r(b,function(a,b){"$"===b.charAt(0)&&(c[b]=a,z(d)&&(d[b]=a))});c.$inject=["$injector"];return this.directive(a,c)};this.aHrefSanitizationWhitelist=function(a){return x(a)?(b.aHrefSanitizationWhitelist(a),this):b.aHrefSanitizationWhitelist()};this.imgSrcSanitizationWhitelist=
function(a){return x(a)?(b.imgSrcSanitizationWhitelist(a),this):b.imgSrcSanitizationWhitelist()};var p=!0;this.debugInfoEnabled=function(a){return x(a)?(p=a,this):p};var s=10;this.onChangesTtl=function(a){return arguments.length?(s=a,this):s};this.$get=["$injector","$interpolate","$exceptionHandler","$templateRequest","$parse","$controller","$rootScope","$sce","$animate","$$sanitizeUri",function(a,b,c,e,n,y,P,L,C,D){function G(){try{if(!--oa)throw Z=void 0,fa("infchng",s);P.$apply(function(){for(var a=
[],b=0,c=Z.length;b<c;++b)try{Z[b]()}catch(d){a.push(d)}Z=void 0;if(a.length)throw a;})}finally{oa++}}function Aa(a,b){if(b){var c=Object.keys(b),d,e,f;d=0;for(e=c.length;d<e;d++)f=c[d],this[f]=b[f]}else this.$attr={};this.$$element=a}function Q(a,b,c){la.innerHTML="<span "+b+">";b=la.firstChild.attributes;var d=b[0];b.removeNamedItem(d.name);d.value=c;a.attributes.setNamedItem(d)}function N(a,b){try{a.addClass(b)}catch(c){}}function ba(a,b,c,d,e){a instanceof B||(a=B(a));for(var f=/\S+/,g=0,h=a.length;g<
h;g++){var k=a[g];k.nodeType===Na&&k.nodeValue.match(f)&&Pc(k,a[g]=E.document.createElement("span"))}var l=t(a,b,a,c,d,e);ba.$$addScopeClass(a);var n=null;return function(b,c,d){sb(b,"scope");e&&e.needsNewScope&&(b=b.$parent.$new());d=d||{};var f=d.parentBoundTranscludeFn,g=d.transcludeControllers;d=d.futureParentElement;f&&f.$$boundTransclude&&(f=f.$$boundTransclude);n||(n=(d=d&&d[0])?"foreignobject"!==ua(d)&&ka.call(d).match(/SVG/)?"svg":"html":"html");d="html"!==n?B(ca(n,B("<div>").append(a).html())):
c?Pa.clone.call(a):a;if(g)for(var h in g)d.data("$"+h+"Controller",g[h].instance);ba.$$addScopeInfo(d,b);c&&c(d,b);l&&l(b,d,d,f);return d}}function t(a,b,c,d,e,f){function g(a,c,d,e){var f,k,l,n,m,v,q;if(p)for(q=Array(c.length),n=0;n<h.length;n+=3)f=h[n],q[f]=c[f];else q=c;n=0;for(m=h.length;n<m;)k=q[h[n++]],c=h[n++],f=h[n++],c?(c.scope?(l=a.$new(),ba.$$addScopeInfo(B(k),l)):l=a,v=c.transcludeOnThisElement?wa(a,c.transclude,e):!c.templateOnThisElement&&e?e:!e&&b?wa(a,b):null,c(f,l,k,d,v)):f&&f(a,
k.childNodes,void 0,e)}for(var h=[],k,l,n,m,p,v=0;v<a.length;v++){k=new Aa;l=$b(a[v],[],k,0===v?d:void 0,e);(f=l.length?Ta(l,a[v],k,b,c,null,[],[],f):null)&&f.scope&&ba.$$addScopeClass(k.$$element);k=f&&f.terminal||!(n=a[v].childNodes)||!n.length?null:t(n,f?(f.transcludeOnThisElement||!f.templateOnThisElement)&&f.transclude:b);if(f||k)h.push(v,f,k),m=!0,p=p||f;f=null}return m?g:null}function wa(a,b,c){function d(e,f,g,h,k){e||(e=a.$new(!1,k),e.$$transcluded=!0);return b(e,f,{parentBoundTranscludeFn:c,
transcludeControllers:g,futureParentElement:h})}var e=d.$$slots=T(),f;for(f in b.$$slots)e[f]=b.$$slots[f]?wa(a,b.$$slots[f],c):null;return d}function $b(a,b,c,d,e){var f=c.$attr,k;switch(a.nodeType){case 1:Da(b,xa(ua(a)),"E",d,e);for(var l,n,m,p=a.attributes,v=0,q=p&&p.length;v<q;v++){var s=!1,L=!1;l=p[v];k=l.name;n=W(l.value);l=xa(k);if(m=ya.test(l))k=k.replace(Yc,"").substr(8).replace(/_(.)/g,function(a,b){return b.toUpperCase()});(l=l.match(za))&&S(l[1])&&(s=k,L=k.substr(0,k.length-5)+"end",k=
k.substr(0,k.length-6));l=xa(k.toLowerCase());f[l]=k;if(m||!c.hasOwnProperty(l))c[l]=n,Uc(a,l)&&(c[l]=!0);ia(a,b,n,l,m);Da(b,l,"A",d,e,s,L)}a=a.className;H(a)&&(a=a.animVal);if(F(a)&&""!==a)for(;k=h.exec(a);)l=xa(k[2]),Da(b,l,"C",d,e)&&(c[l]=W(k[3])),a=a.substr(k.index+k[0].length);break;case Na:if(11===Ba)for(;a.parentNode&&a.nextSibling&&a.nextSibling.nodeType===Na;)a.nodeValue+=a.nextSibling.nodeValue,a.parentNode.removeChild(a.nextSibling);aa(b,a.nodeValue);break;case 8:try{if(k=g.exec(a.nodeValue))l=
xa(k[1]),Da(b,l,"M",d,e)&&(c[l]=W(k[2]))}catch(C){}}b.sort(Y);return b}function Zc(a,b,c){var d=[],e=0;if(b&&a.hasAttribute&&a.hasAttribute(b)){do{if(!a)throw fa("uterdir",b,c);1==a.nodeType&&(a.hasAttribute(b)&&e++,a.hasAttribute(c)&&e--);d.push(a);a=a.nextSibling}while(0<e)}else d.push(a);return B(d)}function O(a,b,c){return function(d,e,f,g,h){e=Zc(e[0],b,c);return a(d,e,f,g,h)}}function ac(a,b,c,d,e,f){var g;return a?ba(b,c,d,e,f):function(){g||(g=ba(b,c,d,e,f),b=c=f=null);return g.apply(this,
arguments)}}function Ta(a,b,d,e,f,g,h,k,l){function n(a,b,c,d){if(a){c&&(a=O(a,c,d));a.require=u.require;a.directiveName=G;if(s===u||u.$$isolateScope)a=ga(a,{isolateScope:!0});h.push(a)}if(b){c&&(b=O(b,c,d));b.require=u.require;b.directiveName=G;if(s===u||u.$$isolateScope)b=ga(b,{isolateScope:!0});k.push(b)}}function m(a,e,f,g,l){function n(a,b,c,d){var e;Za(a)||(d=c,c=b,b=a,a=void 0);y&&(e=N);c||(c=y?G.parent():G);if(d){var f=l.$$slots[d];if(f)return f(a,b,e,c,t);if(w(f))throw fa("noslot",d,va(G));
}else return l(a,b,e,c,t)}var p,C,u,D,I,N,Q,G;b===f?(g=d,G=d.$$element):(G=B(f),g=new Aa(G,d));I=e;s?D=e.$new(!0):v&&(I=e.$parent);l&&(Q=n,Q.$$boundTransclude=l,Q.isSlotFilled=function(a){return!!l.$$slots[a]});q&&(N=ag(G,g,Q,q,D,e,s));s&&(ba.$$addScopeInfo(G,D,!0,!(L&&(L===s||L===s.$$originalDirective))),ba.$$addScopeClass(G,!0),D.$$isolateBindings=s.$$isolateBindings,C=ha(e,g,D,D.$$isolateBindings,s),C.removeWatches&&D.$on("$destroy",C.removeWatches));for(p in N){C=q[p];u=N[p];var Zb=C.$$bindings.bindToController;
u.bindingInfo=u.identifier&&Zb?ha(I,g,u.instance,Zb,C):{};var P=u();P!==u.instance&&(u.instance=P,G.data("$"+C.name+"Controller",P),u.bindingInfo.removeWatches&&u.bindingInfo.removeWatches(),u.bindingInfo=ha(I,g,u.instance,Zb,C))}r(q,function(a,b){var c=a.require;a.bindToController&&!J(c)&&H(c)&&R(N[b].instance,ib(b,c,G,N))});r(N,function(a){var b=a.instance;if(z(b.$onChanges))try{b.$onChanges(a.bindingInfo.initialChanges)}catch(d){c(d)}if(z(b.$onInit))try{b.$onInit()}catch(e){c(e)}z(b.$onDestroy)&&
I.$on("$destroy",function(){b.$onDestroy()})});p=0;for(C=h.length;p<C;p++)u=h[p],ja(u,u.isolateScope?D:e,G,g,u.require&&ib(u.directiveName,u.require,G,N),Q);var t=e;s&&(s.template||null===s.templateUrl)&&(t=D);a&&a(t,f.childNodes,void 0,l);for(p=k.length-1;0<=p;p--)u=k[p],ja(u,u.isolateScope?D:e,G,g,u.require&&ib(u.directiveName,u.require,G,N),Q);r(N,function(a){a=a.instance;z(a.$postLink)&&a.$postLink()})}l=l||{};for(var p=-Number.MAX_VALUE,v=l.newScopeDirective,q=l.controllerDirectives,s=l.newIsolateScopeDirective,
L=l.templateDirective,C=l.nonTlbTranscludeDirective,D=!1,I=!1,y=l.hasElementTranscludeDirective,N=d.$$element=B(b),u,G,Q,P=e,t,Ca=!1,wa=!1,x,A=0,E=a.length;A<E;A++){u=a[A];var F=u.$$start,Ta=u.$$end;F&&(N=Zc(b,F,Ta));Q=void 0;if(p>u.priority)break;if(x=u.scope)u.templateUrl||(H(x)?(X("new/isolated scope",s||v,u,N),s=u):X("new/isolated scope",s,u,N)),v=v||u;G=u.name;if(!Ca&&(u.replace&&(u.templateUrl||u.template)||u.transclude&&!u.$$tlb)){for(x=A+1;Ca=a[x++];)if(Ca.transclude&&!Ca.$$tlb||Ca.replace&&
(Ca.templateUrl||Ca.template)){wa=!0;break}Ca=!0}!u.templateUrl&&u.controller&&(x=u.controller,q=q||T(),X("'"+G+"' controller",q[G],u,N),q[G]=u);if(x=u.transclude)if(D=!0,u.$$tlb||(X("transclusion",C,u,N),C=u),"element"==x)y=!0,p=u.priority,Q=N,N=d.$$element=B(ba.$$createComment(G,d[G])),b=N[0],da(f,ta.call(Q,0),b),Q[0].$$parentNode=Q[0].parentNode,P=ac(wa,Q,e,p,g&&g.name,{nonTlbTranscludeDirective:C});else{var M=T();Q=B(Xb(b)).contents();if(H(x)){Q=[];var S=T(),Da=T();r(x,function(a,b){var c="?"===
a.charAt(0);a=c?a.substring(1):a;S[a]=b;M[b]=null;Da[b]=c});r(N.contents(),function(a){var b=S[xa(ua(a))];b?(Da[b]=!0,M[b]=M[b]||[],M[b].push(a)):Q.push(a)});r(Da,function(a,b){if(!a)throw fa("reqslot",b);});for(var Y in M)M[Y]&&(M[Y]=ac(wa,M[Y],e))}N.empty();P=ac(wa,Q,e,void 0,void 0,{needsNewScope:u.$$isolateScope||u.$$newScope});P.$$slots=M}if(u.template)if(I=!0,X("template",L,u,N),L=u,x=z(u.template)?u.template(N,d):u.template,x=ra(x),u.replace){g=u;Q=Vb.test(x)?$c(ca(u.templateNamespace,W(x))):
[];b=Q[0];if(1!=Q.length||1!==b.nodeType)throw fa("tplrt",G,"");da(f,N,b);E={$attr:{}};x=$b(b,[],E);var aa=a.splice(A+1,a.length-(A+1));(s||v)&&ad(x,s,v);a=a.concat(x).concat(aa);U(d,E);E=a.length}else N.html(x);if(u.templateUrl)I=!0,X("template",L,u,N),L=u,u.replace&&(g=u),m=$(a.splice(A,a.length-A),N,d,f,D&&P,h,k,{controllerDirectives:q,newScopeDirective:v!==u&&v,newIsolateScopeDirective:s,templateDirective:L,nonTlbTranscludeDirective:C}),E=a.length;else if(u.compile)try{t=u.compile(N,d,P);var Z=
u.$$originalDirective||u;z(t)?n(null,bb(Z,t),F,Ta):t&&n(bb(Z,t.pre),bb(Z,t.post),F,Ta)}catch(ea){c(ea,va(N))}u.terminal&&(m.terminal=!0,p=Math.max(p,u.priority))}m.scope=v&&!0===v.scope;m.transcludeOnThisElement=D;m.templateOnThisElement=I;m.transclude=P;l.hasElementTranscludeDirective=y;return m}function ib(a,b,c,d){var e;if(F(b)){var f=b.match(l);b=b.substring(f[0].length);var g=f[1]||f[3],f="?"===f[2];"^^"===g?c=c.parent():e=(e=d&&d[b])&&e.instance;if(!e){var h="$"+b+"Controller";e=g?c.inheritedData(h):
c.data(h)}if(!e&&!f)throw fa("ctreq",b,a);}else if(J(b))for(e=[],g=0,f=b.length;g<f;g++)e[g]=ib(a,b[g],c,d);else H(b)&&(e={},r(b,function(b,f){e[f]=ib(a,b,c,d)}));return e||null}function ag(a,b,c,d,e,f,g){var h=T(),k;for(k in d){var l=d[k],n={$scope:l===g||l.$$isolateScope?e:f,$element:a,$attrs:b,$transclude:c},m=l.controller;"@"==m&&(m=b[l.name]);n=y(m,n,!0,l.controllerAs);h[l.name]=n;a.data("$"+l.name+"Controller",n.instance)}return h}function ad(a,b,c){for(var d=0,e=a.length;d<e;d++)a[d]=Rb(a[d],
{$$isolateScope:b,$$newScope:c})}function Da(b,e,g,h,k,l,n){if(e===k)return null;k=null;if(f.hasOwnProperty(e)){var m;e=a.get(e+"Directive");for(var p=0,v=e.length;p<v;p++)try{if(m=e[p],(w(h)||h>m.priority)&&-1!=m.restrict.indexOf(g)){l&&(m=Rb(m,{$$start:l,$$end:n}));if(!m.$$bindings){var q=m,s=m,L=m.name,u={isolateScope:null,bindToController:null};H(s.scope)&&(!0===s.bindToController?(u.bindToController=d(s.scope,L,!0),u.isolateScope={}):u.isolateScope=d(s.scope,L,!1));H(s.bindToController)&&(u.bindToController=
d(s.bindToController,L,!0));if(H(u.bindToController)){var C=s.controller,D=s.controllerAs;if(!C)throw fa("noctrl",L);if(!Xc(C,D))throw fa("noident",L);}var N=q.$$bindings=u;H(N.isolateScope)&&(m.$$isolateBindings=N.isolateScope)}b.push(m);k=m}}catch(G){c(G)}}return k}function S(b){if(f.hasOwnProperty(b))for(var c=a.get(b+"Directive"),d=0,e=c.length;d<e;d++)if(b=c[d],b.multiElement)return!0;return!1}function U(a,b){var c=b.$attr,d=a.$attr;r(a,function(d,e){"$"!=e.charAt(0)&&(b[e]&&b[e]!==d&&(d+=("style"===
e?";":" ")+b[e]),a.$set(e,d,!0,c[e]))});r(b,function(b,e){a.hasOwnProperty(e)||"$"===e.charAt(0)||(a[e]=b,"class"!==e&&"style"!==e&&(d[e]=c[e]))})}function $(a,b,c,d,f,g,h,k){var l=[],n,m,p=b[0],s=a.shift(),q=Rb(s,{templateUrl:null,transclude:null,replace:null,$$originalDirective:s}),L=z(s.templateUrl)?s.templateUrl(b,c):s.templateUrl,u=s.templateNamespace;b.empty();e(L).then(function(e){var v,C;e=ra(e);if(s.replace){e=Vb.test(e)?$c(ca(u,W(e))):[];v=e[0];if(1!=e.length||1!==v.nodeType)throw fa("tplrt",
s.name,L);e={$attr:{}};da(d,b,v);var D=$b(v,[],e);H(s.scope)&&ad(D,!0);a=D.concat(a);U(c,e)}else v=p,b.html(e);a.unshift(q);n=Ta(a,v,c,f,b,s,g,h,k);r(d,function(a,c){a==v&&(d[c]=b[0])});for(m=t(b[0].childNodes,f);l.length;){e=l.shift();C=l.shift();var I=l.shift(),G=l.shift(),D=b[0];if(!e.$$destroyed){if(C!==p){var y=C.className;k.hasElementTranscludeDirective&&s.replace||(D=Xb(v));da(I,B(C),D);N(B(D),y)}C=n.transcludeOnThisElement?wa(e,n.transclude,G):G;n(m,e,D,d,C)}}l=null});return function(a,b,
c,d,e){a=e;b.$$destroyed||(l?l.push(b,c,d,a):(n.transcludeOnThisElement&&(a=wa(b,n.transclude,e)),n(m,b,c,d,a)))}}function Y(a,b){var c=b.priority-a.priority;return 0!==c?c:a.name!==b.name?a.name<b.name?-1:1:a.index-b.index}function X(a,b,c,d){function e(a){return a?" (module: "+a+")":""}if(b)throw fa("multidir",b.name,e(b.$$moduleName),c.name,e(c.$$moduleName),a,va(d));}function aa(a,c){var d=b(c,!0);d&&a.push({priority:0,compile:function(a){a=a.parent();var b=!!a.length;b&&ba.$$addBindingClass(a);
return function(a,c){var e=c.parent();b||ba.$$addBindingClass(e);ba.$$addBindingInfo(e,d.expressions);a.$watch(d,function(a){c[0].nodeValue=a})}}})}function ca(a,b){a=M(a||"html");switch(a){case "svg":case "math":var c=E.document.createElement("div");c.innerHTML="<"+a+">"+b+"</"+a+">";return c.childNodes[0].childNodes;default:return b}}function ea(a,b){if("srcdoc"==b)return L.HTML;var c=ua(a);if("xlinkHref"==b||"form"==c&&"action"==b||"img"!=c&&("src"==b||"ngSrc"==b))return L.RESOURCE_URL}function ia(a,
c,d,e,f){var g=ea(a,e);f=k[e]||f;var h=b(d,!0,g,f);if(h){if("multiple"===e&&"select"===ua(a))throw fa("selmulti",va(a));c.push({priority:100,compile:function(){return{pre:function(a,c,k){c=k.$$observers||(k.$$observers=T());if(m.test(e))throw fa("nodomevents");var l=k[e];l!==d&&(h=l&&b(l,!0,g,f),d=l);h&&(k[e]=h(a),(c[e]||(c[e]=[])).$$inter=!0,(k.$$observers&&k.$$observers[e].$$scope||a).$watch(h,function(a,b){"class"===e&&a!=b?k.$updateClass(a,b):k.$set(e,a)}))}}}})}}function da(a,b,c){var d=b[0],
e=b.length,f=d.parentNode,g,h;if(a)for(g=0,h=a.length;g<h;g++)if(a[g]==d){a[g++]=c;h=g+e-1;for(var k=a.length;g<k;g++,h++)h<k?a[g]=a[h]:delete a[g];a.length-=e-1;a.context===d&&(a.context=c);break}f&&f.replaceChild(c,d);a=E.document.createDocumentFragment();for(g=0;g<e;g++)a.appendChild(b[g]);B.hasData(d)&&(B.data(c,B.data(d)),B(d).off("$destroy"));B.cleanData(a.querySelectorAll("*"));for(g=1;g<e;g++)delete b[g];b[0]=c;b.length=1}function ga(a,b){return R(function(){return a.apply(null,arguments)},
a,b)}function ja(a,b,d,e,f,g){try{a(b,d,e,f,g)}catch(h){c(h,va(d))}}function ha(a,c,d,e,f){function g(b,c,e){z(d.$onChanges)&&c!==e&&(Z||(a.$$postDigest(G),Z=[]),m||(m={},Z.push(h)),m[b]&&(e=m[b].previousValue),m[b]=new Fb(e,c))}function h(){d.$onChanges(m);m=void 0}var k=[],l={},m;r(e,function(e,h){var m=e.attrName,p=e.optional,v,s,L,C;switch(e.mode){case "@":p||sa.call(c,m)||(d[h]=c[m]=void 0);c.$observe(m,function(a){if(F(a)||Ea(a))g(h,a,d[h]),d[h]=a});c.$$observers[m].$$scope=a;v=c[m];F(v)?d[h]=
b(v)(a):Ea(v)&&(d[h]=v);l[h]=new Fb(bc,d[h]);break;case "=":if(!sa.call(c,m)){if(p)break;c[m]=void 0}if(p&&!c[m])break;s=n(c[m]);C=s.literal?na:function(a,b){return a===b||a!==a&&b!==b};L=s.assign||function(){v=d[h]=s(a);throw fa("nonassign",c[m],m,f.name);};v=d[h]=s(a);p=function(b){C(b,d[h])||(C(b,v)?L(a,b=d[h]):d[h]=b);return v=b};p.$stateful=!0;p=e.collection?a.$watchCollection(c[m],p):a.$watch(n(c[m],p),null,s.literal);k.push(p);break;case "<":if(!sa.call(c,m)){if(p)break;c[m]=void 0}if(p&&!c[m])break;
s=n(c[m]);var D=d[h]=s(a);l[h]=new Fb(bc,d[h]);p=a.$watch(s,function(a,b){if(b===a){if(b===D)return;b=D}g(h,a,b);d[h]=a},s.literal);k.push(p);break;case "&":s=c.hasOwnProperty(m)?n(c[m]):A;if(s===A&&p)break;d[h]=function(b){return s(a,b)}}});return{initialChanges:l,removeWatches:k.length&&function(){for(var a=0,b=k.length;a<b;++a)k[a]()}}}var ma=/^\w/,la=E.document.createElement("div"),oa=s,Z;Aa.prototype={$normalize:xa,$addClass:function(a){a&&0<a.length&&C.addClass(this.$$element,a)},$removeClass:function(a){a&&
0<a.length&&C.removeClass(this.$$element,a)},$updateClass:function(a,b){var c=bd(a,b);c&&c.length&&C.addClass(this.$$element,c);(c=bd(b,a))&&c.length&&C.removeClass(this.$$element,c)},$set:function(a,b,d,e){var f=Uc(this.$$element[0],a),g=cd[a],h=a;f?(this.$$element.prop(a,b),e=f):g&&(this[g]=b,h=g);this[a]=b;e?this.$attr[a]=e:(e=this.$attr[a])||(this.$attr[a]=e=Cc(a,"-"));f=ua(this.$$element);if("a"===f&&("href"===a||"xlinkHref"===a)||"img"===f&&"src"===a)this[a]=b=D(b,"src"===a);else if("img"===
f&&"srcset"===a&&x(b)){for(var f="",g=W(b),k=/(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/,k=/\s/.test(g)?k:/(,)/,g=g.split(k),k=Math.floor(g.length/2),l=0;l<k;l++)var n=2*l,f=f+D(W(g[n]),!0),f=f+(" "+W(g[n+1]));g=W(g[2*l]).split(/\s/);f+=D(W(g[0]),!0);2===g.length&&(f+=" "+W(g[1]));this[a]=b=f}!1!==d&&(null===b||w(b)?this.$$element.removeAttr(e):ma.test(e)?this.$$element.attr(e,b):Q(this.$$element[0],e,b));(a=this.$$observers)&&r(a[h],function(a){try{a(b)}catch(d){c(d)}})},$observe:function(a,b){var c=this,
d=c.$$observers||(c.$$observers=T()),e=d[a]||(d[a]=[]);e.push(b);P.$evalAsync(function(){e.$$inter||!c.hasOwnProperty(a)||w(c[a])||b(c[a])});return function(){$a(e,b)}}};var pa=b.startSymbol(),qa=b.endSymbol(),ra="{{"==pa&&"}}"==qa?Ya:function(a){return a.replace(/\{\{/g,pa).replace(/}}/g,qa)},ya=/^ngAttr[A-Z]/,za=/^(.+)Start$/;ba.$$addBindingInfo=p?function(a,b){var c=a.data("$binding")||[];J(b)?c=c.concat(b):c.push(b);a.data("$binding",c)}:A;ba.$$addBindingClass=p?function(a){N(a,"ng-binding")}:
A;ba.$$addScopeInfo=p?function(a,b,c,d){a.data(c?d?"$isolateScopeNoTemplate":"$isolateScope":"$scope",b)}:A;ba.$$addScopeClass=p?function(a,b){N(a,b?"ng-isolate-scope":"ng-scope")}:A;ba.$$createComment=function(a,b){var c="";p&&(c=" "+(a||"")+": ",b&&(c+=b+" "));return E.document.createComment(c)};return ba}]}function Fb(a,b){this.previousValue=a;this.currentValue=b}function xa(a){return eb(a.replace(Yc,""))}function bd(a,b){var d="",c=a.split(/\s+/),e=b.split(/\s+/),f=0;a:for(;f<c.length;f++){for(var g=
c[f],h=0;h<e.length;h++)if(g==e[h])continue a;d+=(0<d.length?" ":"")+g}return d}function $c(a){a=B(a);var b=a.length;if(1>=b)return a;for(;b--;)8===a[b].nodeType&&bg.call(a,b,1);return a}function Xc(a,b){if(b&&F(b))return b;if(F(a)){var d=dd.exec(a);if(d)return d[3]}}function gf(){var a={},b=!1;this.has=function(b){return a.hasOwnProperty(b)};this.register=function(b,c){Ra(b,"controller");H(b)?R(a,b):a[b]=c};this.allowGlobals=function(){b=!0};this.$get=["$injector","$window",function(d,c){function e(a,
b,c,d){if(!a||!H(a.$scope))throw O("$controller")("noscp",d,b);a.$scope[b]=c}return function(f,g,h,k){var l,m,n;h=!0===h;k&&F(k)&&(n=k);if(F(f)){k=f.match(dd);if(!k)throw cg("ctrlfmt",f);m=k[1];n=n||k[3];f=a.hasOwnProperty(m)?a[m]:Ec(g.$scope,m,!0)||(b?Ec(c,m,!0):void 0);Qa(f,m,!0)}if(h)return h=(J(f)?f[f.length-1]:f).prototype,l=Object.create(h||null),n&&e(g,n,l,m||f.name),R(function(){var a=d.invoke(f,l,g,m);a!==l&&(H(a)||z(a))&&(l=a,n&&e(g,n,l,m||f.name));return l},{instance:l,identifier:n});l=
d.instantiate(f,g,m);n&&e(g,n,l,m||f.name);return l}}]}function hf(){this.$get=["$window",function(a){return B(a.document)}]}function jf(){this.$get=["$log",function(a){return function(b,d){a.error.apply(a,arguments)}}]}function cc(a){return H(a)?ia(a)?a.toISOString():cb(a):a}function of(){this.$get=function(){return function(a){if(!a)return"";var b=[];tc(a,function(a,c){null===a||w(a)||(J(a)?r(a,function(a){b.push(ja(c)+"="+ja(cc(a)))}):b.push(ja(c)+"="+ja(cc(a))))});return b.join("&")}}}function pf(){this.$get=
function(){return function(a){function b(a,e,f){null===a||w(a)||(J(a)?r(a,function(a,c){b(a,e+"["+(H(a)?c:"")+"]")}):H(a)&&!ia(a)?tc(a,function(a,c){b(a,e+(f?"":"[")+c+(f?"":"]"))}):d.push(ja(e)+"="+ja(cc(a))))}if(!a)return"";var d=[];b(a,"",!0);return d.join("&")}}}function dc(a,b){if(F(a)){var d=a.replace(dg,"").trim();if(d){var c=b("Content-Type");(c=c&&0===c.indexOf(ed))||(c=(c=d.match(eg))&&fg[c[0]].test(d));c&&(a=xc(d))}}return a}function fd(a){var b=T(),d;F(a)?r(a.split("\n"),function(a){d=
a.indexOf(":");var e=M(W(a.substr(0,d)));a=W(a.substr(d+1));e&&(b[e]=b[e]?b[e]+", "+a:a)}):H(a)&&r(a,function(a,d){var f=M(d),g=W(a);f&&(b[f]=b[f]?b[f]+", "+g:g)});return b}function gd(a){var b;return function(d){b||(b=fd(a));return d?(d=b[M(d)],void 0===d&&(d=null),d):b}}function hd(a,b,d,c){if(z(c))return c(a,b,d);r(c,function(c){a=c(a,b,d)});return a}function nf(){var a=this.defaults={transformResponse:[dc],transformRequest:[function(a){return H(a)&&"[object File]"!==ka.call(a)&&"[object Blob]"!==
ka.call(a)&&"[object FormData]"!==ka.call(a)?cb(a):a}],headers:{common:{Accept:"application/json, text/plain, */*"},post:ga(ec),put:ga(ec),patch:ga(ec)},xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",paramSerializer:"$httpParamSerializer"},b=!1;this.useApplyAsync=function(a){return x(a)?(b=!!a,this):b};var d=!0;this.useLegacyPromiseExtensions=function(a){return x(a)?(d=!!a,this):d};var c=this.interceptors=[];this.$get=["$httpBackend","$$cookieReader","$cacheFactory","$rootScope","$q","$injector",
function(e,f,g,h,k,l){function m(b){function c(a){var b=R({},a);b.data=hd(a.data,a.headers,a.status,f.transformResponse);a=a.status;return 200<=a&&300>a?b:k.reject(b)}function e(a,b){var c,d={};r(a,function(a,e){z(a)?(c=a(b),null!=c&&(d[e]=c)):d[e]=a});return d}if(!H(b))throw O("$http")("badreq",b);if(!F(b.url))throw O("$http")("badreq",b.url);var f=R({method:"get",transformRequest:a.transformRequest,transformResponse:a.transformResponse,paramSerializer:a.paramSerializer},b);f.headers=function(b){var c=
a.headers,d=R({},b.headers),f,g,h,c=R({},c.common,c[M(b.method)]);a:for(f in c){g=M(f);for(h in d)if(M(h)===g)continue a;d[f]=c[f]}return e(d,ga(b))}(b);f.method=ub(f.method);f.paramSerializer=F(f.paramSerializer)?l.get(f.paramSerializer):f.paramSerializer;var g=[function(b){var d=b.headers,e=hd(b.data,gd(d),void 0,b.transformRequest);w(e)&&r(d,function(a,b){"content-type"===M(b)&&delete d[b]});w(b.withCredentials)&&!w(a.withCredentials)&&(b.withCredentials=a.withCredentials);return n(b,e).then(c,
c)},void 0],h=k.when(f);for(r(V,function(a){(a.request||a.requestError)&&g.unshift(a.request,a.requestError);(a.response||a.responseError)&&g.push(a.response,a.responseError)});g.length;){b=g.shift();var m=g.shift(),h=h.then(b,m)}d?(h.success=function(a){Qa(a,"fn");h.then(function(b){a(b.data,b.status,b.headers,f)});return h},h.error=function(a){Qa(a,"fn");h.then(null,function(b){a(b.data,b.status,b.headers,f)});return h}):(h.success=id("success"),h.error=id("error"));return h}function n(c,d){function g(a){if(a){var c=
{};r(a,function(a,d){c[d]=function(c){function d(){a(c)}b?h.$applyAsync(d):h.$$phase?d():h.$apply(d)}});return c}}function l(a,c,d,e){function f(){n(c,a,d,e)}D&&(200<=a&&300>a?D.put(Q,[a,c,fd(d),e]):D.remove(Q));b?h.$applyAsync(f):(f(),h.$$phase||h.$apply())}function n(a,b,d,e){b=-1<=b?b:0;(200<=b&&300>b?L.resolve:L.reject)({data:a,status:b,headers:gd(d),config:c,statusText:e})}function y(a){n(a.data,a.status,ga(a.headers()),a.statusText)}function V(){var a=m.pendingRequests.indexOf(c);-1!==a&&m.pendingRequests.splice(a,
1)}var L=k.defer(),C=L.promise,D,G,Aa=c.headers,Q=p(c.url,c.paramSerializer(c.params));m.pendingRequests.push(c);C.then(V,V);!c.cache&&!a.cache||!1===c.cache||"GET"!==c.method&&"JSONP"!==c.method||(D=H(c.cache)?c.cache:H(a.cache)?a.cache:s);D&&(G=D.get(Q),x(G)?G&&z(G.then)?G.then(y,y):J(G)?n(G[1],G[0],ga(G[2]),G[3]):n(G,200,{},"OK"):D.put(Q,C));w(G)&&((G=jd(c.url)?f()[c.xsrfCookieName||a.xsrfCookieName]:void 0)&&(Aa[c.xsrfHeaderName||a.xsrfHeaderName]=G),e(c.method,Q,d,l,Aa,c.timeout,c.withCredentials,
c.responseType,g(c.eventHandlers),g(c.uploadEventHandlers)));return C}function p(a,b){0<b.length&&(a+=(-1==a.indexOf("?")?"?":"&")+b);return a}var s=g("$http");a.paramSerializer=F(a.paramSerializer)?l.get(a.paramSerializer):a.paramSerializer;var V=[];r(c,function(a){V.unshift(F(a)?l.get(a):l.invoke(a))});m.pendingRequests=[];(function(a){r(arguments,function(a){m[a]=function(b,c){return m(R({},c||{},{method:a,url:b}))}})})("get","delete","head","jsonp");(function(a){r(arguments,function(a){m[a]=function(b,
c,d){return m(R({},d||{},{method:a,url:b,data:c}))}})})("post","put","patch");m.defaults=a;return m}]}function rf(){this.$get=function(){return function(){return new E.XMLHttpRequest}}}function qf(){this.$get=["$browser","$window","$document","$xhrFactory",function(a,b,d,c){return gg(a,c,a.defer,b.angular.callbacks,d[0])}]}function gg(a,b,d,c,e){function f(a,b,d){var f=e.createElement("script"),m=null;f.type="text/javascript";f.src=a;f.async=!0;m=function(a){f.removeEventListener("load",m,!1);f.removeEventListener("error",
m,!1);e.body.removeChild(f);f=null;var g=-1,s="unknown";a&&("load"!==a.type||c[b].called||(a={type:"error"}),s=a.type,g="error"===a.type?404:200);d&&d(g,s)};f.addEventListener("load",m,!1);f.addEventListener("error",m,!1);e.body.appendChild(f);return m}return function(e,h,k,l,m,n,p,s,V,I){function q(){u&&u();y&&y.abort()}function K(b,c,e,f,g){x(L)&&d.cancel(L);u=y=null;b(c,e,f,g);a.$$completeOutstandingRequest(A)}a.$$incOutstandingRequestCount();h=h||a.url();if("jsonp"==M(e)){var v="_"+(c.counter++).toString(36);
c[v]=function(a){c[v].data=a;c[v].called=!0};var u=f(h.replace("JSON_CALLBACK","angular.callbacks."+v),v,function(a,b){K(l,a,c[v].data,"",b);c[v]=A})}else{var y=b(e,h);y.open(e,h,!0);r(m,function(a,b){x(a)&&y.setRequestHeader(b,a)});y.onload=function(){var a=y.statusText||"",b="response"in y?y.response:y.responseText,c=1223===y.status?204:y.status;0===c&&(c=b?200:"file"==qa(h).protocol?404:0);K(l,c,b,y.getAllResponseHeaders(),a)};e=function(){K(l,-1,null,null,"")};y.onerror=e;y.onabort=e;r(V,function(a,
b){y.addEventListener(b,a)});r(I,function(a,b){y.upload.addEventListener(b,a)});p&&(y.withCredentials=!0);if(s)try{y.responseType=s}catch(P){if("json"!==s)throw P;}y.send(w(k)?null:k)}if(0<n)var L=d(q,n);else n&&z(n.then)&&n.then(q)}}function lf(){var a="{{",b="}}";this.startSymbol=function(b){return b?(a=b,this):a};this.endSymbol=function(a){return a?(b=a,this):b};this.$get=["$parse","$exceptionHandler","$sce",function(d,c,e){function f(a){return"\\\\\\"+a}function g(c){return c.replace(n,a).replace(p,
b)}function h(a,b,c,d){var e;return e=a.$watch(function(a){e();return d(a)},b,c)}function k(f,k,n,p){function r(a){try{var b=a;a=n?e.getTrusted(n,b):e.valueOf(b);var d;if(p&&!x(a))d=a;else if(null==a)d="";else{switch(typeof a){case "string":break;case "number":a=""+a;break;default:a=cb(a)}d=a}return d}catch(g){c(Ka.interr(f,g))}}if(!f.length||-1===f.indexOf(a)){var v;k||(k=g(f),v=da(k),v.exp=f,v.expressions=[],v.$$watchDelegate=h);return v}p=!!p;var u,y,P=0,L=[],C=[];v=f.length;for(var D=[],G=[];P<
v;)if(-1!=(u=f.indexOf(a,P))&&-1!=(y=f.indexOf(b,u+l)))P!==u&&D.push(g(f.substring(P,u))),P=f.substring(u+l,y),L.push(P),C.push(d(P,r)),P=y+m,G.push(D.length),D.push("");else{P!==v&&D.push(g(f.substring(P)));break}n&&1<D.length&&Ka.throwNoconcat(f);if(!k||L.length){var Aa=function(a){for(var b=0,c=L.length;b<c;b++){if(p&&w(a[b]))return;D[G[b]]=a[b]}return D.join("")};return R(function(a){var b=0,d=L.length,e=Array(d);try{for(;b<d;b++)e[b]=C[b](a);return Aa(e)}catch(g){c(Ka.interr(f,g))}},{exp:f,expressions:L,
$$watchDelegate:function(a,b){var c;return a.$watchGroup(C,function(d,e){var f=Aa(d);z(b)&&b.call(this,f,d!==e?c:f,a);c=f})}})}}var l=a.length,m=b.length,n=new RegExp(a.replace(/./g,f),"g"),p=new RegExp(b.replace(/./g,f),"g");k.startSymbol=function(){return a};k.endSymbol=function(){return b};return k}]}function mf(){this.$get=["$rootScope","$window","$q","$$q","$browser",function(a,b,d,c,e){function f(f,k,l,m){function n(){p?f.apply(null,s):f(q)}var p=4<arguments.length,s=p?ta.call(arguments,4):
[],r=b.setInterval,I=b.clearInterval,q=0,K=x(m)&&!m,v=(K?c:d).defer(),u=v.promise;l=x(l)?l:0;u.$$intervalId=r(function(){K?e.defer(n):a.$evalAsync(n);v.notify(q++);0<l&&q>=l&&(v.resolve(q),I(u.$$intervalId),delete g[u.$$intervalId]);K||a.$apply()},k);g[u.$$intervalId]=v;return u}var g={};f.cancel=function(a){return a&&a.$$intervalId in g?(g[a.$$intervalId].reject("canceled"),b.clearInterval(a.$$intervalId),delete g[a.$$intervalId],!0):!1};return f}]}function fc(a){a=a.split("/");for(var b=a.length;b--;)a[b]=
qb(a[b]);return a.join("/")}function kd(a,b){var d=qa(a);b.$$protocol=d.protocol;b.$$host=d.hostname;b.$$port=aa(d.port)||hg[d.protocol]||null}function ld(a,b){var d="/"!==a.charAt(0);d&&(a="/"+a);var c=qa(a);b.$$path=decodeURIComponent(d&&"/"===c.pathname.charAt(0)?c.pathname.substring(1):c.pathname);b.$$search=Ac(c.search);b.$$hash=decodeURIComponent(c.hash);b.$$path&&"/"!=b.$$path.charAt(0)&&(b.$$path="/"+b.$$path)}function la(a,b){if(0===b.lastIndexOf(a,0))return b.substr(a.length)}function Ja(a){var b=
a.indexOf("#");return-1==b?a:a.substr(0,b)}function jb(a){return a.replace(/(#.+)|#$/,"$1")}function gc(a,b,d){this.$$html5=!0;d=d||"";kd(a,this);this.$$parse=function(a){var d=la(b,a);if(!F(d))throw Gb("ipthprfx",a,b);ld(d,this);this.$$path||(this.$$path="/");this.$$compose()};this.$$compose=function(){var a=Tb(this.$$search),d=this.$$hash?"#"+qb(this.$$hash):"";this.$$url=fc(this.$$path)+(a?"?"+a:"")+d;this.$$absUrl=b+this.$$url.substr(1)};this.$$parseLinkUrl=function(c,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),
!0;var f,g;x(f=la(a,c))?(g=f,g=x(f=la(d,f))?b+(la("/",f)||f):a+g):x(f=la(b,c))?g=b+f:b==c+"/"&&(g=b);g&&this.$$parse(g);return!!g}}function hc(a,b,d){kd(a,this);this.$$parse=function(c){var e=la(a,c)||la(b,c),f;w(e)||"#"!==e.charAt(0)?this.$$html5?f=e:(f="",w(e)&&(a=c,this.replace())):(f=la(d,e),w(f)&&(f=e));ld(f,this);c=this.$$path;var e=a,g=/^\/[A-Z]:(\/.*)/;0===f.lastIndexOf(e,0)&&(f=f.replace(e,""));g.exec(f)||(c=(f=g.exec(c))?f[1]:c);this.$$path=c;this.$$compose()};this.$$compose=function(){var b=
Tb(this.$$search),e=this.$$hash?"#"+qb(this.$$hash):"";this.$$url=fc(this.$$path)+(b?"?"+b:"")+e;this.$$absUrl=a+(this.$$url?d+this.$$url:"")};this.$$parseLinkUrl=function(b,d){return Ja(a)==Ja(b)?(this.$$parse(b),!0):!1}}function md(a,b,d){this.$$html5=!0;hc.apply(this,arguments);this.$$parseLinkUrl=function(c,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,g;a==Ja(c)?f=c:(g=la(b,c))?f=a+d+g:b===c+"/"&&(f=b);f&&this.$$parse(f);return!!f};this.$$compose=function(){var b=Tb(this.$$search),
e=this.$$hash?"#"+qb(this.$$hash):"";this.$$url=fc(this.$$path)+(b?"?"+b:"")+e;this.$$absUrl=a+d+this.$$url}}function Hb(a){return function(){return this[a]}}function nd(a,b){return function(d){if(w(d))return this[a];this[a]=b(d);this.$$compose();return this}}function sf(){var a="",b={enabled:!1,requireBase:!0,rewriteLinks:!0};this.hashPrefix=function(b){return x(b)?(a=b,this):a};this.html5Mode=function(a){return Ea(a)?(b.enabled=a,this):H(a)?(Ea(a.enabled)&&(b.enabled=a.enabled),Ea(a.requireBase)&&
(b.requireBase=a.requireBase),Ea(a.rewriteLinks)&&(b.rewriteLinks=a.rewriteLinks),this):b};this.$get=["$rootScope","$browser","$sniffer","$rootElement","$window",function(d,c,e,f,g){function h(a,b,d){var e=l.url(),f=l.$$state;try{c.url(a,b,d),l.$$state=c.state()}catch(g){throw l.url(e),l.$$state=f,g;}}function k(a,b){d.$broadcast("$locationChangeSuccess",l.absUrl(),a,l.$$state,b)}var l,m;m=c.baseHref();var n=c.url(),p;if(b.enabled){if(!m&&b.requireBase)throw Gb("nobase");p=n.substring(0,n.indexOf("/",
n.indexOf("//")+2))+(m||"/");m=e.history?gc:md}else p=Ja(n),m=hc;var s=p.substr(0,Ja(p).lastIndexOf("/")+1);l=new m(p,s,"#"+a);l.$$parseLinkUrl(n,n);l.$$state=c.state();var r=/^\s*(javascript|mailto):/i;f.on("click",function(a){if(b.rewriteLinks&&!a.ctrlKey&&!a.metaKey&&!a.shiftKey&&2!=a.which&&2!=a.button){for(var e=B(a.target);"a"!==ua(e[0]);)if(e[0]===f[0]||!(e=e.parent())[0])return;var h=e.prop("href"),k=e.attr("href")||e.attr("xlink:href");H(h)&&"[object SVGAnimatedString]"===h.toString()&&(h=
qa(h.animVal).href);r.test(h)||!h||e.attr("target")||a.isDefaultPrevented()||!l.$$parseLinkUrl(h,k)||(a.preventDefault(),l.absUrl()!=c.url()&&(d.$apply(),g.angular["ff-684208-preventDefault"]=!0))}});jb(l.absUrl())!=jb(n)&&c.url(l.absUrl(),!0);var I=!0;c.onUrlChange(function(a,b){w(la(s,a))?g.location.href=a:(d.$evalAsync(function(){var c=l.absUrl(),e=l.$$state,f;a=jb(a);l.$$parse(a);l.$$state=b;f=d.$broadcast("$locationChangeStart",a,c,b,e).defaultPrevented;l.absUrl()===a&&(f?(l.$$parse(c),l.$$state=
e,h(c,!1,e)):(I=!1,k(c,e)))}),d.$$phase||d.$digest())});d.$watch(function(){var a=jb(c.url()),b=jb(l.absUrl()),f=c.state(),g=l.$$replace,n=a!==b||l.$$html5&&e.history&&f!==l.$$state;if(I||n)I=!1,d.$evalAsync(function(){var b=l.absUrl(),c=d.$broadcast("$locationChangeStart",b,a,l.$$state,f).defaultPrevented;l.absUrl()===b&&(c?(l.$$parse(a),l.$$state=f):(n&&h(b,g,f===l.$$state?null:l.$$state),k(a,f)))});l.$$replace=!1});return l}]}function tf(){var a=!0,b=this;this.debugEnabled=function(b){return x(b)?
(a=b,this):a};this.$get=["$window",function(d){function c(a){a instanceof Error&&(a.stack?a=a.message&&-1===a.stack.indexOf(a.message)?"Error: "+a.message+"\n"+a.stack:a.stack:a.sourceURL&&(a=a.message+"\n"+a.sourceURL+":"+a.line));return a}function e(a){var b=d.console||{},e=b[a]||b.log||A;a=!1;try{a=!!e.apply}catch(k){}return a?function(){var a=[];r(arguments,function(b){a.push(c(b))});return e.apply(b,a)}:function(a,b){e(a,null==b?"":b)}}return{log:e("log"),info:e("info"),warn:e("warn"),error:e("error"),
debug:function(){var c=e("debug");return function(){a&&c.apply(b,arguments)}}()}}]}function Ua(a,b){if("__defineGetter__"===a||"__defineSetter__"===a||"__lookupGetter__"===a||"__lookupSetter__"===a||"__proto__"===a)throw ca("isecfld",b);return a}function ig(a){return a+""}function ra(a,b){if(a){if(a.constructor===a)throw ca("isecfn",b);if(a.window===a)throw ca("isecwindow",b);if(a.children&&(a.nodeName||a.prop&&a.attr&&a.find))throw ca("isecdom",b);if(a===Object)throw ca("isecobj",b);}return a}function od(a,
b){if(a){if(a.constructor===a)throw ca("isecfn",b);if(a===jg||a===kg||a===lg)throw ca("isecff",b);}}function Ib(a,b){if(a&&(a===(0).constructor||a===(!1).constructor||a==="".constructor||a==={}.constructor||a===[].constructor||a===Function.constructor))throw ca("isecaf",b);}function mg(a,b){return"undefined"!==typeof a?a:b}function pd(a,b){return"undefined"===typeof a?b:"undefined"===typeof b?a:a+b}function $(a,b){var d,c;switch(a.type){case t.Program:d=!0;r(a.body,function(a){$(a.expression,b);d=
d&&a.expression.constant});a.constant=d;break;case t.Literal:a.constant=!0;a.toWatch=[];break;case t.UnaryExpression:$(a.argument,b);a.constant=a.argument.constant;a.toWatch=a.argument.toWatch;break;case t.BinaryExpression:$(a.left,b);$(a.right,b);a.constant=a.left.constant&&a.right.constant;a.toWatch=a.left.toWatch.concat(a.right.toWatch);break;case t.LogicalExpression:$(a.left,b);$(a.right,b);a.constant=a.left.constant&&a.right.constant;a.toWatch=a.constant?[]:[a];break;case t.ConditionalExpression:$(a.test,
b);$(a.alternate,b);$(a.consequent,b);a.constant=a.test.constant&&a.alternate.constant&&a.consequent.constant;a.toWatch=a.constant?[]:[a];break;case t.Identifier:a.constant=!1;a.toWatch=[a];break;case t.MemberExpression:$(a.object,b);a.computed&&$(a.property,b);a.constant=a.object.constant&&(!a.computed||a.property.constant);a.toWatch=[a];break;case t.CallExpression:d=a.filter?!b(a.callee.name).$stateful:!1;c=[];r(a.arguments,function(a){$(a,b);d=d&&a.constant;a.constant||c.push.apply(c,a.toWatch)});
a.constant=d;a.toWatch=a.filter&&!b(a.callee.name).$stateful?c:[a];break;case t.AssignmentExpression:$(a.left,b);$(a.right,b);a.constant=a.left.constant&&a.right.constant;a.toWatch=[a];break;case t.ArrayExpression:d=!0;c=[];r(a.elements,function(a){$(a,b);d=d&&a.constant;a.constant||c.push.apply(c,a.toWatch)});a.constant=d;a.toWatch=c;break;case t.ObjectExpression:d=!0;c=[];r(a.properties,function(a){$(a.value,b);d=d&&a.value.constant&&!a.computed;a.value.constant||c.push.apply(c,a.value.toWatch)});
a.constant=d;a.toWatch=c;break;case t.ThisExpression:a.constant=!1;a.toWatch=[];break;case t.LocalsExpression:a.constant=!1,a.toWatch=[]}}function qd(a){if(1==a.length){a=a[0].expression;var b=a.toWatch;return 1!==b.length?b:b[0]!==a?b:void 0}}function rd(a){return a.type===t.Identifier||a.type===t.MemberExpression}function sd(a){if(1===a.body.length&&rd(a.body[0].expression))return{type:t.AssignmentExpression,left:a.body[0].expression,right:{type:t.NGValueParameter},operator:"="}}function td(a){return 0===
a.body.length||1===a.body.length&&(a.body[0].expression.type===t.Literal||a.body[0].expression.type===t.ArrayExpression||a.body[0].expression.type===t.ObjectExpression)}function ud(a,b){this.astBuilder=a;this.$filter=b}function vd(a,b){this.astBuilder=a;this.$filter=b}function Jb(a){return"constructor"==a}function ic(a){return z(a.valueOf)?a.valueOf():ng.call(a)}function uf(){var a=T(),b=T(),d={"true":!0,"false":!1,"null":null,undefined:void 0},c,e;this.addLiteral=function(a,b){d[a]=b};this.setIdentifierFns=
function(a,b){c=a;e=b;return this};this.$get=["$filter",function(f){function g(c,d,e){var g,k,C;e=e||K;switch(typeof c){case "string":C=c=c.trim();var D=e?b:a;g=D[C];if(!g){":"===c.charAt(0)&&":"===c.charAt(1)&&(k=!0,c=c.substring(2));g=e?q:I;var G=new jc(g);g=(new kc(G,f,g)).parse(c);g.constant?g.$$watchDelegate=p:k?g.$$watchDelegate=g.literal?n:m:g.inputs&&(g.$$watchDelegate=l);e&&(g=h(g));D[C]=g}return s(g,d);case "function":return s(c,d);default:return s(A,d)}}function h(a){function b(c,d,e,f){var g=
K;K=!0;try{return a(c,d,e,f)}finally{K=g}}if(!a)return a;b.$$watchDelegate=a.$$watchDelegate;b.assign=h(a.assign);b.constant=a.constant;b.literal=a.literal;for(var c=0;a.inputs&&c<a.inputs.length;++c)a.inputs[c]=h(a.inputs[c]);b.inputs=a.inputs;return b}function k(a,b){return null==a||null==b?a===b:"object"===typeof a&&(a=ic(a),"object"===typeof a)?!1:a===b||a!==a&&b!==b}function l(a,b,c,d,e){var f=d.inputs,g;if(1===f.length){var h=k,f=f[0];return a.$watch(function(a){var b=f(a);k(b,h)||(g=d(a,void 0,
void 0,[b]),h=b&&ic(b));return g},b,c,e)}for(var l=[],n=[],m=0,p=f.length;m<p;m++)l[m]=k,n[m]=null;return a.$watch(function(a){for(var b=!1,c=0,e=f.length;c<e;c++){var h=f[c](a);if(b||(b=!k(h,l[c])))n[c]=h,l[c]=h&&ic(h)}b&&(g=d(a,void 0,void 0,n));return g},b,c,e)}function m(a,b,c,d){var e,f;return e=a.$watch(function(a){return d(a)},function(a,c,d){f=a;z(b)&&b.apply(this,arguments);x(a)&&d.$$postDigest(function(){x(f)&&e()})},c)}function n(a,b,c,d){function e(a){var b=!0;r(a,function(a){x(a)||(b=
!1)});return b}var f,g;return f=a.$watch(function(a){return d(a)},function(a,c,d){g=a;z(b)&&b.call(this,a,c,d);e(a)&&d.$$postDigest(function(){e(g)&&f()})},c)}function p(a,b,c,d){var e;return e=a.$watch(function(a){e();return d(a)},b,c)}function s(a,b){if(!b)return a;var c=a.$$watchDelegate,d=!1,c=c!==n&&c!==m?function(c,e,f,g){f=d&&g?g[0]:a(c,e,f,g);return b(f,c,e)}:function(c,d,e,f){e=a(c,d,e,f);c=b(e,c,d);return x(e)?c:e};a.$$watchDelegate&&a.$$watchDelegate!==l?c.$$watchDelegate=a.$$watchDelegate:
b.$stateful||(c.$$watchDelegate=l,d=!a.inputs,c.inputs=a.inputs?a.inputs:[a]);return c}var V=Fa().noUnsafeEval,I={csp:V,expensiveChecks:!1,literals:Z(d),isIdentifierStart:z(c)&&c,isIdentifierContinue:z(e)&&e},q={csp:V,expensiveChecks:!0,literals:Z(d),isIdentifierStart:z(c)&&c,isIdentifierContinue:z(e)&&e},K=!1;g.$$runningExpensiveChecks=function(){return K};return g}]}function wf(){this.$get=["$rootScope","$exceptionHandler",function(a,b){return wd(function(b){a.$evalAsync(b)},b)}]}function xf(){this.$get=
["$browser","$exceptionHandler",function(a,b){return wd(function(b){a.defer(b)},b)}]}function wd(a,b){function d(){this.$$state={status:0}}function c(a,b){return function(c){b.call(a,c)}}function e(c){!c.processScheduled&&c.pending&&(c.processScheduled=!0,a(function(){var a,d,e;e=c.pending;c.processScheduled=!1;c.pending=void 0;for(var f=0,g=e.length;f<g;++f){d=e[f][0];a=e[f][c.status];try{z(a)?d.resolve(a(c.value)):1===c.status?d.resolve(c.value):d.reject(c.value)}catch(h){d.reject(h),b(h)}}}))}
function f(){this.promise=new d}var g=O("$q",TypeError);R(d.prototype,{then:function(a,b,c){if(w(a)&&w(b)&&w(c))return this;var d=new f;this.$$state.pending=this.$$state.pending||[];this.$$state.pending.push([d,a,b,c]);0<this.$$state.status&&e(this.$$state);return d.promise},"catch":function(a){return this.then(null,a)},"finally":function(a,b){return this.then(function(b){return k(b,!0,a)},function(b){return k(b,!1,a)},b)}});R(f.prototype,{resolve:function(a){this.promise.$$state.status||(a===this.promise?
this.$$reject(g("qcycle",a)):this.$$resolve(a))},$$resolve:function(a){function d(a){k||(k=!0,h.$$resolve(a))}function f(a){k||(k=!0,h.$$reject(a))}var g,h=this,k=!1;try{if(H(a)||z(a))g=a&&a.then;z(g)?(this.promise.$$state.status=-1,g.call(a,d,f,c(this,this.notify))):(this.promise.$$state.value=a,this.promise.$$state.status=1,e(this.promise.$$state))}catch(l){f(l),b(l)}},reject:function(a){this.promise.$$state.status||this.$$reject(a)},$$reject:function(a){this.promise.$$state.value=a;this.promise.$$state.status=
2;e(this.promise.$$state)},notify:function(c){var d=this.promise.$$state.pending;0>=this.promise.$$state.status&&d&&d.length&&a(function(){for(var a,e,f=0,g=d.length;f<g;f++){e=d[f][0];a=d[f][3];try{e.notify(z(a)?a(c):c)}catch(h){b(h)}}})}});var h=function(a,b){var c=new f;b?c.resolve(a):c.reject(a);return c.promise},k=function(a,b,c){var d=null;try{z(c)&&(d=c())}catch(e){return h(e,!1)}return d&&z(d.then)?d.then(function(){return h(a,b)},function(a){return h(a,!1)}):h(a,b)},l=function(a,b,c,d){var e=
new f;e.resolve(a);return e.promise.then(b,c,d)},m=function(a){if(!z(a))throw g("norslvr",a);var b=new f;a(function(a){b.resolve(a)},function(a){b.reject(a)});return b.promise};m.prototype=d.prototype;m.defer=function(){var a=new f;a.resolve=c(a,a.resolve);a.reject=c(a,a.reject);a.notify=c(a,a.notify);return a};m.reject=function(a){var b=new f;b.reject(a);return b.promise};m.when=l;m.resolve=l;m.all=function(a){var b=new f,c=0,d=J(a)?[]:{};r(a,function(a,e){c++;l(a).then(function(a){d.hasOwnProperty(e)||
(d[e]=a,--c||b.resolve(d))},function(a){d.hasOwnProperty(e)||b.reject(a)})});0===c&&b.resolve(d);return b.promise};return m}function Gf(){this.$get=["$window","$timeout",function(a,b){var d=a.requestAnimationFrame||a.webkitRequestAnimationFrame,c=a.cancelAnimationFrame||a.webkitCancelAnimationFrame||a.webkitCancelRequestAnimationFrame,e=!!d,f=e?function(a){var b=d(a);return function(){c(b)}}:function(a){var c=b(a,16.66,!1);return function(){b.cancel(c)}};f.supported=e;return f}]}function vf(){function a(a){function b(){this.$$watchers=
this.$$nextSibling=this.$$childHead=this.$$childTail=null;this.$$listeners={};this.$$listenerCount={};this.$$watchersCount=0;this.$id=++pb;this.$$ChildScope=null}b.prototype=a;return b}var b=10,d=O("$rootScope"),c=null,e=null;this.digestTtl=function(a){arguments.length&&(b=a);return b};this.$get=["$exceptionHandler","$parse","$browser",function(f,g,h){function k(a){a.currentScope.$$destroyed=!0}function l(a){9===Ba&&(a.$$childHead&&l(a.$$childHead),a.$$nextSibling&&l(a.$$nextSibling));a.$parent=a.$$nextSibling=
a.$$prevSibling=a.$$childHead=a.$$childTail=a.$root=a.$$watchers=null}function m(){this.$id=++pb;this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null;this.$root=this;this.$$destroyed=!1;this.$$listeners={};this.$$listenerCount={};this.$$watchersCount=0;this.$$isolateBindings=null}function n(a){if(K.$$phase)throw d("inprog",K.$$phase);K.$$phase=a}function p(a,b){do a.$$watchersCount+=b;while(a=a.$parent)}function s(a,b,c){do a.$$listenerCount[c]-=
b,0===a.$$listenerCount[c]&&delete a.$$listenerCount[c];while(a=a.$parent)}function t(){}function I(){for(;y.length;)try{y.shift()()}catch(a){f(a)}e=null}function q(){null===e&&(e=h.defer(function(){K.$apply(I)}))}m.prototype={constructor:m,$new:function(b,c){var d;c=c||this;b?(d=new m,d.$root=this.$root):(this.$$ChildScope||(this.$$ChildScope=a(this)),d=new this.$$ChildScope);d.$parent=c;d.$$prevSibling=c.$$childTail;c.$$childHead?(c.$$childTail.$$nextSibling=d,c.$$childTail=d):c.$$childHead=c.$$childTail=
d;(b||c!=this)&&d.$on("$destroy",k);return d},$watch:function(a,b,d,e){var f=g(a);if(f.$$watchDelegate)return f.$$watchDelegate(this,b,d,f,a);var h=this,k=h.$$watchers,l={fn:b,last:t,get:f,exp:e||a,eq:!!d};c=null;z(b)||(l.fn=A);k||(k=h.$$watchers=[]);k.unshift(l);p(this,1);return function(){0<=$a(k,l)&&p(h,-1);c=null}},$watchGroup:function(a,b){function c(){h=!1;k?(k=!1,b(e,e,g)):b(e,d,g)}var d=Array(a.length),e=Array(a.length),f=[],g=this,h=!1,k=!0;if(!a.length){var l=!0;g.$evalAsync(function(){l&&
b(e,e,g)});return function(){l=!1}}if(1===a.length)return this.$watch(a[0],function(a,c,f){e[0]=a;d[0]=c;b(e,a===c?e:d,f)});r(a,function(a,b){var k=g.$watch(a,function(a,f){e[b]=a;d[b]=f;h||(h=!0,g.$evalAsync(c))});f.push(k)});return function(){for(;f.length;)f.shift()()}},$watchCollection:function(a,b){function c(a){e=a;var b,d,g,h;if(!w(e)){if(H(e))if(oa(e))for(f!==n&&(f=n,q=f.length=0,l++),a=e.length,q!==a&&(l++,f.length=q=a),b=0;b<a;b++)h=f[b],g=e[b],d=h!==h&&g!==g,d||h===g||(l++,f[b]=g);else{f!==
p&&(f=p={},q=0,l++);a=0;for(b in e)sa.call(e,b)&&(a++,g=e[b],h=f[b],b in f?(d=h!==h&&g!==g,d||h===g||(l++,f[b]=g)):(q++,f[b]=g,l++));if(q>a)for(b in l++,f)sa.call(e,b)||(q--,delete f[b])}else f!==e&&(f=e,l++);return l}}c.$stateful=!0;var d=this,e,f,h,k=1<b.length,l=0,m=g(a,c),n=[],p={},s=!0,q=0;return this.$watch(m,function(){s?(s=!1,b(e,e,d)):b(e,h,d);if(k)if(H(e))if(oa(e)){h=Array(e.length);for(var a=0;a<e.length;a++)h[a]=e[a]}else for(a in h={},e)sa.call(e,a)&&(h[a]=e[a]);else h=e})},$digest:function(){var a,
g,k,l,m,p,s,q,r=b,y,x=[],w,A;n("$digest");h.$$checkUrlChange();this===K&&null!==e&&(h.defer.cancel(e),I());c=null;do{q=!1;y=this;for(p=0;p<v.length;p++){try{A=v[p],A.scope.$eval(A.expression,A.locals)}catch(E){f(E)}c=null}v.length=0;a:do{if(p=y.$$watchers)for(s=p.length;s--;)try{if(a=p[s])if(m=a.get,(g=m(y))!==(k=a.last)&&!(a.eq?na(g,k):"number"===typeof g&&"number"===typeof k&&isNaN(g)&&isNaN(k)))q=!0,c=a,a.last=a.eq?Z(g,null):g,l=a.fn,l(g,k===t?g:k,y),5>r&&(w=4-r,x[w]||(x[w]=[]),x[w].push({msg:z(a.exp)?
"fn: "+(a.exp.name||a.exp.toString()):a.exp,newVal:g,oldVal:k}));else if(a===c){q=!1;break a}}catch(B){f(B)}if(!(p=y.$$watchersCount&&y.$$childHead||y!==this&&y.$$nextSibling))for(;y!==this&&!(p=y.$$nextSibling);)y=y.$parent}while(y=p);if((q||v.length)&&!r--)throw K.$$phase=null,d("infdig",b,x);}while(q||v.length);for(K.$$phase=null;P<u.length;)try{u[P++]()}catch(F){f(F)}u.length=P=0},$destroy:function(){if(!this.$$destroyed){var a=this.$parent;this.$broadcast("$destroy");this.$$destroyed=!0;this===
K&&h.$$applicationDestroyed();p(this,-this.$$watchersCount);for(var b in this.$$listenerCount)s(this,this.$$listenerCount[b],b);a&&a.$$childHead==this&&(a.$$childHead=this.$$nextSibling);a&&a.$$childTail==this&&(a.$$childTail=this.$$prevSibling);this.$$prevSibling&&(this.$$prevSibling.$$nextSibling=this.$$nextSibling);this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=this.$$prevSibling);this.$destroy=this.$digest=this.$apply=this.$evalAsync=this.$applyAsync=A;this.$on=this.$watch=this.$watchGroup=
function(){return A};this.$$listeners={};this.$$nextSibling=null;l(this)}},$eval:function(a,b){return g(a)(this,b)},$evalAsync:function(a,b){K.$$phase||v.length||h.defer(function(){v.length&&K.$digest()});v.push({scope:this,expression:g(a),locals:b})},$$postDigest:function(a){u.push(a)},$apply:function(a){try{n("$apply");try{return this.$eval(a)}finally{K.$$phase=null}}catch(b){f(b)}finally{try{K.$digest()}catch(c){throw f(c),c;}}},$applyAsync:function(a){function b(){c.$eval(a)}var c=this;a&&y.push(b);
a=g(a);q()},$on:function(a,b){var c=this.$$listeners[a];c||(this.$$listeners[a]=c=[]);c.push(b);var d=this;do d.$$listenerCount[a]||(d.$$listenerCount[a]=0),d.$$listenerCount[a]++;while(d=d.$parent);var e=this;return function(){var d=c.indexOf(b);-1!==d&&(c[d]=null,s(e,1,a))}},$emit:function(a,b){var c=[],d,e=this,g=!1,h={name:a,targetScope:e,stopPropagation:function(){g=!0},preventDefault:function(){h.defaultPrevented=!0},defaultPrevented:!1},k=ab([h],arguments,1),l,m;do{d=e.$$listeners[a]||c;h.currentScope=
e;l=0;for(m=d.length;l<m;l++)if(d[l])try{d[l].apply(null,k)}catch(n){f(n)}else d.splice(l,1),l--,m--;if(g)return h.currentScope=null,h;e=e.$parent}while(e);h.currentScope=null;return h},$broadcast:function(a,b){var c=this,d=this,e={name:a,targetScope:this,preventDefault:function(){e.defaultPrevented=!0},defaultPrevented:!1};if(!this.$$listenerCount[a])return e;for(var g=ab([e],arguments,1),h,k;c=d;){e.currentScope=c;d=c.$$listeners[a]||[];h=0;for(k=d.length;h<k;h++)if(d[h])try{d[h].apply(null,g)}catch(l){f(l)}else d.splice(h,
1),h--,k--;if(!(d=c.$$listenerCount[a]&&c.$$childHead||c!==this&&c.$$nextSibling))for(;c!==this&&!(d=c.$$nextSibling);)c=c.$parent}e.currentScope=null;return e}};var K=new m,v=K.$$asyncQueue=[],u=K.$$postDigestQueue=[],y=K.$$applyAsyncQueue=[],P=0;return K}]}function oe(){var a=/^\s*(https?|ftp|mailto|tel|file):/,b=/^\s*((https?|ftp|file|blob):|data:image\/)/;this.aHrefSanitizationWhitelist=function(b){return x(b)?(a=b,this):a};this.imgSrcSanitizationWhitelist=function(a){return x(a)?(b=a,this):b};
this.$get=function(){return function(d,c){var e=c?b:a,f;f=qa(d).href;return""===f||f.match(e)?d:"unsafe:"+f}}}function og(a){if("self"===a)return a;if(F(a)){if(-1<a.indexOf("***"))throw ya("iwcard",a);a=xd(a).replace("\\*\\*",".*").replace("\\*","[^:/.?&;]*");return new RegExp("^"+a+"$")}if(Xa(a))return new RegExp("^"+a.source+"$");throw ya("imatcher");}function yd(a){var b=[];x(a)&&r(a,function(a){b.push(og(a))});return b}function zf(){this.SCE_CONTEXTS=ma;var a=["self"],b=[];this.resourceUrlWhitelist=
function(b){arguments.length&&(a=yd(b));return a};this.resourceUrlBlacklist=function(a){arguments.length&&(b=yd(a));return b};this.$get=["$injector",function(d){function c(a,b){return"self"===a?jd(b):!!a.exec(b.href)}function e(a){var b=function(a){this.$$unwrapTrustedValue=function(){return a}};a&&(b.prototype=new a);b.prototype.valueOf=function(){return this.$$unwrapTrustedValue()};b.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()};return b}var f=function(a){throw ya("unsafe");
};d.has("$sanitize")&&(f=d.get("$sanitize"));var g=e(),h={};h[ma.HTML]=e(g);h[ma.CSS]=e(g);h[ma.URL]=e(g);h[ma.JS]=e(g);h[ma.RESOURCE_URL]=e(h[ma.URL]);return{trustAs:function(a,b){var c=h.hasOwnProperty(a)?h[a]:null;if(!c)throw ya("icontext",a,b);if(null===b||w(b)||""===b)return b;if("string"!==typeof b)throw ya("itype",a);return new c(b)},getTrusted:function(d,e){if(null===e||w(e)||""===e)return e;var g=h.hasOwnProperty(d)?h[d]:null;if(g&&e instanceof g)return e.$$unwrapTrustedValue();if(d===ma.RESOURCE_URL){var g=
qa(e.toString()),n,p,s=!1;n=0;for(p=a.length;n<p;n++)if(c(a[n],g)){s=!0;break}if(s)for(n=0,p=b.length;n<p;n++)if(c(b[n],g)){s=!1;break}if(s)return e;throw ya("insecurl",e.toString());}if(d===ma.HTML)return f(e);throw ya("unsafe");},valueOf:function(a){return a instanceof g?a.$$unwrapTrustedValue():a}}}]}function yf(){var a=!0;this.enabled=function(b){arguments.length&&(a=!!b);return a};this.$get=["$parse","$sceDelegate",function(b,d){if(a&&8>Ba)throw ya("iequirks");var c=ga(ma);c.isEnabled=function(){return a};
c.trustAs=d.trustAs;c.getTrusted=d.getTrusted;c.valueOf=d.valueOf;a||(c.trustAs=c.getTrusted=function(a,b){return b},c.valueOf=Ya);c.parseAs=function(a,d){var e=b(d);return e.literal&&e.constant?e:b(d,function(b){return c.getTrusted(a,b)})};var e=c.parseAs,f=c.getTrusted,g=c.trustAs;r(ma,function(a,b){var d=M(b);c[eb("parse_as_"+d)]=function(b){return e(a,b)};c[eb("get_trusted_"+d)]=function(b){return f(a,b)};c[eb("trust_as_"+d)]=function(b){return g(a,b)}});return c}]}function Af(){this.$get=["$window",
"$document",function(a,b){var d={},c=!(a.chrome&&a.chrome.app&&a.chrome.app.runtime)&&a.history&&a.history.pushState,e=aa((/android (\d+)/.exec(M((a.navigator||{}).userAgent))||[])[1]),f=/Boxee/i.test((a.navigator||{}).userAgent),g=b[0]||{},h,k=/^(Moz|webkit|ms)(?=[A-Z])/,l=g.body&&g.body.style,m=!1,n=!1;if(l){for(var p in l)if(m=k.exec(p)){h=m[0];h=h[0].toUpperCase()+h.substr(1);break}h||(h="WebkitOpacity"in l&&"webkit");m=!!("transition"in l||h+"Transition"in l);n=!!("animation"in l||h+"Animation"in
l);!e||m&&n||(m=F(l.webkitTransition),n=F(l.webkitAnimation))}return{history:!(!c||4>e||f),hasEvent:function(a){if("input"===a&&11>=Ba)return!1;if(w(d[a])){var b=g.createElement("div");d[a]="on"+a in b}return d[a]},csp:Fa(),vendorPrefix:h,transitions:m,animations:n,android:e}}]}function Cf(){var a;this.httpOptions=function(b){return b?(a=b,this):a};this.$get=["$templateCache","$http","$q","$sce",function(b,d,c,e){function f(g,h){f.totalPendingRequests++;if(!F(g)||w(b.get(g)))g=e.getTrustedResourceUrl(g);
var k=d.defaults&&d.defaults.transformResponse;J(k)?k=k.filter(function(a){return a!==dc}):k===dc&&(k=null);return d.get(g,R({cache:b,transformResponse:k},a))["finally"](function(){f.totalPendingRequests--}).then(function(a){b.put(g,a.data);return a.data},function(a){if(!h)throw pg("tpload",g,a.status,a.statusText);return c.reject(a)})}f.totalPendingRequests=0;return f}]}function Df(){this.$get=["$rootScope","$browser","$location",function(a,b,d){return{findBindings:function(a,b,d){a=a.getElementsByClassName("ng-binding");
var g=[];r(a,function(a){var c=ea.element(a).data("$binding");c&&r(c,function(c){d?(new RegExp("(^|\\s)"+xd(b)+"(\\s|\\||$)")).test(c)&&g.push(a):-1!=c.indexOf(b)&&g.push(a)})});return g},findModels:function(a,b,d){for(var g=["ng-","data-ng-","ng\\:"],h=0;h<g.length;++h){var k=a.querySelectorAll("["+g[h]+"model"+(d?"=":"*=")+'"'+b+'"]');if(k.length)return k}},getLocation:function(){return d.url()},setLocation:function(b){b!==d.url()&&(d.url(b),a.$digest())},whenStable:function(a){b.notifyWhenNoOutstandingRequests(a)}}}]}
function Ef(){this.$get=["$rootScope","$browser","$q","$$q","$exceptionHandler",function(a,b,d,c,e){function f(f,k,l){z(f)||(l=k,k=f,f=A);var m=ta.call(arguments,3),n=x(l)&&!l,p=(n?c:d).defer(),s=p.promise,r;r=b.defer(function(){try{p.resolve(f.apply(null,m))}catch(b){p.reject(b),e(b)}finally{delete g[s.$$timeoutId]}n||a.$apply()},k);s.$$timeoutId=r;g[r]=p;return s}var g={};f.cancel=function(a){return a&&a.$$timeoutId in g?(g[a.$$timeoutId].reject("canceled"),delete g[a.$$timeoutId],b.defer.cancel(a.$$timeoutId)):
!1};return f}]}function qa(a){Ba&&(Y.setAttribute("href",a),a=Y.href);Y.setAttribute("href",a);return{href:Y.href,protocol:Y.protocol?Y.protocol.replace(/:$/,""):"",host:Y.host,search:Y.search?Y.search.replace(/^\?/,""):"",hash:Y.hash?Y.hash.replace(/^#/,""):"",hostname:Y.hostname,port:Y.port,pathname:"/"===Y.pathname.charAt(0)?Y.pathname:"/"+Y.pathname}}function jd(a){a=F(a)?qa(a):a;return a.protocol===zd.protocol&&a.host===zd.host}function Ff(){this.$get=da(E)}function Ad(a){function b(a){try{return decodeURIComponent(a)}catch(b){return a}}
var d=a[0]||{},c={},e="";return function(){var a,g,h,k,l;a=d.cookie||"";if(a!==e)for(e=a,a=e.split("; "),c={},h=0;h<a.length;h++)g=a[h],k=g.indexOf("="),0<k&&(l=b(g.substring(0,k)),w(c[l])&&(c[l]=b(g.substring(k+1))));return c}}function Jf(){this.$get=Ad}function Mc(a){function b(d,c){if(H(d)){var e={};r(d,function(a,c){e[c]=b(c,a)});return e}return a.factory(d+"Filter",c)}this.register=b;this.$get=["$injector",function(a){return function(b){return a.get(b+"Filter")}}];b("currency",Bd);b("date",Cd);
b("filter",qg);b("json",rg);b("limitTo",sg);b("lowercase",tg);b("number",Dd);b("orderBy",Ed);b("uppercase",ug)}function qg(){return function(a,b,d){if(!oa(a)){if(null==a)return a;throw O("filter")("notarray",a);}var c;switch(lc(b)){case "function":break;case "boolean":case "null":case "number":case "string":c=!0;case "object":b=vg(b,d,c);break;default:return a}return Array.prototype.filter.call(a,b)}}function vg(a,b,d){var c=H(a)&&"$"in a;!0===b?b=na:z(b)||(b=function(a,b){if(w(a))return!1;if(null===
a||null===b)return a===b;if(H(b)||H(a)&&!vc(a))return!1;a=M(""+a);b=M(""+b);return-1!==a.indexOf(b)});return function(e){return c&&!H(e)?La(e,a.$,b,!1):La(e,a,b,d)}}function La(a,b,d,c,e){var f=lc(a),g=lc(b);if("string"===g&&"!"===b.charAt(0))return!La(a,b.substring(1),d,c);if(J(a))return a.some(function(a){return La(a,b,d,c)});switch(f){case "object":var h;if(c){for(h in a)if("$"!==h.charAt(0)&&La(a[h],b,d,!0))return!0;return e?!1:La(a,b,d,!1)}if("object"===g){for(h in b)if(e=b[h],!z(e)&&!w(e)&&
(f="$"===h,!La(f?a:a[h],e,d,f,f)))return!1;return!0}return d(a,b);case "function":return!1;default:return d(a,b)}}function lc(a){return null===a?"null":typeof a}function Bd(a){var b=a.NUMBER_FORMATS;return function(a,c,e){w(c)&&(c=b.CURRENCY_SYM);w(e)&&(e=b.PATTERNS[1].maxFrac);return null==a?a:Fd(a,b.PATTERNS[1],b.GROUP_SEP,b.DECIMAL_SEP,e).replace(/\u00A4/g,c)}}function Dd(a){var b=a.NUMBER_FORMATS;return function(a,c){return null==a?a:Fd(a,b.PATTERNS[0],b.GROUP_SEP,b.DECIMAL_SEP,c)}}function wg(a){var b=
0,d,c,e,f,g;-1<(c=a.indexOf(Gd))&&(a=a.replace(Gd,""));0<(e=a.search(/e/i))?(0>c&&(c=e),c+=+a.slice(e+1),a=a.substring(0,e)):0>c&&(c=a.length);for(e=0;a.charAt(e)==mc;e++);if(e==(g=a.length))d=[0],c=1;else{for(g--;a.charAt(g)==mc;)g--;c-=e;d=[];for(f=0;e<=g;e++,f++)d[f]=+a.charAt(e)}c>Hd&&(d=d.splice(0,Hd-1),b=c-1,c=1);return{d:d,e:b,i:c}}function xg(a,b,d,c){var e=a.d,f=e.length-a.i;b=w(b)?Math.min(Math.max(d,f),c):+b;d=b+a.i;c=e[d];if(0<d){e.splice(Math.max(a.i,d));for(var g=d;g<e.length;g++)e[g]=
0}else for(f=Math.max(0,f),a.i=1,e.length=Math.max(1,d=b+1),e[0]=0,g=1;g<d;g++)e[g]=0;if(5<=c)if(0>d-1){for(c=0;c>d;c--)e.unshift(0),a.i++;e.unshift(1);a.i++}else e[d-1]++;for(;f<Math.max(0,b);f++)e.push(0);if(b=e.reduceRight(function(a,b,c,d){b+=a;d[c]=b%10;return Math.floor(b/10)},0))e.unshift(b),a.i++}function Fd(a,b,d,c,e){if(!F(a)&&!S(a)||isNaN(a))return"";var f=!isFinite(a),g=!1,h=Math.abs(a)+"",k="";if(f)k="\u221e";else{g=wg(h);xg(g,e,b.minFrac,b.maxFrac);k=g.d;h=g.i;e=g.e;f=[];for(g=k.reduce(function(a,
b){return a&&!b},!0);0>h;)k.unshift(0),h++;0<h?f=k.splice(h,k.length):(f=k,k=[0]);h=[];for(k.length>=b.lgSize&&h.unshift(k.splice(-b.lgSize,k.length).join(""));k.length>b.gSize;)h.unshift(k.splice(-b.gSize,k.length).join(""));k.length&&h.unshift(k.join(""));k=h.join(d);f.length&&(k+=c+f.join(""));e&&(k+="e+"+e)}return 0>a&&!g?b.negPre+k+b.negSuf:b.posPre+k+b.posSuf}function Kb(a,b,d,c){var e="";if(0>a||c&&0>=a)c?a=-a+1:(a=-a,e="-");for(a=""+a;a.length<b;)a=mc+a;d&&(a=a.substr(a.length-b));return e+
a}function X(a,b,d,c,e){d=d||0;return function(f){f=f["get"+a]();if(0<d||f>-d)f+=d;0===f&&-12==d&&(f=12);return Kb(f,b,c,e)}}function kb(a,b,d){return function(c,e){var f=c["get"+a](),g=ub((d?"STANDALONE":"")+(b?"SHORT":"")+a);return e[g][f]}}function Id(a){var b=(new Date(a,0,1)).getDay();return new Date(a,0,(4>=b?5:12)-b)}function Jd(a){return function(b){var d=Id(b.getFullYear());b=+new Date(b.getFullYear(),b.getMonth(),b.getDate()+(4-b.getDay()))-+d;b=1+Math.round(b/6048E5);return Kb(b,a)}}function nc(a,
b){return 0>=a.getFullYear()?b.ERAS[0]:b.ERAS[1]}function Cd(a){function b(a){var b;if(b=a.match(d)){a=new Date(0);var f=0,g=0,h=b[8]?a.setUTCFullYear:a.setFullYear,k=b[8]?a.setUTCHours:a.setHours;b[9]&&(f=aa(b[9]+b[10]),g=aa(b[9]+b[11]));h.call(a,aa(b[1]),aa(b[2])-1,aa(b[3]));f=aa(b[4]||0)-f;g=aa(b[5]||0)-g;h=aa(b[6]||0);b=Math.round(1E3*parseFloat("0."+(b[7]||0)));k.call(a,f,g,h,b)}return a}var d=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
return function(c,d,f){var g="",h=[],k,l;d=d||"mediumDate";d=a.DATETIME_FORMATS[d]||d;F(c)&&(c=yg.test(c)?aa(c):b(c));S(c)&&(c=new Date(c));if(!ia(c)||!isFinite(c.getTime()))return c;for(;d;)(l=zg.exec(d))?(h=ab(h,l,1),d=h.pop()):(h.push(d),d=null);var m=c.getTimezoneOffset();f&&(m=yc(f,m),c=Sb(c,f,!0));r(h,function(b){k=Ag[b];g+=k?k(c,a.DATETIME_FORMATS,m):"''"===b?"'":b.replace(/(^'|'$)/g,"").replace(/''/g,"'")});return g}}function rg(){return function(a,b){w(b)&&(b=2);return cb(a,b)}}function sg(){return function(a,
b,d){b=Infinity===Math.abs(Number(b))?Number(b):aa(b);if(isNaN(b))return a;S(a)&&(a=a.toString());if(!oa(a))return a;d=!d||isNaN(d)?0:aa(d);d=0>d?Math.max(0,a.length+d):d;return 0<=b?oc(a,d,d+b):0===d?oc(a,b,a.length):oc(a,Math.max(0,d+b),d)}}function oc(a,b,d){return F(a)?a.slice(b,d):ta.call(a,b,d)}function Ed(a){function b(b){return b.map(function(b){var c=1,d=Ya;if(z(b))d=b;else if(F(b)){if("+"==b.charAt(0)||"-"==b.charAt(0))c="-"==b.charAt(0)?-1:1,b=b.substring(1);if(""!==b&&(d=a(b),d.constant))var e=
d(),d=function(a){return a[e]}}return{get:d,descending:c}})}function d(a){switch(typeof a){case "number":case "boolean":case "string":return!0;default:return!1}}function c(a,b){var c=0,d=a.type,k=b.type;if(d===k){var k=a.value,l=b.value;"string"===d?(k=k.toLowerCase(),l=l.toLowerCase()):"object"===d&&(H(k)&&(k=a.index),H(l)&&(l=b.index));k!==l&&(c=k<l?-1:1)}else c=d<k?-1:1;return c}return function(a,f,g,h){if(null==a)return a;if(!oa(a))throw O("orderBy")("notarray",a);J(f)||(f=[f]);0===f.length&&
(f=["+"]);var k=b(f),l=g?-1:1,m=z(h)?h:c;a=Array.prototype.map.call(a,function(a,b){return{value:a,tieBreaker:{value:b,type:"number",index:b},predicateValues:k.map(function(c){var e=c.get(a);c=typeof e;if(null===e)c="string",e="null";else if("object"===c)a:{if(z(e.valueOf)&&(e=e.valueOf(),d(e)))break a;vc(e)&&(e=e.toString(),d(e))}return{value:e,type:c,index:b}})}});a.sort(function(a,b){for(var c=0,d=k.length;c<d;c++){var e=m(a.predicateValues[c],b.predicateValues[c]);if(e)return e*k[c].descending*
l}return m(a.tieBreaker,b.tieBreaker)*l});return a=a.map(function(a){return a.value})}}function Ma(a){z(a)&&(a={link:a});a.restrict=a.restrict||"AC";return da(a)}function Kd(a,b,d,c,e){var f=this,g=[];f.$error={};f.$$success={};f.$pending=void 0;f.$name=e(b.name||b.ngForm||"")(d);f.$dirty=!1;f.$pristine=!0;f.$valid=!0;f.$invalid=!1;f.$submitted=!1;f.$$parentForm=Lb;f.$rollbackViewValue=function(){r(g,function(a){a.$rollbackViewValue()})};f.$commitViewValue=function(){r(g,function(a){a.$commitViewValue()})};
f.$addControl=function(a){Ra(a.$name,"input");g.push(a);a.$name&&(f[a.$name]=a);a.$$parentForm=f};f.$$renameControl=function(a,b){var c=a.$name;f[c]===a&&delete f[c];f[b]=a;a.$name=b};f.$removeControl=function(a){a.$name&&f[a.$name]===a&&delete f[a.$name];r(f.$pending,function(b,c){f.$setValidity(c,null,a)});r(f.$error,function(b,c){f.$setValidity(c,null,a)});r(f.$$success,function(b,c){f.$setValidity(c,null,a)});$a(g,a);a.$$parentForm=Lb};Ld({ctrl:this,$element:a,set:function(a,b,c){var d=a[b];d?
-1===d.indexOf(c)&&d.push(c):a[b]=[c]},unset:function(a,b,c){var d=a[b];d&&($a(d,c),0===d.length&&delete a[b])},$animate:c});f.$setDirty=function(){c.removeClass(a,Va);c.addClass(a,Mb);f.$dirty=!0;f.$pristine=!1;f.$$parentForm.$setDirty()};f.$setPristine=function(){c.setClass(a,Va,Mb+" ng-submitted");f.$dirty=!1;f.$pristine=!0;f.$submitted=!1;r(g,function(a){a.$setPristine()})};f.$setUntouched=function(){r(g,function(a){a.$setUntouched()})};f.$setSubmitted=function(){c.addClass(a,"ng-submitted");
f.$submitted=!0;f.$$parentForm.$setSubmitted()}}function pc(a){a.$formatters.push(function(b){return a.$isEmpty(b)?b:b.toString()})}function lb(a,b,d,c,e,f){var g=M(b[0].type);if(!e.android){var h=!1;b.on("compositionstart",function(){h=!0});b.on("compositionend",function(){h=!1;l()})}var k,l=function(a){k&&(f.defer.cancel(k),k=null);if(!h){var e=b.val();a=a&&a.type;"password"===g||d.ngTrim&&"false"===d.ngTrim||(e=W(e));(c.$viewValue!==e||""===e&&c.$$hasNativeValidators)&&c.$setViewValue(e,a)}};if(e.hasEvent("input"))b.on("input",
l);else{var m=function(a,b,c){k||(k=f.defer(function(){k=null;b&&b.value===c||l(a)}))};b.on("keydown",function(a){var b=a.keyCode;91===b||15<b&&19>b||37<=b&&40>=b||m(a,this,this.value)});if(e.hasEvent("paste"))b.on("paste cut",m)}b.on("change",l);if(Md[g]&&c.$$hasNativeValidators&&g===d.type)b.on("keydown wheel mousedown",function(a){if(!k){var b=this.validity,c=b.badInput,d=b.typeMismatch;k=f.defer(function(){k=null;b.badInput===c&&b.typeMismatch===d||l(a)})}});c.$render=function(){var a=c.$isEmpty(c.$viewValue)?
"":c.$viewValue;b.val()!==a&&b.val(a)}}function Nb(a,b){return function(d,c){var e,f;if(ia(d))return d;if(F(d)){'"'==d.charAt(0)&&'"'==d.charAt(d.length-1)&&(d=d.substring(1,d.length-1));if(Bg.test(d))return new Date(d);a.lastIndex=0;if(e=a.exec(d))return e.shift(),f=c?{yyyy:c.getFullYear(),MM:c.getMonth()+1,dd:c.getDate(),HH:c.getHours(),mm:c.getMinutes(),ss:c.getSeconds(),sss:c.getMilliseconds()/1E3}:{yyyy:1970,MM:1,dd:1,HH:0,mm:0,ss:0,sss:0},r(e,function(a,c){c<b.length&&(f[b[c]]=+a)}),new Date(f.yyyy,
f.MM-1,f.dd,f.HH,f.mm,f.ss||0,1E3*f.sss||0)}return NaN}}function mb(a,b,d,c){return function(e,f,g,h,k,l,m){function n(a){return a&&!(a.getTime&&a.getTime()!==a.getTime())}function p(a){return x(a)&&!ia(a)?d(a)||void 0:a}Nd(e,f,g,h);lb(e,f,g,h,k,l);var s=h&&h.$options&&h.$options.timezone,r;h.$$parserName=a;h.$parsers.push(function(a){if(h.$isEmpty(a))return null;if(b.test(a))return a=d(a,r),s&&(a=Sb(a,s)),a});h.$formatters.push(function(a){if(a&&!ia(a))throw nb("datefmt",a);if(n(a))return(r=a)&&
s&&(r=Sb(r,s,!0)),m("date")(a,c,s);r=null;return""});if(x(g.min)||g.ngMin){var t;h.$validators.min=function(a){return!n(a)||w(t)||d(a)>=t};g.$observe("min",function(a){t=p(a);h.$validate()})}if(x(g.max)||g.ngMax){var q;h.$validators.max=function(a){return!n(a)||w(q)||d(a)<=q};g.$observe("max",function(a){q=p(a);h.$validate()})}}}function Nd(a,b,d,c){(c.$$hasNativeValidators=H(b[0].validity))&&c.$parsers.push(function(a){var c=b.prop("validity")||{};return c.badInput||c.typeMismatch?void 0:a})}function Od(a,
b,d,c,e){if(x(c)){a=a(c);if(!a.constant)throw nb("constexpr",d,c);return a(b)}return e}function qc(a,b){a="ngClass"+a;return["$animate",function(d){function c(a,b){var c=[],d=0;a:for(;d<a.length;d++){for(var e=a[d],m=0;m<b.length;m++)if(e==b[m])continue a;c.push(e)}return c}function e(a){var b=[];return J(a)?(r(a,function(a){b=b.concat(e(a))}),b):F(a)?a.split(" "):H(a)?(r(a,function(a,c){a&&(b=b.concat(c.split(" ")))}),b):a}return{restrict:"AC",link:function(f,g,h){function k(a){a=l(a,1);h.$addClass(a)}
function l(a,b){var c=g.data("$classCounts")||T(),d=[];r(a,function(a){if(0<b||c[a])c[a]=(c[a]||0)+b,c[a]===+(0<b)&&d.push(a)});g.data("$classCounts",c);return d.join(" ")}function m(a,b){var e=c(b,a),f=c(a,b),e=l(e,1),f=l(f,-1);e&&e.length&&d.addClass(g,e);f&&f.length&&d.removeClass(g,f)}function n(a){if(!0===b||(f.$index&1)===b){var c=e(a||[]);if(!p)k(c);else if(!na(a,p)){var d=e(p);m(d,c)}}p=J(a)?a.map(function(a){return ga(a)}):ga(a)}var p;f.$watch(h[a],n,!0);h.$observe("class",function(b){n(f.$eval(h[a]))});
"ngClass"!==a&&f.$watch("$index",function(c,d){var g=c&1;if(g!==(d&1)){var m=e(f.$eval(h[a]));g===b?k(m):(g=l(m,-1),h.$removeClass(g))}})}}}]}function Ld(a){function b(a,b){b&&!f[a]?(k.addClass(e,a),f[a]=!0):!b&&f[a]&&(k.removeClass(e,a),f[a]=!1)}function d(a,c){a=a?"-"+Cc(a,"-"):"";b(ob+a,!0===c);b(Pd+a,!1===c)}var c=a.ctrl,e=a.$element,f={},g=a.set,h=a.unset,k=a.$animate;f[Pd]=!(f[ob]=e.hasClass(ob));c.$setValidity=function(a,e,f){w(e)?(c.$pending||(c.$pending={}),g(c.$pending,a,f)):(c.$pending&&
h(c.$pending,a,f),Qd(c.$pending)&&(c.$pending=void 0));Ea(e)?e?(h(c.$error,a,f),g(c.$$success,a,f)):(g(c.$error,a,f),h(c.$$success,a,f)):(h(c.$error,a,f),h(c.$$success,a,f));c.$pending?(b(Rd,!0),c.$valid=c.$invalid=void 0,d("",null)):(b(Rd,!1),c.$valid=Qd(c.$error),c.$invalid=!c.$valid,d("",c.$valid));e=c.$pending&&c.$pending[a]?void 0:c.$error[a]?!1:c.$$success[a]?!0:null;d(a,e);c.$$parentForm.$setValidity(a,e,c)}}function Qd(a){if(a)for(var b in a)if(a.hasOwnProperty(b))return!1;return!0}var Cg=
/^\/(.+)\/([a-z]*)$/,sa=Object.prototype.hasOwnProperty,M=function(a){return F(a)?a.toLowerCase():a},ub=function(a){return F(a)?a.toUpperCase():a},Ba,B,pa,ta=[].slice,bg=[].splice,Dg=[].push,ka=Object.prototype.toString,wc=Object.getPrototypeOf,za=O("ng"),ea=E.angular||(E.angular={}),Ub,pb=0;Ba=E.document.documentMode;A.$inject=[];Ya.$inject=[];var J=Array.isArray,be=/^\[object (?:Uint8|Uint8Clamped|Uint16|Uint32|Int8|Int16|Int32|Float32|Float64)Array\]$/,W=function(a){return F(a)?a.trim():a},xd=
function(a){return a.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08")},Fa=function(){if(!x(Fa.rules)){var a=E.document.querySelector("[ng-csp]")||E.document.querySelector("[data-ng-csp]");if(a){var b=a.getAttribute("ng-csp")||a.getAttribute("data-ng-csp");Fa.rules={noUnsafeEval:!b||-1!==b.indexOf("no-unsafe-eval"),noInlineStyle:!b||-1!==b.indexOf("no-inline-style")}}else{a=Fa;try{new Function(""),b=!1}catch(d){b=!0}a.rules={noUnsafeEval:b,noInlineStyle:!1}}}return Fa.rules},
rb=function(){if(x(rb.name_))return rb.name_;var a,b,d=Oa.length,c,e;for(b=0;b<d;++b)if(c=Oa[b],a=E.document.querySelector("["+c.replace(":","\\:")+"jq]")){e=a.getAttribute(c+"jq");break}return rb.name_=e},ee=/:/g,Oa=["ng-","data-ng-","ng:","x-ng-"],je=/[A-Z]/g,Dc=!1,Na=3,ne={full:"1.5.7",major:1,minor:5,dot:7,codeName:"hexagonal-circumvolution"};U.expando="ng339";var gb=U.cache={},Pf=1;U._data=function(a){return this.cache[a[this.expando]]||{}};var Kf=/([\:\-\_]+(.))/g,Lf=/^moz([A-Z])/,yb={mouseleave:"mouseout",
mouseenter:"mouseover"},Wb=O("jqLite"),Of=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,Vb=/<|&#?\w+;/,Mf=/<([\w:-]+)/,Nf=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,ha={option:[1,'<select multiple="multiple">',"</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ha.optgroup=ha.option;ha.tbody=ha.tfoot=ha.colgroup=ha.caption=ha.thead;
ha.th=ha.td;var Uf=E.Node.prototype.contains||function(a){return!!(this.compareDocumentPosition(a)&16)},Pa=U.prototype={ready:function(a){function b(){d||(d=!0,a())}var d=!1;"complete"===E.document.readyState?E.setTimeout(b):(this.on("DOMContentLoaded",b),U(E).on("load",b))},toString:function(){var a=[];r(this,function(b){a.push(""+b)});return"["+a.join(", ")+"]"},eq:function(a){return 0<=a?B(this[a]):B(this[this.length+a])},length:0,push:Dg,sort:[].sort,splice:[].splice},Eb={};r("multiple selected checked disabled readOnly required open".split(" "),
function(a){Eb[M(a)]=a});var Vc={};r("input select option textarea button form details".split(" "),function(a){Vc[a]=!0});var cd={ngMinlength:"minlength",ngMaxlength:"maxlength",ngMin:"min",ngMax:"max",ngPattern:"pattern"};r({data:Yb,removeData:fb,hasData:function(a){for(var b in gb[a.ng339])return!0;return!1},cleanData:function(a){for(var b=0,d=a.length;b<d;b++)fb(a[b])}},function(a,b){U[b]=a});r({data:Yb,inheritedData:Cb,scope:function(a){return B.data(a,"$scope")||Cb(a.parentNode||a,["$isolateScope",
"$scope"])},isolateScope:function(a){return B.data(a,"$isolateScope")||B.data(a,"$isolateScopeNoTemplate")},controller:Sc,injector:function(a){return Cb(a,"$injector")},removeAttr:function(a,b){a.removeAttribute(b)},hasClass:zb,css:function(a,b,d){b=eb(b);if(x(d))a.style[b]=d;else return a.style[b]},attr:function(a,b,d){var c=a.nodeType;if(c!==Na&&2!==c&&8!==c)if(c=M(b),Eb[c])if(x(d))d?(a[b]=!0,a.setAttribute(b,c)):(a[b]=!1,a.removeAttribute(c));else return a[b]||(a.attributes.getNamedItem(b)||A).specified?
c:void 0;else if(x(d))a.setAttribute(b,d);else if(a.getAttribute)return a=a.getAttribute(b,2),null===a?void 0:a},prop:function(a,b,d){if(x(d))a[b]=d;else return a[b]},text:function(){function a(a,d){if(w(d)){var c=a.nodeType;return 1===c||c===Na?a.textContent:""}a.textContent=d}a.$dv="";return a}(),val:function(a,b){if(w(b)){if(a.multiple&&"select"===ua(a)){var d=[];r(a.options,function(a){a.selected&&d.push(a.value||a.text)});return 0===d.length?null:d}return a.value}a.value=b},html:function(a,b){if(w(b))return a.innerHTML;
wb(a,!0);a.innerHTML=b},empty:Tc},function(a,b){U.prototype[b]=function(b,c){var e,f,g=this.length;if(a!==Tc&&w(2==a.length&&a!==zb&&a!==Sc?b:c)){if(H(b)){for(e=0;e<g;e++)if(a===Yb)a(this[e],b);else for(f in b)a(this[e],f,b[f]);return this}e=a.$dv;g=w(e)?Math.min(g,1):g;for(f=0;f<g;f++){var h=a(this[f],b,c);e=e?e+h:h}return e}for(e=0;e<g;e++)a(this[e],b,c);return this}});r({removeData:fb,on:function(a,b,d,c){if(x(c))throw Wb("onargs");if(Nc(a)){c=xb(a,!0);var e=c.events,f=c.handle;f||(f=c.handle=
Rf(a,e));c=0<=b.indexOf(" ")?b.split(" "):[b];for(var g=c.length,h=function(b,c,g){var h=e[b];h||(h=e[b]=[],h.specialHandlerWrapper=c,"$destroy"===b||g||a.addEventListener(b,f,!1));h.push(d)};g--;)b=c[g],yb[b]?(h(yb[b],Tf),h(b,void 0,!0)):h(b)}},off:Rc,one:function(a,b,d){a=B(a);a.on(b,function e(){a.off(b,d);a.off(b,e)});a.on(b,d)},replaceWith:function(a,b){var d,c=a.parentNode;wb(a);r(new U(b),function(b){d?c.insertBefore(b,d.nextSibling):c.replaceChild(b,a);d=b})},children:function(a){var b=[];
r(a.childNodes,function(a){1===a.nodeType&&b.push(a)});return b},contents:function(a){return a.contentDocument||a.childNodes||[]},append:function(a,b){var d=a.nodeType;if(1===d||11===d){b=new U(b);for(var d=0,c=b.length;d<c;d++)a.appendChild(b[d])}},prepend:function(a,b){if(1===a.nodeType){var d=a.firstChild;r(new U(b),function(b){a.insertBefore(b,d)})}},wrap:function(a,b){Pc(a,B(b).eq(0).clone()[0])},remove:Db,detach:function(a){Db(a,!0)},after:function(a,b){var d=a,c=a.parentNode;b=new U(b);for(var e=
0,f=b.length;e<f;e++){var g=b[e];c.insertBefore(g,d.nextSibling);d=g}},addClass:Bb,removeClass:Ab,toggleClass:function(a,b,d){b&&r(b.split(" "),function(b){var e=d;w(e)&&(e=!zb(a,b));(e?Bb:Ab)(a,b)})},parent:function(a){return(a=a.parentNode)&&11!==a.nodeType?a:null},next:function(a){return a.nextElementSibling},find:function(a,b){return a.getElementsByTagName?a.getElementsByTagName(b):[]},clone:Xb,triggerHandler:function(a,b,d){var c,e,f=b.type||b,g=xb(a);if(g=(g=g&&g.events)&&g[f])c={preventDefault:function(){this.defaultPrevented=
!0},isDefaultPrevented:function(){return!0===this.defaultPrevented},stopImmediatePropagation:function(){this.immediatePropagationStopped=!0},isImmediatePropagationStopped:function(){return!0===this.immediatePropagationStopped},stopPropagation:A,type:f,target:a},b.type&&(c=R(c,b)),b=ga(g),e=d?[c].concat(d):[c],r(b,function(b){c.isImmediatePropagationStopped()||b.apply(a,e)})}},function(a,b){U.prototype[b]=function(b,c,e){for(var f,g=0,h=this.length;g<h;g++)w(f)?(f=a(this[g],b,c,e),x(f)&&(f=B(f))):
Qc(f,a(this[g],b,c,e));return x(f)?f:this};U.prototype.bind=U.prototype.on;U.prototype.unbind=U.prototype.off});Sa.prototype={put:function(a,b){this[Ga(a,this.nextUid)]=b},get:function(a){return this[Ga(a,this.nextUid)]},remove:function(a){var b=this[a=Ga(a,this.nextUid)];delete this[a];return b}};var If=[function(){this.$get=[function(){return Sa}]}],Wf=/^([^\(]+?)=>/,Xf=/^[^\(]*\(\s*([^\)]*)\)/m,Eg=/,/,Fg=/^\s*(_?)(\S+?)\1\s*$/,Vf=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,Ha=O("$injector");db.$$annotate=
function(a,b,d){var c;if("function"===typeof a){if(!(c=a.$inject)){c=[];if(a.length){if(b)throw F(d)&&d||(d=a.name||Yf(a)),Ha("strictdi",d);b=Wc(a);r(b[1].split(Eg),function(a){a.replace(Fg,function(a,b,d){c.push(d)})})}a.$inject=c}}else J(a)?(b=a.length-1,Qa(a[b],"fn"),c=a.slice(0,b)):Qa(a,"fn",!0);return c};var Sd=O("$animate"),af=function(){this.$get=A},bf=function(){var a=new Sa,b=[];this.$get=["$$AnimateRunner","$rootScope",function(d,c){function e(a,b,c){var d=!1;b&&(b=F(b)?b.split(" "):J(b)?
b:[],r(b,function(b){b&&(d=!0,a[b]=c)}));return d}function f(){r(b,function(b){var c=a.get(b);if(c){var d=Zf(b.attr("class")),e="",f="";r(c,function(a,b){a!==!!d[b]&&(a?e+=(e.length?" ":"")+b:f+=(f.length?" ":"")+b)});r(b,function(a){e&&Bb(a,e);f&&Ab(a,f)});a.remove(b)}});b.length=0}return{enabled:A,on:A,off:A,pin:A,push:function(g,h,k,l){l&&l();k=k||{};k.from&&g.css(k.from);k.to&&g.css(k.to);if(k.addClass||k.removeClass)if(h=k.addClass,l=k.removeClass,k=a.get(g)||{},h=e(k,h,!0),l=e(k,l,!1),h||l)a.put(g,
k),b.push(g),1===b.length&&c.$$postDigest(f);g=new d;g.complete();return g}}}]},Ze=["$provide",function(a){var b=this;this.$$registeredAnimations=Object.create(null);this.register=function(d,c){if(d&&"."!==d.charAt(0))throw Sd("notcsel",d);var e=d+"-animation";b.$$registeredAnimations[d.substr(1)]=e;a.factory(e,c)};this.classNameFilter=function(a){if(1===arguments.length&&(this.$$classNameFilter=a instanceof RegExp?a:null)&&/(\s+|\/)ng-animate(\s+|\/)/.test(this.$$classNameFilter.toString()))throw Sd("nongcls",
"ng-animate");return this.$$classNameFilter};this.$get=["$$animateQueue",function(a){function b(a,c,d){if(d){var h;a:{for(h=0;h<d.length;h++){var k=d[h];if(1===k.nodeType){h=k;break a}}h=void 0}!h||h.parentNode||h.previousElementSibling||(d=null)}d?d.after(a):c.prepend(a)}return{on:a.on,off:a.off,pin:a.pin,enabled:a.enabled,cancel:function(a){a.end&&a.end()},enter:function(e,f,g,h){f=f&&B(f);g=g&&B(g);f=f||g.parent();b(e,f,g);return a.push(e,"enter",Ia(h))},move:function(e,f,g,h){f=f&&B(f);g=g&&B(g);
f=f||g.parent();b(e,f,g);return a.push(e,"move",Ia(h))},leave:function(b,c){return a.push(b,"leave",Ia(c),function(){b.remove()})},addClass:function(b,c,g){g=Ia(g);g.addClass=hb(g.addclass,c);return a.push(b,"addClass",g)},removeClass:function(b,c,g){g=Ia(g);g.removeClass=hb(g.removeClass,c);return a.push(b,"removeClass",g)},setClass:function(b,c,g,h){h=Ia(h);h.addClass=hb(h.addClass,c);h.removeClass=hb(h.removeClass,g);return a.push(b,"setClass",h)},animate:function(b,c,g,h,k){k=Ia(k);k.from=k.from?
R(k.from,c):c;k.to=k.to?R(k.to,g):g;k.tempClasses=hb(k.tempClasses,h||"ng-inline-animate");return a.push(b,"animate",k)}}}]}],df=function(){this.$get=["$$rAF",function(a){function b(b){d.push(b);1<d.length||a(function(){for(var a=0;a<d.length;a++)d[a]();d=[]})}var d=[];return function(){var a=!1;b(function(){a=!0});return function(d){a?d():b(d)}}}]},cf=function(){this.$get=["$q","$sniffer","$$animateAsyncRun","$document","$timeout",function(a,b,d,c,e){function f(a){this.setHost(a);var b=d();this._doneCallbacks=
[];this._tick=function(a){var d=c[0];d&&d.hidden?e(a,0,!1):b(a)};this._state=0}f.chain=function(a,b){function c(){if(d===a.length)b(!0);else a[d](function(a){!1===a?b(!1):(d++,c())})}var d=0;c()};f.all=function(a,b){function c(f){e=e&&f;++d===a.length&&b(e)}var d=0,e=!0;r(a,function(a){a.done(c)})};f.prototype={setHost:function(a){this.host=a||{}},done:function(a){2===this._state?a():this._doneCallbacks.push(a)},progress:A,getPromise:function(){if(!this.promise){var b=this;this.promise=a(function(a,
c){b.done(function(b){!1===b?c():a()})})}return this.promise},then:function(a,b){return this.getPromise().then(a,b)},"catch":function(a){return this.getPromise()["catch"](a)},"finally":function(a){return this.getPromise()["finally"](a)},pause:function(){this.host.pause&&this.host.pause()},resume:function(){this.host.resume&&this.host.resume()},end:function(){this.host.end&&this.host.end();this._resolve(!0)},cancel:function(){this.host.cancel&&this.host.cancel();this._resolve(!1)},complete:function(a){var b=
this;0===b._state&&(b._state=1,b._tick(function(){b._resolve(a)}))},_resolve:function(a){2!==this._state&&(r(this._doneCallbacks,function(b){b(a)}),this._doneCallbacks.length=0,this._state=2)}};return f}]},$e=function(){this.$get=["$$rAF","$q","$$AnimateRunner",function(a,b,d){return function(b,e){function f(){a(function(){g.addClass&&(b.addClass(g.addClass),g.addClass=null);g.removeClass&&(b.removeClass(g.removeClass),g.removeClass=null);g.to&&(b.css(g.to),g.to=null);h||k.complete();h=!0});return k}
var g=e||{};g.$$prepared||(g=Z(g));g.cleanupStyles&&(g.from=g.to=null);g.from&&(b.css(g.from),g.from=null);var h,k=new d;return{start:f,end:f}}}]},fa=O("$compile"),bc=new function(){};Fc.$inject=["$provide","$$sanitizeUriProvider"];Fb.prototype.isFirstChange=function(){return this.previousValue===bc};var Yc=/^((?:x|data)[\:\-_])/i,cg=O("$controller"),dd=/^(\S+)(\s+as\s+([\w$]+))?$/,kf=function(){this.$get=["$document",function(a){return function(b){b?!b.nodeType&&b instanceof B&&(b=b[0]):b=a[0].body;
return b.offsetWidth+1}}]},ed="application/json",ec={"Content-Type":ed+";charset=utf-8"},eg=/^\[|^\{(?!\{)/,fg={"[":/]$/,"{":/}$/},dg=/^\)\]\}',?\n/,Gg=O("$http"),id=function(a){return function(){throw Gg("legacy",a);}},Ka=ea.$interpolateMinErr=O("$interpolate");Ka.throwNoconcat=function(a){throw Ka("noconcat",a);};Ka.interr=function(a,b){return Ka("interr",a,b.toString())};var Hg=/^([^\?#]*)(\?([^#]*))?(#(.*))?$/,hg={http:80,https:443,ftp:21},Gb=O("$location"),Ig={$$absUrl:"",$$html5:!1,$$replace:!1,
absUrl:Hb("$$absUrl"),url:function(a){if(w(a))return this.$$url;var b=Hg.exec(a);(b[1]||""===a)&&this.path(decodeURIComponent(b[1]));(b[2]||b[1]||""===a)&&this.search(b[3]||"");this.hash(b[5]||"");return this},protocol:Hb("$$protocol"),host:Hb("$$host"),port:Hb("$$port"),path:nd("$$path",function(a){a=null!==a?a.toString():"";return"/"==a.charAt(0)?a:"/"+a}),search:function(a,b){switch(arguments.length){case 0:return this.$$search;case 1:if(F(a)||S(a))a=a.toString(),this.$$search=Ac(a);else if(H(a))a=
Z(a,{}),r(a,function(b,c){null==b&&delete a[c]}),this.$$search=a;else throw Gb("isrcharg");break;default:w(b)||null===b?delete this.$$search[a]:this.$$search[a]=b}this.$$compose();return this},hash:nd("$$hash",function(a){return null!==a?a.toString():""}),replace:function(){this.$$replace=!0;return this}};r([md,hc,gc],function(a){a.prototype=Object.create(Ig);a.prototype.state=function(b){if(!arguments.length)return this.$$state;if(a!==gc||!this.$$html5)throw Gb("nostate");this.$$state=w(b)?null:
b;return this}});var ca=O("$parse"),jg=Function.prototype.call,kg=Function.prototype.apply,lg=Function.prototype.bind,Ob=T();r("+ - * / % === !== == != < > <= >= && || ! = |".split(" "),function(a){Ob[a]=!0});var Jg={n:"\n",f:"\f",r:"\r",t:"\t",v:"\v","'":"'",'"':'"'},jc=function(a){this.options=a};jc.prototype={constructor:jc,lex:function(a){this.text=a;this.index=0;for(this.tokens=[];this.index<this.text.length;)if(a=this.text.charAt(this.index),'"'===a||"'"===a)this.readString(a);else if(this.isNumber(a)||
"."===a&&this.isNumber(this.peek()))this.readNumber();else if(this.isIdentifierStart(this.peekMultichar()))this.readIdent();else if(this.is(a,"(){}[].,;:?"))this.tokens.push({index:this.index,text:a}),this.index++;else if(this.isWhitespace(a))this.index++;else{var b=a+this.peek(),d=b+this.peek(2),c=Ob[b],e=Ob[d];Ob[a]||c||e?(a=e?d:c?b:a,this.tokens.push({index:this.index,text:a,operator:!0}),this.index+=a.length):this.throwError("Unexpected next character ",this.index,this.index+1)}return this.tokens},
is:function(a,b){return-1!==b.indexOf(a)},peek:function(a){a=a||1;return this.index+a<this.text.length?this.text.charAt(this.index+a):!1},isNumber:function(a){return"0"<=a&&"9">=a&&"string"===typeof a},isWhitespace:function(a){return" "===a||"\r"===a||"\t"===a||"\n"===a||"\v"===a||"\u00a0"===a},isIdentifierStart:function(a){return this.options.isIdentifierStart?this.options.isIdentifierStart(a,this.codePointAt(a)):this.isValidIdentifierStart(a)},isValidIdentifierStart:function(a){return"a"<=a&&"z">=
a||"A"<=a&&"Z">=a||"_"===a||"$"===a},isIdentifierContinue:function(a){return this.options.isIdentifierContinue?this.options.isIdentifierContinue(a,this.codePointAt(a)):this.isValidIdentifierContinue(a)},isValidIdentifierContinue:function(a,b){return this.isValidIdentifierStart(a,b)||this.isNumber(a)},codePointAt:function(a){return 1===a.length?a.charCodeAt(0):(a.charCodeAt(0)<<10)+a.charCodeAt(1)-56613888},peekMultichar:function(){var a=this.text.charAt(this.index),b=this.peek();if(!b)return a;var d=
a.charCodeAt(0),c=b.charCodeAt(0);return 55296<=d&&56319>=d&&56320<=c&&57343>=c?a+b:a},isExpOperator:function(a){return"-"===a||"+"===a||this.isNumber(a)},throwError:function(a,b,d){d=d||this.index;b=x(b)?"s "+b+"-"+this.index+" ["+this.text.substring(b,d)+"]":" "+d;throw ca("lexerr",a,b,this.text);},readNumber:function(){for(var a="",b=this.index;this.index<this.text.length;){var d=M(this.text.charAt(this.index));if("."==d||this.isNumber(d))a+=d;else{var c=this.peek();if("e"==d&&this.isExpOperator(c))a+=
d;else if(this.isExpOperator(d)&&c&&this.isNumber(c)&&"e"==a.charAt(a.length-1))a+=d;else if(!this.isExpOperator(d)||c&&this.isNumber(c)||"e"!=a.charAt(a.length-1))break;else this.throwError("Invalid exponent")}this.index++}this.tokens.push({index:b,text:a,constant:!0,value:Number(a)})},readIdent:function(){var a=this.index;for(this.index+=this.peekMultichar().length;this.index<this.text.length;){var b=this.peekMultichar();if(!this.isIdentifierContinue(b))break;this.index+=b.length}this.tokens.push({index:a,
text:this.text.slice(a,this.index),identifier:!0})},readString:function(a){var b=this.index;this.index++;for(var d="",c=a,e=!1;this.index<this.text.length;){var f=this.text.charAt(this.index),c=c+f;if(e)"u"===f?(e=this.text.substring(this.index+1,this.index+5),e.match(/[\da-f]{4}/i)||this.throwError("Invalid unicode escape [\\u"+e+"]"),this.index+=4,d+=String.fromCharCode(parseInt(e,16))):d+=Jg[f]||f,e=!1;else if("\\"===f)e=!0;else{if(f===a){this.index++;this.tokens.push({index:b,text:c,constant:!0,
value:d});return}d+=f}this.index++}this.throwError("Unterminated quote",b)}};var t=function(a,b){this.lexer=a;this.options=b};t.Program="Program";t.ExpressionStatement="ExpressionStatement";t.AssignmentExpression="AssignmentExpression";t.ConditionalExpression="ConditionalExpression";t.LogicalExpression="LogicalExpression";t.BinaryExpression="BinaryExpression";t.UnaryExpression="UnaryExpression";t.CallExpression="CallExpression";t.MemberExpression="MemberExpression";t.Identifier="Identifier";t.Literal=
"Literal";t.ArrayExpression="ArrayExpression";t.Property="Property";t.ObjectExpression="ObjectExpression";t.ThisExpression="ThisExpression";t.LocalsExpression="LocalsExpression";t.NGValueParameter="NGValueParameter";t.prototype={ast:function(a){this.text=a;this.tokens=this.lexer.lex(a);a=this.program();0!==this.tokens.length&&this.throwError("is an unexpected token",this.tokens[0]);return a},program:function(){for(var a=[];;)if(0<this.tokens.length&&!this.peek("}",")",";","]")&&a.push(this.expressionStatement()),
!this.expect(";"))return{type:t.Program,body:a}},expressionStatement:function(){return{type:t.ExpressionStatement,expression:this.filterChain()}},filterChain:function(){for(var a=this.expression();this.expect("|");)a=this.filter(a);return a},expression:function(){return this.assignment()},assignment:function(){var a=this.ternary();this.expect("=")&&(a={type:t.AssignmentExpression,left:a,right:this.assignment(),operator:"="});return a},ternary:function(){var a=this.logicalOR(),b,d;return this.expect("?")&&
(b=this.expression(),this.consume(":"))?(d=this.expression(),{type:t.ConditionalExpression,test:a,alternate:b,consequent:d}):a},logicalOR:function(){for(var a=this.logicalAND();this.expect("||");)a={type:t.LogicalExpression,operator:"||",left:a,right:this.logicalAND()};return a},logicalAND:function(){for(var a=this.equality();this.expect("&&");)a={type:t.LogicalExpression,operator:"&&",left:a,right:this.equality()};return a},equality:function(){for(var a=this.relational(),b;b=this.expect("==","!=",
"===","!==");)a={type:t.BinaryExpression,operator:b.text,left:a,right:this.relational()};return a},relational:function(){for(var a=this.additive(),b;b=this.expect("<",">","<=",">=");)a={type:t.BinaryExpression,operator:b.text,left:a,right:this.additive()};return a},additive:function(){for(var a=this.multiplicative(),b;b=this.expect("+","-");)a={type:t.BinaryExpression,operator:b.text,left:a,right:this.multiplicative()};return a},multiplicative:function(){for(var a=this.unary(),b;b=this.expect("*",
"/","%");)a={type:t.BinaryExpression,operator:b.text,left:a,right:this.unary()};return a},unary:function(){var a;return(a=this.expect("+","-","!"))?{type:t.UnaryExpression,operator:a.text,prefix:!0,argument:this.unary()}:this.primary()},primary:function(){var a;this.expect("(")?(a=this.filterChain(),this.consume(")")):this.expect("[")?a=this.arrayDeclaration():this.expect("{")?a=this.object():this.selfReferential.hasOwnProperty(this.peek().text)?a=Z(this.selfReferential[this.consume().text]):this.options.literals.hasOwnProperty(this.peek().text)?
a={type:t.Literal,value:this.options.literals[this.consume().text]}:this.peek().identifier?a=this.identifier():this.peek().constant?a=this.constant():this.throwError("not a primary expression",this.peek());for(var b;b=this.expect("(","[",".");)"("===b.text?(a={type:t.CallExpression,callee:a,arguments:this.parseArguments()},this.consume(")")):"["===b.text?(a={type:t.MemberExpression,object:a,property:this.expression(),computed:!0},this.consume("]")):"."===b.text?a={type:t.MemberExpression,object:a,
property:this.identifier(),computed:!1}:this.throwError("IMPOSSIBLE");return a},filter:function(a){a=[a];for(var b={type:t.CallExpression,callee:this.identifier(),arguments:a,filter:!0};this.expect(":");)a.push(this.expression());return b},parseArguments:function(){var a=[];if(")"!==this.peekToken().text){do a.push(this.filterChain());while(this.expect(","))}return a},identifier:function(){var a=this.consume();a.identifier||this.throwError("is not a valid identifier",a);return{type:t.Identifier,name:a.text}},
constant:function(){return{type:t.Literal,value:this.consume().value}},arrayDeclaration:function(){var a=[];if("]"!==this.peekToken().text){do{if(this.peek("]"))break;a.push(this.expression())}while(this.expect(","))}this.consume("]");return{type:t.ArrayExpression,elements:a}},object:function(){var a=[],b;if("}"!==this.peekToken().text){do{if(this.peek("}"))break;b={type:t.Property,kind:"init"};this.peek().constant?(b.key=this.constant(),b.computed=!1,this.consume(":"),b.value=this.expression()):
this.peek().identifier?(b.key=this.identifier(),b.computed=!1,this.peek(":")?(this.consume(":"),b.value=this.expression()):b.value=b.key):this.peek("[")?(this.consume("["),b.key=this.expression(),this.consume("]"),b.computed=!0,this.consume(":"),b.value=this.expression()):this.throwError("invalid key",this.peek());a.push(b)}while(this.expect(","))}this.consume("}");return{type:t.ObjectExpression,properties:a}},throwError:function(a,b){throw ca("syntax",b.text,a,b.index+1,this.text,this.text.substring(b.index));
},consume:function(a){if(0===this.tokens.length)throw ca("ueoe",this.text);var b=this.expect(a);b||this.throwError("is unexpected, expecting ["+a+"]",this.peek());return b},peekToken:function(){if(0===this.tokens.length)throw ca("ueoe",this.text);return this.tokens[0]},peek:function(a,b,d,c){return this.peekAhead(0,a,b,d,c)},peekAhead:function(a,b,d,c,e){if(this.tokens.length>a){a=this.tokens[a];var f=a.text;if(f===b||f===d||f===c||f===e||!(b||d||c||e))return a}return!1},expect:function(a,b,d,c){return(a=
this.peek(a,b,d,c))?(this.tokens.shift(),a):!1},selfReferential:{"this":{type:t.ThisExpression},$locals:{type:t.LocalsExpression}}};ud.prototype={compile:function(a,b){var d=this,c=this.astBuilder.ast(a);this.state={nextId:0,filters:{},expensiveChecks:b,fn:{vars:[],body:[],own:{}},assign:{vars:[],body:[],own:{}},inputs:[]};$(c,d.$filter);var e="",f;this.stage="assign";if(f=sd(c))this.state.computing="assign",e=this.nextId(),this.recurse(f,e),this.return_(e),e="fn.assign="+this.generateFunction("assign",
"s,v,l");f=qd(c.body);d.stage="inputs";r(f,function(a,b){var c="fn"+b;d.state[c]={vars:[],body:[],own:{}};d.state.computing=c;var e=d.nextId();d.recurse(a,e);d.return_(e);d.state.inputs.push(c);a.watchId=b});this.state.computing="fn";this.stage="main";this.recurse(c);e='"'+this.USE+" "+this.STRICT+'";\n'+this.filterPrefix()+"var fn="+this.generateFunction("fn","s,l,a,i")+e+this.watchFns()+"return fn;";e=(new Function("$filter","ensureSafeMemberName","ensureSafeObject","ensureSafeFunction","getStringValue",
"ensureSafeAssignContext","ifDefined","plus","text",e))(this.$filter,Ua,ra,od,ig,Ib,mg,pd,a);this.state=this.stage=void 0;e.literal=td(c);e.constant=c.constant;return e},USE:"use",STRICT:"strict",watchFns:function(){var a=[],b=this.state.inputs,d=this;r(b,function(b){a.push("var "+b+"="+d.generateFunction(b,"s"))});b.length&&a.push("fn.inputs=["+b.join(",")+"];");return a.join("")},generateFunction:function(a,b){return"function("+b+"){"+this.varsPrefix(a)+this.body(a)+"};"},filterPrefix:function(){var a=
[],b=this;r(this.state.filters,function(d,c){a.push(d+"=$filter("+b.escape(c)+")")});return a.length?"var "+a.join(",")+";":""},varsPrefix:function(a){return this.state[a].vars.length?"var "+this.state[a].vars.join(",")+";":""},body:function(a){return this.state[a].body.join("")},recurse:function(a,b,d,c,e,f){var g,h,k=this,l,m,n;c=c||A;if(!f&&x(a.watchId))b=b||this.nextId(),this.if_("i",this.lazyAssign(b,this.computedMember("i",a.watchId)),this.lazyRecurse(a,b,d,c,e,!0));else switch(a.type){case t.Program:r(a.body,
function(b,c){k.recurse(b.expression,void 0,void 0,function(a){h=a});c!==a.body.length-1?k.current().body.push(h,";"):k.return_(h)});break;case t.Literal:m=this.escape(a.value);this.assign(b,m);c(m);break;case t.UnaryExpression:this.recurse(a.argument,void 0,void 0,function(a){h=a});m=a.operator+"("+this.ifDefined(h,0)+")";this.assign(b,m);c(m);break;case t.BinaryExpression:this.recurse(a.left,void 0,void 0,function(a){g=a});this.recurse(a.right,void 0,void 0,function(a){h=a});m="+"===a.operator?
this.plus(g,h):"-"===a.operator?this.ifDefined(g,0)+a.operator+this.ifDefined(h,0):"("+g+")"+a.operator+"("+h+")";this.assign(b,m);c(m);break;case t.LogicalExpression:b=b||this.nextId();k.recurse(a.left,b);k.if_("&&"===a.operator?b:k.not(b),k.lazyRecurse(a.right,b));c(b);break;case t.ConditionalExpression:b=b||this.nextId();k.recurse(a.test,b);k.if_(b,k.lazyRecurse(a.alternate,b),k.lazyRecurse(a.consequent,b));c(b);break;case t.Identifier:b=b||this.nextId();d&&(d.context="inputs"===k.stage?"s":this.assign(this.nextId(),
this.getHasOwnProperty("l",a.name)+"?l:s"),d.computed=!1,d.name=a.name);Ua(a.name);k.if_("inputs"===k.stage||k.not(k.getHasOwnProperty("l",a.name)),function(){k.if_("inputs"===k.stage||"s",function(){e&&1!==e&&k.if_(k.not(k.nonComputedMember("s",a.name)),k.lazyAssign(k.nonComputedMember("s",a.name),"{}"));k.assign(b,k.nonComputedMember("s",a.name))})},b&&k.lazyAssign(b,k.nonComputedMember("l",a.name)));(k.state.expensiveChecks||Jb(a.name))&&k.addEnsureSafeObject(b);c(b);break;case t.MemberExpression:g=
d&&(d.context=this.nextId())||this.nextId();b=b||this.nextId();k.recurse(a.object,g,void 0,function(){k.if_(k.notNull(g),function(){e&&1!==e&&k.addEnsureSafeAssignContext(g);if(a.computed)h=k.nextId(),k.recurse(a.property,h),k.getStringValue(h),k.addEnsureSafeMemberName(h),e&&1!==e&&k.if_(k.not(k.computedMember(g,h)),k.lazyAssign(k.computedMember(g,h),"{}")),m=k.ensureSafeObject(k.computedMember(g,h)),k.assign(b,m),d&&(d.computed=!0,d.name=h);else{Ua(a.property.name);e&&1!==e&&k.if_(k.not(k.nonComputedMember(g,
a.property.name)),k.lazyAssign(k.nonComputedMember(g,a.property.name),"{}"));m=k.nonComputedMember(g,a.property.name);if(k.state.expensiveChecks||Jb(a.property.name))m=k.ensureSafeObject(m);k.assign(b,m);d&&(d.computed=!1,d.name=a.property.name)}},function(){k.assign(b,"undefined")});c(b)},!!e);break;case t.CallExpression:b=b||this.nextId();a.filter?(h=k.filter(a.callee.name),l=[],r(a.arguments,function(a){var b=k.nextId();k.recurse(a,b);l.push(b)}),m=h+"("+l.join(",")+")",k.assign(b,m),c(b)):(h=
k.nextId(),g={},l=[],k.recurse(a.callee,h,g,function(){k.if_(k.notNull(h),function(){k.addEnsureSafeFunction(h);r(a.arguments,function(a){k.recurse(a,k.nextId(),void 0,function(a){l.push(k.ensureSafeObject(a))})});g.name?(k.state.expensiveChecks||k.addEnsureSafeObject(g.context),m=k.member(g.context,g.name,g.computed)+"("+l.join(",")+")"):m=h+"("+l.join(",")+")";m=k.ensureSafeObject(m);k.assign(b,m)},function(){k.assign(b,"undefined")});c(b)}));break;case t.AssignmentExpression:h=this.nextId();g=
{};if(!rd(a.left))throw ca("lval");this.recurse(a.left,void 0,g,function(){k.if_(k.notNull(g.context),function(){k.recurse(a.right,h);k.addEnsureSafeObject(k.member(g.context,g.name,g.computed));k.addEnsureSafeAssignContext(g.context);m=k.member(g.context,g.name,g.computed)+a.operator+h;k.assign(b,m);c(b||m)})},1);break;case t.ArrayExpression:l=[];r(a.elements,function(a){k.recurse(a,k.nextId(),void 0,function(a){l.push(a)})});m="["+l.join(",")+"]";this.assign(b,m);c(m);break;case t.ObjectExpression:l=
[];n=!1;r(a.properties,function(a){a.computed&&(n=!0)});n?(b=b||this.nextId(),this.assign(b,"{}"),r(a.properties,function(a){a.computed?(g=k.nextId(),k.recurse(a.key,g)):g=a.key.type===t.Identifier?a.key.name:""+a.key.value;h=k.nextId();k.recurse(a.value,h);k.assign(k.member(b,g,a.computed),h)})):(r(a.properties,function(b){k.recurse(b.value,a.constant?void 0:k.nextId(),void 0,function(a){l.push(k.escape(b.key.type===t.Identifier?b.key.name:""+b.key.value)+":"+a)})}),m="{"+l.join(",")+"}",this.assign(b,
m));c(b||m);break;case t.ThisExpression:this.assign(b,"s");c("s");break;case t.LocalsExpression:this.assign(b,"l");c("l");break;case t.NGValueParameter:this.assign(b,"v"),c("v")}},getHasOwnProperty:function(a,b){var d=a+"."+b,c=this.current().own;c.hasOwnProperty(d)||(c[d]=this.nextId(!1,a+"&&("+this.escape(b)+" in "+a+")"));return c[d]},assign:function(a,b){if(a)return this.current().body.push(a,"=",b,";"),a},filter:function(a){this.state.filters.hasOwnProperty(a)||(this.state.filters[a]=this.nextId(!0));
return this.state.filters[a]},ifDefined:function(a,b){return"ifDefined("+a+","+this.escape(b)+")"},plus:function(a,b){return"plus("+a+","+b+")"},return_:function(a){this.current().body.push("return ",a,";")},if_:function(a,b,d){if(!0===a)b();else{var c=this.current().body;c.push("if(",a,"){");b();c.push("}");d&&(c.push("else{"),d(),c.push("}"))}},not:function(a){return"!("+a+")"},notNull:function(a){return a+"!=null"},nonComputedMember:function(a,b){var d=/[^$_a-zA-Z0-9]/g;return/[$_a-zA-Z][$_a-zA-Z0-9]*/.test(b)?
a+"."+b:a+'["'+b.replace(d,this.stringEscapeFn)+'"]'},computedMember:function(a,b){return a+"["+b+"]"},member:function(a,b,d){return d?this.computedMember(a,b):this.nonComputedMember(a,b)},addEnsureSafeObject:function(a){this.current().body.push(this.ensureSafeObject(a),";")},addEnsureSafeMemberName:function(a){this.current().body.push(this.ensureSafeMemberName(a),";")},addEnsureSafeFunction:function(a){this.current().body.push(this.ensureSafeFunction(a),";")},addEnsureSafeAssignContext:function(a){this.current().body.push(this.ensureSafeAssignContext(a),
";")},ensureSafeObject:function(a){return"ensureSafeObject("+a+",text)"},ensureSafeMemberName:function(a){return"ensureSafeMemberName("+a+",text)"},ensureSafeFunction:function(a){return"ensureSafeFunction("+a+",text)"},getStringValue:function(a){this.assign(a,"getStringValue("+a+")")},ensureSafeAssignContext:function(a){return"ensureSafeAssignContext("+a+",text)"},lazyRecurse:function(a,b,d,c,e,f){var g=this;return function(){g.recurse(a,b,d,c,e,f)}},lazyAssign:function(a,b){var d=this;return function(){d.assign(a,
b)}},stringEscapeRegex:/[^ a-zA-Z0-9]/g,stringEscapeFn:function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)},escape:function(a){if(F(a))return"'"+a.replace(this.stringEscapeRegex,this.stringEscapeFn)+"'";if(S(a))return a.toString();if(!0===a)return"true";if(!1===a)return"false";if(null===a)return"null";if("undefined"===typeof a)return"undefined";throw ca("esc");},nextId:function(a,b){var d="v"+this.state.nextId++;a||this.current().vars.push(d+(b?"="+b:""));return d},current:function(){return this.state[this.state.computing]}};
vd.prototype={compile:function(a,b){var d=this,c=this.astBuilder.ast(a);this.expression=a;this.expensiveChecks=b;$(c,d.$filter);var e,f;if(e=sd(c))f=this.recurse(e);e=qd(c.body);var g;e&&(g=[],r(e,function(a,b){var c=d.recurse(a);a.input=c;g.push(c);a.watchId=b}));var h=[];r(c.body,function(a){h.push(d.recurse(a.expression))});e=0===c.body.length?A:1===c.body.length?h[0]:function(a,b){var c;r(h,function(d){c=d(a,b)});return c};f&&(e.assign=function(a,b,c){return f(a,c,b)});g&&(e.inputs=g);e.literal=
td(c);e.constant=c.constant;return e},recurse:function(a,b,d){var c,e,f=this,g;if(a.input)return this.inputs(a.input,a.watchId);switch(a.type){case t.Literal:return this.value(a.value,b);case t.UnaryExpression:return e=this.recurse(a.argument),this["unary"+a.operator](e,b);case t.BinaryExpression:return c=this.recurse(a.left),e=this.recurse(a.right),this["binary"+a.operator](c,e,b);case t.LogicalExpression:return c=this.recurse(a.left),e=this.recurse(a.right),this["binary"+a.operator](c,e,b);case t.ConditionalExpression:return this["ternary?:"](this.recurse(a.test),
this.recurse(a.alternate),this.recurse(a.consequent),b);case t.Identifier:return Ua(a.name,f.expression),f.identifier(a.name,f.expensiveChecks||Jb(a.name),b,d,f.expression);case t.MemberExpression:return c=this.recurse(a.object,!1,!!d),a.computed||(Ua(a.property.name,f.expression),e=a.property.name),a.computed&&(e=this.recurse(a.property)),a.computed?this.computedMember(c,e,b,d,f.expression):this.nonComputedMember(c,e,f.expensiveChecks,b,d,f.expression);case t.CallExpression:return g=[],r(a.arguments,
function(a){g.push(f.recurse(a))}),a.filter&&(e=this.$filter(a.callee.name)),a.filter||(e=this.recurse(a.callee,!0)),a.filter?function(a,c,d,f){for(var n=[],p=0;p<g.length;++p)n.push(g[p](a,c,d,f));a=e.apply(void 0,n,f);return b?{context:void 0,name:void 0,value:a}:a}:function(a,c,d,m){var n=e(a,c,d,m),p;if(null!=n.value){ra(n.context,f.expression);od(n.value,f.expression);p=[];for(var s=0;s<g.length;++s)p.push(ra(g[s](a,c,d,m),f.expression));p=ra(n.value.apply(n.context,p),f.expression)}return b?
{value:p}:p};case t.AssignmentExpression:return c=this.recurse(a.left,!0,1),e=this.recurse(a.right),function(a,d,g,m){var n=c(a,d,g,m);a=e(a,d,g,m);ra(n.value,f.expression);Ib(n.context);n.context[n.name]=a;return b?{value:a}:a};case t.ArrayExpression:return g=[],r(a.elements,function(a){g.push(f.recurse(a))}),function(a,c,d,e){for(var f=[],p=0;p<g.length;++p)f.push(g[p](a,c,d,e));return b?{value:f}:f};case t.ObjectExpression:return g=[],r(a.properties,function(a){a.computed?g.push({key:f.recurse(a.key),
computed:!0,value:f.recurse(a.value)}):g.push({key:a.key.type===t.Identifier?a.key.name:""+a.key.value,computed:!1,value:f.recurse(a.value)})}),function(a,c,d,e){for(var f={},p=0;p<g.length;++p)g[p].computed?f[g[p].key(a,c,d,e)]=g[p].value(a,c,d,e):f[g[p].key]=g[p].value(a,c,d,e);return b?{value:f}:f};case t.ThisExpression:return function(a){return b?{value:a}:a};case t.LocalsExpression:return function(a,c){return b?{value:c}:c};case t.NGValueParameter:return function(a,c,d){return b?{value:d}:d}}},
"unary+":function(a,b){return function(d,c,e,f){d=a(d,c,e,f);d=x(d)?+d:0;return b?{value:d}:d}},"unary-":function(a,b){return function(d,c,e,f){d=a(d,c,e,f);d=x(d)?-d:0;return b?{value:d}:d}},"unary!":function(a,b){return function(d,c,e,f){d=!a(d,c,e,f);return b?{value:d}:d}},"binary+":function(a,b,d){return function(c,e,f,g){var h=a(c,e,f,g);c=b(c,e,f,g);h=pd(h,c);return d?{value:h}:h}},"binary-":function(a,b,d){return function(c,e,f,g){var h=a(c,e,f,g);c=b(c,e,f,g);h=(x(h)?h:0)-(x(c)?c:0);return d?
{value:h}:h}},"binary*":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)*b(c,e,f,g);return d?{value:c}:c}},"binary/":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)/b(c,e,f,g);return d?{value:c}:c}},"binary%":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)%b(c,e,f,g);return d?{value:c}:c}},"binary===":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)===b(c,e,f,g);return d?{value:c}:c}},"binary!==":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)!==b(c,e,f,g);return d?{value:c}:
c}},"binary==":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)==b(c,e,f,g);return d?{value:c}:c}},"binary!=":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)!=b(c,e,f,g);return d?{value:c}:c}},"binary<":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)<b(c,e,f,g);return d?{value:c}:c}},"binary>":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)>b(c,e,f,g);return d?{value:c}:c}},"binary<=":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)<=b(c,e,f,g);return d?{value:c}:c}},"binary>=":function(a,
b,d){return function(c,e,f,g){c=a(c,e,f,g)>=b(c,e,f,g);return d?{value:c}:c}},"binary&&":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)&&b(c,e,f,g);return d?{value:c}:c}},"binary||":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)||b(c,e,f,g);return d?{value:c}:c}},"ternary?:":function(a,b,d,c){return function(e,f,g,h){e=a(e,f,g,h)?b(e,f,g,h):d(e,f,g,h);return c?{value:e}:e}},value:function(a,b){return function(){return b?{context:void 0,name:void 0,value:a}:a}},identifier:function(a,
b,d,c,e){return function(f,g,h,k){f=g&&a in g?g:f;c&&1!==c&&f&&!f[a]&&(f[a]={});g=f?f[a]:void 0;b&&ra(g,e);return d?{context:f,name:a,value:g}:g}},computedMember:function(a,b,d,c,e){return function(f,g,h,k){var l=a(f,g,h,k),m,n;null!=l&&(m=b(f,g,h,k),m+="",Ua(m,e),c&&1!==c&&(Ib(l),l&&!l[m]&&(l[m]={})),n=l[m],ra(n,e));return d?{context:l,name:m,value:n}:n}},nonComputedMember:function(a,b,d,c,e,f){return function(g,h,k,l){g=a(g,h,k,l);e&&1!==e&&(Ib(g),g&&!g[b]&&(g[b]={}));h=null!=g?g[b]:void 0;(d||
Jb(b))&&ra(h,f);return c?{context:g,name:b,value:h}:h}},inputs:function(a,b){return function(d,c,e,f){return f?f[b]:a(d,c,e)}}};var kc=function(a,b,d){this.lexer=a;this.$filter=b;this.options=d;this.ast=new t(a,d);this.astCompiler=d.csp?new vd(this.ast,b):new ud(this.ast,b)};kc.prototype={constructor:kc,parse:function(a){return this.astCompiler.compile(a,this.options.expensiveChecks)}};var ng=Object.prototype.valueOf,ya=O("$sce"),ma={HTML:"html",CSS:"css",URL:"url",RESOURCE_URL:"resourceUrl",JS:"js"},
pg=O("$compile"),Y=E.document.createElement("a"),zd=qa(E.location.href);Ad.$inject=["$document"];Mc.$inject=["$provide"];var Hd=22,Gd=".",mc="0";Bd.$inject=["$locale"];Dd.$inject=["$locale"];var Ag={yyyy:X("FullYear",4,0,!1,!0),yy:X("FullYear",2,0,!0,!0),y:X("FullYear",1,0,!1,!0),MMMM:kb("Month"),MMM:kb("Month",!0),MM:X("Month",2,1),M:X("Month",1,1),LLLL:kb("Month",!1,!0),dd:X("Date",2),d:X("Date",1),HH:X("Hours",2),H:X("Hours",1),hh:X("Hours",2,-12),h:X("Hours",1,-12),mm:X("Minutes",2),m:X("Minutes",
1),ss:X("Seconds",2),s:X("Seconds",1),sss:X("Milliseconds",3),EEEE:kb("Day"),EEE:kb("Day",!0),a:function(a,b){return 12>a.getHours()?b.AMPMS[0]:b.AMPMS[1]},Z:function(a,b,d){a=-1*d;return a=(0<=a?"+":"")+(Kb(Math[0<a?"floor":"ceil"](a/60),2)+Kb(Math.abs(a%60),2))},ww:Jd(2),w:Jd(1),G:nc,GG:nc,GGG:nc,GGGG:function(a,b){return 0>=a.getFullYear()?b.ERANAMES[0]:b.ERANAMES[1]}},zg=/((?:[^yMLdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|L+|d+|H+|h+|m+|s+|a|Z|G+|w+))(.*)/,yg=/^\-?\d+$/;Cd.$inject=["$locale"];
var tg=da(M),ug=da(ub);Ed.$inject=["$parse"];var pe=da({restrict:"E",compile:function(a,b){if(!b.href&&!b.xlinkHref)return function(a,b){if("a"===b[0].nodeName.toLowerCase()){var e="[object SVGAnimatedString]"===ka.call(b.prop("href"))?"xlink:href":"href";b.on("click",function(a){b.attr(e)||a.preventDefault()})}}}}),vb={};r(Eb,function(a,b){function d(a,d,e){a.$watch(e[c],function(a){e.$set(b,!!a)})}if("multiple"!=a){var c=xa("ng-"+b),e=d;"checked"===a&&(e=function(a,b,e){e.ngModel!==e[c]&&d(a,b,
e)});vb[c]=function(){return{restrict:"A",priority:100,link:e}}}});r(cd,function(a,b){vb[b]=function(){return{priority:100,link:function(a,c,e){if("ngPattern"===b&&"/"==e.ngPattern.charAt(0)&&(c=e.ngPattern.match(Cg))){e.$set("ngPattern",new RegExp(c[1],c[2]));return}a.$watch(e[b],function(a){e.$set(b,a)})}}}});r(["src","srcset","href"],function(a){var b=xa("ng-"+a);vb[b]=function(){return{priority:99,link:function(d,c,e){var f=a,g=a;"href"===a&&"[object SVGAnimatedString]"===ka.call(c.prop("href"))&&
(g="xlinkHref",e.$attr[g]="xlink:href",f=null);e.$observe(b,function(b){b?(e.$set(g,b),Ba&&f&&c.prop(f,e[g])):"href"===a&&e.$set(g,null)})}}}});var Lb={$addControl:A,$$renameControl:function(a,b){a.$name=b},$removeControl:A,$setValidity:A,$setDirty:A,$setPristine:A,$setSubmitted:A};Kd.$inject=["$element","$attrs","$scope","$animate","$interpolate"];var Td=function(a){return["$timeout","$parse",function(b,d){function c(a){return""===a?d('this[""]').assign:d(a).assign||A}return{name:"form",restrict:a?
"EAC":"E",require:["form","^^?form"],controller:Kd,compile:function(d,f){d.addClass(Va).addClass(ob);var g=f.name?"name":a&&f.ngForm?"ngForm":!1;return{pre:function(a,d,e,f){var n=f[0];if(!("action"in e)){var p=function(b){a.$apply(function(){n.$commitViewValue();n.$setSubmitted()});b.preventDefault()};d[0].addEventListener("submit",p,!1);d.on("$destroy",function(){b(function(){d[0].removeEventListener("submit",p,!1)},0,!1)})}(f[1]||n.$$parentForm).$addControl(n);var s=g?c(n.$name):A;g&&(s(a,n),e.$observe(g,
function(b){n.$name!==b&&(s(a,void 0),n.$$parentForm.$$renameControl(n,b),s=c(n.$name),s(a,n))}));d.on("$destroy",function(){n.$$parentForm.$removeControl(n);s(a,void 0);R(n,Lb)})}}}}}]},qe=Td(),De=Td(!0),Bg=/^\d{4,}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+(?:[+-][0-2]\d:[0-5]\d|Z)$/,Kg=/^[a-z][a-z\d.+-]*:\/*(?:[^:@]+(?::[^@]+)?@)?(?:[^\s:/?#]+|\[[a-f\d:]+\])(?::\d+)?(?:\/[^?#]*)?(?:\?[^#]*)?(?:#.*)?$/i,Lg=/^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+\/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+\/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/,
Mg=/^\s*(\-|\+)?(\d+|(\d*(\.\d*)))([eE][+-]?\d+)?\s*$/,Ud=/^(\d{4,})-(\d{2})-(\d{2})$/,Vd=/^(\d{4,})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,rc=/^(\d{4,})-W(\d\d)$/,Wd=/^(\d{4,})-(\d\d)$/,Xd=/^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,Md=T();r(["date","datetime-local","month","time","week"],function(a){Md[a]=!0});var Yd={text:function(a,b,d,c,e,f){lb(a,b,d,c,e,f);pc(c)},date:mb("date",Ud,Nb(Ud,["yyyy","MM","dd"]),"yyyy-MM-dd"),"datetime-local":mb("datetimelocal",Vd,Nb(Vd,"yyyy MM dd HH mm ss sss".split(" ")),
"yyyy-MM-ddTHH:mm:ss.sss"),time:mb("time",Xd,Nb(Xd,["HH","mm","ss","sss"]),"HH:mm:ss.sss"),week:mb("week",rc,function(a,b){if(ia(a))return a;if(F(a)){rc.lastIndex=0;var d=rc.exec(a);if(d){var c=+d[1],e=+d[2],f=d=0,g=0,h=0,k=Id(c),e=7*(e-1);b&&(d=b.getHours(),f=b.getMinutes(),g=b.getSeconds(),h=b.getMilliseconds());return new Date(c,0,k.getDate()+e,d,f,g,h)}}return NaN},"yyyy-Www"),month:mb("month",Wd,Nb(Wd,["yyyy","MM"]),"yyyy-MM"),number:function(a,b,d,c,e,f){Nd(a,b,d,c);lb(a,b,d,c,e,f);c.$$parserName=
"number";c.$parsers.push(function(a){if(c.$isEmpty(a))return null;if(Mg.test(a))return parseFloat(a)});c.$formatters.push(function(a){if(!c.$isEmpty(a)){if(!S(a))throw nb("numfmt",a);a=a.toString()}return a});if(x(d.min)||d.ngMin){var g;c.$validators.min=function(a){return c.$isEmpty(a)||w(g)||a>=g};d.$observe("min",function(a){x(a)&&!S(a)&&(a=parseFloat(a,10));g=S(a)&&!isNaN(a)?a:void 0;c.$validate()})}if(x(d.max)||d.ngMax){var h;c.$validators.max=function(a){return c.$isEmpty(a)||w(h)||a<=h};d.$observe("max",
function(a){x(a)&&!S(a)&&(a=parseFloat(a,10));h=S(a)&&!isNaN(a)?a:void 0;c.$validate()})}},url:function(a,b,d,c,e,f){lb(a,b,d,c,e,f);pc(c);c.$$parserName="url";c.$validators.url=function(a,b){var d=a||b;return c.$isEmpty(d)||Kg.test(d)}},email:function(a,b,d,c,e,f){lb(a,b,d,c,e,f);pc(c);c.$$parserName="email";c.$validators.email=function(a,b){var d=a||b;return c.$isEmpty(d)||Lg.test(d)}},radio:function(a,b,d,c){w(d.name)&&b.attr("name",++pb);b.on("click",function(a){b[0].checked&&c.$setViewValue(d.value,
a&&a.type)});c.$render=function(){b[0].checked=d.value==c.$viewValue};d.$observe("value",c.$render)},checkbox:function(a,b,d,c,e,f,g,h){var k=Od(h,a,"ngTrueValue",d.ngTrueValue,!0),l=Od(h,a,"ngFalseValue",d.ngFalseValue,!1);b.on("click",function(a){c.$setViewValue(b[0].checked,a&&a.type)});c.$render=function(){b[0].checked=c.$viewValue};c.$isEmpty=function(a){return!1===a};c.$formatters.push(function(a){return na(a,k)});c.$parsers.push(function(a){return a?k:l})},hidden:A,button:A,submit:A,reset:A,
file:A},Gc=["$browser","$sniffer","$filter","$parse",function(a,b,d,c){return{restrict:"E",require:["?ngModel"],link:{pre:function(e,f,g,h){h[0]&&(Yd[M(g.type)]||Yd.text)(e,f,g,h[0],b,a,d,c)}}}}],Ng=/^(true|false|\d+)$/,Ve=function(){return{restrict:"A",priority:100,compile:function(a,b){return Ng.test(b.ngValue)?function(a,b,e){e.$set("value",a.$eval(e.ngValue))}:function(a,b,e){a.$watch(e.ngValue,function(a){e.$set("value",a)})}}}},ve=["$compile",function(a){return{restrict:"AC",compile:function(b){a.$$addBindingClass(b);
return function(b,c,e){a.$$addBindingInfo(c,e.ngBind);c=c[0];b.$watch(e.ngBind,function(a){c.textContent=w(a)?"":a})}}}}],xe=["$interpolate","$compile",function(a,b){return{compile:function(d){b.$$addBindingClass(d);return function(c,d,f){c=a(d.attr(f.$attr.ngBindTemplate));b.$$addBindingInfo(d,c.expressions);d=d[0];f.$observe("ngBindTemplate",function(a){d.textContent=w(a)?"":a})}}}}],we=["$sce","$parse","$compile",function(a,b,d){return{restrict:"A",compile:function(c,e){var f=b(e.ngBindHtml),g=
b(e.ngBindHtml,function(b){return a.valueOf(b)});d.$$addBindingClass(c);return function(b,c,e){d.$$addBindingInfo(c,e.ngBindHtml);b.$watch(g,function(){var d=f(b);c.html(a.getTrustedHtml(d)||"")})}}}}],Ue=da({restrict:"A",require:"ngModel",link:function(a,b,d,c){c.$viewChangeListeners.push(function(){a.$eval(d.ngChange)})}}),ye=qc("",!0),Ae=qc("Odd",0),ze=qc("Even",1),Be=Ma({compile:function(a,b){b.$set("ngCloak",void 0);a.removeClass("ng-cloak")}}),Ce=[function(){return{restrict:"A",scope:!0,controller:"@",
priority:500}}],Lc={},Og={blur:!0,focus:!0};r("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),function(a){var b=xa("ng-"+a);Lc[b]=["$parse","$rootScope",function(d,c){return{restrict:"A",compile:function(e,f){var g=d(f[b],null,!0);return function(b,d){d.on(a,function(d){var e=function(){g(b,{$event:d})};Og[a]&&c.$$phase?b.$evalAsync(e):b.$apply(e)})}}}}]});var Fe=["$animate","$compile",function(a,
b){return{multiElement:!0,transclude:"element",priority:600,terminal:!0,restrict:"A",$$tlb:!0,link:function(d,c,e,f,g){var h,k,l;d.$watch(e.ngIf,function(d){d?k||g(function(d,f){k=f;d[d.length++]=b.$$createComment("end ngIf",e.ngIf);h={clone:d};a.enter(d,c.parent(),c)}):(l&&(l.remove(),l=null),k&&(k.$destroy(),k=null),h&&(l=tb(h.clone),a.leave(l).then(function(){l=null}),h=null))})}}}],Ge=["$templateRequest","$anchorScroll","$animate",function(a,b,d){return{restrict:"ECA",priority:400,terminal:!0,
transclude:"element",controller:ea.noop,compile:function(c,e){var f=e.ngInclude||e.src,g=e.onload||"",h=e.autoscroll;return function(c,e,m,n,p){var s=0,r,t,q,w=function(){t&&(t.remove(),t=null);r&&(r.$destroy(),r=null);q&&(d.leave(q).then(function(){t=null}),t=q,q=null)};c.$watch(f,function(f){var m=function(){!x(h)||h&&!c.$eval(h)||b()},t=++s;f?(a(f,!0).then(function(a){if(!c.$$destroyed&&t===s){var b=c.$new();n.template=a;a=p(b,function(a){w();d.enter(a,null,e).then(m)});r=b;q=a;r.$emit("$includeContentLoaded",
f);c.$eval(g)}},function(){c.$$destroyed||t!==s||(w(),c.$emit("$includeContentError",f))}),c.$emit("$includeContentRequested",f)):(w(),n.template=null)})}}}}],Xe=["$compile",function(a){return{restrict:"ECA",priority:-400,require:"ngInclude",link:function(b,d,c,e){ka.call(d[0]).match(/SVG/)?(d.empty(),a(Oc(e.template,E.document).childNodes)(b,function(a){d.append(a)},{futureParentElement:d})):(d.html(e.template),a(d.contents())(b))}}}],He=Ma({priority:450,compile:function(){return{pre:function(a,
b,d){a.$eval(d.ngInit)}}}}),Te=function(){return{restrict:"A",priority:100,require:"ngModel",link:function(a,b,d,c){var e=b.attr(d.$attr.ngList)||", ",f="false"!==d.ngTrim,g=f?W(e):e;c.$parsers.push(function(a){if(!w(a)){var b=[];a&&r(a.split(g),function(a){a&&b.push(f?W(a):a)});return b}});c.$formatters.push(function(a){if(J(a))return a.join(e)});c.$isEmpty=function(a){return!a||!a.length}}}},ob="ng-valid",Pd="ng-invalid",Va="ng-pristine",Mb="ng-dirty",Rd="ng-pending",nb=O("ngModel"),Pg=["$scope",
"$exceptionHandler","$attrs","$element","$parse","$animate","$timeout","$rootScope","$q","$interpolate",function(a,b,d,c,e,f,g,h,k,l){this.$modelValue=this.$viewValue=Number.NaN;this.$$rawModelValue=void 0;this.$validators={};this.$asyncValidators={};this.$parsers=[];this.$formatters=[];this.$viewChangeListeners=[];this.$untouched=!0;this.$touched=!1;this.$pristine=!0;this.$dirty=!1;this.$valid=!0;this.$invalid=!1;this.$error={};this.$$success={};this.$pending=void 0;this.$name=l(d.name||"",!1)(a);
this.$$parentForm=Lb;var m=e(d.ngModel),n=m.assign,p=m,s=n,t=null,I,q=this;this.$$setOptions=function(a){if((q.$options=a)&&a.getterSetter){var b=e(d.ngModel+"()"),f=e(d.ngModel+"($$$p)");p=function(a){var c=m(a);z(c)&&(c=b(a));return c};s=function(a,b){z(m(a))?f(a,{$$$p:b}):n(a,b)}}else if(!m.assign)throw nb("nonassign",d.ngModel,va(c));};this.$render=A;this.$isEmpty=function(a){return w(a)||""===a||null===a||a!==a};this.$$updateEmptyClasses=function(a){q.$isEmpty(a)?(f.removeClass(c,"ng-not-empty"),
f.addClass(c,"ng-empty")):(f.removeClass(c,"ng-empty"),f.addClass(c,"ng-not-empty"))};var K=0;Ld({ctrl:this,$element:c,set:function(a,b){a[b]=!0},unset:function(a,b){delete a[b]},$animate:f});this.$setPristine=function(){q.$dirty=!1;q.$pristine=!0;f.removeClass(c,Mb);f.addClass(c,Va)};this.$setDirty=function(){q.$dirty=!0;q.$pristine=!1;f.removeClass(c,Va);f.addClass(c,Mb);q.$$parentForm.$setDirty()};this.$setUntouched=function(){q.$touched=!1;q.$untouched=!0;f.setClass(c,"ng-untouched","ng-touched")};
this.$setTouched=function(){q.$touched=!0;q.$untouched=!1;f.setClass(c,"ng-touched","ng-untouched")};this.$rollbackViewValue=function(){g.cancel(t);q.$viewValue=q.$$lastCommittedViewValue;q.$render()};this.$validate=function(){if(!S(q.$modelValue)||!isNaN(q.$modelValue)){var a=q.$$rawModelValue,b=q.$valid,c=q.$modelValue,d=q.$options&&q.$options.allowInvalid;q.$$runValidators(a,q.$$lastCommittedViewValue,function(e){d||b===e||(q.$modelValue=e?a:void 0,q.$modelValue!==c&&q.$$writeModelToScope())})}};
this.$$runValidators=function(a,b,c){function d(){var c=!0;r(q.$validators,function(d,e){var g=d(a,b);c=c&&g;f(e,g)});return c?!0:(r(q.$asyncValidators,function(a,b){f(b,null)}),!1)}function e(){var c=[],d=!0;r(q.$asyncValidators,function(e,g){var h=e(a,b);if(!h||!z(h.then))throw nb("nopromise",h);f(g,void 0);c.push(h.then(function(){f(g,!0)},function(){d=!1;f(g,!1)}))});c.length?k.all(c).then(function(){g(d)},A):g(!0)}function f(a,b){h===K&&q.$setValidity(a,b)}function g(a){h===K&&c(a)}K++;var h=
K;(function(){var a=q.$$parserName||"parse";if(w(I))f(a,null);else return I||(r(q.$validators,function(a,b){f(b,null)}),r(q.$asyncValidators,function(a,b){f(b,null)})),f(a,I),I;return!0})()?d()?e():g(!1):g(!1)};this.$commitViewValue=function(){var a=q.$viewValue;g.cancel(t);if(q.$$lastCommittedViewValue!==a||""===a&&q.$$hasNativeValidators)q.$$updateEmptyClasses(a),q.$$lastCommittedViewValue=a,q.$pristine&&this.$setDirty(),this.$$parseAndValidate()};this.$$parseAndValidate=function(){var b=q.$$lastCommittedViewValue;
if(I=w(b)?void 0:!0)for(var c=0;c<q.$parsers.length;c++)if(b=q.$parsers[c](b),w(b)){I=!1;break}S(q.$modelValue)&&isNaN(q.$modelValue)&&(q.$modelValue=p(a));var d=q.$modelValue,e=q.$options&&q.$options.allowInvalid;q.$$rawModelValue=b;e&&(q.$modelValue=b,q.$modelValue!==d&&q.$$writeModelToScope());q.$$runValidators(b,q.$$lastCommittedViewValue,function(a){e||(q.$modelValue=a?b:void 0,q.$modelValue!==d&&q.$$writeModelToScope())})};this.$$writeModelToScope=function(){s(a,q.$modelValue);r(q.$viewChangeListeners,
function(a){try{a()}catch(c){b(c)}})};this.$setViewValue=function(a,b){q.$viewValue=a;q.$options&&!q.$options.updateOnDefault||q.$$debounceViewValueCommit(b)};this.$$debounceViewValueCommit=function(b){var c=0,d=q.$options;d&&x(d.debounce)&&(d=d.debounce,S(d)?c=d:S(d[b])?c=d[b]:S(d["default"])&&(c=d["default"]));g.cancel(t);c?t=g(function(){q.$commitViewValue()},c):h.$$phase?q.$commitViewValue():a.$apply(function(){q.$commitViewValue()})};a.$watch(function(){var b=p(a);if(b!==q.$modelValue&&(q.$modelValue===
q.$modelValue||b===b)){q.$modelValue=q.$$rawModelValue=b;I=void 0;for(var c=q.$formatters,d=c.length,e=b;d--;)e=c[d](e);q.$viewValue!==e&&(q.$$updateEmptyClasses(e),q.$viewValue=q.$$lastCommittedViewValue=e,q.$render(),q.$$runValidators(b,e,A))}return b})}],Se=["$rootScope",function(a){return{restrict:"A",require:["ngModel","^?form","^?ngModelOptions"],controller:Pg,priority:1,compile:function(b){b.addClass(Va).addClass("ng-untouched").addClass(ob);return{pre:function(a,b,e,f){var g=f[0];b=f[1]||
g.$$parentForm;g.$$setOptions(f[2]&&f[2].$options);b.$addControl(g);e.$observe("name",function(a){g.$name!==a&&g.$$parentForm.$$renameControl(g,a)});a.$on("$destroy",function(){g.$$parentForm.$removeControl(g)})},post:function(b,c,e,f){var g=f[0];if(g.$options&&g.$options.updateOn)c.on(g.$options.updateOn,function(a){g.$$debounceViewValueCommit(a&&a.type)});c.on("blur",function(){g.$touched||(a.$$phase?b.$evalAsync(g.$setTouched):b.$apply(g.$setTouched))})}}}}}],Qg=/(\s+|^)default(\s+|$)/,We=function(){return{restrict:"A",
controller:["$scope","$attrs",function(a,b){var d=this;this.$options=Z(a.$eval(b.ngModelOptions));x(this.$options.updateOn)?(this.$options.updateOnDefault=!1,this.$options.updateOn=W(this.$options.updateOn.replace(Qg,function(){d.$options.updateOnDefault=!0;return" "}))):this.$options.updateOnDefault=!0}]}},Ie=Ma({terminal:!0,priority:1E3}),Rg=O("ngOptions"),Sg=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,
Qe=["$compile","$document","$parse",function(a,b,d){function c(a,b,c){function e(a,b,c,d,f){this.selectValue=a;this.viewValue=b;this.label=c;this.group=d;this.disabled=f}function f(a){var b;if(!r&&oa(a))b=a;else{b=[];for(var c in a)a.hasOwnProperty(c)&&"$"!==c.charAt(0)&&b.push(c)}return b}var n=a.match(Sg);if(!n)throw Rg("iexp",a,va(b));var p=n[5]||n[7],r=n[6];a=/ as /.test(n[0])&&n[1];var t=n[9];b=d(n[2]?n[1]:p);var x=a&&d(a)||b,q=t&&d(t),w=t?function(a,b){return q(c,b)}:function(a){return Ga(a)},
v=function(a,b){return w(a,D(a,b))},u=d(n[2]||n[1]),y=d(n[3]||""),A=d(n[4]||""),z=d(n[8]),C={},D=r?function(a,b){C[r]=b;C[p]=a;return C}:function(a){C[p]=a;return C};return{trackBy:t,getTrackByValue:v,getWatchables:d(z,function(a){var b=[];a=a||[];for(var d=f(a),e=d.length,g=0;g<e;g++){var h=a===d?g:d[g],l=a[h],h=D(l,h),l=w(l,h);b.push(l);if(n[2]||n[1])l=u(c,h),b.push(l);n[4]&&(h=A(c,h),b.push(h))}return b}),getOptions:function(){for(var a=[],b={},d=z(c)||[],g=f(d),h=g.length,n=0;n<h;n++){var p=d===
g?n:g[n],q=D(d[p],p),r=x(c,q),p=w(r,q),s=u(c,q),C=y(c,q),q=A(c,q),r=new e(p,r,s,C,q);a.push(r);b[p]=r}return{items:a,selectValueMap:b,getOptionFromViewValue:function(a){return b[v(a)]},getViewValueFromOption:function(a){return t?ea.copy(a.viewValue):a.viewValue}}}}}var e=E.document.createElement("option"),f=E.document.createElement("optgroup");return{restrict:"A",terminal:!0,require:["select","ngModel"],link:{pre:function(a,b,c,d){d[0].registerOption=A},post:function(d,h,k,l){function m(a,b){a.element=
b;b.disabled=a.disabled;a.label!==b.label&&(b.label=a.label,b.textContent=a.label);a.value!==b.value&&(b.value=a.selectValue)}function n(){var a=y&&p.readValue();if(y)for(var b=y.items.length-1;0<=b;b--){var c=y.items[b];c.group?Db(c.element.parentNode):Db(c.element)}y=z.getOptions();var d={};v&&h.prepend(w);y.items.forEach(function(a){var b;if(x(a.group)){b=d[a.group];b||(b=f.cloneNode(!1),E.appendChild(b),b.label=a.group,d[a.group]=b);var c=e.cloneNode(!1)}else b=E,c=e.cloneNode(!1);b.appendChild(c);
m(a,c)});h[0].appendChild(E);s.$render();s.$isEmpty(a)||(b=p.readValue(),(z.trackBy||t?na(a,b):a===b)||(s.$setViewValue(b),s.$render()))}var p=l[0],s=l[1],t=k.multiple,w;l=0;for(var q=h.children(),A=q.length;l<A;l++)if(""===q[l].value){w=q.eq(l);break}var v=!!w,u=B(e.cloneNode(!1));u.val("?");var y,z=c(k.ngOptions,h,d),E=b[0].createDocumentFragment();t?(s.$isEmpty=function(a){return!a||0===a.length},p.writeValue=function(a){y.items.forEach(function(a){a.element.selected=!1});a&&a.forEach(function(a){if(a=
y.getOptionFromViewValue(a))a.element.selected=!0})},p.readValue=function(){var a=h.val()||[],b=[];r(a,function(a){(a=y.selectValueMap[a])&&!a.disabled&&b.push(y.getViewValueFromOption(a))});return b},z.trackBy&&d.$watchCollection(function(){if(J(s.$viewValue))return s.$viewValue.map(function(a){return z.getTrackByValue(a)})},function(){s.$render()})):(p.writeValue=function(a){var b=y.getOptionFromViewValue(a);b?(h[0].value!==b.selectValue&&(u.remove(),v||w.remove(),h[0].value=b.selectValue,b.element.selected=
!0),b.element.setAttribute("selected","selected")):null===a||v?(u.remove(),v||h.prepend(w),h.val(""),w.prop("selected",!0),w.attr("selected",!0)):(v||w.remove(),h.prepend(u),h.val("?"),u.prop("selected",!0),u.attr("selected",!0))},p.readValue=function(){var a=y.selectValueMap[h.val()];return a&&!a.disabled?(v||w.remove(),u.remove(),y.getViewValueFromOption(a)):null},z.trackBy&&d.$watch(function(){return z.getTrackByValue(s.$viewValue)},function(){s.$render()}));v?(w.remove(),a(w)(d),w.removeClass("ng-scope")):
w=B(e.cloneNode(!1));h.empty();n();d.$watchCollection(z.getWatchables,n)}}}}],Je=["$locale","$interpolate","$log",function(a,b,d){var c=/{}/g,e=/^when(Minus)?(.+)$/;return{link:function(f,g,h){function k(a){g.text(a||"")}var l=h.count,m=h.$attr.when&&g.attr(h.$attr.when),n=h.offset||0,p=f.$eval(m)||{},s={},t=b.startSymbol(),x=b.endSymbol(),q=t+l+"-"+n+x,z=ea.noop,v;r(h,function(a,b){var c=e.exec(b);c&&(c=(c[1]?"-":"")+M(c[2]),p[c]=g.attr(h.$attr[b]))});r(p,function(a,d){s[d]=b(a.replace(c,q))});f.$watch(l,
function(b){var c=parseFloat(b),e=isNaN(c);e||c in p||(c=a.pluralCat(c-n));c===v||e&&S(v)&&isNaN(v)||(z(),e=s[c],w(e)?(null!=b&&d.debug("ngPluralize: no rule defined for '"+c+"' in "+m),z=A,k()):z=f.$watch(e,k),v=c)})}}}],Ke=["$parse","$animate","$compile",function(a,b,d){var c=O("ngRepeat"),e=function(a,b,c,d,e,m,n){a[c]=d;e&&(a[e]=m);a.$index=b;a.$first=0===b;a.$last=b===n-1;a.$middle=!(a.$first||a.$last);a.$odd=!(a.$even=0===(b&1))};return{restrict:"A",multiElement:!0,transclude:"element",priority:1E3,
terminal:!0,$$tlb:!0,compile:function(f,g){var h=g.ngRepeat,k=d.$$createComment("end ngRepeat",h),l=h.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);if(!l)throw c("iexp",h);var m=l[1],n=l[2],p=l[3],s=l[4],l=m.match(/^(?:(\s*[\$\w]+)|\(\s*([\$\w]+)\s*,\s*([\$\w]+)\s*\))$/);if(!l)throw c("iidexp",m);var t=l[3]||l[1],w=l[2];if(p&&(!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(p)||/^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(p)))throw c("badident",
p);var q,x,v,u,y={$id:Ga};s?q=a(s):(v=function(a,b){return Ga(b)},u=function(a){return a});return function(a,d,f,g,l){q&&(x=function(b,c,d){w&&(y[w]=b);y[t]=c;y.$index=d;return q(a,y)});var m=T();a.$watchCollection(n,function(f){var g,n,q=d[0],s,y=T(),z,A,E,C,D,B,F;p&&(a[p]=f);if(oa(f))D=f,n=x||v;else for(F in n=x||u,D=[],f)sa.call(f,F)&&"$"!==F.charAt(0)&&D.push(F);z=D.length;F=Array(z);for(g=0;g<z;g++)if(A=f===D?g:D[g],E=f[A],C=n(A,E,g),m[C])B=m[C],delete m[C],y[C]=B,F[g]=B;else{if(y[C])throw r(F,
function(a){a&&a.scope&&(m[a.id]=a)}),c("dupes",h,C,E);F[g]={id:C,scope:void 0,clone:void 0};y[C]=!0}for(s in m){B=m[s];C=tb(B.clone);b.leave(C);if(C[0].parentNode)for(g=0,n=C.length;g<n;g++)C[g].$$NG_REMOVED=!0;B.scope.$destroy()}for(g=0;g<z;g++)if(A=f===D?g:D[g],E=f[A],B=F[g],B.scope){s=q;do s=s.nextSibling;while(s&&s.$$NG_REMOVED);B.clone[0]!=s&&b.move(tb(B.clone),null,q);q=B.clone[B.clone.length-1];e(B.scope,g,t,E,w,A,z)}else l(function(a,c){B.scope=c;var d=k.cloneNode(!1);a[a.length++]=d;b.enter(a,
null,q);q=d;B.clone=a;y[B.id]=B;e(B.scope,g,t,E,w,A,z)});m=y})}}}}],Le=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(b,d,c){b.$watch(c.ngShow,function(b){a[b?"removeClass":"addClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],Ee=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(b,d,c){b.$watch(c.ngHide,function(b){a[b?"addClass":"removeClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],Me=Ma(function(a,b,d){a.$watch(d.ngStyle,function(a,
d){d&&a!==d&&r(d,function(a,c){b.css(c,"")});a&&b.css(a)},!0)}),Ne=["$animate","$compile",function(a,b){return{require:"ngSwitch",controller:["$scope",function(){this.cases={}}],link:function(d,c,e,f){var g=[],h=[],k=[],l=[],m=function(a,b){return function(){a.splice(b,1)}};d.$watch(e.ngSwitch||e.on,function(c){var d,e;d=0;for(e=k.length;d<e;++d)a.cancel(k[d]);d=k.length=0;for(e=l.length;d<e;++d){var t=tb(h[d].clone);l[d].$destroy();(k[d]=a.leave(t)).then(m(k,d))}h.length=0;l.length=0;(g=f.cases["!"+
c]||f.cases["?"])&&r(g,function(c){c.transclude(function(d,e){l.push(e);var f=c.element;d[d.length++]=b.$$createComment("end ngSwitchWhen");h.push({clone:d});a.enter(d,f.parent(),f)})})})}}}],Oe=Ma({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,b,d,c,e){c.cases["!"+d.ngSwitchWhen]=c.cases["!"+d.ngSwitchWhen]||[];c.cases["!"+d.ngSwitchWhen].push({transclude:e,element:b})}}),Pe=Ma({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,
b,d,c,e){c.cases["?"]=c.cases["?"]||[];c.cases["?"].push({transclude:e,element:b})}}),Tg=O("ngTransclude"),Re=Ma({restrict:"EAC",link:function(a,b,d,c,e){d.ngTransclude===d.$attr.ngTransclude&&(d.ngTransclude="");if(!e)throw Tg("orphan",va(b));e(function(a){a.length&&(b.empty(),b.append(a))},null,d.ngTransclude||d.ngTranscludeSlot)}}),re=["$templateCache",function(a){return{restrict:"E",terminal:!0,compile:function(b,d){"text/ng-template"==d.type&&a.put(d.id,b[0].text)}}}],Ug={$setViewValue:A,$render:A},
Vg=["$element","$scope",function(a,b){var d=this,c=new Sa;d.ngModelCtrl=Ug;d.unknownOption=B(E.document.createElement("option"));d.renderUnknownOption=function(b){b="? "+Ga(b)+" ?";d.unknownOption.val(b);a.prepend(d.unknownOption);a.val(b)};b.$on("$destroy",function(){d.renderUnknownOption=A});d.removeUnknownOption=function(){d.unknownOption.parent()&&d.unknownOption.remove()};d.readValue=function(){d.removeUnknownOption();return a.val()};d.writeValue=function(b){d.hasOption(b)?(d.removeUnknownOption(),
a.val(b),""===b&&d.emptyOption.prop("selected",!0)):null==b&&d.emptyOption?(d.removeUnknownOption(),a.val("")):d.renderUnknownOption(b)};d.addOption=function(a,b){if(8!==b[0].nodeType){Ra(a,'"option value"');""===a&&(d.emptyOption=b);var g=c.get(a)||0;c.put(a,g+1);d.ngModelCtrl.$render();b[0].hasAttribute("selected")&&(b[0].selected=!0)}};d.removeOption=function(a){var b=c.get(a);b&&(1===b?(c.remove(a),""===a&&(d.emptyOption=void 0)):c.put(a,b-1))};d.hasOption=function(a){return!!c.get(a)};d.registerOption=
function(a,b,c,h,k){if(h){var l;c.$observe("value",function(a){x(l)&&d.removeOption(l);l=a;d.addOption(a,b)})}else k?a.$watch(k,function(a,e){c.$set("value",a);e!==a&&d.removeOption(e);d.addOption(a,b)}):d.addOption(c.value,b);b.on("$destroy",function(){d.removeOption(c.value);d.ngModelCtrl.$render()})}}],se=function(){return{restrict:"E",require:["select","?ngModel"],controller:Vg,priority:1,link:{pre:function(a,b,d,c){var e=c[1];if(e){var f=c[0];f.ngModelCtrl=e;b.on("change",function(){a.$apply(function(){e.$setViewValue(f.readValue())})});
if(d.multiple){f.readValue=function(){var a=[];r(b.find("option"),function(b){b.selected&&a.push(b.value)});return a};f.writeValue=function(a){var c=new Sa(a);r(b.find("option"),function(a){a.selected=x(c.get(a.value))})};var g,h=NaN;a.$watch(function(){h!==e.$viewValue||na(g,e.$viewValue)||(g=ga(e.$viewValue),e.$render());h=e.$viewValue});e.$isEmpty=function(a){return!a||0===a.length}}}},post:function(a,b,d,c){var e=c[1];if(e){var f=c[0];e.$render=function(){f.writeValue(e.$viewValue)}}}}}},ue=["$interpolate",
function(a){return{restrict:"E",priority:100,compile:function(b,d){if(x(d.value))var c=a(d.value,!0);else{var e=a(b.text(),!0);e||d.$set("value",b.text())}return function(a,b,d){var k=b.parent();(k=k.data("$selectController")||k.parent().data("$selectController"))&&k.registerOption(a,b,d,c,e)}}}}],te=da({restrict:"E",terminal:!1}),Ic=function(){return{restrict:"A",require:"?ngModel",link:function(a,b,d,c){c&&(d.required=!0,c.$validators.required=function(a,b){return!d.required||!c.$isEmpty(b)},d.$observe("required",
function(){c.$validate()}))}}},Hc=function(){return{restrict:"A",require:"?ngModel",link:function(a,b,d,c){if(c){var e,f=d.ngPattern||d.pattern;d.$observe("pattern",function(a){F(a)&&0<a.length&&(a=new RegExp("^"+a+"$"));if(a&&!a.test)throw O("ngPattern")("noregexp",f,a,va(b));e=a||void 0;c.$validate()});c.$validators.pattern=function(a,b){return c.$isEmpty(b)||w(e)||e.test(b)}}}}},Kc=function(){return{restrict:"A",require:"?ngModel",link:function(a,b,d,c){if(c){var e=-1;d.$observe("maxlength",function(a){a=
aa(a);e=isNaN(a)?-1:a;c.$validate()});c.$validators.maxlength=function(a,b){return 0>e||c.$isEmpty(b)||b.length<=e}}}}},Jc=function(){return{restrict:"A",require:"?ngModel",link:function(a,b,d,c){if(c){var e=0;d.$observe("minlength",function(a){e=aa(a)||0;c.$validate()});c.$validators.minlength=function(a,b){return c.$isEmpty(b)||b.length>=e}}}}};E.angular.bootstrap?E.console&&console.log("WARNING: Tried to load angular more than once."):(ke(),me(ea),ea.module("ngLocale",[],["$provide",function(a){function b(a){a+=
"";var b=a.indexOf(".");return-1==b?0:a.length-b-1}a.value("$locale",{DATETIME_FORMATS:{AMPMS:["AM","PM"],DAY:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),ERANAMES:["Before Christ","Anno Domini"],ERAS:["BC","AD"],FIRSTDAYOFWEEK:6,MONTH:"January February March April May June July August September October November December".split(" "),SHORTDAY:"Sun Mon Tue Wed Thu Fri Sat".split(" "),SHORTMONTH:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),STANDALONEMONTH:"January February March April May June July August September October November December".split(" "),
WEEKENDRANGE:[5,6],fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",medium:"MMM d, y h:mm:ss a",mediumDate:"MMM d, y",mediumTime:"h:mm:ss a","short":"M/d/yy h:mm a",shortDate:"M/d/yy",shortTime:"h:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"$",DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-\u00a4",negSuf:"",posPre:"\u00a4",posSuf:""}]},id:"en-us",localeID:"en_US",pluralCat:function(a,
c){var e=a|0,f=c;void 0===f&&(f=Math.min(b(a),3));Math.pow(10,f);return 1==e&&0==f?"one":"other"}})}]),B(E.document).ready(function(){ge(E.document,Bc)}))})(window);!window.angular.$$csp().noInlineStyle&&window.angular.element(document.head).prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}</style>');
//# sourceMappingURL=angular.min.js.map

/*! rusha 2015-06-22 */
(function(){var a={getDataType:function(a){if(typeof a==="string"){return"string"}if(a instanceof Array){return"array"}if(typeof global!=="undefined"&&global.Buffer&&global.Buffer.isBuffer(a)){return"buffer"}if(a instanceof ArrayBuffer){return"arraybuffer"}if(a.buffer instanceof ArrayBuffer){return"view"}if(a instanceof Blob){return"blob"}throw new Error("Unsupported data type.")}};function b(d){"use strict";var e={fill:0};var f=function(a){for(a+=9;a%64>0;a+=1);return a};var g=function(a,b){for(var c=b>>2;c<a.length;c++)a[c]=0};var h=function(a,b,c){a[b>>2]|=128<<24-(b%4<<3);a[((b>>2)+2&~15)+14]=c>>29;a[((b>>2)+2&~15)+15]=c<<3};var i=function(a,b,c,d,e){var f=this,g,h=e%4,i=d%4,j=d-i;if(j>0){switch(h){case 0:a[e+3|0]=f.charCodeAt(c);case 1:a[e+2|0]=f.charCodeAt(c+1);case 2:a[e+1|0]=f.charCodeAt(c+2);case 3:a[e|0]=f.charCodeAt(c+3)}}for(g=h;g<j;g=g+4|0){b[e+g>>2]=f.charCodeAt(c+g)<<24|f.charCodeAt(c+g+1)<<16|f.charCodeAt(c+g+2)<<8|f.charCodeAt(c+g+3)}switch(i){case 3:a[e+j+1|0]=f.charCodeAt(c+j+2);case 2:a[e+j+2|0]=f.charCodeAt(c+j+1);case 1:a[e+j+3|0]=f.charCodeAt(c+j)}};var j=function(a,b,c,d,e){var f=this,g,h=e%4,i=d%4,j=d-i;if(j>0){switch(h){case 0:a[e+3|0]=f[c];case 1:a[e+2|0]=f[c+1];case 2:a[e+1|0]=f[c+2];case 3:a[e|0]=f[c+3]}}for(g=4-h;g<j;g=g+=4|0){b[e+g>>2]=f[c+g]<<24|f[c+g+1]<<16|f[c+g+2]<<8|f[c+g+3]}switch(i){case 3:a[e+j+1|0]=f[c+j+2];case 2:a[e+j+2|0]=f[c+j+1];case 1:a[e+j+3|0]=f[c+j]}};var k=function(a,b,d,e,f){var g=this,h,i=f%4,j=e%4,k=e-j;var l=new Uint8Array(c.readAsArrayBuffer(g.slice(d,d+e)));if(k>0){switch(i){case 0:a[f+3|0]=l[0];case 1:a[f+2|0]=l[1];case 2:a[f+1|0]=l[2];case 3:a[f|0]=l[3]}}for(h=4-i;h<k;h=h+=4|0){b[f+h>>2]=l[h]<<24|l[h+1]<<16|l[h+2]<<8|l[h+3]}switch(j){case 3:a[f+k+1|0]=l[k+2];case 2:a[f+k+2|0]=l[k+1];case 1:a[f+k+3|0]=l[k]}};var l=function(b){switch(a.getDataType(b)){case"string":return i.bind(b);case"array":return j.bind(b);case"buffer":return j.bind(b);case"arraybuffer":return j.bind(new Uint8Array(b));case"view":return j.bind(new Uint8Array(b.buffer,b.byteOffset,b.byteLength));case"blob":return k.bind(b)}};var m=function(b,c){switch(a.getDataType(b)){case"string":return b.slice(c);case"array":return b.slice(c);case"buffer":return b.slice(c);case"arraybuffer":return b.slice(c);case"view":return b.buffer.slice(c)}};var n=function(a){var b,c,d="0123456789abcdef",e=[],f=new Uint8Array(a);for(b=0;b<f.length;b++){c=f[b];e[b]=d.charAt(c>>4&15)+d.charAt(c>>0&15)}return e.join("")};var o=function(a){var b;if(a<=65536)return 65536;if(a<16777216){for(b=1;b<a;b=b<<1);}else{for(b=16777216;b<a;b+=16777216);}return b};var p=function(a){if(a%64>0){throw new Error("Chunk size must be a multiple of 128 bit")}e.maxChunkLen=a;e.padMaxChunkLen=f(a);e.heap=new ArrayBuffer(o(e.padMaxChunkLen+320+20));e.h32=new Int32Array(e.heap);e.h8=new Int8Array(e.heap);e.core=new b._core({Int32Array:Int32Array,DataView:DataView},{},e.heap);e.buffer=null};p(d||64*1024);var q=function(a,b){var c=new Int32Array(a,b+320,5);c[0]=1732584193;c[1]=-271733879;c[2]=-1732584194;c[3]=271733878;c[4]=-1009589776};var r=function(a,b){var c=f(a);var d=new Int32Array(e.heap,0,c>>2);g(d,a);h(d,a,b);return c};var s=function(a,b,c){l(a)(e.h8,e.h32,b,c,0)};var t=function(a,b,c,d,f){var g=c;if(f){g=r(c,d)}s(a,b,c);e.core.hash(g,e.padMaxChunkLen)};var u=function(a,b){var c=new Int32Array(a,b+320,5);var d=new Int32Array(5);var e=new DataView(d.buffer);e.setInt32(0,c[0],false);e.setInt32(4,c[1],false);e.setInt32(8,c[2],false);e.setInt32(12,c[3],false);e.setInt32(16,c[4],false);return d};var v=this.rawDigest=function(a){var b=a.byteLength||a.length||a.size||0;q(e.heap,e.padMaxChunkLen);var c=0,d=e.maxChunkLen,f;for(c=0;b>c+d;c+=d){t(a,c,d,b,false)}t(a,c,b-c,b,true);return u(e.heap,e.padMaxChunkLen)};this.digest=this.digestFromString=this.digestFromBuffer=this.digestFromArrayBuffer=function(a){return n(v(a).buffer)}}b._core=function e(a,b,c){"use asm";var d=new a.Int32Array(c);function e(a,b){a=a|0;b=b|0;var c=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0;f=d[b+320>>2]|0;h=d[b+324>>2]|0;j=d[b+328>>2]|0;l=d[b+332>>2]|0;n=d[b+336>>2]|0;for(c=0;(c|0)<(a|0);c=c+64|0){g=f;i=h;k=j;m=l;o=n;for(e=0;(e|0)<64;e=e+4|0){q=d[c+e>>2]|0;p=((f<<5|f>>>27)+(h&j|~h&l)|0)+((q+n|0)+1518500249|0)|0;n=l;l=j;j=h<<30|h>>>2;h=f;f=p;d[a+e>>2]=q}for(e=a+64|0;(e|0)<(a+80|0);e=e+4|0){q=(d[e-12>>2]^d[e-32>>2]^d[e-56>>2]^d[e-64>>2])<<1|(d[e-12>>2]^d[e-32>>2]^d[e-56>>2]^d[e-64>>2])>>>31;p=((f<<5|f>>>27)+(h&j|~h&l)|0)+((q+n|0)+1518500249|0)|0;n=l;l=j;j=h<<30|h>>>2;h=f;f=p;d[e>>2]=q}for(e=a+80|0;(e|0)<(a+160|0);e=e+4|0){q=(d[e-12>>2]^d[e-32>>2]^d[e-56>>2]^d[e-64>>2])<<1|(d[e-12>>2]^d[e-32>>2]^d[e-56>>2]^d[e-64>>2])>>>31;p=((f<<5|f>>>27)+(h^j^l)|0)+((q+n|0)+1859775393|0)|0;n=l;l=j;j=h<<30|h>>>2;h=f;f=p;d[e>>2]=q}for(e=a+160|0;(e|0)<(a+240|0);e=e+4|0){q=(d[e-12>>2]^d[e-32>>2]^d[e-56>>2]^d[e-64>>2])<<1|(d[e-12>>2]^d[e-32>>2]^d[e-56>>2]^d[e-64>>2])>>>31;p=((f<<5|f>>>27)+(h&j|h&l|j&l)|0)+((q+n|0)-1894007588|0)|0;n=l;l=j;j=h<<30|h>>>2;h=f;f=p;d[e>>2]=q}for(e=a+240|0;(e|0)<(a+320|0);e=e+4|0){q=(d[e-12>>2]^d[e-32>>2]^d[e-56>>2]^d[e-64>>2])<<1|(d[e-12>>2]^d[e-32>>2]^d[e-56>>2]^d[e-64>>2])>>>31;p=((f<<5|f>>>27)+(h^j^l)|0)+((q+n|0)-899497514|0)|0;n=l;l=j;j=h<<30|h>>>2;h=f;f=p;d[e>>2]=q}f=f+g|0;h=h+i|0;j=j+k|0;l=l+m|0;n=n+o|0}d[b+320>>2]=f;d[b+324>>2]=h;d[b+328>>2]=j;d[b+332>>2]=l;d[b+336>>2]=n}return{hash:e}};if(typeof module!=="undefined"){module.exports=b}else if(typeof window!=="undefined"){window.Rusha=b}if(typeof FileReaderSync!=="undefined"){var c=new FileReaderSync,d=new b(4*1024*1024);self.onmessage=function f(a){var b,c=a.data.data;try{b=d.digest(c);self.postMessage({id:a.data.id,hash:b})}catch(e){self.postMessage({id:a.data.id,error:e.name})}}}})();
/*
 long.js (c) 2013 Daniel Wirtz <dcode@dcode.io>
 Released under the Apache License, Version 2.0
 see: https://github.com/dcodeIO/long.js for details
*/
(function(d,g){"function"===typeof define&&define.amd?define([],g):"function"===typeof require&&"object"===typeof module&&module&&module.exports?module.exports=g():(d.dcodeIO=d.dcodeIO||{}).Long=g()})(this,function(){function d(a,b,c){this.low=a|0;this.high=b|0;this.unsigned=!!c}function g(a){return!0===(a&&a.__isLong__)}function m(a,b){var c,t;if(b){a>>>=0;if(t=0<=a&&256>a)if(c=z[a])return c;c=e(a,0>(a|0)?-1:0,!0);t&&(z[a]=c)}else{a|=0;if(t=-128<=a&&128>a)if(c=A[a])return c;c=e(a,0>a?-1:0,!1);t&&
(A[a]=c)}return c}function n(a,b){if(isNaN(a)||!isFinite(a))return b?p:k;if(b){if(0>a)return p;if(a>=B)return C}else{if(a<=-D)return l;if(a+1>=D)return E}return 0>a?n(-a,b).neg():e(a%4294967296|0,a/4294967296|0,b)}function e(a,b,c){return new d(a,b,c)}function x(a,b,c){if(0===a.length)throw Error("empty string");if("NaN"===a||"Infinity"===a||"+Infinity"===a||"-Infinity"===a)return k;"number"===typeof b?(c=b,b=!1):b=!!b;c=c||10;if(2>c||36<c)throw RangeError("radix");var t;if(0<(t=a.indexOf("-")))throw Error("interior hyphen");
if(0===t)return x(a.substring(1),b,c).neg();t=n(v(c,8));for(var e=k,f=0;f<a.length;f+=8){var d=Math.min(8,a.length-f),g=parseInt(a.substring(f,f+d),c);8>d?(d=n(v(c,d)),e=e.mul(d).add(n(g))):(e=e.mul(t),e=e.add(n(g)))}e.unsigned=b;return e}function q(a){return a instanceof d?a:"number"===typeof a?n(a):"string"===typeof a?x(a):e(a.low,a.high,a.unsigned)}Object.defineProperty(d.prototype,"__isLong__",{value:!0,enumerable:!1,configurable:!1});d.isLong=g;var A={},z={};d.fromInt=m;d.fromNumber=n;d.fromBits=
e;var v=Math.pow;d.fromString=x;d.fromValue=q;var B=4294967296*4294967296,D=B/2,F=m(16777216),k=m(0);d.ZERO=k;var p=m(0,!0);d.UZERO=p;var r=m(1);d.ONE=r;var G=m(1,!0);d.UONE=G;var y=m(-1);d.NEG_ONE=y;var E=e(-1,2147483647,!1);d.MAX_VALUE=E;var C=e(-1,-1,!0);d.MAX_UNSIGNED_VALUE=C;var l=e(0,-2147483648,!1);d.MIN_VALUE=l;var b=d.prototype;b.toInt=function(){return this.unsigned?this.low>>>0:this.low};b.toNumber=function(){return this.unsigned?4294967296*(this.high>>>0)+(this.low>>>0):4294967296*this.high+
(this.low>>>0)};b.toString=function(a){a=a||10;if(2>a||36<a)throw RangeError("radix");if(this.isZero())return"0";if(this.isNegative()){if(this.eq(l)){var b=n(a),c=this.div(b),b=c.mul(b).sub(this);return c.toString(a)+b.toInt().toString(a)}return"-"+this.neg().toString(a)}for(var c=n(v(a,6),this.unsigned),b=this,e="";;){var d=b.div(c),f=(b.sub(d.mul(c)).toInt()>>>0).toString(a),b=d;if(b.isZero())return f+e;for(;6>f.length;)f="0"+f;e=""+f+e}};b.getHighBits=function(){return this.high};b.getHighBitsUnsigned=
function(){return this.high>>>0};b.getLowBits=function(){return this.low};b.getLowBitsUnsigned=function(){return this.low>>>0};b.getNumBitsAbs=function(){if(this.isNegative())return this.eq(l)?64:this.neg().getNumBitsAbs();for(var a=0!=this.high?this.high:this.low,b=31;0<b&&0==(a&1<<b);b--);return 0!=this.high?b+33:b+1};b.isZero=function(){return 0===this.high&&0===this.low};b.isNegative=function(){return!this.unsigned&&0>this.high};b.isPositive=function(){return this.unsigned||0<=this.high};b.isOdd=
function(){return 1===(this.low&1)};b.isEven=function(){return 0===(this.low&1)};b.equals=function(a){g(a)||(a=q(a));return this.unsigned!==a.unsigned&&1===this.high>>>31&&1===a.high>>>31?!1:this.high===a.high&&this.low===a.low};b.eq=b.equals;b.notEquals=function(a){return!this.eq(a)};b.neq=b.notEquals;b.lessThan=function(a){return 0>this.comp(a)};b.lt=b.lessThan;b.lessThanOrEqual=function(a){return 0>=this.comp(a)};b.lte=b.lessThanOrEqual;b.greaterThan=function(a){return 0<this.comp(a)};b.gt=b.greaterThan;
b.greaterThanOrEqual=function(a){return 0<=this.comp(a)};b.gte=b.greaterThanOrEqual;b.compare=function(a){g(a)||(a=q(a));if(this.eq(a))return 0;var b=this.isNegative(),c=a.isNegative();return b&&!c?-1:!b&&c?1:this.unsigned?a.high>>>0>this.high>>>0||a.high===this.high&&a.low>>>0>this.low>>>0?-1:1:this.sub(a).isNegative()?-1:1};b.comp=b.compare;b.negate=function(){return!this.unsigned&&this.eq(l)?l:this.not().add(r)};b.neg=b.negate;b.add=function(a){g(a)||(a=q(a));var b=this.high>>>16,c=this.high&65535,
d=this.low>>>16,l=a.high>>>16,f=a.high&65535,n=a.low>>>16,k;k=0+((this.low&65535)+(a.low&65535));a=0+(k>>>16);a+=d+n;d=0+(a>>>16);d+=c+f;c=0+(d>>>16);c=c+(b+l)&65535;return e((a&65535)<<16|k&65535,c<<16|d&65535,this.unsigned)};b.subtract=function(a){g(a)||(a=q(a));return this.add(a.neg())};b.sub=b.subtract;b.multiply=function(a){if(this.isZero())return k;g(a)||(a=q(a));if(a.isZero())return k;if(this.eq(l))return a.isOdd()?l:k;if(a.eq(l))return this.isOdd()?l:k;if(this.isNegative())return a.isNegative()?
this.neg().mul(a.neg()):this.neg().mul(a).neg();if(a.isNegative())return this.mul(a.neg()).neg();if(this.lt(F)&&a.lt(F))return n(this.toNumber()*a.toNumber(),this.unsigned);var b=this.high>>>16,c=this.high&65535,d=this.low>>>16,w=this.low&65535,f=a.high>>>16,m=a.high&65535,p=a.low>>>16;a=a.low&65535;var u,h,s,r;r=0+w*a;s=0+(r>>>16);s+=d*a;h=0+(s>>>16);s=(s&65535)+w*p;h+=s>>>16;s&=65535;h+=c*a;u=0+(h>>>16);h=(h&65535)+d*p;u+=h>>>16;h&=65535;h+=w*m;u+=h>>>16;h&=65535;u=u+(b*a+c*p+d*m+w*f)&65535;return e(s<<
16|r&65535,u<<16|h,this.unsigned)};b.mul=b.multiply;b.divide=function(a){g(a)||(a=q(a));if(a.isZero())throw Error("division by zero");if(this.isZero())return this.unsigned?p:k;var b,c,d;if(this.unsigned)a.unsigned||(a=a.toUnsigned());else{if(this.eq(l)){if(a.eq(r)||a.eq(y))return l;if(a.eq(l))return r;b=this.shr(1).div(a).shl(1);if(b.eq(k))return a.isNegative()?r:y;c=this.sub(a.mul(b));return d=b.add(c.div(a))}if(a.eq(l))return this.unsigned?p:k;if(this.isNegative())return a.isNegative()?this.neg().div(a.neg()):
this.neg().div(a).neg();if(a.isNegative())return this.div(a.neg()).neg()}if(this.unsigned){if(a.gt(this))return p;if(a.gt(this.shru(1)))return G;d=p}else d=k;for(c=this;c.gte(a);){b=Math.max(1,Math.floor(c.toNumber()/a.toNumber()));for(var e=Math.ceil(Math.log(b)/Math.LN2),e=48>=e?1:v(2,e-48),f=n(b),m=f.mul(a);m.isNegative()||m.gt(c);)b-=e,f=n(b,this.unsigned),m=f.mul(a);f.isZero()&&(f=r);d=d.add(f);c=c.sub(m)}return d};b.div=b.divide;b.modulo=function(a){g(a)||(a=q(a));return this.sub(this.div(a).mul(a))};
b.mod=b.modulo;b.not=function(){return e(~this.low,~this.high,this.unsigned)};b.and=function(a){g(a)||(a=q(a));return e(this.low&a.low,this.high&a.high,this.unsigned)};b.or=function(a){g(a)||(a=q(a));return e(this.low|a.low,this.high|a.high,this.unsigned)};b.xor=function(a){g(a)||(a=q(a));return e(this.low^a.low,this.high^a.high,this.unsigned)};b.shiftLeft=function(a){g(a)&&(a=a.toInt());return 0===(a&=63)?this:32>a?e(this.low<<a,this.high<<a|this.low>>>32-a,this.unsigned):e(0,this.low<<a-32,this.unsigned)};
b.shl=b.shiftLeft;b.shiftRight=function(a){g(a)&&(a=a.toInt());return 0===(a&=63)?this:32>a?e(this.low>>>a|this.high<<32-a,this.high>>a,this.unsigned):e(this.high>>a-32,0<=this.high?0:-1,this.unsigned)};b.shr=b.shiftRight;b.shiftRightUnsigned=function(a){g(a)&&(a=a.toInt());a&=63;if(0===a)return this;var b=this.high;return 32>a?e(this.low>>>a|b<<32-a,b>>>a,this.unsigned):32===a?e(b,0,this.unsigned):e(b>>>a-32,0,this.unsigned)};b.shru=b.shiftRightUnsigned;b.toSigned=function(){return this.unsigned?
e(this.low,this.high,!1):this};b.toUnsigned=function(){return this.unsigned?this:e(this.low,this.high,!0)};return d});

!function(a){if("object"==typeof exports)a(require,exports,module);else if("function"==typeof define)define(a);else{var b={};b.exports={};var c=function(a){throw new Error("can't require")};a(c,b.exports,b),window.BigInt=b.exports}}(function(a,b,c){"use strict";function d(a){var b,c,d,e;for(c=new Array(a),b=0;b<a;b++)c[b]=0;for(c[0]=2,d=0;c[d]<a;){for(b=c[d]*c[d];b<a;b+=c[d])c[b]=1;for(d++,c[d]=c[d-1]+1;c[d]<a&&c[c[d]];c[d]++);}for(e=new Array(d),b=0;b<d;b++)e[b]=c[b];return e}function e(a,b){return ya.length!=a.length&&(ya=O(a),za=O(a),Aa=O(a)),Q(Aa,b),f(a,Aa)}function f(a,b){var c,d,e,f;for(ya.length!=a.length&&(ya=O(a),za=O(a),Aa=O(a)),P(Aa,b),P(za,a),P(ya,a),R(za,-1),R(ya,-1),e=0,c=0;c<za.length;c++)for(d=1;d<ka;d<<=1)a[c]&d?(f=e<za.length+ja?e:0,c=za.length,d=ka):e++;if(f&&S(za,f),ga(Aa,za,a),!K(Aa,1)&&!L(Aa,ya)){for(d=1;d<=f-1&&!L(Aa,ya);){if(ea(Aa,a),K(Aa,1))return 0;d++}if(!L(Aa,ya))return 0}return 1}function g(a){var b,c,d;for(b=a.length-1;0==a[b]&&b>0;b--);for(c=0,d=a[b];d;d>>=1,c++);return c+=ja*b}function h(a,b){var c=I(0,(a.length>b?a.length:b)*ja,0);return P(c,a),c}function i(a){var b=I(0,a,0);return t(b,a),fa(b,1)}function j(a){return a>=600?k(a,2):a>=550?k(a,4):a>=500?k(a,5):a>=400?k(a,6):a>=350?k(a,7):a>=300?k(a,9):a>=250?k(a,12):a>=200?k(a,15):a>=150?k(a,18):a>=100?k(a,27):k(a,40)}function k(a,b){var c,e,g,h;for(h=3e4,c=I(0,a,0),0==Ha.length&&(Ha=d(3e4)),Xa.length!=c.length&&(Xa=O(c));;){for(v(c,a,0),c[0]|=1,g=0,e=0;e<Ha.length&&Ha[e]<=h;e++)if(0==H(c,Ha[e])&&!K(c,Ha[e])){g=1;break}for(e=0;e<b&&!g;e++){for(v(Xa,a,0);!E(c,Xa);)v(Xa,a,0);f(c,Xa)||(g=1)}if(!g)return c}}function l(a,b){var c=O(a);return ca(c,b),fa(c,1)}function m(a,b){var c=h(a,a.length+1);return R(c,b),fa(c,1)}function n(a,b){var c=h(a,a.length+b.length);return ba(c,b),fa(c,1)}function o(a,b,c){var d=h(a,c.length);return ga(d,fa(b,2),fa(c,2),0),fa(d,1)}function p(a,b){var c=h(a,a.length>b.length?a.length+1:b.length+1);return _(c,b),fa(c,1)}function q(a,b){var c=h(a,a.length>b.length?a.length+1:b.length+1);return aa(c,b),fa(c,1)}function r(a,b){var c,d=h(a,b.length);return c=z(d,b),c?fa(d,1):null}function s(a,b,c){var d=h(a,c.length);return da(d,b,c),fa(d,1)}function t(a,b){var c,f,h,i,j,k,l,m,n,o,p;if(0==Ha.length&&(Ha=d(3e4)),0==Ia.length)for(Ia=new Array(512),j=0;j<512;j++)Ia[j]=Math.pow(2,j/511-1);c=.1,f=20;var q=20;if(Ka.length!=a.length&&(Ka=O(a),La=O(a),Oa=O(a),Qa=O(a),Ta=O(a),Ua=O(a),Va=O(a),Sa=O(a),Ra=O(a),Ja=O(a),Ma=O(a),Na=O(a),Pa=O(a),Wa=O(a)),b<=q){for(h=(1<<(b+2>>1))-1,Q(a,0),i=1;i;)for(i=0,a[0]=1|1<<b-1|Math.floor(ia()*(1<<b)),j=1;j<Ha.length&&(Ha[j]&h)==Ha[j];j++)if(0==a[0]%Ha[j]){i=1;break}return void G(a)}if(l=c*b*b,b>2*f)for(k=1;b-b*k<=f;)k=Ia[Math.floor(512*ia())];else k=.5;for(p=Math.floor(k*b)+1,t(Na,p),Q(Ka,0),Ka[Math.floor((b-2)/ja)]|=1<<(b-2)%ja,F(Ka,Na,Ja,Ma),n=g(Ja);;){for(;v(La,n,0),!E(Ja,La););for(R(La,1),aa(La,Ja),P(Ra,Na),ba(Ra,La),V(Ra,2),R(Ra,1),P(Qa,La),V(Qa,2),m=0,j=0;j<Ha.length&&Ha[j]<l;j++)if(0==H(Ra,Ha[j])&&!K(Ra,Ha[j])){m=1;break}if(m||e(Ra,2)||(m=1),!m){for(R(Ra,-3),j=Ra.length-1;0==Ra[j]&&j>0;j--);for(o=0,w=Ra[j];w;w>>=1,o++);for(o+=ja*j;v(Pa,o,0),!E(Ra,Pa););if(R(Ra,3),R(Pa,2),P(Sa,Pa),P(Oa,Ra),R(Oa,-1),ga(Sa,Oa,Ra),R(Sa,-1),M(Sa)&&(P(Sa,Pa),ga(Sa,Qa,Ra),R(Sa,-1),P(Wa,Ra),P(Ta,Sa),y(Ta,Ra),K(Ta,1)))return void P(a,Wa)}}}function u(a,b){var c,d;return c=Math.floor((a-1)/ja)+2,d=I(0,0,c),v(d,a,b),d}function v(a,b,c){var d,e;for(d=0;d<a.length;d++)a[d]=0;for(e=Math.floor((b-1)/ja)+1,d=0;d<e;d++)a[d]=Math.floor(ia()*(1<<ja-1));a[e-1]&=(2<<(b-1)%ja)-1,1==c&&(a[e-1]|=1<<(b-1)%ja)}function x(a,b){var c,d;return c=O(a),d=O(b),y(c,d),c}function y(a,b){var c,d,e,f,g,h,i,j,k;for(wa.length!=a.length&&(wa=O(a)),k=1;k;){for(k=0,c=1;c<b.length;c++)if(b[c]){k=1;break}if(!k)break;for(c=a.length;!a[c]&&c>=0;c--);for(d=a[c],e=b[c],f=1,g=0,h=0,i=1;e+h&&e+i;){j=Math.floor((d+f)/(e+h));var l=Math.floor((d+g)/(e+i));if(j!=l)break;oa=f-j*h,f=h,h=oa,oa=g-j*i,g=i,i=oa,oa=d-j*e,d=e,e=oa}g?(P(wa,a),X(a,b,f,g),X(b,wa,i,h)):(ca(a,b),P(wa,a),P(a,b),P(b,wa))}if(0!=b[0])for(oa=H(a,b[0]),Q(a,b[0]),b[0]=oa;b[0];)a[0]%=b[0],oa=a[0],a[0]=b[0],b[0]=oa}function z(a,b){var c=1+2*Math.max(a.length,b.length);if(!(1&a[0]||1&b[0]))return Q(a,0),0;for(Ca.length!=c&&(Ca=new Array(c),Ba=new Array(c),Da=new Array(c),Ea=new Array(c),Fa=new Array(c),Ga=new Array(c)),P(Ca,a),P(Ba,b),Q(Da,1),Q(Ea,0),Q(Fa,0),Q(Ga,1);;){for(;!(1&Ca[0]);)T(Ca),1&Da[0]||1&Ea[0]?(aa(Da,b),T(Da),_(Ea,a),T(Ea)):(T(Da),T(Ea));for(;!(1&Ba[0]);)T(Ba),1&Fa[0]||1&Ga[0]?(aa(Fa,b),T(Fa),_(Ga,a),T(Ga)):(T(Fa),T(Ga));if(E(Ba,Ca)?(_(Ba,Ca),_(Fa,Da),_(Ga,Ea)):(_(Ca,Ba),_(Da,Fa),_(Ea,Ga)),K(Ca,0)){for(;C(Fa);)aa(Fa,b);return P(a,Fa),K(Ba,1)?1:(Q(a,0),0)}}}function A(a,b){for(var c=1,d=0;;){if(1==a)return c;if(0==a)return 0;if(d-=c*Math.floor(b/a),b%=a,1==b)return d;if(0==b)return 0;c-=d*Math.floor(a/b),a%=b}}function B(a,b,c,d,e){var f=0,g=Math.max(a.length,b.length);for(Ca.length!=g&&(Ca=new Array(g),Da=new Array(g),Ea=new Array(g),Fa=new Array(g),Ga=new Array(g));!(1&a[0]||1&b[0]);)T(a),T(b),f++;for(P(Ca,a),P(c,b),Q(Da,1),Q(Ea,0),Q(Fa,0),Q(Ga,1);;){for(;!(1&Ca[0]);)T(Ca),1&Da[0]||1&Ea[0]?(aa(Da,b),T(Da),_(Ea,a),T(Ea)):(T(Da),T(Ea));for(;!(1&c[0]);)T(c),1&Fa[0]||1&Ga[0]?(aa(Fa,b),T(Fa),_(Ga,a),T(Ga)):(T(Fa),T(Ga));if(E(c,Ca)?(_(c,Ca),_(Fa,Da),_(Ga,Ea)):(_(Ca,c),_(Da,Fa),_(Ea,Ga)),K(Ca,0)){for(;C(Fa);)aa(Fa,b),_(Ga,a);return V(Ga,-1),P(d,Fa),P(e,Ga),void U(c,f)}}}function C(a){return a[a.length-1]>>ja-1&1}function D(a,b,c){var d,e=a.length,f=b.length,g=e+c<f?e+c:f;for(d=f-1-c;d<e&&d>=0;d++)if(a[d]>0)return 1;for(d=e-1+c;d<f;d++)if(b[d]>0)return 0;for(d=g-1;d>=c;d--){if(a[d-c]>b[d])return 1;if(a[d-c]<b[d])return 0}return 0}function E(a,b){var c,d=a.length<b.length?a.length:b.length;for(c=a.length;c<b.length;c++)if(b[c])return 0;for(c=b.length;c<a.length;c++)if(a[c])return 1;for(c=d-1;c>=0;c--){if(a[c]>b[c])return 1;if(a[c]<b[c])return 0}return 0}function F(a,b,c,d){var e,f,g,h,i,j,k,l;for(P(d,a),f=b.length;0==b[f-1];f--);for(l=b[f-1],k=0;l;k++)l>>=1;for(k=ja-k,U(b,k),U(d,k),e=d.length;0==d[e-1]&&e>f;e--);for(Q(c,0);!D(b,d,e-f);)$(d,b,e-f),c[e-f]++;for(g=e-1;g>=f;g--){for(d[g]==b[f-1]?c[g-f]=ka:c[g-f]=Math.floor((d[g]*la+d[g-1])/b[f-1]);i=(f>1?b[f-2]:0)*c[g-f],j=i>>ja,i&=ka,h=j+c[g-f]*b[f-1],j=h>>ja,h&=ka,j==d[g]?h==d[g-1]?i>(g>1?d[g-2]:0):h>d[g-1]:j>d[g];)c[g-f]--;Y(d,b,-c[g-f],g-f),C(d)&&(Z(d,b,g-f),c[g-f]--)}S(b,k),S(d,k)}function G(a){var b,c,d,e;for(c=a.length,d=0,b=0;b<c;b++)d+=a[b],e=0,d<0&&(e=-(d>>ja),d+=e*la),a[b]=d&ka,d=(d>>ja)-e}function H(a,b){var c,d=0;for(c=a.length-1;c>=0;c--)d=(d*la+a[c])%b;return d}function I(a,b,c){var d;d=Math.ceil(b/ja)+1,d=c>d?c:d;var e=new Array(d);return Q(e,a),e}function J(a,b,c){var d,e,f,g,h,i,j;"string"==typeof b?(f=b.length,g=b):(f=b,g=ma);var k=a.length;if(f==-1){for(h=new Array(0);;){for(i=new Array(h.length+1),e=0;e<h.length;e++)i[e+1]=h[e];if(i[0]=parseInt(a,10),h=i,d=a.indexOf(",",0),d<1)break;if(a=a.substring(d+1),0==a.length)break}return h.length<c?(i=new Array(c),P(i,h),i):h}for(h=I(0,f*k,0),e=0;e<k;e++)d=g.indexOf(a.substring(e,e+1),0),f<=36&&d>=36&&(d-=26),d>=f||d<0||(V(h,f),R(h,d));for(k=h.length;k>0&&!h[k-1];k--);for(k=c>k+1?c:k+1,i=new Array(k),j=k<h.length?k:h.length,e=0;e<j;e++)i[e]=h[e];for(;e<k;e++)i[e]=0;return i}function K(a,b){var c;if(a[0]!=b)return 0;for(c=1;c<a.length;c++)if(a[c])return 0;return 1}function L(a,b){var c,d=a.length<b.length?a.length:b.length;for(c=0;c<d;c++)if(a[c]!=b[c])return 0;if(a.length>b.length){for(;c<a.length;c++)if(a[c])return 0}else for(;c<b.length;c++)if(b[c])return 0;return 1}function M(a){var b;for(b=0;b<a.length;b++)if(a[b])return 0;return 1}function N(a,b){var c,d,e,f,g="";if("string"==typeof b?(e=b.length,f=b):(e=b,f=ma),ua.length!=a.length?ua=O(a):P(ua,a),e==-1){for(c=a.length-1;c>0;c--)g+=a[c]+",";g+=a[0]}else for(;!M(ua);)d=W(ua,e),g=f.substring(d,d+1)+g;return 0==g.length&&(g=f[0]),g}function O(a){var b=new Array(a.length);return P(b,a),b}function P(a,b){var c,d=a.length<b.length?a.length:b.length;for(c=0;c<d;c++)a[c]=b[c];for(c=d;c<a.length;c++)a[c]=0}function Q(a,b){var c,d;for(d=b,c=0;c<a.length;c++)a[c]=d&ka,d>>=ja}function R(a,b){var c,d,e,f;for(a[0]+=b,d=a.length,e=0,c=0;c<d;c++)if(e+=a[c],f=0,e<0&&(f=-(e>>ja),e+=f*la),a[c]=e&ka,e=(e>>ja)-f,!e)return}function S(a,b){var c,d=Math.floor(b/ja);if(d){for(c=0;c<a.length-d;c++)a[c]=a[c+d];for(;c<a.length;c++)a[c]=0;b%=ja}for(c=0;c<a.length-1;c++)a[c]=ka&(a[c+1]<<ja-b|a[c]>>b);a[c]>>=b}function T(a){var b;for(b=0;b<a.length-1;b++)a[b]=ka&(a[b+1]<<ja-1|a[b]>>1);a[b]=a[b]>>1|a[b]&la>>1}function U(a,b){var c,d=Math.floor(b/ja);if(d){for(c=a.length;c>=d;c--)a[c]=a[c-d];for(;c>=0;c--)a[c]=0;b%=ja}if(b){for(c=a.length-1;c>0;c--)a[c]=ka&(a[c]<<b|a[c-1]>>ja-b);a[c]=ka&a[c]<<b}}function V(a,b){var c,d,e,f;if(b)for(d=a.length,e=0,c=0;c<d;c++)e+=a[c]*b,f=0,e<0&&(f=-(e>>ja),e+=f*la),a[c]=e&ka,e=(e>>ja)-f}function W(a,b){var c,d,e=0;for(c=a.length-1;c>=0;c--)d=e*la+a[c],a[c]=Math.floor(d/b),e=d%b;return e}function X(a,b,c,d){var e,f,g,h;for(g=a.length<b.length?a.length:b.length,h=a.length,f=0,e=0;e<g;e++)f+=c*a[e]+d*b[e],a[e]=f&ka,f>>=ja;for(e=g;e<h;e++)f+=c*a[e],a[e]=f&ka,f>>=ja}function Y(a,b,c,d){var e,f,g,h;for(g=a.length<d+b.length?a.length:d+b.length,h=a.length,f=0,e=d;e<g;e++)f+=a[e]+c*b[e-d],a[e]=f&ka,f>>=ja;for(e=g;f&&e<h;e++)f+=a[e],a[e]=f&ka,f>>=ja}function Z(a,b,c){var d,e,f,g;for(f=a.length<c+b.length?a.length:c+b.length,g=a.length,e=0,d=c;d<f;d++)e+=a[d]+b[d-c],a[d]=e&ka,e>>=ja;for(d=f;e&&d<g;d++)e+=a[d],a[d]=e&ka,e>>=ja}function $(a,b,c){var d,e,f,g;for(f=a.length<c+b.length?a.length:c+b.length,g=a.length,e=0,d=c;d<f;d++)e+=a[d]-b[d-c],a[d]=e&ka,e>>=ja;for(d=f;e&&d<g;d++)e+=a[d],a[d]=e&ka,e>>=ja}function _(a,b){var c,d,e;for(e=a.length<b.length?a.length:b.length,d=0,c=0;c<e;c++)d+=a[c]-b[c],a[c]=d&ka,d>>=ja;for(c=e;d&&c<a.length;c++)d+=a[c],a[c]=d&ka,d>>=ja}function aa(a,b){var c,d,e;for(e=a.length<b.length?a.length:b.length,d=0,c=0;c<e;c++)d+=a[c]+b[c],a[c]=d&ka,d>>=ja;for(c=e;d&&c<a.length;c++)d+=a[c],a[c]=d&ka,d>>=ja}function ba(a,b){var c;for(pa.length!=2*a.length&&(pa=new Array(2*a.length)),Q(pa,0),c=0;c<b.length;c++)b[c]&&Y(pa,a,b[c],c);P(a,pa)}function ca(a,b){sa.length!=a.length?sa=O(a):P(sa,a),ta.length!=a.length&&(ta=O(a)),F(sa,b,ta,a)}function da(a,b,c){var d;for(qa.length!=2*a.length&&(qa=new Array(2*a.length)),Q(qa,0),d=0;d<b.length;d++)b[d]&&Y(qa,a,b[d],d);ca(qa,c),P(a,qa)}function ea(a,b){var c,d,e,f,g;for(f=a.length;f>0&&!a[f-1];f--);for(g=f>b.length?2*f:2*b.length,qa.length!=g&&(qa=new Array(g)),Q(qa,0),c=0;c<f;c++){for(e=qa[2*c]+a[c]*a[c],qa[2*c]=e&ka,e>>=ja,d=c+1;d<f;d++)e=qa[c+d]+2*a[c]*a[d]+e,qa[c+d]=e&ka,e>>=ja;qa[c+f]=e}ca(qa,b),P(a,qa)}function fa(a,b){var c,d;for(c=a.length;c>0&&!a[c-1];c--);return d=new Array(c+b),P(d,a),d}function ga(a,b,c){var d,e,f,g;if(va.length!=c.length&&(va=O(c)),0!=(1&c[0])){for(Q(va,0),f=c.length;f>0&&!c[f-1];f--);for(g=la-A(H(c,la),la),va[f]=1,da(a,va,c),ra.length!=a.length?ra=O(a):P(ra,a),d=b.length-1;d>0&!b[d];d--);if(0==b[d])return void Q(a,1);for(e=1<<ja-1;e&&!(b[d]&e);e>>=1);for(;;){if(!(e>>=1)){if(d--,d<0)return void ha(a,na,c,g);e=1<<ja-1}ha(a,a,c,g),e&b[d]&&ha(a,ra,c,g)}}else for(P(va,a),Q(a,1);!K(b,0);)1&b[0]&&da(a,va,c),W(b,2),ea(va,c)}function ha(a,b,c,d){var e,f,g,h,i,j,k=c.length,l=b.length;for(xa.length!=k&&(xa=new Array(k)),Q(xa,0);k>0&&0==c[k-1];k--);for(;l>0&&0==b[l-1];l--);for(j=xa.length-1,e=0;e<k;e++){for(i=xa[0]+a[e]*b[0],h=(i&ka)*d&ka,g=i+h*c[0]>>ja,i=a[e],f=1;f<l-4;)g+=xa[f]+h*c[f]+i*b[f],xa[f-1]=g&ka,g>>=ja,f++,g+=xa[f]+h*c[f]+i*b[f],xa[f-1]=g&ka,g>>=ja,f++,g+=xa[f]+h*c[f]+i*b[f],xa[f-1]=g&ka,g>>=ja,f++,g+=xa[f]+h*c[f]+i*b[f],xa[f-1]=g&ka,g>>=ja,f++,g+=xa[f]+h*c[f]+i*b[f],xa[f-1]=g&ka,g>>=ja,f++;for(;f<l;)g+=xa[f]+h*c[f]+i*b[f],xa[f-1]=g&ka,g>>=ja,f++;for(;f<k-4;)g+=xa[f]+h*c[f],xa[f-1]=g&ka,g>>=ja,f++,g+=xa[f]+h*c[f],xa[f-1]=g&ka,g>>=ja,f++,g+=xa[f]+h*c[f],xa[f-1]=g&ka,g>>=ja,f++,g+=xa[f]+h*c[f],xa[f-1]=g&ka,g>>=ja,f++,g+=xa[f]+h*c[f],xa[f-1]=g&ka,g>>=ja,f++;for(;f<k;)g+=xa[f]+h*c[f],xa[f-1]=g&ka,g>>=ja,f++;for(;f<j;)g+=xa[f],xa[f-1]=g&ka,g>>=ja,f++;xa[f-1]=g&ka}E(c,xa)||_(xa,c),P(a,xa)}var ia=function(){return Math.random()},ja=0,ka=0,la=ka+1,ma="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz_=!@#$%^&*()[]{}|;:,.<>/?`~ \\'\"+-";for(ja=0;1<<ja+1>1<<ja;ja++);ja>>=1,ka=(1<<ja)-1,la=ka+1;var na=I(1,1,1),oa=new Array(0),pa=oa,qa=oa,ra=oa,sa=oa,ta=oa,ua=oa,va=oa,wa=oa,xa=oa,ya=oa,za=oa,Aa=oa,Ba=oa,Ca=oa,Da=oa,Ea=oa,Fa=oa,Ga=oa,Ha=oa,Ia=oa,Ja=oa,Ka=oa,La=oa,Ma=oa,Na=oa,Oa=oa,Pa=oa,Qa=oa,Ra=oa,Sa=oa,Ta=oa,Ua=oa,Va=oa,Wa=oa,Xa=oa;c.exports={add:q,addInt:m,bigInt2str:N,bitSize:g,dup:O,equals:L,equalsInt:K,expand:h,findPrimes:d,GCD:x,greater:E,greaterShift:D,int2bigInt:I,inverseMod:r,inverseModInt:A,isZero:M,millerRabin:f,millerRabinInt:e,mod:l,modInt:H,mult:n,multMod:s,negative:C,powMod:o,randBigInt:u,randTruePrime:i,randProbPrime:j,str2bigInt:J,sub:p,trim:fa,addInt_:R,add_:aa,copy_:P,copyInt_:Q,GCD_:y,inverseMod_:z,mod_:ca,mult_:ba,multMod_:da,powMod_:ga,randBigInt_:v,randTruePrime_:t,sub_:_,addShift_:Z,carry_:G,divide_:F,divInt_:W,eGCD_:B,halve_:T,leftShift_:U,linComb_:X,linCombShift_:Y,mont_:ha,multInt_:V,rightShift_:S,squareMod_:ea,subShift_:$}});
/** @license zlib.js 2012 - imaya [ https://github.com/imaya/zlib.js ] The MIT License */(function() {'use strict';function n(e){throw e;}var q=void 0,aa=this;function r(e,c){var d=e.split("."),b=aa;!(d[0]in b)&&b.execScript&&b.execScript("var "+d[0]);for(var a;d.length&&(a=d.shift());)!d.length&&c!==q?b[a]=c:b=b[a]?b[a]:b[a]={}};var u="undefined"!==typeof Uint8Array&&"undefined"!==typeof Uint16Array&&"undefined"!==typeof Uint32Array&&"undefined"!==typeof DataView;new (u?Uint8Array:Array)(256);var v;for(v=0;256>v;++v)for(var w=v,ba=7,w=w>>>1;w;w>>>=1)--ba;function x(e,c,d){var b,a="number"===typeof c?c:c=0,f="number"===typeof d?d:e.length;b=-1;for(a=f&7;a--;++c)b=b>>>8^z[(b^e[c])&255];for(a=f>>3;a--;c+=8)b=b>>>8^z[(b^e[c])&255],b=b>>>8^z[(b^e[c+1])&255],b=b>>>8^z[(b^e[c+2])&255],b=b>>>8^z[(b^e[c+3])&255],b=b>>>8^z[(b^e[c+4])&255],b=b>>>8^z[(b^e[c+5])&255],b=b>>>8^z[(b^e[c+6])&255],b=b>>>8^z[(b^e[c+7])&255];return(b^4294967295)>>>0}
var A=[0,1996959894,3993919788,2567524794,124634137,1886057615,3915621685,2657392035,249268274,2044508324,3772115230,2547177864,162941995,2125561021,3887607047,2428444049,498536548,1789927666,4089016648,2227061214,450548861,1843258603,4107580753,2211677639,325883990,1684777152,4251122042,2321926636,335633487,1661365465,4195302755,2366115317,997073096,1281953886,3579855332,2724688242,1006888145,1258607687,3524101629,2768942443,901097722,1119000684,3686517206,2898065728,853044451,1172266101,3705015759,
2882616665,651767980,1373503546,3369554304,3218104598,565507253,1454621731,3485111705,3099436303,671266974,1594198024,3322730930,2970347812,795835527,1483230225,3244367275,3060149565,1994146192,31158534,2563907772,4023717930,1907459465,112637215,2680153253,3904427059,2013776290,251722036,2517215374,3775830040,2137656763,141376813,2439277719,3865271297,1802195444,476864866,2238001368,4066508878,1812370925,453092731,2181625025,4111451223,1706088902,314042704,2344532202,4240017532,1658658271,366619977,
2362670323,4224994405,1303535960,984961486,2747007092,3569037538,1256170817,1037604311,2765210733,3554079995,1131014506,879679996,2909243462,3663771856,1141124467,855842277,2852801631,3708648649,1342533948,654459306,3188396048,3373015174,1466479909,544179635,3110523913,3462522015,1591671054,702138776,2966460450,3352799412,1504918807,783551873,3082640443,3233442989,3988292384,2596254646,62317068,1957810842,3939845945,2647816111,81470997,1943803523,3814918930,2489596804,225274430,2053790376,3826175755,
2466906013,167816743,2097651377,4027552580,2265490386,503444072,1762050814,4150417245,2154129355,426522225,1852507879,4275313526,2312317920,282753626,1742555852,4189708143,2394877945,397917763,1622183637,3604390888,2714866558,953729732,1340076626,3518719985,2797360999,1068828381,1219638859,3624741850,2936675148,906185462,1090812512,3747672003,2825379669,829329135,1181335161,3412177804,3160834842,628085408,1382605366,3423369109,3138078467,570562233,1426400815,3317316542,2998733608,733239954,1555261956,
3268935591,3050360625,752459403,1541320221,2607071920,3965973030,1969922972,40735498,2617837225,3943577151,1913087877,83908371,2512341634,3803740692,2075208622,213261112,2463272603,3855990285,2094854071,198958881,2262029012,4057260610,1759359992,534414190,2176718541,4139329115,1873836001,414664567,2282248934,4279200368,1711684554,285281116,2405801727,4167216745,1634467795,376229701,2685067896,3608007406,1308918612,956543938,2808555105,3495958263,1231636301,1047427035,2932959818,3654703836,1088359270,
936918E3,2847714899,3736837829,1202900863,817233897,3183342108,3401237130,1404277552,615818150,3134207493,3453421203,1423857449,601450431,3009837614,3294710456,1567103746,711928724,3020668471,3272380065,1510334235,755167117],z=u?new Uint32Array(A):A;function B(){}B.prototype.getName=function(){return this.name};B.prototype.getData=function(){return this.data};B.prototype.H=function(){return this.I};r("Zlib.GunzipMember",B);r("Zlib.GunzipMember.prototype.getName",B.prototype.getName);r("Zlib.GunzipMember.prototype.getData",B.prototype.getData);r("Zlib.GunzipMember.prototype.getMtime",B.prototype.H);function D(e){var c=e.length,d=0,b=Number.POSITIVE_INFINITY,a,f,g,k,m,p,t,h,l,y;for(h=0;h<c;++h)e[h]>d&&(d=e[h]),e[h]<b&&(b=e[h]);a=1<<d;f=new (u?Uint32Array:Array)(a);g=1;k=0;for(m=2;g<=d;){for(h=0;h<c;++h)if(e[h]===g){p=0;t=k;for(l=0;l<g;++l)p=p<<1|t&1,t>>=1;y=g<<16|h;for(l=p;l<a;l+=m)f[l]=y;++k}++g;k<<=1;m<<=1}return[f,d,b]};var E=[],F;for(F=0;288>F;F++)switch(!0){case 143>=F:E.push([F+48,8]);break;case 255>=F:E.push([F-144+400,9]);break;case 279>=F:E.push([F-256+0,7]);break;case 287>=F:E.push([F-280+192,8]);break;default:n("invalid literal: "+F)}
var ca=function(){function e(a){switch(!0){case 3===a:return[257,a-3,0];case 4===a:return[258,a-4,0];case 5===a:return[259,a-5,0];case 6===a:return[260,a-6,0];case 7===a:return[261,a-7,0];case 8===a:return[262,a-8,0];case 9===a:return[263,a-9,0];case 10===a:return[264,a-10,0];case 12>=a:return[265,a-11,1];case 14>=a:return[266,a-13,1];case 16>=a:return[267,a-15,1];case 18>=a:return[268,a-17,1];case 22>=a:return[269,a-19,2];case 26>=a:return[270,a-23,2];case 30>=a:return[271,a-27,2];case 34>=a:return[272,
a-31,2];case 42>=a:return[273,a-35,3];case 50>=a:return[274,a-43,3];case 58>=a:return[275,a-51,3];case 66>=a:return[276,a-59,3];case 82>=a:return[277,a-67,4];case 98>=a:return[278,a-83,4];case 114>=a:return[279,a-99,4];case 130>=a:return[280,a-115,4];case 162>=a:return[281,a-131,5];case 194>=a:return[282,a-163,5];case 226>=a:return[283,a-195,5];case 257>=a:return[284,a-227,5];case 258===a:return[285,a-258,0];default:n("invalid length: "+a)}}var c=[],d,b;for(d=3;258>=d;d++)b=e(d),c[d]=b[2]<<24|b[1]<<
16|b[0];return c}();u&&new Uint32Array(ca);function G(e,c){this.i=[];this.j=32768;this.d=this.f=this.c=this.n=0;this.input=u?new Uint8Array(e):e;this.o=!1;this.k=H;this.z=!1;if(c||!(c={}))c.index&&(this.c=c.index),c.bufferSize&&(this.j=c.bufferSize),c.bufferType&&(this.k=c.bufferType),c.resize&&(this.z=c.resize);switch(this.k){case I:this.a=32768;this.b=new (u?Uint8Array:Array)(32768+this.j+258);break;case H:this.a=0;this.b=new (u?Uint8Array:Array)(this.j);this.e=this.F;this.q=this.B;this.l=this.D;break;default:n(Error("invalid inflate mode"))}}
var I=0,H=1;
G.prototype.g=function(){for(;!this.o;){var e=J(this,3);e&1&&(this.o=!0);e>>>=1;switch(e){case 0:var c=this.input,d=this.c,b=this.b,a=this.a,f=c.length,g=q,k=q,m=b.length,p=q;this.d=this.f=0;d+1>=f&&n(Error("invalid uncompressed block header: LEN"));g=c[d++]|c[d++]<<8;d+1>=f&&n(Error("invalid uncompressed block header: NLEN"));k=c[d++]|c[d++]<<8;g===~k&&n(Error("invalid uncompressed block header: length verify"));d+g>c.length&&n(Error("input buffer is broken"));switch(this.k){case I:for(;a+g>b.length;){p=
m-a;g-=p;if(u)b.set(c.subarray(d,d+p),a),a+=p,d+=p;else for(;p--;)b[a++]=c[d++];this.a=a;b=this.e();a=this.a}break;case H:for(;a+g>b.length;)b=this.e({t:2});break;default:n(Error("invalid inflate mode"))}if(u)b.set(c.subarray(d,d+g),a),a+=g,d+=g;else for(;g--;)b[a++]=c[d++];this.c=d;this.a=a;this.b=b;break;case 1:this.l(da,ea);break;case 2:fa(this);break;default:n(Error("unknown BTYPE: "+e))}}return this.q()};
var K=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],L=u?new Uint16Array(K):K,N=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,258,258],O=u?new Uint16Array(N):N,P=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0],Q=u?new Uint8Array(P):P,R=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577],ga=u?new Uint16Array(R):R,ha=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,
13,13],U=u?new Uint8Array(ha):ha,V=new (u?Uint8Array:Array)(288),W,ia;W=0;for(ia=V.length;W<ia;++W)V[W]=143>=W?8:255>=W?9:279>=W?7:8;var da=D(V),X=new (u?Uint8Array:Array)(30),Y,ja;Y=0;for(ja=X.length;Y<ja;++Y)X[Y]=5;var ea=D(X);function J(e,c){for(var d=e.f,b=e.d,a=e.input,f=e.c,g=a.length,k;b<c;)f>=g&&n(Error("input buffer is broken")),d|=a[f++]<<b,b+=8;k=d&(1<<c)-1;e.f=d>>>c;e.d=b-c;e.c=f;return k}
function Z(e,c){for(var d=e.f,b=e.d,a=e.input,f=e.c,g=a.length,k=c[0],m=c[1],p,t;b<m&&!(f>=g);)d|=a[f++]<<b,b+=8;p=k[d&(1<<m)-1];t=p>>>16;e.f=d>>t;e.d=b-t;e.c=f;return p&65535}
function fa(e){function c(a,c,b){var d,e=this.w,f,g;for(g=0;g<a;)switch(d=Z(this,c),d){case 16:for(f=3+J(this,2);f--;)b[g++]=e;break;case 17:for(f=3+J(this,3);f--;)b[g++]=0;e=0;break;case 18:for(f=11+J(this,7);f--;)b[g++]=0;e=0;break;default:e=b[g++]=d}this.w=e;return b}var d=J(e,5)+257,b=J(e,5)+1,a=J(e,4)+4,f=new (u?Uint8Array:Array)(L.length),g,k,m,p;for(p=0;p<a;++p)f[L[p]]=J(e,3);if(!u){p=a;for(a=f.length;p<a;++p)f[L[p]]=0}g=D(f);k=new (u?Uint8Array:Array)(d);m=new (u?Uint8Array:Array)(b);e.w=
0;e.l(D(c.call(e,d,g,k)),D(c.call(e,b,g,m)))}G.prototype.l=function(e,c){var d=this.b,b=this.a;this.r=e;for(var a=d.length-258,f,g,k,m;256!==(f=Z(this,e));)if(256>f)b>=a&&(this.a=b,d=this.e(),b=this.a),d[b++]=f;else{g=f-257;m=O[g];0<Q[g]&&(m+=J(this,Q[g]));f=Z(this,c);k=ga[f];0<U[f]&&(k+=J(this,U[f]));b>=a&&(this.a=b,d=this.e(),b=this.a);for(;m--;)d[b]=d[b++-k]}for(;8<=this.d;)this.d-=8,this.c--;this.a=b};
G.prototype.D=function(e,c){var d=this.b,b=this.a;this.r=e;for(var a=d.length,f,g,k,m;256!==(f=Z(this,e));)if(256>f)b>=a&&(d=this.e(),a=d.length),d[b++]=f;else{g=f-257;m=O[g];0<Q[g]&&(m+=J(this,Q[g]));f=Z(this,c);k=ga[f];0<U[f]&&(k+=J(this,U[f]));b+m>a&&(d=this.e(),a=d.length);for(;m--;)d[b]=d[b++-k]}for(;8<=this.d;)this.d-=8,this.c--;this.a=b};
G.prototype.e=function(){var e=new (u?Uint8Array:Array)(this.a-32768),c=this.a-32768,d,b,a=this.b;if(u)e.set(a.subarray(32768,e.length));else{d=0;for(b=e.length;d<b;++d)e[d]=a[d+32768]}this.i.push(e);this.n+=e.length;if(u)a.set(a.subarray(c,c+32768));else for(d=0;32768>d;++d)a[d]=a[c+d];this.a=32768;return a};
G.prototype.F=function(e){var c,d=this.input.length/this.c+1|0,b,a,f,g=this.input,k=this.b;e&&("number"===typeof e.t&&(d=e.t),"number"===typeof e.A&&(d+=e.A));2>d?(b=(g.length-this.c)/this.r[2],f=258*(b/2)|0,a=f<k.length?k.length+f:k.length<<1):a=k.length*d;u?(c=new Uint8Array(a),c.set(k)):c=k;return this.b=c};
G.prototype.q=function(){var e=0,c=this.b,d=this.i,b,a=new (u?Uint8Array:Array)(this.n+(this.a-32768)),f,g,k,m;if(0===d.length)return u?this.b.subarray(32768,this.a):this.b.slice(32768,this.a);f=0;for(g=d.length;f<g;++f){b=d[f];k=0;for(m=b.length;k<m;++k)a[e++]=b[k]}f=32768;for(g=this.a;f<g;++f)a[e++]=c[f];this.i=[];return this.buffer=a};
G.prototype.B=function(){var e,c=this.a;u?this.z?(e=new Uint8Array(c),e.set(this.b.subarray(0,c))):e=this.b.subarray(0,c):(this.b.length>c&&(this.b.length=c),e=this.b);return this.buffer=e};function $(e){this.input=e;this.c=0;this.m=[];this.s=!1}$.prototype.G=function(){this.s||this.g();return this.m.slice()};
$.prototype.g=function(){for(var e=this.input.length;this.c<e;){var c=new B,d=q,b=q,a=q,f=q,g=q,k=q,m=q,p=q,t=q,h=this.input,l=this.c;c.u=h[l++];c.v=h[l++];(31!==c.u||139!==c.v)&&n(Error("invalid file signature:"+c.u+","+c.v));c.p=h[l++];switch(c.p){case 8:break;default:n(Error("unknown compression method: "+c.p))}c.h=h[l++];p=h[l++]|h[l++]<<8|h[l++]<<16|h[l++]<<24;c.I=new Date(1E3*p);c.O=h[l++];c.N=h[l++];0<(c.h&4)&&(c.J=h[l++]|h[l++]<<8,l+=c.J);if(0<(c.h&8)){m=[];for(k=0;0<(g=h[l++]);)m[k++]=String.fromCharCode(g);
c.name=m.join("")}if(0<(c.h&16)){m=[];for(k=0;0<(g=h[l++]);)m[k++]=String.fromCharCode(g);c.K=m.join("")}0<(c.h&2)&&(c.C=x(h,0,l)&65535,c.C!==(h[l++]|h[l++]<<8)&&n(Error("invalid header crc16")));d=h[h.length-4]|h[h.length-3]<<8|h[h.length-2]<<16|h[h.length-1]<<24;h.length-l-4-4<512*d&&(f=d);b=new G(h,{index:l,bufferSize:f});c.data=a=b.g();l=b.c;c.L=t=(h[l++]|h[l++]<<8|h[l++]<<16|h[l++]<<24)>>>0;x(a,q,q)!==t&&n(Error("invalid CRC-32 checksum: 0x"+x(a,q,q).toString(16)+" / 0x"+t.toString(16)));c.M=
d=(h[l++]|h[l++]<<8|h[l++]<<16|h[l++]<<24)>>>0;(a.length&4294967295)!==d&&n(Error("invalid input size: "+(a.length&4294967295)+" / "+d));this.m.push(c);this.c=l}this.s=!0;var y=this.m,s,M,S=0,T=0,C;s=0;for(M=y.length;s<M;++s)T+=y[s].data.length;if(u){C=new Uint8Array(T);for(s=0;s<M;++s)C.set(y[s].data,S),S+=y[s].data.length}else{C=[];for(s=0;s<M;++s)C[s]=y[s].data;C=Array.prototype.concat.apply([],C)}return C};r("Zlib.Gunzip",$);r("Zlib.Gunzip.prototype.decompress",$.prototype.g);r("Zlib.Gunzip.prototype.getMembers",$.prototype.G);}).call(this); //@ sourceMappingURL=gunzip.min.js.map

function BigInteger(a,b,c){null!=a&&("number"==typeof a?this.fromNumber(a,b,c):null==b&&"string"!=typeof a?this.fromString(a,256):this.fromString(a,b))}function nbi(){return new BigInteger(null)}function am1(a,b,c,d,e,f){for(;--f>=0;){var g=b*this[a++]+c[d]+e;e=Math.floor(g/67108864),c[d++]=67108863&g}return e}function am2(a,b,c,d,e,f){for(var g=32767&b,h=b>>15;--f>=0;){var i=32767&this[a],j=this[a++]>>15,k=h*i+j*g;i=g*i+((32767&k)<<15)+c[d]+(1073741823&e),e=(i>>>30)+(k>>>15)+h*j+(e>>>30),c[d++]=1073741823&i}return e}function am3(a,b,c,d,e,f){for(var g=16383&b,h=b>>14;--f>=0;){var i=16383&this[a],j=this[a++]>>14,k=h*i+j*g;i=g*i+((16383&k)<<14)+c[d]+e,e=(i>>28)+(k>>14)+h*j,c[d++]=268435455&i}return e}function int2char(a){return BI_RM.charAt(a)}function intAt(a,b){var c=BI_RC[a.charCodeAt(b)];return null==c?-1:c}function bnpCopyTo(a){for(var b=this.t-1;b>=0;--b)a[b]=this[b];a.t=this.t,a.s=this.s}function bnpFromInt(a){this.t=1,this.s=0>a?-1:0,a>0?this[0]=a:-1>a?this[0]=a+this.DV:this.t=0}function nbv(a){var b=nbi();return b.fromInt(a),b}function bnpFromString(a,b,c){var d;if(16==b)d=4;else if(8==b)d=3;else if(256==b)d=8;else if(2==b)d=1;else if(32==b)d=5;else{if(4!=b)return void this.fromRadix(a,b);d=2}this.t=0,this.s=0;for(var e=a.length,f=!1,g=0;--e>=0;){var h=8==d?255&a[e]:intAt(a,e);0>h?"-"==a.charAt(e)&&(f=!0):(f=!1,0==g?this[this.t++]=h:g+d>this.DB?(this[this.t-1]|=(h&(1<<this.DB-g)-1)<<g,this[this.t++]=h>>this.DB-g):this[this.t-1]|=h<<g,g+=d,g>=this.DB&&(g-=this.DB))}8==d&&0!=(128&a[0])&&c&&(this.s=-1,g>0&&(this[this.t-1]|=(1<<this.DB-g)-1<<g)),this.clamp(),f&&BigInteger.ZERO.subTo(this,this)}function bnpClamp(){for(var a=this.s&this.DM;this.t>0&&this[this.t-1]==a;)--this.t}function bnToString(a){if(this.s<0)return"-"+this.negate().toString(a);var b;if(16==a)b=4;else if(8==a)b=3;else if(2==a)b=1;else if(32==a)b=5;else{if(4!=a)return this.toRadix(a);b=2}var c,d=(1<<b)-1,e=!1,f="",g=this.t,h=this.DB-g*this.DB%b;if(g-- >0)for(h<this.DB&&(c=this[g]>>h)>0&&(e=!0,f=int2char(c));g>=0;)b>h?(c=(this[g]&(1<<h)-1)<<b-h,c|=this[--g]>>(h+=this.DB-b)):(c=this[g]>>(h-=b)&d,0>=h&&(h+=this.DB,--g)),c>0&&(e=!0),e&&(f+=int2char(c));return e?f:"0"}function bnNegate(){var a=nbi();return BigInteger.ZERO.subTo(this,a),a}function bnAbs(){return this.s<0?this.negate():this}function bnCompareTo(a){var b=this.s-a.s;if(0!=b)return b;var c=this.t;if(b=c-a.t,0!=b)return this.s<0?-b:b;for(;--c>=0;)if(0!=(b=this[c]-a[c]))return b;return 0}function nbits(a){var b,c=1;return 0!=(b=a>>>16)&&(a=b,c+=16),0!=(b=a>>8)&&(a=b,c+=8),0!=(b=a>>4)&&(a=b,c+=4),0!=(b=a>>2)&&(a=b,c+=2),0!=(b=a>>1)&&(a=b,c+=1),c}function bnBitLength(){return this.t<=0?0:this.DB*(this.t-1)+nbits(this[this.t-1]^this.s&this.DM)}function bnpDLShiftTo(a,b){var c;for(c=this.t-1;c>=0;--c)b[c+a]=this[c];for(c=a-1;c>=0;--c)b[c]=0;b.t=this.t+a,b.s=this.s}function bnpDRShiftTo(a,b){for(var c=a;c<this.t;++c)b[c-a]=this[c];b.t=Math.max(this.t-a,0),b.s=this.s}function bnpLShiftTo(a,b){var c,d=a%this.DB,e=this.DB-d,f=(1<<e)-1,g=Math.floor(a/this.DB),h=this.s<<d&this.DM;for(c=this.t-1;c>=0;--c)b[c+g+1]=this[c]>>e|h,h=(this[c]&f)<<d;for(c=g-1;c>=0;--c)b[c]=0;b[g]=h,b.t=this.t+g+1,b.s=this.s,b.clamp()}function bnpRShiftTo(a,b){b.s=this.s;var c=Math.floor(a/this.DB);if(c>=this.t)return void(b.t=0);var d=a%this.DB,e=this.DB-d,f=(1<<d)-1;b[0]=this[c]>>d;for(var g=c+1;g<this.t;++g)b[g-c-1]|=(this[g]&f)<<e,b[g-c]=this[g]>>d;d>0&&(b[this.t-c-1]|=(this.s&f)<<e),b.t=this.t-c,b.clamp()}function bnpSubTo(a,b){for(var c=0,d=0,e=Math.min(a.t,this.t);e>c;)d+=this[c]-a[c],b[c++]=d&this.DM,d>>=this.DB;if(a.t<this.t){for(d-=a.s;c<this.t;)d+=this[c],b[c++]=d&this.DM,d>>=this.DB;d+=this.s}else{for(d+=this.s;c<a.t;)d-=a[c],b[c++]=d&this.DM,d>>=this.DB;d-=a.s}b.s=0>d?-1:0,-1>d?b[c++]=this.DV+d:d>0&&(b[c++]=d),b.t=c,b.clamp()}function bnpMultiplyTo(a,b){var c=this.abs(),d=a.abs(),e=c.t;for(b.t=e+d.t;--e>=0;)b[e]=0;for(e=0;e<d.t;++e)b[e+c.t]=c.am(0,d[e],b,e,0,c.t);b.s=0,b.clamp(),this.s!=a.s&&BigInteger.ZERO.subTo(b,b)}function bnpSquareTo(a){for(var b=this.abs(),c=a.t=2*b.t;--c>=0;)a[c]=0;for(c=0;c<b.t-1;++c){var d=b.am(c,b[c],a,2*c,0,1);(a[c+b.t]+=b.am(c+1,2*b[c],a,2*c+1,d,b.t-c-1))>=b.DV&&(a[c+b.t]-=b.DV,a[c+b.t+1]=1)}a.t>0&&(a[a.t-1]+=b.am(c,b[c],a,2*c,0,1)),a.s=0,a.clamp()}function bnpDivRemTo(a,b,c){var d=a.abs();if(!(d.t<=0)){var e=this.abs();if(e.t<d.t)return null!=b&&b.fromInt(0),void(null!=c&&this.copyTo(c));null==c&&(c=nbi());var f=nbi(),g=this.s,h=a.s,i=this.DB-nbits(d[d.t-1]);i>0?(d.lShiftTo(i,f),e.lShiftTo(i,c)):(d.copyTo(f),e.copyTo(c));var j=f.t,k=f[j-1];if(0!=k){var l=k*(1<<this.F1)+(j>1?f[j-2]>>this.F2:0),m=this.FV/l,n=(1<<this.F1)/l,o=1<<this.F2,p=c.t,q=p-j,r=null==b?nbi():b;for(f.dlShiftTo(q,r),c.compareTo(r)>=0&&(c[c.t++]=1,c.subTo(r,c)),BigInteger.ONE.dlShiftTo(j,r),r.subTo(f,f);f.t<j;)f[f.t++]=0;for(;--q>=0;){var s=c[--p]==k?this.DM:Math.floor(c[p]*m+(c[p-1]+o)*n);if((c[p]+=f.am(0,s,c,q,0,j))<s)for(f.dlShiftTo(q,r),c.subTo(r,c);c[p]<--s;)c.subTo(r,c)}null!=b&&(c.drShiftTo(j,b),g!=h&&BigInteger.ZERO.subTo(b,b)),c.t=j,c.clamp(),i>0&&c.rShiftTo(i,c),0>g&&BigInteger.ZERO.subTo(c,c)}}}function bnMod(a){var b=nbi();return this.abs().divRemTo(a,null,b),this.s<0&&b.compareTo(BigInteger.ZERO)>0&&a.subTo(b,b),b}function Classic(a){this.m=a}function cConvert(a){return a.s<0||a.compareTo(this.m)>=0?a.mod(this.m):a}function cRevert(a){return a}function cReduce(a){a.divRemTo(this.m,null,a)}function cMulTo(a,b,c){a.multiplyTo(b,c),this.reduce(c)}function cSqrTo(a,b){a.squareTo(b),this.reduce(b)}function bnpInvDigit(){if(this.t<1)return 0;var a=this[0];if(0==(1&a))return 0;var b=3&a;return b=b*(2-(15&a)*b)&15,b=b*(2-(255&a)*b)&255,b=b*(2-((65535&a)*b&65535))&65535,b=b*(2-a*b%this.DV)%this.DV,b>0?this.DV-b:-b}function Montgomery(a){this.m=a,this.mp=a.invDigit(),this.mpl=32767&this.mp,this.mph=this.mp>>15,this.um=(1<<a.DB-15)-1,this.mt2=2*a.t}function montConvert(a){var b=nbi();return a.abs().dlShiftTo(this.m.t,b),b.divRemTo(this.m,null,b),a.s<0&&b.compareTo(BigInteger.ZERO)>0&&this.m.subTo(b,b),b}function montRevert(a){var b=nbi();return a.copyTo(b),this.reduce(b),b}function montReduce(a){for(;a.t<=this.mt2;)a[a.t++]=0;for(var b=0;b<this.m.t;++b){var c=32767&a[b],d=c*this.mpl+((c*this.mph+(a[b]>>15)*this.mpl&this.um)<<15)&a.DM;for(c=b+this.m.t,a[c]+=this.m.am(0,d,a,b,0,this.m.t);a[c]>=a.DV;)a[c]-=a.DV,a[++c]++}a.clamp(),a.drShiftTo(this.m.t,a),a.compareTo(this.m)>=0&&a.subTo(this.m,a)}function montSqrTo(a,b){a.squareTo(b),this.reduce(b)}function montMulTo(a,b,c){a.multiplyTo(b,c),this.reduce(c)}function bnpIsEven(){return 0==(this.t>0?1&this[0]:this.s)}function bnpExp(a,b){if(a>4294967295||1>a)return BigInteger.ONE;var c=nbi(),d=nbi(),e=b.convert(this),f=nbits(a)-1;for(e.copyTo(c);--f>=0;)if(b.sqrTo(c,d),(a&1<<f)>0)b.mulTo(d,e,c);else{var g=c;c=d,d=g}return b.revert(c)}function bnModPowInt(a,b){var c;return c=256>a||b.isEven()?new Classic(b):new Montgomery(b),this.exp(a,c)}function bnClone(){var a=nbi();return this.copyTo(a),a}function bnIntValue(){if(this.s<0){if(1==this.t)return this[0]-this.DV;if(0==this.t)return-1}else{if(1==this.t)return this[0];if(0==this.t)return 0}return(this[1]&(1<<32-this.DB)-1)<<this.DB|this[0]}function bnByteValue(){return 0==this.t?this.s:this[0]<<24>>24}function bnShortValue(){return 0==this.t?this.s:this[0]<<16>>16}function bnpChunkSize(a){return Math.floor(Math.LN2*this.DB/Math.log(a))}function bnSigNum(){return this.s<0?-1:this.t<=0||1==this.t&&this[0]<=0?0:1}function bnpToRadix(a){if(null==a&&(a=10),0==this.signum()||2>a||a>36)return"0";var b=this.chunkSize(a),c=Math.pow(a,b),d=nbv(c),e=nbi(),f=nbi(),g="";for(this.divRemTo(d,e,f);e.signum()>0;)g=(c+f.intValue()).toString(a).substr(1)+g,e.divRemTo(d,e,f);return f.intValue().toString(a)+g}function bnpFromRadix(a,b){this.fromInt(0),null==b&&(b=10);for(var c=this.chunkSize(b),d=Math.pow(b,c),e=!1,f=0,g=0,h=0;h<a.length;++h){var i=intAt(a,h);0>i?"-"==a.charAt(h)&&0==this.signum()&&(e=!0):(g=b*g+i,++f>=c&&(this.dMultiply(d),this.dAddOffset(g,0),f=0,g=0))}f>0&&(this.dMultiply(Math.pow(b,f)),this.dAddOffset(g,0)),e&&BigInteger.ZERO.subTo(this,this)}function bnpFromNumber(a,b,c){if("number"==typeof b)if(2>a)this.fromInt(1);else for(this.fromNumber(a,c),this.testBit(a-1)||this.bitwiseTo(BigInteger.ONE.shiftLeft(a-1),op_or,this),this.isEven()&&this.dAddOffset(1,0);!this.isProbablePrime(b);)this.dAddOffset(2,0),this.bitLength()>a&&this.subTo(BigInteger.ONE.shiftLeft(a-1),this);else{var d=new Array,e=7&a;d.length=(a>>3)+1,b.nextBytes(d),e>0?d[0]&=(1<<e)-1:d[0]=0,this.fromString(d,256)}}function bnToByteArray(a){var b=this.t,c=new Array;c[0]=this.s;var d,e=this.DB-b*this.DB%8,f=0;if(b-- >0)for(e<this.DB&&(d=this[b]>>e)!=(this.s&this.DM)>>e&&(c[f++]=d|this.s<<this.DB-e);b>=0;)8>e?(d=(this[b]&(1<<e)-1)<<8-e,d|=this[--b]>>(e+=this.DB-8)):(d=this[b]>>(e-=8)&255,0>=e&&(e+=this.DB,--b)),a&&0!=(128&d)&&(d|=-256),0==f&&(128&this.s)!=(128&d)&&++f,(f>0||d!=this.s)&&(c[f++]=d);return c}function bnEquals(a){return 0==this.compareTo(a)}function bnMin(a){return this.compareTo(a)<0?this:a}function bnMax(a){return this.compareTo(a)>0?this:a}function bnpBitwiseTo(a,b,c){var d,e,f=Math.min(a.t,this.t);for(d=0;f>d;++d)c[d]=b(this[d],a[d]);if(a.t<this.t){for(e=a.s&this.DM,d=f;d<this.t;++d)c[d]=b(this[d],e);c.t=this.t}else{for(e=this.s&this.DM,d=f;d<a.t;++d)c[d]=b(e,a[d]);c.t=a.t}c.s=b(this.s,a.s),c.clamp()}function op_and(a,b){return a&b}function bnAnd(a){var b=nbi();return this.bitwiseTo(a,op_and,b),b}function op_or(a,b){return a|b}function bnOr(a){var b=nbi();return this.bitwiseTo(a,op_or,b),b}function op_xor(a,b){return a^b}function bnXor(a){var b=nbi();return this.bitwiseTo(a,op_xor,b),b}function op_andnot(a,b){return a&~b}function bnAndNot(a){var b=nbi();return this.bitwiseTo(a,op_andnot,b),b}function bnNot(){for(var a=nbi(),b=0;b<this.t;++b)a[b]=this.DM&~this[b];return a.t=this.t,a.s=~this.s,a}function bnShiftLeft(a){var b=nbi();return 0>a?this.rShiftTo(-a,b):this.lShiftTo(a,b),b}function bnShiftRight(a){var b=nbi();return 0>a?this.lShiftTo(-a,b):this.rShiftTo(a,b),b}function lbit(a){if(0==a)return-1;var b=0;return 0==(65535&a)&&(a>>=16,b+=16),0==(255&a)&&(a>>=8,b+=8),0==(15&a)&&(a>>=4,b+=4),0==(3&a)&&(a>>=2,b+=2),0==(1&a)&&++b,b}function bnGetLowestSetBit(){for(var a=0;a<this.t;++a)if(0!=this[a])return a*this.DB+lbit(this[a]);return this.s<0?this.t*this.DB:-1}function cbit(a){for(var b=0;0!=a;)a&=a-1,++b;return b}function bnBitCount(){for(var a=0,b=this.s&this.DM,c=0;c<this.t;++c)a+=cbit(this[c]^b);return a}function bnTestBit(a){var b=Math.floor(a/this.DB);return b>=this.t?0!=this.s:0!=(this[b]&1<<a%this.DB)}function bnpChangeBit(a,b){var c=BigInteger.ONE.shiftLeft(a);return this.bitwiseTo(c,b,c),c}function bnSetBit(a){return this.changeBit(a,op_or)}function bnClearBit(a){return this.changeBit(a,op_andnot)}function bnFlipBit(a){return this.changeBit(a,op_xor)}function bnpAddTo(a,b){for(var c=0,d=0,e=Math.min(a.t,this.t);e>c;)d+=this[c]+a[c],b[c++]=d&this.DM,d>>=this.DB;if(a.t<this.t){for(d+=a.s;c<this.t;)d+=this[c],b[c++]=d&this.DM,d>>=this.DB;d+=this.s}else{for(d+=this.s;c<a.t;)d+=a[c],b[c++]=d&this.DM,d>>=this.DB;d+=a.s}b.s=0>d?-1:0,d>0?b[c++]=d:-1>d&&(b[c++]=this.DV+d),b.t=c,b.clamp()}function bnAdd(a){var b=nbi();return this.addTo(a,b),b}function bnSubtract(a){var b=nbi();return this.subTo(a,b),b}function bnMultiply(a){var b=nbi();return this.multiplyTo(a,b),b}function bnSquare(){var a=nbi();return this.squareTo(a),a}function bnDivide(a){var b=nbi();return this.divRemTo(a,b,null),b}function bnRemainder(a){var b=nbi();return this.divRemTo(a,null,b),b}function bnDivideAndRemainder(a){var b=nbi(),c=nbi();return this.divRemTo(a,b,c),new Array(b,c)}function bnpDMultiply(a){this[this.t]=this.am(0,a-1,this,0,0,this.t),++this.t,this.clamp()}function bnpDAddOffset(a,b){if(0!=a){for(;this.t<=b;)this[this.t++]=0;for(this[b]+=a;this[b]>=this.DV;)this[b]-=this.DV,++b>=this.t&&(this[this.t++]=0),++this[b]}}function NullExp(){}function nNop(a){return a}function nMulTo(a,b,c){a.multiplyTo(b,c)}function nSqrTo(a,b){a.squareTo(b)}function bnPow(a){return this.exp(a,new NullExp)}function bnpMultiplyLowerTo(a,b,c){var d=Math.min(this.t+a.t,b);for(c.s=0,c.t=d;d>0;)c[--d]=0;var e;for(e=c.t-this.t;e>d;++d)c[d+this.t]=this.am(0,a[d],c,d,0,this.t);for(e=Math.min(a.t,b);e>d;++d)this.am(0,a[d],c,d,0,b-d);c.clamp()}function bnpMultiplyUpperTo(a,b,c){--b;var d=c.t=this.t+a.t-b;for(c.s=0;--d>=0;)c[d]=0;for(d=Math.max(b-this.t,0);d<a.t;++d)c[this.t+d-b]=this.am(b-d,a[d],c,0,0,this.t+d-b);c.clamp(),c.drShiftTo(1,c)}function Barrett(a){this.r2=nbi(),this.q3=nbi(),BigInteger.ONE.dlShiftTo(2*a.t,this.r2),this.mu=this.r2.divide(a),this.m=a}function barrettConvert(a){if(a.s<0||a.t>2*this.m.t)return a.mod(this.m);if(a.compareTo(this.m)<0)return a;var b=nbi();return a.copyTo(b),this.reduce(b),b}function barrettRevert(a){return a}function barrettReduce(a){for(a.drShiftTo(this.m.t-1,this.r2),a.t>this.m.t+1&&(a.t=this.m.t+1,a.clamp()),this.mu.multiplyUpperTo(this.r2,this.m.t+1,this.q3),this.m.multiplyLowerTo(this.q3,this.m.t+1,this.r2);a.compareTo(this.r2)<0;)a.dAddOffset(1,this.m.t+1);for(a.subTo(this.r2,a);a.compareTo(this.m)>=0;)a.subTo(this.m,a)}function barrettSqrTo(a,b){a.squareTo(b),this.reduce(b)}function barrettMulTo(a,b,c){a.multiplyTo(b,c),this.reduce(c)}function bnModPow(a,b){var c,d,e=a.bitLength(),f=nbv(1);if(0>=e)return f;c=18>e?1:48>e?3:144>e?4:768>e?5:6,d=8>e?new Classic(b):b.isEven()?new Barrett(b):new Montgomery(b);var g=new Array,h=3,i=c-1,j=(1<<c)-1;if(g[1]=d.convert(this),c>1){var k=nbi();for(d.sqrTo(g[1],k);j>=h;)g[h]=nbi(),d.mulTo(k,g[h-2],g[h]),h+=2}var l,m,n=a.t-1,o=!0,p=nbi();for(e=nbits(a[n])-1;n>=0;){for(e>=i?l=a[n]>>e-i&j:(l=(a[n]&(1<<e+1)-1)<<i-e,n>0&&(l|=a[n-1]>>this.DB+e-i)),h=c;0==(1&l);)l>>=1,--h;if((e-=h)<0&&(e+=this.DB,--n),o)g[l].copyTo(f),o=!1;else{for(;h>1;)d.sqrTo(f,p),d.sqrTo(p,f),h-=2;h>0?d.sqrTo(f,p):(m=f,f=p,p=m),d.mulTo(p,g[l],f)}for(;n>=0&&0==(a[n]&1<<e);)d.sqrTo(f,p),m=f,f=p,p=m,--e<0&&(e=this.DB-1,--n)}return d.revert(f)}function bnGCD(a){var b=this.s<0?this.negate():this.clone(),c=a.s<0?a.negate():a.clone();if(b.compareTo(c)<0){var d=b;b=c,c=d}var e=b.getLowestSetBit(),f=c.getLowestSetBit();if(0>f)return b;for(f>e&&(f=e),f>0&&(b.rShiftTo(f,b),c.rShiftTo(f,c));b.signum()>0;)(e=b.getLowestSetBit())>0&&b.rShiftTo(e,b),(e=c.getLowestSetBit())>0&&c.rShiftTo(e,c),b.compareTo(c)>=0?(b.subTo(c,b),b.rShiftTo(1,b)):(c.subTo(b,c),c.rShiftTo(1,c));return f>0&&c.lShiftTo(f,c),c}function bnpModInt(a){if(0>=a)return 0;var b=this.DV%a,c=this.s<0?a-1:0;if(this.t>0)if(0==b)c=this[0]%a;else for(var d=this.t-1;d>=0;--d)c=(b*c+this[d])%a;return c}function bnModInverse(a){var b=a.isEven();if(this.isEven()&&b||0==a.signum())return BigInteger.ZERO;for(var c=a.clone(),d=this.clone(),e=nbv(1),f=nbv(0),g=nbv(0),h=nbv(1);0!=c.signum();){for(;c.isEven();)c.rShiftTo(1,c),b?(e.isEven()&&f.isEven()||(e.addTo(this,e),f.subTo(a,f)),e.rShiftTo(1,e)):f.isEven()||f.subTo(a,f),f.rShiftTo(1,f);for(;d.isEven();)d.rShiftTo(1,d),b?(g.isEven()&&h.isEven()||(g.addTo(this,g),h.subTo(a,h)),g.rShiftTo(1,g)):h.isEven()||h.subTo(a,h),h.rShiftTo(1,h);c.compareTo(d)>=0?(c.subTo(d,c),b&&e.subTo(g,e),f.subTo(h,f)):(d.subTo(c,d),b&&g.subTo(e,g),h.subTo(f,h))}return 0!=d.compareTo(BigInteger.ONE)?BigInteger.ZERO:h.compareTo(a)>=0?h.subtract(a):h.signum()<0?(h.addTo(a,h),h.signum()<0?h.add(a):h):h}function bnIsProbablePrime(a){var b,c=this.abs();if(1==c.t&&c[0]<=lowprimes[lowprimes.length-1]){for(b=0;b<lowprimes.length;++b)if(c[0]==lowprimes[b])return!0;return!1}if(c.isEven())return!1;for(b=1;b<lowprimes.length;){for(var d=lowprimes[b],e=b+1;e<lowprimes.length&&lplim>d;)d*=lowprimes[e++];for(d=c.modInt(d);e>b;)if(d%lowprimes[b++]==0)return!1}return c.millerRabin(a)}function bnpMillerRabin(a){var b=this.subtract(BigInteger.ONE),c=b.getLowestSetBit();if(0>=c)return!1;var d=b.shiftRight(c);a=a+1>>1,a>lowprimes.length&&(a=lowprimes.length);for(var e=nbi(),f=0;a>f;++f){e.fromInt(lowprimes[Math.floor(Math.random()*lowprimes.length)]);var g=e.modPow(d,this);if(0!=g.compareTo(BigInteger.ONE)&&0!=g.compareTo(b)){for(var h=1;h++<c&&0!=g.compareTo(b);)if(g=g.modPowInt(2,this),0==g.compareTo(BigInteger.ONE))return!1;if(0!=g.compareTo(b))return!1}}return!0}function rng_seed_int(a){rng_pool[rng_pptr++]^=255&a,rng_pool[rng_pptr++]^=a>>8&255,rng_pool[rng_pptr++]^=a>>16&255,rng_pool[rng_pptr++]^=a>>24&255,rng_pptr>=rng_psize&&(rng_pptr-=rng_psize)}function rng_seed_time(){rng_seed_int((new Date).getTime())}function rng_get_byte(){if(null==rng_state){for(rng_seed_time(),rng_state=prng_newstate(),rng_state.init(rng_pool),rng_pptr=0;rng_pptr<rng_pool.length;++rng_pptr)rng_pool[rng_pptr]=0;rng_pptr=0}return rng_state.next()}function rng_get_bytes(a){var b;for(b=0;b<a.length;++b)a[b]=rng_get_byte()}function SecureRandom(){}function Arcfour(){this.i=0,this.j=0,this.S=new Array}function ARC4init(a){var b,c,d;for(b=0;256>b;++b)this.S[b]=b;for(c=0,b=0;256>b;++b)c=c+this.S[b]+a[b%a.length]&255,d=this.S[b],this.S[b]=this.S[c],this.S[c]=d;this.i=0,this.j=0}function ARC4next(){var a;return this.i=this.i+1&255,this.j=this.j+this.S[this.i]&255,a=this.S[this.i],this.S[this.i]=this.S[this.j],this.S[this.j]=a,this.S[a+this.S[this.i]&255]}function prng_newstate(){return new Arcfour}var dbits,canary=0xdeadbeefcafe,j_lm=15715070==(16777215&canary);j_lm&&"Microsoft Internet Explorer"==navigator.appName?(BigInteger.prototype.am=am2,dbits=30):j_lm&&"Netscape"!=navigator.appName?(BigInteger.prototype.am=am1,dbits=26):(BigInteger.prototype.am=am3,dbits=28),BigInteger.prototype.DB=dbits,BigInteger.prototype.DM=(1<<dbits)-1,BigInteger.prototype.DV=1<<dbits;var BI_FP=52;BigInteger.prototype.FV=Math.pow(2,BI_FP),BigInteger.prototype.F1=BI_FP-dbits,BigInteger.prototype.F2=2*dbits-BI_FP;var BI_RM="0123456789abcdefghijklmnopqrstuvwxyz",BI_RC=new Array,rr,vv;for(rr="0".charCodeAt(0),vv=0;9>=vv;++vv)BI_RC[rr++]=vv;for(rr="a".charCodeAt(0),vv=10;36>vv;++vv)BI_RC[rr++]=vv;for(rr="A".charCodeAt(0),vv=10;36>vv;++vv)BI_RC[rr++]=vv;Classic.prototype.convert=cConvert,Classic.prototype.revert=cRevert,Classic.prototype.reduce=cReduce,Classic.prototype.mulTo=cMulTo,Classic.prototype.sqrTo=cSqrTo,Montgomery.prototype.convert=montConvert,Montgomery.prototype.revert=montRevert,Montgomery.prototype.reduce=montReduce,Montgomery.prototype.mulTo=montMulTo,Montgomery.prototype.sqrTo=montSqrTo,BigInteger.prototype.copyTo=bnpCopyTo,BigInteger.prototype.fromInt=bnpFromInt,BigInteger.prototype.fromString=bnpFromString,BigInteger.prototype.clamp=bnpClamp,BigInteger.prototype.dlShiftTo=bnpDLShiftTo,BigInteger.prototype.drShiftTo=bnpDRShiftTo,BigInteger.prototype.lShiftTo=bnpLShiftTo,BigInteger.prototype.rShiftTo=bnpRShiftTo,BigInteger.prototype.subTo=bnpSubTo,BigInteger.prototype.multiplyTo=bnpMultiplyTo,BigInteger.prototype.squareTo=bnpSquareTo,BigInteger.prototype.divRemTo=bnpDivRemTo,BigInteger.prototype.invDigit=bnpInvDigit,BigInteger.prototype.isEven=bnpIsEven,BigInteger.prototype.exp=bnpExp,BigInteger.prototype.toString=bnToString,BigInteger.prototype.negate=bnNegate,BigInteger.prototype.abs=bnAbs,BigInteger.prototype.compareTo=bnCompareTo,BigInteger.prototype.bitLength=bnBitLength,BigInteger.prototype.mod=bnMod,BigInteger.prototype.modPowInt=bnModPowInt,BigInteger.ZERO=nbv(0),BigInteger.ONE=nbv(1),NullExp.prototype.convert=nNop,NullExp.prototype.revert=nNop,NullExp.prototype.mulTo=nMulTo,NullExp.prototype.sqrTo=nSqrTo,Barrett.prototype.convert=barrettConvert,Barrett.prototype.revert=barrettRevert,Barrett.prototype.reduce=barrettReduce,Barrett.prototype.mulTo=barrettMulTo,Barrett.prototype.sqrTo=barrettSqrTo;var lowprimes=[2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101,103,107,109,113,127,131,137,139,149,151,157,163,167,173,179,181,191,193,197,199,211,223,227,229,233,239,241,251,257,263,269,271,277,281,283,293,307,311,313,317,331,337,347,349,353,359,367,373,379,383,389,397,401,409,419,421,431,433,439,443,449,457,461,463,467,479,487,491,499,503,509,521,523,541,547,557,563,569,571,577,587,593,599,601,607,613,617,619,631,641,643,647,653,659,661,673,677,683,691,701,709,719,727,733,739,743,751,757,761,769,773,787,797,809,811,821,823,827,829,839,853,857,859,863,877,881,883,887,907,911,919,929,937,941,947,953,967,971,977,983,991,997],lplim=(1<<26)/lowprimes[lowprimes.length-1];BigInteger.prototype.chunkSize=bnpChunkSize,BigInteger.prototype.toRadix=bnpToRadix,BigInteger.prototype.fromRadix=bnpFromRadix,BigInteger.prototype.fromNumber=bnpFromNumber,BigInteger.prototype.bitwiseTo=bnpBitwiseTo,BigInteger.prototype.changeBit=bnpChangeBit,BigInteger.prototype.addTo=bnpAddTo,BigInteger.prototype.dMultiply=bnpDMultiply,BigInteger.prototype.dAddOffset=bnpDAddOffset,BigInteger.prototype.multiplyLowerTo=bnpMultiplyLowerTo,BigInteger.prototype.multiplyUpperTo=bnpMultiplyUpperTo,BigInteger.prototype.modInt=bnpModInt,BigInteger.prototype.millerRabin=bnpMillerRabin,BigInteger.prototype.clone=bnClone,BigInteger.prototype.intValue=bnIntValue,BigInteger.prototype.byteValue=bnByteValue,BigInteger.prototype.shortValue=bnShortValue,BigInteger.prototype.signum=bnSigNum,BigInteger.prototype.toByteArray=bnToByteArray,BigInteger.prototype.equals=bnEquals,BigInteger.prototype.min=bnMin,BigInteger.prototype.max=bnMax,BigInteger.prototype.and=bnAnd,BigInteger.prototype.or=bnOr,BigInteger.prototype.xor=bnXor,BigInteger.prototype.andNot=bnAndNot,BigInteger.prototype.not=bnNot,BigInteger.prototype.shiftLeft=bnShiftLeft,BigInteger.prototype.shiftRight=bnShiftRight,BigInteger.prototype.getLowestSetBit=bnGetLowestSetBit,BigInteger.prototype.bitCount=bnBitCount,BigInteger.prototype.testBit=bnTestBit,BigInteger.prototype.setBit=bnSetBit,BigInteger.prototype.clearBit=bnClearBit,BigInteger.prototype.flipBit=bnFlipBit,BigInteger.prototype.add=bnAdd,BigInteger.prototype.subtract=bnSubtract,BigInteger.prototype.multiply=bnMultiply,BigInteger.prototype.divide=bnDivide,BigInteger.prototype.remainder=bnRemainder,BigInteger.prototype.divideAndRemainder=bnDivideAndRemainder,BigInteger.prototype.modPow=bnModPow,BigInteger.prototype.modInverse=bnModInverse,BigInteger.prototype.pow=bnPow,BigInteger.prototype.gcd=bnGCD,BigInteger.prototype.isProbablePrime=bnIsProbablePrime,BigInteger.prototype.square=bnSquare;var rng_state,rng_pool,rng_pptr;if(null==rng_pool){rng_pool=new Array,rng_pptr=0;var global="undefined"!=typeof window?window:this,t;if(global&&global.crypto&&global.crypto.getRandomValues){var ua=new Uint8Array(32);for(global.crypto.getRandomValues(ua),t=0;32>t;++t)rng_pool[rng_pptr++]=ua[t]}if("Netscape"==navigator.appName&&navigator.appVersion<"5"&&global&&global.crypto){var z=global.crypto.random(32);for(t=0;t<z.length;++t)rng_pool[rng_pptr++]=255&z.charCodeAt(t)}for(;rng_psize>rng_pptr;)t=Math.floor(65536*Math.random()),rng_pool[rng_pptr++]=t>>>8,rng_pool[rng_pptr++]=255&t;rng_pptr=0,rng_seed_time()}SecureRandom.prototype.nextBytes=rng_get_bytes,Arcfour.prototype.init=ARC4init,Arcfour.prototype.next=ARC4next;var rng_psize=256;
var CryptoJS=CryptoJS||function(a,b){var c={},d=c.lib={},e=d.Base=function(){function a(){}return{extend:function(b){a.prototype=this;var c=new a;return b&&c.mixIn(b),c.hasOwnProperty("init")||(c.init=function(){c.$super.init.apply(this,arguments)}),c.init.prototype=c,c.$super=this,c},create:function(){var a=this.extend();return a.init.apply(a,arguments),a},init:function(){},mixIn:function(a){for(var b in a)a.hasOwnProperty(b)&&(this[b]=a[b]);a.hasOwnProperty("toString")&&(this.toString=a.toString)},clone:function(){return this.init.prototype.extend(this)}}}(),f=d.WordArray=e.extend({init:function(a,c){a=this.words=a||[],c!=b?this.sigBytes=c:this.sigBytes=4*a.length},toString:function(a){return(a||h).stringify(this)},concat:function(a){var b=this.words,c=a.words,d=this.sigBytes,e=a.sigBytes;if(this.clamp(),d%4)for(var f=0;e>f;f++){var g=c[f>>>2]>>>24-f%4*8&255;b[d+f>>>2]|=g<<24-(d+f)%4*8}else if(c.length>65535)for(var f=0;e>f;f+=4)b[d+f>>>2]=c[f>>>2];else for(var f=0;f<c.length;f++)b.push(c[f]);return this.sigBytes+=e,this},clamp:function(){var b=this.words,c=this.sigBytes;b[c>>>2]&=4294967295<<32-c%4*8,b.length=a.ceil(c/4)},clone:function(){var a=e.clone.call(this);return a.words=this.words.slice(0),a},random:function(b){for(var c=[],d=0;b>d;d+=4)c.push(4294967296*a.random()|0);return new f.init(c,b)}}),g=c.enc={},h=g.Hex={stringify:function(a){for(var b=a.words,c=a.sigBytes,d=[],e=0;c>e;e++){var f=b[e>>>2]>>>24-e%4*8&255;d.push((f>>>4).toString(16)),d.push((15&f).toString(16))}return d.join("")},parse:function(a){for(var b=a.length,c=[],d=0;b>d;d+=2)c[d>>>3]|=parseInt(a.substr(d,2),16)<<24-d%8*4;return new f.init(c,b/2)}},i=g.Latin1={stringify:function(a){for(var b=a.words,c=a.sigBytes,d=[],e=0;c>e;e++){var f=b[e>>>2]>>>24-e%4*8&255;d.push(String.fromCharCode(f))}return d.join("")},parse:function(a){for(var b=a.length,c=[],d=0;b>d;d++)c[d>>>2]|=(255&a.charCodeAt(d))<<24-d%4*8;return new f.init(c,b)}},j=g.Utf8={stringify:function(a){try{return decodeURIComponent(escape(i.stringify(a)))}catch(b){throw new Error("Malformed UTF-8 data")}},parse:function(a){return i.parse(unescape(encodeURIComponent(a)))}},k=d.BufferedBlockAlgorithm=e.extend({reset:function(){this._data=new f.init,this._nDataBytes=0},_append:function(a){"string"==typeof a&&(a=j.parse(a)),this._data.concat(a),this._nDataBytes+=a.sigBytes},_process:function(b){var c=this._data,d=c.words,e=c.sigBytes,g=this.blockSize,h=4*g,i=e/h;i=b?a.ceil(i):a.max((0|i)-this._minBufferSize,0);var j=i*g,k=a.min(4*j,e);if(j){for(var l=0;j>l;l+=g)this._doProcessBlock(d,l);var m=d.splice(0,j);c.sigBytes-=k}return new f.init(m,k)},clone:function(){var a=e.clone.call(this);return a._data=this._data.clone(),a},_minBufferSize:0}),l=(d.Hasher=k.extend({cfg:e.extend(),init:function(a){this.cfg=this.cfg.extend(a),this.reset()},reset:function(){k.reset.call(this),this._doReset()},update:function(a){return this._append(a),this._process(),this},finalize:function(a){a&&this._append(a);var b=this._doFinalize();return b},blockSize:16,_createHelper:function(a){return function(b,c){return new a.init(c).finalize(b)}},_createHmacHelper:function(a){return function(b,c){return new l.HMAC.init(a,c).finalize(b)}}}),c.algo={});return c}(Math);CryptoJS.lib.Cipher||function(a){var b=CryptoJS,c=b.lib,d=c.Base,e=c.WordArray,f=c.BufferedBlockAlgorithm,g=b.enc,h=(g.Utf8,g.Base64),i=b.algo,j=i.EvpKDF,k=c.Cipher=f.extend({cfg:d.extend(),createEncryptor:function(a,b){return this.create(this._ENC_XFORM_MODE,a,b)},createDecryptor:function(a,b){return this.create(this._DEC_XFORM_MODE,a,b)},init:function(a,b,c){this.cfg=this.cfg.extend(c),this._xformMode=a,this._key=b,this.reset()},reset:function(){f.reset.call(this),this._doReset()},process:function(a){return this._append(a),this._process()},finalize:function(a){a&&this._append(a);var b=this._doFinalize();return b},keySize:4,ivSize:4,_ENC_XFORM_MODE:1,_DEC_XFORM_MODE:2,_createHelper:function(){function a(a){return"string"==typeof a?w:t}return function(b){return{encrypt:function(c,d,e){return a(d).encrypt(b,c,d,e)},decrypt:function(c,d,e){return a(d).decrypt(b,c,d,e)}}}}()}),l=(c.StreamCipher=k.extend({_doFinalize:function(){var a=this._process(!0);return a},blockSize:1}),b.mode={}),m=c.BlockCipherMode=d.extend({createEncryptor:function(a,b){return this.Encryptor.create(a,b)},createDecryptor:function(a,b){return this.Decryptor.create(a,b)},init:function(a,b){this._cipher=a,this._iv=b}}),n=l.CBC=function(){function b(b,c,d){var e=this._iv;if(e){var f=e;this._iv=a}else var f=this._prevBlock;for(var g=0;d>g;g++)b[c+g]^=f[g]}var c=m.extend();return c.Encryptor=c.extend({processBlock:function(a,c){var d=this._cipher,e=d.blockSize;b.call(this,a,c,e),d.encryptBlock(a,c),this._prevBlock=a.slice(c,c+e)}}),c.Decryptor=c.extend({processBlock:function(a,c){var d=this._cipher,e=d.blockSize,f=a.slice(c,c+e);d.decryptBlock(a,c),b.call(this,a,c,e),this._prevBlock=f}}),c}(),o=(l.IGE=function(){function b(a,b,c,d){for(var e=0;d>e;e++)a[c+e]^=b[e]}var c=m.extend();return c.Encryptor=c.extend({processBlock:function(c,d){var e=this._cipher,f=e.blockSize;this._ivp===a&&(this._ivp=this._iv.slice(0,f),this._iv2p=this._iv.slice(f,f+f));var g=c.slice(d,d+f);b(c,this._ivp,d,f),e.encryptBlock(c,d),b(c,this._iv2p,d,f),this._ivp=c.slice(d,d+f),this._iv2p=g}}),c.Decryptor=c.extend({processBlock:function(c,d){var e=this._cipher,f=e.blockSize;this._ivp===a&&(this._ivp=this._iv.slice(0,f),this._iv2p=this._iv.slice(f,2*f));var g=c.slice(d,d+f);b(c,this._iv2p,d,f),e.decryptBlock(c,d),b(c,this._ivp,d,f),this._ivp=g,this._iv2p=c.slice(d,d+f)}}),c}(),b.pad={}),p=o.Pkcs7={pad:function(a,b){for(var c=4*b,d=c-a.sigBytes%c,f=d<<24|d<<16|d<<8|d,g=[],h=0;d>h;h+=4)g.push(f);var i=e.create(g,d);a.concat(i)},unpad:function(a){var b=255&a.words[a.sigBytes-1>>>2];a.sigBytes-=b}},q=(o.NoPadding={pad:function(){},unpad:function(){}},c.BlockCipher=k.extend({cfg:k.cfg.extend({mode:n,padding:p}),reset:function(){k.reset.call(this);var a=this.cfg,b=a.iv,c=a.mode;if(this._xformMode==this._ENC_XFORM_MODE)var d=c.createEncryptor;else{var d=c.createDecryptor;this._minBufferSize=1}this._mode=d.call(c,this,b&&b.words)},_doProcessBlock:function(a,b){this._mode.processBlock(a,b)},_doFinalize:function(){var a=this.cfg.padding;if(this._xformMode==this._ENC_XFORM_MODE){a.pad(this._data,this.blockSize);var b=this._process(!0)}else{var b=this._process(!0);a.unpad(b)}return b},blockSize:4}),c.CipherParams=d.extend({init:function(a){this.mixIn(a)},toString:function(a){return(a||this.formatter).stringify(this)}})),r=b.format={},s=r.OpenSSL={stringify:function(a){var b=a.ciphertext,c=a.salt;if(c)var d=e.create([1398893684,1701076831]).concat(c).concat(b);else var d=b;return d.toString(h)},parse:function(a){var b=h.parse(a),c=b.words;if(1398893684==c[0]&&1701076831==c[1]){var d=e.create(c.slice(2,4));c.splice(0,4),b.sigBytes-=16}return q.create({ciphertext:b,salt:d})}},t=c.SerializableCipher=d.extend({cfg:d.extend({format:s}),encrypt:function(a,b,c,d){d=this.cfg.extend(d);var e=a.createEncryptor(c,d),f=e.finalize(b),g=e.cfg;return q.create({ciphertext:f,key:c,iv:g.iv,algorithm:a,mode:g.mode,padding:g.padding,blockSize:a.blockSize,formatter:d.format})},decrypt:function(a,b,c,d){d=this.cfg.extend(d),b=this._parse(b,d.format);var e=a.createDecryptor(c,d).finalize(b.ciphertext);return e},_parse:function(a,b){return"string"==typeof a?b.parse(a,this):a}}),u=b.kdf={},v=u.OpenSSL={execute:function(a,b,c,d){d||(d=e.random(8));var f=j.create({keySize:b+c}).compute(a,d),g=e.create(f.words.slice(b),4*c);return f.sigBytes=4*b,q.create({key:f,iv:g,salt:d})}},w=c.PasswordBasedCipher=t.extend({cfg:t.cfg.extend({kdf:v}),encrypt:function(a,b,c,d){d=this.cfg.extend(d);var e=d.kdf.execute(c,a.keySize,a.ivSize);d.iv=e.iv;var f=t.encrypt.call(this,a,b,e.key,d);return f.mixIn(e),f},decrypt:function(a,b,c,d){d=this.cfg.extend(d),b=this._parse(b,d.format);var e=d.kdf.execute(c,a.keySize,a.ivSize,b.salt);d.iv=e.iv;var f=t.decrypt.call(this,a,b,e.key,d);return f}})}(),function(){var a=CryptoJS,b=a.lib,c=b.BlockCipher,d=a.algo,e=[],f=[],g=[],h=[],i=[],j=[],k=[],l=[],m=[],n=[];!function(){for(var a=[],b=0;256>b;b++)128>b?a[b]=b<<1:a[b]=b<<1^283;for(var c=0,d=0,b=0;256>b;b++){var o=d^d<<1^d<<2^d<<3^d<<4;o=o>>>8^255&o^99,e[c]=o,f[o]=c;var p=a[c],q=a[p],r=a[q],s=257*a[o]^16843008*o;g[c]=s<<24|s>>>8,h[c]=s<<16|s>>>16,i[c]=s<<8|s>>>24,j[c]=s;var s=16843009*r^65537*q^257*p^16843008*c;k[o]=s<<24|s>>>8,l[o]=s<<16|s>>>16,m[o]=s<<8|s>>>24,n[o]=s,c?(c=p^a[a[a[r^p]]],d^=a[a[d]]):c=d=1}}();var o=[0,1,2,4,8,16,32,64,128,27,54],p=d.AES=c.extend({_doReset:function(){for(var a=this._key,b=a.words,c=a.sigBytes/4,d=this._nRounds=c+6,f=4*(d+1),g=this._keySchedule=[],h=0;f>h;h++)if(c>h)g[h]=b[h];else{var i=g[h-1];h%c?c>6&&h%c==4&&(i=e[i>>>24]<<24|e[i>>>16&255]<<16|e[i>>>8&255]<<8|e[255&i]):(i=i<<8|i>>>24,i=e[i>>>24]<<24|e[i>>>16&255]<<16|e[i>>>8&255]<<8|e[255&i],i^=o[h/c|0]<<24),g[h]=g[h-c]^i}for(var j=this._invKeySchedule=[],p=0;f>p;p++){var h=f-p;if(p%4)var i=g[h];else var i=g[h-4];4>p||4>=h?j[p]=i:j[p]=k[e[i>>>24]]^l[e[i>>>16&255]]^m[e[i>>>8&255]]^n[e[255&i]]}},encryptBlock:function(a,b){this._doCryptBlock(a,b,this._keySchedule,g,h,i,j,e)},decryptBlock:function(a,b){var c=a[b+1];a[b+1]=a[b+3],a[b+3]=c,this._doCryptBlock(a,b,this._invKeySchedule,k,l,m,n,f);var c=a[b+1];a[b+1]=a[b+3],a[b+3]=c},_doCryptBlock:function(a,b,c,d,e,f,g,h){for(var i=this._nRounds,j=a[b]^c[0],k=a[b+1]^c[1],l=a[b+2]^c[2],m=a[b+3]^c[3],n=4,o=1;i>o;o++){var p=d[j>>>24]^e[k>>>16&255]^f[l>>>8&255]^g[255&m]^c[n++],q=d[k>>>24]^e[l>>>16&255]^f[m>>>8&255]^g[255&j]^c[n++],r=d[l>>>24]^e[m>>>16&255]^f[j>>>8&255]^g[255&k]^c[n++],s=d[m>>>24]^e[j>>>16&255]^f[k>>>8&255]^g[255&l]^c[n++];j=p,k=q,l=r,m=s}var p=(h[j>>>24]<<24|h[k>>>16&255]<<16|h[l>>>8&255]<<8|h[255&m])^c[n++],q=(h[k>>>24]<<24|h[l>>>16&255]<<16|h[m>>>8&255]<<8|h[255&j])^c[n++],r=(h[l>>>24]<<24|h[m>>>16&255]<<16|h[j>>>8&255]<<8|h[255&k])^c[n++],s=(h[m>>>24]<<24|h[j>>>16&255]<<16|h[k>>>8&255]<<8|h[255&l])^c[n++];a[b]=p,a[b+1]=q,a[b+2]=r,a[b+3]=s},keySize:8});a.AES=c._createHelper(p)}(),function(a){var b=CryptoJS,c=b.lib,d=c.WordArray,e=c.Hasher,f=b.algo,g=[],h=[];!function(){function b(b){for(var c=a.sqrt(b),d=2;c>=d;d++)if(!(b%d))return!1;return!0}function c(a){return 4294967296*(a-(0|a))|0}for(var d=2,e=0;64>e;)b(d)&&(8>e&&(g[e]=c(a.pow(d,.5))),h[e]=c(a.pow(d,1/3)),e++),d++}();var i=[],j=f.SHA256=e.extend({_doReset:function(){this._hash=new d.init(g.slice(0))},_doProcessBlock:function(a,b){for(var c=this._hash.words,d=c[0],e=c[1],f=c[2],g=c[3],j=c[4],k=c[5],l=c[6],m=c[7],n=0;64>n;n++){if(16>n)i[n]=0|a[b+n];else{var o=i[n-15],p=(o<<25|o>>>7)^(o<<14|o>>>18)^o>>>3,q=i[n-2],r=(q<<15|q>>>17)^(q<<13|q>>>19)^q>>>10;i[n]=p+i[n-7]+r+i[n-16]}var s=j&k^~j&l,t=d&e^d&f^e&f,u=(d<<30|d>>>2)^(d<<19|d>>>13)^(d<<10|d>>>22),v=(j<<26|j>>>6)^(j<<21|j>>>11)^(j<<7|j>>>25),w=m+v+s+h[n]+i[n],x=u+t;m=l,l=k,k=j,j=g+w|0,g=f,f=e,e=d,d=w+x|0}c[0]=c[0]+d|0,c[1]=c[1]+e|0,c[2]=c[2]+f|0,c[3]=c[3]+g|0,c[4]=c[4]+j|0,c[5]=c[5]+k|0,c[6]=c[6]+l|0,c[7]=c[7]+m|0},_doFinalize:function(){var b=this._data,c=b.words,d=8*this._nDataBytes,e=8*b.sigBytes;return c[e>>>5]|=128<<24-e%32,c[(e+64>>>9<<4)+14]=a.floor(d/4294967296),c[(e+64>>>9<<4)+15]=d,b.sigBytes=4*c.length,this._process(),this._hash},clone:function(){var a=e.clone.call(this);return a._hash=this._hash.clone(),a}});b.SHA256=e._createHelper(j),b.HmacSHA256=e._createHmacHelper(j)}(Math);
// Console-polyfill. MIT license.
// https://github.com/paulmillr/console-polyfill
// Make it safe to do console.log() always.
;(function(global) {
  'use strict';
  global.console = global.console || {};
  var con = global.console;
  var prop, method;
  var empty = {};
  var dummy = function() {};
  var properties = 'memory'.split(',');
  var methods = ('assert,clear,count,debug,dir,dirxml,error,exception,group,' +
     'groupCollapsed,groupEnd,info,log,markTimeline,profile,profiles,profileEnd,' +
     'show,table,time,timeEnd,timeline,timelineEnd,timeStamp,trace,warn').split(',');
  while (prop = properties.pop()) if (!con[prop]) con[prop] = empty;
  while (method = methods.pop()) if (!con[method]) con[method] = dummy;
})(typeof window === 'undefined' ? this : window);
// Using `this` for web workers while maintaining compatibility with browser
// targeted script loaders such as Browserify or Webpack where the only way to
// get to the global object is via `window`.

/* Array.indexOf polyfill */
if (!Array.prototype.indexOf) {
  Array.prototype.indexOf = function(searchElement, fromIndex) {
    var k;
    if (this == null) {
      throw new TypeError('"this" is null or not defined');
    }

    var O = Object(this);
    var len = O.length >>> 0;
    if (len === 0) {
      return -1;
    }
    var n = +fromIndex || 0;

    if (Math.abs(n) === Infinity) {
      n = 0;
    }
    if (n >= len) {
      return -1;
    }
    k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);
    while (k < len) {
      if (k in O && O[k] === searchElement) {
        return k;
      }
      k++;
    }
    return -1;
  };
}

/* Array.isArray polyfill */
if (!Array.isArray) {
  Array.isArray = function(arg) {
    return Object.prototype.toString.call(arg) === '[object Array]';
  };
}

/* Object.create polyfill */
if (typeof Object.create != 'function') {
  Object.create = (function() {
    var Object = function() {};
    return function (prototype) {
      if (arguments.length > 1) {
        throw Error('Second argument not supported');
      }
      if (typeof prototype != 'object') {
        throw TypeError('Argument must be an object');
      }
      Object.prototype = prototype;
      var result = new Object();
      Object.prototype = null;
      return result;
    };
  })();
}

/* Function.bind polyfill */
if (!Function.prototype.bind) {
  Function.prototype.bind = function (oThis) {
    if (typeof this !== "function") {
      throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
    }

    var aArgs = Array.prototype.slice.call(arguments, 1),
        fToBind = this,
        fNOP = function () {},
        fBound = function () {
          return fToBind.apply(this instanceof fNOP && oThis
                 ? this
                 : oThis,
                 aArgs.concat(Array.prototype.slice.call(arguments)));
        };

    fNOP.prototype = this.prototype;
    fBound.prototype = new fNOP();

    return fBound;
  };
}

/* setZeroTimeout polyfill, from http://dbaron.org/log/20100309-faster-timeouts */
(function(global) {
  var timeouts = [];
  var messageName = 'zero-timeout-message';

  function setZeroTimeout(fn) {
    timeouts.push(fn);
    global.postMessage(messageName, '*');
  }

  function handleMessage(event) {
    if (event.source == global && event.data == messageName) {
      event.stopPropagation();
      if (timeouts.length > 0) {
        var fn = timeouts.shift();
        fn();
      }
    }
  }

  global.addEventListener('message', handleMessage, true);

  var originalSetTimeout = global.setTimeout;
  global.setTimeout = function (callback, delay) {
    if (!delay || delay <= 5) {
      return setZeroTimeout(callback);
    }
    return originalSetTimeout(callback, delay);
  };

  global.setZeroTimeout = setZeroTimeout;
})(this);

/*!
 * Webogram v0.5.3 - messaging web application for MTProto
 * https://github.com/zhukov/webogram
 * Copyright (C) 2014 Igor Zhukov <igor.beatle@gmail.com>
 * https://github.com/zhukov/webogram/blob/master/LICENSE
 */


Config = window.Config || {};

/*

  IMPORTANT NOTICE
  ================

  Do not publish your Webogram fork with my app credentials (below), or your application may be blocked.
  You can get your own api_id, api_hash at https://my.telegram.org, see manual at https://core.telegram.org/api/obtaining_api_id.

*/

Config.App = {
  version: '1.1.0'
};

Config.Server = {};

Config.Modes = {
  test: location.search.indexOf('test=1') > 0,
  debug: location.search.indexOf('debug=1') > 0,
  http: location.search.indexOf('http=1') > 0,
  ssl: location.search.indexOf('ssl=1') > 0 || location.protocol == 'https:' && location.search.indexOf('ssl=0') == -1,
  force_mobile: location.search.indexOf('mobile=1') > 0,
  force_desktop: location.search.indexOf('desktop=1') > 0,
  nacl: location.search.indexOf('nacl=0')== -1,
  webcrypto: location.search.indexOf('webcrypto=0')== -1,
  packed: location.protocol == 'app:' || location.protocol == 'chrome-extension:',
  ios_standalone: window.navigator.standalone && navigator.userAgent.match(/iOS|iPhone|iPad/),
  chrome_packed: window.chrome && chrome.app && chrome.app.window && true || false,
  animations: true,
  memory_only: false
};

Config.Navigator = {
  osX:  (navigator.platform || '').toLowerCase().indexOf('mac') != -1 ||
        (navigator.userAgent || '').toLowerCase().indexOf('mac') != -1,
  msie: (navigator.userAgent || '').search(/MSIE | Trident\/|Edge\//) != -1,
  retina: window.devicePixelRatio > 1,
  ffos: navigator.userAgent.search(/mobi.+Gecko/i) != -1,
  ffos2p: navigator.userAgent.search(/mobi.+Gecko\/[34567]/i) != -1,
  touch: screen.width <= 768 || ('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch,
  mobile: screen.width && screen.width < 480 || navigator.userAgent.search(/iOS|iPhone OS|Android|BlackBerry|BB10|Series ?[64]0|J2ME|MIDP|opera mini|opera mobi|mobi.+Gecko|Windows Phone/i) != -1
};

// Touch detect: https://github.com/Modernizr/Modernizr/blob/master/feature-detects/touchevents.js

Config.I18n = {
  locale: 'en-us',
  supported: [
    "en-us"
    ,"es-es"
    ,"de-de"
    ,"it-it"
    ,"nl-nl"
    ,"pt-br"
    // ,"ru-ru"
  ], // To be copied to package.json
  languages: {
    'en-us': 'English',
    'de-de': 'Deutsch',
    'es-es': 'Español',
    'it-it': 'Italiano',
    'ru-ru': 'Русский',
    'nl-nl': 'Nederlands',
    'pt-br': 'Português (Brazil)'
  },
  aliases: {
    'en': 'en-us',
    'de': 'de-de',
    'es': 'es-es',
    'it': 'it-it',
    'ru': 'ru-ru',
    'nl': 'nl-nl'
  },
  messages: {},
  fallback_messages: {}
};

Config.Schema = Config.Schema || {};

Config.Schema.MTProto = {"constructors":[{"id":"481674261","predicate":"vector","params":[],"type":"Vector t"},{"id":"85337187","predicate":"resPQ","params":[{"name":"nonce","type":"int128"},{"name":"server_nonce","type":"int128"},{"name":"pq","type":"bytes"},{"name":"server_public_key_fingerprints","type":"Vector<long>"}],"type":"ResPQ"},{"id":"-2083955988","predicate":"p_q_inner_data","params":[{"name":"pq","type":"bytes"},{"name":"p","type":"bytes"},{"name":"q","type":"bytes"},{"name":"nonce","type":"int128"},{"name":"server_nonce","type":"int128"},{"name":"new_nonce","type":"int256"}],"type":"P_Q_inner_data"},{"id":"2043348061","predicate":"server_DH_params_fail","params":[{"name":"nonce","type":"int128"},{"name":"server_nonce","type":"int128"},{"name":"new_nonce_hash","type":"int128"}],"type":"Server_DH_Params"},{"id":"-790100132","predicate":"server_DH_params_ok","params":[{"name":"nonce","type":"int128"},{"name":"server_nonce","type":"int128"},{"name":"encrypted_answer","type":"bytes"}],"type":"Server_DH_Params"},{"id":"-1249309254","predicate":"server_DH_inner_data","params":[{"name":"nonce","type":"int128"},{"name":"server_nonce","type":"int128"},{"name":"g","type":"int"},{"name":"dh_prime","type":"bytes"},{"name":"g_a","type":"bytes"},{"name":"server_time","type":"int"}],"type":"Server_DH_inner_data"},{"id":"1715713620","predicate":"client_DH_inner_data","params":[{"name":"nonce","type":"int128"},{"name":"server_nonce","type":"int128"},{"name":"retry_id","type":"long"},{"name":"g_b","type":"bytes"}],"type":"Client_DH_Inner_Data"},{"id":"1003222836","predicate":"dh_gen_ok","params":[{"name":"nonce","type":"int128"},{"name":"server_nonce","type":"int128"},{"name":"new_nonce_hash1","type":"int128"}],"type":"Set_client_DH_params_answer"},{"id":"1188831161","predicate":"dh_gen_retry","params":[{"name":"nonce","type":"int128"},{"name":"server_nonce","type":"int128"},{"name":"new_nonce_hash2","type":"int128"}],"type":"Set_client_DH_params_answer"},{"id":"-1499615742","predicate":"dh_gen_fail","params":[{"name":"nonce","type":"int128"},{"name":"server_nonce","type":"int128"},{"name":"new_nonce_hash3","type":"int128"}],"type":"Set_client_DH_params_answer"},{"id":"-212046591","predicate":"rpc_result","params":[{"name":"req_msg_id","type":"long"},{"name":"result","type":"Object"}],"type":"RpcResult"},{"id":"558156313","predicate":"rpc_error","params":[{"name":"error_code","type":"int"},{"name":"error_message","type":"string"}],"type":"RpcError"},{"id":"1579864942","predicate":"rpc_answer_unknown","params":[],"type":"RpcDropAnswer"},{"id":"-847714938","predicate":"rpc_answer_dropped_running","params":[],"type":"RpcDropAnswer"},{"id":"-1539647305","predicate":"rpc_answer_dropped","params":[{"name":"msg_id","type":"long"},{"name":"seq_no","type":"int"},{"name":"bytes","type":"int"}],"type":"RpcDropAnswer"},{"id":"155834844","predicate":"future_salt","params":[{"name":"valid_since","type":"int"},{"name":"valid_until","type":"int"},{"name":"salt","type":"long"}],"type":"FutureSalt"},{"id":"-1370486635","predicate":"future_salts","params":[{"name":"req_msg_id","type":"long"},{"name":"now","type":"int"},{"name":"salts","type":"vector<future_salt>"}],"type":"FutureSalts"},{"id":"880243653","predicate":"pong","params":[{"name":"msg_id","type":"long"},{"name":"ping_id","type":"long"}],"type":"Pong"},{"id":"-501201412","predicate":"destroy_session_ok","params":[{"name":"session_id","type":"long"}],"type":"DestroySessionRes"},{"id":"1658015945","predicate":"destroy_session_none","params":[{"name":"session_id","type":"long"}],"type":"DestroySessionRes"},{"id":"-1631450872","predicate":"new_session_created","params":[{"name":"first_msg_id","type":"long"},{"name":"unique_id","type":"long"},{"name":"server_salt","type":"long"}],"type":"NewSession"},{"id":"1945237724","predicate":"msg_container","params":[{"name":"messages","type":"vector<%Message>"}],"type":"MessageContainer"},{"id":"1538843921","predicate":"message","params":[{"name":"msg_id","type":"long"},{"name":"seqno","type":"int"},{"name":"bytes","type":"int"},{"name":"body","type":"Object"}],"type":"Message"},{"id":"-530561358","predicate":"msg_copy","params":[{"name":"orig_message","type":"Message"}],"type":"MessageCopy"},{"id":"812830625","predicate":"gzip_packed","params":[{"name":"packed_data","type":"bytes"}],"type":"Object"},{"id":"1658238041","predicate":"msgs_ack","params":[{"name":"msg_ids","type":"Vector<long>"}],"type":"MsgsAck"},{"id":"-1477445615","predicate":"bad_msg_notification","params":[{"name":"bad_msg_id","type":"long"},{"name":"bad_msg_seqno","type":"int"},{"name":"error_code","type":"int"}],"type":"BadMsgNotification"},{"id":"-307542917","predicate":"bad_server_salt","params":[{"name":"bad_msg_id","type":"long"},{"name":"bad_msg_seqno","type":"int"},{"name":"error_code","type":"int"},{"name":"new_server_salt","type":"long"}],"type":"BadMsgNotification"},{"id":"2105940488","predicate":"msg_resend_req","params":[{"name":"msg_ids","type":"Vector<long>"}],"type":"MsgResendReq"},{"id":"-630588590","predicate":"msgs_state_req","params":[{"name":"msg_ids","type":"Vector<long>"}],"type":"MsgsStateReq"},{"id":"81704317","predicate":"msgs_state_info","params":[{"name":"req_msg_id","type":"long"},{"name":"info","type":"bytes"}],"type":"MsgsStateInfo"},{"id":"-1933520591","predicate":"msgs_all_info","params":[{"name":"msg_ids","type":"Vector<long>"},{"name":"info","type":"bytes"}],"type":"MsgsAllInfo"},{"id":"661470918","predicate":"msg_detailed_info","params":[{"name":"msg_id","type":"long"},{"name":"answer_msg_id","type":"long"},{"name":"bytes","type":"int"},{"name":"status","type":"int"}],"type":"MsgDetailedInfo"},{"id":"-2137147681","predicate":"msg_new_detailed_info","params":[{"name":"answer_msg_id","type":"long"},{"name":"bytes","type":"int"},{"name":"status","type":"int"}],"type":"MsgDetailedInfo"}],"methods":[{"id":"1615239032","method":"req_pq","params":[{"name":"nonce","type":"int128"}],"type":"ResPQ"},{"id":"-686627650","method":"req_DH_params","params":[{"name":"nonce","type":"int128"},{"name":"server_nonce","type":"int128"},{"name":"p","type":"bytes"},{"name":"q","type":"bytes"},{"name":"public_key_fingerprint","type":"long"},{"name":"encrypted_data","type":"bytes"}],"type":"Server_DH_Params"},{"id":"-184262881","method":"set_client_DH_params","params":[{"name":"nonce","type":"int128"},{"name":"server_nonce","type":"int128"},{"name":"encrypted_data","type":"bytes"}],"type":"Set_client_DH_params_answer"},{"id":"1491380032","method":"rpc_drop_answer","params":[{"name":"req_msg_id","type":"long"}],"type":"RpcDropAnswer"},{"id":"-1188971260","method":"get_future_salts","params":[{"name":"num","type":"int"}],"type":"FutureSalts"},{"id":"2059302892","method":"ping","params":[{"name":"ping_id","type":"long"}],"type":"Pong"},{"id":"-213746804","method":"ping_delay_disconnect","params":[{"name":"ping_id","type":"long"},{"name":"disconnect_delay","type":"int"}],"type":"Pong"},{"id":"-414113498","method":"destroy_session","params":[{"name":"session_id","type":"long"}],"type":"DestroySessionRes"},{"id":"-1835453025","method":"http_wait","params":[{"name":"max_delay","type":"int"},{"name":"wait_after","type":"int"},{"name":"max_wait","type":"int"}],"type":"HttpWait"}]};

Config.Schema.API = {"constructors":[{"id":"-1132882121","predicate":"boolFalse","params":[],"type":"Bool"},{"id":"-1720552011","predicate":"boolTrue","params":[],"type":"Bool"},{"id":"1072550713","predicate":"true","params":[],"type":"True"},{"id":"481674261","predicate":"vector","params":[],"type":"Vector t"},{"id":"-994444869","predicate":"error","params":[{"name":"code","type":"int"},{"name":"text","type":"string"}],"type":"Error"},{"id":"1450380236","predicate":"null","params":[],"type":"Null"},{"id":"2134579434","predicate":"inputPeerEmpty","params":[],"type":"InputPeer"},{"id":"2107670217","predicate":"inputPeerSelf","params":[],"type":"InputPeer"},{"id":"396093539","predicate":"inputPeerChat","params":[{"name":"chat_id","type":"int"}],"type":"InputPeer"},{"id":"-1182234929","predicate":"inputUserEmpty","params":[],"type":"InputUser"},{"id":"-138301121","predicate":"inputUserSelf","params":[],"type":"InputUser"},{"id":"-208488460","predicate":"inputPhoneContact","params":[{"name":"client_id","type":"long"},{"name":"phone","type":"string"},{"name":"first_name","type":"string"},{"name":"last_name","type":"string"}],"type":"InputContact"},{"id":"-181407105","predicate":"inputFile","params":[{"name":"id","type":"long"},{"name":"parts","type":"int"},{"name":"name","type":"string"},{"name":"md5_checksum","type":"string"}],"type":"InputFile"},{"id":"-1771768449","predicate":"inputMediaEmpty","params":[],"type":"InputMedia"},{"id":"-139464256","predicate":"inputMediaUploadedPhoto","params":[{"name":"file","type":"InputFile"},{"name":"caption","type":"string"}],"type":"InputMedia"},{"id":"-373312269","predicate":"inputMediaPhoto","params":[{"name":"id","type":"InputPhoto"},{"name":"caption","type":"string"}],"type":"InputMedia"},{"id":"-104578748","predicate":"inputMediaGeoPoint","params":[{"name":"geo_point","type":"InputGeoPoint"}],"type":"InputMedia"},{"id":"-1494984313","predicate":"inputMediaContact","params":[{"name":"phone_number","type":"string"},{"name":"first_name","type":"string"},{"name":"last_name","type":"string"}],"type":"InputMedia"},{"id":"-2106507297","predicate":"inputMediaUploadedVideo","params":[{"name":"file","type":"InputFile"},{"name":"duration","type":"int"},{"name":"w","type":"int"},{"name":"h","type":"int"},{"name":"mime_type","type":"string"},{"name":"caption","type":"string"}],"type":"InputMedia"},{"id":"2004934137","predicate":"inputMediaUploadedThumbVideo","params":[{"name":"file","type":"InputFile"},{"name":"thumb","type":"InputFile"},{"name":"duration","type":"int"},{"name":"w","type":"int"},{"name":"h","type":"int"},{"name":"mime_type","type":"string"},{"name":"caption","type":"string"}],"type":"InputMedia"},{"id":"-1821749571","predicate":"inputMediaVideo","params":[{"name":"id","type":"InputVideo"},{"name":"caption","type":"string"}],"type":"InputMedia"},{"id":"480546647","predicate":"inputChatPhotoEmpty","params":[],"type":"InputChatPhoto"},{"id":"-1809496270","predicate":"inputChatUploadedPhoto","params":[{"name":"file","type":"InputFile"},{"name":"crop","type":"InputPhotoCrop"}],"type":"InputChatPhoto"},{"id":"-1293828344","predicate":"inputChatPhoto","params":[{"name":"id","type":"InputPhoto"},{"name":"crop","type":"InputPhotoCrop"}],"type":"InputChatPhoto"},{"id":"-457104426","predicate":"inputGeoPointEmpty","params":[],"type":"InputGeoPoint"},{"id":"-206066487","predicate":"inputGeoPoint","params":[{"name":"lat","type":"double"},{"name":"long","type":"double"}],"type":"InputGeoPoint"},{"id":"483901197","predicate":"inputPhotoEmpty","params":[],"type":"InputPhoto"},{"id":"-74070332","predicate":"inputPhoto","params":[{"name":"id","type":"long"},{"name":"access_hash","type":"long"}],"type":"InputPhoto"},{"id":"1426648181","predicate":"inputVideoEmpty","params":[],"type":"InputVideo"},{"id":"-296249774","predicate":"inputVideo","params":[{"name":"id","type":"long"},{"name":"access_hash","type":"long"}],"type":"InputVideo"},{"id":"342061462","predicate":"inputFileLocation","params":[{"name":"volume_id","type":"long"},{"name":"local_id","type":"int"},{"name":"secret","type":"long"}],"type":"InputFileLocation"},{"id":"1023632620","predicate":"inputVideoFileLocation","params":[{"name":"id","type":"long"},{"name":"access_hash","type":"long"}],"type":"InputFileLocation"},{"id":"-1377390588","predicate":"inputPhotoCropAuto","params":[],"type":"InputPhotoCrop"},{"id":"-644787419","predicate":"inputPhotoCrop","params":[{"name":"crop_left","type":"double"},{"name":"crop_top","type":"double"},{"name":"crop_width","type":"double"}],"type":"InputPhotoCrop"},{"id":"1996904104","predicate":"inputAppEvent","params":[{"name":"time","type":"double"},{"name":"type","type":"string"},{"name":"peer","type":"long"},{"name":"data","type":"string"}],"type":"InputAppEvent"},{"id":"-1649296275","predicate":"peerUser","params":[{"name":"user_id","type":"int"}],"type":"Peer"},{"id":"-1160714821","predicate":"peerChat","params":[{"name":"chat_id","type":"int"}],"type":"Peer"},{"id":"-1432995067","predicate":"storage.fileUnknown","params":[],"type":"storage.FileType"},{"id":"8322574","predicate":"storage.fileJpeg","params":[],"type":"storage.FileType"},{"id":"-891180321","predicate":"storage.fileGif","params":[],"type":"storage.FileType"},{"id":"172975040","predicate":"storage.filePng","params":[],"type":"storage.FileType"},{"id":"-1373745011","predicate":"storage.filePdf","params":[],"type":"storage.FileType"},{"id":"1384777335","predicate":"storage.fileMp3","params":[],"type":"storage.FileType"},{"id":"1258941372","predicate":"storage.fileMov","params":[],"type":"storage.FileType"},{"id":"1086091090","predicate":"storage.filePartial","params":[],"type":"storage.FileType"},{"id":"-1278304028","predicate":"storage.fileMp4","params":[],"type":"storage.FileType"},{"id":"276907596","predicate":"storage.fileWebp","params":[],"type":"storage.FileType"},{"id":"2086234950","predicate":"fileLocationUnavailable","params":[{"name":"volume_id","type":"long"},{"name":"local_id","type":"int"},{"name":"secret","type":"long"}],"type":"FileLocation"},{"id":"1406570614","predicate":"fileLocation","params":[{"name":"dc_id","type":"int"},{"name":"volume_id","type":"long"},{"name":"local_id","type":"int"},{"name":"secret","type":"long"}],"type":"FileLocation"},{"id":"537022650","predicate":"userEmpty","params":[{"name":"id","type":"int"}],"type":"User"},{"id":"1326562017","predicate":"userProfilePhotoEmpty","params":[],"type":"UserProfilePhoto"},{"id":"-715532088","predicate":"userProfilePhoto","params":[{"name":"photo_id","type":"long"},{"name":"photo_small","type":"FileLocation"},{"name":"photo_big","type":"FileLocation"}],"type":"UserProfilePhoto"},{"id":"164646985","predicate":"userStatusEmpty","params":[],"type":"UserStatus"},{"id":"-306628279","predicate":"userStatusOnline","params":[{"name":"expires","type":"int"}],"type":"UserStatus"},{"id":"9203775","predicate":"userStatusOffline","params":[{"name":"was_online","type":"int"}],"type":"UserStatus"},{"id":"-1683826688","predicate":"chatEmpty","params":[{"name":"id","type":"int"}],"type":"Chat"},{"id":"-652419756","predicate":"chat","params":[{"name":"flags","type":"#"},{"name":"creator","type":"flags.0?true"},{"name":"kicked","type":"flags.1?true"},{"name":"left","type":"flags.2?true"},{"name":"admins_enabled","type":"flags.3?true"},{"name":"admin","type":"flags.4?true"},{"name":"deactivated","type":"flags.5?true"},{"name":"id","type":"int"},{"name":"title","type":"string"},{"name":"photo","type":"ChatPhoto"},{"name":"participants_count","type":"int"},{"name":"date","type":"int"},{"name":"version","type":"int"},{"name":"migrated_to","type":"flags.6?InputChannel"}],"type":"Chat"},{"id":"120753115","predicate":"chatForbidden","params":[{"name":"id","type":"int"},{"name":"title","type":"string"}],"type":"Chat"},{"id":"771925524","predicate":"chatFull","params":[{"name":"id","type":"int"},{"name":"participants","type":"ChatParticipants"},{"name":"chat_photo","type":"Photo"},{"name":"notify_settings","type":"PeerNotifySettings"},{"name":"exported_invite","type":"ExportedChatInvite"},{"name":"bot_info","type":"Vector<BotInfo>"}],"type":"ChatFull"},{"id":"-925415106","predicate":"chatParticipant","params":[{"name":"user_id","type":"int"},{"name":"inviter_id","type":"int"},{"name":"date","type":"int"}],"type":"ChatParticipant"},{"id":"-57668565","predicate":"chatParticipantsForbidden","params":[{"name":"flags","type":"#"},{"name":"chat_id","type":"int"},{"name":"self_participant","type":"flags.0?ChatParticipant"}],"type":"ChatParticipants"},{"id":"1061556205","predicate":"chatParticipants","params":[{"name":"chat_id","type":"int"},{"name":"participants","type":"Vector<ChatParticipant>"},{"name":"version","type":"int"}],"type":"ChatParticipants"},{"id":"935395612","predicate":"chatPhotoEmpty","params":[],"type":"ChatPhoto"},{"id":"1632839530","predicate":"chatPhoto","params":[{"name":"photo_small","type":"FileLocation"},{"name":"photo_big","type":"FileLocation"}],"type":"ChatPhoto"},{"id":"-2082087340","predicate":"messageEmpty","params":[{"name":"id","type":"int"}],"type":"Message"},{"id":"-913120932","predicate":"message","params":[{"name":"flags","type":"#"},{"name":"unread","type":"flags.0?true"},{"name":"out","type":"flags.1?true"},{"name":"mentioned","type":"flags.4?true"},{"name":"media_unread","type":"flags.5?true"},{"name":"id","type":"int"},{"name":"from_id","type":"flags.8?int"},{"name":"to_id","type":"Peer"},{"name":"fwd_from_id","type":"flags.2?Peer"},{"name":"fwd_date","type":"flags.2?int"},{"name":"via_bot_id","type":"flags.11?int"},{"name":"reply_to_msg_id","type":"flags.3?int"},{"name":"date","type":"int"},{"name":"message","type":"string"},{"name":"media","type":"flags.9?MessageMedia"},{"name":"reply_markup","type":"flags.6?ReplyMarkup"},{"name":"entities","type":"flags.7?Vector<MessageEntity>"},{"name":"views","type":"flags.10?int"}],"type":"Message"},{"id":"-1066691065","predicate":"messageService","params":[{"name":"flags","type":"#"},{"name":"unread","type":"flags.0?true"},{"name":"out","type":"flags.1?true"},{"name":"mentioned","type":"flags.4?true"},{"name":"media_unread","type":"flags.5?true"},{"name":"id","type":"int"},{"name":"from_id","type":"flags.8?int"},{"name":"to_id","type":"Peer"},{"name":"date","type":"int"},{"name":"action","type":"MessageAction"}],"type":"Message"},{"id":"1038967584","predicate":"messageMediaEmpty","params":[],"type":"MessageMedia"},{"id":"1032643901","predicate":"messageMediaPhoto","params":[{"name":"photo","type":"Photo"},{"name":"caption","type":"string"}],"type":"MessageMedia"},{"id":"1540298357","predicate":"messageMediaVideo","params":[{"name":"video","type":"Video"},{"name":"caption","type":"string"}],"type":"MessageMedia"},{"id":"1457575028","predicate":"messageMediaGeo","params":[{"name":"geo","type":"GeoPoint"}],"type":"MessageMedia"},{"id":"1585262393","predicate":"messageMediaContact","params":[{"name":"phone_number","type":"string"},{"name":"first_name","type":"string"},{"name":"last_name","type":"string"},{"name":"user_id","type":"int"}],"type":"MessageMedia"},{"id":"-1618676578","predicate":"messageMediaUnsupported","params":[],"type":"MessageMedia"},{"id":"-1230047312","predicate":"messageActionEmpty","params":[],"type":"MessageAction"},{"id":"-1503425638","predicate":"messageActionChatCreate","params":[{"name":"title","type":"string"},{"name":"users","type":"Vector<int>"}],"type":"MessageAction"},{"id":"-1247687078","predicate":"messageActionChatEditTitle","params":[{"name":"title","type":"string"}],"type":"MessageAction"},{"id":"2144015272","predicate":"messageActionChatEditPhoto","params":[{"name":"photo","type":"Photo"}],"type":"MessageAction"},{"id":"-1780220945","predicate":"messageActionChatDeletePhoto","params":[],"type":"MessageAction"},{"id":"1217033015","predicate":"messageActionChatAddUser","params":[{"name":"users","type":"Vector<int>"}],"type":"MessageAction"},{"id":"-1297179892","predicate":"messageActionChatDeleteUser","params":[{"name":"user_id","type":"int"}],"type":"MessageAction"},{"id":"-1042448310","predicate":"dialog","params":[{"name":"peer","type":"Peer"},{"name":"top_message","type":"int"},{"name":"read_inbox_max_id","type":"int"},{"name":"unread_count","type":"int"},{"name":"notify_settings","type":"PeerNotifySettings"}],"type":"Dialog"},{"id":"590459437","predicate":"photoEmpty","params":[{"name":"id","type":"long"}],"type":"Photo"},{"id":"-840088834","predicate":"photo","params":[{"name":"id","type":"long"},{"name":"access_hash","type":"long"},{"name":"date","type":"int"},{"name":"sizes","type":"Vector<PhotoSize>"}],"type":"Photo"},{"id":"236446268","predicate":"photoSizeEmpty","params":[{"name":"type","type":"string"}],"type":"PhotoSize"},{"id":"2009052699","predicate":"photoSize","params":[{"name":"type","type":"string"},{"name":"location","type":"FileLocation"},{"name":"w","type":"int"},{"name":"h","type":"int"},{"name":"size","type":"int"}],"type":"PhotoSize"},{"id":"-374917894","predicate":"photoCachedSize","params":[{"name":"type","type":"string"},{"name":"location","type":"FileLocation"},{"name":"w","type":"int"},{"name":"h","type":"int"},{"name":"bytes","type":"bytes"}],"type":"PhotoSize"},{"id":"-1056548696","predicate":"videoEmpty","params":[{"name":"id","type":"long"}],"type":"Video"},{"id":"-148338733","predicate":"video","params":[{"name":"id","type":"long"},{"name":"access_hash","type":"long"},{"name":"date","type":"int"},{"name":"duration","type":"int"},{"name":"mime_type","type":"string"},{"name":"size","type":"int"},{"name":"thumb","type":"PhotoSize"},{"name":"dc_id","type":"int"},{"name":"w","type":"int"},{"name":"h","type":"int"}],"type":"Video"},{"id":"286776671","predicate":"geoPointEmpty","params":[],"type":"GeoPoint"},{"id":"541710092","predicate":"geoPoint","params":[{"name":"long","type":"double"},{"name":"lat","type":"double"}],"type":"GeoPoint"},{"id":"-2128698738","predicate":"auth.checkedPhone","params":[{"name":"phone_registered","type":"Bool"}],"type":"auth.CheckedPhone"},{"id":"-269659687","predicate":"auth.sentCode","params":[{"name":"phone_registered","type":"Bool"},{"name":"phone_code_hash","type":"string"},{"name":"send_call_timeout","type":"int"},{"name":"is_password","type":"Bool"}],"type":"auth.SentCode"},{"id":"-16553231","predicate":"auth.authorization","params":[{"name":"user","type":"User"}],"type":"auth.Authorization"},{"id":"-543777747","predicate":"auth.exportedAuthorization","params":[{"name":"id","type":"int"},{"name":"bytes","type":"bytes"}],"type":"auth.ExportedAuthorization"},{"id":"-1195615476","predicate":"inputNotifyPeer","params":[{"name":"peer","type":"InputPeer"}],"type":"InputNotifyPeer"},{"id":"423314455","predicate":"inputNotifyUsers","params":[],"type":"InputNotifyPeer"},{"id":"1251338318","predicate":"inputNotifyChats","params":[],"type":"InputNotifyPeer"},{"id":"-1540769658","predicate":"inputNotifyAll","params":[],"type":"InputNotifyPeer"},{"id":"-265263912","predicate":"inputPeerNotifyEventsEmpty","params":[],"type":"InputPeerNotifyEvents"},{"id":"-395694988","predicate":"inputPeerNotifyEventsAll","params":[],"type":"InputPeerNotifyEvents"},{"id":"1185074840","predicate":"inputPeerNotifySettings","params":[{"name":"mute_until","type":"int"},{"name":"sound","type":"string"},{"name":"show_previews","type":"Bool"},{"name":"events_mask","type":"int"}],"type":"InputPeerNotifySettings"},{"id":"-1378534221","predicate":"peerNotifyEventsEmpty","params":[],"type":"PeerNotifyEvents"},{"id":"1830677896","predicate":"peerNotifyEventsAll","params":[],"type":"PeerNotifyEvents"},{"id":"1889961234","predicate":"peerNotifySettingsEmpty","params":[],"type":"PeerNotifySettings"},{"id":"-1923214866","predicate":"peerNotifySettings","params":[{"name":"mute_until","type":"int"},{"name":"sound","type":"string"},{"name":"show_previews","type":"Bool"},{"name":"events_mask","type":"int"}],"type":"PeerNotifySettings"},{"id":"-860866985","predicate":"wallPaper","params":[{"name":"id","type":"int"},{"name":"title","type":"string"},{"name":"sizes","type":"Vector<PhotoSize>"},{"name":"color","type":"int"}],"type":"WallPaper"},{"id":"1490799288","predicate":"inputReportReasonSpam","params":[],"type":"ReportReason"},{"id":"505595789","predicate":"inputReportReasonViolence","params":[],"type":"ReportReason"},{"id":"777640226","predicate":"inputReportReasonPornography","params":[],"type":"ReportReason"},{"id":"-512463606","predicate":"inputReportReasonOther","params":[{"name":"text","type":"string"}],"type":"ReportReason"},{"id":"1518971995","predicate":"userFull","params":[{"name":"user","type":"User"},{"name":"link","type":"contacts.Link"},{"name":"profile_photo","type":"Photo"},{"name":"notify_settings","type":"PeerNotifySettings"},{"name":"blocked","type":"Bool"},{"name":"bot_info","type":"BotInfo"}],"type":"UserFull"},{"id":"-116274796","predicate":"contact","params":[{"name":"user_id","type":"int"},{"name":"mutual","type":"Bool"}],"type":"Contact"},{"id":"-805141448","predicate":"importedContact","params":[{"name":"user_id","type":"int"},{"name":"client_id","type":"long"}],"type":"ImportedContact"},{"id":"1444661369","predicate":"contactBlocked","params":[{"name":"user_id","type":"int"},{"name":"date","type":"int"}],"type":"ContactBlocked"},{"id":"1038193057","predicate":"contactSuggested","params":[{"name":"user_id","type":"int"},{"name":"mutual_contacts","type":"int"}],"type":"ContactSuggested"},{"id":"-748155807","predicate":"contactStatus","params":[{"name":"user_id","type":"int"},{"name":"status","type":"UserStatus"}],"type":"ContactStatus"},{"id":"986597452","predicate":"contacts.link","params":[{"name":"my_link","type":"ContactLink"},{"name":"foreign_link","type":"ContactLink"},{"name":"user","type":"User"}],"type":"contacts.Link"},{"id":"-1219778094","predicate":"contacts.contactsNotModified","params":[],"type":"contacts.Contacts"},{"id":"1871416498","predicate":"contacts.contacts","params":[{"name":"contacts","type":"Vector<Contact>"},{"name":"users","type":"Vector<User>"}],"type":"contacts.Contacts"},{"id":"-1387117803","predicate":"contacts.importedContacts","params":[{"name":"imported","type":"Vector<ImportedContact>"},{"name":"retry_contacts","type":"Vector<long>"},{"name":"users","type":"Vector<User>"}],"type":"contacts.ImportedContacts"},{"id":"471043349","predicate":"contacts.blocked","params":[{"name":"blocked","type":"Vector<ContactBlocked>"},{"name":"users","type":"Vector<User>"}],"type":"contacts.Blocked"},{"id":"-1878523231","predicate":"contacts.blockedSlice","params":[{"name":"count","type":"int"},{"name":"blocked","type":"Vector<ContactBlocked>"},{"name":"users","type":"Vector<User>"}],"type":"contacts.Blocked"},{"id":"1447681221","predicate":"contacts.suggested","params":[{"name":"results","type":"Vector<ContactSuggested>"},{"name":"users","type":"Vector<User>"}],"type":"contacts.Suggested"},{"id":"364538944","predicate":"messages.dialogs","params":[{"name":"dialogs","type":"Vector<Dialog>"},{"name":"messages","type":"Vector<Message>"},{"name":"chats","type":"Vector<Chat>"},{"name":"users","type":"Vector<User>"}],"type":"messages.Dialogs"},{"id":"1910543603","predicate":"messages.dialogsSlice","params":[{"name":"count","type":"int"},{"name":"dialogs","type":"Vector<Dialog>"},{"name":"messages","type":"Vector<Message>"},{"name":"chats","type":"Vector<Chat>"},{"name":"users","type":"Vector<User>"}],"type":"messages.Dialogs"},{"id":"-1938715001","predicate":"messages.messages","params":[{"name":"messages","type":"Vector<Message>"},{"name":"chats","type":"Vector<Chat>"},{"name":"users","type":"Vector<User>"}],"type":"messages.Messages"},{"id":"189033187","predicate":"messages.messagesSlice","params":[{"name":"count","type":"int"},{"name":"messages","type":"Vector<Message>"},{"name":"chats","type":"Vector<Chat>"},{"name":"users","type":"Vector<User>"}],"type":"messages.Messages"},{"id":"1694474197","predicate":"messages.chats","params":[{"name":"chats","type":"Vector<Chat>"}],"type":"messages.Chats"},{"id":"-438840932","predicate":"messages.chatFull","params":[{"name":"full_chat","type":"ChatFull"},{"name":"chats","type":"Vector<Chat>"},{"name":"users","type":"Vector<User>"}],"type":"messages.ChatFull"},{"id":"-1269012015","predicate":"messages.affectedHistory","params":[{"name":"pts","type":"int"},{"name":"pts_count","type":"int"},{"name":"offset","type":"int"}],"type":"messages.AffectedHistory"},{"id":"1474492012","predicate":"inputMessagesFilterEmpty","params":[],"type":"MessagesFilter"},{"id":"-1777752804","predicate":"inputMessagesFilterPhotos","params":[],"type":"MessagesFilter"},{"id":"-1614803355","predicate":"inputMessagesFilterVideo","params":[],"type":"MessagesFilter"},{"id":"1458172132","predicate":"inputMessagesFilterPhotoVideo","params":[],"type":"MessagesFilter"},{"id":"-648121413","predicate":"inputMessagesFilterPhotoVideoDocuments","params":[],"type":"MessagesFilter"},{"id":"-1629621880","predicate":"inputMessagesFilterDocument","params":[],"type":"MessagesFilter"},{"id":"-808946398","predicate":"inputMessagesFilterAudio","params":[],"type":"MessagesFilter"},{"id":"1526462308","predicate":"inputMessagesFilterAudioDocuments","params":[],"type":"MessagesFilter"},{"id":"2129714567","predicate":"inputMessagesFilterUrl","params":[],"type":"MessagesFilter"},{"id":"-3644025","predicate":"inputMessagesFilterGif","params":[],"type":"MessagesFilter"},{"id":"522914557","predicate":"updateNewMessage","params":[{"name":"message","type":"Message"},{"name":"pts","type":"int"},{"name":"pts_count","type":"int"}],"type":"Update"},{"id":"1318109142","predicate":"updateMessageID","params":[{"name":"id","type":"int"},{"name":"random_id","type":"long"}],"type":"Update"},{"id":"-1576161051","predicate":"updateDeleteMessages","params":[{"name":"messages","type":"Vector<int>"},{"name":"pts","type":"int"},{"name":"pts_count","type":"int"}],"type":"Update"},{"id":"1548249383","predicate":"updateUserTyping","params":[{"name":"user_id","type":"int"},{"name":"action","type":"SendMessageAction"}],"type":"Update"},{"id":"-1704596961","predicate":"updateChatUserTyping","params":[{"name":"chat_id","type":"int"},{"name":"user_id","type":"int"},{"name":"action","type":"SendMessageAction"}],"type":"Update"},{"id":"125178264","predicate":"updateChatParticipants","params":[{"name":"participants","type":"ChatParticipants"}],"type":"Update"},{"id":"469489699","predicate":"updateUserStatus","params":[{"name":"user_id","type":"int"},{"name":"status","type":"UserStatus"}],"type":"Update"},{"id":"-1489818765","predicate":"updateUserName","params":[{"name":"user_id","type":"int"},{"name":"first_name","type":"string"},{"name":"last_name","type":"string"},{"name":"username","type":"string"}],"type":"Update"},{"id":"-1791935732","predicate":"updateUserPhoto","params":[{"name":"user_id","type":"int"},{"name":"date","type":"int"},{"name":"photo","type":"UserProfilePhoto"},{"name":"previous","type":"Bool"}],"type":"Update"},{"id":"628472761","predicate":"updateContactRegistered","params":[{"name":"user_id","type":"int"},{"name":"date","type":"int"}],"type":"Update"},{"id":"-1657903163","predicate":"updateContactLink","params":[{"name":"user_id","type":"int"},{"name":"my_link","type":"ContactLink"},{"name":"foreign_link","type":"ContactLink"}],"type":"Update"},{"id":"-1895411046","predicate":"updateNewAuthorization","params":[{"name":"auth_key_id","type":"long"},{"name":"date","type":"int"},{"name":"device","type":"string"},{"name":"location","type":"string"}],"type":"Update"},{"id":"-1519637954","predicate":"updates.state","params":[{"name":"pts","type":"int"},{"name":"qts","type":"int"},{"name":"date","type":"int"},{"name":"seq","type":"int"},{"name":"unread_count","type":"int"}],"type":"updates.State"},{"id":"1567990072","predicate":"updates.differenceEmpty","params":[{"name":"date","type":"int"},{"name":"seq","type":"int"}],"type":"updates.Difference"},{"id":"16030880","predicate":"updates.difference","params":[{"name":"new_messages","type":"Vector<Message>"},{"name":"new_encrypted_messages","type":"Vector<EncryptedMessage>"},{"name":"other_updates","type":"Vector<Update>"},{"name":"chats","type":"Vector<Chat>"},{"name":"users","type":"Vector<User>"},{"name":"state","type":"updates.State"}],"type":"updates.Difference"},{"id":"-1459938943","predicate":"updates.differenceSlice","params":[{"name":"new_messages","type":"Vector<Message>"},{"name":"new_encrypted_messages","type":"Vector<EncryptedMessage>"},{"name":"other_updates","type":"Vector<Update>"},{"name":"chats","type":"Vector<Chat>"},{"name":"users","type":"Vector<User>"},{"name":"intermediate_state","type":"updates.State"}],"type":"updates.Difference"},{"id":"-484987010","predicate":"updatesTooLong","params":[],"type":"Updates"},{"id":"333766314","predicate":"updateShortMessage","params":[{"name":"flags","type":"#"},{"name":"unread","type":"flags.0?true"},{"name":"out","type":"flags.1?true"},{"name":"mentioned","type":"flags.4?true"},{"name":"media_unread","type":"flags.5?true"},{"name":"id","type":"int"},{"name":"user_id","type":"int"},{"name":"message","type":"string"},{"name":"pts","type":"int"},{"name":"pts_count","type":"int"},{"name":"date","type":"int"},{"name":"fwd_from_id","type":"flags.2?Peer"},{"name":"fwd_date","type":"flags.2?int"},{"name":"via_bot_id","type":"flags.11?int"},{"name":"reply_to_msg_id","type":"flags.3?int"},{"name":"entities","type":"flags.7?Vector<MessageEntity>"}],"type":"Updates"},{"id":"613087842","predicate":"updateShortChatMessage","params":[{"name":"flags","type":"#"},{"name":"unread","type":"flags.0?true"},{"name":"out","type":"flags.1?true"},{"name":"mentioned","type":"flags.4?true"},{"name":"media_unread","type":"flags.5?true"},{"name":"id","type":"int"},{"name":"from_id","type":"int"},{"name":"chat_id","type":"int"},{"name":"message","type":"string"},{"name":"pts","type":"int"},{"name":"pts_count","type":"int"},{"name":"date","type":"int"},{"name":"fwd_from_id","type":"flags.2?Peer"},{"name":"fwd_date","type":"flags.2?int"},{"name":"via_bot_id","type":"flags.11?int"},{"name":"reply_to_msg_id","type":"flags.3?int"},{"name":"entities","type":"flags.7?Vector<MessageEntity>"}],"type":"Updates"},{"id":"2027216577","predicate":"updateShort","params":[{"name":"update","type":"Update"},{"name":"date","type":"int"}],"type":"Updates"},{"id":"1918567619","predicate":"updatesCombined","params":[{"name":"updates","type":"Vector<Update>"},{"name":"users","type":"Vector<User>"},{"name":"chats","type":"Vector<Chat>"},{"name":"date","type":"int"},{"name":"seq_start","type":"int"},{"name":"seq","type":"int"}],"type":"Updates"},{"id":"1957577280","predicate":"updates","params":[{"name":"updates","type":"Vector<Update>"},{"name":"users","type":"Vector<User>"},{"name":"chats","type":"Vector<Chat>"},{"name":"date","type":"int"},{"name":"seq","type":"int"}],"type":"Updates"},{"id":"-1916114267","predicate":"photos.photos","params":[{"name":"photos","type":"Vector<Photo>"},{"name":"users","type":"Vector<User>"}],"type":"photos.Photos"},{"id":"352657236","predicate":"photos.photosSlice","params":[{"name":"count","type":"int"},{"name":"photos","type":"Vector<Photo>"},{"name":"users","type":"Vector<User>"}],"type":"photos.Photos"},{"id":"539045032","predicate":"photos.photo","params":[{"name":"photo","type":"Photo"},{"name":"users","type":"Vector<User>"}],"type":"photos.Photo"},{"id":"157948117","predicate":"upload.file","params":[{"name":"type","type":"storage.FileType"},{"name":"mtime","type":"int"},{"name":"bytes","type":"bytes"}],"type":"upload.File"},{"id":"98092748","predicate":"dcOption","params":[{"name":"flags","type":"#"},{"name":"ipv6","type":"flags.0?true"},{"name":"media_only","type":"flags.1?true"},{"name":"id","type":"int"},{"name":"ip_address","type":"string"},{"name":"port","type":"int"}],"type":"DcOption"},{"id":"112969208","predicate":"config","params":[{"name":"date","type":"int"},{"name":"expires","type":"int"},{"name":"test_mode","type":"Bool"},{"name":"this_dc","type":"int"},{"name":"dc_options","type":"Vector<DcOption>"},{"name":"chat_size_max","type":"int"},{"name":"megagroup_size_max","type":"int"},{"name":"forwarded_count_max","type":"int"},{"name":"online_update_period_ms","type":"int"},{"name":"offline_blur_timeout_ms","type":"int"},{"name":"offline_idle_timeout_ms","type":"int"},{"name":"online_cloud_timeout_ms","type":"int"},{"name":"notify_cloud_delay_ms","type":"int"},{"name":"notify_default_delay_ms","type":"int"},{"name":"chat_big_size","type":"int"},{"name":"push_chat_period_ms","type":"int"},{"name":"push_chat_limit","type":"int"},{"name":"saved_gifs_limit","type":"int"},{"name":"disabled_features","type":"Vector<DisabledFeature>"}],"type":"Config"},{"id":"-1910892683","predicate":"nearestDc","params":[{"name":"country","type":"string"},{"name":"this_dc","type":"int"},{"name":"nearest_dc","type":"int"}],"type":"NearestDc"},{"id":"-1987579119","predicate":"help.appUpdate","params":[{"name":"id","type":"int"},{"name":"critical","type":"Bool"},{"name":"url","type":"string"},{"name":"text","type":"string"}],"type":"help.AppUpdate"},{"id":"-1000708810","predicate":"help.noAppUpdate","params":[],"type":"help.AppUpdate"},{"id":"415997816","predicate":"help.inviteText","params":[{"name":"message","type":"string"}],"type":"help.InviteText"},{"id":"1662091044","predicate":"wallPaperSolid","params":[{"name":"id","type":"int"},{"name":"title","type":"string"},{"name":"bg_color","type":"int"},{"name":"color","type":"int"}],"type":"WallPaper"},{"id":"314359194","predicate":"updateNewEncryptedMessage","params":[{"name":"message","type":"EncryptedMessage"},{"name":"qts","type":"int"}],"type":"Update"},{"id":"386986326","predicate":"updateEncryptedChatTyping","params":[{"name":"chat_id","type":"int"}],"type":"Update"},{"id":"-1264392051","predicate":"updateEncryption","params":[{"name":"chat","type":"EncryptedChat"},{"name":"date","type":"int"}],"type":"Update"},{"id":"956179895","predicate":"updateEncryptedMessagesRead","params":[{"name":"chat_id","type":"int"},{"name":"max_date","type":"int"},{"name":"date","type":"int"}],"type":"Update"},{"id":"-1417756512","predicate":"encryptedChatEmpty","params":[{"name":"id","type":"int"}],"type":"EncryptedChat"},{"id":"1006044124","predicate":"encryptedChatWaiting","params":[{"name":"id","type":"int"},{"name":"access_hash","type":"long"},{"name":"date","type":"int"},{"name":"admin_id","type":"int"},{"name":"participant_id","type":"int"}],"type":"EncryptedChat"},{"id":"-931638658","predicate":"encryptedChatRequested","params":[{"name":"id","type":"int"},{"name":"access_hash","type":"long"},{"name":"date","type":"int"},{"name":"admin_id","type":"int"},{"name":"participant_id","type":"int"},{"name":"g_a","type":"bytes"}],"type":"EncryptedChat"},{"id":"-94974410","predicate":"encryptedChat","params":[{"name":"id","type":"int"},{"name":"access_hash","type":"long"},{"name":"date","type":"int"},{"name":"admin_id","type":"int"},{"name":"participant_id","type":"int"},{"name":"g_a_or_b","type":"bytes"},{"name":"key_fingerprint","type":"long"}],"type":"EncryptedChat"},{"id":"332848423","predicate":"encryptedChatDiscarded","params":[{"name":"id","type":"int"}],"type":"EncryptedChat"},{"id":"-247351839","predicate":"inputEncryptedChat","params":[{"name":"chat_id","type":"int"},{"name":"access_hash","type":"long"}],"type":"InputEncryptedChat"},{"id":"-1038136962","predicate":"encryptedFileEmpty","params":[],"type":"EncryptedFile"},{"id":"1248893260","predicate":"encryptedFile","params":[{"name":"id","type":"long"},{"name":"access_hash","type":"long"},{"name":"size","type":"int"},{"name":"dc_id","type":"int"},{"name":"key_fingerprint","type":"int"}],"type":"EncryptedFile"},{"id":"406307684","predicate":"inputEncryptedFileEmpty","params":[],"type":"InputEncryptedFile"},{"id":"1690108678","predicate":"inputEncryptedFileUploaded","params":[{"name":"id","type":"long"},{"name":"parts","type":"int"},{"name":"md5_checksum","type":"string"},{"name":"key_fingerprint","type":"int"}],"type":"InputEncryptedFile"},{"id":"1511503333","predicate":"inputEncryptedFile","params":[{"name":"id","type":"long"},{"name":"access_hash","type":"long"}],"type":"InputEncryptedFile"},{"id":"-182231723","predicate":"inputEncryptedFileLocation","params":[{"name":"id","type":"long"},{"name":"access_hash","type":"long"}],"type":"InputFileLocation"},{"id":"-317144808","predicate":"encryptedMessage","params":[{"name":"random_id","type":"long"},{"name":"chat_id","type":"int"},{"name":"date","type":"int"},{"name":"bytes","type":"bytes"},{"name":"file","type":"EncryptedFile"}],"type":"EncryptedMessage"},{"id":"594758406","predicate":"encryptedMessageService","params":[{"name":"random_id","type":"long"},{"name":"chat_id","type":"int"},{"name":"date","type":"int"},{"name":"bytes","type":"bytes"}],"type":"EncryptedMessage"},{"id":"-1058912715","predicate":"messages.dhConfigNotModified","params":[{"name":"random","type":"bytes"}],"type":"messages.DhConfig"},{"id":"740433629","predicate":"messages.dhConfig","params":[{"name":"g","type":"int"},{"name":"p","type":"bytes"},{"name":"version","type":"int"},{"name":"random","type":"bytes"}],"type":"messages.DhConfig"},{"id":"1443858741","predicate":"messages.sentEncryptedMessage","params":[{"name":"date","type":"int"}],"type":"messages.SentEncryptedMessage"},{"id":"-1802240206","predicate":"messages.sentEncryptedFile","params":[{"name":"date","type":"int"},{"name":"file","type":"EncryptedFile"}],"type":"messages.SentEncryptedMessage"},{"id":"-95482955","predicate":"inputFileBig","params":[{"name":"id","type":"long"},{"name":"parts","type":"int"},{"name":"name","type":"string"}],"type":"InputFile"},{"id":"767652808","predicate":"inputEncryptedFileBigUploaded","params":[{"name":"id","type":"long"},{"name":"parts","type":"int"},{"name":"key_fingerprint","type":"int"}],"type":"InputEncryptedFile"},{"id":"-364179876","predicate":"updateChatParticipantAdd","params":[{"name":"chat_id","type":"int"},{"name":"user_id","type":"int"},{"name":"inviter_id","type":"int"},{"name":"date","type":"int"},{"name":"version","type":"int"}],"type":"Update"},{"id":"1851755554","predicate":"updateChatParticipantDelete","params":[{"name":"chat_id","type":"int"},{"name":"user_id","type":"int"},{"name":"version","type":"int"}],"type":"Update"},{"id":"-1906403213","predicate":"updateDcOptions","params":[{"name":"dc_options","type":"Vector<DcOption>"}],"type":"Update"},{"id":"1313442987","predicate":"inputMediaUploadedAudio","params":[{"name":"file","type":"InputFile"},{"name":"duration","type":"int"},{"name":"mime_type","type":"string"}],"type":"InputMedia"},{"id":"-1986820223","predicate":"inputMediaAudio","params":[{"name":"id","type":"InputAudio"}],"type":"InputMedia"},{"id":"495530093","predicate":"inputMediaUploadedDocument","params":[{"name":"file","type":"InputFile"},{"name":"mime_type","type":"string"},{"name":"attributes","type":"Vector<DocumentAttribute>"},{"name":"caption","type":"string"}],"type":"InputMedia"},{"id":"-1386138479","predicate":"inputMediaUploadedThumbDocument","params":[{"name":"file","type":"InputFile"},{"name":"thumb","type":"InputFile"},{"name":"mime_type","type":"string"},{"name":"attributes","type":"Vector<DocumentAttribute>"},{"name":"caption","type":"string"}],"type":"InputMedia"},{"id":"444068508","predicate":"inputMediaDocument","params":[{"name":"id","type":"InputDocument"},{"name":"caption","type":"string"}],"type":"InputMedia"},{"id":"-203411800","predicate":"messageMediaDocument","params":[{"name":"document","type":"Document"},{"name":"caption","type":"string"}],"type":"MessageMedia"},{"id":"-961117440","predicate":"messageMediaAudio","params":[{"name":"audio","type":"Audio"}],"type":"MessageMedia"},{"id":"-648356732","predicate":"inputAudioEmpty","params":[],"type":"InputAudio"},{"id":"2010398975","predicate":"inputAudio","params":[{"name":"id","type":"long"},{"name":"access_hash","type":"long"}],"type":"InputAudio"},{"id":"1928391342","predicate":"inputDocumentEmpty","params":[],"type":"InputDocument"},{"id":"410618194","predicate":"inputDocument","params":[{"name":"id","type":"long"},{"name":"access_hash","type":"long"}],"type":"InputDocument"},{"id":"1960591437","predicate":"inputAudioFileLocation","params":[{"name":"id","type":"long"},{"name":"access_hash","type":"long"}],"type":"InputFileLocation"},{"id":"1313188841","predicate":"inputDocumentFileLocation","params":[{"name":"id","type":"long"},{"name":"access_hash","type":"long"}],"type":"InputFileLocation"},{"id":"1483311320","predicate":"audioEmpty","params":[{"name":"id","type":"long"}],"type":"Audio"},{"id":"-102543275","predicate":"audio","params":[{"name":"id","type":"long"},{"name":"access_hash","type":"long"},{"name":"date","type":"int"},{"name":"duration","type":"int"},{"name":"mime_type","type":"string"},{"name":"size","type":"int"},{"name":"dc_id","type":"int"}],"type":"Audio"},{"id":"922273905","predicate":"documentEmpty","params":[{"name":"id","type":"long"}],"type":"Document"},{"id":"-106717361","predicate":"document","params":[{"name":"id","type":"long"},{"name":"access_hash","type":"long"},{"name":"date","type":"int"},{"name":"mime_type","type":"string"},{"name":"size","type":"int"},{"name":"thumb","type":"PhotoSize"},{"name":"dc_id","type":"int"},{"name":"attributes","type":"Vector<DocumentAttribute>"}],"type":"Document"},{"id":"398898678","predicate":"help.support","params":[{"name":"phone_number","type":"string"},{"name":"user","type":"User"}],"type":"help.Support"},{"id":"-1613493288","predicate":"notifyPeer","params":[{"name":"peer","type":"Peer"}],"type":"NotifyPeer"},{"id":"-1261946036","predicate":"notifyUsers","params":[],"type":"NotifyPeer"},{"id":"-1073230141","predicate":"notifyChats","params":[],"type":"NotifyPeer"},{"id":"1959820384","predicate":"notifyAll","params":[],"type":"NotifyPeer"},{"id":"-2131957734","predicate":"updateUserBlocked","params":[{"name":"user_id","type":"int"},{"name":"blocked","type":"Bool"}],"type":"Update"},{"id":"-1094555409","predicate":"updateNotifySettings","params":[{"name":"peer","type":"NotifyPeer"},{"name":"notify_settings","type":"PeerNotifySettings"}],"type":"Update"},{"id":"-484053553","predicate":"auth.sentAppCode","params":[{"name":"phone_registered","type":"Bool"},{"name":"phone_code_hash","type":"string"},{"name":"send_call_timeout","type":"int"},{"name":"is_password","type":"Bool"}],"type":"auth.SentCode"},{"id":"381645902","predicate":"sendMessageTypingAction","params":[],"type":"SendMessageAction"},{"id":"-44119819","predicate":"sendMessageCancelAction","params":[],"type":"SendMessageAction"},{"id":"-1584933265","predicate":"sendMessageRecordVideoAction","params":[],"type":"SendMessageAction"},{"id":"-378127636","predicate":"sendMessageUploadVideoAction","params":[{"name":"progress","type":"int"}],"type":"SendMessageAction"},{"id":"-718310409","predicate":"sendMessageRecordAudioAction","params":[],"type":"SendMessageAction"},{"id":"-212740181","predicate":"sendMessageUploadAudioAction","params":[{"name":"progress","type":"int"}],"type":"SendMessageAction"},{"id":"-774682074","predicate":"sendMessageUploadPhotoAction","params":[{"name":"progress","type":"int"}],"type":"SendMessageAction"},{"id":"-1441998364","predicate":"sendMessageUploadDocumentAction","params":[{"name":"progress","type":"int"}],"type":"SendMessageAction"},{"id":"393186209","predicate":"sendMessageGeoLocationAction","params":[],"type":"SendMessageAction"},{"id":"1653390447","predicate":"sendMessageChooseContactAction","params":[],"type":"SendMessageAction"},{"id":"446822276","predicate":"contacts.found","params":[{"name":"results","type":"Vector<Peer>"},{"name":"chats","type":"Vector<Chat>"},{"name":"users","type":"Vector<User>"}],"type":"contacts.Found"},{"id":"942527460","predicate":"updateServiceNotification","params":[{"name":"type","type":"string"},{"name":"message","type":"string"},{"name":"media","type":"MessageMedia"},{"name":"popup","type":"Bool"}],"type":"Update"},{"id":"-496024847","predicate":"userStatusRecently","params":[],"type":"UserStatus"},{"id":"129960444","predicate":"userStatusLastWeek","params":[],"type":"UserStatus"},{"id":"2011940674","predicate":"userStatusLastMonth","params":[],"type":"UserStatus"},{"id":"-298113238","predicate":"updatePrivacy","params":[{"name":"key","type":"PrivacyKey"},{"name":"rules","type":"Vector<PrivacyRule>"}],"type":"Update"},{"id":"1335282456","predicate":"inputPrivacyKeyStatusTimestamp","params":[],"type":"InputPrivacyKey"},{"id":"-1137792208","predicate":"privacyKeyStatusTimestamp","params":[],"type":"PrivacyKey"},{"id":"218751099","predicate":"inputPrivacyValueAllowContacts","params":[],"type":"InputPrivacyRule"},{"id":"407582158","predicate":"inputPrivacyValueAllowAll","params":[],"type":"InputPrivacyRule"},{"id":"320652927","predicate":"inputPrivacyValueAllowUsers","params":[{"name":"users","type":"Vector<InputUser>"}],"type":"InputPrivacyRule"},{"id":"195371015","predicate":"inputPrivacyValueDisallowContacts","params":[],"type":"InputPrivacyRule"},{"id":"-697604407","predicate":"inputPrivacyValueDisallowAll","params":[],"type":"InputPrivacyRule"},{"id":"-1877932953","predicate":"inputPrivacyValueDisallowUsers","params":[{"name":"users","type":"Vector<InputUser>"}],"type":"InputPrivacyRule"},{"id":"-123988","predicate":"privacyValueAllowContacts","params":[],"type":"PrivacyRule"},{"id":"1698855810","predicate":"privacyValueAllowAll","params":[],"type":"PrivacyRule"},{"id":"1297858060","predicate":"privacyValueAllowUsers","params":[{"name":"users","type":"Vector<int>"}],"type":"PrivacyRule"},{"id":"-125240806","predicate":"privacyValueDisallowContacts","params":[],"type":"PrivacyRule"},{"id":"-1955338397","predicate":"privacyValueDisallowAll","params":[],"type":"PrivacyRule"},{"id":"209668535","predicate":"privacyValueDisallowUsers","params":[{"name":"users","type":"Vector<int>"}],"type":"PrivacyRule"},{"id":"1430961007","predicate":"account.privacyRules","params":[{"name":"rules","type":"Vector<PrivacyRule>"},{"name":"users","type":"Vector<User>"}],"type":"account.PrivacyRules"},{"id":"-1194283041","predicate":"accountDaysTTL","params":[{"name":"days","type":"int"}],"type":"AccountDaysTTL"},{"id":"-1527411636","predicate":"account.sentChangePhoneCode","params":[{"name":"phone_code_hash","type":"string"},{"name":"send_call_timeout","type":"int"}],"type":"account.SentChangePhoneCode"},{"id":"314130811","predicate":"updateUserPhone","params":[{"name":"user_id","type":"int"},{"name":"phone","type":"string"}],"type":"Update"},{"id":"1815593308","predicate":"documentAttributeImageSize","params":[{"name":"w","type":"int"},{"name":"h","type":"int"}],"type":"DocumentAttribute"},{"id":"297109817","predicate":"documentAttributeAnimated","params":[],"type":"DocumentAttribute"},{"id":"978674434","predicate":"documentAttributeSticker","params":[{"name":"alt","type":"string"},{"name":"stickerset","type":"InputStickerSet"}],"type":"DocumentAttribute"},{"id":"1494273227","predicate":"documentAttributeVideo","params":[{"name":"duration","type":"int"},{"name":"w","type":"int"},{"name":"h","type":"int"}],"type":"DocumentAttribute"},{"id":"-556656416","predicate":"documentAttributeAudio","params":[{"name":"duration","type":"int"},{"name":"title","type":"string"},{"name":"performer","type":"string"}],"type":"DocumentAttribute"},{"id":"358154344","predicate":"documentAttributeFilename","params":[{"name":"file_name","type":"string"}],"type":"DocumentAttribute"},{"id":"-244016606","predicate":"messages.stickersNotModified","params":[],"type":"messages.Stickers"},{"id":"-1970352846","predicate":"messages.stickers","params":[{"name":"hash","type":"string"},{"name":"stickers","type":"Vector<Document>"}],"type":"messages.Stickers"},{"id":"313694676","predicate":"stickerPack","params":[{"name":"emoticon","type":"string"},{"name":"documents","type":"Vector<long>"}],"type":"StickerPack"},{"id":"-395967805","predicate":"messages.allStickersNotModified","params":[],"type":"messages.AllStickers"},{"id":"-302170017","predicate":"messages.allStickers","params":[{"name":"hash","type":"int"},{"name":"sets","type":"Vector<StickerSet>"}],"type":"messages.AllStickers"},{"id":"-1369215196","predicate":"disabledFeature","params":[{"name":"feature","type":"string"},{"name":"description","type":"string"}],"type":"DisabledFeature"},{"id":"-1721631396","predicate":"updateReadHistoryInbox","params":[{"name":"peer","type":"Peer"},{"name":"max_id","type":"int"},{"name":"pts","type":"int"},{"name":"pts_count","type":"int"}],"type":"Update"},{"id":"791617983","predicate":"updateReadHistoryOutbox","params":[{"name":"peer","type":"Peer"},{"name":"max_id","type":"int"},{"name":"pts","type":"int"},{"name":"pts_count","type":"int"}],"type":"Update"},{"id":"-2066640507","predicate":"messages.affectedMessages","params":[{"name":"pts","type":"int"},{"name":"pts_count","type":"int"}],"type":"messages.AffectedMessages"},{"id":"1599050311","predicate":"contactLinkUnknown","params":[],"type":"ContactLink"},{"id":"-17968211","predicate":"contactLinkNone","params":[],"type":"ContactLink"},{"id":"646922073","predicate":"contactLinkHasPhone","params":[],"type":"ContactLink"},{"id":"-721239344","predicate":"contactLinkContact","params":[],"type":"ContactLink"},{"id":"2139689491","predicate":"updateWebPage","params":[{"name":"webpage","type":"WebPage"},{"name":"pts","type":"int"},{"name":"pts_count","type":"int"}],"type":"Update"},{"id":"-350980120","predicate":"webPageEmpty","params":[{"name":"id","type":"long"}],"type":"WebPage"},{"id":"-981018084","predicate":"webPagePending","params":[{"name":"id","type":"long"},{"name":"date","type":"int"}],"type":"WebPage"},{"id":"-897446185","predicate":"webPage","params":[{"name":"flags","type":"#"},{"name":"id","type":"long"},{"name":"url","type":"string"},{"name":"display_url","type":"string"},{"name":"type","type":"flags.0?string"},{"name":"site_name","type":"flags.1?string"},{"name":"title","type":"flags.2?string"},{"name":"description","type":"flags.3?string"},{"name":"photo","type":"flags.4?Photo"},{"name":"embed_url","type":"flags.5?string"},{"name":"embed_type","type":"flags.5?string"},{"name":"embed_width","type":"flags.6?int"},{"name":"embed_height","type":"flags.6?int"},{"name":"duration","type":"flags.7?int"},{"name":"author","type":"flags.8?string"},{"name":"document","type":"flags.9?Document"}],"type":"WebPage"},{"id":"-1557277184","predicate":"messageMediaWebPage","params":[{"name":"webpage","type":"WebPage"}],"type":"MessageMedia"},{"id":"2079516406","predicate":"authorization","params":[{"name":"hash","type":"long"},{"name":"flags","type":"int"},{"name":"device_model","type":"string"},{"name":"platform","type":"string"},{"name":"system_version","type":"string"},{"name":"api_id","type":"int"},{"name":"app_name","type":"string"},{"name":"app_version","type":"string"},{"name":"date_created","type":"int"},{"name":"date_active","type":"int"},{"name":"ip","type":"string"},{"name":"country","type":"string"},{"name":"region","type":"string"}],"type":"Authorization"},{"id":"307276766","predicate":"account.authorizations","params":[{"name":"authorizations","type":"Vector<Authorization>"}],"type":"account.Authorizations"},{"id":"-1764049896","predicate":"account.noPassword","params":[{"name":"new_salt","type":"bytes"},{"name":"email_unconfirmed_pattern","type":"string"}],"type":"account.Password"},{"id":"2081952796","predicate":"account.password","params":[{"name":"current_salt","type":"bytes"},{"name":"new_salt","type":"bytes"},{"name":"hint","type":"string"},{"name":"has_recovery","type":"Bool"},{"name":"email_unconfirmed_pattern","type":"string"}],"type":"account.Password"},{"id":"-1212732749","predicate":"account.passwordSettings","params":[{"name":"email","type":"string"}],"type":"account.PasswordSettings"},{"id":"-1124314324","predicate":"account.passwordInputSettings","params":[{"name":"flags","type":"#"},{"name":"new_salt","type":"flags.0?bytes"},{"name":"new_password_hash","type":"flags.0?bytes"},{"name":"hint","type":"flags.0?string"},{"name":"email","type":"flags.1?string"}],"type":"account.PasswordInputSettings"},{"id":"326715557","predicate":"auth.passwordRecovery","params":[{"name":"email_pattern","type":"string"}],"type":"auth.PasswordRecovery"},{"id":"673687578","predicate":"inputMediaVenue","params":[{"name":"geo_point","type":"InputGeoPoint"},{"name":"title","type":"string"},{"name":"address","type":"string"},{"name":"provider","type":"string"},{"name":"venue_id","type":"string"}],"type":"InputMedia"},{"id":"2031269663","predicate":"messageMediaVenue","params":[{"name":"geo","type":"GeoPoint"},{"name":"title","type":"string"},{"name":"address","type":"string"},{"name":"provider","type":"string"},{"name":"venue_id","type":"string"}],"type":"MessageMedia"},{"id":"-1551583367","predicate":"receivedNotifyMessage","params":[{"name":"id","type":"int"},{"name":"flags","type":"int"}],"type":"ReceivedNotifyMessage"},{"id":"1776236393","predicate":"chatInviteEmpty","params":[],"type":"ExportedChatInvite"},{"id":"-64092740","predicate":"chatInviteExported","params":[{"name":"link","type":"string"}],"type":"ExportedChatInvite"},{"id":"1516793212","predicate":"chatInviteAlready","params":[{"name":"chat","type":"Chat"}],"type":"ChatInvite"},{"id":"-1813406880","predicate":"chatInvite","params":[{"name":"flags","type":"#"},{"name":"channel","type":"flags.0?true"},{"name":"broadcast","type":"flags.1?true"},{"name":"public","type":"flags.2?true"},{"name":"megagroup","type":"flags.3?true"},{"name":"title","type":"string"}],"type":"ChatInvite"},{"id":"-123931160","predicate":"messageActionChatJoinedByLink","params":[{"name":"inviter_id","type":"int"}],"type":"MessageAction"},{"id":"1757493555","predicate":"updateReadMessagesContents","params":[{"name":"messages","type":"Vector<int>"},{"name":"pts","type":"int"},{"name":"pts_count","type":"int"}],"type":"Update"},{"id":"-4838507","predicate":"inputStickerSetEmpty","params":[],"type":"InputStickerSet"},{"id":"-1645763991","predicate":"inputStickerSetID","params":[{"name":"id","type":"long"},{"name":"access_hash","type":"long"}],"type":"InputStickerSet"},{"id":"-2044933984","predicate":"inputStickerSetShortName","params":[{"name":"short_name","type":"string"}],"type":"InputStickerSet"},{"id":"-852477119","predicate":"stickerSet","params":[{"name":"flags","type":"#"},{"name":"installed","type":"flags.0?true"},{"name":"disabled","type":"flags.1?true"},{"name":"official","type":"flags.2?true"},{"name":"id","type":"long"},{"name":"access_hash","type":"long"},{"name":"title","type":"string"},{"name":"short_name","type":"string"},{"name":"count","type":"int"},{"name":"hash","type":"int"}],"type":"StickerSet"},{"id":"-1240849242","predicate":"messages.stickerSet","params":[{"name":"set","type":"StickerSet"},{"name":"packs","type":"Vector<StickerPack>"},{"name":"documents","type":"Vector<Document>"}],"type":"messages.StickerSet"},{"id":"-787638374","predicate":"user","params":[{"name":"flags","type":"#"},{"name":"self","type":"flags.10?true"},{"name":"contact","type":"flags.11?true"},{"name":"mutual_contact","type":"flags.12?true"},{"name":"deleted","type":"flags.13?true"},{"name":"bot","type":"flags.14?true"},{"name":"bot_chat_history","type":"flags.15?true"},{"name":"bot_nochats","type":"flags.16?true"},{"name":"verified","type":"flags.17?true"},{"name":"restricted","type":"flags.18?true"},{"name":"id","type":"int"},{"name":"access_hash","type":"flags.0?long"},{"name":"first_name","type":"flags.1?string"},{"name":"last_name","type":"flags.2?string"},{"name":"username","type":"flags.3?string"},{"name":"phone","type":"flags.4?string"},{"name":"photo","type":"flags.5?UserProfilePhoto"},{"name":"status","type":"flags.6?UserStatus"},{"name":"bot_info_version","type":"flags.14?int"},{"name":"restriction_reason","type":"flags.18?string"},{"name":"bot_inline_placeholder","type":"flags.19?string"}],"type":"User"},{"id":"-1032140601","predicate":"botCommand","params":[{"name":"command","type":"string"},{"name":"description","type":"string"}],"type":"BotCommand"},{"id":"-1154598962","predicate":"botInfoEmpty","params":[],"type":"BotInfo"},{"id":"164583517","predicate":"botInfo","params":[{"name":"user_id","type":"int"},{"name":"version","type":"int"},{"name":"share_text","type":"string"},{"name":"description","type":"string"},{"name":"commands","type":"Vector<BotCommand>"}],"type":"BotInfo"},{"id":"-1560655744","predicate":"keyboardButton","params":[{"name":"text","type":"string"}],"type":"KeyboardButton"},{"id":"2002815875","predicate":"keyboardButtonRow","params":[{"name":"buttons","type":"Vector<KeyboardButton>"}],"type":"KeyboardButtonRow"},{"id":"-1606526075","predicate":"replyKeyboardHide","params":[{"name":"flags","type":"#"},{"name":"selective","type":"flags.2?true"}],"type":"ReplyMarkup"},{"id":"-200242528","predicate":"replyKeyboardForceReply","params":[{"name":"flags","type":"#"},{"name":"single_use","type":"flags.1?true"},{"name":"selective","type":"flags.2?true"}],"type":"ReplyMarkup"},{"id":"889353612","predicate":"replyKeyboardMarkup","params":[{"name":"flags","type":"#"},{"name":"resize","type":"flags.0?true"},{"name":"single_use","type":"flags.1?true"},{"name":"selective","type":"flags.2?true"},{"name":"rows","type":"Vector<KeyboardButtonRow>"}],"type":"ReplyMarkup"},{"id":"2072935910","predicate":"inputPeerUser","params":[{"name":"user_id","type":"int"},{"name":"access_hash","type":"long"}],"type":"InputPeer"},{"id":"-668391402","predicate":"inputUser","params":[{"name":"user_id","type":"int"},{"name":"access_hash","type":"long"}],"type":"InputUser"},{"id":"-1350696044","predicate":"help.appChangelogEmpty","params":[],"type":"help.AppChangelog"},{"id":"1181279933","predicate":"help.appChangelog","params":[{"name":"text","type":"string"}],"type":"help.AppChangelog"},{"id":"-1148011883","predicate":"messageEntityUnknown","params":[{"name":"offset","type":"int"},{"name":"length","type":"int"}],"type":"MessageEntity"},{"id":"-100378723","predicate":"messageEntityMention","params":[{"name":"offset","type":"int"},{"name":"length","type":"int"}],"type":"MessageEntity"},{"id":"1868782349","predicate":"messageEntityHashtag","params":[{"name":"offset","type":"int"},{"name":"length","type":"int"}],"type":"MessageEntity"},{"id":"1827637959","predicate":"messageEntityBotCommand","params":[{"name":"offset","type":"int"},{"name":"length","type":"int"}],"type":"MessageEntity"},{"id":"1859134776","predicate":"messageEntityUrl","params":[{"name":"offset","type":"int"},{"name":"length","type":"int"}],"type":"MessageEntity"},{"id":"1692693954","predicate":"messageEntityEmail","params":[{"name":"offset","type":"int"},{"name":"length","type":"int"}],"type":"MessageEntity"},{"id":"-1117713463","predicate":"messageEntityBold","params":[{"name":"offset","type":"int"},{"name":"length","type":"int"}],"type":"MessageEntity"},{"id":"-2106619040","predicate":"messageEntityItalic","params":[{"name":"offset","type":"int"},{"name":"length","type":"int"}],"type":"MessageEntity"},{"id":"681706865","predicate":"messageEntityCode","params":[{"name":"offset","type":"int"},{"name":"length","type":"int"}],"type":"MessageEntity"},{"id":"1938967520","predicate":"messageEntityPre","params":[{"name":"offset","type":"int"},{"name":"length","type":"int"},{"name":"language","type":"string"}],"type":"MessageEntity"},{"id":"1990644519","predicate":"messageEntityTextUrl","params":[{"name":"offset","type":"int"},{"name":"length","type":"int"},{"name":"url","type":"string"}],"type":"MessageEntity"},{"id":"301019932","predicate":"updateShortSentMessage","params":[{"name":"flags","type":"#"},{"name":"unread","type":"flags.0?true"},{"name":"out","type":"flags.1?true"},{"name":"id","type":"int"},{"name":"pts","type":"int"},{"name":"pts_count","type":"int"},{"name":"date","type":"int"},{"name":"media","type":"flags.9?MessageMedia"},{"name":"entities","type":"flags.7?Vector<MessageEntity>"}],"type":"Updates"},{"id":"-292807034","predicate":"inputChannelEmpty","params":[],"type":"InputChannel"},{"id":"-1343524562","predicate":"inputChannel","params":[{"name":"channel_id","type":"int"},{"name":"access_hash","type":"long"}],"type":"InputChannel"},{"id":"-1109531342","predicate":"peerChannel","params":[{"name":"channel_id","type":"int"}],"type":"Peer"},{"id":"548253432","predicate":"inputPeerChannel","params":[{"name":"channel_id","type":"int"},{"name":"access_hash","type":"long"}],"type":"InputPeer"},{"id":"1260090630","predicate":"channel","params":[{"name":"flags","type":"#"},{"name":"creator","type":"flags.0?true"},{"name":"kicked","type":"flags.1?true"},{"name":"left","type":"flags.2?true"},{"name":"editor","type":"flags.3?true"},{"name":"moderator","type":"flags.4?true"},{"name":"broadcast","type":"flags.5?true"},{"name":"verified","type":"flags.7?true"},{"name":"megagroup","type":"flags.8?true"},{"name":"restricted","type":"flags.9?true"},{"name":"id","type":"int"},{"name":"access_hash","type":"long"},{"name":"title","type":"string"},{"name":"username","type":"flags.6?string"},{"name":"photo","type":"ChatPhoto"},{"name":"date","type":"int"},{"name":"version","type":"int"},{"name":"restriction_reason","type":"flags.9?string"}],"type":"Chat"},{"id":"763724588","predicate":"channelForbidden","params":[{"name":"id","type":"int"},{"name":"access_hash","type":"long"},{"name":"title","type":"string"}],"type":"Chat"},{"id":"2131196633","predicate":"contacts.resolvedPeer","params":[{"name":"peer","type":"Peer"},{"name":"chats","type":"Vector<Chat>"},{"name":"users","type":"Vector<User>"}],"type":"contacts.ResolvedPeer"},{"id":"-1640751649","predicate":"channelFull","params":[{"name":"flags","type":"#"},{"name":"can_view_participants","type":"flags.3?true"},{"name":"id","type":"int"},{"name":"about","type":"string"},{"name":"participants_count","type":"flags.0?int"},{"name":"admins_count","type":"flags.1?int"},{"name":"kicked_count","type":"flags.2?int"},{"name":"read_inbox_max_id","type":"int"},{"name":"unread_count","type":"int"},{"name":"unread_important_count","type":"int"},{"name":"chat_photo","type":"Photo"},{"name":"notify_settings","type":"PeerNotifySettings"},{"name":"exported_invite","type":"ExportedChatInvite"},{"name":"bot_info","type":"Vector<BotInfo>"},{"name":"migrated_from_chat_id","type":"flags.4?int"},{"name":"migrated_from_max_id","type":"flags.4?int"}],"type":"ChatFull"},{"id":"1535415986","predicate":"dialogChannel","params":[{"name":"peer","type":"Peer"},{"name":"top_message","type":"int"},{"name":"top_important_message","type":"int"},{"name":"read_inbox_max_id","type":"int"},{"name":"unread_count","type":"int"},{"name":"unread_important_count","type":"int"},{"name":"notify_settings","type":"PeerNotifySettings"},{"name":"pts","type":"int"}],"type":"Dialog"},{"id":"182649427","predicate":"messageRange","params":[{"name":"min_id","type":"int"},{"name":"max_id","type":"int"}],"type":"MessageRange"},{"id":"-399216813","predicate":"messageGroup","params":[{"name":"min_id","type":"int"},{"name":"max_id","type":"int"},{"name":"count","type":"int"},{"name":"date","type":"int"}],"type":"MessageGroup"},{"id":"-1139861572","predicate":"messages.channelMessages","params":[{"name":"flags","type":"#"},{"name":"pts","type":"int"},{"name":"count","type":"int"},{"name":"messages","type":"Vector<Message>"},{"name":"collapsed","type":"flags.0?Vector<MessageGroup>"},{"name":"chats","type":"Vector<Chat>"},{"name":"users","type":"Vector<User>"}],"type":"messages.Messages"},{"id":"-1781355374","predicate":"messageActionChannelCreate","params":[{"name":"title","type":"string"}],"type":"MessageAction"},{"id":"1620337698","predicate":"updateChannelTooLong","params":[{"name":"channel_id","type":"int"}],"type":"Update"},{"id":"-1227598250","predicate":"updateChannel","params":[{"name":"channel_id","type":"int"}],"type":"Update"},{"id":"-1016324548","predicate":"updateChannelGroup","params":[{"name":"channel_id","type":"int"},{"name":"group","type":"MessageGroup"}],"type":"Update"},{"id":"1656358105","predicate":"updateNewChannelMessage","params":[{"name":"message","type":"Message"},{"name":"pts","type":"int"},{"name":"pts_count","type":"int"}],"type":"Update"},{"id":"1108669311","predicate":"updateReadChannelInbox","params":[{"name":"channel_id","type":"int"},{"name":"max_id","type":"int"}],"type":"Update"},{"id":"-1015733815","predicate":"updateDeleteChannelMessages","params":[{"name":"channel_id","type":"int"},{"name":"messages","type":"Vector<int>"},{"name":"pts","type":"int"},{"name":"pts_count","type":"int"}],"type":"Update"},{"id":"-1734268085","predicate":"updateChannelMessageViews","params":[{"name":"channel_id","type":"int"},{"name":"id","type":"int"},{"name":"views","type":"int"}],"type":"Update"},{"id":"1041346555","predicate":"updates.channelDifferenceEmpty","params":[{"name":"flags","type":"#"},{"name":"final","type":"flags.0?true"},{"name":"pts","type":"int"},{"name":"timeout","type":"flags.1?int"}],"type":"updates.ChannelDifference"},{"id":"1578530374","predicate":"updates.channelDifferenceTooLong","params":[{"name":"flags","type":"#"},{"name":"final","type":"flags.0?true"},{"name":"pts","type":"int"},{"name":"timeout","type":"flags.1?int"},{"name":"top_message","type":"int"},{"name":"top_important_message","type":"int"},{"name":"read_inbox_max_id","type":"int"},{"name":"unread_count","type":"int"},{"name":"unread_important_count","type":"int"},{"name":"messages","type":"Vector<Message>"},{"name":"chats","type":"Vector<Chat>"},{"name":"users","type":"Vector<User>"}],"type":"updates.ChannelDifference"},{"id":"543450958","predicate":"updates.channelDifference","params":[{"name":"flags","type":"#"},{"name":"final","type":"flags.0?true"},{"name":"pts","type":"int"},{"name":"timeout","type":"flags.1?int"},{"name":"new_messages","type":"Vector<Message>"},{"name":"other_updates","type":"Vector<Update>"},{"name":"chats","type":"Vector<Chat>"},{"name":"users","type":"Vector<User>"}],"type":"updates.ChannelDifference"},{"id":"-1798033689","predicate":"channelMessagesFilterEmpty","params":[],"type":"ChannelMessagesFilter"},{"id":"-847783593","predicate":"channelMessagesFilter","params":[{"name":"flags","type":"#"},{"name":"important_only","type":"flags.0?true"},{"name":"exclude_new_messages","type":"flags.1?true"},{"name":"ranges","type":"Vector<MessageRange>"}],"type":"ChannelMessagesFilter"},{"id":"-100588754","predicate":"channelMessagesFilterCollapsed","params":[],"type":"ChannelMessagesFilter"},{"id":"367766557","predicate":"channelParticipant","params":[{"name":"user_id","type":"int"},{"name":"date","type":"int"}],"type":"ChannelParticipant"},{"id":"-1557620115","predicate":"channelParticipantSelf","params":[{"name":"user_id","type":"int"},{"name":"inviter_id","type":"int"},{"name":"date","type":"int"}],"type":"ChannelParticipant"},{"id":"-1861910545","predicate":"channelParticipantModerator","params":[{"name":"user_id","type":"int"},{"name":"inviter_id","type":"int"},{"name":"date","type":"int"}],"type":"ChannelParticipant"},{"id":"-1743180447","predicate":"channelParticipantEditor","params":[{"name":"user_id","type":"int"},{"name":"inviter_id","type":"int"},{"name":"date","type":"int"}],"type":"ChannelParticipant"},{"id":"-1933187430","predicate":"channelParticipantKicked","params":[{"name":"user_id","type":"int"},{"name":"kicked_by","type":"int"},{"name":"date","type":"int"}],"type":"ChannelParticipant"},{"id":"-471670279","predicate":"channelParticipantCreator","params":[{"name":"user_id","type":"int"}],"type":"ChannelParticipant"},{"id":"-566281095","predicate":"channelParticipantsRecent","params":[],"type":"ChannelParticipantsFilter"},{"id":"-1268741783","predicate":"channelParticipantsAdmins","params":[],"type":"ChannelParticipantsFilter"},{"id":"1010285434","predicate":"channelParticipantsKicked","params":[],"type":"ChannelParticipantsFilter"},{"id":"-1299865402","predicate":"channelRoleEmpty","params":[],"type":"ChannelParticipantRole"},{"id":"-1776756363","predicate":"channelRoleModerator","params":[],"type":"ChannelParticipantRole"},{"id":"-2113143156","predicate":"channelRoleEditor","params":[],"type":"ChannelParticipantRole"},{"id":"-177282392","predicate":"channels.channelParticipants","params":[{"name":"count","type":"int"},{"name":"participants","type":"Vector<ChannelParticipant>"},{"name":"users","type":"Vector<User>"}],"type":"channels.ChannelParticipants"},{"id":"-791039645","predicate":"channels.channelParticipant","params":[{"name":"participant","type":"ChannelParticipant"},{"name":"users","type":"Vector<User>"}],"type":"channels.ChannelParticipant"},{"id":"-636267638","predicate":"chatParticipantCreator","params":[{"name":"user_id","type":"int"}],"type":"ChatParticipant"},{"id":"-489233354","predicate":"chatParticipantAdmin","params":[{"name":"user_id","type":"int"},{"name":"inviter_id","type":"int"},{"name":"date","type":"int"}],"type":"ChatParticipant"},{"id":"1855224129","predicate":"updateChatAdmins","params":[{"name":"chat_id","type":"int"},{"name":"enabled","type":"Bool"},{"name":"version","type":"int"}],"type":"Update"},{"id":"-1232070311","predicate":"updateChatParticipantAdmin","params":[{"name":"chat_id","type":"int"},{"name":"user_id","type":"int"},{"name":"is_admin","type":"Bool"},{"name":"version","type":"int"}],"type":"Update"},{"id":"1371385889","predicate":"messageActionChatMigrateTo","params":[{"name":"channel_id","type":"int"}],"type":"MessageAction"},{"id":"-1336546578","predicate":"messageActionChannelMigrateFrom","params":[{"name":"title","type":"string"},{"name":"chat_id","type":"int"}],"type":"MessageAction"},{"id":"-1328445861","predicate":"channelParticipantsBots","params":[],"type":"ChannelParticipantsFilter"},{"id":"-236044656","predicate":"help.termsOfService","params":[{"name":"text","type":"string"}],"type":"help.TermsOfService"},{"id":"1753886890","predicate":"updateNewStickerSet","params":[{"name":"stickerset","type":"messages.StickerSet"}],"type":"Update"},{"id":"-253774767","predicate":"updateStickerSetsOrder","params":[{"name":"order","type":"Vector<long>"}],"type":"Update"},{"id":"1135492588","predicate":"updateStickerSets","params":[],"type":"Update"},{"id":"372165663","predicate":"foundGif","params":[{"name":"url","type":"string"},{"name":"thumb_url","type":"string"},{"name":"content_url","type":"string"},{"name":"content_type","type":"string"},{"name":"w","type":"int"},{"name":"h","type":"int"}],"type":"FoundGif"},{"id":"-1670052855","predicate":"foundGifCached","params":[{"name":"url","type":"string"},{"name":"photo","type":"Photo"},{"name":"document","type":"Document"}],"type":"FoundGif"},{"id":"1212395773","predicate":"inputMediaGifExternal","params":[{"name":"url","type":"string"},{"name":"q","type":"string"}],"type":"InputMedia"},{"id":"1158290442","predicate":"messages.foundGifs","params":[{"name":"next_offset","type":"int"},{"name":"results","type":"Vector<FoundGif>"}],"type":"messages.FoundGifs"},{"id":"-402498398","predicate":"messages.savedGifsNotModified","params":[],"type":"messages.SavedGifs"},{"id":"772213157","predicate":"messages.savedGifs","params":[{"name":"hash","type":"int"},{"name":"gifs","type":"Vector<Document>"}],"type":"messages.SavedGifs"},{"id":"-1821035490","predicate":"updateSavedGifs","params":[],"type":"Update"},{"id":"776201607","predicate":"inputBotInlineMessageMediaAuto","params":[{"name":"caption","type":"string"}],"type":"InputBotInlineMessage"},{"id":"-1376723087","predicate":"inputBotInlineMessageText","params":[{"name":"flags","type":"#"},{"name":"no_webpage","type":"flags.0?true"},{"name":"message","type":"string"},{"name":"entities","type":"flags.1?Vector<MessageEntity>"}],"type":"InputBotInlineMessage"},{"id":"750510426","predicate":"inputBotInlineResult","params":[{"name":"flags","type":"#"},{"name":"id","type":"string"},{"name":"type","type":"string"},{"name":"title","type":"flags.1?string"},{"name":"description","type":"flags.2?string"},{"name":"url","type":"flags.3?string"},{"name":"thumb_url","type":"flags.4?string"},{"name":"content_url","type":"flags.5?string"},{"name":"content_type","type":"flags.5?string"},{"name":"w","type":"flags.6?int"},{"name":"h","type":"flags.6?int"},{"name":"duration","type":"flags.7?int"},{"name":"send_message","type":"InputBotInlineMessage"}],"type":"InputBotInlineResult"},{"id":"-61413251","predicate":"botInlineMessageMediaAuto","params":[{"name":"caption","type":"string"}],"type":"BotInlineMessage"},{"id":"-1520330839","predicate":"botInlineMessageText","params":[{"name":"flags","type":"#"},{"name":"no_webpage","type":"flags.0?true"},{"name":"message","type":"string"},{"name":"entities","type":"flags.1?Vector<MessageEntity>"}],"type":"BotInlineMessage"},{"id":"-124267714","predicate":"botInlineMediaResultDocument","params":[{"name":"id","type":"string"},{"name":"type","type":"string"},{"name":"document","type":"Document"},{"name":"send_message","type":"BotInlineMessage"}],"type":"BotInlineResult"},{"id":"-984447609","predicate":"botInlineMediaResultPhoto","params":[{"name":"id","type":"string"},{"name":"type","type":"string"},{"name":"photo","type":"Photo"},{"name":"send_message","type":"BotInlineMessage"}],"type":"BotInlineResult"},{"id":"-1679053127","predicate":"botInlineResult","params":[{"name":"flags","type":"#"},{"name":"id","type":"string"},{"name":"type","type":"string"},{"name":"title","type":"flags.1?string"},{"name":"description","type":"flags.2?string"},{"name":"url","type":"flags.3?string"},{"name":"thumb_url","type":"flags.4?string"},{"name":"content_url","type":"flags.5?string"},{"name":"content_type","type":"flags.5?string"},{"name":"w","type":"flags.6?int"},{"name":"h","type":"flags.6?int"},{"name":"duration","type":"flags.7?int"},{"name":"send_message","type":"BotInlineMessage"}],"type":"BotInlineResult"},{"id":"292597923","predicate":"messages.botResults","params":[{"name":"flags","type":"#"},{"name":"gallery","type":"flags.0?true"},{"name":"query_id","type":"long"},{"name":"next_offset","type":"flags.1?string"},{"name":"results","type":"Vector<BotInlineResult>"}],"type":"messages.BotResults"},{"id":"-1071715832","predicate":"updateBotInlineQuery","params":[{"name":"query_id","type":"long"},{"name":"user_id","type":"int"},{"name":"query","type":"string"},{"name":"offset","type":"string"}],"type":"Update"},{"id":"258597139","predicate":"updateBotInlineSend","params":[{"name":"user_id","type":"int"},{"name":"query","type":"string"},{"name":"id","type":"string"}],"type":"Update"}],"methods":[{"id":"-878758099","method":"invokeAfterMsg","params":[{"name":"msg_id","type":"long"},{"name":"query","type":"!X"}],"type":"X"},{"id":"1036301552","method":"invokeAfterMsgs","params":[{"name":"msg_ids","type":"Vector<long>"},{"name":"query","type":"!X"}],"type":"X"},{"id":"1877286395","method":"auth.checkPhone","params":[{"name":"phone_number","type":"string"}],"type":"auth.CheckedPhone"},{"id":"1988976461","method":"auth.sendCode","params":[{"name":"phone_number","type":"string"},{"name":"sms_type","type":"int"},{"name":"api_id","type":"int"},{"name":"api_hash","type":"string"},{"name":"lang_code","type":"string"}],"type":"auth.SentCode"},{"id":"63247716","method":"auth.sendCall","params":[{"name":"phone_number","type":"string"},{"name":"phone_code_hash","type":"string"}],"type":"Bool"},{"id":"453408308","method":"auth.signUp","params":[{"name":"phone_number","type":"string"},{"name":"phone_code_hash","type":"string"},{"name":"phone_code","type":"string"},{"name":"first_name","type":"string"},{"name":"last_name","type":"string"}],"type":"auth.Authorization"},{"id":"-1126886015","method":"auth.signIn","params":[{"name":"phone_number","type":"string"},{"name":"phone_code_hash","type":"string"},{"name":"phone_code","type":"string"}],"type":"auth.Authorization"},{"id":"1461180992","method":"auth.logOut","params":[],"type":"Bool"},{"id":"-1616179942","method":"auth.resetAuthorizations","params":[],"type":"Bool"},{"id":"1998331287","method":"auth.sendInvites","params":[{"name":"phone_numbers","type":"Vector<string>"},{"name":"message","type":"string"}],"type":"Bool"},{"id":"-440401971","method":"auth.exportAuthorization","params":[{"name":"dc_id","type":"int"}],"type":"auth.ExportedAuthorization"},{"id":"-470837741","method":"auth.importAuthorization","params":[{"name":"id","type":"int"},{"name":"bytes","type":"bytes"}],"type":"auth.Authorization"},{"id":"-841733627","method":"auth.bindTempAuthKey","params":[{"name":"perm_auth_key_id","type":"long"},{"name":"nonce","type":"long"},{"name":"expires_at","type":"int"},{"name":"encrypted_message","type":"bytes"}],"type":"Bool"},{"id":"1147957548","method":"account.registerDevice","params":[{"name":"token_type","type":"int"},{"name":"token","type":"string"},{"name":"device_model","type":"string"},{"name":"system_version","type":"string"},{"name":"app_version","type":"string"},{"name":"app_sandbox","type":"Bool"},{"name":"lang_code","type":"string"}],"type":"Bool"},{"id":"1707432768","method":"account.unregisterDevice","params":[{"name":"token_type","type":"int"},{"name":"token","type":"string"}],"type":"Bool"},{"id":"-2067899501","method":"account.updateNotifySettings","params":[{"name":"peer","type":"InputNotifyPeer"},{"name":"settings","type":"InputPeerNotifySettings"}],"type":"Bool"},{"id":"313765169","method":"account.getNotifySettings","params":[{"name":"peer","type":"InputNotifyPeer"}],"type":"PeerNotifySettings"},{"id":"-612493497","method":"account.resetNotifySettings","params":[],"type":"Bool"},{"id":"-259486360","method":"account.updateProfile","params":[{"name":"first_name","type":"string"},{"name":"last_name","type":"string"}],"type":"User"},{"id":"1713919532","method":"account.updateStatus","params":[{"name":"offline","type":"Bool"}],"type":"Bool"},{"id":"-1068696894","method":"account.getWallPapers","params":[],"type":"Vector<WallPaper>"},{"id":"-1374118561","method":"account.reportPeer","params":[{"name":"peer","type":"InputPeer"},{"name":"reason","type":"ReportReason"}],"type":"Bool"},{"id":"227648840","method":"users.getUsers","params":[{"name":"id","type":"Vector<InputUser>"}],"type":"Vector<User>"},{"id":"-902781519","method":"users.getFullUser","params":[{"name":"id","type":"InputUser"}],"type":"UserFull"},{"id":"-995929106","method":"contacts.getStatuses","params":[],"type":"Vector<ContactStatus>"},{"id":"583445000","method":"contacts.getContacts","params":[{"name":"hash","type":"string"}],"type":"contacts.Contacts"},{"id":"-634342611","method":"contacts.importContacts","params":[{"name":"contacts","type":"Vector<InputContact>"},{"name":"replace","type":"Bool"}],"type":"contacts.ImportedContacts"},{"id":"-847825880","method":"contacts.getSuggested","params":[{"name":"limit","type":"int"}],"type":"contacts.Suggested"},{"id":"-1902823612","method":"contacts.deleteContact","params":[{"name":"id","type":"InputUser"}],"type":"contacts.Link"},{"id":"1504393374","method":"contacts.deleteContacts","params":[{"name":"id","type":"Vector<InputUser>"}],"type":"Bool"},{"id":"858475004","method":"contacts.block","params":[{"name":"id","type":"InputUser"}],"type":"Bool"},{"id":"-448724803","method":"contacts.unblock","params":[{"name":"id","type":"InputUser"}],"type":"Bool"},{"id":"-176409329","method":"contacts.getBlocked","params":[{"name":"offset","type":"int"},{"name":"limit","type":"int"}],"type":"contacts.Blocked"},{"id":"-2065352905","method":"contacts.exportCard","params":[],"type":"Vector<int>"},{"id":"1340184318","method":"contacts.importCard","params":[{"name":"export_card","type":"Vector<int>"}],"type":"User"},{"id":"1109588596","method":"messages.getMessages","params":[{"name":"id","type":"Vector<int>"}],"type":"messages.Messages"},{"id":"1799878989","method":"messages.getDialogs","params":[{"name":"offset_date","type":"int"},{"name":"offset_id","type":"int"},{"name":"offset_peer","type":"InputPeer"},{"name":"limit","type":"int"}],"type":"messages.Dialogs"},{"id":"-1970355494","method":"messages.getHistory","params":[{"name":"peer","type":"InputPeer"},{"name":"offset_id","type":"int"},{"name":"add_offset","type":"int"},{"name":"limit","type":"int"},{"name":"max_id","type":"int"},{"name":"min_id","type":"int"}],"type":"messages.Messages"},{"id":"-732523960","method":"messages.search","params":[{"name":"flags","type":"#"},{"name":"important_only","type":"flags.0?true"},{"name":"peer","type":"InputPeer"},{"name":"q","type":"string"},{"name":"filter","type":"MessagesFilter"},{"name":"min_date","type":"int"},{"name":"max_date","type":"int"},{"name":"offset","type":"int"},{"name":"max_id","type":"int"},{"name":"limit","type":"int"}],"type":"messages.Messages"},{"id":"238054714","method":"messages.readHistory","params":[{"name":"peer","type":"InputPeer"},{"name":"max_id","type":"int"}],"type":"messages.AffectedMessages"},{"id":"-1212072999","method":"messages.deleteHistory","params":[{"name":"peer","type":"InputPeer"},{"name":"max_id","type":"int"}],"type":"messages.AffectedHistory"},{"id":"-1510897371","method":"messages.deleteMessages","params":[{"name":"id","type":"Vector<int>"}],"type":"messages.AffectedMessages"},{"id":"94983360","method":"messages.receivedMessages","params":[{"name":"max_id","type":"int"}],"type":"Vector<ReceivedNotifyMessage>"},{"id":"-1551737264","method":"messages.setTyping","params":[{"name":"peer","type":"InputPeer"},{"name":"action","type":"SendMessageAction"}],"type":"Bool"},{"id":"-91733382","method":"messages.sendMessage","params":[{"name":"flags","type":"#"},{"name":"no_webpage","type":"flags.1?true"},{"name":"broadcast","type":"flags.4?true"},{"name":"peer","type":"InputPeer"},{"name":"reply_to_msg_id","type":"flags.0?int"},{"name":"message","type":"string"},{"name":"random_id","type":"long"},{"name":"reply_markup","type":"flags.2?ReplyMarkup"},{"name":"entities","type":"flags.3?Vector<MessageEntity>"}],"type":"Updates"},{"id":"-923703407","method":"messages.sendMedia","params":[{"name":"flags","type":"#"},{"name":"broadcast","type":"flags.4?true"},{"name":"peer","type":"InputPeer"},{"name":"reply_to_msg_id","type":"flags.0?int"},{"name":"media","type":"InputMedia"},{"name":"random_id","type":"long"},{"name":"reply_markup","type":"flags.2?ReplyMarkup"}],"type":"Updates"},{"id":"1888354709","method":"messages.forwardMessages","params":[{"name":"flags","type":"#"},{"name":"broadcast","type":"flags.4?true"},{"name":"from_peer","type":"InputPeer"},{"name":"id","type":"Vector<int>"},{"name":"random_id","type":"Vector<long>"},{"name":"to_peer","type":"InputPeer"}],"type":"Updates"},{"id":"-820669733","method":"messages.reportSpam","params":[{"name":"peer","type":"InputPeer"}],"type":"Bool"},{"id":"1013621127","method":"messages.getChats","params":[{"name":"id","type":"Vector<int>"}],"type":"messages.Chats"},{"id":"998448230","method":"messages.getFullChat","params":[{"name":"chat_id","type":"int"}],"type":"messages.ChatFull"},{"id":"-599447467","method":"messages.editChatTitle","params":[{"name":"chat_id","type":"int"},{"name":"title","type":"string"}],"type":"Updates"},{"id":"-900957736","method":"messages.editChatPhoto","params":[{"name":"chat_id","type":"int"},{"name":"photo","type":"InputChatPhoto"}],"type":"Updates"},{"id":"-106911223","method":"messages.addChatUser","params":[{"name":"chat_id","type":"int"},{"name":"user_id","type":"InputUser"},{"name":"fwd_limit","type":"int"}],"type":"Updates"},{"id":"-530505962","method":"messages.deleteChatUser","params":[{"name":"chat_id","type":"int"},{"name":"user_id","type":"InputUser"}],"type":"Updates"},{"id":"164303470","method":"messages.createChat","params":[{"name":"users","type":"Vector<InputUser>"},{"name":"title","type":"string"}],"type":"Updates"},{"id":"-304838614","method":"updates.getState","params":[],"type":"updates.State"},{"id":"168039573","method":"updates.getDifference","params":[{"name":"pts","type":"int"},{"name":"date","type":"int"},{"name":"qts","type":"int"}],"type":"updates.Difference"},{"id":"-285902432","method":"photos.updateProfilePhoto","params":[{"name":"id","type":"InputPhoto"},{"name":"crop","type":"InputPhotoCrop"}],"type":"UserProfilePhoto"},{"id":"-720397176","method":"photos.uploadProfilePhoto","params":[{"name":"file","type":"InputFile"},{"name":"caption","type":"string"},{"name":"geo_point","type":"InputGeoPoint"},{"name":"crop","type":"InputPhotoCrop"}],"type":"photos.Photo"},{"id":"-2016444625","method":"photos.deletePhotos","params":[{"name":"id","type":"Vector<InputPhoto>"}],"type":"Vector<long>"},{"id":"-1291540959","method":"upload.saveFilePart","params":[{"name":"file_id","type":"long"},{"name":"file_part","type":"int"},{"name":"bytes","type":"bytes"}],"type":"Bool"},{"id":"-475607115","method":"upload.getFile","params":[{"name":"location","type":"InputFileLocation"},{"name":"offset","type":"int"},{"name":"limit","type":"int"}],"type":"upload.File"},{"id":"-990308245","method":"help.getConfig","params":[],"type":"Config"},{"id":"531836966","method":"help.getNearestDc","params":[],"type":"NearestDc"},{"id":"-938300290","method":"help.getAppUpdate","params":[{"name":"device_model","type":"string"},{"name":"system_version","type":"string"},{"name":"app_version","type":"string"},{"name":"lang_code","type":"string"}],"type":"help.AppUpdate"},{"id":"1862465352","method":"help.saveAppLog","params":[{"name":"events","type":"Vector<InputAppEvent>"}],"type":"Bool"},{"id":"-1532407418","method":"help.getInviteText","params":[{"name":"lang_code","type":"string"}],"type":"help.InviteText"},{"id":"-1848823128","method":"photos.getUserPhotos","params":[{"name":"user_id","type":"InputUser"},{"name":"offset","type":"int"},{"name":"max_id","type":"long"},{"name":"limit","type":"int"}],"type":"photos.Photos"},{"id":"865483769","method":"messages.forwardMessage","params":[{"name":"peer","type":"InputPeer"},{"name":"id","type":"int"},{"name":"random_id","type":"long"}],"type":"Updates"},{"id":"-1082919718","method":"messages.sendBroadcast","params":[{"name":"contacts","type":"Vector<InputUser>"},{"name":"random_id","type":"Vector<long>"},{"name":"message","type":"string"},{"name":"media","type":"InputMedia"}],"type":"Updates"},{"id":"651135312","method":"messages.getDhConfig","params":[{"name":"version","type":"int"},{"name":"random_length","type":"int"}],"type":"messages.DhConfig"},{"id":"-162681021","method":"messages.requestEncryption","params":[{"name":"user_id","type":"InputUser"},{"name":"random_id","type":"int"},{"name":"g_a","type":"bytes"}],"type":"EncryptedChat"},{"id":"1035731989","method":"messages.acceptEncryption","params":[{"name":"peer","type":"InputEncryptedChat"},{"name":"g_b","type":"bytes"},{"name":"key_fingerprint","type":"long"}],"type":"EncryptedChat"},{"id":"-304536635","method":"messages.discardEncryption","params":[{"name":"chat_id","type":"int"}],"type":"Bool"},{"id":"2031374829","method":"messages.setEncryptedTyping","params":[{"name":"peer","type":"InputEncryptedChat"},{"name":"typing","type":"Bool"}],"type":"Bool"},{"id":"2135648522","method":"messages.readEncryptedHistory","params":[{"name":"peer","type":"InputEncryptedChat"},{"name":"max_date","type":"int"}],"type":"Bool"},{"id":"-1451792525","method":"messages.sendEncrypted","params":[{"name":"peer","type":"InputEncryptedChat"},{"name":"random_id","type":"long"},{"name":"data","type":"bytes"}],"type":"messages.SentEncryptedMessage"},{"id":"-1701831834","method":"messages.sendEncryptedFile","params":[{"name":"peer","type":"InputEncryptedChat"},{"name":"random_id","type":"long"},{"name":"data","type":"bytes"},{"name":"file","type":"InputEncryptedFile"}],"type":"messages.SentEncryptedMessage"},{"id":"852769188","method":"messages.sendEncryptedService","params":[{"name":"peer","type":"InputEncryptedChat"},{"name":"random_id","type":"long"},{"name":"data","type":"bytes"}],"type":"messages.SentEncryptedMessage"},{"id":"1436924774","method":"messages.receivedQueue","params":[{"name":"max_qts","type":"int"}],"type":"Vector<long>"},{"id":"-562337987","method":"upload.saveBigFilePart","params":[{"name":"file_id","type":"long"},{"name":"file_part","type":"int"},{"name":"file_total_parts","type":"int"},{"name":"bytes","type":"bytes"}],"type":"Bool"},{"id":"1769565673","method":"initConnection","params":[{"name":"api_id","type":"int"},{"name":"device_model","type":"string"},{"name":"system_version","type":"string"},{"name":"app_version","type":"string"},{"name":"lang_code","type":"string"},{"name":"query","type":"!X"}],"type":"X"},{"id":"-1663104819","method":"help.getSupport","params":[],"type":"help.Support"},{"id":"229241832","method":"auth.sendSms","params":[{"name":"phone_number","type":"string"},{"name":"phone_code_hash","type":"string"}],"type":"Bool"},{"id":"916930423","method":"messages.readMessageContents","params":[{"name":"id","type":"Vector<int>"}],"type":"messages.AffectedMessages"},{"id":"655677548","method":"account.checkUsername","params":[{"name":"username","type":"string"}],"type":"Bool"},{"id":"1040964988","method":"account.updateUsername","params":[{"name":"username","type":"string"}],"type":"User"},{"id":"301470424","method":"contacts.search","params":[{"name":"q","type":"string"},{"name":"limit","type":"int"}],"type":"contacts.Found"},{"id":"-623130288","method":"account.getPrivacy","params":[{"name":"key","type":"InputPrivacyKey"}],"type":"account.PrivacyRules"},{"id":"-906486552","method":"account.setPrivacy","params":[{"name":"key","type":"InputPrivacyKey"},{"name":"rules","type":"Vector<InputPrivacyRule>"}],"type":"account.PrivacyRules"},{"id":"1099779595","method":"account.deleteAccount","params":[{"name":"reason","type":"string"}],"type":"Bool"},{"id":"150761757","method":"account.getAccountTTL","params":[],"type":"AccountDaysTTL"},{"id":"608323678","method":"account.setAccountTTL","params":[{"name":"ttl","type":"AccountDaysTTL"}],"type":"Bool"},{"id":"-627372787","method":"invokeWithLayer","params":[{"name":"layer","type":"int"},{"name":"query","type":"!X"}],"type":"X"},{"id":"-113456221","method":"contacts.resolveUsername","params":[{"name":"username","type":"string"}],"type":"contacts.ResolvedPeer"},{"id":"-1543001868","method":"account.sendChangePhoneCode","params":[{"name":"phone_number","type":"string"}],"type":"account.SentChangePhoneCode"},{"id":"1891839707","method":"account.changePhone","params":[{"name":"phone_number","type":"string"},{"name":"phone_code_hash","type":"string"},{"name":"phone_code","type":"string"}],"type":"User"},{"id":"-1373446075","method":"messages.getStickers","params":[{"name":"emoticon","type":"string"},{"name":"hash","type":"string"}],"type":"messages.Stickers"},{"id":"479598769","method":"messages.getAllStickers","params":[{"name":"hash","type":"int"}],"type":"messages.AllStickers"},{"id":"954152242","method":"account.updateDeviceLocked","params":[{"name":"period","type":"int"}],"type":"Bool"},{"id":"1738800940","method":"auth.importBotAuthorization","params":[{"name":"flags","type":"int"},{"name":"api_id","type":"int"},{"name":"api_hash","type":"string"},{"name":"bot_auth_token","type":"string"}],"type":"auth.Authorization"},{"id":"623001124","method":"messages.getWebPagePreview","params":[{"name":"message","type":"string"}],"type":"MessageMedia"},{"id":"-484392616","method":"account.getAuthorizations","params":[],"type":"account.Authorizations"},{"id":"-545786948","method":"account.resetAuthorization","params":[{"name":"hash","type":"long"}],"type":"Bool"},{"id":"1418342645","method":"account.getPassword","params":[],"type":"account.Password"},{"id":"-1131605573","method":"account.getPasswordSettings","params":[{"name":"current_password_hash","type":"bytes"}],"type":"account.PasswordSettings"},{"id":"-92517498","method":"account.updatePasswordSettings","params":[{"name":"current_password_hash","type":"bytes"},{"name":"new_settings","type":"account.PasswordInputSettings"}],"type":"Bool"},{"id":"174260510","method":"auth.checkPassword","params":[{"name":"password_hash","type":"bytes"}],"type":"auth.Authorization"},{"id":"-661144474","method":"auth.requestPasswordRecovery","params":[],"type":"auth.PasswordRecovery"},{"id":"1319464594","method":"auth.recoverPassword","params":[{"name":"code","type":"string"}],"type":"auth.Authorization"},{"id":"-1080796745","method":"invokeWithoutUpdates","params":[{"name":"query","type":"!X"}],"type":"X"},{"id":"2106086025","method":"messages.exportChatInvite","params":[{"name":"chat_id","type":"int"}],"type":"ExportedChatInvite"},{"id":"1051570619","method":"messages.checkChatInvite","params":[{"name":"hash","type":"string"}],"type":"ChatInvite"},{"id":"1817183516","method":"messages.importChatInvite","params":[{"name":"hash","type":"string"}],"type":"Updates"},{"id":"639215886","method":"messages.getStickerSet","params":[{"name":"stickerset","type":"InputStickerSet"}],"type":"messages.StickerSet"},{"id":"2066793382","method":"messages.installStickerSet","params":[{"name":"stickerset","type":"InputStickerSet"},{"name":"disabled","type":"Bool"}],"type":"Bool"},{"id":"-110209570","method":"messages.uninstallStickerSet","params":[{"name":"stickerset","type":"InputStickerSet"}],"type":"Bool"},{"id":"-421563528","method":"messages.startBot","params":[{"name":"bot","type":"InputUser"},{"name":"peer","type":"InputPeer"},{"name":"random_id","type":"long"},{"name":"start_param","type":"string"}],"type":"Updates"},{"id":"1537966002","method":"help.getAppChangelog","params":[{"name":"device_model","type":"string"},{"name":"system_version","type":"string"},{"name":"app_version","type":"string"},{"name":"lang_code","type":"string"}],"type":"help.AppChangelog"},{"id":"-993483427","method":"messages.getMessagesViews","params":[{"name":"peer","type":"InputPeer"},{"name":"id","type":"Vector<int>"},{"name":"increment","type":"Bool"}],"type":"Vector<int>"},{"id":"-1445735863","method":"channels.getDialogs","params":[{"name":"offset","type":"int"},{"name":"limit","type":"int"}],"type":"messages.Dialogs"},{"id":"-575067701","method":"channels.getImportantHistory","params":[{"name":"channel","type":"InputChannel"},{"name":"offset_id","type":"int"},{"name":"add_offset","type":"int"},{"name":"limit","type":"int"},{"name":"max_id","type":"int"},{"name":"min_id","type":"int"}],"type":"messages.Messages"},{"id":"-871347913","method":"channels.readHistory","params":[{"name":"channel","type":"InputChannel"},{"name":"max_id","type":"int"}],"type":"Bool"},{"id":"-2067661490","method":"channels.deleteMessages","params":[{"name":"channel","type":"InputChannel"},{"name":"id","type":"Vector<int>"}],"type":"messages.AffectedMessages"},{"id":"-787622117","method":"channels.deleteUserHistory","params":[{"name":"channel","type":"InputChannel"},{"name":"user_id","type":"InputUser"}],"type":"messages.AffectedHistory"},{"id":"-32999408","method":"channels.reportSpam","params":[{"name":"channel","type":"InputChannel"},{"name":"user_id","type":"InputUser"},{"name":"id","type":"Vector<int>"}],"type":"Bool"},{"id":"-1814580409","method":"channels.getMessages","params":[{"name":"channel","type":"InputChannel"},{"name":"id","type":"Vector<int>"}],"type":"messages.Messages"},{"id":"618237842","method":"channels.getParticipants","params":[{"name":"channel","type":"InputChannel"},{"name":"filter","type":"ChannelParticipantsFilter"},{"name":"offset","type":"int"},{"name":"limit","type":"int"}],"type":"channels.ChannelParticipants"},{"id":"1416484774","method":"channels.getParticipant","params":[{"name":"channel","type":"InputChannel"},{"name":"user_id","type":"InputUser"}],"type":"channels.ChannelParticipant"},{"id":"176122811","method":"channels.getChannels","params":[{"name":"id","type":"Vector<InputChannel>"}],"type":"messages.Chats"},{"id":"141781513","method":"channels.getFullChannel","params":[{"name":"channel","type":"InputChannel"}],"type":"messages.ChatFull"},{"id":"-192332417","method":"channels.createChannel","params":[{"name":"flags","type":"#"},{"name":"broadcast","type":"flags.0?true"},{"name":"megagroup","type":"flags.1?true"},{"name":"title","type":"string"},{"name":"about","type":"string"}],"type":"Updates"},{"id":"333610782","method":"channels.editAbout","params":[{"name":"channel","type":"InputChannel"},{"name":"about","type":"string"}],"type":"Bool"},{"id":"-344583728","method":"channels.editAdmin","params":[{"name":"channel","type":"InputChannel"},{"name":"user_id","type":"InputUser"},{"name":"role","type":"ChannelParticipantRole"}],"type":"Updates"},{"id":"1450044624","method":"channels.editTitle","params":[{"name":"channel","type":"InputChannel"},{"name":"title","type":"string"}],"type":"Updates"},{"id":"-248621111","method":"channels.editPhoto","params":[{"name":"channel","type":"InputChannel"},{"name":"photo","type":"InputChatPhoto"}],"type":"Updates"},{"id":"-1432183160","method":"channels.toggleComments","params":[{"name":"channel","type":"InputChannel"},{"name":"enabled","type":"Bool"}],"type":"Updates"},{"id":"283557164","method":"channels.checkUsername","params":[{"name":"channel","type":"InputChannel"},{"name":"username","type":"string"}],"type":"Bool"},{"id":"890549214","method":"channels.updateUsername","params":[{"name":"channel","type":"InputChannel"},{"name":"username","type":"string"}],"type":"Bool"},{"id":"615851205","method":"channels.joinChannel","params":[{"name":"channel","type":"InputChannel"}],"type":"Updates"},{"id":"-130635115","method":"channels.leaveChannel","params":[{"name":"channel","type":"InputChannel"}],"type":"Updates"},{"id":"429865580","method":"channels.inviteToChannel","params":[{"name":"channel","type":"InputChannel"},{"name":"users","type":"Vector<InputUser>"}],"type":"Updates"},{"id":"-1502421484","method":"channels.kickFromChannel","params":[{"name":"channel","type":"InputChannel"},{"name":"user_id","type":"InputUser"},{"name":"kicked","type":"Bool"}],"type":"Updates"},{"id":"-950663035","method":"channels.exportInvite","params":[{"name":"channel","type":"InputChannel"}],"type":"ExportedChatInvite"},{"id":"-1072619549","method":"channels.deleteChannel","params":[{"name":"channel","type":"InputChannel"}],"type":"Updates"},{"id":"-1154295872","method":"updates.getChannelDifference","params":[{"name":"channel","type":"InputChannel"},{"name":"filter","type":"ChannelMessagesFilter"},{"name":"pts","type":"int"},{"name":"limit","type":"int"}],"type":"updates.ChannelDifference"},{"id":"-326379039","method":"messages.toggleChatAdmins","params":[{"name":"chat_id","type":"int"},{"name":"enabled","type":"Bool"}],"type":"Updates"},{"id":"-1444503762","method":"messages.editChatAdmin","params":[{"name":"chat_id","type":"int"},{"name":"user_id","type":"InputUser"},{"name":"is_admin","type":"Bool"}],"type":"Bool"},{"id":"363051235","method":"messages.migrateChat","params":[{"name":"chat_id","type":"int"}],"type":"Updates"},{"id":"-1640190800","method":"messages.searchGlobal","params":[{"name":"q","type":"string"},{"name":"offset_date","type":"int"},{"name":"offset_peer","type":"InputPeer"},{"name":"offset_id","type":"int"},{"name":"limit","type":"int"}],"type":"messages.Messages"},{"id":"936873859","method":"help.getTermsOfService","params":[{"name":"lang_code","type":"string"}],"type":"help.TermsOfService"},{"id":"-1613775824","method":"messages.reorderStickerSets","params":[{"name":"order","type":"Vector<long>"}],"type":"Bool"},{"id":"864953444","method":"messages.getDocumentByHash","params":[{"name":"sha256","type":"bytes"},{"name":"size","type":"int"},{"name":"mime_type","type":"string"}],"type":"Document"},{"id":"-1080395925","method":"messages.searchGifs","params":[{"name":"q","type":"string"},{"name":"offset","type":"int"}],"type":"messages.FoundGifs"},{"id":"-2084618926","method":"messages.getSavedGifs","params":[{"name":"hash","type":"int"}],"type":"messages.SavedGifs"},{"id":"846868683","method":"messages.saveGif","params":[{"name":"id","type":"InputDocument"},{"name":"unsave","type":"Bool"}],"type":"Bool"},{"id":"-1826332659","method":"messages.getInlineBotResults","params":[{"name":"bot","type":"InputUser"},{"name":"query","type":"string"},{"name":"offset","type":"string"}],"type":"messages.BotResults"},{"id":"1059318802","method":"messages.setInlineBotResults","params":[{"name":"flags","type":"#"},{"name":"gallery","type":"flags.0?true"},{"name":"private","type":"flags.1?true"},{"name":"query_id","type":"long"},{"name":"results","type":"Vector<InputBotInlineResult>"},{"name":"cache_time","type":"int"},{"name":"next_offset","type":"flags.2?string"}],"type":"Bool"},{"id":"-1318189314","method":"messages.sendInlineBotResult","params":[{"name":"flags","type":"#"},{"name":"broadcast","type":"flags.4?true"},{"name":"peer","type":"InputPeer"},{"name":"reply_to_msg_id","type":"flags.0?int"},{"name":"random_id","type":"long"},{"name":"query_id","type":"long"},{"name":"id","type":"string"}],"type":"Updates"}]};

Config.Schema.API.layer = 45;

// From https://raw.githubusercontent.com/FGRibreau/latenize/master/latinize_map.js
Config.LatinizeMap = {'Á': 'A','Ă': 'A','Ắ': 'A','Ặ': 'A','Ằ': 'A','Ẳ': 'A','Ẵ': 'A','Ǎ': 'A','Â': 'A','Ấ': 'A','Ậ': 'A','Ầ': 'A','Ẩ': 'A','Ẫ': 'A','Ä': 'A','Ǟ': 'A','Ȧ': 'A','Ǡ': 'A','Ạ': 'A','Ȁ': 'A','À': 'A','Ả': 'A','Ȃ': 'A','Ā': 'A','Ą': 'A','Å': 'A','Ǻ': 'A','Ḁ': 'A','Ⱥ': 'A','Ã': 'A','Ꜳ': 'AA','Æ': 'AE','Ǽ': 'AE','Ǣ': 'AE','Ꜵ': 'AO','Ꜷ': 'AU','Ꜹ': 'AV','Ꜻ': 'AV','Ꜽ': 'AY','Ḃ': 'B','Ḅ': 'B','Ɓ': 'B','Ḇ': 'B','Ƀ': 'B','Ƃ': 'B','Ć': 'C','Č': 'C','Ç': 'C','Ḉ': 'C','Ĉ': 'C','Ċ': 'C','Ƈ': 'C','Ȼ': 'C','Ď': 'D','Ḑ': 'D','Ḓ': 'D','Ḋ': 'D','Ḍ': 'D','Ɗ': 'D','Ḏ': 'D','ǲ': 'D','ǅ': 'D','Đ': 'D','Ƌ': 'D','Ǳ': 'DZ','Ǆ': 'DZ','É': 'E','Ĕ': 'E','Ě': 'E','Ȩ': 'E','Ḝ': 'E','Ê': 'E','Ế': 'E','Ệ': 'E','Ề': 'E','Ể': 'E','Ễ': 'E','Ḙ': 'E','Ë': 'E','Ė': 'E','Ẹ': 'E','Ȅ': 'E','È': 'E','Ẻ': 'E','Ȇ': 'E','Ē': 'E','Ḗ': 'E','Ḕ': 'E','Ę': 'E','Ɇ': 'E','Ẽ': 'E','Ḛ': 'E','Ꝫ': 'ET','Ḟ': 'F','Ƒ': 'F','Ǵ': 'G','Ğ': 'G','Ǧ': 'G','Ģ': 'G','Ĝ': 'G','Ġ': 'G','Ɠ': 'G','Ḡ': 'G','Ǥ': 'G','Ḫ': 'H','Ȟ': 'H','Ḩ': 'H','Ĥ': 'H','Ⱨ': 'H','Ḧ': 'H','Ḣ': 'H','Ḥ': 'H','Ħ': 'H','Í': 'I','Ĭ': 'I','Ǐ': 'I','Î': 'I','Ï': 'I','Ḯ': 'I','İ': 'I','Ị': 'I','Ȉ': 'I','Ì': 'I','Ỉ': 'I','Ȋ': 'I','Ī': 'I','Į': 'I','Ɨ': 'I','Ĩ': 'I','Ḭ': 'I','Ꝺ': 'D','Ꝼ': 'F','Ᵹ': 'G','Ꞃ': 'R','Ꞅ': 'S','Ꞇ': 'T','Ꝭ': 'IS','Ĵ': 'J','Ɉ': 'J','Ḱ': 'K','Ǩ': 'K','Ķ': 'K','Ⱪ': 'K','Ꝃ': 'K','Ḳ': 'K','Ƙ': 'K','Ḵ': 'K','Ꝁ': 'K','Ꝅ': 'K','Ĺ': 'L','Ƚ': 'L','Ľ': 'L','Ļ': 'L','Ḽ': 'L','Ḷ': 'L','Ḹ': 'L','Ⱡ': 'L','Ꝉ': 'L','Ḻ': 'L','Ŀ': 'L','Ɫ': 'L','ǈ': 'L','Ł': 'L','Ǉ': 'LJ','Ḿ': 'M','Ṁ': 'M','Ṃ': 'M','Ɱ': 'M','Ń': 'N','Ň': 'N','Ņ': 'N','Ṋ': 'N','Ṅ': 'N','Ṇ': 'N','Ǹ': 'N','Ɲ': 'N','Ṉ': 'N','Ƞ': 'N','ǋ': 'N','Ñ': 'N','Ǌ': 'NJ','Ó': 'O','Ŏ': 'O','Ǒ': 'O','Ô': 'O','Ố': 'O','Ộ': 'O','Ồ': 'O','Ổ': 'O','Ỗ': 'O','Ö': 'O','Ȫ': 'O','Ȯ': 'O','Ȱ': 'O','Ọ': 'O','Ő': 'O','Ȍ': 'O','Ò': 'O','Ỏ': 'O','Ơ': 'O','Ớ': 'O','Ợ': 'O','Ờ': 'O','Ở': 'O','Ỡ': 'O','Ȏ': 'O','Ꝋ': 'O','Ꝍ': 'O','Ō': 'O','Ṓ': 'O','Ṑ': 'O','Ɵ': 'O','Ǫ': 'O','Ǭ': 'O','Ø': 'O','Ǿ': 'O','Õ': 'O','Ṍ': 'O','Ṏ': 'O','Ȭ': 'O','Ƣ': 'OI','Ꝏ': 'OO','Ɛ': 'E','Ɔ': 'O','Ȣ': 'OU','Ṕ': 'P','Ṗ': 'P','Ꝓ': 'P','Ƥ': 'P','Ꝕ': 'P','Ᵽ': 'P','Ꝑ': 'P','Ꝙ': 'Q','Ꝗ': 'Q','Ŕ': 'R','Ř': 'R','Ŗ': 'R','Ṙ': 'R','Ṛ': 'R','Ṝ': 'R','Ȑ': 'R','Ȓ': 'R','Ṟ': 'R','Ɍ': 'R','Ɽ': 'R','Ꜿ': 'C','Ǝ': 'E','Ś': 'S','Ṥ': 'S','Š': 'S','Ṧ': 'S','Ş': 'S','Ŝ': 'S','Ș': 'S','Ṡ': 'S','Ṣ': 'S','Ṩ': 'S','ẞ': 'SS','Ť': 'T','Ţ': 'T','Ṱ': 'T','Ț': 'T','Ⱦ': 'T','Ṫ': 'T','Ṭ': 'T','Ƭ': 'T','Ṯ': 'T','Ʈ': 'T','Ŧ': 'T','Ɐ': 'A','Ꞁ': 'L','Ɯ': 'M','Ʌ': 'V','Ꜩ': 'TZ','Ú': 'U','Ŭ': 'U','Ǔ': 'U','Û': 'U','Ṷ': 'U','Ü': 'U','Ǘ': 'U','Ǚ': 'U','Ǜ': 'U','Ǖ': 'U','Ṳ': 'U','Ụ': 'U','Ű': 'U','Ȕ': 'U','Ù': 'U','Ủ': 'U','Ư': 'U','Ứ': 'U','Ự': 'U','Ừ': 'U','Ử': 'U','Ữ': 'U','Ȗ': 'U','Ū': 'U','Ṻ': 'U','Ų': 'U','Ů': 'U','Ũ': 'U','Ṹ': 'U','Ṵ': 'U','Ꝟ': 'V','Ṿ': 'V','Ʋ': 'V','Ṽ': 'V','Ꝡ': 'VY','Ẃ': 'W','Ŵ': 'W','Ẅ': 'W','Ẇ': 'W','Ẉ': 'W','Ẁ': 'W','Ⱳ': 'W','Ẍ': 'X','Ẋ': 'X','Ý': 'Y','Ŷ': 'Y','Ÿ': 'Y','Ẏ': 'Y','Ỵ': 'Y','Ỳ': 'Y','Ƴ': 'Y','Ỷ': 'Y','Ỿ': 'Y','Ȳ': 'Y','Ɏ': 'Y','Ỹ': 'Y','Ź': 'Z','Ž': 'Z','Ẑ': 'Z','Ⱬ': 'Z','Ż': 'Z','Ẓ': 'Z','Ȥ': 'Z','Ẕ': 'Z','Ƶ': 'Z','Ĳ': 'IJ','Œ': 'OE','ᴀ': 'A','ᴁ': 'AE','ʙ': 'B','ᴃ': 'B','ᴄ': 'C','ᴅ': 'D','ᴇ': 'E','ꜰ': 'F','ɢ': 'G','ʛ': 'G','ʜ': 'H','ɪ': 'I','ʁ': 'R','ᴊ': 'J','ᴋ': 'K','ʟ': 'L','ᴌ': 'L','ᴍ': 'M','ɴ': 'N','ᴏ': 'O','ɶ': 'OE','ᴐ': 'O','ᴕ': 'OU','ᴘ': 'P','ʀ': 'R','ᴎ': 'N','ᴙ': 'R','ꜱ': 'S','ᴛ': 'T','ⱻ': 'E','ᴚ': 'R','ᴜ': 'U','ᴠ': 'V','ᴡ': 'W','ʏ': 'Y','ᴢ': 'Z','á': 'a','ă': 'a','ắ': 'a','ặ': 'a','ằ': 'a','ẳ': 'a','ẵ': 'a','ǎ': 'a','â': 'a','ấ': 'a','ậ': 'a','ầ': 'a','ẩ': 'a','ẫ': 'a','ä': 'a','ǟ': 'a','ȧ': 'a','ǡ': 'a','ạ': 'a','ȁ': 'a','à': 'a','ả': 'a','ȃ': 'a','ā': 'a','ą': 'a','ᶏ': 'a','ẚ': 'a','å': 'a','ǻ': 'a','ḁ': 'a','ⱥ': 'a','ã': 'a','ꜳ': 'aa','æ': 'ae','ǽ': 'ae','ǣ': 'ae','ꜵ': 'ao','ꜷ': 'au','ꜹ': 'av','ꜻ': 'av','ꜽ': 'ay','ḃ': 'b','ḅ': 'b','ɓ': 'b','ḇ': 'b','ᵬ': 'b','ᶀ': 'b','ƀ': 'b','ƃ': 'b','ɵ': 'o','ć': 'c','č': 'c','ç': 'c','ḉ': 'c','ĉ': 'c','ɕ': 'c','ċ': 'c','ƈ': 'c','ȼ': 'c','ď': 'd','ḑ': 'd','ḓ': 'd','ȡ': 'd','ḋ': 'd','ḍ': 'd','ɗ': 'd','ᶑ': 'd','ḏ': 'd','ᵭ': 'd','ᶁ': 'd','đ': 'd','ɖ': 'd','ƌ': 'd','ı': 'i','ȷ': 'j','ɟ': 'j','ʄ': 'j','ǳ': 'dz','ǆ': 'dz','é': 'e','ĕ': 'e','ě': 'e','ȩ': 'e','ḝ': 'e','ê': 'e','ế': 'e','ệ': 'e','ề': 'e','ể': 'e','ễ': 'e','ḙ': 'e','ë': 'e','ė': 'e','ẹ': 'e','ȅ': 'e','è': 'e','ẻ': 'e','ȇ': 'e','ē': 'e','ḗ': 'e','ḕ': 'e','ⱸ': 'e','ę': 'e','ᶒ': 'e','ɇ': 'e','ẽ': 'e','ḛ': 'e','ꝫ': 'et','ḟ': 'f','ƒ': 'f','ᵮ': 'f','ᶂ': 'f','ǵ': 'g','ğ': 'g','ǧ': 'g','ģ': 'g','ĝ': 'g','ġ': 'g','ɠ': 'g','ḡ': 'g','ᶃ': 'g','ǥ': 'g','ḫ': 'h','ȟ': 'h','ḩ': 'h','ĥ': 'h','ⱨ': 'h','ḧ': 'h','ḣ': 'h','ḥ': 'h','ɦ': 'h','ẖ': 'h','ħ': 'h','ƕ': 'hv','í': 'i','ĭ': 'i','ǐ': 'i','î': 'i','ï': 'i','ḯ': 'i','ị': 'i','ȉ': 'i','ì': 'i','ỉ': 'i','ȋ': 'i','ī': 'i','į': 'i','ᶖ': 'i','ɨ': 'i','ĩ': 'i','ḭ': 'i','ꝺ': 'd','ꝼ': 'f','ᵹ': 'g','ꞃ': 'r','ꞅ': 's','ꞇ': 't','ꝭ': 'is','ǰ': 'j','ĵ': 'j','ʝ': 'j','ɉ': 'j','ḱ': 'k','ǩ': 'k','ķ': 'k','ⱪ': 'k','ꝃ': 'k','ḳ': 'k','ƙ': 'k','ḵ': 'k','ᶄ': 'k','ꝁ': 'k','ꝅ': 'k','ĺ': 'l','ƚ': 'l','ɬ': 'l','ľ': 'l','ļ': 'l','ḽ': 'l','ȴ': 'l','ḷ': 'l','ḹ': 'l','ⱡ': 'l','ꝉ': 'l','ḻ': 'l','ŀ': 'l','ɫ': 'l','ᶅ': 'l','ɭ': 'l','ł': 'l','ǉ': 'lj','ſ': 's','ẜ': 's','ẛ': 's','ẝ': 's','ḿ': 'm','ṁ': 'm','ṃ': 'm','ɱ': 'm','ᵯ': 'm','ᶆ': 'm','ń': 'n','ň': 'n','ņ': 'n','ṋ': 'n','ȵ': 'n','ṅ': 'n','ṇ': 'n','ǹ': 'n','ɲ': 'n','ṉ': 'n','ƞ': 'n','ᵰ': 'n','ᶇ': 'n','ɳ': 'n','ñ': 'n','ǌ': 'nj','ó': 'o','ŏ': 'o','ǒ': 'o','ô': 'o','ố': 'o','ộ': 'o','ồ': 'o','ổ': 'o','ỗ': 'o','ö': 'o','ȫ': 'o','ȯ': 'o','ȱ': 'o','ọ': 'o','ő': 'o','ȍ': 'o','ò': 'o','ỏ': 'o','ơ': 'o','ớ': 'o','ợ': 'o','ờ': 'o','ở': 'o','ỡ': 'o','ȏ': 'o','ꝋ': 'o','ꝍ': 'o','ⱺ': 'o','ō': 'o','ṓ': 'o','ṑ': 'o','ǫ': 'o','ǭ': 'o','ø': 'o','ǿ': 'o','õ': 'o','ṍ': 'o','ṏ': 'o','ȭ': 'o','ƣ': 'oi','ꝏ': 'oo','ɛ': 'e','ᶓ': 'e','ɔ': 'o','ᶗ': 'o','ȣ': 'ou','ṕ': 'p','ṗ': 'p','ꝓ': 'p','ƥ': 'p','ᵱ': 'p','ᶈ': 'p','ꝕ': 'p','ᵽ': 'p','ꝑ': 'p','ꝙ': 'q','ʠ': 'q','ɋ': 'q','ꝗ': 'q','ŕ': 'r','ř': 'r','ŗ': 'r','ṙ': 'r','ṛ': 'r','ṝ': 'r','ȑ': 'r','ɾ': 'r','ᵳ': 'r','ȓ': 'r','ṟ': 'r','ɼ': 'r','ᵲ': 'r','ᶉ': 'r','ɍ': 'r','ɽ': 'r','ↄ': 'c','ꜿ': 'c','ɘ': 'e','ɿ': 'r','ś': 's','ṥ': 's','š': 's','ṧ': 's','ş': 's','ŝ': 's','ș': 's','ṡ': 's','ṣ': 's','ṩ': 's','ʂ': 's','ᵴ': 's','ᶊ': 's','ȿ': 's','ɡ': 'g','ß': 'ss','ᴑ': 'o','ᴓ': 'o','ᴝ': 'u','ť': 't','ţ': 't','ṱ': 't','ț': 't','ȶ': 't','ẗ': 't','ⱦ': 't','ṫ': 't','ṭ': 't','ƭ': 't','ṯ': 't','ᵵ': 't','ƫ': 't','ʈ': 't','ŧ': 't','ᵺ': 'th','ɐ': 'a','ᴂ': 'ae','ǝ': 'e','ᵷ': 'g','ɥ': 'h','ʮ': 'h','ʯ': 'h','ᴉ': 'i','ʞ': 'k','ꞁ': 'l','ɯ': 'm','ɰ': 'm','ᴔ': 'oe','ɹ': 'r','ɻ': 'r','ɺ': 'r','ⱹ': 'r','ʇ': 't','ʌ': 'v','ʍ': 'w','ʎ': 'y','ꜩ': 'tz','ú': 'u','ŭ': 'u','ǔ': 'u','û': 'u','ṷ': 'u','ü': 'u','ǘ': 'u','ǚ': 'u','ǜ': 'u','ǖ': 'u','ṳ': 'u','ụ': 'u','ű': 'u','ȕ': 'u','ù': 'u','ủ': 'u','ư': 'u','ứ': 'u','ự': 'u','ừ': 'u','ử': 'u','ữ': 'u','ȗ': 'u','ū': 'u','ṻ': 'u','ų': 'u','ᶙ': 'u','ů': 'u','ũ': 'u','ṹ': 'u','ṵ': 'u','ᵫ': 'ue','ꝸ': 'um','ⱴ': 'v','ꝟ': 'v','ṿ': 'v','ʋ': 'v','ᶌ': 'v','ⱱ': 'v','ṽ': 'v','ꝡ': 'vy','ẃ': 'w','ŵ': 'w','ẅ': 'w','ẇ': 'w','ẉ': 'w','ẁ': 'w','ⱳ': 'w','ẘ': 'w','ẍ': 'x','ẋ': 'x','ᶍ': 'x','ý': 'y','ŷ': 'y','ÿ': 'y','ẏ': 'y','ỵ': 'y','ỳ': 'y','ƴ': 'y','ỷ': 'y','ỿ': 'y','ȳ': 'y','ẙ': 'y','ɏ': 'y','ỹ': 'y','ź': 'z','ž': 'z','ẑ': 'z','ʑ': 'z','ⱬ': 'z','ż': 'z','ẓ': 'z','ȥ': 'z','ẕ': 'z','ᵶ': 'z','ᶎ': 'z','ʐ': 'z','ƶ': 'z','ɀ': 'z','ﬀ': 'ff','ﬃ': 'ffi','ﬄ': 'ffl','ﬁ': 'fi','ﬂ': 'fl','ĳ': 'ij','œ': 'oe','ﬆ': 'st','ₐ': 'a','ₑ': 'e','ᵢ': 'i','ⱼ': 'j','ₒ': 'o','ᵣ': 'r','ᵤ': 'u','ᵥ': 'v','ₓ': 'x','Ё': 'YO', 'Й': 'I', 'Ц': 'TS', 'У': 'U', 'К': 'K', 'Е': 'E', 'Н': 'N', 'Г': 'G', 'Ш': 'SH', 'Щ': 'SCH', 'З': 'Z', 'Х': 'H', 'Ъ': '', 'ё': 'yo', 'й': 'i', 'ц': 'ts', 'у': 'u', 'к': 'k', 'е': 'e', 'н': 'n', 'г': 'g', 'ш': 'sh', 'щ': 'sch', 'з': 'z', 'х': 'h', 'ъ': '', 'Ф': 'F', 'Ы': 'I', 'В': 'V', 'А': 'A', 'П': 'P', 'Р': 'R', 'О': 'O', 'Л': 'L', 'Д': 'D', 'Ж': 'ZH', 'Э': 'E', 'ф': 'f', 'ы': 'i', 'в': 'v', 'а': 'a', 'п': 'p', 'р': 'r', 'о': 'o', 'л': 'l', 'д': 'd', 'ж': 'zh', 'э': 'e', 'Я': 'Ya', 'Ч': 'CH', 'С': 'S', 'М': 'M', 'И': 'I', 'Т': 'T', 'Ь': '', 'Б': 'B', 'Ю': 'YU', 'я': 'ya', 'ч': 'ch', 'с': 's', 'м': 'm', 'и': 'i', 'т': 't', 'ь': '', 'б': 'b', 'ю': 'yu'};

Config.LangCountries = {"es": "ES", "ru": "RU", "en": "US", "de": "DE", "it": "IT", "nl": "NL", "fr": "FR", "ca": "ES", "es-419": "MX", "ar": "SA", "he": "IL", "tr": "TR", "id": "ID", "pl": "PL"};

// ConfigStorage
(function (window) {
  var keyPrefix = '';
  var noPrefix = false;
  var cache = {};
  var useCs = !!(window.chrome && chrome.storage && chrome.storage.local);
  var useLs = !useCs && !!window.localStorage;

  function storageSetPrefix (newPrefix) {
    keyPrefix = newPrefix;
  }

  function storageSetNoPrefix() {
    noPrefix = true;
  }

  function storageGetPrefix () {
    if (noPrefix) {
      noPrefix = false;
      return '';
    }
    return keyPrefix;
  }

  function storageGetValue() {
    var keys = Array.prototype.slice.call(arguments),
        callback = keys.pop(),
        result = [],
        single = keys.length == 1,
        value,
        allFound = true,
        prefix = storageGetPrefix(),
        i, key;

    for (i = 0; i < keys.length; i++) {
      key = keys[i] = prefix + keys[i];
      if (key.substr(0, 3) != 'xt_' && cache[key] !== undefined) {
        result.push(cache[key]);
      }
      else if (useLs) {
        try {
          value = localStorage.getItem(key);
        } catch (e) {
          useLs = false;
        }
        try {
          value = (value === undefined || value === null) ? false : JSON.parse(value);
        } catch (e) {
          value = false;
        }
        result.push(cache[key] = value);
      }
      else if (!useCs) {
        result.push(cache[key] = false);
      }
      else {
        allFound = false;
      }
    }

    if (allFound) {
      return callback(single ? result[0] : result);
    }

    chrome.storage.local.get(keys, function (resultObj) {
      var value;
      result = [];
      for (i = 0; i < keys.length; i++) {
        key = keys[i];
        value = resultObj[key];
        value = value === undefined || value === null ? false : JSON.parse(value);
        result.push(cache[key] = value);
      }

      callback(single ? result[0] : result);
    });
  };

  function storageSetValue(obj, callback) {
    var keyValues = {},
        prefix = storageGetPrefix(),
        key, value;

    for (key in obj) {
      if (obj.hasOwnProperty(key)) {
        value = obj[key];
        key = prefix + key;
        cache[key] = value;
        value = JSON.stringify(value);
        if (useLs) {
          try {
            localStorage.setItem(key, value);
          } catch (e) {
            useLs = false;
          }
        } else {
          keyValues[key] = value;
        }
      }
    }

    if (useLs || !useCs) {
      if (callback) {
        callback();
      }
      return;
    }

    chrome.storage.local.set(keyValues, callback);
  };

  function storageRemoveValue () {
    var keys = Array.prototype.slice.call(arguments),
        prefix = storageGetPrefix(),
        i, key, callback;

    if (typeof keys[keys.length - 1] === 'function') {
      callback = keys.pop();
    }

    for (i = 0; i < keys.length; i++) {
      key = keys[i] = prefix + keys[i];
      delete cache[key];
      if (useLs) {
        try {
          localStorage.removeItem(key);
        } catch (e) {
          useLs = false;
        }
      }
    }
    if (useCs) {
      chrome.storage.local.remove(keys, callback);
    }
    else if (callback) {
      callback();
    }
  };

  window.ConfigStorage = {
    prefix: storageSetPrefix,
    noPrefix: storageSetNoPrefix,
    get: storageGetValue,
    set: storageSetValue,
    remove: storageRemoveValue
  };

})(this);

/*!
 * Webogram v0.5.3 - messaging web application for MTProto
 * https://github.com/zhukov/webogram
 * Copyright (C) 2014 Igor Zhukov <igor.beatle@gmail.com>
 * https://github.com/zhukov/webogram/blob/master/LICENSE
 */

var _logTimer = (new Date()).getTime();
function dT () {
  return '[' + (((new Date()).getTime() - _logTimer) / 1000).toFixed(3) + ']';
}

function checkClick (e, noprevent) {
  if (e.which == 1 && (e.ctrlKey || e.metaKey) || e.which == 2) {
    return true;
  }

  if (!noprevent) {
    e.preventDefault();
  }

  return false;
}

function isInDOM (element, parentNode) {
  if (!element) {
    return false;
  }
  parentNode = parentNode || document.body;
  if (element == parentNode) {
    return true;
  }
  return isInDOM(element.parentNode, parentNode)
}

function checkDragEvent(e) {
  if (!e || e.target && (e.target.tagName == 'IMG' || e.target.tagName == 'A')) return false;
  if (e.dataTransfer && e.dataTransfer.types) {
    for (var i = 0; i < e.dataTransfer.types.length; i++) {
      if (e.dataTransfer.types[i] == 'Files') {
        return true;
      }
    }
  } else {
    return true;
  }

  return false;
}

function cancelEvent (event) {
  event = event || window.event;
  if (event) {
    event = event.originalEvent || event;

    if (event.stopPropagation) event.stopPropagation();
    if (event.preventDefault) event.preventDefault();
    event.returnValue = false;
    event.cancelBubble = true;
  }

  return false;
}

function hasOnlick (element) {
  if (element.onclick ||
      element.getAttribute('ng-click')) {
    return true;
  }
  var events = $._data(element, 'events');
  if (events && (events.click || events.mousedown)) {
    return true;
  }
  return false;
}

function getScrollWidth() {
  var outer = $('<div>').css({
    position: 'absolute',
    width: 100,
    height: 100,
    overflow: 'scroll',
    top: -9999
  }).appendTo($(document.body));

  var scrollbarWidth = outer[0].offsetWidth - outer[0].clientWidth;
  outer.remove();

  return scrollbarWidth;
};

function onCtrlEnter (textarea, cb) {
  $(textarea).on('keydown', function (e) {
    if (e.keyCode == 13 && (e.ctrlKey || e.metaKey)) {
      cb();
      return cancelEvent(e);
    }
  });
}

function setFieldSelection(field, from, to) {
  field = $(field)[0];
  try {
    field.focus();
    if (from === undefined || from === false) {
      from = field.value.length;
    }
    if (to === undefined || to === false) {
      to = from;
    }
    if (field.createTextRange) {
      var range = field.createTextRange();
      range.collapse(true);
      range.moveEnd('character', to);
      range.moveStart('character', from);
      range.select();
    }
    else if (field.setSelectionRange) {
      field.setSelectionRange(from, to);
    }
  } catch(e) {}
}

function getFieldSelection (field) {
  if (field.selectionStart) {
    return field.selectionStart;
  }
  else if (!document.selection) {
    return 0;
  }

  var c = "\001",
      sel = document.selection.createRange(),
      txt = sel.text,
      dup = sel.duplicate(),
      len = 0;

  try {
    dup.moveToElementText(field);
  } catch(e) {
    return 0;
  }

  sel.text = txt + c;
  len = dup.text.indexOf(c);
  sel.moveStart('character', -1);
  sel.text  = '';

  // if (browser.msie && len == -1) {
  //   return field.value.length;
  // }
  return len;
}

function getRichValue(field) {
  if (!field) {
    return '';
  }
  var lines = [];
  var line = [];

  getRichElementValue(field, lines, line);
  if (line.length) {
    lines.push(line.join(''));
  }

  return lines.join('\n');
}

function getRichValueWithCaret(field) {
  if (!field) {
    return [];
  }
  var lines = [];
  var line = [];

  var sel = window.getSelection ? window.getSelection() : false;
  var selNode, selOffset;
  if (sel && sel.rangeCount) {
    var range = sel.getRangeAt(0);
    if (range.startContainer &&
        range.startContainer == range.endContainer &&
        range.startOffset == range.endOffset) {
      selNode = range.startContainer;
      selOffset = range.startOffset;
    }
  }

  getRichElementValue(field, lines, line, selNode, selOffset);

  if (line.length) {
    lines.push(line.join(''));
  }

  var value = lines.join('\n');
  var caretPos = value.indexOf('\001');
  if (caretPos != -1) {
    value = value.substr(0, caretPos) + value.substr(caretPos + 1);
  }

  return [value, caretPos];
}

function getRichElementValue(node, lines, line, selNode, selOffset) {
  if (node.nodeType == 3) { // TEXT
    if (selNode === node) {
      var value = node.nodeValue;
      line.push(value.substr(0, selOffset) + '\001' + value.substr(selOffset));
    } else {
      line.push(node.nodeValue);
    }
    return;
  }
  if (node.nodeType != 1) { // NON-ELEMENT
    return;
  }
  var isSelected = (selNode === node);
  var isBlock = node.tagName == 'DIV' || node.tagName == 'P';
  var curChild;
  if (isBlock && line.length || node.tagName == 'BR') {
    lines.push(line.join(''));
    line.splice(0, line.length);
  }
  else if (node.tagName == 'IMG') {
    if (node.alt) {
      line.push(node.alt);
    }
  }
  if (isSelected && !selOffset) {
    line.push('\001');
  }
  var curChild = node.firstChild;
  while (curChild) {
    getRichElementValue(curChild, lines, line, selNode, selOffset);
    curChild = curChild.nextSibling;
  }
  if (isSelected && selOffset) {
    line.push('\001');
  }
  if (isBlock && line.length) {
    lines.push(line.join(''));
    line.splice(0, line.length);
  }
}

function setRichFocus(field, selectNode, noCollapse) {
  field.focus();
  if (selectNode &&
      selectNode.parentNode == field &&
      !selectNode.nextSibling &&
      !noCollapse) {
    field.removeChild(selectNode);
    selectNode = null;
  }
  if (window.getSelection && document.createRange) {
    var range = document.createRange();
    if (selectNode) {
      range.selectNode(selectNode);
    } else {
      range.selectNodeContents(field);
    }
    if (!noCollapse) {
      range.collapse(false);
    }

    var sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
  }
  else if (document.body.createTextRange !== undefined) {
    var textRange = document.body.createTextRange();
    textRange.moveToElementText(selectNode || field);
    if (!noCollapse) {
      textRange.collapse(false);
    }
    textRange.select();
  }
}

function getSelectedText () {
  var sel = (
    window.getSelection && window.getSelection() ||
    document.getSelection && document.getSelection() ||
    document.selection && document.selection.createRange().text || ''
  ).toString().replace(/^\s+|\s+$/g, '');

  return sel;
}

function scrollToNode (scrollable, node, scroller) {
  var elTop = node.offsetTop - 15,
      elHeight = node.offsetHeight + 30,
      scrollTop = scrollable.scrollTop,
      viewportHeight = scrollable.clientHeight;

  if (scrollTop > elTop) { // we are below the node to scroll
    scrollable.scrollTop = elTop;
    $(scroller).nanoScroller({flash: true});
  }
  else if (scrollTop < elTop + elHeight - viewportHeight) { // we are over the node to scroll
    scrollable.scrollTop = elTop + elHeight - viewportHeight;
    $(scroller).nanoScroller({flash: true});
  }
}

if (Config.Modes.animations &&
    typeof window.requestAnimationFrame == 'function') {
  window.onAnimationFrameCallback = function (cb) {
    return (function () {
      window.requestAnimationFrame(cb);
    });
  };
} else {
  window.onAnimationFrameCallback = function (cb) {
    return cb;
  };
}

function onContentLoaded (cb) {
  cb = onAnimationFrameCallback(cb);
  setZeroTimeout(cb);
}

function tsNow (seconds) {
  var t = +new Date() + (window.tsOffset || 0);
  return seconds ? Math.floor(t / 1000) : t;
}

function safeReplaceObject (wasObject, newObject) {
  for (var key in wasObject) {
    if (!newObject.hasOwnProperty(key) && key.charAt(0) != '$') {
      delete wasObject[key];
    }
  }
  for (var key in newObject) {
    if (newObject.hasOwnProperty(key)) {
      wasObject[key] = newObject[key];
    }
  }
}

function listMergeSorted (list1, list2) {
  list1 = list1 || [];
  list2 = list2 || [];

  var result = angular.copy(list1);

  var minID = list1.length ? list1[list1.length - 1] : 0xFFFFFFFF;
  for (var i = 0; i < list2.length; i++) {
    if (list2[i] < minID) {
      result.push(list2[i]);
    }
  }

  return result;
}

function listUniqSorted (list) {
  list = list || [];
  var resultList = [],
      prev = false;
  for (var i = 0; i < list.length; i++) {
    if (list[i] !== prev) {
      resultList.push(list[i])
    }
    prev = list[i];
  }

  return resultList;
}

function templateUrl (tplName) {
  var forceLayout = {
    confirm_modal: 'desktop',
    error_modal: 'desktop',
    media_modal_layout: 'desktop',
    slider: 'desktop',
    reply_message: 'desktop',
    forwarded_messages: 'desktop',
    chat_invite_link_modal: 'desktop',
    reply_markup: 'desktop',
    dialog_service: 'desktop',
    channel_edit_modal: 'desktop',
    megagroup_edit_modal: 'desktop',
    inline_results: 'desktop',
    composer_dropdown: 'desktop'
  };
  var layout = forceLayout[tplName] || (Config.Mobile ? 'mobile' : 'desktop');
  return 'partials/' + layout + '/' + tplName + '.html';
}

function encodeEntities(value) {
  return value.
    replace(/&/g, '&amp;').
    replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g, function (value) {
      var hi = value.charCodeAt(0);
      var low = value.charCodeAt(1);
      return '&#' + (((hi - 0xD800) * 0x400) + (low - 0xDC00) + 0x10000) + ';';
    }).
    replace(/([^\#-~| |!])/g, function (value) { // non-alphanumeric
      return '&#' + value.charCodeAt(0) + ';';
    }).
    replace(/</g, '&lt;').
    replace(/>/g, '&gt;');
}

function calcImageInBox(imageW, imageH, boxW, boxH, noZooom) {
  var boxedImageW = boxW;
  var boxedImageH = boxH;

  if ((imageW / imageH) > (boxW / boxH)) {
    boxedImageH = parseInt(imageH * boxW / imageW);
  }
  else {
    boxedImageW = parseInt(imageW * boxH / imageH);
    if (boxedImageW > boxW) {
      boxedImageH = parseInt(boxedImageH * boxW / boxedImageW);
      boxedImageW = boxW;
    }
  }

  // if (Config.Navigator.retina) {
  //   imageW = Math.floor(imageW / 2);
  //   imageH = Math.floor(imageH / 2);
  // }

  if (noZooom && boxedImageW >= imageW && boxedImageH >= imageH) {
    boxedImageW = imageW;
    boxedImageH = imageH;
  }

  return {w: boxedImageW, h: boxedImageH};
}

function versionCompare (ver1, ver2) {
  if (typeof ver1 !== 'string') {
    ver1 = '';
  }
  if (typeof ver2 !== 'string') {
    ver2 = '';
  }
  ver1 = ver1.replace(/^\s+|\s+$/g, '').split('.');
  ver2 = ver2.replace(/^\s+|\s+$/g, '').split('.');

  var a = Math.max(ver1.length, ver2.length), i;

  for (i = 0; i < a; i++) {
    if (ver1[i] == ver2[i]) {
      continue;
    }
    if (ver1[i] > ver2[i]) {
      return 1;
    } else {
      return -1;
    }
  }

  return 0;
}


(function (global) {

  var badCharsRe = /[`~!@#$%^&*()\-_=+\[\]\\|{}'";:\/?.>,<\s]+/g,
      trimRe = /^\s+|\s$/g;

  function createIndex () {
    return {
      shortIndexes: {},
      fullTexts: {}
    }
  }

  function cleanSearchText (text) {
    var hasTag = text.charAt(0) == '%';
    text = text.replace(badCharsRe, ' ').replace(trimRe, '');
    text = text.replace(/[^A-Za-z0-9]/g, function (ch) {
      return Config.LatinizeMap[ch] || ch;
    });
    text = text.toLowerCase();
    if (hasTag) {
      text = '%' + text;
    }

    return text;
  }

  function cleanUsername (username) {
    return username && username.toLowerCase() || '';
  }

  function indexObject (id, searchText, searchIndex) {
    if (searchIndex.fullTexts[id] !== undefined) {
      return false;
    }

    searchText = cleanSearchText(searchText);

    if (!searchText.length) {
      return false;
    }

    var shortIndexes = searchIndex.shortIndexes;

    searchIndex.fullTexts[id] = searchText;

    angular.forEach(searchText.split(' '), function(searchWord) {
      var len = Math.min(searchWord.length, 3),
          wordPart, i;
      for (i = 1; i <= len; i++) {
        wordPart = searchWord.substr(0, i);
        if (shortIndexes[wordPart] === undefined) {
          shortIndexes[wordPart] = [id];
        } else {
          shortIndexes[wordPart].push(id);
        }
      }
    });
  }

  function search (query, searchIndex) {
    var shortIndexes = searchIndex.shortIndexes,
        fullTexts = searchIndex.fullTexts;

    query = cleanSearchText(query);

    var queryWords = query.split(' '),
        foundObjs = false,
        newFoundObjs, i, j, searchText, found;

    for (i = 0; i < queryWords.length; i++) {
      newFoundObjs = shortIndexes[queryWords[i].substr(0, 3)];
      if (!newFoundObjs) {
        foundObjs = [];
        break;
      }
      if (foundObjs === false || foundObjs.length > newFoundObjs.length) {
        foundObjs = newFoundObjs;
      }
    }

    newFoundObjs = {};

    for (j = 0; j < foundObjs.length; j++) {
      found = true;
      searchText = fullTexts[foundObjs[j]];
      for (i = 0; i < queryWords.length; i++) {
        if (searchText.indexOf(queryWords[i]) == -1) {
          found = false;
          break;
        }
      }
      if (found) {
        newFoundObjs[foundObjs[j]] = true;
      }
    }

    return newFoundObjs;
  }

  global.SearchIndexManager = {
    createIndex: createIndex,
    indexObject: indexObject,
    cleanSearchText: cleanSearchText,
    cleanUsername: cleanUsername,
    search: search
  };

})(window);

/*!
 * Webogram v0.5.3 - messaging web application for MTProto
 * https://github.com/zhukov/webogram
 * Copyright (C) 2014 Igor Zhukov <igor.beatle@gmail.com>
 * https://github.com/zhukov/webogram/blob/master/LICENSE
 */

function bigint (num) {
  return new BigInteger(num.toString(16), 16);
}

function bigStringInt (strNum) {
  return new BigInteger(strNum, 10);
}

function dHexDump (bytes) {
  var arr = [];
  for (var i = 0; i < bytes.length; i++) {
    if (i && !(i % 2)) {
      if (!(i % 16)) {
        arr.push("\n");
      } else if (!(i % 4)) {
        arr.push('  ');
      } else {
        arr.push(' ');
      }
    }
    arr.push((bytes[i] < 16 ? '0' : '') + bytes[i].toString(16));
  }

  console.log(arr.join(''));
}

function bytesToHex (bytes) {
  bytes = bytes || [];
  var arr = [];
  for (var i = 0; i < bytes.length; i++) {
    arr.push((bytes[i] < 16 ? '0' : '') + (bytes[i] || 0).toString(16));
  }
  return arr.join('');
}

function bytesFromHex (hexString) {
  var len = hexString.length,
      i,
      start = 0,
      bytes = [];

  if (hexString.length % 2) {
    bytes.push(parseInt(hexString.charAt(0), 16));
    start++;
  }

  for (i = start; i < len; i += 2) {
    bytes.push(parseInt(hexString.substr(i, 2), 16));
  }

  return bytes;
}

function bytesToBase64 (bytes) {
  var mod3, result = '';

  for (var nLen = bytes.length, nUint24 = 0, nIdx = 0; nIdx < nLen; nIdx++) {
    mod3 = nIdx % 3;
    nUint24 |= bytes[nIdx] << (16 >>> mod3 & 24);
    if (mod3 === 2 || nLen - nIdx === 1) {
      result += String.fromCharCode(
        uint6ToBase64(nUint24 >>> 18 & 63),
        uint6ToBase64(nUint24 >>> 12 & 63),
        uint6ToBase64(nUint24 >>> 6 & 63),
        uint6ToBase64(nUint24 & 63)
      );
      nUint24 = 0;
    }
  }

  return result.replace(/A(?=A$|$)/g, '=');
}

function uint6ToBase64 (nUint6) {
  return nUint6 < 26
    ? nUint6 + 65
    : nUint6 < 52
      ? nUint6 + 71
      : nUint6 < 62
        ? nUint6 - 4
        : nUint6 === 62
          ? 43
          : nUint6 === 63
            ? 47
            : 65;
}

function base64ToBlob(base64str, mimeType) {
  var sliceSize = 1024;
  var byteCharacters = atob(base64str);
  var bytesLength = byteCharacters.length;
  var slicesCount = Math.ceil(bytesLength / sliceSize);
  var byteArrays = new Array(slicesCount);

  for (var sliceIndex = 0; sliceIndex < slicesCount; ++sliceIndex) {
    var begin = sliceIndex * sliceSize;
    var end = Math.min(begin + sliceSize, bytesLength);

    var bytes = new Array(end - begin);
    for (var offset = begin, i = 0 ; offset < end; ++i, ++offset) {
      bytes[i] = byteCharacters[offset].charCodeAt(0);
    }
    byteArrays[sliceIndex] = new Uint8Array(bytes);
  }

  return blobConstruct(byteArrays, mimeType);
}

function dataUrlToBlob(url) {
  // var name = 'b64blob ' + url.length;
  // console.time(name);
  var urlParts = url.split(',');
  var base64str = urlParts[1];
  var mimeType = urlParts[0].split(':')[1].split(';')[0];
  var blob = base64ToBlob(base64str, mimeType);
  // console.timeEnd(name);
  return blob;
}

function blobConstruct (blobParts, mimeType) {
  var blob;
  try {
    blob = new Blob(blobParts, {type: mimeType});
  } catch (e) {
    var bb = new BlobBuilder;
    angular.forEach(blobParts, function(blobPart) {
      bb.append(blobPart);
    });
    blob = bb.getBlob(mimeType);
  }
  return blob;
}

function bytesCmp (bytes1, bytes2) {
  var len = bytes1.length;
  if (len != bytes2.length) {
    return false;
  }

  for (var i = 0; i < len; i++) {
    if (bytes1[i] != bytes2[i]) {
      return false;
    }
  }
  return true;
}

function bytesXor (bytes1, bytes2) {
  var len = bytes1.length,
      bytes = [];

  for (var i = 0; i < len; ++i) {
      bytes[i] = bytes1[i] ^ bytes2[i];
  }

  return bytes;
}

function bytesToWords (bytes) {
  if (bytes instanceof ArrayBuffer) {
    bytes = new Uint8Array(bytes);
  }
  var len = bytes.length,
      words = [], i;
  for (i = 0; i < len; i++) {
    words[i >>> 2] |= bytes[i] << (24 - (i % 4) * 8);
  }

  return new CryptoJS.lib.WordArray.init(words, len);
}

function bytesFromWords (wordArray) {
  var words = wordArray.words,
      sigBytes = wordArray.sigBytes,
      bytes = [];

  for (var i = 0; i < sigBytes; i++) {
    bytes.push((words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff);
  }

  return bytes;
}

function bytesFromBigInt (bigInt, len) {
  var bytes = bigInt.toByteArray();

  if (len && bytes.length < len) {
    var padding = [];
    for (var i = 0, needPadding = len - bytes.length; i < needPadding; i++) {
      padding[i] = 0;
    }
    if (bytes instanceof ArrayBuffer) {
      bytes = bufferConcat(padding, bytes);
    } else {
      bytes = padding.concat(bytes);
    }
  }
  else {
    while (!bytes[0] && (!len || bytes.length > len)) {
      bytes = bytes.slice(1);
    }
  }

  return bytes;
}

function bytesFromLeemonBigInt (bigInt, len) {
  var str = bigInt2str(bigInt, 16);
  return bytesFromHex(str);
}


function bytesToArrayBuffer (b) {
  return (new Uint8Array(b)).buffer;
}

function convertToArrayBuffer(bytes) {
  // Be careful with converting subarrays!!
  if (bytes instanceof ArrayBuffer) {
    return bytes;
  }
  if (bytes.buffer !== undefined &&
      bytes.buffer.byteLength == bytes.length * bytes.BYTES_PER_ELEMENT) {
    return bytes.buffer;
  }
  return bytesToArrayBuffer(bytes);
}

function convertToUint8Array(bytes) {
  if (bytes.buffer !== undefined) {
    return bytes;
  }
  return new Uint8Array(bytes);
}

function convertToByteArray(bytes) {
  if (Array.isArray(bytes)) {
    return bytes;
  }
  bytes = convertToUint8Array(bytes);
  var newBytes = [];
  for (var i = 0, len = bytes.length; i < len; i++) {
    newBytes.push(bytes[i]);
  }
  return newBytes;
}

function bytesFromArrayBuffer (buffer) {
  var len = buffer.byteLength,
      byteView = new Uint8Array(buffer),
      bytes = [];

  for (var i = 0; i < len; ++i) {
    bytes[i] = byteView[i];
  }

  return bytes;
}

function bufferConcat(buffer1, buffer2) {
  var l1 = buffer1.byteLength || buffer1.length,
      l2 = buffer2.byteLength || buffer2.length;
  var tmp = new Uint8Array(l1 + l2);
  tmp.set(buffer1 instanceof ArrayBuffer ? new Uint8Array(buffer1) : buffer1, 0);
  tmp.set(buffer2 instanceof ArrayBuffer ? new Uint8Array(buffer2) : buffer2, l1);

  return tmp.buffer;
}

function longToInts (sLong) {
  var divRem = bigStringInt(sLong).divideAndRemainder(bigint(0x100000000));

  return [divRem[0].intValue(), divRem[1].intValue()];
}

function longToBytes (sLong) {
  return bytesFromWords({words: longToInts(sLong), sigBytes: 8}).reverse();
}

function longFromInts (high, low) {
  return bigint(high).shiftLeft(32).add(bigint(low)).toString(10);
}

function intToUint (val) {
  val = parseInt(val);
  if (val < 0) {
    val = val + 4294967296;
  }
  return val;
}

function uintToInt (val) {
  if (val > 2147483647) {
    val = val - 4294967296;
  }
  return val;
}

function sha1HashSync (bytes) {
  this.rushaInstance = this.rushaInstance || new Rusha(1024 * 1024);

  // console.log(dT(), 'SHA-1 hash start', bytes.byteLength || bytes.length);
  var hashBytes = rushaInstance.rawDigest(bytes).buffer;
  // console.log(dT(), 'SHA-1 hash finish');

  return hashBytes;
}

function sha1BytesSync (bytes) {
  return bytesFromArrayBuffer(sha1HashSync(bytes));
}

function sha256HashSync (bytes) {
  // console.log(dT(), 'SHA-2 hash start', bytes.byteLength || bytes.length);
  var hashWords = CryptoJS.SHA256(bytesToWords(bytes));
  // console.log(dT(), 'SHA-2 hash finish');

  var hashBytes = bytesFromWords(hashWords);

  return hashBytes;
}



function rsaEncrypt (publicKey, bytes) {
  bytes = addPadding(bytes, 255);

  // console.log('RSA encrypt start');
  var N = new BigInteger(publicKey.modulus, 16),
      E = new BigInteger(publicKey.exponent, 16),
      X = new BigInteger(bytes),
      encryptedBigInt = X.modPowInt(E, N),
      encryptedBytes  = bytesFromBigInt(encryptedBigInt, 256);
  // console.log('RSA encrypt finish');

  return encryptedBytes;
}

function addPadding(bytes, blockSize, zeroes) {
  blockSize = blockSize || 16;
  var len = bytes.byteLength || bytes.length;
  var needPadding = blockSize - (len % blockSize);
  if (needPadding > 0 && needPadding < blockSize) {
    var padding = new Array(needPadding);
    if (zeroes) {
      for (var i = 0; i < needPadding; i++) {
        padding[i] = 0
      }
    } else {
      (new SecureRandom()).nextBytes(padding);
    }

    if (bytes instanceof ArrayBuffer) {
      bytes = bufferConcat(bytes, padding);
    } else {
      bytes = bytes.concat(padding);
    }
  }

  return bytes;
}

function aesEncryptSync (bytes, keyBytes, ivBytes) {
  var len = bytes.byteLength || bytes.length;

  // console.log(dT(), 'AES encrypt start', len/*, bytesToHex(keyBytes), bytesToHex(ivBytes)*/);
  bytes = addPadding(bytes);

  var encryptedWords = CryptoJS.AES.encrypt(bytesToWords(bytes), bytesToWords(keyBytes), {
    iv: bytesToWords(ivBytes),
    padding: CryptoJS.pad.NoPadding,
    mode: CryptoJS.mode.IGE
  }).ciphertext;

  var encryptedBytes = bytesFromWords(encryptedWords);
  // console.log(dT(), 'AES encrypt finish');

  return encryptedBytes;
}

function aesDecryptSync (encryptedBytes, keyBytes, ivBytes) {

  // console.log(dT(), 'AES decrypt start', encryptedBytes.length);
  var decryptedWords = CryptoJS.AES.decrypt({ciphertext: bytesToWords(encryptedBytes)}, bytesToWords(keyBytes), {
    iv: bytesToWords(ivBytes),
    padding: CryptoJS.pad.NoPadding,
    mode: CryptoJS.mode.IGE
  });

  var bytes = bytesFromWords(decryptedWords);
  // console.log(dT(), 'AES decrypt finish');

  return bytes;
}

function gzipUncompress (bytes) {
  // console.log('Gzip uncompress start');
  var result = (new Zlib.Gunzip(bytes)).decompress();
  // console.log('Gzip uncompress finish');
  return result;
}

function nextRandomInt (maxValue) {
  return Math.floor(Math.random() * maxValue);
};

function pqPrimeFactorization (pqBytes) {
  var what = new BigInteger(pqBytes),
      result = false;

  // console.log(dT(), 'PQ start', pqBytes, what.toString(16), what.bitLength());

  try {
    result = pqPrimeLeemon(str2bigInt(what.toString(16), 16, Math.ceil(64 / bpe) + 1))
  } catch (e) {
    console.error('Pq leemon Exception', e);
  }

  if (result === false && what.bitLength() <= 64) {
    // console.time('PQ long');
    try {
      result = pqPrimeLong(goog.math.Long.fromString(what.toString(16), 16));
    } catch (e) {
      console.error('Pq long Exception', e);
    };
    // console.timeEnd('PQ long');
  }
  // console.log(result);

  if (result === false) {
    // console.time('pq BigInt');
    result = pqPrimeBigInteger(what);
    // console.timeEnd('pq BigInt');
  }

  // console.log(dT(), 'PQ finish');

  return result;
}

function pqPrimeBigInteger (what) {
  var it = 0,
      g;
  for (var i = 0; i < 3; i++) {
    var q = (nextRandomInt(128) & 15) + 17,
        x = bigint(nextRandomInt(1000000000) + 1),
        y = x.clone(),
        lim = 1 << (i + 18);

    for (var j = 1; j < lim; j++) {
      ++it;
      var a = x.clone(),
          b = x.clone(),
          c = bigint(q);

      while (!b.equals(BigInteger.ZERO)) {
        if (!b.and(BigInteger.ONE).equals(BigInteger.ZERO)) {
          c = c.add(a);
          if (c.compareTo(what) > 0) {
            c = c.subtract(what);
          }
        }
        a = a.add(a);
        if (a.compareTo(what) > 0) {
          a = a.subtract(what);
        }
        b = b.shiftRight(1);
      }

      x = c.clone();
      var z = x.compareTo(y) < 0 ? y.subtract(x) : x.subtract(y);
      g = z.gcd(what);
      if (!g.equals(BigInteger.ONE)) {
        break;
      }
      if ((j & (j - 1)) == 0) {
        y = x.clone();
      }
    }
    if (g.compareTo(BigInteger.ONE) > 0) {
      break;
    }
  }

  var f = what.divide(g), P, Q;

  if (g.compareTo(f) > 0) {
    P = f;
    Q = g;
  } else {
    P = g;
    Q = f;
  }

  return [bytesFromBigInt(P), bytesFromBigInt(Q), it];
}

function gcdLong(a, b) {
  while (a.notEquals(goog.math.Long.ZERO) && b.notEquals(goog.math.Long.ZERO)) {
    while (b.and(goog.math.Long.ONE).equals(goog.math.Long.ZERO)) {
      b = b.shiftRight(1);
    }
    while (a.and(goog.math.Long.ONE).equals(goog.math.Long.ZERO)) {
      a = a.shiftRight(1);
    }
    if (a.compare(b) > 0) {
      a = a.subtract(b);
    } else {
      b = b.subtract(a);
    }
  }
  return b.equals(goog.math.Long.ZERO) ? a : b;
}

function pqPrimeLong(what) {
  var it = 0,
      g;
  for (var i = 0; i < 3; i++) {
    var q = goog.math.Long.fromInt((nextRandomInt(128) & 15) + 17),
        x = goog.math.Long.fromInt(nextRandomInt(1000000000) + 1),
        y = x,
        lim = 1 << (i + 18);

    for (var j = 1; j < lim; j++) {
      ++it;
      var a = x,
          b = x,
          c = q;

      while (b.notEquals(goog.math.Long.ZERO)) {
        if (b.and(goog.math.Long.ONE).notEquals(goog.math.Long.ZERO)) {
          c = c.add(a);
          if (c.compare(what) > 0) {
            c = c.subtract(what);
          }
        }
        a = a.add(a);
        if (a.compare(what) > 0) {
          a = a.subtract(what);
        }
        b = b.shiftRight(1);
      }

      x = c;
      var z = x.compare(y) < 0 ? y.subtract(x) : x.subtract(y);
      g = gcdLong(z, what);
      if (g.notEquals(goog.math.Long.ONE)) {
        break;
      }
      if ((j & (j - 1)) == 0) {
        y = x;
      }
    }
    if (g.compare(goog.math.Long.ONE) > 0) {
      break;
    }
  }

  var f = what.div(g), P, Q;

  if (g.compare(f) > 0) {
    P = f;
    Q = g;
  } else {
    P = g;
    Q = f;
  }

  return [bytesFromHex(P.toString(16)), bytesFromHex(Q.toString(16)), it];
}


function pqPrimeLeemon (what) {
  var minBits = 64,
      minLen = Math.ceil(minBits / bpe) + 1,
      it = 0, i, q, j, lim, g, P, Q,
      a = new Array(minLen),
      b = new Array(minLen),
      c = new Array(minLen),
      g = new Array(minLen),
      z = new Array(minLen),
      x = new Array(minLen),
      y = new Array(minLen);

  for (i = 0; i < 3; i++) {
    q = (nextRandomInt(128) & 15) + 17;
    copyInt_(x, nextRandomInt(1000000000) + 1);
    copy_(y, x);
    lim = 1 << (i + 18);

    for (j = 1; j < lim; j++) {
      ++it;
      copy_(a, x);
      copy_(b, x);
      copyInt_(c, q);

      while (!isZero(b)) {
        if (b[0] & 1) {
          add_(c, a);
          if (greater(c, what)) {
            sub_(c, what);
          }
        }
        add_(a, a);
        if (greater(a, what)) {
          sub_(a, what);
        }
        rightShift_(b, 1);
      }

      copy_(x, c);
      if (greater(x,y)) {
        copy_(z, x);
        sub_(z, y);
      } else {
        copy_(z, y);
        sub_(z, x);
      }
      eGCD_(z, what, g, a, b);
      if (!equalsInt(g, 1)) {
        break;
      }
      if ((j & (j - 1)) == 0) {
        copy_(y, x);
      }
    }
    if (greater(g, one)) {
      break;
    }
  }

  divide_(what, g, x, y);

  if (greater(g, x)) {
    P = x;
    Q = g;
  } else {
    P = g;
    Q = x;
  }

  // console.log(dT(), 'done', bigInt2str(what, 10), bigInt2str(P, 10), bigInt2str(Q, 10));

  return [bytesFromLeemonBigInt(P), bytesFromLeemonBigInt(Q), it];
}


function bytesModPow (x, y, m) {
  try {
    var xBigInt = str2bigInt(bytesToHex(x), 16),
        yBigInt = str2bigInt(bytesToHex(y), 16),
        mBigInt = str2bigInt(bytesToHex(m), 16),
        resBigInt = powMod(xBigInt, yBigInt, mBigInt);

    return bytesFromHex(bigInt2str(resBigInt, 16));
  } catch (e) {
    console.error('mod pow error', e);
  }

  return bytesFromBigInt(new BigInteger(x).modPow(new BigInteger(y), new BigInteger(m)), 256);
}

/*!
 * Webogram v0.5.3 - messaging web application for MTProto
 * https://github.com/zhukov/webogram
 * Copyright (C) 2014 Igor Zhukov <igor.beatle@gmail.com>
 * https://github.com/zhukov/webogram/blob/master/LICENSE
 */

 function TLSerialization (options) {
  options = options || {};
  this.maxLength = options.startMaxLength || 2048; // 2Kb
  this.offset = 0; // in bytes

  this.createBuffer();

  // this.debug = options.debug !== undefined ? options.debug : Config.Modes.debug;
  this.mtproto = options.mtproto || false;
  return this;
}

TLSerialization.prototype.createBuffer = function () {
  this.buffer   = new ArrayBuffer(this.maxLength);
  this.intView  = new Int32Array(this.buffer);
  this.byteView = new Uint8Array(this.buffer);
};

TLSerialization.prototype.getArray = function () {
  var resultBuffer = new ArrayBuffer(this.offset);
  var resultArray  = new Int32Array(resultBuffer);

  resultArray.set(this.intView.subarray(0, this.offset / 4));

  return resultArray;
};

TLSerialization.prototype.getBuffer = function () {
  return this.getArray().buffer;
};

TLSerialization.prototype.getBytes = function (typed) {
  if (typed) {
    var resultBuffer = new ArrayBuffer(this.offset);
    var resultArray  = new Uint8Array(resultBuffer);

    resultArray.set(this.byteView.subarray(0, this.offset));

    return resultArray;
  }

  var bytes = [];
  for (var i = 0; i < this.offset; i++) {
    bytes.push(this.byteView[i]);
  }
  return bytes;
};

TLSerialization.prototype.checkLength = function (needBytes) {
  if (this.offset + needBytes < this.maxLength) {
    return;
  }

  console.trace('Increase buffer', this.offset, needBytes, this.maxLength);
  this.maxLength = Math.ceil(Math.max(this.maxLength * 2, this.offset + needBytes + 16) / 4) * 4;
  var previousBuffer = this.buffer,
      previousArray = new Int32Array(previousBuffer);

  this.createBuffer();

  new Int32Array(this.buffer).set(previousArray);
};

TLSerialization.prototype.writeInt = function (i, field) {
  this.debug && console.log('>>>', i.toString(16), i, field);

  this.checkLength(4);
  this.intView[this.offset / 4] = i;
  this.offset += 4;
};

TLSerialization.prototype.storeInt = function (i, field) {
  this.writeInt(i, (field || '') + ':int');
};

TLSerialization.prototype.storeBool = function (i, field) {
  if (i) {
    this.writeInt(0x997275b5, (field || '') + ':bool');
  } else {
    this.writeInt(0xbc799737, (field || '') + ':bool');
  }
};

TLSerialization.prototype.storeLongP = function (iHigh, iLow, field) {
  this.writeInt(iLow, (field || '') + ':long[low]');
  this.writeInt(iHigh, (field || '') + ':long[high]');
};

TLSerialization.prototype.storeLong = function (sLong, field) {
  if (angular.isArray(sLong)) {
    if (sLong.length == 2) {
      return this.storeLongP(sLong[0], sLong[1], field);
    } else {
      return this.storeIntBytes(sLong, 64, field);
    }
  }

  if (typeof sLong != 'string') {
    sLong = sLong ? sLong.toString() : '0';
  }
  var divRem = bigStringInt(sLong).divideAndRemainder(bigint(0x100000000));

  this.writeInt(intToUint(divRem[1].intValue()), (field || '') + ':long[low]');
  this.writeInt(intToUint(divRem[0].intValue()), (field || '') + ':long[high]');
};

TLSerialization.prototype.storeDouble = function (f) {
  var buffer     = new ArrayBuffer(8);
  var intView    = new Int32Array(buffer);
  var doubleView = new Float64Array(buffer);

  doubleView[0] = f;

  this.writeInt(intView[0], (field || '') + ':double[low]');
  this.writeInt(intView[1], (field || '') + ':double[high]');
};

TLSerialization.prototype.storeString = function (s, field) {
  this.debug && console.log('>>>', s, (field || '') + ':string');

  if (s === undefined) {
    s = '';
  }
  var sUTF8 = unescape(encodeURIComponent(s));

  this.checkLength(sUTF8.length + 8);


  var len = sUTF8.length;
  if (len <= 253) {
    this.byteView[this.offset++] = len;
  } else {
    this.byteView[this.offset++] = 254;
    this.byteView[this.offset++] = len & 0xFF;
    this.byteView[this.offset++] = (len & 0xFF00) >> 8;
    this.byteView[this.offset++] = (len & 0xFF0000) >> 16;
  }
  for (var i = 0; i < len; i++) {
    this.byteView[this.offset++] = sUTF8.charCodeAt(i);
  }

  // Padding
  while (this.offset % 4) {
    this.byteView[this.offset++] = 0;
  }
}


TLSerialization.prototype.storeBytes = function (bytes, field) {
  if (bytes instanceof ArrayBuffer) {
    bytes = new Uint8Array(bytes);
  }
  else if (bytes === undefined) {
    bytes = [];
  }
  this.debug && console.log('>>>', bytesToHex(bytes), (field || '') + ':bytes');

  var len = bytes.byteLength || bytes.length;
  this.checkLength(len + 8);
  if (len <= 253) {
    this.byteView[this.offset++] = len;
  } else {
    this.byteView[this.offset++] = 254;
    this.byteView[this.offset++] = len & 0xFF;
    this.byteView[this.offset++] = (len & 0xFF00) >> 8;
    this.byteView[this.offset++] = (len & 0xFF0000) >> 16;
  }

  this.byteView.set(bytes, this.offset);
  this.offset += len;

  // Padding
  while (this.offset % 4) {
    this.byteView[this.offset++] = 0;
  }
}

TLSerialization.prototype.storeIntBytes = function (bytes, bits, field) {
  if (bytes instanceof ArrayBuffer) {
    bytes = new Uint8Array(bytes);
  }
  var len = bytes.length;
  if ((bits % 32) || (len * 8) != bits) {
    throw new Error('Invalid bits: ' + bits + ', ' + bytes.length);
  }

  this.debug && console.log('>>>', bytesToHex(bytes), (field || '') + ':int' + bits);
  this.checkLength(len);

  this.byteView.set(bytes, this.offset);
  this.offset += len;
};

TLSerialization.prototype.storeRawBytes = function (bytes, field) {
  if (bytes instanceof ArrayBuffer) {
    bytes = new Uint8Array(bytes);
  }
  var len = bytes.length;

  this.debug && console.log('>>>', bytesToHex(bytes), (field || ''));
  this.checkLength(len);

  this.byteView.set(bytes, this.offset);
  this.offset += len;
};


TLSerialization.prototype.storeMethod = function (methodName, params) {
  var schema = this.mtproto ? Config.Schema.MTProto : Config.Schema.API,
      methodData = false,
      i;

  for (i = 0; i < schema.methods.length; i++) {
    if (schema.methods[i].method == methodName) {
      methodData = schema.methods[i];
      break
    }
  }
  if (!methodData) {
    throw new Error('No method ' + methodName + ' found');
  }

  this.storeInt(intToUint(methodData.id), methodName + '[id]');

  var param, type, i, condType, fieldBit;
  var len = methodData.params.length;
  for (i = 0; i < len; i++) {
    param = methodData.params[i];
    type = param.type;
    if (type.indexOf('?') !== -1) {
      condType = type.split('?');
      fieldBit = condType[0].split('.');
      if (!(params[fieldBit[0]] & (1 << fieldBit[1]))) {
        continue;
      }
      type = condType[1];
    }

    this.storeObject(params[param.name], type, methodName + '[' + param.name + ']');
  }

  return methodData.type;
};

TLSerialization.prototype.storeObject = function (obj, type, field) {
  switch (type) {
    case '#':
    case 'int':    return this.storeInt(obj,  field);
    case 'long':   return this.storeLong(obj,  field);
    case 'int128': return this.storeIntBytes(obj, 128, field);
    case 'int256': return this.storeIntBytes(obj, 256, field);
    case 'int512': return this.storeIntBytes(obj, 512, field);
    case 'string': return this.storeString(obj,   field);
    case 'bytes':  return this.storeBytes(obj,  field);
    case 'double': return this.storeDouble(obj,   field);
    case 'Bool':   return this.storeBool(obj,   field);
    case 'true':   return;
  }

  if (angular.isArray(obj)) {
    if (type.substr(0, 6) == 'Vector') {
      this.writeInt(0x1cb5c415, field + '[id]');
    }
    else if (type.substr(0, 6) != 'vector') {
      throw new Error('Invalid vector type ' + type);
    }
    var itemType = type.substr(7, type.length - 8); // for "Vector<itemType>"
    this.writeInt(obj.length, field + '[count]');
    for (var i = 0; i < obj.length; i++) {
      this.storeObject(obj[i], itemType, field + '[' + i + ']');
    }
    return true;
  }
  else if (type.substr(0, 6).toLowerCase() == 'vector') {
    throw new Error('Invalid vector object');
  }

  if (!angular.isObject(obj)) {
    throw new Error('Invalid object for type ' + type);
  }

  var schema = this.mtproto ? Config.Schema.MTProto : Config.Schema.API,
      predicate = obj['_'],
      isBare = false,
      constructorData = false,
      i;

  if (isBare = (type.charAt(0) == '%')) {
    type = type.substr(1);
  }

  for (i = 0; i < schema.constructors.length; i++) {
    if (schema.constructors[i].predicate == predicate) {
      constructorData = schema.constructors[i];
      break
    }
  }
  if (!constructorData) {
    throw new Error('No predicate ' + predicate + ' found');
  }

  if (predicate == type) {
    isBare = true;
  }

  if (!isBare) {
    this.writeInt(intToUint(constructorData.id), field + '[' + predicate + '][id]');
  }

  var param, type, i, condType, fieldBit;
  var len = constructorData.params.length;
  for (i = 0; i < len; i++) {
    param = constructorData.params[i];
    type = param.type;
    if (type.indexOf('?') !== -1) {
      condType = type.split('?');
      fieldBit = condType[0].split('.');
      if (!(obj[fieldBit[0]] & (1 << fieldBit[1]))) {
        continue;
      }
      type = condType[1];
    }

    this.storeObject(obj[param.name], type, field + '[' + predicate + '][' + param.name + ']');
  }

  return constructorData.type;
};



function TLDeserialization (buffer, options) {
  options = options || {};

  this.offset = 0; // in bytes
  this.override = options.override || {};

  this.buffer = buffer;
  this.intView  = new Uint32Array(this.buffer);
  this.byteView = new Uint8Array(this.buffer);

  // this.debug = options.debug !== undefined ? options.debug : Config.Modes.debug;
  this.mtproto = options.mtproto || false;
  return this;
}

TLDeserialization.prototype.readInt = function (field) {
  if (this.offset >= this.intView.length * 4) {
    throw new Error('Nothing to fetch: ' + field);
  }

  var i = this.intView[this.offset / 4];

  this.debug && console.log('<<<', i.toString(16), i, field);

  this.offset += 4;

  return i;
};

TLDeserialization.prototype.fetchInt = function (field) {
  return this.readInt((field || '') + ':int');
}

TLDeserialization.prototype.fetchDouble = function (field) {
  var buffer     = new ArrayBuffer(8);
  var intView    = new Int32Array(buffer);
  var doubleView = new Float64Array(buffer);

  intView[0] = this.readInt((field || '') + ':double[low]'),
  intView[1] = this.readInt((field || '') + ':double[high]');

  return doubleView[0];
};

TLDeserialization.prototype.fetchLong = function (field) {
  var iLow = this.readInt((field || '') + ':long[low]'),
      iHigh = this.readInt((field || '') + ':long[high]');

  var longDec = bigint(iHigh).shiftLeft(32).add(bigint(iLow)).toString();

  return longDec;
}

TLDeserialization.prototype.fetchBool = function (field) {
  var i = this.readInt((field || '') + ':bool');
  if (i == 0x997275b5) {
    return true;
  } else if (i == 0xbc799737) {
    return false
  }

  this.offset -= 4;
  return this.fetchObject('Object', field);
}

TLDeserialization.prototype.fetchString = function (field) {
  var len = this.byteView[this.offset++];

  if (len == 254) {
    var len = this.byteView[this.offset++] |
              (this.byteView[this.offset++] << 8) |
              (this.byteView[this.offset++] << 16);
  }

  var sUTF8 = '';
  for (var i = 0; i < len; i++) {
    sUTF8 += String.fromCharCode(this.byteView[this.offset++]);
  }

  // Padding
  while (this.offset % 4) {
    this.offset++;
  }

  try {
    var s = decodeURIComponent(escape(sUTF8));
  } catch (e) {
    var s = sUTF8;
  }

  this.debug && console.log('<<<', s, (field || '') + ':string');

  return s;
}


TLDeserialization.prototype.fetchBytes = function (field) {
  var len = this.byteView[this.offset++];

  if (len == 254) {
    var len = this.byteView[this.offset++] |
              (this.byteView[this.offset++] << 8) |
              (this.byteView[this.offset++] << 16);
  }

  var bytes = this.byteView.subarray(this.offset, this.offset + len);
  this.offset += len;

  // Padding
  while (this.offset % 4) {
    this.offset++;
  }

  this.debug && console.log('<<<', bytesToHex(bytes), (field || '') + ':bytes');

  return bytes;
}

TLDeserialization.prototype.fetchIntBytes = function (bits, typed, field) {
  if (bits % 32) {
    throw new Error('Invalid bits: ' + bits);
  }

  var len = bits / 8;
  if (typed) {
    var result = this.byteView.subarray(this.offset, this.offset + len);
    this.offset += len;
    return result;
  }

  var bytes = [];
  for (var i = 0; i < len; i++) {
    bytes.push(this.byteView[this.offset++]);
  }

  this.debug && console.log('<<<', bytesToHex(bytes), (field || '') + ':int' + bits);

  return bytes;
};


TLDeserialization.prototype.fetchRawBytes = function (len, typed, field) {
  if (len === false) {
    len = this.readInt((field || '') + '_length');
  }

  if (typed) {
    var bytes = new Uint8Array(len);
    bytes.set(this.byteView.subarray(this.offset, this.offset + len));
    this.offset += len;
    return bytes;
  }

  var bytes = [];
  for (var i = 0; i < len; i++) {
    bytes.push(this.byteView[this.offset++]);
  }

  this.debug && console.log('<<<', bytesToHex(bytes), (field || ''));

  return bytes;
};

TLDeserialization.prototype.fetchObject = function (type, field) {
  switch (type) {
    case '#':
    case 'int':    return this.fetchInt(field);
    case 'long':   return this.fetchLong(field);
    case 'int128': return this.fetchIntBytes(128, false, field);
    case 'int256': return this.fetchIntBytes(256, false, field);
    case 'int512': return this.fetchIntBytes(512, false, field);
    case 'string': return this.fetchString(field);
    case 'bytes':  return this.fetchBytes(field);
    case 'double': return this.fetchDouble(field);
    case 'Bool':   return this.fetchBool(field);
    case 'true':   return true;
  }

  field = field || type || 'Object';

  if (type.substr(0, 6) == 'Vector' || type.substr(0, 6) == 'vector') {
    if (type.charAt(0) == 'V') {
      var constructor = this.readInt(field + '[id]'),
          constructorCmp = uintToInt(constructor);

      if (constructorCmp == 0x3072cfa1) { // Gzip packed
        var compressed = this.fetchBytes(field + '[packed_string]'),
            uncompressed = gzipUncompress(compressed),
            buffer = bytesToArrayBuffer(uncompressed),
            newDeserializer = (new TLDeserialization(buffer));

        return newDeserializer.fetchObject(type, field);
      }
      if (constructorCmp != 0x1cb5c415) {
        throw new Error('Invalid vector constructor ' + constructor);
      }
    }
    var len = this.readInt(field + '[count]');
    var result = [];
    if (len > 0) {
      var itemType = type.substr(7, type.length - 8); // for "Vector<itemType>"
      for (var i = 0; i < len; i++) {
        result.push(this.fetchObject(itemType, field + '[' + i + ']'))
      }
    }

    return result;
  }

  var schema = this.mtproto ? Config.Schema.MTProto : Config.Schema.API,
      predicate = false,
      constructorData = false;

  if (type.charAt(0) == '%') {
    var checkType = type.substr(1);
    for (var i = 0; i < schema.constructors.length; i++) {
      if (schema.constructors[i].type == checkType) {
        constructorData = schema.constructors[i];
        break
      }
    }
    if (!constructorData) {
      throw new Error('Constructor not found for type: ' + type);
    }
  }
  else if (type.charAt(0) >= 97 && type.charAt(0) <= 122) {
    for (var i = 0; i < schema.constructors.length; i++) {
      if (schema.constructors[i].predicate == type) {
        constructorData = schema.constructors[i];
        break
      }
    }
    if (!constructorData) {
      throw new Error('Constructor not found for predicate: ' + type);
    }
  }
  else {
    var constructor = this.readInt(field + '[id]'),
        constructorCmp = uintToInt(constructor);

    if (constructorCmp == 0x3072cfa1) { // Gzip packed
      var compressed = this.fetchBytes(field + '[packed_string]'),
          uncompressed = gzipUncompress(compressed),
          buffer = bytesToArrayBuffer(uncompressed),
          newDeserializer = (new TLDeserialization(buffer));

      return newDeserializer.fetchObject(type, field);
    }

    var index = schema.constructorsIndex;
    if (!index) {
      schema.constructorsIndex = index = {};
      for (var i = 0; i < schema.constructors.length; i++) {
        index[schema.constructors[i].id] = i;
      }
    }
    var i = index[constructorCmp];
    if (i) {
      constructorData = schema.constructors[i];
    }

    var fallback = false;
    if (!constructorData && this.mtproto) {
      var schemaFallback = Config.Schema.API;
      for (i = 0; i < schemaFallback.constructors.length; i++) {
        if (schemaFallback.constructors[i].id == constructorCmp) {
          constructorData = schemaFallback.constructors[i];

          delete this.mtproto;
          fallback = true;
          break;
        }
      }
    }
    if (!constructorData) {
      throw new Error('Constructor not found: ' + constructor +' '+ this.fetchInt()+' '+ this.fetchInt());
    }
  }

  predicate = constructorData.predicate;

  var result = {'_': predicate},
      overrideKey = (this.mtproto ? 'mt_' : '') + predicate,
      self = this;


  if (this.override[overrideKey]) {
    this.override[overrideKey].apply(this, [result, field + '[' + predicate + ']']);
  } else {
    var i, param, type, isCond, condType, fieldBit, value;
    var len = constructorData.params.length;
    for (i = 0; i < len; i++) {
      param = constructorData.params[i];
      type = param.type;
      if (type == '#' && result.pFlags === undefined) {
        result.pFlags = {};
      }
      if (isCond = (type.indexOf('?') !== -1)) {
        condType = type.split('?');
        fieldBit = condType[0].split('.');
        if (!(result[fieldBit[0]] & (1 << fieldBit[1]))) {
          continue;
        }
        type = condType[1];
      }

      value = self.fetchObject(type, field + '[' + predicate + '][' + param.name + ']');

      if (isCond && type === 'true') {
        result.pFlags[param.name] = value;
      } else {
        result[param.name] = value;
      }
    }
  }

  if (fallback) {
    this.mtproto = true;
  }

  return result;
};

TLDeserialization.prototype.getOffset = function () {
  return this.offset;
};

TLDeserialization.prototype.fetchEnd = function () {
  if (this.offset != this.byteView.length) {
    throw new Error('Fetch end with non-empty buffer');
  }
  return true;
};

var __ = (function () {
    var locale = Config.I18n.locale;
    var messages = Config.I18n.messages;
    var fallbackMessages = Config.I18n.fallback_messages;
    var paramRegEx = /\{\s*([a-zA-Z\d\-_]+)(?:\s*:\s*(.*?))?\s*\}/g;

    function insertParams(msgstr, params) {
        return msgstr.replace(paramRegEx, function ($0, paramKey, nestedMsgStr) {
            var param = params[paramKey];
            if (param === undefined) {
                console.warn('[i18n] missing param ' + paramKey + ' for message "' + msgstr + '"');
                return '';
            }
            if (nestedMsgStr !== undefined) {
                param = insertParams(param, nestedMsgStr.split('|'));
            }
            return param.toString().trim();
        });
    }

    function parseMarkdownString(msgstr, msgid) {
        msgstr = msgstr
            .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
            .replace(/\n|&#10;/g, "<br/>");

        return msgstr;
    }

    function _(msgid, params) {
        var raw = false;
        var msgstr = msgid;

        if (msgid.substr(-4) === '_raw') {
            raw = true;
            msgid = msgid.substr(0, msgid.length - 4);
        }

        if (messages.hasOwnProperty(msgid)) {
            msgstr = messages[msgid];
        } else if (fallbackMessages.hasOwnProperty(msgid)) {
            msgstr = fallbackMessages[msgid];
            console.warn('[i18n] missing locale key ' + locale + ' / ' + msgid);
        } else {
            console.warn('[i18n] missing key ' + msgid);
            return msgid;
        }

        if (!raw) {
            msgstr = encodeEntities(msgstr);
        }
        if (msgid.substr(-3) == '_md') {
            msgstr = parseMarkdownString(msgstr);
        }

        if (arguments.length > 1) {
            if (typeof params == 'string') {
                Array.prototype.shift.apply(arguments);
                msgstr = insertParams(msgstr, arguments);
            } else {
                msgstr = insertParams(msgstr, params);
            }
        }

        return msgstr;
    }

    _.locale = function () {
        return locale;
    };

    _.pluralize = function (msgid) {
        var categories = $rootScope.$eval(_(msgid + '_raw'));
        return function (count) {
            return (categories[$locale.pluralCat(count)] || '').replace('{}', count);
        }
    };

    return _;
})();
var $filter = new _Filter();
var $sFilter = angular.injector(['ng']).get('$filter');

$filter

    .filter('userName', function () {
        return function (user) {
            if (!user || !user.first_name && !user.last_name) {
                return __('user_name_deleted');
            }
            return user.first_name + (user.last_name ? ' ' + user.last_name : '');
        }
    })

    .filter('userFirstName', function () {
        return function (user) {
            if (!user || !user.first_name && !user.last_name) {
                return __('user_first_name_deleted');
            }
            return user.first_name || user.last_name;
        }
    })

    .filter('userStatus', function () {
        var relativeTimeFilter = $filter.call('relativeTime');
        return function (user, botChatPrivacy) {
            var statusType = user && user.status && user.status._;
            if (!statusType) {
                statusType = user && user.pFlags && user.pFlags.bot ? 'userStatusBot' : 'userStatusEmpty';
            }
            switch (statusType) {
                case 'userStatusOnline':
                    return __('user_status_online');

                case 'userStatusOffline':
                    return __('user_status_last_seen', relativeTimeFilter(user.status.was_online));

                case 'userStatusRecently':
                    return __('user_status_recently');

                case 'userStatusLastWeek':
                    return __('user_status_last_week');

                case 'userStatusLastMonth':
                    return __('user_status_last_month');

                case 'userStatusBot':
                    if (botChatPrivacy) {
                        if (user.pFlags.bot_chat_history) {
                            return __('user_status_bot_noprivacy');
                        } else {
                            return __('user_status_bot_privacy');
                        }
                    }
                    return __('user_status_bot');

                case 'userStatusEmpty':
                default:
                    return __('user_status_long_ago');
            }
        }
    })

    .filter('chatTitle', function () {
        return function (chat) {
            if (!chat || !chat.title) {
                return __('chat_title_deleted');
            }
            return chat.title;
        }
    })

    .filter('dateOrTime', function () {
        var dateFilter = $sFilter('date');

        return function (timestamp, extended) {
            if (!timestamp) {
                return '';
            }
            var ticks = timestamp * 1000,
                diff = Math.abs(tsNow() - ticks),
                format = 'shortTime';

            if (diff > 518400000) { // 6 days
                format = extended ? 'mediumDate' : 'shortDate';
            }
            else if (diff > 43200000) { // 12 hours
                format = extended ? 'EEEE' : 'EEE';
            }

            return dateFilter(ticks, format);
        }
    })

    .filter('time', function () {
        var cachedDates = {},
            dateFilter = $sFilter('date');
            format = Config.Mobile ? 'shortTime' : 'mediumTime';

        return function (timestamp) {
            if (cachedDates[timestamp]) {
                return cachedDates[timestamp];
            }

            return cachedDates[timestamp] = dateFilter(timestamp * 1000, format);
        }
    })

    .filter('myDate', function () {
        var cachedDates = {},
            dateFilter = $sFilter('date');

        return function (timestamp) {
            if (cachedDates[timestamp]) {
                return cachedDates[timestamp];
            }

            return cachedDates[timestamp] = dateFilter(timestamp * 1000, 'fullDate');
        }
    })

    .filter('duration', function () {
        return function (duration) {
            duration = parseInt(duration);
            if (isNaN(duration)) {
                duration = 0;
            }
            var secs = duration % 60,
                mins = Math.floor((duration - secs) / 60.0);

            if (secs < 10) {
                secs = '0' + secs;
            }

            return mins + ':' + secs;
        }
    })

    .filter('durationRemains', function () {
        var durationFilter = $filter.call('duration');

        return function (done, total) {
            return '-' + durationFilter(total - done);
        }
    })

    .filter('phoneNumber', function () {
        return function (phoneRaw) {
            var nbsp = ' ';
            phoneRaw = (phoneRaw || '').replace(/\D/g, '');
            if (phoneRaw.charAt(0) == '7' && phoneRaw.length == 11) {
                return '+' + phoneRaw.charAt(0) + nbsp + '(' + phoneRaw.substr(1, 3) + ')' + nbsp + phoneRaw.substr(4, 3) + '-' + phoneRaw.substr(7, 2) + '-' + phoneRaw.substr(9, 2);
            }
            return '+' + phoneRaw;
        }
    })

    .filter('formatSize', function () {
        return function (size, progressing) {
            if (!size) {
                return '0';
            }
            else if (size < 1024) {
                return size + ' b';
            }
            else if (size < 1048576) {
                return Math.round(size / 1024) + ' KB';
            }
            var mbs = size / 1048576;
            if (progressing) {
                mbs = mbs.toFixed(1);
            } else {
                mbs = (Math.round(mbs * 10) / 10);
            }
            return mbs + ' MB';
        }
    })

    .filter('formatSizeProgress', function () {
        var formatSizeFilter = $filter.call('formatSize');
        return function (progress) {
            if (!progress.total) {
                return '';
            }
            var done = formatSizeFilter(progress.done, true),
                doneParts = done.split(' '),
                total = formatSizeFilter(progress.total),
                totalParts = total.split(' ');

            if (totalParts[1] === doneParts[1]) {
                return __('format_size_progress_mulitple', {
                    done: doneParts[0],
                    total: totalParts[0],
                    parts: (doneParts[1] || '')
                });
            }
            return __('format_size_progress', {done: done, total: total});
        }
    })

    .filter('formatShortNumber', function () {
        return function (num) {
            if (!num) {
                return '0';
            }
            else if (num < 1000) {
                return num.toString();
            }
            else if (num < 900000) {
                var mult = num > 10000 ? 1 : 10;
                return (Math.round(num / 1000 * mult) / mult) + 'K';
            }
            var mult = num > 10000000 ? 1 : 10;
            return (Math.round(num / 1000000 * mult) / mult) + 'M';
        }
    })

    .filter('nl2br', function () {
        return function (text) {
            return text.replace(/\n/g, '<br/>');
        }
    })

    .filter('richText', function () {
        var linkyFilter = $filter.call('linky');
        return function (text) {
            return linkyFilter(text, '_blank').replace(/\n|&#10;/g, '<br/>');
        }
    })

    .filter('relativeTime', function () {
        var langMinutesPluralize = __.pluralize('relative_time_pluralize_minutes_ago'),
            langHoursPluralize = __.pluralize('relative_time_pluralize_hours_ago'),
            dateOrTimeFilter = $filter.call('dateOrTime');

        return function (timestamp) {
            var diff = Math.abs(tsNow(true) - timestamp);

            if (diff < 60) {
                return __('relative_time_just_now');
            }
            if (diff < 3600) {
                var minutes = Math.floor(diff / 60);
                return langMinutesPluralize(minutes);
            }
            if (diff < 86400) {
                var hours = Math.floor(diff / 3600);
                return langHoursPluralize(hours);
            }
            return dateOrTimeFilter(timestamp, true);
        }
    });

function _Filter(param) {
    this.methods = [];
    this.filter = function (name, constructor) {
        this.methods[name] = constructor;
        return this;
    };
    this.call = function (name) {
        try {
            return this.methods[name]();
        } catch (err) {
            debugger;
            // TODO
        }
    }
}
var _qSync = (function () {
    return {
        when: function (result) {
            return {then: function (cb) {
                return cb(result);
            }};
        },
        reject: function (result) {
            return {then: function (cb, badcb) {
                if (badcb) {
                    return badcb(result);
                }
            }};
        }
    }
})();
var $interval = angular.injector(['ng']).get('$interval');
var $timeout = angular.injector(['ng']).get('$timeout');
var $rootScope = angular.injector(['ng']).get('$rootScope');
var $http = angular.injector(['ng']).get('$http');
var $q = angular.injector(['ng']).get('$q');
var _Storage = (function () {
    var methods = {};
    angular.forEach(['get', 'set', 'remove'], function (methodName) {
        methods[methodName] = function () {
            var deferred = $.Deferred(),
                args = Array.prototype.slice.call(arguments);

            args.push(function (result) {
                deferred.resolve(result);
            });
            ConfigStorage[methodName].apply(ConfigStorage, args);

            return deferred;
        };
    });

    return {
        get: methods['get'],
        set: methods['set'],
        remove: methods['remove']
    }
})();
var _CryptoWorker = (function () {
    var webWorker = false,
        naClEmbed = false,
        taskID = 0,
        awaiting = {},
        webCrypto = Config.Modes.webcrypto && window.crypto && (window.crypto.subtle || window.crypto.webkitSubtle)/* || window.msCrypto && window.msCrypto.subtle*/,
        useSha1Crypto = webCrypto && webCrypto.digest !== undefined,
        useSha256Crypto = webCrypto && webCrypto.digest !== undefined,
        finalizeTask = function (taskID, result) {
            var deferred = awaiting[taskID];
            if (deferred !== undefined) {
                // console.log(dT(), 'CW done');
                deferred.resolve(result);
                delete awaiting[taskID];
            }
        };

    if (Config.Modes.nacl &&
        navigator.mimeTypes &&
        navigator.mimeTypes['application/x-pnacl'] !== undefined) {
        var listener = $('<div id="nacl_listener"><embed id="mtproto_crypto" width="0" height="0" src="nacl/mtproto_crypto.nmf" type="application/x-pnacl" /></div>').appendTo($('body'))[0];
        listener.addEventListener('load', function (e) {
            naClEmbed = listener.firstChild;
            console.log(dT(), 'NaCl ready');
        }, true);
        listener.addEventListener('message', function (e) {
            finalizeTask(e.data.taskID, e.data.result);
        }, true);
        listener.addEventListener('error', function (e) {
            console.error('NaCl error', e);
        }, true);
    }

    if (window.Worker) {
        var tmpWorker = new Worker('js/lib/crypto_worker.js');
        tmpWorker.onmessage = function (e) {
            if (!webWorker) {
                webWorker = tmpWorker;
            } else {
                finalizeTask(e.data.taskID, e.data.result);
            }
        };
        tmpWorker.onerror = function(error) {
            console.error('CW error', error, error.stack);
            webWorker = false;
        };
    }

    function performTaskWorker (task, params, embed) {
        // console.log(dT(), 'CW start', task);
        var deferred = $q.defer();

        awaiting[taskID] = deferred;

        params.task = task;
        params.taskID = taskID;
        (embed || webWorker).postMessage(params);

        taskID++;

        return deferred.promise;
    }

    return {
        sha1Hash: function (bytes) {
            if (useSha1Crypto) {
                // We don't use buffer since typedArray.subarray(...).buffer gives the whole buffer and not sliced one. webCrypto.digest supports typed array
                var deferred = $q.defer(),
                    bytesTyped = Array.isArray(bytes) ? convertToUint8Array(bytes) : bytes;
                // console.log(dT(), 'Native sha1 start');
                webCrypto.digest({name: 'SHA-1'}, bytesTyped).then(function (digest) {
                    // console.log(dT(), 'Native sha1 done');
                    deferred.resolve(digest);
                }, function  (e) {
                    console.error('Crypto digest error', e);
                    useSha1Crypto = false;
                    deferred.resolve(sha1HashSync(bytes));
                });

                return deferred.promise;
            }
            return $timeout(function () {
                return sha1HashSync(bytes);
            });
        },
        sha256Hash: function (bytes) {
            if (useSha256Crypto) {
                var deferred = $q.defer(),
                    bytesTyped = Array.isArray(bytes) ? convertToUint8Array(bytes) : bytes;
                // console.log(dT(), 'Native sha1 start');
                webCrypto.digest({name: 'SHA-256'}, bytesTyped).then(function (digest) {
                    // console.log(dT(), 'Native sha1 done');
                    deferred.resolve(digest);
                }, function  (e) {
                    console.error('Crypto digest error', e);
                    useSha256Crypto = false;
                    deferred.resolve(sha256HashSync(bytes));
                });

                return deferred.promise;
            }
            return $timeout(function () {
                return sha256HashSync(bytes);
            });
        },
        aesEncrypt: function (bytes, keyBytes, ivBytes) {
            if (naClEmbed) {
                return performTaskWorker('aes-encrypt', {
                    bytes: addPadding(convertToArrayBuffer(bytes)),
                    keyBytes: convertToArrayBuffer(keyBytes),
                    ivBytes: convertToArrayBuffer(ivBytes)
                }, naClEmbed);
            }
            return $timeout(function () {
                return convertToArrayBuffer(aesEncryptSync(bytes, keyBytes, ivBytes));
            });
        },
        aesDecrypt: function (encryptedBytes, keyBytes, ivBytes) {
            if (naClEmbed) {
                return performTaskWorker('aes-decrypt', {
                    encryptedBytes: addPadding(convertToArrayBuffer(encryptedBytes)),
                    keyBytes: convertToArrayBuffer(keyBytes),
                    ivBytes: convertToArrayBuffer(ivBytes)
                }, naClEmbed);
            }
            return $timeout(function () {
                return convertToArrayBuffer(aesDecryptSync(encryptedBytes, keyBytes, ivBytes));
            });
        },
        factorize: function (bytes) {
            bytes = convertToByteArray(bytes);
            if (naClEmbed && bytes.length <= 8) {
                return performTaskWorker('factorize', {bytes: bytes}, naClEmbed);
            }
            if (webWorker) {
                return performTaskWorker('factorize', {bytes: bytes});
            }
            return $timeout(function () {
                return pqPrimeFactorization(bytes);
            });
        },
        modPow: function (x, y, m) {
            if (webWorker) {
                return performTaskWorker('mod-pow', {
                    x: x,
                    y: y,
                    m: m
                });
            }
            return $timeout(function () {
                return bytesModPow(x, y, m);
            });
        }
    };
})();
var _IdleManager = (function () {
    $rootScope.idle = {isIDLE: false};

    var toPromise, started = false;

    var hidden = 'hidden';
    var visibilityChange = 'visibilitychange';
    if (typeof document.hidden !== 'undefined') {
        // default
    } else if (typeof document.mozHidden !== 'undefined') {
        hidden = 'mozHidden';
        visibilityChange = 'mozvisibilitychange';
    } else if (typeof document.msHidden !== 'undefined') {
        hidden = 'msHidden';
        visibilityChange = 'msvisibilitychange';
    } else if (typeof document.webkitHidden !== 'undefined') {
        hidden = 'webkitHidden';
        visibilityChange = 'webkitvisibilitychange';
    }

    return {
        start: start
    };

    function start () {
        if (!started) {
            started = true;
            $(window).on(visibilityChange + ' blur focus keydown mousedown touchstart', onEvent);

            setTimeout(function () {
                onEvent({type: 'blur'});
            }, 0);
        }
    }

    function onEvent (e) {
        // console.log('event', e.type);
        if (e.type == 'mousemove') {
            var e = e.originalEvent || e;
            if (e && e.movementX === 0 && e.movementY === 0) {
                return;
            }
            $(window).off('mousemove', onEvent);
        }

        var isIDLE = e.type == 'blur' || e.type == 'timeout' ? true : false;
        if (hidden && document[hidden]) {
            isIDLE = true;
        }

        $timeout.cancel(toPromise);
        if (!isIDLE) {
            // console.log('update timeout');
            toPromise = $timeout(function () {
                onEvent({type: 'timeout'});
            }, 30000);
        }

        if (e.type == 'focus' && !$rootScope.idle.afterFocus) {
            $rootScope.idle.afterFocus = true;
            setTimeout(function () {
                delete $rootScope.idle.afterFocus;
            }, 10);
        }

        if ($rootScope.idle.isIDLE == isIDLE) {
            return;
        }

        // console.log('IDLE changed', isIDLE);
        $rootScope.$apply(function () {
            $rootScope.idle.isIDLE = isIDLE;
        });

        if (isIDLE && e.type == 'timeout') {
            $(window).on('mousemove', onEvent);
        }
    }
})();
var _TelegramMeWebService = (function () {
    var disabled =  Config.Modes.test ||
        location.protocol != 'http:' && location.protocol != 'https:';

    function sendAsyncRequest (canRedirect) {
        if (disabled) {
            return false;
        }
        _Storage.get('tgme_sync').then(function (curValue) {
            var ts = tsNow(true);
            if (canRedirect &&
                curValue &&
                curValue.canRedirect == canRedirect &&
                curValue.ts + 86400 > ts) {
                return false;
            }
            _Storage.set({tgme_sync: {canRedirect: canRedirect, ts: ts}});

            var script = $('<script>').appendTo('body')
                .on('load error', function() {
                    script.remove();
                })
                .attr('src', '//telegram.me/_websync_?authed=' + (canRedirect ? '1' : '0'));
        });
    };

    return {
        setAuthorized: sendAsyncRequest
    };
})();
var _FileManager = (function () {
    window.URL = window.URL || window.webkitURL;
    window.BlobBuilder = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder;
    var buggyUnknownBlob = navigator.userAgent.indexOf('Safari') != -1 &&
        navigator.userAgent.indexOf('Chrome') == -1;

    var blobSupported = true;

    try {
        blobConstruct([], '');
    } catch (e) {
        blobSupported = false;
    }

    function isBlobAvailable () {
        return blobSupported;
    }

    function fileCopyTo (fromFileEntry, toFileEntry) {
        return getFileWriter(toFileEntry).then(function (fileWriter) {
            return fileWriteData(fileWriter, fromFileEntry).then(function () {
                return fileWriter;
            }, function (error) {
                return $q.reject(error);
                fileWriter.truncate(0);
            });
        });
    }

    function fileWriteData(fileWriter, bytes) {
        var deferred = $q.defer();

        fileWriter.onwriteend = function(e) {
            deferred.resolve();
        };
        fileWriter.onerror = function (e) {
            deferred.reject(e);
        };

        if (bytes.file) {
            bytes.file(function (file) {
                fileWriter.write(file);
            }, function (error) {
                deferred.reject(error);
            })
        }
        else if (bytes instanceof Blob) { // is file bytes
            fileWriter.write(bytes);
        }
        else {
            try {
                var blob = blobConstruct([bytesToArrayBuffer(bytes)]);
                fileWriter.write(blob);
            } catch (e) {
                deferred.reject(e);
            }
        }

        return deferred.promise;
    }

    function chooseSaveFile (fileName, ext, mimeType) {
        if (!window.chrome || !chrome.fileSystem || !chrome.fileSystem.chooseEntry) {
            return _qSync.reject();
        };
        var deferred = $q.defer();

        chrome.fileSystem.chooseEntry({
            type: 'saveFile',
            suggestedName: fileName,
            accepts: [{
                mimeTypes: [mimeType],
                extensions: [ext]
            }]
        }, function (writableFileEntry) {
            deferred.resolve(writableFileEntry);
        });

        return deferred.promise;
    }

    function getFileWriter (fileEntry) {
        var deferred = $q.defer();

        fileEntry.createWriter(function (fileWriter) {
            deferred.resolve(fileWriter);
        }, function (error) {
            deferred.reject(error);
        });

        return deferred.promise;
    }

    function getFakeFileWriter (mimeType, saveFileCallback) {
        var blobParts = [],
            fakeFileWriter = {
                write: function (blob) {
                    if (!blobSupported) {
                        if (fakeFileWriter.onerror) {
                            fakeFileWriter.onerror(new Error('Blob not supported by browser'));
                        }
                        return false;
                    }
                    blobParts.push(blob);
                    setZeroTimeout(function () {
                        if (fakeFileWriter.onwriteend) {
                            fakeFileWriter.onwriteend();
                        }
                    });
                },
                truncate: function () {
                    blobParts = [];
                },
                finalize: function () {
                    var blob = blobConstruct(blobParts, mimeType);
                    if (saveFileCallback) {
                        saveFileCallback(blob);
                    }
                    return blob;
                }
            };

        return fakeFileWriter;
    };

    function getUrl (fileData, mimeType) {
        // console.log(dT(), 'get url', fileData, mimeType, fileData.toURL !== undefined, fileData instanceof Blob);
        if (fileData.toURL !== undefined) {
            return fileData.toURL(mimeType);
        }
        if (fileData instanceof Blob) {
            return URL.createObjectURL(fileData);
        }
        return 'data:' + mimeType + ';base64,' + bytesToBase64(fileData);
    }

    function getByteArray(fileData) {
        if (fileData instanceof Blob) {
            var deferred = $q.defer();
            try {
                var reader = new FileReader();
                reader.onloadend = function (e) {
                    deferred.resolve(new Uint8Array(e.target.result));
                };
                reader.onerror = function (e) {
                    deferred.reject(e);
                };
                reader.readAsArrayBuffer(fileData);

                return deferred.promise;
            } catch (e) {
                return $q.reject(e);
            }
        }
        else if (fileData.file) {
            var deferred = $q.defer();
            fileData.file(function (blob) {
                getByteArray(blob).then(function (result) {
                    deferred.resolve(result);
                }, function (error) {
                    deferred.reject(error);
                })
            }, function (error) {
                deferred.reject(error);
            });
            return deferred.promise;
        }
        return $q.when(fileData);
    }

    function getDataUrl(blob) {
        var deferred;
        try {
            var reader = new FileReader();
            reader.onloadend = function() {
                deferred.resolve(reader.result);
            }
            reader.readAsDataURL(blob);
        } catch (e) {
            return $q.reject(e);
        }

        deferred = $q.defer();

        return deferred.promise;
    }

    function getFileCorrectUrl(blob, mimeType) {
        if (buggyUnknownBlob && blob instanceof Blob) {
            var mimeType = blob.type || blob.mimeType || mimeType || '';
            if (!mimeType.match(/image\/(jpeg|gif|png|bmp)|video\/quicktime/)) {
                return getDataUrl(blob);
            }
        }
        return _qSync.when(getUrl(blob, mimeType));
    }

    function downloadFile (blob, mimeType, fileName) {
        if (window.navigator && navigator.msSaveBlob !== undefined) {
            window.navigator.msSaveBlob(blob, fileName);
            return false;
        }

        if (window.navigator && navigator.getDeviceStorage) {
            var storageName = 'sdcard';
            var subdir = 'telegram/';
            switch (mimeType.split('/')[0]) {
                case 'video': storageName = 'videos'; break;
                case 'audio': storageName = 'music'; break;
                case 'image': storageName = 'pictures'; break;
            }
            var deviceStorage = navigator.getDeviceStorage(storageName);

            var request = deviceStorage.addNamed(blob, subdir + fileName);

            request.onsuccess = function () {
                console.log('Device storage save result', this.result);
            };
            request.onerror = function () {
            };
            return;
        }

        var popup = false;
        if (window.safari) {
            popup = window.open();
        }

        getFileCorrectUrl(blob, mimeType).then(function (url) {
            if (popup) {
                try {
                    popup.location.href = url;
                    return;
                } catch (e) {}
            }
            var anchor = document.createElementNS('http://www.w3.org/1999/xhtml', 'a');
            anchor.href = url;
            anchor.target  = '_blank';
            anchor.download = fileName;
            if (anchor.dataset) {
                anchor.dataset.downloadurl = ["video/quicktime", fileName, url].join(':');
            }
            $(anchor).css({position: 'absolute', top: 1, left: 1}).appendTo('body');

            try {
                var clickEvent = document.createEvent('MouseEvents');
                clickEvent.initMouseEvent(
                    'click', true, false, window, 0, 0, 0, 0, 0
                    , false, false, false, false, 0, null
                );
                anchor.dispatchEvent(clickEvent);
            } catch (e) {
                console.error('Download click error', e);
                try {
                    anchor[0].click();
                } catch (e) {
                    window.open(url, '_blank');
                }
            }
            $timeout(function () {
                $(anchor).remove();
            }, 100);
        });
    }

    return {
        isAvailable: isBlobAvailable,
        copy: fileCopyTo,
        write: fileWriteData,
        getFileWriter: getFileWriter,
        getFakeFileWriter: getFakeFileWriter,
        chooseSave: chooseSaveFile,
        getUrl: getUrl,
        getDataUrl: getDataUrl,
        getByteArray: getByteArray,
        getFileCorrectUrl: getFileCorrectUrl,
        download: downloadFile
    };
})();
var _TmpfsFileStorage = (function () {
    window.requestFileSystem = window.requestFileSystem || window.webkitRequestFileSystem;

    var reqFsPromise,
        fileSystem,
        storageIsAvailable = window.requestFileSystem !== undefined;

    function requestFS () {
        if (reqFsPromise) {
            return reqFsPromise;
        }

        if (!window.requestFileSystem) {
            return reqFsPromise = $q.reject({type: 'FS_BROWSER_UNSUPPORTED', description: 'requestFileSystem not present'});
        }

        var deferred = $q.defer();

        window.requestFileSystem(window.TEMPORARY, 500 * 1024 * 1024, function (fs) {
            cachedFs = fs;
            deferred.resolve();
        }, function (e) {
            storageIsAvailable = false;
            deferred.reject(e);
        });

        return reqFsPromise = deferred.promise;
    };

    function isAvailable () {
        return storageIsAvailable;
    }

    function getFile (fileName, size) {
        size = size || 1;
        return requestFS().then(function () {
            // console.log(dT(), 'get file', fileName);
            var deferred = $q.defer();
            cachedFs.root.getFile(fileName, {create: false}, function(fileEntry) {
                fileEntry.file(function(file) {
                    // console.log(dT(), 'aa', file);
                    if (file.size >= size) {
                        deferred.resolve(fileEntry);
                    } else {
                        deferred.reject(new Error('FILE_NOT_FOUND'));
                    }
                }, function (error) {
                    console.log(dT(), 'error', error);
                    deferred.reject(error);
                });
            }, function () {
                deferred.reject(new Error('FILE_NOT_FOUND'));
            });
            return deferred.promise;
        });
    }

    function saveFile (fileName, blob) {
        return getFileWriter(fileName).then(function (fileWriter) {
            return _FileManager.write(fileWriter, blob).then(function () {
                return fileWriter.finalize();
            })
        });
    }

    function getFileWriter (fileName) {
        // console.log(dT(), 'get file writer', fileName);
        return requestFS().then(function () {
            var deferred = $q.defer();
            cachedFs.root.getFile(fileName, {create: true}, function (fileEntry) {
                _FileManager.getFileWriter(fileEntry).then(function (fileWriter) {
                    fileWriter.finalize = function () {
                        return fileEntry;
                    }
                    deferred.resolve(fileWriter);
                }, function (error) {
                    storageIsAvailable = false;
                    deferred.reject(error);
                });
            }, function (error) {
                storageIsAvailable = false;
                deferred.reject(error);
            });

            return deferred.promise;
        })
    }

    requestFS();

    return {
        name: 'TmpFS',
        isAvailable: isAvailable,
        saveFile: saveFile,
        getFile: getFile,
        getFileWriter: getFileWriter
    };
})();
var _IdbFileStorage = (function () {
    $(window).indexedDB = $(window).indexedDB || $(window).webkitIndexedDB || $(window).mozIndexedDB || $(window).OIndexedDB || $(window).msIndexedDB;
    $(window).IDBTransaction = $(window).IDBTransaction || $(window).webkitIDBTransaction || $(window).OIDBTransaction || $(window).msIDBTransaction;

    var dbName = 'cachedFiles';
    var dbStoreName = 'files';
    var dbVersion = 2;
    var openDbPromise;
    var storageIsAvailable = $(window).indexedDB !== undefined &&
        $(window).IDBTransaction !== undefined;

    // IndexedDB is REALLY slow without blob support in Safari 8, no point in it
    if (storageIsAvailable &&
        navigator.userAgent.indexOf('Safari') != -1 &&
        navigator.userAgent.indexOf('Chrome') == -1 &&
        navigator.userAgent.match(/Version\/[678]/)
    ) {
        storageIsAvailable = false;
    }

    var storeBlobsAvailable = storageIsAvailable || false;

    function isAvailable() {
        return storageIsAvailable;
    }

    function openDatabase() {
        if (openDbPromise) {
            return openDbPromise;
        }

        try {
            var request = indexedDB.open(dbName, dbVersion),
                deferred = $q.defer(),
                createObjectStore = function (db) {
                    db.createObjectStore(dbStoreName);
                };
            if (!request) {
                throw new Exception();
            }
        } catch (error) {
            console.error('error opening db', error.message);
            storageIsAvailable = false;
            return $q.reject(error);
        }

        var finished = false;
        setTimeout(function () {
            if (!finished) {
                request.onerror({type: 'IDB_CREATE_TIMEOUT'});
            }
        }, 3000);

        request.onsuccess = function (event) {
            finished = true;
            db = request.result;

            db.onerror = function (error) {
                storageIsAvailable = false;
                console.error('Error creating/accessing IndexedDB database', error);
                deferred.reject(error);
            };

            deferred.resolve(db);
        };

        request.onerror = function (event) {
            finished = true;
            storageIsAvailable = false;
            console.error('Error creating/accessing IndexedDB database', event);
            deferred.reject(event);
        };

        request.onupgradeneeded = function (event) {
            finished = true;
            console.warn('performing idb upgrade from', event.oldVersion, 'to', event.newVersion);
            var db = event.target.result;
            if (event.oldVersion == 1) {
                db.deleteObjectStore(dbStoreName);
            }
            createObjectStore(db);
        };

        return openDbPromise = deferred.promise;
    }

    function saveFile(fileName, blob) {
        return openDatabase().then(function (db) {
            if (!storeBlobsAvailable) {
                return saveFileBase64(db, fileName, blob);
            }

            if (!(blob instanceof Blob)) {
                blob = blobConstruct([blob]);
            }

            try {
                var objectStore = db.transaction([dbStoreName], IDBTransaction.READ_WRITE || 'readwrite').objectStore(dbStoreName),
                    request = objectStore.put(blob, fileName);
            } catch (error) {
                if (storeBlobsAvailable) {
                    storeBlobsAvailable = false;
                    return saveFileBase64(db, fileName, blob);
                }
                storageIsAvailable = false;
                return $q.reject(error);
            }

            var deferred = $q.defer();

            request.onsuccess = function (event) {
                deferred.resolve(blob);
            };

            request.onerror = function (error) {
                deferred.reject(error);
            };

            return deferred.promise;
        });
    }

    function saveFileBase64(db, fileName, blob) {
        if (getBlobSize(blob) > 10 * 1024 * 1024) {
            return $q.reject();
        }
        if (!(blob instanceof Blob)) {
            var mimeType = blob.type || 'image/jpeg';
            var address = 'data:' + mimeType + ';base64,' + bytesToBase64(blob);
            return storagePutB64String(db, fileName, address).then(function () {
                return blob;
            });
        }

        try {
            var reader = new FileReader();
        } catch (e) {
            storageIsAvailable = false;
            return $q.reject();
        }

        var deferred = $q.defer();

        reader.onloadend = function () {
            storagePutB64String(db, fileName, reader.result).then(function () {
                deferred.resolve(blob);
            }, function (error) {
                deferred.reject(error);
            });
        };

        reader.onerror = function (error) {
            deferred.reject(error);
        };

        try {
            reader.readAsDataURL(blob);
        } catch (e) {
            storageIsAvailable = false;
            return $q.reject();
        }

        return deferred.promise;
    }

    function storagePutB64String(db, fileName, b64string) {
        try {
            var objectStore = db.transaction([dbStoreName], IDBTransaction.READ_WRITE || 'readwrite').objectStore(dbStoreName),
                request = objectStore.put(b64string, fileName);
        } catch (error) {
            storageIsAvailable = false;
            return $q.reject(error);
        }

        var deferred = $q.defer();

        request.onsuccess = function (event) {
            deferred.resolve();
        };

        request.onerror = function (error) {
            deferred.reject(error);
        };

        return deferred.promise;
    }

    function getBlobSize(blob) {
        return blob.size || blob.byteLength || blob.length;
    }

    function getFile(fileName) {
        return openDatabase().then(function (db) {
            var deferred = $q.defer(),
                objectStore = db.transaction([dbStoreName], IDBTransaction.READ || 'readonly').objectStore(dbStoreName),
                request = objectStore.get(fileName);

            request.onsuccess = function (event) {
                var result = event.target.result;
                if (result === undefined) {
                    deferred.reject();
                } else if (typeof result === 'string' &&
                    result.substr(0, 5) === 'data:') {
                    deferred.resolve(dataUrlToBlob(result));
                } else {
                    deferred.resolve(result);
                }
            };

            request.onerror = function (error) {
                deferred.reject(error);
            };

            return deferred.promise;
        });
    }

    function getFileWriter(fileName, mimeType) {
        var fakeWriter = FileManager.getFakeFileWriter(mimeType, function (blob) {
            saveFile(fileName, blob);
        });
        return $q.when(fakeWriter);
    }

    openDatabase();

    return {
        name: 'IndexedDB',
        isAvailable: isAvailable,
        saveFile: saveFile,
        getFile: getFile,
        getFileWriter: getFileWriter
    };
})();
var _MemoryFileStorage = (function () {
    var storage = {};

    function isAvailable() {
        return true;
    }

    function getFile(fileName, size) {
        if (storage[fileName]) {
            return $q.when(storage[fileName]);
        }
        return $q.reject(new Error('FILE_NOT_FOUND'));
    }

    function saveFile(fileName, blob) {
        return $q.when(storage[fileName] = blob);
    }

    function getFileWriter(fileName, mimeType) {
        var fakeWriter = _FileManager.getFakeFileWriter(mimeType, function (blob) {
            saveFile(fileName, blob);
        });
        return $q.when(fakeWriter);
    }

    return {
        name: 'Memory',
        isAvailable: isAvailable,
        saveFile: saveFile,
        getFile: getFile,
        getFileWriter: getFileWriter
    };
})();
var _ErrorService = (function () {
    var shownBoxes = 0;

    function show (params, options) {
        console.warn('Try invoke ErrorService.show', params, options);
        return; // TODO
        if (shownBoxes >= 1) {
            console.log('Skip error box, too many open', shownBoxes, params, options);
            return false;
        }

        options = options || {};
        var scope = $rootScope.$new();
        angular.extend(scope, params);

        shownBoxes++;
        var modal = $modal.open({
            templateUrl: templateUrl('error_modal'),
            scope: scope,
            windowClass: options.windowClass || 'error_modal_window'
        });

        modal.result['finally'](function () {
            shownBoxes--;
        });

        return modal;
    }

    function alert (title, description) {
        return show ({
            title: title,
            description: description
        });
    };

    function confirm (params, options) {
        console.warn('Try invoke ErrorService.confirm', params. options);
        return; // TODO
        options = options || {};
        var scope = $rootScope.$new();
        angular.extend(scope, params);

        var modal = $modal.open({
            templateUrl: templateUrl('confirm_modal'),
            scope: scope,
            windowClass: options.windowClass || 'confirm_modal_window'
        });

        return modal.result;
    };

    $(window).safeConfirm = function (params, callback) {
        if (typeof params === 'string') {
            params = {message: params};
        }
        confirm(params).then(function (result) {
            callback(result || true)
        }, function () {
            callback(false)
        });
    };

    return {
        show: show,
        alert: alert,
        confirm: confirm
    }
})();
var _MtpDcConfigurator = (function () {
    var chosenServers = {};

    function chooseServer(dcID, upload) {
        var dcOptions = Config.Modes.test ? Config.Server.Test : Config.Server.Production;

        if (chosenServers[dcID] === undefined) {
            var chosenServer = false,
                i, dcOption;

            for (i = 0; i < dcOptions.length; i++) {
                dcOption = dcOptions[i];
                if (dcOption.id == dcID) {
                    chosenServer = 'http://' + dcOption.host + (dcOption.port != 80 ? ':' + dcOption.port : '') + '/apiw1';
                    break;
                }
            }
            chosenServers[dcID] = chosenServer;
        }

        return chosenServers[dcID];
    }

    return {
        chooseServer: chooseServer
    };
})();
var _MtpTimeManager = (function () {
    var lastMessageID = [0, 0],
        timeOffset = 0,
        Storage = _Storage;

    Storage.get('server_time_offset').then(function (to) {
        if (to) {
            timeOffset = to;
        }
    });

    function generateMessageID () {
        var timeTicks = tsNow(),
            timeSec   = Math.floor(timeTicks / 1000) + timeOffset,
            timeMSec  = timeTicks % 1000,
            random    = nextRandomInt(0xFFFF);

        var messageID = [timeSec, (timeMSec << 21) | (random << 3) | 4];
        if (lastMessageID[0] > messageID[0] ||
            lastMessageID[0] == messageID[0] && lastMessageID[1] >= messageID[1]) {

            messageID = [lastMessageID[0], lastMessageID[1] + 4];
        }

        lastMessageID = messageID;

        // console.log('generated msg id', messageID, timeOffset);

        return longFromInts(messageID[0], messageID[1]);
    }

    function applyServerTime (serverTime, localTime) {
        var newTimeOffset = serverTime - Math.floor((localTime || tsNow()) / 1000),
            changed = Math.abs(timeOffset - newTimeOffset) > 10;
        Storage.set({server_time_offset: newTimeOffset});

        lastMessageID = [0, 0];
        timeOffset = newTimeOffset;
        console.log(dT(), 'Apply server time', serverTime, localTime, newTimeOffset, changed);

        return changed;
    }

    return {
        generateID: generateMessageID,
        applyServerTime: applyServerTime
    };
})();
var _MtpSecureRandom = (function () {
    $(window).on('click keydown', rng_seed_time);
    return new SecureRandom();
})();
var _MtpRsaKeysManager = (function () {
    /**
     *  Server public key, obtained from here: https://core.telegram.org/api/obtaining_api_id
     *
     * -----BEGIN RSA PUBLIC KEY-----
     * MIIBCgKCAQEAwVACPi9w23mF3tBkdZz+zwrzKOaaQdr01vAbU4E1pvkfj4sqDsm6
     * lyDONS789sVoD/xCS9Y0hkkC3gtL1tSfTlgCMOOul9lcixlEKzwKENj1Yz/s7daS
     * an9tqw3bfUV/nqgbhGX81v/+7RFAEd+RwFnK7a+XYl9sluzHRyVVaTTveB2GazTw
     * Efzk2DWgkBluml8OREmvfraX3bkHZJTKX4EQSjBbbdJ2ZXIsRrYOXfaA+xayEGB+
     * 8hdlLmAjbCVfaigxX0CDqWeR1yFL9kwd9P0NsZRPsmoqVwMbMu7mStFai6aIhc3n
     * Slv8kg9qv1m6XHVQY3PnEw+QQtqSIXklHwIDAQAB
     * -----END RSA PUBLIC KEY-----
     */

    var publisKeysHex = [{
        modulus: 'c150023e2f70db7985ded064759cfecf0af328e69a41daf4d6f01b538135a6f91f8f8b2a0ec9ba9720ce352efcf6c5680ffc424bd634864902de0b4bd6d49f4e580230e3ae97d95c8b19442b3c0a10d8f5633fecedd6926a7f6dab0ddb7d457f9ea81b8465fcd6fffeed114011df91c059caedaf97625f6c96ecc74725556934ef781d866b34f011fce4d835a090196e9a5f0e4449af7eb697ddb9076494ca5f81104a305b6dd27665722c46b60e5df680fb16b210607ef217652e60236c255f6a28315f4083a96791d7214bf64c1df4fd0db1944fb26a2a57031b32eee64ad15a8ba68885cde74a5bfc920f6abf59ba5c75506373e7130f9042da922179251f',
        exponent: '010001'
    }];

    var publicKeysParsed = {};
    var prepared = false;

    function prepareRsaKeys () {
        if (prepared) {
            return;
        }

        for (var i = 0; i < publisKeysHex.length; i++) {
            var keyParsed = publisKeysHex[i];

            var RSAPublicKey = new TLSerialization();
            RSAPublicKey.storeBytes(bytesFromHex(keyParsed.modulus), 'n');
            RSAPublicKey.storeBytes(bytesFromHex(keyParsed.exponent), 'e');

            var buffer = RSAPublicKey.getBuffer();

            var fingerprintBytes = sha1BytesSync(buffer).slice(-8);
            fingerprintBytes.reverse();

            publicKeysParsed[bytesToHex(fingerprintBytes)] = {
                modulus: keyParsed.modulus,
                exponent: keyParsed.exponent
            };
        }

        prepared = true;
    };

    function selectRsaKeyByFingerPrint (fingerprints) {
        prepareRsaKeys();

        var fingerprintHex, foundKey, i;
        for (i = 0; i < fingerprints.length; i++) {
            fingerprintHex = bigStringInt(fingerprints[i]).toString(16);
            if (foundKey = publicKeysParsed[fingerprintHex]) {
                return angular.extend({fingerprint: fingerprints[i]}, foundKey);
            }
        }

        return false;
    };

    return {
        prepare: prepareRsaKeys,
        select: selectRsaKeyByFingerPrint
    };
})();
var _MtpAuthorizer = (function () {
    var chromeMatches = navigator.userAgent.match(/Chrome\/(\d+(\.\d+)?)/),
        chromeVersion = chromeMatches && parseFloat(chromeMatches[1]) || false,
        xhrSendBuffer = !('ArrayBufferView' in window) && (!chromeVersion || chromeVersion < 30);

    delete $http.defaults.headers.post['Content-Type'];
    delete $http.defaults.headers.common['Accept'];

    function mtpSendPlainRequest (dcID, requestBuffer) {
        var requestLength = requestBuffer.byteLength,
            requestArray  = new Int32Array(requestBuffer);

        var header = new TLSerialization();
        header.storeLongP(0, 0, 'auth_key_id'); // Auth key
        header.storeLong(_MtpTimeManager.generateID(), 'msg_id'); // Msg_id
        header.storeInt(requestLength, 'request_length');

        var headerBuffer = header.getBuffer(),
            headerArray  = new Int32Array(headerBuffer),
            headerLength = headerBuffer.byteLength;

        var resultBuffer = new ArrayBuffer(headerLength + requestLength),
            resultArray  = new Int32Array(resultBuffer);

        resultArray.set(headerArray);
        resultArray.set(requestArray, headerArray.length);

        var requestData = xhrSendBuffer ? resultBuffer : resultArray,
            requestPromise;
        var url = _MtpDcConfigurator.chooseServer(dcID);
        var baseError = {code: 406, type: 'NETWORK_BAD_RESPONSE', url: url};
        try {
            requestPromise =  $http.post(url, requestData, {
                responseType: 'arraybuffer',
                transformRequest: null
            });
        } catch (e) {
            requestPromise = $q.reject(angular.extend(baseError, {originalError: e}));
        }
        return requestPromise.then(
            function (result) {
                if (!result.data || !result.data.byteLength) {
                    return $q.reject(baseError);
                }

                try {

                    var deserializer = new TLDeserialization(result.data, {mtproto: true});
                    var auth_key_id = deserializer.fetchLong('auth_key_id');
                    var msg_id      = deserializer.fetchLong('msg_id');
                    var msg_len     = deserializer.fetchInt('msg_len');

                } catch (e) {
                    return $q.reject(angular.extend(baseError, {originalError: e}));
                }

                return deserializer;
            },
            function (error) {
                if (!error.message && !error.type) {
                    error = angular.extend(baseError, {originalError: error});
                }
                return $q.reject(error);
            }
        );
    };

    function mtpSendReqPQ (auth) {
        var deferred = auth.deferred;

        var request = new TLSerialization({mtproto: true});

        request.storeMethod('req_pq', {nonce: auth.nonce});

        console.log(dT(), 'Send req_pq', bytesToHex(auth.nonce));
        mtpSendPlainRequest(auth.dcID, request.getBuffer()).then(function (deserializer) {
            var response = deserializer.fetchObject('ResPQ');

            if (response._ != 'resPQ') {
                throw new Error('resPQ response invalid: ' + response._);
            }

            if (!bytesCmp (auth.nonce, response.nonce)) {
                throw new Error('resPQ nonce mismatch');
            }

            auth.serverNonce = response.server_nonce;
            auth.pq = response.pq;
            auth.fingerprints = response.server_public_key_fingerprints;

            console.log(dT(), 'Got ResPQ', bytesToHex(auth.serverNonce), bytesToHex(auth.pq), auth.fingerprints);

            auth.publicKey = _MtpRsaKeysManager.select(auth.fingerprints);

            if (!auth.publicKey) {
                throw new Error('No public key found');
            }

            console.log(dT(), 'PQ factorization start', auth.pq);
            _CryptoWorker.factorize(auth.pq).then(function (pAndQ) {
                auth.p = pAndQ[0];
                auth.q = pAndQ[1];
                console.log(dT(), 'PQ factorization done', pAndQ[2]);
                mtpSendReqDhParams(auth);
            }, function (error) {
                console.log('Worker error', error, error.stack);
                deferred.reject(error);
            });
        }, function (error) {
            console.error(dT(), 'req_pq error', error.message);
            deferred.reject(error);
        });

        $timeout(function () {
            _MtpRsaKeysManager.prepare();
        });
    };

    function mtpSendReqDhParams (auth) {

        var deferred = auth.deferred;

        auth.newNonce = new Array(32);
        _MtpSecureRandom.nextBytes(auth.newNonce);

        var data = new TLSerialization({mtproto: true});
        data.storeObject({
            _: 'p_q_inner_data',
            pq: auth.pq,
            p: auth.p,
            q: auth.q,
            nonce: auth.nonce,
            server_nonce: auth.serverNonce,
            new_nonce: auth.newNonce
        }, 'P_Q_inner_data', 'DECRYPTED_DATA');

        var dataWithHash = sha1BytesSync(data.getBuffer()).concat(data.getBytes());

        var request = new TLSerialization({mtproto: true});
        request.storeMethod('req_DH_params', {
            nonce: auth.nonce,
            server_nonce: auth.serverNonce,
            p: auth.p,
            q: auth.q,
            public_key_fingerprint: auth.publicKey.fingerprint,
            encrypted_data: rsaEncrypt(auth.publicKey, dataWithHash)
        });

        console.log(dT(), 'Send req_DH_params');
        mtpSendPlainRequest(auth.dcID, request.getBuffer()).then(function (deserializer) {
            var response = deserializer.fetchObject('Server_DH_Params', 'RESPONSE');

            if (response._ != 'server_DH_params_fail' && response._ != 'server_DH_params_ok') {
                deferred.reject(new Error('Server_DH_Params response invalid: ' + response._));
                return false;
            }

            if (!bytesCmp (auth.nonce, response.nonce)) {
                deferred.reject(new Error('Server_DH_Params nonce mismatch'));
                return false;
            }

            if (!bytesCmp (auth.serverNonce, response.server_nonce)) {
                deferred.reject(new Error('Server_DH_Params server_nonce mismatch'));
                return false;
            }

            if (response._ == 'server_DH_params_fail') {
                var newNonceHash = sha1BytesSync(auth.newNonce).slice(-16);
                if (!bytesCmp (newNonceHash, response.new_nonce_hash)) {
                    deferred.reject(new Error('server_DH_params_fail new_nonce_hash mismatch'));
                    return false;
                }
                deferred.reject(new Error('server_DH_params_fail'));
                return false;
            }

            try {
                mtpDecryptServerDhDataAnswer(auth, response.encrypted_answer);
            } catch (e) {
                deferred.reject(e);
                return false;
            }

            mtpSendSetClientDhParams(auth);
        }, function (error) {
            deferred.reject(error);
        });
    };

    function mtpDecryptServerDhDataAnswer (auth, encryptedAnswer) {
        auth.localTime = tsNow();

        auth.tmpAesKey = sha1BytesSync(auth.newNonce.concat(auth.serverNonce)).concat(sha1BytesSync(auth.serverNonce.concat(auth.newNonce)).slice(0, 12));
        auth.tmpAesIv = sha1BytesSync(auth.serverNonce.concat(auth.newNonce)).slice(12).concat(sha1BytesSync([].concat(auth.newNonce, auth.newNonce)), auth.newNonce.slice(0, 4));

        var answerWithHash = aesDecryptSync(encryptedAnswer, auth.tmpAesKey, auth.tmpAesIv);

        var hash = answerWithHash.slice(0, 20);
        var answerWithPadding = answerWithHash.slice(20);
        var buffer = bytesToArrayBuffer(answerWithPadding);

        var deserializer = new TLDeserialization(buffer, {mtproto: true});
        var response = deserializer.fetchObject('Server_DH_inner_data');

        if (response._ != 'server_DH_inner_data') {
            throw new Error('server_DH_inner_data response invalid: ' + constructor);
        }

        if (!bytesCmp (auth.nonce, response.nonce)) {
            throw new Error('server_DH_inner_data nonce mismatch');
        }

        if (!bytesCmp (auth.serverNonce, response.server_nonce)) {
            throw new Error('server_DH_inner_data serverNonce mismatch');
        }

        console.log(dT(), 'Done decrypting answer');
        auth.g          = response.g;
        auth.dhPrime    = response.dh_prime;
        auth.gA         = response.g_a;
        auth.serverTime = response.server_time;
        auth.retry      = 0;

        var offset = deserializer.getOffset();

        if (!bytesCmp(hash, sha1BytesSync(answerWithPadding.slice(0, offset)))) {
            throw new Error('server_DH_inner_data SHA1-hash mismatch');
        }

        _MtpTimeManager.applyServerTime(auth.serverTime, auth.localTime);
    };

    function mtpSendSetClientDhParams(auth) {
        var deferred = auth.deferred,
            gBytes = bytesFromHex(auth.g.toString(16));

        auth.b = new Array(256);
        _MtpSecureRandom.nextBytes(auth.b);

        _CryptoWorker.modPow(gBytes, auth.b, auth.dhPrime).then(function (gB) {

            var data = new TLSerialization({mtproto: true});
            data.storeObject({
                _: 'client_DH_inner_data',
                nonce: auth.nonce,
                server_nonce: auth.serverNonce,
                retry_id: [0, auth.retry++],
                g_b: gB,
            }, 'Client_DH_Inner_Data');

            var dataWithHash = sha1BytesSync(data.getBuffer()).concat(data.getBytes());

            var encryptedData = aesEncryptSync(dataWithHash, auth.tmpAesKey, auth.tmpAesIv);

            var request = new TLSerialization({mtproto: true});
            request.storeMethod('set_client_DH_params', {
                nonce: auth.nonce,
                server_nonce: auth.serverNonce,
                encrypted_data: encryptedData
            });

            console.log(dT(), 'Send set_client_DH_params');
            mtpSendPlainRequest(auth.dcID, request.getBuffer()).then(function (deserializer) {
                var response = deserializer.fetchObject('Set_client_DH_params_answer');

                if (response._ != 'dh_gen_ok' && response._ != 'dh_gen_retry' && response._ != 'dh_gen_fail') {
                    deferred.reject(new Error('Set_client_DH_params_answer response invalid: ' + response._));
                    return false;
                }

                if (!bytesCmp (auth.nonce, response.nonce)) {
                    deferred.reject(new Error('Set_client_DH_params_answer nonce mismatch'));
                    return false
                }

                if (!bytesCmp (auth.serverNonce, response.server_nonce)) {
                    deferred.reject(new Error('Set_client_DH_params_answer server_nonce mismatch'));
                    return false;
                }

                _CryptoWorker.modPow(auth.gA, auth.b, auth.dhPrime).then(function (authKey) {
                    var authKeyHash = sha1BytesSync(authKey),
                        authKeyAux  = authKeyHash.slice(0, 8),
                        authKeyID   = authKeyHash.slice(-8);

                    console.log(dT(), 'Got Set_client_DH_params_answer', response._);
                    switch (response._) {
                        case 'dh_gen_ok':
                            var newNonceHash1 = sha1BytesSync(auth.newNonce.concat([1], authKeyAux)).slice(-16);

                            if (!bytesCmp(newNonceHash1, response.new_nonce_hash1)) {
                                deferred.reject(new Error('Set_client_DH_params_answer new_nonce_hash1 mismatch'));
                                return false;
                            }

                            var serverSalt = bytesXor(auth.newNonce.slice(0, 8), auth.serverNonce.slice(0, 8));
                            // console.log('Auth successfull!', authKeyID, authKey, serverSalt);

                            auth.authKeyID = authKeyID;
                            auth.authKey = authKey;
                            auth.serverSalt = serverSalt;

                            deferred.resolve(auth);
                            break;

                        case 'dh_gen_retry':
                            var newNonceHash2 = sha1BytesSync(auth.newNonce.concat([2], authKeyAux)).slice(-16);
                            if (!bytesCmp(newNonceHash2, response.new_nonce_hash2)) {
                                deferred.reject(new Error('Set_client_DH_params_answer new_nonce_hash2 mismatch'));
                                return false;
                            }

                            return mtpSendSetClientDhParams(auth);

                        case 'dh_gen_fail':
                            var newNonceHash3 = sha1BytesSync(auth.newNonce.concat([3], authKeyAux)).slice(-16);
                            if (!bytesCmp(newNonceHash3, response.new_nonce_hash3)) {
                                deferred.reject(new Error('Set_client_DH_params_answer new_nonce_hash3 mismatch'));
                                return false;
                            }

                            deferred.reject(new Error('Set_client_DH_params_answer fail'));
                            return false;
                    }
                }, function (error) {
                    deferred.reject(error);
                })
            }, function (error) {
                deferred.reject(error);
            });
        }, function (error) {
            deferred.reject(error);
        })
    };

    var cached = {};

    function mtpAuth (dcID) {
        if (cached[dcID] !== undefined) {
            return cached[dcID];
        }

        var nonce = [];
        for (var i = 0; i < 16; i++) {
            nonce.push(nextRandomInt(0xFF));
        }

        if (!_MtpDcConfigurator.chooseServer(dcID)) {
            return $q.reject(new Error('No server found for dc ' + dcID));
        }

        var auth = {
            dcID: dcID,
            nonce: nonce,
            deferred: $q.defer()
        };

        $timeout(function () {
            mtpSendReqPQ(auth);
        });

        cached[dcID] = auth.deferred.promise;

        cached[dcID]['catch'](function () {
            delete cached[dcID];
        });

        return cached[dcID];
    };

    return {
        auth: mtpAuth
    };
})();
var _MtpNetworkerFactory = (function () {
    var updatesProcessor,
        iii = 0,
        offline,
        offlineInited = false,
        akStopped = false,
        chromeMatches = navigator.userAgent.match(/Chrome\/(\d+(\.\d+)?)/),
        chromeVersion = chromeMatches && parseFloat(chromeMatches[1]) || false,
        xhrSendBuffer = !('ArrayBufferView' in window) && (!chromeVersion || chromeVersion < 30);


    delete $http.defaults.headers.post['Content-Type'];
    delete $http.defaults.headers.common['Accept'];

    $rootScope.retryOnline = function () {
        $(document.body).trigger('online');
    };

    function MtpNetworker(dcID, authKey, serverSalt, options) {
        options = options || {};

        this.dcID = dcID;
        this.iii = iii++;

        this.authKey = authKey;
        this.authKeyUint8 = convertToUint8Array(authKey);
        this.authKeyBuffer = convertToArrayBuffer(authKey);
        this.authKeyID = sha1BytesSync(authKey).slice(-8);

        this.serverSalt = serverSalt;

        this.upload = options.fileUpload || options.fileDownload || false;

        this.updateSession();

        this.currentRequests = 0;
        this.checkConnectionPeriod = 0;

        this.sentMessages = {};
        this.serverMessages = [];
        this.clientMessages = [];

        this.pendingMessages = {};
        this.pendingAcks = [];
        this.pendingResends = [];
        this.connectionInited = false;

        this.pendingTimeouts = [];

        this.longPollInt = $interval(this.checkLongPoll.bind(this), 10000);
        this.checkLongPoll();

        if (!offlineInited) {
            offlineInited = true;
            $rootScope.offline = true;
            $rootScope.offlineConnecting = true;
        }

        if (Config.Navigator.mobile) {
            this.setupMobileSleep();
        }
    };

    MtpNetworker.prototype.updateSession = function () {
        this.seqNo = 0;
        this.sessionID = new Array(8);
        _MtpSecureRandom.nextBytes(this.sessionID);

        if (false) {
            this.sessionID[0] = 0xAB;
            this.sessionID[1] = 0xCD;
        }
    };

    MtpNetworker.prototype.setupMobileSleep = function () {
        var self = this;
        $rootScope.$watch('idle.isIDLE', function (isIDLE) {
            if (isIDLE) {
                self.sleepAfter = tsNow() + 30000;
            } else {
                delete self.sleepAfter;
                self.checkLongPoll();
            }
        });

        $rootScope.$on('push_received', function () {
            // console.log(dT(), 'push recieved', self.sleepAfter);
            if (self.sleepAfter) {
                self.sleepAfter = tsNow() + 30000;
                self.checkLongPoll();
            }
        });
    };

    MtpNetworker.prototype.updateSentMessage = function (sentMessageID) {
        var sentMessage = this.sentMessages[sentMessageID];
        if (!sentMessage) {
            return false;
        }
        var self = this;
        if (sentMessage.container) {
            var newInner = [];
            angular.forEach(sentMessage.inner, function(innerSentMessageID){
                var innerSentMessage = self.updateSentMessage(innerSentMessageID);
                if (innerSentMessage) {
                    newInner.push(innerSentMessage.msg_id);
                }
            });
            sentMessage.inner = newInner;
        }

        sentMessage.msg_id = _MtpTimeManager.generateID();
        sentMessage.seq_no = this.generateSeqNo(
            sentMessage.notContentRelated ||
            sentMessage.container
        );
        this.sentMessages[sentMessage.msg_id] = sentMessage;
        delete self.sentMessages[sentMessageID];

        return sentMessage;
    };

    MtpNetworker.prototype.generateSeqNo = function (notContentRelated) {
        var seqNo = this.seqNo * 2;

        if (!notContentRelated) {
            seqNo++;
            this.seqNo++;
        }

        return seqNo;
    }

    MtpNetworker.prototype.wrapMtpCall = function (method, params, options) {
        var serializer = new TLSerialization({mtproto: true});

        serializer.storeMethod(method, params);

        var messageID = _MtpTimeManager.generateID(),
            seqNo = this.generateSeqNo(),
            message = {
                msg_id: messageID,
                seq_no: seqNo,
                body: serializer.getBytes()
            };

        if (Config.Modes.debug) {
            console.log(dT(), 'MT call', method, params, messageID, seqNo);
        }

        return this.pushMessage(message, options);
    };

    MtpNetworker.prototype.wrapMtpMessage = function (object, options) {
        options = options || {};

        var serializer = new TLSerialization({mtproto: true});
        serializer.storeObject(object, 'Object');

        var messageID = _MtpTimeManager.generateID(),
            seqNo = this.generateSeqNo(options.notContentRelated),
            message = {
                msg_id: messageID,
                seq_no: seqNo,
                body: serializer.getBytes()
            };

        if (Config.Modes.debug) {
            console.log(dT(), 'MT message', object, messageID, seqNo);
        }

        return this.pushMessage(message, options);
    };

    MtpNetworker.prototype.wrapApiCall = function (method, params, options) {
        var serializer = new TLSerialization(options);

        if (!this.connectionInited) {
            serializer.storeInt(0xda9b0d0d, 'invokeWithLayer');
            serializer.storeInt(Config.Schema.API.layer, 'layer');
            serializer.storeInt(0x69796de9, 'initConnection');
            serializer.storeInt(Config.App.id, 'api_id');
            serializer.storeString(navigator.userAgent || 'Unknown UserAgent', 'device_model');
            serializer.storeString(navigator.platform  || 'Unknown Platform', 'system_version');
            serializer.storeString(Config.App.version, 'app_version');
            serializer.storeString(navigator.language || 'en', 'lang_code');
        }

        if (options.afterMessageID) {
            serializer.storeInt(0xcb9f372d, 'invokeAfterMsg');
            serializer.storeLong(options.afterMessageID, 'msg_id');
        }

        options.resultType = serializer.storeMethod(method, params);

        var messageID = _MtpTimeManager.generateID(),
            seqNo = this.generateSeqNo(),
            message = {
                msg_id: messageID,
                seq_no: seqNo,
                body: serializer.getBytes(true),
                isAPI: true
            };

        if (Config.Modes.debug) {
            console.log(dT(), 'Api call', method, params, messageID, seqNo, options);
        } else {
            console.log(dT(), 'Api call', method);
        }

        return this.pushMessage(message, options);
    };

    MtpNetworker.prototype.checkLongPoll = function(force) {
        var isClean = this.cleanupSent();
        // console.log('Check lp', this.longPollPending, tsNow(), this.dcID, isClean);
        if (this.longPollPending && tsNow() < this.longPollPending ||
            this.offline ||
            akStopped) {
            return false;
        }
        var self = this;
        _Storage.get('dc').then(function (baseDcID) {
            if (isClean && (
                    baseDcID != self.dcID ||
                    self.upload ||
                    self.sleepAfter && tsNow() > self.sleepAfter
                )) {
                // console.warn(dT(), 'Send long-poll for DC is delayed', self.dcID, self.sleepAfter);
                return;
            }
            self.sendLongPoll();
        });
    };

    MtpNetworker.prototype.sendLongPoll = function() {
        var maxWait = 25000,
            self = this;

        this.longPollPending = tsNow() + maxWait;
        // console.log('Set lp', this.longPollPending, tsNow());

        this.wrapMtpCall('http_wait', {
            max_delay: 500,
            wait_after: 150,
            max_wait: maxWait
        }, {
            noResponse: true,
            longPoll: true
        }).then(function () {
            delete self.longPollPending;
            setZeroTimeout(self.checkLongPoll.bind(self));
        }, function () {
            console.log('Long-poll failed');
        });

    };

    MtpNetworker.prototype.pushMessage = function(message, options) {
        var deferred = $q.defer();

        this.sentMessages[message.msg_id] = angular.extend(message, options || {}, {deferred: deferred});
        this.pendingMessages[message.msg_id] = 0;

        if (!options || !options.noShedule) {
            this.sheduleRequest();
        }
        if (angular.isObject(options)) {
            options.messageID = message.msg_id;
        }

        return deferred.promise;
    };

    MtpNetworker.prototype.pushResend = function(messageID, delay) {
        var value = delay ? tsNow() + delay : 0;
        var sentMessage = this.sentMessages[messageID];
        if (sentMessage.container) {
            for (var i = 0; i < sentMessage.inner.length; i++) {
                this.pendingMessages[sentMessage.inner[i]] = value;
            }
        } else {
            this.pendingMessages[messageID] = value;
        }

        // console.log('Resend due', messageID, this.pendingMessages);

        this.sheduleRequest(delay);
    };

    MtpNetworker.prototype.getMsgKeyIv = function (msgKey, isOut) {
        var authKey = this.authKeyUint8,
            x = isOut ? 0 : 8,
            sha1aText = new Uint8Array(48),
            sha1bText = new Uint8Array(48),
            sha1cText = new Uint8Array(48),
            sha1dText = new Uint8Array(48),
            promises = {};

        sha1aText.set(msgKey, 0);
        sha1aText.set(authKey.subarray(x, x + 32), 16);
        promises.sha1a = _CryptoWorker.sha1Hash(sha1aText);

        sha1bText.set(authKey.subarray(x + 32, x + 48), 0);
        sha1bText.set(msgKey, 16);
        sha1bText.set(authKey.subarray(x + 48, x + 64), 32);
        promises.sha1b = _CryptoWorker.sha1Hash(sha1bText);

        sha1cText.set(authKey.subarray(x + 64, x + 96), 0);
        sha1cText.set(msgKey, 32);
        promises.sha1c = _CryptoWorker.sha1Hash(sha1cText);

        sha1dText.set(msgKey, 0);
        sha1dText.set(authKey.subarray(x + 96, x + 128), 16);
        promises.sha1d = _CryptoWorker.sha1Hash(sha1dText);

        return $q.all(promises).then(function (result) {
            var aesKey = new Uint8Array(32),
                aesIv = new Uint8Array(32);
            sha1a = new Uint8Array(result.sha1a),
                sha1b = new Uint8Array(result.sha1b),
                sha1c = new Uint8Array(result.sha1c),
                sha1d = new Uint8Array(result.sha1d);

            aesKey.set(sha1a.subarray(0, 8));
            aesKey.set(sha1b.subarray(8, 20), 8);
            aesKey.set(sha1c.subarray(4, 16), 20);

            aesIv.set(sha1a.subarray(8, 20));
            aesIv.set(sha1b.subarray(0, 8), 12);
            aesIv.set(sha1c.subarray(16, 20), 20);
            aesIv.set(sha1d.subarray(0, 8), 24);

            return [aesKey, aesIv];
        });
    };

    MtpNetworker.prototype.checkConnection = function(event) {
        $rootScope.offlineConnecting = true;

        console.log(dT(), 'Check connection', event);
        $timeout.cancel(this.checkConnectionPromise);

        var serializer = new TLSerialization({mtproto: true}),
            pingID = [nextRandomInt(0xFFFFFFFF), nextRandomInt(0xFFFFFFFF)];

        serializer.storeMethod('ping', {ping_id: pingID});

        var pingMessage = {
            msg_id: _MtpTimeManager.generateID(),
            seq_no: this.generateSeqNo(true),
            body: serializer.getBytes()
        };

        var self = this;
        this.sendEncryptedRequest(pingMessage, {timeout: 15000}).then(function (result) {
            delete $rootScope.offlineConnecting;
            self.toggleOffline(false);
        }, function () {
            console.log(dT(), 'Delay ', self.checkConnectionPeriod * 1000);
            self.checkConnectionPromise = $timeout(self.checkConnection.bind(self), parseInt(self.checkConnectionPeriod * 1000));
            self.checkConnectionPeriod = Math.min(60, self.checkConnectionPeriod * 1.5);
            $timeout(function () {
                delete $rootScope.offlineConnecting;
            }, 1000);
        })
    };

    MtpNetworker.prototype.toggleOffline = function(enabled) {
        // console.log('toggle ', enabled, this.dcID, this.iii);
        if (this.offline !== undefined && this.offline == enabled) {
            return false;
        }

        this.offline = enabled;
        $rootScope.offline = enabled;
        $rootScope.offlineConnecting = false;

        if (this.offline) {
            $timeout.cancel(this.nextReqPromise);
            delete this.nextReq;

            if (this.checkConnectionPeriod < 1.5) {
                this.checkConnectionPeriod = 0;
            }

            this.checkConnectionPromise = $timeout(this.checkConnection.bind(this), parseInt(this.checkConnectionPeriod * 1000));
            this.checkConnectionPeriod = Math.min(30, (1 + this.checkConnectionPeriod) * 1.5);

            this.onOnlineCb = this.checkConnection.bind(this);

            $(document.body).on('online focus', this.onOnlineCb);
        } else {
            delete this.longPollPending;
            this.checkLongPoll();
            this.sheduleRequest();

            if (this.onOnlineCb) {
                $(document.body).off('online focus', this.onOnlineCb);
            }
            $timeout.cancel(this.checkConnectionPromise);
        }

    };



    MtpNetworker.prototype.performSheduledRequest = function() {
        // console.log(dT(), 'sheduled', this.dcID, this.iii);
        if (this.offline || akStopped) {
            console.log(dT(), 'Cancel sheduled');
            return false;
        }
        delete this.nextReq;
        if (this.pendingAcks.length) {
            var ackMsgIDs = [];
            for (var i = 0; i < this.pendingAcks.length; i++) {
                ackMsgIDs.push(this.pendingAcks[i]);
            }
            // console.log('acking messages', ackMsgIDs);
            this.wrapMtpMessage({_: 'msgs_ack', msg_ids: ackMsgIDs}, {notContentRelated: true, noShedule: true});
        }

        if (this.pendingResends.length) {
            var resendMsgIDs = [],
                resendOpts = {noShedule: true, notContentRelated: true};
            for (var i = 0; i < this.pendingResends.length; i++) {
                resendMsgIDs.push(this.pendingResends[i]);
            }
            // console.log('resendReq messages', resendMsgIDs);
            this.wrapMtpMessage({_: 'msg_resend_req', msg_ids: resendMsgIDs}, resendOpts);
            this.lastResendReq = {req_msg_id: resendOpts.messageID, resend_msg_ids: resendMsgIDs};
        }

        var messages = [],
            message,
            messagesByteLen = 0,
            currentTime = tsNow(),
            hasApiCall = false,
            hasHttpWait = false,
            lengthOverflow = false,
            singlesCount = 0,
            self = this;

        angular.forEach(this.pendingMessages, function (value, messageID) {
            if (!value || value >= currentTime) {
                if (message = self.sentMessages[messageID]) {
                    var messageByteLength = (message.body.byteLength || message.body.length) + 32;
                    if (!message.notContentRelated &&
                        lengthOverflow) {
                        return;
                    }
                    if (!message.notContentRelated &&
                        messagesByteLen &&
                        messagesByteLen + messageByteLength > 655360) { // 640 Kb
                        lengthOverflow = true;
                        return;
                    }
                    if (message.singleInRequest) {
                        singlesCount++;
                        if (singlesCount > 1) {
                            return;
                        }
                    }
                    messages.push(message);
                    messagesByteLen += messageByteLength;
                    if (message.isAPI) {
                        hasApiCall = true;
                    }
                    else if (message.longPoll) {
                        hasHttpWait = true;
                    }
                } else {
                    // console.log(message, messageID);
                }
                delete self.pendingMessages[messageID];
            }
        });

        if (hasApiCall && !hasHttpWait) {
            var serializer = new TLSerialization({mtproto: true});
            serializer.storeMethod('http_wait', {
                max_delay: 500,
                wait_after: 150,
                max_wait: 3000
            });
            messages.push({
                msg_id: _MtpTimeManager.generateID(),
                seq_no: this.generateSeqNo(),
                body: serializer.getBytes()
            });
        }

        if (!messages.length) {
            // console.log('no sheduled messages');
            return;
        }

        var noResponseMsgs = [];

        if (messages.length > 1) {
            var container = new TLSerialization({mtproto: true, startMaxLength: messagesByteLen + 64});
            container.storeInt(0x73f1f8dc, 'CONTAINER[id]');
            container.storeInt(messages.length, 'CONTAINER[count]');
            var onloads = [];
            var innerMessages = [];
            for (var i = 0; i < messages.length; i++) {
                container.storeLong(messages[i].msg_id, 'CONTAINER[' + i + '][msg_id]');
                innerMessages.push(messages[i].msg_id);
                container.storeInt(messages[i].seq_no, 'CONTAINER[' + i + '][seq_no]');
                container.storeInt(messages[i].body.length, 'CONTAINER[' + i + '][bytes]');
                container.storeRawBytes(messages[i].body, 'CONTAINER[' + i + '][body]');
                if (messages[i].noResponse) {
                    noResponseMsgs.push(messages[i].msg_id);
                }
            }

            var containerSentMessage = {
                msg_id: _MtpTimeManager.generateID(),
                seq_no: this.generateSeqNo(true),
                container: true,
                inner: innerMessages
            }

            message = angular.extend({body: container.getBytes(true)}, containerSentMessage);

            this.sentMessages[message.msg_id] = containerSentMessage;

            if (Config.Modes.debug) {
                console.log(dT(), 'Container', innerMessages, message.msg_id, message.seq_no);
            }
        } else {
            if (message.noResponse) {
                noResponseMsgs.push(message.msg_id);
            }
            this.sentMessages[message.msg_id] = message;
        }

        this.pendingAcks = [];

        var self = this;
        this.sendEncryptedRequest(message).then(function (result) {
            self.toggleOffline(false);
            // console.log('parse for', message);
            self.parseResponse(result.data).then(function (response) {
                if (Config.Modes.debug) {
                    console.log(dT(), 'Server response', self.dcID, response);
                }

                self.processMessage(response.response, response.messageID, response.sessionID);

                angular.forEach(noResponseMsgs, function (msgID) {
                    if (self.sentMessages[msgID]) {
                        var deferred = self.sentMessages[msgID].deferred;
                        delete self.sentMessages[msgID];
                        deferred.resolve();
                    }
                });

                self.checkLongPoll();

                this.checkConnectionPeriod = Math.max(1.1, Math.sqrt(this.checkConnectionPeriod));

            });
        }, function (error) {
            console.log('Encrypted request failed', error);

            if (message.container) {
                angular.forEach(message.inner, function (msgID) {
                    self.pendingMessages[msgID] = 0;
                });
                delete self.sentMessages[message.msg_id];
            } else {
                self.pendingMessages[message.msg_id] = 0;
            }

            angular.forEach(noResponseMsgs, function (msgID) {
                if (self.sentMessages[msgID]) {
                    var deferred = self.sentMessages[msgID].deferred;
                    delete self.sentMessages[msgID];
                    delete self.pendingMessages[msgID];
                    deferred.reject();
                }
            });

            self.toggleOffline(true);
        });

        if (lengthOverflow || singlesCount > 1) {
            this.sheduleRequest()
        }
    };

    MtpNetworker.prototype.getEncryptedMessage = function (bytes) {
        var self = this;

        // console.log(dT(), 'Start encrypt', bytes.byteLength);
        return _CryptoWorker.sha1Hash(bytes).then(function (bytesHash) {
            // console.log(dT(), 'after hash');
            var msgKey = new Uint8Array(bytesHash).subarray(4, 20);
            return self.getMsgKeyIv(msgKey, true).then(function (keyIv) {
                // console.log(dT(), 'after msg key iv');
                return _CryptoWorker.aesEncrypt(bytes, keyIv[0], keyIv[1]).then(function (encryptedBytes) {
                    // console.log(dT(), 'Finish encrypt');
                    return {
                        bytes: encryptedBytes,
                        msgKey: msgKey
                    };
                })
            })
        })
    };

    MtpNetworker.prototype.getDecryptedMessage = function (msgKey, encryptedData) {
        // console.log(dT(), 'get decrypted start');
        return this.getMsgKeyIv(msgKey, false).then(function (keyIv) {
            // console.log(dT(), 'after msg key iv');
            return _CryptoWorker.aesDecrypt(encryptedData, keyIv[0], keyIv[1]);
        });
    };

    MtpNetworker.prototype.sendEncryptedRequest = function (message, options) {
        var self = this;
        options = options || {};
        // console.log(dT(), 'Send encrypted'/*, message*/);
        // console.trace();
        var data = new TLSerialization({startMaxLength: message.body.length + 64});

        data.storeIntBytes(this.serverSalt, 64, 'salt');
        data.storeIntBytes(this.sessionID, 64, 'session_id');

        data.storeLong(message.msg_id, 'message_id');
        data.storeInt(message.seq_no, 'seq_no');

        data.storeInt(message.body.length, 'message_data_length');
        data.storeRawBytes(message.body, 'message_data');

        return this.getEncryptedMessage(data.getBuffer()).then(function (encryptedResult) {
            // console.log(dT(), 'Got encrypted out message'/*, encryptedResult*/);
            var request = new TLSerialization({startMaxLength: encryptedResult.bytes.byteLength + 256});
            request.storeIntBytes(self.authKeyID, 64, 'auth_key_id');
            request.storeIntBytes(encryptedResult.msgKey, 128, 'msg_key');
            request.storeRawBytes(encryptedResult.bytes, 'encrypted_data');

            var requestData = xhrSendBuffer ? request.getBuffer() : request.getArray();

            var requestPromise;
            var url = _MtpDcConfigurator.chooseServer(self.dcID, self.upload);
            var baseError = {code: 406, type: 'NETWORK_BAD_RESPONSE', url: url};

            try {
                options = angular.extend(options || {}, {
                    responseType: 'arraybuffer',
                    transformRequest: null
                });
                requestPromise =  $http.post(url, requestData, options);
            } catch (e) {
                requestPromise = $q.reject(e);
            }
            return requestPromise.then(
                function (result) {
                    if (!result.data || !result.data.byteLength) {
                        return $q.reject(baseError);
                    }
                    return result;
                },
                function (error) {
                    if (error.status == 404 &&
                        (error.data || '').indexOf('nginx/0.3.33') != -1) {
                        _Storage.remove(
                            'dc' + self.dcID + '_server_salt',
                            'dc' + self.dcID + '_auth_key'
                        ).then(function () {
                            _AppRuntimeManager.reload();
                        });
                    }
                    if (!error.message && !error.type) {
                        error = angular.extend(baseError, {type: 'NETWORK_BAD_REQUEST', originalError: error});
                    }
                    return $q.reject(error);
                }
            );
        });
    };

    MtpNetworker.prototype.parseResponse = function (responseBuffer) {
        // console.log(dT(), 'Start parsing response');
        var self = this;

        var deserializer = new TLDeserialization(responseBuffer);

        var authKeyID = deserializer.fetchIntBytes(64, false, 'auth_key_id');
        if (!bytesCmp(authKeyID, this.authKeyID)) {
            throw new Error('Invalid server auth_key_id: ' + bytesToHex(authKeyID));
        }
        var msgKey = deserializer.fetchIntBytes(128, true, 'msg_key'),
            encryptedData = deserializer.fetchRawBytes(responseBuffer.byteLength - deserializer.getOffset(), true, 'encrypted_data');

        return this.getDecryptedMessage(msgKey, encryptedData).then(function (dataWithPadding) {
            // console.log(dT(), 'after decrypt');
            var deserializer = new TLDeserialization(dataWithPadding, {mtproto: true});

            var salt = deserializer.fetchIntBytes(64, false, 'salt');
            var sessionID = deserializer.fetchIntBytes(64, false, 'session_id');
            var messageID = deserializer.fetchLong('message_id');

            var seqNo = deserializer.fetchInt('seq_no');

            var messageBody = deserializer.fetchRawBytes(false, true, 'message_data');

            // console.log(dT(), 'before hash');
            var hashData = convertToUint8Array(dataWithPadding).subarray(0, deserializer.getOffset());

            return _CryptoWorker.sha1Hash(hashData).then(function (dataHash) {
                if (!bytesCmp(msgKey, bytesFromArrayBuffer(dataHash).slice(-16))) {
                    console.warn(msgKey, bytesFromArrayBuffer(dataHash));
                    throw new Error('server msgKey mismatch');
                }

                var buffer = bytesToArrayBuffer(messageBody);
                var deserializerOptions = {
                    mtproto: true,
                    override: {
                        mt_message: function (result, field) {
                            result.msg_id = this.fetchLong(field + '[msg_id]');
                            result.seqno = this.fetchInt(field + '[seqno]');
                            result.bytes = this.fetchInt(field + '[bytes]');

                            var offset = this.getOffset();

                            try {
                                result.body = this.fetchObject('Object', field + '[body]');
                            } catch (e) {
                                console.error(dT(), 'parse error', e.message, e.stack);
                                result.body = {_: 'parse_error', error: e};
                            }
                            if (this.offset != offset + result.bytes) {
                                // console.warn(dT(), 'set offset', this.offset, offset, result.bytes);
                                // console.log(dT(), result);
                                this.offset = offset + result.bytes;
                            }
                            // console.log(dT(), 'override message', result);
                        },
                        mt_rpc_result: function (result, field) {
                            result.req_msg_id = this.fetchLong(field + '[req_msg_id]');

                            var sentMessage = self.sentMessages[result.req_msg_id],
                                type = sentMessage && sentMessage.resultType || 'Object';

                            if (result.req_msg_id && !sentMessage) {
                                // console.warn(dT(), 'Result for unknown message', result);
                                return;
                            }
                            result.result = this.fetchObject(type, field + '[result]');
                            // console.log(dT(), 'override rpc_result', sentMessage, type, result);
                        }
                    }
                };
                var deserializer = new TLDeserialization(buffer, deserializerOptions);
                var response = deserializer.fetchObject('', 'INPUT');

                return {
                    response: response,
                    messageID: messageID,
                    sessionID: sessionID,
                    seqNo: seqNo
                };
            });
        });
    };

    MtpNetworker.prototype.applyServerSalt = function (newServerSalt) {
        var serverSalt = longToBytes(newServerSalt);

        var storeObj  = {};
        storeObj['dc' + this.dcID + '_server_salt'] = bytesToHex(serverSalt);
        _Storage.set(storeObj);

        this.serverSalt = serverSalt;
        return true;
    };

    MtpNetworker.prototype.sheduleRequest = function (delay) {
        if (this.offline) {
            this.checkConnection('forced shedule');
        }
        var nextReq = tsNow() + delay;

        if (delay && this.nextReq && this.nextReq <= nextReq) {
            return false;
        }

        // console.log(dT(), 'shedule req', delay);
        // console.trace();

        $timeout.cancel(this.nextReqPromise);
        if (delay > 0) {
            this.nextReqPromise = $timeout(this.performSheduledRequest.bind(this), delay || 0);
        } else {
            setZeroTimeout(this.performSheduledRequest.bind(this))
        }

        this.nextReq = nextReq;
    };

    MtpNetworker.prototype.ackMessage = function (msgID) {
        // console.log('ack message', msgID);
        this.pendingAcks.push(msgID);
        this.sheduleRequest(30000);
    };

    MtpNetworker.prototype.reqResendMessage = function (msgID) {
        console.log(dT(), 'Req resend', msgID);
        this.pendingResends.push(msgID);
        this.sheduleRequest(100);
    };

    MtpNetworker.prototype.cleanupSent = function () {
        var self = this;
        var notEmpty = false;
        // console.log('clean start', this.dcID/*, this.sentMessages*/);
        angular.forEach(this.sentMessages, function(message, msgID) {
            // console.log('clean iter', msgID, message);
            if (message.notContentRelated && self.pendingMessages[msgID] === undefined) {
                // console.log('clean notContentRelated', msgID);
                delete self.sentMessages[msgID];
            }
            else if (message.container) {
                for (var i = 0; i < message.inner.length; i++) {
                    if (self.sentMessages[message.inner[i]] !== undefined) {
                        // console.log('clean failed, found', msgID, message.inner[i], self.sentMessages[message.inner[i]].seq_no);
                        notEmpty = true;
                        return;
                    }
                }
                // console.log('clean container', msgID);
                delete self.sentMessages[msgID];
            } else {
                notEmpty = true;
            }
        });

        return !notEmpty;
    };


    MtpNetworker.prototype.processMessageAck = function (messageID) {
        var sentMessage = this.sentMessages[messageID];
        if (sentMessage && !sentMessage.acked) {
            delete sentMessage.body;
            sentMessage.acked = true;

            return true;
        }

        return false;
    };

    MtpNetworker.prototype.processError = function (rawError) {
        var matches = (rawError.error_message || '').match(/^([A-Z_0-9]+\b)(: (.+))?/) || [];
        rawError.error_code = uintToInt(rawError.error_code);

        return  {
            code: !rawError.error_code || rawError.error_code <= 0 ? 500 : rawError.error_code,
            type: matches[1] || 'UNKNOWN',
            description: matches[3] || ('CODE#' + rawError.error_code + ' ' + rawError.error_message),
            originalError: rawError
        };
    };


    MtpNetworker.prototype.processMessage = function (message, messageID, sessionID) {
        // console.log('process message', message, messageID, sessionID);
        switch (message._) {
            case 'msg_container':
                var len = message.messages.length;
                for (var i = 0; i < len; i++) {
                    this.processMessage(message.messages[i], messageID, sessionID);
                }
                break;

            case 'bad_server_salt':
                console.log(dT(), 'Bad server salt', message);
                var sentMessage = this.sentMessages[message.bad_msg_id];
                if (!sentMessage || sentMessage.seq_no != message.bad_msg_seqno) {
                    console.log(message.bad_msg_id, message.bad_msg_seqno);
                    throw new Error('Bad server salt for invalid message');
                }

                this.applyServerSalt(message.new_server_salt);
                this.pushResend(message.bad_msg_id);
                this.ackMessage(messageID);
                break;

            case 'bad_msg_notification':
                console.log(dT(), 'Bad msg notification', message);
                var sentMessage = this.sentMessages[message.bad_msg_id];
                if (!sentMessage || sentMessage.seq_no != message.bad_msg_seqno) {
                    console.log(message.bad_msg_id, message.bad_msg_seqno);
                    throw new Error('Bad msg notification for invalid message');
                }

                if (message.error_code == 16 || message.error_code == 17) {
                    if (_MtpTimeManager.applyServerTime(
                            bigStringInt(messageID).shiftRight(32).toString(10)
                        )) {
                        console.log(dT(), 'Update session');
                        this.updateSession();
                    }
                    var badMessage = this.updateSentMessage(message.bad_msg_id);
                    this.pushResend(badMessage.msg_id);
                    this.ackMessage(messageID);
                }
                break;

            case 'message':
                this.serverMessages.push(message.msg_id);
                this.processMessage(message.body, message.msg_id, sessionID);
                break;

            case 'new_session_created':
                this.ackMessage(messageID);

                this.processMessageAck(message.first_msg_id);
                this.applyServerSalt(message.server_salt);

                var self = this;
                _Storage.get('dc').then(function (baseDcID) {
                    if (baseDcID == self.dcID && !self.upload && updatesProcessor) {
                        updatesProcessor(message);
                    }
                });
                break;

            case 'msgs_ack':
                for (var i = 0; i < message.msg_ids.length; i++) {
                    this.processMessageAck(message.msg_ids[i]);
                }
                break;

            case 'msg_detailed_info':
                if (!this.sentMessages[message.msg_id]) {
                    this.ackMessage(message.answer_msg_id);
                    break;
                }
            case 'msg_new_detailed_info':
                // this.ackMessage(message.answer_msg_id);
                this.reqResendMessage(message.answer_msg_id);
                break;

            case 'msgs_state_info':
                this.ackMessage(message.answer_msg_id);
                if (this.lastResendReq && this.lastResendReq.req_msg_id == message.req_msg_id && this.pendingResends.length) {
                    var i, badMsgID, pos;
                    for (i = 0; i < this.lastResendReq.resend_msg_ids.length; i++) {
                        badMsgID = this.lastResendReq.resend_msg_ids[i];
                        pos = this.pendingResends.indexOf(badMsgID);
                        if (pos != -1) {
                            this.pendingResends.splice(pos, 1);
                        }
                    }
                }
                break;

            case 'rpc_result':
                this.ackMessage(messageID);

                var sentMessageID = message.req_msg_id,
                    sentMessage = this.sentMessages[sentMessageID];

                this.processMessageAck(sentMessageID);
                if (sentMessage) {
                    var deferred = sentMessage.deferred;
                    if (message.result._ == 'rpc_error') {
                        var error = this.processError(message.result);
                        console.log(dT(), 'Rpc error', error)
                        if (deferred) {
                            deferred.reject(error)
                        }
                    } else {
                        if (deferred) {
                            if (Config.Modes.debug) {
                                console.log(dT(), 'Rpc response', message.result);
                            } else {
                                var dRes = message.result._;
                                if (!dRes) {
                                    if (message.result.length > 5) {
                                        dRes = '[..' + message.result.length + '..]';
                                    } else {
                                        dRes = message.result;
                                    }
                                }
                                console.log(dT(), 'Rpc response', dRes);
                            }
                            sentMessage.deferred.resolve(message.result);
                        }
                        if (sentMessage.isAPI) {
                            this.connectionInited = true;
                        }
                    }

                    delete this.sentMessages[sentMessageID];
                }
                break;

            default:
                this.ackMessage(messageID);

                // console.log('Update', message);
                if (updatesProcessor) {
                    updatesProcessor(message);
                }
                break;

        }
    };

    function startAll() {
        if (akStopped) {
            akStopped = false;
            updatesProcessor({_: 'new_session_created'});
        }
    }

    function stopAll() {
        akStopped = true;
    }

    return {
        getNetworker: function (dcID, authKey, serverSalt, options) {
            return new MtpNetworker(dcID, authKey, serverSalt, options);
        },
        setUpdatesProcessor: function (callback) {
            updatesProcessor = callback;
        },
        stopAll: stopAll,
        startAll: startAll
    };
})();
var _MtpSingleInstanceService = (function () {
    var instanceID = nextRandomInt(0xFFFFFFFF);
    var started = false;
    var masterInstance  = false;
    var deactivatePromise = false;
    var deactivated = false;

    function start() {
        if (!started && !Config.Navigator.mobile && !Config.Modes.packed) {
            started = true;

            _IdleManager.start();

            $rootScope.$watch('idle.isIDLE', checkInstance);
            $interval(checkInstance, 5000);
            checkInstance();

            try {
                $(window).on('beforeunload', clearInstance);
            } catch (e) {};
        }
    }

    function clearInstance () {
        _Storage.remove(masterInstance ? 'xt_instance' : 'xt_idle_instance');
    }

    function deactivateInstance () {
        if (masterInstance || deactivated) {
            return false;
        }
        console.log(dT(), 'deactivate');
        deactivatePromise = false;
        deactivated = true;
        clearInstance();
        $modalStack.dismissAll();

        document.title = _('inactive_tab_title_raw');

        var inactivePageCompiled = $compile('<ng-include src="\'partials/desktop/inactive.html\'"></ng-include>');

        var scope = $rootScope.$new(true);
        scope.close = function () {
            _AppRuntimeManager.close();
        };
        scope.reload = function () {
            _AppRuntimeManager.reload();
        };
        inactivePageCompiled(scope, function (clonedElement) {
            $('.page_wrap').hide();
            $(clonedElement).appendTo($('body'));
        });
        $rootScope.idle.deactivated = true;
    }

    function checkInstance() {
        if (deactivated) {
            return false;
        }
        var time = tsNow();
        var idle = $rootScope.idle && $rootScope.idle.isIDLE;
        var newInstance = {id: instanceID, idle: idle, time: time};

        _Storage.get('xt_instance', 'xt_idle_instance').then(function (result) {
            var curInstance = result[0],
                idleInstance = result[1];

            // console.log(dT(), 'check instance', newInstance, curInstance, idleInstance);
            if (!idle ||
                !curInstance ||
                curInstance.id == instanceID ||
                curInstance.time < time - 60000) {

                if (idleInstance &&
                    idleInstance.id == instanceID) {
                    _Storage.remove('xt_idle_instance');
                }
                _Storage.set({xt_instance: newInstance});
                if (!masterInstance) {
                    _MtpNetworkerFactory.startAll();
                    console.warn(dT(), 'now master instance', newInstance);
                }
                masterInstance = true;
                if (deactivatePromise) {
                    $timeout.cancel(deactivatePromise);
                    deactivatePromise = false;
                }
            } else {
                _Storage.set({xt_idle_instance: newInstance});
                if (masterInstance) {
                    _MtpNetworkerFactory.stopAll();
                    console.warn(dT(), 'now idle instance', newInstance);
                    if (!deactivatePromise) {
                        deactivatePromise = $timeout(deactivateInstance, 30000);
                    }
                }
                masterInstance = false;
            }
        });
    }

    return {
        start: start
    }
})();
var _MtpApiManager = (function () {
    var cachedNetworkers = {},
        cachedUploadNetworkers = {},
        cachedExportPromise = {},
        baseDcID = false;

    var telegramMeNotified;

    _MtpSingleInstanceService.start();

    _Storage.get('dc').then(function (dcID) {
        if (dcID) {
            baseDcID = dcID;
        }
    });

    function telegramMeNotify(newValue) {
        if (telegramMeNotified !== newValue) {
            telegramMeNotified = newValue;
            _TelegramMeWebService.setAuthorized(telegramMeNotified);
        }
    }

    function mtpSetUserAuth(dcID, userAuth) {
        var fullUserAuth = angular.extend({dcID: dcID}, userAuth);
        _Storage.set({
            dc: dcID,
            user_auth: fullUserAuth
        });
        telegramMeNotify(true);
        $rootScope.$broadcast('user_auth', fullUserAuth);

        baseDcID = dcID;
    }

    function mtpLogOut() {
        var storageKeys = [];
        for (var dcID = 1; dcID <= 5; dcID++) {
            storageKeys.push('dc' + dcID + '_auth_key');
        }
        return _Storage.get.apply(_Storage, storageKeys).then(function (storageResult) {
            var logoutPromises = [];
            for (var i = 0; i < storageResult.length; i++) {
                if (storageResult[i]) {
                    logoutPromises.push(mtpInvokeApi('auth.logOut', {}, {dcID: i + 1}));
                }
            }
            return $q.all(logoutPromises).then(function () {
                _Storage.remove('dc', 'user_auth');
                baseDcID = false;
                telegramMeNotify(false);
            }, function (error) {
                _Storage.remove.apply(storageKeys);
                _Storage.remove('dc', 'user_auth');
                baseDcID = false;
                error.handled = true;
                telegramMeNotify(false);
            });
        });
    }

    function mtpGetNetworker(dcID, options) {
        options = options || {};

        var cache = (options.fileUpload || options.fileDownload)
            ? cachedUploadNetworkers
            : cachedNetworkers;
        if (!dcID) {
            throw new Exception('get Networker without dcID');
        }

        if (cache[dcID] !== undefined) {
            return _qSync.when(cache[dcID]);
        }

        var akk = 'dc' + dcID + '_auth_key',
            ssk = 'dc' + dcID + '_server_salt';

        return _Storage.get(akk, ssk).then(function (result) {

            if (cache[dcID] !== undefined) {
                return cache[dcID];
            }

            var authKeyHex = result[0],
                serverSaltHex = result[1];
            // console.log('ass', dcID, authKeyHex, serverSaltHex);
            if (authKeyHex && authKeyHex.length == 512) {
                var authKey = bytesFromHex(authKeyHex);
                var serverSalt = bytesFromHex(serverSaltHex);

                return cache[dcID] = _MtpNetworkerFactory.getNetworker(dcID, authKey, serverSalt, options);
            }

            if (!options.createNetworker) {
                return $q.reject({type: 'AUTH_KEY_EMPTY', code: 401});
            }

            return _MtpAuthorizer.auth(dcID).then(function (auth) {
                var storeObj = {};
                storeObj[akk] = bytesToHex(auth.authKey);
                storeObj[ssk] = bytesToHex(auth.serverSalt);
                _Storage.set(storeObj);

                return cache[dcID] = _MtpNetworkerFactory.getNetworker(dcID, auth.authKey, auth.serverSalt, options);
            }, function (error) {
                console.log('Get networker error', error, error.stack);
                return $q.reject(error);
            });
        });
    };

    function mtpInvokeApi(method, params, options) {
        options = options || {};

        var deferred = $q.defer(),
            rejectPromise = function (error) {
                if (!error) {
                    error = {type: 'ERROR_EMPTY'};
                } else if (!angular.isObject(error)) {
                    error = {message: error};
                }
                deferred.reject(error);

                if (!options.noErrorBox) {
                    error.input = method;
                    error.stack = error.originalError && error.originalError.stack || error.stack || (new Error()).stack;
                    setTimeout(function () {
                        if (!error.handled) {
                            if (error.code == 401) {
                                mtpLogOut();
                            } else {
                                _ErrorService.show({error: error});
                            }
                            error.handled = true;
                        }
                    }, 100);
                }
            },
            dcID,
            networkerPromise;

        var cachedNetworker;
        var stack = (new Error()).stack;
        if (!stack) {
            try {
                window.unexistingFunction();
            } catch (e) {
                stack = e.stack || '';
            }
        }
        var performRequest = function (networker) {
            return (cachedNetworker = networker).wrapApiCall(method, params, options).then(
                function (result) {
                    deferred.resolve(result);
                },
                function (error) {
                    console.error(dT(), 'Error', error.code, error.type, baseDcID, dcID);
                    if (error.code == 401 && baseDcID == dcID) {
                        _Storage.remove('dc', 'user_auth');
                        telegramMeNotify(false);
                        rejectPromise(error);
                    }
                    else if (error.code == 401 && baseDcID && dcID != baseDcID) {
                        if (cachedExportPromise[dcID] === undefined) {
                            var exportDeferred = $q.defer();

                            mtpInvokeApi('auth.exportAuthorization', {dc_id: dcID}, {noErrorBox: true}).then(function (exportedAuth) {
                                mtpInvokeApi('auth.importAuthorization', {
                                    id: exportedAuth.id,
                                    bytes: exportedAuth.bytes
                                }, {dcID: dcID, noErrorBox: true}).then(function () {
                                    exportDeferred.resolve();
                                }, function (e) {
                                    exportDeferred.reject(e);
                                })
                            }, function (e) {
                                exportDeferred.reject(e)
                            });

                            cachedExportPromise[dcID] = exportDeferred.promise;
                        }

                        cachedExportPromise[dcID].then(function () {
                            (cachedNetworker = networker).wrapApiCall(method, params, options).then(function (result) {
                                deferred.resolve(result);
                            }, rejectPromise);
                        }, rejectPromise);
                    }
                    else if (error.code == 303) {
                        var newDcID = error.type.match(/^(PHONE_MIGRATE_|NETWORK_MIGRATE_|USER_MIGRATE_)(\d+)/)[2];
                        if (newDcID != dcID) {
                            if (options.dcID) {
                                options.dcID = newDcID;
                            } else {
                                _Storage.set({dc: baseDcID = newDcID});
                            }

                            mtpGetNetworker(newDcID, options).then(function (networker) {
                                networker.wrapApiCall(method, params, options).then(function (result) {
                                    deferred.resolve(result);
                                }, rejectPromise);
                            }, rejectPromise);
                        }
                    }
                    else if (!options.rawError && error.code == 420) {
                        var waitTime = error.type.match(/^FLOOD_WAIT_(\d+)/)[1] || 10;
                        if (waitTime > (options.timeout || 60)) {
                            return rejectPromise(error);
                        }
                        setTimeout(function () {
                            performRequest(cachedNetworker);
                        }, waitTime * 1000);
                    }
                    else if (!options.rawError && (error.code == 500 || error.type == 'MSG_WAIT_FAILED')) {
                        var now = tsNow();
                        if (options.stopTime) {
                            if (now >= options.stopTime) {
                                return rejectPromise(error);
                            }
                        } else {
                            options.stopTime = now + (options.timeout !== undefined ? options.timeout : 10) * 1000;
                        }
                        options.waitTime = options.waitTime ? Math.min(60, options.waitTime * 1.5) : 1;
                        setTimeout(function () {
                            performRequest(cachedNetworker);
                        }, options.waitTime * 1000);
                    }
                    else {
                        rejectPromise(error);
                    }
                });
        };

        if (dcID = (options.dcID || baseDcID)) {
            mtpGetNetworker(dcID, options).then(performRequest, rejectPromise);
        } else {
            _Storage.get('dc').then(function (baseDcID) {
                mtpGetNetworker(dcID = baseDcID || 2, options).then(performRequest, rejectPromise);
            });
        }

        return deferred.promise;
    };

    function mtpGetUserID() {
        return _Storage.get('user_auth').then(function (auth) {
            telegramMeNotify(auth && auth.id > 0 || false);
            return auth.id || 0;
        });
    }

    function getBaseDcID() {
        return baseDcID || false;
    }

    return {
        getBaseDcID: getBaseDcID,
        getUserID: mtpGetUserID,
        invokeApi: mtpInvokeApi,
        getNetworker: mtpGetNetworker,
        setUserAuth: mtpSetUserAuth,
        logOut: mtpLogOut
    }
})();
var _MtpApiFileManager = (function () {
    var cachedFs = false;
    var cachedFsPromise = false;
    var cachedSavePromises = {};
    var cachedDownloadPromises = {};
    var cachedDownloads = {};

    var downloadPulls = {};
    var downloadActives = {};

    function downloadRequest(dcID, cb, activeDelta) {
        if (downloadPulls[dcID] === undefined) {
            downloadPulls[dcID] = [];
            downloadActives[dcID] = 0
        }
        var downloadPull = downloadPulls[dcID];
        var deferred = $q.defer();
        downloadPull.push({cb: cb, deferred: deferred, activeDelta: activeDelta});
        setZeroTimeout(function () {
            downloadCheck(dcID);
        });

        return deferred.promise;
    };

    var index = 0;

    function downloadCheck(dcID) {
        var downloadPull = downloadPulls[dcID];
        var downloadLimit = dcID == 'upload' ? 11 : 5;

        if (downloadActives[dcID] >= downloadLimit || !downloadPull || !downloadPull.length) {
            return false;
        }

        var data = downloadPull.shift(),
            activeDelta = data.activeDelta || 1;

        downloadActives[dcID] += activeDelta;

        var a = index++;
        data.cb()
            .then(function (result) {
                downloadActives[dcID] -= activeDelta;
                downloadCheck(dcID);

                data.deferred.resolve(result);

            }, function (error) {
                downloadActives[dcID] -= activeDelta;
                downloadCheck(dcID);

                data.deferred.reject(error);
            })
    };

    function getFileName(location) {
        switch (location._) {
            case 'inputDocumentFileLocation':
                var fileName = (location.file_name || '').split('.', 2);
                var ext = fileName[1] || '';
                if (location.sticker && !WebpManager.isWebpSupported()) {
                    ext += '.png';
                }
                return fileName[0] + '_' + location.id + '.' + ext;

            default:
                if (!location.volume_id) {
                    console.trace('Empty location', location);
                }
                var ext = 'jpg';
                if (location.sticker) {
                    ext = WebpManager.isWebpSupported() ? 'webp' : 'png';
                }
                return location.volume_id + '_' + location.local_id + '_' + location.secret + '.' + ext;
        }
    };

    function getTempFileName(file) {
        var size = file.size || -1;
        var random = nextRandomInt(0xFFFFFFFF);
        return '_temp' + random + '_' + size;
    };

    function getCachedFile (location) {
        if (!location) {
            return false;
        }
        var fileName = getFileName(location);

        return cachedDownloads[fileName] || false;
    }

    function getFileStorage () {
        if (!Config.Modes.memory_only) {
            if (_TmpfsFileStorage.isAvailable()) {
                return _TmpfsFileStorage;
            }
            if (_IdbFileStorage.isAvailable()) {
                return _IdbFileStorage;
            }
        }
        return _MemoryFileStorage;
    }

    function saveSmallFile (location, bytes) {
        var fileName = getFileName(location),
            mimeType = 'image/jpeg';

        if (!cachedSavePromises[fileName]) {
            cachedSavePromises[fileName] = getFileStorage().saveFile(fileName, bytes).then(function (blob) {
                return cachedDownloads[fileName] = blob;
            }, function (error) {
                delete cachedSavePromises[fileName];
            });
        }
        return cachedSavePromises[fileName];
    }

    function downloadSmallFile(location) {
        if (!_FileManager.isAvailable()) {
            return $q.reject({type: 'BROWSER_BLOB_NOT_SUPPORTED'});
        }
        var fileName = getFileName(location),
            mimeType = location.sticker ? 'image/webp' : 'image/jpeg',
            cachedPromise = cachedSavePromises[fileName] || cachedDownloadPromises[fileName];

        if (cachedPromise) {
            return cachedPromise;
        }

        var fileStorage = getFileStorage();

        return cachedDownloadPromises[fileName] = fileStorage.getFile(fileName).then(function (blob) {
            return cachedDownloads[fileName] = blob;
        }, function () {
            var downloadPromise = downloadRequest(location.dc_id, function () {
                var inputLocation = location;
                if (!inputLocation._ || inputLocation._ == 'fileLocation') {
                    inputLocation = angular.extend({}, location, {_: 'inputFileLocation'});
                }
                // console.log('next small promise');
                return _MtpApiManager.invokeApi('upload.getFile', {
                    location: inputLocation,
                    offset: 0,
                    limit: 1024 * 1024
                }, {
                    dcID: location.dc_id,
                    fileDownload: true,
                    createNetworker: true,
                    noErrorBox: true
                });
            });

            var processDownloaded = function (bytes) {
                if (!location.sticker || WebpManager.isWebpSupported()) {
                    return _qSync.when(bytes);
                }
                return WebpManager.getPngBlobFromWebp(bytes);
            };

            return fileStorage.getFileWriter(fileName, mimeType).then(function (fileWriter) {
                return downloadPromise.then(function (result) {
                    return processDownloaded(result.bytes).then(function (proccessedResult) {
                        return _FileManager.write(fileWriter, proccessedResult).then(function () {
                            return cachedDownloads[fileName] = fileWriter.finalize();
                        });
                    })
                });
            });
        });
    }

    function getDownloadedFile(location, size) {
        var fileStorage = getFileStorage(),
            fileName = getFileName(location);

        return fileStorage.getFile(fileName, size);
    }

    function downloadFile (dcID, location, size, options) {
        if (!_FileManager.isAvailable()) {
            return $q.reject({type: 'BROWSER_BLOB_NOT_SUPPORTED'});
        }

        options = options || {};

        var processSticker = false;
        if (location.sticker && !WebpManager.isWebpSupported()) {
            if (options.toFileEntry || size > 524288) {
                delete location.sticker;
            } else {
                processSticker = true;
                options.mime = 'image/png';
            }
        }

        // console.log(dT(), 'Dload file', dcID, location, size);
        var fileName = getFileName(location),
            toFileEntry = options.toFileEntry || null,
            cachedPromise = cachedSavePromises[fileName] || cachedDownloadPromises[fileName];

        var fileStorage = getFileStorage();

        // console.log(dT(), 'fs', fileStorage.name, fileName, cachedPromise);

        if (cachedPromise) {
            if (toFileEntry) {
                return cachedPromise.then(function (blob) {
                    return _FileManager.copy(blob, toFileEntry);
                })
            }
            return cachedPromise;
        }

        var deferred = $q.defer(),
            canceled = false,
            resolved = false,
            mimeType = options.mime || 'image/jpeg',
            cacheFileWriter,
            errorHandler = function (error) {
                deferred.reject(error);
                errorHandler = angular.noop;
                if (cacheFileWriter &&
                    (!error || error.type != 'DOWNLOAD_CANCELED')) {
                    cacheFileWriter.truncate(0);
                }
            };


        fileStorage.getFile(fileName, size).then(function (blob) {
            if (toFileEntry) {
                _FileManager.copy(blob, toFileEntry).then(function () {
                    deferred.resolve();
                }, errorHandler);
            } else {
                deferred.resolve(cachedDownloads[fileName] = blob);
            }
        }, function () {
            var fileWriterPromise = toFileEntry ? _FileManager.getFileWriter(toFileEntry) : fileStorage.getFileWriter(fileName, mimeType);

            var processDownloaded = function (bytes) {
                if (!processSticker) {
                    return _qSync.when(bytes);
                }
                return WebpManager.getPngBlobFromWebp(bytes);
            };

            fileWriterPromise.then(function (fileWriter) {
                cacheFileWriter = fileWriter;
                var limit = 524288,
                    offset,
                    startOffset = 0,
                    writeFilePromise = $q.when(),
                    writeFileDeferred;
                if (fileWriter.length) {
                    startOffset = fileWriter.length;
                    if (startOffset >= size) {
                        if (toFileEntry) {
                            deferred.resolve();
                        } else {
                            deferred.resolve(cachedDownloads[fileName] = fileWriter.finalize());
                        }
                        return;
                    }
                    fileWriter.seek(startOffset);
                    deferred.notify({done: startOffset, total: size});
                }
                for (offset = startOffset; offset < size; offset += limit) {
                    writeFileDeferred = $q.defer();
                    (function (isFinal, offset, writeFileDeferred, writeFilePromise) {
                        return downloadRequest(dcID, function () {
                            if (canceled) {
                                return $q.when();
                            }
                            return _MtpApiManager.invokeApi('upload.getFile', {
                                location: location,
                                offset: offset,
                                limit: limit
                            }, {
                                dcID: dcID,
                                fileDownload: true,
                                singleInRequest: window.safari !== undefined,
                                createNetworker: true
                            });
                        }, 2).then(function (result) {
                            writeFilePromise.then(function () {
                                if (canceled) {
                                    return $q.when();
                                }
                                return processDownloaded(result.bytes).then(function (processedResult) {
                                    return _FileManager.write(fileWriter, processedResult).then(function () {
                                        writeFileDeferred.resolve();
                                    }, errorHandler).then(function () {
                                        if (isFinal) {
                                            resolved = true;
                                            if (toFileEntry) {
                                                deferred.resolve();
                                            } else {
                                                deferred.resolve(cachedDownloads[fileName] = fileWriter.finalize());
                                            }
                                        } else {
                                            deferred.notify({done: offset + limit, total: size});
                                        };
                                    });
                                })
                            });
                        });
                    })(offset + limit >= size, offset, writeFileDeferred, writeFilePromise);
                    writeFilePromise = writeFileDeferred.promise;
                }
            });
        });

        deferred.promise.cancel = function () {
            if (!canceled && !resolved) {
                canceled = true;
                delete cachedDownloadPromises[fileName];
                errorHandler({type: 'DOWNLOAD_CANCELED'});
            }
        }

        if (!toFileEntry) {
            cachedDownloadPromises[fileName] = deferred.promise;
        }

        return deferred.promise;
    }

    function uploadFile (file) {
        var fileSize    = file.size,
            isBigFile   = fileSize >= 10485760,
            canceled    = false,
            resolved    = false,
            doneParts   = 0,
            partSize    = 262144, // 256 Kb
            activeDelta = 2;

        if(!fileSize) {
            return $q.reject({type: 'EMPTY_FILE'});
        }

        if (fileSize > 67108864) {
            partSize = 524288;
            activeDelta = 4;
        }
        else if (fileSize < 102400) {
            partSize = 32768;
            activeDelta = 1;
        }
        var totalParts = Math.ceil(fileSize / partSize);

        if (totalParts > 3000) {
            return $q.reject({type: 'FILE_TOO_BIG'});
        }

        var fileID = [nextRandomInt(0xFFFFFFFF), nextRandomInt(0xFFFFFFFF)],
            deferred = $q.defer(),
            errorHandler = function (error) {
                // console.error('Up Error', error);
                deferred.reject(error);
                canceled = true;
                errorHandler = angular.noop;
            },
            part = 0,
            offset,
            resultInputFile = {
                _: isBigFile ? 'inputFileBig' : 'inputFile',
                id: fileID,
                parts: totalParts,
                name: file.name,
                md5_checksum: ''
            };


        for (offset = 0; offset < fileSize; offset += partSize) {
            (function (offset, part) {
                downloadRequest('upload', function () {
                    var uploadDeferred = $q.defer();

                    var reader = new FileReader();
                    var blob = file.slice(offset, offset + partSize);

                    reader.onloadend = function (e) {
                        if (canceled) {
                            uploadDeferred.reject();
                            return;
                        }
                        if (e.target.readyState != FileReader.DONE) {
                            return;
                        }
                        _MtpApiManager.invokeApi(isBigFile ? 'upload.saveBigFilePart' : 'upload.saveFilePart', {
                            file_id: fileID,
                            file_part: part,
                            file_total_parts: totalParts,
                            bytes: e.target.result
                        }, {
                            startMaxLength: partSize + 256,
                            fileUpload: true,
                            singleInRequest: true
                        }).then(function (result) {
                            doneParts++;
                            uploadDeferred.resolve();
                            if (doneParts >= totalParts) {
                                deferred.resolve(resultInputFile);
                                resolved = true;
                            } else {
                                console.log(dT(), 'Progress', doneParts * partSize / fileSize);
                                deferred.notify({done: doneParts * partSize, total: fileSize});
                            }
                        }, errorHandler);
                    };

                    reader.readAsArrayBuffer(blob);

                    return uploadDeferred.promise;
                }, activeDelta);
            })(offset, part++);
        }

        deferred.promise.cancel = function () {
            console.log('cancel upload', canceled, resolved);
            if (!canceled && !resolved) {
                canceled = true;
                errorHandler({type: 'UPLOAD_CANCELED'});
            }
        }

        return deferred.promise;
    }

    return {
        getCachedFile: getCachedFile,
        getDownloadedFile: getDownloadedFile,
        getFileName: getFileName,
        downloadFile: downloadFile,
        downloadSmallFile: downloadSmallFile,
        saveSmallFile: saveSmallFile,
        uploadFile: uploadFile
    };
})();
var _AppPeersManager = (function () {
    function getInputPeer (peerString) {
        var firstChar = peerString.charAt(0),
            peerParams = peerString.substr(1).split('_');

        if (firstChar == 'u') {
            _AppUsersManager.saveUserAccess(peerParams[0], peerParams[1]);
            return {
                _: 'inputPeerUser',
                user_id: peerParams[0],
                access_hash: peerParams[1]
            };
        }
        else if (firstChar == 'c' || firstChar == 's') {
            _AppChatsManager.saveChannelAccess(peerParams[0], peerParams[1]);
            if (firstChar == 's') {
                _AppChatsManager.saveIsMegagroup(peerParams[0]);
            }
            return {
                _: 'inputPeerChannel',
                channel_id: peerParams[0],
                access_hash: peerParams[1] || 0
            };
        }
        else {
            return {
                _: 'inputPeerChat',
                chat_id: peerParams[0]
            }
        }
    }

    function getInputPeerByID (peerID) {
        if (!peerID) {
            return {_: 'inputPeerEmpty'};
        }
        if (peerID < 0) {
            var chatID = -peerID;
            if (!_AppChatsManager.isChannel(chatID)) {
                return {
                    _: 'inputPeerChat',
                    chat_id: chatID
                };
            } else {
                return {
                    _: 'inputPeerChannel',
                    channel_id: chatID,
                    access_hash: _AppChatsManager.getChat(chatID).access_hash || 0
                }
            }
        }
        return {
            _: 'inputPeerUser',
            user_id: peerID,
            access_hash: _AppUsersManager.getUser(peerID).access_hash || 0
        };
    }

    function getPeerSearchText (peerID) {
        var text;
        if (peerID > 0) {
            text = '%pu ' + _AppUsersManager.getUserSearchText(peerID);
        } else if (peerID < 0) {
            var chat = _AppChatsManager.getChat(-peerID);
            text = '%pg ' + (chat.title || '');
        }
        return text;
    }

    function getPeerString (peerID) {
        if (peerID > 0) {
            return _AppUsersManager.getUserString(peerID);
        }
        return _AppChatsManager.getChatString(-peerID);
    }

    function getOutputPeer (peerID) {
        if (peerID > 0) {
            return {_: 'peerUser', user_id: peerID};
        }
        var chatID = -peerID;
        if (_AppChatsManager.isChannel(chatID)) {
            return {_: 'peerChannel', channel_id: chatID}
        }
        return {_: 'peerChat', chat_id: chatID}
    }

    function resolveUsername (username) {
        var searchUserName = SearchIndexManager.cleanUsername(username);
        var foundUserID, foundChatID, foundPeerID, foundUsername;
        if (foundUserID = _AppUsersManager.resolveUsername(searchUserName)) {
            foundUsername = _AppUsersManager.getUser(foundUserID).username;
            if (SearchIndexManager.cleanUsername(foundUsername) == searchUserName) {
                return _qSync.when(foundUserID);
            }
        }
        if (foundChatID = _AppChatsManager.resolveUsername(searchUserName)) {
            foundUsername = _AppChatsManager.getChat(foundChatID).username;
            if (SearchIndexManager.cleanUsername(foundUsername) == searchUserName) {
                return _qSync.when(-foundChatID);
            }
        }

        return MtpApiManager.invokeApi('contacts.resolveUsername', {username: username}).then(function (resolveResult) {
            _AppUsersManager.saveApiUsers(resolveResult.users);
            _AppChatsManager.saveApiChats(resolveResult.chats);
            return getPeerID(resolveResult.peer);
        });
    }

    function resolveInlineMention (username) {
        return resolveUsername(username).then(function (peerID) {
            if (peerID > 0) {
                var bot = _AppUsersManager.getUser(peerID);
                if (bot.pFlags.bot && bot.bot_inline_placeholder !== undefined) {
                    return _qSync.when({
                        id: peerID,
                        placeholder: bot.bot_inline_placeholder
                    });
                }
            }
            return $q.reject();
        }, function (error) {
            error.handled = true;
            return $q.reject(error);
        });
    }

    function getPeerID (peerString) {
        if (angular.isObject(peerString)) {
            return peerString.user_id
                ? peerString.user_id
                : -(peerString.channel_id || peerString.chat_id);
        }
        var isUser = peerString.charAt(0) == 'u',
            peerParams = peerString.substr(1).split('_');

        return isUser ? peerParams[0] : -peerParams[0] || 0;
    }

    function getPeer (peerID) {
        return peerID > 0
            ? _AppUsersManager.getUser(peerID)
            : _AppChatsManager.getChat(-peerID);
    }

    function getPeerPhoto (peerID) {
        return peerID > 0
            ? _AppUsersManager.getUserPhoto(peerID)
            : _AppChatsManager.getChatPhoto(-peerID)
    }

    function isChannel (peerID) {
        return (peerID < 0) && _AppChatsManager.isChannel(-peerID);
    }

    function isMegagroup (peerID) {
        return (peerID < 0) && _AppChatsManager.isMegagroup(-peerID);
    }

    function isBot (peerID) {
        return (peerID > 0) && _AppUsersManager.isBot(peerID);
    }

    return {
        getInputPeer: getInputPeer,
        getInputPeerByID: getInputPeerByID,
        getPeerSearchText: getPeerSearchText,
        getPeerString: getPeerString,
        getOutputPeer: getOutputPeer,
        getPeerID: getPeerID,
        getPeer: getPeer,
        getPeerPhoto: getPeerPhoto,
        resolveUsername: resolveUsername,
        resolveInlineMention: resolveInlineMention,
        isChannel: isChannel,
        isMegagroup: isMegagroup,
        isBot: isBot
    }
})();
var _AppChatsManager = (function () {
    var chats = {},
        usernames = {},
        channelAccess = {},
        megagroups = {},
        cachedPhotoLocations = {};

    function saveApiChats (apiChats) {
        angular.forEach(apiChats, saveApiChat);
    };

    function saveApiChat (apiChat) {
        if (!angular.isObject(apiChat)) {
            return;
        }
        // TODO
        //apiChat.rTitle = RichTextProcessor.wrapRichText(apiChat.title, {noLinks: true, noLinebreaks: true}) || _('chat_title_deleted');

        var titleWords = SearchIndexManager.cleanSearchText(apiChat.title || '').split(' ');
        var firstWord = titleWords.shift();
        var lastWord = titleWords.pop();
        apiChat.initials = firstWord.charAt(0) + (lastWord ? lastWord.charAt(0) : firstWord.charAt(1));

        apiChat.num = (Math.abs(apiChat.id >> 1) % 8) + 1;

        if (apiChat.pFlags === undefined) {
            apiChat.pFlags = {};
        }

        if (apiChat.username) {
            var searchUsername = SearchIndexManager.cleanUsername(apiChat.username);
            usernames[searchUsername] = apiChat.id;
        }

        if (chats[apiChat.id] === undefined) {
            chats[apiChat.id] = apiChat;
        } else {
            safeReplaceObject(chats[apiChat.id], apiChat);
            $rootScope.$broadcast('chat_update', apiChat.id);
        }

        if (cachedPhotoLocations[apiChat.id] !== undefined) {
            safeReplaceObject(cachedPhotoLocations[apiChat.id], apiChat && apiChat.photo && apiChat.photo.photo_small || {empty: true});
        }
    };

    function getChat (id) {
        return chats[id] || {id: id, deleted: true, access_hash: channelAccess[id]};
    }

    function hasRights (id, action) {
        if (chats[id] === undefined) {
            return false;
        }
        var chat = getChat(id);
        if (chat._ == 'chatForbidden' ||
            chat._ == 'channelForbidden' ||
            chat.pFlags.kicked ||
            chat.pFlags.left) {
            return false;
        }
        if (chat.pFlags.creator) {
            return true;
        }

        switch (action) {
            case 'send':
                if (chat._ == 'channel' &&
                    !chat.pFlags.megagroup &&
                    !chat.pFlags.editor) {
                    return false;
                }
                break;

            case 'edit_title':
            case 'edit_photo':
            case 'invite':
                if (chat._ == 'channel') {
                    if (chat.pFlags.megagroup) {
                        if (!chat.pFlags.editor) {
                            return false;
                        }
                    } else {
                        return false;
                    }
                } else {
                    if (chat.pFlags.admins_enabled &&
                        !chat.pFlags.admin) {
                        return false;
                    }
                }
                break;
        }
        return true;
    }

    function resolveUsername (username) {
        return usernames[username] || 0;
    }

    function saveChannelAccess (id, accessHash) {
        channelAccess[id] = accessHash;
    }

    function saveIsMegagroup (id) {
        megagroups[id] = true;
    }

    function isChannel (id) {
        var chat = chats[id];
        if (chat && (chat._ == 'channel' || chat._ == 'channelForbidden') ||
            channelAccess[id]) {
            return true;
        }
        return false;
    }

    function isMegagroup (id) {
        if (megagroups[id]) {
            return true;
        }
        var chat = chats[id];
        if (chat && chat._ == 'channel' && chat.pFlags.megagroup) {
            return true;
        }
        return false;
    }

    function getChatInput (id) {
        return id || 0;
    }

    function getChannelInput (id) {
        if (!id) {
            return {_: 'inputChannelEmpty'};
        }
        return {
            _: 'inputChannel',
            channel_id: id,
            access_hash: getChat(id).access_hash || channelAccess[id] || 0
        }
    }

    function hasChat (id) {
        return angular.isObject(chats[id]);
    }

    function getChatPhoto(id) {
        var chat = getChat(id);

        if (cachedPhotoLocations[id] === undefined) {
            cachedPhotoLocations[id] = chat && chat.photo && chat.photo.photo_small || {empty: true};
        }

        return {
            placeholder: 'img/placeholders/GroupAvatar' + Math.ceil(chat.num / 2) + '@2x.png',
            location: cachedPhotoLocations[id]
        };
    }

    function getChatString (id) {
        var chat = getChat(id);
        if (isChannel(id)) {
            return (isMegagroup(id) ? 's' : 'c') + id + '_' + chat.access_hash;
        }
        return 'g' + id;
    }

    function wrapForFull (id, fullChat) {
        var chatFull = angular.copy(fullChat),
            chat = getChat(id);

        if (chatFull.participants && chatFull.participants._ == 'chatParticipants') {
            MtpApiManager.getUserID().then(function (myID) {
                var isAdmin = chat.pFlags.creator || chat.pFlags.admins_enabled && chat.pFlags.admin;
                angular.forEach(chatFull.participants.participants, function(participant){
                    participant.canLeave = myID == participant.user_id;
                    participant.canKick = !participant.canLeave && (
                            chat.pFlags.creator ||
                            participant._ == 'chatParticipant' && (isAdmin || myID == participant.inviter_id)
                        );

                    // just for order by last seen
                    participant.user = _AppUsersManager.getUser(participant.user_id);
                });
            });
        }
        if (chatFull.participants && chatFull.participants._ == 'channelParticipants') {
            var isAdmin = chat.pFlags.creator || chat.pFlags.editor || chat.pFlags.moderator;
            angular.forEach(chatFull.participants.participants, function(participant) {
                participant.canLeave = !chat.pFlags.creator && participant._ == 'channelParticipantSelf';
                participant.canKick = isAdmin && participant._ == 'channelParticipant';

                // just for order by last seen
                participant.user = _AppUsersManager.getUser(participant.user_id);
            });
        }

        // TODO
        //if (chatFull.about) {
        //    chatFull.rAbout = RichTextProcessor.wrapRichText(chatFull.about, {noLinebreaks: true});
        //}

        chatFull.peerString = getChatString(id);
        chatFull.chat = chat;

        return chatFull;
    }

    function openChat (chatID, accessHash) {
        var scope = $rootScope.$new();
        scope.chatID = chatID;

        if (isChannel(chatID)) {
            var modalInstance = $modal.open({
                templateUrl: templateUrl('channel_modal'),
                controller: 'ChannelModalController',
                scope: scope,
                windowClass: 'chat_modal_window channel_modal_window mobile_modal'
            });
        } else {
            var modalInstance = $modal.open({
                templateUrl: templateUrl('chat_modal'),
                controller: 'ChatModalController',
                scope: scope,
                windowClass: 'chat_modal_window mobile_modal'
            });
        }
    }

    $rootScope.$on('apiUpdate', function (e, update) {
        // console.log('on apiUpdate', update);
        switch (update._) {
            case 'updateChannel':
                var channelID = update.channel_id;
                $rootScope.$broadcast('channel_settings', {channelID: channelID});
                break;
        }
    });

    return {
        saveApiChats: saveApiChats,
        saveApiChat: saveApiChat,
        getChat: getChat,
        isChannel: isChannel,
        isMegagroup: isMegagroup,
        hasRights: hasRights,
        saveChannelAccess: saveChannelAccess,
        saveIsMegagroup: saveIsMegagroup,
        getChatInput: getChatInput,
        getChannelInput: getChannelInput,
        getChatPhoto: getChatPhoto,
        getChatString: getChatString,
        resolveUsername: resolveUsername,
        hasChat: hasChat,
        wrapForFull: wrapForFull,
        openChat: openChat
    }
})();
var _AppMessagesManager = (function () {
    var messagesStorage = {};
    var messagesForHistory = {};
    var messagesForDialogs = {};
    var historiesStorage = {};
    var dialogsStorage = {count: null, dialogs: []};
    var pendingByRandomID = {};
    var pendingByMessageID = {};
    var pendingAfterMsgs = {};
    var sendFilePromise = $q.when();
    var tempID = -1;

    var dialogsIndex = SearchIndexManager.createIndex(),
        cachedResults = {query: false};

    var lastSearchFilter = {},
        lastSearchResults = [];

    var needSingleMessages = [],
        fetchSingleMessagesTimeout = false;

    var incrementedMessageViews = {},
        needIncrementMessageViews = [],
        incrementMessageViewsTimeout = false;

    var serverTimeOffset = 0,
        timestampNow = tsNow(true),
        midnightNoOffset = timestampNow - (timestampNow % 86400),
        midnightOffseted = new Date(),
        midnightOffset;

    _Storage.get('server_time_offset').then(function (to) {
        if (to) {
            serverTimeOffset = to;
        }
    });

    var maxSeenID = false;
    if (Config.Modes.packed) {
        _Storage.get('max_seen_msg').then(function (maxID) {
            maxSeenID = maxID || 0;
        });
    }


    var dateOrTimeFilter = $filter.call('dateOrTime');
    var fwdMessagesPluralize = __.pluralize('conversation_forwarded_X_messages');

    midnightOffseted.setHours(0);
    midnightOffseted.setMinutes(0);
    midnightOffseted.setSeconds(0);
    midnightOffset = midnightNoOffset - (Math.floor(+midnightOffseted / 1000));

    var allDialogsLoaded = false;
    var dialogsOffsetDate = 0;
    var dialogsNum = 0;

    var migratedFromTo = {};
    var migratedToFrom = {};

    function getConversations (query, offsetIndex, limit) {
        var curDialogStorage = dialogsStorage;
        var isSearch = angular.isString(query) && query.length;

        if (isSearch) {
            if (!limit || cachedResults.query !== query) {
                cachedResults.query = query;

                var results = SearchIndexManager.search(query, dialogsIndex);

                cachedResults.dialogs = [];
                angular.forEach(dialogsStorage.dialogs, function (dialog) {
                    if (results[dialog.peerID]) {
                        cachedResults.dialogs.push(dialog);
                    }
                });
                cachedResults.count = cachedResults.dialogs.length;
            }
            curDialogStorage = cachedResults;
        } else {
            cachedResults.query = false;
        }

        var offset = 0;
        if (offsetIndex > 0) {
            for (offset = 0; offset < curDialogStorage.dialogs.length; offset++) {
                if (offsetIndex > curDialogStorage.dialogs[offset].index) {
                    break;
                }
            }
        }

        limit = limit || 20;

        if (
            isSearch ||
            allDialogsLoaded ||
            curDialogStorage.dialogs.length >= offset + limit
        ) {
            return $q.when({
                dialogs: curDialogStorage.dialogs.slice(offset, offset + limit)
            });
        }

        return getTopMessages(limit).then(function () {
            offset = 0;
            if (offsetIndex > 0) {
                for (offset = 0; offset < curDialogStorage.dialogs.length; offset++) {
                    if (offsetIndex > curDialogStorage.dialogs[offset].index) {
                        break;
                    }
                }
            }
            return {
                dialogs: curDialogStorage.dialogs.slice(offset, offset + limit)
            }
        });
    }

    function getDialogByPeerID (peerID) {
        for (var i = 0; i < dialogsStorage.dialogs.length; i++) {
            if (dialogsStorage.dialogs[i].peerID == peerID) {
                return [dialogsStorage.dialogs[i], i];
            }
        }

        return [];
    }

    function saveChannelDialog (channelID, dialog) {
        var peerID = -channelID;
        var peerText = _AppPeersManager.getPeerSearchText(peerID);
        SearchIndexManager.indexObject(peerID, peerText, dialogsIndex);

        var isMegagroup = _AppChatsManager.isMegagroup(channelID);
        var mid = getFullMessageID(dialog.top_message, channelID);
        var message = getMessage(mid);
        var offsetDate = message.date;

        if (!isMegagroup) {
            mid = getFullMessageID(dialog.top_important_message, channelID);
            message = getMessage(mid);
            dialog.unread_count = dialog.unread_important_count;
        }
        dialog.top_message = mid;
        dialog.read_inbox_max_id = getFullMessageID(dialog.read_inbox_max_id, channelID);

        var topDate = message.date;
        var channel = _AppChatsManager.getChat(channelID);
        if (!topDate || channel.date && channel.date > topDate) {
            topDate = channel.date;
        }

        dialog.index = generateDialogIndex(topDate);
        dialog.peerID = peerID;

        pushDialogToStorage(dialog, offsetDate);

        // Because we saved message without dialog present
        if (message.mid && message.mid > dialog.read_inbox_max_id) {
            message.pFlags.unread = true;
        }

        if (historiesStorage[peerID] === undefined) {
            var historyStorage = {count: null, history: [mid], pending: []};
            historiesStorage[peerID] = historyStorage;
        }

        if (dialog.pts) {
            _ApiUpdatesManager.addChannelState(channelID, dialog.pts);
        }
    }

    function getTopMessages (limit) {
        var first = true;
        var dialogs = dialogsStorage.dialogs;
        var offsetDate = 0;
        var offsetID = 0;
        var offsetPeerID = 0;
        if (dialogsOffsetDate) {
            offsetDate = dialogsOffsetDate + serverTimeOffset;
        }
        return _MtpApiManager.invokeApi('messages.getDialogs', {
            offset_date: offsetDate,
            offset_id: getMessageLocalID(offsetID),
            offset_peer: _AppPeersManager.getInputPeerByID(offsetPeerID),
            limit: limit
        }, {
            timeout: 300
        }).then(function (dialogsResult) {
            if (!offsetDate) {
                _TelegramMeWebService.setAuthorized(true);
            }

            _AppUsersManager.saveApiUsers(dialogsResult.users);
            _AppChatsManager.saveApiChats(dialogsResult.chats);
            saveMessages(dialogsResult.messages);

            var maxSeenIdIncremented = offsetDate ? true : false;
            angular.forEach(dialogsResult.dialogs, function (dialog) {
                var peerID = _AppPeersManager.getPeerID(dialog.peer);
                if (dialog._ == 'dialogChannel') {
                    var channelID = -peerID;
                    saveChannelDialog(channelID, dialog);
                    _ApiUpdatesManager.addChannelState(channelID, dialog.pts);
                } else {
                    if (peerID < 0) {
                        var chat = _AppChatsManager.getChat(-peerID);
                        if (chat && chat.migrated_to && chat.pFlags.deactivated) {
                            var migratedToPeer = _AppPeersManager.getPeerID(chat.migrated_to);
                            migratedFromTo[peerID] = migratedToPeer;
                            migratedToFrom[migratedToPeer] = peerID;
                            return;
                        }
                    }
                    var peerText = _AppPeersManager.getPeerSearchText(peerID);
                    SearchIndexManager.indexObject(peerID, peerText, dialogsIndex);

                    var message = getMessage(dialog.top_message);

                    dialog.index = generateDialogIndex(message.date);
                    dialog.peerID = peerID;

                    pushDialogToStorage(dialog, message.date);

                    if (!maxSeenIdIncremented) {
                        incrementMaxSeenID(dialog.top_message);
                        maxSeenIdIncremented = true;
                    }

                    if (historiesStorage[peerID] === undefined) {
                        var historyStorage = {count: null, history: [dialog.top_message], pending: []};
                        historiesStorage[peerID] = historyStorage;
                        if (mergeReplyKeyboard(historyStorage, message)) {
                            $rootScope.$broadcast('history_reply_markup', {peerID: peerID});
                        }
                    }
                }
            });

            if (!dialogsResult.dialogs.length ||
                !dialogsResult.count ||
                dialogs.length >= dialogsResult.count) {
                allDialogsLoaded = true;
            }
        });
    }

    function generateDialogIndex (date) {
        if (date === undefined) {
            date = tsNow(true) + serverTimeOffset;
        }
        return (date * 0x10000) + ((++dialogsNum) & 0xFFFF);
    }

    function pushDialogToStorage (dialog, offsetDate) {
        if (offsetDate && (!dialogsOffsetDate || offsetDate < dialogsOffsetDate)) {
            dialogsOffsetDate = offsetDate;
        }
        var dialogs = dialogsStorage.dialogs;
        var pos = getDialogByPeerID(dialog.peerID)[1];
        if (pos !== undefined) {
            dialogs.splice(pos, 1);
        }

        var index = dialog.index;
        var i, len = dialogs.length;
        if (!len || index < dialogs[len - 1].index) {
            dialogs.push(dialog);
        }
        else if (index >= dialogs[0].index) {
            dialogs.unshift(dialog);
        }
        else {
            for (i = 0; i < len; i++) {
                if (index > dialogs[i].index) {
                    dialogs.splice(i, 0, dialog);
                    break;
                }
            }
        }
    }

    function requestHistory (peerID, maxID, limit, offset) {
        var isChannel = _AppPeersManager.isChannel(peerID);
        var isMegagroup = isChannel && _AppPeersManager.isMegagroup(peerID);

        var promise;
        if (isChannel && !isMegagroup) {
            promise = _MtpApiManager.invokeApi('channels.getImportantHistory', {
                channel: _AppChatsManager.getChannelInput(-peerID),
                offset_id: maxID ? getMessageLocalID(maxID) : 0,
                add_offset: offset || 0,
                limit: limit || 0
            }, {
                timeout: 300,
                noErrorBox: true
            });
        } else {
            promise = _MtpApiManager.invokeApi('messages.getHistory', {
                peer: _AppPeersManager.getInputPeerByID(peerID),
                offset_id: maxID ? getMessageLocalID(maxID) : 0,
                add_offset: offset || 0,
                limit: limit || 0
            }, {
                timeout: 300,
                noErrorBox: true
            });
        }

        return promise.then(function (historyResult) {
            _AppUsersManager.saveApiUsers(historyResult.users);
            _AppChatsManager.saveApiChats(historyResult.chats);
            saveMessages(historyResult.messages);

            if (isChannel) {
                _ApiUpdatesManager.addChannelState(-peerID, historyResult.pts);
            }

            if (
                peerID < 0 ||
                !_AppUsersManager.isBot(peerID) ||
                (historyResult.messages.length == limit && limit < historyResult.count)
            ) {
                return historyResult;
            }

            return AppProfileManager.getProfile(peerID).then(function (userFull) {
                var description = userFull.bot_info && userFull.bot_info.description;
                if (description) {
                    var messageID = tempID--;
                    var message = {
                        _: 'messageService',
                        id: messageID,
                        from_id: peerID,
                        to_id: _AppPeersManager.getOutputPeer(peerID),
                        flags: 0,
                        pFlags: {},
                        date: tsNow(true) + serverTimeOffset,
                        action: {
                            _: 'messageActionBotIntro',
                            description: description
                        }
                    };
                    saveMessages([message]);
                    historyResult.messages.push(message);
                    if (historyResult.count) {
                        historyResult.count++;
                    }
                }
                return historyResult;
            });
        }, function (error) {
            switch (error.type) {
                case 'CHANNEL_PRIVATE':
                    var channel = _AppChatsManager.getChat(-peerID);
                    channel = {_: 'channelForbidden', access_hash: channel.access_hash, title: channel.title};
                    _ApiUpdatesManager.processUpdateMessage({
                        _: 'updates',
                        updates: [{
                            _: 'updateChannel',
                            channel_id: -peerID
                        }],
                        chats: [channel],
                        users: []
                    });
                    break;
            }
            return $q.reject(error);
        });
    }

    var channelLocals = {};
    var channelsByLocals = {};
    var channelCurLocal = 0;
    var fullMsgIDModulus = 4294967296;

    function getFullMessageID (msgID, channelID) {
        if (!channelID || msgID <= 0) {
            return msgID;
        }
        msgID = getMessageLocalID(msgID);
        var localStart = channelLocals[channelID];
        if (!localStart) {
            localStart = (++channelCurLocal) * fullMsgIDModulus;
            channelsByLocals[localStart] = channelID;
            channelLocals[channelID] = localStart;
        }

        return localStart + msgID;
    }

    function getMessageIDInfo (fullMsgID) {
        if (fullMsgID < fullMsgIDModulus) {
            return [fullMsgID, 0];
        }
        var msgID = fullMsgID % fullMsgIDModulus;
        var channelID = channelsByLocals[fullMsgID - msgID];

        return [msgID, channelID];
    }

    function getMessageLocalID (fullMsgID) {
        if (!fullMsgID) {
            return 0;
        }
        return fullMsgID % fullMsgIDModulus;
    }

    function splitMessageIDsByChannels (mids) {
        var msgIDsByChannels = {};
        var midsByChannels = {};
        var i, mid, msgChannel, channelID;
        for (i = 0; i < mids.length; i++) {
            mid = mids[i];
            msgChannel = getMessageIDInfo(mid);
            channelID = msgChannel[1];
            if (msgIDsByChannels[channelID] === undefined) {
                msgIDsByChannels[channelID] = [];
                midsByChannels[channelID] = [];
            }
            msgIDsByChannels[channelID].push(msgChannel[0]);
            midsByChannels[channelID].push(mid);
        }

        return {
            msgIDs: msgIDsByChannels,
            mids: midsByChannels
        };
    }

    function fillHistoryStorage (peerID, maxID, fullLimit, historyStorage) {
        // console.log('fill history storage', peerID, maxID, fullLimit, angular.copy(historyStorage));
        var offset = (migratedFromTo[peerID] && !maxID) ? 1 : 0;
        return requestHistory (peerID, maxID, fullLimit, offset).then(function (historyResult) {
            historyStorage.count = historyResult.count || historyResult.messages.length;

            var offset = 0;
            if (!maxID && historyResult.messages.length) {
                maxID = historyResult.messages[0].mid + 1;
            }
            if (maxID > 0) {
                for (offset = 0; offset < historyStorage.history.length; offset++) {
                    if (maxID > historyStorage.history[offset]) {
                        break;
                    }
                }
            }

            var wasTotalCount = historyStorage.history.length;

            historyStorage.history.splice(offset, historyStorage.history.length - offset);
            angular.forEach(historyResult.messages, function (message) {
                if (mergeReplyKeyboard(historyStorage, message)) {
                    $rootScope.$broadcast('history_reply_markup', {peerID: peerID});
                }
                historyStorage.history.push(message.mid);
            });

            var totalCount = historyStorage.history.length;
            fullLimit -= (totalCount - wasTotalCount);

            var migratedNextPeer = migratedFromTo[peerID];
            var migratedPrevPeer = migratedToFrom[peerID];
            var isMigrated = migratedNextPeer !== undefined || migratedPrevPeer !== undefined;

            if (isMigrated) {
                historyStorage.count = Math.max(historyStorage.count, totalCount) + 1;
            }

            if (fullLimit > 0) {
                maxID = historyStorage.history[totalCount - 1];
                if (isMigrated) {
                    if (!historyResult.messages.length) {
                        if (migratedPrevPeer) {
                            maxID = 0;
                            peerID = migratedPrevPeer;
                        } else {
                            historyStorage.count = totalCount;
                            return true;
                        }
                    }
                    return fillHistoryStorage(peerID, maxID, fullLimit, historyStorage);
                }
                else if (totalCount < historyStorage.count) {
                    return fillHistoryStorage(peerID, maxID, fullLimit, historyStorage);
                }
            }
            return true;
        });
    };

    function wrapHistoryResult (peerID, result) {
        var unreadOffset = result.unreadOffset;
        if (unreadOffset) {
            var i, message;
            for (i = result.history.length - 1; i >= 0; i--) {
                message = messagesStorage[result.history[i]];
                if (message && !message.pFlags.out && message.pFlags.unread) {
                    result.unreadOffset = i + 1;
                    break;
                }
            }
        }
        return $q.when(result);
    }

    function migrateChecks (migrateFrom, migrateTo) {
        if (!migratedFromTo[migrateFrom] &&
            !migratedToFrom[migrateTo] &&
            _AppChatsManager.hasChat(-migrateTo)) {

            var fromChat = _AppChatsManager.getChat(-migrateFrom);
            if (fromChat &&
                fromChat.migrated_to &&
                fromChat.migrated_to.channel_id == -migrateTo) {
                migratedFromTo[migrateFrom] = migrateTo;
                migratedToFrom[migrateTo] = migrateFrom;

                $timeout(function () {
                    var foundDialog = getDialogByPeerID(migrateFrom);
                    if (foundDialog.length) {
                        dialogsStorage.dialogs.splice(foundDialog[1], 1);
                        $rootScope.$broadcast('dialog_drop', {peerID: migrateFrom});
                    }
                    $rootScope.$broadcast('dialog_migrate', {migrateFrom: migrateFrom, migrateTo: migrateTo});
                }, 100);
            }
        }
    }

    function convertMigratedPeer (peerID) {
        if (migratedFromTo[peerID]) {
            return migratedFromTo[peerID];
        }
    }

    function getHistory (peerID, maxID, limit, backLimit, prerendered) {
        if (migratedFromTo[peerID]) {
            peerID = migratedFromTo[peerID];
        }
        var historyStorage = historiesStorage[peerID],
            offset = 0,
            offsetNotFound = false,
            unreadOffset = false,
            unreadSkip = false;

        prerendered = prerendered ? Math.min(50, prerendered) : 0;

        if (historyStorage === undefined) {
            historyStorage = historiesStorage[peerID] = {count: null, history: [], pending: []};
        }

        var isMigrated = false;
        var reqPeerID = peerID;
        if (migratedToFrom[peerID]) {
            isMigrated = true;
            if (maxID && maxID < fullMsgIDModulus) {
                reqPeerID = migratedToFrom[peerID];
            }
        }

        if (!limit && !maxID) {
            var foundDialog = getDialogByPeerID(peerID)[0];
            if (foundDialog && foundDialog.unread_count > 1) {
                var unreadCount = foundDialog.unread_count;
                if (unreadSkip = (unreadCount > 50)) {
                    if (foundDialog.read_inbox_max_id) {
                        maxID = foundDialog.read_inbox_max_id;
                        backLimit = 16;
                        unreadOffset = 16;
                        limit = 4;
                    } else {
                        limit = 20;
                        unreadOffset = 16;
                        offset = unreadCount - unreadOffset;
                    }
                } else {
                    limit = Math.max(10, prerendered, unreadCount + 2);
                    unreadOffset = unreadCount;
                }
            }
            else if (Config.Mobile) {
                limit = 20;
            }
        }
        if (maxID > 0) {
            offsetNotFound = true;
            for (offset = 0; offset < historyStorage.history.length; offset++) {
                if (maxID > historyStorage.history[offset]) {
                    offsetNotFound = false;
                    break;
                }
            }
        }

        if (!offsetNotFound && (
                historyStorage.count !== null && historyStorage.history.length == historyStorage.count ||
                historyStorage.history.length >= offset + (limit || 1)
            )) {
            if (backLimit) {
                backLimit = Math.min(offset, backLimit);
                offset = Math.max(0, offset - backLimit);
                limit += backLimit;
            } else {
                limit = limit || (offset ? 20 : (prerendered || 5));
            }
            var history = historyStorage.history.slice(offset, offset + limit);
            if (!maxID && historyStorage.pending.length) {
                history = historyStorage.pending.slice().concat(history);
            }
            return wrapHistoryResult(peerID, {
                count: historyStorage.count,
                history: history,
                unreadOffset: unreadOffset,
                unreadSkip: unreadSkip
            });
        }

        if (!backLimit && !limit) {
            limit = prerendered || 20;
        }
        if (offsetNotFound) {
            offset = 0;
        }
        if (backLimit || unreadSkip || maxID && historyStorage.history.indexOf(maxID) == -1) {
            if (backLimit) {
                offset = -backLimit;
                limit += backLimit;
            }
            return requestHistory(reqPeerID, maxID, limit, offset).then(function (historyResult) {
                historyStorage.count = historyResult.count || historyResult.messages.length;
                if (isMigrated) {
                    historyStorage.count++;
                }

                var history = [];
                angular.forEach(historyResult.messages, function (message) {
                    history.push(message.mid);
                });
                if (!maxID && historyStorage.pending.length) {
                    history = historyStorage.pending.slice().concat(history);
                }

                return wrapHistoryResult(peerID, {
                    count: historyStorage.count,
                    history: history,
                    unreadOffset: unreadOffset,
                    unreadSkip: unreadSkip
                });
            })
        }

        return fillHistoryStorage(peerID, maxID, limit, historyStorage).then(function () {
            offset = 0;
            if (maxID > 0) {
                for (offset = 0; offset < historyStorage.history.length; offset++) {
                    if (maxID > historyStorage.history[offset]) {
                        break;
                    }
                }
            }

            var history = historyStorage.history.slice(offset, offset + limit);
            if (!maxID && historyStorage.pending.length) {
                history = historyStorage.pending.slice().concat(history);
            }

            return wrapHistoryResult(peerID, {
                count: historyStorage.count,
                history: history,
                unreadOffset: unreadOffset,
                unreadSkip: unreadSkip
            });
        });
    }

    function getReplyKeyboard (peerID) {
        return (historiesStorage[peerID] || {}).reply_markup || false;
    }

    function mergeReplyKeyboard (historyStorage, message) {
        // console.log('merge', message.mid, message.reply_markup, historyStorage.reply_markup);
        if (!message.reply_markup &&
            !message.pFlags.out &&
            !message.action) {
            return false;
        }
        var messageReplyMarkup = message.reply_markup;
        var lastReplyMarkup = historyStorage.reply_markup;
        if (messageReplyMarkup) {
            if (lastReplyMarkup && lastReplyMarkup.mid >= message.mid) {
                return false;
            }
            if (messageReplyMarkup.pFlags.selective &&
                !(message.flags & 16)) {
                return false;
            }
            if (historyStorage.maxOutID &&
                message.mid < historyStorage.maxOutID &&
                messageReplyMarkup.pFlags.single_use) {
                messageReplyMarkup.pFlags.hidden = true;
            }
            messageReplyMarkup = angular.extend({
                mid: message.mid
            }, messageReplyMarkup);
            if (messageReplyMarkup._ != 'replyKeyboardHide') {
                messageReplyMarkup.fromID = message.from_id;
            }
            historyStorage.reply_markup = messageReplyMarkup;
            // console.log('set', historyStorage.reply_markup);
            return true;
        }

        if (message.pFlags.out) {
            if (lastReplyMarkup) {
                if (lastReplyMarkup.pFlags.single_use &&
                    !lastReplyMarkup.pFlags.hidden &&
                    (message.mid > lastReplyMarkup.mid || message.mid < 0) &&
                    message.message) {
                    lastReplyMarkup.pFlags.hidden = true;
                    // console.log('set', historyStorage.reply_markup);
                    return true;
                }
            } else if (!historyStorage.maxOutID ||
                message.mid > historyStorage.maxOutID) {
                historyStorage.maxOutID = message.mid;
            }
        }

        if (message.action &&
            message.action._ == 'messageActionChatDeleteUser' &&
            (lastReplyMarkup
                    ? message.action.user_id == lastReplyMarkup.fromID
                    : _AppUsersManager.isBot(message.action.user_id)
            )
        ) {
            historyStorage.reply_markup = {
                _: 'replyKeyboardHide',
                mid: message.mid,
                flags: 0,
                pFlags: {}
            };
            // console.log('set', historyStorage.reply_markup);
            return true;
        }

        return false;
    }

    function getSearch (peerID, query, inputFilter, maxID, limit) {
        var foundMsgs = [],
            useSearchCache = !query,
            newSearchFilter = {peer: peerID, filter: inputFilter},
            sameSearchCache = useSearchCache && angular.equals(lastSearchFilter, newSearchFilter);

        if (useSearchCache && !sameSearchCache) {
            lastSearchFilter = newSearchFilter;
            lastSearchResults = [];
        }

        if (peerID && !maxID && !query) {
            var historyStorage = historiesStorage[peerID];

            if (historyStorage !== undefined && historyStorage.history.length) {
                var neededContents = {},
                    neededLimit = limit || 20,
                    i, message;

                switch (inputFilter._) {
                    case 'inputMessagesFilterPhotos':
                        neededContents['messageMediaPhoto'] = true;
                        break;

                    case 'inputMessagesFilterVideo':
                        neededContents['messageMediaVideo'] = true;
                        break;

                    case 'inputMessagesFilterPhotoVideo':
                        neededContents['messageMediaPhoto'] = true;
                        neededContents['messageMediaVideo'] = true;
                        break;

                    case 'inputMessagesFilterDocument':
                        neededContents['messageMediaDocument'] = true;
                        break;

                    case 'inputMessagesFilterAudio':
                        neededContents['messageMediaAudio'] = true;
                        break;
                }
                for (i = 0; i < historyStorage.history.length; i++) {
                    message = messagesStorage[historyStorage.history[i]];
                    if (message.media && neededContents[message.media._]) {
                        foundMsgs.push(message.mid);
                        if (foundMsgs.length >= neededLimit) {
                            break;
                        }
                    }
                }
            }

            // console.log(dT(), sameSearchCache, foundMsgs, lastSearchResults);
            if (foundMsgs.length < neededLimit && lastSearchResults.length && sameSearchCache) {
                var minID = foundMsgs.length ? foundMsgs[foundMsgs.length - 1] : 0xFFFFFFFF;
                for (var i = 0; i < lastSearchResults.length; i++) {
                    if (lastSearchResults[i] < minID) {
                        foundMsgs.push(lastSearchResults[i]);
                        if (foundMsgs.length >= neededLimit) {
                            break;
                        }
                    }
                }
            }
            // console.log(dT(), foundMsgs);
        }

        if (foundMsgs.length || limit == 1000) {
            if (useSearchCache) {
                lastSearchResults = listMergeSorted(lastSearchResults, foundMsgs);
            }

            return $q.when({
                count: null,
                history: foundMsgs
            });
        }

        var apiPromise;

        if (peerID || !query) {
            var flags = 0;
            if (_AppPeersManager.isChannel(peerID) &&
                !_AppPeersManager.isMegagroup(peerID)) {
                flags |= 1;
            }
            apiPromise = _MtpApiManager.invokeApi('messages.search', {
                flags: flags,
                peer: _AppPeersManager.getInputPeerByID(peerID),
                q: query || '',
                filter: inputFilter || {_: 'inputMessagesFilterEmpty'},
                min_date: 0,
                max_date: 0,
                limit: limit || 20,
                max_id: maxID || 0
            }, {
                timeout: 300,
                noErrorBox: true
            });
        } else {
            var offsetDate = 0;
            var offsetPeerID = 0;
            var offsetID = 0;
            var offsetMessage = maxID && getMessage(maxID);

            if (offsetMessage && offsetMessage.date) {
                offsetDate = offsetMessage.date + serverTimeOffset;
                offsetID = offsetMessage.id;
                offsetPeerID = getMessagePeer(offsetMessage);
            }
            apiPromise = _MtpApiManager.invokeApi('messages.searchGlobal', {
                q: query,
                offset_date: offsetDate,
                offset_peer: _AppPeersManager.getInputPeerByID(offsetPeerID),
                offset_id: getMessageLocalID(offsetID),
                limit: limit || 20
            }, {
                timeout: 300,
                noErrorBox: true
            });
        }

        return apiPromise.then(function (searchResult) {
            _AppUsersManager.saveApiUsers(searchResult.users);
            _AppChatsManager.saveApiChats(searchResult.chats);
            saveMessages(searchResult.messages);

            var foundCount = searchResult.count || searchResult.messages.length;

            foundMsgs = [];
            angular.forEach(searchResult.messages, function (message) {
                var peerID = getMessagePeer(message);
                if (peerID < 0) {
                    var chat = _AppChatsManager.getChat(-peerID);
                    if (chat.migrated_to) {
                        migrateChecks(peerID, -chat.migrated_to.channel_id);
                    }
                }
                foundMsgs.push(message.mid);
            });

            if (useSearchCache) {
                lastSearchResults = listMergeSorted(lastSearchResults, foundMsgs);
            }

            return {
                count: foundCount,
                history: foundMsgs
            };
        }, function (error) {
            if (error.code == 400) {
                error.handled = true;
            }
            return $q.reject(error);
        });
    }

    function getMessage (messageID) {
        return messagesStorage[messageID] || {deleted: true};
    }

    function deleteMessages (messageIDs) {
        var splitted = splitMessageIDsByChannels(messageIDs);
        var promises = [];
        angular.forEach(splitted.msgIDs, function (msgIDs, channelID) {
            var promise;
            if (channelID > 0) {
                var channel = _AppChatsManager.getChat(channelID);
                if (!channel.pFlags.creator && !(channel.pFlags.editor && channel.pFlags.megagroup)) {
                    var goodMsgIDs = [];
                    if (channel.pFlags.editor || channel.pFlags.megagroup) {
                        angular.forEach(msgIDs, function (msgID, i) {
                            var message = getMessage(splitted.mids[channelID][i]);
                            if (message.pFlags.out) {
                                goodMsgIDs.push(msgID);
                            }
                        });
                    }
                    if (!goodMsgIDs.length) {
                        return;
                    }
                    msgIDs = goodMsgIDs;
                }
                promise = _MtpApiManager.invokeApi('channels.deleteMessages', {
                    channel: _AppChatsManager.getChannelInput(channelID),
                    id: msgIDs
                }).then(function (affectedMessages) {
                    _ApiUpdatesManager.processUpdateMessage({
                        _: 'updateShort',
                        update: {
                            _: 'updateDeleteChannelMessages',
                            channel_id: channelID,
                            messages: msgIDs,
                            pts: affectedMessages.pts,
                            pts_count: affectedMessages.pts_count
                        }
                    });
                });
            } else {
                promise = _MtpApiManager.invokeApi('messages.deleteMessages', {
                    id: msgIDs
                }).then(function (affectedMessages) {
                    _ApiUpdatesManager.processUpdateMessage({
                        _: 'updateShort',
                        update: {
                            _: 'updateDeleteMessages',
                            messages: msgIDs,
                            pts: affectedMessages.pts,
                            pts_count: affectedMessages.pts_count
                        }
                    });
                });
            }
            promises.push(promise);
        });

        return $q.all(promises);
    }

    function readHistory (peerID) {
        // console.trace('start read');
        var isChannel = _AppPeersManager.isChannel(peerID),
            historyStorage = historiesStorage[peerID],
            foundDialog = getDialogByPeerID(peerID)[0];

        if (!foundDialog || !foundDialog.unread_count) {

            if (!historyStorage || !historyStorage.history.length) {
                return false;
            }

            var messageID,
                message,
                foundUnread = false;
            for (i = historyStorage.history.length; i >= 0; i--) {
                messageID = historyStorage.history[i];
                message = messagesStorage[messageID];
                if (message && !message.pFlags.out && message.pFlags.unread) {
                    foundUnread = true;
                    break;
                }
            }
            if (!foundUnread) {
                return false;
            }
        }

        if (historyStorage.readPromise) {
            return historyStorage.readPromise;
        }

        var apiPromise;
        if (isChannel) {
            apiPromise = _MtpApiManager.invokeApi('channels.readHistory', {
                channel: _AppChatsManager.getChannelInput(-peerID),
                max_id: 0
            });
        } else {
            apiPromise = _MtpApiManager.invokeApi('messages.readHistory', {
                peer: _AppPeersManager.getInputPeerByID(peerID),
                max_id: 0
            }).then(function (affectedMessages) {
                _ApiUpdatesManager.processUpdateMessage({
                    _: 'updateShort',
                    update: {
                        _: 'updatePts',
                        pts: affectedMessages.pts,
                        pts_count: affectedMessages.pts_count
                    }
                });
            })
        }

        historyStorage.readPromise = apiPromise.then(function () {
            if (foundDialog) {
                // console.log('done read history', peerID);
                foundDialog.unread_count = 0;
                $rootScope.$broadcast('dialog_unread', {peerID: peerID, count: 0});
                $rootScope.$broadcast('messages_read');
                if (historyStorage && historyStorage.history.length) {
                    foundDialog.read_inbox_max_id = historyStorage.history[0];
                }
            }
        })['finally'](function () {
            delete historyStorage.readPromise;
        });

        if (historyStorage && historyStorage.history.length) {
            var messageID, message, i, peerID, foundDialog, dialog;
            for (i = 0; i < historyStorage.history.length; i++) {
                messageID = historyStorage.history[i];
                message = messagesStorage[messageID];
                if (message && !message.pFlags.out) {
                    message.pFlags.unread = false;
                    if (messagesForHistory[messageID]) {
                        messagesForHistory[messageID].pFlags.unread = false;
                    }
                    if (messagesForDialogs[messageID]) {
                        messagesForDialogs[messageID].pFlags.unread = false;
                    }
                }
            }
        }

        return historyStorage.readPromise;
    }

    function readMessages (messageIDs) {
        _MtpApiManager.invokeApi('messages.readMessageContents', {
            id: messageIDs
        }).then(function (affectedMessages) {
            _ApiUpdatesManager.processUpdateMessage({
                _: 'updateShort',
                update: {
                    _: 'updateReadMessagesContents',
                    messages: messageIDs,
                    pts: affectedMessages.pts,
                    pts_count: affectedMessages.pts_count
                }
            });
        });
    }

    function doFlushHistory (inputPeer) {
        return _MtpApiManager.invokeApi('messages.deleteHistory', {
            peer: inputPeer,
            max_id: 0
        }).then(function (affectedHistory) {
            _ApiUpdatesManager.processUpdateMessage({
                _: 'updateShort',
                update: {
                    _: 'updatePts',
                    pts: affectedHistory.pts,
                    pts_count: affectedHistory.pts_count
                }
            });
            if (!affectedHistory.offset) {
                return true;
            }
            return doFlushHistory(inputPeer);
        });
    }

    function flushHistory (peerID) {
        return doFlushHistory(_AppPeersManager.getInputPeerByID(peerID)).then(function () {
            var foundDialog = getDialogByPeerID(peerID);
            if (foundDialog[0]) {
                dialogsStorage.dialogs.splice(foundDialog[1], 1);
            }
            delete historiesStorage[peerID];
            $rootScope.$broadcast('dialog_flush', {peerID: peerID});
        });
    }

    function saveMessages (apiMessages) {
        angular.forEach(apiMessages, function (apiMessage) {
            if (apiMessage.pFlags === undefined) {
                apiMessage.pFlags = {};
            }
            if (!apiMessage.pFlags.out) {
                apiMessage.pFlags.out = false;
            }
            if (!apiMessage.pFlags.unread) {
                apiMessage.pFlags.unread = false;
            }
            if (apiMessage._ == 'messageEmpty') {
                return;
            }

            var toPeerID = _AppPeersManager.getPeerID(apiMessage.to_id);
            var isChannel = apiMessage.to_id._ == 'peerChannel';
            var channelID = isChannel ? -toPeerID : 0;
            var isBroadcast = isChannel && !_AppChatsManager.isMegagroup(channelID);

            var mid = getFullMessageID(apiMessage.id, channelID);
            apiMessage.mid = mid;
            messagesStorage[mid] = apiMessage;

            if (channelID && !apiMessage.pFlags.out) {
                var dialog = getDialogByPeerID(toPeerID)[0];
                apiMessage.pFlags.unread = dialog ? mid > dialog.read_inbox_max_id : true;
            } else {
                apiMessage.pFlags.unread = apiMessage.flags & 1 ? true : false;
            }

            if (apiMessage.reply_to_msg_id) {
                apiMessage.reply_to_mid = getFullMessageID(apiMessage.reply_to_msg_id, channelID);
            }

            apiMessage.date -= serverTimeOffset;
            if (apiMessage.fwd_date) {
                apiMessage.fwd_date -= serverTimeOffset;
            }
            apiMessage.toID = toPeerID;
            apiMessage.fromID = apiMessage.from_id || toPeerID;
            if (apiMessage.fwd_from_id) {
                apiMessage.fwdFromID = _AppPeersManager.getPeerID(apiMessage.fwd_from_id);
            }
            if (apiMessage.via_bot_id > 0) {
                apiMessage.viaBotID = apiMessage.via_bot_id;
            }

            var mediaContext = {
                user_id: apiMessage.fromID,
                date: apiMessage.date
            };

            // TODO
            //if (apiMessage.media) {
            //    switch (apiMessage.media._) {
            //        case 'messageMediaEmpty':
            //            delete apiMessage.media;
            //            break;
            //        case 'messageMediaPhoto':
            //            _AppPhotosManager.savePhoto(apiMessage.media.photo, mediaContext);
            //            break;
            //        case 'messageMediaVideo':
            //            AppVideoManager.saveVideo(apiMessage.media.video, mediaContext);
            //            break;
            //        case 'messageMediaDocument':
            //            AppDocsManager.saveDoc(apiMessage.media.document, mediaContext);
            //            break;
            //        case 'messageMediaAudio':
            //            AppAudioManager.saveAudio(apiMessage.media.audio);
            //            break;
            //        case 'messageMediaWebPage':
            //            AppWebPagesManager.saveWebPage(apiMessage.media.webpage, apiMessage.mid, mediaContext);
            //            break;
            //    }
            //}
            if (apiMessage.action) {
                var migrateFrom, migrateTo;
                switch (apiMessage.action._) {
                    case 'messageActionChatEditPhoto':
                        _AppPhotosManager.savePhoto(apiMessage.action.photo, mediaContext);
                        if (isBroadcast) {
                            apiMessage.action._ = 'messageActionChannelEditPhoto';
                        }
                        break;

                    case 'messageActionChatEditTitle':
                        if (isBroadcast) {
                            apiMessage.action._ = 'messageActionChannelEditTitle';
                        }
                        break;

                    case 'messageActionChatDeletePhoto':
                        if (isBroadcast) {
                            apiMessage.action._ = 'messageActionChannelDeletePhoto';
                        }
                        break;

                    case 'messageActionChatAddUser':
                        if (apiMessage.action.users.length == 1) {
                            apiMessage.action.user_id = apiMessage.action.users[0];
                            if (apiMessage.fromID == apiMessage.action.user_id) {
                                if (isChannel) {
                                    apiMessage.action._ = 'messageActionChatJoined';
                                } else {
                                    apiMessage.action._ = 'messageActionChatReturn';
                                }
                            }
                        }
                        else if (apiMessage.action.users.length > 1) {
                            apiMessage.action._ = 'messageActionChatAddUsers';
                        }
                        break;

                    case 'messageActionChatDeleteUser':
                        if (apiMessage.fromID == apiMessage.action.user_id) {
                            apiMessage.action._ = 'messageActionChatLeave';
                        }
                        break;

                    case 'messageActionChannelMigrateFrom':
                        migrateFrom = -apiMessage.action.chat_id;
                        migrateTo = -channelID;
                        break;

                    case 'messageActionChatMigrateTo':
                        migrateFrom = -channelID;
                        migrateTo = -apiMessage.action.channel_id;
                        break;
                }
                if (migrateFrom &&
                    migrateTo &&
                    !migratedFromTo[migrateFrom] &&
                    !migratedToFrom[migrateTo]) {
                    migrateChecks(migrateFrom, migrateTo);
                }
            }

            // TODO
            //if (apiMessage.message && apiMessage.message.length) {
            //    var myEntities = RichTextProcessor.parseEntities(apiMessage.message);
            //    var apiEntities = apiMessage.entities || [];
            //    apiMessage.totalEntities = RichTextProcessor.mergeEntities(myEntities, apiEntities, !apiMessage.pending);
            //}
        });
    }

    function sendText(peerID, text, options) {
        if (!angular.isString(text) || !text.length) {
            return;
        }
        options = options || {};
        var messageID = tempID--,
            randomID = [nextRandomInt(0xFFFFFFFF), nextRandomInt(0xFFFFFFFF)],
            randomIDS = bigint(randomID[0]).shiftLeft(32).add(bigint(randomID[1])).toString(),
            historyStorage = historiesStorage[peerID],
            flags = 0,
            pFlags = {},
            replyToMsgID = options.replyToMsgID,
            isChannel = _AppPeersManager.isChannel(peerID),
            isMegagroup = isChannel && _AppPeersManager.isMegagroup(peerID),
            asChannel = isChannel && !isMegagroup ? true : false,
            entities = options.entities || [],
            message;

        // TODO
        //if (!options.viaBotID) {
        //    text = RichTextProcessor.parseMarkdown(text, entities);
        //}

        if (historyStorage === undefined) {
            historyStorage = historiesStorage[peerID] = {count: null, history: [], pending: []};
        }

        var fromID = _AppUsersManager.getSelf().id;
        if (peerID != fromID) {
            flags |= 2;
            pFlags.out = true;
            if (!isChannel && !_AppUsersManager.isBot(peerID)) {
                flags |= 1;
                pFlags.unread = true;
            }
        }
        if (replyToMsgID) {
            flags |= 8;
        }
        if (asChannel) {
            fromID = 0;
        } else {
            flags |= 256;
        }
        message = {
            _: 'message',
            id: messageID,
            from_id: fromID,
            to_id: _AppPeersManager.getOutputPeer(peerID),
            flags: flags,
            pFlags: pFlags,
            date: tsNow(true) + serverTimeOffset,
            message: text,
            random_id: randomIDS,
            reply_to_msg_id: replyToMsgID,
            via_bot_id: options.viaBotID,
            entities: entities,
            views: asChannel && 1,
            pending: true
        };

        var toggleError = function (on) {
            var historyMessage = messagesForHistory[messageID];
            if (on) {
                message.error = true;
                if (historyMessage) {
                    historyMessage.error = true;
                }
            } else {
                delete message.error;
                if (historyMessage) {
                    delete historyMessage.error;
                }
            }
            $rootScope.$broadcast('messages_pending');
        }

        message.send = function () {
            toggleError(false);
            var sentRequestOptions = {};
            if (pendingAfterMsgs[peerID]) {
                sentRequestOptions.afterMessageID = pendingAfterMsgs[peerID].messageID;
            }
            var flags = 0;
            if (replyToMsgID) {
                flags |= 1;
            }
            if (asChannel) {
                flags |= 16;
            }
            var apiPromise;
            if (options.viaBotID) {
                apiPromise = _MtpApiManager.invokeApi('messages.sendInlineBotResult', {
                    flags: flags,
                    peer: _AppPeersManager.getInputPeerByID(peerID),
                    random_id: randomID,
                    reply_to_msg_id: getMessageLocalID(replyToMsgID),
                    query_id: options.queryID,
                    id: options.resultID
                }, sentRequestOptions);
            } else {
                if (entities.length) {
                    flags |= 8;
                }
                apiPromise = _MtpApiManager.invokeApi('messages.sendMessage', {
                    flags: flags,
                    peer: _AppPeersManager.getInputPeerByID(peerID),
                    message: text,
                    random_id: randomID,
                    reply_to_msg_id: getMessageLocalID(replyToMsgID),
                    entities: entities
                }, sentRequestOptions)
            }
            // console.log(flags, entities);
            apiPromise.then(function (updates) {
                if (updates._ == 'updateShortSentMessage') {
                    message.flags = updates.flags;
                    message.date = updates.date;
                    message.id = updates.id;
                    message.media = updates.media;
                    message.entities = updates.entities;
                    updates = {
                        _: 'updates',
                        users: [],
                        chats: [],
                        seq: 0,
                        updates: [{
                            _: 'updateMessageID',
                            random_id: randomIDS,
                            id: updates.id
                        }, {
                            _: isChannel ? 'updateNewChannelMessage' : 'updateNewMessage',
                            message: message,
                            pts: updates.pts,
                            pts_count: updates.pts_count
                        }]
                    };
                }
                _ApiUpdatesManager.processUpdateMessage(updates);
            }, function (error) {
                toggleError(true);
            })['finally'](function () {
                if (pendingAfterMsgs[peerID] === sentRequestOptions) {
                    delete pendingAfterMsgs[peerID];
                }
            });

            pendingAfterMsgs[peerID] = sentRequestOptions;
        };

        saveMessages([message]);
        historyStorage.pending.unshift(messageID);
        $rootScope.$broadcast('history_append', {peerID: peerID, messageID: messageID, my: true});

        setZeroTimeout(message.send);
        // setTimeout(function () {
        //   message.send();
        // }, 5000);

        pendingByRandomID[randomIDS] = [peerID, messageID];
    };

    function sendFile(peerID, file, options) {
        options = options || {};
        var messageID = tempID--,
            randomID = [nextRandomInt(0xFFFFFFFF), nextRandomInt(0xFFFFFFFF)],
            randomIDS = bigint(randomID[0]).shiftLeft(32).add(bigint(randomID[1])).toString(),
            historyStorage = historiesStorage[peerID],
            flags = 0,
            pFlags = {},
            replyToMsgID = options.replyToMsgID,
            isChannel = _AppPeersManager.isChannel(peerID),
            isMegagroup = isChannel && _AppPeersManager.isMegagroup(peerID),
            asChannel = isChannel && !isMegagroup ? true : false,
            attachType, apiFileName, realFileName;

        if (!options.isMedia) {
            attachType = 'document';
            apiFileName = 'document.' + file.type.split('/')[1];
        } else if (['image/jpeg', 'image/png', 'image/bmp'].indexOf(file.type) >= 0) {
            attachType = 'photo';
            apiFileName = 'photo.' + file.type.split('/')[1];
        } else if (file.type.substr(0, 6) == 'audio/' || ['video/ogg'].indexOf(file.type) >= 0) {
            attachType = 'audio';
            apiFileName = 'audio.' + (file.type.split('/')[1] == 'ogg' ? 'ogg' : 'mp3');
        } else if (file.type.substr(0, 6) == 'video/') {
            attachType = 'video';
            apiFileName = 'video.mp4';
        } else {
            attachType = 'document';
            apiFileName = 'document.' + file.type.split('/')[1];
        }

        console.log(attachType, apiFileName, file.type);

        if (historyStorage === undefined) {
            historyStorage = historiesStorage[peerID] = {count: null, history: [], pending: []};
        }

        var fromID = _AppUsersManager.getSelf().id;
        if (peerID != fromID) {
            flags |= 2;
            pFlags.out = true;
            if (!isChannel && !_AppUsersManager.isBot(peerID)) {
                flags |= 1;
                pFlags.unread = true;
            }
        }
        if (replyToMsgID) {
            flags |= 8;
        }
        if (asChannel) {
            fromID = 0;
        } else {
            flags |= 256;
        }
        var media = {
            _: 'messageMediaPending',
            type: attachType,
            file_name: file.name || apiFileName,
            size: file.size,
            progress: {percent: 1, total: file.size}
        };

        var message = {
            _: 'message',
            id: messageID,
            from_id: fromID,
            to_id: _AppPeersManager.getOutputPeer(peerID),
            flags: flags,
            pFlags: pFlags,
            date: tsNow(true) + serverTimeOffset,
            message: '',
            media: media,
            random_id: randomIDS,
            reply_to_msg_id: replyToMsgID,
            views: asChannel && 1,
            pending: true
        };

        var toggleError = function (on) {
            var historyMessage = messagesForHistory[messageID];
            if (on) {
                message.error = true;
                if (historyMessage) {
                    historyMessage.error = true;
                }
            } else {
                delete message.error;
                if (historyMessage) {
                    delete historyMessage.error;
                }
            }
            $rootScope.$broadcast('messages_pending');
        }

        var uploaded = false,
            uploadPromise;

        message.send = function () {
            var sendFileDeferred = $q.defer();

            sendFilePromise.then(function () {
                if (!uploaded || message.error) {
                    uploaded = false;
                    uploadPromise = _MtpApiFileManager.uploadFile(file);
                }

                uploadPromise.then(function (inputFile) {
                    inputFile.name = apiFileName;
                    uploaded = true;
                    var inputMedia;
                    switch (attachType) {
                        case 'photo':
                            inputMedia = {_: 'inputMediaUploadedPhoto', file: inputFile};
                            break;

                        case 'video':
                            inputMedia = {_: 'inputMediaUploadedVideo', file: inputFile, duration: 0, w: 0, h: 0, mime_type: file.type};
                            break;

                        case 'audio':
                            inputMedia = {_: 'inputMediaUploadedAudio', file: inputFile, duration: 0, mime_type: file.type};
                            break;

                        case 'document':
                        default:
                            inputMedia = {_: 'inputMediaUploadedDocument', file: inputFile, mime_type: file.type, caption: options.caption || '', attributes: [
                                {_: 'documentAttributeFilename', file_name: file.name}
                            ]};
                    }
                    var flags = 0;
                    if (replyToMsgID) {
                        flags |= 1;
                    }
                    if (asChannel) {
                        flags |= 16;
                    }
                    _MtpApiManager.invokeApi('messages.sendMedia', {
                        flags: flags,
                        peer: _AppPeersManager.getInputPeerByID(peerID),
                        media: inputMedia,
                        random_id: randomID,
                        reply_to_msg_id: getMessageLocalID(replyToMsgID)
                    }).then(function (updates) {
                        _ApiUpdatesManager.processUpdateMessage(updates);
                    }, function (error) {
                        if (attachType == 'photo' &&
                            error.code == 400 &&
                            (error.type == 'PHOTO_INVALID_DIMENSIONS' ||
                            error.type == 'PHOTO_SAVE_FILE_INVALID')) {
                            error.handled = true;
                            attachType = 'document';
                            message.send();
                            return;
                        }
                        toggleError(true);
                    });
                }, function (error) {
                    toggleError(true);
                }, function (progress) {
                    // console.log('upload progress', progress);
                    media.progress.done = progress.done;
                    media.progress.percent = Math.max(1, Math.floor(100 * progress.done / progress.total));
                    $rootScope.$broadcast('history_update', {peerID: peerID});
                });

                media.progress.cancel = function () {
                    if (!uploaded) {
                        sendFileDeferred.resolve();
                        uploadPromise.cancel();
                        cancelPendingMessage(randomIDS);
                    }
                }

                uploadPromise['finally'](function () {
                    sendFileDeferred.resolve();
                });
            });

            sendFilePromise = sendFileDeferred.promise;
        };

        saveMessages([message]);
        historyStorage.pending.unshift(messageID);
        $rootScope.$broadcast('history_append', {peerID: peerID, messageID: messageID, my: true});

        setZeroTimeout(message.send);

        pendingByRandomID[randomIDS] = [peerID, messageID];
    }

    function sendOther(peerID, inputMedia, options) {
        options = options || {};

        var messageID = tempID--,
            randomID = [nextRandomInt(0xFFFFFFFF), nextRandomInt(0xFFFFFFFF)],
            randomIDS = bigint(randomID[0]).shiftLeft(32).add(bigint(randomID[1])).toString(),
            historyStorage = historiesStorage[peerID],
            replyToMsgID = options.replyToMsgID,
            isChannel = _AppPeersManager.isChannel(peerID),
            isMegagroup = isChannel && _AppPeersManager.isMegagroup(peerID),
            asChannel = isChannel && !isMegagroup ? true : false;

        if (historyStorage === undefined) {
            historyStorage = historiesStorage[peerID] = {count: null, history: [], pending: []};
        }

        var fromID = _AppUsersManager.getSelf().id;
        var media;
        switch (inputMedia._) {
            case 'inputMediaContact':
                media = angular.extend({}, inputMedia, {_: 'messageMediaContact'});
                break;

            case 'inputMediaPhoto':
                media = {
                    _: 'messageMediaPhoto',
                    photo: _AppPhotosManager.getPhoto(inputMedia.id.id),
                    caption: inputMedia.caption || ''
                };
                break;

            case 'inputMediaDocument':
                var doc = _AppDocsManager.getDoc(inputMedia.id.id);
                if (doc.sticker && doc.stickerSetInput) {
                    AppStickersManager.pushPopularSticker(doc.id);
                };
                media = {
                    _: 'messageMediaDocument',
                    'document': doc,
                    caption: inputMedia.caption || ''
                };
                break;

            case 'messageMediaPending':
                media = inputMedia;
                break;
        }

        var flags = 0;
        var pFlags = {};
        if (peerID != fromID) {
            flags |= 2;
            pFlags.out = true;
            if (!_AppUsersManager.isBot(peerID)) {
                flags |= 1;
                pFlags.unread = true;
            }
        }
        if (replyToMsgID) {
            flags |= 8;
        }
        if (asChannel) {
            fromID = 0;
        } else {
            flags |= 256;
        }

        var message = {
            _: 'message',
            id: messageID,
            from_id: fromID,
            to_id: _AppPeersManager.getOutputPeer(peerID),
            flags: flags,
            pFlags: pFlags,
            date: tsNow(true) + serverTimeOffset,
            message: '',
            media: media,
            random_id: randomIDS,
            reply_to_msg_id: replyToMsgID,
            via_bot_id: options.viaBotID,
            views: asChannel && 1,
            pending: true
        };

        var toggleError = function (on) {
            var historyMessage = messagesForHistory[messageID];
            if (on) {
                message.error = true;
                if (historyMessage) {
                    historyMessage.error = true;
                }
            } else {
                delete message.error;
                if (historyMessage) {
                    delete historyMessage.error;
                }
            }
            $rootScope.$broadcast('messages_pending');
        }

        message.send = function () {
            var flags = 0;
            if (replyToMsgID) {
                flags |= 1;
            }
            if (asChannel) {
                flags |= 16;
            }

            var sentRequestOptions = {};
            if (pendingAfterMsgs[peerID]) {
                sentRequestOptions.afterMessageID = pendingAfterMsgs[peerID].messageID;
            }

            var apiPromise;
            if (options.viaBotID) {
                apiPromise = _MtpApiManager.invokeApi('messages.sendInlineBotResult', {
                    flags: flags,
                    peer: _AppPeersManager.getInputPeerByID(peerID),
                    random_id: randomID,
                    reply_to_msg_id: getMessageLocalID(replyToMsgID),
                    query_id: options.queryID,
                    id: options.resultID
                }, sentRequestOptions);
            } else {
                apiPromise = _MtpApiManager.invokeApi('messages.sendMedia', {
                    flags: flags,
                    peer: _AppPeersManager.getInputPeerByID(peerID),
                    media: inputMedia,
                    random_id: randomID,
                    reply_to_msg_id: getMessageLocalID(replyToMsgID)
                }, sentRequestOptions);
            }
            apiPromise.then(function (updates) {
                _ApiUpdatesManager.processUpdateMessage(updates);
            }, function (error) {
                toggleError(true);
            })['finally'](function () {
                if (pendingAfterMsgs[peerID] === sentRequestOptions) {
                    delete pendingAfterMsgs[peerID];
                }
            });
            pendingAfterMsgs[peerID] = sentRequestOptions;
        };

        saveMessages([message]);
        historyStorage.pending.unshift(messageID);
        $rootScope.$broadcast('history_append', {peerID: peerID, messageID: messageID, my: true});

        setZeroTimeout(message.send);

        pendingByRandomID[randomIDS] = [peerID, messageID];
    }

    function forwardMessages (peerID, mids) {
        mids = mids.sort();

        var flags = 0;
        var isChannel = _AppPeersManager.isChannel(peerID);
        var isMegagroup = isChannel && _AppPeersManager.isMegagroup(peerID);
        var asChannel = isChannel && !isMegagroup ? true : false;

        if (asChannel) {
            flags |= 16;
        }

        var splitted = splitMessageIDsByChannels(mids);
        var promises = [];
        angular.forEach(splitted.msgIDs, function (msgIDs, channelID) {
            var len = msgIDs.length;
            var randomIDs = [];
            for (var i = 0; i < len; i++) {
                randomIDs.push([nextRandomInt(0xFFFFFFFF), nextRandomInt(0xFFFFFFFF)]);
            }
            var sentRequestOptions = {};
            if (pendingAfterMsgs[peerID]) {
                sentRequestOptions.afterMessageID = pendingAfterMsgs[peerID].messageID;
            }
            var promise = _MtpApiManager.invokeApi('messages.forwardMessages', {
                flags: flags,
                from_peer: _AppPeersManager.getInputPeerByID(-channelID),
                id: msgIDs,
                random_id: randomIDs,
                to_peer: _AppPeersManager.getInputPeerByID(peerID),
            }, sentRequestOptions).then(function (updates) {
                _ApiUpdatesManager.processUpdateMessage(updates);
            })['finally'](function () {
                if (pendingAfterMsgs[peerID] === sentRequestOptions) {
                    delete pendingAfterMsgs[peerID];
                }
            });
            pendingAfterMsgs[peerID] = sentRequestOptions;
            promises.push(promise);
        });

        return $q.all(promises);
    };

    function startBot (botID, chatID, startParam) {
        var peerID = chatID ? -chatID : botID;
        if (startParam) {
            var randomID = bigint(nextRandomInt(0xFFFFFFFF)).shiftLeft(32).add(bigint(nextRandomInt(0xFFFFFFFF))).toString();

            return _MtpApiManager.invokeApi('messages.startBot', {
                bot: _AppUsersManager.getUserInput(botID),
                peer: _AppPeersManager.getInputPeerByID(peerID),
                random_id: randomID,
                start_param: startParam
            }).then(function (updates) {
                _ApiUpdatesManager.processUpdateMessage(updates);
            });
        }

        if (chatID) {
            if (_AppChatsManager.isChannel(chatID)) {
                return _MtpApiManager.invokeApi('channels.inviteToChannel', {
                    channel: _AppChatsManager.getChannelInput(chatID),
                    users: [_AppUsersManager.getUserInput(botID)]
                }).then(function (updates) {
                    _ApiUpdatesManager.processUpdateMessage(updates);
                    sendText(peerID, '/start@' + bot.username);
                }, function (error) {
                    if (error && error.type == 'USER_ALREADY_PARTICIPANT') {
                        var bot = _AppUsersManager.getUser(botID);
                        sendText(peerID, '/start@' + bot.username);
                        error.handled = true;
                    }
                });
            } else {
                return _MtpApiManager.invokeApi('messages.addChatUser', {
                    chat_id: _AppChatsManager.getChatInput(chatID),
                    user_id: _AppUsersManager.getUserInput(botID)
                }).then(function (updates) {
                    _ApiUpdatesManager.processUpdateMessage(updates);
                    sendText(peerID, '/start@' + bot.username);
                }, function (error) {
                    if (error && error.type == 'USER_ALREADY_PARTICIPANT') {
                        var bot = _AppUsersManager.getUser(botID);
                        sendText(peerID, '/start@' + bot.username);
                        error.handled = true;
                    }
                });
            }
        }

        return sendText(peerID, '/start');
    }

    function cancelPendingMessage (randomID) {
        var pendingData = pendingByRandomID[randomID];

        console.log('pending', randomID, pendingData);

        if (pendingData) {
            var peerID = pendingData[0],
                tempID = pendingData[1],
                historyStorage = historiesStorage[peerID],
                pos = historyStorage.pending.indexOf(tempID);

            _ApiUpdatesManager.processUpdateMessage({
                _: 'updateShort',
                update: {
                    _: 'updateDeleteMessages',
                    messages: [tempID]
                }
            });

            if (pos != -1) {
                historyStorage.pending.splice(pos, 1);
            }

            delete messagesForHistory[tempID];
            delete messagesStorage[tempID];

            return true;
        }

        return false;
    }

    function finalizePendingMessage(randomID, finalMessage) {
        var pendingData = pendingByRandomID[randomID];
        // console.log('pdata', randomID, pendingData);

        if (pendingData) {
            var peerID = pendingData[0],
                tempID = pendingData[1],
                historyStorage = historiesStorage[peerID],
                message,
                historyMessage;

            // console.log('pending', randomID, historyStorage.pending);
            var pos = historyStorage.pending.indexOf(tempID);
            if (pos != -1) {
                historyStorage.pending.splice(pos, 1);
            }

            if (message = messagesStorage[tempID]) {
                delete message.pending;
                delete message.error;
                delete message.random_id;
                delete message.send;
            }

            if (historyMessage = messagesForHistory[tempID]) {
                messagesForHistory[finalMessage.mid] = angular.extend(historyMessage, wrapForHistory(finalMessage.mid));
                delete historyMessage.pending;
                delete historyMessage.error;
                delete historyMessage.random_id;
                delete historyMessage.send;

                $rootScope.$broadcast('messages_pending');
            }

            delete messagesForHistory[tempID];
            delete messagesStorage[tempID];

            return message;
        }

        return false;
    }

    function openChatInviteLink (hash) {
        return _MtpApiManager.invokeApi('messages.checkChatInvite', {
            hash: hash
        }).then(function (chatInvite) {
            var chatTitle;
            if (chatInvite._ == 'chatInviteAlready') {
                _AppChatsManager.saveApiChat(chatInvite.chat);
                if (!chatInvite.chat.pFlags.left) {
                    return $rootScope.$broadcast('history_focus', {
                        peerString: _AppChatsManager.getChatString(chatInvite.chat.id)
                    });
                }
                chatTitle = chatInvite.chat.title;
            } else {
                chatTitle = chatInvite.title;
            }
            _ErrorService.confirm({
                type: (chatInvite.pFlags.channel && !chatInvite.pFlags.megagroup) ? 'JOIN_CHANNEL_BY_LINK' : 'JOIN_GROUP_BY_LINK',
                title: chatTitle
            }).then(function () {
                return _MtpApiManager.invokeApi('messages.importChatInvite', {
                    hash: hash
                }).then(function (updates) {
                    _ApiUpdatesManager.processUpdateMessage(updates);

                    if (updates.chats && updates.chats.length == 1) {
                        $rootScope.$broadcast('history_focus', {peerString: _AppChatsManager.getChatString(updates.chats[0].id)
                        });
                    }
                    else if (updates.updates && updates.updates.length) {
                        for (var i = 0, len = updates.updates.length, update; i < len; i++) {
                            update = updates.updates[i];
                            if (update._ == 'updateNewMessage') {
                                $rootScope.$broadcast('history_focus', {peerString: _AppChatsManager.getChatString(update.message.to_id.chat_id)
                                });
                                break;
                            }
                        }
                    }
                });
            });
        });
    }

    function getMessagePeer (message) {
        var toID = message.to_id && _AppPeersManager.getPeerID(message.to_id) || 0;

        if (toID < 0) {
            return toID;
        } else if (message.pFlags && message.pFlags.out || message.flags & 2) {
            return toID;
        }
        return message.from_id;
    }

    function wrapForDialog (msgID, dialog) {
        var useCache = msgID && dialog !== undefined;
        var unreadCount = dialog && dialog.unread_count;

        if (useCache && messagesForDialogs[msgID] !== undefined) {
            delete messagesForDialogs[msgID].typing;
            messagesForDialogs[msgID].unreadCount = unreadCount;
            return messagesForDialogs[msgID];
        }

        var message = angular.copy(messagesStorage[msgID]);

        if (!message || !message.to_id) {
            if (dialog && dialog.peerID) {
                message = {_: 'message', to_id: _AppPeersManager.getOutputPeer(dialog.peerID), deleted: true, date: tsNow(true), pFlags: {}};
                message.deleted = true;
            } else {
                return message;
            }
        }

        message.peerID = getMessagePeer(message);
        message.peerData = _AppPeersManager.getPeer(message.peerID);
        message.peerString = _AppPeersManager.getPeerString(message.peerID);
        message.unreadCount = unreadCount;

        if (message._ == 'messageService' && message.action.user_id) {
            message.action.user = _AppUsersManager.getUser(message.action.user_id);
        }

        // TODO
        //if (message.message && message.message.length) {
        //    message.richMessage = RichTextProcessor.wrapRichText(message.message.substr(0, 64), {noLinks: true, noLinebreaks: true});
        //}

        message.dateText = dateOrTimeFilter(message.date);

        if (useCache) {
            messagesForDialogs[msgID] = message;
        }

        return message;
    }

    function clearDialogCache (msgID) {
        delete messagesForDialogs[msgID];
    }

    function wrapForHistory (msgID) {
        if (messagesForHistory[msgID] !== undefined) {
            return messagesForHistory[msgID];
        }

        var message = angular.copy(messagesStorage[msgID]) || {id: msgID};

        if (message.media && message.media.progress !== undefined) {
            message.media.progress = messagesStorage[msgID].media.progress;
        }

        var fromUser = message.from_id && _AppUsersManager.getUser(message.from_id);
        var fromBot = fromUser && fromUser.pFlags.bot && fromUser.username || false;
        var withBot = (fromBot ||
            message.to_id && (
                message.to_id.chat_id ||
                message.to_id.user_id && _AppUsersManager.isBot(message.to_id.user_id)
            )
        );

        if (message.media) {
            // TODO
            //if (message.media.caption &&
            //    message.media.caption.length) {
            //    message.media.rCaption = RichTextProcessor.wrapRichText(message.media.caption, {
            //        noCommands: !withBot,
            //        fromBot: fromBot
            //    });
            //}

            switch (message.media._) {
                case 'messageMediaPhoto':
                    message.media.photo = _AppPhotosManager.wrapForHistory(message.media.photo.id);
                    break;

                case 'messageMediaVideo':
                    message.media.video = AppVideoManager.wrapForHistory(message.media.video.id);
                    break;

                case 'messageMediaDocument':
                    message.media.document = _AppDocsManager.wrapForHistory(message.media.document.id);
                    break;

                case 'messageMediaAudio':
                    message.media.audio = AppAudioManager.wrapForHistory(message.media.audio.id);
                    break;

                case 'messageMediaGeo':
                    var mapUrl = 'https://maps.google.com/?q=' + message.media.geo['lat'] + ',' + message.media.geo['long'];
                    message.media.mapUrl = $sce.trustAsResourceUrl(mapUrl);
                    break;

                case 'messageMediaVenue':
                    var mapUrl;
                    if (message.media.provider == 'foursquare' &&
                        message.media.venue_id) {
                        mapUrl = 'https://foursquare.com/v/' + encodeURIComponent(message.media.venue_id);
                    } else {
                        mapUrl = 'https://maps.google.com/?q=' + message.media.geo['lat'] + ',' + message.media.geo['long'];
                    }
                    message.media.mapUrl = $sce.trustAsResourceUrl(mapUrl);
                    break;

                case 'messageMediaContact':
                    // TODO
                    //message.media.rFullName = RichTextProcessor.wrapRichText(
                    //    message.media.first_name + ' ' + (message.media.last_name || ''),
                    //    {noLinks: true, noLinebreaks: true}
                    //);
                    break;

                case 'messageMediaWebPage':
                    if (!message.media.webpage ||
                        message.media.webpage._ == 'webPageEmpty') {
                        delete message.media;
                        break;
                    }
                    message.media.webpage = AppWebPagesManager.wrapForHistory(message.media.webpage.id);
                    break;
            }
        }
        else if (message.action) {
            switch (message.action._) {
                case 'messageActionChatEditPhoto':
                case 'messageActionChannelEditPhoto':
                    message.action.photo = _AppPhotosManager.wrapForHistory(message.action.photo.id);
                    break;

                case 'messageActionChatCreate':
                case 'messageActionChatEditTitle':
                case 'messageActionChannelCreate':
                case 'messageActionChannelEditTitle':
                    message.action.rTitle = RichTextProcessor.wrapRichText(message.action.title, {noLinebreaks: true}) || __('chat_title_deleted');
                    break;

                case 'messageActionBotIntro':
                    message.action.rDescription = RichTextProcessor.wrapRichText(message.action.description, {
                        noCommands: !withBot,
                        fromBot: fromBot
                    });
                    break;
            }
        }

        var replyToMsgID = message.reply_to_mid;
        if (replyToMsgID) {
            if (messagesStorage[replyToMsgID]) {
                message.reply_to_msg = wrapForDialog(replyToMsgID);
            } else {
                message.reply_to_msg = {mid: replyToMsgID, loading: true};
                if (needSingleMessages.indexOf(replyToMsgID) == -1) {
                    needSingleMessages.push(replyToMsgID);
                    if (fetchSingleMessagesTimeout === false) {
                        fetchSingleMessagesTimeout = setTimeout(fetchSingleMessages, 100);
                    }
                }
            }
        }

        return messagesForHistory[msgID] = message;
    }

    function wrapReplyMarkup (replyMarkup) {
        if (!replyMarkup ||
            replyMarkup._ == 'replyKeyboardHide') {
            return false;
        }
        if (replyMarkup.wrapped) {
            return replyMarkup;
        }
        var count = replyMarkup.rows && replyMarkup.rows.length || 0;
        if (count > 0 && count <= 4 && !replyMarkup.pFlags.resize) {
            replyMarkup.splitCount = count;
        }
        replyMarkup.wrapped = true;
        angular.forEach(replyMarkup.rows, function (markupRow) {
            angular.forEach(markupRow.buttons, function (markupButton) {
                markupButton.rText = RichTextProcessor.wrapRichText(markupButton.text, {noLinks: true, noLinebreaks: true});
            })
        })

        if (nextRandomInt(1)) {
            replyMarkup.rows = replyMarkup.rows.slice(0, 2);
        }
        return replyMarkup;
    }

    function fetchSingleMessages () {
        if (fetchSingleMessagesTimeout !== false) {
            clearTimeout(fetchSingleMessagesTimeout);
            fetchSingleMessagesTimeout = false;
        }
        if (!needSingleMessages.length) {
            return;
        }
        var mids = needSingleMessages.slice();
        needSingleMessages = [];

        var splitted = splitMessageIDsByChannels(mids);
        angular.forEach(splitted.msgIDs, function (msgIDs, channelID) {
            var promise;
            if (channelID > 0) {
                promise = _MtpApiManager.invokeApi('channels.getMessages', {
                    channel: _AppChatsManager.getChannelInput(channelID),
                    id: msgIDs
                });
            } else {
                promise = _MtpApiManager.invokeApi('messages.getMessages', {
                    id: msgIDs
                });
            }

            promise.then(function (getMessagesResult) {
                _AppUsersManager.saveApiUsers(getMessagesResult.users);
                _AppChatsManager.saveApiChats(getMessagesResult.chats);
                saveMessages(getMessagesResult.messages);

                $rootScope.$broadcast('messages_downloaded', splitted.mids[channelID]);
            })
        })
    }

    function incrementMessageViews () {
        if (incrementMessageViewsTimeout !== false) {
            clearTimeout(incrementMessageViewsTimeout);
            incrementMessageViewsTimeout = false;
        }
        if (!needIncrementMessageViews.length) {
            return;
        }
        var mids = needIncrementMessageViews.slice();
        needIncrementMessageViews = [];

        var splitted = splitMessageIDsByChannels(mids);
        angular.forEach(splitted.msgIDs, function (msgIDs, channelID) {
            // console.log('increment', msgIDs, channelID);
            _MtpApiManager.invokeApi('messages.getMessagesViews', {
                peer: _AppPeersManager.getInputPeerByID(-channelID),
                id: msgIDs,
                increment: true
            }).then(function (views) {
                if (channelID) {
                    var mids = splitted.mids[channelID];
                    var updates = [];
                    for (var i = 0; i < mids.length; i++) {
                        updates.push({
                            _: 'updateChannelMessageViews',
                            channel_id: channelID,
                            id: mids[i],
                            views: views[i]
                        });
                    }
                    _ApiUpdatesManager.processUpdateMessage({
                        _: 'updates',
                        updates: updates,
                        chats: [],
                        users: []
                    });
                }
            })
        })
    }

    function regroupWrappedHistory (history, limit) {
        if (!history || !history.length) {
            return false;
        }
        var start = 0,
            len = history.length,
            end = len,
            i, curDay, prevDay, curMessage, prevMessage, curGrouped, prevGrouped,
            wasUpdated = false,
            groupFwd = !Config.Mobile;

        if (limit > 0) {
            end = Math.min(limit, len);
        } else if (limit < 0) {
            start = Math.max(0, end + limit);
        }

        for (i = start; i < end; i++) {
            curMessage = history[i];
            curDay = Math.floor((curMessage.date + midnightOffset) / 86400);

            prevGrouped = prevMessage && prevMessage.grouped;
            curGrouped = curMessage.grouped;

            if (curDay === prevDay) {
                if (curMessage.needDate) {
                    delete curMessage.needDate;
                    wasUpdated = true;
                }
            } else if (!i || prevMessage) {
                if (!curMessage.needDate) {
                    curMessage.needDate = true;
                    wasUpdated = true;
                }
            }

            if (curMessage.fwdFromID &&
                curMessage.media &&
                curMessage.media.document &&
                (curMessage.media.document.sticker || curMessage.media.document.audioTitle) &&
                (curMessage.fromID != (prevMessage || {}).fromID || !(prevMessage || {}).fwdFromID)) {
                delete curMessage.fwdFromID;
                curMessage._ = 'message';
            }

            if (curMessage.views &&
                !incrementedMessageViews[curMessage.mid]) {
                incrementedMessageViews[curMessage.mid] = true;
                needIncrementMessageViews.push(curMessage.mid);
                if (incrementMessageViewsTimeout === false) {
                    incrementMessageViewsTimeout = setTimeout(incrementMessageViews, 10000);
                }
            }

            if (prevMessage &&
                    // !curMessage.views &&
                prevMessage.fromID == curMessage.fromID &&
                !prevMessage.fwdFromID == !curMessage.fwdFromID &&
                prevMessage.viaBotID == curMessage.viaBotID &&
                !prevMessage.action &&
                !curMessage.action &&
                curMessage.date < prevMessage.date + 900) {

                var singleLine = curMessage.message && curMessage.message.length < 70 && curMessage.message.indexOf("\n") == -1 && !curMessage.reply_to_mid;
                if (groupFwd &&
                    curMessage.fwdFromID &&
                    curMessage.fwdFromID == prevMessage.fwdFromID &&
                    curMessage.viaBotID == prevMessage.viaBotID) {
                    curMessage.grouped = singleLine ? 'im_grouped_fwd_short' : 'im_grouped_fwd';
                } else {
                    curMessage.grouped = !curMessage.fwdFromID && singleLine ? 'im_grouped_short' : 'im_grouped';
                }
                if (groupFwd && curMessage.fwdFromID) {
                    if (!prevMessage.grouped) {
                        prevMessage.grouped = 'im_grouped_fwd_start';
                    }
                    if (curMessage.grouped && i == len - 1) {
                        curMessage.grouped += ' im_grouped_fwd_end';
                    }
                }
            } else if (prevMessage || !i) {
                delete curMessage.grouped;

                if (groupFwd && prevMessage && prevMessage.grouped && prevMessage.fwdFromID) {
                    prevMessage.grouped += ' im_grouped_fwd_end';
                }
            }
            if (!wasUpdated && prevGrouped != (prevMessage && prevMessage.grouped)) {
                wasUpdated = true;
            }
            prevMessage = curMessage;
            prevDay = curDay;
        }
        if (!wasUpdated && curGrouped != (prevMessage && prevMessage.grouped)) {
            wasUpdated = true;
        }

        return wasUpdated;
    }

    function getMessageThumb (message, thumbWidth, thumbHeight) {
        var thumbPhotoSize;
        var sticker = false;
        if (message.media) {
            switch (message.media._) {
                case 'messageMediaPhoto':
                    thumbPhotoSize = _AppPhotosManager.choosePhotoSize(message.media.photo, thumbWidth, thumbHeight);
                    break;

                case 'messageMediaDocument':
                    thumbPhotoSize = message.media.document.thumb;
                    if (message.media.document.sticker) {
                        sticker = true;
                    }
                    break;

                case 'messageMediaVideo':
                    thumbPhotoSize = message.media.video.thumb;
                    break;
            }
        }

        if (thumbPhotoSize && thumbPhotoSize._ != 'photoSizeEmpty') {
            var dim = calcImageInBox(thumbPhotoSize.w, thumbPhotoSize.h, thumbWidth, thumbHeight, true);

            var thumb = {
                width: dim.w,
                height: dim.h,
                location: thumbPhotoSize.location,
                size: thumbPhotoSize.size
            };
            if (sticker) {
                thumb.location.sticker = true;
            }

            return thumb;
        }

        return false;
    }

    function incrementMaxSeenID (maxID) {
        if (maxSeenID !== false && maxID && maxID > maxSeenID) {
            _Storage.set({
                max_seen_msg: maxID
            });
        }
    }

    function notifyAboutMessage (message, options) {
        options = options || {};

        var peerID = getMessagePeer(message);
        var peerString;
        var notification = {},
            notificationMessage = false,
            notificationPhoto;

        if (message.fwdFromID && options.fwd_count) {
            notificationMessage = fwdMessagesPluralize(options.fwd_count);
        } else if (message.message) {
        } else if (message.media) {
            switch (message.media._) {
                case 'messageMediaPhoto':
                    notificationMessage = __('conversation_media_photo_raw');
                    break;
                case 'messageMediaVideo':
                    notificationMessage = __('conversation_media_video_raw');
                    break;
                case 'messageMediaDocument':
                    switch (message.media.document.isSpecial) {
                        case 'gif':
                            notificationMessage = __('conversation_media_gif_raw');
                            break;
                        case 'sticker':
                            notificationMessage = __('conversation_media_sticker');
                            var stickerEmoji = message.media.document.stickerEmojiRaw;
                            if (stickerEmoji !== undefined) {
                                notificationMessage = RichTextProcessor.wrapPlainText(stickerEmoji) + ' ' + notificationMessage;
                            }
                            break;
                        case 'audio':
                            notificationMessage = __('conversation_media_audio_raw');
                            break;
                        default:
                            notificationMessage = message.media.document.file_name || __('conversation_media_attachment_raw');
                            break;

                    }
                    if (message.media.document.sticker) {
                        notificationMessage = __('conversation_media_sticker');
                        var stickerEmoji = message.media.document.stickerEmojiRaw;
                        if (stickerEmoji !== undefined) {
                            notificationMessage = RichTextProcessor.wrapPlainText(stickerEmoji) + ' (' + notificationMessage + ')';
                        }
                    } else {
                        notificationMessage = message.media.document.file_name || __('conversation_media_document_raw');
                    }
                    break;
                case 'messageMediaAudio':
                    notificationMessage = __('conversation_media_audio_raw');
                    break;
                case 'messageMediaGeo':
                case 'messageMediaVenue':
                    notificationMessage = __('conversation_media_location_raw');
                    break;
                case 'messageMediaContact':
                    notificationMessage = __('conversation_media_contact_raw');
                    break;
                default:
                    notificationMessage = __('conversation_media_attachment_raw');
                    break;
            }
        } else if (message._ == 'messageService') {
            switch (message.action._) {
                case 'messageActionChatCreate':
                    notificationMessage = __('conversation_group_created_raw');
                    break;
                case 'messageActionChatEditTitle':
                    notificationMessage = __('conversation_group_renamed_raw');
                    break;
                case 'messageActionChatEditPhoto':
                    notificationMessage = __('conversation_group_photo_updated_raw');
                    break;
                case 'messageActionChatDeletePhoto':
                    notificationMessage = __('conversation_group_photo_removed_raw');
                    break;
                case 'messageActionChatAddUser':
                case 'messageActionChatAddUsers':
                    notificationMessage = __('conversation_invited_user_message_raw_raw');
                    break;
                case 'messageActionChatReturn':
                    notificationMessage = __('conversation_returned_to_group_raw');
                    break;
                case 'messageActionChatJoined':
                    notificationMessage = __('conversation_joined_group_raw');
                    break;
                case 'messageActionChatDeleteUser':
                    notificationMessage = __('conversation_kicked_user_message_raw');
                    break;
                case 'messageActionChatLeave':
                    notificationMessage = __('conversation_left_group_raw');
                    break;
                case 'messageActionChatJoinedByLink':
                    notificationMessage = __('conversation_joined_by_link_raw');
                    break;
                case 'messageActionChannelCreate':
                    notificationMessage = __('conversation_created_channel_raw');
                    break;
                case 'messageActionChannelEditTitle':
                    notificationMessage = __('conversation_changed_channel_name_raw');
                    break;
                case 'messageActionChannelEditPhoto':
                    notificationMessage = __('conversation_changed_channel_photo_raw');
                    break;
                case 'messageActionChannelDeletePhoto':
                    notificationMessage = __('conversation_removed_channel_photo_raw');
                    break;
            }
        }


        if (peerID > 0) {
            var fromUser = _AppUsersManager.getUser(message.from_id);
            var fromPhoto = _AppUsersManager.getUserPhoto(message.from_id);

            notification.title = (fromUser.first_name || '') +
                (fromUser.first_name && fromUser.last_name ? ' ' : '') +
                (fromUser.last_name || '');
            if (!notification.title) {
                notification.title = fromUser.phone || __('conversation_unknown_user_raw');
            }

            notificationPhoto = fromPhoto;

            peerString = _AppUsersManager.getUserString(peerID);

        } else {
            notification.title = _AppChatsManager.getChat(-peerID).title || __('conversation_unknown_chat_raw');

            if (message.from_id > 0) {
                var fromUser = _AppUsersManager.getUser(message.from_id);
                notification.title = (fromUser.first_name || fromUser.last_name || __('conversation_unknown_user_raw')) +
                    ' @ ' +
                    notification.title;
            }

            notificationPhoto = _AppChatsManager.getChatPhoto(-peerID);

            peerString = _AppChatsManager.getChatString(-peerID);
        }

        notification.title = RichTextProcessor.wrapPlainText(notification.title);

        notification.onclick = function () {
            $rootScope.$broadcast('history_focus', {
                peerString: peerString,
                messageID: message.flags & 16 ? message.mid : 0,
            });
        };

        notification.message = notificationMessage;
        notification.key = 'msg' + message.mid;
        notification.tag = peerString;

        if (notificationPhoto.location && !notificationPhoto.location.empty) {
            MtpApiFileManager.downloadSmallFile(notificationPhoto.location, notificationPhoto.size);
        }
    }

    var newMessagesHandlePromise = false;
    var newMessagesToHandle = {};
    var newDialogsHandlePromise = false;
    var newDialogsToHandle = {};
    var notificationsHandlePromise = false;
    var notificationsToHandle = {};

    function handleNewMessages () {
        $timeout.cancel(newMessagesHandlePromise);
        newMessagesHandlePromise = false;
        $rootScope.$broadcast('history_multiappend', newMessagesToHandle);
        newMessagesToHandle = {};
    }

    function handleNewDialogs () {
        $timeout.cancel(newDialogsHandlePromise);
        newDialogsHandlePromise = false;
        angular.forEach(newDialogsToHandle, function (dialog) {
            pushDialogToStorage(dialog);
        });
        $rootScope.$broadcast('dialogs_multiupdate', newDialogsToHandle);
        newDialogsToHandle = {};
    }

    function handleNotifications () {
        $timeout.cancel(notificationsHandlePromise);
        notificationsHandlePromise = false;

        var timeout = $rootScope.idle.isIDLE && StatusManager.isOtherDeviceActive() ? 30000 : 1000;
        angular.forEach(notificationsToHandle, function (notifyPeerToHandle) {
            notifyPeerToHandle.isMutedPromise.then(function (muted) {
                var topMessage = notifyPeerToHandle.top_message;
                if (muted ||
                    !topMessage.pFlags.unread) {
                    return;
                }
                setTimeout(function () {
                    if (topMessage.pFlags.unread) {
                        notifyAboutMessage(topMessage, {
                            fwd_count: notifyPeerToHandle.fwd_count
                        });
                    }
                }, timeout);
            });
        });

        notificationsToHandle = {};
    }

    $rootScope.$on('apiUpdate', function (e, update) {
        // if (update._ != 'updateUserStatus') {
        //   console.log('on apiUpdate', update);
        // }
        switch (update._) {
            case 'updateMessageID':
                var randomID = update.random_id;
                var pendingData = pendingByRandomID[randomID];
                if (pendingData) {
                    var peerID = pendingData[0];
                    var channelID = _AppPeersManager.isChannel(peerID) ? -peerID : 0;
                    pendingByMessageID[getFullMessageID(update.id, channelID)] = randomID;
                }
                break;

            case 'updateNewMessage':
            case 'updateNewChannelMessage':
                var message = update.message,
                    peerID = getMessagePeer(message),
                    historyStorage = historiesStorage[peerID],
                    messageForMe = true;

                if (update._ == 'updateNewChannelMessage') {
                    if (!_AppChatsManager.isMegagroup(-peerID) &&
                        !(message.flags & 16 || message.flags & 2 || (message.flags & 256) == 0)) {
                        // we don't support not important messages in channels yet
                        break;
                    }
                    var chat = _AppChatsManager.getChat(-peerID);
                    if (chat.pFlags && (chat.pFlags.left || chat.pFlags.kicked)) {
                        break;
                    }
                }

                saveMessages([message]);

                if (historyStorage !== undefined) {
                    var history = historyStorage.history;
                    if (history.indexOf(message.mid) != -1) {
                        return false;
                    }
                    var topMsgID = history[0];
                    history.unshift(message.mid);
                    if (message.mid > 0 && message.mid < topMsgID) {
                        history.sort(function (a, b) {
                            return b - a;
                        });
                    }
                    if (historyStorage.count !== null) {
                        historyStorage.count++;
                    }
                } else {
                    historyStorage = historiesStorage[peerID] = {
                        count: null,
                        history: [message.mid],
                        pending: []
                    };
                }

                if (mergeReplyKeyboard(historyStorage, message)) {
                    $rootScope.$broadcast('history_reply_markup', {peerID: peerID})
                }

                if (!message.pFlags.out && message.from_id) {
                    _AppUsersManager.forceUserOnline(message.from_id);
                }

                var randomID = pendingByMessageID[message.mid],
                    pendingMessage;

                if (randomID) {
                    if (pendingMessage = finalizePendingMessage(randomID, message)) {
                        $rootScope.$broadcast('history_update', {peerID: peerID});
                    }
                    delete pendingByMessageID[message.mid];
                }

                if (!pendingMessage) {
                    if (newMessagesToHandle[peerID] === undefined) {
                        newMessagesToHandle[peerID] = [];
                    }
                    newMessagesToHandle[peerID].push(message.mid);
                    if (!newMessagesHandlePromise) {
                        newMessagesHandlePromise = $timeout(handleNewMessages, 0);
                    }
                }

                var foundDialog = getDialogByPeerID(peerID);
                var dialog;
                var inboxUnread = !message.pFlags.out && message.pFlags.unread;

                if (foundDialog.length) {
                    dialog = foundDialog[0];
                    dialog.top_message = message.mid;
                    if (inboxUnread) {
                        dialog.unread_count++;
                    }
                } else {
                    SearchIndexManager.indexObject(peerID, _AppPeersManager.getPeerSearchText(peerID), dialogsIndex);
                    dialog = {
                        peerID: peerID,
                        unread_count: inboxUnread ? 1 : 0,
                        top_message: message.mid
                    };
                }
                dialog.index = generateDialogIndex(message.date);

                newDialogsToHandle[peerID] = dialog;
                if (!newDialogsHandlePromise) {
                    newDialogsHandlePromise = $timeout(handleNewDialogs, 0);
                }

                if (inboxUnread && ($rootScope.selectedPeerID != peerID || $rootScope.idle.isIDLE)) {

                    var notifyPeer = message.flags & 16 ? message.from_id : peerID;
                    var notifyPeerToHandle = notificationsToHandle[notifyPeer];
                    if (notifyPeerToHandle === undefined) {
                        notifyPeerToHandle = notificationsToHandle[notifyPeer] = {
                            fwd_count: 0,
                            from_id: 0
                        };
                    }

                    if (notifyPeerToHandle.from_id != message.from_id) {
                        notifyPeerToHandle.from_id = message.from_id;
                        notifyPeerToHandle.fwd_count = 0;
                    }
                    if (message.fwdFromID) {
                        notifyPeerToHandle.fwd_count++;
                    }

                    notifyPeerToHandle.top_message = message;

                    if (!notificationsHandlePromise) {
                        notificationsHandlePromise = $timeout(handleNotifications, 1000);
                    }
                }

                incrementMaxSeenID(message.id);
                break;

            case 'updateReadHistoryInbox':
            case 'updateReadHistoryOutbox':
            case 'updateReadChannelInbox':
                var isOut = update._ == 'updateReadHistoryOutbox';
                var channelID = update.channel_id;
                var maxID = getFullMessageID(update.max_id, channelID);
                var peerID = channelID ? -channelID : _AppPeersManager.getPeerID(update.peer);
                var foundDialog = getDialogByPeerID(peerID);
                var history = (historiesStorage[peerID] || {}).history || [];
                var newUnreadCount = false;
                var length = history.length;
                var foundAffected = false;
                var messageID, message, i;

                if (peerID > 0 && isOut) {
                    _AppUsersManager.forceUserOnline(peerID);
                }

                for (i = 0; i < length; i++) {
                    messageID = history[i];
                    if (messageID > maxID) {
                        continue;
                    }
                    message = messagesStorage[messageID];

                    if (message.pFlags.out != isOut) {
                        continue;
                    }
                    if (!message.pFlags.unread) {
                        break;
                    }
                    // console.log('read', messageID, message.pFlags.unread, message);
                    if (message && message.pFlags.unread) {
                        message.pFlags.unread = false;
                        if (messagesForHistory[messageID]) {
                            messagesForHistory[messageID].pFlags.unread = false;
                            if (!foundAffected) {
                                foundAffected = true;
                            }
                        }
                        if (messagesForDialogs[messageID]) {
                            messagesForDialogs[messageID].pFlags.unread = false;
                        }
                        if (!message.pFlags.out) {
                            if (foundDialog) {
                                newUnreadCount = --foundDialog[0].unread_count;
                            }
                        }
                    }
                }
                if (!isOut && foundDialog) {
                    if (newUnreadCount &&
                        foundDialog[0].top_message <= maxID) {
                        newUnreadCount = foundDialog[0].unread_count = 0;
                    }
                    if (!foundDialog[0]) {
                        console.error('empty found dialog', foundDialog, update);
                    }
                    foundDialog[0].read_inbox_max_id = maxID;
                }

                if (newUnreadCount !== false) {
                    $rootScope.$broadcast('dialog_unread', {peerID: peerID, count: newUnreadCount});
                }
                if (foundAffected) {
                    $rootScope.$broadcast('messages_read');
                }
                break;

            case 'updateReadMessagesContents':
                var messages = update.messages;
                var len = messages.length;
                var i, messageID, message, historyMessage;
                for (i = 0; i < len; i++) {
                    messageID = messages[i];
                    if (message = messagesStorage[messageID]) {
                        delete message.pFlags.media_unread;
                    }
                    if (historyMessage = messagesForHistory[messageID]) {
                        delete historyMessage.pFlags.media_unread;
                    }
                }
                break;

            case 'updateDeleteMessages':
            case 'updateDeleteChannelMessages':
                var dialogsUpdated = {};
                var historiesUpdated = {};
                var channelID = update.channel_id;
                var messageID, message, i, peerID, foundDialog, history;

                for (i = 0; i < update.messages.length; i++) {
                    messageID = getFullMessageID(update.messages[i], channelID);
                    message = messagesStorage[messageID];
                    if (message) {
                        peerID = getMessagePeer(message);
                        history = historiesUpdated[peerID] || (historiesUpdated[peerID] = {count: 0, unread: 0, msgs: {}});

                        if (!message.pFlags.out && message.pFlags.unread) {
                            history.unread++;
                        }
                        history.count++;
                        history.msgs[messageID] = true;

                        if (messagesForHistory[messageID]) {
                            messagesForHistory[messageID].deleted = true;
                            delete messagesForHistory[messageID];
                        }
                        if (messagesForDialogs[messageID]) {
                            messagesForDialogs[messageID].deleted = true;
                            delete messagesForDialogs[messageID];
                        }
                        message.deleted = true;
                        messagesStorage[messageID] = {
                            deleted: true,
                            id: messageID,
                            from_id: message.from_id,
                            to_id: message.to_id,
                            flags: message.flags,
                            pFlags: message.pFlags,
                            date: message.date
                        };
                    }
                }

                angular.forEach(historiesUpdated, function (updatedData, peerID) {
                    var foundDialog = getDialogByPeerID(peerID);
                    if (foundDialog) {
                        if (updatedData.unread) {
                            foundDialog[0].unread_count -= updatedData.unread;

                            $rootScope.$broadcast('dialog_unread', {peerID: peerID, count: foundDialog[0].unread_count});
                        }
                    }

                    var historyStorage = historiesStorage[peerID];
                    if (historyStorage !== undefined) {
                        var newHistory = [],
                            newPending = [];
                        for (var i = 0; i < historyStorage.history.length; i++) {
                            if (!updatedData.msgs[historyStorage.history[i]]) {
                                newHistory.push(historyStorage.history[i]);
                            }
                        }
                        historyStorage.history = newHistory;
                        if (updatedData.count &&
                            historyStorage.count !== null &&
                            historyStorage.count > 0) {
                            historyStorage.count -= updatedData.count;
                            if (historyStorage.count < 0) {
                                historyStorage.count = 0;
                            }
                        }

                        for (var i = 0; i < historyStorage.pending.length; i++) {
                            if (!updatedData.msgs[historyStorage.pending[i]]) {
                                newPending.push(historyStorage.pending[i]);
                            }
                        }
                        historyStorage.pending = newPending;

                        $rootScope.$broadcast('history_delete', {peerID: peerID, msgs: updatedData.msgs});
                    }
                });
                break;

            case 'updateChannel':
                var channelID = update.channel_id;
                var peerID = -channelID;
                var channel = _AppChatsManager.getChat(channelID);

                var needDialog = channel._ == 'channel' && (!channel.pFlags.left && !channel.pFlags.kicked);
                var foundDialog = getDialogByPeerID(peerID);
                var hasDialog = foundDialog.length > 0;

                var canViewHistory = channel._ == 'channel' && (channel.username || !channel.pFlags.left && !channel.pFlags.kicked) && true || false;
                var hasHistory = historiesStorage[peerID] !== undefined;

                if (canViewHistory != hasHistory) {
                    delete historiesStorage[peerID];
                    $rootScope.$broadcast('history_forbidden', peerID);
                }
                if (hasDialog != needDialog) {
                    if (needDialog) {
                        reloadChannelDialog(channelID);
                    } else {
                        if (foundDialog[0]) {
                            dialogsStorage.dialogs.splice(foundDialog[1], 1);
                            $rootScope.$broadcast('dialog_drop', {peerID: peerID});
                        }
                    }
                }
                break;

            case 'updateChannelReload':
                var channelID = update.channel_id;
                var peerID = -channelID;
                var foundDialog = getDialogByPeerID(peerID);
                if (foundDialog[0]) {
                    dialogsStorage.dialogs.splice(foundDialog[1], 1);
                }
                delete historiesStorage[peerID];
                reloadChannelDialog(channelID).then(function () {
                    $rootScope.$broadcast('history_reload', peerID);
                });
                break;

            case 'updateChannelMessageViews':
                var views = update.views;
                var mid = getFullMessageID(update.id, update.channel_id);
                var message = getMessage(mid);
                if (message && message.views && message.views < views) {
                    message.views = views;
                    $rootScope.$broadcast('message_views', {
                        mid: mid,
                        views: views
                    });
                }
                break;
        }
    });

    function reloadChannelDialog (channelID) {
        var peerID = -channelID;
        return $q.all([
            AppProfileManager.getChannelFull(channelID, true),
            getHistory(peerID, 0)
        ]).then(function (results) {
            var channelResult = results[0];
            var historyResult = results[1];
            var topMsgID = historyResult.history[0];
            var dialog = {
                _: 'dialogChannel',
                peer: _AppPeersManager.getOutputPeer(peerID),
                top_message: topMsgID,
                top_important_message: topMsgID,
                read_inbox_max_id: channelResult.read_inbox_max_id,
                unread_count: channelResult.unread_count,
                unread_important_count: channelResult.unread_important_count,
                notify_settings: channelResult.notify_settings
            };
            saveChannelDialog(channelID, dialog);

            var updatedDialogs = {};
            updatedDialogs[peerID] = dialog;
            $rootScope.$broadcast('dialogs_multiupdate', updatedDialogs);
        });
    }

    $rootScope.$on('webpage_updated', function (e, eventData) {
        angular.forEach(eventData.msgs, function (msgID) {
            var historyMessage = messagesForHistory[msgID];
            if (historyMessage) {
                historyMessage.media = {
                    _: 'messageMediaWebPage',
                    webpage: AppWebPagesManager.wrapForHistory(eventData.id)
                };
            }
        })
    });

    return {
        getConversations: getConversations,
        getHistory: getHistory,
        getSearch: getSearch,
        getMessage: getMessage,
        getReplyKeyboard: getReplyKeyboard,
        readHistory: readHistory,
        readMessages: readMessages,
        flushHistory: flushHistory,
        deleteMessages: deleteMessages,
        saveMessages: saveMessages,
        sendText: sendText,
        sendFile: sendFile,
        sendOther: sendOther,
        forwardMessages: forwardMessages,
        startBot: startBot,
        openChatInviteLink: openChatInviteLink,
        convertMigratedPeer: convertMigratedPeer,
        getMessagePeer: getMessagePeer,
        getFullMessageID: getFullMessageID,
        getMessageThumb: getMessageThumb,
        clearDialogCache: clearDialogCache,
        wrapForDialog: wrapForDialog,
        wrapForHistory: wrapForHistory,
        wrapReplyMarkup: wrapReplyMarkup,
        regroupWrappedHistory: regroupWrappedHistory
    }
})();
var _AppUsersManager = (function () {
    var users = {},
        usernames = {},
        userAccess = {},
        cachedPhotoLocations = {},
        contactsFillPromise,
        contactsList,
        contactsIndex = SearchIndexManager.createIndex(),
        myID,
        serverTimeOffset = 0;

    _Storage.get('server_time_offset').then(function (to) {
        if (to) {
            serverTimeOffset = to;
        }
    });
    _MtpApiManager.getUserID().then(function (id) {
        myID = id;
    });

    function fillContacts () {
        if (contactsFillPromise) {
            return contactsFillPromise;
        }
        return contactsFillPromise = _MtpApiManager.invokeApi('contacts.getContacts', {
            hash: ''
        }).then(function (result) {
            var userID, searchText, i;
            contactsList = [];
            saveApiUsers(result.users);

            for (var i = 0; i < result.contacts.length; i++) {
                userID = result.contacts[i].user_id;
                contactsList.push(userID);
                SearchIndexManager.indexObject(userID, getUserSearchText(userID), contactsIndex);
            }

            return contactsList;
        });
    }

    function getUserSearchText (id) {
        var user = users[id];
        if (!user) {
            return false;
        }

        return (user.first_name || '') + ' ' + (user.last_name || '') + ' ' + (user.phone || '') + ' ' + (user.username || '');
    }

    function getContacts (query) {
        return fillContacts().then(function (contactsList) {
            if (angular.isString(query) && query.length) {
                var results = SearchIndexManager.search(query, contactsIndex),
                    filteredContactsList = [];

                for (var i = 0; i < contactsList.length; i++) {
                    if (results[contactsList[i]]) {
                        filteredContactsList.push(contactsList[i])
                    }
                }
                contactsList = filteredContactsList;
            }

            return contactsList;
        });
    }

    function resolveUsername (username) {
        return usernames[username] || 0;
    }

    function saveApiUsers (apiUsers) {
        angular.forEach(apiUsers, saveApiUser);
    }

    function saveApiUser (apiUser, noReplace) {
        if (!angular.isObject(apiUser) ||
            noReplace && angular.isObject(users[apiUser.id]) && users[apiUser.id].first_name) {
            return;
        }

        var userID = apiUser.id;

        if (apiUser.phone) {
            apiUser.rPhone = $filter.call('phoneNumber')(apiUser.phone);
        }

        apiUser.num = (Math.abs(userID) % 8) + 1;

        // TODO

        //if (apiUser.first_name) {
        //    apiUser.rFirstName = _RichTextProcessor.wrapRichText(apiUser.first_name, {noLinks: true, noLinebreaks: true});
        //    apiUser.rFullName = apiUser.last_name ? _RichTextProcessor.wrapRichText(apiUser.first_name + ' ' + (apiUser.last_name || ''), {noLinks: true, noLinebreaks: true}) : apiUser.rFirstName;
        //} else {
        //    apiUser.rFirstName = _RichTextProcessor.wrapRichText(apiUser.last_name, {noLinks: true, noLinebreaks: true}) || apiUser.rPhone || _('user_first_name_deleted');
        //    apiUser.rFullName = _RichTextProcessor.wrapRichText(apiUser.last_name, {noLinks: true, noLinebreaks: true}) || apiUser.rPhone || _('user_name_deleted');
        //}

        if (apiUser.username) {
            var searchUsername = SearchIndexManager.cleanUsername(apiUser.username);
            usernames[searchUsername] = userID;
        }

        if (apiUser.pFlags === undefined) {
            apiUser.pFlags = {};
        }

        apiUser.sortName = apiUser.pFlags.deleted ? '' : SearchIndexManager.cleanSearchText(apiUser.first_name + ' ' + (apiUser.last_name || ''));

        var nameWords = apiUser.sortName.split(' ');
        var firstWord = nameWords.shift();
        var lastWord = nameWords.pop();
        apiUser.initials = firstWord.charAt(0) + (lastWord ? lastWord.charAt(0) : firstWord.charAt(1));

        if (apiUser.status) {
            if (apiUser.status.expires) {
                apiUser.status.expires -= serverTimeOffset;
            }
            if (apiUser.status.was_online) {
                apiUser.status.was_online -= serverTimeOffset;
            }
        }
        if (apiUser.pFlags.bot) {
            apiUser.sortStatus = -1;
        } else {
            apiUser.sortStatus = getUserStatusForSort(apiUser.status);
        }

        var result = users[userID];
        if (result === undefined) {
            result = users[userID] = apiUser;
        } else {
            safeReplaceObject(result, apiUser);
        }
        $rootScope.$broadcast('user_update', userID);

        if (cachedPhotoLocations[userID] !== undefined) {
            safeReplaceObject(cachedPhotoLocations[userID], apiUser && apiUser.photo && apiUser.photo.photo_small || {empty: true});
        }
    };

    function saveUserAccess (id, accessHash) {
        userAccess[id] = accessHash;
    }

    function getUserStatusForSort(status) {
        if (status) {
            var expires = status.expires || status.was_online;
            if (expires) {
                return expires;
            }
            var timeNow = tsNow(true);
            switch (status._) {
                case 'userStatusRecently':
                    return timeNow - 86400 * 3;
                case 'userStatusLastWeek':
                    return timeNow - 86400 * 7;
                case 'userStatusLastMonth':
                    return timeNow - 86400 * 30;
            }
        }

        return 0;
    }

    function getUser (id) {
        if (angular.isObject(id)) {
            return id;
        }
        return users[id] || {id: id, deleted: true, num: 1, access_hash: userAccess[id]};
    }

    function getSelf() {
        return getUser(myID);
    }

    function isBot(id) {
        return users[id] && users[id].pFlags.bot;
    }

    function hasUser(id) {
        return angular.isObject(users[id]);
    }

    function getUserPhoto(id) {
        var user = getUser(id);

        if (id == 333000) {
            return {
                placeholder: 'img/placeholders/DialogListAvatarSystem@2x.png'
            }
        };

        if (cachedPhotoLocations[id] === undefined) {
            cachedPhotoLocations[id] = user && user.photo && user.photo.photo_small || {empty: true};
        }

        return {
            num: user.num,
            placeholder: 'img/placeholders/UserAvatar' + user.num + '@2x.png',
            location: cachedPhotoLocations[id]
        };
    }

    function getUserString (id) {
        var user = getUser(id);
        return 'u' + id + (user.access_hash ? '_' + user.access_hash : '');
    }

    function getUserInput (id) {
        var user = getUser(id);
        if (user.pFlags.self) {
            return {_: 'inputUserSelf'};
        }
        return {
            _: 'inputUser',
            user_id: id,
            access_hash: user.access_hash || 0
        };
    }

    function updateUsersStatuses () {
        var timestampNow = tsNow(true);
        angular.forEach(users, function (user) {
            if (user.status &&
                user.status._ == 'userStatusOnline' &&
                user.status.expires < timestampNow) {
                user.status = user.status.wasStatus ||
                    {_: 'userStatusOffline', was_online: user.status.expires};
                delete user.status.wasStatus;
                $rootScope.$broadcast('user_update', user.id);
            }
        });
    }

    function forceUserOnline (id) {
        if (isBot(id)) {
            return;
        }
        var user = getUser(id);
        if (user &&
            user.status &&
            user.status._ != 'userStatusOnline' &&
            user.status._ != 'userStatusEmpty') {

            var wasStatus;
            if (user.status._ != 'userStatusOffline') {
                delete user.status.wasStatus;
                wasStatus = angular.copy(user.status);
            }
            user.status = {
                _: 'userStatusOnline',
                expires: tsNow(true) + 60,
                wasStatus: wasStatus
            };
            user.sortStatus = getUserStatusForSort(user.status);
            $rootScope.$broadcast('user_update', id);
        }
    }

    function wrapForFull (id) {
        var user = getUser(id);

        return user;
    }

    function openUser (userID, override) {
        var scope = $rootScope.$new();
        scope.userID = userID;
        scope.override = override || {};

        var modalInstance = $modal.open({
            templateUrl: templateUrl('user_modal'),
            controller: 'UserModalController',
            scope: scope,
            windowClass: 'user_modal_window mobile_modal',
            backdrop: 'single'
        });
    };

    function importContact (phone, firstName, lastName) {
        return _MtpApiManager.invokeApi('contacts.importContacts', {
            contacts: [{
                _: 'inputPhoneContact',
                client_id: '1',
                phone: phone,
                first_name: firstName,
                last_name: lastName
            }],
            replace: false
        }).then(function (importedContactsResult) {
            saveApiUsers(importedContactsResult.users);

            var foundUserID = false;
            angular.forEach(importedContactsResult.imported, function (importedContact) {
                onContactUpdated(foundUserID = importedContact.user_id, true);
            });

            return foundUserID || false;
        });
    };

    function importContacts (contacts) {
        var inputContacts = [],
            i, j;

        for (i = 0; i < contacts.length; i++) {
            for (j = 0; j < contacts[i].phones.length; j++) {
                inputContacts.push({
                    _: 'inputPhoneContact',
                    client_id: (i << 16 | j).toString(10),
                    phone: contacts[i].phones[j],
                    first_name: contacts[i].first_name,
                    last_name: contacts[i].last_name
                });
            }
        }

        return _MtpApiManager.invokeApi('contacts.importContacts', {
            contacts: inputContacts,
            replace: false
        }).then(function (importedContactsResult) {
            saveApiUsers(importedContactsResult.users);

            var result = [];
            angular.forEach(importedContactsResult.imported, function (importedContact) {
                onContactUpdated(importedContact.user_id, true);
                result.push(importedContact.user_id);
            });

            return result;
        });
    };

    function deleteContacts (userIDs) {
        var ids = []
        angular.forEach(userIDs, function (userID) {
            ids.push(getUserInput(userID))
        });
        return _MtpApiManager.invokeApi('contacts.deleteContacts', {
            id: ids
        }).then(function () {
            angular.forEach(userIDs, function (userID) {
                onContactUpdated(userID, false);
            });
        })
    }

    function onContactUpdated (userID, isContact) {
        if (angular.isArray(contactsList)) {
            var curPos = curIsContact = contactsList.indexOf(parseInt(userID)),
                curIsContact = curPos != -1;

            if (isContact != curIsContact) {
                if (isContact) {
                    contactsList.push(userID);
                    SearchIndexManager.indexObject(userID, getUserSearchText(userID), contactsIndex);
                } else {
                    contactsList.splice(curPos, 1);
                }
                $rootScope.$broadcast('contacts_update', userID);
            }
        }
    }

    function openImportContact () {
        return $modal.open({
            templateUrl: templateUrl('import_contact_modal'),
            controller: 'ImportContactModalController',
            windowClass: 'md_simple_modal_window mobile_modal'
        }).result.then(function (foundUserID) {
            if (!foundUserID) {
                return $q.reject();
            }
            return foundUserID;
        });
    };

    function setUserStatus (userID, offline) {
        if (isBot(userID)) {
            return;
        }
        var user = users[userID];
        if (user) {
            var status = offline ? {
                _: 'userStatusOffline',
                was_online: tsNow(true)
            } : {
                _: 'userStatusOnline',
                expires: tsNow(true) + 500
            };

            user.status = status;
            user.sortStatus = getUserStatusForSort(user.status);
            $rootScope.$broadcast('user_update', userID);
        }
    }


    $rootScope.$on('apiUpdate', function (e, update) {
        // console.log('on apiUpdate', update);
        switch (update._) {
            case 'updateUserStatus':
                var userID = update.user_id,
                    user = users[userID];
                if (user) {
                    user.status = update.status;
                    if (user.status) {
                        if (user.status.expires) {
                            user.status.expires -= serverTimeOffset;
                        }
                        if (user.status.was_online) {
                            user.status.was_online -= serverTimeOffset;
                        }
                    }
                    user.sortStatus = getUserStatusForSort(user.status);
                    $rootScope.$broadcast('user_update', userID);
                }
                break;

            case 'updateUserPhoto':
                var userID = update.user_id;
                var user = users[userID];
                if (user) {
                    forceUserOnline(userID);
                    if (!user.photo) {
                        user.photo = update.photo;
                    } else {
                        safeReplaceObject(user.photo, update.photo);
                    }

                    if (cachedPhotoLocations[userID] !== undefined) {
                        safeReplaceObject(cachedPhotoLocations[userID], update.photo && update.photo.photo_small || {empty: true});
                    }

                    $rootScope.$broadcast('user_update', userID);
                }
                break;

            case 'updateContactLink':
                onContactUpdated(update.user_id, update.my_link._ == 'contactLinkContact');
                break;
        }
    });

    $rootScope.$on('user_auth', function (e, userAuth) {
        myID = userAuth && userAuth.id || 0;
    });


    setInterval(updateUsersStatuses, 60000);

    $rootScope.$on('stateSynchronized', updateUsersStatuses);

    return {
        getContacts: getContacts,
        saveApiUsers: saveApiUsers,
        saveApiUser: saveApiUser,
        saveUserAccess: saveUserAccess,
        getUser: getUser,
        getSelf: getSelf,
        getUserInput: getUserInput,
        setUserStatus: setUserStatus,
        forceUserOnline: forceUserOnline,
        getUserPhoto: getUserPhoto,
        getUserString: getUserString,
        getUserSearchText: getUserSearchText,
        hasUser: hasUser,
        isBot: isBot,
        importContact: importContact,
        importContacts: importContacts,
        deleteContacts: deleteContacts,
        wrapForFull: wrapForFull,
        openUser: openUser,
        resolveUsername: resolveUsername,
        openImportContact: openImportContact
    }
})();
var _ApiUpdatesManager = (function () {
    var updatesState = {
        pendingPtsUpdates: [],
        pendingSeqUpdates: {},
        syncPending: false,
        syncLoading: true
    };
    var channelStates = {};

    var myID = 0;
    _MtpApiManager.getUserID().then(function (id) {
        myID = id;
    });


    function popPendingSeqUpdate () {
        var nextSeq = updatesState.seq + 1,
            pendingUpdatesData = updatesState.pendingSeqUpdates[nextSeq];
        if (!pendingUpdatesData) {
            return false;
        }
        var updates = pendingUpdatesData.updates;
        var i, length;
        for (var i = 0, length = updates.length; i < length; i++) {
            saveUpdate(updates[i]);
        }
        updatesState.seq = pendingUpdatesData.seq;
        if (pendingUpdatesData.date && updatesState.date < pendingUpdatesData.date) {
            updatesState.date = pendingUpdatesData.date;
        }
        delete updatesState.pendingSeqUpdates[nextSeq];

        if (!popPendingSeqUpdate() &&
            updatesState.syncPending &&
            updatesState.syncPending.seqAwaiting &&
            updatesState.seq >= updatesState.syncPending.seqAwaiting) {
            if (!updatesState.syncPending.ptsAwaiting) {
                clearTimeout(updatesState.syncPending.timeout);
                updatesState.syncPending = false;
            } else {
                delete updatesState.syncPending.seqAwaiting;
            }
        }

        return true;
    }

    function popPendingPtsUpdate (channelID) {
        var curState = channelID ? getChannelState(channelID) : updatesState;
        if (!curState.pendingPtsUpdates.length) {
            return false;
        }
        curState.pendingPtsUpdates.sort(function (a, b) {
            return a.pts - b.pts;
        });

        var curPts = curState.pts;
        var goodPts = false;
        var goodIndex = false;
        var update;
        for (var i = 0, length = curState.pendingPtsUpdates.length; i < length; i++) {
            update = curState.pendingPtsUpdates[i];
            curPts += update.pts_count;
            if (curPts >= update.pts) {
                goodPts = update.pts;
                goodIndex = i;
            }
        }

        if (!goodPts) {
            return false;
        }

        curState.pts = goodPts;
        for (i = 0; i <= goodIndex; i++) {
            update = curState.pendingPtsUpdates[i];
            saveUpdate(update);
        }
        curState.pendingPtsUpdates.splice(0, goodIndex + 1);

        if (!curState.pendingPtsUpdates.length && curState.syncPending) {
            if (!curState.syncPending.seqAwaiting) {
                clearTimeout(curState.syncPending.timeout);
                curState.syncPending = false;
            } else {
                delete curState.syncPending.ptsAwaiting;
            }
        }

        return true;
    }

    function forceGetDifference () {
        if (!updatesState.syncLoading) {
            getDifference();
        }
    }

    function processUpdateMessage (updateMessage) {
        var processOpts = {
            date: updateMessage.date,
            seq: updateMessage.seq,
            seqStart: updateMessage.seq_start
        };

        switch (updateMessage._) {
            case 'updatesTooLong':
            case 'new_session_created':
                forceGetDifference();
                break;

            case 'updateShort':
                processUpdate(updateMessage.update, processOpts);
                break;


            case 'updateShortMessage':
            case 'updateShortChatMessage':
                var isOut  = updateMessage.flags & 2;
                var fromID = updateMessage.from_id || (isOut ? myID : updateMessage.user_id);
                var toID   = updateMessage.chat_id
                    ? -updateMessage.chat_id
                    : (isOut ? updateMessage.user_id : myID);

                processUpdate({
                    _: 'updateNewMessage',
                    message: {
                        _: 'message',
                        flags: updateMessage.flags,
                        pFlags: updateMessage.pFlags,
                        id: updateMessage.id,
                        from_id: fromID,
                        to_id: AppPeersManager.getOutputPeer(toID),
                        date: updateMessage.date,
                        message: updateMessage.message,
                        fwd_from_id: updateMessage.fwd_from_id,
                        fwd_date: updateMessage.fwd_date,
                        reply_to_msg_id: updateMessage.reply_to_msg_id,
                        entities: updateMessage.entities
                    },
                    pts: updateMessage.pts,
                    pts_count: updateMessage.pts_count
                }, processOpts);
                break;

            case 'updatesCombined':
            case 'updates':
                _AppUsersManager.saveApiUsers(updateMessage.users);
                _AppChatsManager.saveApiChats(updateMessage.chats);

                angular.forEach(updateMessage.updates, function (update) {
                    processUpdate(update, processOpts);
                });
                break;

            default:
                console.warn(dT(), 'Unknown update message', updateMessage);
        }
    }

    function getDifference () {
        // console.trace(dT(), 'Get full diff');
        if (!updatesState.syncLoading) {
            updatesState.syncLoading = true;
            updatesState.pendingSeqUpdates = {};
            updatesState.pendingPtsUpdates = [];
        }

        if (updatesState.syncPending) {
            clearTimeout(updatesState.syncPending.timeout);
            updatesState.syncPending = false;
        }

        _MtpApiManager.invokeApi('updates.getDifference', {pts: updatesState.pts, date: updatesState.date, qts: -1}).then(function (differenceResult) {
            if (differenceResult._ == 'updates.differenceEmpty') {
                console.log(dT(), 'apply empty diff', differenceResult.seq);
                updatesState.date = differenceResult.date;
                updatesState.seq = differenceResult.seq;
                updatesState.syncLoading = false;
                $rootScope.$broadcast('stateSynchronized');
                return false;
            }

            _AppUsersManager.saveApiUsers(differenceResult.users);
            _AppChatsManager.saveApiChats(differenceResult.chats);

            // Should be first because of updateMessageID
            // console.log(dT(), 'applying', differenceResult.other_updates.length, 'other updates');
            angular.forEach(differenceResult.other_updates, function(update) {
                if (update._ == 'updateChannelTooLong') {
                    var channelID = update.channel_id;
                    var channelState = channelStates[channelID];
                    if (channelState !== undefined && !channelState.syncLoading) {
                        getChannelDifference(channelID);
                    }
                    return;
                }
                saveUpdate(update);
            });

            // console.log(dT(), 'applying', differenceResult.new_messages.length, 'new messages');
            angular.forEach(differenceResult.new_messages, function (apiMessage) {
                saveUpdate({
                    _: 'updateNewMessage',
                    message: apiMessage,
                    pts: updatesState.pts,
                    pts_count: 0
                });
            });

            var nextState = differenceResult.intermediate_state || differenceResult.state;
            updatesState.seq = nextState.seq;
            updatesState.pts = nextState.pts;
            updatesState.date = nextState.date;

            // console.log(dT(), 'apply diff', updatesState.seq, updatesState.pts);

            if (differenceResult._ == 'updates.differenceSlice') {
                getDifference();
            } else {
                // console.log(dT(), 'finished get diff');
                $rootScope.$broadcast('stateSynchronized');
                updatesState.syncLoading = false;
            }
        });
    }

    function getChannelDifference (channelID) {
        var channelState = getChannelState(channelID);
        if (!channelState.syncLoading) {
            channelState.syncLoading = true;
            channelState.pendingPtsUpdates = [];
        }
        if (channelState.syncPending) {
            clearTimeout(channelState.syncPending.timeout);
            channelState.syncPending = false;
        }
        // console.log(dT(), 'Get channel diff', _AppChatsManager.getChat(channelID), channelState.pts);
        _MtpApiManager.invokeApi('updates.getChannelDifference', {
            channel: _AppChatsManager.getChannelInput(channelID),
            filter: {_: 'channelMessagesFilterEmpty'},
            pts: channelState.pts,
            limit: 30
        }).then(function (differenceResult) {
            // console.log(dT(), 'channel diff result', differenceResult);
            channelState.pts = differenceResult.pts;

            if (differenceResult._ == 'updates.channelDifferenceEmpty') {
                console.log(dT(), 'apply channel empty diff', differenceResult);
                channelState.syncLoading = false;
                $rootScope.$broadcast('stateSynchronized');
                return false;
            }

            if (differenceResult._ == 'updates.channelDifferenceTooLong') {
                console.log(dT(), 'channel diff too long', differenceResult);
                channelState.syncLoading = false;
                delete channelStates[channelID];
                saveUpdate({_: 'updateChannelReload', channel_id: channelID});
                return false;
            }

            _AppUsersManager.saveApiUsers(differenceResult.users);
            _AppChatsManager.saveApiChats(differenceResult.chats);

            // Should be first because of updateMessageID
            console.log(dT(), 'applying', differenceResult.other_updates.length, 'channel other updates');
            angular.forEach(differenceResult.other_updates, function(update){
                saveUpdate(update);
            });

            console.log(dT(), 'applying', differenceResult.new_messages.length, 'channel new messages');
            angular.forEach(differenceResult.new_messages, function (apiMessage) {
                saveUpdate({
                    _: 'updateNewChannelMessage',
                    message: apiMessage,
                    pts: channelState.pts,
                    pts_count: 0
                });
            });

            console.log(dT(), 'apply channel diff', channelState.pts);

            if (differenceResult._ == 'updates.channelDifference' &&
                !differenceResult.pFlags['final']) {
                getChannelDifference(channelID);
            } else {
                console.log(dT(), 'finished channel get diff');
                $rootScope.$broadcast('stateSynchronized');
                channelState.syncLoading = false;
            }
        });
    }

    function addChannelState (channelID, pts) {
        if (!pts) {
            throw new Error('Add channel state without pts ' + channelID);
        }
        if (channelStates[channelID] === undefined) {
            channelStates[channelID] = {
                pts: pts,
                pendingPtsUpdates: [],
                syncPending: false,
                syncLoading: false
            };
            return true;
        }
        return false;
    }

    function getChannelState (channelID, pts) {
        if (channelStates[channelID] === undefined) {
            addChannelState(channelID, pts);
        }
        return channelStates[channelID];
    }

    function processUpdate (update, options) {
        var channelID = false;
        switch (update._) {
            case 'updateNewChannelMessage':
                channelID = -AppPeersManager.getPeerID(update.message.to_id);
                break;
            case 'updateDeleteChannelMessages':
                channelID = update.channel_id;
                break;
        }
        if (channelID && !_AppChatsManager.hasChat(channelID)) {
            // console.log(dT(), 'skip update, missing channel', channelID, update);
            return false;
        }
        var curState = channelID ? getChannelState(channelID, update.pts) : updatesState;

        // console.log(dT(), 'process', channelID, curState, update);

        if (curState.syncLoading) {
            return false;
        }

        if (update._ == 'updateNewMessage') {
            var message = update.message;
            var fwdPeerID = message.fwd_from_id ? AppPeersManager.getPeerID(message.fwd_from_id) : 0;
            var toPeerID = AppPeersManager.getPeerID(message.to_id);
            if (message.from_id && !_AppUsersManager.hasUser(message.from_id) ||
                fwdPeerID > 0 && !_AppUsersManager.hasUser(fwdPeerID) ||
                fwdPeerID < 0 && !_AppChatsManager.hasChat(-fwdPeerID) ||
                toPeerID > 0 && !_AppUsersManager.hasUser(toPeerID) ||
                toPeerID < 0 && !_AppChatsManager.hasChat(-toPeerID)) {
                console.warn(dT(), 'Short update not enough data', message);
                forceGetDifference();
                return false;
            }
        }

        var popPts, popSeq;

        if (update.pts) {
            var newPts = curState.pts + (update.pts_count || 0);
            if (newPts < update.pts) {
                console.warn(dT(), 'Pts hole', curState, update, channelID && _AppChatsManager.getChat(channelID));
                curState.pendingPtsUpdates.push(update);
                if (!curState.syncPending) {
                    curState.syncPending = {
                        timeout: setTimeout(function () {
                            if (channelID) {
                                getChannelDifference(channelID);
                            } else {
                                getDifference();
                            }
                        }, 5000)
                    };
                }
                curState.syncPending.ptsAwaiting = true;
                return false;
            }
            if (update.pts > curState.pts) {
                curState.pts = update.pts;
                popPts = true;
            }
            if (channelID && options.date && updatesState.date < options.date) {
                updatesState.date = options.date;
            }
        }
        else if (!channelID && options.seq > 0) {
            var seq = options.seq;
            var seqStart = options.seqStart || seq;

            if (seqStart != curState.seq + 1) {
                if (seqStart > curState.seq) {
                    console.warn(dT(), 'Seq hole', curState, curState.syncPending && curState.syncPending.seqAwaiting);

                    if (curState.pendingSeqUpdates[seqStart] === undefined) {
                        curState.pendingSeqUpdates[seqStart] = {seq: seq, date: options.date, updates: []};
                    }
                    curState.pendingSeqUpdates[seqStart].updates.push(update);

                    if (!curState.syncPending) {
                        curState.syncPending = {
                            timeout: setTimeout(function () {
                                getDifference();
                            }, 5000)
                        };
                    }
                    if (!curState.syncPending.seqAwaiting ||
                        curState.syncPending.seqAwaiting < seqStart) {
                        curState.syncPending.seqAwaiting = seqStart;
                    }
                    return false;
                }
            }

            if (curState.seq != seq) {
                curState.seq = seq;
                if (options.date && curState.date < options.date) {
                    curState.date = options.date;
                }
                popSeq = true;
            }
        }

        saveUpdate(update);

        if (popPts) {
            popPendingPtsUpdate(channelID);
        }
        else if (popSeq) {
            popPendingSeqUpdate();
        }
    }

    function saveUpdate (update) {
        $rootScope.$broadcast('apiUpdate', update);
    }

    function attach () {
        _MtpNetworkerFactory.setUpdatesProcessor(processUpdateMessage);
        _MtpApiManager.invokeApi('updates.getState', {}, {noErrorBox: true}).then(function (stateResult) {
            updatesState.seq = stateResult.seq;
            updatesState.pts = stateResult.pts;
            updatesState.date = stateResult.date;
            setTimeout(function () {
                updatesState.syncLoading = false;
            }, 1000);

            // updatesState.seq = 1;
            // updatesState.pts = stateResult.pts - 5000;
            // updatesState.date = 1;
            // getDifference();
        })
    }


    return {
        processUpdateMessage: processUpdateMessage,
        addChannelState: addChannelState,
        attach: attach
    }
})();
var _AppProfileManager = (function () {
    var botInfos = {};
    var chatsFull = {};
    var chatFullPromises = {};

    function saveBotInfo (botInfo) {
        var botID = botInfo && botInfo.user_id;
        if (!botID) {
            return false;
        }
        var commands = {};
        angular.forEach(botInfo.commands, function (botCommand) {
            commands[botCommand.command] = botCommand.description;
        })
        return botInfos[botID] = {
            id: botID,
            version: botInfo.version,
            shareText: botInfo.share_text,
            description: botInfo.description,
            rAbout: RichTextProcessor.wrapRichText(botInfo.share_text, {noLinebreaks: true}),
            commands: commands
        };
    }

    function getProfile (id, override) {
        return _MtpApiManager.invokeApi('users.getFullUser', {
            id: _AppUsersManager.getUserInput(id)
        }).then(function (userFull) {
            if (override && override.phone_number) {
                userFull.user.phone = override.phone_number;
                if (override.first_name || override.last_name) {
                    userFull.user.first_name = override.first_name;
                    userFull.user.last_name = override.last_name;
                }
                _AppUsersManager.saveApiUser(userFull.user);
            } else {
                _AppUsersManager.saveApiUser(userFull.user, true);
            }

            _AppPhotosManager.savePhoto(userFull.profile_photo, {
                user_id: id
            });

            userFull.bot_info = saveBotInfo(userFull.bot_info);

            return userFull;
        });
    }

    function getPeerBots (peerID) {
        var peerBots = [];
        if (peerID >= 0 && !_AppUsersManager.isBot(peerID) ||
            (_AppPeersManager.isChannel(peerID) && !_AppPeersManager.isMegagroup(peerID))) {
            return $q.when(peerBots);
        }
        if (peerID >= 0) {
            return getProfile(peerID).then(function (userFull) {
                var botInfo = userFull.bot_info;
                if (botInfo && botInfo._ != 'botInfoEmpty') {
                    peerBots.push(botInfo);
                }
                return peerBots;
            });
        }

        return getChatFull(-peerID).then(function (chatFull) {
            angular.forEach(chatFull.bot_info, function (botInfo) {
                peerBots.push(saveBotInfo(botInfo));
            });
            return peerBots;
        });

    }

    function getChatFull(id) {
        if (_AppChatsManager.isChannel(id)) {
            return getChannelFull(id);
        }
        if (chatsFull[id] !== undefined) {
            var chat = _AppChatsManager.getChat(id);
            if (chat.version == chatsFull[id].participants.version ||
                chat.pFlags.left) {
                return $q.when(chatsFull[id]);
            }
        }
        if (chatFullPromises[id] !== undefined) {
            return chatFullPromises[id];
        }
        console.trace(dT(), 'Get chat full', id, _AppChatsManager.getChat(id));
        return chatFullPromises[id] = _MtpApiManager.invokeApi('messages.getFullChat', {
            chat_id: _AppChatsManager.getChatInput(id)
        }).then(function (result) {
            _AppChatsManager.saveApiChats(result.chats);
            _AppUsersManager.saveApiUsers(result.users);
            var fullChat = result.full_chat;
            if (fullChat && fullChat.chat_photo.id) {
                _AppPhotosManager.savePhoto(fullChat.chat_photo);
            }
            delete chatFullPromises[id];
            chatsFull[id] = fullChat;
            $rootScope.$broadcast('chat_full_update', id);

            return fullChat;
        });
    }

    function getChatInviteLink (id, force) {
        return getChatFull(id).then(function (chatFull) {
            if (!force &&
                chatFull.exported_invite &&
                chatFull.exported_invite._ == 'chatInviteExported') {
                return chatFull.exported_invite.link;
            }
            var promise;
            if (_AppChatsManager.isChannel(id)) {
                promise = _MtpApiManager.invokeApi('channels.exportInvite', {
                    channel: _AppChatsManager.getChannelInput(id)
                });
            } else {
                promise = _MtpApiManager.invokeApi('messages.exportChatInvite', {
                    chat_id: _AppChatsManager.getChatInput(id)
                });
            }
            return promise.then(function (exportedInvite) {
                if (chatsFull[id] !== undefined) {
                    chatsFull[id].exported_invite = exportedInvite;
                }
                return exportedInvite.link;
            });
        });
    }

    function getChannelParticipants (id) {
        return _MtpApiManager.invokeApi('channels.getParticipants', {
            channel: _AppChatsManager.getChannelInput(id),
            filter: {_: 'channelParticipantsRecent'},
            offset: 0,
            limit: _AppChatsManager.isMegagroup(id) ? 50 : 200
        }).then(function (result) {
            _AppUsersManager.saveApiUsers(result.users);
            var participants = result.participants;

            var chat = _AppChatsManager.getChat(id);
            if (!chat.pFlags.kicked && !chat.pFlags.left) {
                var myID = _AppUsersManager.getSelf().id;
                var myIndex = false;
                var myParticipant;
                for (var i = 0, len = participants.length; i < len; i++) {
                    if (participants[i].user_id == myID) {
                        myIndex = i;
                        break;
                    }
                }
                if (myIndex !== false) {
                    myParticipant = participants[i];
                    participants.splice(i, 1);
                } else {
                    myParticipant = {_: 'channelParticipantSelf', user_id: myID};
                }
                participants.unshift(myParticipant);
            }

            return participants;
        });
    }

    function getChannelFull (id, force) {
        if (chatsFull[id] !== undefined && !force) {
            return $q.when(chatsFull[id]);
        }
        if (chatFullPromises[id] !== undefined) {
            return chatFullPromises[id];
        }

        return chatFullPromises[id] = _MtpApiManager.invokeApi('channels.getFullChannel', {
            channel: _AppChatsManager.getChannelInput(id)
        }).then(function (result) {
            _AppChatsManager.saveApiChats(result.chats);
            _AppUsersManager.saveApiUsers(result.users);
            var fullChannel = result.full_chat;
            var chat = _AppChatsManager.getChat(id);
            if (fullChannel && fullChannel.chat_photo.id) {
                _AppPhotosManager.savePhoto(fullChannel.chat_photo);
            }
            var participantsPromise;
            if (fullChannel.flags & 8) {
                participantsPromise = getChannelParticipants(id).then(function (participants) {
                    delete chatFullPromises[id];
                    fullChannel.participants = {
                        _: 'channelParticipants',
                        participants: participants
                    };
                }, function (error) {
                    error.handled = true;
                });
            } else {
                participantsPromise = $q.when();
            }
            return participantsPromise.then(function () {
                delete chatFullPromises[id];
                chatsFull[id] = fullChannel;
                $rootScope.$broadcast('chat_full_update', id);

                return fullChannel;
            });
        }, function (error) {
            switch (error.type) {
                case 'CHANNEL_PRIVATE':
                    var channel = _AppChatsManager.getChat(id);
                    channel = {_: 'channelForbidden', access_hash: channel.access_hash, title: channel.title};
                    _ApiUpdatesManager.processUpdateMessage({
                        _: 'updates',
                        updates: [{
                            _: 'updateChannel',
                            channel_id: id
                        }],
                        chats: [channel],
                        users: []
                    });
                    break;
            }
            return $q.reject(error);
        });
    }

    $rootScope.$on('apiUpdate', function (e, update) {
        // console.log('on apiUpdate', update);
        switch (update._) {
            case 'updateChatParticipants':
                var participants = update.participants;
                var chatFull = chatsFull[participants.id];
                if (chatFull !== undefined) {
                    chatFull.participants = update.participants;
                    $rootScope.$broadcast('chat_full_update', chatID);
                }
                break;

            case 'updateChatParticipantAdd':
                var chatFull = chatsFull[update.chat_id];
                if (chatFull !== undefined) {
                    var participants = chatFull.participants.participants || [];
                    for (var i = 0, length = participants.length; i < length; i++) {
                        if (participants[i].user_id == update.user_id) {
                            return;
                        }
                    }
                    participants.push({
                        _: 'chatParticipant',
                        user_id: update.user_id,
                        inviter_id: update.inviter_id,
                        date: tsNow(true)
                    });
                    chatFull.participants.version = update.version;
                    $rootScope.$broadcast('chat_full_update', update.chat_id);
                }
                break;

            case 'updateChatParticipantDelete':
                var chatFull = chatsFull[update.chat_id];
                if (chatFull !== undefined) {
                    var participants = chatFull.participants.participants || [];
                    for (var i = 0, length = participants.length; i < length; i++) {
                        if (participants[i].user_id == update.user_id) {
                            participants.splice(i, 1);
                            chatFull.participants.version = update.version;
                            $rootScope.$broadcast('chat_full_update', update.chat_id);
                            return;
                        }
                    }
                }
                break;

        }
    });

    $rootScope.$on('chat_update', function (e, chatID) {
        var fullChat = chatsFull[chatID];
        var chat = _AppChatsManager.getChat(chatID);
        if (!chat.photo || !fullChat) {
            return;
        }
        var emptyPhoto = chat.photo._ == 'chatPhotoEmpty';
        if (emptyPhoto != (fullChat.chat_photo._ == 'photoEmpty')) {
            delete chatsFull[chatID];
            $rootScope.$broadcast('chat_full_update', chatID);
            return;
        }
        if (emptyPhoto) {
            return;
        }
        var smallUserpic = chat.photo.photo_small;
        var smallPhotoSize = _AppPhotosManager.choosePhotoSize(fullChat.chat_photo, 0, 0);
        if (!angular.equals(smallUserpic, smallPhotoSize.location)) {
            delete chatsFull[chatID];
            $rootScope.$broadcast('chat_full_update', chatID);
        }
    });

    return {
        getPeerBots: getPeerBots,
        getProfile: getProfile,
        getChatInviteLink: getChatInviteLink,
        getChatFull: getChatFull,
        getChannelFull: getChannelFull
    }
})();
var _AppPhotosManager = (function () {
    var photos = {},
        windowW = $(window).width(),
        windowH = $(window).height();

    function savePhoto (apiPhoto, context) {
        if (context) {
            angular.extend(apiPhoto, context);
        }
        photos[apiPhoto.id] = apiPhoto;

        angular.forEach(apiPhoto.sizes, function (photoSize) {
            if (photoSize._ == 'photoCachedSize') {
                _MtpApiFileManager.saveSmallFile(photoSize.location, photoSize.bytes);

                // Memory
                photoSize.size = photoSize.bytes.length;
                delete photoSize.bytes;
                photoSize._ = 'photoSize';
            }
        });
    };

    function choosePhotoSize (photo, width, height) {
        if (Config.Navigator.retina) {
            width *= 2;
            height *= 2;
        }
        var bestPhotoSize = {_: 'photoSizeEmpty'},
            bestDiff = 0xFFFFFF;

        angular.forEach(photo.sizes, function (photoSize) {
            var diff = Math.abs(photoSize.w * photoSize.h - width * height);
            if (diff < bestDiff) {
                bestPhotoSize = photoSize;
                bestDiff = diff;
            }
        });

        // console.log('choosing', photo, width, height, bestPhotoSize);

        return bestPhotoSize;
    }

    function getUserPhotos (userID, maxID, limit) {
        var inputUser = _AppUsersManager.getUserInput(userID);
        return _MtpApiManager.invokeApi('photos.getUserPhotos', {
            user_id: inputUser,
            offset: 0,
            limit: limit || 20,
            max_id: maxID || 0
        }).then(function (photosResult) {
            _AppUsersManager.saveApiUsers(photosResult.users);
            var photoIDs = [];
            var context = {user_id: userID};
            for (var i = 0; i < photosResult.photos.length; i++) {
                savePhoto(photosResult.photos[i], context);
                photoIDs.push(photosResult.photos[i].id)
            }

            return {
                count: photosResult.count || photosResult.photos.length,
                photos: photoIDs
            };
        });
    }

    function preloadPhoto (photoID) {
        if (!photos[photoID]) {
            return;
        }
        var photo = photos[photoID];
        var fullWidth = $(window).width() - (Config.Mobile ? 20 : 32);
        var fullHeight = $(window).height() - (Config.Mobile ? 150 : 116);
        if (fullWidth > 800) {
            fullWidth -= 208;
        }
        var fullPhotoSize = choosePhotoSize(photo, fullWidth, fullHeight);

        if (fullPhotoSize && !fullPhotoSize.preloaded) {
            fullPhotoSize.preloaded = true;
            if (fullPhotoSize.size) {
                return _MtpApiFileManager.downloadFile(fullPhotoSize.location.dc_id, {
                    _: 'inputFileLocation',
                    volume_id: fullPhotoSize.location.volume_id,
                    local_id: fullPhotoSize.location.local_id,
                    secret: fullPhotoSize.location.secret
                }, fullPhotoSize.size);
            } else {
                 return _MtpApiFileManager.downloadSmallFile(fullPhotoSize.location);
            }
        }

        return $q.resolve();
    };
    $rootScope.preloadPhoto = preloadPhoto;

    function getPhoto (photoID) {
        return photos[photoID] || {_: 'photoEmpty'};
    }

    function wrapForHistory (photoID, options) {
        options = options || {};
        var photo = angular.copy(photos[photoID]) || {_: 'photoEmpty'},
            width = options.website ? 100 : Math.min(windowW - 80, Config.Mobile ? 210 : 260),
            height = options.website ? 100 : Math.min(windowH - 100, Config.Mobile ? 210 : 260),
            thumbPhotoSize = choosePhotoSize(photo, width, height),
            thumb = {
                placeholder: 'img/placeholders/PhotoThumbConversation.gif',
                width: width,
                height: height
            };

        if (options.website && Config.Mobile) {
            width = 50;
            height = 50;
        }

        // console.log('chosen photo size', photoID, thumbPhotoSize);
        if (thumbPhotoSize && thumbPhotoSize._ != 'photoSizeEmpty') {
            var dim = calcImageInBox(thumbPhotoSize.w, thumbPhotoSize.h, width, height);
            thumb.width = dim.w;
            thumb.height = dim.h;
            thumb.location = thumbPhotoSize.location;
            thumb.size = thumbPhotoSize.size;
        } else {
            thumb.width = 100;
            thumb.height = 100;
        }

        photo.thumb = thumb;

        return photo;
    }

    function wrapForFull (photoID) {
        var photo = wrapForHistory(photoID);
        var fullWidth = $(window).width() - (Config.Mobile ? 0 : 32);
        var fullHeight = $(window).height() - (Config.Mobile ? 0 : 116);
        if (!Config.Mobile && fullWidth > 800) {
            fullWidth -= 208;
        }
        var fullPhotoSize = choosePhotoSize(photo, fullWidth, fullHeight);
        var full = {
            placeholder: 'img/placeholders/PhotoThumbModal.gif'
        };

        full.width = fullWidth;
        full.height = fullHeight;

        if (fullPhotoSize && fullPhotoSize._ != 'photoSizeEmpty') {
            var wh = calcImageInBox(fullPhotoSize.w, fullPhotoSize.h, fullWidth, fullHeight, true);
            full.width = wh.w;
            full.height = wh.h;

            full.modalWidth = Math.max(full.width, Math.min(400, fullWidth));

            full.location = fullPhotoSize.location;
            full.size = fullPhotoSize.size;
        }

        photo.full = full;

        return photo;
    }

    function openPhoto (photoID, list) {
        if (!photoID || photoID === '0') {
            return false;
        }

        var scope = $rootScope.$new(true);

        scope.photoID = photoID;

        var controller = 'PhotoModalController';
        if (list && list.p > 0) {
            controller = 'UserpicModalController';
            scope.userID = list.p;
        }
        else if (list && list.p < 0) {
            controller = 'ChatpicModalController';
            scope.chatID = -list.p;
        }
        else if (list && list.m > 0) {
            scope.messageID = list.m;
            if (list.w) {
                scope.webpageID = list.w;
            }
        }

        var modalInstance = $modal.open({
            templateUrl: templateUrl('photo_modal'),
            windowTemplateUrl: templateUrl('media_modal_layout'),
            controller: controller,
            scope: scope,
            windowClass: 'photo_modal_window'
        });
    }

    function downloadPhoto (photoID) {
        var photo = photos[photoID],
            ext = 'jpg',
            mimeType = 'image/jpeg',
            fileName = 'photo' + photoID + '.' + ext,
            fullWidth = Math.max(screen.width || 0, $(window).width() - 36, 800),
            fullHeight = Math.max(screen.height || 0, $(window).height() - 150, 800),
            fullPhotoSize = choosePhotoSize(photo, fullWidth, fullHeight),
            inputFileLocation = {
                _: 'inputFileLocation',
                volume_id: fullPhotoSize.location.volume_id,
                local_id: fullPhotoSize.location.local_id,
                secret: fullPhotoSize.location.secret
            };

        _FileManager.chooseSave(fileName, ext, mimeType).then(function (writableFileEntry) {
            if (writableFileEntry) {
                _MtpApiFileManager.downloadFile(
                    fullPhotoSize.location.dc_id, inputFileLocation, fullPhotoSize.size, {
                        mime: mimeType,
                        toFileEntry: writableFileEntry
                    }).then(function () {
                    // console.log('file save done');
                }, function (e) {
                    console.log('photo download failed', e);
                });
            }
        }, function () {
            var cachedBlob = _MtpApiFileManager.getCachedFile(inputFileLocation);
            if (cachedBlob) {
                return _FileManager.download(cachedBlob, mimeType, fileName);
            }

            _MtpApiFileManager.downloadFile(
                fullPhotoSize.location.dc_id, inputFileLocation, fullPhotoSize.size, {mime: mimeType}
            ).then(function (blob) {
                _FileManager.download(blob, mimeType, fileName);
            }, function (e) {
                console.log('photo download failed', e);
            });
        });
    };

    $rootScope.openPhoto = openPhoto;

    return {
        savePhoto: savePhoto,
        preloadPhoto: preloadPhoto,
        getUserPhotos: getUserPhotos,
        getPhoto: getPhoto,
        choosePhotoSize: choosePhotoSize,
        wrapForHistory: wrapForHistory,
        wrapForFull: wrapForFull,
        openPhoto: openPhoto,
        downloadPhoto: downloadPhoto
    }
})();
var _AppRuntimeManager = (function () {
    return {
        reload: function () {
            try {
                location.reload();
            } catch (e) {};

            if ($window.chrome && chrome.runtime && chrome.runtime.reload) {
                chrome.runtime.reload();
            };
        },
        close: function () {
            try {
                $window.close();
            } catch (e) {}
        },
        focus: function () {
            if (window.navigator.mozApps && document.hidden) {
                // Get app instance and launch it to bring app to foreground
                window.navigator.mozApps.getSelf().onsuccess = function() {
                    this.result.launch();
                };
            } else {
                if (window.chrome && chrome.app && chrome.app.window) {
                    chrome.app.window.current().focus();
                }
                window.focus();
            }
        }
    }
})();
var telegramApi = (function () {
    var options = {dcID: 2, createNetworker: true};
    var userAuthPromise;
    var photoTypes = [
        'base64',
        'blob',
        'byteArray'
    ];

    return {
        addChatUser: addChatUser,
        createChat: createChat,
        createChannel: createChannel,
        downloadDocument: downloadDocument,
        editChannelAdmin: editChannelAdmin,
        editChatAdmin: editChatAdmin,
        editChatTitle: editChatTitle,
        getChatLink: getChatLink,
        getDialogs: getDialogs,
        getHistory: getHistory,
        getUserInfo: getUserInfo,
        getUserPhoto: getUserPhoto,
        joinChat: joinChat,
        sendCode: sendCode,
        sendFile: sendFile,
        sendMessage: sendMessage,
        sendSms: sendSms,
        signIn: signIn,
        signUp: signUp,
        setConfig: setConfig,
        startBot: startBot,
        logOut: logOut,
        updateProfile: updateProfile,
        updateProfilePhoto: updateProfilePhoto,
        updateUsername: updateUsername
    };

    /* Public Functions */

    function sendCode(phone_number) {
        var defer = $.Deferred();

        _MtpApiManager.invokeApi('auth.sendCode', {
            phone_number: phone_number,
            sms_type: 5,
            api_id: Config.App.id,
            api_hash: Config.App.hash,
            lang_code: navigator.language || 'en'
        }, options).then(function (data) {
            defer.resolve(data);
        }, function (err) {
            defer.reject(err);
        });

        return defer.promise();
    }

    function signIn(phone_number, phone_code_hash, phone_code) {
        var defer = $.Deferred();

        _MtpApiManager.invokeApi('auth.signIn', {
            phone_number: phone_number,
            phone_code_hash: phone_code_hash,
            phone_code: phone_code
        }, options).then(function (result) {
            _MtpApiManager.setUserAuth(options.dcID, {
                id: result.user.id
            });
            userAuthPromise = _saveUserInfo();
        }).then(function (data) {
            defer.resolve(data);
        }, function (err) {
            defer.reject(err);
        });

        return defer.promise();
    }

    function signUp(phone_number, phone_code_hash, phone_code, first_name, last_name) {
        var defer = $.Deferred();

        _MtpApiManager.invokeApi('auth.signUp', {
            phone_number: phone_number,
            phone_code_hash: phone_code_hash,
            phone_code: phone_code,
            first_name: first_name || '',
            last_name: last_name || ''
        }, options).then(function (result) {
            _MtpApiManager.setUserAuth(options.dcID, {
                id: result.user.id
            });
            userAuthPromise = _saveUserInfo();
        }).then(function (data) {
            defer.resolve(data);
        }, function (err) {
            defer.reject(err);
        });

        return defer.promise();
    }

    function sendMessage(id, message) {
        var defer = $.Deferred();

        _MtpApiManager.invokeApi('messages.sendMessage', {
            flags: 0,
            peer: _AppPeersManager.getInputPeerByID(id),
            message: message,
            random_id: [nextRandomInt(0xFFFFFFFF), nextRandomInt(0xFFFFFFFF)],
            reply_to_msg_id: 0,
            entities: []
        }).then(function (data) {
            defer.resolve(data);
        }, function (err) {
            defer.reject(err);
        });

        return defer.promise();
    }

    function getDialogs() {
        var dialogs = [];
        var defer = $.Deferred();

        _AppMessagesManager.getConversations('', 0, 20)
            .then(function (result) {
                for (var i = 0, ii = result.dialogs.length; i < ii; i++) {
                    dialogs.push(_AppPeersManager.getPeer(result.dialogs[i].peerID));
                }
                return dialogs;
            })
            .then(function (data) {
                defer.resolve(data);
            }, function (err) {
                defer.reject(err);
            });

        return defer.promise();
    }

    function startBot(botName) {
        var defer = $.Deferred();

        _MtpApiManager.invokeApi('contacts.search', {q: botName, limit: 1})
            .then(function (result) {
                _AppUsersManager.saveApiUsers(result.users);
                _AppMessagesManager.startBot(result.users[0].id, 0);
            })
            .then(function (data) {
                defer.resolve(data);
            }, function (err) {
                defer.reject(err);
            });

        return defer.promise();
    }

    function sendSms(phone_number, phone_code_hash) {
        var defer = $.Deferred();

        _MtpApiManager.invokeApi('auth.sendSms', {
            phone_number: phone_number,
            phone_code_hash: phone_code_hash
        }, options).then(function (data) {
            defer.resolve(data);
        }, function (err) {
            defer.reject(err);
        });

        return defer.promise();
    }

    function setConfig(config) {
        config = config || {};

        config.app = config.app || {};
        config.server = config.server || {};

        config.server.test = config.server.test || [];
        config.server.production = config.server.production || [];

        Config.App.id = config.app.id;
        Config.App.hash = config.app.hash;

        Config.Server.Test = config.server.test;
        Config.Server.Production = config.server.production;

        _MtpApiManager.invokeApi('help.getNearestDc', {}, options).then(function (nearestDcResult) {
            if (nearestDcResult.nearest_dc != nearestDcResult.this_dc) {
                _MtpApiManager.getNetworker(nearestDcResult.nearest_dc, {createNetworker: true});
            }
        });

        userAuthPromise = _saveUserInfo();
    }

    function createChat(title, userIDs) {
        var defer = $.Deferred();

        title = title || '';
        userIDs = userIDs || [];

        if (!Array.isArray(userIDs)) {
            throw new Error('[userIDs] is not array');
        }

        var inputUsers = [];

        for (var i = 0; i < userIDs.length; i++) {
            inputUsers.push(_AppUsersManager.getUserInput(userIDs[i]))
        }

        _MtpApiManager.invokeApi('messages.createChat', {
            title: title,
            users: inputUsers
        }).then(function (updates) {
            if (updates.chats && updates.chats[0]) {
                return _MtpApiManager.invokeApi('messages.toggleChatAdmins', {
                    chat_id: updates.chats[0].id,
                    enabled: true
                });
            } else {
                return updates;
            }
        }).then(function (data) {
            defer.resolve(data);
        }, function (err) {
            defer.reject(err);
        });

        return defer.promise();
    }

    function addChatUser(chatID, userID) {
        var defer = $.Deferred();

        _MtpApiManager.invokeApi('messages.addChatUser', {
            chat_id: _AppChatsManager.getChatInput(chatID),
            user_id: _AppUsersManager.getUserInput(userID),
            fwd_limit: 100
        }).then(function (updates) {
            _ApiUpdatesManager.processUpdateMessage(updates);
        }).then(function (data) {
            defer.resolve(data);
        }, function (err) {
            defer.reject(err);
        });

        return defer.promise();
    }

    function getChatLink(chatID, forse) {
        var defer = $.Deferred();

        forse = forse || false;

        _AppProfileManager.getChatInviteLink(chatID, forse).then(function (data) {
            defer.resolve(data);
        }, function (err) {
            defer.reject(err);
        });

        return defer.promise();
    }

    function updateUsername(username) {
        var defer = $.Deferred();

        _MtpApiManager.invokeApi('account.updateUsername', {
            username: username || ''
        }).then(function (user) {
            _AppUsersManager.saveApiUser(user);
        }).then(function (data) {
            defer.resolve(data);
        }, function (err) {
            defer.reject(err);
        });

        return defer.promise();
    }

    function getUserInfo() {
        var defer = $.Deferred();

        _MtpApiManager.getUserID().then(function (id) {
            if (!id) {
                return _AppUsersManager.getUser(id);
            }
            return userAuthPromise.then(function () {
                return _AppUsersManager.getUser(id);
            })
        }).then(function (data) {
            defer.resolve(data);
        }, function (err) {
            defer.reject(err);
        });

        return defer.promise();
    }

    function updateProfile(first_name, last_name) {
        var defer = $.Deferred();

        _MtpApiManager.invokeApi('account.updateProfile', {
            first_name: first_name || '',
            last_name: last_name || ''
        }).then(function (user) {
            _AppUsersManager.saveApiUser(user);
        }).then(function (data) {
            defer.resolve(data);
        }, function (err) {
            defer.reject(err);
        });

        return defer.promise();
    }

    function getUserPhoto(type) {
        type = type || 'base64';

        if (photoTypes.indexOf(type) == -1) {
            throw new Error('Invalid photo type "' + type + '"');
        }

        var deferred = $.Deferred();

        getUserInfo().then(function (user) {
            if (user.photo) {
                var location = {
                    _: "inputFileLocation",
                    local_id: user.photo.photo_big.local_id,
                    secret: user.photo.photo_big.secret,
                    volume_id: user.photo.photo_big.volume_id
                };
                var params = {
                    dcID: options.dcID,
                    fileDownload: true,
                    singleInRequest: window.safari !== undefined,
                    createNetworker: true
                };
                _MtpApiManager.invokeApi('upload.getFile', {
                    location: location,
                    offset: 0,
                    limit: 524288
                }, params).then(function (result) {
                    switch (type) {
                        case 'byteArray':
                            deferred.resolve(result.bytes);
                            break;
                        case 'base64':
                            deferred.resolve("data:image/jpeg;base64," + btoa(String.fromCharCode.apply(null, result.bytes)));
                            break;
                        case 'blob':
                            deferred.resolve(new Blob([result.bytes], {type: 'image/jpeg'}));
                            break;
                    }
                }, function () {
                    deferred.resolve(null);
                });
            } else {
                deferred.resolve(null);
            }
        });

        return deferred.promise();
    }

    function updateProfilePhoto(photo) {
        var defer = $.Deferred();

        if (!photo || !photo.type || photo.type.indexOf('image') !== 0) {
            return;
        }

        _MtpApiFileManager.uploadFile(photo).then(function (inputFile) {
            _MtpApiManager.invokeApi('photos.uploadProfilePhoto', {
                file: inputFile,
                caption: '',
                geo_point: {_: 'inputGeoPointEmpty'},
                crop: {_: 'inputPhotoCropAuto'}
            }).then(function (updateResult) {
                _AppUsersManager.saveApiUsers(updateResult.users);
                _MtpApiManager.getUserID().then(function (id) {
                    _AppPhotosManager.savePhoto(updateResult.photo, {
                        user_id: id
                    });
                    _ApiUpdatesManager.processUpdateMessage({
                        _: 'updateShort',
                        update: {
                            _: 'updateUserPhoto',
                            user_id: id,
                            date: tsNow(true),
                            photo: _AppUsersManager.getUser(id).photo,
                            previous: true
                        }
                    });
                });
            }).then(function (data) {
                defer.resolve(data);
            }, function (err) {
                defer.reject(err);
            });
        });

        return defer.promise();
    }

    function logOut() {
        var defer = $.Deferred();

        _MtpApiManager.logOut().then(function (data) {
            defer.resolve(data);
        }, function (err) {
            defer.reject(err);
        });

        return defer.promise();
    }

    function createChannel(title, about) {
        var defer = $.Deferred();

        _MtpApiManager.invokeApi('channels.createChannel', {
            title: title || '',
            flags: 0,
            about: about || ''
        }, options).then(function (data) {
            if($.isArray(data.chats)) {
                _AppChatsManager.saveApiChats(data.chats);
            }
            defer.resolve(data);
        }, function (err) {
            defer.reject(err);
        });

        return defer.promise();
    }

    function getHistory(params) {
        var defer = $.Deferred();

        params = params || {};
        params.id = params.id || 0;
        params.take = params.take || 15;
        params.skip = params.skip || 0;
        params.type = params.type || 'chat';

        if (params.type == 'chat' && params.id > 0) {
            params.id = params.id * -1;
        }

        _MtpApiManager.invokeApi('messages.getHistory', {
            peer: _AppPeersManager.getInputPeerByID(params.id),
            offset_id: 0,
            add_offset: params.skip,
            limit: params.take
        }).then(function (data) {
            defer.resolve(data);
        }, function (err) {
            defer.reject(err);
        });

        return defer.promise();
    }

    function sendFile(params) {
        var defer = $.Deferred();

        params = params || {};
        params.id = params.id || 0;
        params.type = params.type || 'chat';
        params.file = params.file || {};
        params.caption = params.caption || '';

        if (params.type == 'chat' && params.id > 0) {
            params.id = params.id * -1;
        }

        _MtpApiFileManager.uploadFile(params.file).then(function (inputFile) {
            var file = params.file;

            inputFile.name = file.name;

            var inputMedia = {
                _: 'inputMediaUploadedDocument',
                file: inputFile,
                mime_type: file.type,
                caption: params.caption,
                attributes: [
                    {_: 'documentAttributeFilename', file_name: file.name}
                ]
            };

            return _MtpApiManager.invokeApi('messages.sendMedia', {
                peer: _AppPeersManager.getInputPeerByID(params.id),
                media: inputMedia,
                random_id: [nextRandomInt(0xFFFFFFFF), nextRandomInt(0xFFFFFFFF)]
            });
        }).then(function (data) {
            defer.resolve(data);
        }, function (err) {
            defer.reject(err);
        });

        return defer.promise();
    }

    function downloadDocument(doc, progress) {
        doc = doc || {};
        doc.id = doc.id || 0;
        doc.access_hash = doc.access_hash || 0;
        doc.attributes = doc.attributes || [];
        doc.size = doc.size || 0;

        if (!$.isFunction(progress)) {
            progress = function () {
            };
        }

        var location = {
            _: 'inputDocumentFileLocation',
            id: doc.id,
            access_hash: doc.access_hash
        };
        var fileName = 'FILE';
        var size = 15728640;
        var limit = 524288;
        var offset = 0;
        var success = $.Deferred();
        var done = $.Deferred();
        var bytes = [];

        if (doc.size > size) {
            throw new Error('Big file not supported');
        }

        size = doc.size;

        doc.attributes.forEach(function (attr) {
            if (attr._ == 'documentAttributeFilename') {
                fileName = attr.file_name;
            }
        });

        success.then(function () {
            // TODO: Improve
            var a = document.createElement('a');
            var blob = new Blob(bytes, {type: 'octet/stream'});

            document.body.appendChild(a);
            a.style = 'display: none';
            a.href = window.URL.createObjectURL(blob);
            a.download = fileName;
            a.click();


            setTimeout(function () {
                window.URL.revokeObjectURL(a.href);
                a.remove();
            }, 100);

            done.resolve();
        });

        function download() {
            if (offset < size) {
                _MtpApiManager.invokeApi('upload.getFile', {
                    location: location,
                    offset: offset,
                    limit: limit
                }).then(function (result) {
                    bytes.push(result.bytes);
                    offset += limit;
                    progress(offset < size ? offset : size, size);
                    download();
                });
            } else {
                success.resolve();
            }
        }

        setTimeout(download, 0);

        return done.promise();
    }

    function joinChat(link) {
        var defer = $.Deferred();
        var regex;
        var hash;

        if (regex = link.match(/^https:\/\/telegram.me\/joinchat\/([\s\S]*)/)) {
            hash = regex[1];
        } else {
            hash = link;
        }

        _MtpApiManager.invokeApi('messages.importChatInvite', {hash: hash}).then(function (data) {
            defer.resolve(data);
        }, function (err) {
            defer.reject(err);
        });

        return defer.promise();
    }

    function editChatAdmin(chatID, userID, isAdmin) {
        var defer = $.Deferred();

        if (typeof isAdmin == 'undefined') {
            isAdmin = true;
        }

        isAdmin = !!isAdmin;
        chatID = _AppChatsManager.getChatInput(chatID);
        userID = _AppUsersManager.getUserInput(userID);

        _MtpApiManager.invokeApi('messages.editChatAdmin', {
            chat_id: chatID,
            user_id: userID,
            is_admin: isAdmin
        }).then(function (data) {
            defer.resolve(data);
        }, function (err) {
            defer.reject(err);
        });

        return defer.promise();
    }

    function editChatTitle(chat_id, title) {
        var defer = $.Deferred();

        _MtpApiManager.invokeApi('messages.editChatTitle', {
            chat_id: chat_id,
            title: title
        }).then(function (data) {
            defer.resolve(data);
        }, function (err) {
            defer.reject(err);
        });

        return defer.promise();
    }

    function editChannelAdmin(channel_id, user_id) {
        var defer = $.Deferred();

        _MtpApiManager.invokeApi('channels.editAdmin', {
            channel: _AppChatsManager.getChannelInput(channel_id),
            user_id: _AppUsersManager.getUserInput(user_id),
            role: {
                _: 'channelRoleEditor'
            }
        }).then(function (updates) {
            defer.resolve(updates);
        }, function (err) {
            defer.reject(err);
        });

        return defer.promise();
    }

    /* Private Functions */

    function _saveUserInfo() {
        var deferred = $.Deferred();

        _MtpApiManager.invokeApi('users.getFullUser', {
            id: {_: 'inputUserSelf'}
        }).then(function (userFullResult) {
            _AppUsersManager.saveApiUser(userFullResult.user);
            _AppPhotosManager.savePhoto(userFullResult.profile_photo, {
                user_id: userFullResult.user.id
            });
            deferred.resolve();
        });

        return deferred.promise();
    }
})();