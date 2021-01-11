(this["webpackJsonpadmin-panel-react"]=this["webpackJsonpadmin-panel-react"]||[]).push([[0],{68:function(e,t,s){},69:function(e,t,s){},70:function(e,t,s){"use strict";s.r(t);var r=s(0),n=s(1),o=s(7),c=s.n(o),i=s(12),a=s(13),l=s(15),d=s(4),u=s(19),b=s.n(u);var j=function(){var e={headingTitle:{fontFamily:"Roobert"},button:{fontFamily:"Roobert"},backgroundGradient:{backgroundSize:"400% 400%"}};return Object(r.jsx)("div",{className:"\r min-h-screen\r flex items-center\r py-12 px-4\r sm:px-6 \r lg:px-8\r ",children:Object(r.jsx)("div",{className:"flex items-center justify-center max-w-2xl w-full h-96 space-y-8",children:Object(r.jsx)("div",{className:"flex items-center bg-white bg-opacity-30 rounded-3xl max-w-xl w-full h-full space-y-5 p-10",children:Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{className:"flex items-center justify-center mb-10",children:Object(r.jsxs)("p",{className:"text-left text-4xl",style:e.headingTitle,children:["Welcome to ",Object(r.jsx)("br",{}),Object(r.jsx)("span",{className:"font-bold text-6xl",style:e.headingTitle,children:"Flito Admin Panel"})]})}),Object(r.jsx)("div",{className:"flex items-center",children:Object(r.jsx)(l.b,{to:"/login",children:Object(r.jsx)("div",{className:"flex items-center justify-center transition-all duration-300 bg-white bg-opacity-70 hover:bg-opacity-100 rounded-xl w-40 p-3 cursor-pointer",children:Object(r.jsx)("p",{className:"text-2xl font-bold",style:e.button,children:"LOGIN"})})})})]})})})})},m=s(10),x=function(){return sessionStorage.getItem("token")||null},h=function(){sessionStorage.removeItem("token"),sessionStorage.removeItem("user")},p=function(e,t){sessionStorage.setItem("token",e),sessionStorage.setItem("user",JSON.stringify(t))},f=s.p+"static/media/logo-no-trace.8798001d.png",g=function(e){var t=Object(n.useState)(e),s=Object(i.a)(t,2),r=s[0],o=s[1];return{value:r,onChange:function(e){o(e.target.value)}}},O=function(e){Object(a.b)()({type:"ON"});var t=Object(n.useState)(!1),s=Object(i.a)(t,2),o=s[0],c=s[1],l=g(""),d=g(""),u=Object(n.useState)(null),j=Object(i.a)(u,2),x=j[0],h=j[1];return Object(r.jsxs)("div",{className:"min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8",children:[Object(r.jsxs)("div",{children:[Object(r.jsxs)("div",{children:[Object(r.jsx)("img",{className:"mx-auto h-20 w-auto",src:f,alt:"Flito"}),Object(r.jsx)("h2",{className:"mt-6 text-center text-4xl font-bold text-gray-900",style:{fontFamily:"Roobert"},children:"Sign in to your account"})]}),Object(r.jsxs)("form",{className:"mt-8 space-y-6",children:[Object(r.jsx)("input",{type:"hidden",name:"remember",value:"true"}),Object(r.jsxs)("div",{className:"rounded-md shadow-sm -space-y-px",children:[Object(r.jsxs)("div",{children:[Object(r.jsx)("label",{htmlFor:"username",className:"sr-only",children:"Username"}),Object(r.jsx)("input",Object(m.a)(Object(m.a)({className:"\r appearance-none rounded-none relative \r block w-full px-3 py-2 mb-3\r bg-transparent \r border-2 border-white border-opacity-50\r placeholder-white placeholder-opacity-50 \r text-white \r rounded-lg \r focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 focus:border-opacity-100 focus:z-10 \r sm:text-md md:text-xl lg:text-2xl",type:"text",id:"username",name:"username"},l),{},{autoComplete:"new-password",placeholder:"Username",autoFocus:!0}))]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("label",{htmlFor:"password",className:"sr-only",children:"Password"}),Object(r.jsx)("input",Object(m.a)(Object(m.a)({className:"\r appearance-none rounded-none relative \r block w-full px-3 py-2 mb-3\r bg-transparent \r border-2 border-white border-opacity-50\r placeholder-white placeholder-opacity-50 \r text-white \r rounded-lg \r focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 focus:border-opacity-100 focus:z-10 \r sm:text-md md:text-xl lg:text-2xl",id:"password",name:"password",type:"password"},d),{},{autoComplete:"new-password",placeholder:"Password"}))]})]}),Object(r.jsx)("div",{className:"\r flex justify-center",children:x&&Object(r.jsxs)("div",{className:"\r w-max rounded-md\r px-2 py-1\r bg-white bg-opacity-50\r transition-all duration-200\r hover:bg-opacity-100",children:[Object(r.jsx)("small",{style:{color:"red"},children:x}),Object(r.jsx)("br",{})]})}),Object(r.jsx)("div",{className:"flex justify-center",children:Object(r.jsxs)("button",{className:"\r group relative w-1/3 flex justify-center py-3 px-20 \r bg-black bg-opacity-50 rounded-md border border-transparent \r text-yellow-200 text-xl font-bold \r transition-all duration-200\r hover:bg-yellow-800 hover:bg-opacity-100\r focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500",onClick:function(){h(null),c(!0),b.a.post("http://localhost:4000/users/signin",{username:l.value,password:d.value}).then((function(t){c(!1),p(t.data.token,t.data.user),e.history.push("/dashboard")})).catch((function(e){c(!1),console.log(e),e.response&&401===e.response.status?h(e.response.data.message):h("Something went wrong. Please try again later.")}))},disabled:o,children:[Object(r.jsx)("span",{className:"absolute left-0 inset-y-0 flex items-center pl-3",children:o?Object(r.jsxs)("svg",{class:"animate-spin h-5 w-5 text-yellow-500 \r transition-all duration-200\r group-hover:text-yellow-200",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[Object(r.jsx)("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}),Object(r.jsx)("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}):Object(r.jsx)("svg",{className:"\r h-5 w-5 text-yellow-500 \r transition-all duration-200\r group-hover:text-yellow-200",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",children:Object(r.jsx)("path",{fillRule:"evenodd",d:"M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z",clipRule:"evenodd"})})}),o?"Loading":"Login"]})})]})]}),Object(r.jsx)("button",{className:"\r absolute bottom-0 right-0 \r px-4 py-2 \r mr-4 mb-4\r transition-all duration-200\r bg-yellow-800 bg-opacity-50 rounded-md\r text-md font-bold text-yellow-200 \r hover:bg-yellow-700 hover:bg-opacity-100\r focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500\r ",onClick:function(t){return e.history.push("/")},children:"Back to Home"})]})};var y=function(e){var t=Object(n.useState)(e),s=Object(i.a)(t,2),r=s[0],o=s[1],c=Object(n.useRef)(null),a=function(e){c.current&&!c.current.contains(e.target)&&o(!1)};return Object(n.useEffect)((function(){return document.addEventListener("click",a,!0),function(){document.removeEventListener("click",a,!0)}}),[]),{node:c,isVisible:r,setIsVisible:o}},v=function(e){var t=y(!1),s=t.node,n=t.isVisible,o=t.setIsVisible;return Object(r.jsxs)("div",{className:"ml-3 relative z-10",ref:s,children:[Object(r.jsx)("div",{children:Object(r.jsxs)("button",{className:"bg-yellow-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-yellow-800 focus:ring-white",id:"user-menu","aria-haspopup":"true",onClick:function(e){return o(!n)},children:[Object(r.jsx)("span",{className:"sr-only",children:"Open user menu"}),Object(r.jsx)("img",{className:"h-8 w-8 rounded-full",src:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",alt:""})]})}),n&&Object(r.jsxs)("div",{className:"origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5",role:"menu","aria-orientation":"vertical","aria-labelledby":"user-menu",children:[Object(r.jsx)("div",{className:"block px-4 py-2 text-sm text-gray-700 hover:bg-yellow-100 cursor-pointer",role:"menuitem",children:"Your Profile"}),Object(r.jsx)("div",{className:"block px-4 py-2 text-sm text-gray-700 hover:bg-yellow-100 cursor-pointer",role:"menuitem",children:"Settings"}),Object(r.jsx)("div",{className:"block px-4 py-2 text-sm text-gray-700 hover:bg-yellow-100 cursor-pointer",role:"menuitem",onClick:function(){h(),e.history.push("/login")},children:"Sign out"})]})]})},w=function(){var e=y(!1),t=e.node,s=e.isVisible,n=e.setIsVisible;return Object(r.jsxs)("div",{className:"ml-3 relative z-10",ref:t,children:[Object(r.jsxs)("button",{className:"bg-yellow-800 p-1 rounded-full text-gray-100 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-yellow-800 focus:ring-white",id:"notification-menu","aria-haspopup":"true",onClick:function(e){return n(!s)},children:[Object(r.jsx)("span",{className:"sr-only",children:"View notifications"}),Object(r.jsx)("svg",{className:"h-6 w-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true",children:Object(r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"})})]}),s&&Object(r.jsx)("div",{className:"origin-top-right absolute right-0 mt-2 w-56 h-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5",role:"menu","aria-orientation":"vertical","aria-labelledby":"notification-menu",children:Object(r.jsx)("div",{className:"block px-4 py-2 text-sm text-gray-700 hover:bg-yellow-100 cursor-pointer",role:"menuitem",children:"Notification displays here"})})]})},N=function(e){return Object(r.jsxs)("nav",{className:"bg-yellow-500",children:[Object(r.jsx)("div",{className:"max-w-7xl mx-auto px-2 sm:px-6 lg:px-8",children:Object(r.jsxs)("div",{className:"relative flex items-center justify-between h-16",children:[Object(r.jsx)("div",{className:"absolute inset-y-0 left-0 flex items-center sm:hidden",children:Object(r.jsxs)("button",{className:"inline-flex items-center justify-center p-2 rounded-md text-gray-100 hover:text-white hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white","aria-expanded":"false",children:[Object(r.jsx)("span",{className:"sr-only",children:"Open main menu"}),Object(r.jsx)("svg",{className:"block h-6 w-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true",children:Object(r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 12h16M4 18h16"})}),Object(r.jsx)("svg",{className:"hidden h-6 w-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true",children:Object(r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"})})]})}),Object(r.jsxs)("div",{className:"flex-1 flex items-center justify-center sm:items-stretch sm:justify-start",children:[Object(r.jsxs)("div",{className:"flex-shrink-0 flex items-center",children:[Object(r.jsx)("img",{className:"block lg:hidden h-8 w-auto",src:f,alt:"Flito"}),Object(r.jsxs)("div",{className:"flex items-center justify-center",children:[Object(r.jsx)("img",{className:"hidden lg:block h-8 w-auto pr-2",src:f,alt:"Flito"}),Object(r.jsx)("h1",{className:"text-2xl font-bold pl-2",style:{fontFamily:"Roobert"},children:"Flito"})]})]}),Object(r.jsx)("div",{className:"hidden sm:block sm:ml-6",children:Object(r.jsxs)("div",{className:"flex space-x-4",children:[Object(r.jsx)("div",{className:"bg-yellow-900 text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer",children:"Dashboard"}),Object(r.jsx)("div",{className:"text-gray-800 hover:bg-yellow-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer",children:"Team"}),Object(r.jsx)("div",{className:"text-gray-800 hover:bg-yellow-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer",children:"Projects"}),Object(r.jsx)("div",{className:"text-gray-800 hover:bg-yellow-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer",children:"Calendar"})]})})]}),Object(r.jsxs)("div",{className:"absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0",children:[Object(r.jsx)(w,{}),Object(r.jsx)(v,{history:e.history})]})]})}),Object(r.jsx)("div",{className:"hidden sm:hidden",children:Object(r.jsxs)("div",{className:"px-2 pt-2 pb-3 space-y-1",children:[Object(r.jsx)("div",{className:"bg-yellow-900 text-white block px-3 py-2 rounded-md text-base font-medium cursor-pointer",children:"Dashboard"}),Object(r.jsx)("div",{className:"text-gray-800 hover:bg-yellow-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium cursor-pointer",children:"Team"}),Object(r.jsx)("div",{className:"text-gray-800 hover:bg-yellow-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium cursor-pointer",children:"Projects"}),Object(r.jsx)("div",{className:"text-gray-800 hover:bg-yellow-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium cursor-pointer",children:"Calendar"})]})})]})},k=s(39),S=s(37),C=s(38),F=s.n(C),L=function(e){var t=e.text;return Object(r.jsxs)("div",{className:"pin",children:[Object(r.jsx)(S.Icon,{icon:F.a,className:"pin-icon"}),Object(r.jsx)("p",{className:"pin-text",children:t})]})},I=(s(68),function(){var e=Object(n.useState)([2.483653,102.851613]),t=Object(i.a)(e,2),s=t[0],o=t[1],c=Object(n.useState)(17),a=Object(i.a)(c,2),l=a[0],d=a[1];return Object(r.jsx)("div",{className:"map",children:Object(r.jsx)("div",{className:"google-map",children:Object(r.jsx)(k.a,{bootstrapURLKeys:{key:"AIzaSyAtT5EHyNK9Lg6_M7VhwIExJvBdi5g7vh8"},onChange:function(e){var t=e.center,s=e.zoom;o(t),d(s)},defaultCenter:s,defaultZoom:l,children:Object(r.jsx)(L,{lat:2.483653,lng:102.851613,text:"Your location."})})})})}),E=function(e){Object(a.b)()({type:"OFF"});!function(){var e=sessionStorage.getItem("user");e&&JSON.parse(e)}();return Object(r.jsxs)("div",{className:"MainPanel",children:[Object(r.jsx)(N,{history:e.history}),Object(r.jsx)("div",{className:"content",children:Object(r.jsx)(I,{})})]})},V=s(20),T=function(e){var t=e.component,s=Object(V.a)(e,["component"]);return Object(r.jsx)(d.b,Object(m.a)(Object(m.a)({},s),{},{render:function(e){return x()?Object(r.jsx)(t,Object(m.a)({},e)):Object(r.jsx)(d.a,{to:{pathname:"/login",state:{from:e.location}}})}}))},_=function(e){var t=e.component,s=Object(V.a)(e,["component"]);return Object(r.jsx)(d.b,Object(m.a)(Object(m.a)({},s),{},{render:function(e){return x()?Object(r.jsx)(d.a,{to:{pathname:"/dashboard"}}):Object(r.jsx)(t,Object(m.a)({},e))}}))};var B=function(){var e=Object(a.c)((function(e){return e.isBgGradientReducer})),t=Object(n.useState)(!0),s=Object(i.a)(t,2),o=s[0],c=s[1];return Object(n.useEffect)((function(){var e=x();e&&b.a.get("http://localhost:4000/verifyToken?token=".concat(e)).then((function(e){p(e.data.token,e.data.user),c(!1)})).catch((function(e){h(),c(!1)}))}),[]),o&&x()?Object(r.jsx)("div",{className:"content",children:"Checking authentication..."}):Object(r.jsx)(l.a,{basename:"/admin-panel-react/",children:Object(r.jsx)("div",{className:"App",children:Object(r.jsx)("div",{className:e?"\n            animate-gradient-color\n            bg-gradient-to-tr from-yellow-400 via-red-500 to-pink-500\n            bg-400%":null,children:Object(r.jsxs)(d.d,{children:[Object(r.jsx)(d.b,{path:"/",exact:!0,component:j}),Object(r.jsx)(_,{path:"/login",component:O}),Object(r.jsx)(T,{path:"/dashboard",component:E})]})})})})},R=(s(69),function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,71)).then((function(t){var s=t.getCLS,r=t.getFID,n=t.getFCP,o=t.getLCP,c=t.getTTFB;s(e),r(e),n(e),o(e),c(e)}))}),z=s(16),M=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"OFF":return!1;case"ON":return!0;default:return e}},P=Object(z.b)({isBgGradientReducer:M}),D=Object(z.c)(P,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());c.a.render(Object(r.jsx)(a.a,{store:D,children:Object(r.jsx)(B,{})}),document.getElementById("root")),R()}},[[70,1,2]]]);
//# sourceMappingURL=main.dc235a84.chunk.js.map