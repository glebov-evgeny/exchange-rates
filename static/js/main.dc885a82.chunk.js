(this["webpackJsonpexchange-rates"]=this["webpackJsonpexchange-rates"]||[]).push([[0],{12:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var r=c(1),a=c.n(r),s=c(5),n=c.n(s),l=(c(12),c(2)),i=c(0);function o(){return Object(i.jsx)("header",{className:"header",children:Object(i.jsx)("div",{className:"container"})})}function u(){return Object(i.jsx)("footer",{className:"footer",children:Object(i.jsxs)("div",{className:"container footer__container",children:[Object(i.jsx)("a",{href:"//www.cbr-xml-daily.ru/",target:"_blank",rel:"noreferrer",children:"\u041a\u0443\u0440\u0441\u044b \u0432\u0430\u043b\u044e\u0442, API"}),Object(i.jsx)("a",{href:"//ea-glebov.ru/",target:"_blank",rel:"noreferrer",children:"Portfolio"})]})})}var j=c(7);function b(e){var t=e.Name,c=e.CharCode,r=e.Value,a=e.ID,s=e.Previous;return Object(i.jsxs)("div",{className:"courses__item",id:a,children:[Object(i.jsxs)("p",{className:"courses__item-title",children:[t," (",c,")"]}),Object(i.jsxs)("div",{className:"courses__item-price",children:[r," \u0440\u0443\u0431.",Object(i.jsx)("div",{className:"courses__item-triangle",children:function(e,t){return e<t?Object(i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 46 46",children:Object(i.jsx)("path",{style:{fill:"#ff0000"},d:"M46 3.004 0 3l23.002 40z"})}):Object(i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 46 46",children:Object(i.jsx)("path",{style:{fill:"#3bd52c",transform:"rotate(180deg)",transformOrigin:"center"},d:"M46 3.004 0 3l23.002 40z"})})}(r,s)})]})]})}function d(e){var t=e.courses;return Object(i.jsx)("section",{className:"courses",children:Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)("h2",{className:"courses__title",children:"\u041a\u0443\u0440\u0441\u044b \u0432\u0430\u043b\u044e\u0442:"}),Object(i.jsx)("div",{className:"courses__block",children:t.map((function(e){return Object(i.jsx)(b,Object(j.a)({},e),e.ID)}))})]})})}function h(e){var t=e.courses,c=(arguments.length>1&&void 0!==arguments[1]||Function.prototype,Object(r.useState)("1")),a=Object(l.a)(c,2),s=a[0],n=a[1],o=Object(r.useState)("1"),u=Object(l.a)(o,2),j=u[0],b=u[1],d=Object(r.useState)("1"),h=Object(l.a)(d,2),O=h[0],x=h[1],m=Object(r.useState)("1"),f=Object(l.a)(m,2),v=f[0],_=f[1],p=function(e,t,c){b((e*t/c).toFixed(2))};return Object(i.jsx)("section",{className:"calculator",children:Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)("h2",{className:"calculator__title",children:"\u041a\u0430\u043b\u044c\u043a\u0443\u043b\u044f\u0442\u043e\u0440 \u0432\u0430\u043b\u044e\u0442:"}),Object(i.jsxs)("div",{className:"calculator__block",children:[Object(i.jsxs)("div",{className:"calculator__current",children:[Object(i.jsx)("p",{className:"calculator__current-title",children:"\u0412\u0430\u0448 \u0432\u044b\u0431\u043e\u0440:"}),Object(i.jsxs)("select",{className:"calculator__country",onChange:function(e){return x(e.target.value)},value:O,children:[Object(i.jsx)("option",{value:"1",children:"\u0420\u0443\u0431\u043b\u044c (RUB)"},"rub"),t.map((function(e){return Object(i.jsxs)("option",{value:e.Value,children:[e.Name," (",e.CharCode,")"]},e.CharCode)}))]}),Object(i.jsx)("input",{className:"calculator__nmb ",type:"number",placeholder:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e",onChange:function(e){return n(e.target.value)},value:s})]}),Object(i.jsxs)("div",{className:"calculator__target",children:[Object(i.jsx)("p",{className:"calculator__target-title",children:"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442:"}),Object(i.jsxs)("select",{className:"calculator__country",onChange:function(e){return _(e.target.value)},value:v,children:[Object(i.jsx)("option",{value:"1",children:"\u0420\u0443\u0431\u043b\u044c (RUB)"},"rub"),t.map((function(e){return Object(i.jsxs)("option",{value:e.Value,children:[e.Name," (",e.CharCode,")"]},e.CharCode)}))]}),Object(i.jsx)("p",{className:"calculator__nmb calculator__nmb-result",children:j})]}),Object(i.jsx)("button",{className:"calculator__btn",onClick:function(){return p(s,O,v)},children:"\u041c\u0430\u0433\u0438\u044f"})]})]})})}var O=c(4),x=c.n(O),m=c(6),f=function(){var e=Object(m.a)(x.a.mark((function e(){var t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.cbr-xml-daily.ru/daily_json.js");case 2:return t=e.sent,e.next=5,t.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();var v=function(){var e=Object(r.useState)([]),t=Object(l.a)(e,2),c=t[0],a=t[1];return Object(r.useEffect)((function(){f().then((function(e){var t=e.Valute,c=[];Object.keys(t).forEach((function(e){c.push(t[e])})),a(c)}))}),[c]),Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(o,{}),Object(i.jsxs)("main",{className:"main",children:[Object(i.jsx)(h,{ratesVariables:function(){},courses:c}),Object(i.jsx)(d,{courses:c})]}),Object(i.jsx)(u,{})]})};n.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(v,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.dc885a82.chunk.js.map