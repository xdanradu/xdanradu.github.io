"use strict";(self.webpackChunkfrontend_training_docs=self.webpackChunkfrontend_training_docs||[]).push([[296],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,c=e.originalType,i=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),f=l(r),d=o,m=f["".concat(i,".").concat(d)]||f[d]||p[d]||c;return r?n.createElement(m,s(s({ref:t},u),{},{components:r})):n.createElement(m,s({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=r.length,s=new Array(c);s[0]=f;var a={};for(var i in t)hasOwnProperty.call(t,i)&&(a[i]=t[i]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var l=2;l<c;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},4553:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return a},contentTitle:function(){return i},metadata:function(){return l},toc:function(){return u},default:function(){return f}});var n=r(7462),o=r(3366),c=(r(7294),r(3905)),s=["components"],a={title:"CSS selectors",description:"Information about CSS selectors",sidebar_label:"Selectors"},i=void 0,l={unversionedId:"css/selectors",id:"css/selectors",title:"CSS selectors",description:"Information about CSS selectors",source:"@site/articles/css/selectors.md",sourceDirName:"css",slug:"/css/selectors",permalink:"/css/selectors",editUrl:"https://github.com/xdanradu/xdanradu.github.io/tree/master/docs/articles/css/selectors.md",tags:[],version:"current",lastUpdatedBy:"radud1",lastUpdatedAt:1640701637,formattedLastUpdatedAt:"12/28/2021",frontMatter:{title:"CSS selectors",description:"Information about CSS selectors",sidebar_label:"Selectors"},sidebar:"docs",previous:{title:"Prerequisites",permalink:"/introduction/prerequisites"},next:{title:"Animations",permalink:"/css/animations"}},u=[],p={toc:u};function f(e){var t=e.components,r=(0,o.Z)(e,s);return(0,c.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,(0,c.kt)("strong",{parentName:"p"},"CSS selectors specificity")," types:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-html"},'    <div class="blue" style="color:red !important">...\n\x3c!--\n    .blue {\n        color:blue !important;\n    }   \n\n    - can be changed only from JS\n    - id vs class\n    --\x3e\n')),(0,c.kt)("p",null,"pseudo classes, combinators"))}f.isMDXComponent=!0}}]);