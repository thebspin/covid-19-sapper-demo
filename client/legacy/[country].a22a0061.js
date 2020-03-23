import{b as t,d as a,i as e,s as r,e as n,S as o,j as c,A as s,k as i,l as u,m as f,B as l,h as v,n as h,o as d,g as p,p as m,v as g,C as y,w as $,Z as C,y as D,z as S,D as E,U as w,V as L,F as R,G as V,H,a2 as P,a3 as x,K as I,L as b,M as k,f as B,W as M,Y as A,a4 as F,E as T,J as j,$ as N,a0 as O}from"./client.ed90c490.js";import{_ as K}from"./cache.2675e545.js";import{f as q,F as z,T as G}from"./helpers.eba29f0b.js";import{c as J,d as U,e as W}from"./request.681e521e.js";import{a as Y,C as Z}from"./CovidChart.7c80c81e.js";function Q(t){return function(){var a,e=D(t);if(function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}()){var r=D(this).constructor;a=Reflect.construct(e,arguments,r)}else a=e.apply(this,arguments);return S(this,a)}}function X(t){var a,e,r,n,o,C,D,S,E,w,L,R,V,H,P,x,I,b,k,B,M,A,F,T,j,N,O,K,q,z,G,J,U,W,Y,Z,Q,X,_,tt=t[0].toLocaleString()+"",at=t[1].toLocaleString()+"",et=t[2].toLocaleString()+"",rt=t[3].toLocaleString()+"",nt=t[4].toLocaleString()+"",ot=t[6].toLocaleString()+"",ct=t[5].toLocaleString()+"",st=t[7].toLocaleString()+"";return{c:function(){a=c("div"),e=c("div"),r=c("div"),n=c("h3"),o=s("Cases: "),C=s(tt),D=i(),S=c("h3"),E=s("Cases Today: "),w=s(at),L=i(),R=c("h3"),V=s("Cases Per Million: "),H=s(et),P=i(),x=c("div"),I=c("h3"),b=s("Recovered: "),k=s(rt),B=i(),M=c("h3"),A=s("Active: "),F=s(nt),T=i(),j=c("h3"),N=s("Critical: "),O=s(ot),K=i(),q=c("div"),z=c("h3"),G=s("Deaths: "),J=s(ct),U=i(),W=c("h3"),Y=s("Deaths Today: "),Z=s(st),Q=i(),X=c("div"),_=c("canvas"),this.h()},l:function(t){a=u(t,"DIV",{class:!0});var c=f(a);e=u(c,"DIV",{class:!0});var s=f(e);r=u(s,"DIV",{class:!0});var i=f(r);n=u(i,"H3",{});var d=f(n);o=l(d,"Cases: "),C=l(d,tt),d.forEach(v),D=h(i),S=u(i,"H3",{});var p=f(S);E=l(p,"Cases Today: "),w=l(p,at),p.forEach(v),L=h(i),R=u(i,"H3",{});var m=f(R);V=l(m,"Cases Per Million: "),H=l(m,et),m.forEach(v),i.forEach(v),P=h(s),x=u(s,"DIV",{class:!0});var g=f(x);I=u(g,"H3",{});var y=f(I);b=l(y,"Recovered: "),k=l(y,rt),y.forEach(v),B=h(g),M=u(g,"H3",{});var $=f(M);A=l($,"Active: "),F=l($,nt),$.forEach(v),T=h(g),j=u(g,"H3",{});var it=f(j);N=l(it,"Critical: "),O=l(it,ot),it.forEach(v),g.forEach(v),K=h(s),q=u(s,"DIV",{class:!0});var ut=f(q);z=u(ut,"H3",{});var ft=f(z);G=l(ft,"Deaths: "),J=l(ft,ct),ft.forEach(v),U=h(ut),W=u(ut,"H3",{});var lt=f(W);Y=l(lt,"Deaths Today: "),Z=l(lt,st),lt.forEach(v),ut.forEach(v),Q=h(s),X=u(s,"DIV",{class:!0});var vt=f(X);_=u(vt,"CANVAS",{}),f(_).forEach(v),vt.forEach(v),s.forEach(v),c.forEach(v),this.h()},h:function(){d(r,"class","four wide column"),d(x,"class","four wide column"),d(q,"class","four wide column"),d(X,"class","four wide column"),d(e,"class","ui grid"),d(a,"class","ui container")},m:function(c,s){p(c,a,s),m(a,e),m(e,r),m(r,n),m(n,o),m(n,C),m(r,D),m(r,S),m(S,E),m(S,w),m(r,L),m(r,R),m(R,V),m(R,H),m(e,P),m(e,x),m(x,I),m(I,b),m(I,k),m(x,B),m(x,M),m(M,A),m(M,F),m(x,T),m(x,j),m(j,N),m(j,O),m(e,K),m(e,q),m(q,z),m(z,G),m(z,J),m(q,U),m(q,W),m(W,Y),m(W,Z),m(e,Q),m(e,X),m(X,_),t[9](_)},p:function(t,a){var e=g(a,1)[0];1&e&&tt!==(tt=t[0].toLocaleString()+"")&&y(C,tt),2&e&&at!==(at=t[1].toLocaleString()+"")&&y(w,at),4&e&&et!==(et=t[2].toLocaleString()+"")&&y(H,et),8&e&&rt!==(rt=t[3].toLocaleString()+"")&&y(k,rt),16&e&&nt!==(nt=t[4].toLocaleString()+"")&&y(F,nt),64&e&&ot!==(ot=t[6].toLocaleString()+"")&&y(O,ot),32&e&&ct!==(ct=t[5].toLocaleString()+"")&&y(J,ct),128&e&&st!==(st=t[7].toLocaleString()+"")&&y(Z,st)},i:$,o:$,d:function(e){e&&v(a),t[9](null)}}}function _(t,a,e){var r,n=a.cases,o=void 0===n?0:n,c=a.todayCases,s=void 0===c?0:c,i=a.casesPerOneMillion,u=void 0===i?0:i,f=a.recovered,l=void 0===f?0:f,v=a.active,h=void 0===v?0:v,d=a.deaths,p=void 0===d?0:d,m=a.critical,g=void 0===m?0:m,y=a.todayDeaths,$=void 0===y?0:y;return C(function(){new Y(r.getContext("2d"),{type:"pie",data:{labels:["Deaths","Recovered","Active"],datasets:[{data:[p,l,h],backgroundColor:["rgb(255, 99, 132)","rgb(54, 162, 235)","rgb(255, 205, 86)"]}]},options:{}})}),t.$set=function(t){"cases"in t&&e(0,o=t.cases),"todayCases"in t&&e(1,s=t.todayCases),"casesPerOneMillion"in t&&e(2,u=t.casesPerOneMillion),"recovered"in t&&e(3,l=t.recovered),"active"in t&&e(4,h=t.active),"deaths"in t&&e(5,p=t.deaths),"critical"in t&&e(6,g=t.critical),"todayDeaths"in t&&e(7,$=t.todayDeaths)},[o,s,u,l,h,p,g,$,r,function(t){E[t?"unshift":"push"](function(){e(8,r=t)})}]}var tt=function(c){t(i,o);var s=Q(i);function i(t){var o;return a(this,i),o=s.call(this),e(n(o),t,_,X,r,{cases:0,todayCases:1,casesPerOneMillion:2,recovered:3,active:4,deaths:5,critical:6,todayDeaths:7}),o}return i}();function at(t){return function(){var a,e=D(t);if(function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}()){var r=D(this).constructor;a=Reflect.construct(e,arguments,r)}else a=e.apply(this,arguments);return S(this,a)}}function et(t){for(var a,e,r=[t[7]],n={},o=0;o<r.length;o+=1)n=F(n,r[o]);var c=new tt({props:n}),s=new Z({props:{title:"Covid-19 State For "+K.startCase(t[8]),historicData:t[6]}});return{c:function(){R(c.$$.fragment),a=i(),R(s.$$.fragment)},l:function(t){V(c.$$.fragment,t),a=h(t),V(s.$$.fragment,t)},m:function(t,r){H(c,t,r),p(t,a,r),H(s,t,r),e=!0},p:function(t,a){var e=128&a?P(r,[x(t[7])]):{};c.$set(e);var n={};256&a&&(n.title="Covid-19 State For "+K.startCase(t[8])),64&a&&(n.historicData=t[6]),s.$set(n)},i:function(t){e||(I(c.$$.fragment,t),I(s.$$.fragment,t),e=!0)},o:function(t){b(c.$$.fragment,t),b(s.$$.fragment,t),e=!1},d:function(t){k(c,t),t&&v(a),k(s,t)}}}function rt(t){var a,e,r,n,o,g,y,$,C;function D(a){t[15].call(null,a)}function S(a){t[16].call(null,a)}var w={geoRegionName:"Province / State",selectFields:t[9]};void 0!==t[2]&&(w.sortBy=t[2]),void 0!==t[3]&&(w.search=t[3]);var L=new z({props:w});function P(a){t[17].call(null,a)}E.push(function(){return T(L,"sortBy",D)}),E.push(function(){return T(L,"search",S)});var x={geoRegionName:"Province / State",fields:t[9],sortBy:t[2],canNav:"true",list:t[1]};void 0!==t[4]&&(x.page=t[4]);var B=new G({props:x});return E.push(function(){return T(B,"page",P)}),B.$on("location",t[10]),{c:function(){a=c("div"),e=c("h1"),r=s("Search By Province / State"),n=i(),R(L.$$.fragment),y=i(),R(B.$$.fragment),this.h()},l:function(t){a=u(t,"DIV",{class:!0});var o=f(a);e=u(o,"H1",{class:!0});var c=f(e);r=l(c,"Search By Province / State"),c.forEach(v),o.forEach(v),n=h(t),V(L.$$.fragment,t),y=h(t),V(B.$$.fragment,t),this.h()},h:function(){d(e,"class","svelte-15uwyg3"),d(a,"class","ui container")},m:function(t,o){p(t,a,o),m(a,e),m(e,r),p(t,n,o),H(L,t,o),p(t,y,o),H(B,t,o),C=!0},p:function(t,a){var e={};!o&&4&a&&(o=!0,e.sortBy=t[2],j(function(){return o=!1})),!g&&8&a&&(g=!0,e.search=t[3],j(function(){return g=!1})),L.$set(e);var r={};4&a&&(r.sortBy=t[2]),2&a&&(r.list=t[1]),!$&&16&a&&($=!0,r.page=t[4],j(function(){return $=!1})),B.$set(r)},i:function(t){C||(I(L.$$.fragment,t),I(B.$$.fragment,t),C=!0)},o:function(t){b(L.$$.fragment,t),b(B.$$.fragment,t),C=!1},d:function(t){t&&v(a),t&&v(n),k(L,t),t&&v(y),k(B,t)}}}function nt(t){var a,e,r,n,o,$,C,D,S,E,w,L,R,V,H,P,x,k,F,T,j,O=K.startCase(t[8])+"",q=K.startCase(t[8])+"";document.title=a="Covid 19 Tracker For "+K.startCase(t[8]);var z=!t[5]&&et(t),G=t[0].length>0&&rt(t);return{c:function(){e=i(),r=c("div"),n=c("div"),o=c("a"),$=s("Home"),C=i(),D=c("div"),S=s("/"),E=i(),w=c("div"),L=s(O),R=i(),V=c("div"),H=c("h1"),P=s("Country "),x=s(q),k=i(),z&&z.c(),F=i(),G&&G.c(),T=B(),this.h()},l:function(t){M('[data-svelte="svelte-14u9moo"]',document.head).forEach(v),e=h(t),r=u(t,"DIV",{class:!0});var a=f(r);n=u(a,"DIV",{class:!0});var c=f(n);o=u(c,"A",{href:!0,class:!0});var s=f(o);$=l(s,"Home"),s.forEach(v),C=h(c),D=u(c,"DIV",{class:!0});var i=f(D);S=l(i,"/"),i.forEach(v),E=h(c),w=u(c,"DIV",{class:!0});var d=f(w);L=l(d,O),d.forEach(v),c.forEach(v),a.forEach(v),R=h(t),V=u(t,"DIV",{class:!0});var p=f(V);H=u(p,"H1",{class:!0});var m=f(H);P=l(m,"Country "),x=l(m,q),m.forEach(v),p.forEach(v),k=h(t),z&&z.l(t),F=h(t),G&&G.l(t),T=B(),this.h()},h:function(){d(o,"href","/covid-19-sapper-demo"),d(o,"class","section"),d(D,"class","divider"),d(w,"class","active section"),d(n,"class","ui breadcrumb"),d(r,"class","ui container"),d(H,"class","svelte-15uwyg3"),d(V,"class","ui container")},m:function(t,a){p(t,e,a),p(t,r,a),m(r,n),m(n,o),m(o,$),m(n,C),m(n,D),m(D,S),m(n,E),m(n,w),m(w,L),p(t,R,a),p(t,V,a),m(V,H),m(H,P),m(H,x),p(t,k,a),z&&z.m(t,a),p(t,F,a),G&&G.m(t,a),p(t,T,a),j=!0},p:function(t,e){var r=g(e,1)[0];(!j||256&r)&&a!==(a="Covid 19 Tracker For "+K.startCase(t[8]))&&(document.title=a),(!j||256&r)&&O!==(O=K.startCase(t[8])+"")&&y(L,O),(!j||256&r)&&q!==(q=K.startCase(t[8])+"")&&y(x,q),t[5]?z&&(N(),b(z,1,1,function(){z=null}),A()):z?(z.p(t,r),I(z,1)):((z=et(t)).c(),I(z,1),z.m(F.parentNode,F)),t[0].length>0?G?(G.p(t,r),I(G,1)):((G=rt(t)).c(),I(G,1),G.m(T.parentNode,T)):G&&(N(),b(G,1,1,function(){G=null}),A())},i:function(t){j||(I(z),I(G),j=!0)},o:function(t){b(z),b(G),j=!1},d:function(t){t&&v(e),t&&v(r),t&&v(R),t&&v(V),t&&v(k),z&&z.d(t),t&&v(F),G&&G.d(t),t&&v(T)}}}function ot(t){return ct.apply(this,arguments)}function ct(){return(ct=w(L.mark(function t(a){return L.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",{country:a.params.country});case 1:case"end":return t.stop()}},t)}))).apply(this,arguments)}function st(t,a,e){var r,n=a.country,o=[],c=[],s="none",i="",u=0,f=!0,l={},v={deaths:0,active:0,recovered:0,cases:0,casesPerOneMillion:0,todayDeaths:0,todayCases:0};function h(){return(h=w(L.mark(function t(a){return L.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O(n+"/"+a.detail);case 2:case"end":return t.stop()}},t)}))).apply(this,arguments)}return C(w(L.mark(function t(){return L.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=e,t.next=3,W(n);case 3:return t.t1=v=t.sent,(0,t.t0)(7,t.t1),t.t2=e,t.next=8,U(n);case 8:return t.t3=l=t.sent,(0,t.t2)(6,t.t3),t.t4=e,t.next=13,J(n);case 13:t.t5=o=t.sent,(0,t.t4)(0,t.t5),e(5,f=!1);case 16:case"end":return t.stop()}},t)}))),t.$set=function(t){"country"in t&&e(11,n=t.country)},t.$$.update=function(){2048&t.$$.dirty&&e(8,r=n.toLowerCase().includes("korea")?"South Korea":n),9&t.$$.dirty&&e(1,c=q(o,i)),8&t.$$.dirty&&i.length>0&&e(4,u=0)},[o,c,s,i,u,f,l,v,r,["Cases","Deaths","Recovered"],function(t){return h.apply(this,arguments)},n,void 0,void 0,void 0,function(t){e(2,s=t)},function(t){e(3,i=t)},function(t){e(4,u=t),e(3,i)}]}export default(function(c){t(i,o);var s=at(i);function i(t){var o;return a(this,i),o=s.call(this),e(n(o),t,st,nt,r,{country:11}),o}return i}());export{ot as preload};
