(this["webpackJsonpemployee-directory2"]=this["webpackJsonpemployee-directory2"]||[]).push([[0],{39:function(e,t,a){"use strict";a.r(t);var r=a(0),s=a(1),n=a.n(s),c=a(13),i=a.n(c),l=a(3),d=a(15),j=n.a.createContext({}),o=function(){var e=Object(s.useContext)(j);function t(e){var t=e.split("-"),a=t[0];return[t[1],t[2].split("T")[0],a].join("-")}return Object(r.jsx)("tbody",{children:void 0!==e.developerState.filteredUsers[0]&&void 0!==e.developerState.filteredUsers[0].name?e.developerState.filteredUsers.map((function(e){var a=e.login,s=e.name,n=e.picture,c=e.phone,i=e.email,l=e.dob;return Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{"data-th":"Image",className:"align-middle",children:Object(r.jsx)("img",{src:n.medium,alt:"profile image for"+s.first+" "+s.last,className:"img-responsive"})}),Object(r.jsxs)("td",{"data-th":"Name",className:"name-cell align-middle",children:[s.first," ",s.last]}),Object(r.jsx)("td",{"data-th":"Phone",className:"name-cell align-middle",children:c}),Object(r.jsx)("td",{"data-th":"Email",className:"name-cell align-middle",children:Object(r.jsx)("a",{href:"sendmailto:"+i,target:"__blank",children:i})}),Object(r.jsx)("td",{"data-th":"DoB",className:"name-cell align-middle",children:t(l.date)})]},a.uuid)})):Object(r.jsx)(r.Fragment,{})})},m=function(){var e=Object(s.useContext)(j);return Object(r.jsx)("div",{className:"datatable mt-5",children:Object(r.jsxs)("table",{id:"table",className:"table table-striped table-hover table-condensed",children:[Object(r.jsx)("thead",{children:Object(r.jsx)("tr",{children:e.developerState.headings.map((function(t){var a=t.name,s=t.width;return Object(r.jsxs)("th",{className:"col",style:{width:s},onCLick:function(){e.handleSort(a.toLowerCase())},children:[a,Object(r.jsx)("span",{className:"pointer"})]},a)}))})}),Object(r.jsx)(o,{})]})})},b=function(){var e=Object(s.useContext)(j);return Object(r.jsx)("div",{className:"searchbar",children:Object(r.jsxs)("form",{className:"form-inline",children:[Object(r.jsx)("input",{className:"form-control mr-sm-2",type:"search",placeholder:"Search","aria-label":"Search",onChange:function(t){return e.handleSearchChange(t)}}),Object(r.jsx)("button",{className:"btn my-2 my-sm-0",type:"submit",children:"Search"})]})})};var h=function(){return Object(r.jsx)("nav",{className:"navabar navbar-expand-lg navbar-light bg-light",children:Object(r.jsx)("div",{className:"search-area col-4",children:Object(r.jsx)(b,{})})})},u=a(14),O=a.n(u),f=function(){return O.a.get("https://randomuser.me/api/?results200&nat=us")},x=function(){var e=Object(s.useState)({users:[],order:"ascend",filteredUsers:[],headings:[{name:"Image",width:"10%"},{name:"Name",width:"10%"},{name:"Phone",width:"20%"},{name:"Email",width:"20%"},{name:"DoB",width:"10%"}]}),t=Object(d.a)(e,2),a=t[0],n=t[1];return Object(s.useEffect)((function(){f().then((function(e){n(Object(l.a)(Object(l.a)({},a),{},{users:e.data.results,filteredUsers:e.data.results}))}))}),[]),Object(r.jsxs)(j.Provider,{value:{developerState:a,handleSearchChange:function(e){var t=e.target.value,r=a.users.filter((function(e){return-1!==e.name.first.toLowerCase().indexOf(t.toLowerCase())}));n(Object(l.a)(Object(l.a)({},a),{},{filteredUsers:r}))},handleSort:function(e){"descend"===a.order?n({order:"ascend"}):n({order:"descend"});var t=a.filteredUsers.sort((function(t,r){return"ascend"===a.order?void 0===t[e]?1:void 0===r[e]?-1:"name"===e?t[e].first.localeCompare(r[e].first):r[e]-t[e]:void 0===t[e]||void 0===r[e]?-1:"name"===e?r[e].first.localeCompare(t[e].first):r[e]-t[e]}));n(Object(l.a)(Object(l.a)({},a),{},{filteredUsers:t}))}},children:[Object(r.jsx)(h,{}),Object(r.jsx)("div",{className:"data-area",children:a.filteredUsers.length>0?Object(r.jsx)(m,{}):Object(r.jsx)("div",{})})]})};var v=function(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(x,{})})};var p=function(e){var t=e.children;return Object(r.jsx)("div",{className:"wrapper",children:t})};var g=function(){return Object(r.jsxs)("div",{className:"header",children:[Object(r.jsx)("h1",{children:"Employee Directory"}),Object(r.jsx)("p",{children:"..."})]})};var N=function(){return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(p,{}),Object(r.jsx)(g,{}),Object(r.jsx)(v,{}),Object(r.jsx)(p,{})]})};i.a.render(Object(r.jsx)(N,{}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.7e3e9361.chunk.js.map