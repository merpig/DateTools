(this.webpackJsonpdatetools=this.webpackJsonpdatetools||[]).push([[0],{170:function(e,t,n){},171:function(e,t,n){},172:function(e,t,n){},173:function(e,t,n){},175:function(e,t,n){},176:function(e,t,n){},216:function(e,t){},230:function(e,t){},232:function(e,t){},398:function(e,t,n){},399:function(e,t,n){},400:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),r=n.n(a),i=n(161),o=n.n(i),s=(n(170),n(2)),l=(n(171),function(e){var t=Object(a.useState)((new Date).toLocaleString()),n=Object(s.a)(t,2),r=n[0],i=n[1];return Object(a.useEffect)((function(){setInterval((function(){i((new Date).toLocaleString())}),1e3)}),[]),Object(c.jsx)("div",{className:"page-header",children:Object(c.jsx)("h1",{children:r})})}),u=function(e){return Object(c.jsx)("div",{})},d=function(e){return Object(c.jsx)("div",{className:"container",children:e.children})},h=(n(172),function(e){var t=e.day,n=e.onClick,a=e.selected;return Object(c.jsx)("div",{className:"calendar-cell ".concat(a),onClick:n,children:t})}),j=(n(173),["January","February","March","April","May","June","July","August","September","October","November","December"]),b=["S","M","T","W","T","F","S"];function f(e,t){var n=1,c=new Date(e,t+1,0).getDate(),a=new Date(e,t,1).getDay(),r=[];a>0&&(n-=a);for(var i=n;i<=c;i++){var o=new Date(e,t,i).getDay();r.push(new Date(e,t,i)),i===c&&o<6&&c++}return r}function v(e){return e.getFullYear().toString()+e.getMonth().toString()+e.getDate().toString()}var O=function(e){var t=e.selected,n=e.setSelected,r=Object(a.useState)(t.getMonth()),i=Object(s.a)(r,2),o=i[0],l=i[1],u=Object(a.useState)(t.getFullYear()),d=Object(s.a)(u,2),O=d[0],g=d[1];return Object(c.jsxs)("div",{className:"calendar-container",children:[Object(c.jsxs)("div",{className:"calendar-title-container",children:[Object(c.jsx)("div",{className:"calendar-left-arrow calendar-arrow",onClick:function(){o>0?l(o-1):(l(11),g(O-1))},children:"<"}),Object(c.jsx)("div",{className:"calendar-title",children:j[o]+", "+O}),Object(c.jsx)("div",{className:"calendar-right-arrow calendar-arrow",onClick:function(){o<11?l(o+1):(l(0),g(O+1))},children:">"})]}),Object(c.jsx)("div",{className:"calendar-body",children:Object(c.jsxs)("div",{className:"calendar-body-content",children:[b.map((function(e,t){return Object(c.jsx)(h,{day:e,onClick:function(){},selected:"header-cell"},t)})),f(O,o).map((function(e,a){return e.getMonth()!==o?Object(c.jsx)(h,{onClick:function(){},selected:""},a):Object(c.jsx)(h,{day:e.getDate(),onClick:function(){return function(e,c,a){if(t.toLocaleDateString()!==new Date(e.toString(),c.toString(),a).toLocaleDateString()){var r=j[c].toLowerCase().slice(0,3),i={id:"100"};"localhost"===window.location.host.split(":")[0]||"DateTools"===window.location.host.split(":")[0]?window.history.pushState(i,"DateTools","/#/".concat(e,"/").concat(r,"/").concat(a)):window.history.pushState(i,"DateTools","/DateTools/#/".concat(e,"/").concat(r,"/").concat(a)),n(new Date(e.toString(),c.toString(),a))}}(e.getFullYear(),e.getMonth(),e.getDate())},selected:v(e)===v(t)?"active-cell":""},a)}))]})})]})},g=n(88),p=n.n(g),m=n(162),w=(n(175),["Events","Births","Deaths","Holidays"]),x=function(e){var t=e.active,n=e.onClick;return Object(c.jsx)("div",{className:"datehistory-tabs container",children:Object(c.jsx)("div",{className:"row",children:w.map((function(e){return Object(c.jsx)("div",{className:"col-3 ".concat(t===e?"dh-active-tab":"dh-tab"),onClick:function(){return n(e)},children:e},e)}))})})},y=(n(176),function(e){var t=e.events,n=Object(a.useState)(0),r=Object(s.a)(n,2),i=r[0],o=(r[1],Object(a.useState)(5)),l=Object(s.a)(o,2),u=l[0],d=l[1],h=[5,10,25].filter((function(e){return e<=t.length}));return t.length>h[h.length-1]&&h.push(t.length),Object(a.useEffect)((function(){t.length>=5?d(5):d(t.length)}),[t]),Object(c.jsxs)("div",{className:"tab-list",children:[Object(c.jsx)("div",{className:"sorting-options container",children:Object(c.jsxs)("div",{className:"row",children:[Object(c.jsxs)("div",{className:"col-sm-6",children:[Object(c.jsx)("div",{className:"range-selectors",children:h.filter((function(e){return e<=t.length})).map((function(e){return Object(c.jsx)("div",{className:e===u?"range-selected":"range-selector",onClick:function(){return d(e)},children:[5,10,25].includes(e)?e:"All"},e)}))}),Object(c.jsxs)("div",{className:"tab-results-info",children:[i+1,"-",i+u<t.length?i+u:t.length," of ",t.length]})]}),Object(c.jsx)("div",{className:"dh-filters col-sm-6"})]})}),Object(c.jsx)("ul",{children:t.filter((function(e,t){return t>=i&&t<i+u})).map((function(e,t){return Object(c.jsx)("li",{children:e.text},t)}))})]})}),D=n(163),S=n.n(D),N=n(164),k=n.n(N),C=(n(398),["January","February","March","April","May","June","July","August","September","October","November","December"]),F=["Events","Births","Deaths","Holidays and observances"];function M(){return(M=Object(m.a)(p.a.mark((function e(t,n){var c,a,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.a.get(t);case 2:return c=e.sent,e.next=5,k.a.load(c.data.parse.text);case 5:a=e.sent,r={},a("h2").each((function(e,t){e>0&&e<=4&&(r[a(t).text().trim().replace("[edit]","")]=[])})),a("ul").each((function(e,t){if(t.prev&&t.prev.prev){var n=a(t.prev.prev).text().trim().replace("[edit]","");F.includes(n)&&a(t).children().each((function(e,t){r[n].push({text:t.children.filter((function(e){return[e.data,e.title]})).map((function(e){return e.attribs?e.children[0].data:e.data})).join(" ").replace(/\s+/g," ")})}))}})),n(r);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var J=function(e){var t=e.month,n=e.day,r=(e.year,Object(a.useState)("Events")),i=Object(s.a)(r,2),o=i[0],l=i[1],u=Object(a.useState)(),d=Object(s.a)(u,2),h=d[0],j=d[1],b=Object(a.useState)([]),f=Object(s.a)(b,2),v=f[0],O=f[1],g=Object(a.useState)([]),p=Object(s.a)(g,2),m=p[0],w=p[1],D=Object(a.useState)([]),S=Object(s.a)(D,2),N=S[0],k=S[1],F=Object(a.useState)([]),J=Object(s.a)(F,2),A=J[0],E=J[1],T=function(e){O(e.Events),w(e.Births),k(e.Deaths),E(e["Holidays and observances"])};return Object(a.useEffect)((function(){!function(e,t){M.apply(this,arguments)}("https://en.wikipedia.org/w/api.php?origin=*&action=parse&page=".concat(C[t-1],"_").concat(n,"&prop=text&formatversion=2&format=json"),T)}),[n,t]),Object(a.useEffect)((function(){if(v.length)switch(o){case"Births":j(Object(c.jsx)(y,{events:m}));break;case"Deaths":j(Object(c.jsx)(y,{events:N}));break;case"Holidays":j(Object(c.jsx)(y,{events:A}));break;case"Events":j(Object(c.jsx)(y,{events:v}))}}),[v,o,m,N,A]),Object(c.jsxs)("div",{className:"datehistory-container",children:[Object(c.jsx)("div",{className:"datehistory-title-container",children:Object(c.jsxs)("div",{className:"datehistory-title",children:["On",Object(c.jsxs)("div",{className:"datehistory-title-date",children:[C[t-1]," ",n]}),"in history"]})}),Object(c.jsx)(x,{active:o,onClick:l}),Object(c.jsx)("div",{className:"datehistory-body container",children:h})]})},A=(n(399),["January","February","March","April","May","June","July","August","September","October","November","December"]),E={jan:"January",feb:"February",mar:"March",apr:"April",may:"May",jun:"June",jul:"July",aug:"August",sep:"September",oct:"October",nov:"November",dec:"December"},T={parseUrlDate:function(e){var t,n=Object(s.a)(e,3),c=n[0],a=n[1],r=n[2],i="",o="";return!isNaN(c)&&parseInt(c)>=0?(i+=parseInt(c),E[a]?(o+=A.indexOf(E[a]),t=new Date(i,(parseInt(o)+1).toString(),0).getDate(),parseInt(r)>0&&parseInt(r)<=t?new Date(i,o,parseInt(r)):new Date):new Date):new Date},dateFromUrl:function(e){var t=e.hash;return T.parseUrlDate(t.split("/").slice(-3))}},I=T,L=function(){var e=Object(a.useState)(I.dateFromUrl(window.location)),t=Object(s.a)(e,2),n=t[0],r=t[1];return Object(a.useEffect)((function(){}),[n]),Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(l,{}),Object(c.jsx)(u,{}),Object(c.jsxs)(d,{children:[Object(c.jsx)("div",{style:{width:"300px",height:"300px",margin:"auto"},children:Object(c.jsx)(O,{selected:n,setSelected:r})}),Object(c.jsx)("div",{style:{width:"100%"},children:Object(c.jsx)(J,{selected:n,month:n.getMonth()+1,year:n.getFullYear(),day:n.getDate()})})]})]})},W=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function B(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var U=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,401)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),r(e),i(e)}))};o.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(L,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/DateTools",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/DateTools","/service-worker.js");W?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var c=n.headers.get("content-type");404===n.status||null!=c&&-1===c.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):B(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):B(t,e)}))}}(),U()}},[[400,1,2]]]);
//# sourceMappingURL=main.5e84ed77.chunk.js.map