(this.webpackJsonp2set=this.webpackJsonp2set||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var s=n(1),i=n.n(s),c=n(7),r=n.n(c),m=(n(12),n(13),n(2)),a=n(0),o=function(){var e=Object(s.useState)("\u2192\u3053\u306e\u6587\u7ae0\u3092\u6d88\u3057\u3066\u5927\u4f1a\u540d\u3084\u90e8\u9580\u540d\u3092\u5165\u529b\u2190"),t=Object(m.a)(e,2),n=t[0],i=t[1];return Object(s.useEffect)((function(){document.title="\u2192\u3053\u306e\u6587\u7ae0\u3092\u6d88\u3057\u3066\u5927\u4f1a\u540d\u3084\u90e8\u9580\u540d\u3092\u5165\u529b\u2190"===n?"\u306b\u305b\u3063\u3068\u307e\u3063\u3061":n})),Object(a.jsxs)("div",{className:"Header",children:[Object(a.jsx)("div",{className:"WebTitle",children:"\u300c\u306b\u305b\u3063\u3068\u307e\u3063\u3061\u300d"}),Object(a.jsx)("input",{className:"HeaderTitle",type:"text",onChange:function(e){i(e.target.value)},onClick:function(){i("")},onBlur:function(){n||i("\u2192\u3053\u306e\u6587\u7ae0\u3092\u6d88\u3057\u3066\u5927\u4f1a\u540d\u3084\u90e8\u9580\u540d\u3092\u5165\u529b\u2190")},value:n})]})},u=function(){return Object(a.jsx)("div",{className:"Footer",children:"\xa9 All rights reserved by Tetsuhiro.Hirabayashi"})},l=n(5),j=function(){var e=Object(s.useState)([]),t=Object(m.a)(e,2),n=t[0],i=t[1],c=Object(s.useState)(0),r=Object(m.a)(c,2),o=r[0],u=r[1],j=Object(s.useState)(0),b=Object(m.a)(j,2),d=b[0],N=b[1],O=Object(s.useState)([]),x=Object(m.a)(O,2),h=x[0],f=x[1],v=Object(s.useState)(),k=Object(m.a)(v,2),C=k[0],_=k[1],g=Object(s.useState)(0),p=Object(m.a)(g,2),F=p[0],S=p[1],I=Object(s.useState)(0),y=Object(m.a)(I,2),P=y[0],w=y[1],B=Object(s.useState)(0),T=Object(m.a)(B,2),R=T[0],A=T[1],H=Object(s.useState)(0),L=Object(m.a)(H,2),E=L[0],D=L[1],J=Object(s.useState)(0),M=Object(m.a)(J,2),Q=M[0],W=M[1],q=Object(s.useState)(0),z=Object(m.a)(q,2),G=z[0],K=z[1],U=Object(s.useState)(""),V=Object(m.a)(U,2),X=V[0],Y=V[1],Z=function(e,t){var s=n.find((function(t){return n[e]===t}));if(s.time1=s.time1+t,u(s.time1),e%2===0){var i=n.find((function(t){return n[e+1]===t}));s.count=s.time1+s.time2-(i.time1+i.time2),i.count=i.time1+i.time2-(s.time1+s.time2),S(s.count),s.time1>i.time1&&s.time2>i.time2?(s.marks=Number(P),i.marks=Number(R)):s.time1<i.time1&&s.time2<i.time2?(s.marks=Number(R),i.marks=Number(P)):s.time1<i.time1&&s.time2>i.time2||s.time1>i.time1&&s.time2<i.time2?s.time1+s.time2>i.time1+i.time2?(s.marks=Number(E),i.marks=Number(G)):s.time1+s.time2<i.time1+i.time2?(s.marks=Number(G),i.marks=Number(E)):(s.marks=Number(Q),i.marks=Number(Q)):(s.marks=Number(R),i.marks=Number(R))}else{var c=n.find((function(t){return n[e-1]===t}));s.count=s.time1+s.time2-(c.time1+c.time2),c.count=c.time1+c.time2-(s.time1+s.time2),S(s.count),s.time1>c.time1&&s.time2>c.time2?(s.marks=Number(P),c.marks=Number(R)):s.time1<c.time1&&s.time2<c.time2?(s.marks=Number(R),c.marks=Number(P)):s.time1<c.time1&&s.time2>c.time2||s.time1>c.time1&&s.time2<c.time2?s.time1+s.time2>c.time1+c.time2?(s.marks=Number(E),c.marks=Number(G)):s.time1+s.time2<c.time1+c.time2?(s.marks=Number(G),c.marks=Number(E)):(s.marks=Number(Q),c.marks=Number(Q)):(s.marks=Number(R),c.marks=Number(R))}for(var r=function(e){var t=h.find((function(t){return h[e]===t})),s=n.filter((function(e){return e.name===t.name})).reduce((function(e,t){return e+t.count}),0);h.find((function(e){return e.name===t.name})).score=s;var i=n.filter((function(e){return e.name===t.name})).reduce((function(e,t){return e+t.marks}),0);h.find((function(e){return e.name===t.name})).point=i},m=0;m<h.length;m++)r(m);console.log("\u3053\u3053\u304b\u3089\u30a8\u30e9\u30fc\u56de\u907f"),console.log(o),console.log(F)},$=function(e,t){var s=n.find((function(t){return n[e]===t}));if(s.time2=s.time2+t,N(s.time2),e%2===0){var i=n.find((function(t){return n[e+1]===t}));s.count=s.time1+s.time2-(i.time1+i.time2),i.count=i.time1+i.time2-(s.time1+s.time2),S(s.count),s.time1>i.time1&&s.time2>i.time2?(s.marks=Number(P),i.marks=Number(R)):s.time1<i.time1&&s.time2<i.time2?(s.marks=Number(R),i.marks=Number(P)):s.time1<i.time1&&s.time2>i.time2||s.time1>i.time1&&s.time2<i.time2?s.time1+s.time2>i.time1+i.time2?(s.marks=Number(E),i.marks=Number(G)):s.time1+s.time2<i.time1+i.time2?(s.marks=Number(G),i.marks=Number(E)):(s.marks=Number(Q),i.marks=Number(Q)):(s.marks=Number(R),i.marks=Number(R))}else{var c=n.find((function(t){return n[e-1]===t}));s.count=s.time1+s.time2-(c.time1+c.time2),c.count=c.time1+c.time2-(s.time1+s.time2),S(s.count),s.time1>c.time1&&s.time2>c.time2?(s.marks=Number(P),c.marks=Number(R)):s.time1<c.time1&&s.time2<c.time2?(s.marks=Number(R),c.marks=Number(P)):s.time1<c.time1&&s.time2>c.time2||s.time1>c.time1&&s.time2<c.time2?s.time1+s.time2>c.time1+c.time2?(s.marks=Number(E),c.marks=Number(G)):s.time1+s.time2<c.time1+c.time2?(s.marks=Number(G),c.marks=Number(E)):(s.marks=Number(Q),c.marks=Number(Q)):(s.marks=Number(R),c.marks=Number(R))}for(var r=function(e){var t=h.find((function(t){return h[e]===t})),s=n.filter((function(e){return e.name===t.name})).reduce((function(e,t){return e+t.count}),0);h.find((function(e){return e.name===t.name})).score=s;var i=n.filter((function(e){return e.name===t.name})).reduce((function(e,t){return e+t.marks}),0);h.find((function(e){return e.name===t.name})).point=i},m=0;m<h.length;m++)r(m);console.log(d),console.log(F)};return Object(a.jsx)("div",{className:"Process",children:Object(a.jsx)("div",{className:"ProcessContainer",children:Object(a.jsxs)("div",{className:"ProcessMain",children:[Object(a.jsxs)("div",{className:"ProcessList",children:[Object(a.jsx)("h1",{children:"\u3010\u30c1\u30fc\u30e0\u4e00\u89a7\u3011"}),Object(a.jsx)("p",{children:"Q\uff1a\u8a66\u5408\u6570\u3000P\uff1a\u52dd\u3061\u70b9\u3000S\uff1a\u5f97\u5931\u70b9\u5dee"}),Object(a.jsxs)("div",{className:"ProcessList__Border",children:[Object(a.jsxs)("div",{className:"Head",children:[Object(a.jsx)("div",{className:"name",children:"Team"}),Object(a.jsx)("button",{className:"gross",onClick:function(){var e;e=h.sort((function(e,t){return e.gross<t.gross?1:e.gross>t.gross?-1:0})),Y("gross"),console.log(X),f(e)},children:"Q"}),Object(a.jsx)("button",{className:"point",onClick:function(){var e;e=h.sort((function(e,t){return e.point<t.point?1:e.point>t.point?-1:0})),Y("point"),f(e)},children:"P"}),Object(a.jsx)("button",{className:"score",onClick:function(){var e;e=h.sort((function(e,t){return e.score<t.score?1:e.score>t.score?-1:0})),Y("score"),f(e)},children:"S"}),Object(a.jsx)("div",{className:"space"})]}),Object(a.jsx)("ul",{className:"Item",children:h.map((function(e,t){return Object(a.jsx)("li",{className:"ItemList",children:Object(a.jsxs)("div",{className:"ItemList__data",children:[Object(a.jsx)("div",{className:"name",children:e.name}),Object(a.jsx)("div",{className:"gross",children:e.gross}),Object(a.jsx)("div",{className:"point",children:e.point}),Object(a.jsx)("div",{className:"score",children:e.score}),Object(a.jsx)("button",{className:"AddPlan",onClick:function(){return function(e){var t=h.find((function(t){return h[e]===t}));i([].concat(Object(l.a)(n),[{name:t.name,time1:0,time2:0,count:0,marks:0}]));var s=n.filter((function(t){return t.name===h[e].name})).length+1;h[e].gross=s}(t)},children:"\u8a66\u5408"})]})},e.name)}))})]}),Object(a.jsx)("h1",{children:"\u3010\u52dd\u3061\u70b9\u3092\u5165\u529b\u3011"}),Object(a.jsxs)("div",{className:"Insert",children:[Object(a.jsxs)("div",{className:"InsertContent",children:[Object(a.jsx)("div",{className:"InsertContent__text",children:"\u52dd\u3061"}),Object(a.jsx)("input",{className:"InsertContent__entry",type:"number",id:"win",onChange:function(e){w(e.target.value),A(0)}})]}),Object(a.jsxs)("div",{className:"InsertContent",children:[Object(a.jsx)("div",{className:"InsertContent__text",children:"\u5206\u52dd"}),Object(a.jsx)("input",{className:"InsertContent__entry",type:"number",id:"draw_win",onChange:function(e){D(e.target.value)}})]}),Object(a.jsxs)("div",{className:"InsertContent",children:[Object(a.jsx)("div",{className:"InsertContent__text",children:"\u5206\u5206"}),Object(a.jsx)("input",{className:"InsertContent__entry",type:"number",id:"draw_draw",onChange:function(e){W(e.target.value)}})]}),Object(a.jsxs)("div",{className:"InsertContent",children:[Object(a.jsx)("div",{className:"InsertContent__text",children:"\u5206\u8ca0"}),Object(a.jsx)("input",{className:"InsertContent__entry",type:"number",id:"draw_lose",onChange:function(e){K(e.target.value)}})]})]}),Object(a.jsx)("h1",{children:"\u3010\u30c1\u30fc\u30e0\u3092\u767b\u9332\u3011"}),Object(a.jsx)("div",{className:"Form",children:Object(a.jsxs)("div",{className:"FormContent",children:[Object(a.jsx)("input",{className:"FormContent__name",type:"text",id:"name",value:C,onChange:function(e){_(e.target.value)}}),Object(a.jsx)("button",{className:"FormContent__button",type:"submit",onClick:function(){f([].concat(Object(l.a)(h),[{id:C,name:C,gross:0,point:0,score:0}])),_("")},children:"\u30c1\u30fc\u30e0\u767b\u9332"})]})}),Object(a.jsx)("div",{className:"upButton",onClick:function(){window.scrollTo({top:0,behavior:"smooth"})}}),Object(a.jsx)("div",{className:"downButton",onClick:function(){var e=document.documentElement,t=e.scrollHeight-e.clientHeight;window.scrollTo({behavior:"smooth",left:0,top:t})}})]}),Object(a.jsxs)("div",{className:"Result",children:[Object(a.jsx)("h1",{className:"title",children:"\u3010\u5bfe\u6226\u8868\u3011"}),Object(a.jsx)("div",{className:"Result__Border",children:n.map((function(e,t){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("div",{className:t%2===0?"Flex left":"Flex right",children:[Object(a.jsx)("div",{className:"FlexNumber",children:t%2===0&&Object(a.jsxs)("div",{className:"FlexNumber__item",children:["\u7b2c",t/2+1,"\u8a66\u5408"]})}),Object(a.jsxs)("div",{className:"FlexCross",children:[t%2!==0&&Object(a.jsx)("div",{className:"FlexCross__item",children:"\u2716"}),t%2!==0&&Object(a.jsx)("div",{className:"FlexCross__item",children:"\u2716"})]}),Object(a.jsxs)("div",{className:"FlexCount",children:[t%2===0&&Object(a.jsxs)("div",{className:"FlexCount__Button",children:[Object(a.jsx)("button",{className:"SubCount top",onClick:function(){return Z(t,-1)},children:"-"}),Object(a.jsx)("button",{className:"AddCount top",onClick:function(){return Z(t,5)},children:"+"})]}),t%2!==0&&Object(a.jsx)("div",{className:"FlexCount__Point",children:Object(a.jsx)("div",{className:"ResultTime",children:e.time1})}),t%2===0&&Object(a.jsxs)("div",{className:"FlexCount__Button",children:[Object(a.jsx)("button",{className:"SubCount bottom",onClick:function(){return $(t,-1)},children:"-"}),Object(a.jsx)("button",{className:"AddCount bottom",onClick:function(){return $(t,5)},children:"+"})]}),t%2!==0&&Object(a.jsx)("div",{className:"FlexCount__Point",children:Object(a.jsx)("div",{className:"ResultTime",children:e.time2})})]}),Object(a.jsxs)("div",{className:"FlexName",children:[Object(a.jsx)("div",{className:"ResultName",children:Object(a.jsx)("p",{className:"ResultName__text",children:e.name})}),Object(a.jsx)("button",{className:"DeleteButton",onClick:function(){return function(e){var t=n.find((function(t){return n[e]===t})),s=Object(l.a)(n);s.splice(e,1),i(s);var c=s.filter((function(e){return e.name===t.name})),r=h.find((function(e){return e.name===t.name})),m=c.length;r.gross=m}(t)},children:"\u53d6\u6d88"})]}),Object(a.jsxs)("div",{className:"FlexCount",children:[t%2!==0&&Object(a.jsxs)("div",{className:"FlexCount__Button",children:[Object(a.jsx)("button",{className:"SubCount top",onClick:function(){return Z(t,-1)},children:"-"}),Object(a.jsx)("button",{className:"AddCount top",onClick:function(){return Z(t,5)},children:"+"})]}),t%2===0&&Object(a.jsx)("div",{className:"FlexCount__Point",children:Object(a.jsx)("div",{className:"ResultTime",children:e.time1})}),t%2!==0&&Object(a.jsxs)("div",{className:"FlexCount__Button",children:[Object(a.jsx)("button",{className:"SubCount bottom",onClick:function(){return $(t,-1)},children:"-"}),Object(a.jsx)("button",{className:"AddCount bottom",onClick:function(){return $(t,5)},children:"+"})]}),t%2===0&&Object(a.jsx)("div",{className:"FlexCount__Point",children:Object(a.jsx)("div",{className:"ResultTime",children:e.time2})})]})]},t),t%2===0&&Object(a.jsxs)("div",{className:"Cross",children:[Object(a.jsx)("div",{className:"Cross__item",children:Object(a.jsx)("div",{className:"Cross__text",children:"\u2716"})}),Object(a.jsx)("div",{className:"Cross__item",children:Object(a.jsx)("div",{className:"Cross__text",children:"\u2716"})})]})]})}))}),Object(a.jsx)("div",{})]})]})})})},b=function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(o,{}),Object(a.jsx)(j,{}),Object(a.jsx)(u,{})]})},d=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,s=t.getFID,i=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),s(e),i(e),c(e),r(e)}))};r.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(b,{})}),document.getElementById("root")),d()}},[[15,1,2]]]);
//# sourceMappingURL=main.1806c41e.chunk.js.map