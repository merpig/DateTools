(this.webpackJsonpdatetools=this.webpackJsonpdatetools||[]).push([[0],{189:function(e,t,a){},272:function(e,t,a){},290:function(e,t,a){},291:function(e,t,a){},292:function(e,t,a){},293:function(e,t,a){},294:function(e,t,a){},310:function(e,t){},312:function(e,t){},322:function(e,t){},350:function(e,t,a){},351:function(e,t,a){},352:function(e,t,a){},353:function(e,t,a){},382:function(e,t){},383:function(e,t){},517:function(e,t,a){},518:function(e,t,a){},523:function(e,t,a){"use strict";a.r(t);var n=a(2),c=a(4),r=a.n(c),s=a(252),i=a.n(s),o=(a(272),a(11)),l=a.n(o),d=a(13),u=a(104),j=a(85),b=a.n(j),h=a(71);a(289);var m={jan:"January",feb:"February",mar:"March",apr:"April",may:"May",jun:"June",jul:"July",aug:"August",sep:"September",oct:"October",nov:"November",dec:"December"},O={parseUrlDate:function(e){var t,a=Object(d.a)(e,3),n=a[0],c=a[1],r=a[2],s="",i="";return!isNaN(n)&&parseInt(n)>=0?(s+=parseInt(n),m[c]?(i+=O.months.indexOf(m[c]),t=new Date(s,(parseInt(i)+1).toString(),0).getDate(),parseInt(r)>0&&parseInt(r)<=t?new Date(s,i,parseInt(r)):new Date):new Date):new Date},dateFromUrl:function(e){var t=e.pathname;return O.parseUrlDate(t.split("/").slice(-3))},calendarDataFromUrl:function(e){e.pathname},tabFromUrl:function(e){return"calendar"===e.pathname.split("/")[1]?"Calendar":"Home"},timeDiff:function(e){var t=h(new Date),a=h(e);return h.preciseDiff(t,a,!0)},timeDiffDays:function(e){var t=h(new Date),a=h(e);return t.diff(a,"days")},months:["January","February","March","April","May","June","July","August","September","October","November","December"],days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},f=O,v=(a(290),function(e){e.selected;var t=e.location,a=e.weather,r=Object(c.useState)((new Date).toLocaleString()),s=Object(d.a)(r,2),i=s[0],o=s[1],l=Object(c.useState)((new Date).getDay()),u=Object(d.a)(l,2),j=u[0],b=u[1];return Object(c.useEffect)((function(){setInterval((function(){o((new Date).toLocaleString()),j!==(new Date).getDay()&&b((new Date).getDay())}),1e3)}),[j,i]),Object(n.jsxs)("div",{className:"page-header",children:[Object(n.jsx)("h4",{children:f.days[j]+", "+i}),Object(n.jsx)("h6",{children:t}),Object(n.jsx)("h6",{children:a})]})}),g=(a(291),function(e){var t=e.border,a=e.title,c=e.tabs,r=e.content,s=e.wholePage,i=e.underlineTitle;return Object(n.jsxs)("div",{className:"card-container-".concat(t?"border":"no-border"," container ").concat(s?"card-whole-page":""),children:[Object(n.jsx)("div",{className:"card-title-container",children:Object(n.jsx)("div",{className:"card-title",children:a})}),Object(n.jsx)("div",{className:i?"underline-card-title row":""}),c,Object(n.jsx)("div",{className:"card-body",children:r})]})}),x=(a(292),function(e){var t=e.day,a=e.onClick,c=e.selected;return Object(n.jsx)("div",{className:"calendar-cell ".concat(c),onClick:a,children:t})}),p=(a(189),["January","February","March","April","May","June","July","August","September","October","November","December"]),w=["S","M","T","W","T","F","S"];function y(e,t){var a=1,n=new Date(e,t+1,0).getDate(),c=new Date(e,t,1).getDay(),r=[];c>0&&(a-=c);for(var s=a;s<=n;s++){var i=new Date(e,t,s).getDay();r.push(new Date(e,t,s)),s===n&&i<6&&n++}return r}function D(e){return e.getFullYear().toString()+e.getMonth().toString()+e.getDate().toString()}var N=function(e){var t=e.selected,a=e.setSelected,r=Object(c.useState)(t.getMonth()),s=Object(d.a)(r,2),i=s[0],o=s[1],l=Object(c.useState)(t.getFullYear()),u=Object(d.a)(l,2),j=u[0],b=u[1];return Object(n.jsx)("div",{className:"calendar-wrapper",children:Object(n.jsxs)("div",{className:"calendar-container",children:[Object(n.jsxs)("div",{className:"calendar-title-container",children:[Object(n.jsx)("div",{className:"calendar-left-arrow calendar-arrow",onClick:function(){i>0?o(i-1):(o(11),b(j-1))},children:"<"}),Object(n.jsx)("div",{className:"calendar-title",children:p[i]+", "+j}),Object(n.jsx)("div",{className:"calendar-right-arrow calendar-arrow",onClick:function(){i<11?o(i+1):(o(0),b(j+1))},children:">"})]}),Object(n.jsx)("div",{className:"calendar-body",children:Object(n.jsxs)("div",{className:"calendar-body-content",children:[w.map((function(e,t){return Object(n.jsx)(x,{day:e,onClick:function(){},selected:"header-cell"},t)})),y(j,i).map((function(e,c){return e.getMonth()!==i?Object(n.jsx)(x,{onClick:function(){},selected:""},c):Object(n.jsx)(x,{day:e.getDate(),onClick:function(){return function(e,n,c){if(t.toLocaleDateString()!==new Date(e.toString(),n.toString(),c).toLocaleDateString()){var r=p[n].toLowerCase().slice(0,3),s={id:"100"};"localhost"===window.location.host.split(":")[0]||"DateTools"===window.location.host.split(":")[0]?window.history.pushState(s,"DateTools","/home/".concat(e,"/").concat(r,"/").concat(c)):window.history.pushState(s,"DateTools","/DateTools/home/".concat(e,"/").concat(r,"/").concat(c)),a(new Date(e.toString(),n.toString(),c))}}(e.getFullYear(),e.getMonth(),e.getDate())},selected:D(e)===D(t)?"active-cell":""},c)}))]})})]})})},S=(a(293),function(e){var t=e.active,a=e.onClick,c=e.tabs,r=e.tabSize;return Object(n.jsx)("div",{className:"tabs row",children:c.map((function(e){return Object(n.jsx)("div",{className:"col ".concat(r," ").concat(t===e?"active-tab":"tab"),onClick:function(){return a(e)},children:e},e)}))})});a(294);var k=function(e){var t,a=e.events,r=Object(c.useState)(!0),s=Object(d.a)(r,2),i=s[0],o=s[1];return Object(n.jsxs)("div",{className:"tab-list",children:[Object(n.jsx)("div",{className:"dh-filter",onClick:function(){return o(!i)},children:i?"\u25bc Reverse":"\u25b2 Reverse"}),Object(n.jsx)("div",{className:"tab-list-contents",children:Object(n.jsx)("ul",{children:i?(t=a,t.map((function(e,a){return t[t.length-1-a]}))).map((function(e,t){return Object(n.jsxs)("li",{children:[e.text,e.subText.length?Object(n.jsx)("ul",{children:e.subText.map((function(e){return Object(n.jsx)("li",{children:e},e)}))}):e.subText]},t)})):a.map((function(e,t){return Object(n.jsxs)("li",{children:[e.text,e.subText.length?Object(n.jsx)("ul",{children:e.subText.map((function(e){return Object(n.jsx)("li",{children:e},e)}))}):e.subText]},t)}))})}),Object(n.jsx)("div",{className:"page-selectors"}),Object(n.jsx)("div",{className:"page-info"})]})},M=a(163),T=a.n(M),F=(a(350),f.months),C=["Events","Births","Deaths","Holidays and observances"],E=["Events","Births","Deaths","Holidays"];function J(){return(J=Object(u.a)(l.a.mark((function e(t,a,c){var r,s,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get(t);case 2:return r=e.sent,e.next=5,T.a.load(r.data.parse.text);case 5:s=e.sent,i={},s("h2").each((function(e,t){e>0&&e<=4&&(i[s(t).text().trim().replace("[edit]","")]=[])})),s("ul").each((function(e,t){if(t.prev&&t.prev.prev){var a=s(t.prev.prev).text().trim().replace("[edit]","");C.includes(a)&&s(t).children().each((function(e,t){i[a].push({text:t.children.filter((function(e){return[e.data,e.title]})).map((function(e){return"a"===e.name?Object(n.jsx)("a",{href:"https://wikipedia.org".concat(e.attribs.href),children:s(e).text()},"https://wikipedia.org".concat(e.attribs.href)):s(e).text()})),subText:t.children.filter((function(e){return"ul"===e.name})).length?t.children.filter((function(e){return"ul"===e.name}))[0].children.filter((function(e){return e.name})).map((function(e){return"a"===e.name?Object(n.jsx)("a",{href:"https://wikipedia.org".concat(e.attribs.href),children:s(e).text()},"https://wikipedia.org".concat(e.attribs.href)):s(e).text()})):[]})}))}})),a(i),c(t,i);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var Y=function(e){var t=e.month,a=e.day,r=Object(c.useState)("Events"),s=Object(d.a)(r,2),i=s[0],o=s[1],l=Object(c.useState)(),u=Object(d.a)(l,2),j=u[0],b=u[1],h=Object(c.useState)([]),m=Object(d.a)(h,2),O=m[0],f=m[1],v=Object(c.useState)([]),x=Object(d.a)(v,2),p=x[0],w=x[1],y=Object(c.useState)([]),D=Object(d.a)(y,2),N=D[0],M=D[1],T=Object(c.useState)([]),C=Object(d.a)(T,2),Y=C[0],I=C[1],A=function(e){f(e.Events),w(e.Births),M(e.Deaths),I(e["Holidays and observances"])},W=function(e,t){};return Object(c.useEffect)((function(){var e="https://en.wikipedia.org/w/api.php?origin=*&action=parse&page=".concat(F[t-1],"_").concat(a,"&prop=text&formatversion=2&format=json");sessionStorage.getItem(e)?A(JSON.parse(sessionStorage.getItem(e))):function(e,t,a){J.apply(this,arguments)}(e,A,W)}),[a,t]),Object(c.useEffect)((function(){if(O.length){var e={Births:p,Deaths:N,Holidays:Y,Events:O};b(Object(n.jsx)(k,{events:e[i]}))}}),[O,i,p,N,Y]),Object(n.jsx)(g,{border:!0,title:"On ".concat(F[t-1]," ").concat(a," in history"),tabs:Object(n.jsx)(S,{active:i,onClick:o,tabs:E}),content:j})},I=(a(351),["January","February","March","April","May","June","July","August","September","October","November","December"]),A=function(e){for(var t=e.selected,a=e.setSelected,r=Object(c.useState)(t.getMonth()),s=Object(d.a)(r,2),i=s[0],o=s[1],l=Object(c.useState)(t.getFullYear()),u=Object(d.a)(l,2),j=u[0],b=u[1],h=Object(c.useState)(t.getDate()),m=Object(d.a)(h,2),O=m[0],f=m[1],v=[],g=1;g<=31;g++)v.push(g);return Object(n.jsxs)("div",{className:"date-search-container",children:[Object(n.jsx)("select",{defaultValue:I[t.getMonth()],onChange:function(e){return o(I.indexOf(e.target.value))},children:I.map((function(e,t){return Object(n.jsx)("option",{value:e,children:e},t)}))}),Object(n.jsx)("select",{defaultValue:t.getDate(),onChange:function(e){return f(parseInt(e.target.value))},children:v.filter((function(e){return e<=new Date(j,i+1,0).getDate()})).map((function(e,t){return Object(n.jsx)("option",{value:e,children:e},t)}))}),Object(n.jsx)("input",{type:"number",className:"yearInput",onChange:function(e){return parseInt(e.target.value)?b(e.target.value):null},defaultValue:t.getFullYear()}),Object(n.jsx)("button",{className:"search-button btn",onClick:function(){return"Invalid Date"!==new Date(j,i,O).toString()?a(new Date(j.toString(),i,O)):null},children:"Search"})]})},W=(a(352),f.timeDiff),L=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],U=function(e){var t=e.selected,a=Object(c.useState)(W(t).seconds),r=Object(d.a)(a,2),s=r[0],i=r[1],o=Object(c.useState)(W(t).minutes),l=Object(d.a)(o,2),u=l[0],j=l[1],b=Object(c.useState)(W(t).hours),h=Object(d.a)(b,2),m=h[0],O=h[1],v=Object(c.useState)(W(t).days),g=Object(d.a)(v,2),x=g[0],p=g[1],w=Object(c.useState)(W(t).months),y=Object(d.a)(w,2),D=y[0],N=y[1],S=Object(c.useState)(W(t).years),k=Object(d.a)(S,2),M=k[0],T=k[1],F=Object(c.useState)(W(t).firstDateWasLater),C=Object(d.a)(F,2),E=C[0],J=C[1],Y=Object(c.useState)([t.getDate(),t.getMonth(),t.getFullYear()].join("")),I=Object(d.a)(Y,2),A=I[0],U=I[1],B=Object(c.useState)([(new Date).getDate(),(new Date).getMonth(),(new Date).getFullYear()].join("")),P=Object(d.a)(B,2),H=P[0],R=P[1],z=Object(c.useState)(Object(n.jsx)("div",{className:"row today-row",children:Object(n.jsx)("h2",{children:"Today"})})),V=Object(d.a)(z,2),G=V[0],$=V[1],_=Object(c.useState)("is"),q=Object(d.a)(_,2),K=q[0],Q=q[1],X=Object(c.useState)(""),Z=Object(d.a)(X,2),ee=Z[0],te=Z[1];Object(c.useEffect)((function(){i(W(t).seconds),j(W(t).minutes),O(W(t).hours),p(W(t).days),N(W(t).months),T(W(t).years),J(W(t).firstDateWasLater),U([t.getDate(),t.getMonth(),t.getFullYear()].join("")),R([(new Date).getDate(),(new Date).getMonth(),(new Date).getFullYear()].join(""));var e=f.timeDiffDays(t);A===H?(Q("is"),te(""),$(Object(n.jsx)("div",{className:"row today-row",children:Object(n.jsx)("h2",{children:"Today"})}))):E?(Q("was"),te("in the past."),$(Object(n.jsx)("div",{className:"row past-row",children:Object(n.jsxs)("div",{className:"time-until-counter row",children:[Object(n.jsxs)("div",{className:"time-until-counter-block col-xl-4",children:[Object(n.jsx)("div",{className:"time-block-time",children:M}),Object(n.jsx)("div",{className:"time-block-type",children:1===M?"Year":"Years"})]}),Object(n.jsxs)("div",{className:"time-until-counter-block col-xl-4",children:[Object(n.jsx)("div",{className:"time-block-time",children:D}),Object(n.jsx)("div",{className:"time-block-type",children:1===D?"Month":"Months"})]}),Object(n.jsxs)("div",{className:"time-until-counter-block col-xl-4",children:[Object(n.jsx)("div",{className:"time-block-time",children:x}),Object(n.jsx)("div",{className:"time-block-type",children:1===x?"Day":"Days"})]}),Object(n.jsxs)("div",{className:"past-row",children:["a total of ",e," ",1===e?"day":"days"," ago."]})]})}))):(Q("is"),te("in the future."),$(Object(n.jsx)("div",{className:"row future-row",children:Object(n.jsxs)("div",{className:"time-until-counter row",children:[Object(n.jsxs)("div",{className:"time-until-counter-block col-xl-4",children:[Object(n.jsx)("div",{className:"time-block-time",children:M}),Object(n.jsx)("div",{className:"time-block-type",children:1===M?"Year":"Years"})]}),Object(n.jsxs)("div",{className:"time-until-counter-block col-xl-4",children:[Object(n.jsx)("div",{className:"time-block-time",children:D}),Object(n.jsx)("div",{className:"time-block-type",children:1===D?"Month":"Months"})]}),Object(n.jsxs)("div",{className:"time-until-counter-block col-xl-4",children:[Object(n.jsx)("div",{className:"time-block-time",children:x}),Object(n.jsx)("div",{className:"time-block-type",children:1===x?"Day":"Days"})]}),Object(n.jsxs)("div",{className:"timer-row row",children:[Object(n.jsx)("div",{className:"time-dif col",children:m}),":",Object(n.jsx)("div",{className:"time-dif col",children:u}),":",Object(n.jsx)("div",{className:"time-dif col",children:s})]}),Object(n.jsx)("div",{className:"future-row",children:ee})]})})))}),[H,x,ee,E,m,u,D,s,t,A,M]);return Object(c.useEffect)((function(){return window.setInterval((function(){i(W(t).seconds),j(W(t).minutes),O(W(t).hours)}),1e3),window.clearInterval()}),[]),Object(n.jsxs)("div",{className:"time-until-container",children:[Object(n.jsxs)("div",{className:"time-until-title",children:[t.getMonth()+1,"/",t.getDate(),"/",t.getFullYear()," ",K," a ",L[t.getDay()]]}),Object(n.jsx)("div",{className:"time-until-title-contents",children:G})]})};var B=function(e){var t,a=e.selected,r=Object(c.useState)(!1),s=Object(d.a)(r,2),i=s[0],o=s[1];return Object(c.useEffect)((function(){}),[a]),Object(n.jsx)(g,{border:!0,title:"TOP 10 Music Playlist for ".concat(a.getMonth()+1,"/").concat(a.getDate(),"/").concat(a.getFullYear()),underlineTitle:!0,content:Object(n.jsxs)("div",{className:"tab-list",children:[Object(n.jsx)("div",{className:"dh-filter",onClick:function(){return o(!i)},children:i?"\u25b2 Reverse":"\u25bc Reverse"}),Object(n.jsx)("div",{className:"tab-list-contents",children:Object(n.jsx)("ul",{children:i?(t=[1,2,3,4,5,6,7,8,9,10],t.map((function(e,a){return t[t.length-1-a]}))).map((function(e,t){return Object(n.jsx)("li",{children:e},t)})):[1,2,3,4,5,6,7,8,9,10].map((function(e,t){return Object(n.jsx)("li",{children:e},t)}))})})]})})},P=(a(353),["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]),H=["January","February","March","April","May","June","July","August","September","October","November","December"],R=function(e){var t=e.selected,a=e.setSelected;return Object(c.useEffect)((function(){var e=f.months[t.getMonth()].toLowerCase().slice(0,3),a={id:"100"};"localhost"===window.location.host.split(":")[0]||"DateTools"===window.location.host.split(":")[0]?window.history.pushState(a,"DateTools","/home/".concat(t.getFullYear(),"/").concat(e,"/").concat(t.getDate())):window.history.pushState(a,"DateTools","/DateTools/home/".concat(t.getFullYear(),"/").concat(e,"/").concat(t.getDate()))}),[t]),Object(n.jsxs)("div",{className:"home",children:[Object(n.jsx)("div",{className:"home-header row",children:"Use the date picker and other date tools to learn more about what happened on the selected day."}),Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)(A,{selected:t,setSelected:a}),Object(n.jsxs)("div",{className:"day-selected-title",children:["Showing date information for ",Object(n.jsx)("br",{}),P[t.getDay()]," ",H[t.getMonth()]," ",t.getDate(),", ",t.getFullYear()]})]}),Object(n.jsxs)("div",{className:"row",children:[Object(n.jsxs)("div",{className:"col-md-4 date-handlers",children:[Object(n.jsx)("div",{className:"row additional-calendar-row-padding",children:Object(n.jsx)(N,{selected:t,setSelected:a})}),Object(n.jsx)("div",{className:"row flex-fill-height",children:Object(n.jsx)("div",{className:"fill-remaining-space",children:Object(n.jsx)(U,{selected:t})})})]}),Object(n.jsx)("div",{className:"col-md additional-col-styling",children:Object(n.jsx)(B,{selected:t})}),Object(n.jsx)("div",{className:"col-xl",children:Object(n.jsx)("div",{className:"row additional-row-styling",children:Object(n.jsx)(Y,{selected:t,month:t.getMonth()+1,year:t.getFullYear(),day:t.getDate()})})})]})]})},z=a(72),V=["January","February","March","April","May","June","July","August","September","October","November","December"],G=["S","M","T","W","T","F","S"];function $(e,t){var a=1,n=new Date(e,t+1,0).getDate(),c=new Date(e,t,1).getDay(),r=[];c>0&&(a-=c);for(var s=a;s<=n;s++){var i=new Date(e,t,s).getDay();r.push(new Date(e,t,s)),s===n&&i<6&&n++}return r}var _=function(e){var t=e.month,a=e.year;return Object(n.jsx)("div",{className:"calendar-wrapper",children:Object(n.jsxs)("div",{className:"calendar-container",children:[Object(n.jsx)("div",{className:"calendar-title-container",children:Object(n.jsx)("div",{className:"calendar-title",children:V[t]})}),Object(n.jsx)("div",{className:"calendar-body",children:Object(n.jsxs)("div",{className:"calendar-body-content",children:[G.map((function(e,t){return Object(n.jsx)(x,{day:e,onClick:function(){},selected:"header-cell"},t)})),$(a,t).map((function(e,a){return e.getMonth()!==t?Object(n.jsx)(x,{onClick:function(){},selected:""},a):Object(n.jsx)(x,{day:e.getDate(),onClick:function(){},selected:""},a)}))]})})]})})},q=a(170),K=(a(517),["January","February","March","April","May","June","July","August","September","October","November","December"]),Q=z.e.create({page:{flexDirection:"row",backgroundColor:"#E4E4E4"},section:{margin:10,padding:10,flexGrow:1}}),X=function(e){var t=Object(c.useState)(void 0),a=Object(d.a)(t,2),r=a[0],s=a[1],i=Object(c.useRef)(0);return Object(c.useEffect)((function(){r||Object(q.a)(i.current).then((function(e){var t=new Image;t.src=e,s(Object(n.jsx)(z.b,{src:t.src}))})).catch((function(e){console.error("oops, something went wrong!",e)}))}),[r]),Object(c.useEffect)((function(){var e={id:"100"};"localhost"===window.location.host.split(":")[0]||"DateTools"===window.location.host.split(":")[0]?window.history.pushState(e,"DateTools","/calendar/"):window.history.pushState(e,"DateTools","/DateTools/calendar/")}),[]),[Object(n.jsx)("div",{id:"calendar-container",children:Object(n.jsxs)("div",{className:"inner-calendar-container",ref:i,children:[Object(n.jsx)("div",{className:"calendar-title-top",children:"2020"}),Object(n.jsx)("div",{className:"row",children:K.map((function(e,t){return Object(n.jsx)("div",{className:"col-4",children:Object(n.jsx)(_,{month:K.indexOf(e),year:"2020"},e+t)},e)}))})]})},"calendar-container"),Object(n.jsx)(z.c,{children:Object(n.jsx)(z.a,{children:Object(n.jsx)(z.d,{size:"A4",style:Q.page,children:r})})},"pdf-viewer")]};a(518);var Z=function(){var e=Object(c.useState)(f.dateFromUrl(window.location)),t=Object(d.a)(e,2),a=t[0],r=t[1],s=Object(c.useState)(f.tabFromUrl(window.location)),i=Object(d.a)(s,2),o=i[0],l=i[1],u=Object(c.useState)(),j=Object(d.a)(u,2),b=j[0],h=(j[1],Object(c.useState)()),m=Object(d.a)(h,2),O=m[0];m[1];Object(c.useEffect)((function(){document.getElementById("meta-title").innerHTML=a.toLocaleString().split(", ")[0];var e=a.getDate(),t=f.days[a.getDay()],n=f.months[a.getMonth()],c=f.timeDiff(a),r=c.days,s=c.months,i=c.years,o=c.firstDateWasLater,l=f.timeDiffDays(a),d=a.getMonth()+1,u=a.getFullYear().toString(),j=[a.getDate(),a.getMonth(),a.getFullYear()].join(""),b=[(new Date).getDate(),(new Date).getMonth(),(new Date).getFullYear()].join(""),h="".concat(e," ").concat(n,", ").concat(u," (").concat(u,"/").concat(d,"/").concat(e," or ").concat(e,"-").concat(d,"-").concat(u[u.length-2]).concat(u[u.length-1],")");document.getElementById("meta-description").content=j===b?"Today is ".concat(h,", ").concat(t,". Use the date picker and other date tools to learn more about what happened on the selected day. {president} was the US president and {artist} - {song} was the most popular song."):o?"".concat(h," was ").concat(t," ").concat(i," ").concat(1===i?"year":"years",", ").concat(s," ").concat(1===s?"month":"months"," and ").concat(r," ").concat(1===r?"day":"days"," ago, a total of ").concat(l," ").concat(1===l?"day":"days"," ago."):"There are ".concat(i," ").concat(1===i?"year":"years",", ").concat(s," ").concat(1===s?"month":"months"," and ").concat(r," ").concat(1===r?"day":"days"," until ").concat(h,", ").concat(t,". By then we are expecting {predictions}.")}),[a]),Object(c.useEffect)((function(){}),[b]);var x={Home:Object(n.jsx)(R,{selected:a,setSelected:r}),Calendar:Object(n.jsx)(X,{})};return Object(n.jsx)("div",{className:"App",children:Object(n.jsx)(g,{border:!1,title:Object(n.jsx)(v,{selected:a,location:b,weather:O}),tabs:Object(n.jsx)(S,{active:o,onClick:l,tabs:Object.keys(x),tabSize:"large-tab"}),content:x[o],wholePage:!0})})},ee=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function te(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var ae=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,524)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),r(e),s(e)}))},ne=a(265),ce=a(27);i.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(ne.a,{basename:"/DateTools",children:Object(n.jsx)(ce.c,{children:Object(n.jsx)(ce.a,{exact:!0,path:"*",component:Z})})})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/DateTools",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/DateTools","/service-worker.js");ee?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):te(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):te(t,e)}))}}(),ae()}},[[523,1,2]]]);
//# sourceMappingURL=main.ee4f5d94.chunk.js.map