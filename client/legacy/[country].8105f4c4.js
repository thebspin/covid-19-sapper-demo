import{_ as t,a as e,i as n,s as r,b as a,S as o,f as c,t as i,e as s,j as u,k as f,l,g as h,h as d,m as v,n as p,o as y,C as m,I as g,p as b,a1 as D,c as $,d as S,V as C,x as E,y as w,J as P,K as R,L as O,a3 as k,a4 as x,O as L,P as I,Q as j,D as H,q as T,T as V,a5 as M,a6 as A,W as N,N as B,R as F}from"./client.2e6e9f2f.js";import{_ as K,b as U,d as J}from"./data-store.75996006.js";import{f as G,F as Y,T as q}from"./helpers.9f3b67aa.js";function Q(t){return function(){var e,n=$(t);if(function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}()){var r=$(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return S(this,e)}}function W(t){var e,n,r,a,o,D,$,S,C,E,w,P,R,O,k,x,L,I,j,H,T,V,M,A,N,B,F,K,U,J,G,Y,q,Q,W,_,z,X,Z,tt=t[0].toLocaleString()+"",et=t[1].toLocaleString()+"",nt=t[2].toLocaleString()+"",rt=t[3].toLocaleString()+"",at=t[4].toLocaleString()+"",ot=t[6].toLocaleString()+"",ct=t[5].toLocaleString()+"",it=t[7].toLocaleString()+"";return{c:function(){e=c("div"),n=c("div"),r=c("div"),a=c("h3"),o=i("Cases: "),D=i(tt),$=s(),S=c("h3"),C=i("Cases Today: "),E=i(et),w=s(),P=c("h3"),R=i("Cases Per Million: "),O=i(nt),k=s(),x=c("div"),L=c("h3"),I=i("Recovered: "),j=i(rt),H=s(),T=c("h3"),V=i("Active: "),M=i(at),A=s(),N=c("h3"),B=i("Critical: "),F=i(ot),K=s(),U=c("div"),J=c("h3"),G=i("Deaths: "),Y=i(ct),q=s(),Q=c("h3"),W=i("Deaths Today: "),_=i(it),z=s(),X=c("div"),Z=c("canvas"),this.h()},l:function(t){e=u(t,"DIV",{class:!0});var c=f(e);n=u(c,"DIV",{class:!0});var i=f(n);r=u(i,"DIV",{class:!0});var s=f(r);a=u(s,"H3",{});var v=f(a);o=l(v,"Cases: "),D=l(v,tt),v.forEach(h),$=d(s),S=u(s,"H3",{});var p=f(S);C=l(p,"Cases Today: "),E=l(p,et),p.forEach(h),w=d(s),P=u(s,"H3",{});var y=f(P);R=l(y,"Cases Per Million: "),O=l(y,nt),y.forEach(h),s.forEach(h),k=d(i),x=u(i,"DIV",{class:!0});var m=f(x);L=u(m,"H3",{});var g=f(L);I=l(g,"Recovered: "),j=l(g,rt),g.forEach(h),H=d(m),T=u(m,"H3",{});var b=f(T);V=l(b,"Active: "),M=l(b,at),b.forEach(h),A=d(m),N=u(m,"H3",{});var st=f(N);B=l(st,"Critical: "),F=l(st,ot),st.forEach(h),m.forEach(h),K=d(i),U=u(i,"DIV",{class:!0});var ut=f(U);J=u(ut,"H3",{});var ft=f(J);G=l(ft,"Deaths: "),Y=l(ft,ct),ft.forEach(h),q=d(ut),Q=u(ut,"H3",{});var lt=f(Q);W=l(lt,"Deaths Today: "),_=l(lt,it),lt.forEach(h),ut.forEach(h),z=d(i),X=u(i,"DIV",{class:!0});var ht=f(X);Z=u(ht,"CANVAS",{}),f(Z).forEach(h),ht.forEach(h),i.forEach(h),c.forEach(h),this.h()},h:function(){v(r,"class","four wide column"),v(x,"class","four wide column"),v(U,"class","four wide column"),v(X,"class","four wide column"),v(n,"class","ui grid"),v(e,"class","ui container")},m:function(c,i){p(c,e,i),y(e,n),y(n,r),y(r,a),y(a,o),y(a,D),y(r,$),y(r,S),y(S,C),y(S,E),y(r,w),y(r,P),y(P,R),y(P,O),y(n,k),y(n,x),y(x,L),y(L,I),y(L,j),y(x,H),y(x,T),y(T,V),y(T,M),y(x,A),y(x,N),y(N,B),y(N,F),y(n,K),y(n,U),y(U,J),y(J,G),y(J,Y),y(U,q),y(U,Q),y(Q,W),y(Q,_),y(n,z),y(n,X),y(X,Z),t[9](Z)},p:function(t,e){var n=m(e,1)[0];1&n&&tt!==(tt=t[0].toLocaleString()+"")&&g(D,tt),2&n&&et!==(et=t[1].toLocaleString()+"")&&g(E,et),4&n&&nt!==(nt=t[2].toLocaleString()+"")&&g(O,nt),8&n&&rt!==(rt=t[3].toLocaleString()+"")&&g(j,rt),16&n&&at!==(at=t[4].toLocaleString()+"")&&g(M,at),64&n&&ot!==(ot=t[6].toLocaleString()+"")&&g(F,ot),32&n&&ct!==(ct=t[5].toLocaleString()+"")&&g(Y,ct),128&n&&it!==(it=t[7].toLocaleString()+"")&&g(_,it)},i:b,o:b,d:function(n){n&&h(e),t[9](null)}}}function _(t,e,n){var r,a=e.cases,o=void 0===a?0:a,c=e.todayCases,i=void 0===c?0:c,s=e.casesPerOneMillion,u=void 0===s?0:s,f=e.recovered,l=void 0===f?0:f,h=e.active,d=void 0===h?0:h,v=e.deaths,p=void 0===v?0:v,y=e.critical,m=void 0===y?0:y,g=e.todayDeaths,b=void 0===g?0:g;return D(function(){new Chart(r.getContext("2d"),{type:"pie",data:{labels:["Deaths","Recovered","Active"],datasets:[{data:[p,l,d],backgroundColor:["rgb(255, 99, 132)","rgb(54, 162, 235)","rgb(255, 205, 86)"]}]},options:{}})}),t.$set=function(t){"cases"in t&&n(0,o=t.cases),"todayCases"in t&&n(1,i=t.todayCases),"casesPerOneMillion"in t&&n(2,u=t.casesPerOneMillion),"recovered"in t&&n(3,l=t.recovered),"active"in t&&n(4,d=t.active),"deaths"in t&&n(5,p=t.deaths),"critical"in t&&n(6,m=t.critical),"todayDeaths"in t&&n(7,b=t.todayDeaths)},[o,i,u,l,d,p,m,b,r,function(t){C[t?"unshift":"push"](function(){n(8,r=t)})}]}var z=function(c){t(s,o);var i=Q(s);function s(t){var o;return e(this,s),o=i.call(this),n(a(o),t,_,W,r,{cases:0,todayCases:1,casesPerOneMillion:2,recovered:3,active:4,deaths:5,critical:6,todayDeaths:7}),o}return s}();function X(t){return function(){var e,n=$(t);if(function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}()){var r=$(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return S(this,e)}}function Z(t){var e,n;return{c:function(){e=c("div"),n=c("canvas"),this.h()},l:function(t){e=u(t,"DIV",{class:!0});var r=f(e);n=u(r,"CANVAS",{}),f(n).forEach(h),r.forEach(h),this.h()},h:function(){v(e,"class","ui container")},m:function(r,a){p(r,e,a),y(e,n),t[2](n)},p:b,i:b,o:b,d:function(n){n&&h(e),t[2](null)}}}function tt(t,e,n){var r,a=e.historicData;return D(function(){new Chart(r.getContext("2d"),{type:"line",data:{datasets:[{label:"Cases",data:K.keys(a.cases).map(function(t){return{x:t,y:a.cases[t]}}),fill:!1,borderColor:"rgb(100, 0, 200)"},{label:"Deaths",data:K.keys(a.deaths).map(function(t){return{x:t,y:a.deaths[t]}}),fill:!1,borderColor:"rgb(255, 99, 132)"},{label:"Recovered",data:K.keys(a.recovered).map(function(t){return{x:t,y:a.recovered[t]}}),fill:!1,borderColor:"rgb(54, 162, 235)"}]},options:{responsive:!0,title:{display:!0,text:"Covid-19 Stats"},scales:{xAxes:[{type:"time",time:{parser:"M/D/YY",tooltipFormat:"ll"},scaleLabel:{display:!0,labelString:"Date"}}],yAxes:[{scaleLabel:{display:!0,labelString:"Total Cases / Recovered / Deaths Reported"}}]}}})}),t.$set=function(t){"historicData"in t&&n(1,a=t.historicData)},[r,a,function(t){C[t?"unshift":"push"](function(){n(0,r=t)})}]}var et=function(c){t(s,o);var i=X(s);function s(t){var o;return e(this,s),o=i.call(this),n(a(o),t,tt,Z,r,{historicData:1}),o}return s}();function nt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}var rt=function(t){return{deaths:K.max(K.keys(t.deaths).map(function(e){return t.deaths[e]})),recovered:K.max(K.keys(t.recovered).map(function(e){return t.recovered[e]})),cases:K.max(K.keys(t.cases).map(function(e){return t.cases[e]}))}},at=function(t,e){return t[e.country]?(t[e.country].cases=ot(t[e.country].cases,e.timeline.cases),t[e.country].recovered=ot(t[e.country].recovered,e.timeline.recovered),t[e.country].deaths=ot(t[e.country].deaths,e.timeline.deaths),t):(t[e.country]=ct(e.timeline),t)},ot=function(t,e){return K.keys(t).reduce(function(n,r){return n[r]=Math.abs(+t[r])+Math.abs(+e[r]),n},{})},ct=function(t){var e={};return e.deaths=it(t.deaths),e.recovered=it(t.recovered),e.cases=it(t.cases),e},it=function(t){return K.keys(t).reduce(function(e,n){return e[n]=Math.abs(+t[n]),e},{})},st={byProvince:function(t,e){return e.data.filter(function(e){return e.country===t}).filter(function(t){return!K.isEmpty(t.province)}).filter(function(t){return!t.province.includes(",")}).filter(function(t){return!t.province.includes("Princess")}).map(function(t){var e=ct(t.timeline);return function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?nt(Object(n),!0).forEach(function(e){U(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):nt(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}({},t,{},rt(e),{location:t.province})})},byCountry:function(t){return t.data.reduce(at,{})}};function ut(t){return function(){var e,n=$(t);if(function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}()){var r=$(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return S(this,e)}}function ft(t){for(var e,n,r,a,o,m,g,b,D,$,S,C=[t[7]],E={},w=0;w<C.length;w+=1)E=A(E,C[w]);var H=new z({props:E}),T=new et({props:{historicData:t[6]}});return{c:function(){P(H.$$.fragment),e=s(),n=c("div"),r=c("h2"),a=i("Important Note"),o=s(),m=c("p"),g=i("The information below may not be 100% accurate. It's coming from JHU CSSE\n      GISand Data. The goal is to show how the covid-19 spreads over time and\n      what people mean when they talk about the curve. For more information\n      please consult the\n      "),b=c("a"),D=i("api github page."),$=s(),P(T.$$.fragment),this.h()},l:function(t){R(H.$$.fragment,t),e=d(t),n=u(t,"DIV",{id:!0,class:!0});var c=f(n);r=u(c,"H2",{});var i=f(r);a=l(i,"Important Note"),i.forEach(h),o=d(c),m=u(c,"P",{});var s=f(m);g=l(s,"The information below may not be 100% accurate. It's coming from JHU CSSE\n      GISand Data. The goal is to show how the covid-19 spreads over time and\n      what people mean when they talk about the curve. For more information\n      please consult the\n      "),b=u(s,"A",{href:!0});var v=f(b);D=l(v,"api github page."),v.forEach(h),s.forEach(h),c.forEach(h),$=d(t),R(T.$$.fragment,t),this.h()},h:function(){v(b,"href","https://github.com/novelcovid/api"),v(n,"id","note"),v(n,"class","ui container svelte-15rke7r")},m:function(t,c){O(H,t,c),p(t,e,c),p(t,n,c),y(n,r),y(r,a),y(n,o),y(n,m),y(m,g),y(m,b),y(b,D),p(t,$,c),O(T,t,c),S=!0},p:function(t,e){var n=128&e?k(C,[x(t[7])]):{};H.$set(n);var r={};64&e&&(r.historicData=t[6]),T.$set(r)},i:function(t){S||(L(H.$$.fragment,t),L(T.$$.fragment,t),S=!0)},o:function(t){I(H.$$.fragment,t),I(T.$$.fragment,t),S=!1},d:function(t){j(H,t),t&&h(e),t&&h(n),t&&h($),j(T,t)}}}function lt(t){var e,n,r,a,o,m,g,b,D;function $(e){t[14].call(null,e)}function S(e){t[15].call(null,e)}var E={geoRegionName:"Province / State",selectFields:t[8]};void 0!==t[2]&&(E.sortBy=t[2]),void 0!==t[3]&&(E.search=t[3]);var w=new Y({props:E});function k(e){t[16].call(null,e)}C.push(function(){return N(w,"sortBy",$)}),C.push(function(){return N(w,"search",S)});var x={geoRegionName:"Province / State",fields:t[8],sortBy:t[2],list:t[1]};void 0!==t[4]&&(x.page=t[4]);var H=new q({props:x});return C.push(function(){return N(H,"page",k)}),{c:function(){e=c("div"),n=c("h1"),r=i("Search By Province / State"),a=s(),P(w.$$.fragment),g=s(),P(H.$$.fragment),this.h()},l:function(t){e=u(t,"DIV",{class:!0});var o=f(e);n=u(o,"H1",{class:!0});var c=f(n);r=l(c,"Search By Province / State"),c.forEach(h),o.forEach(h),a=d(t),R(w.$$.fragment,t),g=d(t),R(H.$$.fragment,t),this.h()},h:function(){v(n,"class","svelte-15rke7r"),v(e,"class","ui container")},m:function(t,o){p(t,e,o),y(e,n),y(n,r),p(t,a,o),O(w,t,o),p(t,g,o),O(H,t,o),D=!0},p:function(t,e){var n={};!o&&4&e&&(o=!0,n.sortBy=t[2],B(function(){return o=!1})),!m&&8&e&&(m=!0,n.search=t[3],B(function(){return m=!1})),w.$set(n);var r={};4&e&&(r.sortBy=t[2]),2&e&&(r.list=t[1]),!b&&16&e&&(b=!0,r.page=t[4],B(function(){return b=!1})),H.$set(r)},i:function(t){D||(L(w.$$.fragment,t),L(H.$$.fragment,t),D=!0)},o:function(t){I(w.$$.fragment,t),I(H.$$.fragment,t),D=!1},d:function(t){t&&h(e),t&&h(a),j(w,t),t&&h(g),j(H,t)}}}function ht(t){var e,n,r,a,o,b,D,$,S,C;document.title=e="Covid 19 Tracker For "+t[0];var E=!t[5]&&ft(t),w=t[1].length>0&&lt(t);return{c:function(){n=s(),r=c("div"),a=c("h1"),o=i("Country "),b=i(t[0]),D=s(),E&&E.c(),$=s(),w&&w.c(),S=H(),this.h()},l:function(e){T('[data-svelte="svelte-8c397"]',document.head).forEach(h),n=d(e),r=u(e,"DIV",{class:!0});var c=f(r);a=u(c,"H1",{class:!0});var i=f(a);o=l(i,"Country "),b=l(i,t[0]),i.forEach(h),c.forEach(h),D=d(e),E&&E.l(e),$=d(e),w&&w.l(e),S=H(),this.h()},h:function(){v(a,"class","svelte-15rke7r"),v(r,"class","ui container")},m:function(t,e){p(t,n,e),p(t,r,e),y(r,a),y(a,o),y(a,b),p(t,D,e),E&&E.m(t,e),p(t,$,e),w&&w.m(t,e),p(t,S,e),C=!0},p:function(t,n){var r=m(n,1)[0];(!C||1&r)&&e!==(e="Covid 19 Tracker For "+t[0])&&(document.title=e),(!C||1&r)&&g(b,t[0]),t[5]?E&&(F(),I(E,1,1,function(){E=null}),V()):E?(E.p(t,r),L(E,1)):((E=ft(t)).c(),L(E,1),E.m($.parentNode,$)),t[1].length>0?w?(w.p(t,r),L(w,1)):((w=lt(t)).c(),L(w,1),w.m(S.parentNode,S)):w&&(F(),I(w,1,1,function(){w=null}),V())},i:function(t){C||(L(E),L(w),C=!0)},o:function(t){I(E),I(w),C=!1},d:function(t){t&&h(n),t&&h(r),t&&h(D),E&&E.d(t),t&&h($),w&&w.d(t),t&&h(S)}}}function dt(t){return vt.apply(this,arguments)}function vt(){return(vt=E(w.mark(function t(e){return w.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",{country:e.params.country});case 1:case"end":return t.stop()}},t)}))).apply(this,arguments)}function pt(t,e,n){var r,a=e.country,o=function(t){return"UK"===t?"United Kingdom":"S. Korea"===t?"Korea, South":t}(a),c=[],i=[],s="none",u="",f=0,l=!0,h={},d={deaths:0,active:0,recovered:0,cases:0,casesPerOneMillion:0,todayDeaths:0,todayCases:0};return D(function(){r=J.subscribe(function(t){if(t){n(9,c=st.byProvince(o,t.historicData));K.cloneDeep(t.historicData);n(6,h=st.byCountry(t.historicData)[o]),n(7,d=t.dataByCountry.data.find(function(t){return t.location===a})),n(5,l=!1)}})}),M(function(){K.isFunction(r)&&(n(7,d=void 0),n(9,c=void 0),n(6,h=void 0),r())}),t.$set=function(t){"country"in t&&n(0,a=t.country)},t.$$.update=function(){520&t.$$.dirty&&n(1,i=G(c,u)),8&t.$$.dirty&&u.length>0&&n(4,f=0)},[a,i,s,u,f,l,h,d,["Cases","Deaths","Recovered"],c,r,o,void 0,void 0,function(t){n(2,s=t)},function(t){n(3,u=t)},function(t){n(4,f=t),n(3,u)}]}export default(function(c){t(s,o);var i=ut(s);function s(t){var o;return e(this,s),o=i.call(this),n(a(o),t,pt,ht,r,{country:0}),o}return s}());export{dt as preload};
