(this.webpackJsonpdatetools=this.webpackJsonpdatetools||[]).push([[0],{245:function(e,t,a){},379:function(e,t,a){},396:function(e,t,a){},397:function(e,t,a){},398:function(e,t,a){},399:function(e,t,a){},400:function(e,t,a){},424:function(e,t){},438:function(e,t){},440:function(e,t){},606:function(e,t,a){},607:function(e,t,a){},608:function(e,t,a){},610:function(e,t,a){},641:function(e,t){},642:function(e,t){},776:function(e,t,a){},777:function(e,t,a){},785:function(e,t,a){"use strict";a.r(t);var n=a(2),c=a(4),r=a.n(c),i=a(358),s=a.n(i),o=(a(379),a(11)),l=a.n(o),d=a(13),u=a(119),j=a(91),b=a.n(j),h=(a(396),["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]),O=function(e){var t=e.location,a=e.weather,r=Object(c.useState)((new Date).toLocaleString()),i=Object(d.a)(r,2),s=i[0],o=i[1],l=Object(c.useState)((new Date).getDay()),u=Object(d.a)(l,2),j=u[0],b=u[1];return Object(c.useEffect)((function(){setInterval((function(){o((new Date).toLocaleString()),j!==(new Date).getDay()&&b((new Date).getDay())}),1e3)}),[j]),Object(n.jsxs)("div",{className:"page-header",children:[Object(n.jsx)("h4",{children:h[j]+", "+s}),Object(n.jsx)("h6",{children:t}),Object(n.jsx)("h6",{children:a})]})},m=(a(397),function(e){var t=e.border,a=e.title,c=e.tabs,r=e.content,i=e.wholePage,s=e.underlineTitle;return Object(n.jsxs)("div",{className:"card-container-".concat(t?"border":"no-border"," container ").concat(i?"card-whole-page":""),children:[Object(n.jsx)("div",{className:"card-title-container",children:Object(n.jsx)("div",{className:"card-title",children:a})}),Object(n.jsx)("div",{className:s?"underline-card-title row":""}),c,Object(n.jsx)("div",{className:"card-body",children:r})]})}),f=(a(398),function(e){var t=e.day,a=e.onClick,c=e.selected;return Object(n.jsx)("div",{className:"calendar-cell ".concat(c),onClick:a,children:t})}),v=(a(245),["January","February","March","April","May","June","July","August","September","October","November","December"]),x=["S","M","T","W","T","F","S"];function p(e,t){var a=1,n=new Date(e,t+1,0).getDate(),c=new Date(e,t,1).getDay(),r=[];c>0&&(a-=c);for(var i=a;i<=n;i++){var s=new Date(e,t,i).getDay();r.push(new Date(e,t,i)),i===n&&s<6&&n++}return r}function g(e){return e.getFullYear().toString()+e.getMonth().toString()+e.getDate().toString()}var y=function(e){var t=e.selected,a=e.setSelected,r=Object(c.useState)(t.getMonth()),i=Object(d.a)(r,2),s=i[0],o=i[1],l=Object(c.useState)(t.getFullYear()),u=Object(d.a)(l,2),j=u[0],b=u[1];return Object(n.jsx)("div",{className:"calendar-wrapper",children:Object(n.jsxs)("div",{className:"calendar-container",children:[Object(n.jsxs)("div",{className:"calendar-title-container",children:[Object(n.jsx)("div",{className:"calendar-left-arrow calendar-arrow",onClick:function(){s>0?o(s-1):(o(11),b(j-1))},children:"<"}),Object(n.jsx)("div",{className:"calendar-title",children:v[s]+", "+j}),Object(n.jsx)("div",{className:"calendar-right-arrow calendar-arrow",onClick:function(){s<11?o(s+1):(o(0),b(j+1))},children:">"})]}),Object(n.jsx)("div",{className:"calendar-body",children:Object(n.jsxs)("div",{className:"calendar-body-content",children:[x.map((function(e,t){return Object(n.jsx)(f,{day:e,onClick:function(){},selected:"header-cell"},t)})),p(j,s).map((function(e,c){return e.getMonth()!==s?Object(n.jsx)(f,{onClick:function(){},selected:""},c):Object(n.jsx)(f,{day:e.getDate(),onClick:function(){return function(e,n,c){if(t.toLocaleDateString()!==new Date(e.toString(),n.toString(),c).toLocaleDateString()){var r=v[n].toLowerCase().slice(0,3),i={id:"100"};"localhost"===window.location.host.split(":")[0]||"DateTools"===window.location.host.split(":")[0]?window.history.pushState(i,"DateTools","/#/".concat(e,"/").concat(r,"/").concat(c)):window.history.pushState(i,"DateTools","/DateTools/#/".concat(e,"/").concat(r,"/").concat(c)),a(new Date(e.toString(),n.toString(),c))}}(e.getFullYear(),e.getMonth(),e.getDate())},selected:g(e)===g(t)?"active-cell":""},c)}))]})})]})})},w=(a(399),function(e){var t=e.active,a=e.onClick,c=e.tabs,r=e.tabSize;return Object(n.jsx)("div",{className:"tabs row",children:c.map((function(e){return Object(n.jsx)("div",{className:"col ".concat(r," ").concat(t===e?"active-tab":"tab"),onClick:function(){return a(e)},children:e},e)}))})});a(400);var N=function(e){var t,a=e.events,r=Object(c.useState)(!0),i=Object(d.a)(r,2),s=i[0],o=i[1];return Object(n.jsxs)("div",{className:"tab-list",children:[Object(n.jsx)("div",{className:"dh-filter",onClick:function(){return o(!s)},children:s?"\u25bc Reverse":"\u25b2 Reverse"}),Object(n.jsx)("div",{className:"tab-list-contents",children:Object(n.jsx)("ul",{children:s?(t=a,t.map((function(e,a){return t[t.length-1-a]}))).map((function(e,t){return Object(n.jsxs)("li",{children:[e.text,e.subText.length?Object(n.jsx)("ul",{children:e.subText.map((function(e){return Object(n.jsx)("li",{children:e},e)}))}):e.subText]},t)})):a.map((function(e,t){return Object(n.jsxs)("li",{children:[e.text,e.subText.length?Object(n.jsx)("ul",{children:e.subText.map((function(e){return Object(n.jsx)("li",{children:e},e)}))}):e.subText]},t)}))})}),Object(n.jsx)("div",{className:"page-selectors"}),Object(n.jsx)("div",{className:"page-info"})]})},D=a(359),S=a.n(D),k=(a(606),["January","February","March","April","May","June","July","August","September","October","November","December"]),M=["Events","Births","Deaths","Holidays and observances"],F=["Events","Births","Deaths","Holidays"];function T(){return(T=Object(u.a)(l.a.mark((function e(t,a,n){var c,r,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get(t);case 2:return c=e.sent,e.next=5,S.a.load(c.data.parse.text);case 5:r=e.sent,i={},r("h2").each((function(e,t){e>0&&e<=4&&(i[r(t).text().trim().replace("[edit]","")]=[])})),r("ul").each((function(e,t){if(t.prev&&t.prev.prev){var a=r(t.prev.prev).text().trim().replace("[edit]","");M.includes(a)&&r(t).children().each((function(e,t){i[a].push({text:t.children.filter((function(e){return[e.data,e.title]})).map((function(e){return e.attribs?e.children[0].data:e.data})).join(" ").replace(/\s+/g," "),href:t.children.filter((function(e){return!isNaN(parseInt(r(e).text()))})).map((function(e){return e.attribs?e.attribs.href:void 0}))[0],subText:t.children.filter((function(e){return"ul"===e.name})).length?t.children.filter((function(e){return"ul"===e.name}))[0].children.filter((function(e){return e.name})).map((function(e){return r(e).text()})):[]})}))}})),a(i),n(t,i);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var C=function(e){var t=e.month,a=e.day,r=(e.year,Object(c.useState)("Events")),i=Object(d.a)(r,2),s=i[0],o=i[1],l=Object(c.useState)(),u=Object(d.a)(l,2),j=u[0],b=u[1],h=Object(c.useState)([]),O=Object(d.a)(h,2),f=O[0],v=O[1],x=Object(c.useState)([]),p=Object(d.a)(x,2),g=p[0],y=p[1],D=Object(c.useState)([]),S=Object(d.a)(D,2),M=S[0],C=S[1],J=Object(c.useState)([]),A=Object(d.a)(J,2),E=A[0],I=A[1],Y=function(e){v(e.Events),y(e.Births),C(e.Deaths),I(e["Holidays and observances"])},W=function(e,t){};return Object(c.useEffect)((function(){var e="https://en.wikipedia.org/w/api.php?origin=*&action=parse&page=".concat(k[t-1],"_").concat(a,"&prop=text&formatversion=2&format=json");sessionStorage.getItem(e)?Y(JSON.parse(sessionStorage.getItem(e))):function(e,t,a){T.apply(this,arguments)}(e,Y,W)}),[a,t]),Object(c.useEffect)((function(){if(f.length){var e={Births:g,Deaths:M,Holidays:E,Events:f};b(Object(n.jsx)(N,{events:e[s]}))}}),[f,s,g,M,E]),Object(n.jsx)(m,{border:!0,title:"On ".concat(k[t-1]," ").concat(a," in history"),tabs:Object(n.jsx)(w,{active:s,onClick:o,tabs:F}),content:j})},J=(a(607),["January","February","March","April","May","June","July","August","September","October","November","December"]),A=function(e){for(var t=e.selected,a=e.setSelected,r=Object(c.useState)(t.getMonth()),i=Object(d.a)(r,2),s=i[0],o=i[1],l=Object(c.useState)(t.getFullYear()),u=Object(d.a)(l,2),j=u[0],b=u[1],h=Object(c.useState)(t.getDate()),O=Object(d.a)(h,2),m=O[0],f=O[1],v=[],x=1;x<=31;x++)v.push(x);return Object(n.jsxs)("div",{className:"date-search-container",children:[Object(n.jsx)("select",{defaultValue:J[t.getMonth()],onChange:function(e){return o(J.indexOf(e.target.value))},children:J.map((function(e,t){return Object(n.jsx)("option",{value:e,children:e},t)}))}),Object(n.jsx)("select",{defaultValue:t.getDate(),onChange:function(e){return f(parseInt(e.target.value))},children:v.filter((function(e){return e<=new Date(j,s+1,0).getDate()})).map((function(e,t){return Object(n.jsx)("option",{value:e,children:e},t)}))}),Object(n.jsx)("input",{type:"number",onChange:function(e){return parseInt(e.target.value)?b(e.target.value):null},defaultValue:t.getFullYear()}),Object(n.jsx)("button",{className:"search-button btn",onClick:function(){return"Invalid Date"!==new Date(j,s,m).toString()?a(new Date(j.toString(),s,m)):null},children:"Search"})]})},E=a(120);a(608);a(609);var I=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],Y=function(e){var t=E(new Date),a=E(e);return E.preciseDiff(t,a,!0)},W=function(e){var t=e.selected,a=Object(c.useState)(Y(t).seconds),r=Object(d.a)(a,2),i=r[0],s=r[1],o=Object(c.useState)(Y(t).minutes),l=Object(d.a)(o,2),u=l[0],j=l[1],b=Object(c.useState)(Y(t).hours),h=Object(d.a)(b,2),O=h[0],m=h[1],f=Object(c.useState)(Y(t).days),v=Object(d.a)(f,2),x=v[0],p=v[1],g=Object(c.useState)(Y(t).months),y=Object(d.a)(g,2),w=y[0],N=y[1],D=Object(c.useState)(Y(t).years),S=Object(d.a)(D,2),k=S[0],M=S[1],F=Object(c.useState)(Y(t).firstDateWasLater),T=Object(d.a)(F,2),C=T[0],J=T[1],A=Object(c.useState)([t.getDate(),t.getMonth(),t.getFullYear()].join("")),E=Object(d.a)(A,2),W=E[0],L=E[1],P=Object(c.useState)([(new Date).getDate(),(new Date).getMonth(),(new Date).getFullYear()].join("")),B=Object(d.a)(P,2),H=B[0],U=B[1],R=Object(c.useState)(Object(n.jsx)("div",{className:"row today-row",children:Object(n.jsx)("h2",{children:"Today"})})),z=Object(d.a)(R,2),V=z[0],_=z[1],G=Object(c.useState)("is"),$=Object(d.a)(G,2),q=$[0],K=$[1],Q=Object(c.useState)(""),X=Object(d.a)(Q,2),Z=X[0],ee=X[1];Object(c.useEffect)((function(){s(Y(t).seconds),j(Y(t).minutes),m(Y(t).hours),p(Y(t).days),N(Y(t).months),M(Y(t).years),J(Y(t).firstDateWasLater),L([t.getDate(),t.getMonth(),t.getFullYear()].join("")),U([(new Date).getDate(),(new Date).getMonth(),(new Date).getFullYear()].join("")),W===H?(K("is"),ee(""),_(Object(n.jsx)("div",{className:"row today-row",children:Object(n.jsx)("h2",{children:"Today"})}))):C?(K("was"),ee("in the past."),_(Object(n.jsx)("div",{className:"row past-row",children:Object(n.jsxs)("div",{className:"time-until-counter row",children:[Object(n.jsxs)("div",{className:"time-until-counter-block col-xl-4",children:[Object(n.jsx)("div",{className:"time-block-time",children:k}),Object(n.jsx)("div",{className:"time-block-type",children:1===k?"Year":"Years"})]}),Object(n.jsxs)("div",{className:"time-until-counter-block col-xl-4",children:[Object(n.jsx)("div",{className:"time-block-time",children:w}),Object(n.jsx)("div",{className:"time-block-type",children:1===w?"Month":"Months"})]}),Object(n.jsxs)("div",{className:"time-until-counter-block col-xl-4",children:[Object(n.jsx)("div",{className:"time-block-time",children:x}),Object(n.jsx)("div",{className:"time-block-type",children:1===x?"Day":"Days"})]}),Object(n.jsx)("div",{className:"past-row",children:Z})]})}))):(K("is"),ee("from now."),_(Object(n.jsx)("div",{className:"row future-row",children:Object(n.jsxs)("div",{className:"time-until-counter row",children:[Object(n.jsxs)("div",{className:"time-until-counter-block col-xl-4",children:[Object(n.jsx)("div",{className:"time-block-time",children:k}),Object(n.jsx)("div",{className:"time-block-type",children:1===k?"Year":"Years"})]}),Object(n.jsxs)("div",{className:"time-until-counter-block col-xl-4",children:[Object(n.jsx)("div",{className:"time-block-time",children:w}),Object(n.jsx)("div",{className:"time-block-type",children:1===w?"Month":"Months"})]}),Object(n.jsxs)("div",{className:"time-until-counter-block col-xl-4",children:[Object(n.jsx)("div",{className:"time-block-time",children:x}),Object(n.jsx)("div",{className:"time-block-type",children:1===x?"Day":"Days"})]}),Object(n.jsxs)("div",{className:"timer-row row",children:[Object(n.jsx)("div",{className:"time-dif col",children:O}),":",Object(n.jsx)("div",{className:"time-dif col",children:u}),":",Object(n.jsx)("div",{className:"time-dif col",children:i})]}),Object(n.jsx)("div",{className:"future-row",children:Z})]})})))}),[H,x,Z,C,O,u,w,i,t,W,k]);return Object(c.useEffect)((function(){return window.setInterval((function(){s(Y(t).seconds),j(Y(t).minutes),m(Y(t).hours)}),1e3),window.clearInterval()}),[]),Object(n.jsxs)("div",{className:"time-until-container",children:[Object(n.jsxs)("div",{className:"time-until-title",children:[t.getMonth()+1,"/",t.getDate(),"/",t.getFullYear()," ",q," a ",I[t.getDay()]]}),Object(n.jsx)("div",{className:"time-until-title-contents",children:V})]})},L=(a(610),["January","February","March","April","May","June","July","August","September","October","November","December"]),P={jan:"January",feb:"February",mar:"March",apr:"April",may:"May",jun:"June",jul:"July",aug:"August",sep:"September",oct:"October",nov:"November",dec:"December"},B={parseUrlDate:function(e){var t,a=Object(d.a)(e,3),n=a[0],c=a[1],r=a[2],i="",s="";return!isNaN(n)&&parseInt(n)>=0?(i+=parseInt(n),P[c]?(s+=L.indexOf(P[c]),t=new Date(i,(parseInt(s)+1).toString(),0).getDate(),parseInt(r)>0&&parseInt(r)<=t?new Date(i,s,parseInt(r)):new Date):new Date):new Date},dateFromUrl:function(e){var t=e.hash;return B.parseUrlDate(t.split("/").slice(-3))}},H=B,U=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],R=["January","February","March","April","May","June","July","August","September","October","November","December"],z=function(){var e=Object(c.useState)(H.dateFromUrl(window.location)),t=Object(d.a)(e,2),a=t[0],r=t[1];return Object(n.jsxs)("div",{className:"home",children:[Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)(A,{selected:a,setSelected:r}),Object(n.jsxs)("div",{className:"day-selected-title",children:["Showing date information for ",U[a.getDay()]," ",R[a.getMonth()]," ",a.getDate(),", ",a.getFullYear()]})]}),Object(n.jsxs)("div",{className:"row",children:[Object(n.jsxs)("div",{className:"col-md-4 date-handlers",children:[Object(n.jsx)("div",{className:"row",children:Object(n.jsx)(y,{selected:a,setSelected:r})}),Object(n.jsx)("div",{className:"row flex-fill-height",children:Object(n.jsx)("div",{className:"fill-remaining-space",children:Object(n.jsx)(W,{selected:a})})})]}),Object(n.jsx)("div",{className:"col-md additional-col-styling",children:Object(n.jsx)(m,{border:!0,title:"TOP 10 Music Playlist for ".concat(a.getMonth()+1,"/").concat(a.getDate(),"/").concat(a.getFullYear()),underlineTitle:!0,content:Object(n.jsx)("div",{className:"fill-space"})})}),Object(n.jsx)("div",{className:"col-xl",children:Object(n.jsx)("div",{className:"row",children:Object(n.jsx)(C,{selected:a,month:a.getMonth()+1,year:a.getFullYear(),day:a.getDate()})})})]})]})},V=a(79),_=["January","February","March","April","May","June","July","August","September","October","November","December"],G=["S","M","T","W","T","F","S"];function $(e,t){var a=1,n=new Date(e,t+1,0).getDate(),c=new Date(e,t,1).getDay(),r=[];c>0&&(a-=c);for(var i=a;i<=n;i++){var s=new Date(e,t,i).getDay();r.push(new Date(e,t,i)),i===n&&s<6&&n++}return r}var q=function(e){var t=e.month,a=e.year;return Object(n.jsx)("div",{className:"calendar-wrapper",children:Object(n.jsxs)("div",{className:"calendar-container",children:[Object(n.jsx)("div",{className:"calendar-title-container",children:Object(n.jsx)("div",{className:"calendar-title",children:_[t]})}),Object(n.jsx)("div",{className:"calendar-body",children:Object(n.jsxs)("div",{className:"calendar-body-content",children:[G.map((function(e,t){return Object(n.jsx)(f,{day:e,onClick:function(){},selected:"header-cell"},t)})),$(a,t).map((function(e,a){return e.getMonth()!==t?Object(n.jsx)(f,{onClick:function(){},selected:""},a):Object(n.jsx)(f,{day:e.getDate(),onClick:function(){},selected:""},a)}))]})})]})})},K=a(226),Q=(a(776),["January","February","March","April","May","June","July","August","September","October","November","December"]),X=V.e.create({page:{flexDirection:"row",backgroundColor:"#E4E4E4"},section:{margin:10,padding:10,flexGrow:1}}),Z=function(e){var t=Object(c.useState)(void 0),a=Object(d.a)(t,2),r=a[0],i=a[1],s=Object(c.useRef)(0);return Object(c.useEffect)((function(){r||Object(K.a)(s.current).then((function(e){var t=new Image;t.src=e,i(Object(n.jsx)(V.b,{src:t.src}))})).catch((function(e){console.error("oops, something went wrong!",e)}))}),[r]),[Object(n.jsx)("div",{id:"calendar-container",children:Object(n.jsxs)("div",{className:"inner-calendar-container",ref:s,children:[Object(n.jsx)("div",{className:"calendar-title-top",children:"2020"}),Object(n.jsx)("div",{className:"row",children:Q.map((function(e,t){return Object(n.jsx)("div",{className:"col-4",children:Object(n.jsx)(q,{month:Q.indexOf(e),year:"2020"},e+t)},e)}))})]})},"calendar-container"),Object(n.jsx)(V.c,{children:Object(n.jsx)(V.a,{children:Object(n.jsx)(V.d,{size:"A4",style:X.page,children:r})})},"pdf-viewer")]};a(777);function ee(){return(ee=Object(u.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=function(e){console.log(e)},navigator.geolocation&&navigator.geolocation.getCurrentPosition(t,a);case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var te=function(){var e=Object(c.useState)("Home"),t=Object(d.a)(e,2),a=t[0],r=t[1],i=Object(c.useState)(),s=Object(d.a)(i,2),o=s[0],j=s[1],h=Object(c.useState)(),f=Object(d.a)(h,2),v=f[0],x=f[1];Object(c.useEffect)((function(){function e(){return(e=Object(u.a)(l.a.mark((function e(t){var a,n,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!o){e.next=2;break}return e.abrupt("return");case 2:return a="https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=".concat(t.coords.latitude,"&longitude=").concat(t.coords.longitude,"&localityLanguage=en"),e.next=5,b.a.get(a);case 5:return n=e.sent,e.next=8,b.a.get("https://api.openweathermap.org/data/2.5/weather?lat=".concat(t.coords.latitude,"&lon=").concat(t.coords.longitude,"&appid=123c202ae147ce1a36f513e0a54fd90f"));case 8:(c=e.sent).data.sys.country=x([Math.floor(9*c.data.main.temp/5-459.67)+"\xb0F",c.data.weather[0].main,"H:"+Math.floor(9*c.data.main.temp_max/5-459.67)+"\xb0F","L:"+Math.floor(9*c.data.main.temp_min/5-459.67)+"\xb0F"].join(" ")),j([n.data.city,n.data.principalSubdivision].join(", "));case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}o||function(e){ee.apply(this,arguments)}((function(t){return e.apply(this,arguments)}))}),[o]);var p={Home:Object(n.jsx)(z,{}),Calendar:Object(n.jsx)(Z,{})};return Object(n.jsx)("div",{className:"App",children:Object(n.jsx)(m,{border:!1,title:Object(n.jsx)(O,{location:o,weather:v}),tabs:Object(n.jsx)(w,{active:a,onClick:r,tabs:Object.keys(p),tabSize:"large-tab"}),content:p[a],wholePage:!0})})},ae=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ne(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var ce=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,786)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;a(e),n(e),c(e),r(e),i(e)}))},re=a(372),ie=a(27);console.log("/DateTools"),s.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(re.a,{basename:"/DateTools",children:Object(n.jsxs)(ie.c,{children:[Object(n.jsx)(ie.a,{exact:!0,path:"/",component:te}),Object(n.jsx)(ie.a,{exact:!0,path:"/home",component:te}),Object(n.jsx)(ie.a,{exact:!0,path:"/home/:year/:month/:day",component:te}),Object(n.jsx)(ie.a,{exact:!0,path:"/calendar",component:te})]})})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/DateTools",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/DateTools","/service-worker.js");ae?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):ne(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):ne(t,e)}))}}(),ce()}},[[785,1,2]]]);
//# sourceMappingURL=main.50615293.chunk.js.map