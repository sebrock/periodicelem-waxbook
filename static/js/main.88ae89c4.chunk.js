(this["webpackJsonpperiodicelem-waxbook"]=this["webpackJsonpperiodicelem-waxbook"]||[]).push([[0],{58:function(e,t,c){},59:function(e,t,c){"use strict";c.r(t);var n,r=c(1),a=c.n(r),s=c(27),i=c.n(s),o=c(4),l=c(30),u=c(9),j=c.n(u),d=c(11),b=c(17),h="https://wax.api.atomicassets.io/atomicassets/v1/",p="periodicelem",m=function(){var e=Object(b.a)(j.a.mark((function e(t,c){var n,r,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(h,"accounts/").concat(c.user,"/").concat(p));case 2:return n=e.sent,e.next=5,n.json();case 5:r=e.sent,a=r.data,t((function(e){return Object(d.a)(Object(d.a)({},e),{},{data:a?a.templates:[]})}));case 8:case"end":return e.stop()}}),e)})));return function(t,c){return e.apply(this,arguments)}}(),O=function(){var e=Object(b.a)(j.a.mark((function e(){var t,c,n,r,a,s=arguments;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=s.length>0&&void 0!==s[0]?s[0]:8,c=s.length>1?s[1]:void 0,e.next=4,fetch("".concat(h,"templates?collection_name=").concat(p,"&page=").concat(t,"&limit=").concat(8,"&order=asc&sort=created"));case 4:return n=e.sent,e.next=7,n.json();case 7:r=e.sent,a=r.data,c(a);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=function(){var e=Object(b.a)(j.a.mark((function e(t,c){var n,r,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(h,"templates?collection_name=").concat(p,"&page=1&order=asc&sort=created"));case 3:return n=e.sent,e.next=6,n.json();case 6:r=e.sent,a=r.data,t(a),c(Object(l.a)(Array(Math.ceil(a.length/8)).keys())),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t,c){return e.apply(this,arguments)}}(),f=c(2),g=c(16),v=c.n(g),y=c(0),w=function(e){var t=e.timing,c=e.setCopy,n=e.copy,a=e.children;return Object(r.useEffect)((function(){n&&setTimeout((function(){return c({copy:!1})}),t)}),[n,c,t]),Object(y.jsx)("section",{className:"donate ".concat(n?"donate--show":null),children:Object(y.jsx)("span",{style:{background:"#ad514d",padding:"10px",borderRadius:"5px"},children:a})})},k=function(e){e.params;var t=e.user,c=Object(r.useState)({copy:null}),n=Object(o.a)(c,2),a=n[0],s=n[1];return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsxs)("section",{className:"share--block",children:[Object(y.jsxs)("p",{className:"share--description",style:{fontSize:".75rem",color:"white"},children:["Share your Sticker Book:"," "]}),Object(y.jsx)("input",{type:"text",defaultValue:"".concat(window.location.origin,"/user/").concat(t)}),Object(y.jsx)(v.a,{text:"".concat(window.location.origin,"/user/").concat(t),onCopy:function(){return s({copy:!a.copy})},children:Object(y.jsx)("span",{role:"img","aria-label":"clip-to-clipboard",style:{cursor:"pointer",fontSize:"1rem"},children:"\ud83d\udccb"})})]}),Object(y.jsx)(w,{copy:a.copy,setCopy:s,timing:2e3,children:"Share url copied!"})]})},N=c(28),_=c.n(N),C=function(e){var t=e.user;e.data;return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)("h1",{className:"cover__green--title",children:"Periodic Elements Collection Book"}),Object(y.jsx)("img",{src:"src=../../assets/periodicelem-logo.jpg",className:"cover__green--image",alt:"logo"}),t.data.length>0&&Object(y.jsx)("section",{children:Object(y.jsxs)("p",{children:["of ",t.user]})})]})},E=function(e){var t=e.cardData,c=e.userData,n=Object(r.useState)([]),a=Object(o.a)(n,2),s=a[0],i=a[1];return Object(r.useEffect)((function(){i(c.filter((function(e){return e.template_id===t.template_id})))}),[c,t.template_id]),""!==t.immutable_data.img?Object(y.jsxs)("div",{className:"card--wrap",children:[Object(y.jsx)("img",{src:"https://images.weserv.nl/?url=https://gateway.ipfs.io/ipfs/".concat(t.immutable_data.img||null,"&w=95"),width:"100",alt:t.name,className:"card--image ".concat(s.length>0&&"user-have")}),s.length>0&&Object(y.jsxs)("span",{className:"card--quantity",children:["x",s[0].assets]})]}):null},S=function(e){var t=e.page,c=e.user,n=Object(r.useState)([]),a=Object(o.a)(n,2),s=a[0],i=a[1],l=Object(r.useCallback)((function(e){O(e,i)}),[]);return Object(r.useEffect)((function(){l(t)}),[t,l]),Object(y.jsx)("div",{className:"cover__page--wrapper",children:s.length>0&&s.map((function(e,t){return Object(y.jsx)("section",{children:Object(y.jsx)(E,{cardData:e,userData:c,index:t})},t)}))})},z=a.a.forwardRef((function(e,t){var c=e.page,n=e.user,r=e.pageData;return Object(y.jsx)("div",{className:"container",children:c.length>0&&Object(y.jsxs)(_.a,{width:340,height:500,maxHeight:550,showCover:!0,ref:t,children:[Object(y.jsx)("div",{className:"cover__green",children:Object(y.jsx)(C,{user:n,data:r})}),c.map((function(e,t){return Object(y.jsx)("div",{className:"cover__page",children:Object(y.jsx)(S,{page:e+1,user:n.data})},t)})),Object(y.jsx)("div",{className:"cover__page--final",children:Object(y.jsxs)("p",{style:{color:"white",textAlign:"center",marginTop:"15px"},className:"final--header",children:["New Elements and Molecules released continually!",Object(y.jsx)("br",{}),Object(y.jsx)("a",{href:"https://www.publish0x.com/periodic-table-of-elements-nft",children:"Visit Periodic Elements on publish0x"})]})})]})})}));function q(){return(q=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var c=arguments[t];for(var n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n])}return e}).apply(this,arguments)}function U(e,t){if(null==e)return{};var c,n,r=function(e,t){if(null==e)return{};var c,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)c=a[n],t.indexOf(c)>=0||(r[c]=e[c]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)c=a[n],t.indexOf(c)>=0||Object.prototype.propertyIsEnumerable.call(e,c)&&(r[c]=e[c])}return r}function B(e,t){var c=e.title,a=e.titleId,s=U(e,["title","titleId"]);return r.createElement("svg",q({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 290 290",ref:t,"aria-labelledby":a},s),c?r.createElement("title",{id:a},c):null,n||(n=r.createElement("path",{d:"M110 220h70v70h-70zM110 110h70v70h-70zM110 0h70v70h-70z"})))}var D=r.forwardRef(B),P=(c.p,function(){var e=Object(r.useState)({copy:!1}),t=Object(o.a)(e,2),c=t[0],n=t[1];return Object(y.jsxs)("footer",{children:[Object(y.jsxs)("h3",{className:"credits",children:["Created with",Object(y.jsx)("span",{role:"img","aria-label":"love",children:"\ud83d\udc93"}),"by Eroshi Solutions! Adapted to Periodic Elements by sebrock42"]}),Object(y.jsxs)("div",{className:"credits--block",children:[Object(y.jsx)("p",{className:"credits--username",children:"ban_1eroshi3kz1ye9o6c6nxqu5zzfhxmc9mqugg9uf8nfk1nw5nnx6q5r66e3ke"}),Object(y.jsx)(v.a,{text:"ban_1eroshi3kz1ye9o6c6nxqu5zzfhxmc9mqugg9uf8nfk1nw5nnx6q5r66e3ke",onCopy:function(){return n({copy:!c.copy})},children:Object(y.jsx)("span",{role:"img","aria-labelledby":"clip-to-clipboard",style:{cursor:"pointer",fontSize:"1rem"},children:"\ud83d\udccb"})}),Object(y.jsx)(w,{copy:c.copy,setCopy:n,timing:2e3,children:"Banano Address copied."})]})]})}),I=c(10);function A(){return Object(y.jsx)("nav",{className:"menu--aside",children:Object(y.jsxs)("ul",{className:"menu--aside__block",children:[Object(y.jsx)("li",{children:Object(y.jsx)(I.b,{to:"/suggestion",children:"Click here to tell us about your suggestions"})}),Object(y.jsx)("li",{children:Object(y.jsx)(P,{})})]})})}var M=function(e){var t=e.setUser,c=e.user,n=e.getUser;return Object(y.jsxs)("header",{children:[Object(y.jsx)("div",{className:"header--logo",children:Object(y.jsx)(I.b,{to:"/",className:"menu--link",children:Object(y.jsx)("img",{src:"../../assets/periodicelem-logo.jpg",width:"120",alt:"periodicelem logo"})})}),Object(y.jsx)("div",{className:"input--user",children:"/suggestion"!==window.location.pathname?Object(y.jsxs)("form",{className:"input--user__form",children:[Object(y.jsx)("input",{type:"text",onChange:function(e){return t((function(t){return Object(d.a)(Object(d.a)({},t),{user:e.target.value})}))},placeholder:"Input your WAX account (.wam or .waa)",value:null===c||void 0===c?void 0:c.user}),Object(y.jsx)("button",{type:"submit",className:"input--button",onClick:n,children:Object(y.jsx)("span",{"aria-label":"search user",role:"img",children:"\ud83d\udd0d"})})]}):Object(y.jsx)(I.b,{to:"/",className:"menu--link",children:Object(y.jsx)("span",{role:"img","aria-label":"back to index",children:"\ud83d\udc48"})})}),Object(y.jsxs)("div",{children:[Object(y.jsx)("label",{htmlFor:"open",children:Object(y.jsx)(D,{width:25,height:35,style:{paddingTop:"8px"},fill:"#ad514d"})}),Object(y.jsx)("input",{type:"checkbox",id:"open",className:"menu--check"}),Object(y.jsx)(A,{})]})]})},T=a.a.createContext({});var F=function(e){var t=e.children,c=Object(r.useContext)(T),n=c.setUser,a=c.user,s=c.getUser;return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(M,{setUser:n,user:a,getUser:s}),t]})};function R(){var e=Object(f.f)(),t=Object(r.useState)({}),c=Object(o.a)(t,2),n=c[0],s=c[1],i=Object(r.useState)({}),l=Object(o.a)(i,2),u=l[0],j=l[1],d=Object(r.useState)({user:e.username||"",data:[]}),b=Object(o.a)(d,2),h=b[0],p=b[1],O=a.a.createRef(),g=Object(r.useState)(),v=Object(o.a)(g,2)[1],w=Object(r.useCallback)((function(){x(j,s)}),[]);Object(r.useEffect)((function(){Object.keys(e).length>0&&m(p,h)}),[e]),Object(r.useEffect)((function(){w()}),[w]),Object(r.useEffect)((function(){v(O.current)}),[O]);return Object(y.jsx)(T.Provider,{value:{user:h,getUser:function(e){e.preventDefault();try{m(p,h)}catch(e){console.log(e)}},setUser:p},children:Object(y.jsxs)(F,{children:[Object(y.jsx)(z,{page:n,pageData:u,user:h,ref:O}),h.data.length>0&&Object(y.jsx)(k,{user:h.user,params:e})]})})}var H=function(e){return Object(y.jsx)(F,{children:Object(y.jsxs)("div",{className:"block--page",children:[Object(y.jsx)("h3",{children:"If you have some comments, questions or suggestions for this platform you can tell us through the form below:"}),Object(y.jsx)("iframe",{src:"https://forms.gle/rcEBLumxftwkCTTj8?embedded=true",width:window.screen.width<660?"325":"660",height:"820",title:"form",frameBorder:"0",marginHeight:"0",marginWidth:"0",children:"Carregando\u2026"})]})})};c(58);function J(){return Object(y.jsx)(I.a,{children:Object(y.jsxs)(f.c,{children:[Object(y.jsx)(f.a,{exact:!0,path:"/",children:Object(y.jsx)(R,{})}),Object(y.jsx)(f.a,{exact:!0,path:"/user/:username",children:Object(y.jsx)(R,{})}),Object(y.jsx)(f.a,{exact:!0,path:"/suggestion",children:Object(y.jsx)(H,{})})]})})}var V=document.getElementById("root");i.a.render(Object(y.jsx)(J,{}),V)}},[[59,1,2]]]);
//# sourceMappingURL=main.88ae89c4.chunk.js.map