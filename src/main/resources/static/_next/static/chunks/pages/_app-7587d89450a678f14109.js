(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{96156:function(n,t,e){"use strict";function r(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}e.d(t,{Z:function(){return r}})},32561:function(n,t,e){"use strict";function r(n,t){!function(n,t){localStorage.setItem(n,t)}(n,t=JSON.stringify(t))}function o(n){var t=localStorage.getItem(n);return void 0==t||""===t?{}:t=JSON.parse(t)}function u(n){return localStorage.removeItem(n)}function c(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return 0===Object.keys(n).length}function i(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=n.match(/<pre[^\0]*?<\/pre>/gm)||[];return t.forEach((function(t,e){var r=t.replace(/&nbsp;/g," "),o=n.indexOf(t),u=t.length;n=n.substring(0,o)+r+n.substring(o+u,n.length)})),n}e.d(t,{C_:function(){return r},YO:function(){return o},U2:function(){return u},xb:function(){return c},z8:function(){return i},f2:function(){return f},pL:function(){return s},Vj:function(){return a},vL:function(){return p}});var f=function(n){return n<10?"0"+n:n},s=function(n){var t=n.currentTarget;if(t){var e=t.type;return["checkbox"].indexOf(e)>-1?t.checked:t.value}return n};function a(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(n){var t=16*Math.random()|0;return("x"==n?t:3&t|8).toString(16)}))}function p(n){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],e=n.getBoundingClientRect(),r=e.top,o=e.bottom,u=r>=0&&o<=window.innerHeight;return t&&(u=r<window.innerHeight&&o>=0),u}},18828:function(n,t,e){"use strict";e.d(t,{j:function(){return r}});var r=e(67294).createContext({userInfo:{},updateUserInfo:function(n,t){console.log("from updateTheme themecontext ",n,t)}})},7672:function(n,t,e){"use strict";e.r(t);var r=e(85893),o=e(96156),u=(e(13235),e(4298)),c=(e(82702),e(18828)),i=e(67294),f=e(32561),s=(e(88473),e(11163));e(26739);function a(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,r)}return e}function p(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?a(Object(e),!0).forEach((function(t){(0,o.Z)(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):a(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}s.default.events.on("routeChangeStart",(function(n){console.log("Loading: ".concat(n))})),t.default=function(n){var t=n.Component,e=n.pageProps,o=((0,s.useRouter)(),(0,i.useState)({userInfo:{},updateUserInfo:function(n,t){a[t]=n,x(a)}})),a=o[0],x=o[1];return(0,i.useEffect)((function(){var n=(0,f.YO)("userInfo");!(0,f.xb)(n)&&n.username&&x(p(p({},a),{},{userInfo:n}))}),[]),(0,r.jsxs)(c.j.Provider,{value:a,children:[(0,r.jsx)(t,p({},e)),(0,r.jsx)(u.default,{src:"https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"}),(0,r.jsx)(u.default,{src:"https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js"})]})}},81780:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return e(7672)}])},26739:function(){},13235:function(){},88473:function(){},82702:function(){},11163:function(n,t,e){n.exports=e(34651)},4298:function(n,t,e){n.exports=e(37926)}},function(n){var t=function(t){return n(n.s=t)};n.O(0,[774,179],(function(){return t(81780),t(34651)}));var e=n.O();_N_E=e}]);