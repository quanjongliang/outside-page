(function(e){function t(t){for(var n,r,c=t[0],l=t[1],i=t[2],d=0,s=[];d<c.length;d++)r=c[d],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&s.push(o[r][0]),o[r]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);b&&b(t);while(s.length)s.shift()();return u.push.apply(u,i||[]),a()}function a(){for(var e,t=0;t<u.length;t++){for(var a=u[t],n=!0,r=1;r<a.length;r++){var c=a[r];0!==o[c]&&(n=!1)}n&&(u.splice(t--,1),e=l(l.s=a[0]))}return e}var n={},r={app:0},o={app:0},u=[];function c(e){return l.p+"js/"+({about:"about"}[e]||e)+"."+{about:"488812ef","chunk-2d0a3a86":"84c5d9be","chunk-2d0b1d5a":"3fcc741a","chunk-2d207d1c":"4c5633be"}[e]+".js"}function l(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.e=function(e){var t=[],a={about:1};r[e]?t.push(r[e]):0!==r[e]&&a[e]&&t.push(r[e]=new Promise((function(t,a){for(var n="css/"+({about:"about"}[e]||e)+"."+{about:"c492cbfe","chunk-2d0a3a86":"31d6cfe0","chunk-2d0b1d5a":"31d6cfe0","chunk-2d207d1c":"31d6cfe0"}[e]+".css",o=l.p+n,u=document.getElementsByTagName("link"),c=0;c<u.length;c++){var i=u[c],d=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(d===n||d===o))return t()}var s=document.getElementsByTagName("style");for(c=0;c<s.length;c++){i=s[c],d=i.getAttribute("data-href");if(d===n||d===o)return t()}var b=document.createElement("link");b.rel="stylesheet",b.type="text/css",b.onload=t,b.onerror=function(t){var n=t&&t.target&&t.target.src||o,u=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=n,delete r[e],b.parentNode.removeChild(b),a(u)},b.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(b)})).then((function(){r[e]=0})));var n=o[e];if(0!==n)if(n)t.push(n[2]);else{var u=new Promise((function(t,a){n=o[e]=[t,a]}));t.push(n[2]=u);var i,d=document.createElement("script");d.charset="utf-8",d.timeout=120,l.nc&&d.setAttribute("nonce",l.nc),d.src=c(e);var s=new Error;i=function(t){d.onerror=d.onload=null,clearTimeout(b);var a=o[e];if(0!==a){if(a){var n=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+n+": "+r+")",s.name="ChunkLoadError",s.type=n,s.request=r,a[1](s)}o[e]=void 0}};var b=setTimeout((function(){i({type:"timeout",target:d})}),12e4);d.onerror=d.onload=i,document.head.appendChild(d)}return Promise.all(t)},l.m=e,l.c=n,l.d=function(e,t,a){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)l.d(a,n,function(t){return e[t]}.bind(null,n));return a},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/outside-page/",l.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],d=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var b=d;u.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("cd49")},"0558":function(e,t,a){"use strict";a("e970")},a355:function(e,t,a){"use strict";a("dc4b")},cd49:function(e,t,a){"use strict";a.r(t);var n=a("2909"),r=a("5530"),o=(a("e260"),a("e6cf"),a("cca6"),a("a79d"),a("07ac"),a("7a23")),u={id:"nav"},c=Object(o["g"])("Home"),l=Object(o["g"])(" | "),i=Object(o["g"])("About"),d=Object(o["g"])(" | "),s=Object(o["g"])("Login"),b=Object(o["g"])(" | "),p=Object(o["g"])("Chat"),h=Object(o["g"])(" | "),v=Object(o["g"])("Register"),f=Object(o["g"])(" | "),g=Object(o["g"])("Dashboard");function m(e,t){var a=Object(o["A"])("router-link"),n=Object(o["A"])("router-view");return Object(o["t"])(),Object(o["d"])(o["a"],null,[Object(o["e"])("div",u,[Object(o["h"])(a,{to:"/"},{default:Object(o["H"])((function(){return[c]})),_:1}),l,Object(o["h"])(a,{to:"/about"},{default:Object(o["H"])((function(){return[i]})),_:1}),d,Object(o["h"])(a,{to:"/login"},{default:Object(o["H"])((function(){return[s]})),_:1}),b,Object(o["h"])(a,{to:"/chat"},{default:Object(o["H"])((function(){return[p]})),_:1}),h,Object(o["h"])(a,{to:"/register"},{default:Object(o["H"])((function(){return[v]})),_:1}),f,Object(o["h"])(a,{to:"/dashboard"},{default:Object(o["H"])((function(){return[g]})),_:1})]),Object(o["h"])(n)],64)}a("0558");var j=a("6b0d"),O=a.n(j);const k={},y=O()(k,[["render",m]]);var _=y,w=(a("d3b7"),a("3ca3"),a("ddb0"),a("6c02")),C=a("cf05"),H=a.n(C),x={class:"home"},A=Object(o["e"])("img",{alt:"Vue logo",src:H.a},null,-1);function E(e,t,a,n,r,u){var c=Object(o["A"])("HelloWorld");return Object(o["t"])(),Object(o["d"])("div",x,[A,Object(o["h"])(c,{msg:"Welcome to Your Vue.js + TypeScript App"})])}var P={class:"hello"},S=Object(o["f"])('<p data-v-0858e590> For a guide and recipes on how to configure / customize this project,<br data-v-0858e590> check out the <a href="https://cli.vuejs.org" target="_blank" rel="noopener" data-v-0858e590>vue-cli documentation</a>. </p><h3 data-v-0858e590>Installed CLI Plugins</h3><ul data-v-0858e590><li data-v-0858e590><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener" data-v-0858e590>babel</a></li><li data-v-0858e590><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router" target="_blank" rel="noopener" data-v-0858e590>router</a></li><li data-v-0858e590><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex" target="_blank" rel="noopener" data-v-0858e590>vuex</a></li><li data-v-0858e590><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener" data-v-0858e590>eslint</a></li><li data-v-0858e590><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-typescript" target="_blank" rel="noopener" data-v-0858e590>typescript</a></li></ul><h3 data-v-0858e590>Essential Links</h3><ul data-v-0858e590><li data-v-0858e590><a href="https://vuejs.org" target="_blank" rel="noopener" data-v-0858e590>Core Docs</a></li><li data-v-0858e590><a href="https://forum.vuejs.org" target="_blank" rel="noopener" data-v-0858e590>Forum</a></li><li data-v-0858e590><a href="https://chat.vuejs.org" target="_blank" rel="noopener" data-v-0858e590>Community Chat</a></li><li data-v-0858e590><a href="https://twitter.com/vuejs" target="_blank" rel="noopener" data-v-0858e590>Twitter</a></li><li data-v-0858e590><a href="https://news.vuejs.org" target="_blank" rel="noopener" data-v-0858e590>News</a></li></ul><h3 data-v-0858e590>Ecosystem</h3><ul data-v-0858e590><li data-v-0858e590><a href="https://router.vuejs.org" target="_blank" rel="noopener" data-v-0858e590>vue-router</a></li><li data-v-0858e590><a href="https://vuex.vuejs.org" target="_blank" rel="noopener" data-v-0858e590>vuex</a></li><li data-v-0858e590><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener" data-v-0858e590>vue-devtools</a></li><li data-v-0858e590><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener" data-v-0858e590>vue-loader</a></li><li data-v-0858e590><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener" data-v-0858e590>awesome-vue</a></li></ul>',7);function L(e,t,a,n,r,u){return Object(o["t"])(),Object(o["d"])("div",P,[Object(o["e"])("h1",null,Object(o["C"])(e.msg),1),S])}var T=Object(o["i"])({name:"HelloWorld",props:{msg:String}});a("a355");const N=O()(T,[["render",L],["__scopeId","data-v-0858e590"]]);var D=N,I=Object(o["i"])({name:"Home",components:{HelloWorld:D}});const M=O()(I,[["render",E]]);var W=M,B=[{path:"/",name:"Home",component:W},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}},{path:"/login",name:"Login",component:function(){return a.e("about").then(a.bind(null,"a55b"))}},{path:"/chat",name:"Chat",component:function(){return a.e("about").then(a.bind(null,"293a"))}},{path:"/register",name:"Register",component:function(){return a.e("about").then(a.bind(null,"73cf"))}},{path:"/dashboard",name:"DashboardView",component:function(){return a.e("about").then(a.bind(null,"6c12"))},children:[{path:"/dashboard/home",component:function(){return a.e("chunk-2d0a3a86").then(a.bind(null,"02b0"))}},{path:"/dashboard/bag",component:function(){return a.e("chunk-2d207d1c").then(a.bind(null,"a1c9"))}},{path:"/dashboard/setting",component:function(){return a.e("chunk-2d0b1d5a").then(a.bind(null,"2215"))}}]}],F=Object(w["a"])({history:Object(w["b"])("/outside-page/"),routes:B}),V=F,q=a("5502"),J=Object(q["a"])({state:{},mutations:{},actions:{},modules:{}}),R=a("bfa9"),z=a("74f3"),K=Object.values(Object(r["a"])({},z));R["b"].apply(void 0,Object(n["a"])(K)),Object(o["c"])(_).component("v-icon",R["a"]).use(J).use(V).mount("#app")},cf05:function(e,t,a){e.exports=a.p+"img/logo.82b9c7a5.png"},dc4b:function(e,t,a){},e970:function(e,t,a){}});
//# sourceMappingURL=app.8f5d66c4.js.map