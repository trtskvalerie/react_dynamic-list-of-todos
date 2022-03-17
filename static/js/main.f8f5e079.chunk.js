(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],[,,,,,,,,,,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(9),s=c.n(n),r=c(4),a=c(2),o=c(3),d=c.n(o),i=c(1),l=c.n(i),u=(c(16),c(17),c(10)),j=(c(18),c(8)),b=c.n(j),O=c(0);var p=l.a.memo((function(e){var t=e.todos,c=e.setSelectedUserId,n=e.selectedTodoId,s=e.setSelectedTodoId,r=Object(i.useState)(""),o=Object(a.a)(r,2),d=o[0],l=o[1],j=Object(i.useState)("all"),p=Object(a.a)(j,2),h=p[0],m=p[1],f=Object(i.useState)([]),x=Object(a.a)(f,2),_=x[0],v=x[1];return Object(i.useEffect)((function(){var e=d.toLowerCase();v(t.filter((function(t){if(!t.title.includes(e))return!1;switch(h){case"all":default:return!0;case"active":return!t.completed;case"completed":return t.completed}})))}),[t,d,h]),Object(O.jsxs)("div",{className:"TodoList",children:[Object(O.jsx)("h2",{children:"Todos:"}),Object(O.jsx)("input",{type:"text",value:d,placeholder:"Search by title",onChange:function(e){return l(e.target.value)}}),Object(O.jsxs)("select",{value:h,onChange:function(e){return m(e.target.value)},children:[Object(O.jsx)("option",{value:"all",children:"All"}),Object(O.jsx)("option",{value:"active",children:"Active"}),Object(O.jsx)("option",{value:"completed",children:"Completed"})]}),Object(O.jsx)("button",{type:"button",onClick:function(){return v(Object(u.a)(_).sort((function(){return Math.random()-.5})))},children:"Randomize"}),Object(O.jsx)("div",{className:"TodoList__list-container",children:Object(O.jsx)("ul",{className:"TodoList__list",children:_.map((function(e){return Object(O.jsxs)("li",{className:b()("TodoList__item",{"TodoList__item--checked":e.completed},{"TodoList__item--unchecked":!e.completed}),children:[Object(O.jsxs)("label",{htmlFor:"todo".concat(e.id),children:[Object(O.jsx)("input",{type:"checkbox",id:"todo".concat(e.id),checked:e.completed,readOnly:!0}),Object(O.jsx)("p",{children:e.title})]}),Object(O.jsx)("button",{className:b()("TodoList__user-button","button",{"TodoList__user-button--selected":e.id===n}),type:"button",onClick:function(){s(e.id),c(e.userId)},children:"User #".concat(e.userId)})]},e.id)}))})})]})})),h=(c(20),function(){var e=Object(r.a)(d.a.mark((function e(t){var c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat("https://mate.academy/students-api").concat(t));case 3:return c=e.sent,e.next=6,c.json();case 6:return e.abrupt("return",e.sent);case 9:return e.prev=9,e.t0=e.catch(0),e.abrupt("return",null);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()),m=(c(21),function(){return Object(O.jsx)("div",{className:"Loader",children:Object(O.jsx)("div",{className:"Loader__content"})})}),f=l.a.memo((function(e){var t=e.selectedUserId,c=e.setSelectedUserId,n=e.setSelectedTodoId,s=Object(i.useState)(null),o=Object(a.a)(s,2),l=o[0],u=o[1],j=Object(i.useState)(!0),b=Object(a.a)(j,2),p=b[0],f=b[1],x=Object(i.useMemo)((function(){return p?Object(O.jsx)(m,{}):Object(O.jsx)("p",{children:"User not found"})}),[p]),_=Object(i.useCallback)(Object(r.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f(!0),u(null),e.t0=u,e.next=5,h("/users/".concat(t));case 5:e.t1=e.sent,(0,e.t0)(e.t1),f(!1);case 8:case"end":return e.stop()}}),e)}))),[t]);return Object(i.useEffect)((function(){_()}),[t]),l?Object(O.jsxs)("div",{className:"CurrentUser",children:[Object(O.jsx)("h2",{className:"CurrentUser__title",children:Object(O.jsx)("span",{children:"Selected user: ".concat(t)})}),Object(O.jsx)("h3",{className:"CurrentUser__name",children:l.name}),Object(O.jsx)("p",{className:"CurrentUser__email",children:l.email}),Object(O.jsx)("p",{className:"CurrentUser__phone",children:l.phone}),Object(O.jsx)("button",{type:"button",className:"CurrentUser__clear button",onClick:function(){c(0),n(0)},children:"Clear"})]}):x})),x=function(){var e=Object(i.useState)(0),t=Object(a.a)(e,2),c=t[0],n=t[1],s=Object(i.useState)(0),o=Object(a.a)(s,2),l=o[0],u=o[1],j=Object(i.useState)([]),b=Object(a.a)(j,2),m=b[0],x=b[1],_=Object(i.useCallback)(Object(r.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=x,e.next=3,h("/todos");case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)}))),[]);return Object(i.useEffect)((function(){_()}),[]),Object(O.jsxs)("div",{className:"App",children:[Object(O.jsx)("div",{className:"App__sidebar",children:Object(O.jsx)(p,{todos:m,setSelectedUserId:n,selectedTodoId:l,setSelectedTodoId:u})}),Object(O.jsx)("div",{className:"App__content",children:Object(O.jsx)("div",{className:"App__content-container",children:c?Object(O.jsx)(f,{selectedUserId:c,setSelectedUserId:n,setSelectedTodoId:u}):"No user selected"})})]})};s.a.render(Object(O.jsx)(x,{}),document.getElementById("root"))}],[[22,1,2]]]);
//# sourceMappingURL=main.f8f5e079.chunk.js.map