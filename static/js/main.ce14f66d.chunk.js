(this.webpackJsonp2set=this.webpackJsonp2set||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var s=n(1),i=n.n(s),c=n(7),r=n.n(c),m=(n(12),n(13),n(0)),a=function(){return Object(m.jsx)("div",{className:"Footer",children:"\xa9 All rights reserved by Tetsuhiro.Hirabayashi"})},o=n(5),l=n(2),u=function(){var e=Object(s.useState)([]),t=Object(l.a)(e,2),n=t[0],i=t[1],c=Object(s.useState)(0),r=Object(l.a)(c,2),a=r[0],u=r[1],j=Object(s.useState)(0),b=Object(l.a)(j,2),d=b[0],N=b[1],O=Object(s.useState)([]),x=Object(l.a)(O,2),h=x[0],v=x[1],f=Object(s.useState)(),C=Object(l.a)(f,2),k=C[0],_=C[1],g=Object(s.useState)(0),p=Object(l.a)(g,2),F=p[0],S=p[1],I=Object(s.useState)(0),y=Object(l.a)(I,2),P=y[0],w=y[1],T=Object(s.useState)(0),B=Object(l.a)(T,2),R=B[0],A=B[1],L=Object(s.useState)(0),H=Object(l.a)(L,2),M=H[0],E=H[1],D=Object(s.useState)(0),J=Object(l.a)(D,2),Q=J[0],W=J[1],q=Object(s.useState)(0),z=Object(l.a)(q,2),G=z[0],K=z[1],U=Object(s.useState)(""),V=Object(l.a)(U,2),X=V[0],Y=V[1],Z=Object(s.useState)(""),$=Object(l.a)(Z,2),ee=$[0],te=$[1],ne=Object(s.useState)(""),se=Object(l.a)(ne,2),ie=se[0],ce=se[1];Object(s.useEffect)((function(){document.title=""===ee?"2setMatch":ee}));var re=function(e,t){var s=n.find((function(t){return n[e]===t}));if(s.time1=s.time1+t,u(s.time1),e%2===0){var i=n.find((function(t){return n[e+1]===t}));s.count=s.time1+s.time2-(i.time1+i.time2),i.count=i.time1+i.time2-(s.time1+s.time2),S(s.count),s.time1>i.time1&&s.time2>i.time2?(s.marks=Number(P),i.marks=Number(R)):s.time1<i.time1&&s.time2<i.time2?(s.marks=Number(R),i.marks=Number(P)):s.time1<i.time1&&s.time2>i.time2||s.time1>i.time1&&s.time2<i.time2?s.time1+s.time2>i.time1+i.time2?(s.marks=Number(M),i.marks=Number(G)):s.time1+s.time2<i.time1+i.time2?(s.marks=Number(G),i.marks=Number(M)):(s.marks=Number(Q),i.marks=Number(Q)):(s.marks=Number(R),i.marks=Number(R))}else{var c=n.find((function(t){return n[e-1]===t}));s.count=s.time1+s.time2-(c.time1+c.time2),c.count=c.time1+c.time2-(s.time1+s.time2),S(s.count),s.time1>c.time1&&s.time2>c.time2?(s.marks=Number(P),c.marks=Number(R)):s.time1<c.time1&&s.time2<c.time2?(s.marks=Number(R),c.marks=Number(P)):s.time1<c.time1&&s.time2>c.time2||s.time1>c.time1&&s.time2<c.time2?s.time1+s.time2>c.time1+c.time2?(s.marks=Number(M),c.marks=Number(G)):s.time1+s.time2<c.time1+c.time2?(s.marks=Number(G),c.marks=Number(M)):(s.marks=Number(Q),c.marks=Number(Q)):(s.marks=Number(R),c.marks=Number(R))}for(var r=function(e){var t=h.find((function(t){return h[e]===t})),s=n.filter((function(e){return e.name===t.name})).reduce((function(e,t){return e+t.count}),0);h.find((function(e){return e.name===t.name})).score=s;var i=n.filter((function(e){return e.name===t.name})).reduce((function(e,t){return e+t.marks}),0);h.find((function(e){return e.name===t.name})).point=i},m=0;m<h.length;m++)r(m);console.log("\u3053\u3053\u304b\u3089\u30a8\u30e9\u30fc\u56de\u907f"),console.log(a),console.log(F)},me=function(e,t){var s=n.find((function(t){return n[e]===t}));if(s.time2=s.time2+t,N(s.time2),e%2===0){var i=n.find((function(t){return n[e+1]===t}));s.count=s.time1+s.time2-(i.time1+i.time2),i.count=i.time1+i.time2-(s.time1+s.time2),S(s.count),s.time1>i.time1&&s.time2>i.time2?(s.marks=Number(P),i.marks=Number(R)):s.time1<i.time1&&s.time2<i.time2?(s.marks=Number(R),i.marks=Number(P)):s.time1<i.time1&&s.time2>i.time2||s.time1>i.time1&&s.time2<i.time2?s.time1+s.time2>i.time1+i.time2?(s.marks=Number(M),i.marks=Number(G)):s.time1+s.time2<i.time1+i.time2?(s.marks=Number(G),i.marks=Number(M)):(s.marks=Number(Q),i.marks=Number(Q)):(s.marks=Number(R),i.marks=Number(R))}else{var c=n.find((function(t){return n[e-1]===t}));s.count=s.time1+s.time2-(c.time1+c.time2),c.count=c.time1+c.time2-(s.time1+s.time2),S(s.count),s.time1>c.time1&&s.time2>c.time2?(s.marks=Number(P),c.marks=Number(R)):s.time1<c.time1&&s.time2<c.time2?(s.marks=Number(R),c.marks=Number(P)):s.time1<c.time1&&s.time2>c.time2||s.time1>c.time1&&s.time2<c.time2?s.time1+s.time2>c.time1+c.time2?(s.marks=Number(M),c.marks=Number(G)):s.time1+s.time2<c.time1+c.time2?(s.marks=Number(G),c.marks=Number(M)):(s.marks=Number(Q),c.marks=Number(Q)):(s.marks=Number(R),c.marks=Number(R))}for(var r=function(e){var t=h.find((function(t){return h[e]===t})),s=n.filter((function(e){return e.name===t.name})).reduce((function(e,t){return e+t.count}),0);h.find((function(e){return e.name===t.name})).score=s;var i=n.filter((function(e){return e.name===t.name})).reduce((function(e,t){return e+t.marks}),0);h.find((function(e){return e.name===t.name})).point=i},m=0;m<h.length;m++)r(m);console.log(d),console.log(F)};return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("div",{className:"Header",children:ee?Object(m.jsx)("div",{className:"WebTitle",children:ee}):Object(m.jsx)("div",{className:"WebTitle",children:"2setMatch"})}),Object(m.jsx)("div",{className:"Process",children:Object(m.jsx)("div",{className:"ProcessContainer",children:Object(m.jsxs)("div",{className:"ProcessMain",children:[Object(m.jsxs)("div",{className:"ProcessList",children:[h.length>0&&Object(m.jsxs)("div",{children:[Object(m.jsx)("h1",{className:"teamList",children:"\u3010\u30c1\u30fc\u30e0\u4e00\u89a7\u3011"}),Object(m.jsx)("p",{children:"Q\uff1a\u8a66\u5408\u6570\u3000P\uff1a\u52dd\u3061\u70b9\u3000S\uff1a\u5f97\u5931\u70b9\u5dee"}),Object(m.jsxs)("div",{className:"ProcessList__Border",children:[Object(m.jsxs)("div",{className:"Head",children:[Object(m.jsx)("div",{className:"name",children:"Team"}),Object(m.jsx)("button",{className:"gross",onClick:function(){var e;e=h.sort((function(e,t){return e.gross<t.gross?1:e.gross>t.gross?-1:0})),Y("gross"),console.log(X),v(e)},children:"Q"}),Object(m.jsx)("button",{className:"point",onClick:function(){var e;e=h.sort((function(e,t){return e.point<t.point?1:e.point>t.point?-1:0})),Y("point"),v(e)},children:"P"}),Object(m.jsx)("button",{className:"score",onClick:function(){var e;e=h.sort((function(e,t){return e.score<t.score?1:e.score>t.score?-1:0})),Y("score"),v(e)},children:"S"}),Object(m.jsx)("div",{className:"space"})]}),Object(m.jsx)("ul",{className:"Item",children:h.map((function(e,t){return Object(m.jsx)("li",{className:"ItemList",children:Object(m.jsxs)("div",{className:"ItemList__data",children:[Object(m.jsx)("div",{className:"name",children:e.name}),Object(m.jsx)("div",{className:"gross",children:e.gross}),Object(m.jsx)("div",{className:"point",children:e.point}),Object(m.jsx)("div",{className:"score",children:e.score}),Object(m.jsx)("button",{className:"AddPlan",onClick:function(){return function(e){var t=h.find((function(t){return h[e]===t}));i([].concat(Object(o.a)(n),[{name:t.name,time1:0,time2:0,count:0,marks:0}]));var s=n.filter((function(t){return t.name===h[e].name})).length+1;h[e].gross=s}(t)},children:"\u8a66\u5408"})]})},e.name)}))})]})]}),!ee&&Object(m.jsxs)("div",{children:[Object(m.jsx)("h1",{children:"\uff11\uff0e\u5927\u4f1a\u540d\u3092\u767b\u9332"}),Object(m.jsx)("div",{className:"Form",children:Object(m.jsxs)("div",{className:"FormContent",children:[Object(m.jsx)("input",{className:"FormContent__name",type:"text",id:"name",onChange:function(e){ce(e.target.value),console.log(ie)}}),Object(m.jsx)("button",{className:"FormContent__button",type:"submit",onClick:function(){te(ie)},children:"\u767b \u9332"})]})})]}),Object(m.jsx)("h1",{children:"\uff12\uff0e\u52dd\u3061\u70b9\u3092\u5165\u529b"}),Object(m.jsxs)("div",{className:"Insert",children:[Object(m.jsxs)("div",{className:"InsertContent",children:[Object(m.jsx)("div",{className:"InsertContent__text",children:"\u52dd\u3061"}),Object(m.jsx)("input",{className:"InsertContent__entry",type:"number",id:"win",onChange:function(e){w(e.target.value),A(0)}})]}),Object(m.jsxs)("div",{className:"InsertContent",children:[Object(m.jsx)("div",{className:"InsertContent__text",children:"\u5206\u52dd"}),Object(m.jsx)("input",{className:"InsertContent__entry",type:"number",id:"draw_win",onChange:function(e){E(e.target.value)}})]}),Object(m.jsxs)("div",{className:"InsertContent",children:[Object(m.jsx)("div",{className:"InsertContent__text",children:"\u5206\u5206"}),Object(m.jsx)("input",{className:"InsertContent__entry",type:"number",id:"draw_draw",onChange:function(e){W(e.target.value)}})]}),Object(m.jsxs)("div",{className:"InsertContent",children:[Object(m.jsx)("div",{className:"InsertContent__text",children:"\u5206\u8ca0"}),Object(m.jsx)("input",{className:"InsertContent__entry",type:"number",id:"draw_lose",onChange:function(e){K(e.target.value)}})]})]}),Object(m.jsx)("h1",{children:"\uff13\uff0e\u30c1\u30fc\u30e0\u3092\u767b\u9332"}),Object(m.jsx)("div",{className:"Form",children:Object(m.jsxs)("div",{className:"FormContent",children:[Object(m.jsx)("input",{className:"FormContent__name",type:"text",id:"name",value:k,onChange:function(e){_(e.target.value)}}),Object(m.jsx)("button",{className:"FormContent__button",type:"submit",onClick:function(){v([].concat(Object(o.a)(h),[{id:k,name:k,gross:0,point:0,score:0}])),_("")},children:"\u767b \u9332"})]})}),h.length>0&&Object(m.jsx)("div",{className:"upButton",onClick:function(){window.scrollTo({top:0,behavior:"smooth"})}}),h.length>0&&Object(m.jsx)("div",{className:"downButton",onClick:function(){var e=document.documentElement,t=e.scrollHeight-e.clientHeight;window.scrollTo({behavior:"smooth",left:0,top:t})}})]}),n.length>0&&Object(m.jsxs)("div",{className:"Result",children:[Object(m.jsx)("h1",{className:"title",children:"\u3010\u5bfe\u6226\u8868\u3011"}),Object(m.jsx)("div",{className:"Result__Border",children:n.map((function(e,t){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("div",{className:t%2===0?"Flex left":"Flex right",children:[Object(m.jsx)("div",{className:"FlexNumber",children:t%2===0&&Object(m.jsxs)("div",{className:"FlexNumber__item",children:["\u7b2c",t/2+1,"\u8a66\u5408"]})}),Object(m.jsxs)("div",{className:"FlexCross",children:[t%2!==0&&Object(m.jsx)("div",{className:"FlexCross__item",children:"-"}),t%2!==0&&Object(m.jsx)("div",{className:"FlexCross__item",children:"-"})]}),Object(m.jsxs)("div",{className:"FlexCount",children:[t%2===0&&Object(m.jsxs)("div",{className:"FlexCount__Button",children:[Object(m.jsx)("button",{className:"SubCount top",onClick:function(){return re(t,-1)},children:"-"}),Object(m.jsx)("button",{className:"AddCount top",onClick:function(){return re(t,5)},children:"+"})]}),t%2!==0&&Object(m.jsx)("div",{className:"FlexCount__Point",children:Object(m.jsx)("div",{className:"ResultTime",children:e.time1})}),t%2===0&&Object(m.jsxs)("div",{className:"FlexCount__Button",children:[Object(m.jsx)("button",{className:"SubCount bottom",onClick:function(){return me(t,-1)},children:"-"}),Object(m.jsx)("button",{className:"AddCount bottom",onClick:function(){return me(t,5)},children:"+"})]}),t%2!==0&&Object(m.jsx)("div",{className:"FlexCount__Point",children:Object(m.jsx)("div",{className:"ResultTime",children:e.time2})})]}),Object(m.jsxs)("div",{className:"FlexName",children:[Object(m.jsx)("div",{className:"ResultName",children:Object(m.jsx)("p",{className:"ResultName__text",children:e.name})}),Object(m.jsx)("button",{className:"DeleteButton",onClick:function(){return function(e){var t=n.find((function(t){return n[e]===t})),s=Object(o.a)(n);s.splice(e,1),i(s);var c=s.filter((function(e){return e.name===t.name})),r=h.find((function(e){return e.name===t.name})),m=c.length;r.gross=m}(t)},children:"\u53d6\u6d88"})]}),Object(m.jsxs)("div",{className:"FlexCount",children:[t%2!==0&&Object(m.jsxs)("div",{className:"FlexCount__Button",children:[Object(m.jsx)("button",{className:"SubCount top",onClick:function(){return re(t,-1)},children:"-"}),Object(m.jsx)("button",{className:"AddCount top",onClick:function(){return re(t,5)},children:"+"})]}),t%2===0&&Object(m.jsx)("div",{className:"FlexCount__Point",children:Object(m.jsx)("div",{className:"ResultTime",children:e.time1})}),t%2!==0&&Object(m.jsxs)("div",{className:"FlexCount__Button",children:[Object(m.jsx)("button",{className:"SubCount bottom",onClick:function(){return me(t,-1)},children:"-"}),Object(m.jsx)("button",{className:"AddCount bottom",onClick:function(){return me(t,5)},children:"+"})]}),t%2===0&&Object(m.jsx)("div",{className:"FlexCount__Point",children:Object(m.jsx)("div",{className:"ResultTime",children:e.time2})})]})]},t),t%2===0&&Object(m.jsxs)("div",{className:"Cross",children:[Object(m.jsx)("div",{className:"Cross__item",children:Object(m.jsx)("div",{className:"Cross__text",children:"-"})}),Object(m.jsx)("div",{className:"Cross__item",children:Object(m.jsx)("div",{className:"Cross__text",children:"-"})})]})]})}))}),Object(m.jsx)("div",{})]})]})})})]})},j=function(){return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)(u,{}),Object(m.jsx)(a,{})]})},b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,s=t.getFID,i=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),s(e),i(e),c(e),r(e)}))};r.a.render(Object(m.jsx)(i.a.StrictMode,{children:Object(m.jsx)(j,{})}),document.getElementById("root")),b()}},[[15,1,2]]]);
//# sourceMappingURL=main.ce14f66d.chunk.js.map