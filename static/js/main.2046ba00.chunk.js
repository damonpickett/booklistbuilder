(this["webpackJsonpbook-list-builder"]=this["webpackJsonpbook-list-builder"]||[]).push([[0],{34:function(e,t,c){},35:function(e,t,c){},43:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c(25),a=c.n(s),i=(c(34),c(29)),r=c(9),o=(c(35),c(44)),l=c(45),j=c(26),b=c(14),u=c(0);var d=function(){return Object(u.jsx)("div",{className:"nav",children:Object(u.jsx)(o.a,{children:Object(u.jsxs)(l.a,{children:[Object(u.jsx)(j.a,{xs:!0,sm:!0,md:8,children:Object(u.jsx)(b.b,{className:"logo-link",to:"/",children:Object(u.jsx)("h1",{children:"BookListBuilder"})})}),Object(u.jsx)(j.a,{xs:!0,sm:!0,md:4,children:Object(u.jsx)("ul",{children:Object(u.jsx)(b.b,{className:"navbar-link",to:"/mylist",children:Object(u.jsx)("li",{children:"My List"})})})})]})})})};var h=function(){return Object(u.jsx)(o.a,{className:"instructions",children:Object(u.jsx)(l.a,{children:Object(u.jsx)(j.a,{children:Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:"Welcome"}),Object(u.jsx)("p",{children:"Use BookListBuilder to find books and create a reading list. Not sure what you're looking for? Generate a random quote above and see if anyone's famous words leave you curious for more."})]})})})})};var O=function(){return Object(u.jsx)("div",{className:"footer",children:Object(u.jsx)("div",{children:Object(u.jsxs)("ul",{children:[Object(u.jsx)(b.b,{className:"footer-link",to:"/",children:Object(u.jsx)("li",{children:"Home"})}),Object(u.jsx)(b.b,{className:"footer-link",to:"/mylist",children:Object(u.jsx)("li",{children:"My List"})})]})})})},m=c(48),x=c(49);var f=function(){var e=Object(n.useState)(""),t=Object(r.a)(e,2),c=t[0],s=t[1],a=function(){fetch("https://type.fit/api/quotes").then((function(e){return e.json()})).then((function(e){s(e[Math.floor(Math.random()*e.length)])}))};return Object(n.useEffect)((function(){a()}),[]),Object(u.jsx)(o.a,{children:Object(u.jsx)(l.a,{children:Object(u.jsx)(j.a,{children:Object(u.jsxs)(m.a.Body,{className:"random-quote",children:[Object(u.jsx)("p",{children:c.text}),Object(u.jsx)("p",{children:Object(u.jsx)("span",{className:"author-bold",children:c.author})}),Object(u.jsx)(x.a,{variant:"warning",onClick:a,children:"New Quote"})]})})})})},v=c(47),k=c(46);var g=function(e){var t=Object(n.useState)(""),c=Object(r.a)(t,2),s=c[0],a=c[1],i=Object(n.useState)([]),l=Object(r.a)(i,2),j=l[0],b=l[1],d=j.map((function(t){return Object(u.jsx)("div",{className:"search-results-cards",children:Object(u.jsxs)(m.a,{style:{width:"12rem"},children:[t.volumeInfo.imageLinks?Object(u.jsx)("img",{className:"search-results-img",src:t.volumeInfo.imageLinks.thumbnail,alt:t.volumeInfo.title}):Object(u.jsxs)("p",{children:["No image available",Object(u.jsx)("br",{}),t.volumeInfo.title," by ",t.volumeInfo.authors]}),Object(u.jsx)("button",{className:"search-results-button",onClick:function(){return e.addBookToList(t)},children:"Add to Reading List"})]})},t.id)}));return Object(u.jsx)(o.a,{children:Object(u.jsxs)("div",{className:"book-finder",children:[Object(u.jsxs)(v.a,{className:"book-search-form",onSubmit:function(e){e.preventDefault(),fetch("https://www.googleapis.com/books/v1/volumes?q=".concat(s,"&key=").concat("AIzaSyCUAkQ_kTnVDaR6bOZL_1efEXJbVWwwx6c","&maxResults=20")).then((function(e){return e.json()})).then((function(e){b(e.items)}))},children:[Object(u.jsx)(v.a.Control,{className:"book-search-input",onChange:function(e){var t=e.target.value;a(t)},type:"text",placeholder:"Search for books"}),Object(u.jsx)(x.a,{variant:"success",className:"book-search-button",type:"submit",children:"Search"})]}),Object(u.jsx)("div",{className:"card-container",children:Object(u.jsx)(k.a,{children:d})})]})})};var p=function(e){var t=e.readingList.map((function(t,c){return console.log(c),Object(u.jsx)("div",{className:"search-results-cards",children:Object(u.jsxs)(m.a,{style:{width:"12rem"},children:[t.volumeInfo.imageLinks?Object(u.jsx)("img",{className:"search-results-img",src:t.volumeInfo.imageLinks.thumbnail,alt:t.volumeInfo.title}):Object(u.jsxs)("p",{children:["No image available",Object(u.jsx)("br",{}),t.volumeInfo.title," by ",t.volumeInfo.authors]}),Object(u.jsx)("button",{className:"book-list-button",onClick:function(){return e.removeBook(c)},children:"Remove from list"})]})},t.id)}));return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:"book-list-container",children:[Object(u.jsx)("h2",{children:"My Reading List"}),Object(u.jsx)(k.a,{children:t})]})})},N=c(6);var y=function(){var e=Object(n.useState)([]),t=Object(r.a)(e,2),c=t[0],s=t[1],a=function(e){s([].concat(Object(i.a)(c),[e]))},o=function(e){var t=c.filter((function(t,c){return c!==e}));s(t)};return Object(u.jsx)("div",{className:"App",children:Object(u.jsxs)("div",{className:"app-container",children:[Object(u.jsx)(d,{}),Object(u.jsx)(f,{}),Object(u.jsx)(N.a,{exact:!0,path:"/",render:function(){return Object(u.jsx)(h,{})}}),Object(u.jsx)(N.a,{exact:!0,path:"/",render:function(){return Object(u.jsx)(g,{addBookToList:a})}}),Object(u.jsx)(N.a,{exact:!0,path:"/mylist",render:function(){return Object(u.jsx)(p,{removeBook:o,readingList:c})}}),Object(u.jsx)(O,{})]})})},L=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,50)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),n(e),s(e),a(e),i(e)}))};c(42);a.a.render(Object(u.jsx)(b.a,{children:Object(u.jsx)(y,{})}),document.getElementById("root")),L()}},[[43,1,2]]]);
//# sourceMappingURL=main.2046ba00.chunk.js.map