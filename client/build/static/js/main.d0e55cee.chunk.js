(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),i=a(17),r=a.n(i),s=(a(37),a(38),a(9)),l=a(2),o=a.p+"static/media/firma.985e61c7.png",d=(a(39),a(0));var u=function(){return Object(d.jsxs)("div",{className:"container",children:[Object(d.jsxs)("div",{className:"welcome",children:[Object(d.jsx)("h1",{className:"title",children:"Welcome to our planet"}),Object(d.jsx)(s.b,{to:"/home",children:Object(d.jsx)("h3",{className:"button",children:"Lets explore!"})})]}),Object(d.jsx)("img",{src:"https://hdwallpaperim.com/wp-content/uploads/2017/08/22/444627-space-Earth.jpg",alt:"Earth"}),Object(d.jsx)("img",{src:o,alt:"sign",id:"sign"})]})},j=a(3),b=a(10),m=a(11),h=a(5),p=a.n(h),O=a(12),x=a.n(O),v="GET_ALL_COUNTRIES",f="GET_COUNTRY",y="FILTER_BY_CONTINENT",g="SORT_COUNTRIES",N="SORT_POPULATION",C=function(){return function(){var e=Object(m.a)(p.a.mark((function e(t){var a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("http://localhost:3001/countries");case 2:return a=e.sent,e.abrupt("return",t({type:v,payload:a.data}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},F=function(e){return{type:y,payload:e}},S=function(e){return{type:g,payload:e}};a(63);function w(e){var t=e.id,a=e.name,n=e.img,c=e.continent,i={background:"url(".concat(n,") "),backgroundSize:"100% 100%",backgroundPosition:"center",backgroundColor:"rgba(255, 255, 255, 0.5)"};return Object(d.jsx)("div",{className:"country-card",style:i,children:Object(d.jsxs)("div",{className:"country-text",children:[Object(d.jsxs)("h1",{children:[a,", ",t]}),Object(d.jsx)("h2",{children:c})]})})}a(64);function P(e){var t=e.handleContinentFilter,a=e.handleSortingCountries,n=e.handleSortingPopulation;e.handleActivityFilter;return Object(d.jsxs)("div",{className:"filter-container",children:[Object(d.jsx)("input",{type:"checkbox",name:"filter-btn",id:"filter-btn"}),Object(d.jsxs)("div",{className:"filter",children:[Object(d.jsxs)("div",{className:"filter-title",children:[Object(d.jsx)("label",{htmlFor:"filter-btn",children:Object(d.jsx)("h1",{children:"Apply filters"})}),Object(d.jsx)("label",{htmlFor:"filter-btn",children:Object(d.jsx)("h1",{children:Object(d.jsx)("i",{className:"fa fa-filter"})})})]}),Object(d.jsxs)("div",{className:"filter-content",id:"sort",children:[Object(d.jsx)("h2",{children:"Sort by country name"}),Object(d.jsxs)("label",{htmlFor:"az-radio",className:"radio-label",onChange:function(e){return a(e.target.value)},children:[Object(d.jsx)("input",{type:"radio",name:"sort-radio",id:"az-radio",className:"input-radio",value:"az"}),Object(d.jsx)("div",{className:"radio"}),"A-Z"]}),Object(d.jsxs)("label",{htmlFor:"za-radio",className:"radio-label",onChange:function(e){return a(e.target.value)},children:[Object(d.jsx)("input",{type:"radio",name:"sort-radio",id:"za-radio",className:"input-radio",value:"za"}),Object(d.jsx)("div",{className:"radio"}),"Z-A"]})]}),Object(d.jsxs)("div",{className:"filter-content",id:"sort",children:[Object(d.jsx)("h2",{children:"Sort by country population"}),Object(d.jsxs)("label",{htmlFor:"asc-radio",className:"radio-label",onChange:function(e){return n(e.target.value)},children:[Object(d.jsx)("input",{type:"radio",name:"sort-radio",id:"asc-radio",className:"input-radio",value:"asc"}),Object(d.jsx)("div",{className:"radio"}),"Ascedent"]}),Object(d.jsxs)("label",{htmlFor:"desc-radio",className:"radio-label",onChange:function(e){return n(e.target.value)},children:[Object(d.jsx)("input",{type:"radio",name:"sort-radio",id:"desc-radio",className:"input-radio",value:"desc"}),Object(d.jsx)("div",{className:"radio"}),"Descendent"]})]}),Object(d.jsxs)("div",{className:"filter-content",id:"filter-continent",children:[Object(d.jsx)("h2",{children:"Filter by continent"}),Object(d.jsxs)("label",{htmlFor:"america",className:"radio-label",onChange:function(e){return t(e.target.value)},children:[Object(d.jsx)("input",{type:"radio",name:"continent-radio",id:"america",value:"america",className:"input-radio"}),Object(d.jsx)("div",{className:"radio"}),"America"]}),Object(d.jsxs)("label",{htmlFor:"europe",className:"radio-label",onChange:function(e){return t(e.target.value)},children:[Object(d.jsx)("input",{type:"radio",name:"continent-radio",id:"europe",value:"europe",className:"input-radio"}),Object(d.jsx)("div",{className:"radio"}),"Europe"]}),Object(d.jsxs)("label",{htmlFor:"africa",className:"radio-label",onChange:function(e){return t(e.target.value)},children:[Object(d.jsx)("input",{type:"radio",name:"continent-radio",id:"africa",value:"africa",className:"input-radio"}),Object(d.jsx)("div",{className:"radio"}),"Africa"]}),Object(d.jsxs)("label",{htmlFor:"asia",className:"radio-label",onChange:function(e){return t(e.target.value)},children:[Object(d.jsx)("input",{type:"radio",name:"continent-radio",id:"asia",value:"asia",className:"input-radio"}),Object(d.jsx)("div",{className:"radio"}),"Asia"]}),Object(d.jsxs)("label",{htmlFor:"oceania",className:"radio-label",onChange:function(e){return t(e.target.value)},children:[Object(d.jsx)("input",{type:"radio",name:"continent-radio",id:"oceania",value:"oceania",className:"input-radio"}),Object(d.jsx)("div",{className:"radio"}),"Oceania"]}),Object(d.jsxs)("label",{htmlFor:"all",className:"radio-label",onChange:function(e){return t(e.target.value)},children:[Object(d.jsx)("input",{type:"radio",name:"continent-radio",id:"all",value:"",className:"input-radio",defaultChecked:!0}),Object(d.jsx)("div",{className:"radio"}),"All"]})]})]})]})}a(65);function k(){return Object(d.jsxs)("div",{className:"footer",children:[Object(d.jsx)("img",{src:o,alt:"footer"}),Object(d.jsx)("p",{children:"Developed & designed by."})]})}a(66);function E(){var e=Object(n.useState)(""),t=Object(j.a)(e,2),a=t[0],c=t[1];function i(){return(i=Object(m.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a||alert("Please enter a valid country"),e.next=3,x.a.get("http://localhost:3001/countries?name=".concat(a));case 3:n=e.sent,window.location.replace("http://localhost:3000/country/".concat(n.data[0].id)),c("");case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(d.jsxs)("div",{className:"search-bar",children:[Object(d.jsx)("input",{type:"text",className:"search-text",placeholder:"Search country...",value:a,onChange:function(e){return c(e.target.value)}}),Object(d.jsx)("span",{className:"icon",onClick:function(e){return function(e){return i.apply(this,arguments)}(e)},children:Object(d.jsx)("i",{className:"fa fa-search"})})]})}a(67);function I(e){var t=e.onSearch;return Object(d.jsxs)("div",{className:"nav-container",children:[Object(d.jsx)(s.b,{to:"/home",style:{textDecoration:"none"},children:Object(d.jsx)("h1",{className:"nav-link",children:"Countries"})}),Object(d.jsx)(E,{onSearch:t})]})}a(68);function A(e){var t=e.countriesPerPage,a=e.allCountries,c=e.paging,i=e.currentPage,r=[];console.log(i);var s=Object(n.useState)(i-1),l=Object(j.a)(s,2),o=l[0],u=l[1];function b(e){u(e-1),c(e-1)}o=i;for(var m=1;m<=Math.ceil(a/t);m++)r.push(m);var h=r.slice(0,5);return h.includes(i+1)||(h=r.slice(i-3,i+2)),console.log(i,h),Object(d.jsxs)("div",{className:"paging-container",children:[i<r[r.length-1]&&Object(d.jsx)("div",{className:"selected-page",children:Object(d.jsxs)("label",{htmlFor:"prev",className:"page-label",onClick:function(e){return b(i+1)},children:[Object(d.jsx)("input",{type:"radio",name:"page",id:o,className:"radio-page"}),Object(d.jsx)("div",{className:"inactive-page",children:">"})]})}),h&&h.reverse().map((function(e){return e===i?Object(d.jsx)("div",{className:"selected-page",id:e,children:Object(d.jsxs)("label",{htmlFor:e,className:"page-label",onClick:function(t){return b(e)},children:[Object(d.jsx)("input",{type:"radio",name:"page",id:e,className:"radio-page"}),Object(d.jsx)("div",{className:"active-page",children:o})]})},e):Object(d.jsx)("div",{className:"selected-page",children:Object(d.jsxs)("label",{htmlFor:e,className:"page-label",onClick:function(t){return b(e)},children:[Object(d.jsx)("input",{type:"radio",name:"page",id:o,className:"radio-page"}),Object(d.jsx)("div",{className:"inactive-page",children:e})]})},e)})),i>1&&Object(d.jsx)("div",{className:"selected-page",children:Object(d.jsxs)("label",{htmlFor:"prev",className:"page-label",onClick:function(e){return b(i-1)},children:[Object(d.jsx)("input",{type:"radio",name:"page",id:o,className:"radio-page"}),Object(d.jsx)("div",{className:"inactive-page",children:"<"})]})})]})}a(69);function B(){var e=Object(b.b)(),t=Object(b.c)((function(e){return e.countries})),a=Object(n.useState)(1),c=Object(j.a)(a,2),i=c[0],r=c[1],l=Object(n.useState)(10),o=Object(j.a)(l,2),u=o[0],m=(o[1],Object(n.useState)("")),h=Object(j.a)(m,2),p=(h[0],h[1]),O=i*u,x=O-u,v=t.slice(x,O);return Object(n.useEffect)((function(){e(C())}),[e]),Object(d.jsxs)("div",{className:"main-container",children:[Object(d.jsx)(I,{}),Object(d.jsxs)("div",{className:"grid-container",children:[Object(d.jsx)("div",{className:"filters",children:Object(d.jsx)(P,{handleContinentFilter:function(t){e(F(t)),r(1)},handleSortingCountries:function(t){e(S(t)),r(1),p("Sorted ".concat(t))},handleSortingPopulation:function(t){e({type:N,payload:t}),r(1),p("Sorted ".concat(t))}})}),Object(d.jsx)("div",{className:"cards",children:v&&v.map((function(e){return Object(d.jsx)(s.b,{to:"/country/".concat(e.id.toLowerCase()),style:{textDecoration:"none"},children:Object(d.jsx)(w,{id:e.id,name:e.name,img:e.img,continent:e.continent})},e.id)}))}),Object(d.jsx)("div",{className:"paging",children:Object(d.jsx)(A,{countriesPerPage:u,allCountries:t.length,paging:function(e){r(e+1)},currentPage:i})}),Object(d.jsx)(k,{})]})]})}a(70),a(71);function L(e){var t=e.activities,a=Object(n.useState)(t),c=Object(j.a)(a,2),i=c[0],r=c[1];console.log(i,"initial state");var l=function(){var e=Object(m.a)(p.a.mark((function e(a){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("all"!==a.target.value){e.next=4;break}r(t),e.next=8;break;case 4:return e.next=6,t.filter((function(e){return e.season.toLowerCase()===a.target.value.toLowerCase()}));case 6:n=e.sent,r(n);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(d.jsxs)("div",{className:"activities",children:[Object(d.jsxs)("div",{className:"activities-filter",children:[Object(d.jsxs)("div",{className:"activity-filter",children:[Object(d.jsx)("label",{htmlFor:"season-filter",children:"Filter by season: "}),Object(d.jsxs)("select",{name:"season-filter",id:"season-filter",onChange:function(e){return l(e)},children:[Object(d.jsx)("option",{value:"all",children:"All"}),Object(d.jsx)("option",{value:"summer",children:"Summer"}),Object(d.jsx)("option",{value:"autumm",children:"Autumm"}),Object(d.jsx)("option",{value:"winter",children:"Winter"}),Object(d.jsx)("option",{value:"spring",children:"Spring"})]})]}),Object(d.jsxs)("div",{className:"activity-filter",children:[Object(d.jsx)("label",{htmlFor:"difficulty-filter",children:"Filter by difficulty: "}),Object(d.jsxs)("select",{name:"difficulty-filter",id:"difficulty-filter",children:[Object(d.jsx)("option",{value:"1",children:"1 star"}),Object(d.jsx)("option",{value:"2",children:"2 stars"}),Object(d.jsx)("option",{value:"3",children:"3 stars"}),Object(d.jsx)("option",{value:"4",children:"4 stars"}),Object(d.jsx)("option",{value:"5",children:"5 stars"})]})]})]}),Object(d.jsxs)("div",{className:"card-container",children:[i&&i.map((function(e){for(var t=e.difficulty,a=[],n=0;n<t;n++)a.push(n);return Object(d.jsxs)("div",{className:"activity-card",children:[Object(d.jsx)("h3",{children:e.name}),Object(d.jsx)("div",{className:"stars-container",children:a.map((function(e){return Object(d.jsx)("p",{id:"stars"})}))}),Object(d.jsx)("p",{children:e.duration}),Object(d.jsx)("p",{children:e.season})]},e.id)})),Object(d.jsx)(s.b,{to:"/activity/create",style:{textDecoration:"none"},children:Object(d.jsx)("div",{className:"add activity-card",children:Object(d.jsx)("div",{children:"+"})})})]})]})}function T(){var e=Object(l.g)().countryId,t=Object(b.b)();Object(n.useEffect)((function(){var a;t((a=e,function(){var e=Object(m.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.a.get("http://localhost:3001/countries/".concat(a));case 3:return n=e.sent,e.abrupt("return",t({type:f,payload:n.data[0]}));case 7:e.prev=7,e.t0=e.catch(0),alert("Country not found");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()))}),[t,e]);var a=Object(b.c)((function(e){return e.country}));return Object(d.jsxs)("div",{className:"details-container",children:[Object(d.jsx)(I,{}),Object(d.jsx)("div",{className:"grid-container",children:Object(d.jsxs)("div",{className:"country-info",children:[Object(d.jsxs)("h1",{className:"country-name",children:[a.name,", ",a.id]}),Object(d.jsxs)("div",{className:"country-details",children:[Object(d.jsxs)("div",{className:"country-flag",children:[Object(d.jsx)("img",{src:a.img,alt:"flag not found"}),Object(d.jsx)("div",{className:"mapouter",children:Object(d.jsx)("div",{className:"gmap_canvas",children:Object(d.jsx)("iframe",{width:"100%",height:"100%",id:"gmap_canvas",src:"https://maps.google.com/maps?q=".concat(a.name,"&t=&z=5&ie=UTF8&iwloc=&output=embed"),frameBorder:"0",scrolling:"no",marginHeight:"0",marginWidth:"0",title:"map"})})})]}),Object(d.jsxs)("div",{className:"details",children:[Object(d.jsxs)("ul",{children:[Object(d.jsxs)("li",{children:["Continent: ",a.continent]}),Object(d.jsxs)("li",{children:["Subregion: ",a.subregion]}),Object(d.jsxs)("li",{children:["Capital: ",a.capital]}),Object(d.jsxs)("li",{children:["Area: ",Intl.NumberFormat("en-US").format(a.area)," Km\xb2"]}),Object(d.jsxs)("li",{children:["Population: ",Intl.NumberFormat("en-US").format(a.population)," habitants "]})]}),a.activities&&Object(d.jsx)(L,{activities:a.activities})]})]})]})}),Object(d.jsx)(k,{})]})}var z=a(32);a(72);function D(){var e=Object(b.b)(),t=Object(b.c)((function(e){return e.countries})),a=Object(n.useState)(""),c=Object(j.a)(a,2),i=(c[0],c[1]),r=Object(n.useState)([]),s=Object(j.a)(r,2),l=s[0],o=s[1],u=Object(n.useState)(0),h=Object(j.a)(u,2),O=h[0],v=h[1];Object(n.useEffect)((function(){e(C())}),[e]);var f=function(){var e=Object(m.a)(p.a.mark((function e(t){var a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,x.a.post("http://localhost:3001/activity",t);case 3:a=e.sent,console.log(a),a.status&&alert(a.data);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=function(){var e=document.getElementById("activity-name").value,t=document.getElementById("duration-time").value,a=document.getElementById("season-dropdown").value;(function(e,t,a,n,c){var i=[];return e?(document.getElementById("name").style.setProperty("border","none"),i.push(1)):document.getElementById("name").style.setProperty("border","solid 4px #dc3545"),t&&":"!==t.value?(document.getElementById("duration").style.setProperty("border","none"),i.push(1)):document.getElementById("duration").style.setProperty("border","solid 4px #dc3545"),0===a?document.getElementById("difficulty").style.setProperty("border","solid 4px #dc3545"):(document.getElementById("difficulty").style.setProperty("border","none"),i.push(1)),"- Pick one -"===n?document.getElementById("season").style.setProperty("border","solid 4px #dc3545"):(document.getElementById("season").style.setProperty("border","none"),i.push(1)),0===c.length?document.getElementById("country").style.setProperty("border","solid 4px #dc3545"):(document.getElementById("country").style.setProperty("border","none"),i.push(1)),5===i.length})(e,t,O,a,l)&&f({name:e,duration:t,difficulty:O,season:a,countries:l})};return Object(d.jsxs)("div",{className:"create",children:[Object(d.jsx)(I,{}),Object(d.jsx)("div",{className:"grid-container",children:Object(d.jsxs)("div",{className:"activity-form",children:[Object(d.jsxs)("div",{className:"field",id:"name",children:[Object(d.jsx)("label",{htmlFor:"activity-name",children:"Activity name"}),Object(d.jsx)("input",{type:"text",name:"activity-name",id:"activity-name"})]}),Object(d.jsxs)("div",{className:"field",id:"duration",children:[Object(d.jsx)("label",{htmlFor:"activity-duration",children:"Duration"}),Object(d.jsxs)("div",{className:"time-picker",children:[Object(d.jsx)("input",{type:"text",placeholder:"HH : MM",name:"duration-time",id:"duration-time",onChange:function(e){return function(e){var t=e.target.value,a=["0","1","2","3","4","5","6","7","8","9"];for(var n in t?document.getElementById("duration").style.setProperty("border","none"):document.getElementById("duration").style.setProperty("border","solid 4px #dc3545"),t)(a.includes(t[n])||":"===t[n])&&t.length<=5?2===t.length&&(e.target.value=t+":"):e.target.value=t.slice(0,-1)}(e)}}),Object(d.jsx)("label",{className:"time-icon"})]})]}),Object(d.jsxs)("div",{className:"field",id:"difficulty",children:[Object(d.jsx)("label",{htmlFor:"activity-difficulty",children:"Activity difficulty"}),Object(d.jsxs)("div",{className:"rating",children:[Object(d.jsx)("input",{type:"radio",name:"star",id:"star1",value:5,onChange:function(e){return v(e.target.value)}}),Object(d.jsx)("label",{htmlFor:"star1",id:"star-label"}),Object(d.jsx)("input",{type:"radio",name:"star",id:"star2",value:4,onChange:function(e){return v(e.target.value)}}),Object(d.jsx)("label",{htmlFor:"star2",id:"star-label"}),Object(d.jsx)("input",{type:"radio",name:"star",id:"star3",value:3,onChange:function(e){return v(e.target.value)}}),Object(d.jsx)("label",{htmlFor:"star3",id:"star-label"}),Object(d.jsx)("input",{type:"radio",name:"star",id:"star4",value:2,onChange:function(e){return v(e.target.value)}}),Object(d.jsx)("label",{htmlFor:"star4",id:"star-label"}),Object(d.jsx)("input",{type:"radio",name:"star",id:"star5",value:1,onChange:function(e){return v(e.target.value)}}),Object(d.jsx)("label",{htmlFor:"star5",id:"star-label"})]})]}),Object(d.jsxs)("div",{className:"field",id:"season",children:[Object(d.jsx)("label",{htmlFor:"activity-season",children:"Season"}),Object(d.jsxs)("select",{name:"season",id:"season-dropdown",placeholder:"Pick",children:[Object(d.jsx)("option",{disabled:!0,selected:!0,children:"- Pick one -"}),Object(d.jsx)("option",{value:"Summer",children:"Summer"}),Object(d.jsx)("option",{value:"Autumm",children:"Autumm"}),Object(d.jsx)("option",{value:"Winter",children:"Winter"}),Object(d.jsx)("option",{value:"Spring",children:"Spring"})]})]}),Object(d.jsxs)("div",{className:"field",id:"continent",children:[Object(d.jsx)("label",{htmlFor:"activity-continent",children:"Continent"}),Object(d.jsxs)("select",{name:"continent",id:"continent-dropdown",placeholder:"Pick",onChange:function(t){return a=t.target.value,e(F(a)),e(S("az")),void i(a);var a},children:[Object(d.jsx)("option",{disabled:!0,selected:!0,children:"- Pick one -"}),Object(d.jsx)("option",{value:"America",children:"America"}),Object(d.jsx)("option",{value:"Europe",children:"Europe"}),Object(d.jsx)("option",{value:"Africa",children:"Africa"}),Object(d.jsx)("option",{value:"Asia",children:"Asia"}),Object(d.jsx)("option",{value:"Oceania",children:"Oceania"})]})]}),Object(d.jsxs)("div",{className:"field",id:"country",children:[Object(d.jsx)("label",{htmlFor:"activity-country",children:"Countries"}),Object(d.jsxs)("select",{name:"country",id:"country-dropdown",placeholder:"Pick",onChange:function(e){return function(e){var t=Object(z.a)(l);document.getElementById(e).setAttribute("style","background-color: rgb(0, 8, 51); color: #EDF0F1"),l.includes(e)||(t.push(e),o(t))}(e.target.value)},children:[Object(d.jsx)("option",{disabled:!0,children:"- Pick one -"}),t.map((function(e){return Object(d.jsx)("option",{id:e.name,children:e.name},e.id)}))]})]}),Object(d.jsxs)("div",{className:"country-selection",children:[Object(d.jsx)("p",{children:"Selected Countries"}),Object(d.jsx)("div",{className:"selected-countries",children:l.length>0?l.map((function(e){return Object(d.jsxs)("div",{className:"selected-country",children:[Object(d.jsx)("p",{children:e}),Object(d.jsx)("p",{className:"delete",onClick:function(){return function(e){var t=l.filter((function(t){return t!==e}));o(t)}(e)},value:e,children:"x"})]},e)})):Object(d.jsx)("p",{children:"No countries selected"})})]}),Object(d.jsx)("div",{className:"create-button",children:Object(d.jsx)("button",{onClick:function(){return y()},children:"Create activity"})})]})}),Object(d.jsx)(k,{})]})}var _=function(){return Object(d.jsx)(s.a,{children:Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)(l.c,{children:[Object(d.jsx)(l.a,{exact:!0,path:"/",element:Object(d.jsx)(u,{})}),Object(d.jsx)(l.a,{exact:!0,path:"/home",element:Object(d.jsx)(B,{})}),Object(d.jsx)(l.a,{exact:!0,path:"/country/:countryId",element:Object(d.jsx)(T,{})}),Object(d.jsx)(l.a,{exact:!0,path:"/activity/create",element:Object(d.jsx)(D,{})})]})})})},U=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,75)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),i(e),r(e)}))},R=a(18),W=a(30),M=a(31),H=a(8),G={countries:[],allCountries:[],country:{}};var J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return Object(H.a)(Object(H.a)({},e),{},{countries:t.payload,allCountries:t.payload});case y:var a=e.allCountries,n=a;return t.payload&&(n=a.filter((function(e){return e.continent.toLowerCase().includes(t.payload.toLowerCase())}))),Object(H.a)(Object(H.a)({},e),{},{countries:n});case g:var c=[];return"az"===t.payload.toLowerCase()?c=e.countries.sort((function(e,t){return e.name>t.name?1:e.name<t.name?-1:0})):"za"===t.payload.toLowerCase()&&(c=e.countries.sort((function(e,t){return e.name>t.name?-1:e.name<t.name?1:0}))),Object(H.a)(Object(H.a)({},e),{},{countries:c});case N:var i=e.countries;return"asc"===t.payload.toLowerCase()?i=e.countries.sort((function(e,t){return e.population>t.population?1:e.population<t.population?-1:0})):"desc"===t.payload.toLowerCase()&&(i=e.countries.sort((function(e,t){return e.population>t.population?-1:e.population<t.population?1:0}))),Object(H.a)(Object(H.a)({},e),{},{countries:i});case f:return Object(H.a)(Object(H.a)({},e),{},{country:t.payload});default:return e}},Y=Object(R.createStore)(J,Object(W.composeWithDevTools)(Object(R.applyMiddleware)(M.a)));r.a.render(Object(d.jsx)(b.a,{store:Y,children:Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(_,{})})}),document.getElementById("root")),U()}},[[73,1,2]]]);
//# sourceMappingURL=main.d0e55cee.chunk.js.map