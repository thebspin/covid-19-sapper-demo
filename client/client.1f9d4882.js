function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function r(){return Object.create(null)}function o(t){t.forEach(n)}function s(t){return"function"==typeof t}function a(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(t,n,r,o){return t[1]&&o?e(r.ctx.slice(),t[1](o(n))):r.ctx}function i(t,e){t.appendChild(e)}function l(t,e,n){t.insertBefore(e,n||null)}function u(t){t.parentNode.removeChild(t)}function f(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function p(t){return document.createElement(t)}function d(t){return document.createTextNode(t)}function h(){return d(" ")}function m(){return d("")}function g(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function $(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function y(t){return Array.from(t.childNodes)}function v(t,e,n,r){for(let r=0;r<t.length;r+=1){const o=t[r];if(o.nodeName===e){let e=0;for(;e<o.attributes.length;){const t=o.attributes[e];n[t.name]?e++:o.removeAttribute(t.name)}return t.splice(r,1)[0]}}return r?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(e):p(e)}function b(t,e){for(let n=0;n<t.length;n+=1){const r=t[n];if(3===r.nodeType)return r.data=""+e,t.splice(n,1)[0]}return d(e)}function E(t){return b(t," ")}function _(t,e){e=""+e,t.data!==e&&(t.data=e)}function w(t,e){(null!=e||t.value)&&(t.value=e)}function S(t,e,n,r){t.style.setProperty(e,n,r?"important":"")}function x(t,e){for(let n=0;n<t.options.length;n+=1){const r=t.options[n];if(r.__value===e)return void(r.selected=!0)}}function A(t){const e=t.querySelector(":checked")||t.options[0];return e&&e.__value}function P(t,e,n){t.classList[n?"add":"remove"](e)}function R(t,e=document.body){return Array.from(e.querySelectorAll(t))}let k;function C(t){k=t}function L(){if(!k)throw new Error("Function called outside component initialization");return k}function j(t){L().$$.on_mount.push(t)}function q(){const t=L();return(e,n)=>{const r=t.$$.callbacks[e];if(r){const o=function(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}(e,n);r.slice().forEach(e=>{e.call(t,o)})}}}const N=[],O=[],U=[],I=[],D=Promise.resolve();let M=!1;function H(t){U.push(t)}function T(t){I.push(t)}let V=!1;const B=new Set;function J(){if(!V){V=!0;do{for(let t=0;t<N.length;t+=1){const e=N[t];C(e),K(e.$$)}for(N.length=0;O.length;)O.pop()();for(let t=0;t<U.length;t+=1){const e=U[t];B.has(e)||(B.add(e),e())}U.length=0}while(N.length);for(;I.length;)I.pop()();M=!1,V=!1,B.clear()}}function K(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(H)}}const G=new Set;let z;function F(){z={r:0,c:[],p:z}}function Q(){z.r||o(z.c),z=z.p}function W(t,e){t&&t.i&&(G.delete(t),t.i(e))}function X(t,e,n,r){if(t&&t.o){if(G.has(t))return;G.add(t),z.c.push(()=>{G.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}function Y(t,e){t.d(1),e.delete(t.key)}function Z(t,e,n,r,o,s,a,c,i,l,u,f){let p=t.length,d=s.length,h=p;const m={};for(;h--;)m[t[h].key]=h;const g=[],$=new Map,y=new Map;for(h=d;h--;){const t=f(o,s,h),c=n(t);let i=a.get(c);i?r&&i.p(t,e):(i=l(c,t)).c(),$.set(c,g[h]=i),c in m&&y.set(c,Math.abs(h-m[c]))}const v=new Set,b=new Set;function E(t){W(t,1),t.m(c,u,a.has(t.key)),a.set(t.key,t),u=t.first,d--}for(;p&&d;){const e=g[d-1],n=t[p-1],r=e.key,o=n.key;e===n?(u=e.first,p--,d--):$.has(o)?!a.has(r)||v.has(r)?E(e):b.has(o)?p--:y.get(r)>y.get(o)?(b.add(r),E(e)):(v.add(o),p--):(i(n,a),p--)}for(;p--;){const e=t[p];$.has(e.key)||i(e,a)}for(;d;)E(g[d-1]);return g}function tt(t,e){const n={},r={},o={$$scope:1};let s=t.length;for(;s--;){const a=t[s],c=e[s];if(c){for(const t in a)t in c||(r[t]=1);for(const t in c)o[t]||(n[t]=c[t],o[t]=1);t[s]=c}else for(const t in a)o[t]=1}for(const t in r)t in n||(n[t]=void 0);return n}function et(t){return"object"==typeof t&&null!==t?t:{}}function nt(t,e,n){const r=t.$$.props[e];void 0!==r&&(t.$$.bound[r]=n,n(t.$$.ctx[r]))}function rt(t){t&&t.c()}function ot(t,e){t&&t.l(e)}function st(t,e,r){const{fragment:a,on_mount:c,on_destroy:i,after_update:l}=t.$$;a&&a.m(e,r),H(()=>{const e=c.map(n).filter(s);i?i.push(...e):o(e),t.$$.on_mount=[]}),l.forEach(H)}function at(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function ct(t,e){-1===t.$$.dirty[0]&&(N.push(t),M||(M=!0,D.then(J)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function it(e,n,s,a,c,i,l=[-1]){const f=k;C(e);const p=n.props||{},d=e.$$={fragment:null,ctx:null,props:i,update:t,not_equal:c,bound:r(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:[]),callbacks:r(),dirty:l};let h=!1;if(d.ctx=s?s(e,p,(t,n,...r)=>{const o=r.length?r[0]:n;return d.ctx&&c(d.ctx[t],d.ctx[t]=o)&&(d.bound[t]&&d.bound[t](o),h&&ct(e,t)),n}):[],d.update(),h=!0,o(d.before_update),d.fragment=!!a&&a(d.ctx),n.target){if(n.hydrate){const t=y(n.target);d.fragment&&d.fragment.l(t),t.forEach(u)}else d.fragment&&d.fragment.c();n.intro&&W(e.$$.fragment),st(e,n.target,n.anchor),J()}C(f)}class lt{$destroy(){at(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}const ut=[];function ft(t,e){return{subscribe:pt(t,e).subscribe}}function pt(e,n=t){let r;const o=[];function s(t){if(a(e,t)&&(e=t,r)){const t=!ut.length;for(let t=0;t<o.length;t+=1){const n=o[t];n[1](),ut.push(n,e)}if(t){for(let t=0;t<ut.length;t+=2)ut[t][0](ut[t+1]);ut.length=0}}}return{set:s,update:function(t){s(t(e))},subscribe:function(a,c=t){const i=[a,c];return o.push(i),1===o.length&&(r=n(s)||t),a(e),()=>{const t=o.indexOf(i);-1!==t&&o.splice(t,1),0===o.length&&(r(),r=null)}}}}const dt={},ht=()=>({});function mt(t){let e,n,r,o,s,a,f,m,g,_,w,S,x;const A=t[1].default,P=function(t,e,n,r){if(t){const o=c(t,e,n,r);return t[0](o)}}(A,t,t[0],null);return{c(){e=p("div"),n=p("div"),r=p("img"),s=h(),a=p("a"),f=d("Home"),m=h(),g=p("a"),_=d("About"),w=h(),S=p("main"),P&&P.c(),this.h()},l(t){var o=y(e=v(t,"DIV",{class:!0})),c=y(n=v(o,"DIV",{class:!0}));r=v(c,"IMG",{alt:!0,src:!0}),c.forEach(u),s=E(o);var i=y(a=v(o,"A",{href:!0,rel:!0,class:!0}));f=b(i,"Home"),i.forEach(u),m=E(o);var l=y(g=v(o,"A",{href:!0,rel:!0,pre:!0,class:!0}));_=b(l,"About"),l.forEach(u),o.forEach(u),w=E(t);var p=y(S=v(t,"MAIN",{class:!0}));P&&P.l(p),p.forEach(u),this.h()},h(){$(r,"alt","covid-19 virus logo"),r.src!==(o="/covid-19-sapper-demo/logo.jpg")&&$(r,"src","/covid-19-sapper-demo/logo.jpg"),$(n,"class","item"),$(a,"href","/covid-19-sapper-demo/"),$(a,"rel","prefetch"),$(a,"class","item"),$(g,"href","/covid-19-sapper-demo/about"),$(g,"rel","prefetch"),$(g,"pre",""),$(g,"class","item"),$(e,"class","ui top fixed menu"),$(S,"class","svelte-uicqnu")},m(t,o){l(t,e,o),i(e,n),i(n,r),i(e,s),i(e,a),i(a,f),i(e,m),i(e,g),i(g,_),l(t,w,o),l(t,S,o),P&&P.m(S,null),x=!0},p(t,[e]){P&&P.p&&1&e&&P.p(c(A,t,t[0],null),function(t,e,n,r){if(t[2]&&r){const o=t[2](r(n));if(void 0===e.dirty)return o;if("object"==typeof o){const t=[],n=Math.max(e.dirty.length,o.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|o[r];return t}return e.dirty|o}return e.dirty}(A,t[0],e,null))},i(t){x||(W(P,t),x=!0)},o(t){X(P,t),x=!1},d(t){t&&u(e),t&&u(w),t&&u(S),P&&P.d(t)}}}function gt(t,e,n){let{$$slots:r={},$$scope:o}=e;return t.$set=(t=>{"$$scope"in t&&n(0,o=t.$$scope)}),[o,r]}class $t extends lt{constructor(t){super(),it(this,t,gt,mt,a,{})}}function yt(t){let e,n,r=t[1].stack+"";return{c(){e=p("pre"),n=d(r)},l(t){var o=y(e=v(t,"PRE",{}));n=b(o,r),o.forEach(u)},m(t,r){l(t,e,r),i(e,n)},p(t,e){2&e&&r!==(r=t[1].stack+"")&&_(n,r)},d(t){t&&u(e)}}}function vt(e){let n,r,o,s,a,c,f,g,w,S=e[1].message+"";document.title=n=e[0];let x=e[2]&&e[1].stack&&yt(e);return{c(){r=h(),o=p("h1"),s=d(e[0]),a=h(),c=p("p"),f=d(S),g=h(),x&&x.c(),w=m(),this.h()},l(t){R('[data-svelte="svelte-1o9r2ue"]',document.head).forEach(u),r=E(t);var n=y(o=v(t,"H1",{class:!0}));s=b(n,e[0]),n.forEach(u),a=E(t);var i=y(c=v(t,"P",{class:!0}));f=b(i,S),i.forEach(u),g=E(t),x&&x.l(t),w=m(),this.h()},h(){$(o,"class","svelte-8od9u6"),$(c,"class","svelte-8od9u6")},m(t,e){l(t,r,e),l(t,o,e),i(o,s),l(t,a,e),l(t,c,e),i(c,f),l(t,g,e),x&&x.m(t,e),l(t,w,e)},p(t,[e]){1&e&&n!==(n=t[0])&&(document.title=n),1&e&&_(s,t[0]),2&e&&S!==(S=t[1].message+"")&&_(f,S),t[2]&&t[1].stack?x?x.p(t,e):((x=yt(t)).c(),x.m(w.parentNode,w)):x&&(x.d(1),x=null)},i:t,o:t,d(t){t&&u(r),t&&u(o),t&&u(a),t&&u(c),t&&u(g),x&&x.d(t),t&&u(w)}}}function bt(t,e,n){let{status:r}=e,{error:o}=e;return t.$set=(t=>{"status"in t&&n(0,r=t.status),"error"in t&&n(1,o=t.error)}),[r,o,!1]}class Et extends lt{constructor(t){super(),it(this,t,bt,vt,a,{status:0,error:1})}}function _t(t){let n,r;const o=[t[4].props];var s=t[4].component;function a(t){let n={};for(let t=0;t<o.length;t+=1)n=e(n,o[t]);return{props:n}}if(s)var c=new s(a());return{c(){c&&rt(c.$$.fragment),n=m()},l(t){c&&ot(c.$$.fragment,t),n=m()},m(t,e){c&&st(c,t,e),l(t,n,e),r=!0},p(t,e){const r=16&e?tt(o,[et(t[4].props)]):{};if(s!==(s=t[4].component)){if(c){F();const t=c;X(t.$$.fragment,1,0,()=>{at(t,1)}),Q()}s?(rt((c=new s(a())).$$.fragment),W(c.$$.fragment,1),st(c,n.parentNode,n)):c=null}else s&&c.$set(r)},i(t){r||(c&&W(c.$$.fragment,t),r=!0)},o(t){c&&X(c.$$.fragment,t),r=!1},d(t){t&&u(n),c&&at(c,t)}}}function wt(t){let e;const n=new Et({props:{error:t[0],status:t[1]}});return{c(){rt(n.$$.fragment)},l(t){ot(n.$$.fragment,t)},m(t,r){st(n,t,r),e=!0},p(t,e){const r={};1&e&&(r.error=t[0]),2&e&&(r.status=t[1]),n.$set(r)},i(t){e||(W(n.$$.fragment,t),e=!0)},o(t){X(n.$$.fragment,t),e=!1},d(t){at(n,t)}}}function St(t){let e,n,r,o;const s=[wt,_t],a=[];function c(t,e){return t[0]?0:1}return e=c(t),n=a[e]=s[e](t),{c(){n.c(),r=m()},l(t){n.l(t),r=m()},m(t,n){a[e].m(t,n),l(t,r,n),o=!0},p(t,o){let i=e;(e=c(t))===i?a[e].p(t,o):(F(),X(a[i],1,1,()=>{a[i]=null}),Q(),(n=a[e])||(n=a[e]=s[e](t)).c(),W(n,1),n.m(r.parentNode,r))},i(t){o||(W(n),o=!0)},o(t){X(n),o=!1},d(t){a[e].d(t),t&&u(r)}}}function xt(t){let n;const r=[{segment:t[2][0]},t[3].props];let o={$$slots:{default:[St]},$$scope:{ctx:t}};for(let t=0;t<r.length;t+=1)o=e(o,r[t]);const s=new $t({props:o});return{c(){rt(s.$$.fragment)},l(t){ot(s.$$.fragment,t)},m(t,e){st(s,t,e),n=!0},p(t,[e]){const n=12&e?tt(r,[4&e&&{segment:t[2][0]},8&e&&et(t[3].props)]):{};83&e&&(n.$$scope={dirty:e,ctx:t}),s.$set(n)},i(t){n||(W(s.$$.fragment,t),n=!0)},o(t){X(s.$$.fragment,t),n=!1},d(t){at(s,t)}}}function At(t,e,n){let{stores:r}=e,{error:o}=e,{status:s}=e,{segments:a}=e,{level0:c}=e,{level1:i=null}=e;var l,u;return l=dt,u=r,L().$$.context.set(l,u),t.$set=(t=>{"stores"in t&&n(5,r=t.stores),"error"in t&&n(0,o=t.error),"status"in t&&n(1,s=t.status),"segments"in t&&n(2,a=t.segments),"level0"in t&&n(3,c=t.level0),"level1"in t&&n(4,i=t.level1)}),[o,s,a,c,i,r]}class Pt extends lt{constructor(t){super(),it(this,t,At,xt,a,{stores:5,error:0,status:1,segments:2,level0:3,level1:4})}}const Rt=[],kt=[{js:()=>import("./index.4fa3c964.js"),css:["index.4fa3c964.css","client.1f9d4882.css","helpers.f7508edd.css"]},{js:()=>import("./about.65ee5fdf.js"),css:["client.1f9d4882.css"]},{js:()=>import("./[country].7cb98c02.js"),css:["[country].7cb98c02.css","client.1f9d4882.css","helpers.f7508edd.css"]}],Ct=(t=>[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/about\/?$/,parts:[{i:1}]},{pattern:/^\/([^\/]+?)\/?$/,parts:[{i:2,params:e=>({country:t(e[1])})}]}])(decodeURIComponent);function Lt(t,e={replaceState:!1}){const n=Qt(new URL(t,document.baseURI));return n?(Gt[e.replaceState?"replaceState":"pushState"]({id:Jt},"",t),Xt(n,null).then(()=>{})):(location.href=t,new Promise(t=>{}))}const jt="undefined"!=typeof __SAPPER__&&__SAPPER__;let qt,Nt,Ot,Ut=!1,It=[],Dt="{}";const Mt={page:pt({}),preloading:pt(null),session:pt(jt&&jt.session)};let Ht,Tt;Mt.session.subscribe(async t=>{if(Ht=t,!Ut)return;Tt=!0;const e=Qt(new URL(location.href)),n=Nt={},{redirect:r,props:o,branch:s}=await Zt(e);n===Nt&&await Yt(r,s,o,e.page)});let Vt,Bt=null;let Jt,Kt=1;const Gt="undefined"!=typeof history?history:{pushState:(t,e,n)=>{},replaceState:(t,e,n)=>{},scrollRestoration:""},zt={};function Ft(t){const e=Object.create(null);return t.length>0&&t.slice(1).split("&").forEach(t=>{let[,n,r=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));"string"==typeof e[n]&&(e[n]=[e[n]]),"object"==typeof e[n]?e[n].push(r):e[n]=r}),e}function Qt(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(jt.baseUrl))return null;let e=t.pathname.slice(jt.baseUrl.length);if(""===e&&(e="/"),!Rt.some(t=>t.test(e)))for(let n=0;n<Ct.length;n+=1){const r=Ct[n],o=r.pattern.exec(e);if(o){const n=Ft(t.search),s=r.parts[r.parts.length-1],a=s.params?s.params(o):{},c={host:location.host,path:e,query:n,params:a};return{href:t.href,route:r,match:o,page:c}}}}function Wt(){return{x:pageXOffset,y:pageYOffset}}async function Xt(t,e,n,r){if(e)Jt=e;else{const t=Wt();zt[Jt]=t,e=Jt=++Kt,zt[Jt]=n?t:{x:0,y:0}}Jt=e,qt&&Mt.preloading.set(!0);const o=Bt&&Bt.href===t.href?Bt.promise:Zt(t);Bt=null;const s=Nt={},{redirect:a,props:c,branch:i}=await o;if(s===Nt&&(await Yt(a,i,c,t.page),document.activeElement&&document.activeElement.blur(),!n)){let t=zt[e];if(r){const e=document.getElementById(r.slice(1));e&&(t={x:0,y:e.getBoundingClientRect().top})}zt[Jt]=t,t&&scrollTo(t.x,t.y)}}async function Yt(t,e,n,r){if(t)return Lt(t.location,{replaceState:!0});if(Mt.page.set(r),Mt.preloading.set(!1),qt)qt.$set(n);else{n.stores={page:{subscribe:Mt.page.subscribe},preloading:{subscribe:Mt.preloading.subscribe},session:Mt.session},n.level0={props:await Ot};const t=document.querySelector("#sapper-head-start"),e=document.querySelector("#sapper-head-end");if(t&&e){for(;t.nextSibling!==e;)ee(t.nextSibling);ee(t),ee(e)}qt=new Pt({target:Vt,props:n,hydrate:!0})}It=e,Dt=JSON.stringify(r.query),Ut=!0,Tt=!1}async function Zt(t){const{route:e,page:n}=t,r=n.path.split("/").filter(Boolean);let o=null;const s={error:null,status:200,segments:[r[0]]},a={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(o&&(o.statusCode!==t||o.location!==e))throw new Error("Conflicting redirects");o={statusCode:t,location:e}},error:(t,e)=>{s.error="string"==typeof e?new Error(e):e,s.status=t}};let c;Ot||(Ot=jt.preloaded[0]||ht.call(a,{host:n.host,path:n.path,query:n.query,params:{}},Ht));let i=1;try{const o=JSON.stringify(n.query),l=e.pattern.exec(n.path);let u=!1;c=await Promise.all(e.parts.map(async(e,c)=>{const f=r[c];if(function(t,e,n,r){if(r!==Dt)return!0;const o=It[t];return!!o&&(e!==o.segment||!(!o.match||JSON.stringify(o.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0)}(c,f,l,o)&&(u=!0),s.segments[i]=r[c+1],!e)return{segment:f};const p=i++;if(!Tt&&!u&&It[c]&&It[c].part===e.i)return It[c];u=!1;const{default:d,preload:h}=await function(t){const e="string"==typeof t.css?[]:t.css.map(te);return e.unshift(t.js()),Promise.all(e).then(t=>t[0])}(kt[e.i]);let m;return m=Ut||!jt.preloaded[c+1]?h?await h.call(a,{host:n.host,path:n.path,query:n.query,params:e.params?e.params(t.match):{}},Ht):{}:jt.preloaded[c+1],s[`level${p}`]={component:d,props:m,segment:f,match:l,part:e.i}}))}catch(t){s.error=t,s.status=500,c=[]}return{redirect:o,props:s,branch:c}}function te(t){const e=`client/${t}`;if(!document.querySelector(`link[href="${e}"]`))return new Promise((t,n)=>{const r=document.createElement("link");r.rel="stylesheet",r.href=e,r.onload=(()=>t()),r.onerror=n,document.head.appendChild(r)})}function ee(t){t.parentNode.removeChild(t)}function ne(t){const e=Qt(new URL(t,document.baseURI));if(e)return Bt&&t===Bt.href||function(t,e){Bt={href:t,promise:e}}(t,Zt(e)),Bt.promise}let re;function oe(t){clearTimeout(re),re=setTimeout(()=>{se(t)},20)}function se(t){const e=ce(t.target);e&&"prefetch"===e.rel&&ne(e.href)}function ae(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey)return;if(t.defaultPrevented)return;const e=ce(t.target);if(!e)return;if(!e.href)return;const n="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,r=String(n?e.href.baseVal:e.href);if(r===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(n?e.target.baseVal:e.target)return;const o=new URL(r);if(o.pathname===location.pathname&&o.search===location.search)return;const s=Qt(o);if(s){Xt(s,null,e.hasAttribute("sapper-noscroll"),o.hash),t.preventDefault(),Gt.pushState({id:Jt},"",o.href)}}function ce(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}function ie(t){if(zt[Jt]=Wt(),t.state){const e=Qt(new URL(location.href));e?Xt(e,t.state.id):location.href=location.href}else(function(t){Jt=t})(Kt=Kt+1),Gt.replaceState({id:Jt},"",location.href)}!function(t){var e;"scrollRestoration"in Gt&&(Gt.scrollRestoration="manual"),e=t.target,Vt=e,addEventListener("click",ae),addEventListener("popstate",ie),addEventListener("touchstart",se),addEventListener("mousemove",oe),Promise.resolve().then(()=>{const{hash:t,href:e}=location;Gt.replaceState({id:Kt},"",e);const n=new URL(location.href);if(jt.error)return function(t){const{host:e,pathname:n,search:r}=location,{session:o,preloaded:s,status:a,error:c}=jt;Ot||(Ot=s&&s[0]),Yt(null,[],{error:c,status:a,session:o,level0:{props:Ot},level1:{props:{status:a,error:c},component:Et},segments:s},{host:e,path:n,query:Ft(r),params:{}})}();const r=Qt(n);return r?Xt(r,Kt,!0,t):void 0})}({target:document.querySelector("#sapper")});export{W as A,X as B,at as C,F as D,Q as E,q as F,O as G,nt as H,Y as I,H as J,w as K,x as L,A as M,ft as N,R as O,S as P,Lt as Q,j as R,lt as S,tt as T,et as U,e as V,l as a,p as b,h as c,u as d,m as e,v as f,y as g,E as h,it as i,$ as j,i as k,g as l,s as m,t as n,f as o,d as p,b as q,o as r,a as s,P as t,_ as u,rt as v,ot as w,st as x,Z as y,T as z};
