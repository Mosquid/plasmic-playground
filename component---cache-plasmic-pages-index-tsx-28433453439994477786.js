/*! For license information please see component---cache-plasmic-pages-index-tsx-28433453439994477786.js.LICENSE.txt */
(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[964],{7803:function(t,n){var e;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var t=[],n=0;n<arguments.length;n++){var e=arguments[n];if(e){var a=typeof e;if("string"===a||"number"===a)t.push(e);else if(Array.isArray(e)){if(e.length){var i=o.apply(null,e);i&&t.push(i)}}else if("object"===a)if(e.toString===Object.prototype.toString)for(var u in e)r.call(e,u)&&e[u]&&t.push(u);else t.push(e.toString())}}return t.join(" ")}t.exports?(o.default=o,t.exports=o):void 0===(e=function(){return o}.apply(n,[]))||(t.exports=e)}()},3099:function(t){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},1223:function(t,n,e){var r=e(5112),o=e(30),a=e(3070),i=r("unscopables"),u=Array.prototype;null==u[i]&&a.f(u,i,{configurable:!0,value:o(null)}),t.exports=function(t){u[i][t]=!0}},9670:function(t,n,e){var r=e(111);t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},1318:function(t,n,e){var r=e(5656),o=e(7466),a=e(1400),i=function(t){return function(n,e,i){var u,c=r(n),f=o(c.length),s=a(i,f);if(t&&e!=e){for(;f>s;)if((u=c[s++])!=u)return!0}else for(;f>s;s++)if((t||s in c)&&c[s]===e)return t||s||0;return!t&&-1}};t.exports={includes:i(!0),indexOf:i(!1)}},5417:function(t,n,e){var r=e(111),o=e(3157),a=e(5112)("species");t.exports=function(t,n){var e;return o(t)&&("function"!=typeof(e=t.constructor)||e!==Array&&!o(e.prototype)?r(e)&&null===(e=e[a])&&(e=void 0):e=void 0),new(void 0===e?Array:e)(0===n?0:n)}},4326:function(t){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},648:function(t,n,e){var r=e(1694),o=e(4326),a=e(5112)("toStringTag"),i="Arguments"==o(function(){return arguments}());t.exports=r?o:function(t){var n,e,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=function(t,n){try{return t[n]}catch(e){}}(n=Object(t),a))?e:i?o(n):"Object"==(r=o(n))&&"function"==typeof n.callee?"Arguments":r}},9920:function(t,n,e){var r=e(6656),o=e(3887),a=e(1236),i=e(3070);t.exports=function(t,n){for(var e=o(n),u=i.f,c=a.f,f=0;f<e.length;f++){var s=e[f];r(t,s)||u(t,s,c(n,s))}}},8880:function(t,n,e){var r=e(9781),o=e(3070),a=e(9114);t.exports=r?function(t,n,e){return o.f(t,n,a(1,e))}:function(t,n,e){return t[n]=e,t}},9114:function(t){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},6135:function(t,n,e){"use strict";var r=e(7593),o=e(3070),a=e(9114);t.exports=function(t,n,e){var i=r(n);i in t?o.f(t,i,a(0,e)):t[i]=e}},9781:function(t,n,e){var r=e(7293);t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},317:function(t,n,e){var r=e(7854),o=e(111),a=r.document,i=o(a)&&o(a.createElement);t.exports=function(t){return i?a.createElement(t):{}}},5268:function(t,n,e){var r=e(4326),o=e(7854);t.exports="process"==r(o.process)},8113:function(t,n,e){var r=e(5005);t.exports=r("navigator","userAgent")||""},7392:function(t,n,e){var r,o,a=e(7854),i=e(8113),u=a.process,c=u&&u.versions,f=c&&c.v8;f?o=(r=f.split("."))[0]+r[1]:i&&(!(r=i.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=i.match(/Chrome\/(\d+)/))&&(o=r[1]),t.exports=o&&+o},748:function(t){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2109:function(t,n,e){var r=e(7854),o=e(1236).f,a=e(8880),i=e(1320),u=e(3505),c=e(9920),f=e(4705);t.exports=function(t,n){var e,s,l,p,d,v=t.target,y=t.global,m=t.stat;if(e=y?r:m?r[v]||u(v,{}):(r[v]||{}).prototype)for(s in n){if(p=n[s],l=t.noTargetGet?(d=o(e,s))&&d.value:e[s],!f(y?s:v+(m?".":"#")+s,t.forced)&&void 0!==l){if(typeof p==typeof l)continue;c(p,l)}(t.sham||l&&l.sham)&&a(p,"sham",!0),i(e,s,p,t)}}},7293:function(t){t.exports=function(t){try{return!!t()}catch(n){return!0}}},6790:function(t,n,e){"use strict";var r=e(3157),o=e(7466),a=e(9974),i=function(t,n,e,u,c,f,s,l){for(var p,d=c,v=0,y=!!s&&a(s,l,3);v<u;){if(v in e){if(p=y?y(e[v],v,n):e[v],f>0&&r(p))d=i(t,n,p,o(p.length),d,f-1)-1;else{if(d>=9007199254740991)throw TypeError("Exceed the acceptable array length");t[d]=p}d++}v++}return d};t.exports=i},9974:function(t,n,e){var r=e(3099);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 0:return function(){return t.call(n)};case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},5005:function(t,n,e){var r=e(857),o=e(7854),a=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,n){return arguments.length<2?a(r[t])||a(o[t]):r[t]&&r[t][n]||o[t]&&o[t][n]}},1246:function(t,n,e){var r=e(648),o=e(7497),a=e(5112)("iterator");t.exports=function(t){if(null!=t)return t[a]||t["@@iterator"]||o[r(t)]}},7854:function(t,n,e){var r=function(t){return t&&t.Math==Math&&t};t.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof e.g&&e.g)||function(){return this}()||Function("return this")()},6656:function(t,n,e){var r=e(7908),o={}.hasOwnProperty;t.exports=function(t,n){return o.call(r(t),n)}},3501:function(t){t.exports={}},490:function(t,n,e){var r=e(5005);t.exports=r("document","documentElement")},4664:function(t,n,e){var r=e(9781),o=e(7293),a=e(317);t.exports=!r&&!o((function(){return 7!=Object.defineProperty(a("div"),"a",{get:function(){return 7}}).a}))},8361:function(t,n,e){var r=e(7293),o=e(4326),a="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?a.call(t,""):Object(t)}:Object},2788:function(t,n,e){var r=e(5465),o=Function.toString;"function"!=typeof r.inspectSource&&(r.inspectSource=function(t){return o.call(t)}),t.exports=r.inspectSource},9909:function(t,n,e){var r,o,a,i=e(8536),u=e(7854),c=e(111),f=e(8880),s=e(6656),l=e(5465),p=e(6200),d=e(3501),v="Object already initialized",y=u.WeakMap;if(i){var m=l.state||(l.state=new y),h=m.get,g=m.has,b=m.set;r=function(t,n){if(g.call(m,t))throw new TypeError(v);return n.facade=t,b.call(m,t,n),n},o=function(t){return h.call(m,t)||{}},a=function(t){return g.call(m,t)}}else{var w=p("state");d[w]=!0,r=function(t,n){if(s(t,w))throw new TypeError(v);return n.facade=t,f(t,w,n),n},o=function(t){return s(t,w)?t[w]:{}},a=function(t){return s(t,w)}}t.exports={set:r,get:o,has:a,enforce:function(t){return a(t)?o(t):r(t,{})},getterFor:function(t){return function(n){var e;if(!c(n)||(e=o(n)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return e}}}},7659:function(t,n,e){var r=e(5112),o=e(7497),a=r("iterator"),i=Array.prototype;t.exports=function(t){return void 0!==t&&(o.Array===t||i[a]===t)}},3157:function(t,n,e){var r=e(4326);t.exports=Array.isArray||function(t){return"Array"==r(t)}},4705:function(t,n,e){var r=e(7293),o=/#|\.prototype\./,a=function(t,n){var e=u[i(t)];return e==f||e!=c&&("function"==typeof n?r(n):!!n)},i=a.normalize=function(t){return String(t).replace(o,".").toLowerCase()},u=a.data={},c=a.NATIVE="N",f=a.POLYFILL="P";t.exports=a},111:function(t){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},1913:function(t){t.exports=!1},408:function(t,n,e){var r=e(9670),o=e(7659),a=e(7466),i=e(9974),u=e(1246),c=e(9212),f=function(t,n){this.stopped=t,this.result=n};t.exports=function(t,n,e){var s,l,p,d,v,y,m,h=e&&e.that,g=!(!e||!e.AS_ENTRIES),b=!(!e||!e.IS_ITERATOR),w=!(!e||!e.INTERRUPTED),x=i(n,h,1+g+w),E=function(t){return s&&c(s),new f(!0,t)},j=function(t){return g?(r(t),w?x(t[0],t[1],E):x(t[0],t[1])):w?x(t,E):x(t)};if(b)s=t;else{if("function"!=typeof(l=u(t)))throw TypeError("Target is not iterable");if(o(l)){for(p=0,d=a(t.length);d>p;p++)if((v=j(t[p]))&&v instanceof f)return v;return new f(!1)}s=l.call(t)}for(y=s.next;!(m=y.call(s)).done;){try{v=j(m.value)}catch(O){throw c(s),O}if("object"==typeof v&&v&&v instanceof f)return v}return new f(!1)}},9212:function(t,n,e){var r=e(9670);t.exports=function(t){var n=t.return;if(void 0!==n)return r(n.call(t)).value}},7497:function(t){t.exports={}},133:function(t,n,e){var r=e(5268),o=e(7392),a=e(7293);t.exports=!!Object.getOwnPropertySymbols&&!a((function(){return!Symbol.sham&&(r?38===o:o>37&&o<41)}))},8536:function(t,n,e){var r=e(7854),o=e(2788),a=r.WeakMap;t.exports="function"==typeof a&&/native code/.test(o(a))},30:function(t,n,e){var r,o=e(9670),a=e(6048),i=e(748),u=e(3501),c=e(490),f=e(317),s=e(6200),l=s("IE_PROTO"),p=function(){},d=function(t){return"<script>"+t+"</"+"script>"},v=function(){try{r=document.domain&&new ActiveXObject("htmlfile")}catch(o){}var t,n;v=r?function(t){t.write(d("")),t.close();var n=t.parentWindow.Object;return t=null,n}(r):((n=f("iframe")).style.display="none",c.appendChild(n),n.src=String("javascript:"),(t=n.contentWindow.document).open(),t.write(d("document.F=Object")),t.close(),t.F);for(var e=i.length;e--;)delete v.prototype[i[e]];return v()};u[l]=!0,t.exports=Object.create||function(t,n){var e;return null!==t?(p.prototype=o(t),e=new p,p.prototype=null,e[l]=t):e=v(),void 0===n?e:a(e,n)}},6048:function(t,n,e){var r=e(9781),o=e(3070),a=e(9670),i=e(1956);t.exports=r?Object.defineProperties:function(t,n){a(t);for(var e,r=i(n),u=r.length,c=0;u>c;)o.f(t,e=r[c++],n[e]);return t}},3070:function(t,n,e){var r=e(9781),o=e(4664),a=e(9670),i=e(7593),u=Object.defineProperty;n.f=r?u:function(t,n,e){if(a(t),n=i(n,!0),a(e),o)try{return u(t,n,e)}catch(r){}if("get"in e||"set"in e)throw TypeError("Accessors not supported");return"value"in e&&(t[n]=e.value),t}},1236:function(t,n,e){var r=e(9781),o=e(5296),a=e(9114),i=e(5656),u=e(7593),c=e(6656),f=e(4664),s=Object.getOwnPropertyDescriptor;n.f=r?s:function(t,n){if(t=i(t),n=u(n,!0),f)try{return s(t,n)}catch(e){}if(c(t,n))return a(!o.f.call(t,n),t[n])}},8006:function(t,n,e){var r=e(6324),o=e(748).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},5181:function(t,n){n.f=Object.getOwnPropertySymbols},6324:function(t,n,e){var r=e(6656),o=e(5656),a=e(1318).indexOf,i=e(3501);t.exports=function(t,n){var e,u=o(t),c=0,f=[];for(e in u)!r(i,e)&&r(u,e)&&f.push(e);for(;n.length>c;)r(u,e=n[c++])&&(~a(f,e)||f.push(e));return f}},1956:function(t,n,e){var r=e(6324),o=e(748);t.exports=Object.keys||function(t){return r(t,o)}},5296:function(t,n){"use strict";var e={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,o=r&&!e.call({1:2},1);n.f=o?function(t){var n=r(this,t);return!!n&&n.enumerable}:e},3887:function(t,n,e){var r=e(5005),o=e(8006),a=e(5181),i=e(9670);t.exports=r("Reflect","ownKeys")||function(t){var n=o.f(i(t)),e=a.f;return e?n.concat(e(t)):n}},857:function(t,n,e){var r=e(7854);t.exports=r},1320:function(t,n,e){var r=e(7854),o=e(8880),a=e(6656),i=e(3505),u=e(2788),c=e(9909),f=c.get,s=c.enforce,l=String(String).split("String");(t.exports=function(t,n,e,u){var c,f=!!u&&!!u.unsafe,p=!!u&&!!u.enumerable,d=!!u&&!!u.noTargetGet;"function"==typeof e&&("string"!=typeof n||a(e,"name")||o(e,"name",n),(c=s(e)).source||(c.source=l.join("string"==typeof n?n:""))),t!==r?(f?!d&&t[n]&&(p=!0):delete t[n],p?t[n]=e:o(t,n,e)):p?t[n]=e:i(n,e)})(Function.prototype,"toString",(function(){return"function"==typeof this&&f(this).source||u(this)}))},4488:function(t){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},3505:function(t,n,e){var r=e(7854),o=e(8880);t.exports=function(t,n){try{o(r,t,n)}catch(e){r[t]=n}return n}},6200:function(t,n,e){var r=e(2309),o=e(9711),a=r("keys");t.exports=function(t){return a[t]||(a[t]=o(t))}},5465:function(t,n,e){var r=e(7854),o=e(3505),a="__core-js_shared__",i=r[a]||o(a,{});t.exports=i},2309:function(t,n,e){var r=e(1913),o=e(5465);(t.exports=function(t,n){return o[t]||(o[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.11.2",mode:r?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},1400:function(t,n,e){var r=e(9958),o=Math.max,a=Math.min;t.exports=function(t,n){var e=r(t);return e<0?o(e+n,0):a(e,n)}},5656:function(t,n,e){var r=e(8361),o=e(4488);t.exports=function(t){return r(o(t))}},9958:function(t){var n=Math.ceil,e=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?e:n)(t)}},7466:function(t,n,e){var r=e(9958),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},7908:function(t,n,e){var r=e(4488);t.exports=function(t){return Object(r(t))}},7593:function(t,n,e){var r=e(111);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},1694:function(t,n,e){var r={};r[e(5112)("toStringTag")]="z",t.exports="[object z]"===String(r)},9711:function(t){var n=0,e=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++n+e).toString(36)}},3307:function(t,n,e){var r=e(133);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},5112:function(t,n,e){var r=e(7854),o=e(2309),a=e(6656),i=e(9711),u=e(133),c=e(3307),f=o("wks"),s=r.Symbol,l=c?s:s&&s.withoutSetter||i;t.exports=function(t){return a(f,t)&&(u||"string"==typeof f[t])||(u&&a(s,t)?f[t]=s[t]:f[t]=l("Symbol."+t)),f[t]}},6535:function(t,n,e){"use strict";var r=e(2109),o=e(6790),a=e(7908),i=e(7466),u=e(3099),c=e(5417);r({target:"Array",proto:!0},{flatMap:function(t){var n,e=a(this),r=i(e.length);return u(t),(n=c(e,0)).length=o(n,e,e,r,0,1,t,arguments.length>1?arguments[1]:void 0),n}})},9244:function(t,n,e){e(1223)("flatMap")},8559:function(t,n,e){var r=e(2109),o=e(408),a=e(6135);r({target:"Object",stat:!0},{fromEntries:function(t){var n={};return o(t,(function(t,e){a(n,t,e)}),{AS_ENTRIES:!0}),n}})},7834:function(t,n,e){"use strict";e.r(n),e.d(n,{default:function(){return Ct}});var r=e(7294),o=e.t(r,2),a=e(7329),i=(e(6535),e(9244),e(8559),e(7803)),u=e.n(i),c=e(3935);e(2961);function f(t,n){var e="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!e){if(Array.isArray(t)||(e=function(t,n){if(!t)return;if("string"==typeof t)return s(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return s(t,n)}(t))||n&&t&&"number"==typeof t.length){e&&(t=e);var r=0,o=function(){};return{s:o,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,u=!1;return{s:function(){e=e.call(t)},n:function(){var t=e.next();return i=t.done,t},e:function(t){u=!0,a=t},f:function(){try{i||null==e.return||e.return()}finally{if(u)throw a}}}}function s(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}"undefined"!=typeof window&&r.useLayoutEffect,new Map;new Set(["id"]),new Set(["aria-label","aria-labelledby","aria-describedby","aria-details"]);var l=new Map,p=new Set;function d(){if("undefined"!=typeof window){var t=function t(n){var e=l.get(n.target);if(e&&(e.delete(n.propertyName),0===e.size&&(n.target.removeEventListener("transitioncancel",t),l.delete(n.target)),0===l.size)){var r,o=f(p);try{for(o.s();!(r=o.n()).done;){(0,r.value)()}}catch(a){o.e(a)}finally{o.f()}p.clear()}};document.body.addEventListener("transitionrun",(function(n){var e=l.get(n.target);e||(e=new Set,l.set(n.target,e),n.target.addEventListener("transitioncancel",t)),e.add(n.propertyName)})),document.body.addEventListener("transitionend",t)}}"undefined"!=typeof document&&("loading"!==document.readyState?d():document.addEventListener("DOMContentLoaded",d));"undefined"!=typeof window&&window.visualViewport;new Map;function v(t){return"undefined"!=typeof window&&null!=window.navigator&&t.test(window.navigator.platform)}function y(){return v(/^Mac/)}function m(t,n){var e="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!e){if(Array.isArray(t)||(e=function(t,n){if(!t)return;if("string"==typeof t)return h(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return h(t,n)}(t))||n&&t&&"number"==typeof t.length){e&&(t=e);var r=0,o=function(){};return{s:o,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,u=!1;return{s:function(){e=e.call(t)},n:function(){var t=e.next();return i=t.done,t},e:function(t){u=!0,a=t},f:function(){try{i||null==e.return||e.return()}finally{if(u)throw a}}}}function h(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}function g(t){return!(0!==t.mozInputSource||!t.isTrusted)||0===t.detail&&!t.pointerType}var b=r.createContext(null);b.displayName="PressResponderContext";var w=new Set,x=!1,E=!1;function j(t,n){var e,r=m(w);try{for(r.s();!(e=r.n()).done;){(0,e.value)(t,n)}}catch(o){r.e(o)}finally{r.f()}}function O(t){E=!0,function(t){return!(t.metaKey||!y()&&t.altKey||t.ctrlKey)}(t)&&("keyboard",j("keyboard",t))}function S(t){"pointer","mousedown"!==t.type&&"pointerdown"!==t.type||(E=!0,j("pointer",t))}function A(t){g(t)&&(E=!0,"virtual")}function P(t){t.target!==window&&t.target!==document&&(E||("virtual",j("virtual",t)),E=!1)}function _(){E=!1}function T(){if("undefined"!=typeof window&&!x){var t=HTMLElement.prototype.focus;HTMLElement.prototype.focus=function(){E=!0,t.apply(this,arguments)},document.addEventListener("keydown",O,!0),document.addEventListener("keyup",O,!0),document.addEventListener("click",A,!0),window.addEventListener("focus",P,!0),window.addEventListener("blur",_,!1),"undefined"!=typeof PointerEvent?(document.addEventListener("pointerdown",S,!0),document.addEventListener("pointermove",S,!0),document.addEventListener("pointerup",S,!0)):(document.addEventListener("mousedown",S,!0),document.addEventListener("mousemove",S,!0),document.addEventListener("mouseup",S,!0)),x=!0}}"undefined"!=typeof document&&("loading"!==document.readyState?T():document.addEventListener("DOMContentLoaded",T));new Set;var N=["input:not([disabled]):not([type=hidden])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","a[href]","area[href]","summary","iframe","object","embed","audio[controls]","video[controls]","[contenteditable]"];N.join(":not([hidden]),");N.push('[tabindex]:not([tabindex="-1"]):not([disabled])');N.join(':not([hidden]):not([tabindex="-1"]),');function k(){return(k=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t}).apply(this,arguments)}function C(t,n){if(null==t)return{};var e,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)e=a[r],n.indexOf(e)>=0||(o[e]=t[e]);return o}function L(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}function I(t,n){var e;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(e=function(t,n){if(t){if("string"==typeof t)return L(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?L(t,n):void 0}}(t))||n&&t&&"number"==typeof t.length){e&&(t=e);var r=0;return function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(e=t[Symbol.iterator]()).next.bind(e)}function M(t){return null!=t}function H(t){for(var n={},e=arguments.length,r=new Array(e>1?e-1:0),o=1;o<e;o++)r[o-1]=arguments[o];for(var a=0,i=r;a<i.length;a++){var u=i[a];u in t&&(n[u]=t[u])}return n}function F(t){for(var n={},e=arguments.length,r=new Array(e>1?e-1:0),o=1;o<e;o++)r[o-1]=arguments[o];for(var a=0,i=Object.keys(t);a<i.length;a++){var u=i[a];r.includes(u)||(n[u]=t[u])}return n}function R(){for(var t=arguments.length,n=new Array(t),e=0;e<t;e++)n[e]=arguments[e];if(0!==n.length)return function(t){for(var e,r=t,o=I(n);!(e=o()).done;){r=(0,e.value)(r)}return r}}var z="undefined"!=typeof window,$=Symbol("NONE"),G=z?r.useLayoutEffect:r.useEffect;function U(t,n,e){return Array.isArray(e)?r.createElement.apply(r,[t,n].concat(e)):e||"children"in n?r.createElement(t,n,e):r.createElement(t,n)}function D(t){return Array.isArray(t)?1===t.length?t[0]:r.createElement.apply(r,[r.Fragment,{}].concat(t)):t}function q(t){for(var n=k({},t),e=arguments.length,r=new Array(e>1?e-1:0),o=1;o<e;o++)r[o-1]=arguments[o];for(var a=0,i=r;a<i.length;a++)for(var u=i[a],c=0,f=Object.keys(u);c<f.length;c++){var s=f[c];n[s]=W(s,n[s],u[s])}return n}function K(t,n){t&&("function"==typeof t?t(n):Object.isFrozen(t)||(t.current=n))}function V(){for(var t=arguments.length,n=new Array(t),e=0;e<t;e++)n[e]=arguments[e];return function(t){for(var e,r=I(n);!(e=r()).done;){K(e.value,t)}}}function W(t,n,e){return n===$||e===$?null:null==n?e:null==e?n:"className"===t?u()(n,e):"style"===t?k({},n,e):"ref"===t?V(n,e):typeof n!=typeof e?e:t.startsWith("on")&&"function"==typeof n?function(){var t;return"function"==typeof n&&(t=n.apply(void 0,arguments)),"function"==typeof e&&(t=e.apply(void 0,arguments)),t}:e}function J(t,n,e,r){var o=n.children,a=C(n,["children"]),i=Z(o,null!=e&&e);return U(t,k({ref:r},a),i)}function B(t,n){var e=t.as,r=t.hasGap;return J(null!=e?e:"div",C(t,["as","hasGap"]),r,n)}var Y=(0,r.forwardRef)(B),Q=function(t){return(0,r.forwardRef)((function(n,e){var r=n.hasGap,o=C(n,["hasGap"]);return J(t,o,r,e)}))},X=Object.assign(Y,{div:Q("div"),a:Q("a"),button:Q("button"),h1:Q("h1"),h2:Q("h2"),h3:Q("h3"),h4:Q("h4"),h5:Q("h5"),h6:Q("h6"),label:Q("label"),form:Q("form"),section:Q("section"),head:Q("head"),main:Q("main"),nav:Q("nav")});function Z(t,n){var e=n?"__wab_flex-container":"__wab_passthrough";return t?Array.isArray(t)?r.createElement.apply(o,["div",{className:e}].concat(t)):(0,r.createElement)("div",{className:e},t):null}function tt(t,n,e,r){var o=it(t),a=at(e,o.props);if("render"===o.type)return o.render(a,n);var i=n;"as"===o.type&&o.as&&(n===X?a.as=o.as:i=o.as);var u=a.children;o.wrapChildren&&(u=o.wrapChildren(D(u))),r&&(u=Z(u,!0));var c=U(i,a,u);return o.wrap&&(c=o.wrap(c)),c}var nt=new Map;function et(t,n){null==n&&(n={});var e=n["data-plasmic-name"],r=n["data-plasmic-root"],o=n["data-plasmic-for-node"];delete n["data-plasmic-name"],delete n["data-plasmic-root"],delete n["data-plasmic-for-node"];for(var a=arguments.length,i=new Array(a>2?a-2:0),u=2;u<a;u++)i[u-2]=arguments[u];var c=rt.apply(void 0,[t,n].concat(i));if(e&&nt.set(e,c),r){var f,s=o?null!=(f=nt.get(o))?f:null:c;return nt.clear(),s}return c}function rt(t,n){var e,r=n["data-plasmic-override"],o=n["data-plasmic-wrap-flex-child"],a=null!=(e=n["data-plasmic-trigger-props"])?e:[];delete n["data-plasmic-override"],delete n["data-plasmic-wrap-flex-child"],delete n["data-plasmic-trigger-props"];for(var i=arguments.length,u=new Array(i>2?i-2:0),c=2;c<i;c++)u[c-2]=arguments[c];return tt(r,t,q.apply(void 0,[n,0===u.length?{}:{children:D(u)}].concat(a)),o)}var ot=Symbol("UNSET");function at(t,n){if(!n)return t;for(var e=k({},t),r=0,o=Object.keys(n);r<o.length;r++){var a=o[r],i=t[a],u=n[a];u===ot?delete e[a]:(null!=u||"className"===a||"style"===a||a.startsWith("on")&&"function"==typeof i||(u=$),e[a]=W(a,i,u))}return e}function it(t){if(!t)return{type:"default",props:{}};if(function(t){return"string"==typeof t||"number"==typeof t||r.isValidElement(t)}(t))return{type:"default",props:{children:t}};if("object"==typeof t)return"as"in t?k({},t,{props:t.props||{},type:"as"}):"render"in t?k({},t,{type:"render"}):"props"in t?k({},t,{props:t.props||{},type:"default"}):(n=Object.keys(t),e=["wrap","wrapChildren"],n.every((function(t){return e.includes(t)}))?k({},t,{props:{},type:"default"}):{type:"default",props:t});if("function"==typeof t)return{type:"render",render:t};var n,e;throw new Error("Unexpected override: "+t)}function ut(t,n){for(var e={},r=0,o=Array.from(new Set([].concat(Object.keys(t),Object.keys(n))));r<o.length;r++){var a=o[r];e[a]=ct(t[a],n[a])}return e}function ct(t,n){var e,r;if(!t)return n;if(!n)return t;var o=it(t),a=it(n),i=R.apply(void 0,[o.wrap,a.wrap].filter(M)),u=R.apply(void 0,[o.wrapChildren,a.wrapChildren].filter(M)),c=at(null!=(e=o.props)?e:{},a.props);if("render"===a.type)return{render:a.render,props:c,wrap:i,wrapChildren:u};if("render"===o.type)return{render:o.render,props:c,wrap:i,wrapChildren:u};var f=null!=(r="as"===a.type?a.as:void 0)?r:"as"===o.type?o.as:void 0;return k({props:c,wrap:i,wrapChildren:u},f?{as:f}:{})}function ft(t,n){var e,r,o,a,i,u,c,f,s=n.name,l=n.descendantNames,p=n.internalVariantPropNames,d=n.internalArgPropNames,v=["variants","args","overrides"],y=(a=F.apply(void 0,[H.apply(void 0,[t].concat(p))].concat(v)),i=null!=(e=t.variants)?e:{},k({},a,i)),m=(u=F.apply(void 0,[H.apply(void 0,[t].concat(d))].concat(v)),c=null!=(r=t.args)?r:{},k({},u,c)),h=ut(F.apply(void 0,[H.apply(void 0,[t].concat(l))].concat(d,p,v)),null!=(o=t.overrides)?o:{}),g=F.apply(void 0,[t,"variants","args","overrides"].concat(l,p,d));Object.keys(g).length>0&&(h=ut(h,((f={})[s]={props:g},f)));return{variants:y,args:m,overrides:h}}var st=[],lt={};function pt(){return z?Object.entries(lt).filter((function(t){var n=t[1];return window.matchMedia(n).matches})).map((function(t){return t[0]})):[]}var dt=void 0;z&&window.addEventListener("resize",(function(){var t=pt();dt&&t.join("")===dt.join("")||(dt=t,c.unstable_batchedUpdates((function(){return st.forEach((function(t){return t()}))})))}));var vt=u(),yt="plasmic__default_style-module--all--1UbrG",mt="plasmic__default_style-module--__wab_text--2GF2O",ht=new Array,gt=new Array;var bt={root:["root"]};var wt,xt,Et=Object.assign(((xt=function(t){var n=ft(t,{name:wt,descendantNames:(0,a.Z)(bt[wt]),internalArgPropNames:gt,internalVariantPropNames:ht});return function(t){t.variants,t.args;var n=t.overrides,e=t.forNode;return t.dataFetches,et(r.Fragment,null,et("style",null,"\n        body {\n          margin: 0;\n        }\n      "),et("div",{className:"plasmic__default_style-module--plasmic_page_wrapper--vaaM6"},et("div",{"data-plasmic-name":"root","data-plasmic-override":n.root,"data-plasmic-root":!0,"data-plasmic-for-node":e,className:vt(yt,"plasmic_blank_project-module--root_reset--316c-","PlasmicHomepage-module--root--34bG1")},et("div",{className:vt(yt,mt,"PlasmicHomepage-module--box__qaAj2--3YsAj")},"Welcome to your first page."),et("div",{className:vt(yt,mt,"PlasmicHomepage-module--box__fQexs--3iA9r")},"Hello world"))))}({variants:n.variants,args:n.args,overrides:n.overrides,dataFetches:t.dataFetches,forNode:wt})}).displayName="root"===(wt="root")?"PlasmicHomepage":"PlasmicHomepage."+wt,xt),{internalVariantProps:ht,internalArgProps:gt});function jt(t){return console.warn("DEPRECATED: Plasmic now uses a custom hook for Screen variants, which is automatically included in your components. Please remove this provider from your code."),t.children}var Ot,St;Ot=!0,St={mobileOnly:"(min-width:0px) and (max-width:768px)"},Object.assign(lt,St);const At={Homepage:Et},Pt={Screen:{component:jt,isContext:!Boolean("ScreenVariantProvider")}},_t={Homepage:{bxbHqENCJbyK9HTk22rtrw:Et}},Tt={Screen:{bxbHqENCJbyK9HTk22rtrw:{component:jt,isContext:!Boolean(void 0)}}};function Nt(t,n,e){const o=Object.entries(e||{}).map((([t,e])=>{if(Pt[t]){const{component:n,isContext:r}=Pt[t];return[r?n.Provider:n,e]}if(!Tt[t])throw new Error(`The provider ${t} could not be found.`);if(!Tt[t][n])throw new Error(`The provider ${t} requires a valid projectId. Passed: ${n}. Options: ${Object.keys(Tt[t])}`);const{component:r,isContext:o}=Tt[t][n];return[o?r.Provider:r,e]}));return o.length?o.reduce(((t,[n,e])=>r.createElement(n,{value:e},t)),t):t}function kt({projectId:t,component:n,componentProps:e={},providerProps:o={}}){const a=function(t,n){if(At[n])return At[n];if(!_t[n])throw new Error(`The component ${n} could not be found.`);if(!_t[n][t])throw new Error(`The component ${n} requires a valid projectId. Passed: ${t}. Options: ${Object.keys(_t[n])}`);return _t[n][t]}(t,n);return Nt(r.createElement(a,e),t,o)}function Ct(){return r.createElement(kt,{projectId:"bxbHqENCJbyK9HTk22rtrw",component:"Homepage"})}}}]);
//# sourceMappingURL=component---cache-plasmic-pages-index-tsx-28433453439994477786.js.map