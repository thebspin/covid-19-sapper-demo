import{S as a,i as s,s as e,e as t,t as c,a as r,b as i,f as l,g as o,d as n,c as d,h,j as u,k as v,q as f,l as m,m as D,n as E}from"./client.cd14ee65.js";import{d as k,a as b}from"./data-store.3ced60ab.js";function p(a){let s,e,f,m,D,E,k;return{c(){s=t("div"),e=t("h1"),f=c("Covid-19 Tracker"),m=r(),D=t("div"),E=t("div"),k=c("Refreshing Data ..."),this.h()},l(a){s=i(a,"DIV",{class:!0});var t=l(s);e=i(t,"H1",{});var c=l(e);f=o(c,"Covid-19 Tracker"),c.forEach(n),m=d(t),D=i(t,"DIV",{class:!0});var r=l(D);E=i(r,"DIV",{class:!0});var h=l(E);k=o(h,"Refreshing Data ..."),h.forEach(n),r.forEach(n),t.forEach(n),this.h()},h(){h(E,"class","ui text loader"),h(D,"class","ui active dimmer"),h(s,"class","ui container svelte-1idf44v")},m(a,t){u(a,s,t),v(s,e),v(e,f),v(s,m),v(s,D),v(D,E),v(E,k)},d(a){a&&n(s)}}}function g(a){let s,e,k,b,g,I,V,j,y,R,T,q,x,C,N=a[1]&&p();return{c(){s=r(),e=t("div"),k=t("div"),b=t("div"),g=c("You just deleeted cache."),I=r(),V=t("p"),j=c("When you navigate to the home screen it should take a little longer."),y=r(),N&&N.c(),R=r(),T=t("div"),q=t("button"),x=c("Reset Data"),this.h()},l(a){f('[data-svelte="svelte-khqcqk"]',document.head).forEach(n),s=d(a),e=i(a,"DIV",{style:!0,class:!0});var t=l(e);k=i(t,"DIV",{class:!0});var c=l(k);b=i(c,"DIV",{class:!0});var r=l(b);g=o(r,"You just deleeted cache."),r.forEach(n),I=d(c),V=i(c,"P",{});var h=l(V);j=o(h,"When you navigate to the home screen it should take a little longer."),h.forEach(n),c.forEach(n),t.forEach(n),y=d(a),N&&N.l(a),R=d(a),T=i(a,"DIV",{class:!0});var u=l(T);q=i(u,"BUTTON",{class:!0});var v=l(q);x=o(v,"Reset Data"),v.forEach(n),u.forEach(n),this.h()},h(){document.title="Reset Cache",h(b,"class","header"),h(k,"class","ui success message"),m(e,"display",a[0]?"block":"none"),h(e,"class","ui container svelte-1idf44v"),h(q,"class","ui red basic button"),h(T,"class","ui container svelte-1idf44v")},m(t,c,r){u(t,s,c),u(t,e,c),v(e,k),v(k,b),v(b,g),v(k,I),v(k,V),v(V,j),u(t,y,c),N&&N.m(t,c),u(t,R,c),u(t,T,c),v(T,q),v(q,x),r&&C(),C=D(q,"click",a[2])},p(a,[s]){1&s&&m(e,"display",a[0]?"block":"none"),a[1]?N||((N=p()).c(),N.m(R.parentNode,R)):N&&(N.d(1),N=null)},i:E,o:E,d(a){a&&n(s),a&&n(e),a&&n(y),N&&N.d(a),a&&n(R),a&&n(T),C()}}}function I(a,s,e){let t=!1,c=!1;return k.subscribe(()=>{c&&(e(1,c=!1),e(0,t=!0))}),[t,c,function(){b(),e(1,c=!0)}]}export default class extends a{constructor(a){super(),s(this,a,I,g,e,{})}}
