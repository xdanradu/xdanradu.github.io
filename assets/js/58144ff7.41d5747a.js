"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1745],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>g});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(a),u=r,g=m["".concat(l,".").concat(u)]||m[u]||d[u]||o;return a?n.createElement(g,s(s({ref:t},c),{},{components:a})):n.createElement(g,s({ref:t},c))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[m]="string"==typeof e?e:r,s[1]=i;for(var p=2;p<o;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},1649:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const o={slug:"rx-js-loading-flag",title:"RxJS Loading Flag",authors:"dradu",tags:["rxjs","essentials","is-loading-flag"]},s=void 0,i={permalink:"/blog/rx-js-loading-flag",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2023-06-17-rx-js-is-loading.md",source:"@site/blog/2023-06-17-rx-js-is-loading.md",title:"RxJS Loading Flag",description:"Ways to implement the isLoading flag",date:"2023-06-17T00:00:00.000Z",formattedDate:"June 17, 2023",tags:[{label:"rxjs",permalink:"/blog/tags/rxjs"},{label:"essentials",permalink:"/blog/tags/essentials"},{label:"is-loading-flag",permalink:"/blog/tags/is-loading-flag"}],readingTime:1.08,hasTruncateMarker:!1,authors:[{name:"Dan Radu",title:"Freelancer",url:"https://danradu.ro",imageURL:"https://github.com/xdanradu.png",key:"dradu"}],frontMatter:{slug:"rx-js-loading-flag",title:"RxJS Loading Flag",authors:"dradu",tags:["rxjs","essentials","is-loading-flag"]},prevItem:{title:"RxJS Spartacus Analytics",permalink:"/blog/rx-js-sap-composable-storefront-events"},nextItem:{title:"RxJS Pluck Operator",permalink:"/blog/rx-js-pluck"}},l={authorsImageUrls:[void 0]},p=[],c={toc:p},m="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Ways to implement the isLoading flag"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"export interface HttpRequestState<T> {\n  isLoading: boolean;\n  value?: T;\n  error?: HttpErrorResponse | Error;\n}\n\nexport class SomeComponent {\n  constructor(\n    private readonly activatedRoute: ActivatedRoute,\n    private readonly myDataService: MyDataService\n  ) {}\n\n  readonly myDataState$: Observable<HttpRequestState<MyData>> = this.activatedRoute.params.pipe(\n    pluck('id'),\n    switchMap(\n      (id) => this.myDataService.getMyData(id).pipe(\n        map((value) => ({isLoading: false, value})),\n        catchError(error => of({isLoading: false, error})),\n        startWith({isLoading: true})\n      )\n    ),\n  );\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<ng-container *ngIf="myDataState$ | async as data">\n  <my-loading-spinner *ngIf="data.isLoading"></my-loading-spinner>\n  <my-error-component *ngIf="data.error" [error]="data.error"></my-error-component>\n  <my-data-component *ngIf="data.value" [data]="data.value"></my-data-component>\n</ng-container>\n')),(0,r.kt)("h1",{id:"improved-separation-of-concerns"},"Improved separation of concerns"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// presentational component class\nexport class SomeLayoutComponent {\n  @Input()\n  state: HttpRequestState<MyData>;\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- Presentational component template --\x3e\n<my-loading-spinner *ngIf="state.isLoading"></my-loading-spinner>\n<my-error-component *ngIf="state.error" [error]="state.error"></my-error-component>\n<my-data-component *ngIf="state.value" [data]="state.value"></my-data-component>\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- Smart component template --\x3e\n<some-layout-component\n  [state]="myDataState$ | async"\n></some-layout-component>\n')),(0,r.kt)("h1",{id:"or-separated-observables"},"Or separated observables"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"export class SomeComponent {\n  constructor(\n    private readonly activatedRoute: ActivatedRoute,\n    private readonly myDataService: MyDataService\n  ) {}\n\n  readonly myDataState$: Observable<HttpRequestState<MyData>> = this.activatedRoute.params.pipe(\n    pluck('id'),\n    switchMap(\n      (id) => this.myDataService.getMyData(id).pipe(\n        map((value) => ({isLoading: false, value})),\n        catchError(error => of({isLoading: false, error})),\n        startWith({isLoading: true}),\n        shareReplay(1) // Added shareReplay to allow multicasting this\n      )\n    ),\n  );\n\n  readonly loading$ = this.myDataState$.pipe(map(state => state.isLoading));\n  readonly error$ = this.myDataState$.pipe(map(state => state.error));\n  readonly myData$ = this.myDataState$.pipe(map(state => state.data));\n}\n")),(0,r.kt)("p",null,"shareReplay(1) is preferred over share() for robustness, as it ensures none of the subscriptions miss the initial state."))}d.isMDXComponent=!0}}]);