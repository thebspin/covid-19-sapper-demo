function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function r(){return Object.create(null)}function o(t){t.forEach(n)}function s(t){return"function"==typeof t}function a(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(t,n,r,o){return t[1]&&o?e(r.ctx.slice(),t[1](o(n))):r.ctx}function i(t,e){t.appendChild(e)}function l(t,e,n){t.insertBefore(e,n||null)}function u(t){t.parentNode.removeChild(t)}function f(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function p(t){return document.createElement(t)}function h(t){return document.createTextNode(t)}function d(){return h(" ")}function m(){return h("")}function g(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function $(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function y(t){return Array.from(t.childNodes)}function v(t,e,n,r){for(let r=0;r<t.length;r+=1){const o=t[r];if(o.nodeName===e){let e=0;for(;e<o.attributes.length;){const t=o.attributes[e];n[t.name]?e++:o.removeAttribute(t.name)}return t.splice(r,1)[0]}}return r?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(e):p(e)}function b(t,e){for(let n=0;n<t.length;n+=1){const r=t[n];if(3===r.nodeType)return r.data=""+e,t.splice(n,1)[0]}return h(e)}function _(t){return b(t," ")}function E(t,e){e=""+e,t.data!==e&&(t.data=e)}function S(t,e){(null!=e||t.value)&&(t.value=e)}function w(t,e,n,r){t.style.setProperty(e,n,r?"important":"")}function x(t,e){for(let n=0;n<t.options.length;n+=1){const r=t.options[n];if(r.__value===e)return void(r.selected=!0)}}function A(t){const e=t.querySelector(":checked")||t.options[0];return e&&e.__value}function R(t,e,n){t.classList[n?"add":"remove"](e)}function P(t,e=document.body){return Array.from(e.querySelectorAll(t))}let C;function L(t){C=t}function k(){if(!C)throw new Error("Function called outside component initialization");return C}function j(t){k().$$.on_mount.push(t)}function q(t){k().$$.on_destroy.push(t)}function N(){const t=k();return(e,n)=>{const r=t.$$.callbacks[e];if(r){const o=function(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}(e,n);r.slice().forEach(e=>{e.call(t,o)})}}}const O=[],U=[],D=[],I=[],H=Promise.resolve();let M=!1;function T(t){D.push(t)}function V(t){I.push(t)}let B=!1;const J=new Set;function K(){if(!B){B=!0;do{for(let t=0;t<O.length;t+=1){const e=O[t];L(e),G(e.$$)}for(O.length=0;U.length;)U.pop()();for(let t=0;t<D.length;t+=1){const e=D[t];J.has(e)||(J.add(e),e())}D.length=0}while(O.length);for(;I.length;)I.pop()();M=!1,B=!1,J.clear()}}function G(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(T)}}const z=new Set;let F;function W(){F={r:0,c:[],p:F}}function Q(){F.r||o(F.c),F=F.p}function X(t,e){t&&t.i&&(z.delete(t),t.i(e))}function Y(t,e,n,r){if(t&&t.o){if(z.has(t))return;z.add(t),F.c.push(()=>{z.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}function Z(t,e){t.d(1),e.delete(t.key)}function tt(t,e,n,r,o,s,a,c,i,l,u,f){let p=t.length,h=s.length,d=p;const m={};for(;d--;)m[t[d].key]=d;const g=[],$=new Map,y=new Map;for(d=h;d--;){const t=f(o,s,d),c=n(t);let i=a.get(c);i?r&&i.p(t,e):(i=l(c,t)).c(),$.set(c,g[d]=i),c in m&&y.set(c,Math.abs(d-m[c]))}const v=new Set,b=new Set;function _(t){X(t,1),t.m(c,u,a.has(t.key)),a.set(t.key,t),u=t.first,h--}for(;p&&h;){const e=g[h-1],n=t[p-1],r=e.key,o=n.key;e===n?(u=e.first,p--,h--):$.has(o)?!a.has(r)||v.has(r)?_(e):b.has(o)?p--:y.get(r)>y.get(o)?(b.add(r),_(e)):(v.add(o),p--):(i(n,a),p--)}for(;p--;){const e=t[p];$.has(e.key)||i(e,a)}for(;h;)_(g[h-1]);return g}function et(t,e){const n={},r={},o={$$scope:1};let s=t.length;for(;s--;){const a=t[s],c=e[s];if(c){for(const t in a)t in c||(r[t]=1);for(const t in c)o[t]||(n[t]=c[t],o[t]=1);t[s]=c}else for(const t in a)o[t]=1}for(const t in r)t in n||(n[t]=void 0);return n}function nt(t){return"object"==typeof t&&null!==t?t:{}}function rt(t,e,n){const r=t.$$.props[e];void 0!==r&&(t.$$.bound[r]=n,n(t.$$.ctx[r]))}function ot(t){t&&t.c()}function st(t,e){t&&t.l(e)}function at(t,e,r){const{fragment:a,on_mount:c,on_destroy:i,after_update:l}=t.$$;a&&a.m(e,r),T(()=>{const e=c.map(n).filter(s);i?i.push(...e):o(e),t.$$.on_mount=[]}),l.forEach(T)}function ct(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function it(t,e){-1===t.$$.dirty[0]&&(O.push(t),M||(M=!0,H.then(K)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function lt(e,n,s,a,c,i,l=[-1]){const f=C;L(e);const p=n.props||{},h=e.$$={fragment:null,ctx:null,props:i,update:t,not_equal:c,bound:r(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:[]),callbacks:r(),dirty:l};let d=!1;if(h.ctx=s?s(e,p,(t,n,...r)=>{const o=r.length?r[0]:n;return h.ctx&&c(h.ctx[t],h.ctx[t]=o)&&(h.bound[t]&&h.bound[t](o),d&&it(e,t)),n}):[],h.update(),d=!0,o(h.before_update),h.fragment=!!a&&a(h.ctx),n.target){if(n.hydrate){const t=y(n.target);h.fragment&&h.fragment.l(t),t.forEach(u)}else h.fragment&&h.fragment.c();n.intro&&X(e.$$.fragment),at(e,n.target,n.anchor),K()}L(f)}class ut{$destroy(){ct(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}const ft=[];function pt(t,e){return{subscribe:ht(t,e).subscribe}}function ht(e,n=t){let r;const o=[];function s(t){if(a(e,t)&&(e=t,r)){const t=!ft.length;for(let t=0;t<o.length;t+=1){const n=o[t];n[1](),ft.push(n,e)}if(t){for(let t=0;t<ft.length;t+=2)ft[t][0](ft[t+1]);ft.length=0}}}return{set:s,update:function(t){s(t(e))},subscribe:function(a,c=t){const i=[a,c];return o.push(i),1===o.length&&(r=n(s)||t),a(e),()=>{const t=o.indexOf(i);-1!==t&&o.splice(t,1),0===o.length&&(r(),r=null)}}}}const dt={},mt=()=>({});function gt(t){let e,n,r,o,s,a,f,m,g,E,S,w,x,A,R,P;const C=t[1].default,L=function(t,e,n,r){if(t){const o=c(t,e,n,r);return t[0](o)}}(C,t,t[0],null);return{c(){e=p("div"),n=p("div"),r=p("img"),s=d(),a=p("a"),f=h("Home"),m=d(),g=p("a"),E=h("About"),S=d(),w=p("a"),x=h("Refresh Data"),A=d(),R=p("main"),L&&L.c(),this.h()},l(t){var o=y(e=v(t,"DIV",{class:!0})),c=y(n=v(o,"DIV",{class:!0}));r=v(c,"IMG",{alt:!0,src:!0}),c.forEach(u),s=_(o);var i=y(a=v(o,"A",{href:!0,rel:!0,class:!0}));f=b(i,"Home"),i.forEach(u),m=_(o);var l=y(g=v(o,"A",{href:!0,rel:!0,pre:!0,class:!0}));E=b(l,"About"),l.forEach(u),S=_(o);var p=y(w=v(o,"A",{href:!0,rel:!0,pre:!0,class:!0}));x=b(p,"Refresh Data"),p.forEach(u),o.forEach(u),A=_(t);var h=y(R=v(t,"MAIN",{class:!0}));L&&L.l(h),h.forEach(u),this.h()},h(){$(r,"alt","covid-19 virus logo"),r.src!==(o="/covid-19-sapper-demo/logo.jpg")&&$(r,"src","/covid-19-sapper-demo/logo.jpg"),$(n,"class","item"),$(a,"href","home"),$(a,"rel","prefetch"),$(a,"class","item"),$(g,"href","about"),$(g,"rel","prefetch"),$(g,"pre",""),$(g,"class","item"),$(w,"href","reset"),$(w,"rel","prefetch"),$(w,"pre",""),$(w,"class","item"),$(e,"class","ui top fixed menu"),$(R,"class","svelte-uicqnu")},m(t,o){l(t,e,o),i(e,n),i(n,r),i(e,s),i(e,a),i(a,f),i(e,m),i(e,g),i(g,E),i(e,S),i(e,w),i(w,x),l(t,A,o),l(t,R,o),L&&L.m(R,null),P=!0},p(t,[e]){L&&L.p&&1&e&&L.p(c(C,t,t[0],null),function(t,e,n,r){if(t[2]&&r){const o=t[2](r(n));if(void 0===e.dirty)return o;if("object"==typeof o){const t=[],n=Math.max(e.dirty.length,o.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|o[r];return t}return e.dirty|o}return e.dirty}(C,t[0],e,null))},i(t){P||(X(L,t),P=!0)},o(t){Y(L,t),P=!1},d(t){t&&u(e),t&&u(A),t&&u(R),L&&L.d(t)}}}function $t(t,e,n){let{$$slots:r={},$$scope:o}=e;return t.$set=(t=>{"$$scope"in t&&n(0,o=t.$$scope)}),[o,r]}class yt extends ut{constructor(t){super(),lt(this,t,$t,gt,a,{})}}function vt(t){let e,n,r=t[1].stack+"";return{c(){e=p("pre"),n=h(r)},l(t){var o=y(e=v(t,"PRE",{}));n=b(o,r),o.forEach(u)},m(t,r){l(t,e,r),i(e,n)},p(t,e){2&e&&r!==(r=t[1].stack+"")&&E(n,r)},d(t){t&&u(e)}}}function bt(e){let n,r,o,s,a,c,f,g,S,w=e[1].message+"";document.title=n=e[0];let x=e[2]&&e[1].stack&&vt(e);return{c(){r=d(),o=p("h1"),s=h(e[0]),a=d(),c=p("p"),f=h(w),g=d(),x&&x.c(),S=m(),this.h()},l(t){P('[data-svelte="svelte-1o9r2ue"]',document.head).forEach(u),r=_(t);var n=y(o=v(t,"H1",{class:!0}));s=b(n,e[0]),n.forEach(u),a=_(t);var i=y(c=v(t,"P",{class:!0}));f=b(i,w),i.forEach(u),g=_(t),x&&x.l(t),S=m(),this.h()},h(){$(o,"class","svelte-8od9u6"),$(c,"class","svelte-8od9u6")},m(t,e){l(t,r,e),l(t,o,e),i(o,s),l(t,a,e),l(t,c,e),i(c,f),l(t,g,e),x&&x.m(t,e),l(t,S,e)},p(t,[e]){1&e&&n!==(n=t[0])&&(document.title=n),1&e&&E(s,t[0]),2&e&&w!==(w=t[1].message+"")&&E(f,w),t[2]&&t[1].stack?x?x.p(t,e):((x=vt(t)).c(),x.m(S.parentNode,S)):x&&(x.d(1),x=null)},i:t,o:t,d(t){t&&u(r),t&&u(o),t&&u(a),t&&u(c),t&&u(g),x&&x.d(t),t&&u(S)}}}function _t(t,e,n){let{status:r}=e,{error:o}=e;return t.$set=(t=>{"status"in t&&n(0,r=t.status),"error"in t&&n(1,o=t.error)}),[r,o,!1]}class Et extends ut{constructor(t){super(),lt(this,t,_t,bt,a,{status:0,error:1})}}function St(t){let n,r;const o=[t[4].props];var s=t[4].component;function a(t){let n={};for(let t=0;t<o.length;t+=1)n=e(n,o[t]);return{props:n}}if(s)var c=new s(a());return{c(){c&&ot(c.$$.fragment),n=m()},l(t){c&&st(c.$$.fragment,t),n=m()},m(t,e){c&&at(c,t,e),l(t,n,e),r=!0},p(t,e){const r=16&e?et(o,[nt(t[4].props)]):{};if(s!==(s=t[4].component)){if(c){W();const t=c;Y(t.$$.fragment,1,0,()=>{ct(t,1)}),Q()}s?(ot((c=new s(a())).$$.fragment),X(c.$$.fragment,1),at(c,n.parentNode,n)):c=null}else s&&c.$set(r)},i(t){r||(c&&X(c.$$.fragment,t),r=!0)},o(t){c&&Y(c.$$.fragment,t),r=!1},d(t){t&&u(n),c&&ct(c,t)}}}function wt(t){let e;const n=new Et({props:{error:t[0],status:t[1]}});return{c(){ot(n.$$.fragment)},l(t){st(n.$$.fragment,t)},m(t,r){at(n,t,r),e=!0},p(t,e){const r={};1&e&&(r.error=t[0]),2&e&&(r.status=t[1]),n.$set(r)},i(t){e||(X(n.$$.fragment,t),e=!0)},o(t){Y(n.$$.fragment,t),e=!1},d(t){ct(n,t)}}}function xt(t){let e,n,r,o;const s=[wt,St],a=[];function c(t,e){return t[0]?0:1}return e=c(t),n=a[e]=s[e](t),{c(){n.c(),r=m()},l(t){n.l(t),r=m()},m(t,n){a[e].m(t,n),l(t,r,n),o=!0},p(t,o){let i=e;(e=c(t))===i?a[e].p(t,o):(W(),Y(a[i],1,1,()=>{a[i]=null}),Q(),(n=a[e])||(n=a[e]=s[e](t)).c(),X(n,1),n.m(r.parentNode,r))},i(t){o||(X(n),o=!0)},o(t){Y(n),o=!1},d(t){a[e].d(t),t&&u(r)}}}function At(t){let n;const r=[{segment:t[2][0]},t[3].props];let o={$$slots:{default:[xt]},$$scope:{ctx:t}};for(let t=0;t<r.length;t+=1)o=e(o,r[t]);const s=new yt({props:o});return{c(){ot(s.$$.fragment)},l(t){st(s.$$.fragment,t)},m(t,e){at(s,t,e),n=!0},p(t,[e]){const n=12&e?et(r,[4&e&&{segment:t[2][0]},8&e&&nt(t[3].props)]):{};83&e&&(n.$$scope={dirty:e,ctx:t}),s.$set(n)},i(t){n||(X(s.$$.fragment,t),n=!0)},o(t){Y(s.$$.fragment,t),n=!1},d(t){ct(s,t)}}}function Rt(t,e,n){let{stores:r}=e,{error:o}=e,{status:s}=e,{segments:a}=e,{level0:c}=e,{level1:i=null}=e;var l,u;return l=dt,u=r,k().$$.context.set(l,u),t.$set=(t=>{"stores"in t&&n(5,r=t.stores),"error"in t&&n(0,o=t.error),"status"in t&&n(1,s=t.status),"segments"in t&&n(2,a=t.segments),"level0"in t&&n(3,c=t.level0),"level1"in t&&n(4,i=t.level1)}),[o,s,a,c,i,r]}class Pt extends ut{constructor(t){super(),lt(this,t,Rt,At,a,{stores:5,error:0,status:1,segments:2,level0:3,level1:4})}}const Ct=[],Lt=[{js:()=>import("./index.d6679f58.js"),css:["index.d6679f58.css","client.ae1e2b3d.css","helpers.a6cc8d63.css"]},{js:()=>import("./about.d8ffcc61.js"),css:["client.ae1e2b3d.css"]},{js:()=>import("./reset.40e60a01.js"),css:["reset.40e60a01.css","client.ae1e2b3d.css"]},{js:()=>import("./[country].32a4b6fe.js"),css:["[country].32a4b6fe.css","client.ae1e2b3d.css","helpers.a6cc8d63.css"]}],kt=(t=>[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/about\/?$/,parts:[{i:1}]},{pattern:/^\/reset\/?$/,parts:[{i:2}]},{pattern:/^\/([^\/]+?)\/?$/,parts:[{i:3,params:e=>({country:t(e[1])})}]}])(decodeURIComponent);function jt(t,e={replaceState:!1}){const n=Qt(new URL(t,document.baseURI));return n?(zt[e.replaceState?"replaceState":"pushState"]({id:Kt},"",t),Yt(n,null).then(()=>{})):(location.href=t,new Promise(t=>{}))}const qt="undefined"!=typeof __SAPPER__&&__SAPPER__;let Nt,Ot,Ut,Dt=!1,It=[],Ht="{}";const Mt={page:ht({}),preloading:ht(null),session:ht(qt&&qt.session)};let Tt,Vt;Mt.session.subscribe(async t=>{if(Tt=t,!Dt)return;Vt=!0;const e=Qt(new URL(location.href)),n=Ot={},{redirect:r,props:o,branch:s}=await te(e);n===Ot&&await Zt(r,s,o,e.page)});let Bt,Jt=null;let Kt,Gt=1;const zt="undefined"!=typeof history?history:{pushState:(t,e,n)=>{},replaceState:(t,e,n)=>{},scrollRestoration:""},Ft={};function Wt(t){const e=Object.create(null);return t.length>0&&t.slice(1).split("&").forEach(t=>{let[,n,r=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));"string"==typeof e[n]&&(e[n]=[e[n]]),"object"==typeof e[n]?e[n].push(r):e[n]=r}),e}function Qt(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(qt.baseUrl))return null;let e=t.pathname.slice(qt.baseUrl.length);if(""===e&&(e="/"),!Ct.some(t=>t.test(e)))for(let n=0;n<kt.length;n+=1){const r=kt[n],o=r.pattern.exec(e);if(o){const n=Wt(t.search),s=r.parts[r.parts.length-1],a=s.params?s.params(o):{},c={host:location.host,path:e,query:n,params:a};return{href:t.href,route:r,match:o,page:c}}}}function Xt(){return{x:pageXOffset,y:pageYOffset}}async function Yt(t,e,n,r){if(e)Kt=e;else{const t=Xt();Ft[Kt]=t,e=Kt=++Gt,Ft[Kt]=n?t:{x:0,y:0}}Kt=e,Nt&&Mt.preloading.set(!0);const o=Jt&&Jt.href===t.href?Jt.promise:te(t);Jt=null;const s=Ot={},{redirect:a,props:c,branch:i}=await o;if(s===Ot&&(await Zt(a,i,c,t.page),document.activeElement&&document.activeElement.blur(),!n)){let t=Ft[e];if(r){const e=document.getElementById(r.slice(1));e&&(t={x:0,y:e.getBoundingClientRect().top})}Ft[Kt]=t,t&&scrollTo(t.x,t.y)}}async function Zt(t,e,n,r){if(t)return jt(t.location,{replaceState:!0});if(Mt.page.set(r),Mt.preloading.set(!1),Nt)Nt.$set(n);else{n.stores={page:{subscribe:Mt.page.subscribe},preloading:{subscribe:Mt.preloading.subscribe},session:Mt.session},n.level0={props:await Ut};const t=document.querySelector("#sapper-head-start"),e=document.querySelector("#sapper-head-end");if(t&&e){for(;t.nextSibling!==e;)ne(t.nextSibling);ne(t),ne(e)}Nt=new Pt({target:Bt,props:n,hydrate:!0})}It=e,Ht=JSON.stringify(r.query),Dt=!0,Vt=!1}async function te(t){const{route:e,page:n}=t,r=n.path.split("/").filter(Boolean);let o=null;const s={error:null,status:200,segments:[r[0]]},a={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(o&&(o.statusCode!==t||o.location!==e))throw new Error("Conflicting redirects");o={statusCode:t,location:e}},error:(t,e)=>{s.error="string"==typeof e?new Error(e):e,s.status=t}};let c;Ut||(Ut=qt.preloaded[0]||mt.call(a,{host:n.host,path:n.path,query:n.query,params:{}},Tt));let i=1;try{const o=JSON.stringify(n.query),l=e.pattern.exec(n.path);let u=!1;c=await Promise.all(e.parts.map(async(e,c)=>{const f=r[c];if(function(t,e,n,r){if(r!==Ht)return!0;const o=It[t];return!!o&&(e!==o.segment||!(!o.match||JSON.stringify(o.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0)}(c,f,l,o)&&(u=!0),s.segments[i]=r[c+1],!e)return{segment:f};const p=i++;if(!Vt&&!u&&It[c]&&It[c].part===e.i)return It[c];u=!1;const{default:h,preload:d}=await function(t){const e="string"==typeof t.css?[]:t.css.map(ee);return e.unshift(t.js()),Promise.all(e).then(t=>t[0])}(Lt[e.i]);let m;return m=Dt||!qt.preloaded[c+1]?d?await d.call(a,{host:n.host,path:n.path,query:n.query,params:e.params?e.params(t.match):{}},Tt):{}:qt.preloaded[c+1],s[`level${p}`]={component:h,props:m,segment:f,match:l,part:e.i}}))}catch(t){s.error=t,s.status=500,c=[]}return{redirect:o,props:s,branch:c}}function ee(t){const e=`client/${t}`;if(!document.querySelector(`link[href="${e}"]`))return new Promise((t,n)=>{const r=document.createElement("link");r.rel="stylesheet",r.href=e,r.onload=(()=>t()),r.onerror=n,document.head.appendChild(r)})}function ne(t){t.parentNode.removeChild(t)}function re(t){const e=Qt(new URL(t,document.baseURI));if(e)return Jt&&t===Jt.href||function(t,e){Jt={href:t,promise:e}}(t,te(e)),Jt.promise}let oe;function se(t){clearTimeout(oe),oe=setTimeout(()=>{ae(t)},20)}function ae(t){const e=ie(t.target);e&&"prefetch"===e.rel&&re(e.href)}function ce(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey)return;if(t.defaultPrevented)return;const e=ie(t.target);if(!e)return;if(!e.href)return;const n="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,r=String(n?e.href.baseVal:e.href);if(r===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(n?e.target.baseVal:e.target)return;const o=new URL(r);if(o.pathname===location.pathname&&o.search===location.search)return;const s=Qt(o);if(s){Yt(s,null,e.hasAttribute("sapper-noscroll"),o.hash),t.preventDefault(),zt.pushState({id:Kt},"",o.href)}}function ie(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}function le(t){if(Ft[Kt]=Xt(),t.state){const e=Qt(new URL(location.href));e?Yt(e,t.state.id):location.href=location.href}else(function(t){Kt=t})(Gt=Gt+1),zt.replaceState({id:Kt},"",location.href)}!function(t){var e;"scrollRestoration"in zt&&(zt.scrollRestoration="manual"),e=t.target,Bt=e,addEventListener("click",ce),addEventListener("popstate",le),addEventListener("touchstart",ae),addEventListener("mousemove",se),Promise.resolve().then(()=>{const{hash:t,href:e}=location;zt.replaceState({id:Gt},"",e);const n=new URL(location.href);if(qt.error)return function(t){const{host:e,pathname:n,search:r}=location,{session:o,preloaded:s,status:a,error:c}=qt;Ut||(Ut=s&&s[0]),Zt(null,[],{error:c,status:a,session:o,level0:{props:Ut},level1:{props:{status:a,error:c},component:Et},segments:s},{host:e,path:n,query:Wt(r),params:{}})}();const r=Qt(n);return r?Yt(r,Gt,!0,t):void 0})}({target:document.querySelector("#sapper")});export{V as A,X as B,Y as C,ct as D,W as E,Q as F,N as G,U as H,rt as I,Z as J,T as K,S as L,x as M,A as N,P as O,w as P,j as Q,jt as R,ut as S,et as T,nt as U,q as V,e as W,l as a,p as b,d as c,u as d,m as e,v as f,y as g,_ as h,lt as i,$ as j,i as k,o as l,g as m,s as n,t as o,f as p,h as q,pt as r,a as s,R as t,b as u,E as v,ot as w,st as x,at as y,tt as z};