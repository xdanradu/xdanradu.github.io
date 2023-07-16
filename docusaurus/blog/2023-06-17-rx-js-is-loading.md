---
slug: rx-js-loading-flag
title: RxJS Loading Flag
authors: dradu

tags: [rxjs, essentials, is-loading-flag]
---

Ways to implement the isLoading flag

```typescript
export interface HttpRequestState<T> {
  isLoading: boolean;
  value?: T;
  error?: HttpErrorResponse | Error;
}

export class SomeComponent {
  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly myDataService: MyDataService
  ) {}

  readonly myDataState$: Observable<HttpRequestState<MyData>> = this.activatedRoute.params.pipe(
    pluck('id'),
    switchMap(
      (id) => this.myDataService.getMyData(id).pipe(
        map((value) => ({isLoading: false, value})),
        catchError(error => of({isLoading: false, error})),
        startWith({isLoading: true})
      )
    ),
  );
}
```

```html
<ng-container *ngIf="myDataState$ | async as data">
  <my-loading-spinner *ngIf="data.isLoading"></my-loading-spinner>
  <my-error-component *ngIf="data.error" [error]="data.error"></my-error-component>
  <my-data-component *ngIf="data.value" [data]="data.value"></my-data-component>
</ng-container>
```

# Improved separation of concerns
```js
// presentational component class
export class SomeLayoutComponent {
  @Input()
  state: HttpRequestState<MyData>;
}
```

```html
<!-- Presentational component template -->
<my-loading-spinner *ngIf="state.isLoading"></my-loading-spinner>
<my-error-component *ngIf="state.error" [error]="state.error"></my-error-component>
<my-data-component *ngIf="state.value" [data]="state.value"></my-data-component>
```

```html
<!-- Smart component template -->
<some-layout-component
  [state]="myDataState$ | async"
></some-layout-component>
```

# Or separated observables
```typescript
export class SomeComponent {
  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly myDataService: MyDataService
  ) {}

  readonly myDataState$: Observable<HttpRequestState<MyData>> = this.activatedRoute.params.pipe(
    pluck('id'),
    switchMap(
      (id) => this.myDataService.getMyData(id).pipe(
        map((value) => ({isLoading: false, value})),
        catchError(error => of({isLoading: false, error})),
        startWith({isLoading: true}),
        shareReplay(1) // Added shareReplay to allow multicasting this
      )
    ),
  );

  readonly loading$ = this.myDataState$.pipe(map(state => state.isLoading));
  readonly error$ = this.myDataState$.pipe(map(state => state.error));
  readonly myData$ = this.myDataState$.pipe(map(state => state.data));
}
```

shareReplay(1) is preferred over share() for robustness, as it ensures none of the subscriptions miss the initial state.
