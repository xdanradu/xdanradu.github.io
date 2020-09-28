(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{16:function(e,t,n){e.exports=n(30)},21:function(e,t,n){},22:function(e,t,n){},23:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(5),c=n.n(o),s=(n(21),n(1)),u=n(2),i=n(4),l=n(3),m=(n(22),function(e){var t=e.totalCounters;return a.a.createElement("nav",null,a.a.createElement("div",{class:"topnav",id:"myTopnav"},a.a.createElement("a",{id:"home",href:"#home",class:"active"},"Home"),a.a.createElement("a",{id:"about",href:"#about"},"About"),a.a.createElement("a",{id:"skills",href:"#skills"},"Skills"),a.a.createElement("a",{id:"experience",href:"#experience"},"Experience"),a.a.createElement("a",{id:"portfolio",href:"#portfolio"},"Portfolio"),a.a.createElement("a",{id:"contact",href:"#contact"},"Contact"),a.a.createElement("span",{className:"m-2"},"Active counters"),a.a.createElement("span",{className:"badge badge-pill badge-secondary"},t),a.a.createElement("a",{id:"breadcrumb",onClick:function(e){return function(e){e.preventDefault();var t=document.getElementById("myTopnav");"topnav"===t.className?t.className+=" responsive":t.className="topnav"}(e)},class:"icon"},a.a.createElement("i",{class:"fa fa-bars"}))))}),p=function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this;return console.log("Counter rendered"),a.a.createElement(a.a.Fragment,null,this.props.children,a.a.createElement("span",{className:this.getBadgeClasses()},this.formatCount()),a.a.createElement("button",{className:"btn btn-primary m-2",onClick:function(){return e.props.onIncrement(e.props.counter)}},"Increment"),a.a.createElement("button",{className:"btn btn-danger m-2",onClick:function(){return e.props.onDelete(e.props.counter.id)}},"Delete"))}},{key:"getBadgeClasses",value:function(){var e="badge m-3 p-3 badge-";return e+=0===this.props.counter.value?"warning":"primary"}},{key:"formatCount",value:function(){var e=this.props.counter.value;return 0===e?"Zero":e}}]),n}(r.Component),d=function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){console.log("Counters rendered");var e=this.props,t=e.onCreate,n=e.onReset,r=e.onDelete,o=e.onIncrement,c=e.counters;return a.a.createElement("div",null,a.a.createElement("button",{className:"btn btn-primary m-2",onClick:t},"Create"),a.a.createElement("button",{className:"btn btn-primary m-2",onClick:n},"Reset"),c.map((function(e){return a.a.createElement(p,{className:"m-3",key:e.id,counter:e,onDelete:r,onIncrement:o},a.a.createElement("h4",null,"Counter #",e.id))})))}}]),n}(r.Component),f=(n(23),n(7)),b=function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(m,{totalCounters:this.props.counters.filter((function(e){return e.value>0})).length}),a.a.createElement("main",{className:"container"},a.a.createElement(d,{onCreate:this.props.created,onReset:this.props.reseted,onIncrement:this.props.incremented,onDelete:this.props.deleted,counters:this.props.counters})))}}]),n}(r.Component),v={incremented:function(e){return{type:"incremented",payload:{counter:e}}},created:function(){return{type:"created"}},reseted:function(){return{type:"reseted"}},deleted:function(e){return{type:"deleted",payload:{id:e}}}},h=Object(f.b)((function(e){return{counters:e.counters}}),v)(b);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var E=n(6),y=n(15),g=n(14),C={user:{name:""},counters:[{id:1,value:0},{id:2,value:1},{id:3,value:2}]},O=n(8);var j=Object(E.b)((function(e,t){switch(t.type){case"incremented":var n=Object(g.a)(e.counters),r=n.indexOf(t.payload.counter);return n[r]=Object(y.a)({},t.payload.counter),n[r].value+=1,{counters:n};case"created":return Object(O.a)(e,(function(t){if(0==e.counters.length)t.counters.push({id:1,value:0});else{var n=e.counters.reduce((function(e,t){return e.id>t.id?e:t})).id+1;t.counters.push({id:n,value:0})}}));case"reseted":return Object(O.a)(e,(function(e){console.log(e),e.counters.map((function(e){return e.value=0,e}))}));case"deleted":return console.log(t),Object(O.a)(e,(function(e){e.counters.splice(e.counters.findIndex((function(e){return e.id===t.payload.id})),1)}))}return C}));c.a.render(a.a.createElement(f.a,{store:j},a.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[16,1,2]]]);
//# sourceMappingURL=main.0b6ee49c.chunk.js.map