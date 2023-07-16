---
slug: rx-js-sap-composable-storefront-events
title: RxJS Spartacus Analytics
authors: dradu

tags: [rxjs, sap-composable-storefront, spartacus, angular, analytics]
---

# Spartacus configuration goes into spartacus-configuration.module.ts

```typescript
    provideConfig({
      tagManager: {
        gtm: {
          events: [TmsAnalyticsEvent],
          gtmId: 'XXX'
        }
      }
    } as TmsConfig)
```

# Custom event that extends CxEvent

```typescript
export class TmsAnalyticsEvent extends CxEvent {
  event: string;
  _clear: boolean;

  constructor(eventName: string) {
    super();
    this.event = eventName;
    this._clear = true;
  }
}
```

_clear flag is required to disable automatic object merging by GTM dataLayer on SPA
Source: https://github.com/google/data-layer-helper#preventing-default-recursive-merge
<!-- Smart component template -->

# Custom interface to map SPA with TMS

```typescript
export enum TmsEventName {
  viewCart = 'view_cart',
  addToCart = 'add_to_cart'
}
export interface TmsCustomPayload {
  checkout_type: string;
  currency: string;
  items: TmsProduct[];
}

export class TmsCustomEvent extends TmsAnalyticsEvent {
  ecommerce: TmsCustomPayload;
  constructor(eventName: TmsEventName, payload: TmsCustomPayload) {
    super(eventName);
    this.ecommerce = payload;
  }
}
```

# Custom services that capture default events and dispatch TmsAnalyticsEvent

```typescript
export abstract class CustomAnalyticsEventService {
  protected subscriptions = new Subscription();

  abstract enableTracking(): void;
  destroy(): void {
    this.subscriptions.unsubscribe();
  }
}

@Injectable({ providedIn: 'root' })
             export class CustomViewCartEventService extends CustomAnalyticsEventService {
               constructor(protected events: EventService, protected cartService: ActiveCartService) {
                 super();
               }
             
               enableTracking(): void {
                 this.subscriptions.add(
                   this.events.get(CartPageEvent).subscribe((_) => {
                     this.cartService.getActive().pipe(take(1)).subscribe(
                        data => {
                          //here we can map it to the required interface
                          const payload = data;
                          this.events.dispatch(new TmsCustomEvent(TmsEventName.viewCart, payload));
                        }
                     )
                   })
                 );
               }
             }
```

# Core service that enable required events

```typescript
@Injectable({ providedIn: 'root' })
export class CustomAnalyticsService {
  constructor(
    protected viewCartEventService: CustomViewCartEventService,
    protected addToCartEventService: CustomAddToCartEventService
  ) {}

  trackEvents(): void {
    this.viewCartEventService.enableTracking();
    this.addToCartEventService.enableTracking();
  }

  destroy(): void {
    this.viewCartEventService.destroy();
    this.addToCartEventService.destroy();
  }
}
```

# Enable analytics service from app component

```typescript
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit, OnDestroy {
  constructor(protected customAnalyticsService: CustomAnalyticsService) {}

  public ngOnInit(): void {
    if (ENVIRONMENT.analyticsEnabled) {
      this.customAnalyticsService.trackEvents();
    }
  }

  public ngOnDestroy(): void {
    if (ENVIRONMENT.analyticsEnabled) {
      this.customAnalyticsService.destroy();
    }
  }
}
```
