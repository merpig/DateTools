(this.webpackJsonpdatetools=this.webpackJsonpdatetools||[]).push([[0],[,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var o=n(0),r=n(1),a=n.n(r),c=n(4),i=n.n(c),s=(n(10),n(2)),l=(n(11),function(e){var t=Object(r.useState)((new Date).toLocaleString()),n=Object(s.a)(t,2),a=n[0],c=n[1];return Object(r.useEffect)((function(){setInterval((function(){c((new Date).toLocaleString())}),1e3)}),[]),Object(o.jsx)("div",{className:"page-header",children:Object(o.jsx)("h1",{children:a})})}),d=function(e){return Object(o.jsx)("div",{})},u=function(e){return Object(o.jsx)("div",{className:"container",children:e.children})},h=(n(12),function(e){return Object(o.jsx)("div",{className:"calendar-cell",style:{minWidth:100/7+"%",maxWidth:100/7+"%",height:100/7+"%",backgroundColor:e.color,borderRadius:e.borderRadius,borderColor:e.borderColor},onClick:e.onClick,children:e.day})}),b=(n(13),["January","February","March","April","May","June","July","August","September","October","November","December"]),f=["S","M","T","W","T","F","S"];function g(e,t){var n=1,o=new Date(e,t+1,0).getDate(),r=new Date(e,t,1).getDay(),a=[];r>0&&(n-=r);for(var c=n;c<=o;c++){var i=new Date(e,t,c).getDay();a.push(new Date(e,t,c)),c===o&&i<6&&o++}return a}function j(e){return e.getFullYear().toString()+e.getMonth().toString()+e.getDate().toString()}var v=function(e){var t=Object(r.useState)(e.selected.getMonth()),n=Object(s.a)(t,2),a=n[0],c=n[1],i=Object(r.useState)(e.selected.getFullYear()),l=Object(s.a)(i,2),d=l[0],u=l[1];return Object(o.jsxs)("div",{className:"calendar-container",children:[Object(o.jsxs)("div",{className:"calendar-title-container",children:[Object(o.jsx)("div",{className:"calendar-left-arrow calendar-arrow",onClick:function(){a>0?c(a-1):(c(11),u(d-1))},children:"<"}),Object(o.jsx)("div",{className:"calendar-title",style:{width:"100%"},children:b[a]+", "+d}),Object(o.jsx)("div",{className:"calendar-right-arrow calendar-arrow",onClick:function(){a<11?c(a+1):(c(0),u(d+1))},children:">"})]}),Object(o.jsx)("div",{className:"calendar-body",children:Object(o.jsxs)("div",{className:"calendar-body-content",children:[f.map((function(e,t){return Object(o.jsx)(h,{day:e,color:"rgb(230,230,230)",onClick:function(){},borderRadius:"0%",borderColor:"rgb(230,230,230)"},t)})),g(d,a).map((function(t,n){return t.getMonth()!==a?Object(o.jsx)(h,{onClick:function(){}},n):Object(o.jsx)(h,{day:t.getDate(),borderColor:j(t)===j(e.selected)?"black":"",onClick:function(){return function(t,n,o){var r=b[n].toLowerCase().slice(0,3),a={id:"100"};"localhost"===window.location.host.split(":")[0]||"DateTools"===window.location.host.split(":")[0]?window.history.pushState(a,"DateTools","/#/".concat(t,"/").concat(r,"/").concat(o)):window.history.pushState(a,"DateTools","/DateTools/#/".concat(t,"/").concat(r,"/").concat(o)),e.setSelected(new Date([t.toString(),(n+1).toString(),o]))}(t.getFullYear(),t.getMonth(),t.getDate())}},n)}))]})})]})},w=(n(14),["January","February","March","April","May","June","July","August","September","October","November","December"]),p={jan:"January",feb:"February",mar:"March",apr:"April",may:"May",jun:"June",jul:"July",aug:"August",sep:"September",oct:"October",nov:"November",dec:"December"},O={parseUrlDate:function(e){var t,n=Object(s.a)(e,3),o=n[0],r=n[1],a=n[2],c="",i="";return!isNaN(o)&&parseInt(o)>=0?(c+=parseInt(o),p[r]?(i+=w.indexOf(p[r]),t=new Date(c,(parseInt(i)+1).toString(),0).getDate(),parseInt(a)>0&&parseInt(a)<=t?new Date(c,i,parseInt(a)):new Date):new Date):new Date},dateFromUrl:function(e){var t=e.hash;return O.parseUrlDate(t.split("/").slice(-3))}},m=O,y=function(){var e=Object(r.useState)(m.dateFromUrl(window.location)),t=Object(s.a)(e,2),n=t[0],a=t[1];return Object(r.useEffect)((function(){console.log("Selected day changed to "+n)}),[n]),Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(l,{}),Object(o.jsx)(d,{}),Object(o.jsx)(u,{children:Object(o.jsx)("div",{style:{width:"300px",height:"300px",margin:"auto"},children:Object(o.jsx)(v,{selected:n,setSelected:a})})})]})},D=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function x(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,o=t.getFID,r=t.getFCP,a=t.getLCP,c=t.getTTFB;n(e),o(e),r(e),a(e),c(e)}))};i.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(y,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/DateTools",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/DateTools","/service-worker.js");D?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var o=n.headers.get("content-type");404===n.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):x(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):x(t,e)}))}}(),S()}],[[15,1,2]]]);
//# sourceMappingURL=main.24c1c379.chunk.js.map