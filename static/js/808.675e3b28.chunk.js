"use strict";(self.webpackChunkreact_router_example=self.webpackChunkreact_router_example||[]).push([[808],{944:function(e,t,n){var r=n(683),s=n(861),a=n(152),o=n(757),c=n.n(o),u=n(791);function i(e,t){return"SEND"===t.type?{data:null,error:null,status:"pending"}:"SUCCESS"===t.type?{data:t.responseData,error:null,status:"completed"}:"ERROR"===t.type?{data:null,error:t.errorMessage,status:"completed"}:e}t.Z=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=(0,u.useReducer)(i,{status:t?"pending":null,data:null,error:null}),o=(0,a.Z)(n,2),p=o[0],d=o[1],l=(0,u.useCallback)(function(){var t=(0,s.Z)(c().mark((function t(n){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return d({type:"SEND"}),t.prev=1,t.next=4,e(n);case 4:r=t.sent,d({type:"SUCCESS",responseData:r}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),d({type:"ERROR",errorMesssage:t.t0.message||"Something went wrong"});case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}(),[e]);return(0,r.Z)({sendRequest:l},p)}},335:function(e,t,n){n.d(t,{Ir:function(){return h},KP:function(){return l},Lf:function(){return u},h_:function(){return x},jR:function(){return p}});var r=n(683),s=n(861),a=n(757),o=n.n(a),c="https://quote-http-1c8c4-default-rtdb.asia-southeast1.firebasedatabase.app";function u(){return i.apply(this,arguments)}function i(){return(i=(0,s.Z)(o().mark((function e(){var t,n,s,a,u;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(c,"/quotes.json"));case 2:return t=e.sent,e.next=5,t.json();case 5:if(n=e.sent,t.ok){e.next=8;break}throw new Error(n.message||"Could not fetch quotes");case 8:for(a in s=[],n)u=(0,r.Z)({id:a},n[a]),s.push(u);return e.abrupt("return",s);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(e){return d.apply(this,arguments)}function d(){return(d=(0,s.Z)(o().mark((function e(t){var n,s,a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(c,"/quotes/").concat(t,".json"));case 2:return n=e.sent,e.next=5,n.json();case 5:if(s=e.sent,n.ok){e.next=8;break}throw new Error(s.message||"Could not fetch quote.");case 8:return a=(0,r.Z)({id:t},s),e.abrupt("return",a);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(e){return f.apply(this,arguments)}function f(){return(f=(0,s.Z)(o().mark((function e(t){var n,r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(c,"/quotes.json"),{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}});case 2:return n=e.sent,e.next=5,n.json();case 5:if(r=e.sent,n.ok){e.next=8;break}throw new Error(r.message||"Could not create quote");case 8:return e.abrupt("return",null);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e){return m.apply(this,arguments)}function m(){return(m=(0,s.Z)(o().mark((function e(t){var n,r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(c,"/comments/").concat(t.quoteId,".json"),{method:"POST",body:JSON.stringify(t.commentData),headers:{"Content-Type":"application/json"}});case 2:return n=e.sent,e.next=5,n.json();case 5:if(r=e.sent,n.ok){e.next=8;break}throw new Error(r.message||"Could not add comments");case 8:return e.abrupt("return",{commentId:r.name});case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(e){return j.apply(this,arguments)}function j(){return(j=(0,s.Z)(o().mark((function e(t){var n,s,a,u,i;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(c,"/comments/").concat(t,".json"));case 2:return n=e.sent,e.next=5,n.json();case 5:if(s=e.sent,n.ok){e.next=8;break}throw new Error(s.message||"Could not get commets.");case 8:for(u in a=[],s)i=(0,r.Z)({id:u},s[u]),a.push(i);return e.abrupt("return",a);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},808:function(e,t,n){n.r(t),n.d(t,{default:function(){return j}});var r=n(791),s=n(944),a=n(335),o=n(504),c="NoQuotesFound_noquotes__EUQsM",u=n(184),i=function(){return(0,u.jsxs)("div",{className:c,children:[(0,u.jsx)("p",{children:"No quotes found!"}),(0,u.jsx)(o.rU,{className:"btn",to:"/new-quote",children:"Add a quote"})]})},p=n(871),d="QuoteItem_item__Q6KwW",l=function(e){return(0,u.jsxs)("li",{className:d,children:[(0,u.jsxs)("figure",{children:[(0,u.jsx)("blockquote",{children:(0,u.jsx)("p",{children:e.text})}),(0,u.jsx)("figcaption",{children:e.author})]}),(0,u.jsx)(o.rU,{to:"/quotes/".concat(e.id),className:"btn",children:"View Fullscreen"})]})},f="QuoteList_list__MLz6k",h="QuoteList_sorting__GDrEn",m=function(e){var t,n,r=(0,p.TH)(),s=(0,p.s0)(),a="asc"===new URLSearchParams(r.search).get("sort"),o=(t=e.quotes,n=a,t.sort((function(e,t){return n?e.id>t.id?1:-1:e.id<t.id?1:-1})));return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("div",{className:h,children:(0,u.jsxs)("button",{onClick:function(){s("".concat(r.pathname,"?sort=").concat(a?"desc":"asc"))},children:["Sort ",a?"Descending":"Ascending"]})}),(0,u.jsx)("ul",{className:f,children:o.map((function(e){return(0,u.jsx)(l,{id:e.id,author:e.author,text:e.text},e.id)}))})]})},x=n(556),j=function(){var e=(0,s.Z)(a.Lf,!0),t=e.sendRequest,n=e.status,o=e.data,c=e.error;return(0,r.useEffect)((function(){t()}),[t]),"pending"===n?(0,u.jsx)("div",{className:"centered",children:(0,u.jsx)(x.Z,{})}):c?(0,u.jsx)("p",{className:"centered focused",children:c}):"completed"!==n||o&&0!==o.length?(0,u.jsx)(m,{quotes:o}):(0,u.jsx)(i,{})}}}]);
//# sourceMappingURL=808.675e3b28.chunk.js.map