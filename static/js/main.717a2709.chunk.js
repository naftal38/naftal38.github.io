(this.webpackJsonpshop=this.webpackJsonpshop||[]).push([[0],{66:function(e,t,c){},67:function(e,t,c){},68:function(e,t,c){},98:function(e,t,c){"use strict";c.r(t);var n=c(0),i=c.n(n),a=c(22),s=c.n(a),r=(c(66),c(46)),j=c(20),o=(c.p,c(106)),l=c(104),d=c(107),b=c(105),h=c(60),O=(c(67),[{id:0,title:"White and Black",content:"Born in France",price:12e4},{id:1,title:"Red Knit",content:"Born in Seoul",price:11e4},{id:2,title:"Grey Yordan",content:"Born in the States",price:13e4}]),p=c(7),x=(c(68),c(1));function u(e){return Object(x.jsxs)("p",{children:["\uc7ac\uace0 : ",e.\uc7ac\uace0[0]]})}var m=function(e){var t=Object(p.g)().param,c=Object(p.f)(),i=Object(n.useState)(!0),a=Object(j.a)(i,2),s=a[0],r=a[1],o=Object(n.useState)(""),l=Object(j.a)(o,2),d=l[0],b=l[1];Object(n.useEffect)((function(){var e=setTimeout((function(){r(!1)}),2e3);return console.log("\ube44\uccb4"),function(){clearTimeout(e)}}),[]);var h=e.shoes.find((function(e){return e.id==t}));return Object(x.jsxs)("div",{className:"container",children:[Object(x.jsx)("p",{className:"red",children:"Detail "}),d,Object(x.jsx)("br",{}),Object(x.jsx)("input",{onChange:function(e){b(e.target.value)}}),s?Object(x.jsx)("div",{className:"my-alert_two",children:Object(x.jsx)("p",{children:"\uc81c\uace0\uac00 \uc5bc\ub9c8 \ub0a8\uc9c0 \uc54a\uc558\uc2b5\ub2c8\ub2e4."})}):null,Object(x.jsxs)("div",{className:"row",children:[Object(x.jsx)("div",{className:"col-md-6",children:Object(x.jsx)("img",{src:"https://codingapple1.github.io/shop/shoes1.jpg",width:"100%"})}),Object(x.jsxs)("div",{className:"col-md-6 mt-4",children:[Object(x.jsx)("h4",{className:"pt-5",children:h.title}),Object(x.jsx)("p",{children:h.content}),Object(x.jsxs)("p",{children:[h.price,"\uc6d0"]}),Object(x.jsx)(u,{"\uc7ac\uace0":e.\uc7ac\uace0}),Object(x.jsx)("button",{className:"btn btn-danger",onClick:function(){e.\uc7ac\uace0\ubcc0\uacbd([9,10,11])},children:"\uc8fc\ubb38\ud558\uae30"}),"\xa0",Object(x.jsx)("button",{className:"btn btn-danger",onClick:function(){c.goBack()},children:"\ub4a4\ub85c\uac00\uae30"})]})]})]})},f=c(26),g=c(57),v=c.n(g);function N(e){var t=[];return e.dataz.map((function(e,c){var n="https://codingapple1.github.io/shop/shoes"+(c+1)+".jpg",i="/detail/"+c;t.push(Object(x.jsxs)("div",{className:"col-md-4",children:[Object(x.jsx)(f.b,{to:i,children:Object(x.jsx)("img",{src:n,width:"100%"})}),Object(x.jsx)("h4",{children:e.title}),Object(x.jsxs)("p",{children:[e.content," & ",e.price," "]})]}))})),t}var k=function(){var e=Object(n.useState)(O),t=Object(j.a)(e,2),c=t[0],i=t[1],a=Object(n.useState)([10,11,12]),s=Object(j.a)(a,2),u=s[0];return s[1],Object(x.jsxs)("div",{className:"App",children:[Object(x.jsx)(o.a,{bg:"light",expand:"lg",children:Object(x.jsxs)(l.a,{children:[Object(x.jsx)(o.a.Brand,{href:"#home",children:"React-Bootstrap"}),Object(x.jsx)(o.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(x.jsx)(o.a.Collapse,{id:"basic-navbar-nav",children:Object(x.jsxs)(d.a,{className:"me-auto",children:[Object(x.jsx)(d.a.Link,{href:"#home",as:f.b,to:"/",children:"Home"}),Object(x.jsx)(d.a.Link,{href:"#link",as:f.b,to:"/detail",children:"Detail"}),Object(x.jsxs)(b.a,{title:"Dropdown",id:"basic-nav-dropdown",children:[Object(x.jsx)(b.a.Item,{href:"#action/3.1",children:"Important thing"}),Object(x.jsx)(b.a.Item,{href:"#action/3.2",children:"Another action"}),Object(x.jsx)(b.a.Item,{href:"#action/3.3",children:"Something"}),Object(x.jsx)(b.a.Divider,{}),Object(x.jsx)(b.a.Item,{href:"#action/3.4",children:"Separated link"})]})]})})]})}),Object(x.jsxs)(p.c,{children:[Object(x.jsxs)(p.a,{exact:!0,path:"/",children:[Object(x.jsxs)("div",{className:"jumbotron background",children:[Object(x.jsx)("h1",{children:"20% season Off"}),Object(x.jsx)("p",{children:"This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information."}),Object(x.jsx)("p",{children:Object(x.jsx)(h.a,{variant:"primary",children:"Learn more"})})]}),Object(x.jsxs)("div",{className:"container",children:[Object(x.jsx)("div",{className:"row",children:Object(x.jsx)(N,{dataz:c})}),Object(x.jsx)("button",{className:"btn btn-primary",onClick:function(){v.a.get("https://codingapple1.github.io/shop/data2.json").then((function(e){i(Object(r.a)(c),Object(r.a)(e.data))})).catch((function(){console.log("\uc2e4\ud328")}))},children:"\ub354\ubcf4\uae30"})]})]}),Object(x.jsx)(p.a,{path:"/detail/:param",children:Object(x.jsx)(m,{shoes:c,"\uc7ac\uace0":u})}),Object(x.jsx)(p.a,{path:"/:id",children:Object(x.jsx)("div",{children:"\uc544\ubb34\uac70\ub098 \uc801\uc5c8\uc744\ub54c \uc774\uac70 \ubcf4\uc5ec\uc8fc\uc148"})})]})]})},S=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,108)).then((function(t){var c=t.getCLS,n=t.getFID,i=t.getFCP,a=t.getLCP,s=t.getTTFB;c(e),n(e),i(e),a(e),s(e)}))};s.a.render(Object(x.jsx)(i.a.StrictMode,{children:Object(x.jsx)(f.a,{children:Object(x.jsx)(k,{})})}),document.getElementById("root")),S()}},[[98,1,2]]]);
//# sourceMappingURL=main.717a2709.chunk.js.map