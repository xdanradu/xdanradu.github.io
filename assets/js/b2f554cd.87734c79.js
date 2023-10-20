"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1477],{10:t=>{t.exports=JSON.parse('{"blogPosts":[{"id":"js-event-handling","metadata":{"permalink":"/blog/js-event-handling","editUrl":"https://github.com/xdanradu/xdanradu.github.io/tree/master/docusaurus/blog/2023-10-20-event-handling/index.md","source":"@site/blog/2023-10-20-event-handling/index.md","title":"JS Event Handling","description":"Multiple ways to manage events in JS in progress","date":"2023-10-20T00:00:00.000Z","formattedDate":"October 20, 2023","tags":[{"label":"JS","permalink":"/blog/tags/js"},{"label":"essentials","permalink":"/blog/tags/essentials"},{"label":"events","permalink":"/blog/tags/events"}],"readingTime":0.045,"hasTruncateMarker":false,"authors":[{"name":"Dan Radu","title":"Admin","url":"https://danradu.ro","imageURL":"https://github.com/xdanradu.png","key":"dradu"}],"frontMatter":{"slug":"js-event-handling","title":"JS Event Handling","authors":"dradu","tags":["JS","essentials","events"]},"nextItem":{"title":"RxJS Event Forwarding","permalink":"/blog/rx-js-event-forwarding"}},"content":"Multiple ways to manage events in JS `in progress`"},{"id":"rx-js-event-forwarding","metadata":{"permalink":"/blog/rx-js-event-forwarding","editUrl":"https://github.com/xdanradu/xdanradu.github.io/tree/master/docusaurus/blog/2023-07-13-rx-js-events-composition.md","source":"@site/blog/2023-07-13-rx-js-events-composition.md","title":"RxJS Event Forwarding","description":"","date":"2023-07-13T00:00:00.000Z","formattedDate":"July 13, 2023","tags":[{"label":"rxjs","permalink":"/blog/tags/rxjs"},{"label":"event-forwarding","permalink":"/blog/tags/event-forwarding"},{"label":"angular","permalink":"/blog/tags/angular"}],"readingTime":0.32,"hasTruncateMarker":false,"authors":[{"name":"Dan Radu","title":"Admin","url":"https://danradu.ro","imageURL":"https://github.com/xdanradu.png","key":"dradu"}],"frontMatter":{"slug":"rx-js-event-forwarding","title":"RxJS Event Forwarding","authors":"dradu","tags":["rxjs","event-forwarding","angular"]},"prevItem":{"title":"JS Event Handling","permalink":"/blog/js-event-handling"},"nextItem":{"title":"RxJS Spartacus Analytics","permalink":"/blog/rx-js-sap-composable-storefront-events"}},"content":"```typescript\\r\\n@Component({\\r\\n  selector: \'my-app\',\\r\\n  standalone: true,\\r\\n  imports: [CommonModule],\\r\\n  templateUrl: \'./comp.html\',\\r\\n})\\r\\nexport class App implements OnInit {\\r\\n  name = \'Angular\';\\r\\n\\r\\n  extras$ = of({ extra: \'extra data for event\' });\\r\\n\\r\\n  array = [\'A\', \'B\', \'C\', \'D\', \'E\'];\\r\\n\\r\\n  event$ = interval(1000).pipe(\\r\\n    take(this.array.length),\\r\\n    map((i) => this.array[i])\\r\\n  );\\r\\n\\r\\n  ngOnInit() {\\r\\n    this.event$.subscribe((ev) => {\\r\\n      this.extras$.pipe(take(1)).subscribe((r) => {\\r\\n        console.log(\'Throw new event with: \', r, ev);\\r\\n      });\\r\\n    });\\r\\n  }\\r\\n}\\r\\n```"},{"id":"rx-js-sap-composable-storefront-events","metadata":{"permalink":"/blog/rx-js-sap-composable-storefront-events","editUrl":"https://github.com/xdanradu/xdanradu.github.io/tree/master/docusaurus/blog/2023-07-12-rx-js-sap-composable-storefront-analytics.md","source":"@site/blog/2023-07-12-rx-js-sap-composable-storefront-analytics.md","title":"RxJS Spartacus Analytics","description":"_clear flag is required to disable automatic object merging by GTM dataLayer on SPA","date":"2023-07-12T00:00:00.000Z","formattedDate":"July 12, 2023","tags":[{"label":"rxjs","permalink":"/blog/tags/rxjs"},{"label":"sap-composable-storefront","permalink":"/blog/tags/sap-composable-storefront"},{"label":"spartacus","permalink":"/blog/tags/spartacus"},{"label":"angular","permalink":"/blog/tags/angular"},{"label":"analytics","permalink":"/blog/tags/analytics"}],"readingTime":1.435,"hasTruncateMarker":false,"authors":[{"name":"Dan Radu","title":"Admin","url":"https://danradu.ro","imageURL":"https://github.com/xdanradu.png","key":"dradu"}],"frontMatter":{"slug":"rx-js-sap-composable-storefront-events","title":"RxJS Spartacus Analytics","authors":"dradu","tags":["rxjs","sap-composable-storefront","spartacus","angular","analytics"]},"prevItem":{"title":"RxJS Event Forwarding","permalink":"/blog/rx-js-event-forwarding"},"nextItem":{"title":"RxJS Loading Flag","permalink":"/blog/rx-js-loading-flag"}},"content":"```typescript\\r\\n    provideConfig({\\r\\n      tagManager: {\\r\\n        gtm: {\\r\\n          events: [TmsAnalyticsEvent],\\r\\n          gtmId: \'XXX\'\\r\\n        }\\r\\n      }\\r\\n    } as TmsConfig)\\r\\n```\\r\\n\\r\\n# Custom event that extends CxEvent\\r\\n\\r\\n```typescript\\r\\nexport class TmsAnalyticsEvent extends CxEvent {\\r\\n  event: string;\\r\\n  _clear: boolean;\\r\\n\\r\\n  constructor(eventName: string) {\\r\\n    super();\\r\\n    this.event = eventName;\\r\\n    this._clear = true;\\r\\n  }\\r\\n}\\r\\n```\\r\\n\\r\\n_clear flag is required to disable automatic object merging by GTM dataLayer on SPA\\r\\nSource: https://github.com/google/data-layer-helper#preventing-default-recursive-merge\\r\\n\x3c!-- Smart component template --\x3e\\r\\n\\r\\n# Custom interface to map SPA with TMS\\r\\n\\r\\n```typescript\\r\\nexport enum TmsEventName {\\r\\n  viewCart = \'view_cart\',\\r\\n  addToCart = \'add_to_cart\'\\r\\n}\\r\\nexport interface TmsCustomPayload {\\r\\n  checkout_type: string;\\r\\n  currency: string;\\r\\n  items: TmsProduct[];\\r\\n}\\r\\n\\r\\nexport class TmsCustomEvent extends TmsAnalyticsEvent {\\r\\n  ecommerce: TmsCustomPayload;\\r\\n  constructor(eventName: TmsEventName, payload: TmsCustomPayload) {\\r\\n    super(eventName);\\r\\n    this.ecommerce = payload;\\r\\n  }\\r\\n}\\r\\n```\\r\\n\\r\\n# Custom services that capture default events and dispatch TmsAnalyticsEvent\\r\\n\\r\\n```typescript\\r\\nexport abstract class CustomAnalyticsEventService {\\r\\n  protected subscriptions = new Subscription();\\r\\n\\r\\n  abstract enableTracking(): void;\\r\\n  destroy(): void {\\r\\n    this.subscriptions.unsubscribe();\\r\\n  }\\r\\n}\\r\\n\\r\\n@Injectable({ providedIn: \'root\' })\\r\\n             export class CustomViewCartEventService extends CustomAnalyticsEventService {\\r\\n               constructor(protected events: EventService, protected cartService: ActiveCartService) {\\r\\n                 super();\\r\\n               }\\r\\n             \\r\\n               enableTracking(): void {\\r\\n                 this.subscriptions.add(\\r\\n                   this.events.get(CartPageEvent).subscribe((_) => {\\r\\n                     this.cartService.getActive().pipe(take(1)).subscribe(\\r\\n                        data => {\\r\\n                          //here we can map it to the required interface\\r\\n                          const payload = data;\\r\\n                          this.events.dispatch(new TmsCustomEvent(TmsEventName.viewCart, payload));\\r\\n                        }\\r\\n                     )\\r\\n                   })\\r\\n                 );\\r\\n               }\\r\\n             }\\r\\n```\\r\\n\\r\\n# Core service that enable required events\\r\\n\\r\\n```typescript\\r\\n@Injectable({ providedIn: \'root\' })\\r\\nexport class CustomAnalyticsService {\\r\\n  constructor(\\r\\n    protected viewCartEventService: CustomViewCartEventService,\\r\\n    protected addToCartEventService: CustomAddToCartEventService\\r\\n  ) {}\\r\\n\\r\\n  trackEvents(): void {\\r\\n    this.viewCartEventService.enableTracking();\\r\\n    this.addToCartEventService.enableTracking();\\r\\n  }\\r\\n\\r\\n  destroy(): void {\\r\\n    this.viewCartEventService.destroy();\\r\\n    this.addToCartEventService.destroy();\\r\\n  }\\r\\n}\\r\\n```\\r\\n\\r\\n# Enable analytics service from app component\\r\\n\\r\\n```typescript\\r\\n@Component({\\r\\n  selector: \'app-root\',\\r\\n  templateUrl: \'./app.component.html\'\\r\\n})\\r\\nexport class AppComponent implements OnInit, OnDestroy {\\r\\n  constructor(protected customAnalyticsService: CustomAnalyticsService) {}\\r\\n\\r\\n  public ngOnInit(): void {\\r\\n    if (ENVIRONMENT.analyticsEnabled) {\\r\\n      this.customAnalyticsService.trackEvents();\\r\\n    }\\r\\n  }\\r\\n\\r\\n  public ngOnDestroy(): void {\\r\\n    if (ENVIRONMENT.analyticsEnabled) {\\r\\n      this.customAnalyticsService.destroy();\\r\\n    }\\r\\n  }\\r\\n}\\r\\n```"},{"id":"rx-js-loading-flag","metadata":{"permalink":"/blog/rx-js-loading-flag","editUrl":"https://github.com/xdanradu/xdanradu.github.io/tree/master/docusaurus/blog/2023-06-17-rx-js-is-loading.md","source":"@site/blog/2023-06-17-rx-js-is-loading.md","title":"RxJS Loading Flag","description":"How to implement the isLoading flag:","date":"2023-06-17T00:00:00.000Z","formattedDate":"June 17, 2023","tags":[{"label":"rxjs","permalink":"/blog/tags/rxjs"},{"label":"essentials","permalink":"/blog/tags/essentials"},{"label":"is-loading-flag","permalink":"/blog/tags/is-loading-flag"}],"readingTime":1.08,"hasTruncateMarker":false,"authors":[{"name":"Dan Radu","title":"Admin","url":"https://danradu.ro","imageURL":"https://github.com/xdanradu.png","key":"dradu"}],"frontMatter":{"slug":"rx-js-loading-flag","title":"RxJS Loading Flag","authors":"dradu","tags":["rxjs","essentials","is-loading-flag"]},"prevItem":{"title":"RxJS Spartacus Analytics","permalink":"/blog/rx-js-sap-composable-storefront-events"},"nextItem":{"title":"RxJS Pluck Operator","permalink":"/blog/rx-js-pluck"}},"content":"How to implement the isLoading flag:\\r\\n\\r\\n```typescript\\r\\nexport interface HttpRequestState<T> {\\r\\n  isLoading: boolean;\\r\\n  value?: T;\\r\\n  error?: HttpErrorResponse | Error;\\r\\n}\\r\\n\\r\\nexport class SomeComponent {\\r\\n  constructor(\\r\\n    private readonly activatedRoute: ActivatedRoute,\\r\\n    private readonly myDataService: MyDataService\\r\\n  ) {}\\r\\n\\r\\n  readonly myDataState$: Observable<HttpRequestState<MyData>> = this.activatedRoute.params.pipe(\\r\\n    pluck(\'id\'),\\r\\n    switchMap(\\r\\n      (id) => this.myDataService.getMyData(id).pipe(\\r\\n        map((value) => ({isLoading: false, value})),\\r\\n        catchError(error => of({isLoading: false, error})),\\r\\n        startWith({isLoading: true})\\r\\n      )\\r\\n    ),\\r\\n  );\\r\\n}\\r\\n```\\r\\n\\r\\n```html\\r\\n<ng-container *ngIf=\\"myDataState$ | async as data\\">\\r\\n  <my-loading-spinner *ngIf=\\"data.isLoading\\"></my-loading-spinner>\\r\\n  <my-error-component *ngIf=\\"data.error\\" [error]=\\"data.error\\"></my-error-component>\\r\\n  <my-data-component *ngIf=\\"data.value\\" [data]=\\"data.value\\"></my-data-component>\\r\\n</ng-container>\\r\\n```\\r\\n\\r\\n# Improved separation of concerns\\r\\n```js\\r\\n// presentational component class\\r\\nexport class SomeLayoutComponent {\\r\\n  @Input()\\r\\n  state: HttpRequestState<MyData>;\\r\\n}\\r\\n```\\r\\n\\r\\n```html\\r\\n\x3c!-- Presentational component template --\x3e\\r\\n<my-loading-spinner *ngIf=\\"state.isLoading\\"></my-loading-spinner>\\r\\n<my-error-component *ngIf=\\"state.error\\" [error]=\\"state.error\\"></my-error-component>\\r\\n<my-data-component *ngIf=\\"state.value\\" [data]=\\"state.value\\"></my-data-component>\\r\\n```\\r\\n\\r\\n```html\\r\\n\x3c!-- Smart component template --\x3e\\r\\n<some-layout-component\\r\\n  [state]=\\"myDataState$ | async\\"\\r\\n></some-layout-component>\\r\\n```\\r\\n\\r\\n# Or separated observables\\r\\n```typescript\\r\\nexport class SomeComponent {\\r\\n  constructor(\\r\\n    private readonly activatedRoute: ActivatedRoute,\\r\\n    private readonly myDataService: MyDataService\\r\\n  ) {}\\r\\n\\r\\n  readonly myDataState$: Observable<HttpRequestState<MyData>> = this.activatedRoute.params.pipe(\\r\\n    pluck(\'id\'),\\r\\n    switchMap(\\r\\n      (id) => this.myDataService.getMyData(id).pipe(\\r\\n        map((value) => ({isLoading: false, value})),\\r\\n        catchError(error => of({isLoading: false, error})),\\r\\n        startWith({isLoading: true}),\\r\\n        shareReplay(1) // Added shareReplay to allow multicasting this\\r\\n      )\\r\\n    ),\\r\\n  );\\r\\n\\r\\n  readonly loading$ = this.myDataState$.pipe(map(state => state.isLoading));\\r\\n  readonly error$ = this.myDataState$.pipe(map(state => state.error));\\r\\n  readonly myData$ = this.myDataState$.pipe(map(state => state.data));\\r\\n}\\r\\n```\\r\\n\\r\\nshareReplay(1) is preferred over share() for robustness, as it ensures none of the subscriptions miss the initial state."},{"id":"rx-js-pluck","metadata":{"permalink":"/blog/rx-js-pluck","editUrl":"https://github.com/xdanradu/xdanradu.github.io/tree/master/docusaurus/blog/2023-06-17-rx-js-pluck.md","source":"@site/blog/2023-06-17-rx-js-pluck.md","title":"RxJS Pluck Operator","description":"","date":"2023-06-17T00:00:00.000Z","formattedDate":"June 17, 2023","tags":[{"label":"rxjs","permalink":"/blog/tags/rxjs"},{"label":"essentials","permalink":"/blog/tags/essentials"},{"label":"pluck","permalink":"/blog/tags/pluck"}],"readingTime":0.22,"hasTruncateMarker":false,"authors":[{"name":"Dan Radu","title":"Admin","url":"https://danradu.ro","imageURL":"https://github.com/xdanradu.png","key":"dradu"}],"frontMatter":{"slug":"rx-js-pluck","title":"RxJS Pluck Operator","authors":"dradu","tags":["rxjs","essentials","pluck"]},"prevItem":{"title":"RxJS Loading Flag","permalink":"/blog/rx-js-loading-flag"},"nextItem":{"title":"MDX Blog Post","permalink":"/blog/mdx-blog-post"}},"content":"```typescript\\r\\nimport { from } from \'rxjs\';\\r\\nimport { pluck } from \'rxjs/operators\';\\r\\n\\r\\nconst source = from([{ name: \'Joe\', age: 30 }, { name: \'Sarah\', age: 35 }]);\\r\\n//grab names\\r\\nconst example = source.pipe(pluck(\'name\'));\\r\\n//output: \\"Joe\\", \\"Sarah\\"\\r\\nconst subscribe = example.subscribe(val => console.log(val));\\r\\n```"},{"id":"mdx-blog-post","metadata":{"permalink":"/blog/mdx-blog-post","editUrl":"https://github.com/xdanradu/xdanradu.github.io/tree/master/docusaurus/blog/2021-08-01-mdx-blog-post.mdx","source":"@site/blog/2021-08-01-mdx-blog-post.mdx","title":"MDX Blog Post","description":"Blog posts support Docusaurus Markdown features, such as MDX.","date":"2021-08-01T00:00:00.000Z","formattedDate":"August 1, 2021","tags":[{"label":"docusaurus","permalink":"/blog/tags/docusaurus"}],"readingTime":0.175,"hasTruncateMarker":false,"authors":[{"name":"Dan Radu","title":"Admin","url":"https://danradu.ro","imageURL":"https://github.com/xdanradu.png","key":"dradu"}],"frontMatter":{"slug":"mdx-blog-post","title":"MDX Blog Post","authors":["dradu"],"tags":["docusaurus"]},"prevItem":{"title":"RxJS Pluck Operator","permalink":"/blog/rx-js-pluck"},"nextItem":{"title":"First Blog Post","permalink":"/blog/first-blog-post"}},"content":"Blog posts support [Docusaurus Markdown features](https://docusaurus.io/docs/markdown-features), such as [MDX](https://mdxjs.com/).\\n\\n:::tip\\n\\nUse the power of React to create interactive blog posts.\\n\\n```js\\n<button onClick={() => alert(\'button clicked!\')}>Click me!</button>\\n```\\n\\n<button onClick={() => alert(\'button clicked!\')}>Click me!</button>\\n\\n:::"},{"id":"first-blog-post","metadata":{"permalink":"/blog/first-blog-post","editUrl":"https://github.com/xdanradu/xdanradu.github.io/tree/master/docusaurus/blog/2019-05-28-first-blog-post.md","source":"@site/blog/2019-05-28-first-blog-post.md","title":"First Blog Post","description":"","date":"2019-05-28T00:00:00.000Z","formattedDate":"May 28, 2019","tags":[{"label":"intro","permalink":"/blog/tags/intro"}],"readingTime":0,"hasTruncateMarker":false,"authors":[{"name":"Dan Radu","title":"Admin","url":"https://danradu.ro","imageURL":"https://github.com/xdanradu.png","key":"dradu"}],"frontMatter":{"slug":"first-blog-post","title":"First Blog Post","authors":"dradu","tags":["intro"]},"prevItem":{"title":"MDX Blog Post","permalink":"/blog/mdx-blog-post"}},"content":""}]}')}}]);